(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["social-reg-social-reg-module"],{

/***/ "./src/app/theme/auth/registration/social-reg/social-reg-routing.module.ts":
/*!*********************************************************************************!*\
  !*** ./src/app/theme/auth/registration/social-reg/social-reg-routing.module.ts ***!
  \*********************************************************************************/
/*! exports provided: SocialRegRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SocialRegRoutingModule", function() { return SocialRegRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _social_reg_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./social-reg.component */ "./src/app/theme/auth/registration/social-reg/social-reg.component.ts");




var routes = [
    {
        path: '',
        component: _social_reg_component__WEBPACK_IMPORTED_MODULE_3__["SocialRegComponent"],
        data: {
            title: 'Social Registration'
        }
    }
];
var SocialRegRoutingModule = /** @class */ (function () {
    function SocialRegRoutingModule() {
    }
    SocialRegRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], SocialRegRoutingModule);
    return SocialRegRoutingModule;
}());



/***/ }),

/***/ "./src/app/theme/auth/registration/social-reg/social-reg.component.html":
/*!******************************************************************************!*\
  !*** ./src/app/theme/auth/registration/social-reg/social-reg.component.html ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section class=\"login-block\">\r\n  <!-- Container-fluid starts -->\r\n  <div class=\"container-fluid\">\r\n    <div class=\"row\">\r\n      <div class=\"col-sm-12\">\r\n        <!-- Authentication card start -->\r\n        <form class=\"md-float-material form-material\">\r\n          <div class=\"text-center\">\r\n            <img src=\"assets/images/logo.png\" alt=\"logo.png\">\r\n          </div>\r\n          <div class=\"auth-box card\">\r\n            <div class=\"card-block\">\r\n              <div class=\"row m-b-20\">\r\n                <div class=\"col-md-12\">\r\n                  <h3 class=\"text-center txt-primary\">Sign up</h3>\r\n                </div>\r\n              </div>\r\n              <div class=\"row m-b-20\">\r\n                <div class=\"col-md-6\">\r\n                  <a href=\"javascript:\" class=\"btn btn-facebook m-b-20 btn-block ripple light\"><i class=\"fa fa-facebook\"></i>facebook</a>\r\n                </div>\r\n                <div class=\"col-md-6\">\r\n                  <a href=\"javascript:\" class=\"btn btn-twitter m-b-0 btn-block ripple light\"><i class=\"fa fa-twitter\"></i>twitter</a>\r\n                </div>\r\n              </div>\r\n              <p class=\"text-muted text-center p-b-5\">Sign up with your regular account</p>\r\n              <div class=\"form-group form-primary\">\r\n                <input type=\"text\" name=\"user-name\" class=\"form-control\" required=\"\">\r\n                <span class=\"form-bar\"></span>\r\n                <label class=\"float-label\">Choose Username</label>\r\n              </div>\r\n              <div class=\"form-group form-primary\">\r\n                <input type=\"text\" name=\"email\" class=\"form-control\" required=\"\">\r\n                <span class=\"form-bar\"></span>\r\n                <label class=\"float-label\">Your Email Address</label>\r\n              </div>\r\n              <div class=\"row\">\r\n                <div class=\"col-sm-6\">\r\n                  <div class=\"form-group form-primary\">\r\n                    <input type=\"password\" name=\"password\" class=\"form-control\" required=\"\">\r\n                    <span class=\"form-bar\"></span>\r\n                    <label class=\"float-label\">Password</label>\r\n                  </div>\r\n                </div>\r\n                <div class=\"col-sm-6\">\r\n                  <div class=\"form-group form-primary\">\r\n                    <input type=\"password\" name=\"confirm-password\" class=\"form-control\" required=\"\">\r\n                    <span class=\"form-bar\"></span>\r\n                    <label class=\"float-label\">Confirm Password</label>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n              <div class=\"row m-t-25 text-left\">\r\n                <div class=\"col-md-12\">\r\n                  <div class=\"checkbox-fade fade-in-primary\">\r\n                    <label>\r\n                      <input type=\"checkbox\" value=\"\">\r\n                      <span class=\"cr\"><i class=\"cr-icon fa fa-check txt-primary\"></i></span>\r\n                      <span class=\"text-inverse\">I read and accept <a href=\"javascript:\">Terms &amp; Conditions.</a></span>\r\n                    </label>\r\n                  </div>\r\n                </div>\r\n                <div class=\"col-md-12\">\r\n                  <div class=\"checkbox-fade fade-in-primary\">\r\n                    <label>\r\n                      <input type=\"checkbox\" value=\"\">\r\n                      <span class=\"cr\"><i class=\"cr-icon fa fa-check txt-primary\"></i></span>\r\n                      <span class=\"text-inverse\">Send me the <a href=\"javascript:\">Newsletter</a> weekly.</span>\r\n                    </label>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n              <div class=\"row m-t-30\">\r\n                <div class=\"col-md-12\">\r\n                  <button type=\"button\" class=\"btn btn-primary btn-md btn-block text-center m-b-20 ripple light\">Sign up now</button>\r\n                </div>\r\n              </div>\r\n              <hr/>\r\n              <div class=\"row\">\r\n                <div class=\"col-md-10\">\r\n                  <p class=\"text-inverse text-left m-b-0\">Thank you.</p>\r\n                  <p class=\"text-inverse text-left\"><a [routerLink]=\"['/dashboard/default']\"><b>Back to website</b></a></p>\r\n                </div>\r\n                <div class=\"col-md-2\">\r\n                  <img src=\"assets/images/auth/Logo-small-bottom.png\" alt=\"small-logo.png\">\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </form>\r\n        <!-- Authentication card end -->\r\n      </div>\r\n      <!-- end of col-sm-12 -->\r\n    </div>\r\n    <!-- end of row -->\r\n  </div>\r\n  <!-- end of container-fluid -->\r\n</section>\r\n"

/***/ }),

