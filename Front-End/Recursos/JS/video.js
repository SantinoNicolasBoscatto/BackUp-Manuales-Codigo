const d = document;
export default function ReproducirVideo(){
    const $listaVideo = d.querySelectorAll("[data-video]")
    function cb(entries){
        entries.forEach(entry=>{
            if(entry.isIntersecting) entry.target.play();
            else entry.target.pause();

            window.addEventListener("visibilitychange", () => {
                if (document.visibilityState !== "visible") {
                  document.title = "Vuelve!"
                  $listaVideo.forEach(item=>item.pause())        
                }
                else{
                    document.title = "DOM"
                    const observerTwo = new IntersectionObserver(cb, {threshold:0.6})
                    $listaVideo.forEach(item=>observerTwo.observe(item))
                }
              });
        })
    }
    const observer = new IntersectionObserver(cb, {threshold:0.6})
    $listaVideo.forEach(item=>observer.observe(item))

        
};