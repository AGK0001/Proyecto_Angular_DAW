import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.html',
  imports: [ReactiveFormsModule]
})
export class Contact {

  formulario: FormGroup = new FormGroup({
    nombre: new FormControl<string>('', {
      validators: Validators.required,
      nonNullable: true
    }),
    email: new FormControl<string>('', {
      validators: [Validators.required, Validators.email],
      nonNullable: true
    }),
    telefono: new FormControl<string>(''),
    mensaje: new FormControl<string>('', {
      validators: Validators.required,
      nonNullable: true
    })
  });

  enviar(): void {
    if (this.formulario.valid) {
      console.log('Datos enviados:', this.formulario.value);
      alert('Mensaje enviado correctamente (simulado)');
      this.formulario.reset();
    } else {
      alert('Por favor, complete todos los campos requeridos.');
    }
  }
}
