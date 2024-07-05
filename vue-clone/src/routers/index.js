import { createWebHistory, createRouter } from "vue-router";

import Main from "@/pages/Main";
import Works from "@/pages/Works";
import Culture from "@/pages/Culture";
import Contack from "@/pages/Contack";

import RecruitPop from "@/components/RecruitPop";


const router = createRouter({
    history:createWebHistory(),
    routes:[
        { path: "/", name:"main", component: Main },
        { path: "/works", name:"works", component: Works },
        { path: "/culture", name:"culture", component: Culture },
        { path: "/contack", name:"contack", component: Contack },

        { path: "/team", redirect: '/recruit' },
        { path: '/recruit', component: Main },

        { path: "/prd", redirect: '/recruit' },
        { path: '/recruit', component: RecruitPop },
    ]
});

export default router;