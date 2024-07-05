<template>
    <div
        :class="efClass" 
        class="nav-wrap">
        <div class="nav-wrap-in">
            <Header/>
            <!-- .nav_menuArea -->
            <div class="nav_menuArea contentsBox">
                <div class="navList web">
                    <nav class="nav_menu">
                        <ul>
                            <li :class="isAcive('works')">
                                <router-link to="/works">프로젝트</router-link>
                            </li>
                            <li :class="isAcive('culture')">
                                <router-link to="/culture">기업문화</router-link>
                            </li>
                            <li :class="isAcive('contack')">
                                <router-link to="/contack">문의하기</router-link>
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>
            <!--// .nav_menuArea -->

            <!-- .nav_footer -->
            <footer class="nav_footer web">
                <div class="copyRight">
                    <div>
                        <span>Do you need help?</span>
                        <a href="mailto:hi@pulip.com">hi@pulip.com</a>
                    </div>
                </div>
                <div class="ftrBtn">
                    <ul>
                        <li><a href="https://www.pulip.com/companyinfo">회사소개서</a></li>
                        <li><a href="javascript:;" @click.prevent="showPrivacyPolicyPop">개인정보정책<span /></a> </li>
                    </ul>
                </div>
            </footer>
            <!--// .nav_footer -->

            <div class="quick_btn">
                <a href="">프로젝트 문의</a>
                <a href="javascript:;" @click.prevent="moveActor('/team')">채용 문의</a>
                <a href="javascript:;" @click.prevent="moveActor('/prd')">디자인 시스템</a>
            </div>
        </div>  
        
        <PrivacyPolicy/>
    </div>   
</template>
<script>
import { computed, watch, ref, defineComponent } from "vue";
import { useStore } from 'vuex';
import { useRoute, useRouter } from 'vue-router';
import Header from './Header';
import PrivacyPolicy from './PrivacyPolicy';

export default defineComponent({
    name:'MenuArea',
    components:{
        Header,
        PrivacyPolicy
    },  
    setup(){
        const store = useStore();
        const navigation = computed(()=> store.state.common.navigation);

        const route = useRoute()
        const router = useRouter();

        const efClass = ref('');

        const isAcive = (routerName) => {
            return route.name === routerName ? 'active' : ''
        }

        const showPrivacyPolicyPop = () => {
            store.dispatch('common/setPrivacyPolicyPop', true);
        }

        const moveActor = (path) => {
            router.push(path)
        }

        watch(navigation, (newValue)=>{
            if( newValue ){
                efClass.value = 'active';
            } else {
                efClass.value = 'leave';
                setTimeout(()=>{
                    efClass.value = '';
                })
            }
        });

        return {
            efClass,
            navigation,
            isAcive,
            showPrivacyPolicyPop,
            moveActor
            
        }
    }
})
</script>