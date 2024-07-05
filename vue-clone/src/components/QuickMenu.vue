<template>
    <div class="quick-menu">
        <ul>
            <li><a href="javascript:;" @click.prevent="showStartProject">프로젝트 문의</a></li>
            <li><a href="javascript:;" @click.prevent="moveActor('/team')">채용 문의</a></li>
            <li><a href="javascript:;" @click.prevent="moveActor('/prd')" >디자인 시스템</a></li>
            <li><a href="https://blog.pulip.com" target="_blank" title="새창열림">플립보드 문의</a></li>
        </ul>
    </div>
</template>

<script>
import { computed } from 'vue';
import { useRouter } from 'vue-router';
import common from '@/shared/mixin/common.js';

export default {
    mixins:[common],
    name:'QuickMenu',
    setup(){
        const router = useRouter();
        const moveActor = (path) => {
            router.push(path);
        }
        return {
            moveActor 
        }

    }
}
</script>