import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'sign-in',
    loadChildren: () => import('./sign-in/sign-in.module').then( m => m.SignInPageModule)
  },
  {
    path: 'sign-up',
    loadChildren: () => import('./sign-up/sign-up.module').then( m => m.SignUpPageModule)
  },
  {
    path: 'email-verifier',
    loadChildren: () => import('./email-verifier/email-verifier.module').then( m => m.EmailVerifierPageModule)
  },
  {
    path: 'proyect-data-first-step',
    loadChildren: () => import('./proyect-data-first-step/proyect-data-first-step.module').then( m => m.ProyectDataFirstStepPageModule)
  },
  {
    path: 'proyect-data-second-step',
    loadChildren: () => import('./proyect-data-second-step/proyect-data-second-step.module').then( m => m.ProyectDataSecondStepPageModule)
  },
  {
    path: 'proyect-data-third-step',
    loadChildren: () => import('./proyect-data-third-step/proyect-data-third-step.module').then( m => m.ProyectDataThirdStepPageModule)
  },
  {
    path: 'proyect-data-fourth-step',
    loadChildren: () => import('./proyect-data-fourth-step/proyect-data-fourth-step.module').then( m => m.ProyectDataFourthStepPageModule)
  },
  {
    path: 'proyect-data-fifth-step',
    loadChildren: () => import('./proyect-data-fifth-step/proyect-data-fifth-step.module').then( m => m.ProyectDataFifthStepPageModule)
  },
  {
    path: 'proyect-data-time-step',
    loadChildren: () => import('./proyect-data-time-step/proyect-data-time-step.module').then( m => m.ProyectDataTimeStepPageModule)
  },
  {
    path: 'proyect-data-visualized',
    loadChildren: () => import('./proyect-data-visualized/proyect-data-visualized.module').then( m => m.ProyectDataVisualizedPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
