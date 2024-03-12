// EJERCICIO 1

function ContadorCaracteres (cadena=""){
    if(cadena!==""){
    const aux = typeof cadena === "string"? console.log(cadena.length) : console.log("Por Favor ingrese una cadena de texto")
    }
    else
        console.warn("No ingresaste una cadena valida")
}
ContadorCaracteres("Hola Mundo!");
// EJERCICIO 2

function CortarCadena(cadena="", cantidadCaracteres)
{
    if(cadena!==""){
        const aux = typeof cadena === 'string' && typeof cantidadCaracteres === 'number'? 
        console.log(cadena.slice(0,cantidadCaracteres)) : console.log("Por Favor ingrese correctamene los datos solicitados");  
    }  
    else
        console.error("No ingresaste una cadena valida")
}
CortarCadena("Viva Peron", 5)
// EJERCICIO 3
const DevolverArray = (cadena="", separador="") => 
cadena.constructor  === String && separador.constructor  === String?
     console.log( cadena.split(separador)): 
     console.log("Por Favor ingrese correctamene los datos solicitados")

DevolverArray('Introdujo mal los datos, vuelva a intentar', ",")

/// EJERCICIO 4

const Repetir = (cadena="", iterar=1)=>{
    if(cadena!==""){
    if(cadena.constructor === String && typeof iterar === 'number'){
        for (let i = 0; i < Math.abs(iterar); i++) {
            console.log(cadena," ",i+1);
        }
    }
    else
        console.log("Por Favor ingrese correctamene los datos solicitados");
    }
    else
        console.warn("No ingresaste una cadena valida")
}
console.clear();

// EJERCICIO 5

const ReversarCadena = (cadena="") => 
(cadena)? console.log(cadena.split("").reverse().join('')) : console.warn("No ingresaste una cadena valida");

ReversarCadena("Hola Mastodonte");

// EJERCICIO 6 *TUVO PUTO* Basicamente convertir el string en ARRAY y recorrerla con el foreach, si matchea la palabra con el elemento del
//array cuenta.

const PalabrasRepetidas = (cadena="", palabra="") => {
    if(!cadena) return console.warn("No ingresaste una cadena valida")
    if (!palabra) return console.warn("No ingresaste una palabra valida")

    let contador = 0,  
    i = 0
    // cadena.split(/[\s,\.!?;:(){}[\]'"`~@#$%^&*+=-]+/).forEach((item)=>{
    //     if(item === palabra)
    //         contador++;
    // })
    while(i!== -1)
    {
       i =  cadena.indexOf(palabra, i)
       if (i!==-1){
        i++;
        contador++;
       }
    }
    console.log(contador);                                                   
}                                                  
PalabrasRepetidas("Mi Amigo se Llama Jeronimo Benavidez El momo, momo momo momo.", "momo")
console.clear();

// EJERCICIO 7

const Palindromo = (cadena="") =>{ (!cadena)? console.warn("Ingrese Cadena"): 
                                   (cadena.split('').reverse().join('').toLowerCase()===cadena.toLowerCase())? 
                                   console.log("Es un Palindromo") : console.log("No es un Palindromo");
}

Palindromo("Salas");

// EJERCICIO 8

const Patrones = (patron="", ...elementos)=>{
    if(patron=="")return console.warn("No Ingreso un Patron");
    if(elementos.length==0) return console.warn("No Ingreso un Elementos a evaluar");

    elementos.forEach((item, index)=>{       
        elementos[index] = item.includes(patron)?  item.replace(patron, ""): item;
    })
    console.log(`${elementos.join(',')}.`);
}
Patrones("xyz", "xyz1","xyz2","xyz3", "xyz4", "xyz5")

const PatronesDos = (texto="", patron="")=>{
    if(patron=="")return console.warn("No Ingreso un Patron");
    if(texto=="") return console.warn("No Ingreso un Elementos a evaluar"); 
    console.log(texto.replace(new RegExp(patron, "ig"), ""));
}

