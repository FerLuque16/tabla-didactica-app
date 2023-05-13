import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HomePageRoutingModule } from './home-routing.module';

import { HomePage } from './home.page';
import { AnimalesComponent } from '../animales/animales.component';
import { NumerosComponent } from '../numeros/numeros.component';
import { ColoresComponent } from '../colores/colores.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomePageRoutingModule
  ],
  declarations: [HomePage, AnimalesComponent, NumerosComponent, ColoresComponent]
})
export class HomePageModule {}
