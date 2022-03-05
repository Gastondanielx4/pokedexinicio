import buttonFavs from "./buttons_favs.js";
import colorearHeader from "./color_header.js";
import searchFilters from "./filter_search.js";
import getData from "./get_pokemon.js";
import hamburgerMenu from "./menu_hamburguer.js";



let d = document,
    w = window;

d.addEventListener("DOMContentLoaded", (e) => {
    colorearHeader("headerStatic");
    hamburgerMenu(".panel-btn","#nav", "#nav a");
    getData();
    buttonFavs(".favButton","remove");
    searchFilters(".card-filter", ".col", ".searchButton")
});


