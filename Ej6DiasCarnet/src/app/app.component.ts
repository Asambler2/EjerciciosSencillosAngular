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

  diasConCarnet(): void {
    let FechaNacimiento: string = (<HTMLInputElement>document.getElementById('fecha')).value;
    // Crear objeto de fecha inicial con el valor del input
    let fechaIni: Date = new Date(FechaNacimiento);
    // Crear objeto de fecha final (actual)
    let fechaFin: Date = new Date();

    // Calcular diferencia en milisegundos
    let diff = fechaFin.getTime() - fechaIni.getTime();

    // Calcular días
    let diferenciaDias = Math.floor(diff / (1000 * 60 * 60 * 24));
    if (diferenciaDias < 100) {
      let div = document.getElementById('imagenAqui');
      if (div != null) div.innerHTML = `<img src='../assets/novato.jpg' width='300px' height='250px'/>`;
    }
    if (diferenciaDias >= 100 && diferenciaDias < 365) {
      let div = document.getElementById('imagenAqui');
      if (div != null) div.innerHTML = `<img src='../assets/amateur.jpg' width='300px' height='250px'/>`;
    }
    if (diferenciaDias >= 365 && diferenciaDias < 1000) {
      let div = document.getElementById('imagenAqui');
      if (div != null) div.innerHTML = `<img src='../assets/profesional.jpg' width='300px' height='250px'/>`;
    }
    if (diferenciaDias >= 1000) {
      let div = document.getElementById('imagenAqui');
      if (div != null) div.innerHTML = `<img src='../assets/pro.jpg' width='300px' height='250px'/>`;
    }
  }
}
