import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProjectDataFifthStepPage } from './project-data-fifth-step.page';

const routes: Routes = [
  {
    path: '',
    component: ProjectDataFifthStepPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProjectDataFifthStepPageRoutingModule {}
