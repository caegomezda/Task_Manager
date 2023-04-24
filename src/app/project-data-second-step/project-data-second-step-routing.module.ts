import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProjectDataSecondStepPage } from './project-data-second-step.page';

const routes: Routes = [
  {
    path: '',
    component: ProjectDataSecondStepPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProjectDataSecondStepPageRoutingModule {}
