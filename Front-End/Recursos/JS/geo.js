export default function getGeolocalizacion(clase=".geo"){

    const options = {
        enableHighAccuracy: true,
        timeout: 5000,
        maximumAge: 0
    };

    const geo = (pos)=>{
        const lat = pos.coords.latitude;
        const lon = pos.coords.longitude;
        const pre = pos.coords.accuracy;
        // const $lat = document.createElement("li");
        // const $lon = document.createElement("li");
        // const $pre = document.createElement("li");
        // $lat.textContent = "Latitud: "+lat;
        // $lon.textContent = "Longitud: "+lon;
        // $pre.textContent = "Precision: "+pre;
        // const $frag = document.createDocumentFragment();
        // $frag.appendChild($lat)
        // $frag.appendChild($lon)
        // $frag.appendChild($pre)
        //  const $a = document.createElement("a");
        // $a.setAttribute("href",``);
        // $a.setAttribute("target", "_blank");
        // $a.textContent = "Ver Mi localizacion";
        // $frag.appendChild($a)
        // document.querySelector(clase).appendChild($frag);
        document.querySelector(clase).innerHTML = 
        `<li>Latitud ${lat}</li><li>Longitud ${lon}</li><li>Precision ${pre}</li> 
        <a rel="noopener" href="https://www.google.com/maps/search/?api=1&query=${lat},${lon}" target="_blank">Ver Mi localizacion</a>`
    } 
    const error = (err)=>{
        document.querySelector(clase).innerHTML = `<p><mark>ERROR HABILITE LA UBICACION ${err.toString()}</mark></p>`
    }
    navigator.geolocation.getCurrentPosition(geo,error, options)
}