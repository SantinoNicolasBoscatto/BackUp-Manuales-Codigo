import { Component, inject, OnDestroy, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs';

import { Store } from '@ngrx/store';
import { AsyncPipe } from '@angular/common';
import { selectDoubleCount } from '../store/counter.selector';

@Component({
  selector: 'app-counter-output',
  templateUrl: './counter-output.component.html',
  styleUrls: ['./counter-output.component.css'],
  standalone: true,
  imports: [AsyncPipe]
})
export class CounterOutputComponent {
  // El $ es una convencion para variables que guardan un Observable
  count$?: Observable<number>;
  doubleCount$?: Observable<number>;
  private store = inject(Store<{counter: number}>); // Caso de necesitarlo puedo definir el tipo de datos que contiene mi Store

  constructor(){
    // El metodo Select es el que me permite seleccionar que data quiere recibir de Store.
    // Esto no me devolvera la data, sino un observable. La ventaja es que cada vez que la 
    // Data cambie, esto se nos notificara automaticamente.
    this.count$ = this.store.select('counter'); 
    this.doubleCount$ = this.store.select(selectDoubleCount); 
  }
}
