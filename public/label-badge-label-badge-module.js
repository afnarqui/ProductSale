(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["label-badge-label-badge-module"],{

/***/ "./src/app/theme/ui-elements/basic/label-badge/label-badge-routing.module.ts":
/*!***********************************************************************************!*\
  !*** ./src/app/theme/ui-elements/basic/label-badge/label-badge-routing.module.ts ***!
  \***********************************************************************************/
/*! exports provided: LabelBadgeRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LabelBadgeRoutingModule", function() { return LabelBadgeRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _label_badge_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./label-badge.component */ "./src/app/theme/ui-elements/basic/label-badge/label-badge.component.ts");




var routes = [
    {
        path: '',
        component: _label_badge_component__WEBPACK_IMPORTED_MODULE_3__["LabelBadgeComponent"],
        data: {
            title: 'Label Badge',
            icon: 'icon-layout-grid2-alt',
            caption: 'lorem ipsum dolor sit amet, consectetur adipisicing elit - label badge',
            status: true
        }
    }
];
var LabelBadgeRoutingModule = /** @class */ (function () {
    function LabelBadgeRoutingModule() {
    }
    LabelBadgeRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], LabelBadgeRoutingModule);
    return LabelBadgeRoutingModule;
}());



/***/ }),

/***/ "./src/app/theme/ui-elements/basic/label-badge/label-badge.component.html":
/*!********************************************************************************!*\
  !*** ./src/app/theme/ui-elements/basic/label-badge/label-badge.component.html ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\r\n  <div class=\"col-sm-12\">\r\n    <!-- Badges card start -->\r\n    <app-card [title]=\"'Badges'\" [headerContent]=\"'Lorem ipsum dolor sit amet, consectetur adipisicing elit'\" [cardOptionBlock]=\"true\">\r\n      <div class=\"row\">\r\n        <div class=\"col-md-4 col-xl-3 col-sm-12\">\r\n          <div class=\"badge-box\">\r\n            <div class=\"sub-title\">Default badge\r\n            </div>\r\n            <p>Use class <code>badge-default</code></p>\r\n            <div>\r\n              <label class=\"badge badge-default\">5</label>\r\n              <label class=\"badge badge-default\">9</label>\r\n              <label class=\"badge badge-default\">15</label>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <div class=\"col-md-4 col-xl-3 col-sm-6\">\r\n          <div class=\"badge-box\">\r\n            <div class=\"sub-title\">Primary badge\r\n            </div>\r\n            <p>Use class <code>badge-primary</code></p>\r\n            <label class=\"badge badge-primary\">5</label>\r\n            <label class=\"badge badge-primary\">9</label>\r\n            <label class=\"badge badge-primary\">15</label>\r\n          </div>\r\n        </div>\r\n        <div class=\"col-md-4 col-xl-3 col-sm-6\">\r\n          <div class=\"badge-box\">\r\n            <div class=\"sub-title\">Success badge\r\n            </div>\r\n            <p>Use class <code>badge-success</code></p>\r\n            <label class=\"badge badge-success\">5</label>\r\n            <label class=\"badge badge-success\">9</label>\r\n            <label class=\"badge badge-success\">15</label>\r\n          </div>\r\n        </div>\r\n        <div class=\"col-md-4 col-xl-3 col-sm-6\">\r\n          <div class=\"badge-box\">\r\n            <div class=\"sub-title\">Warning badge\r\n            </div>\r\n            <p>\r\n              Use class <code>badge-warning</code>\r\n            </p>\r\n            <label class=\"badge badge-warning\">5</label>\r\n            <label class=\"badge badge-warning\">9</label>\r\n            <label class=\"badge badge-warning\">15</label>\r\n          </div>\r\n        </div>\r\n        <div class=\"col-md-4 col-xl-3 col-sm-6\">\r\n          <div class=\"badge-box\">\r\n            <div class=\"sub-title\">Danger badge\r\n            </div>\r\n            <p>\r\n              Use class <code>bg-danger</code>\r\n            </p>\r\n            <label class=\"badge badge-danger\">5</label>\r\n            <label class=\"badge badge-danger\">9</label>\r\n            <label class=\"badge badge-danger\">15</label>\r\n          </div>\r\n        </div>\r\n        <div class=\"col-md-4 col-xl-3 col-sm-6\">\r\n          <div class=\"badge-box\">\r\n            <div class=\"sub-title\">Info badge\r\n            </div>\r\n            <p>\r\n              Use class <code>badge-info</code>\r\n            </p>\r\n            <label class=\"badge badge-info \">5</label>\r\n            <label class=\"badge badge-info\">9</label>\r\n            <label class=\"badge badge-info\">15</label>\r\n          </div>\r\n        </div>\r\n        <div class=\"col-md-4 col-xl-3 col-sm-6\">\r\n          <div class=\"badge-box\">\r\n            <div class=\"sub-title\">inverse default badge\r\n            </div>\r\n            <p>\r\n              Use class <code>badge-inverse-default</code>\r\n            </p>\r\n            <label class=\"badge badge-inverse-default\">5</label>\r\n            <label class=\"badge badge-inverse-default\">9</label>\r\n            <label class=\"badge badge-inverse-default\">15</label>\r\n          </div>\r\n        </div>\r\n        <div class=\"col-md-4 col-xl-3 col-sm-6\">\r\n          <div class=\"badge-box\">\r\n            <div class=\"sub-title\">Inverse primary badge\r\n            </div>\r\n            <p>\r\n              Use class <code>badge-inverse-primary</code>\r\n            </p>\r\n            <label class=\"badge badge-inverse-primary\">5</label>\r\n            <label class=\"badge badge-inverse-primary\">9</label>\r\n            <label class=\"badge badge-inverse-primary\">15</label>\r\n          </div>\r\n        </div>\r\n        <div class=\"col-md-4 col-xl-3 col-sm-6\">\r\n          <div class=\"badge-box\">\r\n            <div class=\"sub-title\">Inverse success badge\r\n            </div>\r\n            <p>\r\n              Use class <code>badge-inverse-success</code>\r\n            </p>\r\n            <label class=\"badge badge-inverse-success\">5</label>\r\n            <label class=\"badge badge-inverse-success\">9</label>\r\n            <label class=\"badge badge-inverse-success\">15</label>\r\n          </div>\r\n        </div>\r\n        <div class=\"col-md-4 col-xl-3 col-sm-6\">\r\n          <div class=\"badge-box\">\r\n            <div class=\"sub-title\">Inverse warning badge\r\n            </div>\r\n            <p>\r\n              Use class <code>badge-inverse-warning</code>\r\n            </p>\r\n            <label class=\"badge badge-inverse-warning\">5</label>\r\n            <label class=\"badge badge-inverse-warning\">9</label>\r\n            <label class=\"badge badge-inverse-warning\">15</label>\r\n          </div>\r\n        </div>\r\n        <div class=\"col-md-4 col-xl-3 col-sm-6\">\r\n          <div class=\"badge-box\">\r\n            <div class=\"sub-title\">Inverse Danger badge\r\n            </div>\r\n            <p>\r\n              Use class <code>badge-inverse-danger</code>\r\n            </p>\r\n            <label class=\"badge badge-inverse-danger\">5</label>\r\n            <label class=\"badge badge-inverse-danger\">9</label>\r\n            <label class=\"badge badge-inverse-danger\">15</label>\r\n          </div>\r\n        </div>\r\n        <div class=\"col-md-4 col-xl-3 col-sm-6\">\r\n          <div class=\"badge-box\">\r\n            <div class=\"sub-title\">Inverse Info badge\r\n            </div>\r\n            <p>\r\n              Use class <code>badge-inverse-info</code>\r\n            </p>\r\n            <label class=\"badge badge-inverse-info\">5</label>\r\n            <label class=\"badge badge-inverse-info\">9</label>\r\n            <label class=\"badge badge-inverse-info\">15</label>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </app-card>\r\n    <!-- Badges card end -->\r\n  </div>\r\n</div>\r\n<div class=\"row\">\r\n  <div class=\"col-sm-12\">\r\n    <!-- Label card start -->\r\n    <app-card [title]=\"'Labels'\" [headerContent]=\"'Lorem ipsum dolor sit amet, consectetur adipisicing elit'\" [cardOptionBlock]=\"true\">\r\n      <!-- labels -->\r\n      <div class=\"row\">\r\n        <div class=\"col-md-12\">\r\n          <p>Use the <code>.label</code> class,&nbsp; followed by one of the six contextual classes <code>.label-default</code>, <code>.bg-primary</code>, <code>.bg-success</code>,\r\n            <code>.bg-info</code>, <code>.bg-warning</code> or <code>.bg-danger</code>, within a <code>&lt;label&gt;</code> element to create a label:\r\n          </p>\r\n          <div class=\"label-main\">\r\n            <label class=\"label label-default\">Default Label</label>\r\n          </div>\r\n          <div class=\"label-main\">\r\n            <label class=\"label label-primary\">Primary Label</label>\r\n          </div>\r\n          <div class=\"label-main\">\r\n            <label class=\"label label-success\">Success Label</label>\r\n          </div>\r\n          <div class=\"label-main\">\r\n            <label class=\"label label-info\">Info Label</label>\r\n          </div>\r\n          <div class=\"label-main\">\r\n            <label class=\"label label-warning\">Warning Label</label>\r\n          </div>\r\n          <div class=\"label-main\">\r\n            <label class=\"label label-danger\">Danger Label</label>\r\n          </div>\r\n          <div class=\"label-main\">\r\n            <label class=\"label label-inverse\">Inverse Label</label>\r\n          </div>\r\n          <div class=\"label-main\">\r\n            <label class=\"label label-inverse-default\">Border Default</label>\r\n          </div>\r\n          <div class=\"label-main\">\r\n            <label class=\"label label-inverse-primary\">Border Primary</label>\r\n          </div>\r\n          <div class=\"label-main\">\r\n            <label class=\"label label-inverse-success\">Border Success</label>\r\n          </div>\r\n          <div class=\"label-main\">\r\n            <label class=\"label label-inverse-info\">Border Label</label>\r\n          </div>\r\n          <div class=\"label-main\">\r\n            <label class=\"label label-inverse-warning\">Border Warning</label>\r\n          </div>\r\n          <div class=\"label-main\">\r\n            <label class=\"label label-inverse-danger\">Border Danger</label>\r\n          </div>\r\n          <div class=\"label-main\">\r\n            <label class=\"label label-inverse-info-border\">Border Inverse</label>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </app-card>\r\n    <!-- Label card end -->\r\n  </div>\r\n</div>\r\n<div class=\"row\">\r\n  <div class=\"col-md-12 col-lg-6\">\r\n    <!-- Label size card start -->\r\n    <app-card [title]=\"'Label Sizes'\" [headerContent]=\"'Lorem ipsum dolor sit amet, consectetur adipisicing elit'\" [cardOptionBlock]=\"true\">\r\n      <p>Use the <code>.label-lg</code> class along with <code>.label</code> for large label and Use the <code>.label-md</code> class along with <code>.label</code> for medium label.The<code>.label</code> class use form small label </p>\r\n      <div class=\"label-main\">\r\n        <label class=\"label label-lg label-primary\">Large Label</label>\r\n      </div>\r\n      <div class=\"label-main\">\r\n        <label class=\"label label-md label-primary\">Medium Label</label>\r\n      </div>\r\n      <div class=\"label-main\">\r\n        <label class=\"label label-primary\">Default Label</label>\r\n      </div>\r\n    </app-card>\r\n    <!-- Label size card end -->\r\n  </div>\r\n  <div class=\"col-md-12 col-lg-6\">\r\n    <!-- Badge size card start -->\r\n    <app-card [title]=\"'Badge Sizes'\" [headerContent]=\"'Lorem ipsum dolor sit amet, consectetur adipisicing elit'\" [cardOptionBlock]=\"true\">\r\n      <p>Use the <code>.badge-lg</code> class along with <code>.badge</code> for large badge and Use the <code>.badge-md</code> class along with <code>.badge</code> for medium badge.The<code>.badge</code> class use form small badge </p>\r\n      <div class=\"group-label d-inline-block\">\r\n        <label class=\"badge badge-lg bg-info\">5</label>\r\n        <label class=\"badge badge-lg bg-info\">5</label>\r\n        <label class=\"badge badge-lg bg-info m-r-20\">5</label>\r\n      </div>\r\n      <div class=\"group-label d-inline-block\">\r\n        <label class=\"badge badge-md bg-success\">5</label>\r\n        <label class=\"badge badge-md bg-success\">5</label>\r\n        <label class=\"badge badge-md bg-success m-r-20\">5</label>\r\n      </div>\r\n      <div class=\"group-label d-inline-block\">\r\n        <label class=\"badge bg-danger\">5</label>\r\n        <label class=\"badge bg-danger\">5</label>\r\n        <label class=\"badge bg-danger\">5</label>\r\n      </div>\r\n    </app-card>\r\n    <!-- Badge size card end -->\r\n  </div>\r\n</div>\r\n<div class=\"row\">\r\n  <div class=\"col-sm-12\">\r\n    <!-- Badges on button card start -->\r\n    <app-card [title]=\"'Badges On Button'\" [headerContent]=\"'Lorem ipsum dolor sit amet, consectetur adipisicing elit'\" [blockClass]=\"'button-list'\" [cardOptionBlock]=\"true\">\r\n      <button type=\"button\" class=\"btn btn-primary ripple light\" placement=\"top\" ngbTooltip=\".btn-primary.badge\">Primary\r\n        <span class=\"badge\">90</span>\r\n      </button>\r\n      <button type=\"button\" class=\"btn btn-success ripple light\" placement=\"top\" ngbTooltip=\".btn-success.badge\">success\r\n        <span class=\"badge\">70</span>\r\n      </button>\r\n      <button type=\"button\" class=\"btn btn-warning ripple\" placement=\"top\" ngbTooltip=\".btn-warning.badge\">warning\r\n        <span class=\"badge\">170</span>\r\n      </button>\r\n      <button type=\"button\" class=\"btn btn-danger ripple light\" placement=\"top\" ngbTooltip=\".btn-danger.badge\">danger\r\n        <span class=\"badge\">07</span>\r\n      </button>\r\n      <button type=\"button\" class=\"btn btn-info ripple light\" placement=\"top\" ngbTooltip=\".btn-info.badge\">info\r\n        <span class=\"badge\">80</span>\r\n      </button>\r\n      <!-- end of flat Button -->\r\n    </app-card>\r\n    <!-- Badges on button card end -->\r\n  </div>\r\n</div>\r\n<div class=\"row\">\r\n  <div class=\"col-sm-12\">\r\n    <!-- Badges with icon card start -->\r\n    <app-card [title]=\"'Badges With Icon'\" [headerContent]=\"'Lorem ipsum dolor sit amet, consectetur adipisicing elit'\" [cardOptionBlock]=\"true\">\r\n      <div class=\"row\">\r\n        <div class=\"col-md-3 col-sm-6\">\r\n          <div class=\"badge-box\">\r\n            <div class=\"sub-title\">Top Left badge\r\n              <a href=\"\" class=\"float-right\">\r\n              </a>\r\n            </div>\r\n            <!-- end of modal -->\r\n            <p>\r\n              Use class <code>badge-top-left</code>\r\n            </p>\r\n            <div class=\"label-icon\">\r\n              <i class=\"icofont icofont-envelope\"></i>\r\n              <label class=\"badge badge-default badge-top-left\">5</label>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <div class=\"col-md-3 col-sm-6\">\r\n          <div class=\"badge-box\">\r\n            <div class=\"sub-title\">Top Right badge\r\n              <a href=\"\" class=\"float-right\">\r\n              </a>\r\n            </div>\r\n            <!-- end of modal -->\r\n            <p>\r\n              Use class <code>badge-top-right</code>\r\n            </p>\r\n            <div class=\"label-icon\">\r\n              <i class=\"icofont icofont-envelope\"></i>\r\n              <label class=\"badge badge-primary badge-top-right\">9</label>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <div class=\"col-md-3 col-sm-6\">\r\n          <div class=\"badge-box\">\r\n            <div class=\"sub-title\">Bottom Left badge\r\n              <a href=\"\" class=\"float-right\">\r\n              </a>\r\n            </div>\r\n            <!-- end of modal -->\r\n            <p>\r\n              Use class <code>badge-bottom-left</code>\r\n            </p>\r\n            <div class=\"label-icon\">\r\n              <i class=\"icofont icofont-envelope\"></i>\r\n              <label class=\"badge badge-success badge-bottom-left\">9</label>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <div class=\"col-md-3 col-sm-6\">\r\n          <div class=\"badge-box\">\r\n            <div class=\"sub-title\">Bottom Right badge\r\n              <a href=\"\" class=\"float-right\">\r\n              </a>\r\n            </div>\r\n            <!-- end of modal -->\r\n            <p>\r\n              Use class <code>badge-bottom-right</code>\r\n            </p>\r\n            <div class=\"label-icon\">\r\n              <i class=\"icofont icofont-envelope\"></i>\r\n              <label class=\"badge badge-warning badge-bottom-right\">5</label>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </app-card>\r\n    <!-- Badges with icon card start -->\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/theme/ui-elements/basic/label-badge/label-badge.component.scss":
/*!********************************************************************************!*\
  !*** ./src/app/theme/ui-elements/basic/label-badge/label-badge.component.scss ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3RoZW1lL3VpLWVsZW1lbnRzL2Jhc2ljL2xhYmVsLWJhZGdlL2xhYmVsLWJhZGdlLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/theme/ui-elements/basic/label-badge/label-badge.component.ts":
/*!******************************************************************************!*\
  !*** ./src/app/theme/ui-elements/basic/label-badge/label-badge.component.ts ***!
  \******************************************************************************/
