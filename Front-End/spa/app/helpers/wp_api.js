const NAME = "Malvestida"
const DOMAIN = "https://malvestida.com"
const SITE = DOMAIN+"/wp-json";
const API = SITE+"/wp/v2";
const POSTS = API+"/posts?_embed&per_page=6";
const POST = API+"/posts";
const SEARCH = API+"/search?_embed&search=";

let count = 1;


export default {DOMAIN,SITE,API,POSTS,POST,SEARCH,NAME, count}