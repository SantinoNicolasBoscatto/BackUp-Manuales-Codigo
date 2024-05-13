export class Component{

    constructor(options){
        this.element = options.element, //Elemento al que se le insertara HTML
        this.data = options.data,       // Un estado que definiremos en la invocacion del Componente
        this.temp = options.template    // Una Funcion que creara fragmentos HTML segun el estado, la funcion se la define en la llamada 
    }
    
    // Render UI
    render(){
        const $el = document.querySelector(this.element)
        if(!$el) return false;
        $el.innerHTML = this.ejecutarTemplate(this.data)
    }

    // Ejecutamos la CallBack que dibuja la UI segun el estado
    ejecutarTemplate(state){
        return this.temp(state)
    }

    // Actualiza State Reactivamente
    setState(obj){
        for(let key in obj){
            if(this.data.hasOwnProperty(key)){
                this.data[key] = obj[key];
            }
        }
        this.render();
    }

    // Obtenemos copia inmutable del State
    getState(){
        return JSON.parse(JSON.stringify(this.data))
    }
}