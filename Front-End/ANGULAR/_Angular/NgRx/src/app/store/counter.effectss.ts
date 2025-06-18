import { inject, Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { decrement, increment, init, set } from "./counter.actions";
import { of, switchMap, tap, withLatestFrom } from "rxjs";
import { Store } from "@ngrx/store";
import { selectCount } from "./counter.selector";


@Injectable({providedIn: 'root'})

// Esta clase puede contener multiples propiedades, y cada propiedad define un pipeline que debe ejecutar ciertas acciones
export class CounterEffects {
    // Actions nos devuelve un Observable, se ejecutara cada vez que una accion que sean disparadas por NgRx.
    private actions$ = inject(Actions);
    private store = inject(Store<{counter: number}>);

    loadCount = createEffect(() => this.actions$.pipe(
        ofType(init),

        // Esta funcion creara una nueva cadena de observables. Debe devolver un Observable.
        switchMap(() => {
            const storedCounter = localStorage.getItem('item');
            if(storedCounter)return of(set({value: +storedCounter}));
            return of(set({value: 0})); // of() permite crear un obsevable sobre un valor
        })
    ))

    saveCount = createEffect(() => this.actions$.pipe(
        // Permite filtrar que action se ejecuto, y segun la action que se ejecuto decido si ejecutar mi Effect.
        ofType(decrement, increment),

        // Esto nos permitira rescatar el ultimo valor del contador y no solo la Action.value
        withLatestFrom(this.store.select(selectCount)), 

        // Aqui definimos que hara el Effect
        tap(([action, counter]) => {
            localStorage.setItem('count', counter.toString())
        })
    ), {dispatch: false}); // Este Effect es de los que no disparan una nueva Action. Con esto definivos claramente que este Effect no disparara una nueva action
}