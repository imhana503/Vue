import { createApp } from 'vue'
import './style.css';
import App from './App.vue';

/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core';

/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';


/* 사용할 아이콘 불러오기 */
import { faUserSecret } from '@fortawesome/free-solid-svg-icons'
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';

import store from './store/store';

/* add icons to the library */
library.add(faUserSecret);
library.add(faBars);
library.add(faMagnifyingGlass);


createApp(App)
    .use(store)
    .component('font-awesome-icon', FontAwesomeIcon)
    .mount('#app')
