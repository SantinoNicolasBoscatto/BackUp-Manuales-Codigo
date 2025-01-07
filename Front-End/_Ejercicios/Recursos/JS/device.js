const d = document;
const n = navigator;
const ua = n.userAgent;
export default function userDeviceInfo(id){
    const $id = d.getElementById(id);
    const isMobile = {
        android: ()=> ua.match(/android/i),
        ios: () => ua.match(/iphone|ipad|ipod/i),
        any(){
            return this.android() || this.ios()
        }
    }
    const isDesktop= {
        linux: () => ua.match(/linux/i),
        mac: () => ua.match(/mac os/i),
        windows: () => ua.match(/windows nt/i),
        any(){
            return this.linux() || this.mac() || this.windows()
        }
    }
    $id.innerHTML = 
    `<ul> 
        <li>User Agent: ${ua}</li>
        <li>Dispositivo: ${isMobile.any()? "Mobile": "Desktop"} </li>
    </ul>`
}