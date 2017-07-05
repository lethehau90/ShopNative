"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var TestService = (function () {
    function TestService() {
    }
    TestService.prototype.testMessage = function (message) {
        console.log("log test service  " + message);
        return message;
    };
    return TestService;
}());
TestService = __decorate([
    core_1.Injectable()
], TestService);
exports.TestService = TestService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGVzdC5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsidGVzdC5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQTJDO0FBTTNDLElBQWEsV0FBVztJQUF4QjtJQUtBLENBQUM7SUFKRyxpQ0FBVyxHQUFYLFVBQVksT0FBZ0I7UUFDeEIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxvQkFBb0IsR0FBQyxPQUFPLENBQUMsQ0FBQTtRQUN6QyxNQUFNLENBQUMsT0FBTyxDQUFDO0lBQ25CLENBQUM7SUFDTCxrQkFBQztBQUFELENBQUMsQUFMRCxJQUtDO0FBTFksV0FBVztJQUR2QixpQkFBVSxFQUFFO0dBQ0EsV0FBVyxDQUt2QjtBQUxZLGtDQUFXIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBEYXRhU2VydmljZSB9IGZyb20gJy4vZGF0YS5zZXJ2aWNlJztcclxuaW1wb3J0IHsgVXJsQ29uc3RhbnRzIH0gZnJvbSAnLi4vLi4vY29yZS9jb21tb24vdXJsLmNvbnN0YW50cyc7XHJcbmltcG9ydCB7IFV0aWxpdHlTZXJ2aWNlIH0gZnJvbSAnLi91dGlsaXR5LnNlcnZpY2UnO1xyXG5cclxuQEluamVjdGFibGUoKVxyXG5leHBvcnQgY2xhc3MgVGVzdFNlcnZpY2Uge1xyXG4gICAgdGVzdE1lc3NhZ2UobWVzc2FnZSA6IHN0cmluZykge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwibG9nIHRlc3Qgc2VydmljZSAgXCIrbWVzc2FnZSlcclxuICAgICAgICByZXR1cm4gbWVzc2FnZTtcclxuICAgIH1cclxufSJdfQ==