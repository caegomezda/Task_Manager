import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ProjectDataVisualizedPageRoutingModule } from './project-data-visualized-routing.module';

import { ProjectDataVisualizedPage } from './project-data-visualized.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ProjectDataVisualizedPageRoutingModule
  ],
  declarations: [ProjectDataVisualizedPage]
})
export class ProjectDataVisualizedPageModule {}
