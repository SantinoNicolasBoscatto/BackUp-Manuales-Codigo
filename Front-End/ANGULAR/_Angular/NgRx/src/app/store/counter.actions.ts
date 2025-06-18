import { Action, createAction, props } from "@ngrx/store";

// Este recibe 1-2 Argumentos, el primero es un identificador de la Action. El segundo definira que data estara adjuna a la action
export const increment = createAction(
    '[Counter] Increment',
    props<{value: number}>()
) 

export const decrement = createAction(
    '[Counter] Decrement',
    props<{value: number}>()
) 

// Esta Action se ejecutara al iniciar la App.
export const init = createAction(
    '[Counter] Init'
)

// Una vez ejecutada Init, un Effect la disparara
export const set = createAction(
    '[Counter] Set',
    props<{value: number}>()
)



// En las actions definire los eventos que hacen que mi data se deba actualizar

// export class IncrementAction implements Action {
//     readonly type = '[Counter] Increment';

//     constructor(public value: number) {}
// }

// // Aca exportamos los Types de todas las Actions que deben ser manejadas por los counter.reducers
// export type CounterActions = IncrementAction;