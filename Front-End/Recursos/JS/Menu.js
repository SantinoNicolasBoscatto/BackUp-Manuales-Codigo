export default function MenuBurger(borde = ".borde", side =".side", checkMenu){
    addEventListener("click", (e) =>{
        if(e.target.matches(borde) || e.target.matches(`${borde} *`)){
          const $side = document.querySelector(".side");
          // $side.style.right = ($side.style.right==="0px")? "100%" : "0" 
          if ($side.style.transform === "translateX(-100%)"){
            $side.style.transform= "translateX(0%)";
            checkMenu.checked = true;
        }
          else {
            $side.style.transform = "translateX(-100%)";
            checkMenu.checked = false;
          }

        }
      
        if(e.target.matches("a")){
          const $side = document.querySelector(side);
          $side.style.transform= "translateX(-100%)";
          checkMenu.checked = false;
        }
      })
}