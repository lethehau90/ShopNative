import { BaseComponent } from './../core/base/component.base';
import { NgModule, Injector } from '@angular/core';
import { NativeScriptModule } from 'nativescript-angular/nativescript.module';
import { AppRoutingModule, navigatableComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from './shared';
import { InjectableObject } from "../../app/core/base/injectableobject.base";

@NgModule({
  imports: [
    NativeScriptModule,
    AppRoutingModule,
    SharedModule
  ],
  declarations: [
    AppComponent,
    ...navigatableComponents
  ],
  bootstrap: [AppComponent]
})

export class AppModule {
  constructor(private injector: Injector) {
    InjectableObject.injector = this.injector;
  }
}
