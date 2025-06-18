import { Directive, effect, inject, input, TemplateRef, ViewContainerRef } from '@angular/core';
import { Permission } from './auth.model';
import { AuthService } from './auth.service';

@Directive({
  selector: '[appAuth]',
  standalone: true
})
export class AuthDirective {
  userType = input.required<Permission>({alias: 'appAuth'});
  private authService = inject(AuthService);
  private templateRef = inject(TemplateRef);
  private viewContainerRef = inject(ViewContainerRef);
  constructor(){
    effect(() => {
      if(this.authService.activePermission() === this.userType()){
        // Es el metodo que le dice a Angular en que lugar del DOM debe renderizar algo, en este caso 
        // renderizara el contenido del ng-template
        this.viewContainerRef.createEmbeddedView(this.templateRef)
      } else{
         this.viewContainerRef.clear();
      }
    })
  }
}
