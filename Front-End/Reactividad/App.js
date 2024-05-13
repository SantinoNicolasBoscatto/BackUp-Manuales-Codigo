import { Component } from "./Component.js";

const d = document;
const app = new Component({
    element: "#to-do-list",
    data: {
        to_do_list: []
    },
    template(props){
        if(props.to_do_list < 1) return `<p>No hay Tareas en la lista</p>`          
        let to_do = props.to_do_list.map(el=>`<li>${el}</li>`).join("");
        return to_do;
    }
})

d.addEventListener("DOMContentLoaded", e=>{
    app.render();
})

d.addEventListener("submit", e=>{
    if(!e.target.matches("#to-do-form")) return false;
    e.preventDefault();
    const $item = d.getElementById("to-do-item")

    const lastState = app.getState();
    lastState.to_do_list.push($item.value);
    app.setState(lastState)
    console.log(app.getState())
});