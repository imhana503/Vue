<template>
    <div
        :class="efClass" 
        class="policyArea">
        <button @click="hidePrivacyPolicyPop">닫기버튼</button>
        PrivacyPolicy
    </div>
   
</template>
<script>
import { defineComponent, ref, watch, computed } from 'vue';
import { useStore } from 'vuex';

export default defineComponent({
    name:'PrivacyPolicy',
    setup(){
        const store = useStore();
        const efClass = ref('');

        const privacyPolicyPop = computed(()=> store.state.common.privacyPolicyPop);
        
        const hidePrivacyPolicyPop = () => {
            console.log('닫기버튼')
            store.dispatch('common/setPrivacyPolicyPop', false);
        }

        watch(privacyPolicyPop, (newValue)=>{
            console.log(newValue)
            if( newValue ){
                efClass.value = 'active';
            } else {
                efClass.value = 'leave';
                setTimeout(()=>{
                    efClass.value = '';
                })
            }
        })

        return {
            efClass,
            hidePrivacyPolicyPop
        }
    }
});
</script>