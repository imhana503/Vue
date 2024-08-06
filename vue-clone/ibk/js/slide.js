const slides = document.getElementsByClassName("slide");
const sliderBtns = document.getElementsByClassName("slider-btn");
const autoBtn = document.getElementsByClassName("auto-btn")[0];
const keysLength = Object.keys(stepData).length;
const range = 900;

let slide = 0;
let step = 0;
let autoMode = false;
let isMoving = false;
let autoFrameRequest;
let isModalStart = true;

function openModal(isOpen, isStart) {
    if (isOpen) {
        document.getElementsByClassName("modalTitleBox")[0].innerText = modalData.title;
        document.getElementsByClassName("modalContentBox")[0].innerHTML = isStart
            ? modalData.contentText.start
            : modalData.contentText.end;
        if (!isStart) {
            document.getElementsByClassName("modal-btn")[0].innerText = "확인";
            isModalStart = false;
        }
        document.getElementsByClassName("dimmed")[0].style.display = "block";
        document.getElementsByClassName("modal")[0].style.display = "block";
    } else {
        document.getElementsByClassName("modalContentBox")[0].innerHTML = "";
        document.getElementsByClassName("dimmed")[0].style.display = "none";
        document.getElementsByClassName("modal")[0].style.display = "none";
    }
}


function handleCloseModal() {
    openModal(false, false);
    isMoving = false;
    //console.log({ isModalStart });
    if (!isModalStart) {
        document.getElementsByClassName("menuBox")[0].style.bottom = "0px";
    }
}

function autoPlayStart() {
    autoMode = true;
    //document.getElementsByClassName("play-img")[0].src = "../img/palyer/btn_stop.png";

    const playBtn = document.getElementsByClassName('slide-indicater-info')[0].getElementsByClassName('play-btn')[0];
    playBtn.classList.remove('play');
    playBtn.classList.add('stop');
    playBtn.getElementsByTagName('span')[0].innerText = "일시정지";
    autoSlide();
}

function autoPlayStop() {
    autoMode = false;
    cancelAnimationFrame(autoFrameRequest);
    //document.getElementsByClassName("play-img")[0].src = "../img/palyer/btn_play.png";

    const playBtn = document.getElementsByClassName('slide-indicater-info')[0].getElementsByClassName('play-btn')[0];
    playBtn.classList.remove('stop');
    playBtn.classList.add('play');
    playBtn.getElementsByTagName('span')[0].innerText = "자동재생";
    console.log(playBtn);
}

function handleAutoPlay() {
    if (autoMode) {
        autoPlayStop();
    } else {
        autoPlayStart();
    }
}

function autoSlide() {
    function autoStep() {
        if (!autoMode) return;
        if (step < keysLength) {
            handleStep(true);
            setTimeout(function() {
                autoFrameRequest = requestAnimationFrame(autoStep);
            }, 3000);
        } else {
            autoMode = false;
        }        
    }
    autoFrameRequest = requestAnimationFrame(autoStep);
}

function handleSlide(selectedSlide) {
    if (selectedSlide === slide) return;
    if (!isMoving) {
        isMoving = true;
        showStepBtn(false);
        slide = selectedSlide;
        step = stepData[slide].stepNum;
        initScroll();
        moveSlide();
        autoPlayStop();
    } else {
        //console.log({ isMoving });
    }
    document.getElementsByClassName("slide-info")[0].innerText = stepData[step].message;
}

function handleStep(isAutoMode) {
    if (!isMoving) {
        isMoving = true;
        showStepBtn(false);
        if (step >= keysLength - 1) {
            openModal(true, false);
            autoPlayStop();
            return false;
        }
        step = step + 1;
        slide = stepData[step].slideNum;
        if (stepData[step].scrollRequired) {
            moveScroll(stepData[step].scrollAmount, slide);
        } else {
            initScroll();
            moveSlide();
        }
        if (!isAutoMode) {
            autoPlayStop();
        }
        document.getElementsByClassName("slide-info")[0].innerText = stepData[step].message;
    }
}

function initSlide() {
    for (var i = 0; i < slides.length; i++) {
        slides[i].style.left = (i * range) + "px";
        /* number title 추가 */
        sliderBtns[i].getElementsByTagName('span')[0].innerText = i < 9 ? "0" + (i + 1) : (i + 1);
        sliderBtns[i].getElementsByTagName('em')[0].innerText = stepDataTitle.title[i];

        if( i === 0 ){
            document.getElementsByClassName("step-btn")[0].innerText = stepData[0].firstText
        }

    }
    document.getElementsByClassName("slide-info")[0].innerText = stepData[step].message;

    sliderBtns[slide].classList.add("active");
    showStepBtn(true);

    
}

function moveSlide() {
    const offset = slide * -range;
   
    for (var i = 0; i < slides.length; i++) {
        slides[i].style.transform = "translateX(" + offset + "px)";
    }
    for (var j = 0; j < sliderBtns.length; j++) {
        sliderBtns[j].classList.remove("active");
    }
    sliderBtns[slide].classList.add("active");
    initScroll();
    if (stepData[step].scrollAmount) {
        setTimeout(function() {
            moveScroll(stepData[step].scrollAmount, slide);
        }, 1000);
    } else {
        showStepBtn(true);
    }
}

function showStepBtn(isShow) {
    if (isShow) {
        setTimeout(function() {
            isMoving = false;
            document.getElementsByClassName("step-btn")[0].style.top = stepData[step].buttonPosition.x + "px";
            document.getElementsByClassName("step-btn")[0].style.left = stepData[step].buttonPosition.y + "px";
            document.getElementsByClassName("step-btn")[0].style.display = "block";
            document.getElementsByClassName("slide-info")[0].classList.add("visible");


        }, 500);
    } else {
        document.getElementsByClassName("step-btn")[0].style.display = "none";
        document.getElementsByClassName("slide-info")[0].classList.remove("visible");
    }
}

function initScroll() {
    var scrollItems = document.getElementsByClassName('scroll-img');
    setTimeout(function() {
        for (var i = 0; i < scrollItems.length; i++) {
            scrollItems[i].style.transform = 'translate(0, 0)';
        }
    }, 500);
}

function moveScroll(offset, slide) {
    if (stepData[step].scrollAmount > 0) {
        document.getElementsByClassName('scroll-img-' + slide)[0].style.transform = 'translate(0, -' + offset + 'px)';
    }
    if (offset !== 0) {
        showStepBtn(true);
    }
}

/* header Menu */
function initMenu() {
    var contHeader = document.getElementsByClassName('content-header')[0];
    var menuList = contHeader.getElementsByClassName('menuItem');

    for (var i = 0; i < menuList.length; i++) {
        menuList[i].classList.remove('is-active');

        menuList[i].addEventListener('mouseenter', function(e) {
            var target = e.currentTarget;
            target.classList.add('is-active');
        });

        menuList[i].addEventListener('mouseleave', function(e) {
            var target = e.currentTarget;
            target.classList.remove('is-active');
        });
    }
}

/* .experience-center width */
function initClass() {
    var exSlider = document.getElementsByClassName('experience-slide')[0];
    var exWrap = document.getElementsByClassName('experience-center')[0];
    var body = document.getElementsByTagName('body')[0];
    if (exSlider) {
        exWrap.style.width = '112rem';
        body.classList.add('is-hidden');
    }
}

window.onload = function () {
    initSlide();
    initMenu();
    initClass();
    openModal(true, true);
};