import { defineStore } from 'pinia';

export const useAuthStore = defineStore('auth', { //'auth' - 스토어의 고유 이름
  //스토어의 상태(state) 를 정의
  state:()=> ({
    user: JSON.parse(localStorage.getItem('user')) || null,
  }),
  getters: {
    isLoggedIn: (state) => !!state.user,
  },
  actions: {
    login(username, password){
      if( username === 'admin' && password === '1234'){
        this.user = { name:'관리자', username }
        localStorage.setItem('user', JSON.stringify(this.user))
        return true
      }
      return false
    },
    logout(){
      this.user = null
      localStorage.removeItem('user');
    }
  }
})