PatronesDos("xyz1, xyz2, xyz3", "xy")

// EJERCICIO 9

const RandomNumber = ()=> console.log(Math.round(Math.random()*(600-501)+501))
RandomNumber();

// EJERCICIO 10

const Capicua = (numero=undefined)=> (!numero)? console.warn("Introduzca un numero"): 
                                     (typeof numero !== 'number')? console.warn("Introdujo un caracter no numerico") :
                                     (numero.toString().split("").reverse().join("")=== numero.toString())? console.info("Capicua") :
                                     console.info("No Capicua")

Capicua(616.616);

// EJERCICIO 11 

const Factorial = (n=undefined) =>{
    if(n===undefined) return console.warn("Introduzca un numero");
    if(typeof n !== 'number') return console.warn("Introdujo un caracter no valido");
    if(n<0) return console.warn("Debe ingresar un numero positivo o 0");
    let factor=1;
    if(n!=0){
    for (let i = 2; i <= n; i++) {
        factor *=i;    
    }
}

    console.log(factor);
}

Factorial(4);


// Ejercicio 12

const VerificarPrimo = (n=undefined)=>{
    if(n===undefined) return console.warn("Ingrese un numero")
    if(n<2) return console.warn("Ingrese numeros enteros mayores a 1")
    if(typeof n !== 'number')return console.error("No ingreso un numero")
    let count = false;
    for (let i = 2; i < n; i++) {
        if(n%i===0){
            count=true;
            break;          
        }
    }
    return (count)? console.log("No es Primo") : console.log("Es Primo")

}
VerificarPrimo(33)
// EJERCICIO 13

const ParImpar = (n=null) => (n===null)? console.warn("Ingrese Un Numero") : 
                 (typeof n !== 'number')? console.error("No ingreso un numero") :
                 (n%2==0)? console.log("Par") : console.log("Impar");

ParImpar(77)

// EJERCICIO 14

const ConversorTemp = (grados=undefined, medicion="") =>{
    if(grados === undefined) return console.warn("Ingrese los grados")
    if(typeof grados != 'number') return console.error("Ingrese un valor de grados valido")
    if(medicion.toUpperCase()!== "C" && medicion.toUpperCase()!=="F") return console.error("Ingrese una medicion de grados valida")
    return (medicion.toUpperCase()==="C")?console.log(grados*(9/5)+32+"ºF") :console.log((grados-32)*(5/9)+"ºC") 
}

ConversorTemp(33, "f")


// EJERCICIO 16

const MontoDescuento = (monto=undefined, descuento=0)=>{
    if(monto===undefined) return console.warn("No Ingreso Monto")
    if(typeof monto!=='number' || monto<0) return console.error("No ingreso un monto valido")
    if(typeof descuento!=='number' || descuento<0) return console.error("No ingreso un descuento valido")
    return console.log(Math.round(monto -= monto*(descuento/100)))
}

MontoDescuento(777,2)

// EJERCICIO 17

const CalcularAnos = (y=undefined,m=undefined,d=undefined)=>{
    if(y===undefined) return console.warn("Ingrese un año")
    if(y<100) return console.warn("Ingrese un año Valido")
    if(typeof y !== 'number') return console.warn("Ingrese un año Valido")
    if(m===undefined) return console.warn("Ingrese un mes")
    if(m<1 || m>12) return console.warn("Ingrese un mes Valido")
    if(typeof m !== 'number') return console.warn("Ingrese un mes Valido")
    if(d===undefined) return console.warn("Ingrese un dia")
    if(typeof d !== 'number') return console.warn("Ingrese un dia Valido")
    if(d<1 || d>31) return console.warn("Ingrese un dia Valido")

    const fecha = new Date(y,m-1,d);
    let fa = new Date();   
    fa = (fa.getTime() - fecha.getTime());
    const resultado = new Date(fa);
    console.log(resultado.getFullYear()-1970)
}