/***/ "./src/app/theme/auth/registration/social-reg/social-reg.component.scss":
/*!******************************************************************************!*\
  !*** ./src/app/theme/auth/registration/social-reg/social-reg.component.scss ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3RoZW1lL2F1dGgvcmVnaXN0cmF0aW9uL3NvY2lhbC1yZWcvc29jaWFsLXJlZy5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/theme/auth/registration/social-reg/social-reg.component.ts":
/*!****************************************************************************!*\
  !*** ./src/app/theme/auth/registration/social-reg/social-reg.component.ts ***!
  \****************************************************************************/
/*! exports provided: SocialRegComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SocialRegComponent", function() { return SocialRegComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var SocialRegComponent = /** @class */ (function () {
    function SocialRegComponent() {
    }
    SocialRegComponent.prototype.ngOnInit = function () {
        document.querySelector('body').setAttribute('themebg-pattern', 'theme1');
    };
    SocialRegComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-social-reg',
            template: __webpack_require__(/*! ./social-reg.component.html */ "./src/app/theme/auth/registration/social-reg/social-reg.component.html"),
            styles: [__webpack_require__(/*! ./social-reg.component.scss */ "./src/app/theme/auth/registration/social-reg/social-reg.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], SocialRegComponent);
    return SocialRegComponent;
}());



/***/ }),

/***/ "./src/app/theme/auth/registration/social-reg/social-reg.module.ts":
/*!*************************************************************************!*\
  !*** ./src/app/theme/auth/registration/social-reg/social-reg.module.ts ***!
  \*************************************************************************/
/*! exports provided: SocialRegModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SocialRegModule", function() { return SocialRegModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _social_reg_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./social-reg.component */ "./src/app/theme/auth/registration/social-reg/social-reg.component.ts");
/* harmony import */ var _social_reg_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./social-reg-routing.module */ "./src/app/theme/auth/registration/social-reg/social-reg-routing.module.ts");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../shared/shared.module */ "./src/app/shared/shared.module.ts");






var SocialRegModule = /** @class */ (function () {
    function SocialRegModule() {
    }
    SocialRegModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _social_reg_routing_module__WEBPACK_IMPORTED_MODULE_4__["SocialRegRoutingModule"],
                _shared_shared_module__WEBPACK_IMPORTED_MODULE_5__["SharedModule"]
            ],
            declarations: [_social_reg_component__WEBPACK_IMPORTED_MODULE_3__["SocialRegComponent"]]
        })
    ], SocialRegModule);
    return SocialRegModule;
}());



/***/ })

}]);
//# sourceMappingURL=social-reg-social-reg-module.js.map