import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sort',
  standalone: true,
  pure: true
})
export class SortPipe implements PipeTransform {

  transform(value: string[] | number[], direction: 'asc' | 'desc' = 'asc') {
    const sorted = [...value];
    // Sort ordenara mi Array existente, para ello debo usar una CallBack y devolverle un valor mayor o menor a 0
    // con esto JS sabra como realizar el ordenamiento.
    sorted.sort((a, b) => {
      if(direction === 'asc') return a > b ? 1 : -1; 
      else return a > b ? -1 : 1; 
    });
    return sorted;
  }

}
