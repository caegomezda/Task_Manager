import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ProjectDataFifthStepPageRoutingModule } from './project-data-fifth-step-routing.module';

import { ProjectDataFifthStepPage } from './project-data-fifth-step.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ProjectDataFifthStepPageRoutingModule
  ],
  declarations: [ProjectDataFifthStepPage]
})
export class ProjectDataFifthStepPageModule {}
