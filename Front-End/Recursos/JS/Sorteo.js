export default function Sortear(cbutton, lista=".sorteo"){

    addEventListener("click", e=>{
        if(e.target.matches(cbutton)){
            const $lista_li = document.querySelectorAll(`${lista}>li`);
            let ran = Math.floor(Math.random()*$lista_li.length)
            alert("El Ganador, del Mejor Lenguaje del Mundo es... "+$lista_li[ran].textContent);
        }
    })
}