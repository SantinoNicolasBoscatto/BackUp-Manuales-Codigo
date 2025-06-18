import { Component, effect, OnInit, signal } from '@angular/core';
import { toObservable, toSignal } from '@angular/core/rxjs-interop';
import { interval, map, Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html'
})
export class AppComponent implements OnInit {
  ngOnInit(): void {
    // const subscription = interval(1000).pipe(
    //   map((val) => val * 2)
    // ).subscribe({
    //   next: (val) => console.log(val), // Se ejecuta cuando el Observable cambia su valor
    //   complete: () => {}, // Se ejecuta cuando el Observable termina de ejecutar sus valores.
    //   error: (err) => console.log(err) // Se ejecuta cuando ocurra un error.
    // })
    this.customInterval$.subscribe({
      next: (val) => console.log(val),
      complete: () => console.log("Se termino")
    })
  }
  // SIGNAL TO OBSERVABLE
  clickCount = signal(0);
  clickCount$ = toObservable(this.clickCount);

  // OBSERVABLE TO SIGNAL
  interval$ = interval(1000);
  intervalSignal = toSignal(this.interval$, {initialValue: 0});


  // Custom Interval, con esta clase Observable puedo crear un Observable de 0.
  // Dentro del constructor definire una callback en la cual definire cuando se 
  // Ejecutaran los metodos del Observable.
  customInterval$ = new Observable((subscriber) => {
    let timesExecuted = 0;
    const interval = setInterval(() => {
      if(timesExecuted > 3){
        clearInterval(interval);
        subscriber.complete();
        return;
      }
      subscriber.next({message: 'New Value'});
      timesExecuted++;
    }, 2000);
  }); 

  onClick(){
    this.clickCount.update( prev => prev+1);
  }
}
