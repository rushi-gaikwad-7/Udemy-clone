
function doSlide(items,idprev,idnext){
    
    for(let i=0;i<items.length;i++){
        if(i<5){
            items[i].style.display="block";
        }
    }
   
   
    document.getElementById(idprev).addEventListener("click",prev)
    function prev(){
       for(let i=0;i<items.length;i++){
           if(i<5){
               items[i].style.display="block";
           }else{
               items[i].style.display="none";
           }
       }
    }
    document.getElementById(idnext).addEventListener("click",next)
    function next(){
       for(let i=0;i<items.length;i++){
           if(i<5){
               items[i].style.display="none";
           }else{
               items[i].style.display="block";
           }
       }
    }
   }
   
   
   export default doSlide;