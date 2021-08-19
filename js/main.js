const searchEl = document.querySelector('.search');
const searchInputEl = searchEl.querySelector('input');

searchEl.addEventListener('click', function () {
    searchInputEl.focus();
});

searchInputEl.addEventListener('focus', function () {
    searchEl.classList.add('focused');
    searchInputEl.setAttribute('placeholder', '검색어를 입력하세요');
});

searchInputEl.addEventListener('blur', function () {
    searchEl.classList.remove('focused');
    searchInputEl.setAttribute('placeholder', '');
});

// ._throttle(함수, 시간(ms)) : 스크롤 위치 계산 : lodash 라이브러리 사용
// gsap : 천천히 사라지기 위해서 gsap animation 관련 library 사용
// gsap.to(요소, 지속시간, 옵션)
const badgehEl = document.querySelector('header .badges');
window.addEventListener('scroll', _.throttle(function(){
    console.log(window.scrollY);
    if(window.scrollY > 300){
        gsap.to(badgehEl, .6, {
            opacity: 0,
            display: 'none'
        });
    } else{
        gsap.to(badgehEl, .6, {
            opacity: 1,
            display: 'block'
        })
    }
}, 300));

// ABOUT 슬라이드

const slide = new Swiper('.swiper-container', {
    slidesPerView : 2, // 한 슬라이드에 보여줄 갯수
    spaceBetween : 10, // 슬라이드 사이 여백
    loop : true, // 슬라이드 반복 여부
    centeredSlides: true,
    autoplay : {  // 자동 슬라이드 설정 , 비 활성화 시 false
      delay : 4000,   // 시간 설정
      disableOnInteraction : false,  // false로 설정하면 스와이프 후 자동 재생이 비활성화 되지 않음
    },
    pagination : { // 페이징
        el : '.swiper-pagination',
        clickable : true, // 페이징을 클릭하면 해당 영역으로 이동, 필요시 지정해 줘야 기능 작동
    },
    navigation: {   // 버튼 사용자 지정
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    }
  })

//  최상단 스크롤 버튼


const btnEl = document.querySelector('.btn_group .material-icons');
window.addEventListener('scroll', _.throttle(function(){
    console.log(window.scrollY);
    if(window.scrollY < 900){
        gsap.to(btnEl, .6, {
            opacity: 0,
            display: 'none'
        });
    } else{
        gsap.to(btnEl, .6, {
            opacity: 1,
            display: 'block'
        })
    }
}, 300));


