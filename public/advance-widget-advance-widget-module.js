(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["advance-widget-advance-widget-module"],{

/***/ "./src/app/theme/widget/advance-widget/advance-widget-routing.module.ts":
/*!******************************************************************************!*\
  !*** ./src/app/theme/widget/advance-widget/advance-widget-routing.module.ts ***!
  \******************************************************************************/
/*! exports provided: AdvanceWidgetRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdvanceWidgetRoutingModule", function() { return AdvanceWidgetRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _advance_widget_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./advance-widget.component */ "./src/app/theme/widget/advance-widget/advance-widget.component.ts");




var routes = [
    {
        path: '',
        component: _advance_widget_component__WEBPACK_IMPORTED_MODULE_3__["AdvanceWidgetComponent"],
        data: {
            title: 'Advance Widget',
            icon: 'icon-view-grid',
            caption: 'lorem ipsum dolor sit amet, consectetur adipisicing elit',
            status: true
        }
    }
];
var AdvanceWidgetRoutingModule = /** @class */ (function () {
    function AdvanceWidgetRoutingModule() {
    }
    AdvanceWidgetRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AdvanceWidgetRoutingModule);
    return AdvanceWidgetRoutingModule;
}());



/***/ }),

/***/ "./src/app/theme/widget/advance-widget/advance-widget.component.html":
/*!***************************************************************************!*\
  !*** ./src/app/theme/widget/advance-widget/advance-widget.component.html ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"page-body\">\r\n  <div class=\"row\">\r\n\r\n    <!-- seo analytics start -->\r\n    <div class=\"col-xl-3 col-md-6\">\r\n      <div class=\"card\">\r\n        <div class=\"card-block\">\r\n          <h3>20500</h3>\r\n          <p class=\"text-muted\">Site Analysis</p>\r\n          <div id=\"seo-anlytics1\" style=\"height:50px\"></div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"col-xl-3 col-md-6\">\r\n      <div class=\"card\">\r\n        <div class=\"card-block\">\r\n          <h3>20500</h3>\r\n          <p class=\"text-muted\">Total Sales</p>\r\n          <div id=\"seo-anlytics2\" style=\"height:50px\"></div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"col-xl-3 col-md-6\">\r\n      <div class=\"card\">\r\n        <div class=\"card-block\">\r\n          <h3>28000</h3>\r\n          <p class=\"text-muted\">Total Visits</p>\r\n          <div id=\"seo-anlytics3\" style=\"height:50px\"></div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"col-xl-3 col-md-6\">\r\n      <div class=\"card\">\r\n        <div class=\"card-block\">\r\n          <h3>59600</h3>\r\n          <p class=\"text-muted\">Total Usage</p>\r\n          <div id=\"seo-anlytics4\" style=\"height:50px\"></div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <!-- seo analytics end -->\r\n\r\n    <!-- sale card start -->\r\n    <div class=\"col-xl-3 col-md-6\">\r\n      <div class=\"card bg-c-blue total-card\">\r\n        <div class=\"card-block\">\r\n          <div class=\"text-left\">\r\n            <h4>4000</h4>\r\n            <p class=\"m-0\">Total Sales</p>\r\n          </div>\r\n          <span class=\"label bg-c-blue value-badges\">12%</span>\r\n        </div>\r\n        <div id=\"total-value-graph-1\" style=\"height:100px;\"></div>\r\n      </div>\r\n    </div>\r\n    <div class=\"col-xl-3 col-md-6\">\r\n      <div class=\"card bg-c-red total-card\">\r\n        <div class=\"card-block\">\r\n          <div class=\"text-left\">\r\n            <h4>489</h4>\r\n            <p class=\"m-0\">Total Comment</p>\r\n          </div>\r\n          <span class=\"label bg-c-red value-badges\">15%</span>\r\n        </div>\r\n        <div id=\"total-value-graph-2\" style=\"height:100px;\"></div>\r\n      </div>\r\n    </div>\r\n    <div class=\"col-xl-3 col-md-6\">\r\n      <div class=\"card bg-c-green total-card\">\r\n        <div class=\"card-block\">\r\n          <div class=\"text-left\">\r\n            <h4>$5782</h4>\r\n            <p class=\"m-0\">Income Status</p>\r\n          </div>\r\n          <span class=\"label bg-c-green value-badges\">20%</span>\r\n        </div>\r\n        <div id=\"total-value-graph-3\" style=\"height:100px;\"></div>\r\n      </div>\r\n    </div>\r\n    <div class=\"col-xl-3 col-md-6\">\r\n      <div class=\"card bg-c-yellow total-card\">\r\n        <div class=\"card-block\">\r\n          <div class=\"text-left\">\r\n            <h4>378</h4>\r\n            <p class=\"m-0\">Total Visitors</p>\r\n          </div>\r\n          <span class=\"label bg-c-yellow value-badges\">23%</span>\r\n        </div>\r\n        <div id=\"total-value-graph-4\" style=\"height:100px;\"></div>\r\n      </div>\r\n    </div>\r\n    <!-- sale card end -->\r\n\r\n    <!-- Profit Visitor Start -->\r\n    <div class=\"col-md-6 col-xl-4 \">\r\n      <div class=\"card \">\r\n        <div class=\"card-block \">\r\n          <h2 class=\"text-center f-w-400 \">$45,567</h2>\r\n          <p class=\"text-center text-muted \">Monthly Profit</p>\r\n          <div id=\"monthlyprofit-1\" style=\"height:30px\"></div>\r\n          <div class=\"m-t-20\">\r\n            <div class=\"row \">\r\n              <div class=\"col-6 text-center \">\r\n                <h6 class=\"f-20 f-w-400\">$6,234</h6>\r\n                <p class=\"text-muted f-14 m-b-0\">Today</p>\r\n              </div>\r\n              <div class=\"col-6 text-center \">\r\n                <h6 class=\"f-20 f-w-400\">$4,387</h6>\r\n                <p class=\"text-muted f-14 m-b-0\">Yesterday</p>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"col-md-6 col-xl-4 \">\r\n      <div class=\"card \">\r\n        <div class=\"card-block \">\r\n          <h2 class=\"text-center f-w-400 \">2,413</h2>\r\n          <p class=\"text-center text-muted \">Total Sales</p>\r\n          <div id=\"monthlyprofit-2\" style=\"height:30px\"></div>\r\n          <div class=\"m-t-20\">\r\n            <div class=\"row \">\r\n              <div class=\"col-6 text-center \">\r\n                <h6 class=\"f-20 f-w-400\">1578</h6>\r\n                <p class=\"text-muted f-14 m-b-0\">Today</p>\r\n              </div>\r\n              <div class=\"col-6 text-center \">\r\n                <h6 class=\"f-20 f-w-400\">1028</h6>\r\n                <p class=\"text-muted f-14 m-b-0\">Yesterday</p>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"col-md-12 col-xl-4 \">\r\n      <div class=\"card \">\r\n        <div class=\"card-block \">\r\n          <h2 class=\"text-center f-w-400 \">8,421</h2>\r\n          <p class=\"text-center text-muted \">Unique Visitors</p>\r\n          <div id=\"monthlyprofit-3\" style=\"height:30px\"></div>\r\n          <div class=\"m-t-20\">\r\n            <div class=\"row \">\r\n              <div class=\"col-6 text-center \">\r\n                <h6 class=\"f-20 f-w-400\">2,849</h6>\r\n                <p class=\"text-muted f-14 m-b-0\">Today</p>\r\n              </div>\r\n              <div class=\"col-6 text-center \">\r\n                <h6 class=\"f-20 f-w-400\">3,587</h6>\r\n                <p class=\"text-muted f-14 m-b-0\">Yesterday</p>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <!-- Profit Visitor End -->\r\n\r\n    <!-- seo start -->\r\n    <div class=\"col-xl-6 col-md-12\">\r\n      <app-card [title]=\"'Allocation'\">\r\n        <div class=\"row\">\r\n          <div class=\"col-sm-8\">\r\n            <div id=\"allocation-map\" style=\"height:250px\"></div>\r\n          </div>\r\n          <div class=\"col-sm-4\">\r\n            <div id=\"allocation-chart\" style=\"height:250px\"></div>\r\n          </div>\r\n        </div>\r\n      </app-card>\r\n    </div>\r\n    <div class=\"col-xl-6 col-md-12\">\r\n      <div class=\"card\">\r\n        <div class=\"card-block\">\r\n          <div class=\"row align-items-center\">\r\n            <div class=\"col-6\">\r\n              <h3>$16,756</h3>\r\n              <h6 class=\"text-muted m-b-0\">Visits<i class=\"fa fa-caret-down text-c-red m-l-10\"></i></h6>\r\n            </div>\r\n            <div class=\"col-6\">\r\n              <div id=\"seo-chart1\" style=\"height:50px\"></div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div class=\"card\">\r\n        <div class=\"card-block\">\r\n          <div class=\"row align-items-center\">\r\n            <div class=\"col-6\">\r\n              <h3>49.54%</h3>\r\n              <h6 class=\"text-muted m-b-0\">Bounce Rate<i class=\"fa fa-caret-up text-c-green m-l-10\"></i></h6>\r\n            </div>\r\n            <div class=\"col-6\">\r\n              <div id=\"seo-chart2\" style=\"height:50px\"></div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div class=\"card\">\r\n        <div class=\"card-block\">\r\n          <div class=\"row align-items-center\">\r\n            <div class=\"col-6\">\r\n              <h3>1,62,564</h3>\r\n              <h6 class=\"text-muted m-b-0\">Products<i class=\"fa fa-caret-down text-c-red m-l-10\"></i></h6>\r\n            </div>\r\n            <div class=\"col-6\">\r\n              <div id=\"seo-chart3\" style=\"height:50px\"></div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <!-- seo end -->\r\n\r\n    <!-- Client Map Start -->\r\n    <div class=\"col-md-6 col-xl-4\">\r\n      <div class=\"card client-map\">\r\n        <div class=\"card-block\">\r\n          <div class=\"client-detail\">\r\n            <div class=\"client-profile\">\r\n              <img src=\"assets/images/avatar-2.jpg\" alt=\"\">\r\n            </div>\r\n            <div class=\"client-contain\">\r\n              <h5>Gregory Johnes</h5>\r\n              <a href=\"#!\" class=\"text-muted\">gregory@demo.com</a>\r\n              <p class=\"text-muted m-0 p-t-10\">Product Manager</p>\r\n            </div>\r\n          </div>\r\n          <div class=\"\">\r\n            <div class=\"client-card-box\">\r\n              <div class=\"row\">\r\n                <div class=\"col-6 text-center client-border p-10\">\r\n                  <p class=\"text-muted m-0\">Invites</p>\r\n                  <span class=\"text-c-blue f-20 f-w-600\">345</span>\r\n                </div>\r\n                <div class=\"col-6 text-center p-10\">\r\n                  <p class=\"text-muted m-0\">Pending</p>\r\n                  <span class=\"text-c-blue f-20 f-w-600\">12</span>\r\n                </div>\r\n              </div>\r\n              <div class=\"col-sm-12 client-border-card p-t-10\">\r\n                <p>Overall Activity</p>\r\n              </div>\r\n              <div id=\"client-map-1\" style=\"height:70px\"></div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"col-md-6 col-xl-4\">\r\n      <div class=\"card client-map\">\r\n        <div class=\"card-block\">\r\n          <div class=\"client-detail\">\r\n            <div class=\"client-profile\">\r\n              <img src=\"assets/images/avatar-4.jpg\" alt=\"\">\r\n            </div>\r\n            <div class=\"client-contain\">\r\n              <h5>Gregory Johnes</h5>\r\n              <a href=\"#!\" class=\"text-muted\">gregory@demo.com</a>\r\n              <p class=\"text-muted m-0 p-t-10\">Product Manager</p>\r\n            </div>\r\n          </div>\r\n          <div class=\"\">\r\n            <div class=\"client-card-box\">\r\n              <div class=\"row\">\r\n                <div class=\"col-6 text-center client-border p-10\">\r\n                  <p class=\"text-muted m-0\">Invites</p>\r\n                  <span class=\"text-c-red f-20 f-w-600\">845</span>\r\n                </div>\r\n                <div class=\"col-6 text-center p-10\">\r\n                  <p class=\"text-muted m-0\">Pending</p>\r\n                  <span class=\"text-c-red f-20 f-w-600\">02</span>\r\n                </div>\r\n              </div>\r\n              <div class=\"col-sm-12 client-border-card p-t-10\">\r\n                <p>Overall Activity</p>\r\n              </div>\r\n              <div id=\"client-map-2\" style=\"height:70px\"></div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"col-md-12 col-xl-4\">\r\n      <div class=\"card client-map\">\r\n        <div class=\"card-block\">\r\n          <div class=\"client-detail\">\r\n            <div class=\"client-profile\">\r\n              <img src=\"assets/images/avatar-3.jpg\" alt=\"\">\r\n            </div>\r\n            <div class=\"client-contain\">\r\n              <h5>Gregory Johnes</h5>\r\n              <a href=\"#!\" class=\"text-muted\">gregory@demo.com</a>\r\n              <p class=\"text-muted m-0 p-t-10\">Product Manager</p>\r\n            </div>\r\n          </div>\r\n          <div class=\"\">\r\n            <div class=\"client-card-box\">\r\n              <div class=\"row\">\r\n                <div class=\"col-6 text-center client-border p-10\">\r\n                  <p class=\"text-muted m-0\">Invites</p>\r\n                  <span class=\"text-c-green f-20 f-w-600\">812</span>\r\n                </div>\r\n                <div class=\"col-6 text-center p-10\">\r\n                  <p class=\"text-muted m-0\">Pending</p>\r\n                  <span class=\"text-c-green f-20 f-w-600\">00</span>\r\n                </div>\r\n              </div>\r\n              <div class=\"col-sm-12 client-border-card p-t-10\">\r\n                <p>Overall Activity</p>\r\n              </div>\r\n              <div id=\"client-map-3\" style=\"height:70px\"></div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <!-- Client Map End -->\r\n\r\n    <!-- income start -->\r\n    <div class=\"col-xl-4 col-md-6\">\r\n      <div class=\"card\">\r\n        <div class=\"card-header\">\r\n          <h5>Total Leads</h5>\r\n        </div>\r\n        <div class=\"card-block\">\r\n          <p class=\"text-c-green f-w-500\"><i class=\"fa fa-caret-up m-r-15\"></i> 18% High than last month</p>\r\n          <div class=\"row\">\r\n            <div class=\"col-4 b-r-default\">\r\n              <p class=\"text-muted m-b-5\">Overall</p>\r\n              <h5>76.12%</h5>\r\n            </div>\r\n            <div class=\"col-4 b-r-default\">\r\n              <p class=\"text-muted m-b-5\">Monthly</p>\r\n              <h5>16.40%</h5>\r\n            </div>\r\n            <div class=\"col-4\">\r\n              <p class=\"text-muted m-b-5\">Day</p>\r\n              <h5>4.56%</h5>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <div id=\"tot-lead\" style=\"height:150px\"></div>\r\n      </div>\r\n    </div>\r\n    <div class=\"col-xl-4 col-md-6\">\r\n      <div class=\"card\">\r\n        <div class=\"card-header\">\r\n          <h5>Total Vendors</h5>\r\n        </div>\r\n        <div class=\"card-block\">\r\n          <p class=\"text-c-red f-w-500\"><i class=\"fa fa-caret-down m-r-15\"></i> 24% High than last month</p>\r\n          <div class=\"row\">\r\n            <div class=\"col-4 b-r-default\">\r\n              <p class=\"text-muted m-b-5\">Overall</p>\r\n              <h5>68.52%</h5>\r\n            </div>\r\n            <div class=\"col-4 b-r-default\">\r\n              <p class=\"text-muted m-b-5\">Monthly</p>\r\n              <h5>28.90%</h5>\r\n            </div>\r\n            <div class=\"col-4\">\r\n              <p class=\"text-muted m-b-5\">Day</p>\r\n              <h5>13.50%</h5>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <div id=\"tot-vendor\" style=\"height:150px\"></div>\r\n      </div>\r\n    </div>\r\n    <div class=\"col-xl-4 col-md-12\">\r\n      <div class=\"card\">\r\n        <div class=\"card-header\">\r\n          <h5>Invoice Generate</h5>\r\n        </div>\r\n        <div class=\"card-block\">\r\n          <p class=\"text-c-green f-w-500\"><i class=\"fa fa-caret-up m-r-15\"></i> 20% High than last month</p>\r\n          <div class=\"row\">\r\n            <div class=\"col-4 b-r-default\">\r\n              <p class=\"text-muted m-b-5\">Overall</p>\r\n              <h5>68.52%</h5>\r\n            </div>\r\n            <div class=\"col-4 b-r-default\">\r\n              <p class=\"text-muted m-b-5\">Monthly</p>\r\n              <h5>28.90%</h5>\r\n            </div>\r\n            <div class=\"col-4\">\r\n              <p class=\"text-muted m-b-5\">Day</p>\r\n              <h5>13.50%</h5>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <div id=\"invoice-gen\" style=\"height:150px\"></div>\r\n      </div>\r\n    </div>\r\n    <!-- income end -->\r\n\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/theme/widget/advance-widget/advance-widget.component.scss":
/*!***************************************************************************!*\
  !*** ./src/app/theme/widget/advance-widget/advance-widget.component.scss ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3RoZW1lL3dpZGdldC9hZHZhbmNlLXdpZGdldC9hZHZhbmNlLXdpZGdldC5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/theme/widget/advance-widget/advance-widget.component.ts":
/*!*************************************************************************!*\
  !*** ./src/app/theme/widget/advance-widget/advance-widget.component.ts ***!
  \*************************************************************************/
