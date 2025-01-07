export default function CountDown(tiempo, clase=".cuenta"){
    const $cuenta = document.querySelector(clase);  
    tiempo = new Date(tiempo);
    if(isNaN(tiempo.getTime())) return $cuenta.textContent = "FORMATO NO VALIDO"
    if(tiempo.getTime()<Date.now()) return $cuenta.textContent = "Esta Fecha Ya Paso"
    tiempo = new Date(tiempo.getTime() - Date.now());   
    const cantidadMSxDia = 86400000;
    const cantidadMSxhora = 3600000;
    const cantidadMSxMinuto = 60000;
    $cuenta.textContent = `Cuenta Atras: X Dias, X Horas,  X Minutos, X segundos`
    const clean = setInterval(() => {
        if(tiempo.getTime()>-1) {
            let d = Math.floor(tiempo.getTime()/cantidadMSxDia),
                h = ("0" + Math.floor((tiempo.getTime()/cantidadMSxhora)%24)).slice(-2),
                m = ("0"+Math.floor((tiempo.getTime()/cantidadMSxMinuto)%60)).slice(-2),
                s = ("0"+Math.floor((tiempo.getTime()/1000)%60)).slice(-2)
            $cuenta.textContent = `Cuenta Atras: ${d} Dias,  ${h} Horas, ${m} Minutos, ${s} segundos`
            tiempo.setTime(tiempo-1000)   
        }       
        else {
            clearInterval(clean)
            $cuenta.textContent = "SE TERMINO REY";
        }
    }, 1000);
}