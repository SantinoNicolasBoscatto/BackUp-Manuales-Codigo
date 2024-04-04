
export default function ScrollSpy(){
    let $sections = document.querySelectorAll('[data-spy]');
    let $lista_a = document.querySelectorAll('[data-anchor]');
    
    let observer = new IntersectionObserver(entries=>{
        entries.forEach((entry) => {
            if (entry.isIntersecting)$lista_a[entry.target.getAttribute("data-spy")].classList.add("ancorActive");
            else $lista_a[entry.target.getAttribute("data-spy")].classList.remove("ancorActive");
          });
    },{
        threshold: [0.48,0.5]
    });
    $sections.forEach(el =>observer.observe(el))
}
