
// const person = {
//     name: "Pepe",
//     age: 33,
//     edad: null,
//     masculino: true
// }

// const array = [1,1,1,1,1]

// array.forEach((item, index)=>person[`Fotos_${index+1}`] = item)

// console.log(person)

// document.querySelector("img").setAttribute("src", "https://pbs.twimg.com/media/F1bseWhXgAUBg4R.jpg:large")

// const $imagen = document.getElementById("prue");
// $imagen.setAttribute("target", "_blank")
// $imagen.setAttribute("rel", "noopener")
// $imagen.setAttribute("href", "https://ole.com.ar")



      // const $grid = document.getElementById("grid"),
      // array = ["https://pbs.twimg.com/media/CXry-2jWYAM2gso?format=jpg&name=large", "https://media.tycsports.com/files/2022/12/22/518657/messi_1440x810_wmk.webp?v=1",
      // "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRiFLG3rSMOoTbgkSb97w-PfY8paM8ncXX30ziRjxhl04FFt9zvPuLrO5aPwguKJv7k8fU&usqp=CAU",
      // "https://cdn.resfu.com/media/img_news/titulos-de-messi-y-cristiano-ronaldo-actualizados-a-21-de-agosto-de-2023--besoccer-pro.png?size=1000x&lossy=1&ext=jpeg",
      // "https://i.pinimg.com/originals/36/32/4c/36324c9a67484c8eb0c586569ffa689f.png"],
      // $fragment = document.createDocumentFragment(),
      // $temp = document.getElementById("template-card").content;
      //   array.forEach(el => {
      //       $temp.querySelector("img").setAttribute("src", el);
      //       $temp.querySelector("img").setAttribute("alt", el);
      //       $temp.querySelector("img").style.maxWidth = "250px";
      //       $temp.querySelector("img").className = "imag"
      //       let $clone = document.importNode($temp, true);
      //       $fragment.appendChild($clone);
      //     });
      //     $grid.appendChild($fragment);

// const $but = document.getElementById("Papu");
// const $div = document.getElementById("div");
// const $body = document.getElementById("b");

// $but.addEventListener("click", (e)=>{
//   console.log("boton")
//   e.stopPropagation()
// })
// $div.addEventListener("click", ()=> console.log("div"))
// $body.addEventListener("click", ()=> console.log("body"))

// const $p = document.getElementById("reloj");
// const time = new Date()
// $p.insertAdjacentText("afterbegin", time.toLocaleTimeString())

// document.addEventListener("DOMContentLoaded", ()=> {
//    setInterval((time = new Date()) => {
//     if ($p.firstChild) $p.removeChild($p.firstChild);
//     $p.insertAdjacentText("afterbegin", time.toLocaleTimeString())
//   }, 1000)
// })
// const $pru = document.getElementById("prueba")
// let vari;
// $pru.addEventListener("click", ()=> {
//   console.log("Hola")
//   if(vari===undefined) vari =window.open("")
//   else {
//     vari.close();
//     vari = undefined;
//   }
// })

// addEventListener("click", (e)=>{
//   if(e.target.matches("#burger") || e.target.matches(".hamburger-inner") || e.target.matches(".hamburger-box")) 
//   document.getElementById("burger").classList.toggle("is-active")
// })


// ********************************************EJERCICIOS DOM******************************************************

// document.querySelector("ul").addEventListener("mouseover", (e)=> {
//   if(e.target.matches("li")){
//     const $lista = e.target;
//     const $link = $lista.firstElementChild
//     $lista.style.backgroundColor = "yellow" ;
//     $link.style.color = "#222" ;
//     e.stopPropagation()
//   }
//   if(e.target.matches("a")){
//     const $link = e.target;
//     const $lista = $link.parentElement
//     $lista.style.backgroundColor = "yellow" ;
//     $link.style.color = "#222" ;
//     e.stopPropagation()
//   }
  
// }) 

// document.querySelectorAll("li").forEach((li)=>{
//   li.addEventListener("mouseleave", (e)=> {
//     if(e.target.matches("li")){
//       if (e.target.contains(e.relatedTarget)) return;
//       const $lista = e.target;
//       const $link = $lista.firstElementChild
//       $lista.style.backgroundColor = "" ;
//       $link.style.color = "yellow" ;
//     }
//   })
// })
// addEventListener("mouseleave", (e)=> {
//   console.log("XD")
//   if(e.target.matches("li")){
//     if (e.target.contains(e.relatedTarget)) return;
//     const $lista = e.target;
//     const $link = $lista.firstElementChild
//     $lista.style.backgroundColor = "" ;
//     $link.style.color = "yellow" ;
//   }
// })

          // *********************************DEPRECADO*******************************

import Alarma from "./Alarma.js";
import Atajos from "./Atajos.js";
import MenuBurger from "./Menu.js";
import Reloj from "./Reloj.js";
import MoverPelota from "./pelota.js";
const d = document
const checkMenu = d.querySelector(".menu");
checkMenu.checked= false;
// RELOJ
const $startReloj = d.querySelector(".reloj-start")
const $stopReloj = d.querySelector(".reloj-stop")
$stopReloj.setAttribute("disabled", "");
const $reloj = d.getElementById("Timer")
console.log($reloj)
// ALARMA
const $startAlarma = d.querySelector(".alarma-start")
const $stopAlarma = d.querySelector(".alarma-stop")
$stopAlarma.setAttribute("disabled", "");
const $audio = d.getElementById("mi-audio");
addEventListener("DOMContentLoaded", (e)=>{
    MenuBurger(".borde",".side", checkMenu);
    Reloj(".reloj-start", $startReloj, $reloj, $stopReloj, ".reloj-stop");
    Alarma(".alarma-start", ".alarma-stop", $startAlarma, $stopAlarma, $audio)
    // MoverPelota( ,".pelota-container")
})
 

addEventListener("keydown", (e)=>{
    Atajos(e);
    MoverPelota(e,".pelota-container");
})
































// let actual = 0;
// let diff = 0;
// addEventListener("scroll", (e)=>{
//   console.clear()
//   diff = actual - screenY
//   actual = scrollY
//   if(actual>diff) {
//     const $nav = document.querySelector("nav");
//     $nav.style.top = "-50px";
//     $nav.style.opacity = "0";
//   }
//   else{
//     const $nav = document.querySelector("nav");
//     $nav.style.top = "0px";
//     $nav.style.opacity = "1";
//   }
// });










