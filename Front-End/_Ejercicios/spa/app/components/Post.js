export function post(props){
    let {title, content, date, slug} = props
    let dateF = new Date(date).toLocaleDateString();
    
    return `
    <section class="post-pages">
    <aside>
        <h2>${title.rendered}</h2>
        <time datetime="${date}">${dateF}</time>
    </aside>
    <hr>
    <article>
        ${content.rendered}
    </article>
    </section>
    `
}
