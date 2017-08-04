import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http'
import { LoggedInUser } from '../../core/domain/loggedin.user'
import 'rxjs/add/operator/map'
import * as ApplicationSettings from "application-settings";
import { SystemConstants } from "../../../app/core/common/system.constants";
import { Observable } from 'rxjs/Observable';

@Injectable()
export class AuthenService {

    constructor(private _http: Http) { }
    login(username: string, password: string) {
        let body = "userName=" + encodeURIComponent(username) +
            "&password=" + encodeURIComponent(password) +
            "&grant_type=password";

        let headers = new Headers()
        headers.append("Content-Type", "application/x-www-form-urlencoded");
        let options = new RequestOptions({ headers: headers });
        return this._http.post(SystemConstants.BASE_API + '/api/oauth/token', body, options).map((response: Response) => {
            let user: LoggedInUser = response.json();
            if (user && user.access_token) {
                ApplicationSettings.remove(SystemConstants.CURRENT_USER);
                ApplicationSettings.setString(SystemConstants.CURRENT_USER, JSON.stringify(user));
            }
            response.json();
        })
    }

    logout() {
        ApplicationSettings.remove(SystemConstants.CURRENT_USER);
    }

    handleErrors(error: Response) {
        console.log("Error handler");
        console.log(JSON.stringify(error));
        return Observable.throw(error);
    }

    isUserAuthenticate(): boolean {
        let user = ApplicationSettings.getString(SystemConstants.CURRENT_USER);
        if (user != null) return true;
        else return false;
    }

    getLoggedInUser(): any {
        let user: LoggedInUser
        if (this.isUserAuthenticate()) {
            var userData = JSON.parse(ApplicationSettings.getString(SystemConstants.CURRENT_USER));
            user = new LoggedInUser(userData.access_token,
                userData.username,
                userData.fullName,
                userData.email,
                userData.avatar, userData.roles, userData.permissions);
        } else user = null
        return user
    }

    checkAccess(functionId: string) {
        var user = this.getLoggedInUser();
        var result: boolean = false;
        var permission: any[] = JSON.parse(user.permissions);
        var roles: any[] = JSON.parse(user.roles);
        var hasPermission: number = permission.findIndex(x => x.FunctionId == functionId && x.CanRead == true);
        if (hasPermission != -1 || roles.findIndex(x => x == "Admin") != -1) {
            return true;
        }
        else
            return false;
    }

    hasPermission(functionId: string, action: string): boolean {
        var user = this.getLoggedInUser();
        var result: boolean = false;
        var permission: any[] = JSON.parse(user.permissions);
        var roles: any[] = JSON.parse(user.roles);
        switch (action) {
            case 'create':
                var hasPermission: number = permission.findIndex(x => x.FunctionId == functionId && x.CanCreate == true);
                if (hasPermission != -1 || roles.findIndex(x => x == "Admin") != -1)
                    result = true;
                break;
            case 'update':
                var hasPermission: number = permission.findIndex(x => x.FunctionId == functionId && x.CanUpdate == true);
                if (hasPermission != -1 || roles.findIndex(x => x == "Admin") != -1)
                    result = true;
                break;
            case 'delete':
                var hasPermission: number = permission.findIndex(x => x.FunctionId == functionId && x.CanDelete == true);
                if (hasPermission != -1 || roles.findIndex(x => x == "Admin") != -1)
                    result = true;
                break;
        }
        return result;
    }
}
