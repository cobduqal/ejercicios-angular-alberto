import { Component, OnInit } from '@angular/core';
import { Centro } from '../centros/centros.component';


@Component({
  selector: 'app-selector-centro',
  templateUrl: './selector-centro.component.html',
  styleUrls: ['./selector-centro.component.css']
})
export class SelectorCentroComponent implements OnInit {

  centros : Centro[] = [{nombre: "Maria Teresa Iñigo de Toro"}, {nombre: "Giner de los Rios"}, {nombre: "Maristas"}, {nombre: "Corazonistas"}];
  centrosFiltrados : Centro[] = [];
  centroSeleccionado : any = "";
  constructor() { }

  ngOnInit(): void {
  }
  /*
  * Declarar evento de tipo HTMLInputElement
  */
  centro(evento: KeyboardEvent){
    const element = evento.target as HTMLInputElement;
    this.centrosFiltrados = this.centros.filter( centro => centro.nombre?.includes( element.value ));
  }

  getLovCentros(){
    return this.centrosFiltrados;
  }
  // guardar seleccion de centro
  setCentroSeleccionado(centro:Centro){
    this.centroSeleccionado = centro.nombre;
  }
  // devolver el centro seleccionado
  getCentroSeleccionado(){
    return this.centroSeleccionado;
  }

}
