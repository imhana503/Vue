/* 공통 전역변수 */
const commVar = {
    tween : '', /* 활성화 클래스명 */
    element : {
		parallaxItemWrap : document.querySelector('.parallax-wrap'),
        parallaxItems : document.querySelectorAll('.parallax-item'),
        navigationBtns : document.querySelectorAll(".parallax-navigation a"),
	  }
};


/* 신규 이용자 안내 패럴럭스 */
const userParallax = {
    init:()=>{
        userParallax.horizontalEvent();
        userParallax.navigationEvent();
        userParallax.animations();
        userParallax.stepEvent();
    },
    /* 좌우스크롤 이벤트  */
    horizontalEvent:()=>{
        commVar.tween = gsap.to(commVar.element.parallaxItems, {
            xPercent: -100 * (commVar.element.parallaxItems.length - 1),
            ease: "none",
            scrollTrigger:{
                trigger: commVar.element.parallaxItemWrap,
                pin: true,
                start: "top top",
                scrub: 1,
                snap:{
                    snapTo: 1/(commVar.element.parallaxItems.length -1), //크롤 위치를 요소들의 위치에 스냅하는 옵션입니다. 1 / (section.length - 1)은 각 요소 사이의 스냅 간격을 설정
                    inertia: false, // 스냅 시의 관성 효과를 비활성화
                    duration: {min: 0.1, max: 0.1}, //스냅 애니메이션의 최소 및 최대 지속 시간을 설정
                },
                end: () => "+=" + (commVar.element.parallaxItemWrap.offsetWidth - innerWidth),
                //invalidateOnRefresh: true, //페이지 새로고침 시 스크롤 트리거 위치를 재계산하도록 설정
                //anticipatePin: 1,
                onUpdate: (self) => {
                    const scrollProgress = self.progress * (commVar.element.parallaxItems.length - 1);
                    const activeIdx = Math.round(scrollProgress); //현재 index 값

                    commVar.element.parallaxItems.forEach(function(parallax){
                      parallax.classList.remove('is-active')
                    })
                    commVar.element.navigationBtns.forEach((btn, idx) => {
                        if (idx  === activeIdx) { 
                            userParallax.navigationClickEvent(btn); 
                            commVar.element.parallaxItems[idx].classList.add('is-active');                          
                        }
                    });   
                    commVar.element.parallaxItemWrap.classList.add('is-active');
                },  
            }
        });
    },
    /* 네비게이이션 클릭 이벤트 */
    navigationClickEvent:(btn)=>{  
        commVar.element.navigationBtns.forEach(function(navi){
            navi.classList.remove('is-active');
        });
        btn.classList.add('is-active');
    },
    /* 네비게이이션 위치 이동 */
    navigationEvent:()=>{
        const dataNavi = document.querySelectorAll('[data-navi]');

        dataNavi.forEach(function(dataNaviBtn){            
            dataNaviBtn.addEventListener('click', function(btn){
                let idx = btn.currentTarget.getAttribute('data-navi');

                let targetPost = commVar.element.parallaxItems[idx];  
                let y = targetPost;

                if (targetPost && commVar.element.parallaxItemWrap.isSameNode(targetPost.parentElement)) {
                        let totalScroll = commVar.tween.scrollTrigger.end - commVar.tween.scrollTrigger.start;
                        let totalMovement = (commVar.element.parallaxItems.length - 1) * targetPost.offsetWidth;
                        y = Math.round(commVar.tween.scrollTrigger.start + (targetPost.offsetLeft / totalMovement) * totalScroll);
                }
            
                gsap.to(window, {
                    scrollTo: y,
                    autoKill: false,
                    onComplete:function(){
                        // userParallax.navigationEvent(btnNav.target, idx);
                        // userParallax.parallaxActive(idx);   
                    },
                    duration: 0.5, 
                    ease: "power2.inOut", 
                });
            })
        });
    },
    /* div 별 액션 */
    animations:()=>{
        gsap.set(".title-h1", {y: 0, opacity:0});
        ScrollTrigger.defaults({markers: {startColor: "white", endColor: "white"}});
        gsap.to(".title-h1", {
            y: 20,
            duration: 3,
            ease: "elastic",
            opacity:1,
            scrollTrigger: {
              trigger: "#parallax01",
              containerAnimation: commVar.tween,
              start: "center 80%",
              end: "center 20%",
              toggleActions: "play reset play reset",
            }
          });

          gsap.set("[data-motion-type1]", {opacity:0});
          gsap.to("[data-motion-type1]", {
            opacity:1,
            duration: 3,
            scrollTrigger: {
              trigger: "#parallax02",
              containerAnimation: commVar.tween,
              start: "center 80%",
              end: "center 20%",
              toggleActions: "play reset play reset",
            }
          });

          gsap.set("[data-motion-type1]", {opacity:0});
          gsap.to("[data-motion-type1]", {
            opacity:1,
            duration: 3,
            scrollTrigger: {
              trigger: "#parallax03",
              containerAnimation: commVar.tween,
              start: "center 80%",
              end: "center 20%",
              toggleActions: "play reset play reset",
            }
          });

          gsap.set("[data-motion-type1]", {opacity:0});
          gsap.to("[data-motion-type1]", {
            opacity:1,
            duration: 3,
            scrollTrigger: {
              trigger: "#parallax04",
              containerAnimation: commVar.tween,
              start: "center 80%",
              end: "center 20%",
              toggleActions: "play reset play reset",
            }
          });

          gsap.set("[data-motion-type1]", {opacity:0});
          gsap.to("[data-motion-type1]", {
            opacity:1,
            duration: 3,
            scrollTrigger: {
              trigger: "#parallax05",
              containerAnimation: commVar.tween,
              start: "center 80%",
              end: "center 20%",
              toggleActions: "play reset play reset",
            }
          });
    },
    /* 이용자선택 이벤트 */
    stepEvent:()=>{
      const cardStep = document.querySelector('.card-step');
      const cardStepBtns = cardStep.querySelectorAll('.list a');
      const cardStepCont = cardStep.querySelectorAll('.imgs img');

      cardStepBtns.forEach(function(btn, idx){
          btn.addEventListener('click', function(item){
              cardStepCont.forEach(function(cardCont){
                  cardCont.classList.remove('is-active');   
              });

              cardStepBtns.forEach(function(cardBtn){
                  cardBtn.closest('li').classList.remove('is-active');   
              });

              item.target.closest('li').classList.add('is-active');
              cardStepCont[idx].classList.add('is-active')
          })
      })
  },
   

}

window.addEventListener('DOMContentLoaded', function(){
    userParallax.init();
});

