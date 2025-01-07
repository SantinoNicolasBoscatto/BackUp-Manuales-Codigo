// export default function MoverPelota($pelota, claseContainer=".pelota-container"){
//     let moveAmountX = 0;
//     let moveAmountY = 0;
//     let distanciaX = $pelota.offsetLeft;
//     let distanciaY = $pelota.offsetTop;
//     addEventListener("keydown", (e)=>{
//         let $w = getComputedStyle(document.querySelector(claseContainer)).getPropertyValue("width");
//         let $h = getComputedStyle(document.querySelector(claseContainer)).getPropertyValue("height"); 
//         console.log($h)   
//         console.log(distanciaY)   
//         if(e.key === "ArrowRight" && (distanciaX+120)<parseInt($w)){
//             moveAmountX += 20;
//             distanciaX +=20;
//             $pelota.style.transform = `translate(${moveAmountX}px,${moveAmountY}px)`
//         }
//         if(e.key === "ArrowLeft" && (distanciaX)>20){
//             moveAmountX -= 20;
//             distanciaX -=20;
//             $pelota.style.transform = `translate(${moveAmountX}px,${moveAmountY}px)`
//         }
//         if(e.key === "ArrowUp" && (distanciaY)>20){
//             moveAmountY -= 20;
//             distanciaY -= 20;
//             $pelota.style.transform = `translate(${moveAmountX}px,${moveAmountY}px)`
//         }
//         if(e.key === "ArrowDown"&& (distanciaY+120)<parseInt($h)){
//             moveAmountY += 20;
//             distanciaY += 20;
//             $pelota.style.transform = `translate(${moveAmountX}px,${moveAmountY}px)`
            
//         }
//         e.preventDefault()
//     })
// }
const $pelota = document.querySelector(".Pelota");
let moveAmountX = 0,
    moveAmountY = 0; 
let distanciaX = $pelota.offsetLeft,
    distanciaY = $pelota.offsetTop  
    
export default function MoverPelota(e, claseContainer=".pelota-container"){
        let limitBall = $pelota.getBoundingClientRect();
        let limitContainer = document.querySelector(claseContainer).getBoundingClientRect();
        let $w = getComputedStyle(document.querySelector(claseContainer)).getPropertyValue("width");
        let $h = getComputedStyle(document.querySelector(claseContainer)).getPropertyValue("height"); 
        const move = (direction)=>{
            switch (direction) {
                case "ArrowRight":
                    moveAmountX += 15;
                    $pelota.style.transform = `translate(${moveAmountX}px,${moveAmountY}px)`
                    break;
                case "ArrowLeft":
                    moveAmountX -= 15;
                    $pelota.style.transform = `translate(${moveAmountX}px,${moveAmountY}px)`
                    break;
                case "ArrowUp":
                    moveAmountY -= 15;
                    $pelota.style.transform = `translate(${moveAmountX}px,${moveAmountY}px)`
                    e.preventDefault();
                    break;
                case "ArrowDown":
                    moveAmountY += 15;
                    $pelota.style.transform = `translate(${moveAmountX}px,${moveAmountY}px)`
                    e.preventDefault();
                    break;            
                default:
                    break;
            }
        }
        if(e.key === "ArrowRight" && limitBall.right+15<limitContainer.right)move(e.key)
        if(e.key === "ArrowLeft" && limitBall.left-15>limitContainer.left)move(e.key)
        if(e.key === "ArrowUp" && limitBall.top-15>limitContainer.top)move(e.key)
        if(e.key === "ArrowDown"&& limitBall.bottom+15<limitContainer.bottom)move(e.key)
        
}

