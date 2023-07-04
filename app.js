// alert("hello")

// 태그 선택 querySelector(css), getElementById(id)
const css    = document.querySelector('h3');
const color1 = document.querySelector('.color1');
const color2 = document.querySelector('.color2');
const body   = document.getElementById('gradient');

// 색 입력 color1/color2를 선택 시 두 색을 섞어서 body에 표시
function shuffle() {
    const c1 = color1.value;
    const c2 = color2.value;

    // 자바스크립트 문자열 안에 변수 넣기 ``````` (BackQuote)
    body.style.background = `linear-gradient(to right, ${c1}, ${c2})`;
    css.innerText = body.style.background
}

// 이벤트 리스너 사용
css.addEventListener('click', function() {
    alert("h3 tag");
});


body.addEventListener('dblclick', function() {
    alert("body tag");
});

const h1 = document.querySelector('h1');

// h1.addEventListener('mouseenter', function() {
//     alert("h1 tag11");
// });

// h1.addEventListener('mouseout', function() {
//     alert("h1 tag22");
// });

color1.addEventListener('change', shuffle);
color2.addEventListener('change', shuffle);