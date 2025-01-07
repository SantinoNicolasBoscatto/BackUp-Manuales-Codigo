import { ajax } from "../helpers/ajax.js";
import api from "../helpers/wp_api.js";
import { post } from "./Post.js";
import { postCard, postCardSearch } from "./PostCard.js";

export async function router(){
    
    api.count = 1;
    const d = document;
    const $main =  d.getElementById("main")
    $main.innerHTML = null;
    let {hash, search} = location;
    
    if(!hash || hash === "#/") {
        $main.innerHTML = "<h2>Home</h2>"
        await ajax({
            url: api.POSTS,
            cbSuccess: (posts) => {
                let $fragHTML = "";
                posts.forEach(post => $fragHTML += postCard(post));
                $main.innerHTML = $fragHTML
            }
        });
    } else if (hash.includes("#/search")){
        await ajax({
            url: api.SEARCH+localStorage.getItem("search"),
            cbSuccess: (posts) => {
                if(posts.length===0) return d.querySelector("main").innerHTML = "<h3>NO SE ENCONTRARON RESULTADOS PAPU</h3>"
                let $fr = "";
                posts.forEach(post => {
                    $fr += postCardSearch(post)
                });       
                d.querySelector("main").innerHTML = $fr;
            }
        });
    } else if( hash === "#/contact"){
        $main.innerHTML = "<h2>Forms</h2>"
    }
    else{
        await ajax({
            url: `${api.POST}?slug=${hash.replace("#/","")}`,
            cbSuccess(el){
                $main.innerHTML  = post(el[0]);
            }
        })        
    }
    d.querySelector(".loader").style.display = "none"; 
}