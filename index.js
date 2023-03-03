
window.addEventListener("load", main)



function main() {

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
    const MAIN = document.querySelector("main");

    /* for (let i = 0; i < list.length; i++) {
        //elemLetrehoz(list[i]);
        elem("div", "main", "");
        elem("h2", "div", list[i].nev, i);
        elem("p", "div", list[i].mondat, i);
    } */

    megjelenit(list, MAIN);
    
}

function megjelenit(list, main) {
    
    let htmlKod = "";

    for (let i = 0; i < list.length; i++) {
        htmlKod += `<div>
                        <h2>${list[i].nev}</h2>
                        <p>${list[i].mondat}<p>
                    </div>`;
        
    }

    main.innerHTML += htmlKod;

}

/* function elem(tipus, szulo, content, i = 0) {
    let elemek = document.querySelectorAll(szulo);
    const SZUL = elemek[i];
    console.log(elemek.length-1)
    const TIP = document.createElement(tipus);

    TIP.innerHTML = content;
    SZUL.appendChild(TIP);

} */

/* function elemLetrehoz(ember) {
    const PAGE = document.querySelector("main");
    
    const DIV = document.createElement("div");
    const CIM = document.createElement("h2");
    const BEKEZDES = document.createElement("p");

    CIM.innerHTML = ember.nev;
    BEKEZDES.innerHTML = ember.mondat;
    DIV.appendChild(CIM);
    DIV.appendChild(BEKEZDES);
    PAGE.appendChild(DIV);
} */

/* const list = [
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
]; */
