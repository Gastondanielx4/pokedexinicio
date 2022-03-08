 const d= document;
export default function getData () {

    function capitalizarPrimeraLetra(str) {
        return str.charAt(0).toUpperCase() + str.slice(1);
      }

    for (let pokemonId = 1; pokemonId < 151; pokemonId++) {
        const urlAPI = `https://pokeapi.co/api/v2/pokemon/${pokemonId}`;

        fetch(urlAPI)
        .then(response => response.json() )
        .then(dato =>{

            const arrayObtain = []
            arrayObtain.push(dato.id)


            let namePokemon = "";
           (dato.forms).forEach(element => {    
            namePokemon= capitalizarPrimeraLetra(element.name)
            /* console.log(namePokemon) */
           });
            
            const avatar = dato.sprites.front_shiny;
           /*  console.log(avatar); */

            let type1 = "",
                type2 = "",
                types= "";

            (dato.types).forEach(element => {
                if((element.slot)=== 1){
                    type1 = element.type.name;
                }
                if((element.slot)=== 2){
                    type2 = element.type.name;
                }
            });

            if (type2.length === 0){
                types = `Types: ${type1}`;
                /* console.log(`Types: ${type1}`);  */
            }
                else{
                    types = `Types: ${type1}, ${type2}`;
                    /* console.log(`Types: ${type1}, ${type2}`); */
                };

            const divPrincipal = document.querySelector('#divCards');
            let crearHTML = "";
                crearHTML = `
                <div id="card${pokemonId}" class="col">
                        <div class="card text-center" style=" height:15rem; width: 18rem; padding-top: 1rem; align-items: center;">
                            <img src="${avatar}" class="card-img-top" alt="..." style="border-radius: 100%; width: 7rem">
                            <div class="card-body">
                                <h5 class="card-title">${namePokemon}</h5>
                                <h6 class="card-subtitle mb-2 text-muted">${types}</h6>
                                <button id="favButton${pokemonId}" class="favButton none">Add to favs</button>
                            </div>
                        </div>
                </div>`;
            divPrincipal.innerHTML += crearHTML;
        })  
        
    }
}