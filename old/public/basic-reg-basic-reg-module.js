(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["basic-reg-basic-reg-module"],{

/***/ "./src/app/theme/auth/registration/basic-reg/basic-reg-routing.module.ts":
/*!*******************************************************************************!*\
  !*** ./src/app/theme/auth/registration/basic-reg/basic-reg-routing.module.ts ***!
  \*******************************************************************************/
/*! exports provided: BasicRegRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BasicRegRoutingModule", function() { return BasicRegRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _basic_reg_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./basic-reg.component */ "./src/app/theme/auth/registration/basic-reg/basic-reg.component.ts");




var routes = [
    {
        path: '',
        component: _basic_reg_component__WEBPACK_IMPORTED_MODULE_3__["BasicRegComponent"],
        data: {
            title: 'Simple Registration'
        }
    }
];
var BasicRegRoutingModule = /** @class */ (function () {
    function BasicRegRoutingModule() {
    }
    BasicRegRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], BasicRegRoutingModule);
    return BasicRegRoutingModule;
}());



/***/ }),

/***/ "./src/app/theme/auth/registration/basic-reg/basic-reg.component.html":
/*!****************************************************************************!*\
  !*** ./src/app/theme/auth/registration/basic-reg/basic-reg.component.html ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section class=\"login-block\">\r\n    <!-- Container-fluid starts -->\r\n    <div class=\"container-fluid\">\r\n        <div class=\"row\">\r\n            <div class=\"col-sm-12\">\r\n                <form ngNativeValidate [formGroup]=\"forms\" (ngSubmit)=\"registerUser()\" class=\"md-float-material form-material\">\r\n                    <div class=\"text-center\">\r\n                        <img src=\"assets/images/logo.png\" alt=\"logo.png\">\r\n                    </div>\r\n                    <div class=\"auth-box card\">\r\n                        <div class=\"card-block\">\r\n                            <div class=\"row m-b-20\">\r\n                                <div class=\"col-md-12\">\r\n                                    <h3 class=\"text-center txt-primary\">{{ 'registration.signup' | translate }}</h3>\r\n                                </div>\r\n                            </div>\r\n                            <div class=\"form-group form-primary\">\r\n                                <input formControlName=\"name\" type=\" text \" name=\"name\" class=\"form-control \" required>\r\n                                <span class=\"form-bar \"></span>\r\n                                <label class=\"float-label \">{{ 'registration.name' | translate  }}</label>\r\n                            </div>\r\n                            <div class=\"form-group form-primary \">\r\n                                <input formControlName=\"email\" type=\"email \" name=\"email\" class=\"form-control \" required>\r\n                                <span class=\"form-bar \"></span>\r\n                                <label class=\"float-label \">{{ 'registration.email' | translate }}</label>\r\n                            </div>\r\n                            <div class=\"row \">\r\n                                <div class=\"col-sm-6 \">\r\n                                    <div class=\"form-group form-primary \">\r\n                                        <input formControlName=\"password1\" type=\"password\" name=\"password1\" class=\"form-control \" required>\r\n                                        <span class=\"form-bar \"></span>\r\n                                        <label class=\"float-label \">{{ 'registration.password' | translate }}</label>\r\n                                    </div>\r\n                                </div>\r\n                                <div class=\"col-sm-6 \">\r\n                                    <div class=\"form-group form-primary \">\r\n                                        <input formControlName=\"password2\" type=\"password\" name=\"password2\" class=\"form-control \" required>\r\n                                        <span class=\"form-bar \"></span>\r\n                                        <label class=\"float-label \">{{ 'registration.confirpassword' | translate }}</label>\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                            <div class=\"row m-t-30 \">\r\n                                <div class=\"col-md-12 \">\r\n                                    <button type=\"submit\" class=\"btn btn-primary btn-md btn-block text-center m-b-20 ripple light \">{{ 'registration.signupnow' | translate }}</button>\r\n                                </div>\r\n                                <hr/>\r\n                                <div class=\"forgot-phone text-center float-left\">\r\n                                    <a [routerLink]=\"['/auth/login/simple/']\" class=\"text-left f-w-600\"> {{ 'admin.login' | translate }}</a>\r\n                                </div>\r\n                            </div>\r\n                            <hr/>\r\n                            <div class=\"row \">\r\n\r\n                                <div class=\"col-md-2 \">\r\n                                    <img style=\"width:50px\" src=\"assets/images/logo.png \" alt=\"small-logo.png \">\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </form>\r\n            </div>\r\n            <!-- end of col-sm-12 -->\r\n        </div>\r\n        <!-- end of row -->\r\n    </div>\r\n    <!-- end of container-fluid -->\r\n</section>"

/***/ }),

