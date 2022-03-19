const d = document,
    ls = localStorage;
export default function buttonFavs (classBtn, classRemove){                
    let fav = "Add to favs",
        remove = "Remove",
        arrayFavs = undefined;
    if(ls.getItem("favList") === null ) arrayFavs = [];
        else{
            arrayFavs = ls.getItem("favList");
            arrayFavs = JSON.parse(arrayFavs);
        }
    function favorito (btn, name) {
        this.btnId = btn;
        this.name = name;
    };
    const btnAddToFav = (btnId, btnPushName) => {
        let $btnId = d.getElementById(btnId);
        $btnId.classList.add(classRemove);
        $btnId.textContent = remove;
        
        let newFav = new favorito(btnId, btnPushName);
        arrayFavs.push(newFav)
        ls.setItem('favList', JSON.stringify(arrayFavs))
    };
    const btnRemove = (btnId, btnPushName) => {
        let $btnId = d.getElementById(btnId);
        $btnId.classList.remove(classRemove);
        $btnId.textContent = fav;

        let index = arrayFavs.map(el => el.btnId).indexOf(`${btnId}`)
        arrayFavs.splice(index, 1);
        ls.setItem('favList', JSON.stringify(arrayFavs))
    };
    d.addEventListener("click", e => {
        if (e.target.matches(classBtn)){
            if(e.target.textContent === fav){
                let btnPushId = e.target.id,
                    btnPushName= e.target.dataset.name
                btnAddToFav(btnPushId, btnPushName);
            }else{
                let btnPushId = e.target.id,
                btnPushName= e.target.dataset.name
                btnRemove(btnPushId, btnPushName);
            }
        }
    });
}