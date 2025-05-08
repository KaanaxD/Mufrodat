const openMenu = document.querySelector("nav");
const closeMenu = document.querySelector("header");
const main = document.querySelector("main");
let aktif = true;
let aktif2 = true;
let aktif3 = true;

function hamburgerr(){
    if(aktif){
        openMenu.style.left = '0';
        aktif = false;
    } else {
        openMenu.style.left = '-250px';
        aktif = true;
    }
}

const ranking = document.querySelector('.rank')
function rank(){
    if(aktif3){
        ranking.style.right = '0';
        aktif3 = false;
    } else {
        ranking.style.right = '-250px';
        aktif3 = true;
    }
}

const ick = document.getElementById("manIc");
const detail = document.querySelector(".detail");

detail.style.opacity= '0';
detail.style.display= 'none';

function onn(){
    if(aktif2){
        detail.style.display= 'block';
        setTimeout(function(){
            detail.style.opacity= '1';
        },10)
        aktif2=false;
    } else{
        detail.style.opacity= '0';
        setTimeout(function(){
            detail.style.display= 'none';
        },300)
        aktif2=true;
    }
}

ick.addEventListener("mouseover", function(){
    onn();
})

ick.addEventListener("mouseout", function(){
    onn()
})


const easter = document.getElementById("easter");
function misteri(){
    let sandi = document.querySelector("input").value;
    if(sandi!="sayasukamakan"){
        easter.innerHTML = "haloo " + sandi;
    } else if (sandi=="sayasukamakan"){
        easter.innerHTML = "rakus oh rakus";
    }
}

const roster = document.getElementById("roster");
const isiNav= document.querySelectorAll("nav ul, nav ul a");
const head = document.querySelector("header");
const mufrodat = document.querySelector(".Mufrodat");

head.style.transition= "background-color 0.3s ease";
window.addEventListener("scroll", function () {
    posisiRosterr= roster.getBoundingClientRect().top;
    posisiVocab= mufrodat.getBoundingClientRect().top;
    if(posisiRosterr <= 100){
        openMenu.style.backgroundColor = "#123458";
        isiNav.forEach(link => {
            link.style.color = "white";
            head.style.color = "white";
            head.style.backgroundColor = "#123458";
        });
    } else {
        openMenu.style.backgroundColor = "#D4C9BE";
        isiNav.forEach(link => {
            link.style.color = "black";
            head.style.color = "black";
            head.style.backgroundColor = "#D4C9BE";
        });
    }
});

const day = document.getElementById("day");
const hour = document.getElementById("hour");
const minute = document.getElementById("minute");
const second = document.getElementById("second");

// Tentukan tanggal tujuan
const targetDate = new Date("May 9, 2025 20:00:00").getTime();

// Update countdown setiap detik
const interval = setInterval(() => {
  const now = new Date().getTime(); // Waktu saat ini
  const timeLeft = targetDate - now; // Selisih waktu

  // Hitung hari, jam, menit, dan detik
  const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
  const hours = Math.floor(
    (timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

  // Tampilkan hasilnya
  // document.getElementById("countdown").innerHTML = `
  //   ${days}hari ${hours}jam ${minutes}menit ${seconds}detik
  // `;
  day.innerHTML = days;
  hour.innerHTML = hours;
  minute.innerHTML = minutes;
  second.innerHTML = seconds;
  // Jika waktu habis
  if (timeLeft < 0) {
    clearInterval(interval);
    document.getElementById("countdown").innerHTML = "Countdown selesai!";
  }
}, 1000);
