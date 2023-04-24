import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProjectDataFourthStepPage } from './project-data-fourth-step.page';

const routes: Routes = [
  {
    path: '',
    component: ProjectDataFourthStepPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProjectDataFourthStepPageRoutingModule {}
