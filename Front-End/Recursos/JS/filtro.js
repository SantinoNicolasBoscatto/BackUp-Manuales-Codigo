const d = document;
export default function filtrar(cadena,container=".Card"){

    d.querySelectorAll(container).forEach(item=>{
        if(!item.lastElementChild.textContent.toLowerCase().includes(cadena.toLowerCase())) item.classList.add("ocultar")
        else if(item.classList.contains("ocultar")) item.classList.remove("ocultar")
    })
}

// export default function filtrar(cadena,c){
    
//     const container = d.getElementById(c);
//     console.time('miTemporizador');
//     for (const item of container.children) 
//     {
//         if(!item.lastElementChild.textContent.toLowerCase().includes(cadena.toLowerCase())) 
//             item.style.display = "none";
//         else if(item.style.display==="none") 
//             item.style.display = "block";
//     }
//     console.timeEnd('miTemporizador');
// }

