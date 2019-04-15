(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["basic-login-basic-login-module"],{

/***/ "./src/app/theme/auth/login/basic-login/basic-login-routing.module.ts":
/*!****************************************************************************!*\
  !*** ./src/app/theme/auth/login/basic-login/basic-login-routing.module.ts ***!
  \****************************************************************************/
/*! exports provided: BasicLoginRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BasicLoginRoutingModule", function() { return BasicLoginRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _basic_login_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./basic-login.component */ "./src/app/theme/auth/login/basic-login/basic-login.component.ts");
/* harmony import */ var _services_guards_login_guard_guard__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../services/guards/login-guard.guard */ "./src/app/services/guards/login-guard.guard.ts");




// guard

var routes = [
    {
        path: '',
        component: _basic_login_component__WEBPACK_IMPORTED_MODULE_3__["BasicLoginComponent"],
        canActivate: [_services_guards_login_guard_guard__WEBPACK_IMPORTED_MODULE_4__["LoginGuardGuard"]],
        data: {
            title: 'Simple Login'
        }
    }
];
var BasicLoginRoutingModule = /** @class */ (function () {
    function BasicLoginRoutingModule() {
    }
    BasicLoginRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)
            ],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
            providers: [_services_guards_login_guard_guard__WEBPACK_IMPORTED_MODULE_4__["LoginGuardGuard"]]
        })
    ], BasicLoginRoutingModule);
    return BasicLoginRoutingModule;
}());



/***/ }),

/***/ "./src/app/theme/auth/login/basic-login/basic-login.component.html":
/*!*************************************************************************!*\
  !*** ./src/app/theme/auth/login/basic-login/basic-login.component.html ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section class=\"login-block\">\r\n    <!-- Container-fluid starts -->\r\n    <div class=\"container\">\r\n        <div class=\"row\">\r\n            <div class=\"col-sm-12\">\r\n                <!-- Authentication card start -->\r\n                <form ngNativeValidate #f=\"ngForm\" class=\"md-float-material form-material\" (ngSubmit)=\"login(f)\" action=\"javascript:\">\r\n                    <div class=\"text-center\">\r\n                        <img src=\"assets/images/logo.png\" alt=\"logo.png\">\r\n                    </div>\r\n                    <div class=\"auth-box card\">\r\n                        <div class=\"card-block\">\r\n                            <div class=\"row m-b-20\">\r\n                                <div class=\"col-md-12\">\r\n                                    <h3 class=\"text-center\">{{ 'admin.login' | translate }}</h3>\r\n                                </div>\r\n                            </div>\r\n                            <div class=\"form-group form-primary\">\r\n                                <input [ngModel]=\"email\" type=\"email\" name=\"email\" class=\"form-control\" required>\r\n                                <span class=\"form-bar\"></span>\r\n                                <label class=\"float-label\">{{ 'login.email' | translate }}</label>\r\n                            </div>\r\n                            <div class=\"form-group form-primary\">\r\n                                <input ngModel type=\"password\" name=\"password\" class=\"form-control\" required>\r\n                                <span class=\"form-bar\"></span>\r\n                                <label class=\"float-label\">{{ 'login.password' | translate }}</label>\r\n                            </div>\r\n                            <div class=\"row m-t-25 text-left\">\r\n                                <div class=\"col-12\">\r\n                                    <div class=\"checkbox-fade fade-in-primary d-\">\r\n                                        <label>\r\n                                          <input [(ngModel)]=\"remember\" type=\"checkbox\" name=\"remember\" value=\"\">\r\n                                          <span class=\"cr\"><i class=\"cr-icon fa fa-check txt-primary\"></i></span>\r\n                                          <span class=\"text-inverse\">{{ 'login.remember' | translate }}</span>\r\n                                        </label>\r\n                                    </div>\r\n                                    <div class=\"forgot-phone text-right float-right\">\r\n                                        <a [routerLink]=\"['/auth/registration/simple/']\" class=\"text-right f-w-600\"> {{ 'login.nothaveaccount' | translate }}</a>\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                            <div class=\"row m-t-30\">\r\n                                <div class=\"col-md-12\">\r\n                                    <button type=\"submit\" class=\"btn btn-primary btn-md btn-block text-center m-b-20 ripple light\">{{ 'login.signin' | translate }}</button>\r\n                                </div>\r\n                            </div>\r\n                            <hr/>\r\n                            <div class=\"row \">\r\n\r\n                                <div class=\"col-md-2 \">\r\n                                    <img style=\"width:50px\" src=\"assets/images/logo.png \" alt=\"small-logo.png \">\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </form>\r\n                <!-- end of form -->\r\n            </div>\r\n            <!-- end of col-sm-12 -->\r\n        </div>\r\n        <!-- end of row -->\r\n    </div>\r\n    <!-- end of container-fluid -->\r\n</section>"

/***/ }),

