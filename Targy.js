class Targy {
    #poz = {};
    constructor(szuloElem, tipus, eleresiut, poz) {
        this.#poz.x = poz.x;
        this.#poz.y = poz.y;

        szuloElem.innerHTML += `<div class="targy ${tipus}" style="left: 0px; top: 0px; z-index:-10"><img src=${eleresiut} alt=""></div>`;

        this.targyElem = document.querySelector(`.${tipus}:last-child`);

        this.targyElem.style.left = poz.x + "px";
        this.targyElem.style.top = poz.y + "px";
    }
    getPoz() {
        return this.#poz;
    }
}
export default Targy;
