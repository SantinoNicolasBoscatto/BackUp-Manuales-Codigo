

export default function Reloj(claseStart, start, reloj, stop, claseStop){
    let cleaner;
    addEventListener("click", (e)=>{
        if(e.target.matches(claseStart) || e.target.matches(`${claseStart} *`))
        {
            start.setAttribute("disabled", "")
            stop.removeAttribute("disabled", "")
            let one = new Date();
            reloj.textContent = one.toLocaleTimeString()
            cleaner = setInterval(() => {
            reloj.textContent  = new Date().toLocaleTimeString();
            }, 1000);
        }
        if(e.target.matches(claseStop) || e.target.matches(`${claseStop} *`)){
            stop.setAttribute("disabled", "")
            start.removeAttribute("disabled", "")
            clearInterval(cleaner); 
            reloj.textContent = "";
        }
    }) 
}