
// export default function DarkMode(clase=".dark-button",...array){

export const modos = (dataAtributo,clase, $darkbutton,$icon)=> {
    const $elemt = document.querySelectorAll(`[${dataAtributo}]`)
        $elemt.forEach(el=>el.classList.toggle(clase))
        $darkbutton.classList.toggle("light");
        if($icon.classList.contains("fa-sun")){ 
            $icon.className = "fa-solid fa-moon fa-2x";
            localStorage.setItem("Mode", "L");
        }
        else {
            $icon.className = "fa-solid fa-sun fa-2x";
            localStorage.setItem("Mode", "D");
        }
        console.log(localStorage.getItem('Mode'))
}

export default function DarkMode(btn=".dark-button",dataAtributo="data-dark", clase="dark-mode"){    
    const $darkbutton = document.querySelector(btn);
    const $icon = document.querySelector(`${btn} i`)
    addEventListener("click", e=>{
        if(e.target.matches(btn) || e.target.matches(`${btn} *`)){
            modos(dataAtributo, clase,$darkbutton,$icon)
     }

    })
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

