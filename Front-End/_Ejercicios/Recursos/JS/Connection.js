const d= document;
const w = window;
const c= navigator;
export default function connection(){

    const $nav = d.createElement("nav")
    $nav.classList.add("conn");
    d.body.insertAdjacentElement("beforeend", $nav)
    w.addEventListener("online", e=>{
        $nav.style.opacity = ".9";
        $nav.style.backgroundColor = "green";
        $nav.style.visibility = "visible";
        $nav.textContent = "RECONECTADO"
        let sto = setTimeout(() => {
            if($nav.style.backgroundColor==="green"){
                $nav.style.opacity = "0";
                $nav.style.visibility = "hidden";
            }
            clearTimeout(sto)
        }, 4000);
    })

    w.addEventListener("offline", e=>{
        $nav.style.opacity = ".9";
        $nav.style.backgroundColor = "red";
        $nav.style.visibility = "visible";
        $nav.textContent = "DESCONECTADO"
    })
}