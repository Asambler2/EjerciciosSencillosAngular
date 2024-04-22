import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

  paisesValido: string[] = ['Alemania', 'Reino Unido', 'Francia', 'Italia', 'España'];

  carnetForm = new FormGroup({
    carnet: new FormControl(),
    fecha: new FormControl(),
    dni: new FormControl()
  })

  constructor() {
    this.carnetForm.get("carnet")?.setValue("false");
  }
}
