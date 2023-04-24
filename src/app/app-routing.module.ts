import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./pages/home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'sign-in',
    pathMatch: 'full'
  },
  {
    path: 'sign-in',
    loadChildren: () => import('./pages/sign-in/sign-in.module').then( m => m.SignInPageModule)
  },
  {
    path: 'sign-up',
    loadChildren: () => import('./pages/sign-up/sign-up.module').then( m => m.SignUpPageModule)
  },
  {
    path: 'email-verifier',
    loadChildren: () => import('./pages/email-verifier/email-verifier.module').then( m => m.EmailVerifierPageModule)
  },
  {
    path: 'project-data-first-step',
    loadChildren: () => import('./pages/project-data-first-step/project-data-first-step.module').then( m => m.ProjectDataFirstStepPageModule)
  },
  {
    path: 'project-data-second-step',
    loadChildren: () => import('./pages/project-data-second-step/project-data-second-step.module').then( m => m.ProjectDataSecondStepPageModule)
  },
  {
    path: 'project-data-third-step',
    loadChildren: () => import('./pages/project-data-third-step/project-data-third-step.module').then( m => m.ProjectDataThirdStepPageModule)
  },
  {
    path: 'project-data-fourth-step',
    loadChildren: () => import('./pages/project-data-fourth-step/project-data-fourth-step.module').then( m => m.ProjectDataFourthStepPageModule)
  },
  {
    path: 'project-data-fifth-step',
    loadChildren: () => import('./pages/project-data-fifth-step/project-data-fifth-step.module').then( m => m.ProjectDataFifthStepPageModule)
  },
  {
    path: 'project-data-visualized',
    loadChildren: () => import('./pages/project-data-visualized/project-data-visualized.module').then( m => m.ProjectDataVisualizedPageModule)
  },
  {
    path: 'sign-up',
    loadChildren: () => import('./pages/sign-up/sign-up.module').then( m => m.SignUpPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
