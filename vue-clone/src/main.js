import "@/assets/css/app.scss";
import "@/assets/css/motion.scss";

import { createApp } from 'vue';
import App from './App.vue';

import routers from '@/routers';
import store from "@/store"; 


createApp(App)
    .use(routers)
    .use(store)
    .mount('#app')
