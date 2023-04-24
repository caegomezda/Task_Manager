import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProyectDataFirstStepPage } from './proyect-data-first-step.page';

const routes: Routes = [
  {
    path: '',
    component: ProyectDataFirstStepPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProyectDataFirstStepPageRoutingModule {}
