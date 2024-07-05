<template>
    <div :class="efClass" class="popArea">
        <div class="defaultSect2 bkPop defaultPop">
            <div class="divInner">
                <div class="bkPop_in_ico">
                    <span class="ico_write">
                        <img src="@/assets/images/@ico_recruit.png" alt="" />
                    </span>
                </div>

                
                <div class="topPop web">
                    <div class="defaultSect2Text">
                        <span>우리와 함께 더 좋은 디지털 세상을 만들어봐요.</span>
                    </div>
                </div>

                <div class="topPop mobile">
                    <div class="defaultSect2Text">
                        <span>우리와 함께 더 좋은 </span>
                        <span>디지털 세상을 만들어봐요.</span>
                    </div>
                </div>

                <div class="writeConArea recruitPop">
                    <div class="rotateText">
                        <p>
                            <span>우리와 함께해요 :P</span>
                        </p>
                    </div>

                    <div class="arrow_action">
                        <div class="arrow_inr">&nbsp;</div>
                    </div>

                </div>
            </div>
        </div>
    </div>
    
</template>
<script>
import { computed, watch, ref } from 'vue';
import { useRoute } from 'vue-router';
import { useStore } from 'vuex';

export default {
    name:'RecruitPop',
    setup(){
        const store = useStore(); 
        const route = useRoute();

        const efClass = ref('');

        const recruitPop = computed(()=> store.state.common.recruitPop);       

        watch( 
            ()=> route.path,
            (newPath, oldPath)=>{
                if( newPath === '/recruit' ){
                    store.dispatch('common/setRecruitPop', true);
                }
            }
        )

        watch(recruitPop, (newValue)=>{
            if( newValue ){
                efClass.value = 'active'
            } else {
                efClass.value = 'leave';
                setTimeout(()=>{
                    efClass.value = '';
                }, 600)
            }
           
        })

        return {
            efClass
        }
    }

    
}
</script>