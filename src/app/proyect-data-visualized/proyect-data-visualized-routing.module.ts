import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProyectDataVisualizedPage } from './proyect-data-visualized.page';

const routes: Routes = [
  {
    path: '',
    component: ProyectDataVisualizedPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProyectDataVisualizedPageRoutingModule {}
