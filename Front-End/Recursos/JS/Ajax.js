(()=>{
    const xhr = new XMLHttpRequest();
    const $xhr = document.getElementById("xhr");
    const $frag = document.createDocumentFragment();

    xhr.addEventListener("readystatechange", e=>{
        if(xhr.readyState!==4) return;
        if(xhr.status >=200 && xhr.status<300){
            let json = JSON.parse(xhr.responseText);
            json.forEach(el => {
                const $li = document.createElement("li");
                $li.innerHTML = `${el.name} -- ${el.email} `
                $frag.appendChild($li);
            });
            $xhr.appendChild($frag);
        }
    })

    xhr.open("GET","https://jsonplaceholder.typicode.com/users")
    xhr.send();


})();

(()=>{
    const $fetch = document.getElementById("fetch");
    const $frag = document.createDocumentFragment();

    fetch("https://pokeapi.co/api/v2/pokemon")
    .then(res=>{
        return res.ok? res.json() : Promise.reject();
    })
    .then(res=>{
        res.results.forEach(el=>{
            const $li = document.createElement("li");
            $li.innerHTML = `${el.name}`
            $frag.appendChild($li);
        })
        $fetch.appendChild($frag)
    })
    .catch(err=>{
        console.log("ERROR")
    })
    .finally(()=>{

    });
})();