/***/ "./src/app/theme/auth/registration/basic-reg/basic-reg.component.scss":
/*!****************************************************************************!*\
  !*** ./src/app/theme/auth/registration/basic-reg/basic-reg.component.scss ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3RoZW1lL2F1dGgvcmVnaXN0cmF0aW9uL2Jhc2ljLXJlZy9iYXNpYy1yZWcuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/theme/auth/registration/basic-reg/basic-reg.component.ts":
/*!**************************************************************************!*\
  !*** ./src/app/theme/auth/registration/basic-reg/basic-reg.component.ts ***!
  \**************************************************************************/
/*! exports provided: BasicRegComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BasicRegComponent", function() { return BasicRegComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var src_app_models_user_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/models/user.model */ "./src/app/models/user.model.ts");
/* harmony import */ var _shared_utils_utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../shared/utils/utils */ "./src/app/shared/utils/utils.ts");
/* harmony import */ var _services_user_user_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../services/user/user.service */ "./src/app/services/user/user.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");







var BasicRegComponent = /** @class */ (function () {
    function BasicRegComponent(translate, http, userService, router) {
        this.translate = translate;
        this.http = http;
        this.userService = userService;
        this.router = router;
        this.activeLanguage = _shared_utils_utils__WEBPACK_IMPORTED_MODULE_4__["LANGUAGE"];
        this.translate.setDefaultLang(this.activeLanguage);
    }
    BasicRegComponent.prototype.ngOnInit = function () {
        document.querySelector('body').setAttribute('themebg-pattern', 'theme1');
        this.forms = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
            name: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            email: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].email]),
            password1: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            password2: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required)
        }, { validators: this.theyAraEqual('password1', 'password2') });
    };
    /**
     *
     * @param field1 receives the initial password
     * @param field2 receive the end password
     */
    BasicRegComponent.prototype.theyAraEqual = function (field1, field2) {
        return function (group) {
            var password1 = group.controls[field1].value;
            var password2 = group.controls[field2].value;
            if (password1 === password2) {
                return null;
            }
            return {
                items: true
            };
        };
    };
    /**
     * save a user
     */
    BasicRegComponent.prototype.registerUser = function () {
        var _this = this;
        debugger;
        if (this.forms.invalid) {
            return;
        }
        // if ( !this.forms.value.condition ) {
        //     this.translate.get('registration.conditionsmessage')
        //   .subscribe((value)=>{
        //     let data = this.arrayMessage(value)
        //     let title = data[0];
        //     let message = data[1];
        //     let icon = data[2]
        //     swal(title, message, icon);
        //   })
        //  return;
        // }
        var user = new src_app_models_user_model__WEBPACK_IMPORTED_MODULE_3__["User"](this.forms.value.name, this.forms.value.email, this.forms.value.password1);
        this.userService.createUser(user)
            .subscribe(function (resp) {
            debugger;
            _this.router.navigate(['/auth/login/simple/']);
        }, function (error) {
            debugger;
            console.log(error);
        });
    };
    /**
     *
     * @param value string of multilanguage
     * formater the string
     */
    BasicRegComponent.prototype.arrayMessage = function (value) {
        return value.split(',');
    };
    BasicRegComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-basic-reg',
            template: __webpack_require__(/*! ./basic-reg.component.html */ "./src/app/theme/auth/registration/basic-reg/basic-reg.component.html"),
            styles: [__webpack_require__(/*! ./basic-reg.component.scss */ "./src/app/theme/auth/registration/basic-reg/basic-reg.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_shared_utils_utils__WEBPACK_IMPORTED_MODULE_4__["TranslateService"],
            _shared_utils_utils__WEBPACK_IMPORTED_MODULE_4__["HttpClient"], _services_user_user_service__WEBPACK_IMPORTED_MODULE_5__["UserService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"]])
    ], BasicRegComponent);
    return BasicRegComponent;
}());



/***/ }),

/***/ "./src/app/theme/auth/registration/basic-reg/basic-reg.module.ts":
/*!***********************************************************************!*\
  !*** ./src/app/theme/auth/registration/basic-reg/basic-reg.module.ts ***!
  \***********************************************************************/
/*! exports provided: BasicRegModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BasicRegModule", function() { return BasicRegModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _basic_reg_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./basic-reg.component */ "./src/app/theme/auth/registration/basic-reg/basic-reg.component.ts");
/* harmony import */ var _basic_reg_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./basic-reg-routing.module */ "./src/app/theme/auth/registration/basic-reg/basic-reg-routing.module.ts");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ngx-translate/http-loader */ "./node_modules/@ngx-translate/http-loader/fesm5/ngx-translate-http-loader.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");







//Translation



var BasicRegModule = /** @class */ (function () {
    function BasicRegModule() {
    }
    BasicRegModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _basic_reg_routing_module__WEBPACK_IMPORTED_MODULE_4__["BasicRegRoutingModule"],
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
            declarations: [_basic_reg_component__WEBPACK_IMPORTED_MODULE_3__["BasicRegComponent"]]
        })
    ], BasicRegModule);
    return BasicRegModule;
}());



/***/ })

}]);
//# sourceMappingURL=basic-reg-basic-reg-module.js.map