const d = document;
const $titulo = d.getElementById("titulo");
const $desc = d.getElementById("desc");
const $carta = d.querySelector(".carta");

export default async function get(id="1"){
    try {
        let res = await fetch(`http://localhost:3000/Gwent/${id}`);
        if(!res.ok) throw new Error("Error Carga")
        let json = await res.json();
        $titulo.textContent = json.nombre;
        $desc.textContent = json.Descripcion;
        $carta.setAttribute("src", json.img)
    } 
    catch (err) {
        alert(err);
    }
}