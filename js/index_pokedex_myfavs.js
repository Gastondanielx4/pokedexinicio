import buttonFavs from "./buttons_favs.js";
import colorearHeader from "./color_header.js";
import filterFav from "./filter_favs.js";
import getData from "./get_pokemon.js";
import hamburgerMenu from "./menu_hamburguer.js";
import responsiveMedia from "./responsive_design.js";

let d = document,
    w = window;

d.addEventListener("DOMContentLoaded", (e) => {
    colorearHeader("headerStatic");
    hamburgerMenu(".panel-btn","#nav", "#nav a");
    getData();
    responsiveMedia("divCards", "(max-width: 1216px)");
    
});
buttonFavs(".favButton","remove");
filterFav(".col",".contenedor",".favButton");