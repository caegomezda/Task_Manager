import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProjectDataVisualizedPage } from './project-data-visualized.page';

const routes: Routes = [
  {
    path: '',
    component: ProjectDataVisualizedPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProjectDataVisualizedPageRoutingModule {}
