import Jatekter from "./jatekter.js";
import Info from "./Info.js";
const infoLISTA = [
    "A Harcos már napok óta űzte a Mammutot, amikor  a menekülő állat becsalta ebbe a barlangba. A barlang egy  különleges 'Levitáló' Barlang. Itt minden lebeg a levegőben, kivéve a mammutot, rá nem hat a varázs, ezért kardcsapással senki nem tudja legyőzni a vadat. (Igen, ez így logikus!)",
    "Az egyetlen lehetőség, ha a harcos minél többet eszik és erősödik. Amennyiben az élete és az erejének az összege több, mint 230, úgy rá tud kattintani a mammutra, és a mammut eltűnik.",
    "A Harcost az  <strong>  A S D F  </strong>  billentyűkkel tudod irányítani!",
];

$(function () {
    $("header h1 button").on("click", function () {
        new Info("Az elvarázsolt barlang", infoLISTA, $("body"));
    });

    new Jatekter();
});
