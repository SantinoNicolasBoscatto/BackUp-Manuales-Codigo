import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'temperature',
  standalone: true
})
export class TemperaturePipe implements PipeTransform {

  // El value es el valor que le vamos a pasar.
  // Y el resto de argumentos son para la configuraciones extra del pipe
  transform(value: string | number | null, inputType: 'cel' | 'fah', outputType?: 'cel' | 'fah'): string | null {
    let val: number;
    if(value === null) return value;

    if(typeof value === 'string') val = parseFloat(value);
    else val = value;

    let outputTemp: number;
    if(inputType === 'cel' && outputType === 'fah') outputTemp = val * (9/5) + 32;
    else if (inputType === 'fah' && outputType === 'cel') outputTemp = (val-32) * (5/9);
    else outputTemp = val;

    let symbol: 'ºC' | 'ºF';
    if(!outputType) symbol = inputType === 'cel'? 'ºC' : 'ºF';
    else symbol = outputType === 'cel'? 'ºC' : 'ºF';
    
    return `${outputTemp.toFixed(1)} ${symbol}`
  }

}
