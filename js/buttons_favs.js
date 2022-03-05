const d = document;

export default function buttonFavs (btn, classRemove){                
    let fav = "Add to favs",
        remove = "Remove";
 
    const btnAddToFav = (btn) => {
        btn.classList.add(classRemove);
        btn.textContent = remove;
    };

    const btnRemove = (btn) => {
        btn.classList.remove(classRemove);
       btn.textContent = fav;
    };

    d.addEventListener("click", e => {
        if (e.target.matches(btn)){
            if(e.target.textContent === fav){
                btnAddToFav(e.target);
                //console.log(e.target.id);
            }else{
                btnRemove(e.target);
                //console.log(e.target.id);
            }
        }
    });
}