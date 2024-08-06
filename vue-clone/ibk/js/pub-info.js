var swiperSlide = {
    init:function() {
        if (!Math.sign) {
            Math.sign = function(x) {
                return ((x > 0) - (x < 0)) || +x;
            };
        }

        function sign(x) {
            return ((x > 0) - (x < 0)) || +x;
        }

        if (!Element.prototype.closest) {
            Element.prototype.closest = function(selector) {
                var el = this;
                while (el) {
                    if (el.matches(selector)) return el;
                    el = el.parentElement || el.parentNode;
                }
                return null;
            };
        }

        // 폴리필 추가
        if (!Element.prototype.matches) {
            Element.prototype.matches = Element.prototype.msMatchesSelector || function(selector) {
                var matches = (this.document || this.ownerDocument).querySelectorAll(selector),
                    i = matches.length;
                while (--i >= 0 && matches.item(i) !== this) {}
                return i > -1;
            };
        }

        
        swiperSlide.setClass();
        swiperSlide.slideEvent();
        swiperSlide.stepEvent();
    },
    /* 초기 body 클래스 추가 */
    setClass: function() {
        var experInfo = document.querySelector('.experience-info');
        if (experInfo) {
            document.querySelector('body').classList.add('is-hidden');
        }
    },
    /* 슬라이드 이벤트 */
    slideEvent:function(){
        var swiper = new Swiper('.swiper-container', {
            //initialSlide:9,
            direction: 'horizontal', 
            slidesPerView: 'auto',  
            spaceBetween: 0,        
            mousewheel: true,  
            speed:1000,    
            pagination: {
              el: '.swiper-pagination',
              clickable: true,        
            },
            navigation:{
                nextEl:".swiper-button-next",
                prevEl:".swiper-button-prev",
            },            
            on: {
              slideChange:function(){
                /* 슬라이드 별 아이콘 위치 변경 */
                var iconMove = document.querySelector('.guide-move-icon');
                var activeIdx = this.activeIndex;
                if( activeIdx === 0 ){
                    iconMove.style.top = '0';
                    iconMove.style.left = '81.9rem';                    
                } else if ( activeIdx === 1 ){
                    iconMove.style.top = '13.9rem';
                    iconMove.style.left = '81.9rem';
                } else if( activeIdx === 2 ){
                    iconMove.style.top = '0rem';
                    iconMove.style.left = '82.5rem';
                } else if( activeIdx === 3 ){
                    iconMove.style.top = '10.3rem';
                    iconMove.style.left = '85.5rem';
                } else if( activeIdx === 4 ){
                    iconMove.style.top = '0rem';
                    iconMove.style.left = '82.4rem';
                } else if( activeIdx === 5 ){  
                    iconMove.style.top = '3rem';
                    iconMove.style.left = '80.9rem';
                } else if( activeIdx === 6 ){
                    iconMove.style.top = '0rem';
                    iconMove.style.left = '82.3rem';
                } else if( activeIdx === 7 ){
                    iconMove.style.top = '3.3rem';
                    iconMove.style.left = '82.3rem';
                } else if( activeIdx === 8 ){
                    iconMove.style.top = '37rem';
                    iconMove.style.left = '87.3rem';
                }   

                /* navigation */
                var btnSwiperBtnWrap = document.querySelector('.swiper-buttons-wrap');
                var btnSwiperNext = btnSwiperBtnWrap.querySelector('.swiper-button-next');

                if (activeIdx === 0) {
                    btnSwiperBtnWrap.classList.add('hide');
                } else {
                    btnSwiperBtnWrap.classList.remove('hide');
                }

                if (activeIdx === 8) {
                    btnSwiperNext.classList.add('hide');
                } else {
                    btnSwiperNext.classList.remove('hide');
                }                
              },              
              init: function () {
                /* dataNavi 링크이동 */
                var dataNavi = document.querySelectorAll('[data-navi]');
                Array.prototype.forEach.call(dataNavi, function(dataNaviBtn) {
                    dataNaviBtn.addEventListener('click', function(btn) {
                        var idx = btn.currentTarget.getAttribute('data-navi');
                        swiper.slideTo(idx);
                    });
                });                

                /* navigation 첫번째일때 삭제 */
                var btnSwiperBtnWrap = document.querySelector('.swiper-buttons-wrap');
                btnSwiperBtnWrap.classList.add('hide');    
                
                /* 카드 모션 이벤트 */
                var cardMotions = document.querySelectorAll('[data-motion-card]');
                Array.prototype.forEach.call(cardMotions, function(cardItem) {
                    var cardButtons = cardItem.querySelectorAll('.card-head .title');
                    Array.prototype.forEach.call(cardButtons, function(cardBtn) {
                        cardBtn.addEventListener('click', function(e) {
                            var currentCard = e.currentTarget.closest('.card');
                            var currentCardIndex = parseInt(currentCard.getAttribute('data-card'));

                            var cardWrap = e.currentTarget.closest('[data-motion-card]');
                            var maxCards = cardWrap.querySelectorAll('[data-card]');
                            var cardValue = [];

                            Array.prototype.forEach.call(maxCards, function(maxCard) {
                                cardValue.push(parseInt(maxCard.getAttribute('data-card')));
                            });
                            var maxIndex = Math.max.apply(null, cardValue);

                            var moveCard = cardWrap.querySelector('[data-card="' + maxIndex + '"]');

                            moveCard.setAttribute('data-card', currentCardIndex);
                            currentCard.setAttribute('data-card', maxIndex);
                        });
                    });
                });

                
                /* 스크롤박스 있을 경우 스크롤이벤트 막기 */
                var scrollItem = document.querySelector('.card-cont.scroll');
                scrollItem.addEventListener('wheel', function(e) {
                    e.stopPropagation();
                });
              },
            },
        });
    },   
    /* 이용자선택 이벤트 */
    stepEvent:function(){
        var cardStep = document.querySelector('.card-step');
        var cardStepBtns = cardStep.querySelectorAll('.list a');
        var cardStepCont = cardStep.querySelectorAll('.imgs img');

        Array.prototype.forEach.call(cardStepBtns, function(btn, idx) {
            btn.addEventListener('click', function(item) {
                Array.prototype.forEach.call(cardStepCont, function(cardCont) {
                    cardCont.classList.remove('is-active');
                });

                Array.prototype.forEach.call(cardStepBtns, function(cardBtn) {
                    cardBtn.closest('li').classList.remove('is-active');
                });

                item.target.closest('li').classList.add('is-active');
                cardStepCont[idx].classList.add('is-active');
            });
        });
    }
  
}

window.addEventListener('DOMContentLoaded', function(){
    swiperSlide.init();
});
//ie11버전 호환되게 변경해줘