(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["registration-registration-module"],{

/***/ "./src/app/theme/auth/registration/registration-routing.module.ts":
/*!************************************************************************!*\
  !*** ./src/app/theme/auth/registration/registration-routing.module.ts ***!
  \************************************************************************/
/*! exports provided: RegistrationRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegistrationRoutingModule", function() { return RegistrationRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");



var routes = [
    {
        path: '',
        data: {
            title: 'Registration',
            status: false
        },
        children: [
            {
                path: 'simple',
                loadChildren: './basic-reg/basic-reg.module#BasicRegModule'
            },
            {
                path: 'header-footer',
                loadChildren: './header-footer-reg/header-footer-reg.module#HeaderFooterRegModule'
            },
            {
                path: 'social',
                loadChildren: './social-reg/social-reg.module#SocialRegModule'
            },
            {
                path: 'social-header-footer',
                loadChildren: './social-header-footer-reg/social-header-footer-reg.module#SocialHeaderFooterRegModule'
            }
        ]
    }
];
var RegistrationRoutingModule = /** @class */ (function () {
    function RegistrationRoutingModule() {
    }
    RegistrationRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], RegistrationRoutingModule);
    return RegistrationRoutingModule;
}());



/***/ }),

/***/ "./src/app/theme/auth/registration/registration.module.ts":
/*!****************************************************************!*\
  !*** ./src/app/theme/auth/registration/registration.module.ts ***!
  \****************************************************************/
/*! exports provided: RegistrationModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegistrationModule", function() { return RegistrationModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _registration_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./registration-routing.module */ "./src/app/theme/auth/registration/registration-routing.module.ts");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _services_user_user_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../services/user/user.service */ "./src/app/services/user/user.service.ts");





//services

var RegistrationModule = /** @class */ (function () {
    function RegistrationModule() {
    }
    RegistrationModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _registration_routing_module__WEBPACK_IMPORTED_MODULE_3__["RegistrationRoutingModule"],
                _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"]
            ],
            providers: [_services_user_user_service__WEBPACK_IMPORTED_MODULE_5__["UserService"]],
            declarations: []
        })
    ], RegistrationModule);
    return RegistrationModule;
}());



/***/ })

}]);
//# sourceMappingURL=registration-registration-module.js.map