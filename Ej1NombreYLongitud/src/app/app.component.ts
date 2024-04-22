import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  nombre: string = "";

  devolverLength(): void {
    this.nombre = (<HTMLInputElement>document.getElementById('nombre')).value;
    (<HTMLInputElement>document.getElementById('resultado')).value = `${this.nombre}(${this.nombre.length})`;
  }
}
