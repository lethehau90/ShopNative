// link hellp  http://developer.telerik.com/products/nativescript/form-validation-nativescript-angular-mobile-application/
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var forms_1 = require("@angular/forms");
var MinLengthDirective = MinLengthDirective_1 = (function () {
    function MinLengthDirective() {
    }
    MinLengthDirective.prototype.validate = function (control) {
        return !control.value || control.value.length >= this.minlength ? null : { "minlength": true };
    };
    return MinLengthDirective;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", String)
], MinLengthDirective.prototype, "minlength", void 0);
MinLengthDirective = MinLengthDirective_1 = __decorate([
    core_1.Directive({
        selector: '[minlength]',
        providers: [{ provide: forms_1.NG_VALIDATORS, useExisting: MinLengthDirective_1, multi: true }]
    }),
    __metadata("design:paramtypes", [])
], MinLengthDirective);
exports.MinLengthDirective = MinLengthDirective;
var IsEmailDirective = IsEmailDirective_1 = (function () {
    function IsEmailDirective() {
    }
    IsEmailDirective.prototype.validate = function (control) {
        var emailRegEx = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/i;
        var valid = emailRegEx.test(control.value);
        return control.value < 1 || valid ? null : { 'email': true };
    };
    return IsEmailDirective;
}());
IsEmailDirective = IsEmailDirective_1 = __decorate([
    core_1.Directive({
        selector: '[email]',
        providers: [{ provide: forms_1.NG_VALIDATORS, useExisting: IsEmailDirective_1, multi: true }]
    }),
    __metadata("design:paramtypes", [])
], IsEmailDirective);
exports.IsEmailDirective = IsEmailDirective;
var MinLengthDirective_1, IsEmailDirective_1;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5wdXQuZGlyZWN0aXZlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiaW5wdXQuZGlyZWN0aXZlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLDBIQUEwSDs7O0FBRTFILHNDQUFpRDtBQUNqRCx3Q0FBMkU7QUFNM0UsSUFBYSxrQkFBa0I7SUFJM0I7SUFBc0IsQ0FBQztJQUVoQixxQ0FBUSxHQUFmLFVBQWdCLE9BQXdCO1FBQ3BDLE1BQU0sQ0FBQyxDQUFDLE9BQU8sQ0FBQyxLQUFLLElBQUksT0FBTyxDQUFDLEtBQUssQ0FBQyxNQUFNLElBQUksSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLEdBQUcsRUFBRSxXQUFXLEVBQUUsSUFBSSxFQUFFLENBQUM7SUFDbkcsQ0FBQztJQUVMLHlCQUFDO0FBQUQsQ0FBQyxBQVZELElBVUM7QUFSWTtJQUFSLFlBQUssRUFBRTs7cURBQW1CO0FBRmxCLGtCQUFrQjtJQUo5QixnQkFBUyxDQUFDO1FBQ1AsUUFBUSxFQUFFLGFBQWE7UUFDdkIsU0FBUyxFQUFFLENBQUMsRUFBQyxPQUFPLEVBQUUscUJBQWEsRUFBRSxXQUFXLEVBQUUsb0JBQWtCLEVBQUUsS0FBSyxFQUFFLElBQUksRUFBQyxDQUFDO0tBQ3RGLENBQUM7O0dBQ1csa0JBQWtCLENBVTlCO0FBVlksZ0RBQWtCO0FBZ0IvQixJQUFhLGdCQUFnQjtJQUV6QjtJQUFzQixDQUFDO0lBRWhCLG1DQUFRLEdBQWYsVUFBZ0IsT0FBd0I7UUFDcEMsSUFBSSxVQUFVLEdBQUcseUpBQXlKLENBQUM7UUFDM0ssSUFBSSxLQUFLLEdBQUcsVUFBVSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDM0MsTUFBTSxDQUFDLE9BQU8sQ0FBQyxLQUFLLEdBQUcsQ0FBQyxJQUFJLEtBQUssR0FBRyxJQUFJLEdBQUcsRUFBQyxPQUFPLEVBQUUsSUFBSSxFQUFDLENBQUM7SUFDL0QsQ0FBQztJQUVMLHVCQUFDO0FBQUQsQ0FBQyxBQVZELElBVUM7QUFWWSxnQkFBZ0I7SUFKNUIsZ0JBQVMsQ0FBQztRQUNQLFFBQVEsRUFBRSxTQUFTO1FBQ25CLFNBQVMsRUFBRSxDQUFDLEVBQUMsT0FBTyxFQUFFLHFCQUFhLEVBQUUsV0FBVyxFQUFFLGtCQUFnQixFQUFFLEtBQUssRUFBRSxJQUFJLEVBQUMsQ0FBQztLQUNwRixDQUFDOztHQUNXLGdCQUFnQixDQVU1QjtBQVZZLDRDQUFnQiIsInNvdXJjZXNDb250ZW50IjpbIi8vIGxpbmsgaGVsbHAgIGh0dHA6Ly9kZXZlbG9wZXIudGVsZXJpay5jb20vcHJvZHVjdHMvbmF0aXZlc2NyaXB0L2Zvcm0tdmFsaWRhdGlvbi1uYXRpdmVzY3JpcHQtYW5ndWxhci1tb2JpbGUtYXBwbGljYXRpb24vXHJcblxyXG5pbXBvcnQgeyBEaXJlY3RpdmUsIElucHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IE5HX1ZBTElEQVRPUlMsIFZhbGlkYXRvciwgQWJzdHJhY3RDb250cm9sIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xyXG5cclxuQERpcmVjdGl2ZSh7XHJcbiAgICBzZWxlY3RvcjogJ1ttaW5sZW5ndGhdJyxcclxuICAgIHByb3ZpZGVyczogW3twcm92aWRlOiBOR19WQUxJREFUT1JTLCB1c2VFeGlzdGluZzogTWluTGVuZ3RoRGlyZWN0aXZlLCBtdWx0aTogdHJ1ZX1dXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBNaW5MZW5ndGhEaXJlY3RpdmUgaW1wbGVtZW50cyBWYWxpZGF0b3Ige1xyXG5cclxuICAgIEBJbnB1dCgpIG1pbmxlbmd0aDogc3RyaW5nO1xyXG5cclxuICAgIHB1YmxpYyBjb25zdHJ1Y3RvcigpIHt9XHJcblxyXG4gICAgcHVibGljIHZhbGlkYXRlKGNvbnRyb2w6IEFic3RyYWN0Q29udHJvbCk6IHtba2V5OiBzdHJpbmddOiBhbnl9IHtcclxuICAgICAgICByZXR1cm4gIWNvbnRyb2wudmFsdWUgfHwgY29udHJvbC52YWx1ZS5sZW5ndGggPj0gdGhpcy5taW5sZW5ndGggPyBudWxsIDogeyBcIm1pbmxlbmd0aFwiOiB0cnVlIH07XHJcbiAgICB9XHJcblxyXG59XHJcblxyXG5ARGlyZWN0aXZlKHtcclxuICAgIHNlbGVjdG9yOiAnW2VtYWlsXScsXHJcbiAgICBwcm92aWRlcnM6IFt7cHJvdmlkZTogTkdfVkFMSURBVE9SUywgdXNlRXhpc3Rpbmc6IElzRW1haWxEaXJlY3RpdmUsIG11bHRpOiB0cnVlfV1cclxufSlcclxuZXhwb3J0IGNsYXNzIElzRW1haWxEaXJlY3RpdmUgaW1wbGVtZW50cyBWYWxpZGF0b3Ige1xyXG5cclxuICAgIHB1YmxpYyBjb25zdHJ1Y3RvcigpIHt9XHJcblxyXG4gICAgcHVibGljIHZhbGlkYXRlKGNvbnRyb2w6IEFic3RyYWN0Q29udHJvbCk6IHtba2V5OiBzdHJpbmddOiBhbnl9IHtcclxuICAgICAgICBsZXQgZW1haWxSZWdFeCA9IC9eKChbXjw+KClcXFtcXF1cXFxcLiw7Olxcc0BcIl0rKFxcLltePD4oKVxcW1xcXVxcXFwuLDs6XFxzQFwiXSspKil8KFwiLitcIikpQCgoXFxbWzAtOV17MSwzfVxcLlswLTldezEsM31cXC5bMC05XXsxLDN9XFwuWzAtOV17MSwzfV0pfCgoW2EtekEtWlxcLTAtOV0rXFwuKStbYS16QS1aXXsyLH0pKSQvaTtcclxuICAgICAgICBsZXQgdmFsaWQgPSBlbWFpbFJlZ0V4LnRlc3QoY29udHJvbC52YWx1ZSk7XHJcbiAgICAgICAgcmV0dXJuIGNvbnRyb2wudmFsdWUgPCAxIHx8IHZhbGlkID8gbnVsbCA6IHsnZW1haWwnOiB0cnVlfTtcclxuICAgIH1cclxuXHJcbn0iXX0=