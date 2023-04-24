import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProyectDataFifthStepPage } from './proyect-data-fifth-step.page';

const routes: Routes = [
  {
    path: '',
    component: ProyectDataFifthStepPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProyectDataFifthStepPageRoutingModule {}
