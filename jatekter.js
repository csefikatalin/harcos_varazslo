import Szereplo from "./Szereplo.js";
import Targy from "./Targy.js";
class Jatekter {
    #sziklak = [];
    #etelek = [];
    #jatekter = [];
    #harcosPoz;
    #db;
    constructor() {
        const SZULOELEM = document.querySelectorAll("article")[0];
        this.maxWidth = SZULOELEM.offsetWidth - 150;
        this.maxHeight = SZULOELEM.offsetHeight - 150;
        this.jatekterGeneralas();
        this.targyGenerelas("szikla", 3, SZULOELEM, this.#sziklak);
        this.targyGenerelas("etel", 5, SZULOELEM, this.#etelek);
        console.log(this.#etelek);
        console.log(this.#sziklak);
        let harcos = document.getElementsByClassName("harcos")[0];
        const harcosom = new Szereplo(harcos, { x: parseInt(this.maxWidth/2), y: parseInt(this.maxHeight/2) }, "Harcos", {
            bal: "KeyA",
            jobb: "KeyF",
            fel: "KeyD",
            le: "KeyS",
        });
        /******Eseménykezelő a az akciók figyeléséhez */
        window.addEventListener("keypress", (e) => {
            const poz=harcosom.getPoz();
            const harcosIndex =parseInt((poz.x/100)*poz.y/100+poz.y/100)
            console.log(harcosIndex)
            if(this.#jatekter[harcosIndex]=="etel"){
                console.log("étel")
            }else  if(this.#jatekter[harcosIndex]=="szikla"){
                console.log("szikla")
            }

              
        });
    }
    targyGenerelas(tipus, db, SZULOELEM, tomb) {
        for (let index = 0; index < db; index++) {
            let hely = Math.floor(Math.random() * this.#db);
            while (this.#jatekter[hely] != "") {
                hely = Math.floor(Math.random() * this.#db);
            }

            this.#jatekter[hely] = tipus;

            let x = parseInt(hely / this.dbx) * 100;
            let y = parseInt(hely % this.dby) * 100;
            const targy = new Targy(SZULOELEM, tipus, `kepek/${tipus}.png`, {
                x: x,
                y: y,
            });
            tomb.push(targy);
        }
        console.log(this.#jatekter);
    }
    jatekterGeneralas() {
        this.dbx = parseInt(this.maxWidth / 100);
        this.dby = parseInt(this.maxHeight / 100);
        this.#db = this.dbx * this.dby;
      
        for (let index = 0; index < this.#db; index++) {
            this.#jatekter.push("");
        }
        console.log(this.#jatekter);
        this.#harcosPoz = parseInt(this.#db / 2);
        this.#jatekter[this.#harcosPoz] = "harcos";
    }
}
export default Jatekter;

/*  const varazslom = new Szereplo(varazslo, { x: 400, y: 400 }, "Varázsló", {
    bal: "KeyJ",
    jobb: "Semicolon",
    fel: "KeyK",
    le: "KeyL",
}); */
