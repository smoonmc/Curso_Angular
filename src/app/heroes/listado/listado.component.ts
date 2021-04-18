import { Component} from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
})
export class ListadoComponent {

  heroes: string[] = ['Spiderman', 'Ironman', 'Hulk', 'Thor'];
  borrado: string = '';

    borrarHeroe(){
      console.log("Borrando..")
      const heroeBorrado = this.heroes.pop() || ''; //elimina el último elemento, //this.heroes.shift(); //elimina el primer elemento.
      console.log(heroeBorrado);
      this.borrado = heroeBorrado;


  }

}
