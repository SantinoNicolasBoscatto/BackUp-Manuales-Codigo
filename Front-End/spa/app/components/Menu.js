export function menu(){
    const $menu = document.createElement("nav")
    $menu.classList.add("menu");
    $menu.innerHTML = 
    `<a href="#/"> Home </a>
    <span>-</span>
    <a href="#/search">Busqueda</a>
    <span>-</span>
    <a href="#/contact">Contacto</a>
    `
    return $menu;
}