CalcularAnos(2021,3,6)

const CalcularAnos2 = (fecha=undefined)=>{
    if(!fecha) return console.warn("Coloque una fecha valida");
    if(fecha.constructor !== Date) return console.warn("Coloque una fecha valida");

    const fechaRearmada = new Date(fecha.getFullYear(),fecha.getMonth()-1, fecha.getDate() )
    let fa = new Date().getTime()- fechaRearmada.getTime();   
    const resultado = new Date(fa);
    if(Math.sign(resultado)===-1) return console.log("Faltan "+(resultado.getFullYear()-1970)*-1+" Años")
    else return console.log(`Hace ${resultado.getFullYear()-1970} Años`)
}
let fetch = new Date(2001,3,10);
CalcularAnos2(fetch);

// EJERCICIO 18

const ContarVocales = (cadena="")=>{
    if(!cadena) return console.warn("ingrese Cadena");
    if(typeof cadena !== 'string') return console.warn("Dato Incorrecto");
    let count = 0;
    let espCount= 0;
    let regexp = /[aeiou]/i;
    let regexpEsp = /[.,\s\W\d]/;
    let enie = /[Ññ]/;
    cadena.split("").forEach((item)=>{
        if(regexp.test(item)) count++;
        if(regexpEsp.test(item)&&!(enie.test(item)) ) espCount++;
    })

    console.log(`Hay ${count} Vocales y ${cadena.length-count-espCount} Consonantes`)
}
ContarVocales("Ñoño");

// EJERCICIO 19

const Nombre = (cadena="") => {
    if(!cadena) return console.warn("Ingrese un Nombre")
    if(typeof cadena !== 'string') return console.warn("Caracteres Invalidos")
    const reg = /^[a-zA-ZñÑ\s]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$/
    return (reg.test(cadena))? console.log("Valido") : console.error("Invalido") ;
}


// EJERCICIO 20

const Email = (cadena="") =>{
    if(!cadena) return console.warn("Ingrese un Mail")
    if(typeof cadena !== 'string') return console.warn("Caracteres Invalidos")
    const reg = /^[\wñÑ]+([\.-]?[\wñÑ]+)*@[\wñÑ]+([\.-]?[\wñÑ]+)*(\.[\wñÑ]{2,7})+$/;
    return (reg.test(cadena))?  console.log("Valido") : console.error("Invalido") ;
}

Email("santinoBoscatto@gmail.net")
Nombre("Ñoscatto Sañtino")

// EJERCICIO 21

const ArrayCuadrado = (...array) =>{
    if(array.length===0) return console.warn("No definio Parametros")
    let bd = true;
    for (const item of array) {
        if(typeof item != 'number') {
            bd = false;
            console.error("Introdujo elementos no numericos") ;
            break; 
        }
    }

    if(bd){
        const arrayNuevo  = array.map(el => el*el);
        console.log(arrayNuevo);
    }
        
}
ArrayCuadrado(2,3,4,5)

// EJERCICIO 22

const MaxVerstaper = (...array) =>{
    if(array.length===0) return console.warn("No definio Parametros")
    // array.forEach((item)=>{
    //     if(typeof item != 'number') {
    //         bd = false;
    //         return console.error("Introdujo elementos no numericos") ;
    //     }
    // })
    for (const item of array) {
        if(typeof item != 'number') {
            return console.error("Introdujo elementos no numericos") ;
        }
    }
        console.log(`Max ${Math.max(...array)} Min ${Math.min(...array)}`)
}

// EJERCICIO 23

const DevolverParesImpares = (...array)=>{

    if(array.length===0) return console.warn("No definio Parametros")
    for (const item of array) {
        if(typeof item != 'number') return console.error("Introdujo elementos no numericos");
    }
    const ParesImpares = {
        Pares: array.filter(num => num%2==0),
        Impares: array.filter(num => num%2!=0)
    }   
    console.log(ParesImpares) 
}
// ArrayCuadrado(1,4,8);
// MaxVerstaper(-34,3,853,999);
DevolverParesImpares(1,2,3,4,5,6,7,8,9,10)

// EJERCICIO 24

const OrdernarNumbers = (array=undefined) => {
    if(array === undefined || array.length===0) return console.warn("Cargue numeros");
    if(!(array instanceof Array)) return console.warn("Cargue una lista de numeros");
    for (const item of array) {
        if(typeof item !=='number') return console.error("Por favor ingrese solo numeros")
    }
    const arrayAux = array.map(item=>item)
    console.log({
        arrayAsc: [...new Set(array.sort( (a,b) => a-b))],
        arrayDesc:   [...new Set(arrayAux.sort( (a,b) => b-a))]
    });
}
OrdernarNumbers([7, 5,7,8,6])

// EJERCICIO 25

const DeleteDuplicados = (array=undefined) =>{
    if(array === undefined || array.length===0) return console.warn("Cargue elementos");
    if(!(array instanceof Array)) return console.warn("Cargue una lista de elementos");
    console.log([...new Set(array)])
}
DeleteDuplicados(["x", 10, "x", 2, "10", 10, true, true])

// EJERCICIO 26

const Promedio = (array=undefined) =>{
    if(array === undefined || array.length===0) return console.warn("Cargue numeros");
    if(!(array instanceof Array)) return console.error("Cargue una lista de numeros");
    for (const item of array) {
        if(typeof item !=='number') return console.error("Por favor ingrese solo numeros")
    }
    const prom = array.reduce((acu, item)=>acu += item,0);

    console.log(prom/array.length);
}



// EJERCICIO 27

