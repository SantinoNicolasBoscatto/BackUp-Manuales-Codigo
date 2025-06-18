import { Pipe } from "@angular/core";

@Pipe({
    name: 'Reverse'
})

export class ReversePipe {
    transform(value: string){
        return value.split("").reverse().join("");
    }
}