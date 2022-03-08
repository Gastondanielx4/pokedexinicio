let d = document,
    w = window;

export default function colorearHeader (header){    
    let $header = d.getElementById(header);

    w.addEventListener("scroll", e =>{
        let scrollTop = w.pageYOffset || d.documentElement.scrollTop;
        if(scrollTop > 100) {
            $header.classList.add("is-active-nav")
        }else{
            $header.classList.remove("is-active-nav")
        }
    });
} 