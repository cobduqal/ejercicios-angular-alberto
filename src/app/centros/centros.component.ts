import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-centros',
  template: `
  <div *ngFor="let centro of centros">
    <app-centro [centro]="centro"></app-centro>
  </div>
  `,
  styleUrls: ['./centros.component.css']
})
export class CentrosComponent implements OnInit {

  // al definir una variable de un tipo concreto hay que indicar el tipo y en este caso que es un array para que coincida la declaracion de la variable con la inicializacion
  centros: Centro[] = [{nombre: "Maria Teresa Iñigo de Toro"}, {nombre: "Giner de los Rios"}, {nombre: "Maristas"}, {nombre: "Corazonistas"}];
  constructor() { }

  ngOnInit(): void {
  }

}
// exportar clase (Interfaz javascript) con un atributo opcional nombre
export class Centro {
  nombre?: string;
}

