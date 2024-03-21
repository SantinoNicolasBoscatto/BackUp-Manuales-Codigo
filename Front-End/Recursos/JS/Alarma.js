export default function Alarma(claseStart, claseStop, start, stop, audio){
    addEventListener("click", (e)=>{
        if(e.target.matches(claseStart) || e.target.matches(`${claseStart} *`)){
            start.setAttribute("disabled","");
            stop.removeAttribute("disabled");
            audio.play();
        }
        if(e.target.matches(claseStop) || e.target.matches(`${claseStop} *`)){
            stop.setAttribute("disabled","");
            start.removeAttribute("disabled");
            audio.pause();
            audio.currentTime = 0;
        }
    })
}

