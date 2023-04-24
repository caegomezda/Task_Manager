import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProyectDataSecondStepPage } from './proyect-data-second-step.page';

const routes: Routes = [
  {
    path: '',
    component: ProyectDataSecondStepPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProyectDataSecondStepPageRoutingModule {}
