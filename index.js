const openMenu = document.querySelector("nav");
const closeMenu = document.querySelector("header");
const easter = document.getElementById("easter");
let aktif = true;

function hamburgerr(){
    if(aktif){
        openMenu.style.left = '0';
        aktif = false;
    } else {
        openMenu.style.left = '-250px';
        aktif = true;
    }
}

const ick = document.getElementById("manIc");
const detail = document.querySelector(".detail");

detail.style.opacity= '0';

ick.addEventListener("mouseover", function(){
    detail.style.opacity= '100';
})

ick.addEventListener("mouseout", function(){
    detail.style.opacity= '0';
})

function misteri(){
    let sandi = document.querySelector("input").value;
    if(sandi!="sayasukamakan"){
        easter.innerHTML = "salah blok!!!";
    } else if (sandi=="sayasukamakan"){
        easter.innerHTML = "lu gay";
    }
}