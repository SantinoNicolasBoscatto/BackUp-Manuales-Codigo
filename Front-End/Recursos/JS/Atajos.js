// export default function Atajos(){
//     addEventListener("keydown", (e)=>{
//         if(e.key.toLowerCase()==='u' && e.altKey) alert("Homero Chino")
//         if(e.key.toLowerCase()==='t' && e.altKey) {
//            const con = confirm("Amas a Homero Chino?")
//            return (con)? alert("Homero Chino tambien te ama") : window.close()
//         }
//         if(e.key.toLowerCase()==='z' && e.altKey) {
//             const con = prompt("Saluda a homero Chino")
//             return (con)? alert("Hola Soy Homero Chino ") : window.close()
//          }
//     })
// }

export default function Atajos(e){
        if(e.key.toLowerCase()==='u' && e.altKey) alert("Homero Chino")
        if(e.key.toLowerCase()==='t' && e.altKey) {
           const con = confirm("Amas a Homero Chino?")
           return (con)? alert("Homero Chino tambien te ama") : window.close()
        }
        if(e.key.toLowerCase()==='z' && e.altKey) {
            const con = prompt("Saluda a homero Chino")
            return (con)? alert("Hola Soy Homero Chino ") : window.close()
         }
}