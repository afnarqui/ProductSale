(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["theme-widget-widget-module"],{

/***/ "./src/app/theme/widget/widget-routing.module.ts":
/*!*******************************************************!*\
  !*** ./src/app/theme/widget/widget-routing.module.ts ***!
  \*******************************************************/
/*! exports provided: WidgetRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WidgetRoutingModule", function() { return WidgetRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");



var routes = [
    {
        path: '',
        data: {
            title: 'Widget',
            status: false
        },
        children: [
            {
                path: 'statistic',
                loadChildren: './statistic/statistic.module#StatisticModule'
            },
            {
                path: 'data',
                loadChildren: './data-widget/data-widget.module#DataWidgetModule'
            },
            {
                path: 'chart',
                loadChildren: './chart-widget/chart-widget.module#ChartWidgetModule'
            },
            {
                path: 'advanced',
                loadChildren: './advance-widget/advance-widget.module#AdvanceWidgetModule'
            }
        ]
    }
];
var WidgetRoutingModule = /** @class */ (function () {
    function WidgetRoutingModule() {
    }
    WidgetRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], WidgetRoutingModule);
    return WidgetRoutingModule;
}());



/***/ }),

/***/ "./src/app/theme/widget/widget.module.ts":
/*!***********************************************!*\
  !*** ./src/app/theme/widget/widget.module.ts ***!
  \***********************************************/
/*! exports provided: WidgetModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WidgetModule", function() { return WidgetModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _widget_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./widget-routing.module */ "./src/app/theme/widget/widget-routing.module.ts");





var WidgetModule = /** @class */ (function () {
    function WidgetModule() {
    }
    WidgetModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _widget_routing_module__WEBPACK_IMPORTED_MODULE_4__["WidgetRoutingModule"],
                _shared_shared_module__WEBPACK_IMPORTED_MODULE_3__["SharedModule"]
            ],
            declarations: []
        })
    ], WidgetModule);
    return WidgetModule;
}());



/***/ })

}]);
//# sourceMappingURL=theme-widget-widget-module.js.map