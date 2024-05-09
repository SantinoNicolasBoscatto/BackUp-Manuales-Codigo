export function postCard(props){
    let {title, date,slug, _embedded, id} = props;
    let dateFormat = new Date(date).toLocaleDateString();
    let urlPoster = _embedded["wp:featuredmedia"]? _embedded["wp:featuredmedia"][0].source_url 
    : "app/assets/circles.svg";
    return `<article class="post-card">
                <img src="${urlPoster}" class="MyImg"/>
                <h2>${title.rendered}</h2>
                <p>
                    <time datetime="${date}">${dateFormat}</time>
                    <a href="#/${slug}" data-id="${id}" class="postRoute">Ver Publicacion</a>
                </p>
            </article>`;
}

// FUNCION PARA ARMAR HTML CON LA BUSQUEDA
export function postCardSearch(props){
    let {title, _embedded, id} = props;
    let dateFormat = new Date(_embedded.self[0].date).toLocaleDateString();
    let urlPoster = _embedded.self[0]["yoast_head_json"]["og_image"]? 
                    _embedded.self[0]["yoast_head_json"]["og_image"][0].url 
                    : "app/assets/circles.svg";
    return `<article class="post-card">
                <img src="${urlPoster}" class="MyImg"/>
                <h2>${title}</h2>
                <p>
                    <time datetime="${_embedded.self[0].date}">${dateFormat}</time>
                    <a href="#/${_embedded.self[0].slug}" data-id="${id}" class="postRoute">Ver Publicacion</a>
                </p>
            </article>`;
}