/*! exports provided: AdvanceWidgetComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdvanceWidgetComponent", function() { return AdvanceWidgetComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _assets_charts_amchart_amcharts_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../assets/charts/amchart/amcharts.js */ "./src/assets/charts/amchart/amcharts.js");
/* harmony import */ var _assets_charts_amchart_amcharts_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_assets_charts_amchart_amcharts_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _assets_charts_amchart_gauge_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../assets/charts/amchart/gauge.js */ "./src/assets/charts/amchart/gauge.js");
/* harmony import */ var _assets_charts_amchart_gauge_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_assets_charts_amchart_gauge_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _assets_charts_amchart_pie_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../assets/charts/amchart/pie.js */ "./src/assets/charts/amchart/pie.js");
/* harmony import */ var _assets_charts_amchart_pie_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_assets_charts_amchart_pie_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _assets_charts_amchart_serial_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../assets/charts/amchart/serial.js */ "./src/assets/charts/amchart/serial.js");
/* harmony import */ var _assets_charts_amchart_serial_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_assets_charts_amchart_serial_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _assets_charts_amchart_light_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../assets/charts/amchart/light.js */ "./src/assets/charts/amchart/light.js");
/* harmony import */ var _assets_charts_amchart_light_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_assets_charts_amchart_light_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _assets_charts_amchart_ammap_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../assets/charts/amchart/ammap.js */ "./src/assets/charts/amchart/ammap.js");
/* harmony import */ var _assets_charts_amchart_ammap_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_assets_charts_amchart_ammap_js__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _assets_charts_amchart_usaLow_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../assets/charts/amchart/usaLow.js */ "./src/assets/charts/amchart/usaLow.js");
/* harmony import */ var _assets_charts_amchart_usaLow_js__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_assets_charts_amchart_usaLow_js__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _assets_charts_float_jquery_flot_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../assets/charts/float/jquery.flot.js */ "./src/assets/charts/float/jquery.flot.js");
/* harmony import */ var _assets_charts_float_jquery_flot_js__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_assets_charts_float_jquery_flot_js__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _assets_charts_float_jquery_flot_categories_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../../assets/charts/float/jquery.flot.categories.js */ "./src/assets/charts/float/jquery.flot.categories.js");
/* harmony import */ var _assets_charts_float_jquery_flot_categories_js__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_assets_charts_float_jquery_flot_categories_js__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _assets_charts_float_curvedLines_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../../assets/charts/float/curvedLines.js */ "./src/assets/charts/float/curvedLines.js");
/* harmony import */ var _assets_charts_float_curvedLines_js__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_assets_charts_float_curvedLines_js__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _assets_charts_float_jquery_flot_tooltip_min_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../../assets/charts/float/jquery.flot.tooltip.min.js */ "./src/assets/charts/float/jquery.flot.tooltip.min.js");
/* harmony import */ var _assets_charts_float_jquery_flot_tooltip_min_js__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_assets_charts_float_jquery_flot_tooltip_min_js__WEBPACK_IMPORTED_MODULE_12__);













