import { Component, OnInit } from '@angular/core';
/*
* (c) Alberto
* Definir un componente y algunos metodos de ejemplo
*/
@Component({
  selector: 'app-solicitud',
  templateUrl: './solicitud.component.html',
  styleUrls: ['./solicitud.component.css']
})
export class SolicitudComponent implements OnInit {
	/* Si definimos un valor nulo, establecemos un tipado y da error. Inicializar con cadena vacia */
	solicitud = {nombre: "Alberto", name:"", apellidos:""};
	validacion = {isOk:false};
	listaSolicitudes = [{nombre: "Alberto", apellidos:"Cobos"},{nombre: "Carlos", apellidos:"Perez"},{nombre: "Angel", apellidos:"De la torre"}];
  constructor() { 
	setInterval(() => {
		this.solicitud.nombre = "" + Math.random();
	},2000);
  }

  ngOnInit(): void {
  }
  /* Saca un mensaje por consola */
  /* En TypeScript se tiene que definir el tipo de la variable, no como en Javascript */
  delete(mensaje:string) {
	console.log("Eliminar! " + mensaje);
  }
  
  setNombre(evento: KeyboardEvent){
	try {
		const element = evento.target as HTMLInputElement;
		this.solicitud.name = element.value;
		this.validate();
	} catch (e){
		console.error("Error en setNombre, causa: " + e);
	}
  }
  
  setApellidos(evento: KeyboardEvent){
	try {
		const element = evento.target as HTMLInputElement;
		this.solicitud.apellidos = element.value;
		this.validate();
	} catch (e){
		console.error("Error en setNombre, causa: " + e);
	}
  }
  /*
* (c) Alberto
* Establece el valor isOk para determinar si el nombre y apellidos estan presentes
*/
  validate(){
	this.validacion.isOk = ( this.solicitud.nombre.length > 0 && this.solicitud.apellidos.length > 0);
  }

}