/***/ "./src/app/theme/auth/login/basic-login/basic-login.component.scss":
/*!*************************************************************************!*\
  !*** ./src/app/theme/auth/login/basic-login/basic-login.component.scss ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3RoZW1lL2F1dGgvbG9naW4vYmFzaWMtbG9naW4vYmFzaWMtbG9naW4uY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/theme/auth/login/basic-login/basic-login.component.ts":
/*!***********************************************************************!*\
  !*** ./src/app/theme/auth/login/basic-login/basic-login.component.ts ***!
  \***********************************************************************/
/*! exports provided: BasicLoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BasicLoginComponent", function() { return BasicLoginComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _shared_utils_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../shared/utils/utils */ "./src/app/shared/utils/utils.ts");
/* harmony import */ var src_app_models_user_model__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/models/user.model */ "./src/app/models/user.model.ts");
/* harmony import */ var _services_user_user_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../services/user/user.service */ "./src/app/services/user/user.service.ts");






var BasicLoginComponent = /** @class */ (function () {
    function BasicLoginComponent(translate, http, userService, router) {
        this.translate = translate;
        this.http = http;
        this.userService = userService;
        this.router = router;
        // for template
        this.activeLanguage = _shared_utils_utils__WEBPACK_IMPORTED_MODULE_3__["LANGUAGE"];
        this.remember = false;
        this.translate.setDefaultLang(this.activeLanguage);
    }
    BasicLoginComponent.prototype.ngOnInit = function () {
        document.querySelector('body').setAttribute('themebg-pattern', 'theme1');
        this.email = localStorage.getItem('email') || '';
        if (this.email.length > 2) {
            this.remember = true;
        }
    };
    BasicLoginComponent.prototype.login = function (form) {
        var _this = this;
        if (form.invalid) {
            return;
        }
        var user = new src_app_models_user_model__WEBPACK_IMPORTED_MODULE_4__["User"](null, form.value.email, form.value.password);
        debugger;
        this.userService.login(user, form.value.remember)
            .subscribe(function (response) {
            _this.router.navigate(['/']);
            console.log(response);
        });
    };
    BasicLoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-basic-login',
            template: __webpack_require__(/*! ./basic-login.component.html */ "./src/app/theme/auth/login/basic-login/basic-login.component.html"),
            styles: [__webpack_require__(/*! ./basic-login.component.scss */ "./src/app/theme/auth/login/basic-login/basic-login.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_shared_utils_utils__WEBPACK_IMPORTED_MODULE_3__["TranslateService"],
            _shared_utils_utils__WEBPACK_IMPORTED_MODULE_3__["HttpClient"], _services_user_user_service__WEBPACK_IMPORTED_MODULE_5__["UserService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], BasicLoginComponent);
    return BasicLoginComponent;
}());



/***/ }),

/***/ "./src/app/theme/auth/login/basic-login/basic-login.module.ts":
/*!********************************************************************!*\
  !*** ./src/app/theme/auth/login/basic-login/basic-login.module.ts ***!
  \********************************************************************/
/*! exports provided: BasicLoginModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BasicLoginModule", function() { return BasicLoginModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _basic_login_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./basic-login.component */ "./src/app/theme/auth/login/basic-login/basic-login.component.ts");
/* harmony import */ var _basic_login_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./basic-login-routing.module */ "./src/app/theme/auth/login/basic-login/basic-login-routing.module.ts");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ngx-translate/http-loader */ "./node_modules/@ngx-translate/http-loader/fesm5/ngx-translate-http-loader.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");







//Translation



var BasicLoginModule = /** @class */ (function () {
    function BasicLoginModule() {
    }
    BasicLoginModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _basic_login_routing_module__WEBPACK_IMPORTED_MODULE_4__["BasicLoginRoutingModule"],
                _shared_shared_module__WEBPACK_IMPORTED_MODULE_5__["SharedModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_9__["HttpClientModule"],
                _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__["TranslateModule"].forRoot({
                    loader: {
                        provide: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__["TranslateLoader"],
                        useFactory: function (http) {
                            return new _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_8__["TranslateHttpLoader"](http);
                        },
                        deps: [_angular_common_http__WEBPACK_IMPORTED_MODULE_9__["HttpClient"]]
                    }
                }),
                _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ReactiveFormsModule"]
            ],
            declarations: [_basic_login_component__WEBPACK_IMPORTED_MODULE_3__["BasicLoginComponent"]]
        })
    ], BasicLoginModule);
    return BasicLoginModule;
}());



/***/ })

}]);
//# sourceMappingURL=basic-login-basic-login-module.js.map