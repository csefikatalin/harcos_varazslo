class Kijelzo {
    #eletero;
    #eletElem;
    #eroElem;
    constructor(eletero, szuloElem) {
        this.#eletero = eletero;
        szuloElem.append(` <div class="TulLap h_tullap">
               
                <p>élet: <span class="elet"> ${this.#eletero.elet}</span></p>
                <p>erő: <span class="ero">${this.#eletero.ero}</span></p>
                </div>`);
        this.#eletElem = $(".h_tullap .elet");
        this.#eroElem = $(".h_tullap .ero");
    }
    setEletElem(ertek) {
        this.#eletero.elet = ertek;

        this.#eletElem.html(ertek);
    }
    setEroElem(ertek) {
        this.#eletero.ero = ertek;
        this.#eroElem.html(ertek);
    }
    getEletEro() {
        return this.#eletero;
    }
}

export default Kijelzo;
