import * as tslib_1 from "tslib";
import { Platform } from '@ionic/angular';
import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';
import { BehaviorSubject } from 'rxjs';
var TOKEN_KEY = 'auth-token';
var AuthenticationService = /** @class */ (function () {
    function AuthenticationService(storage, plt) {
        var _this = this;
        this.storage = storage;
        this.plt = plt;
        this.authenticationState = new BehaviorSubject(false);
        this.plt.ready().then(function () {
            _this.checkToken();
        });
    }
    AuthenticationService.prototype.checkToken = function () {
        var _this = this;
        this.storage.get(TOKEN_KEY).then(function (res) {
            if (res) {
                _this.authenticationState.next(true);
            }
        });
    };
    AuthenticationService.prototype.login = function () {
        var _this = this;
        return this.storage.set(TOKEN_KEY, 'Bearer 1234567').then(function () {
            _this.authenticationState.next(true);
        });
    };
    AuthenticationService.prototype.logout = function () {
        var _this = this;
        return this.storage.remove(TOKEN_KEY).then(function () {
            _this.authenticationState.next(false);
        });
    };
    AuthenticationService.prototype.isAuthenticated = function () {
        return this.authenticationState.value;
    };
    AuthenticationService = tslib_1.__decorate([
        Injectable({
            providedIn: 'root'
        }),
        tslib_1.__metadata("design:paramtypes", [Storage, Platform])
    ], AuthenticationService);
    return AuthenticationService;
}());
export { AuthenticationService };
//# sourceMappingURL=authentication.service.js.map