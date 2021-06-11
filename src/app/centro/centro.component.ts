import { Component, Input, OnInit } from '@angular/core';
import { Centro } from "../centros/centros.component";

@Component({
  selector: 'app-centro',
  template: `
  <p>Nombre Centro: <b>{{centro?.nombre}}</b></p>
  `,
  styleUrls: ['./centro.component.css']
})
export class CentroComponent implements OnInit {

  @Input()
  centro?: Centro;
  // para la asignacion del tipo hacemos el import correspondiente de nuestro proyecto, no es de Angular.

  constructor() { }

  ngOnInit(): void {
  }

}
