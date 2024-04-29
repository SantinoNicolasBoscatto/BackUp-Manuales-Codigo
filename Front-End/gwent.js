import get from "./fetchGwent.js";

const d = document;


d.addEventListener("DOMContentLoaded", get())

d.addEventListener("click", e=>{
    if(e.target.matches("#Cirila")) get("1")
    if(e.target.matches("#Jaskier")) get("2")
    if(e.target.matches("#Geralt")) get("3")
    if(e.target.matches("#Vesemir")) get("4")
})