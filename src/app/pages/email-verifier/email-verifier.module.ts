import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EmailVerifierPageRoutingModule } from './email-verifier-routing.module';

import { EmailVerifierPage } from './email-verifier.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EmailVerifierPageRoutingModule
  ],
  declarations: [EmailVerifierPage]
})
export class EmailVerifierPageModule {}
