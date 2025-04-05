const Mufrodat= document.getElementById("NavMufrodat");
const Vocabulary= document.getElementById("NavVocabulary");
const Default= document.getElementById("default");
const Mpage1= document.getElementById("Mpage1");
const Mpage2= document.getElementById("Mpage2");
const Vpage1= document.getElementById("Vpage1");
const Vpage2= document.getElementById("Vpage2");
const navM= document.getElementById("Mmenu");
const navV= document.getElementById("Vmenu");


function awal(){
    Vpage2.style.display="none";
    Mpage2.style.display="none";
}

function MainMufrodat(){
    Mufrodat.style.display= "flex";
    Vocabulary.style.display= "none";
    Default.style.display= "none";
    Mpage1.style.display="flex";
    navM.style.backgroundColor="#393646";
    navM.style.color="#F4EEE0";
    navV.style.backgroundColor="#d3d3d3";
    navV.style.color="#393646";
    awal();
}

function MainVocab(){
    Mufrodat.style.display= "none"; 
    Vocabulary.style.display= "flex";
    Default.style.display= "none";
    Vpage1.style.display="flex";
    navV.style.backgroundColor="#393646";
    navV.style.color="#F4EEE0";
    navM.style.backgroundColor="#d3d3d3";
    navM.style.color="#393646";
    awal();
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