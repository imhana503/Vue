import { defineStore } from 'pinia';

export const useStore = defineStore('main', {
    state:()=>({
        toggle:true,
        weatherData:{
            icon:'icon',
            temp:'temp',
            text:'text',
            city:'incheon',
            location:'location'
        }
    }),
    actions:{
        //함수
        updateWeather(payload){
            this.weatherData.icon = payload.weather[0].icon;
            this.weatherData.temp = payload.main.temp;
            this.weatherData.text = payload.weather[0].description;
            this.weatherData.location = payload.sys.country;
            this.weatherData.city = payload.name;
        },
        searchInput(payload){
            this.weatherData.city = payload;
        },
        async getWeather(){
            const API_URL = `https://api.openweathermap.org/data/2.5/weather?q=${this.weatherData.city}&appid=1a04a85ea40589be8e06a8562e3de28d`;
            await fetch(API_URL)
                .then(res => res.json())
                .then(data => {
                    this.updateWeather(data)
                 
                })
                .catch(err=>{
                    alert('에러가 발생했습니다. 잠시 후 다시 시도해주세요')
                })
        }
    }
})
