(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["social-login-social-login-module"],{

/***/ "./src/app/theme/auth/login/social-login/social-login-routing.module.ts":
/*!******************************************************************************!*\
  !*** ./src/app/theme/auth/login/social-login/social-login-routing.module.ts ***!
  \******************************************************************************/
/*! exports provided: SocialLoginRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SocialLoginRoutingModule", function() { return SocialLoginRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _social_login_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./social-login.component */ "./src/app/theme/auth/login/social-login/social-login.component.ts");




var routes = [
    {
        path: '',
        component: _social_login_component__WEBPACK_IMPORTED_MODULE_3__["SocialLoginComponent"],
        data: {
            title: 'Social Login'
        }
    }
];
var SocialLoginRoutingModule = /** @class */ (function () {
    function SocialLoginRoutingModule() {
    }
    SocialLoginRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], SocialLoginRoutingModule);
    return SocialLoginRoutingModule;
}());



/***/ }),

/***/ "./src/app/theme/auth/login/social-login/social-login.component.html":
/*!***************************************************************************!*\
  !*** ./src/app/theme/auth/login/social-login/social-login.component.html ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section class=\"login-block\">\r\n  <!-- Container-fluid starts -->\r\n  <div class=\"container-fluid\">\r\n    <div class=\"row\">\r\n      <div class=\"col-sm-12\">\r\n        <!-- Authentication card start -->\r\n        <form class=\"md-float-material form-material\" action=\"javascript:\">\r\n          <div class=\"text-center\">\r\n            <img src=\"assets/images/logo.png\" alt=\"logo.png\">\r\n          </div>\r\n          <div class=\"auth-box card\">\r\n            <div class=\"card-block\">\r\n              <div class=\"row m-b-20\">\r\n                <div class=\"col-md-12\">\r\n                  <h3 class=\"text-center txt-primary\">Sign In</h3>\r\n                </div>\r\n              </div>\r\n              <div class=\"row m-b-20\">\r\n                <div class=\"col-md-6\">\r\n                  <button type=\"button\" class=\"btn btn-facebook m-b-20 btn-block ripple light\"><i class=\"fa fa-facebook\"></i>facebook</button>\r\n                </div>\r\n                <div class=\"col-md-6\">\r\n                  <button type=\"button\" class=\"btn btn-twitter m-b-20 btn-block ripple light\"><i class=\"fa fa-twitter\"></i>twitter</button>\r\n                </div>\r\n              </div>\r\n              <p class=\"text-muted text-center p-b-5\">Sign in with your regular account</p>\r\n              <div class=\"form-group form-primary\">\r\n                <input type=\"text\" name=\"user-name\" class=\"form-control\" required=\"\">\r\n                <span class=\"form-bar\"></span>\r\n                <label class=\"float-label\">Username</label>\r\n              </div>\r\n              <div class=\"form-group form-primary\">\r\n                <input type=\"password\" name=\"password\" class=\"form-control\" required=\"\">\r\n                <span class=\"form-bar\"></span>\r\n                <label class=\"float-label\">Password</label>\r\n              </div>\r\n              <div class=\"row m-t-25 text-left\">\r\n                <div class=\"col-12\">\r\n                  <div class=\"checkbox-fade fade-in-primary\">\r\n                    <label>\r\n                      <input type=\"checkbox\" value=\"\">\r\n                      <span class=\"cr\"><i class=\"cr-icon fa fa-check txt-primary\"></i></span>\r\n                      <span class=\"text-inverse\">Remember me</span>\r\n                    </label>\r\n                  </div>\r\n                  <div class=\"forgot-phone text-right float-right\">\r\n                    <a [routerLink]=\"['/auth/forgot']\" class=\"text-right f-w-600\"> Forgot Password?</a>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n              <div class=\"row m-t-30\">\r\n                <div class=\"col-md-12\">\r\n                  <button type=\"button\" class=\"btn btn-primary btn-md btn-block text-center m-b-20 ripple light\">LOGIN</button>\r\n                </div>\r\n              </div>\r\n              <p class=\"text-inverse text-left\">Don't have an account?<a [routerLink]=\"['/auth/registration/simple']\"> <b>Register here </b></a>for free!</p>\r\n            </div>\r\n          </div>\r\n        </form>\r\n        <!-- end of form -->\r\n      </div>\r\n      <!-- Authentication card end -->\r\n    </div>\r\n    <!-- end of col-sm-12 -->\r\n  </div>\r\n  <!-- end of container-fluid -->\r\n</section>\r\n\r\n\r\n"

/***/ }),

/***/ "./src/app/theme/auth/login/social-login/social-login.component.scss":
/*!***************************************************************************!*\
  !*** ./src/app/theme/auth/login/social-login/social-login.component.scss ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3RoZW1lL2F1dGgvbG9naW4vc29jaWFsLWxvZ2luL3NvY2lhbC1sb2dpbi5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/theme/auth/login/social-login/social-login.component.ts":
/*!*************************************************************************!*\
  !*** ./src/app/theme/auth/login/social-login/social-login.component.ts ***!
  \*************************************************************************/
/*! exports provided: SocialLoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SocialLoginComponent", function() { return SocialLoginComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var SocialLoginComponent = /** @class */ (function () {
    function SocialLoginComponent() {
    }
    SocialLoginComponent.prototype.ngOnInit = function () {
        document.querySelector('body').setAttribute('themebg-pattern', 'theme1');
    };
    SocialLoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-social-login',
            template: __webpack_require__(/*! ./social-login.component.html */ "./src/app/theme/auth/login/social-login/social-login.component.html"),
            styles: [__webpack_require__(/*! ./social-login.component.scss */ "./src/app/theme/auth/login/social-login/social-login.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], SocialLoginComponent);
    return SocialLoginComponent;
}());



/***/ }),

/***/ "./src/app/theme/auth/login/social-login/social-login.module.ts":
/*!**********************************************************************!*\
  !*** ./src/app/theme/auth/login/social-login/social-login.module.ts ***!
  \**********************************************************************/
/*! exports provided: SocialLoginModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SocialLoginModule", function() { return SocialLoginModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _social_login_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./social-login.component */ "./src/app/theme/auth/login/social-login/social-login.component.ts");
/* harmony import */ var _social_login_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./social-login-routing.module */ "./src/app/theme/auth/login/social-login/social-login-routing.module.ts");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../shared/shared.module */ "./src/app/shared/shared.module.ts");






var SocialLoginModule = /** @class */ (function () {
    function SocialLoginModule() {
    }
    SocialLoginModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _social_login_routing_module__WEBPACK_IMPORTED_MODULE_4__["SocialLoginRoutingModule"],
                _shared_shared_module__WEBPACK_IMPORTED_MODULE_5__["SharedModule"]
            ],
            declarations: [_social_login_component__WEBPACK_IMPORTED_MODULE_3__["SocialLoginComponent"]]
        })
    ], SocialLoginModule);
    return SocialLoginModule;
}());



/***/ })

}]);
//# sourceMappingURL=social-login-social-login-module.js.map