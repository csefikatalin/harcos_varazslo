class Info {
    #tartalom = [];
    constructor(cim, tartalom, szuloElem) {
        let text = ` <div class="info">
                        <button>❌</button>
                        <h3>${cim}</h3>
                       
                    `;

        tartalom.forEach((element) => {
            text += ` <p>${element}</p> `;
        });
        text += `</div>`;
        szuloElem.append(text);
        this.infoElem = $(".info");
        this.bezarElem = $(".info button");
        this.bezarElem.on("click", () => this.infoElem.hide());
    }
}
export default Info;
/*
["A harcos a mammutot űzte, amikor ebbe a barlangba ért. Nem tudta, hogy ez egy különleges "ZéroGravitáció"
            Barlang. A mammuton kívül, itt minden lebeg a levegőben, ezért kardcsapással nem tudja legyőzni a mammutot.",
            "Az egyetlen lehetőség, ha minél többet eszik és erősödik. Amennyiben az élete és az erejének az összege
            több, mint 130, úgy rá tud kattintani a mammutra, és a mammut eltűnik.",
            "A Harcost az A S D F billentyűkkel tudod irányítani!"]
            */
