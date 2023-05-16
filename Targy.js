class Targy {
    #poz = {};
    constructor(szuloElem, tipus, eleresiut, poz) {
        this.#poz.x = poz.x;
        this.#poz.y = poz.y;

        szuloElem.append(
            `<div class="targy ${tipus}" style="left: 0px; top: 0px; z-index:10"><img src=${eleresiut} alt=""></div>`
        );

        this.targyElem = $(`.${tipus}:last-child`);

        this.targyElem.css("left", poz.x + "px");
        this.targyElem.css("top", poz.y + "px");
    }
}
export default Targy;
export class Mammut extends Targy {
    #vaghato;
    constructor(szuloElem, tipus, eleresiut, poz) {
        super(szuloElem, tipus, eleresiut, poz);
        this.#vaghato = false;
        this.targyElem.on("click", () => {
            if (this.#vaghato) {
                this.rohan();
            }
        });
        $(window).on("remeg", () => {
            this.targyElem.addClass("remeg");
        });
    }
    set vaghato(ertek) {
        this.#vaghato = ertek;
    }
    rohan() {
        console.log(this.targyElem);
        this.targyElem.removeClass("remeg");
        this.targyElem.addClass("rohan");
        this.esemenyTrigger("jatekvege");
    }
    esemenyTrigger(esemenyNev) {
        const e = new Event(esemenyNev);
        window.dispatchEvent(e);
    }
}
