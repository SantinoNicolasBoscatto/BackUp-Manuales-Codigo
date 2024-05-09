

export function searchForm(){
    const $f = document.createElement("form");
    const $s = document.createElement("input");
    $f.classList.add("form-search");
    $s.name = "search";
    $s.type = "search";
    $s.placeholder = "Buscar...";
    if(location.hash.includes("#/search")) $s.value = localStorage.getItem("search")
    else $s.value = ""
    $f.appendChild($s)
    return $f
}

const d = document;

d.addEventListener("submit", e=>{
    if(e.target.matches(".form-search")) {
        e.preventDefault();
        localStorage.setItem("search", e.target.search.value);
        location.hash = "#/search?search="+e.target.search.value;
    }
});

