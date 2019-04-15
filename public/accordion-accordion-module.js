(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["accordion-accordion-module"],{

/***/ "./src/app/theme/ui-elements/basic/accordion/accordion-routing.module.ts":
/*!*******************************************************************************!*\
  !*** ./src/app/theme/ui-elements/basic/accordion/accordion-routing.module.ts ***!
  \*******************************************************************************/
/*! exports provided: AccordionRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AccordionRoutingModule", function() { return AccordionRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _accordion_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./accordion.component */ "./src/app/theme/ui-elements/basic/accordion/accordion.component.ts");




var routes = [
    {
        path: '',
        component: _accordion_component__WEBPACK_IMPORTED_MODULE_3__["AccordionComponent"],
        data: {
            title: 'Accordion',
            icon: 'icon-layout-grid2-alt',
            caption: 'lorem ipsum dolor sit amet, consectetur adipisicing elit - accordion',
            status: true
        }
    }
];
var AccordionRoutingModule = /** @class */ (function () {
    function AccordionRoutingModule() {
    }
    AccordionRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AccordionRoutingModule);
    return AccordionRoutingModule;
}());



/***/ }),

/***/ "./src/app/theme/ui-elements/basic/accordion/accordion.component.html":
/*!****************************************************************************!*\
  !*** ./src/app/theme/ui-elements/basic/accordion/accordion.component.html ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"page-body\">\r\n\r\n  <!-- Row start -->\r\n  <div class=\"row\">\r\n    <!-- Multiple Open Accordion start -->\r\n    <!--<div class=\"col-xl-6\">\r\n      <app-card [title]=\"'MULTIPLE OPEN ACCORDION'\" [blockClass]=\"'accordion-block scale-accordion'\">\r\n        <squeezebox [multiple]=\"true\">\r\n          <sb-item class=\"accordion-panel\">\r\n            <sb-item-head class=\"accordion-heading accordion-msg\">Lorem Message 1</sb-item-head>\r\n            <sb-item-body class=\"accordion-content\">\r\n              <div class=\"accordion-desc\">\r\n                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more .</p>\r\n              </div>\r\n            </sb-item-body>\r\n          </sb-item>\r\n          <sb-item [collapsed]=\"false\" class=\"accordion-panel\">\r\n            <sb-item-head class=\"accordion-msg\">Lorem Message 2</sb-item-head>\r\n            <sb-item-body class=\"accordion-content\">\r\n              <div class=\"accordion-desc\">\r\n                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more .</p>\r\n              </div>\r\n            </sb-item-body>\r\n          </sb-item>\r\n          <sb-item class=\"accordion-panel\">\r\n            <sb-item-head class=\"accordion-msg\">Lorem Message 3</sb-item-head>\r\n            <sb-item-body class=\"accordion-content\">\r\n              <div class=\"accordion-desc\">\r\n                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more .</p>\r\n              </div>\r\n            </sb-item-body>\r\n          </sb-item>\r\n        </squeezebox>\r\n      </app-card>\r\n    </div>-->\r\n\r\n    <!--<div class=\"col-xl-6\">\r\n      <app-card [title]=\"'Single Open Accordion'\" [blockClass]=\"'accordion-block'\">\r\n        <squeezebox [multiple]=\"false\">\r\n          <sb-item [collapsed]=\"false\" class=\"accordion-panel\">\r\n            <sb-item-head class=\"accordion-heading accordion-msg\">Lorem Message 1</sb-item-head>\r\n            <sb-item-body class=\"accordion-content\">\r\n              <div class=\"accordion-desc\">\r\n                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more .</p>\r\n              </div>\r\n            </sb-item-body>\r\n          </sb-item>\r\n          <sb-item class=\"accordion-panel\">\r\n            <sb-item-head class=\"accordion-msg\">Lorem Message 2</sb-item-head>\r\n            <sb-item-body class=\"accordion-content\">\r\n              <div class=\"accordion-desc\">\r\n                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more .</p>\r\n              </div>\r\n            </sb-item-body>\r\n          </sb-item>\r\n          <sb-item class=\"accordion-panel\">\r\n            <sb-item-head class=\"accordion-msg\">Lorem Message 3</sb-item-head>\r\n            <sb-item-body class=\"accordion-content\">\r\n              <div class=\"accordion-desc\">\r\n                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more .</p>\r\n              </div>\r\n            </sb-item-body>\r\n          </sb-item>\r\n        </squeezebox>\r\n      </app-card>\r\n    </div>-->\r\n  </div>\r\n  <!-- row end -->\r\n  <!-- row start -->\r\n  <div class=\"row\">\r\n    <!-- Multiple Open Accordion start -->\r\n    <!--<div class=\"col-xl-6\">\r\n      <app-card [title]=\"'SCALE ACCORDION'\" [blockClass]=\"'accordion-block scale-accordion'\">\r\n        <squeezebox [multiple]=\"false\">\r\n          <sb-item class=\"accordion-panel\">\r\n            <sb-item-head class=\"accordion-heading accordion-msg\">Lorem Message 1</sb-item-head>\r\n            <sb-item-body class=\"accordion-content\">\r\n              <div class=\"accordion-desc\">\r\n                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more .</p>\r\n              </div>\r\n            </sb-item-body>\r\n          </sb-item>\r\n          <sb-item class=\"accordion-panel\">\r\n            <sb-item-head class=\"accordion-msg\">Lorem Message 2</sb-item-head>\r\n            <sb-item-body class=\"accordion-content\">\r\n              <div class=\"accordion-desc\">\r\n                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more .</p>\r\n              </div>\r\n            </sb-item-body>\r\n          </sb-item>\r\n          <sb-item [collapsed]=\"false\" class=\"accordion-panel\">\r\n            <sb-item-head class=\"accordion-msg\">Lorem Message 3</sb-item-head>\r\n            <sb-item-body class=\"accordion-content\">\r\n              <div class=\"accordion-desc\">\r\n                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more .</p>\r\n              </div>\r\n            </sb-item-body>\r\n          </sb-item>\r\n        </squeezebox>\r\n      </app-card>\r\n    </div>-->\r\n\r\n    <!--<div class=\"col-xl-6\">\r\n      <app-card [title]=\"'COLOR ACCORDION'\" [blockClass]=\"'accordion-block'\">\r\n        <squeezebox [multiple]=\"false\">\r\n          <sb-item [collapsed]=\"false\" class=\"accordion-panel\">\r\n            <sb-item-head class=\"accordion-heading bg-primary accordion-msg\">Lorem Message 1</sb-item-head>\r\n            <sb-item-body class=\"accordion-content\">\r\n              <div class=\"accordion-desc\">\r\n                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more .</p>\r\n              </div>\r\n            </sb-item-body>\r\n          </sb-item>\r\n          <sb-item class=\"accordion-panel\">\r\n            <sb-item-head class=\"accordion-heading bg-danger accordion-msg\">Lorem Message 2</sb-item-head>\r\n            <sb-item-body class=\"accordion-content\">\r\n              <div class=\"accordion-desc\">\r\n                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more .</p>\r\n              </div>\r\n            </sb-item-body>\r\n          </sb-item>\r\n          <sb-item class=\"accordion-panel\">\r\n            <sb-item-head class=\"accordion-heading bg-success accordion-msg\">Lorem Message 3</sb-item-head>\r\n            <sb-item-body class=\"accordion-content\">\r\n              <div class=\"accordion-desc\">\r\n                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more .</p>\r\n              </div>\r\n            </sb-item-body>\r\n          </sb-item>\r\n        </squeezebox>\r\n      </app-card>\r\n    </div>-->\r\n  </div>\r\n  <!-- row end -->\r\n\r\n  <!-- Row start -->\r\n  <div class=\"row\">\r\n    <!-- Multiple Open Accordion start -->\r\n    <div class=\"col-xl-6\">\r\n      <app-card [title]=\"'Bootstrap - All Close Accordion'\" [blockClass]=\"'accordion-block'\" [cardOptionBlock]=\"true\">\r\n        <ngb-accordion [closeOthers]=\"true\" #acc=\"ngbAccordion\" class=\"ngb-accordion\">\r\n          <ngb-panel id=\"ngb-close-p1\" title=\"Lorem Message 1\">\r\n            <ng-template ngbPanelContent>\r\n              <p>\r\n                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has\r\n                survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset\r\n                sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.\r\n              </p>\r\n            </ng-template>\r\n          </ngb-panel>\r\n          <ngb-panel id=\"ngb-close-p2\" title=\"Lorem Message 2\">\r\n            <ng-template ngbPanelContent>\r\n              <p>\r\n                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has\r\n                survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset\r\n                sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.\r\n              </p>\r\n            </ng-template>\r\n          </ngb-panel>\r\n          <ngb-panel id=\"ngb-close-p3\" title=\"Lorem Message 3\">\r\n            <ng-template ngbPanelContent>\r\n              <p>\r\n                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has\r\n                survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset\r\n                sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.\r\n              </p>\r\n            </ng-template>\r\n          </ngb-panel>\r\n        </ngb-accordion>\r\n      </app-card>\r\n    </div>\r\n    <!-- Multiple Open Accordion ends -->\r\n    <!-- Single Open Accordion start -->\r\n    <div class=\"col-xl-6\">\r\n      <app-card [title]=\"'Bootstrap - All Open Accordion'\" [blockClass]=\"'accordion-block'\" [cardOptionBlock]=\"true\">\r\n        <ngb-accordion #acc=\"ngbAccordion\" activeIds=\"ngb-open-p1\" class=\"ngb-accordion\">\r\n          <ngb-panel id=\"ngb-open-p1\" title=\"Lorem Message 1\">\r\n            <ng-template ngbPanelContent>\r\n              <p>\r\n                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has\r\n                survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset\r\n                sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.\r\n              </p>\r\n            </ng-template>\r\n          </ngb-panel>\r\n          <ngb-panel id=\"ngb-open-p2\" title=\"Lorem Message 2\">\r\n            <ng-template ngbPanelContent>\r\n              <p>\r\n                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has\r\n                survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset\r\n                sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.\r\n              </p>\r\n            </ng-template>\r\n          </ngb-panel>\r\n          <ngb-panel id=\"ngb-open-p3\" title=\"Lorem Message 3\">\r\n            <ng-template ngbPanelContent>\r\n              <p>\r\n                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has\r\n                survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset\r\n                sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.\r\n              </p>\r\n            </ng-template>\r\n          </ngb-panel>\r\n        </ngb-accordion>\r\n      </app-card>\r\n    </div>\r\n    <!-- Single Open Accordion ends -->\r\n  </div>\r\n  <!-- Row end -->\r\n  <div class=\"row\">\r\n    <div class=\"col-sm-12\">\r\n      <app-card [title]=\"'Bootstrap - Color Accordion'\" [blockClass]=\"'accordion-block'\" [cardOptionBlock]=\"true\">\r\n        <ngb-accordion [closeOthers]=\"true\" #acc=\"ngbAccordion\" activeIds=\"ngb-color-p1\" class=\"ngb-accordion color-accordion\">\r\n          <ngb-panel id=\"ngb-color-p1\" title=\"Lorem Message 1\">\r\n            <ng-template ngbPanelContent>\r\n              <p>\r\n                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has\r\n                survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset\r\n                sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.\r\n              </p>\r\n            </ng-template>\r\n          </ngb-panel>\r\n          <ngb-panel id=\"ngb-color-p2\" title=\"Lorem Message 2\">\r\n            <ng-template ngbPanelContent>\r\n              <p>\r\n                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has\r\n                survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset\r\n                sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.\r\n              </p>\r\n            </ng-template>\r\n          </ngb-panel>\r\n          <ngb-panel id=\"ngb-color-p3\" title=\"Lorem Message 3\">\r\n            <ng-template ngbPanelContent>\r\n              <p>\r\n                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has\r\n                survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset\r\n                sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.\r\n              </p>\r\n            </ng-template>\r\n          </ngb-panel>\r\n        </ngb-accordion>\r\n      </app-card>\r\n    </div>\r\n  </div>\r\n\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/theme/ui-elements/basic/accordion/accordion.component.scss":
/*!****************************************************************************!*\
  !*** ./src/app/theme/ui-elements/basic/accordion/accordion.component.scss ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3RoZW1lL3VpLWVsZW1lbnRzL2Jhc2ljL2FjY29yZGlvbi9hY2NvcmRpb24uY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/theme/ui-elements/basic/accordion/accordion.component.ts":
/*!**************************************************************************!*\
  !*** ./src/app/theme/ui-elements/basic/accordion/accordion.component.ts ***!
  \**************************************************************************/
/*! exports provided: AccordionComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AccordionComponent", function() { return AccordionComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AccordionComponent = /** @class */ (function () {
    function AccordionComponent() {
    }
    AccordionComponent.prototype.ngOnInit = function () {
    };
    AccordionComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-accordion',
            template: __webpack_require__(/*! ./accordion.component.html */ "./src/app/theme/ui-elements/basic/accordion/accordion.component.html"),
            styles: [__webpack_require__(/*! ./accordion.component.scss */ "./src/app/theme/ui-elements/basic/accordion/accordion.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], AccordionComponent);
    return AccordionComponent;
}());



/***/ }),

/***/ "./src/app/theme/ui-elements/basic/accordion/accordion.module.ts":
/*!***********************************************************************!*\
  !*** ./src/app/theme/ui-elements/basic/accordion/accordion.module.ts ***!
  \***********************************************************************/
/*! exports provided: AccordionModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AccordionModule", function() { return AccordionModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _accordion_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./accordion.component */ "./src/app/theme/ui-elements/basic/accordion/accordion.component.ts");
/* harmony import */ var _accordion_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./accordion-routing.module */ "./src/app/theme/ui-elements/basic/accordion/accordion-routing.module.ts");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../shared/shared.module */ "./src/app/shared/shared.module.ts");






/*import {SqueezeBoxModule} from 'squeezebox';*/
var AccordionModule = /** @class */ (function () {
    function AccordionModule() {
    }
    AccordionModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _accordion_routing_module__WEBPACK_IMPORTED_MODULE_4__["AccordionRoutingModule"],
                _shared_shared_module__WEBPACK_IMPORTED_MODULE_5__["SharedModule"],
            ],
            declarations: [_accordion_component__WEBPACK_IMPORTED_MODULE_3__["AccordionComponent"]]
        })
    ], AccordionModule);
    return AccordionModule;
}());



/***/ })

}]);
//# sourceMappingURL=accordion-accordion-module.js.map