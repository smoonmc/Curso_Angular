import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { HeroeComponent } from './heroe/heroe.component';
import { ListadoComponent } from './listado/listado.component';

@NgModule({
    declarations: [
        HeroeComponent,
        ListadoComponent
    ],
    //que cosas quiero que sean visibles
    exports:[
        ListadoComponent,
        HeroeComponent

    ],
    imports:[
    //aquí van todos los modulos, ejemplo *ngFor, *ngIf
        CommonModule    
    ]
})

export class HeroesModule {

}