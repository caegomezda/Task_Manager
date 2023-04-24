
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ProjectDataSecondStepPageRoutingModule } from './project-data-second-step-routing.module';

import { ProjectDataSecondStepPage } from './project-data-second-step.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ProjectDataSecondStepPageRoutingModule
  ],
  declarations: [ProjectDataSecondStepPage]
})
export class ProjectDataSecondStepPageModule {}
