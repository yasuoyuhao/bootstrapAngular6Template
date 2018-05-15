import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';

import { AuthGuardService } from './auth-guard.service';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  // {
  //   path: 'register',
  //   component: RegistrationComponent,
  //   canActivate: [AuthGuardService]
  // },
  // {
  //   path: 'login',
  //   component: LoginComponent,
  //   canActivate: [AuthGuardService]
  // },
  // {
  //   path: 'profile',
  //   component: ProfileComponent,
  //   canActivate: [AuthGuardService]
  // },
  // {
  //   path: 'profile/settings',
  //   component: SettingComponent,
  //   canActivate: [AuthGuardService]
  // },
  // {
  //   path: 'profile/address',
  //   component: AddressComponent,
  //   canActivate: [AuthGuardService]
  // },
  // {
  //   path: '**',
  //   redirectTo: ''
  // }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
