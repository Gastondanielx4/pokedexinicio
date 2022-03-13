let d = document;

export default function filterFav (selectorCards, contenedor, classBtn){

    d.addEventListener("DOMContentLoaded", (e) =>{        
        let $contenedor = d.querySelector(contenedor)
        setTimeout(() => {
            $contenedor.classList.remove("none")
            let $buttons = d.querySelectorAll(selectorCards);
            $buttons.forEach(el => {
                el.textContent.toLowerCase().includes("remove")
                ? el.classList.remove("filter")
                :el.classList.add("filter");
            })
            d.addEventListener("click", e => {
                if (e.target.matches(classBtn)){
               let $cardDelete = (e.target).parentNode.parentNode.parentNode;
                $cardDelete.classList.add("filter");
                }
            });     
        }, 600);
    })
}



