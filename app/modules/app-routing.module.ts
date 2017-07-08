import { LoginComponent } from './login/login.component';
import { NgModule } from '@angular/core';

import { NativeScriptRouterModule } from 'nativescript-angular/router';

import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';

export const navigatableComponents = [
  HomeComponent,
  AboutComponent,
  ContactComponent,
  LoginComponent
];

@NgModule({
  imports: [
    NativeScriptRouterModule.forRoot([
      { path: '', component: LoginComponent },
      { path: 'home', component: HomeComponent },
      { path: 'about', component: AboutComponent },
      { path: 'contact', component: ContactComponent }
    ])
  ],
  exports: [NativeScriptRouterModule]
})



export class AppRoutingModule {

}
