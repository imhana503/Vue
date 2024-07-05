<template>
   <div class="container mainPage">
        <Header/>
        <div 
            :class="readyAction ? 'ready-action' : ''"
            class="main">
            <!-- .pulipMain -->
            <div class="pulipMain">
                <video
                    id="mainMovie"
                    playsinline
                    muted="muted"
                    autoplay="autoplay"
                    preload="auto"
                    loop="loop"
                    >
                    <source src="@/assets/images/pulipmain.mp4" type="video/mp4" />
                </video>
            </div>
            <!--// .pulipMain -->

            <!-- .defaultSect who-we-are bdbLine step" -->
            <div class="defaultSect who-we-are bdbLine step active">
                <div class="divInner p-sm2">
                    <div class="conText">
                        <strong class="innerTitle mo-typo01"><span>Who we are</span></strong>
                        <div class="conTextArea">
                            <strong class="conTextTit web mo-typo01 green">
                                <template  v-for="(paragraph, idx) in mainData.whoWeAre.title.pc" :key="idx">
                                    <span v-html="paragraph"></span>
                                </template>
                            </strong>
    
                            <strong class="conTextTit mobile mo-typo01">
                                <template  v-for="(paragraph, idx) in mainData.whoWeAre.title.mo" :key="idx">
                                    <span v-html="paragraph"></span>
                                </template>
                            </strong>

                            <div class="conTextin" v-for="(paragraph, idx) in mainData.whoWeAre.content" :key="idx">
                                <p>{{ paragraph }}</p>
                            </div>
                        </div>
                    </div>
                    <div class="rightSince mo-typo01">
                        Since <span class="redPoint">{{ sincePlay.score }}</span>
                        <span class="ico_area">
                            <img src="@/assets/images/ico_since.png" alt="" />
                        </span>
                    </div>
                </div>
            </div>
            <!--// .defaultSect who-we-are bdbLine step" -->

            <!-- .partners -->
            <div class="partners bdbLine step">
                <div class="conText">
                    <strong class="innerTitle mo-typo01"><span>Partners</span></strong>
                    <div class="conTextArea">
                        <div class="partnersLogo mo-content01">
                            <ul>
                                <li v-for="(item, idx) in partnersData.data" :key="idx">
                                    <img :src="imglink(item.thumb)" :alt="item.title">
                                </li>
                            </ul>
                            <a href="">
                                <img src="@/assets/images/@ico_more.svg" alt="" />
                                <span>more</span>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            <!--// .partners -->

            <!-- .longEnd -->
            <router-link 
                to="/works"
                class="longEnd step"
            >
                <div class="endDefault end-text">
                    <span>Works</span>
                </div>  

                <div class="endTextArea end-text">
                    <div class="endText web">
                        <span class="webBlock" v-for="(item, idx) in mainData.footer.pc" :key="idx">{{ item }}</span>
                    </div>
                    <div class="endText mobile" v-html="mainData.footer.mo"></div>
                </div>

                <div class="engBg mainEndBg">
                </div>
            </router-link>
            <!--// .longEnd -->
        </div>

        <Footer/>

    
   </div>
</template>

<script>
import { defineComponent, computed, ref } from 'vue';
import { useStore } from 'vuex';

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import mainData from '@/assets/json/main.json';
import partnersData from '@/assets/json/partners.json';
import common from '@/shared/mixin/common.js'

export default defineComponent({
    mixins: [common],
    name:'Main',
    components:{
        Header,
        Footer
    },
    setup(){
        const store = useStore();
        const readyAction = computed(()=> store.state.common.readyAction );

        const sincePlay = ref({ score:0, computed:true });
        const sinceEnd = 1998;

        const sinceObserveActive = () => {

        }

       return {
        readyAction,
        mainData,
        sincePlay,
        sinceEnd,
        partnersData,
        sinceObserveActive
      
       }
        
    }
})
</script>

<style scoped>

.ready-action .step .mo-typo01 > span:nth-child(2),
.ready-action .step .mo-typo01 > span:nth-child(3){
   
    background: url('@/assets/images/green_line.png') no-repeat 0 0;
    background-size: 0 100%;
    transition: background-size 1.7s 0.3s ease-in-out;
}


.ready-action .step.active .mo-typo01 > span:nth-child(2),
.ready-action .step.active .mo-typo01 > span:nth-child(3) {
    background-size: 100% 100%;
   
}

.ready-action .step .mo-typo01 > span:before,
.ready-action .step .mo-typo01 > span:after {
    position: absolute;
    width: 100%;
    background: #fff;
    
}

.ready-action .step .mo-typo01 > span:after{
    width:0;
    background: #000;
}

.ready-action .step .mo-typo01 > span:before, .ready-action .step .mo-typo01 > span:after{
    content: "";
    position:absolute;
    top: 0;
    bottom: 0;
    display: inline-block;
}

.ready-action .step.active .mo-typo01 > span:after{
    -webkit-animation: typo01-after 1s ease-in-out;
    width:0;
}

.ready-action .step.active .mo-typo01 > span:before {
    right: 0;
    width: 0;
    -webkit-transition: width 1.1s ease-in-out;
    transition: width 1.1s ease-in-out;
}

@keyframes typo01-after {
  0%{
    left: 0;
    width: 0;
  }
  50%{
    width: 100%;
  }
  100% {
    right: 0;
    width: 0;
  }
}


.ready-action .step .conTextin {
    font-size: 1.66vw;
    line-height: 1.94;
    padding-top: 4.9vw;
    transform: translateY(50px);
    opacity: 0;
}

.ready-action .step.active .conTextin {
    opacity: 1;
    transform: translateY(0);
    transition: opacity 1s 0.6s ease-in-out, -webkit-transform 1s 0.6s ease-in-out;
    transition: transform 1s 0.6s ease-in-out, opacity 1s 0.6s ease-in-out;
    transition: transform 1s 0.6s ease-in-out, opacity 1s 0.6s ease-in-out, -webkit-transform 1s 0.6s ease-in-out;
}
</style>
