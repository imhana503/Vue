<template>
    <router-view/>
    <RecruitPop/>
    <RNB/>
</template>

<script>
import { computed } from 'vue';
import { useStore } from 'vuex';

import RecruitPop from '@/components/RecruitPop'; //팝업
import RNB from '@/components/RNB'; //팝업

export default {
    name : 'App',
    components:{
        RecruitPop,
        RNB
    }
}



</script>

<style scoped>
</style>


