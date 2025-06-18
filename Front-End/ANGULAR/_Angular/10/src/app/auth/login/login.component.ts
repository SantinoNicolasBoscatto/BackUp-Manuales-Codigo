import { afterNextRender, Component, DestroyRef, inject, OnInit, viewChild } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, FormsModule, NgForm, ReactiveFormsModule, ValidatorFn, Validators } from '@angular/forms';
import { debounce, debounceTime, of } from 'rxjs';

function mustCotainQuestionMark(control: AbstractControl) {
  // Si el INPUT es valido la ValidationFunction devolvera Null
  if(control.value.includes('?')) return null;
  // Si es invalido devolvere un objeto que por convencion es una descripcion del error y un true
  return {notQuestionMark: true}
}

function emailIsUnique(control: AbstractControl){
  if(control.value !== 'test@example.com') return of(null); // Devolvemos un Observable que retorna Null, gracias a of()
  return of({notUnique: true})
}

let initialEmailValue = '';
const savedForm = window.localStorage.getItem('saved-login-form');

if(savedForm){
  const loadedForm = JSON.parse(savedForm);
  initialEmailValue = loadedForm.email;
}

@Component({
  selector: 'app-login',
  standalone: true,
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
  imports: [ReactiveFormsModule]
})
export class LoginComponent implements OnInit {
  private destroyRef = inject(DestroyRef);
  ngOnInit(): void {
    const subs = this.form.valueChanges.pipe(debounceTime(500)) .subscribe({
      next: value => {
        window.localStorage.setItem('saved-login-form', JSON.stringify({email: value.email}))
      }
    });
    this.destroyRef.onDestroy(() => subs.unsubscribe())
  }



  // Declaramos el Forms
  form = new FormGroup({
    email: new FormControl(initialEmailValue, {
      validators: [Validators.required, Validators.email],
      asyncValidators: [emailIsUnique]
    }), // Declaramos los inputs, su default value y sus validators
    password: new FormControl('',{
      validators: [Validators.required, Validators.minLength(6), mustCotainQuestionMark]
    })
  });
  get emailIsInvalid(){
    return this.form.controls.email.touched && this.form.controls.email.dirty && this.form.controls.email.invalid
  }
  get passwordIsInvalid(){
    return this.form.controls.password.touched && this.form.controls.password.dirty && this.form.controls.password.invalid
  }
  onSubmit(){
    const enteredEmail = this.form.value.email;
    const enteredPassword = this.form.value.password;
  }
}
// // De esta forma selecciono manualmente el Forms de mi Template.
  // private form = viewChild<NgForm>('form');
  // private destroyRef = inject(DestroyRef);
  // constructor(){
  //   // Este se ejecuta luego del primer render, solo una vez.
  //   afterNextRender(() => {
  //     const savedForm = window.localStorage.getItem('saved-login-form');

  //     if(savedForm){
  //       const loadedFormData = JSON.parse(savedForm);
  //       const savedEmail = loadedFormData.email;
  //       // Si no ponemos un TimeOut, nuestro Forms no estara completamente iniciado y tendremos un error.
  //       setTimeout(() => {
  //         this.form()?.controls['email']?.setValue(savedEmail)    
  //       }, 1);
  //     }

  //     // ValueChanges nos devuelve un Observable al que nos suscribiremos para manipular el nuevo valor que tiene el INPUT.
  //     const sub = this.form()?.valueChanges?.pipe(debounceTime(1000)) 
  //     // debounceTime() espera un tiempo sin que el usuario escriba antes de emitir el valor.
  //     // Si el usuario sigue escribiendo, reinicia la espera. Solo cuando deja de tipear por un momento, se ejecuta el next().
  //     .subscribe({ 
  //       next: (value) => window.localStorage.setItem('saved-login-form', JSON.stringify({email: value.email}))
  //     })
  //     this.destroyRef.onDestroy(()=>sub?.unsubscribe())
  //   }); 
  // }

  // onSubmit(formData: NgForm){
  //   // El nombre de la propiedad que nos da acceso al VALUE sera el NAME del input
  //   if(formData.form.invalid) return;
  //   const enteredEmail = formData.form.value.email;
  //   const enteredPassword = formData.form.value.password;

  //   // Funciones que me permiten interactuar con el FORMs
  //   formData.form.reset();
  //   formData.form.markAllAsTouched();
  //   formData.form.controls["email"].markAsDirty();
// }
