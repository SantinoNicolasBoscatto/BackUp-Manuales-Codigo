import { Directive, ElementRef, input, inject } from "@angular/core";
import { LogDirective } from "../log.directive";

@Directive({
    selector: 'a[appSafeLink]',
    standalone: true,
    host: {
        '(click)': 'onConfirmLeavePage($event)'
    },
    hostDirectives: [LogDirective]
})

export class SafeLinkDirective{
    queryParam = input('myapp');
    // definimos que los genericos del Host, en este caso decimos que va a ser un anchor
    private hostElement = inject<ElementRef<HTMLAnchorElement>>(ElementRef);

    onConfirmLeavePage(event: MouseEvent){
        const leave = window.confirm('Quiere ir a otra pagina');
        if(leave) {
            const address = this.hostElement.nativeElement.href;
            this.hostElement.nativeElement.href = address + '?from='+ this.queryParam();
            return;
        }
        event.preventDefault();
    }
}