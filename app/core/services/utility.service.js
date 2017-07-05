"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var http_1 = require("@angular/http");
var url_constants_1 = require("../../core/common/url.constants");
var authen_service_1 = require("./authen.service");
var UtilityService = (function () {
    function UtilityService(router, http, authenService) {
        this.http = http;
        this.authenService = authenService;
        this.Unflatten = function (arr) {
            var map = {};
            var roots = [];
            for (var i = 0; i < arr.length; i += 1) {
                var node = arr[i];
                node.children = [];
                map[node.ID] = i; // use map to look-up the parents
                if (node.ParentId !== null) {
                    arr[map[node.ParentId]].children.push(node);
                }
                else {
                    roots.push(node);
                }
            }
            return roots;
        };
        this.Unflatten2 = function (arr) {
            var map = {};
            var roots = [];
            for (var i = 0; i < arr.length; i += 1) {
                var node = arr[i];
                node.children = [];
                map[node.ID] = i; // use map to look-up the parents
                if (node.ParentID !== null) {
                    arr[map[node.ParentID]].children.push(node);
                }
                else {
                    roots.push(node);
                }
            }
            return roots;
        };
        this._router = router;
    }
    UtilityService.prototype.convertDateTime = function (date) {
        var _formattedDate = new Date(date.toString());
        return _formattedDate.toDateString();
    };
    UtilityService.prototype.navigate = function (path) {
        this._router.navigate([path]);
    };
    UtilityService.prototype.navigateToLogin = function () {
        this._router.navigate([url_constants_1.UrlConstants.LOGIN]);
    };
    UtilityService.prototype.MakeSeoTitle = function (input) {
        if (input == undefined || input == '')
            return '';
        //Đổi chữ hoa thành chữ thường
        var slug = input.toLowerCase();
        //Đổi ký tự có dấu thành không dấu
        slug = slug.replace(/á|à|ả|ạ|ã|ă|ắ|ằ|ẳ|ẵ|ặ|â|ấ|ầ|ẩ|ẫ|ậ/gi, 'a');
        slug = slug.replace(/é|è|ẻ|ẽ|ẹ|ê|ế|ề|ể|ễ|ệ/gi, 'e');
        slug = slug.replace(/i|í|ì|ỉ|ĩ|ị/gi, 'i');
        slug = slug.replace(/ó|ò|ỏ|õ|ọ|ô|ố|ồ|ổ|ỗ|ộ|ơ|ớ|ờ|ở|ỡ|ợ/gi, 'o');
        slug = slug.replace(/ú|ù|ủ|ũ|ụ|ư|ứ|ừ|ử|ữ|ự/gi, 'u');
        slug = slug.replace(/ý|ỳ|ỷ|ỹ|ỵ/gi, 'y');
        slug = slug.replace(/đ/gi, 'd');
        //Xóa các ký tự đặt biệt
        slug = slug.replace(/\`|\~|\!|\@|\#|\||\$|\%|\^|\&|\*|\(|\)|\+|\=|\,|\.|\/|\?|\>|\<|\'|\"|\:|\;|_/gi, '');
        //Đổi khoảng trắng thành ký tự gạch ngang
        slug = slug.replace(/ /gi, "-");
        //Đổi nhiều ký tự gạch ngang liên tiếp thành 1 ký tự gạch ngang
        //Phòng trường hợp người nhập vào quá nhiều ký tự trắng
        slug = slug.replace(/\-\-\-\-\-/gi, '-');
        slug = slug.replace(/\-\-\-\-/gi, '-');
        slug = slug.replace(/\-\-\-/gi, '-');
        slug = slug.replace(/\-\-/gi, '-');
        //Xóa các ký tự gạch ngang ở đầu và cuối
        slug = '@' + slug + '@';
        slug = slug.replace(/\@\-|\-\@|\@/gi, '');
        return slug;
    };
    return UtilityService;
}());
UtilityService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [router_1.Router, http_1.Http, authen_service_1.AuthenService])
], UtilityService);
exports.UtilityService = UtilityService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXRpbGl0eS5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsidXRpbGl0eS5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQTJDO0FBQzNDLDBDQUF5QztBQUN6QyxzQ0FBcUM7QUFDckMsaUVBQStEO0FBQy9ELG1EQUFpRDtBQUdqRCxJQUFhLGNBQWM7SUFHekIsd0JBQVksTUFBYyxFQUFVLElBQVUsRUFBVSxhQUE0QjtRQUFoRCxTQUFJLEdBQUosSUFBSSxDQUFNO1FBQVUsa0JBQWEsR0FBYixhQUFhLENBQWU7UUFpQnBGLGNBQVMsR0FBRyxVQUFDLEdBQVU7WUFDckIsSUFBSSxHQUFHLEdBQUcsRUFBRSxDQUFDO1lBQ2IsSUFBSSxLQUFLLEdBQVUsRUFBRSxDQUFDO1lBQ3RCLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsR0FBRyxDQUFDLE1BQU0sRUFBRSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUM7Z0JBQ3ZDLElBQUksSUFBSSxHQUFHLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQztnQkFDbEIsSUFBSSxDQUFDLFFBQVEsR0FBRyxFQUFFLENBQUM7Z0JBQ25CLEdBQUcsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsaUNBQWlDO2dCQUNuRCxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsUUFBUSxLQUFLLElBQUksQ0FBQyxDQUFDLENBQUM7b0JBQzNCLEdBQUcsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztnQkFDOUMsQ0FBQztnQkFBQyxJQUFJLENBQUMsQ0FBQztvQkFDTixLQUFLLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO2dCQUNuQixDQUFDO1lBQ0gsQ0FBQztZQUNELE1BQU0sQ0FBQyxLQUFLLENBQUM7UUFDZixDQUFDLENBQUE7UUFFRCxlQUFVLEdBQUcsVUFBQyxHQUFVO1lBQ3BCLElBQUksR0FBRyxHQUFHLEVBQUUsQ0FBQztZQUNiLElBQUksS0FBSyxHQUFVLEVBQUUsQ0FBQztZQUN0QixHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLEdBQUcsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDO2dCQUNyQyxJQUFJLElBQUksR0FBRyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUM7Z0JBQ2xCLElBQUksQ0FBQyxRQUFRLEdBQUcsRUFBRSxDQUFDO2dCQUNuQixHQUFHLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLGlDQUFpQztnQkFDbkQsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLFFBQVEsS0FBSyxJQUFJLENBQUMsQ0FBQyxDQUFDO29CQUN6QixHQUFHLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7Z0JBQ2hELENBQUM7Z0JBQUMsSUFBSSxDQUFDLENBQUM7b0JBQ0osS0FBSyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztnQkFDckIsQ0FBQztZQUNMLENBQUM7WUFDRCxNQUFNLENBQUMsS0FBSyxDQUFDO1FBQ2pCLENBQUMsQ0FBQTtRQTlDQyxJQUFJLENBQUMsT0FBTyxHQUFHLE1BQU0sQ0FBQztJQUN4QixDQUFDO0lBRUQsd0NBQWUsR0FBZixVQUFnQixJQUFVO1FBQ3hCLElBQUksY0FBYyxHQUFHLElBQUksSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLEVBQUUsQ0FBQyxDQUFDO1FBQy9DLE1BQU0sQ0FBQyxjQUFjLENBQUMsWUFBWSxFQUFFLENBQUM7SUFDdkMsQ0FBQztJQUVELGlDQUFRLEdBQVIsVUFBUyxJQUFZO1FBQ25CLElBQUksQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQztJQUNoQyxDQUFDO0lBRUQsd0NBQWUsR0FBZjtRQUNFLElBQUksQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDLENBQUMsNEJBQVksQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDO0lBQzlDLENBQUM7SUFtQ0QscUNBQVksR0FBWixVQUFhLEtBQWE7UUFDeEIsRUFBRSxDQUFDLENBQUMsS0FBSyxJQUFJLFNBQVMsSUFBSSxLQUFLLElBQUksRUFBRSxDQUFDO1lBQ3BDLE1BQU0sQ0FBQyxFQUFFLENBQUM7UUFDWiw4QkFBOEI7UUFDOUIsSUFBSSxJQUFJLEdBQUcsS0FBSyxDQUFDLFdBQVcsRUFBRSxDQUFDO1FBRS9CLGtDQUFrQztRQUNsQyxJQUFJLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxxQ0FBcUMsRUFBRSxHQUFHLENBQUMsQ0FBQztRQUNoRSxJQUFJLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyx5QkFBeUIsRUFBRSxHQUFHLENBQUMsQ0FBQztRQUNwRCxJQUFJLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxlQUFlLEVBQUUsR0FBRyxDQUFDLENBQUM7UUFDMUMsSUFBSSxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMscUNBQXFDLEVBQUUsR0FBRyxDQUFDLENBQUM7UUFDaEUsSUFBSSxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMseUJBQXlCLEVBQUUsR0FBRyxDQUFDLENBQUM7UUFDcEQsSUFBSSxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsYUFBYSxFQUFFLEdBQUcsQ0FBQyxDQUFDO1FBQ3hDLElBQUksR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLEtBQUssRUFBRSxHQUFHLENBQUMsQ0FBQztRQUNoQyx3QkFBd0I7UUFDeEIsSUFBSSxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsZ0ZBQWdGLEVBQUUsRUFBRSxDQUFDLENBQUM7UUFDMUcseUNBQXlDO1FBQ3pDLElBQUksR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLEtBQUssRUFBRSxHQUFHLENBQUMsQ0FBQztRQUNoQywrREFBK0Q7UUFDL0QsdURBQXVEO1FBQ3ZELElBQUksR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLGNBQWMsRUFBRSxHQUFHLENBQUMsQ0FBQztRQUN6QyxJQUFJLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxZQUFZLEVBQUUsR0FBRyxDQUFDLENBQUM7UUFDdkMsSUFBSSxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsVUFBVSxFQUFFLEdBQUcsQ0FBQyxDQUFDO1FBQ3JDLElBQUksR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLFFBQVEsRUFBRSxHQUFHLENBQUMsQ0FBQztRQUNuQyx3Q0FBd0M7UUFDeEMsSUFBSSxHQUFHLEdBQUcsR0FBRyxJQUFJLEdBQUcsR0FBRyxDQUFDO1FBQ3hCLElBQUksR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLGdCQUFnQixFQUFFLEVBQUUsQ0FBQyxDQUFDO1FBRTFDLE1BQU0sQ0FBQyxJQUFJLENBQUM7SUFDZCxDQUFDO0lBQ0gscUJBQUM7QUFBRCxDQUFDLEFBbkZELElBbUZDO0FBbkZZLGNBQWM7SUFEMUIsaUJBQVUsRUFBRTtxQ0FJUyxlQUFNLEVBQWdCLFdBQUksRUFBeUIsOEJBQWE7R0FIekUsY0FBYyxDQW1GMUI7QUFuRlksd0NBQWMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBSb3V0ZXIgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuaW1wb3J0IHsgSHR0cCB9IGZyb20gJ0Bhbmd1bGFyL2h0dHAnO1xuaW1wb3J0IHsgVXJsQ29uc3RhbnRzIH0gZnJvbSAnLi4vLi4vY29yZS9jb21tb24vdXJsLmNvbnN0YW50cyc7XG5pbXBvcnQgeyBBdXRoZW5TZXJ2aWNlIH0gZnJvbSAnLi9hdXRoZW4uc2VydmljZSc7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBVdGlsaXR5U2VydmljZSB7XG4gIHByaXZhdGUgX3JvdXRlcjogUm91dGVyO1xuXG4gIGNvbnN0cnVjdG9yKHJvdXRlcjogUm91dGVyLCBwcml2YXRlIGh0dHA6IEh0dHAsIHByaXZhdGUgYXV0aGVuU2VydmljZTogQXV0aGVuU2VydmljZSkge1xuICAgIHRoaXMuX3JvdXRlciA9IHJvdXRlcjtcbiAgfVxuXG4gIGNvbnZlcnREYXRlVGltZShkYXRlOiBEYXRlKSB7XG4gICAgdmFyIF9mb3JtYXR0ZWREYXRlID0gbmV3IERhdGUoZGF0ZS50b1N0cmluZygpKTtcbiAgICByZXR1cm4gX2Zvcm1hdHRlZERhdGUudG9EYXRlU3RyaW5nKCk7XG4gIH1cblxuICBuYXZpZ2F0ZShwYXRoOiBzdHJpbmcpIHtcbiAgICB0aGlzLl9yb3V0ZXIubmF2aWdhdGUoW3BhdGhdKTtcbiAgfVxuXG4gIG5hdmlnYXRlVG9Mb2dpbigpIHtcbiAgICB0aGlzLl9yb3V0ZXIubmF2aWdhdGUoW1VybENvbnN0YW50cy5MT0dJTl0pO1xuICB9XG5cbiAgVW5mbGF0dGVuID0gKGFycjogYW55W10pOiBhbnlbXSA9PiB7XG4gICAgbGV0IG1hcCA9IHt9O1xuICAgIGxldCByb290czogYW55W10gPSBbXTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGFyci5sZW5ndGg7IGkgKz0gMSkge1xuICAgICAgbGV0IG5vZGUgPSBhcnJbaV07XG4gICAgICBub2RlLmNoaWxkcmVuID0gW107XG4gICAgICBtYXBbbm9kZS5JRF0gPSBpOyAvLyB1c2UgbWFwIHRvIGxvb2stdXAgdGhlIHBhcmVudHNcbiAgICAgIGlmIChub2RlLlBhcmVudElkICE9PSBudWxsKSB7XG4gICAgICAgIGFyclttYXBbbm9kZS5QYXJlbnRJZF1dLmNoaWxkcmVuLnB1c2gobm9kZSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICByb290cy5wdXNoKG5vZGUpO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gcm9vdHM7XG4gIH1cblxuICBVbmZsYXR0ZW4yID0gKGFycjogYW55W10pOiBhbnlbXSA9PiB7XG4gICAgICBsZXQgbWFwID0ge307XG4gICAgICBsZXQgcm9vdHM6IGFueVtdID0gW107XG4gICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGFyci5sZW5ndGg7IGkgKz0gMSkge1xuICAgICAgICAgIGxldCBub2RlID0gYXJyW2ldO1xuICAgICAgICAgIG5vZGUuY2hpbGRyZW4gPSBbXTtcbiAgICAgICAgICBtYXBbbm9kZS5JRF0gPSBpOyAvLyB1c2UgbWFwIHRvIGxvb2stdXAgdGhlIHBhcmVudHNcbiAgICAgICAgICBpZiAobm9kZS5QYXJlbnRJRCAhPT0gbnVsbCkge1xuICAgICAgICAgICAgICBhcnJbbWFwW25vZGUuUGFyZW50SURdXS5jaGlsZHJlbi5wdXNoKG5vZGUpO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIHJvb3RzLnB1c2gobm9kZSk7XG4gICAgICAgICAgfVxuICAgICAgfVxuICAgICAgcmV0dXJuIHJvb3RzO1xuICB9XG4gIFxuXG4gIE1ha2VTZW9UaXRsZShpbnB1dDogc3RyaW5nKSB7XG4gICAgaWYgKGlucHV0ID09IHVuZGVmaW5lZCB8fCBpbnB1dCA9PSAnJylcbiAgICAgIHJldHVybiAnJztcbiAgICAvL8SQ4buVaSBjaOG7ryBob2EgdGjDoG5oIGNo4buvIHRoxrDhu51uZ1xuICAgIHZhciBzbHVnID0gaW5wdXQudG9Mb3dlckNhc2UoKTtcblxuICAgIC8vxJDhu5VpIGvDvSB04buxIGPDsyBk4bqldSB0aMOgbmgga2jDtG5nIGThuqV1XG4gICAgc2x1ZyA9IHNsdWcucmVwbGFjZSgvw6F8w6B84bqjfOG6oXzDo3zEg3zhuq984bqxfOG6s3zhurV84bq3fMOifOG6pXzhuqd84bqpfOG6q3zhuq0vZ2ksICdhJyk7XG4gICAgc2x1ZyA9IHNsdWcucmVwbGFjZSgvw6l8w6h84bq7fOG6vXzhurl8w6p84bq/fOG7gXzhu4N84buFfOG7hy9naSwgJ2UnKTtcbiAgICBzbHVnID0gc2x1Zy5yZXBsYWNlKC9pfMOtfMOsfOG7iXzEqXzhu4svZ2ksICdpJyk7XG4gICAgc2x1ZyA9IHNsdWcucmVwbGFjZSgvw7N8w7J84buPfMO1fOG7jXzDtHzhu5F84buTfOG7lXzhu5d84buZfMahfOG7m3zhu5184buffOG7oXzhu6MvZ2ksICdvJyk7XG4gICAgc2x1ZyA9IHNsdWcucmVwbGFjZSgvw7p8w7l84bunfMWpfOG7pXzGsHzhu6l84burfOG7rXzhu6984buxL2dpLCAndScpO1xuICAgIHNsdWcgPSBzbHVnLnJlcGxhY2UoL8O9fOG7s3zhu7d84bu5fOG7tS9naSwgJ3knKTtcbiAgICBzbHVnID0gc2x1Zy5yZXBsYWNlKC/EkS9naSwgJ2QnKTtcbiAgICAvL1jDs2EgY8OhYyBrw70gdOG7sSDEkeG6t3QgYmnhu4d0XG4gICAgc2x1ZyA9IHNsdWcucmVwbGFjZSgvXFxgfFxcfnxcXCF8XFxAfFxcI3xcXHx8XFwkfFxcJXxcXF58XFwmfFxcKnxcXCh8XFwpfFxcK3xcXD18XFwsfFxcLnxcXC98XFw/fFxcPnxcXDx8XFwnfFxcXCJ8XFw6fFxcO3xfL2dpLCAnJyk7XG4gICAgLy/EkOG7lWkga2hv4bqjbmcgdHLhuq9uZyB0aMOgbmgga8O9IHThu7EgZ+G6oWNoIG5nYW5nXG4gICAgc2x1ZyA9IHNsdWcucmVwbGFjZSgvIC9naSwgXCItXCIpO1xuICAgIC8vxJDhu5VpIG5oaeG7gXUga8O9IHThu7EgZ+G6oWNoIG5nYW5nIGxpw6puIHRp4bq/cCB0aMOgbmggMSBrw70gdOG7sSBn4bqhY2ggbmdhbmdcbiAgICAvL1Bow7JuZyB0csaw4budbmcgaOG7o3AgbmfGsOG7nWkgbmjhuq1wIHbDoG8gcXXDoSBuaGnhu4F1IGvDvSB04buxIHRy4bqvbmdcbiAgICBzbHVnID0gc2x1Zy5yZXBsYWNlKC9cXC1cXC1cXC1cXC1cXC0vZ2ksICctJyk7XG4gICAgc2x1ZyA9IHNsdWcucmVwbGFjZSgvXFwtXFwtXFwtXFwtL2dpLCAnLScpO1xuICAgIHNsdWcgPSBzbHVnLnJlcGxhY2UoL1xcLVxcLVxcLS9naSwgJy0nKTtcbiAgICBzbHVnID0gc2x1Zy5yZXBsYWNlKC9cXC1cXC0vZ2ksICctJyk7XG4gICAgLy9Yw7NhIGPDoWMga8O9IHThu7EgZ+G6oWNoIG5nYW5nIOG7nyDEkeG6p3UgdsOgIGN14buRaVxuICAgIHNsdWcgPSAnQCcgKyBzbHVnICsgJ0AnO1xuICAgIHNsdWcgPSBzbHVnLnJlcGxhY2UoL1xcQFxcLXxcXC1cXEB8XFxAL2dpLCAnJyk7XG5cbiAgICByZXR1cm4gc2x1ZztcbiAgfVxufSJdfQ==