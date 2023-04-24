import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ProyectDataVisualizedPageRoutingModule } from './proyect-data-visualized-routing.module';

import { ProyectDataVisualizedPage } from './proyect-data-visualized.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ProyectDataVisualizedPageRoutingModule
  ],
  declarations: [ProyectDataVisualizedPage]
})
export class ProyectDataVisualizedPageModule {}
