const d = document;
export default function ocultarBtn(classBtn){
    d.addEventListener("click", e => {
        if (e.target.matches(classBtn)){
            let pokemonId= e.target.id,
            $cardHidden = d.getElementById(`card${pokemonId}`);
            $cardHidden.classList.add("none")
        }
    });
}