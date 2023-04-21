class Szereplo {
    #x;
    #y;
    #elet;
    #ero;
    #nev;
    constructor(htmlElem, poz, nev, iranyit) {
        this.#nev = nev;
        this.elem = htmlElem;
        this.#elet = 200;
        this.#ero = 100;
        this.tullapElem = document.getElementsByClassName("h_tullap")[0];
        this.tullapBeallitas();
        console.log(poz);

        this.setPoz(poz);
        this.maxWidth = this.elem.parentElement.offsetWidth - 150;
        this.maxHeight = this.elem.parentElement.offsetHeight - 150;
        //mozgatás
        window.addEventListener("keypress", (e) => {
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

    setElet(n) {
        this.#elet += n;
        if (this.#elet > 300) {
            this.#elet = 300;
        }
        if (this.#elet < 0) {
            this.#elet = 0;
            alert(this.#nev + " Meghalt!");
        }
        this.eletElem.innerHTML = this.#elet;
    }
    setEro(n) {
        this.#ero += n;
        if (this.#ero < 0) {
            this.#ero = 0;
        }
        this.eroElem.innerHTML = this.#ero;
    }
    getPoz() {
        return { x: this.#x, y: this.#y };
    }

    setPoz(poz) {
        this.#x = poz.x;
        this.#y = poz.y;
        this.elem.style.left = this.#x + "px";
        this.elem.style.top = this.#y + "px";
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

    tullapBeallitas() {
        this.tullapElem.children[0].innerHTML = this.#nev;
        this.eletElem = this.tullapElem.children[1].children[0];
        this.eroElem = this.tullapElem.children[2].children[0];

        this.eletElem.innerHTML = this.#elet;
        this.eroElem.innerHTML = this.#ero;
    }
}
export default Szereplo;
