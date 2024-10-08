
//AJAX CON XMLHttpRequest
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

//AJAX CON FETCH then()
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

//AJAX CON ASYNC
(()=>{
    const $fetchAsync = document.getElementById("fetch-async");
    const $frag = document.createDocumentFragment();
    async function getData(){
        try {
           let res = await fetch("https://pokeapi.co/api/v2/pokemon");
           let json = await res.json();
           if(!res.ok) throw new Error()
            json.results.forEach(el=>{
            const $li = document.createElement("li");
            $li.innerHTML = `${el.name} XD`
            $frag.appendChild($li);
        })
        $fetchAsync.appendChild($frag)
        } 
        catch (err) {
            console.error(err)
        }
    }
    getData();
})();

(()=>{
    const $axios = document.getElementById("axios");
    const $frag = document.createDocumentFragment();
    axios.get("https://pokeapi.co/api/v2/pokemon")
    .then(res=>{
        res.data.results.forEach(el=>{
            const $li = document.createElement("li");
            $li.innerHTML = `${el.name}`
            $frag.appendChild($li);
        })
        $axios.appendChild($frag)
    })
    .catch(err=>{console.error("ERROR: ", err.response.status)})
})();

(()=>{
    const $axios = document.getElementById("axios-async");
    const $frag = document.createDocumentFragment();
    async function getData(){
        try {
            let res = await axios.get("https://jsonplaceholder.typicode.com/users");
            res.data.forEach(el=>{
            const $li = document.createElement("li");
            $li.innerHTML = `${el.name}`
            $frag.appendChild($li);
        })
        $axios.appendChild($frag)
        } catch (error) {
            console.error("ERROR")
        }
    }
    getData()
})();