/*! exports provided: LabelBadgeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LabelBadgeComponent", function() { return LabelBadgeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var LabelBadgeComponent = /** @class */ (function () {
    function LabelBadgeComponent() {
    }
    LabelBadgeComponent.prototype.ngOnInit = function () {
    };
    LabelBadgeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-label-badge',
            template: __webpack_require__(/*! ./label-badge.component.html */ "./src/app/theme/ui-elements/basic/label-badge/label-badge.component.html"),
            styles: [__webpack_require__(/*! ./label-badge.component.scss */ "./src/app/theme/ui-elements/basic/label-badge/label-badge.component.scss"), __webpack_require__(/*! ../../../../../assets/icon/icofont/css/icofont.scss */ "./src/assets/icon/icofont/css/icofont.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], LabelBadgeComponent);
    return LabelBadgeComponent;
}());



/***/ }),

/***/ "./src/app/theme/ui-elements/basic/label-badge/label-badge.module.ts":
/*!***************************************************************************!*\
  !*** ./src/app/theme/ui-elements/basic/label-badge/label-badge.module.ts ***!
  \***************************************************************************/
/*! exports provided: LabelBadgeModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LabelBadgeModule", function() { return LabelBadgeModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _label_badge_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./label-badge.component */ "./src/app/theme/ui-elements/basic/label-badge/label-badge.component.ts");
/* harmony import */ var _label_badge_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./label-badge-routing.module */ "./src/app/theme/ui-elements/basic/label-badge/label-badge-routing.module.ts");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../shared/shared.module */ "./src/app/shared/shared.module.ts");






var LabelBadgeModule = /** @class */ (function () {
    function LabelBadgeModule() {
    }
    LabelBadgeModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _label_badge_routing_module__WEBPACK_IMPORTED_MODULE_4__["LabelBadgeRoutingModule"],
                _shared_shared_module__WEBPACK_IMPORTED_MODULE_5__["SharedModule"]
            ],
            declarations: [_label_badge_component__WEBPACK_IMPORTED_MODULE_3__["LabelBadgeComponent"]]
        })
    ], LabelBadgeModule);
    return LabelBadgeModule;
}());



/***/ })

}]);
//# sourceMappingURL=label-badge-label-badge-module.js.map