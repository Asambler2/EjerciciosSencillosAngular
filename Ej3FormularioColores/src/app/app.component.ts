import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  rojo: number = 0;
  verde: number = 0;
  azul: number = 0;

  colorRojo(): void {
    this.rojo = Math.floor(Math.random() * 255);
    document.getElementById('rojo')?.setAttribute('style', `background-color: rgb(${this.rojo.toString() }, 0, 0)`);
  }
  colorVerde(): void {
    this.verde = Math.floor(Math.random() * 255);
    document.getElementById('verde')?.setAttribute('style', `background-color: rgb(0, ${this.verde.toString()}, 0)`);
  }
  colorAzul(): void {
    this.azul = Math.floor(Math.random() * 255);
    document.getElementById('azul')?.setAttribute('style', `background-color: rgb(0, 0, ${this.azul.toString()})`);
  }
}
