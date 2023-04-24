import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EmailVerifierPage } from './email-verifier.page';

const routes: Routes = [
  {
    path: '',
    component: EmailVerifierPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EmailVerifierPageRoutingModule {}
