import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ProyectDataSecondStepPageRoutingModule } from './proyect-data-second-step-routing.module';

import { ProyectDataSecondStepPage } from './proyect-data-second-step.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ProyectDataSecondStepPageRoutingModule
  ],
  declarations: [ProyectDataSecondStepPage]
})
export class ProyectDataSecondStepPageModule {}
