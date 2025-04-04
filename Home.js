const Mufrodat= document.getElementById("NavMufrodat");
const Vocabulary= document.getElementById("NavVocabulary");
const Default= document.getElementById("default");
const NavvMufrodat= document.getElementById("btn1");
const NavvVocabulary= document.getElementById("btn2");

NavvMufrodat.onclick = function(){
    Mufrodat.style.display= "flex";
    Vocabulary.style.display= "none";
    Default.style.display= "none";
}

NavvVocabulary.onclick = function(){
    Mufrodat.style.display= "none";
    Vocabulary.style.display= "flex";
    Default.style.display= "none";
}
