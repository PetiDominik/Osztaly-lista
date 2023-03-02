
window.addEventListener("load", main)



function main() {
    
    for (let i = 0; i < list.length; i++) {
        elemLetrehoz(list[i]);
    }
    
}


function elemLetrehoz(ember) {
    const PAGE = document.querySelector("main");
    
    const DIV = document.createElement("div");
    const CIM = document.createElement("h2");
    const BEKEZDES = document.createElement("p");

    CIM.innerHTML = ember.nev;
    BEKEZDES.innerHTML = ember.mondat;
    DIV.appendChild(CIM);
    DIV.appendChild(BEKEZDES);
    PAGE.appendChild(DIV);
}

const list = [
    { nev: "Peti", mondat: "A kedd!", },
    { nev: "Gergo", mondat: "A kedd masodszor!", szemszin: "Kek/Zold", kor: 23, },
    { nev: "Niki", mondat: "Délelőtt kint játszottam a kutyussal" },
    { nev: "Asztrik", mondat: "Kedden, mert ott nem történt semmi." },
    { nev: "GergőT", mondat: "Kedd a legjóbb nap." },
    { nev: "Sanyi", mondat: "Tegnap sikerült időben megoldani a java feladatot.", },
    { nev: "Márton", mondat: "Nem volt angol hétfőn" },
    { nev: "Dominik", mondat: "Kedd, mert a szölőben a kistraktorral tevékenykedtem.", },
    { nev: "Marci", mondat: "Ha gyenge vagy akkor legalább ne sírj" },
    { nev: "Bence", mondat: "Pillanat türelmet kérek javítom a mikrofont.", },
];
