import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProyectDataFourthStepPage } from './proyect-data-fourth-step.page';

const routes: Routes = [
  {
    path: '',
    component: ProyectDataFourthStepPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProyectDataFourthStepPageRoutingModule {}
