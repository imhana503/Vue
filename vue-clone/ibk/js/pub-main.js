/* 체험관 - 홈  */
var experIntro = {
    init: function() {
        this.setClass();
        this.windowPopup();
        this.aniFulllScreenRotate();
        this.aniCircleRotate();
    },
    /* 초기 body 클래스 추가 */
    setClass: function() {
        var experHome = document.querySelector('.experience-main');
        if (experHome) {
            document.querySelector('body').classList.add('is-main');
        }
    },
    /* circle 회전 */
    aniCircleRotate: function() {
        var circleItem = document.querySelector('.pos8');
        var circleItems = document.querySelectorAll('.circle:not(.pos8)');
        var circleAll = Array.prototype.slice.call(circleItems).filter(function(element) {
            return element.classList.contains('circle');
        });

        /* 현재 위치 구하기 */
        var rect = circleItem.getBoundingClientRect();
        var currentX = rect.left + rect.width / 2;
        var currentY = rect.top + rect.height / 2;

        var circleLast = document.querySelector('.circle-last');
        gsap.to(circleItem, {
            y: window.innerHeight / 2 - currentY, // y 위치를 정 가운데로 이동
            x: window.innerWidth / 2 - currentX, // x 위치를 정 가운데로 이동
            rotation: 300,
            duration: 1,
            onComplete: function() {
                // 다른 circle 요소들을 숨기는 애니메이션
                gsap.to(circleAll, {
                    opacity: 0,
                    duration: 0.5,
                    ease: 'power1.inOut',
                    stagger: 0.3,
                    onComplete: function() {
                        experIntro.aniCircleExpaned();
                    }
                });
            }
        });
    },
    /* circle 전체 화면 회전 */
    aniFulllScreenRotate: function() {
        var circleWrap = document.querySelector('[data-motion-circle]');
        gsap.to(circleWrap, { rotation: 360, transformOrigin: 'center center', ease: 'linear', duration: 2 });
    },
    /* 마지막 circle 확장 */
    aniCircleExpaned: function() {
        
        var circleWrap = document.querySelector('[data-motion-circle]');
        var homeGroup = document.querySelector('.home-group');
        gsap.to('.pos8', {
            scale: 100, 
            duration: 1, // 애니메이션 지속 시간
            opacity: 0,
            ease: 'power1.inOut', // 애니메이션 이징 설정
            backgroundColor: '#ffffff',
            onComplete: function() {
                circleWrap.classList.add('hide');
                homeGroup.classList.add('is-active');
                experIntro.contMotion();
            }
        });

        var circleLast = document.querySelector('.circle-last');
        gsap.from(circleLast, { opacity: 1 });
        gsap.to(circleLast, {
            opacity: 0,
            scale: 100,
            duration: 2,
            ease: 'power1.inOut',
            onComplete: function() {
                circleLast.classList.add('hide');
            }
        });
    },
    /* 컨텐츠 모션 */
    contMotion: function() {
        // GSAP 애니메이션 설정
        gsap.to(".home-group .title-h1", { opacity: 1, y: 0, duration: 1, delay: 0.5, ease: "power4.out" });

        gsap.to(".home-list-btn .item", { opacity: 1, y: 0, duration: 1,
            delay: 0.7, // 제목 애니메이션 이후에 시작
            stagger: 0, // 요소들 간의 간격 설정
            ease: "power4.out"
        });
    },
    /* 윈도우팝업 열기 */
    windowPopup: function() {
        var btnWindoe = document.querySelectorAll('.btn-window');
        for (var i = 0; i < btnWindoe.length; i++) {
            (function(btn) {
                var url = btn.getAttribute('data-url');
                btn.addEventListener('click', function() {
                    window.open(url, "_blank", "width=1200, height=738, toolbar=1,menubar=1,resizable=1,scrollbars=1");
                });
            })(btnWindoe[i]);
        }
    }
};

window.addEventListener('DOMContentLoaded', function() {
    experIntro.init();
});