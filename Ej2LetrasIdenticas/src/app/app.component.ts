import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  nombre1: string = "";
  nombre2: string = "";

  letrasCoincidentes(): void {
    let letrasCoincidentes = '';

    this.nombre1 = (<HTMLInputElement>document.getElementById('nombre1')).value;
    this.nombre2 = (<HTMLInputElement>document.getElementById('nombre2')).value;

    let nombre2: string = this.nombre2;

    this.nombre1.split('').forEach(function (letraN1: string) {
      for (let letraN2 of nombre2.split('')) {
        if (letraN1 == letraN2 && !letrasCoincidentes.includes(letraN1)) {
          letrasCoincidentes == '' ? letrasCoincidentes += letraN1 : letrasCoincidentes += ', ' + letraN1;
        }
      }
    });

    (<HTMLInputElement>document.getElementById('resultado')).value = 'Letras coincidentes: ' + letrasCoincidentes;
  }
}
