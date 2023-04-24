import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProjectDataTimeStepPage } from './project-data-time-step.page';

const routes: Routes = [
  {
    path: '',
    component: ProjectDataTimeStepPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProjectDataTimeStepPageRoutingModule {}
