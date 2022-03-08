const d = document,
 w= window;

 export default function responsiveMedia (id, mq){
     let breakpoint = w.matchMedia(mq);
     const responsive = (e) => {
         if(e.matches){
             d.getElementById(id).classList.remove("row-cols-md-4");
             d.getElementById(id).classList.add("row-cols-md-3");
         }else{
            d.getElementById(id).classList.remove("row-cols-md-3");
            d.getElementById(id).classList.add("row-cols-md-4");
         }
     }
     breakpoint.addListener(responsive)
     responsive(breakpoint);
 }