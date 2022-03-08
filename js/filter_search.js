let d = document,
    ls= localStorage;

export default function searchFilters (input, selectorCards, btnSelector){
    console.log(document)
    console.log(window)
    d.addEventListener("click", eClick => {
        if (eClick.target.matches(btnSelector)){     
            let valueSearch = d.querySelector(input).value;            
            //console.log(valueSearch);
            d.addEventListener("keyup", e => {
                if (e.target.matches(input)){
                    if(e.key === "Escape"){
                        e.target.value = "";                
                    }
                }
            })
            d.querySelectorAll(selectorCards).forEach(el => {
                el.textContent.toLowerCase().includes(valueSearch.toLowerCase())
                ? el.classList.remove("filter")
                :el.classList.add("filter");     
                //console.log(el);           
            });
        }
    });

    /* PARA QUE BUSQUE SIN APRETAR EL BOTON SEARCH */
    /* d.addEventListener("keyup", e => {
        if (e.target.matches(input)) {
            console.log(e.key);
            
            if(e.key === "Escape")e.target.value = "";
                //console.log(e.target.value);
            d.querySelectorAll(selector1).forEach(el => {
                el.textContent.toLowerCase().includes(e.target.value.toLowerCase())
                ? el.classList.remove("filter")
                :el.classList.add("filter");     
                //console.log(el);           
            });                    
        }
    }) */
}