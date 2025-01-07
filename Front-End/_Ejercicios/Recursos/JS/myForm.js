const d = document;
export default function validarFormulario(){
    const $f = document.querySelector('[data-contacto]');
    const regName = /^[a-zA-ZÀ-ÿ\s]{5,}$/;
    const regEmail = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    const regAsunto = /^[a-zA-Z0-9!@#\$%\^&*\)\(+=._-\s:]{5,30}$/;
    const regComentario =  /^[a-zA-Z0-9!@#\$%\^&*\)\(+=._-\s]{1,33}$/;
    function Validador(e){
        if(e.target===$f.nombre) {
            if(regName.test($f.nombre.value)) {
                $f.nombre.classList.remove("incorrecto");
                $f.nombre.nextElementSibling.classList.remove("visibleF");    
            }
            else {
                $f.nombre.classList.add("incorrecto");
                $f.nombre.nextElementSibling.classList.add("visibleF");
            }
        }
        if(e.target===$f.email) {
            if(regEmail.test($f.email.value)){
                $f.email.classList.remove("incorrecto");
                $f.email.nextElementSibling.classList.remove("visibleF");    
            }
            else {
                $f.email.classList.add("incorrecto");
                $f.email.nextElementSibling.classList.add("visibleF");    
            }
        }
        if(e.target===$f.asunto) {
            if(regAsunto.test($f.asunto.value)) {
                $f.asunto.classList.remove("incorrecto");
                $f.asunto.nextElementSibling.classList.remove("visibleF");
            }
            else {
                $f.asunto.classList.add("incorrecto");
                $f.asunto.nextElementSibling.classList.add("visibleF");
            }
        }
        if(e.target===$f.coment) {
            if(regComentario.test($f.coment.value)) {
                $f.coment.classList.remove("incorrecto");
                $f.coment.nextElementSibling.classList.remove("visibleF");
            }
            else {
                $f.coment.classList.add("incorrecto");
                $f.coment.nextElementSibling.classList.add("visibleF");
            }
        }
    }
    d.addEventListener("DOMContentLoaded", e=>$f.reset())
    d.addEventListener("input",e=>Validador(e))

    d.addEventListener("submit",e=>{
        // e.preventDefault();
        const $logo = d.querySelector(".logo");
        const $response = d.querySelector(".contact")
        $logo.classList.remove("none")

        fetch("https://formsubmit.co/c67844a6e217e86c1b9411bb734d8150", {
            method: "POST",
            body: new FormData(e.target)
        })
        .then(res=> res.ok? res.json():Promise.reject(res))
        .then(json=>{console.log(json)
            $logo.classList.add("none")
            $response.classList.remove("none")
            $f.reset();
            d.querySelectorAll("#contacto [required]").forEach(item=>item.classList.add("incorrecto"))
            setTimeout(() => $response.classList.add("none"),3000);
        })
        .catch(err => {
        console.log(err)
        $logo.classList.add("none")
        $response.textContent = "OCURRIO UN ERROR";
        $response.classList.remove("none")
        $f.reset();
        d.querySelectorAll("#contacto [required]").forEach(item=>item.classList.add("incorrecto"))
        setTimeout(() => $response.classList.add("none"),5000);
        })
       
    })

}