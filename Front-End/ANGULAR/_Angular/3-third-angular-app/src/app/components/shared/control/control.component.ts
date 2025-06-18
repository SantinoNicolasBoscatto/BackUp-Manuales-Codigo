import { AfterContentInit, afterNextRender, afterRender, Component, ContentChild, ElementRef, HostBinding, inject, input, Input, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-control',
  standalone: true,
  imports: [],
  templateUrl: './control.component.html',
  styleUrl: './control.component.css',
  encapsulation: ViewEncapsulation.None,
  host: {
    class: 'control',
    '(click)': 'onClick()'
  }
})
export class ControlComponent implements AfterContentInit {
  ngAfterContentInit(): void {
    
  }
  label = input.required<string>();

  // ElementRef define una referencia algun elemento renderizado en el HTML. Pero al inyectarlo en un componente 
  // nos dara la referencia la referencia al HostElement
  private el = inject(ElementRef); 
  @ContentChild('input') private control?: ElementRef<HTMLInputElement | HTMLTextAreaElement>;

  constructor(){
    afterNextRender(() => {

    });
    afterRender(() => {
      
    });
  }

  onClick(){
    console.log(this.control?.nativeElement.value)
  }
}
