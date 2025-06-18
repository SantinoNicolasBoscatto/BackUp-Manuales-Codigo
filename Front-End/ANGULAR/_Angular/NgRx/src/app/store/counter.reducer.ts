import { Action, createReducer, on } from "@ngrx/store";
import { decrement, increment, set } from "./counter.actions";
// import { CounterActions, IncrementAction } from "./counter.actions";


// Creamos un reducer y le damos un valor inicial. Este se ejecuta cuando se dispara un Action o cuando se inicializa un Store
const initialState = 0;
export const counterReducer = createReducer(
    initialState,
    // Esta funcion recibira la action que si se ejecuta disparar este reducer. El State sera el que le pase la action
    on(increment, (state, action) => state + action.value),
    on(decrement, (state, action) => state - action.value),
    on(set, (state, action) => action.value)
);





// Esta funcion Reducer recibe el State y una Action. Cualquier Dispatch que se produzca ejecutara este 
// reducer, por ende cualquier action ejecuta este reducer. Por ello es importante verificar que action
// nos disparo y si nos interesa hacer algo con ella.
// const initialState = 0;
// export function counterReducer(state = initialState, action: CounterActions | Action) {
//     if(action.type === '[Counter] Increment') return state + (action as IncrementAction).value;
//     return state;
// }