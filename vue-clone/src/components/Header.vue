<template>
  <header
    :class="readyAction ? 'ready-action' : ''"
  >
    <div class="fl">
      <QuickMenu/>
    </div>
    <div class="fr">
      <QuickLink/>
    </div>
  </header>
</template>

<script>
import { computed } from 'vue';
import { useStore } from 'vuex';
import QuickMenu from './QuickMenu';
import QuickLink from './QuickLink';

export default{
    name:'Header',
    components:{
      QuickMenu,
      QuickLink
    },
    setup(){
        const store = useStore();
        const readyAction = computed(()=> store.state.common.readyAction);
        return {
            readyAction
        }
    }
}
</script>

<style scoped>
</style>
