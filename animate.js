
const clanovi = document.getElementsByClassName("clanovi")[0];
const onama = document.getElementsByClassName("o-nama")[0];
const kontakt = document.getElementsByClassName("kontakt")[0];
const repertoar = document.getElementsByClassName("repertoar")[0];
const events = document.getElementsByClassName("events")[0];
const galerija = document.getElementsByClassName("galerija")[0];


function showOnama() {
    onama.style.display = "block";
    clanovi.style.display = "none";
    kontakt.style.display = "none";
    repertoar.style.display = "none";
    galerija.style.display = "none";
    events.style.display = "none";
}

function showClanovi() {
    clanovi.style.display = "block";
    onama.style.display = "none";
    kontakt.style.display = "none";
    repertoar.style.display = "none";
    galerija.style.display = "none";
    events.style.display = "none";
}

function showRepertoar() {
    repertoar.style.display = "block";
    kontakt.style.display = "none";
    onama.style.display = "none";
    clanovi.style.display = "none";
    galerija.style.display = "none";
    events.style.display = "none";
}

function showEvents() {
    events.style.display = "block";
    kontakt.style.display = "none";
    onama.style.display = "none";
    clanovi.style.display = "none";
    galerija.style.display = "none";
    repertoar.style.display = "none";
}

function showGalerija() {
    galerija.style.display = "block";
    kontakt.style.display = "none";
    onama.style.display = "none";
    clanovi.style.display = "none";
    repertoar.style.display = "none";
    events.style.display = "none";
}

function showKontakt() {
    kontakt.style.display = "block";
    onama.style.display = "none";
    clanovi.style.display = "none";
    repertoar.style.display = "none";
    galerija.style.display = "none";
    events.style.display = "none";
}



// prek JS-a napravi HTML element
// Za svaki html element append item u onaj images wrapper

function toggleOverlay(imgUrl) {
    document.querySelector('.showImg').classList.add('showOverlay');

    document.getElementById('presentation').src = imgUrl;
    console.log('FOOO', imgUrl);
}

// Close overlay
function closeImg() {
    document.querySelector('.showImg').classList.remove('showOverlay');
    document.getElementById('presentation').src = '';
}