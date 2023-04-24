import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProyectDataTimeStepPage } from './proyect-data-time-step.page';

const routes: Routes = [
  {
    path: '',
    component: ProyectDataTimeStepPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProyectDataTimeStepPageRoutingModule {}
