(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["tooltip-tooltip-module"],{

/***/ "./src/app/theme/ui-elements/basic/tooltip/tooltip-routing.module.ts":
/*!***************************************************************************!*\
  !*** ./src/app/theme/ui-elements/basic/tooltip/tooltip-routing.module.ts ***!
  \***************************************************************************/
/*! exports provided: TooltipRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TooltipRoutingModule", function() { return TooltipRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _tooltip_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./tooltip.component */ "./src/app/theme/ui-elements/basic/tooltip/tooltip.component.ts");




var routes = [
    {
        path: '',
        component: _tooltip_component__WEBPACK_IMPORTED_MODULE_3__["TooltipComponent"],
        data: {
            title: 'Tooltip & Popover',
            icon: 'icon-layout-grid2-alt',
            caption: 'lorem ipsum dolor sit amet, consectetur adipisicing elit - tooltip',
            status: true
        }
    }
];
var TooltipRoutingModule = /** @class */ (function () {
    function TooltipRoutingModule() {
    }
    TooltipRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], TooltipRoutingModule);
    return TooltipRoutingModule;
}());



/***/ }),

/***/ "./src/app/theme/ui-elements/basic/tooltip/tooltip.component.html":
/*!************************************************************************!*\
  !*** ./src/app/theme/ui-elements/basic/tooltip/tooltip.component.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"page-body\">\r\n  <div class=\"row\">\r\n    <div class=\"col-xl-4\">\r\n      <!-- Tooltip style 1 card start -->\r\n      <div class=\"card o-visible\">\r\n        <div class=\"card-header\">\r\n          <h5>Tooltip style 1</h5>\r\n        </div>\r\n        <div class=\"card-block\">\r\n          <p>Use class <code>tooltip-effect-1</code> to use this\r\n            <span class=\"mytooltip tooltip-effect-1\">\r\n              <span class=\"tooltip-item\">Show Effect</span>\r\n              <span class=\"tooltip-content clearfix\">\r\n                <img src=\"assets/images/tooltip/euclid.png\" alt=\"Ecluid.png\">\r\n                <span class=\"tooltip-text\">Also known as Euclid of andria, was a Greek mathematician, often referred.</span>\r\n              </span>\r\n            </span>\r\n            current effect.\r\n          </p>\r\n        </div>\r\n      </div>\r\n      <!-- Tooltip style 1 card end -->\r\n    </div>\r\n    <div class=\"col-xl-4\">\r\n      <!-- Tooltip style 2 card start -->\r\n      <div class=\"card o-visible\">\r\n        <div class=\"card-header\">\r\n          <h5>Tooltip style 2</h5>\r\n        </div>\r\n        <div class=\"card-block\">\r\n          <p>Use class <code>tooltip-effect-2</code> to use this\r\n            <span class=\"mytooltip tooltip-effect-2\">\r\n                  <span class=\"tooltip-item\">Show Effect</span>\r\n                  <span class=\"tooltip-content clearfix\">\r\n                  <img src=\"assets/images/tooltip/euclid.png\" alt=\"Ecluid.png\">\r\n                  <span class=\"tooltip-text\">Also known as Euclid of andria, was a Greek mathematician, often referred.</span>\r\n                  </span>\r\n                  </span>\r\n            current effect.\r\n          </p>\r\n        </div>\r\n      </div>\r\n      <!-- Tooltip style 2 card end -->\r\n    </div>\r\n    <div class=\"col-xl-4\">\r\n      <!-- Tooltip style 4 card start -->\r\n      <div class=\"card o-visible\">\r\n        <div class=\"card-header\">\r\n          <h5>Tooltip style 4</h5>\r\n        </div>\r\n        <div class=\"card-block\">\r\n          <p>Use class <code>tooltip-effect-4</code> to use this\r\n            <span class=\"mytooltip tooltip-effect-4\">\r\n                  <span class=\"tooltip-item\">Show Effect</span>\r\n                  <span class=\"tooltip-content clearfix\">\r\n                  <img src=\"assets/images/tooltip/euclid.png\" alt=\"Ecluid.png\">\r\n                  <span class=\"tooltip-text\">Also known as Euclid of andria, was a Greek mathematician, often referred.</span>\r\n                  </span>\r\n                  </span>\r\n            current effect.\r\n          </p>\r\n        </div>\r\n      </div>\r\n      <!-- Tooltip style 4 card end -->\r\n    </div>\r\n    <div class=\"col-xl-4\">\r\n      <!-- Tooltip style 5 card start -->\r\n      <div class=\"card o-visible\">\r\n        <div class=\"card-header\">\r\n          <h5>Tooltip style 5</h5>\r\n        </div>\r\n        <div class=\"card-block\">\r\n          <p>Use class <code>tooltip-effect-5</code> to use this\r\n            <span class=\"mytooltip tooltip-effect-5\">\r\n                  <span class=\"tooltip-item\">Show Effect</span>\r\n                  <span class=\"tooltip-content clearfix\">\r\n                  <span class=\"tooltip-text\">Also known as Euclid of andria, was a Greek mathematician, often referred.</span>\r\n                  </span>\r\n                  </span>\r\n            current effect.\r\n          </p>\r\n        </div>\r\n      </div>\r\n      <!-- Tooltip style 5 card end -->\r\n    </div>\r\n    <div class=\"col-xl-4\">\r\n      <!-- Tooltip style 6 card start -->\r\n      <div class=\"card o-visible\">\r\n        <div class=\"card-header\">\r\n          <h5>Tooltip style 6</h5>\r\n        </div>\r\n        <div class=\"card-block\">\r\n          <p>Use class <code>tooltip-effect-6 tooltip-content-2 </code> to use this <a class=\"mytooltip tooltip-effect-6\" href=\"javascript:\">Home<span class=\"tooltip-content2\"><i class=\"icofont icofont-home\"></i></span></a> current effect. </p>\r\n        </div>\r\n      </div>\r\n      <!-- Tooltip style 6 card end -->\r\n    </div>\r\n    <div class=\"col-xl-4\">\r\n      <!-- Tooltip style 7 card start -->\r\n      <div class=\"card o-visible\">\r\n        <div class=\"card-header\">\r\n          <h5>Tooltip style 7</h5>\r\n        </div>\r\n        <div class=\"card-block\">\r\n          <p>Use class <code>tooltip-effect-7 tooltip-content-2</code> to use this <a class=\"mytooltip tooltip-effect-7\" href=\"javascript:\">About me<span class=\"tooltip-content2\"><i class=\"icofont icofont-user-alt-3\"></i></span></a> current effect. </p>\r\n        </div>\r\n      </div>\r\n      <!-- Tooltip style 7 card end -->\r\n    </div>\r\n    <div class=\"col-xl-4\">\r\n      <!-- Tooltip style 8 card start -->\r\n      <div class=\"card o-visible\">\r\n        <div class=\"card-header\">\r\n          <h5>Tooltip style 8</h5>\r\n        </div>\r\n        <div class=\"card-block\">\r\n          <p>Use class <code>tooltip-effect-8 tooltip-content-2</code> to use this <a class=\"mytooltip tooltip-effect-8\" href=\"javascript:\">Photography<span class=\"tooltip-content2\"><i class=\"icofont icofont-ui-camera\"></i></span></a> current effect. </p>\r\n        </div>\r\n      </div>\r\n      <!-- Tooltip style 8 card end -->\r\n    </div>\r\n    <div class=\"col-xl-4\">\r\n      <!-- Tooltip style 9 card start -->\r\n      <div class=\"card o-visible\">\r\n        <div class=\"card-header\">\r\n          <h5>Tooltip style 9</h5>\r\n        </div>\r\n        <div class=\"card-block\">\r\n          <p>Use class <code>tooltip-effect-9 tooltip-content-2</code> to use this <a class=\"mytooltip tooltip-effect-9\" href=\"javascript:\">Work<span class=\"tooltip-content2\"><i class=\"icofont icofont-bag-alt\"></i></span></a> current effect. </p>\r\n        </div>\r\n      </div>\r\n      <!-- Tooltip style 9 card end -->\r\n    </div>\r\n    <div class=\"col-xl-4\">\r\n      <!-- Tooltip style 10 card start -->\r\n      <div class=\"card o-visible\">\r\n        <div class=\"card-header\">\r\n          <h5>Bloated Tooltip</h5>\r\n        </div>\r\n        <div class=\"card-block\">\r\n          <p>Use class <code>tooltip-effect-9 tooltip-content-3</code> to use this <a class=\"mytooltip tooltip-effect-9\" href=\"javascript:\">Car<span class=\"tooltip-content3\">You can easily navigate the city by car.</span></a> current effect. </p>\r\n        </div>\r\n      </div>\r\n      <!-- Tooltip style 10 card end -->\r\n    </div>\r\n    <div class=\"col-sm-12\">\r\n      <!-- Box tooltip card start -->\r\n      <div class=\"card o-visible\">\r\n        <div class=\"card-header\">\r\n          <h5>Box tooltip</h5>\r\n        </div>\r\n        <div class=\"card-block\">\r\n          <p>Use class <code>tooltip-effect-1 tooltip-content4</code> to use this\r\n            <span class=\"mytooltip tooltip-effect-1\">\r\n                  <span class=\"tooltip-item2\">Euclid</span>\r\n                  <span class=\"tooltip-content4 clearfix\">\r\n                  <span class=\"tooltip-text2\">\r\n                  <strong>Euclid</strong>, also known as Euclid of Alexandria, was a Greek mathematician, often referred to as the \"Father of Geometry\". He was active in Alexandria during the reign of Ptolemy I.\r\n                  <a href=\"javascript:\">Wikipedia</a>\r\n                  </span>\r\n                  </span>\r\n                  </span>\r\n            current effect. rogue laws of physics, star stuff harvesting star light, <span class=\"mytooltip tooltip-effect-2\"><span class=\"tooltip-item2\">quasar</span><span class=\"tooltip-content4 clearfix\"><span class=\"tooltip-text2\"><strong>Quasars</strong> are believed to be powered by accretion of material into supermassive black holes in the nuclei of distant galaxies, making these luminous versions of the general... <a href=\"javascript:\">Wikipedia</a></span></span>\r\n                  </span> encyclopaedia galactica are creatures of the cosmos the only home we've ever known ship of the imagination prime number courage of our questions.\r\n          </p>\r\n          <p>Colonies. Jean-François Champollion, billions upon billions descended from astronomers the sky calls to us! Made in the interiors of collapsing stars, billions upon billions radio telescope paroxysm of global death not a sunrise but a galaxyrise, gathered by gravity permanence of the stars?</p>\r\n        </div>\r\n      </div>\r\n      <!-- Box tooltip card end -->\r\n    </div>\r\n    <div class=\"col-xl-4\">\r\n      <!-- Tooltip on button card start -->\r\n      <div class=\"card button-page o-visible\">\r\n        <div class=\"card-header\">\r\n          <h5>Tooltip on button</h5>\r\n        </div>\r\n        <div class=\"card-block\">\r\n          <ul>\r\n            <li>\r\n              <button type=\"button\" class=\"btn btn-default ripple\" placement=\"top\" ngbTooltip=\"tooltip on top\">Top\r\n              </button>\r\n            </li>\r\n            <li>\r\n              <button type=\"button\" class=\"btn btn-primary ripple light\" placement=\"left\" ngbTooltip=\"tooltip on left\">Left\r\n              </button>\r\n            </li>\r\n            <li>\r\n              <button type=\"button\" class=\"btn btn-success ripple light\" placement=\"right\" ngbTooltip=\"tooltip on right\">right\r\n              </button>\r\n            </li>\r\n            <li>\r\n              <button type=\"button\" class=\"btn btn-warning ripple\" placement=\"bottom\" ngbTooltip=\"tooltip on bottom\">bottom\r\n              </button>\r\n            </li>\r\n            <li>\r\n              <button type=\"button\" class=\"btn btn-info ripple light\" html=\"true\" [ngbTooltip]=\"tipContent\">Html Tooltip</button>\r\n              <ng-template #tipContent><em>tooltip</em> <u>with</u> <b>HTML</b></ng-template>\r\n            </li>\r\n          </ul>\r\n        </div>\r\n      </div>\r\n      <!-- Tooltip on button card end -->\r\n    </div>\r\n    <div class=\"col-xl-4\">\r\n      <!-- Line Tooltip card start -->\r\n      <div class=\"card o-visible\">\r\n        <div class=\"card-header\">\r\n          <h5>Line Tooltip</h5>\r\n        </div>\r\n        <div class=\"card-block\">\r\n          <p>Use class <code>tooltip-content4</code> to use this <a class=\"mytooltip\" href=\"javascript:void(0)\"> Line tooltip<span class=\"tooltip-content5\"><span class=\"tooltip-text3\"><span class=\"tooltip-inner2\">Howdy, Ben!<br> There are 13 unread messages in your inbox.</span></span></span></a> current effect. harvesting star light.Colonies. Jean-François Champollion.</p>\r\n        </div>\r\n      </div>\r\n      <!-- Line Tooltip card end -->\r\n    </div>\r\n    <div class=\"col-xl-4\">\r\n      <!-- Tooltip with link card start -->\r\n      <div class=\"card o-visible\">\r\n        <div class=\"card-header\">\r\n          <h5>Tooltip with link</h5>\r\n        </div>\r\n        <div class=\"card-block tooltip-link\">\r\n          <a href=\"javascript:\" placement=\"top\" ngbTooltip=\"top!\">Top</a>\r\n          <a href=\"javascript:\" placement=\"bottom\" ngbTooltip=\"bottom!\">Bottom</a>\r\n          <a href=\"javascript:\" placement=\"left\" ngbTooltip=\"left!\">Left</a>\r\n          <a href=\"javascript:\" placement=\"right\" ngbTooltip=\"right!\">Right</a>\r\n        </div>\r\n      </div>\r\n      <!-- Tooltip with link card end -->\r\n    </div>\r\n    <div class=\"col-sm-6\">\r\n      <!-- Tooltip on icon card start -->\r\n      <div class=\"card o-visible\">\r\n        <div class=\"card-header\">\r\n          <h5>Tooltip on icon</h5>\r\n        </div>\r\n        <div class=\"card-block tooltip-icon button-list\">\r\n          <p>use code in button for tooltip <code>placement=\"left\" ngbTooltip=\".icofont-home\"</code></p>\r\n          <button type=\"button\" class=\"btn btn-primary btn-icon ripple light\" placement=\"left\" ngbTooltip=\".icofont-home\">\r\n            <i class=\"icofont icofont-home\"></i>\r\n          </button>\r\n          <button type=\"button\" class=\"btn btn-danger btn-icon ripple light\" placement=\"top\" ngbTooltip=\".icofont icofont-search-alt-2\">\r\n            <i class=\"icofont icofont-search-alt-2\"></i>\r\n          </button>\r\n          <button type=\"button\" class=\"btn btn-warning btn-icon ripple\" placement=\"right\" ngbTooltip=\".icofont-refresh\">\r\n            <i class=\"icofont icofont-refresh\"></i>\r\n          </button>\r\n          <button type=\"button\" class=\"btn btn-info btn-icon ripple light\" placement=\"top\" ngbTooltip=\".icofont-print\">\r\n            <i class=\"icofont icofont-print\"></i>\r\n          </button>\r\n          <button type=\"button\" class=\"btn btn-success btn-icon ripple light\" placement=\"bottom\" ngbTooltip=\".icofont-paper-plane\">\r\n            <i class=\"icofont icofont-paper-plane\"></i>\r\n          </button>\r\n        </div>\r\n      </div>\r\n      <!-- Tooltip on icon card end -->\r\n    </div>\r\n    <div class=\"col-sm-6\">\r\n      <!-- Tooltip on popover card start -->\r\n      <div class=\"card o-visible\">\r\n        <div class=\"card-header\">\r\n          <h5>Tooltip on popover</h5>\r\n        </div>\r\n        <div class=\"card-block tooltip-pop button-list\">\r\n          <p>use code in button for tooltip <code> placement=\"left\" ngbPopover=\".icofont-home\"</code></p>\r\n          <button type=\"button\" class=\"btn btn-default ripple\" placement=\"top\" ngbPopover=\"top by popover\">Top\r\n          </button>\r\n          <button type=\"button\" class=\"btn btn-primary ripple light\" placement=\"left\" ngbPopover=\"tooltip on left\">Left\r\n          </button>\r\n          <button type=\"button\" class=\"btn btn-success ripple light\" placement=\"right\" ngbPopover=\"tooltip on right\">right\r\n          </button>\r\n          <button type=\"button\" class=\"btn btn-warning ripple\" placement=\"bottom\" ngbPopover=\"tooltip on bottom\">bottom\r\n          </button>\r\n          <button type=\"button\" class=\"btn btn-info ripple light\" placement=\"top\" [ngbPopover]=\"popContent\">Html Popover</button>\r\n          <ng-template #popContent><em>tooltip</em> <u>with</u> <b>HTML</b></ng-template>\r\n        </div>\r\n      </div>\r\n      <!-- Tooltip on popover card end -->\r\n    </div>\r\n    <div class=\"col-sm-12\">\r\n      <!-- Tooltips on textbox card start -->\r\n      <div class=\"card o-visible\">\r\n        <div class=\"card-header\">\r\n          <h5>Tooltips on textbox</h5>\r\n        </div>\r\n        <div class=\"card-block tooltip-icon button-list\">\r\n          <div class=\"input-group\">\r\n            <span class=\"input-group-append\" id=\"name\"><i class=\"icofont icofont-user-alt-3 input-group-text\"></i></span>\r\n            <input type=\"text\" class=\"form-control\" placeholder=\"Enter your name\" ngbTooltip=\"Enter your name\">\r\n          </div>\r\n          <div class=\"input-group\">\r\n            <span class=\"input-group-append\" id=\"email\"><i class=\"icofont icofont-ui-email input-group-text\"></i></span>\r\n            <input type=\"text\" class=\"form-control\" placeholder=\"Enter email\" ngbTooltip=\"Enter email\">\r\n          </div>\r\n          <button type=\"button\" class=\"btn btn-primary ripple light m-r-20\" placement=\"right\" ngbTooltip=\"submit\">Submit\r\n          </button>\r\n        </div>\r\n      </div>\r\n      <!-- Tooltips on textbox card end -->\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/theme/ui-elements/basic/tooltip/tooltip.component.scss":
/*!************************************************************************!*\
  !*** ./src/app/theme/ui-elements/basic/tooltip/tooltip.component.scss ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3RoZW1lL3VpLWVsZW1lbnRzL2Jhc2ljL3Rvb2x0aXAvdG9vbHRpcC5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/theme/ui-elements/basic/tooltip/tooltip.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/theme/ui-elements/basic/tooltip/tooltip.component.ts ***!
  \**********************************************************************/
/*! exports provided: TooltipComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TooltipComponent", function() { return TooltipComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var TooltipComponent = /** @class */ (function () {
    function TooltipComponent() {
    }
    TooltipComponent.prototype.ngOnInit = function () {
    };
    TooltipComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-tooltip',
            template: __webpack_require__(/*! ./tooltip.component.html */ "./src/app/theme/ui-elements/basic/tooltip/tooltip.component.html"),
            styles: [__webpack_require__(/*! ./tooltip.component.scss */ "./src/app/theme/ui-elements/basic/tooltip/tooltip.component.scss"), __webpack_require__(/*! ../../../../../assets/icon/icofont/css/icofont.scss */ "./src/assets/icon/icofont/css/icofont.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], TooltipComponent);
    return TooltipComponent;
}());



/***/ }),

/***/ "./src/app/theme/ui-elements/basic/tooltip/tooltip.module.ts":
/*!*******************************************************************!*\
  !*** ./src/app/theme/ui-elements/basic/tooltip/tooltip.module.ts ***!
  \*******************************************************************/
/*! exports provided: TooltipModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TooltipModule", function() { return TooltipModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _tooltip_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./tooltip.component */ "./src/app/theme/ui-elements/basic/tooltip/tooltip.component.ts");
/* harmony import */ var _tooltip_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./tooltip-routing.module */ "./src/app/theme/ui-elements/basic/tooltip/tooltip-routing.module.ts");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../shared/shared.module */ "./src/app/shared/shared.module.ts");






var TooltipModule = /** @class */ (function () {
    function TooltipModule() {
    }
    TooltipModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _tooltip_routing_module__WEBPACK_IMPORTED_MODULE_4__["TooltipRoutingModule"],
                _shared_shared_module__WEBPACK_IMPORTED_MODULE_5__["SharedModule"]
            ],
            declarations: [_tooltip_component__WEBPACK_IMPORTED_MODULE_3__["TooltipComponent"]]
        })
    ], TooltipModule);
    return TooltipModule;
}());



/***/ })

}]);
//# sourceMappingURL=tooltip-tooltip-module.js.map