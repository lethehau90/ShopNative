"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var system_constants_1 = require("../../core/common/system.constants");
var url_constants_1 = require("../../core/common/url.constants");
var ApplicationSettings = require("application-settings");
var AuthGuard = (function () {
    function AuthGuard(router) {
        this.router = router;
    }
    AuthGuard.prototype.canActivate = function (activateRoute, routerState) {
        if (ApplicationSettings.getString(system_constants_1.SystemConstants.CURRENT_USER)) {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXV0aC5ndWFyZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImF1dGguZ3VhcmQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBMkM7QUFDM0MsMENBQW1HO0FBQ25HLHVFQUFxRTtBQUNyRSxpRUFBK0Q7QUFDL0QsMERBQTREO0FBRzVELElBQWEsU0FBUztJQUNsQixtQkFBb0IsTUFBYztRQUFkLFdBQU0sR0FBTixNQUFNLENBQVE7SUFDbEMsQ0FBQztJQUNELCtCQUFXLEdBQVgsVUFBWSxhQUFxQyxFQUFFLFdBQWdDO1FBQy9FLEVBQUUsQ0FBQyxDQUFDLG1CQUFtQixDQUFDLFNBQVMsQ0FBQyxrQ0FBZSxDQUFDLFlBQVksQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUM5RCxNQUFNLENBQUMsSUFBSSxDQUFDO1FBQ2hCLENBQUM7UUFDRCxJQUFJLENBQUMsQ0FBQztZQUNGLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUMsNEJBQVksQ0FBQyxLQUFLLENBQUMsRUFBRTtnQkFDdkMsV0FBVyxFQUFFO29CQUNULFNBQVMsRUFBRSxXQUFXLENBQUMsR0FBRztpQkFDN0I7YUFDSixDQUFDLENBQUM7WUFDSCxNQUFNLENBQUMsS0FBSyxDQUFDO1FBQ2pCLENBQUM7SUFDTCxDQUFDO0lBQ0wsZ0JBQUM7QUFBRCxDQUFDLEFBaEJELElBZ0JDO0FBaEJZLFNBQVM7SUFEckIsaUJBQVUsRUFBRTtxQ0FFbUIsZUFBTTtHQUR6QixTQUFTLENBZ0JyQjtBQWhCWSw4QkFBUyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgQ2FuQWN0aXZhdGUsIEFjdGl2YXRlZFJvdXRlU25hcHNob3QsIFJvdXRlclN0YXRlU25hcHNob3QsIFJvdXRlciB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XHJcbmltcG9ydCB7IFN5c3RlbUNvbnN0YW50cyB9IGZyb20gJy4uLy4uL2NvcmUvY29tbW9uL3N5c3RlbS5jb25zdGFudHMnO1xyXG5pbXBvcnQgeyBVcmxDb25zdGFudHMgfSBmcm9tICcuLi8uLi9jb3JlL2NvbW1vbi91cmwuY29uc3RhbnRzJztcclxuaW1wb3J0ICogYXMgQXBwbGljYXRpb25TZXR0aW5ncyBmcm9tICdhcHBsaWNhdGlvbi1zZXR0aW5ncyc7XHJcblxyXG5ASW5qZWN0YWJsZSgpXHJcbmV4cG9ydCBjbGFzcyBBdXRoR3VhcmQgaW1wbGVtZW50cyBDYW5BY3RpdmF0ZSB7XHJcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIHJvdXRlcjogUm91dGVyKSB7XHJcbiAgICB9XHJcbiAgICBjYW5BY3RpdmF0ZShhY3RpdmF0ZVJvdXRlOiBBY3RpdmF0ZWRSb3V0ZVNuYXBzaG90LCByb3V0ZXJTdGF0ZTogUm91dGVyU3RhdGVTbmFwc2hvdCkge1xyXG4gICAgICAgIGlmIChBcHBsaWNhdGlvblNldHRpbmdzLmdldFN0cmluZyhTeXN0ZW1Db25zdGFudHMuQ1VSUkVOVF9VU0VSKSkge1xyXG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMucm91dGVyLm5hdmlnYXRlKFtVcmxDb25zdGFudHMuTE9HSU5dLCB7XHJcbiAgICAgICAgICAgICAgICBxdWVyeVBhcmFtczoge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVyblVybDogcm91dGVyU3RhdGUudXJsXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59Il19