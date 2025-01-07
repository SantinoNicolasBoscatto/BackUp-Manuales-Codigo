

// let windowsXP;
// const w = window;
// export default function PopUp(url=`https://serviprynt.com.ar`, btn=".nw", btnc=".cw", wd=800, h=600,e){ 
    
//     if(e.target.matches(btn)) 
//         windowsXP = open(`${url}`, "_blank", `height=${h},width=${wd},left=${(w.outerWidth-wd)/2},
//                         top=${(w.outerHeight-h)/2}`);
//     if(e.target.matches(btnc) && windowsXP!==undefined) {
//         windowsXP.close();
//         windowsXP = undefined;
//     }

// }

export default function formu(form){
    const $form = document.getElementById(form);
    let win;
    addEventListener("submit", e=>{
        if(e.target === $form){
            win = open($form.url.value, "_blank", `height=${$form.alto.value},width=${$form.ancho.value},
            left=${(window.outerWidth-$form.ancho.value)/2},top=${(window.outerHeight-$form.alto.value)/2}`)
            $form.op.setAttribute("disabled","")
            $form.close.removeAttribute("disabled","")
            e.preventDefault();
        }
    })

    addEventListener("click", e=>{
        if(e.target === $form.close){
            if(win!==undefined){
                win.close();
                win = undefined;
                $form.op.removeAttribute("disabled","")
                $form.close.setAttribute("disabled","")
            }
        }
    })
}