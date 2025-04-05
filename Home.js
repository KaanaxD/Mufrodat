const Mufrodat= document.getElementById("NavMufrodat");
const Vocabulary= document.getElementById("NavVocabulary");
const Default= document.getElementById("default");
const NavvMufrodat= document.getElementById("btn1");
const NavvVocabulary= document.getElementById("btn2");
const Mpage1= document.getElementById("Mpage1");
const Mpage2= document.getElementById("Mpage2");
const Vpage1= document.getElementById("Vpage1");
const Vpage2= document.getElementById("Vpage2");


NavvMufrodat.onclick = function(){
    Mufrodat.style.display= "flex";
    Vocabulary.style.display= "none";
    Default.style.display= "none";
}

NavvVocabulary.onclick = function(){
    Mufrodat.style.display= "none";
    Vocabulary.style.display= "flex";
    Default.style.display= "none";M
}

function Mpagee1(){
    Mpage2.style.display="none";
    Mpage1.style.display="flex";
}

function Mpagee2(){
    Mpage2.style.display="flex";
    Mpage1.style.display="none";
}

function Vpagee1(){
    Vpage1.style.display="flex";
    Vpage2.style.display="none";
}

function Vpagee2(){
    Vpage2.style.display="flex";
    Vpage1.style.display="none";
}
