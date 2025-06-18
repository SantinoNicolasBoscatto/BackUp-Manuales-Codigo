

import { createSelector } from "@ngrx/store";

// El Type del State sera toda mi Store, definida en el Main.ts
export const selectCount = (state: {counter: number}) => state.counter;
export const selectDoubleCount = createSelector(
    selectCount,
    (state: number) => { // El State sera el return de selectCount()
        return state * 2;
    }
)