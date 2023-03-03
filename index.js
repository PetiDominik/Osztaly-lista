
window.addEventListener("load", main)



function main() {

    /* const list = [
        {nev: "Peti", mondat: "A kedd!", szemszin : "piros", kor : 19, tesok : 2,},
        {nev: "Gergo", mondat: "A kedd masodszor!", szemszin : "piros", kor : 23, tesok : 1,},
        {nev: "Niki", mondat: "Délelőtt kint játszottam a kutyussal", szemszin : "piros", kor : 19, tesok : 1,},
        {nev: "Asztrik", mondat: "Kedden, mert ott nem történt semmi.", szemszin : "piros", kor : 19, tesok : 1,},
        {nev: "GergőT", mondat: "Kedd a legjóbb nap.", szemszin : "piros", kor : 19, tesok : 1,},
        {nev: "Sanyi", mondat: "Tegnap sikerült időben megoldani a java feladatot.", szemszin : "piros", kor : 19, tesok : 4,},
        {nev: "Márton", mondat: "Nem volt angol hétfőn", szemszin : "piros", kor : 19, tesok : 1,},
        {nev: "Dominik", mondat: "Kedd, mert a szölőben a kistraktorral tevékenykedtem.", szemszin : "kekes zold", kor : 21, tesok : 1,},
        {nev: "Marci", mondat: "Ha gyenge vagy akkor legalább ne sírj", szemszin : "piros", kor : 19, tesok : 1,},
        {nev: "Bence", mondat: "Pillanat türelmet kérek javítom a mikrofont.", szemszin : "piros", kor : 19, tesok : 1,},
    ]; */

    /* for (let i = 0; i < list.length; i++) {
        //elemLetrehoz(list[i]);
        elem("div", "main", "");
        elem("h2", "div", list[i].nev, i);
        elem("p", "div", list[i].mondat, i);
    } */

    megjelenit(list, document.getElementById("csempek"));
    tablaMegjelenit(list, document.getElementById("tabla"));
    tablaMegjelenit2(list, document.getElementById("tabla2"));
    addSorInit();


    console.log(altalEletkor(list));
    console.log(emberekOsszesen(list));
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

function tablaMegjelenit(list, htmlElement) {
    let tabla = document.getElementById("torolheto-tbl");
    let htmlKod = "";
    if (tabla) {
        tabla.remove();
    }
    if (list.length != 0) {

        htmlKod = `<table id="torolheto-tbl">
                        <thead>
                            <tr>`;
        let keys = Object.keys(list[0]);

        for (let index = 0; index < keys.length; index++) {
            htmlKod += `<th>${keys[index]}</th>`;
            
        }
        htmlKod += `    </tr>
                    </thead>
                    <tbody>`
        for (let i = 0; i < list.length; i++) {
            let aktElem = list[i];
            htmlKod += `<tr id="${i}">`
            for (const key in list[i]) {
                const element = list[i][key];
                htmlKod += `<td>${element}</td>`;
            }                
            htmlKod += `<td><button onClick="elemRemove(${i});">Törlés</button></td>`
            htmlKod += `</tr>`;
            
        }
        htmlKod += `<tr><td colspan="100%"><button onClick="addNewElemStart();">Elem hozzáadása</button></td></tr>`;
        htmlKod += `</table>`;
    }

    htmlElement.innerHTML += htmlKod;
}

function tablaMegjelenit2(list, htmlElement) {
    const TABLA = document.createElement("table");
    let FEJLEC = document.createElement("tr");
    let NEV_OSZLOP = document.createElement("th");
    let MONDAT_OSZLOP = document.createElement("th");

    NEV_OSZLOP.innerHTML += "Név";
    MONDAT_OSZLOP.innerHTML += "Mondat";
    FEJLEC.appendChild(NEV_OSZLOP);
    FEJLEC.appendChild(MONDAT_OSZLOP);
    TABLA.appendChild(FEJLEC);


    for (let i = 0; i < list.length; i++) {
        const SOR = document.createElement("tr");
        const OSZLOP_NEV = document.createElement("td");
        const OSZLOP_LEIRAS = document.createElement("td");

        OSZLOP_NEV.innerHTML += list[i].nev;
        SOR.appendChild(OSZLOP_NEV);
        OSZLOP_LEIRAS.innerHTML += list[i].mondat;
        SOR.appendChild(OSZLOP_LEIRAS);
        TABLA.appendChild(SOR);
    }

    htmlElement.appendChild(TABLA)
}

function altalEletkor(lista) {
    let osszeg = 0;
    const LISTA_HOSSZ = lista.length;
    for (let i = 0; i < LISTA_HOSSZ; i++) {
        osszeg += lista[i].kor;
    }
    return osszeg / LISTA_HOSSZ;
}

function emberekOsszesen(lista) {
    let db = lista.length;
    for (let i = 0; i < lista.length; i++) {
        db += lista[i].tesok;
    }
    return db;
}


function elemRemove(id) {
    console.log(list);
    list.splice(id, 1);        
    tablaMegjelenit(list, document.getElementById("tabla"));
    
}


function addNewElemStart() {
    let window = document.getElementById("addSor");
    window.style.display = "flex";
}

function addElem() {
    let addWindow = document.getElementById("addSor");
    let childs = addWindow.querySelectorAll("input");
    console.log(childs);

    let adatok = {};

    for (let i = 0; i < childs.length; i++) {
        adatok[childs[i].name] = childs[i].value;
        childs[i].value = "";
    }

    console.log(adatok);
    
    list.push(adatok);

    addWindow.style.display = "none";
    tablaMegjelenit(list, document.getElementById("tabla"));
}

function addSorInit() {
    let addWindow = document.getElementById("addSor");
    let htmlKod = "<form>";
    for (let i = 0; i < LIST_KEYS.length; i++) {
        let key = LIST_KEYS[i];
        htmlKod += `<label for="${key}">${key}</label>
                 <input type="text", name="${key}"/>`;
    }
    htmlKod += `<button onClick="addElem();">Hozzáadás</button></form>`
    addWindow.innerHTML += htmlKod;
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

const list = [
    {nev: "Peti", mondat: "A kedd!", szemszin : "piros", kor : 19, tesok : 2,},
    {nev: "Gergo", mondat: "A kedd masodszor!", szemszin : "piros", kor : 23, tesok : 1,},
    {nev: "Niki", mondat: "Délelőtt kint játszottam a kutyussal", szemszin : "piros", kor : 19, tesok : 1,},
    {nev: "Asztrik", mondat: "Kedden, mert ott nem történt semmi.", szemszin : "piros", kor : 19, tesok : 1,},
    {nev: "GergőT", mondat: "Kedd a legjóbb nap.", szemszin : "piros", kor : 19, tesok : 1,},
    {nev: "Sanyi", mondat: "Tegnap sikerült időben megoldani a java feladatot.", szemszin : "piros", kor : 19, tesok : 4,},
    {nev: "Márton", mondat: "Nem volt angol hétfőn", szemszin : "piros", kor : 19, tesok : 1,},
    {nev: "Dominik", mondat: "Kedd, mert a szölőben a kistraktorral tevékenykedtem.", szemszin : "kekes zold", kor : 21, tesok : 1,},
    {nev: "Marci", mondat: "Ha gyenge vagy akkor legalább ne sírj", szemszin : "piros", kor : 19, tesok : 1,},
    {nev: "Bence", mondat: "Pillanat türelmet kérek javítom a mikrofont.", szemszin : "piros", kor : 19, tesok : 1,},
];

const LIST_KEYS = ["nev", "mondat", "szemszin", "kor", "tesok"];