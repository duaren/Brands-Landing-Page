function imgSlider (anything){
    document.querySelector('.pepsi').src = anything;
}
 
function changeBgColor (color) {
    const sec = document.querySelector('.sec');
    const nav = document.querySelector('.nav')
    sec.style.background = color;
    nav.style.background = color;

}

function toggleMenu(){
    const menuToggle = document.querySelector('.toggle');
    const nav = document.querySelector('.nav');
    menuToggle.classList.toggle('active')
    nav.classList.toggle('active')
}