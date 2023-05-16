class Szereplo {
    #x;
    #y;
    #nev;
    constructor(szuloElem, poz, nev, iranyit, kep) {
        console.log(poz)
        this.#nev = nev;
        szuloElem.append(` <div class="${nev}" style="left: 100px; top: 100px">
                    <img src="${kep}" alt="harcos" />
                </div>`);
        this.elem = $(`.${nev}`);
        this.setPoz(poz);
        this.maxWidth = this.elem.parent().width() - 100;
        this.maxHeight = this.elem.parent().height() - 100;

        //mozgatás
        $(window).on("keypress", (e) => {
            switch (e.code) {
                case iranyit.jobb:
                    this.#setXjobb();
                    break;
                case iranyit.bal:
                    this.#setXbal();
                    break;
                case iranyit.fel:
                    this.#setYfel();
                    break;
                case iranyit.le:
                    this.#setYle();
                    break;

                default:
                // code block
            }
        });
    }

    getPoz() {
        return { x: this.#x, y: this.#y };
    }

    setPoz(poz) {
        this.#x = poz.x;
        this.#y = poz.y;
        this.elem.css("left",this.#x + "px");
        this.elem.css("top",this.#y + "px");
     
    }

    #setXjobb() {
        this.#x = this.#x > this.maxWidth ? this.maxWidth : this.#x + 10;
        this.setPoz({ x: this.#x, y: this.#y });
    }
    #setXbal() {
        this.#x = this.#x < 10 ? 0 : this.#x - 10;
        this.setPoz({ x: this.#x, y: this.#y });
    }
    #setYfel() {
        this.#y = this.#y < 10 ? 0 : this.#y - 10;
        this.setPoz({ x: this.#x, y: this.#y });
    }
    #setYle() {
        this.#y = this.#y > this.maxHeight ? this.maxHeight : this.#y + 10;
        this.setPoz({ x: this.#x, y: this.#y });
    }
}
export default Szereplo;
