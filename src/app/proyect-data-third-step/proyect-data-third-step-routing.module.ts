import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProyectDataThirdStepPage } from './proyect-data-third-step.page';

const routes: Routes = [
  {
    path: '',
    component: ProyectDataThirdStepPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProyectDataThirdStepPageRoutingModule {}
