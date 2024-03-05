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
console.clear();

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