var AdvanceWidgetComponent = /** @class */ (function () {
    function AdvanceWidgetComponent() {
        this.chartOption = {
            legend: {
                show: false
            },
            series: {
                label: '',
                curvedLines: {
                    active: true,
                    nrSplinePoints: 20
                },
            },
            tooltip: {
                show: true,
                content: 'x : %x | y : %y'
            },
            grid: {
                hoverable: true,
                borderWidth: 0,
                labelMargin: 0,
                axisMargin: 0,
                minBorderMargin: 0,
            },
            yaxis: {
                min: 0,
                max: 30,
                color: 'transparent',
                font: {
                    size: 0,
                }
            },
            xaxis: {
                color: 'transparent',
                font: {
                    size: 0,
                }
            }
        };
    }
    AdvanceWidgetComponent.prototype.ngOnInit = function () {
        var _this = this;
        setTimeout(function () {
            AmCharts.makeChart('allocation-map', {
                'type': 'map',
                'theme': 'light',
                'colorSteps': 10,
                'dataProvider': {
                    'map': 'usaLow',
                    'areas': [{
                            'id': 'US-AL',
                            'value': 4447100
                        }, {
                            'id': 'US-AK',
                            'value': 626932
                        }, {
                            'id': 'US-AZ',
                            'value': 5130632
                        }, {
                            'id': 'US-AR',
                            'value': 2673400
                        }, {
                            'id': 'US-CA',
                            'value': 33871648
                        }, {
                            'id': 'US-CO',
                            'value': 4301261
                        }, {
                            'id': 'US-CT',
                            'value': 3405565
                        }, {
                            'id': 'US-DE',
                            'value': 783600
                        }, {
                            'id': 'US-FL',
                            'value': 15982378
                        }, {
                            'id': 'US-GA',
                            'value': 8186453
                        }, {
                            'id': 'US-HI',
                            'value': 1211537
                        }, {
                            'id': 'US-ID',
                            'value': 1293953
                        }, {
                            'id': 'US-IL',
                            'value': 12419293
                        }, {
                            'id': 'US-IN',
                            'value': 6080485
                        }, {
                            'id': 'US-IA',
                            'value': 2926324
                        }, {
                            'id': 'US-KS',
                            'value': 2688418
                        }, {
                            'id': 'US-KY',
                            'value': 4041769
                        }, {
                            'id': 'US-LA',
                            'value': 4468976
                        }, {
                            'id': 'US-ME',
                            'value': 1274923
                        }, {
                            'id': 'US-MD',
                            'value': 5296486
                        }, {
                            'id': 'US-MA',
                            'value': 6349097
                        }, {
                            'id': 'US-MI',
                            'value': 9938444
                        }, {
                            'id': 'US-MN',
                            'value': 4919479
                        }, {
                            'id': 'US-MS',
                            'value': 2844658
                        }, {
                            'id': 'US-MO',
                            'value': 5595211
                        }, {
                            'id': 'US-MT',
                            'value': 902195
                        }, {
                            'id': 'US-NE',
                            'value': 1711263
                        }, {
                            'id': 'US-NV',
                            'value': 1998257
                        }, {
                            'id': 'US-NH',
                            'value': 1235786
                        }, {
                            'id': 'US-NJ',
                            'value': 8414350
                        }, {
                            'id': 'US-NM',
                            'value': 1819046
                        }, {
                            'id': 'US-NY',
                            'value': 18976457
                        }, {
                            'id': 'US-NC',
                            'value': 8049313
                        }, {
                            'id': 'US-ND',
                            'value': 642200
                        }, {
                            'id': 'US-OH',
                            'value': 11353140
                        }, {
                            'id': 'US-OK',
                            'value': 3450654
                        }, {
                            'id': 'US-OR',
                            'value': 3421399
                        }, {
                            'id': 'US-PA',
                            'value': 12281054
                        }, {
                            'id': 'US-RI',
                            'value': 1048319
                        }, {
                            'id': 'US-SC',
                            'value': 4012012
                        }, {
                            'id': 'US-SD',
                            'value': 754844
                        }, {
                            'id': 'US-TN',
                            'value': 5689283
                        }, {
                            'id': 'US-TX',
                            'value': 20851820
                        }, {
                            'id': 'US-UT',
                            'value': 2233169
                        }, {
                            'id': 'US-VT',
                            'value': 608827
                        }, {
                            'id': 'US-VA',
                            'value': 7078515
                        }, {
                            'id': 'US-WA',
                            'value': 5894121
                        }, {
                            'id': 'US-WV',
                            'value': 1808344
                        }, {
                            'id': 'US-WI',
                            'value': 5363675
                        }, {
                            'id': 'US-WY',
                            'value': 493782
                        }]
                },
                'areasSettings': {
                    'autoZoom': true
                },
                'export': {
                    'enabled': true
                }
            });
            AmCharts.makeChart('allocation-chart', {
                'type': 'pie',
                'startDuration': 0,
                'theme': 'light',
                'labelRadius': 0,
                'pullOutRadius': 0,
                'labelText': '',
                'colorField': 'color',
                'legend': {
                // 'enabled':false,
                },
                'innerRadius': '70%',
                'dataProvider': [{
                        'country': 'Lithuania',
                        'litres': 501.9,
                        'color': '#85C5E3'
                    }, {
                        'country': 'Czech Republic',
                        'litres': 301.9,
                        'color': '#6AA3C4'
                    }, {
                        'country': 'Ireland',
                        'litres': 201.1,
                        'color': '#6097B9'
                    }, {
                        'country': 'india',
                        'litres': 220.1,
                        'color': '#4E81A4'
                    }],
                'valueField': 'litres',
            });
            $.plot($('#seo-chart1'), [{
                    data: [
                        [0, 0],
                        [1, 10],
                        [2, 20],
                        [3, 10],
                        [4, 27],
                        [5, 15],
                        [6, 20],
                        [7, 24],
                        [8, 20],
                        [9, 16],
                        [10, 18],
                        [11, 10],
                        [12, 20],
                        [13, 10],
                        [14, 27],
                        [15, 20],
                        [16, 10],
                        [17, 15],
                        [18, 12],
                        [19, 27],
                        [20, 20],
                        [21, 15],
                        [22, 0],
                    ],
                    color: '#448aff',
                    lines: {
                        show: true,
                        fill: true,
                        lineWidth: 2
                    },
                    points: {
                        show: true,
                        radius: 3,
                        fill: true,
                        fillColor: '#448aff'
                    },
                    curvedLines: {
                        apply: false,
                    }
                }], _this.chartOption);
            $.plot($('#seo-chart2'), [{
                    data: [
                        [0, 2],
                        [1, 10],
                        [2, 20],
                        [3, 10],
                        [4, 27],
                        [5, 15],
                        [6, 20],
                        [7, 24],
                        [8, 20],
                        [9, 16],
                        [10, 18],
                        [11, 10],
                        [12, 20],
                        [13, 10],
                        [14, 5],
                    ],
                    color: '#9ccc65',
                    bars: {
                        show: true,
                        lineWidth: 1,
                        fill: true,
                        fillColor: {
                            colors: [{
                                    opacity: 1
                                }, {
                                    opacity: 1
                                }]
                        },
                        barWidth: 0.5,
                        align: 'center',
                        horizontal: false
                    },
                    points: {
                        show: false
                    },
                }], _this.chartOption);
            $.plot($('#seo-chart3'), [{
                    data: [
                        [0, 0],
                        [1, 20],
                        [2, 10],
                        [3, 20],
                        [4, 15],
                        [5, 27],
                        [6, 24],
                        [7, 20],
                        [8, 16],
                        [9, 20],
                        [10, 10],
                        [11, 18],
                        [12, 10],
                        [13, 20],
                        [14, 20],
                        [15, 27],
                        [16, 15],
                        [17, 10],
                        [18, 27],
                        [19, 12],
                        [20, 15],
                        [21, 20],
                        [22, 0],
                    ],
                    color: '#ff5252',
                    lines: {
                        show: true,
                        fill: false,
                        lineWidth: 2
                    },
                    points: {
                        show: true,
                        radius: 3,
                        fill: true,
                        fillColor: '#ff5252'
                    },
                    curvedLines: {
                        apply: false,
                    }
                }], _this.chartOption);
            $.plot($('#seo-anlytics1'), [{
                    data: [
                        [0, 10],
                        [1, 25],
                        [2, 15],
                        [3, 26],
                        [4, 15],
                        [5, 15],
                        [6, 20],
                        [7, 25],
                        [8, 20],
                        [9, 25],
                        [10, 10],
                        [11, 12],
                        [12, 27],
                        [13, 1],
                    ],
                    color: '#448aff',
                    lines: {
                        show: true,
                        fill: false,
                        lineWidth: 2
                    },
                    points: {
                        show: true,
                        radius: 3,
                        fill: true,
                        fillColor: '#448aff'
                    },
                    curvedLines: {
                        apply: false,
                    }
                }], _this.chartOption);
            $.plot($('#seo-anlytics2'), [{
                    data: [
                        [0, 10],
                        [1, 15],
                        [2, 25],
                        [3, 15],
                        [4, 26],
                        [5, 20],
                        [6, 15],
                        [7, 20],
                        [8, 25],
                        [9, 10],
                        [10, 25],
                        [11, 27],
                        [12, 12],
                        [13, 1],
                    ],
                    color: '#9ccc65',
                    lines: {
                        show: true,
                        fill: false,
                        lineWidth: 2
                    },
                    points: {
                        show: true,
                        radius: 3,
                        fill: true,
                        fillColor: '#9ccc65'
                    },
                    curvedLines: {
                        apply: false,
                    }
                }], _this.chartOption);
            $.plot($('#seo-anlytics3'), [{
                    data: [
                        [0, 10],
                        [1, 25],
                        [2, 15],
                        [3, 26],
                        [4, 15],
                        [5, 15],
                        [6, 20],
                        [7, 25],
                        [8, 20],
                        [9, 25],
                        [10, 10],
                        [11, 12],
                        [12, 27],
                        [13, 1],
                    ],
                    color: '#ff5252',
                    lines: {
                        show: true,
                        fill: false,
                        lineWidth: 2
                    },
                    points: {
                        show: true,
                        radius: 3,
                        fill: true,
                        fillColor: '#ff5252'
                    },
                    curvedLines: {
                        apply: false,
                    }
                }], _this.chartOption);
            $.plot($('#seo-anlytics4'), [{
                    data: [
                        [0, 10],
                        [1, 15],
                        [2, 25],
                        [3, 15],
                        [4, 26],
                        [5, 20],
                        [6, 15],
                        [7, 20],
                        [8, 25],
                        [9, 10],
                        [10, 25],
                        [11, 27],
                        [12, 12],
                        [13, 1],
                    ],
                    color: '#ffba57',
                    lines: {
                        show: true,
                        fill: false,
                        lineWidth: 2
                    },
                    points: {
                        show: true,
                        radius: 3,
                        fill: true,
                        fillColor: '#ffba57'
                    },
                    curvedLines: {
                        apply: false,
                    }
                }], _this.chartOption);
            $.plot($('#tot-lead'), [{
                    data: [
                        [0, 25],
                        [1, 15],
                        [2, 20],
                        [3, 27],
                        [4, 10],
                        [5, 20],
                        [6, 10],
                        [7, 26],
                        [8, 20],
                        [9, 10],
                        [10, 25],
                        [11, 27],
                        [12, 12],
                        [13, 26],
                    ],
                    color: '#448aff',
                    lines: {
                        show: true,
                        fill: true,
                        lineWidth: 3
                    },
                    points: {
                        show: false,
                    },
                    curvedLines: {
                        apply: false,
                    }
                }], _this.chartOption);
            $.plot($('#tot-vendor'), [{
                    data: [
                        [0, 25],
                        [1, 15],
                        [2, 25],
                        [3, 27],
                        [4, 10],
                        [5, 20],
                        [6, 15],
                        [7, 26],
                        [8, 20],
                        [9, 13],
                        [10, 25],
                        [11, 27],
                        [12, 12],
                        [13, 20],
                    ],
                    color: '#9ccc65',
                    lines: {
                        show: true,
                        fill: true,
                        lineWidth: 3
                    },
                    points: {
                        show: false,
                    },
                    curvedLines: {
                        apply: false,
                    }
                }], _this.chartOption);
            $.plot($('#invoice-gen'), [{
                    data: [
                        [0, 25],
                        [1, 30],
                        [2, 25],
                        [3, 27],
                        [4, 10],
                        [5, 20],
                        [6, 15],
                        [7, 26],
                        [8, 10],
                        [9, 13],
                        [10, 25],
                        [11, 27],
                        [12, 12],
                        [13, 27],
                    ],
                    color: '#ff5252',
                    lines: {
                        show: true,
                        fill: true,
                        lineWidth: 3
                    },
                    points: {
                        show: false,
                    },
                    curvedLines: {
                        apply: false,
                    }
                }], _this.chartOption);
            $.plot($('#total-value-graph-1'), [{
                    data: [
                        [0, 20],
                        [20, 10],
                        [35, 18],
                        [50, 12],
                        [65, 25],
                        [75, 10],
                        [90, 20],
                    ],
                    color: '#fff',
                    lines: {
                        show: true,
                        fill: true,
                        lineWidth: 3
                    },
                    points: {
                        show: false
                    },
                    // curve the line  (old pre 1.0.0 plotting function)
                    curvedLines: {
                        apply: true,
                    }
                }], _this.chartOption);
            $.plot($('#total-value-graph-2'), [{
                    data: [
                        [0, 10],
                        [20, 20],
                        [35, 18],
                        [50, 25],
                        [65, 12],
                        [75, 10],
                        [90, 20],
                    ],
                    color: '#fff',
                    lines: {
                        show: true,
                        fill: true,
                        lineWidth: 3
                    },
                    points: {
                        show: false
                    },
                    // curve the line  (old pre 1.0.0 plotting function)
                    curvedLines: {
                        apply: true,
                    }
                }], _this.chartOption);
            $.plot($('#total-value-graph-3'), [{
                    data: [
                        [0, 20],
                        [20, 10],
                        [35, 25],
                        [50, 18],
                        [65, 18],
                        [75, 10],
                        [90, 12],
                    ],
                    color: '#fff',
                    lines: {
                        show: true,
                        fill: true,
                        lineWidth: 3
                    },
                    points: {
                        show: false
                    },
                    // curve the line  (old pre 1.0.0 plotting function)
                    curvedLines: {
                        apply: true,
                    }
                }], _this.chartOption);
            $.plot($('#total-value-graph-4'), [{
                    data: [
                        [0, 18],
                        [20, 10],
                        [35, 20],
                        [50, 10],
                        [65, 12],
                        [75, 25],
                        [90, 20],
                    ],
                    color: '#fff',
                    lines: {
                        show: true,
                        fill: true,
                        lineWidth: 3
                    },
                    points: {
                        show: false
                    },
                    // curve the line  (old pre 1.0.0 plotting function)
                    curvedLines: {
                        apply: true,
                    }
                }], _this.chartOption);
            $.plot($('#client-map-1'), [{
                    data: [
                        [0, 20],
                        [20, 10],
                        [35, 18],
                        [50, 12],
                        [65, 25],
                        [75, 10],
                        [90, 20],
                    ],
                    color: '#448aff',
                    lines: {
                        show: true,
                        fill: true,
                        lineWidth: 3
                    },
                    points: {
                        show: false
                    },
                    // curve the line  (old pre 1.0.0 plotting function)
                    curvedLines: {
                        apply: true,
                    }
                }], _this.chartOption);
            $.plot($('#client-map-2'), [{
                    data: [
                        [0, 0],
                        [1, 10],
                        [2, 20],
                        [3, 10],
                        [4, 27],
                        [5, 15],
                        [6, 20],
                        [7, 24],
                        [8, 20],
                        [9, 16],
                        [10, 18],
                        [11, 10],
                        [12, 20],
                        [13, 10],
                        [14, 27],
                        [15, 20],
                        [16, 10],
                        [17, 15],
                        [18, 12],
                        [19, 27],
                        [20, 20],
                        [21, 15],
                        [22, 0],
                    ],
                    color: '#ff5252',
                    lines: {
                        show: true,
                        fill: true,
                        lineWidth: 2
                    },
                    points: {
                        show: true,
                        radius: 3,
                        fill: true,
                        fillColor: '#ff5252'
                    },
                    curvedLines: {
                        apply: false,
                    }
                }], _this.chartOption);
            $.plot($('#client-map-3'), [{
                    data: [
                        [0, 2],
                        [1, 10],
                        [2, 20],
                        [3, 10],
                        [4, 27],
                        [5, 15],
                        [6, 20],
                        [7, 24],
                        [8, 20],
                        [9, 16],
                        [10, 18],
                        [11, 10],
                        [12, 20],
                        [13, 10],
                        [14, 5],
                    ],
                    color: '#9ccc65',
                    bars: {
                        show: true,
                        lineWidth: 1,
                        fill: true,
                        fillColor: {
                            colors: [{
                                    opacity: 1
                                }, {
                                    opacity: 1
                                }]
                        },
                        barWidth: 0.5,
                        align: 'center',
                        horizontal: false
                    },
                    points: {
                        show: false
                    },
                }], _this.chartOption);
            $.plot($('#monthlyprofit-1'), [{
                    data: [
                        [0, 10],
                        [1, 25],
                        [2, 15],
                        [3, 26],
                        [4, 15],
                        [5, 15],
                        [6, 20],
                        [7, 25],
                        [8, 20],
                        [9, 25],
                        [10, 10],
                        [11, 12],
                        [12, 27],
                        [13, 20],
                        [14, 25],
                        [15, 20],
                        [16, 25],
                        [17, 10],
                        [18, 12],
                        [19, 27],
                        [20, 1],
                    ],
                    color: '#448aff',
                    lines: {
                        show: true,
                        fill: true,
                        lineWidth: 2
                    },
                    points: {
                        show: true,
                        radius: 2,
                        fill: true,
                        fillColor: '#448aff'
                    },
                    curvedLines: {
                        apply: false,
                    }
                }], _this.chartOption);
            $.plot($('#monthlyprofit-2'), [{
                    data: [
                        [0, 10],
                        [1, 15],
                        [2, 25],
                        [3, 15],
                        [4, 26],
                        [5, 20],
                        [6, 15],
                        [7, 20],
                        [8, 25],
                        [9, 10],
                        [10, 25],
                        [11, 27],
                        [12, 12],
                        [13, 1],
                    ],
                    color: '#9ccc65',
                    lines: {
                        show: true,
                        fill: true,
                        lineWidth: 2
                    },
                    points: {
                        show: true,
                        radius: 2,
                        fill: true,
                        fillColor: '#9ccc65'
                    },
                    curvedLines: {
                        apply: false,
                    }
                }], _this.chartOption);
            $.plot($('#monthlyprofit-3'), [{
                    data: [
                        [0, 10],
                        [1, 25],
                        [2, 15],
                        [3, 26],
                        [4, 15],
                        [5, 15],
                        [6, 20],
                        [7, 25],
                        [8, 20],
                        [9, 25],
                        [10, 10],
                        [11, 12],
                        [12, 20],
                        [13, 25],
                        [14, 10],
                        [15, 12],
                        [16, 27],
                        [17, 1],
                    ],
                    color: '#ff5252',
                    lines: {
                        show: true,
                        fill: true,
                        lineWidth: 2
                    },
                    points: {
                        show: true,
                        radius: 2,
                        fill: true,
                        fillColor: '#ff5252'
                    },
                    curvedLines: {
                        apply: false,
                    }
                }], _this.chartOption);
        }, 75);
    };
    AdvanceWidgetComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-advance-widget',
            template: __webpack_require__(/*! ./advance-widget.component.html */ "./src/app/theme/widget/advance-widget/advance-widget.component.html"),
            styles: [__webpack_require__(/*! ./advance-widget.component.scss */ "./src/app/theme/widget/advance-widget/advance-widget.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], AdvanceWidgetComponent);
    return AdvanceWidgetComponent;
}());



/***/ }),

