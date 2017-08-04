import { LoginModule } from './../../shared/login/login';
import { Component, ElementRef, OnInit, ViewChild } from "@angular/core";
import { AuthenService } from '../../core/services/authen.service';
import { UrlConstants } from '../../core/common/url.constants';
import { MessageContstants } from '../../core/common/message.constants';
import { Router } from '@angular/router';
import { SystemConstants } from "../../../app/core/common/system.constants";
import * as ApplicationSettings from 'application-settings';

@Component({
  selector: 'login',
  templateUrl: 'modules/login/login.component.html',
  styleUrls: ['modules/login/login.component.css']
})
export class LoginComponent {

  entity: any = LoginModule;

  constructor(private _authenService: AuthenService, private _router: Router) {
    this.entity = new Object();
  }

  submit(): void {

    this._authenService.login(this.entity.userName, this.entity.password).subscribe((data) => {
      let user = ApplicationSettings.getString(SystemConstants.CURRENT_USER);
      if (user != null && user != undefined) {
        this._router.navigate([UrlConstants.HOME])
      }
    }, (error) => {
      alert(MessageContstants.SYSTEM_ERROR_MSG)
    })
  }
}
