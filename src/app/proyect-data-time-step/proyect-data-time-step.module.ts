import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ProyectDataTimeStepPageRoutingModule } from './proyect-data-time-step-routing.module';

import { ProyectDataTimeStepPage } from './proyect-data-time-step.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ProyectDataTimeStepPageRoutingModule
  ],
  declarations: [ProyectDataTimeStepPage]
})
export class ProyectDataTimeStepPageModule {}