/***/ "./src/app/theme/widget/advance-widget/advance-widget.module.ts":
/*!**********************************************************************!*\
  !*** ./src/app/theme/widget/advance-widget/advance-widget.module.ts ***!
  \**********************************************************************/
/*! exports provided: AdvanceWidgetModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdvanceWidgetModule", function() { return AdvanceWidgetModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _advance_widget_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./advance-widget.component */ "./src/app/theme/widget/advance-widget/advance-widget.component.ts");
/* harmony import */ var _advance_widget_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./advance-widget-routing.module */ "./src/app/theme/widget/advance-widget/advance-widget-routing.module.ts");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../shared/shared.module */ "./src/app/shared/shared.module.ts");






var AdvanceWidgetModule = /** @class */ (function () {
    function AdvanceWidgetModule() {
    }
    AdvanceWidgetModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _advance_widget_routing_module__WEBPACK_IMPORTED_MODULE_4__["AdvanceWidgetRoutingModule"],
                _shared_shared_module__WEBPACK_IMPORTED_MODULE_5__["SharedModule"]
            ],
            declarations: [_advance_widget_component__WEBPACK_IMPORTED_MODULE_3__["AdvanceWidgetComponent"]]
        })
    ], AdvanceWidgetModule);
    return AdvanceWidgetModule;
}());



/***/ })

}]);
//# sourceMappingURL=advance-widget-advance-widget-module.js.map