import { ajax } from "../helpers/ajax.js";
import wp_api from "../helpers/wp_api.js";
import { post } from "./Post.js";
import { postCard, postCardSearch } from "./PostCard.js";

const d = document


export async function infiniteScroll(){
    const {scrollTop, clientHeight, scrollHeight} = d.documentElement;
    if(scrollTop+clientHeight>=scrollHeight){ 
        let url = "";
        let $fragHTML = "";
        let Component;
        wp_api.count++;    
        d.querySelector(".loader").style.display = "block";
        if(location.hash === "#/" || !location.hash) {
            url =`${wp_api.POSTS}&page=${wp_api.count}`
            Component = postCard      
        }
        else if(location.hash.includes("#/search") ) {
            url =`${wp_api.SEARCH}${localStorage.getItem("search")}&page=${wp_api.count}`
            Component = postCardSearch
        }  
        else return false;

        await ajax({
                url: url,
                cbSuccess(posts){
                    if(posts.length === 0) return false;
                    posts.forEach(post => $fragHTML += Component(post));             
                }
        })
        d.querySelector("main").innerHTML += $fragHTML;
        d.querySelector(".loader").style.display = "none";  
    }
}