class Pelicula{
    constructor(id=undefined, titulo=undefined, director=undefined, estrenoYear=undefined, pais=undefined,generos=undefined,calificacion=undefined){
        try {
            this.titulo = titulo,
            this.id = id,
            this.director = director,
            this.estrenoYear = Math.round(estrenoYear),
            this.pais = pais,
            this.generos = generos,
            this.calificacion = (Number.isInteger(calificacion))? calificacion : Number(calificacion.toFixed(1)) 
            this.ValidarId(id);
            this.ValidarTitulo(titulo);
            this.ValidarDirector(director);
            this.ValidarYear(estrenoYear);
            this.ValidarPais(pais);
            this.ValidarGeneros(generos);
            this.ValidarCalificacion(calificacion);
        } catch (error) {
            console.error(error.toString())
        }
    }
     static GenerosValidos() {
        return console.log('Géneros Aceptados: Action, Adult, Adventure, Animation, Biography, Comedy, Crime, Documentary ,Drama, Family, Fantasy, Film Noir, Game-Show, History, Horror, Musical, Music, Mystery, News, Reality-TV, Romance, Sci-Fi, Short, Sport, Talk-Show, Thriller, War, Western.')
    }
    static get Genders(){
        return ["Action", "Adult", "Adventure", "Animation", "Biography", "Comedy", "Crime", "Documentary" ,"Drama", "Family", "Fantasy", "Film Noir", "Game-Show", "History", "Horror", "Musical", "Music", "Mystery", "News", "Reality-TV", "Romance", "Sci-Fi", "Short", "Sport", "Talk-Show", "Thriller", "War", "Western"]
    }
    DevolverInfo(){
        console.log(this);
        return this;
    }
    Val(Dato=undefined){
        if(Dato===undefined || !(Dato)) return true
    }
    ValDos(Dato=undefined){
        if(typeof Dato !== 'string') return true
    }
    ValidarId(id)
    {
        if(this.Val(id)) throw new Error("No Coloco el id")
            if(this.ValDos(id)) throw new Error("Coloque el id en formato de cadena")
            if(id.length!==9) throw new Error("El formato de ID es incorrecto")
            for (let i = 0; i < id.length; i++) {
                if(i<2){
                    let regex = /[a-zA-ZñÑ]/g;
                    if(!(regex.test(id[i]))) throw new Error("El formato de ID es incorrecto.")
                }  
                else{
                    let regexNum = /\d+/g;
                    if(!(regexNum.test(id[i]))) throw new Error("El formato de ID es incorrecto.")
                }
            }
    }
    ValidarTitulo(titulo){
            if(this.Val(titulo)) throw new Error("No Coloco el Titulo")
            if(this.ValDos(titulo)) throw new Error("Coloque texto en el titulo")
            if(titulo.length>100) throw new Error("El Titulo es demasiado largo")
    }
    ValidarDirector(director){
            if(this.Val(director)) throw new Error("No Coloco el director")
            if(this.ValDos(director)) throw new Error("Coloque texto en el nombre del director")
            if(director.length>50) throw new Error("El Nombre del director es demasiado largo")
    }
    ValidarYear(estrenoYear){
            if(this.Val(estrenoYear)) throw new Error("No Coloco el Año de Estreno")
            if(typeof estrenoYear !== 'number') throw new Error("Coloque un numero en el año")
            if(estrenoYear>9999 || estrenoYear<1895) throw new Error("Coloque un año valido")
    }
    ValidarPais(pais){
        if(this.Val(pais)) throw new Error("No Coloco el pais")
            if(pais.length<1) throw new Error("No Coloco ningun pais")
            if(!(pais instanceof Array)) throw new Error("El o los paises no estan en forma de lista")
    }
    ValidarGeneros(generos){
        if(this.Val(generos)) throw new Error("No Coloco el genero")         
        if(!(generos instanceof Array)) throw new Error("El o los generos no estan en forma de lista")
        if(generos.length<1) throw new Error("No Coloco ningun genero")
        for (const item of Pelicula.Genders) {
           if (!(Pelicula.Genders.includes(item))) throw new Error("No Coloco un genero invalido")
        }
        
    }
    ValidarCalificacion(calificacion){
            if(calificacion===undefined) throw new Error("No Coloco la calificacion")
            if(typeof calificacion !== 'number') throw new Error("Coloque una Calificacion numerica")
            if(calificacion <0 || calificacion >10) throw new Error("Coloque una Calificacion numerica valida del 0 al 10")
    }
}
console.clear();

const prueba = new Pelicula("CA0000001", "El Chanfle", "Don Riaton", 1985, ["Mechico", "Chadgentina"], ["Fulbo"], 9.86) 
prueba.DevolverInfo()
const LastDance = (array)=>{

    try {
        for (let i = 0; i <1; i++) {
            if(!(array.length<20)){
                const PrimeraPeli = new Pelicula(array[i],array[i+1],array[i+2],array[i+3],array[i+4],array[i+5],array[i+6])
                array.splice(i,7)
                const SegundaPeli = new Pelicula(array[i],array[i+1],array[i+2],array[i+3],array[i+4],array[i+5],array[i+6])
                array.splice(i,7)
                const TerceraPeli = new Pelicula(array[i],array[i+1],array[i+2],array[i+3],array[i+4],array[i+5],array[i+6])

                console.log(`Primera Pelicula: ${JSON.stringify(PrimeraPeli)}. Segunda Pelicula: ${JSON.stringify(SegundaPeli)}. Tercera Pelicula: ${JSON.stringify(TerceraPeli)}.`)
            }
            else throw new Error("Tiene que cargar 3 peliculas");
            
        }
    } catch (error) {
        console.error(error.toString())
    }
}
Pelicula.GenerosValidos
console.clear();
//---------------------------------------------------------------------------------------------------------------------------

const time = setInterval(()=>{
    const date = new Date()
    console.log(date.toLocaleTimeString())
},1000)