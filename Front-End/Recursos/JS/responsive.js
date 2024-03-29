const d = document;
let $aux=[];
let $copy=[];

// export default function responsiveDesign(elemt="data-responsive", position="four", mq="(min-width: 900px)",...titulo){
//     addEventListener("resize", e=>{
//         if (!(window.matchMedia(mq).matches) && d.querySelector(`[${elemt}]`) !== null ) {           
//             const $elemt = d.querySelectorAll(`[${elemt}]`)
//             $elemt.forEach((item, index)=>{
//                 $copy.push(item);
//                 let $href = item.getAttribute("src")
//                 item.remove();
//                 $aux.push(d.createElement("a"))
//                 $aux[index].setAttribute("href", $href)
//                 $aux[index].setAttribute("target", "_blank")
//                 $aux[index].innerHTML = `${titulo[index]} <br> <br> <br>`
//                 const $father = d.getElementById(position)
//                 $father.insertAdjacentElement("beforeend", $aux[index])
//             })
            
//         }
//         else if(window.matchMedia(mq).matches && d.querySelector(`[${elemt}]`) === null){
//             const $father = d.getElementById(position)
//             $aux.forEach((item, index)=>{
//                 item.remove();
//                 $father.insertAdjacentElement("beforeend", $copy[index])
//             })
//             $aux=[];
//             $copy=[];
//         }
//     })
//     addEventListener("DOMContentLoaded", e=>{
//         if (!(window.matchMedia(mq).matches) && d.querySelector(`[${elemt}]`) !== null ) {           
//             const $elemt = d.querySelectorAll(`[${elemt}]`)
//             $elemt.forEach((item, index)=>{
//                 $copy.push(item);
//                 let $href = item.getAttribute("src")
//                 item.remove();
//                 $aux.push(d.createElement("a"))
//                 $aux[index].style.textDecoration = "none";
//                 $aux[index].style.color = "white";
//                 $aux[index].setAttribute("href", $href);
//                 $aux[index].setAttribute("target", "_blank")
//                 $aux[index].innerHTML = `${titulo[index]} <br> <br> <br>`
//                 const $father = d.getElementById(position)
//                 $father.insertAdjacentElement("beforeend", $aux[index])
//             })
            
//         }
//         else if(window.matchMedia(mq).matches && d.querySelector(`[${elemt}]`) === null){
//             const $father = d.getElementById(position)
//             $aux.forEach((item, index)=>{
//                 item.remove();
//                 $father.insertAdjacentElement("beforeend", $copy[index])
//             })
//             $aux=[];
//             $copy=[];
//         }
//     })
// }

export default function responsiveDesign(desktop,mobile, position, mq="(min-width: 900px)"){

    addEventListener("resize", (e)=>{
        if(window.matchMedia(mq).matches) d.getElementById(position).innerHTML = desktop;
        else d.getElementById(position).innerHTML = mobile;
    })
      
    addEventListener("DOMContentLoaded", e=>{
        if(window.matchMedia(mq).matches) d.getElementById(position).innerHTML = desktop;
        else d.getElementById(position).innerHTML = mobile;
    })
}
