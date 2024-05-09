import { Loader } from "./Loader.js";
import { menu } from "./Menu.js";
import { searchForm } from "./SearchForm.js";
import { title } from "./Title.js";
const d = document;


export function header(){
    const $header = d.createElement("header");
    $header.classList.add("header");
    $header.appendChild(title()); 
    $header.appendChild(menu()); 
    $header.appendChild(searchForm()); 
    return $header;
}