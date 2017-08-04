"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var ApplicationSettings = require("application-settings");
var router_1 = require("@angular/router");
var router_2 = require("nativescript-angular/router");
var page_1 = require("ui/page");
var platform_1 = require("platform");
var action_bar_1 = require("ui/action-bar");
var angular_1 = require("nativescript-telerik-ui/sidedrawer/angular");
var sidedrawer_1 = require("nativescript-telerik-ui/sidedrawer");
var utility_service_1 = require("../../../core/services/utility.service");
var system_constants_1 = require("../../../core/common/system.constants");
var SideDrawerPageComponent = (function () {
    function SideDrawerPageComponent(routerExtensions, activatedRoute, page, ngZone, _utilityService) {
        this.routerExtensions = routerExtensions;
        this.activatedRoute = activatedRoute;
        this.page = page;
        this.ngZone = ngZone;
        this._utilityService = _utilityService;
        /**
         * On tap of any side-drawer item, hiding content if this flag is true.
         */
        this.isContentVisible = true;
        /**
         * Navigation Menu Items
         */
        this.navMenu = [
            { name: 'Home', commands: ['/home'] },
            { name: 'Người dùng', commands: ['/user'] }
        ];
        this.setActionBarIcon(this.page);
        this.setDrawerTransition();
    }
    SideDrawerPageComponent.prototype.Logout = function () {
        ApplicationSettings.remove(system_constants_1.SystemConstants.CURRENT_USER);
        //this._utilityService.navigate(UrlConstants.LOGIN);
        this._utilityService.navigate('/');
    };
    SideDrawerPageComponent.prototype.ngAfterViewInit = function () {
        this.drawer = this.drawerComponent.sideDrawer;
    };
    SideDrawerPageComponent.prototype.ngOnDestroy = function () {
        this.drawer.off('drawerClosed');
    };
    SideDrawerPageComponent.prototype.toggleSideDrawer = function () {
        this.drawer.toggleDrawerState();
    };
    /**
     * Navigates to next page after drawer is closed.
     */
    SideDrawerPageComponent.prototype.navigateTo = function (routeCommands) {
        var _this = this;
        this.drawer.closeDrawer();
        var currentUrl = this.routerExtensions.router.routerState.snapshot.url;
        var newUrlTree = this.routerExtensions.router.createUrlTree(routeCommands);
        var newUrl = this.routerExtensions.router.serializeUrl(newUrlTree);
        if (currentUrl !== newUrl) {
            this.isContentVisible = false;
            this.drawer.on('drawerClosed', function () {
                _this.ngZone.run(function () {
                    _this.routerExtensions.navigate(routeCommands, {
                        clearHistory: true,
                        animated: false
                    });
                    _this.isContentVisible = true;
                    _this.drawer.off('drawerClosed');
                });
            });
        }
    };
    SideDrawerPageComponent.prototype.setDrawerTransition = function () {
        if (platform_1.isAndroid) {
            this.drawerTransition = new sidedrawer_1.SlideInOnTopTransition();
        }
        if (platform_1.isIOS) {
            this.drawerTransition = new sidedrawer_1.PushTransition();
        }
    };
    SideDrawerPageComponent.prototype.setActionBarIcon = function (page) {
        if (platform_1.isAndroid) {
            page.actionBar.navigationButton = this.getNavigationButton();
        }
        if (platform_1.isIOS) {
            page.actionBar.actionItems.addItem(this.getNavigationButton());
        }
    };
    SideDrawerPageComponent.prototype.getNavigationButton = function () {
        var navActionItem = new action_bar_1.ActionItem();
        navActionItem.icon = 'res://ic_menu_black';
        if (navActionItem.ios) {
            navActionItem.ios.position = 'left';
        }
        navActionItem.on('tap', this.toggleDrawer.bind(this));
        return navActionItem;
    };
    SideDrawerPageComponent.prototype.toggleDrawer = function () {
        this.drawer.toggleDrawerState();
    };
    return SideDrawerPageComponent;
}());
__decorate([
    core_1.ViewChild(angular_1.RadSideDrawerComponent),
    __metadata("design:type", angular_1.RadSideDrawerComponent)
], SideDrawerPageComponent.prototype, "drawerComponent", void 0);
SideDrawerPageComponent = __decorate([
    core_1.Component({
        selector: 'side-drawer-page',
        templateUrl: 'modules/shared/side-drawer-page/side-drawer-page.component.html',
        styleUrls: ['modules/shared/side-drawer-page/side-drawer-page.component.css']
    }),
    __metadata("design:paramtypes", [router_2.RouterExtensions,
        router_1.ActivatedRoute,
        page_1.Page,
        core_1.NgZone,
        utility_service_1.UtilityService])
], SideDrawerPageComponent);
exports.SideDrawerPageComponent = SideDrawerPageComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2lkZS1kcmF3ZXItcGFnZS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJzaWRlLWRyYXdlci1wYWdlLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUV1QjtBQUN2QiwwREFBNEQ7QUFFNUQsMENBQWlEO0FBQ2pELHNEQUErRDtBQUUvRCxnQ0FBK0I7QUFDL0IscUNBQTRDO0FBQzVDLDRDQUEyQztBQUMzQyxzRUFFb0Q7QUFDcEQsaUVBRTRDO0FBQzVDLDBFQUF3RTtBQUN4RSwwRUFBd0U7QUFPeEUsSUFBYSx1QkFBdUI7SUF1QmxDLGlDQUNVLGdCQUFrQyxFQUNsQyxjQUE4QixFQUM5QixJQUFVLEVBQ1YsTUFBYyxFQUNkLGVBQWdDO1FBSmhDLHFCQUFnQixHQUFoQixnQkFBZ0IsQ0FBa0I7UUFDbEMsbUJBQWMsR0FBZCxjQUFjLENBQWdCO1FBQzlCLFNBQUksR0FBSixJQUFJLENBQU07UUFDVixXQUFNLEdBQU4sTUFBTSxDQUFRO1FBQ2Qsb0JBQWUsR0FBZixlQUFlLENBQWlCO1FBekIxQzs7V0FFRztRQUNILHFCQUFnQixHQUFZLElBQUksQ0FBQztRQU9qQzs7V0FFRztRQUNILFlBQU8sR0FBVTtZQUNmLEVBQUUsSUFBSSxFQUFFLE1BQU0sRUFBRSxRQUFRLEVBQUUsQ0FBQyxPQUFPLENBQUMsRUFBRTtZQUNyQyxFQUFFLElBQUksRUFBRSxZQUFZLEVBQUUsUUFBUSxFQUFFLENBQUMsT0FBTyxDQUFDLEVBQUU7U0FDNUMsQ0FBQztRQVdBLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDakMsSUFBSSxDQUFDLG1CQUFtQixFQUFFLENBQUM7SUFDN0IsQ0FBQztJQUVELHdDQUFNLEdBQU47UUFDRSxtQkFBbUIsQ0FBQyxNQUFNLENBQUMsa0NBQWUsQ0FBQyxZQUFZLENBQUMsQ0FBQztRQUN6RCxvREFBb0Q7UUFDcEQsSUFBSSxDQUFDLGVBQWUsQ0FB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LENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7UUFDdEQsTUFBTSxDQUFDLGFBQWEsQ0FBQztJQUN2QixDQUFDO0lBRU8sOENBQVksR0FBcEI7UUFDRSxJQUFJLENBQUMsTUFBTSxDQUFDLGlCQUFpQixFQUFFLENBQUM7SUFDbEMsQ0FBQztJQUNILDhCQUFDO0FBQUQsQ0FBQyxBQTlHRCxJQThHQztBQTdHb0M7SUFBbEMsZ0JBQVMsQ0FBQyxnQ0FBc0IsQ0FBQzs4QkFBa0IsZ0NBQXNCO2dFQUFDO0FBRGhFLHVCQUF1QjtJQUxuQyxnQkFBUyxDQUFDO1FBQ1QsUUFBUSxFQUFFLGtCQUFrQjtRQUM1QixXQUFXLEVBQUUsaUVBQWlFO1FBQzlFLFNBQVMsRUFBRSxDQUFDLGdFQUFnRSxDQUFDO0tBQzlFLENBQUM7cUNBeUI0Qix5QkFBZ0I7UUFDbEIsdUJBQWM7UUFDeEIsV0FBSTtRQUNGLGFBQU07UUFDSSxnQ0FBYztHQTVCL0IsdUJBQXVCLENBOEduQztBQTlHWSwwREFBdUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBDb21wb25lbnQsIFZpZXdDaGlsZCwgQWZ0ZXJWaWV3SW5pdCwgTmdab25lLCBPbkRlc3Ryb3lcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgKiBhcyBBcHBsaWNhdGlvblNldHRpbmdzIGZyb20gJ2FwcGxpY2F0aW9uLXNldHRpbmdzJztcblxuaW1wb3J0IHsgQWN0aXZhdGVkUm91dGUgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuaW1wb3J0IHsgUm91dGVyRXh0ZW5zaW9ucyB9IGZyb20gJ25hdGl2ZXNjcmlwdC1hbmd1bGFyL3JvdXRlcic7XG5cbmltcG9ydCB7IFBhZ2UgfSBmcm9tICd1aS9wYWdlJztcbmltcG9ydCB7IGlzQW5kcm9pZCwgaXNJT1MgfSBmcm9tICdwbGF0Zm9ybSc7XG5pbXBvcnQgeyBBY3Rpb25JdGVtIH0gZnJvbSAndWkvYWN0aW9uLWJhcic7XG5pbXBvcnQge1xuICBSYWRTaWRlRHJhd2VyQ29tcG9uZW50LCBTaWRlRHJhd2VyVHlwZVxufSBmcm9tICduYXRpdmVzY3JpcHQtdGVsZXJpay11aS9zaWRlZHJhd2VyL2FuZ3VsYXInO1xuaW1wb3J0IHtcbiAgUHVzaFRyYW5zaXRpb24sIFNsaWRlSW5PblRvcFRyYW5zaXRpb25cbn0gZnJvbSAnbmF0aXZlc2NyaXB0LXRlbGVyaWstdWkvc2lkZWRyYXdlcic7XG5pbXBvcnQgeyBVdGlsaXR5U2VydmljZSB9IGZyb20gXCIuLi8uLi8uLi9jb3JlL3NlcnZpY2VzL3V0aWxpdHkuc2VydmljZVwiO1xuaW1wb3J0IHsgU3lzdGVtQ29uc3RhbnRzIH0gZnJvbSBcIi4uLy4uLy4uL2NvcmUvY29tbW9uL3N5c3RlbS5jb25zdGFudHNcIjtcbmltcG9ydCB7IFVybENvbnN0YW50cyB9IGZyb20gXCIuLi8uLi8uLi9jb3JlL2NvbW1vbi91cmwuY29uc3RhbnRzXCI7XG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdzaWRlLWRyYXdlci1wYWdlJyxcbiAgdGVtcGxhdGVVcmw6ICdtb2R1bGVzL3NoYXJlZC9zaWRlLWRyYXdlci1wYWdlL3NpZGUtZHJhd2VyLXBhZ2UuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnbW9kdWxlcy9zaGFyZWQvc2lkZS1kcmF3ZXItcGFnZS9zaWRlLWRyYXdlci1wYWdlLmNvbXBvbmVudC5jc3MnXVxufSlcbmV4cG9ydCBjbGFzcyBTaWRlRHJhd2VyUGFnZUNvbXBvbmVudCAgaW1wbGVtZW50cyBBZnRlclZpZXdJbml0LCBPbkRlc3Ryb3kgIHtcbiAgQFZpZXdDaGlsZChSYWRTaWRlRHJhd2VyQ29tcG9uZW50KSBkcmF3ZXJDb21wb25lbnQ6IFJhZFNpZGVEcmF3ZXJDb21wb25lbnQ7XG5cbiAgLyoqXG4gICAqIE9uIHRhcCBvZiBhbnkgc2lkZS1kcmF3ZXIgaXRlbSwgaGlkaW5nIGNvbnRlbnQgaWYgdGhpcyBmbGFnIGlzIHRydWUuXG4gICAqL1xuICBpc0NvbnRlbnRWaXNpYmxlOiBib29sZWFuID0gdHJ1ZTtcblxuICAvKipcbiAgICogRm9yIGFuZHJvaWQgdXNpbmcgU2xpZGVPblRvcCB0cmFuc2l0aW9uIGFuZCBmb3IgaU9TLCBwdXNoIHRyYW5zaXRpb24uXG4gICAqL1xuICBkcmF3ZXJUcmFuc2l0aW9uOiBhbnk7XG5cbiAgLyoqXG4gICAqIE5hdmlnYXRpb24gTWVudSBJdGVtc1xuICAgKi9cbiAgbmF2TWVudTogYW55W10gPSBbXG4gICAgeyBuYW1lOiAnSG9tZScsIGNvbW1hbmRzOiBbJy9ob21lJ10gfSxcbiAgICB7IG5hbWU6ICdOZ8aw4budaSBkw7luZycsIGNvbW1hbmRzOiBbJy91c2VyJ10gfVxuICBdO1xuXG4gIHByaXZhdGUgZHJhd2VyOiBTaWRlRHJhd2VyVHlwZTtcblxuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIHJvdXRlckV4dGVuc2lvbnM6IFJvdXRlckV4dGVuc2lvbnMsXG4gICAgcHJpdmF0ZSBhY3RpdmF0ZWRSb3V0ZTogQWN0aXZhdGVkUm91dGUsXG4gICAgcHJpdmF0ZSBwYWdlOiBQYWdlLFxuICAgIHByaXZhdGUgbmdab25lOiBOZ1pvbmUsXG4gICAgcHJpdmF0ZSBfdXRpbGl0eVNlcnZpY2UgOiBVdGlsaXR5U2VydmljZVxuICApIHtcbiAgICB0aGlzLnNldEFjdGlvbkJhckljb24odGhpcy5wYWdlKTtcbiAgICB0aGlzLnNldERyYXdlclRyYW5zaXRpb24oKTtcbiAgfVxuXG4gIExvZ291dCgpIHtcbiAgICBBcHBsaWNhdGlvblNldHRpbmdzLnJlbW92ZShTeXN0ZW1Db25zdGFudHMuQ1VSUkVOVF9VU0VSKTtcbiAgICAvL3RoaXMuX3V0aWxpdHlTZXJ2aWNlLm5hdmlnYXRlKFVybENvbnN0YW50cy5MT0dJTik7XG4gICAgdGhpcy5fdXRpbGl0eVNlcnZpY2UubmF2aWdhdGUoJy8nKTtcbiAgfVxuXG4gIG5nQWZ0ZXJWaWV3SW5pdCgpIHtcbiAgICB0aGlzLmRyYXdlciA9IHRoaXMuZHJhd2VyQ29tcG9uZW50LnNpZGVEcmF3ZXI7XG4gIH1cblxuICBuZ09uRGVzdHJveSgpIHtcbiAgICB0aGlzLmRyYXdlci5vZmYoJ2RyYXdlckNsb3NlZCcpO1xuICB9XG5cbiAgdG9nZ2xlU2lkZURyYXdlcigpIHtcbiAgICB0aGlzLmRyYXdlci50b2dnbGVEcmF3ZXJTdGF0ZSgpO1xuICB9XG5cbiAgLyoqXG4gICAqIE5hdmlnYXRlcyB0byBuZXh0IHBhZ2UgYWZ0ZXIgZHJhd2VyIGlzIGNsb3NlZC5cbiAgICovXG4gIG5hdmlnYXRlVG8ocm91dGVDb21tYW5kczogYW55W10pIHtcbiAgICB0aGlzLmRyYXdlci5jbG9zZURyYXdlcigpO1xuICAgIGxldCBjdXJyZW50VXJsID0gdGhpcy5yb3V0ZXJFeHRlbnNpb25zLnJvdXRlci5yb3V0ZXJTdGF0ZS5zbmFwc2hvdC51cmw7XG4gICAgbGV0IG5ld1VybFRyZWUgPSB0aGlzLnJvdXRlckV4dGVuc2lvbnMucm91dGVyLmNyZWF0ZVVybFRyZWUocm91dGVDb21tYW5kcyk7XG4gICAgbGV0IG5ld1VybCA9IHRoaXMucm91dGVyRXh0ZW5zaW9ucy5yb3V0ZXIuc2VyaWFsaXplVXJsKG5ld1VybFRyZWUpO1xuICAgIGlmIChjdXJyZW50VXJsICE9PSBuZXdVcmwpIHtcbiAgICAgIHRoaXMuaXNDb250ZW50VmlzaWJsZSA9IGZhbHNlO1xuXG4gICAgICB0aGlzLmRyYXdlci5vbignZHJhd2VyQ2xvc2VkJywgKCkgPT4ge1xuICAgICAgICB0aGlzLm5nWm9uZS5ydW4oKCkgPT4ge1xuICAgICAgICAgIHRoaXMucm91dGVyRXh0ZW5zaW9ucy5uYXZpZ2F0ZShyb3V0ZUNvbW1hbmRzLFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBjbGVhckhpc3Rvcnk6IHRydWUsXG4gICAgICAgICAgICAgIGFuaW1hdGVkOiBmYWxzZVxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgdGhpcy5pc0NvbnRlbnRWaXNpYmxlID0gdHJ1ZTtcbiAgICAgICAgICB0aGlzLmRyYXdlci5vZmYoJ2RyYXdlckNsb3NlZCcpO1xuICAgICAgICB9KTtcbiAgICAgIH0pO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgc2V0RHJhd2VyVHJhbnNpdGlvbigpIHtcbiAgICBpZiAoaXNBbmRyb2lkKSB7XG4gICAgICB0aGlzLmRyYXdlclRyYW5zaXRpb24gPSBuZXcgU2xpZGVJbk9uVG9wVHJhbnNpdGlvbigpO1xuICAgIH1cblxuICAgIGlmIChpc0lPUykge1xuICAgICAgdGhpcy5kcmF3ZXJUcmFuc2l0aW9uID0gbmV3IFB1c2hUcmFuc2l0aW9uKCk7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBzZXRBY3Rpb25CYXJJY29uKHBhZ2U6IFBhZ2UpIHtcbiAgICBpZiAoaXNBbmRyb2lkKSB7XG4gICAgICBwYWdlLmFjdGlvbkJhci5uYXZpZ2F0aW9uQnV0dG9uID0gdGhpcy5nZXROYXZpZ2F0aW9uQnV0dG9uKCk7XG4gICAgfVxuXG4gICAgaWYgKGlzSU9TKSB7XG4gICAgICBwYWdlLmFjdGlvbkJhci5hY3Rpb25JdGVtcy5hZGRJdGVtKHRoaXMuZ2V0TmF2aWdhdGlvbkJ1dHRvbigpKTtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIGdldE5hdmlnYXRpb25CdXR0b24oKSB7XG4gICAgbGV0IG5hdkFjdGlvbkl0ZW0gPSBuZXcgQWN0aW9uSXRlbSgpO1xuICAgIG5hdkFjdGlvbkl0ZW0uaWNvbiA9ICdyZXM6Ly9pY19tZW51X2JsYWNrJztcbiAgICBpZiAobmF2QWN0aW9uSXRlbS5pb3MpIHtcbiAgICAgIG5hdkFjdGlvbkl0ZW0uaW9zLnBvc2l0aW9uID0gJ2xlZnQnO1xuICAgIH1cbiAgICBuYXZBY3Rpb25JdGVtLm9uKCd0YXAnLCB0aGlzLnRvZ2dsZURyYXdlci5iaW5kKHRoaXMpKTtcbiAgICByZXR1cm4gbmF2QWN0aW9uSXRlbTtcbiAgfVxuXG4gIHByaXZhdGUgdG9nZ2xlRHJhd2VyKCkge1xuICAgIHRoaXMuZHJhd2VyLnRvZ2dsZURyYXdlclN0YXRlKCk7XG4gIH1cbn1cbiJdfQ==