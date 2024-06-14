<script>
const API_URL = `https://api.github.com/repos/vuejs/core/commits?per_page=3&sha=`;

export default {
    data(){
        return{
            branches:['main', 'v2-compat'],
            currentBranch:'main',
            commits:null,
        }
    },
    methods:{
        async fetchData(){
            const url = `${API_URL}${this.currentBranch}`;
            this.commits = await (await fetch(url)).json();
        },
        truncate(v){ // 정규식 표현 https://www.google.com/search?q=replace(%2FT%7CZ%2Fg%2C+%27+%27)&oq=replace(%2FT%7CZ%2Fg%2C+%27+%27)&gs_lcrp=EgZjaHJvbWUyBggAEEUYOTIICAEQABgNGB4yCAgCEAAYDRgeMgoIAxAAGAgYDRgeMgoIBBAAGAgYDRgeMgoIBRAAGIAEGKIEMgoIBhAAGAgYDRge0gEIMjY2MmowajeoAgCwAgA&sourceid=chrome&ie=UTF-8
            const newline = v.indexOf('\n');
            return newline > 0 ? v.slice(0, newline) : v
        },
        formatDate(v){
            return v.replace(/T|Z/g, ' ');  // 정규식 표현
           
        }
    },
    watch:{
        currentBranch: 'fetchData'
    },
    created(){
        this.fetchData();
    }

}

</script>



<template>
    <h1>Latest Vue Core Commits</h1>
    <template v-for="branch in branches">
        <input
            type="radio"
            :id="branch"
            :value="branch"
            name="branch"
            v-model="currentBranch"
        />
        <label :for="branch">{{ branch }}</label>
    </template>
    <p>vuejs/vue@ {{ currentBranch }}</p>
    <ul>
        <li v-for="{ html_url, sha, author, commit } in commits">
            <a :href="html_url" target="_blank" class="commit">{{ sha.slice(0,7) }}</a>
            <span class="message">{{ truncate(commit.message) }}</span>
            <span class="author">
                <a :href="author.html_url">{{ commit.author.name }}</a>
            </span>
            <span class="date">{{ formatDate(commit.author.date) }}</span>
        </li>
    </ul>
</template>

<style scoped>
a {
  text-decoration: none;
  color: #42b883;
}
li {
  line-height: 1.5em;
  margin-bottom: 20px;
}
.author,
.date {
  font-weight: bold;
}
</style>