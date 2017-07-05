"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var data_service_1 = require("./data.service");
var utility_service_1 = require("./utility.service");
var UploadService = (function () {
    function UploadService(dataService, utilityService) {
        this.dataService = dataService;
        this.utilityService = utilityService;
    }
    UploadService.prototype.postWithFile = function (url, postData, files) {
        var _this = this;
        var formData = new FormData();
        formData.append('files', files[0], files[0].name);
        if (postData !== "" && postData !== undefined && postData !== null) {
            for (var property in postData) {
                if (postData.hasOwnProperty(property)) {
                    formData.append(property, postData[property]);
                }
            }
        }
        var returnReponse = new Promise(function (resolve, reject) {
            _this.dataService.postFile(url, formData).subscribe(function (res) {
                _this.responseData = res;
                resolve(_this.responseData);
            }, function (error) { return _this.dataService.handleError(error); });
        });
        return returnReponse;
    };
    return UploadService;
}());
UploadService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [data_service_1.DataService, utility_service_1.UtilityService])
], UploadService);
exports.UploadService = UploadService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXBsb2FkLnNlcnZpY2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJ1cGxvYWQuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUEyQztBQUMzQywrQ0FBNkM7QUFFN0MscURBQW1EO0FBR25ELElBQWEsYUFBYTtJQUd0Qix1QkFBb0IsV0FBd0IsRUFBVSxjQUE4QjtRQUFoRSxnQkFBVyxHQUFYLFdBQVcsQ0FBYTtRQUFVLG1CQUFjLEdBQWQsY0FBYyxDQUFnQjtJQUFJLENBQUM7SUFFekYsb0NBQVksR0FBWixVQUFhLEdBQVcsRUFBRSxRQUFhLEVBQUUsS0FBYTtRQUF0RCxpQkFxQkM7UUFwQkcsSUFBSSxRQUFRLEdBQWEsSUFBSSxRQUFRLEVBQUUsQ0FBQztRQUN4QyxRQUFRLENBQUMsTUFBTSxDQUFDLE9BQU8sRUFBRSxLQUFLLENBQUMsQ0FBQyxDQUFDLEVBQUUsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDO1FBRWxELEVBQUUsQ0FBQyxDQUFDLFFBQVEsS0FBSyxFQUFFLElBQUksUUFBUSxLQUFLLFNBQVMsSUFBSSxRQUFRLEtBQUssSUFBSSxDQUFDLENBQUMsQ0FBQztZQUNqRSxHQUFHLENBQUMsQ0FBQyxJQUFJLFFBQVEsSUFBSSxRQUFRLENBQUMsQ0FBQyxDQUFDO2dCQUM1QixFQUFFLENBQUMsQ0FBQyxRQUFRLENBQUMsY0FBYyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQztvQkFDcEMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxRQUFRLEVBQUUsUUFBUSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUM7Z0JBQ2xELENBQUM7WUFDTCxDQUFDO1FBQ0wsQ0FBQztRQUNELElBQUksYUFBYSxHQUFHLElBQUksT0FBTyxDQUFDLFVBQUMsT0FBTyxFQUFFLE1BQU07WUFDNUMsS0FBSSxDQUFDLFdBQVcsQ0FBQyxRQUFRLENBQUMsR0FBRyxFQUFFLFFBQVEsQ0FBQyxDQUFDLFNBQVMsQ0FDOUMsVUFBQSxHQUFHO2dCQUNDLEtBQUksQ0FBQyxZQUFZLEdBQUcsR0FBRyxDQUFDO2dCQUN4QixPQUFPLENBQUMsS0FBSSxDQUFDLFlBQVksQ0FBQyxDQUFDO1lBQy9CLENBQUMsRUFDRCxVQUFBLEtBQUssSUFBSSxPQUFBLEtBQUksQ0FBQyxXQUFXLENBQUMsV0FBVyxDQUFDLEtBQUssQ0FBQyxFQUFuQyxDQUFtQyxDQUMvQyxDQUFDO1FBQ04sQ0FBQyxDQUFDLENBQUM7UUFDSCxNQUFNLENBQUMsYUFBYSxDQUFDO0lBQ3pCLENBQUM7SUFDTCxvQkFBQztBQUFELENBQUMsQUEzQkQsSUEyQkM7QUEzQlksYUFBYTtJQUR6QixpQkFBVSxFQUFFO3FDQUl3QiwwQkFBVyxFQUEwQixnQ0FBYztHQUgzRSxhQUFhLENBMkJ6QjtBQTNCWSxzQ0FBYSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgRGF0YVNlcnZpY2UgfSBmcm9tICcuL2RhdGEuc2VydmljZSc7XHJcbmltcG9ydCB7IFVybENvbnN0YW50cyB9IGZyb20gJy4uLy4uL2NvcmUvY29tbW9uL3VybC5jb25zdGFudHMnO1xyXG5pbXBvcnQgeyBVdGlsaXR5U2VydmljZSB9IGZyb20gJy4vdXRpbGl0eS5zZXJ2aWNlJztcclxuXHJcbkBJbmplY3RhYmxlKClcclxuZXhwb3J0IGNsYXNzIFVwbG9hZFNlcnZpY2Uge1xyXG4gICAgcHVibGljIHJlc3BvbnNlRGF0YTogYW55O1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgZGF0YVNlcnZpY2U6IERhdGFTZXJ2aWNlLCBwcml2YXRlIHV0aWxpdHlTZXJ2aWNlOiBVdGlsaXR5U2VydmljZSkgeyB9XHJcblxyXG4gICAgcG9zdFdpdGhGaWxlKHVybDogc3RyaW5nLCBwb3N0RGF0YTogYW55LCBmaWxlczogRmlsZVtdKSB7XHJcbiAgICAgICAgbGV0IGZvcm1EYXRhOiBGb3JtRGF0YSA9IG5ldyBGb3JtRGF0YSgpO1xyXG4gICAgICAgIGZvcm1EYXRhLmFwcGVuZCgnZmlsZXMnLCBmaWxlc1swXSwgZmlsZXNbMF0ubmFtZSk7XHJcblxyXG4gICAgICAgIGlmIChwb3N0RGF0YSAhPT0gXCJcIiAmJiBwb3N0RGF0YSAhPT0gdW5kZWZpbmVkICYmIHBvc3REYXRhICE9PSBudWxsKSB7XHJcbiAgICAgICAgICAgIGZvciAodmFyIHByb3BlcnR5IGluIHBvc3REYXRhKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAocG9zdERhdGEuaGFzT3duUHJvcGVydHkocHJvcGVydHkpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9ybURhdGEuYXBwZW5kKHByb3BlcnR5LCBwb3N0RGF0YVtwcm9wZXJ0eV0pO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHZhciByZXR1cm5SZXBvbnNlID0gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLmRhdGFTZXJ2aWNlLnBvc3RGaWxlKHVybCwgZm9ybURhdGEpLnN1YnNjcmliZShcclxuICAgICAgICAgICAgICAgIHJlcyA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5yZXNwb25zZURhdGEgPSByZXM7XHJcbiAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZSh0aGlzLnJlc3BvbnNlRGF0YSk7XHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgZXJyb3IgPT4gdGhpcy5kYXRhU2VydmljZS5oYW5kbGVFcnJvcihlcnJvcilcclxuICAgICAgICAgICAgKTtcclxuICAgICAgICB9KTtcclxuICAgICAgICByZXR1cm4gcmV0dXJuUmVwb25zZTtcclxuICAgIH1cclxufSJdfQ==