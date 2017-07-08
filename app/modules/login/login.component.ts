import { LoginModule } from './../../shared/login/login';
import { Component, ElementRef, OnInit, ViewChild } from "@angular/core";
import { BaseComponent } from "./../../../app/core/base/component.base";

@Component({
  selector: 'login',
  templateUrl: 'modules/login/login.component.html',
  styleUrls: ['modules/login/login.component.css']
})
export class LoginComponent extends BaseComponent {

  entity : any = LoginModule;

  constructor() {
    super()
    this.entity = new Object();
  }

  submit(): void {
    console.log(this.entity)
    alert(this.entity.userName)
    return;
  }
}
