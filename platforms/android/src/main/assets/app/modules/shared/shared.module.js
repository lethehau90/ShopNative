"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var nativescript_module_1 = require("nativescript-angular/nativescript.module");
var side_drawer_directives_1 = require("nativescript-telerik-ui/sidedrawer/angular/side-drawer-directives");
var side_drawer_page_1 = require("./side-drawer-page");
var borderless_btn_directive_1 = require("./borderless-btn.directive");
var SharedModule = (function () {
    function SharedModule() {
    }
    return SharedModule;
}());
SharedModule = __decorate([
    core_1.NgModule({
        imports: [
            nativescript_module_1.NativeScriptModule,
            side_drawer_directives_1.NativeScriptUISideDrawerModule,
        ],
        declarations: [
            side_drawer_page_1.SideDrawerPageComponent,
            borderless_btn_directive_1.BorderlessBtnDirective
        ],
        exports: [
            side_drawer_page_1.SideDrawerPageComponent,
            borderless_btn_directive_1.BorderlessBtnDirective
        ]
    })
], SharedModule);
exports.SharedModule = SharedModule;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2hhcmVkLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInNoYXJlZC5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBeUM7QUFFekMsZ0ZBQThFO0FBQzlFLDRHQUFtSDtBQUVuSCx1REFBNkQ7QUFDN0QsdUVBQW9FO0FBZ0JwRSxJQUFhLFlBQVk7SUFBekI7SUFFQSxDQUFDO0lBQUQsbUJBQUM7QUFBRCxDQUFDLEFBRkQsSUFFQztBQUZZLFlBQVk7SUFkeEIsZUFBUSxDQUFDO1FBQ1IsT0FBTyxFQUFFO1lBQ1Asd0NBQWtCO1lBQ2xCLHVEQUE4QjtTQUMvQjtRQUNELFlBQVksRUFBRTtZQUNaLDBDQUF1QjtZQUN2QixpREFBc0I7U0FDdkI7UUFDRCxPQUFPLEVBQUU7WUFDUCwwQ0FBdUI7WUFDdkIsaURBQXNCO1NBQ3ZCO0tBQ0YsQ0FBQztHQUNXLFlBQVksQ0FFeEI7QUFGWSxvQ0FBWSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IE5hdGl2ZVNjcmlwdE1vZHVsZSB9IGZyb20gJ25hdGl2ZXNjcmlwdC1hbmd1bGFyL25hdGl2ZXNjcmlwdC5tb2R1bGUnO1xuaW1wb3J0IHsgTmF0aXZlU2NyaXB0VUlTaWRlRHJhd2VyTW9kdWxlIH0gZnJvbSAnbmF0aXZlc2NyaXB0LXRlbGVyaWstdWkvc2lkZWRyYXdlci9hbmd1bGFyL3NpZGUtZHJhd2VyLWRpcmVjdGl2ZXMnO1xuXG5pbXBvcnQgeyBTaWRlRHJhd2VyUGFnZUNvbXBvbmVudCB9IGZyb20gJy4vc2lkZS1kcmF3ZXItcGFnZSc7XG5pbXBvcnQgeyBCb3JkZXJsZXNzQnRuRGlyZWN0aXZlIH0gZnJvbSAnLi9ib3JkZXJsZXNzLWJ0bi5kaXJlY3RpdmUnO1xuXG5ATmdNb2R1bGUoe1xuICBpbXBvcnRzOiBbXG4gICAgTmF0aXZlU2NyaXB0TW9kdWxlLFxuICAgIE5hdGl2ZVNjcmlwdFVJU2lkZURyYXdlck1vZHVsZSxcbiAgXSxcbiAgZGVjbGFyYXRpb25zOiBbXG4gICAgU2lkZURyYXdlclBhZ2VDb21wb25lbnQsXG4gICAgQm9yZGVybGVzc0J0bkRpcmVjdGl2ZVxuICBdLFxuICBleHBvcnRzOiBbXG4gICAgU2lkZURyYXdlclBhZ2VDb21wb25lbnQsXG4gICAgQm9yZGVybGVzc0J0bkRpcmVjdGl2ZVxuICBdXG59KVxuZXhwb3J0IGNsYXNzIFNoYXJlZE1vZHVsZSB7XG5cbn1cbiJdfQ==