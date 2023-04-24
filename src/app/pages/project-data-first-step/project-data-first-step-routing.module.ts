import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProjectDataFirstStepPage } from './project-data-first-step.page';

const routes: Routes = [
  {
    path: '',
    component: ProjectDataFirstStepPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProjectDataFirstStepPageRoutingModule {}
