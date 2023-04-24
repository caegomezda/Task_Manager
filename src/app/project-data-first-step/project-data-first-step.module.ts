import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ProjectDataFirstStepPageRoutingModule } from './project-data-first-step-routing.module';

import { ProjectDataFirstStepPage } from './project-data-first-step.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ProjectDataFirstStepPageRoutingModule
  ],
  declarations: [ProjectDataFirstStepPage]
})
export class ProjectDataFirstStepPageModule {}
