import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ProyectDataThirdStepPageRoutingModule } from './proyect-data-third-step-routing.module';

import { ProyectDataThirdStepPage } from './proyect-data-third-step.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ProyectDataThirdStepPageRoutingModule
  ],
  declarations: [ProyectDataThirdStepPage]
})
export class ProyectDataThirdStepPageModule {}
