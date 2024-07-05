import { mapActions } from 'vuex';
export default {
    data(){
        return {}
    },
    methods:{
       
        ...mapActions('common', [
            'setRecruitPop',
            'setNavigation',
            'setPrivacyPolicyPop'
            // 다른 필요한 액션들을 추가로 매핑할 수 있음
        ]),
        imglink(url){
            if(url != ''){
                return `/src/assets/images/${url}`;
            }
        },
        showStartProject(){
            console.log('shoState')
        }
    }
}