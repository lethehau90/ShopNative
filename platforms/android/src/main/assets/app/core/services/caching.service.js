"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var CachingService = (function () {
    //#endregion
    //#region Init
    function CachingService() {
        this.cachers = {};
        this.cachers[0 /* LocalStorage */] = new LocalStorage(window.localStorage);
        this.cachers[1 /* SessionStorage */] = new SessionStorage(window.sessionStorage);
        this.cachers[3 /* CookieStorageCore */] = new CookieStorageCore(document.cookie);
    }
    Object.defineProperty(CachingService.prototype, "localStorage", {
        //#endregion
        //#region Shortcut for Storages
        get: function () { return this.cachers[0 /* LocalStorage */]; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CachingService.prototype, "sessionStorage", {
        get: function () { return this.cachers[1 /* SessionStorage */]; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CachingService.prototype, "cookieStorage", {
        get: function () { return this.cachers[3 /* CookieStorageCore */]; },
        enumerable: true,
        configurable: true
    });
    return CachingService;
}());
CachingService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [])
], CachingService);
exports.CachingService = CachingService;
var LocalStorage = (function () {
    function LocalStorage(storage) {
        this.storage = storage;
    }
    Object.defineProperty(LocalStorage.prototype, "isAvailable", {
        get: function () { return !!this.storage; },
        enumerable: true,
        configurable: true
    });
    LocalStorage.prototype.get = function (key) {
        var data = this.storage.getItem(key);
        if (data) {
            var model = JSON.parse(data);
            //console.log({ message: 'localstorage cache restored with key ' + key, data: model });
            return model;
        }
        return null;
    };
    LocalStorage.prototype.store = function (key, value) {
        var strData = JSON.stringify(value);
        this.storage.setItem(key, strData);
        //console.log({ message: 'localstorage cache created with key ' + key, data: value });
    };
    LocalStorage.prototype.remove = function (key) {
        this.storage.removeItem(key);
        //console.log({ message: 'localstorage cache removed with key ' + key });
    };
    return LocalStorage;
}());
var SessionStorage = (function () {
    function SessionStorage(storage) {
        this.storage = storage;
    }
    Object.defineProperty(SessionStorage.prototype, "isAvailable", {
        get: function () { return !!this.storage; },
        enumerable: true,
        configurable: true
    });
    SessionStorage.prototype.get = function (key) {
        var data = this.storage.getItem(key);
        if (data) {
            var model = JSON.parse(data);
            //console.log({ message: 'sessionstorage cache restored with key ' + key, data: model });
            return model;
        }
        return null;
    };
    SessionStorage.prototype.store = function (key, value) {
        var strData = JSON.stringify(value);
        this.storage.setItem(key, strData);
        //console.log({ message: 'sessionstorage cache created with key ' + key, data: value });
    };
    SessionStorage.prototype.remove = function (key) {
        this.storage.removeItem(key);
        //console.log({ message: 'sessionstorage cache removed with key ' + key });
    };
    return SessionStorage;
}());
var CookieStorageCore = (function () {
    function CookieStorageCore(cookies) {
        this.cookies = cookies;
    }
    Object.defineProperty(CookieStorageCore.prototype, "isAvailable", {
        get: function () { return !!this.cookies; },
        enumerable: true,
        configurable: true
    });
    CookieStorageCore.prototype.get = function (key) {
        if (this.check(key)) {
            key = encodeURIComponent(key);
            var regexp = new RegExp('(?:^' + key + '|;\\s*' + key + ')=(.*?)(?:;|$)', 'g');
            var result = regexp.exec(this.cookies);
            debugger;
            var model = JSON.parse(decodeURIComponent(result[1]));
            return model;
        }
        else {
            return null;
        }
    };
    CookieStorageCore.prototype.getAll = function () {
        var cookies = {};
        if (this.cookies && this.cookies != '') {
            var split = this.cookies.split(';');
            for (var _i = 0, split_1 = split; _i < split_1.length; _i++) {
                var s = split_1[_i];
                var currCookie = s.split('=');
                currCookie[0] = currCookie[0].replace(/^ /, '');
                cookies[decodeURIComponent(currCookie[0])] = decodeURIComponent(currCookie[1]);
            }
        }
        return cookies;
    };
    CookieStorageCore.prototype.store = function (key, value, expires, path, domain, secure) {
        var _value = JSON.stringify(value);
        var cookieStr = encodeURIComponent(key) + '=' + encodeURIComponent(_value) + ';';
        if (expires) {
            if (typeof expires === 'number') {
                var dtExpires = new Date(new Date().getTime() + expires * 1000 * 60 * 60 * 24);
                cookieStr += 'expires=' + dtExpires.toUTCString() + ';';
            }
            else {
                cookieStr += 'expires=' + expires.toUTCString() + ';';
            }
        }
        if (path) {
            cookieStr += 'path=' + path + ';';
        }
        if (domain) {
            cookieStr += 'domain=' + domain + ';';
        }
        if (secure) {
            cookieStr += 'secure;';
        }
        // console.log(cookieStr);
        document.cookie = cookieStr;
    };
    CookieStorageCore.prototype.remove = function (key, path, domain) {
        this.store(key, '', -1, path, domain);
    };
    CookieStorageCore.prototype.removeAll = function (path, domain) {
        var cookies = this.getAll();
        for (var _i = 0, _a = Object.keys(cookies); _i < _a.length; _i++) {
            var cookieName = _a[_i];
            this.remove(cookieName, path, domain);
        }
    };
    CookieStorageCore.prototype.check = function (name) {
        if (typeof document === "undefined")
            return false; // Check if document exist avoiding issues on server side prerendering
        name = encodeURIComponent(name);
        var regexp = new RegExp('(?:^' + name + '|;\\s*' + name + ')=(.*?)(?:;|$)', 'g');
        var exists = regexp.test(document.cookie);
        return exists;
    };
    return CookieStorageCore;
}());
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FjaGluZy5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiY2FjaGluZy5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQ0Esc0NBQTJDO0FBRzNDLElBQWEsY0FBYztJQVN6QixZQUFZO0lBRVosY0FBYztJQUdkO1FBQ0UsSUFBSSxDQUFDLE9BQU8sR0FBRyxFQUFFLENBQUM7UUFDbEIsSUFBSSxDQUFDLE9BQU8sQ0FBQyxvQkFBdUIsQ0FBQyxHQUFHLElBQUksWUFBWSxDQUFDLE1BQU0sQ0FBQyxZQUFZLENBQUMsQ0FBQztRQUM5RSxJQUFJLENBQUMsT0FBTyxDQUFDLHNCQUF5QixDQUFDLEdBQUcsSUFBSSxjQUFjLENBQUMsTUFBTSxDQUFDLGNBQWMsQ0FBQyxDQUFDO1FBQ3BGLElBQUksQ0FBQyxPQUFPLENBQUMseUJBQTRCLENBQUMsR0FBRyxJQUFJLGlCQUFpQixDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsQ0FBQztJQUN0RixDQUFDO0lBYkQsc0JBQUksd0NBQVk7UUFIaEIsWUFBWTtRQUVaLCtCQUErQjthQUMvQixjQUE4QixNQUFNLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxvQkFBdUIsQ0FBQyxDQUFDLENBQUMsQ0FBQzs7O09BQUE7SUFDN0Usc0JBQUksMENBQWM7YUFBbEIsY0FBZ0MsTUFBTSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsc0JBQXlCLENBQUMsQ0FBQyxDQUFDLENBQUM7OztPQUFBO0lBQ2pGLHNCQUFJLHlDQUFhO2FBQWpCLGNBQStCLE1BQU0sQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLHlCQUE0QixDQUFDLENBQUMsQ0FBQyxDQUFDOzs7T0FBQTtJQWFyRixxQkFBQztBQUFELENBQUMsQUFyQkQsSUFxQkM7QUFyQlksY0FBYztJQUQxQixpQkFBVSxFQUFFOztHQUNBLGNBQWMsQ0FxQjFCO0FBckJZLHdDQUFjO0FBa0QzQjtJQUNFLHNCQUFvQixPQUFnQjtRQUFoQixZQUFPLEdB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N0IsQ0FBQztJQUVELGtDQUFNLEdBQU4sVUFBTyxHQUFXLEVBQUUsSUFBYSxFQUFFLE1BQWU7UUFDaEQsSUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLEVBQUUsRUFBRSxFQUFFLENBQUMsQ0FBQyxFQUFFLElBQUksRUFBRSxNQUFNLENBQUMsQ0FBQztJQUN4QyxDQUFDO0lBQ00scUNBQVMsR0FBaEIsVUFBaUIsSUFBYSxFQUFFLE1BQWU7UUFDN0MsSUFBSSxPQUFPLEdBQVEsSUFBSSxDQUFDLE1BQU0sRUFBRSxDQUFDO1FBQ2pDLEdBQUcsQ0FBQyxDQUFtQixVQUFvQixFQUFwQixLQUFBLE1BQU0sQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLEVBQXBCLGNBQW9CLEVBQXBCLElBQW9CO1lBQXRDLElBQUksVUFBVSxTQUFBO1lBQ2pCLElBQUksQ0FBQyxNQUFNLENBQUMsVUFBVSxFQUFFLElBQUksRUFBRSxNQUFNLENBQUMsQ0FBQztTQUN2QztJQUVILENBQUM7SUFDTSxpQ0FBSyxHQUFaLFVBQWEsSUFBWTtRQUN2QixFQUFFLENBQUMsQ0FBQyxPQUFPLFFBQVEsS0FBSyxXQUFXLENBQUM7WUFBQyxNQUFNLENBQUMsS0FBSyxDQUFDLENBQUUsc0VBQXNFO1FBQzFILElBQUksR0FBRyxrQkFBa0IsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUNoQyxJQUFJLE1BQU0sR0FBRyxJQUFJLE1BQU0sQ0FBQyxNQUFNLEdBQUcsSUFBSSxHQUFHLFFBQVEsR0FBRyxJQUFJLEdBQUcsZ0JBQWdCLEVBQUUsR0FBRyxDQUFDLENBQUM7UUFDakYsSUFBSSxNQUFNLEdBQUcsTUFBTSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDMUMsTUFBTSxDQUFDLE1BQU0sQ0FBQztJQUNoQixDQUFDO0lBRUgsd0JBQUM7QUFBRCxDQUFDLEFBNUVELElBNEVDIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbmltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5cclxuQEluamVjdGFibGUoKVxyXG5leHBvcnQgY2xhc3MgQ2FjaGluZ1NlcnZpY2UgaW1wbGVtZW50cyBJQ2FjaGluZ1NlcnZpY2Uge1xyXG5cclxuICBjYWNoZXJzOiB7IFtpbmRleDogbnVtYmVyXTogSUNhY2hlciB9O1xyXG4gIC8vI2VuZHJlZ2lvblxyXG5cclxuICAvLyNyZWdpb24gU2hvcnRjdXQgZm9yIFN0b3JhZ2VzXHJcbiAgZ2V0IGxvY2FsU3RvcmFnZSgpOiBJQ2FjaGVyIHsgcmV0dXJuIHRoaXMuY2FjaGVyc1tDYWNoZXJUeXBlLkxvY2FsU3RvcmFnZV07IH1cclxuICBnZXQgc2Vzc2lvblN0b3JhZ2UoKTogSUNhY2hlciB7IHJldHVybiB0aGlzLmNhY2hlcnNbQ2FjaGVyVHlwZS5TZXNzaW9uU3RvcmFnZV07IH1cclxuICBnZXQgY29va2llU3RvcmFnZSgpOiBJQ2FjaGVyIHsgcmV0dXJuIHRoaXMuY2FjaGVyc1tDYWNoZXJUeXBlLkNvb2tpZVN0b3JhZ2VDb3JlXTsgfVxyXG4gIC8vI2VuZHJlZ2lvblxyXG5cclxuICAvLyNyZWdpb24gSW5pdFxyXG5cclxuXHJcbiAgY29uc3RydWN0b3IoKSB7XHJcbiAgICB0aGlzLmNhY2hlcnMgPSB7fTtcclxuICAgIHRoaXMuY2FjaGVyc1tDYWNoZXJUeXBlLkxvY2FsU3RvcmFnZV0gPSBuZXcgTG9jYWxTdG9yYWdlKHdpbmRvdy5sb2NhbFN0b3JhZ2UpO1xyXG4gICAgdGhpcy5jYWNoZXJzW0NhY2hlclR5cGUuU2Vzc2lvblN0b3JhZ2VdID0gbmV3IFNlc3Npb25TdG9yYWdlKHdpbmRvdy5zZXNzaW9uU3RvcmFnZSk7XHJcbiAgICB0aGlzLmNhY2hlcnNbQ2FjaGVyVHlwZS5Db29raWVTdG9yYWdlQ29yZV0gPSBuZXcgQ29va2llU3RvcmFnZUNvcmUoZG9jdW1lbnQuY29va2llKTtcclxuICB9XHJcbiAgLy8jZW5kcmVnaW9uXHJcbn1cclxuXHJcbmludGVyZmFjZSBJQ2FjaGluZ1NlcnZpY2Uge1xyXG4gIC8qKlxyXG4gICAqIEFsbCBDYWNoZXJzIGluZGV4ZWQgYnkgY2FjaGVyIGVudW1cclxuICAgKi9cclxuICBjYWNoZXJzOiB7IFtpbmRleDogbnVtYmVyXTogSUNhY2hlciB9O1xyXG4gIC8qKlxyXG4gICAqIExvY2FsU3RvcmFnZVxyXG4gICAqL1xyXG4gIGxvY2FsU3RvcmFnZTogSUNhY2hlcjtcclxuICAvKipcclxuICAgKiBTZXNzaW9uU3RvcmFnZVxyXG4gICAqL1xyXG4gIHNlc3Npb25TdG9yYWdlOiBJQ2FjaGVyO1xyXG4gIC8qKlxyXG4gICAqIENvb2tpZSBTdG9yYWdlXHJcbiAgICovXHJcbiAgLy9jb29raWVTdG9yYWdlOiBJQ2FjaGVyO1xyXG59XHJcblxyXG5jb25zdCBlbnVtIENhY2hlclR5cGUge1xyXG4gIExvY2FsU3RvcmFnZSxcclxuICBTZXNzaW9uU3RvcmFnZSxcclxuICBDYWNoZVN0b3JhZ2VDb3JlLFxyXG4gIENvb2tpZVN0b3JhZ2VDb3JlXHJcbn1cclxuXHJcblxyXG5jbGFzcyBMb2NhbFN0b3JhZ2UgaW1wbGVtZW50cyBJQ2FjaGVyIHtcclxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIHN0b3JhZ2U6IFN0b3JhZ2UpIHsgfVxyXG5cclxuICBnZXQgaXNBdmFpbGFibGUoKTogYm9vbGVhbiB7IHJldHVybiAhIXRoaXMuc3RvcmFnZTsgfVxyXG5cclxuICBnZXQ8VE1vZGVsPihrZXk6IHN0cmluZyk6IFRNb2RlbCB7XHJcbiAgICBsZXQgZGF0YSA9IHRoaXMuc3RvcmFnZS5nZXRJdGVtKGtleSk7XHJcbiAgICBpZiAoZGF0YSkge1xyXG4gICAgICBjb25zdCBtb2RlbCA9IEpTT04ucGFyc2UoZGF0YSk7XHJcbiAgICAgIC8vY29uc29sZS5sb2coeyBtZXNzYWdlOiAnbG9jYWxzdG9yYWdlIGNhY2hlIHJlc3RvcmVkIHdpdGgga2V5ICcgKyBrZXksIGRhdGE6IG1vZGVsIH0pO1xyXG4gICAgICByZXR1cm4gbW9kZWwgYXMgVE1vZGVsO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIG51bGw7XHJcbiAgfVxyXG5cclxuICBzdG9yZShrZXk6IHN0cmluZywgdmFsdWU6IGFueSk6IHZvaWQge1xyXG5cclxuICAgIGNvbnN0IHN0ckRhdGE6IHN0cmluZyA9IEpTT04uc3RyaW5naWZ5KHZhbHVlKTtcclxuICAgIHRoaXMuc3RvcmFnZS5zZXRJdGVtKGtleSwgc3RyRGF0YSk7XHJcbiAgICAvL2NvbnNvbGUubG9nKHsgbWVzc2FnZTogJ2xvY2Fsc3RvcmFnZSBjYWNoZSBjcmVhdGVkIHdpdGgga2V5ICcgKyBrZXksIGRhdGE6IHZhbHVlIH0pO1xyXG4gIH1cclxuXHJcbiAgcmVtb3ZlKGtleTogc3RyaW5nKTogdm9pZCB7XHJcbiAgICB0aGlzLnN0b3JhZ2UucmVtb3ZlSXRlbShrZXkpO1xyXG4gICAgLy9jb25zb2xlLmxvZyh7IG1lc3NhZ2U6ICdsb2NhbHN0b3JhZ2UgY2FjaGUgcmVtb3ZlZCB3aXRoIGtleSAnICsga2V5IH0pO1xyXG4gIH1cclxufVxyXG5cclxuY2xhc3MgU2Vzc2lvblN0b3JhZ2UgaW1wbGVtZW50cyBJQ2FjaGVyIHtcclxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIHN0b3JhZ2U6IFN0b3JhZ2UpIHsgfVxyXG5cclxuICBnZXQgaXNBdmFpbGFibGUoKTogYm9vbGVhbiB7IHJldHVybiAhIXRoaXMuc3RvcmFnZTsgfVxyXG5cclxuICBnZXQ8VE1vZGVsPihrZXk6IHN0cmluZyk6IFRNb2RlbCB7XHJcbiAgICBsZXQgZGF0YSA9IHRoaXMuc3RvcmFnZS5nZXRJdGVtKGtleSk7XHJcbiAgICBpZiAoZGF0YSkge1xyXG4gICAgICBjb25zdCBtb2RlbCA9IEpTT04ucGFyc2UoZGF0YSk7XHJcbiAgICAgIC8vY29uc29sZS5sb2coeyBtZXNzYWdlOiAnc2Vzc2lvbnN0b3JhZ2UgY2FjaGUgcmVzdG9yZWQgd2l0aCBrZXkgJyArIGtleSwgZGF0YTogbW9kZWwgfSk7XHJcbiAgICAgIHJldHVybiBtb2RlbCBhcyBUTW9kZWw7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gbnVsbDtcclxuICB9XHJcblxyXG4gIHN0b3JlKGtleTogc3RyaW5nLCB2YWx1ZTogYW55KTogdm9pZCB7XHJcbiAgICBjb25zdCBzdHJEYXRhOiBzdHJpbmcgPSBKU09OLnN0cmluZ2lmeSh2YWx1ZSk7XHJcbiAgICB0aGlzLnN0b3JhZ2Uuc2V0SXRlbShrZXksIHN0ckRhdGEpO1xyXG4gICAgLy9jb25zb2xlLmxvZyh7IG1lc3NhZ2U6ICdzZXNzaW9uc3RvcmFnZSBjYWNoZSBjcmVhdGVkIHdpdGgga2V5ICcgKyBrZXksIGRhdGE6IHZhbHVlIH0pO1xyXG4gIH1cclxuXHJcbiAgcmVtb3ZlKGtleTogc3RyaW5nKTogdm9pZCB7XHJcbiAgICB0aGlzLnN0b3JhZ2UucmVtb3ZlSXRlbShrZXkpO1xyXG4gICAgLy9jb25zb2xlLmxvZyh7IG1lc3NhZ2U6ICdzZXNzaW9uc3RvcmFnZSBjYWNoZSByZW1vdmVkIHdpdGgga2V5ICcgKyBrZXkgfSk7XHJcbiAgfVxyXG59XHJcblxyXG5jbGFzcyBDb29raWVTdG9yYWdlQ29yZSBpbXBsZW1lbnRzIElDYWNoZXIge1xyXG5cclxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGNvb2tpZXM6IGFueSkgeyB9XHJcblxyXG4gIGdldCBpc0F2YWlsYWJsZSgpOiBib29sZWFuIHsgcmV0dXJuICEhdGhpcy5jb29raWVzOyB9XHJcblxyXG5cclxuICBnZXQ8VE1vZGVsPihrZXk6IHN0cmluZyk6IFRNb2RlbCB7XHJcbiAgICBpZiAodGhpcy5jaGVjayhrZXkpKSB7XHJcbiAgICAgIGtleSA9IGVuY29kZVVSSUNvbXBvbmVudChrZXkpO1xyXG4gICAgICBsZXQgcmVnZXhwID0gbmV3IFJlZ0V4cCgnKD86XicgKyBrZXkgKyAnfDtcXFxccyonICsga2V5ICsgJyk9KC4qPykoPzo7fCQpJywgJ2cnKTtcclxuICAgICAgbGV0IHJlc3VsdCA9IHJlZ2V4cC5leGVjKHRoaXMuY29va2llcyk7XHJcbiAgICAgIGRlYnVnZ2VyXHJcbiAgICAgIGNvbnN0IG1vZGVsID0gSlNPTi5wYXJzZShkZWNvZGVVUklDb21wb25lbnQocmVzdWx0WzFdKSk7XHJcbiAgICAgIHJldHVybiBtb2RlbCBhcyBUTW9kZWw7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICByZXR1cm4gbnVsbDtcclxuICAgIH1cclxuICB9XHJcbiAgcHVibGljIGdldEFsbCgpOiBhbnkge1xyXG4gICAgbGV0IGNvb2tpZXM6IGFueSA9IHt9O1xyXG4gICAgaWYgKHRoaXMuY29va2llcyAmJiB0aGlzLmNvb2tpZXMgIT0gJycpIHtcclxuICAgICAgbGV0IHNwbGl0ID0gdGhpcy5jb29raWVzLnNwbGl0KCc7Jyk7XHJcbiAgICAgIGZvciAobGV0IHMgb2Ygc3BsaXQpIHtcclxuICAgICAgICBsZXQgY3VyckNvb2tpZSA9IHMuc3BsaXQoJz0nKTtcclxuICAgICAgICBjdXJyQ29va2llWzBdID0gY3VyckNvb2tpZVswXS5yZXBsYWNlKC9eIC8sICcnKTtcclxuICAgICAgICBjb29raWVzW2RlY29kZVVSSUNvbXBvbmVudChjdXJyQ29va2llWzBdKV0gPSBkZWNvZGVVUklDb21wb25lbnQoY3VyckNvb2tpZVsxXSk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIHJldHVybiBjb29raWVzO1xyXG4gIH1cclxuICBzdG9yZShrZXk6IHN0cmluZywgdmFsdWU6IGFueSwgZXhwaXJlcz86IG51bWJlciB8IERhdGUsIHBhdGg/OiBzdHJpbmcsIGRvbWFpbj86IHN0cmluZywgc2VjdXJlPzogYm9vbGVhbik6IHZvaWQge1xyXG4gICAgY29uc3QgX3ZhbHVlID0gSlNPTi5zdHJpbmdpZnkodmFsdWUpO1xyXG4gICAgbGV0IGNvb2tpZVN0ciA9IGVuY29kZVVSSUNvbXBvbmVudChrZXkpICsgJz0nICsgZW5jb2RlVVJJQ29tcG9uZW50KF92YWx1ZSkgKyAnOyc7XHJcblxyXG4gICAgaWYgKGV4cGlyZXMpIHtcclxuICAgICAgaWYgKHR5cGVvZiBleHBpcmVzID09PSAnbnVtYmVyJykge1xyXG4gICAgICAgIGxldCBkdEV4cGlyZXMgPSBuZXcgRGF0ZShuZXcgRGF0ZSgpLmdldFRpbWUoKSArIGV4cGlyZXMgKiAxMDAwICogNjAgKiA2MCAqIDI0KTtcclxuICAgICAgICBjb29raWVTdHIgKz0gJ2V4cGlyZXM9JyArIGR0RXhwaXJlcy50b1VUQ1N0cmluZygpICsgJzsnO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIGNvb2tpZVN0ciArPSAnZXhwaXJlcz0nICsgZXhwaXJlcy50b1VUQ1N0cmluZygpICsgJzsnO1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKHBhdGgpIHtcclxuICAgICAgY29va2llU3RyICs9ICdwYXRoPScgKyBwYXRoICsgJzsnO1xyXG4gICAgfVxyXG4gICAgaWYgKGRvbWFpbikge1xyXG4gICAgICBjb29raWVTdHIgKz0gJ2RvbWFpbj0nICsgZG9tYWluICsgJzsnO1xyXG4gICAgfVxyXG4gICAgaWYgKHNlY3VyZSkge1xyXG4gICAgICBjb29raWVTdHIgKz0gJ3NlY3VyZTsnO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIGNvbnNvbGUubG9nKGNvb2tpZVN0cik7XHJcbiAgIGRvY3VtZW50LmNvb2tpZSA9IGNvb2tpZVN0cjtcclxuICB9XHJcblxyXG4gIHJlbW92ZShrZXk6IHN0cmluZywgcGF0aD86IHN0cmluZywgZG9tYWluPzogc3RyaW5nKTogdm9pZCB7XHJcbiAgICB0aGlzLnN0b3JlKGtleSwgJycsIC0xLCBwYXRoLCBkb21haW4pO1xyXG4gIH1cclxuICBwdWJsaWMgcmVtb3ZlQWxsKHBhdGg/OiBzdHJpbmcsIGRvbWFpbj86IHN0cmluZyk6IHZvaWQge1xyXG4gICAgbGV0IGNvb2tpZXM6IGFueSA9IHRoaXMuZ2V0QWxsKCk7XHJcbiAgICBmb3IgKGxldCBjb29raWVOYW1lIG9mIE9iamVjdC5rZXlzKGNvb2tpZXMpKSB7XHJcbiAgICAgIHRoaXMucmVtb3ZlKGNvb2tpZU5hbWUsIHBhdGgsIGRvbWFpbik7XHJcbiAgICB9XHJcblxyXG4gIH1cclxuICBwdWJsaWMgY2hlY2sobmFtZTogc3RyaW5nKTogYm9vbGVhbiB7XHJcbiAgICBpZiAodHlwZW9mIGRvY3VtZW50ID09PSBcInVuZGVmaW5lZFwiKSByZXR1cm4gZmFsc2U7ICAvLyBDaGVjayBpZiBkb2N1bWVudCBleGlzdCBhdm9pZGluZyBpc3N1ZXMgb24gc2VydmVyIHNpZGUgcHJlcmVuZGVyaW5nXHJcbiAgICBuYW1lID0gZW5jb2RlVVJJQ29tcG9uZW50KG5hbWUpO1xyXG4gICAgbGV0IHJlZ2V4cCA9IG5ldyBSZWdFeHAoJyg/Ol4nICsgbmFtZSArICd8O1xcXFxzKicgKyBuYW1lICsgJyk9KC4qPykoPzo7fCQpJywgJ2cnKTtcclxuICAgIGxldCBleGlzdHMgPSByZWdleHAudGVzdChkb2N1bWVudC5jb29raWUpO1xyXG4gICAgcmV0dXJuIGV4aXN0cztcclxuICB9XHJcblxyXG59XHJcblxyXG5cclxuXHJcbmludGVyZmFjZSBJQ2FjaGVyIHtcclxuICAvKipcclxuICAgKiBHZXQgZGF0YSBmcm9tIHN0b3JhZ2VcclxuICAgKiBAcGFyYW0ga2V5IENhY2hlIGtleVxyXG4gICAqIEByZXR1cm5zIHtUTW9kZWx9XHJcbiAgICovXHJcbiAgZ2V0PFRNb2RlbD4oa2V5OiBzdHJpbmcpOiBUTW9kZWw7XHJcbiAgLyoqXHJcbiAgICogU3RvcmUgY2FjaGUgYnkga2V5XHJcbiAgICogQHBhcmFtIGtleSBLZXkgdmFsdWVcclxuICAgKiBAcGFyYW0gdmFsdWUgVmFsdWUgb2JqZWN0XHJcbiAgICovXHJcbiAgc3RvcmUoa2V5OiBzdHJpbmcsIHZhbHVlOiBhbnkpOiB2b2lkO1xyXG4gIC8qKlxyXG4gICAqIFJlbW92ZSBjYWNoZSBieSBrZXlcclxuICAgKiBAcGFyYW0ga2V5IEtleVxyXG4gICAqL1xyXG4gIHJlbW92ZShrZXk6IHN0cmluZyk6IHZvaWQ7XHJcbiAgLyoqXHJcbiAgICogUmV0dXJucyBpbXBsZW1lbnRlZCBzdG9yYWdlIHR5cGUgaXMgYXZhaWxhYmxlXHJcbiAgICovXHJcbiAgaXNBdmFpbGFibGU6IGJvb2xlYW47XHJcbn1cclxuXHJcbiJdfQ==