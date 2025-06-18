import { Component } from '@angular/core';
import { AbstractControl, FormArray, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';


function equalsValues(control1: string, control2: string){
  return (control: AbstractControl) => {
    // Para obtener las propiedades personalizadas de mi FORMs, utilizo el metodo GET.
    const password = control.get(control1)?.value;
    const confirmPassword = control.get(control2)?.value;

    if(password === confirmPassword) return null;
    return {notEqualsValue: true}
  }
}

@Component({
  selector: 'app-signup',
  standalone: true,
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.css',
  imports: [ReactiveFormsModule]
})
export class SignupComponent {
  form = new FormGroup({
    email: new FormControl('', {
      validators: [Validators.required, Validators.email]
    }),
    passwords: new FormGroup({
        password: new FormControl('', {
        validators: [Validators.required, Validators.minLength(6)]
      }),
      confirmPassword: new FormControl('', {
        validators: [Validators.required, Validators.minLength(6)]
      }),
    }, {
      validators: [equalsValues('password','confirmPassword')]
    }),
    firstName: new FormControl('', {
      validators: [Validators.required]
    }),
    lastName: new FormControl('', {
      validators: [Validators.required]
    }),

    address: new FormGroup({
      street: new FormControl('', {
        validators: [Validators.required]
      }),
      postalCode: new FormControl('', {
        validators: [Validators.required]
      }),
      city: new FormControl('', {
        validators: [Validators.required]
      }),
      number: new FormControl('', {
        validators: [Validators.required]
      })
    }),

    
    // Configurar un DropDownList, de esta forma definimos los valores aceptados por el DDL
    role: new FormControl<'student' | 'teacher' | 'employee' | 'founder' | 'other'>('student', {
      validators: [Validators.required]
    }),
    // Configurar que un CheckBox deba ser true
    agree: new FormControl(false, {
      validators: [Validators.requiredTrue]
    }),

    // Se lo usa cuando tienes una lista de controles que quieres evaluar en tu Formulario
    // pero no necesitas guardarlos individualmente, como lo puede ser un Multiple Choice de 
    // Checkbox.
    source: new FormArray([
      new FormControl(false), 
      new FormControl(false), 
      new FormControl(false), 
    ])
  })

  onSubmit(){
    if(this.form.invalid) return;
  }

  onReset(){
    this.form.reset();
  }
}
