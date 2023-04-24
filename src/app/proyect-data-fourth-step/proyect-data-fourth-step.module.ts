import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ProyectDataFourthStepPageRoutingModule } from './proyect-data-fourth-step-routing.module';

import { ProyectDataFourthStepPage } from './proyect-data-fourth-step.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ProyectDataFourthStepPageRoutingModule
  ],
  declarations: [ProyectDataFourthStepPage]
})
export class ProyectDataFourthStepPageModule {}
