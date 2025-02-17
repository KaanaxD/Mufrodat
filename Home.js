var tombol1 = document.getElementById("tombol1");
var tombol2 = document.getElementById("tombol2");
var a2 = document.getElementById("a2");
var a1 = document.getElementById("a1");

const ya = document.getElementById ("ya");
const tidak = document.getElementById ("tidak");
const biasa = document.getElementById ("biasa");
let subbmit = document.getElementById ("subbmit");
const jawaban = document.getElementById ("jawaban");
let feedback = document.getElementById ("feedback");

tombol1.onclick = function(){
        a1.style.display = "flex";
        a2.style.display = "none";
        tombol2.style.backgroundColor = "aliceblue";
        tombol2.style.color = "black";    
        tombol1.style.backgroundColor = "black";
        tombol1.style.color = "aliceblue";
        feedback.style.display = "flex";
}

tombol2.onclick = function(){
    a1.style.display = "none";
    a2.style.display = "flex";
    tombol1.style.backgroundColor = "aliceblue";
    tombol1.style.color = "black";
    tombol2.style.backgroundColor = "black";
    tombol2.style.color = "aliceblue";
    feedback.style.display = "flex";
}

subbmit.onclick = function(){
    if (ya.checked){
        jawaban.textContent = "thnks pendapatnya";
    } else if (tidak.checked) {
        jawaban.textContent = "serah lu deh";
    } else if (biasa.checked) {
        jawaban.textContent = "kecewa";
    } else {
        jawaban.textContent = "Pilih salah satu!";
    }
}