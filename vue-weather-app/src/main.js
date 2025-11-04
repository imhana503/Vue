import { createApp } from 'vue'
import './style.css'
import App from './App.vue';
import { createStore } from 'vuex';

/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core';

/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

/* 사용할 아이콘 불러오기 */
import { faBarsStaggered, faLocationDot, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'


/* add icons to the library */
library.add(faBarsStaggered, faLocationDot, faMagnifyingGlass);

createApp(App)
  .use(createStore)
  .component('font-awesome-icon', FontAwesomeIcon)
  .mount('#app')
