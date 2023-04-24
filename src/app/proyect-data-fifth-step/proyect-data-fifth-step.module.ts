import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ProyectDataFifthStepPageRoutingModule } from './proyect-data-fifth-step-routing.module';

import { ProyectDataFifthStepPage } from './proyect-data-fifth-step.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ProyectDataFifthStepPageRoutingModule
  ],
  declarations: [ProyectDataFifthStepPage]
})
export class ProyectDataFifthStepPageModule {}
