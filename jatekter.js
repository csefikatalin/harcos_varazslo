import Szereplo from "./Szereplo.js";
import Targy from "./Targy.js";
import Kijelzo from "./Kijelzo.js";
class Jatekter {
    #sziklak = [];
    #etelek = [];
    #jatekter = [];
    #harcosPoz;
    #db;
    #maxWidth;
    #maxHeight;
    #harcosom = {};
//png
    constructor() {
        this.#init();
        /******Eseménykezelő a az akciók figyeléséhez */
        $(window).on("keypress", (e) => {
            const poz = this.#harcosom.getPoz();

            const harcosIndex = parseInt(
                parseInt(poz.y / 100) * this.dbx + parseInt(poz.x / 100)
            );

            if (this.#jatekter[harcosIndex].includes("etel")) {
                this.kijelzo.setEletElem(this.kijelzo.getEletEro().elet + 10);
                this.#talalat(this.#etelek, 4, harcosIndex);
            } else if (this.#jatekter[harcosIndex].includes("szikla")) {
                this.kijelzo.setEroElem(this.kijelzo.getEletEro().ero + 10);
                this.#talalat(this.#sziklak, 6, harcosIndex);
            }
            this.#jatekter[harcosIndex] = "torol";
        });
    }
    #talalat(tomb, n, harcosIndex) {
        let elem = this.#jatekter[harcosIndex];
        let elemIndex = elem.slice(n, n + 1);
        tomb[elemIndex].targyElem.remove();
        delete tomb[elemIndex];
    }

    #init() {
        this.kijelzo = new Kijelzo(
            { elet: 100, ero: 100 },
            $(".tulajdonsaglap")
        );
        const SZULOELEM = $("article");
        this.#maxWidth = SZULOELEM.width();
        this.#maxHeight = SZULOELEM.height();
        this.#jatekterGeneralas();
        this.#targyGenerelas("szikla", 3, SZULOELEM, this.#sziklak);
        this.#targyGenerelas("etel", 5, SZULOELEM, this.#etelek);
        console.log(this.#harcosPoz);
        this.#harcosom = new Szereplo(
            SZULOELEM,
            {
                y: parseInt(this.#harcosPoz / this.dbx) * 100,
                x: parseInt(this.#harcosPoz % this.dbx) * 100,
            },
            "Harcos",
            {
                bal: "KeyA",
                jobb: "KeyF",
                fel: "KeyD",
                le: "KeyS",
            },
            "kepek/harcos.png"
        );
    }
    #targyGenerelas(tipus, db, SZULOELEM, tomb) {
        for (let index = 0; index < db; index++) {
            let hely = Math.floor(Math.random() * this.#db);
            while (
                this.#jatekter[hely] == "szikla" ||
                this.#jatekter[hely] == "etel"
            ) {
                hely = Math.floor(Math.random() * this.#db);
            }

            this.#jatekter[hely] = tipus + index;

            let y = parseInt(hely / this.dbx) * 100 + 25;
            let x = parseInt(hely % this.dbx) * 100 + 25;
            const targy = new Targy(
                SZULOELEM,
                tipus,
                `kepek/${tipus}.PNG`,
                {
                    x: x,
                    y: y,
                },
                index
            );
            tomb.push(targy);
        }
    }
    #jatekterGeneralas() {
        this.dbx = parseInt(this.#maxWidth / 100);
        this.dby = parseInt(this.#maxHeight / 100);
        const rootElem = $(":root");
        rootElem.css("--dbx", this.dbx);
        rootElem.css("--dby", this.dby);
        this.#db = this.dbx * this.dby;
        for (let index = 0; index < this.#db; index++) {
            this.#jatekter.push("");
        }
        this.#harcosPoz = parseInt((this.#db * 2) / 3);
    }
}
export default Jatekter;

/*  const varazslom = new Szereplo(varazslo, { x: 400, y: 400 }, "Varázsló", {
    bal: "KeyJ",
    jobb: "Semicolon",
    fel: "KeyK",
    le: "KeyL",
}); */
