const d = document,
    ls = localStorage;

export default function buttonFavs (btn, classRemove){                
    let fav = "Add to favs",
        remove = "Remove";
    const btnAddToFav = (btnId) => {
        let $btnId = d.getElementById(btnId);
        $btnId.classList.add(classRemove);
        $btnId.textContent = remove;
    };
    const btnRemove = (btnId) => {
        let $btnId = d.getElementById(btnId);
        $btnId.classList.remove(classRemove);
        $btnId.textContent = fav;
    };

    d.addEventListener("DOMContentLoaded", e=> {
        setTimeout(() => {
            let $wathButtons = d.querySelectorAll(btn).length;
            //console.log($wathButtons);
            for (let btnId = 1; btnId <= $wathButtons; btnId ++) {
                let favButtonId = `favButton${btnId}`;
                //console.log(favButtonId);
                if(ls.getItem(favButtonId) === "fav") btnAddToFav (favButtonId);
            }
        }, 600);
        setTimeout(() => {
            let $buttons = d.querySelectorAll(btn);
            $buttons.forEach(element => {
                element.classList.remove("none")
            });
        }, 700);
    } );

    d.addEventListener("click", e => {
        if (e.target.matches(btn)){
            if(e.target.textContent === fav){
                let btnPushId = e.target.id;
                ls.setItem(`${btnPushId}`, "fav");
                btnAddToFav(btnPushId);
                console.log(btnPushId);
            }
            else{
                let btnPushId = e.target.id;
                btnRemove(btnPushId);
                ls.setItem(`${btnPushId}`, "remove");
                ls.removeItem(btnPushId);
            }
        }
    });
}