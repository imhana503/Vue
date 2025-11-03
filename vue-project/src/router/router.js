import { createWebHistory, createRouter } from "vue-router";
import TitlePage from "../components/TitlePage.vue";
import Portfolio from "../components/Portfolio.vue";
import About from "../components/About.vue";
import Detail from "../components/Detail.vue";

const router = createRouter({
    history: createWebHistory(),
    routes: [
        { path: '/', component:TitlePage, name:'TitlePage' },
        { path: '/about', component:About, name:'About' },
        { path: '/portfolio', component:Portfolio, name:'Portfolio' },
        { path: '/detail/:id', component:Detail, name:'Detail' },
    ]
});

export default router;