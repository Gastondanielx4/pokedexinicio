const d = document,
    ls = localStorage;

export default function buttonFavs (classBtn, classRemove){                
    let fav = "Add to favs",
        remove = "Remove";
    
    let arrayFavs = [];

    function favorito (btn, status) {
        this.btn = btn;
        this.status = status;
    }
    /* CUANDO AGREGO AL FAVORITO, EL TEXT CONTENT TIENE QUE SER IGUAL A REMOVE */
    const btnAddToFav = (btnId) => {
        let $btnId = d.getElementById(btnId);
        $btnId.classList.add(classRemove);
        $btnId.textContent = remove;
        
        let newFav = new favorito(btnId, remove);
        arrayFavs.push(newFav)
        ls.setItem('favList', JSON.stringify(arrayFavs))
    };
    /* CUANDO ELIMINO AL FAVORITO, EL TEXT CONTENT TIENE QUE SER IGUAL A ADD TO FAVS */
    const btnRemove = (btnId) => {
        let $btnId = d.getElementById(btnId);
        $btnId.classList.remove(classRemove);
        $btnId.textContent = fav;

        let index = arrayFavs.map(el => el.btn).indexOf(`${btnId}`)
        arrayFavs.splice(index, 1);
        ls.setItem('favList', JSON.stringify(arrayFavs))
    };

    d.addEventListener("DOMContentLoaded", e=> {
        setTimeout(() => {/* PARA QUE AL CARGAR EL DOCUMENTO SE AGREGEN LOS FAVORITOS ANTERIORES */
            let $butonsID = d.querySelectorAll(classBtn),
                favButtonId= "",
                storedFavList = ls.getItem('favList'),
                favListParseada = JSON.parse(storedFavList);

            $butonsID.forEach(element => {
                    favButtonId = (element.id);
                    favListParseada.forEach(el => {
                        if (el.btn === favButtonId) btnAddToFav (favButtonId);
                    });                                 
            });
        }, 400);
        
        setTimeout(() => {
            let $buttons = d.querySelectorAll(classBtn);
            $buttons.forEach(element => {
                element.classList.remove("none")
            });
        }, 500);
    } );

    d.addEventListener("click", e => {
        if (e.target.matches(classBtn)){
            if(e.target.textContent === fav){
                let btnPushId = e.target.id;
                btnAddToFav(btnPushId);
            }
            else{
                let btnPushId = e.target.id;
                btnRemove(btnPushId);
            }
        }
    });
}