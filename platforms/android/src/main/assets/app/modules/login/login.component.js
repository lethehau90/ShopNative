"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var login_1 = require("./../../shared/login/login");
var core_1 = require("@angular/core");
var authen_service_1 = require("../../core/services/authen.service");
var url_constants_1 = require("../../core/common/url.constants");
var message_constants_1 = require("../../core/common/message.constants");
var router_1 = require("@angular/router");
var system_constants_1 = require("../../../app/core/common/system.constants");
var ApplicationSettings = require("application-settings");
var LoginComponent = (function () {
    function LoginComponent(_authenService, _router) {
        this._authenService = _authenService;
        this._router = _router;
        this.entity = login_1.LoginModule;
        this.entity = new Object();
    }
    LoginComponent.prototype.submit = function () {
        var _this = this;
        this._authenService.login(this.entity.userName, this.entity.password).subscribe(function (data) {
            var user = ApplicationSettings.getString(system_constants_1.SystemConstants.CURRENT_USER);
            if (user != null && user != undefined) {
                _this._router.navigate([url_constants_1.UrlConstants.HOME]);
            }
        }, function (error) {
            alert(message_constants_1.MessageContstants.SYSTEM_ERROR_MSG);
        });
    };
    return LoginComponent;
}());
LoginComponent = __decorate([
    core_1.Component({
        selector: 'login',
        templateUrl: 'modules/login/login.component.html',
        styleUrls: ['modules/login/login.component.css']
    }),
    __metadata("design:paramtypes", [authen_service_1.AuthenService, router_1.Router])
], LoginComponent);
exports.LoginComponent = LoginComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9naW4uY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsibG9naW4uY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsb0RBQXlEO0FBQ3pELHNDQUF5RTtBQUN6RSxxRUFBbUU7QUFDbkUsaUVBQStEO0FBQy9ELHlFQUF3RTtBQUN4RSwwQ0FBeUM7QUFDekMsOEVBQTRFO0FBQzVFLDBEQUE0RDtBQU81RCxJQUFhLGNBQWM7SUFJekIsd0JBQW9CLGNBQTZCLEVBQVUsT0FBZTtRQUF0RCxtQkFBYyxHQUFkLGNBQWMsQ0FBZTtRQUFVLFlBQU8sR0FBUCxPQUFPLENBQVE7UUFGMUUsV0FBTSxHQUFRLG1CQUFXLENBQUM7UUFHeEIsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLE1BQU0sRUFBRSxDQUFDO0lBQzdCLENBQUM7SUFFRCwrQkFBTSxHQUFOO1FBQUEsaUJBVUM7UUFSQyxJQUFJLENBQUMsY0FBYyxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsRUFBRSxJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxVQUFDLElBQUk7WUFDbkYsSUFBSSxJQUFJLEdBQUcsbUJBQW1CLENBQUMsU0FBUyxDQUFDLGtDQUFlLENBQUMsWUFBWSxDQUFDLENBQUM7WUFDdkUsRUFBRSxDQUFDLENBQUMsSUFBSSxJQUFJLElBQUksSUFBSSxJQUFJLElBQUksU0FBUyxDQUFDLENBQUMsQ0FBQztnQkFDdEMsS0FBSSxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUMsQ0FBQyw0QkFBWSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUE7WUFDNUMsQ0FBQztRQUNILENBQUMsRUFBRSxVQUFDLEtBQUs7WUFDUCxLQUFLLENBQUMscUNBQWlCLENBQUMsZ0JBQWdCLENBQUMsQ0FBQTtRQUMzQyxDQUFDLENBQUMsQ0FBQTtJQUNKLENBQUM7SUFDSCxxQkFBQztBQUFELENBQUMsQUFuQkQsSUFtQkM7QUFuQlksY0FBYztJQUwxQixnQkFBUyxDQUFDO1FBQ1QsUUFBUSxFQUFFLE9BQU87UUFDakIsV0FBVyxFQUFFLG9DQUFvQztRQUNqRCxTQUFTLEVBQUUsQ0FBQyxtQ0FBbUMsQ0FBQztLQUNqRCxDQUFDO3FDQUtvQyw4QkFBYSxFQUFtQixlQUFNO0dBSi9ELGNBQWMsQ0FtQjFCO0FBbkJZLHdDQUFjIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTG9naW5Nb2R1bGUgfSBmcm9tICcuLy4uLy4uL3NoYXJlZC9sb2dpbi9sb2dpbic7XHJcbmltcG9ydCB7IENvbXBvbmVudCwgRWxlbWVudFJlZiwgT25Jbml0LCBWaWV3Q2hpbGQgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQgeyBBdXRoZW5TZXJ2aWNlIH0gZnJvbSAnLi4vLi4vY29yZS9zZXJ2aWNlcy9hdXRoZW4uc2VydmljZSc7XHJcbmltcG9ydCB7IFVybENvbnN0YW50cyB9IGZyb20gJy4uLy4uL2NvcmUvY29tbW9uL3VybC5jb25zdGFudHMnO1xyXG5pbXBvcnQgeyBNZXNzYWdlQ29udHN0YW50cyB9IGZyb20gJy4uLy4uL2NvcmUvY29tbW9uL21lc3NhZ2UuY29uc3RhbnRzJztcclxuaW1wb3J0IHsgUm91dGVyIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcclxuaW1wb3J0IHsgU3lzdGVtQ29uc3RhbnRzIH0gZnJvbSBcIi4uLy4uLy4uL2FwcC9jb3JlL2NvbW1vbi9zeXN0ZW0uY29uc3RhbnRzXCI7XHJcbmltcG9ydCAqIGFzIEFwcGxpY2F0aW9uU2V0dGluZ3MgZnJvbSAnYXBwbGljYXRpb24tc2V0dGluZ3MnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdsb2dpbicsXHJcbiAgdGVtcGxhdGVVcmw6ICdtb2R1bGVzL2xvZ2luL2xvZ2luLmNvbXBvbmVudC5odG1sJyxcclxuICBzdHlsZVVybHM6IFsnbW9kdWxlcy9sb2dpbi9sb2dpbi5jb21wb25lbnQuY3NzJ11cclxufSlcclxuZXhwb3J0IGNsYXNzIExvZ2luQ29tcG9uZW50IHtcclxuXHJcbiAgZW50aXR5OiBhbnkgPSBMb2dpbk1vZHVsZTtcclxuXHJcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBfYXV0aGVuU2VydmljZTogQXV0aGVuU2VydmljZSwgcHJpdmF0ZSBfcm91dGVyOiBSb3V0ZXIpIHtcclxuICAgIHRoaXMuZW50aXR5ID0gbmV3IE9iamVjdCgpO1xyXG4gIH1cclxuXHJcbiAgc3VibWl0KCk6IHZvaWQge1xyXG5cclxuICAgIHRoaXMuX2F1dGhlblNlcnZpY2UubG9naW4odGhpcy5lbnRpdHkudXNlck5hbWUsIHRoaXMuZW50aXR5LnBhc3N3b3JkKS5zdWJzY3JpYmUoKGRhdGEpID0+IHtcclxuICAgICAgbGV0IHVzZXIgPSBBcHBsaWNhdGlvblNldHRpbmdzLmdldFN0cmluZyhTeXN0ZW1Db25zdGFudHMuQ1VSUkVOVF9VU0VSKTtcclxuICAgICAgaWYgKHVzZXIgIT0gbnVsbCAmJiB1c2VyICE9IHVuZGVmaW5lZCkge1xyXG4gICAgICAgIHRoaXMuX3JvdXRlci5uYXZpZ2F0ZShbVXJsQ29uc3RhbnRzLkhPTUVdKVxyXG4gICAgICB9XHJcbiAgICB9LCAoZXJyb3IpID0+IHtcclxuICAgICAgYWxlcnQoTWVzc2FnZUNvbnRzdGFudHMuU1lTVEVNX0VSUk9SX01TRylcclxuICAgIH0pXHJcbiAgfVxyXG59XHJcbiJdfQ==