function showClanovi(){
const clanovi = document.getElementsByClassName("clanovi")[0];
const onama = document.getElementsByClassName("o-nama")[0];

    clanovi.style.display ="block";
    onama.style.display ="none";
}

function showOnama(){
    const clanovi = document.getElementsByClassName("clanovi")[0];
    const onama = document.getElementsByClassName("o-nama")[0];
    
        clanovi.style.display ="none";
        onama.style.display ="block";
    }