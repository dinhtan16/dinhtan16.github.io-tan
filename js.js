const open = document.getElementById('toggle');
const line1 = document.querySelector('.line1')
const line2 = document.querySelector('.line2');

const nav = document.querySelector('.nav-mobile')

toggle.addEventListener('click',function(){
    nav.classList.toggle('active');
    line1.classList.toggle('active')
    line2.classList.toggle('active')

})

const navbar = document.querySelector('.navbara');
console.log(navbar)
window.addEventListener('scroll',fixNav)


function fixNav(){
    if(window.scrollY > navbar.offsetHeight + 100){
        navbar.classList.add('active')
    }else{
        navbar.classList.remove('active')

    }
}
