<script>
export default{
    name:'TreeItem',
    props:{
        model:Object
    },
    data(){
        return{
            isOpen: false
        }
    },
    computed:{
        isFolder(){
            return this.model.children && this.model.children.length
        }
    },
    methods:{
        toggle(){
            if(this.isFolder){
                this.isOpen = !this.isOpen;
            }
        },
        addChild(){
            this.model.children.push({
                name: 'new stuff'
            })
        }
    }
}
</script>
<template>  
   <li>
        <div 
            :class="{ bold : isFolder }"
            @click="toggle"
        >
            {{ model.name }}
            <span v-if="isFolder">[{{ isOpen ? '-' : '+' }}]</span>
        </div>
        <ul v-show="isOpen" v-if="isFolder">
            <TreeItem 
                class="item"
                v-for="model in model.children"
                :model="model"
            />
            <li class="add" @click="addChild">+</li>
        </ul>
        
   </li>
</template>