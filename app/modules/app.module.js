"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var http_1 = require("nativescript-angular/http");
var router_1 = require("nativescript-angular/router");
var forms_1 = require("nativescript-angular/forms");
var nativescript_module_1 = require("nativescript-angular/nativescript.module");
var core_1 = require("@angular/core");
var app_routing_module_1 = require("./app-routing.module");
var app_component_1 = require("./app.component");
var shared_1 = require("./shared");
var injectableobject_base_1 = require("../../app/core/base/injectableobject.base");
var auth_guard_1 = require("../../app/core/guards/auth.guard");
var data_service_1 = require("../../app/core/services/data.service");
var authen_service_1 = require("../../app/core/services/authen.service");
var utility_service_1 = require("../../app/core/services/utility.service");
var upload_service_1 = require("../../app/core/services/upload.service");
var test_service_1 = require("../../app/core/services/test.service");
var AppModule = (function () {
    function AppModule(injector) {
        this.injector = injector;
        injectableobject_base_1.InjectableObject.injector = this.injector;
    }
    return AppModule;
}());
AppModule = __decorate([
    core_1.NgModule({
        imports: [
            router_1.NativeScriptRouterModule,
            http_1.NativeScriptHttpModule,
            nativescript_module_1.NativeScriptModule,
            forms_1.NativeScriptFormsModule,
            app_routing_module_1.AppRoutingModule,
            shared_1.SharedModule
        ],
        declarations: [
            app_component_1.AppComponent
        ].concat(app_routing_module_1.navigatableComponents),
        providers: [
            auth_guard_1.AuthGuard,
            data_service_1.DataService,
            authen_service_1.AuthenService,
            utility_service_1.UtilityService,
            upload_service_1.UploadService,
            test_service_1.TestService
        ],
        bootstrap: [app_component_1.AppComponent]
    }),
    __metadata("design:paramtypes", [core_1.Injector])
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImFwcC5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxrREFBbUU7QUFDbkUsc0RBQXVFO0FBRXZFLG9EQUFxRTtBQUNyRSxnRkFBOEU7QUFHOUUsc0NBQW1EO0FBQ25ELDJEQUErRTtBQUMvRSxpREFBK0M7QUFDL0MsbUNBQXdDO0FBQ3hDLG1GQUE2RTtBQUM3RSwrREFBNkQ7QUFDN0QscUVBQW1FO0FBQ25FLHlFQUF1RTtBQUN2RSwyRUFBeUU7QUFDekUseUVBQXVFO0FBQ3ZFLHFFQUFtRTtBQTJCbkUsSUFBYSxTQUFTO0lBQ3BCLG1CQUFvQixRQUFrQjtRQUFsQixhQUFRLEdBQVIsUUFBUSxDQUFVO1FBQ3BDLHdDQUFnQixDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDO0lBQzVDLENBQUM7SUFDSCxnQkFBQztBQUFELENBQUMsQUFKRCxJQUlDO0FBSlksU0FBUztJQXpCckIsZUFBUSxDQUFDO1FBQ1IsT0FBTyxFQUFFO1lBQ1AsaUNBQXdCO1lBQ3hCLDZCQUFzQjtZQUN0Qix3Q0FBa0I7WUFDbEIsK0JBQXVCO1lBQ3ZCLHFDQUFnQjtZQUNoQixxQkFBWTtTQUNiO1FBQ0QsWUFBWTtZQUNWLDRCQUFZO2lCQUNULDBDQUFxQixDQUN6QjtRQUNELFNBQVMsRUFBRTtZQUNMLHNCQUFTO1lBQ1QsMEJBQVc7WUFDWCw4QkFBYTtZQUNiLGdDQUFjO1lBQ2QsOEJBQWE7WUFFYiwwQkFBVztTQUNkO1FBQ0gsU0FBUyxFQUFFLENBQUMsNEJBQVksQ0FBQztLQUMxQixDQUFDO3FDQUc4QixlQUFRO0dBRDNCLFNBQVMsQ0FJckI7QUFKWSw4QkFBUyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5hdGl2ZVNjcmlwdEh0dHBNb2R1bGUgfSBmcm9tICduYXRpdmVzY3JpcHQtYW5ndWxhci9odHRwJztcbmltcG9ydCB7IE5hdGl2ZVNjcmlwdFJvdXRlck1vZHVsZSB9IGZyb20gJ25hdGl2ZXNjcmlwdC1hbmd1bGFyL3JvdXRlcic7XG5cbmltcG9ydCB7IE5hdGl2ZVNjcmlwdEZvcm1zTW9kdWxlIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyL2Zvcm1zXCI7XG5pbXBvcnQgeyBOYXRpdmVTY3JpcHRNb2R1bGUgfSBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXIvbmF0aXZlc2NyaXB0Lm1vZHVsZVwiO1xuXG5pbXBvcnQgeyBCYXNlQ29tcG9uZW50IH0gZnJvbSAnLi8uLi9jb3JlL2Jhc2UvY29tcG9uZW50LmJhc2UnO1xuaW1wb3J0IHsgTmdNb2R1bGUsIEluamVjdG9yIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBBcHBSb3V0aW5nTW9kdWxlLCBuYXZpZ2F0YWJsZUNvbXBvbmVudHMgfSBmcm9tICcuL2FwcC1yb3V0aW5nLm1vZHVsZSc7XG5pbXBvcnQgeyBBcHBDb21wb25lbnQgfSBmcm9tICcuL2FwcC5jb21wb25lbnQnO1xuaW1wb3J0IHsgU2hhcmVkTW9kdWxlIH0gZnJvbSAnLi9zaGFyZWQnO1xuaW1wb3J0IHsgSW5qZWN0YWJsZU9iamVjdCB9IGZyb20gXCIuLi8uLi9hcHAvY29yZS9iYXNlL2luamVjdGFibGVvYmplY3QuYmFzZVwiO1xuaW1wb3J0IHsgQXV0aEd1YXJkIH0gZnJvbSBcIi4uLy4uL2FwcC9jb3JlL2d1YXJkcy9hdXRoLmd1YXJkXCI7XG5pbXBvcnQgeyBEYXRhU2VydmljZSB9IGZyb20gXCIuLi8uLi9hcHAvY29yZS9zZXJ2aWNlcy9kYXRhLnNlcnZpY2VcIjtcbmltcG9ydCB7IEF1dGhlblNlcnZpY2UgfSBmcm9tIFwiLi4vLi4vYXBwL2NvcmUvc2VydmljZXMvYXV0aGVuLnNlcnZpY2VcIjtcbmltcG9ydCB7IFV0aWxpdHlTZXJ2aWNlIH0gZnJvbSBcIi4uLy4uL2FwcC9jb3JlL3NlcnZpY2VzL3V0aWxpdHkuc2VydmljZVwiO1xuaW1wb3J0IHsgVXBsb2FkU2VydmljZSB9IGZyb20gXCIuLi8uLi9hcHAvY29yZS9zZXJ2aWNlcy91cGxvYWQuc2VydmljZVwiO1xuaW1wb3J0IHsgVGVzdFNlcnZpY2UgfSBmcm9tIFwiLi4vLi4vYXBwL2NvcmUvc2VydmljZXMvdGVzdC5zZXJ2aWNlXCI7XG5cbkBOZ01vZHVsZSh7XG4gIGltcG9ydHM6IFtcbiAgICBOYXRpdmVTY3JpcHRSb3V0ZXJNb2R1bGUsXG4gICAgTmF0aXZlU2NyaXB0SHR0cE1vZHVsZSxcbiAgICBOYXRpdmVTY3JpcHRNb2R1bGUsXG4gICAgTmF0aXZlU2NyaXB0Rm9ybXNNb2R1bGUsXG4gICAgQXBwUm91dGluZ01vZHVsZSxcbiAgICBTaGFyZWRNb2R1bGVcbiAgXSxcbiAgZGVjbGFyYXRpb25zOiBbXG4gICAgQXBwQ29tcG9uZW50LFxuICAgIC4uLm5hdmlnYXRhYmxlQ29tcG9uZW50c1xuICBdLFxuICBwcm92aWRlcnM6IFtcbiAgICAgICAgQXV0aEd1YXJkLFxuICAgICAgICBEYXRhU2VydmljZSxcbiAgICAgICAgQXV0aGVuU2VydmljZSxcbiAgICAgICAgVXRpbGl0eVNlcnZpY2UsXG4gICAgICAgIFVwbG9hZFNlcnZpY2UsXG5cbiAgICAgICAgVGVzdFNlcnZpY2VcbiAgICBdLFxuICBib290c3RyYXA6IFtBcHBDb21wb25lbnRdXG59KVxuXG5leHBvcnQgY2xhc3MgQXBwTW9kdWxlIHtcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBpbmplY3RvcjogSW5qZWN0b3IpIHtcbiAgICBJbmplY3RhYmxlT2JqZWN0LmluamVjdG9yID0gdGhpcy5pbmplY3RvcjtcbiAgfVxufVxuIl19