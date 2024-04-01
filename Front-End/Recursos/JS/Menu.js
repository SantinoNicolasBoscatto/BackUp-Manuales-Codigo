export default function MenuBurger(borde = ".borde", side =".side", checkMenu, scrollbtn=".scroll-container"){
    addEventListener("click", (e) =>{
      console.log(window.innerWidth)
        if(window.innerWidth<1024){
          if(e.target.matches(borde) || e.target.matches(`${borde} *`) ){
            const $side = document.querySelector(".side");
            if ($side.style.transform === "translateX(-100%)"){
              $side.style.transform= "translateX(0%)";
              checkMenu.checked = true;
          }
            else {
              $side.style.transform = "translateX(-100%)";
              checkMenu.checked = false;
            }
  
          }
        
          if(e.target.matches("a") ||e.target.matches(scrollbtn)
          ||e.target.matches(`${scrollbtn} *`)){
            const $side = document.querySelector(side);
            $side.style.transform= "translateX(-100%)";
            checkMenu.checked = false;
          }
        }
      })
}