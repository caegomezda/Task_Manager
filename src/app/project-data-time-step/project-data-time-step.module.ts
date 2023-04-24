
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ProjectDataTimeStepPageRoutingModule } from './project-data-time-step-routing.module';

import { ProjectDataTimeStepPage } from './project-data-time-step.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ProjectDataTimeStepPageRoutingModule
  ],
  declarations: [ProjectDataTimeStepPage]
})
export class ProjectDataTimeStepPageModule {}
