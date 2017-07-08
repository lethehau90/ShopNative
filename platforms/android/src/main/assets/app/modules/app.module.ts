import { NativeScriptHttpModule } from 'nativescript-angular/http';
import { NativeScriptRouterModule } from 'nativescript-angular/router';

import { NativeScriptFormsModule } from "nativescript-angular/forms";
import { NativeScriptModule } from "nativescript-angular/nativescript.module";

import { BaseComponent } from './../core/base/component.base';
import { NgModule, Injector } from '@angular/core';
import { AppRoutingModule, navigatableComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from './shared';
import { InjectableObject } from "../../app/core/base/injectableobject.base";
import { AuthGuard } from "../../app/core/guards/auth.guard";
import { DataService } from "../../app/core/services/data.service";
import { AuthenService } from "../../app/core/services/authen.service";
import { UtilityService } from "../../app/core/services/utility.service";
import { UploadService } from "../../app/core/services/upload.service";
import { TestService } from "../../app/core/services/test.service";

@NgModule({
  imports: [
    NativeScriptRouterModule,
    NativeScriptHttpModule,
    NativeScriptModule,
    NativeScriptFormsModule,
    AppRoutingModule,
    SharedModule
  ],
  declarations: [
    AppComponent,
    ...navigatableComponents
  ],
  providers: [
        AuthGuard,
        DataService,
        AuthenService,
        UtilityService,
        UploadService,

        TestService
    ],
  bootstrap: [AppComponent]
})

export class AppModule {
  constructor(private injector: Injector) {
    InjectableObject.injector = this.injector;
  }
}
