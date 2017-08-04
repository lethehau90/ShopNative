import { LoginComponent } from './login/login.component';
import { NgModule } from '@angular/core';

import { NativeScriptRouterModule } from 'nativescript-angular/router';

import { HomeComponent } from './home/home.component';
import { UserComponent } from './user/user.component';

export const navigatableComponents = [
  HomeComponent,
  UserComponent,
  LoginComponent
];

@NgModule({
  imports: [
    NativeScriptRouterModule.forRoot([
      { path: '', component: LoginComponent },
      { path: 'home', component: HomeComponent },
      { path: 'user', component: UserComponent },
    ])
  ],
  exports: [NativeScriptRouterModule]
})



export class AppRoutingModule {

}
