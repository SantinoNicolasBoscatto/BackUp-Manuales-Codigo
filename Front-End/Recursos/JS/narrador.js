const w = window;
const d = document;
export default function Narrador(){
    const $select = document.querySelector('[data-narrador]')
    let array = [];
    let styleSheet = document.styleSheets[0];
    const sp = speechSynthesis;
    let keyframes =`@keyframes move {0% { transform: translateX(0);}
                                25% { transform: translateX(-7px);}
                                50% { transform: translateX(7px); }
                                100% { transform: translateX(0); }
                                                }`;
    function startAnimation() {
        $select.style.animation = 'none';
        $select.offsetHeight; 
        $select.style.animation = 'move .2s linear';
    }
    function voice(){
        sp.getVoices().forEach((voz, index)=>{
            const $option = d.createElement("option");
            $option.value = index;
            $option.textContent = voz.name;
            $select.insertAdjacentElement("beforeend", $option)
            array.push(voz);
        })
    } 
    d.addEventListener("DOMContentLoaded",e=>{
        sp.addEventListener("voiceschanged", e=>voice())
        if(sp.getVoices().length!==0) voice();
    })
    d.addEventListener("click", e=>{
        if(e.target.matches('[data-lector]')) {
            if($select.value!=="999"){
                let lector = new SpeechSynthesisUtterance(d.querySelector('[data-texto]').value);
                lector.voice = array[$select.value];
                w.speechSynthesis.speak(lector);
            }
            else {
                
                styleSheet.insertRule(keyframes, styleSheet.cssRules.length);
                startAnimation();
            }
        }
    })
}

