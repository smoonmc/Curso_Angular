import { Component} from '@angular/core';
import { DbzService } from '../services/dbz.service';

@Component({
  selector: 'app-personajes',
  templateUrl: './personajes.component.html',
  styleUrls: ['./personajes.component.css']
})
export class PersonajesComponent {

  //@Input() personajesData:Personaje[] = [];
   get personajesM(){
    return this.dbzService.personajes;
   }

  //inyeccion de dependencias
  constructor( private dbzService:DbzService ) {}


}
