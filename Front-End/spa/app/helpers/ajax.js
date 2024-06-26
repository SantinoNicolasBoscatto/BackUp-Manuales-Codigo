export async function ajax(props){
    let {url, cbSuccess} = props;
    await fetch(url)
    .then(res => res.ok? res.json() : Promise.reject(res))
    .then(json => {cbSuccess(json)})
    .catch(err=>{
        alert("ERROR ", err.statusText || "INDETERMINADO")
        console.log(err)
    })
}