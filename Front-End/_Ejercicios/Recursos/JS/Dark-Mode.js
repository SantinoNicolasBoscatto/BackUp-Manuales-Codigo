
// export default function DarkMode(clase=".dark-button",...array){
const ls = localStorage;
export default function DarkMode(btn=".dark-button",dataAtributo="data-dark", clase="dark-mode"){     
    addEventListener("click", e=>{
        if(e.target.matches(btn) || e.target.matches(`${btn} *`)){
            modos(dataAtributo, clase,btn)
     }
    })

    addEventListener("DOMContentLoaded", e=>{
        if(ls.getItem('Mode')==="L") modos(dataAtributo,clase, btn);
    })
}
export const modos = (dataAtributo,clase, btn)=> {
        const $darkbutton = document.querySelector(btn);
        const $icon = document.querySelector(`${btn} i`)
        const $elemt = document.querySelectorAll(`[${dataAtributo}]`);
        $elemt.forEach(el=>el.classList.toggle(clase));
        $darkbutton.classList.toggle("light");

        if($icon.classList.contains("fa-sun")){ 
            $icon.className = "fa-solid fa-moon fa-2x";
            ls.setItem("Mode", "L");
        }
        else {
            $icon.className = "fa-solid fa-sun fa-2x";
            ls.setItem("Mode", "D");
        }
}


 // addEventListener("click", e=>{
        
    //     if(e.target.matches(clase) || e.target.matches(`${clase} *`)){
    //         array.forEach((item)=>{
    //             const $elem =  document.querySelectorAll(item)
    //             $elem.forEach(el=>{
    //                 el.classList.toggle("dark-mode");
    //             })
                   
    //         })
    //         const $darkbutton = document.querySelector(clase);
    //         $darkbutton.classList.toggle("light");
    //         const $icon = document.querySelector(`${clase} i`)
    //         if($icon.classList.contains("fa-sun")) $icon.className = "fa-solid fa-moon fa-2x"
    //         else $icon.className = "fa-regular fa-sun fa-2x"
    //     }
        
    // })

