<template>
    <div
        :class="[
            recruitPop ? 'typeClose white' : '',
            readyAction ? 'ready-action' : '',
            navigation ? 'typeClose' : '',
        ]" 
        class="rnb"
    >
      <div class="menu">
          <a href="#" @click.prevent.stop="handleNavigationCall"/>
      </div>
      <MenuArea/>
    </div>
</template>

<script>
import { mapActions, mapState, useStore } from 'vuex';
import { useRoute, useRouter } from 'vue-router';
import { onMounted, watchEffect, defineComponent, computed } from 'vue';

import MenuArea from '@/components/MenuArea';

export default defineComponent({
  name:'RNB',
  components:{  
    MenuArea
  },
  setup(){
    const store = useStore();
    const route = useRoute();
    const router = useRouter();

   
    // Vuex 상태를 가져오는 computed 속성 정의
    const recruitPop = computed(() => store.state.common.recruitPop);
    const pdsPop = computed(() => store.state.common.pdsPop);
    const readyAction = computed(() => store.state.common.readyAction);
    const navigation = computed(() =>  store.state.common.navigation);
    
    const handleNavigationCall = (event) => {
      event.preventDefault();
      event.stopPropagation(); // 이벤트 전파 중단


      if( route.path === '/recruit' ){
        if( window.history.length === 1 ){
          router.push('/')
        } else {
          router.back();
        }
        store.dispatch('common/setRecruitPop', false);
        return;
      }
      
      store.dispatch('common/setNavigation', !navigation.value);
    }

    return {
      recruitPop,
      pdsPop,
      readyAction,
      navigation,
      handleNavigationCall
    }
  }
})
  

</script>
<style lang="scss">

</style>