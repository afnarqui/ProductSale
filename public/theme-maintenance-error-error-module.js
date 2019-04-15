(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["theme-maintenance-error-error-module"],{

/***/ "./src/app/theme/maintenance/error/error-routing.module.ts":
/*!*****************************************************************!*\
  !*** ./src/app/theme/maintenance/error/error-routing.module.ts ***!
  \*****************************************************************/
/*! exports provided: ErrorRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ErrorRoutingModule", function() { return ErrorRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");



var routes = [
    {
        path: '',
        data: {
            title: 'Error Pages',
            status: false
        },
        children: [
            {
                path: '400',
                loadChildren: './error-400/error-400.module#Error400Module'
            },
            {
                path: '403',
                loadChildren: './error-403/error-403.module#Error403Module'
            },
            {
                path: '404',
                loadChildren: './error-404/error-404.module#Error404Module'
            },
            {
                path: '500',
                loadChildren: './error-500/error-500.module#Error500Module'
            },
            {
                path: '503',
                loadChildren: './error-503/error-503.module#Error503Module'
            }
        ]
    }
];
var ErrorRoutingModule = /** @class */ (function () {
    function ErrorRoutingModule() {
    }
    ErrorRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], ErrorRoutingModule);
    return ErrorRoutingModule;
}());



/***/ }),

/***/ "./src/app/theme/maintenance/error/error.module.ts":
/*!*********************************************************!*\
  !*** ./src/app/theme/maintenance/error/error.module.ts ***!
  \*********************************************************/
/*! exports provided: ErrorModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ErrorModule", function() { return ErrorModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _error_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./error-routing.module */ "./src/app/theme/maintenance/error/error-routing.module.ts");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../shared/shared.module */ "./src/app/shared/shared.module.ts");





var ErrorModule = /** @class */ (function () {
    function ErrorModule() {
    }
    ErrorModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _error_routing_module__WEBPACK_IMPORTED_MODULE_3__["ErrorRoutingModule"],
                _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"]
            ],
            declarations: []
        })
    ], ErrorModule);
    return ErrorModule;
}());



/***/ })

}]);
//# sourceMappingURL=theme-maintenance-error-error-module.js.map