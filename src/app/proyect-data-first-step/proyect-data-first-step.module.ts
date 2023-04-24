import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ProyectDataFirstStepPageRoutingModule } from './proyect-data-first-step-routing.module';

import { ProyectDataFirstStepPage } from './proyect-data-first-step.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ProyectDataFirstStepPageRoutingModule
  ],
  declarations: [ProyectDataFirstStepPage]
})
export class ProyectDataFirstStepPageModule {}
