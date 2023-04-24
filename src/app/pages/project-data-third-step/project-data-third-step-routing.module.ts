import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProjectDataThirdStepPage } from './project-data-third-step.page';

const routes: Routes = [
  {
    path: '',
    component: ProjectDataThirdStepPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProjectDataThirdStepPageRoutingModule {}
