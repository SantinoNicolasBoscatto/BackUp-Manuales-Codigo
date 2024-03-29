
export default function WebCam(width=800, height=600, clase){
    const w = width;
    const constraint = {
        video: {
            width: width.value,
            height: height.value
        }
    }
    navigator.mediaDevices.getUserMedia(constraint)
    .then((stream)=>{
        const $video = document.createElement("video");
        $video.srcObject = stream;
        const container = document.getElementById(clase)
        $video.autoplay = true;
        container.appendChild($video)
    })
    .catch(function(err) {
        const container = document.getElementById(clase)
        container.innerHTML = `<h5><mark>Por Favor Active los permisos de la camara</mark></h5>`
        // console.error('Error al acceder a la cámara:', err);
    });

}