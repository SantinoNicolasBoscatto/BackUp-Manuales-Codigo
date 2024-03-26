const w = window;
const d = document;
export default function ScrollUp(clase){
    const $scrollButton = document.querySelector(clase);
    w.addEventListener("scroll",(e)=>{   

        if(scrollY>600 && getComputedStyle($scrollButton).getPropertyValue('visibility')==='hidden')     
            $scrollButton.classList.remove("scroll-hidden")
        if(scrollY<600 && getComputedStyle($scrollButton).getPropertyValue('visibility')!=='hidden')        
            $scrollButton.classList.add("scroll-hidden")
            
    })

    d.addEventListener("click", (e)=>{
        if(e.target.matches(clase) || e.target.matches(`${clase} *`))w.scrollTo({
            behavior: "smooth",
            top: 0})
    })
}