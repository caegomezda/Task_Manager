import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ProjectDataThirdStepPageRoutingModule } from './project-data-third-step-routing.module';

import { ProjectDataThirdStepPage } from './project-data-third-step.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ProjectDataThirdStepPageRoutingModule
  ],
  declarations: [ProjectDataThirdStepPage]
})
export class ProjectDataThirdStepPageModule {}
