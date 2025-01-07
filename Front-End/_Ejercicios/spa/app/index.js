import { App } from "./App.js";

const d = document;
let id;

d.addEventListener("DOMContentLoaded", e=>{
    App();
})

window.addEventListener("hashchange", e =>{
    App();
});

