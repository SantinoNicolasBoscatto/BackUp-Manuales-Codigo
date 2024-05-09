import { Loader } from "./components/Loader.js";
import { main } from "./components/Main.js";
import { router } from "./components/Router.js";
import { header } from "./components/header.js";
import { infiniteScroll } from "./components/infiniteScroll.js";


const d = document;
const $root = d.querySelector(".root")

export function App(){  
    $root.innerHTML = null;
    $root.appendChild(header())
    $root.appendChild(main())
    $root.appendChild(Loader())
    router();
}

window.addEventListener("scroll", async e=>{
    await infiniteScroll();
});