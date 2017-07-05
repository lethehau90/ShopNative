"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var system_constants_1 = require("../../core/common/system.constants");
var url_constants_1 = require("../../core/common/url.constants");
var AuthGuard = (function () {
    function AuthGuard(router) {
        this.router = router;
    }
    AuthGuard.prototype.canActivate = function (activateRoute, routerState) {
        if (localStorage.getItem(system_constants_1.SystemConstants.CURRENT_USER)) {
            return true;
        }
        else {
            this.router.navigate([url_constants_1.UrlConstants.LOGIN], {
                queryParams: {
                    returnUrl: routerState.url
                }
            });
            return false;
        }
    };
    return AuthGuard;
}());
AuthGuard = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [router_1.Router])
], AuthGuard);
exports.AuthGuard = AuthGuard;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXV0aC5ndWFyZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImF1dGguZ3VhcmQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBMkM7QUFDM0MsMENBQW1HO0FBQ25HLHVFQUFxRTtBQUNyRSxpRUFBK0Q7QUFHL0QsSUFBYSxTQUFTO0lBQ2xCLG1CQUFvQixNQUFjO1FBQWQsV0FBTSxHQUFOLE1BQU0sQ0FBUTtJQUNsQyxDQUFDO0lBQ0QsK0JBQVcsR0FBWCxVQUFZLGFBQXFDLEVBQUUsV0FBZ0M7UUFDL0UsRUFBRSxDQUFDLENBQUMsWUFBWSxDQUFDLE9BQU8sQ0FBQyxrQ0FBZSxDQUFDLFlBQVksQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUNyRCxNQUFNLENBQUMsSUFBSSxDQUFDO1FBQ2hCLENBQUM7UUFDRCxJQUFJLENBQUMsQ0FBQztZQUNGLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUMsNEJBQVksQ0FBQyxLQUFLLENBQUMsRUFBRTtnQkFDdkMsV0FBVyxFQUFFO29CQUNULFNBQVMsRUFBRSxXQUFXLENBQUMsR0FBRztpQkFDN0I7YUFDSixDQUFDLENBQUM7WUFDSCxNQUFNLENBQUMsS0FBSyxDQUFDO1FBQ2pCLENBQUM7SUFDTCxDQUFDO0lBQ0wsZ0JBQUM7QUFBRCxDQUFDLEFBaEJELElBZ0JDO0FBaEJZLFNBQVM7SUFEckIsaUJBQVUsRUFBRTtxQ0FFbUIsZUFBTTtHQUR6QixTQUFTLENBZ0JyQjtBQWhCWSw4QkFBUyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgQ2FuQWN0aXZhdGUsIEFjdGl2YXRlZFJvdXRlU25hcHNob3QsIFJvdXRlclN0YXRlU25hcHNob3QsIFJvdXRlciB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XHJcbmltcG9ydCB7IFN5c3RlbUNvbnN0YW50cyB9IGZyb20gJy4uLy4uL2NvcmUvY29tbW9uL3N5c3RlbS5jb25zdGFudHMnO1xyXG5pbXBvcnQgeyBVcmxDb25zdGFudHMgfSBmcm9tICcuLi8uLi9jb3JlL2NvbW1vbi91cmwuY29uc3RhbnRzJztcclxuXHJcbkBJbmplY3RhYmxlKClcclxuZXhwb3J0IGNsYXNzIEF1dGhHdWFyZCBpbXBsZW1lbnRzIENhbkFjdGl2YXRlIHtcclxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgcm91dGVyOiBSb3V0ZXIpIHtcclxuICAgIH1cclxuICAgIGNhbkFjdGl2YXRlKGFjdGl2YXRlUm91dGU6IEFjdGl2YXRlZFJvdXRlU25hcHNob3QsIHJvdXRlclN0YXRlOiBSb3V0ZXJTdGF0ZVNuYXBzaG90KSB7XHJcbiAgICAgICAgaWYgKGxvY2FsU3RvcmFnZS5nZXRJdGVtKFN5c3RlbUNvbnN0YW50cy5DVVJSRU5UX1VTRVIpKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5yb3V0ZXIubmF2aWdhdGUoW1VybENvbnN0YW50cy5MT0dJTl0sIHtcclxuICAgICAgICAgICAgICAgIHF1ZXJ5UGFyYW1zOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuVXJsOiByb3V0ZXJTdGF0ZS51cmxcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn0iXX0=