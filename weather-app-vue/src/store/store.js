import { createStore } from 'vuex';

// Vuex store 설정
export default createStore({
    state:{
        //초기값
        toggle:true,
        weatherData:{
            icon:'icon',
            temp:'temp',
            text:'text',
            city:'incheon',
            location:'location'
        }
    },
    mutations:{
        //함수
        updateWeather(state, payload){
            state.weatherData.icon = payload.weather[0].icon;
            state.weatherData.temp = payload.main.temp;
            state.weatherData.text = payload.weather[0].description;
            state.weatherData.location = payload.sys.country;
            state.weatherData.city = payload.name;
        },
        searchInput(state, payload){
            state.weatherData.city = payload;
        }
    },
    actions:{
        //비동기
        getWeather(context){
            const API_URL = `https://api.openweathermap.org/data/2.5/weather?q=${context.state.weatherData.city}&appid=1a04a85ea40589be8e06a8562e3de28d`;
            fetch(API_URL)
                .then(res => res.json())
                .then(data => {
                    context.commit('updateWeather', data);
                 
                })
                .catch(err=>{
                    alert('에러가 발생했습니다. 잠시 후 다시 시도해주세요')
                })
        }
}
})