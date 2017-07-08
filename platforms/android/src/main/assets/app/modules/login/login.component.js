"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var login_1 = require("./../../shared/login/login");
var core_1 = require("@angular/core");
var component_base_1 = require("./../../../app/core/base/component.base");
var LoginComponent = (function (_super) {
    __extends(LoginComponent, _super);
    function LoginComponent() {
        var _this = _super.call(this) || this;
        _this.entity = login_1.LoginModule;
        _this.entity = new Object();
        return _this;
    }
    LoginComponent.prototype.submit = function () {
        console.log(this.entity);
        alert(this.entity.userName);
        return;
    };
    return LoginComponent;
}(component_base_1.BaseComponent));
LoginComponent = __decorate([
    core_1.Component({
        selector: 'login',
        templateUrl: 'modules/login/login.component.html',
        styleUrls: ['modules/login/login.component.css']
    }),
    __metadata("design:paramtypes", [])
], LoginComponent);
exports.LoginComponent = LoginComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9naW4uY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsibG9naW4uY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsb0RBQXlEO0FBQ3pELHNDQUF5RTtBQUN6RSwwRUFBd0U7QUFPeEUsSUFBYSxjQUFjO0lBQVMsa0NBQWE7SUFJL0M7UUFBQSxZQUNFLGlCQUFPLFNBRVI7UUFMRCxZQUFNLEdBQVMsbUJBQVcsQ0FBQztRQUl6QixLQUFJLENBQUMsTUFBTSxHQUFHLElBQUksTUFBTSxFQUFFLENBQUM7O0lBQzdCLENBQUM7SUFFRCwrQkFBTSxHQUFOO1FBQ0UsT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUE7UUFDeEIsS0FBSyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUE7UUFDM0IsTUFBTSxDQUFDO0lBQ1QsQ0FBQztJQUNILHFCQUFDO0FBQUQsQ0FBQyxBQWRELENBQW9DLDhCQUFhLEdBY2hEO0FBZFksY0FBYztJQUwxQixnQkFBUyxDQUFDO1FBQ1QsUUFBUSxFQUFFLE9BQU87UUFDakIsV0FBVyxFQUFFLG9DQUFvQztRQUNqRCxTQUFTLEVBQUUsQ0FBQyxtQ0FBbUMsQ0FBQztLQUNqRCxDQUFDOztHQUNXLGNBQWMsQ0FjMUI7QUFkWSx3Q0FBYyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IExvZ2luTW9kdWxlIH0gZnJvbSAnLi8uLi8uLi9zaGFyZWQvbG9naW4vbG9naW4nO1xyXG5pbXBvcnQgeyBDb21wb25lbnQsIEVsZW1lbnRSZWYsIE9uSW5pdCwgVmlld0NoaWxkIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHsgQmFzZUNvbXBvbmVudCB9IGZyb20gXCIuLy4uLy4uLy4uL2FwcC9jb3JlL2Jhc2UvY29tcG9uZW50LmJhc2VcIjtcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnbG9naW4nLFxyXG4gIHRlbXBsYXRlVXJsOiAnbW9kdWxlcy9sb2dpbi9sb2dpbi5jb21wb25lbnQuaHRtbCcsXHJcbiAgc3R5bGVVcmxzOiBbJ21vZHVsZXMvbG9naW4vbG9naW4uY29tcG9uZW50LmNzcyddXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBMb2dpbkNvbXBvbmVudCBleHRlbmRzIEJhc2VDb21wb25lbnQge1xyXG5cclxuICBlbnRpdHkgOiBhbnkgPSBMb2dpbk1vZHVsZTtcclxuXHJcbiAgY29uc3RydWN0b3IoKSB7XHJcbiAgICBzdXBlcigpXHJcbiAgICB0aGlzLmVudGl0eSA9IG5ldyBPYmplY3QoKTtcclxuICB9XHJcblxyXG4gIHN1Ym1pdCgpOiB2b2lkIHtcclxuICAgIGNvbnNvbGUubG9nKHRoaXMuZW50aXR5KVxyXG4gICAgYWxlcnQodGhpcy5lbnRpdHkudXNlck5hbWUpXHJcbiAgICByZXR1cm47XHJcbiAgfVxyXG59XHJcbiJdfQ==