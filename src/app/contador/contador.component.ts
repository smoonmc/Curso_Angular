import { Component } from '@angular/core'

@Component({
    selector: 'app-contador',
    template: `
    
            <h1> Hola Mundo Cecilia </h1>
            {{titulo}}
            {{1+1}}

            <h1> Contador: </h1>
            <h3> La base es: <strong> {{base}} </strong> </h3>
            <!-- <button (click)="sumar()"> +1 </button> 

            <span> {{numero}} </span>

            <button (click)= "restar()"> -1 </button>  -->

            <button (click)="acumular( base )"> + {{base}} </button> 

            <span> {{numero}} </span>

            <button (click)= "acumular( -base )"> - {{base}} </button>
    
    `
})
export class ContadorComponent{
    titulo: string = 'Contador App';
    numero: number = 10;
    base  : number = 5;
  
  //crear metodo sumar
  // sumar(){
  //    this.numero += 1;
  //  }
  
  //crear metodo restar
  //  restar() {
  //    this.numero -= 1;
  //  
  
  //otra forma
    acumular(valor:number) {
      this.numero += valor;
  
    }
}