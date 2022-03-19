let d = document;

export default function searchFilters (input, selectorCards, btnSelector){
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
}