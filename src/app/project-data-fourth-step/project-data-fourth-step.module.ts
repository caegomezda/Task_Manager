import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ProjectDataFourthStepPageRoutingModule } from './project-data-fourth-step-routing.module';

import { ProjectDataFourthStepPage } from './project-data-fourth-step.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ProjectDataFourthStepPageRoutingModule
  ],
  declarations: [ProjectDataFourthStepPage]
})
export class ProjectDataFourthStepPageModule {}
