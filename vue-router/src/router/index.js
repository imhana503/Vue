import { createRouter, createWebHistory } from 'vue-router';
import Home from './../pages/Home.vue';
import About from './../pages/About.vue';
import User from './../pages/User.vue';
import UserLayout from './../pages/UserLayout.vue';
import UserProfile from './../pages/UserProfile.vue';
import UserPosts from './../pages/UserPosts.vue';
import NotFound from './../pages/NotFound.vue';



const routes = [
  { path: '/', name: 'Home', component: Home },
  { path: '/about', name: 'About', component: About },
  //{ path: '/user/:id', name: 'User', component: User }
  { 
    path: '/user/:id', 
    name: 'User',     
    component: UserLayout,  
    children: [
      { path: '', component: UserProfile, name: 'UserProfile' },
      { path: 'posts', component: UserPosts, name: 'UserPosts' }
    ]
   },
   { path: '/:pathMatch(.*)*', name: 'NotFound', component: NotFound } //404 페이지(존재하지 않는 경로)
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

//isLoggedIn 확인용 임시 코드
function isLoggedIn() {
  return false;
}

//라우트 이동 시 특정 조건을 체크 가능
router.beforeEach((to, from, next)=>{
  console.log(to.name)
  if(to.name === 'About' && !isLoggedIn()) {    
    next('/'); // 로그인 안했으면 홈으로 이동
  } else {
    next(); // 정상 이동
  }
});

export default router;