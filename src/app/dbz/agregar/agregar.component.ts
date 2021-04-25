import { Component, EventEmitter, Input, Output} from '@angular/core';
import { Personaje } from '../interfaces/dbz.interface';
import { DbzService } from '../services/dbz.service';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
  styleUrls: ['./agregar.component.css']
})
export class AgregarComponent {

  @Input() nuevo: Personaje = {
    nombre: "",
    poder:0
  }

   //emitir
  //@Output() onNuevoPersonaje: EventEmitter<Personaje> = new EventEmitter();
   constructor( private dbzService:DbzService){}

  agregar() {
    if ( this.nuevo.nombre.trim().length===0 ) { return; }
    //console.log(this.nuevo);
    //this.onNuevoPersonaje.emit(this.nuevo)

    //this.personajes.push(this.nuevo); 
    //Se modifica la linea anterior por el llamado al servicio
    this.dbzService.agregarPersonaje( this.nuevo);

    this.nuevo = {
      nombre: "",
      poder:0
    }

   // console.log(this.personajes);
    
  }

}
