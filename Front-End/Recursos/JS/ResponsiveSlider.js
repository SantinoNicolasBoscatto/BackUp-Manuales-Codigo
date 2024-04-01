const d = document;
let index = 0;
let bdInterval=false;
let myInterval;
const Next = (clase)=>{
    const $lista_slider = d.querySelectorAll(clase);
    for (const item of $lista_slider) {
        if(getComputedStyle(item).display==="flex"){
            item.style.visibility = "hidden";
            item.style.opacity = "0";
            item.style.transform = "translateX(40%)  rotateZ(30deg)";
            
            if(index<$lista_slider.length-1)index++;                           
            else index = 0;
            setTimeout(() => { 
                item.style.display = "none"
                if(item !==  $lista_slider[0]) item.style.transform = "translateX(0%) rotateZ(25deg)"
                else item.style.transform = "translateX(40%) rotateZ(25deg)"
                $lista_slider[index].style.display = "flex";
            }, 200);
            
            setTimeout(() => {
                $lista_slider[index].style.visibility = "visible";
                $lista_slider[index].style.opacity = "1";
                if(index===0) $lista_slider[index].style.transform = "translateX(0%)";
                else $lista_slider[index].style.transform = "translateX(-40%)";
            }, 350);
            break;
        }
    }
}
const Back = (clase)=>{
    const $lista_slider = d.querySelectorAll(clase);
            for (const item of $lista_slider) {
                if(getComputedStyle(item).display==="flex"){
                    item.style.visibility = "hidden";
                    item.style.opacity = "0";
                    item.style.transform = "translateX(40%) rotateZ(30deg)";
                    
                    if(index>0)index--;                           
                    else index = $lista_slider.length-1;
                    setTimeout(() => { 
                        item.style.display = "none"
                        if(item !==  $lista_slider[0]) item.style.transform = "translateX(0%) rotateZ(25deg)"
                        else item.style.transform = "translateX(40%) rotateZ(25deg)"
                        $lista_slider[index].style.display = "flex";
                    }, 200);
                    
                    setTimeout(() => {
                        $lista_slider[index].style.visibility = "visible";
                        $lista_slider[index].style.opacity = "1";
                        if(index===0) $lista_slider[index].style.transform = "translateX(0%)";
                        else $lista_slider[index].style.transform = "translateX(-40%)";
                    }, 350);
                    break;
                }
            }
}
const Intervalo = (clase)=>{
    
    if(bdInterval) clearInterval(myInterval);
    if(!bdInterval) bdInterval = true;
    myInterval = setInterval(() => {
        Next(clase)
    }, 50000);
}

export default function ResponsiveSlider(clase=".slide",next=".next",back=".back"){
    Intervalo(clase);
    addEventListener("click", e =>{
        if(e.target.matches(next) || e.target.matches(`${next} *`)){
           Intervalo(clase); 
           Next(clase);
        }
        if(e.target.matches(back) || e.target.matches(`${back} *`)){
            Intervalo(clase); 
            Back(clase);
        }
    })
}