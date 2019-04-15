(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["chart-widget-chart-widget-module"],{

/***/ "./src/app/theme/widget/chart-widget/chart-widget-routing.module.ts":
/*!**************************************************************************!*\
  !*** ./src/app/theme/widget/chart-widget/chart-widget-routing.module.ts ***!
  \**************************************************************************/
/*! exports provided: ChartWidgetRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChartWidgetRoutingModule", function() { return ChartWidgetRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _chart_widget_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./chart-widget.component */ "./src/app/theme/widget/chart-widget/chart-widget.component.ts");




var routes = [
    {
        path: '',
        component: _chart_widget_component__WEBPACK_IMPORTED_MODULE_3__["ChartWidgetComponent"],
        data: {
            title: 'Widget Chart',
            icon: 'icon-view-grid',
            caption: 'More than 100+ widget',
            status: true
        }
    }
];
var ChartWidgetRoutingModule = /** @class */ (function () {
    function ChartWidgetRoutingModule() {
    }
    ChartWidgetRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], ChartWidgetRoutingModule);
    return ChartWidgetRoutingModule;
}());



/***/ }),

/***/ "./src/app/theme/widget/chart-widget/chart-widget.component.html":
/*!***********************************************************************!*\
  !*** ./src/app/theme/widget/chart-widget/chart-widget.component.html ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"page-body\">\r\n  <div class=\"row\">\r\n\r\n    <!-- amount start -->\r\n    <div class=\"col-md-6 col-xl-4\">\r\n      <div class=\"card amount-card o-hidden\">\r\n        <div class=\"card-block\">\r\n          <h2 class=\"f-w-400\">$23,567</h2>\r\n          <p class=\"text-muted f-w-600 f-16\"><span class=\"text-c-blue\">Amount</span> Processed</p>\r\n        </div>\r\n        <div id=\"amount-processed\" style=\"height:50px\"></div>\r\n      </div>\r\n    </div>\r\n    <div class=\"col-md-6 col-xl-4\">\r\n      <div class=\"card amount-card o-hidden\">\r\n        <div class=\"card-block\">\r\n          <h2 class=\"f-w-400\">$14,552</h2>\r\n          <p class=\"text-muted f-w-600 f-16\"><span class=\"text-c-green\">Amount</span> Spent</p>\r\n        </div>\r\n        <div id=\"amount-spent\" style=\"height:50px\"></div>\r\n      </div>\r\n    </div>\r\n    <div class=\"col-md-12 col-xl-4\">\r\n      <div class=\"card amount-card o-hidden\">\r\n        <div class=\"card-block\">\r\n          <h2 class=\"f-w-400\">$31,156</h2>\r\n          <p class=\"text-muted f-w-600 f-16\"><span class=\"text-c-yellow\">Profit</span> Processed\r\n          </p>\r\n        </div>\r\n        <div id=\"profit-processed\" style=\"height:50px\"></div>\r\n      </div>\r\n    </div>\r\n    <!-- amount end -->\r\n\r\n    <!-- seo ecommerce start -->\r\n    <div class=\"col-xl-6 col-md-12\">\r\n      <div class=\"card o-hidden\">\r\n        <div class=\"card-block bg-c-green p-b-0\">\r\n          <div class=\"row text-white\">\r\n            <div class=\"col-auto\">\r\n              <h4 class=\"m-b-5\">$654</h4>\r\n              <h6>+1.65(2.56%)</h6>\r\n            </div>\r\n            <div class=\"col text-right\">\r\n              <h6>Friday</h6>\r\n            </div>\r\n          </div>\r\n          <div id=\"sec-ecommerce-chart-line\" style=\"height:50px\"></div>\r\n          <div class=\"row justify-content-center\">\r\n            <div class=\"col-8\">\r\n              <div id=\"sec-ecommerce-chart-bar\" style=\"height:80px\"></div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <div class=\"card-footer\">\r\n          <h4>$2654.00</h4>\r\n          <p class=\"text-muted\">Sales in Nov.</p>\r\n          <div class=\"row\">\r\n            <div class=\"col\">\r\n              <p class=\"text-muted m-b-5\">From Market</p>\r\n              <h6>$1860.00</h6>\r\n            </div>\r\n            <div class=\"col\">\r\n              <p class=\"text-muted m-b-5\">Referral</p>\r\n              <h6>$500.00</h6>\r\n            </div>\r\n            <div class=\"col\">\r\n              <p class=\"text-muted m-b-5\">Affiliate</p>\r\n              <h6>$294.00</h6>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"col-xl-6 col-md-12\">\r\n      <div class=\"card\">\r\n        <div class=\"card-block\">\r\n          <div class=\"row justify-content-center text-center\">\r\n            <div class=\"col-5\">\r\n              <h6 class=\"text-muted\">Real-Time Visits</h6>\r\n              <h3>53k</h3>\r\n            </div>\r\n            <div class=\"col-5\">\r\n              <h6 class=\"text-muted\">Returning Visitors</h6>\r\n              <h3>10k</h3>\r\n            </div>\r\n          </div>\r\n          <div id=\"seo-ecommerce-barchart\" style=\"height: 170px\"></div>\r\n          <div class=\"row justify-content-center text-center b-t-default m-t-15 p-t-20\">\r\n            <div class=\"col-3 b-r-default\">\r\n              <h5>85%</h5>\r\n              <p class=\"text-muted m-b-0\">Satisfied</p>\r\n            </div>\r\n            <div class=\"col-3 b-r-default\">\r\n              <h5>6%</h5>\r\n              <p class=\"text-muted m-b-0\">Unsatisfied</p>\r\n            </div>\r\n            <div class=\"col-3\">\r\n              <h5>9%</h5>\r\n              <p class=\"text-muted m-b-0\">NA</p>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <!-- seo ecommerce end -->\r\n\r\n    <!-- income start -->\r\n    <div class=\"col-xl-4 col-md-6\">\r\n      <div class=\"card\">\r\n        <div class=\"card-header\">\r\n          <h5>Sale Income</h5>\r\n        </div>\r\n        <div class=\"card-block\">\r\n          <div class=\"row\">\r\n            <div class=\"col-4\">\r\n              <p class=\"text-muted m-b-5\">Overall</p>\r\n              <h6>68.52%</h6>\r\n            </div>\r\n            <div class=\"col-4\">\r\n              <p class=\"text-muted m-b-5\">Monthly</p>\r\n              <h6>28.90%</h6>\r\n            </div>\r\n            <div class=\"col-4\">\r\n              <p class=\"text-muted m-b-5\">Day</p>\r\n              <h6>13.50%</h6>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <div id=\"sal-income\" style=\"height:100px\"></div>\r\n      </div>\r\n    </div>\r\n    <div class=\"col-xl-4 col-md-6\">\r\n      <div class=\"card\">\r\n        <div class=\"card-header\">\r\n          <h5>Rent Income</h5>\r\n        </div>\r\n        <div class=\"card-block\">\r\n          <div class=\"row\">\r\n            <div class=\"col-4\">\r\n              <p class=\"text-muted m-b-5\">Overall</p>\r\n              <h6>68.52%</h6>\r\n            </div>\r\n            <div class=\"col-4\">\r\n              <p class=\"text-muted m-b-5\">Monthly</p>\r\n              <h6>28.90%</h6>\r\n            </div>\r\n            <div class=\"col-4\">\r\n              <p class=\"text-muted m-b-5\">Day</p>\r\n              <h6>13.50%</h6>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <div id=\"rent-income\" style=\"height:100px\"></div>\r\n      </div>\r\n    </div>\r\n    <div class=\"col-xl-4 col-md-12\">\r\n      <div class=\"card\">\r\n        <div class=\"card-header\">\r\n          <h5>Income Analysis</h5>\r\n        </div>\r\n        <div class=\"card-block\">\r\n          <div class=\"row\">\r\n            <div class=\"col-4\">\r\n              <p class=\"text-muted m-b-5\">Overall</p>\r\n              <h6>68.52%</h6>\r\n            </div>\r\n            <div class=\"col-4\">\r\n              <p class=\"text-muted m-b-5\">Monthly</p>\r\n              <h6>28.90%</h6>\r\n            </div>\r\n            <div class=\"col-4\">\r\n              <p class=\"text-muted m-b-5\">Day</p>\r\n              <h6>13.50%</h6>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <div id=\"income-analysis\" style=\"height:100px\"></div>\r\n      </div>\r\n    </div>\r\n    <!-- income end -->\r\n\r\n    <!-- sales start -->\r\n    <div class=\"col-md-12\">\r\n      <div class=\"card\">\r\n        <div class=\"card-block text-center\">\r\n          <div class=\"row\">\r\n            <div class=\"col-xl-3 col-md-6 m-t-10 m-b-10\">\r\n              <h6>Daily Sales</h6>\r\n              <div class=\"row justify-content-center\">\r\n                <div class=\"col-8\">\r\n                  <div id=\"sale-report-1\" style=\"height:150px\"></div>\r\n                </div>\r\n              </div>\r\n              <h5 class=\"m-t-10 m-b-0\"><i class=\"fa fa-caret-up text-c-green m-r-10\"></i>$16524</h5>\r\n            </div>\r\n            <div class=\"col-xl-3 col-md-6 m-t-10 m-b-10\">\r\n              <h6>Weekly Sales</h6>\r\n              <div class=\"row justify-content-center\">\r\n                <div class=\"col-8\">\r\n                  <div id=\"sale-report-2\" style=\"height:150px\"></div>\r\n                </div>\r\n              </div>\r\n              <h5 class=\"m-t-10 m-b-0\"><i class=\"fa fa-caret-down text-c-red m-r-10\"></i>$6423</h5>\r\n            </div>\r\n            <div class=\"col-xl-3 col-md-6 m-t-10 m-b-10\">\r\n              <h6>Monthly Sales</h6>\r\n              <div class=\"row justify-content-center\">\r\n                <div class=\"col-8\">\r\n                  <div id=\"sale-report-3\" style=\"height:150px\"></div>\r\n                </div>\r\n              </div>\r\n              <h5 class=\"m-t-10 m-b-0\"><i class=\"fa fa-caret-up text-c-green m-r-10\"></i>$14524</h5>\r\n            </div>\r\n            <div class=\"col-xl-3 col-md-6 m-t-10 m-b-10\">\r\n              <h6>Yearly Sales</h6>\r\n              <div class=\"row justify-content-center\">\r\n                <div class=\"col-8\">\r\n                  <div id=\"sale-report-4\" style=\"height:150px\"></div>\r\n                </div>\r\n              </div>\r\n              <h5 class=\"m-t-10 m-b-0\"><i class=\"fa fa-caret-down text-c-red m-r-10\"></i>$8652</h5>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <!-- sales end -->\r\n\r\n    <!--  sale analytics start -->\r\n    <div class=\"col-xl-8 col-md-12\">\r\n      <app-card [title]=\"'Sales Analytics'\">\r\n        <div id=\"sales-analytics\" style=\"height: 475px;\"></div>\r\n      </app-card>\r\n    </div>\r\n    <div class=\"col-xl-4 col-md-12\">\r\n      <div class=\"card\">\r\n        <div class=\"card-block\">\r\n          <div class=\"row\">\r\n            <div class=\"col\">\r\n              <h4>$256.23</h4>\r\n              <p class=\"text-muted\">This Month</p>\r\n            </div>\r\n            <div class=\"col-auto\">\r\n              <label class=\"label label-success\">+20%</label>\r\n            </div>\r\n          </div>\r\n          <div id=\"this-month\" style=\"height: 150px;\"></div>\r\n        </div>\r\n      </div>\r\n      <div class=\"card quater-card\">\r\n        <div class=\"card-block\">\r\n          <h6 class=\"text-muted m-b-15\">This Quarter</h6>\r\n          <h4>$3,9452.50</h4>\r\n          <p class=\"text-muted\">$3,9452.50</p>\r\n          <h5>87</h5>\r\n          <p class=\"text-muted\">Online Revenue<span class=\"float-right\">80%</span></p>\r\n          <div class=\"progress\">\r\n            <div class=\"progress-bar bg-c-blue\" style=\"width: 80%\"></div>\r\n          </div>\r\n          <h5 class=\"m-t-15\">68</h5>\r\n          <p class=\"text-muted\">Offline Revenue<span class=\"float-right\">50%</span></p>\r\n          <div class=\"progress\">\r\n            <div class=\"progress-bar bg-c-green\" style=\"width: 50%\"></div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <!--  sale analytics end -->\r\n\r\n    <!-- sale order start -->\r\n    <div class=\"col-xl-4 col-md-6\">\r\n      <div class=\"card o-hidden\">\r\n        <div class=\"card-block bg-c-red text-white\">\r\n          <h6>Sales Per Day <span class=\"float-right\"><i class=\"feather icon-trending-up m-r-15\"></i>3%</span></h6>\r\n          <div id=\"sale-chart1\" style=\"height:150px\"></div>\r\n        </div>\r\n        <div class=\"card-footer text-center\">\r\n          <div class=\"row\">\r\n            <div class=\"col-6 b-r-default\">\r\n              <h4>$4230</h4>\r\n              <p class=\"text-muted m-b-0\">Total Revenue</p>\r\n            </div>\r\n            <div class=\"col-6\">\r\n              <h4>321</h4>\r\n              <p class=\"text-muted m-b-0\">Today Sales</p>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"col-xl-4 col-md-6\">\r\n      <div class=\"card o-hidden\">\r\n        <div class=\"card-block bg-c-green text-white\">\r\n          <h6>Visits<span class=\"float-right\"><i class=\"feather icon-trending-up m-r-15\"></i>9%</span></h6>\r\n          <div id=\"sale-chart2\" style=\"height:150px\"></div>\r\n        </div>\r\n        <div class=\"card-footer text-center\">\r\n          <div class=\"row\">\r\n            <div class=\"col-6 b-r-default\">\r\n              <h4>3562</h4>\r\n              <p class=\"text-muted m-b-0\">Monthly Visits</p>\r\n            </div>\r\n            <div class=\"col-6\">\r\n              <h4>96</h4>\r\n              <p class=\"text-muted m-b-0\">Today Visits</p>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"col-xl-4 col-md-12\">\r\n      <div class=\"card o-hidden\">\r\n        <div class=\"card-block bg-c-blue text-white\">\r\n          <h6>Orders<span class=\"float-right\"><i class=\"feather icon-trending-up m-r-15\"></i>12%</span></h6>\r\n          <div id=\"sale-chart3\" style=\"height:150px\"></div>\r\n        </div>\r\n        <div class=\"card-footer text-center\">\r\n          <div class=\"row\">\r\n            <div class=\"col-6 b-r-default\">\r\n              <h4>1695</h4>\r\n              <p class=\"text-muted m-b-0\">Monthly Orders</p>\r\n            </div>\r\n            <div class=\"col-6\">\r\n              <h4>52</h4>\r\n              <p class=\"text-muted m-b-0\">Today Orders</p>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <!-- sale order end -->\r\n\r\n    <!-- page view prod-sale start -->\r\n    <div class=\"col-md-12 col-xl-6\">\r\n      <app-card [title]=\"'Products Sales'\">\r\n        <div id=\"product-sales-chart\" style=\"height: 300px\"></div>\r\n      </app-card>\r\n    </div>\r\n    <div class=\"col-md-12 col-xl-6\">\r\n      <app-card [title]=\"'Site Analytics'\" [headerClass]=\"'borderless'\">\r\n        <div id=\"seo-ecommerce-linechart\" style=\"height: 300px\"></div>\r\n      </app-card>\r\n    </div>\r\n    <!-- page view prod-sale end -->\r\n\r\n    <!-- income start -->\r\n    <div class=\"col-xl-4 col-md-6\">\r\n      <div class=\"card\">\r\n        <div class=\"card-header borderless\">\r\n          <div class=\"card-header-left\">\r\n            <h5>Power</h5>\r\n          </div>\r\n        </div>\r\n        <div class=\"card-block-big card-power\">\r\n          <h2>2789<span class=\"text-muted m-l-5 f-14\">kw</span></h2>\r\n          <div id=\"power-card-chart1\" style=\"height:75px\"></div>\r\n          <div class=\"row\">\r\n            <div class=\"col col-auto\">\r\n              <div class=\"map-area\">\r\n                <h6 class=\"m-0\">2876 <span> kw</span></h6>\r\n                <p class=\"text-muted m-0\">month</p>\r\n              </div>\r\n            </div>\r\n            <div class=\"col col-auto\">\r\n              <div class=\"map-area\">\r\n                <h6 class=\"m-0\">234 <span> kw</span></h6>\r\n                <p class=\"text-muted m-0\">Today</p>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"col-xl-4 col-md-6\">\r\n      <div class=\"card\">\r\n        <div class=\"card-header borderless\">\r\n          <div class=\"card-header-left\">\r\n            <h5>Water</h5>\r\n          </div>\r\n        </div>\r\n        <div class=\"card-block-big card-power\">\r\n          <h2>7.3<span class=\"text-muted m-l-10 f-14\">m3</span></h2>\r\n          <div id=\"power-card-chart2\" style=\"height:75px\"></div>\r\n          <div class=\"row\">\r\n            <div class=\"col col-auto\">\r\n              <div class=\"map-area\">\r\n                <h6 class=\"m-0\">4.5 <span> m3</span></h6>\r\n                <p class=\"text-muted m-0\">month</p>\r\n              </div>\r\n            </div>\r\n            <div class=\"col col-auto\">\r\n              <div class=\"map-area\">\r\n                <h6 class=\"m-0\">0.5 <span> m3</span></h6>\r\n\r\n                <p class=\"text-muted m-0\">Today</p>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"col-xl-4 col-md-12\">\r\n      <div class=\"card\">\r\n        <div class=\"card-header borderless\">\r\n          <div class=\"card-header-left\">\r\n            <h5>Temperature</h5>\r\n          </div>\r\n        </div>\r\n        <div class=\"card-block-big card-power\">\r\n          <h2>7.3<span class=\"text-muted m-l-10 f-14\">deg</span></h2>\r\n          <div id=\"power-card-chart3\" style=\"height:75px\"></div>\r\n          <div class=\"row\">\r\n            <div class=\"col col-auto\">\r\n              <div class=\"map-area\">\r\n                <h6 class=\"m-0\">4.5 <span> deg</span></h6>\r\n                <p class=\"text-muted m-0\">month</p>\r\n              </div>\r\n            </div>\r\n            <div class=\"col col-auto\">\r\n              <div class=\"map-area\">\r\n                <h6 class=\"m-0\">0.5 <span> deg</span></h6>\r\n\r\n                <p class=\"text-muted m-0\">Today</p>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <!-- income end -->\r\n\r\n    <!--task and avrage value start-->\r\n    <div class=\"col-md-12\">\r\n      <app-card [title]=\"'Revenue'\">\r\n        <div id=\"revenue-map\" style=\"height: 215px;\"></div>\r\n      </app-card>\r\n    </div>\r\n    <!--task and avrage value end-->\r\n\r\n    <!-- sale order start -->\r\n    <div class=\"col-xl-3 col-md-6\">\r\n      <app-card title=\"'Monthly Expense'\">\r\n        <div id=\"monthly-expense\" [style.height]=\"'150px'\"></div>\r\n        <div class=\"row text-center\">\r\n          <div class=\"col-6\"><h6 class=\"text-muted\" id=\"exp-val\"></h6></div>\r\n          <div class=\"col-6\"><h6 class=\"text-muted\">Safe</h6></div>\r\n        </div>\r\n      </app-card>\r\n    </div>\r\n    <div class=\"col-xl-3 col-md-6\">\r\n      <app-card title=\"'Daily Visitors'\">\r\n        <div id=\"daily-visitor\" style=\"height:150px\"></div>\r\n        <div class=\"row text-center\">\r\n          <div class=\"col-6\">\r\n            <h6 class=\"text-muted\">3,652</h6></div>\r\n          <div class=\"col-6\">\r\n            <h6 class=\"text-muted\"><i class=\"fa fa-arrow-up text-c-green m-r-10\"></i>15%</h6></div>\r\n        </div>\r\n      </app-card>\r\n    </div>\r\n    <div class=\"col-xl-3 col-md-6\">\r\n      <app-card title=\"'Daily Sales'\">\r\n        <div id=\"daily-sales\" style=\"height:150px\"></div>\r\n        <h6><span class=\"text-c-blue\">1652</span> Products Sold</h6>\r\n      </app-card>\r\n    </div>\r\n    <div class=\"col-xl-3 col-md-6\">\r\n      <app-card title=\"'Storage Space'\">\r\n        <div id=\"storage-space\" style=\"height:150px\"></div>\r\n        <h6><span class=\"text-c-blue\">1652</span> Products Sold</h6>\r\n      </app-card>\r\n    </div>\r\n    <!-- sale order end -->\r\n\r\n    <!-- real time start -->\r\n    <div class=\"col-xl-8 col-md-12\">\r\n      <app-card [title]=\"'Realtime Data of Visits'\">\r\n        <div id=\"real-time-chart\" [style.height]=\"'330px'\"></div>\r\n      </app-card>\r\n    </div>\r\n    <div class=\"col-xl-4 col-md-12\">\r\n      <app-card [title]=\"'Sales Prediction'\">\r\n        <div class=\"row justify-content-end align-items-center\">\r\n          <div class=\"col-md-6\">\r\n            <h3>$3987</h3>\r\n            <p class=\"text-muted m-b-5\">25% Increased</p>\r\n            <h6>(160-180 Sales)</h6>\r\n          </div>\r\n          <div class=\"col-md-6\">\r\n            <div id=\"sales-prediction-chart\" [style.height]=\"'100px'\"></div>\r\n          </div>\r\n        </div>\r\n      </app-card>\r\n      <app-card [title]=\"'Emails Sent'\">\r\n        <div class=\"row justify-content-end align-items-center\">\r\n          <div class=\"col-md-6\">\r\n            <h6 id=\"opened\" class=\"text-c-blue\">520 Opened</h6>\r\n            <h6 id=\"unopened\" class=\"text-c-red\">70 Unopened</h6>\r\n          </div>\r\n          <div class=\"col-md-6\">\r\n            <div id=\"emails-sent-sales-chart\" [style.height]=\"'100px'\"></div>\r\n          </div>\r\n        </div>\r\n      </app-card>\r\n    </div>\r\n    <!-- real time end -->\r\n\r\n    <!-- project and visit start -->\r\n    <div class=\"col-xl-4 col-md-12\">\r\n      <div class=\"card\">\r\n        <div class=\"card-block bg-c-blue\">\r\n          <div id=\"project-earning\" [style.height]=\"'200px'\"></div>\r\n        </div>\r\n        <div class=\"card-footer\">\r\n          <h6 class=\"text-muted m-b-30 m-t-15\">Total completed project and earning</h6>\r\n          <div class=\"row text-center\">\r\n            <div class=\"col-6 b-r-default\">\r\n              <h6 class=\"text-muted m-b-10\">Completed Projects</h6>\r\n              <h3 class=\"m-b-0\">175</h3>\r\n            </div>\r\n            <div class=\"col-6\">\r\n              <h6 class=\"text-muted m-b-10\">Total Earnings</h6>\r\n              <h3 class=\"m-b-0\">76.6M</h3>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"col-xl-8 col-md-12\">\r\n      <app-card [title]=\"'Realtime Data of Visits'\">\r\n        <div id=\"realtime-visit-chart\" [style.height]=\"'280px'\"></div>\r\n      </app-card>\r\n    </div>\r\n    <!-- project and visit end -->\r\n\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/theme/widget/chart-widget/chart-widget.component.scss":
/*!***********************************************************************!*\
  !*** ./src/app/theme/widget/chart-widget/chart-widget.component.scss ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3RoZW1lL3dpZGdldC9jaGFydC13aWRnZXQvY2hhcnQtd2lkZ2V0LmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/theme/widget/chart-widget/chart-widget.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/theme/widget/chart-widget/chart-widget.component.ts ***!
  \*********************************************************************/
/*! exports provided: ChartWidgetComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChartWidgetComponent", function() { return ChartWidgetComponent; });
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













var ChartWidgetComponent = /** @class */ (function () {
    function ChartWidgetComponent() {
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
        this.realTimeChartData = [];
        this.realTimeVisitData = [];
        this.firstDate = new Date();
        this.firstDate.setDate(this.firstDate.getDate() - 500);
        this.generateChartData();
        this.generateVisitChartData();
    }
    ChartWidgetComponent.prototype.ngOnInit = function () {
        var _this = this;
        setTimeout(function () {
            $.plot($('#amount-processed'), [{
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
                        [13, 27],
                        [14, 15],
                        [15, 20],
                        [16, 24],
                        [17, 20],
                        [18, 16],
                        [19, 18],
                        [20, 10],
                        [21, 20],
                        [22, 10],
                        [23, 5],
                    ],
                    color: '#448aff',
                    lines: {
                        show: true,
                        fill: true,
                        lineWidth: 3
                    },
                    points: {
                        show: true,
                        radius: 3,
                        fill: true,
                    },
                    curvedLines: {
                        apply: false,
                    }
                }], _this.chartOption);
            $.plot($('#amount-spent'), [{
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
                        [13, 27],
                        [14, 15],
                        [15, 20],
                        [16, 24],
                        [17, 20],
                        [18, 16],
                        [19, 18],
                        [20, 10],
                        [21, 20],
                        [22, 10],
                        [23, 5],
                    ],
                    color: '#9ccc65',
                    bars: {
                        show: true,
                        lineWidth: 2,
                        fill: true,
                        fillColor: {
                            colors: [{
                                    opacity: 0.7
                                }, {
                                    opacity: 0.7
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
            $.plot($('#profit-processed'), [{
                    data: [
                        [0, 0],
                        [1, 10],
                        [2, 20],
                        [3, 10],
                        [4, 27],
                        [5, 15],
                        [6, 20],
                        [7, 10],
                        [8, 20],
                        [9, 16],
                        [10, 22],
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
                    color: '#ffba57',
                    lines: {
                        show: true,
                        fill: true,
                        lineWidth: 2
                    },
                    points: {
                        show: true,
                        radius: 3,
                        fill: true,
                        fillColor: '#fff'
                    },
                    curvedLines: {
                        apply: false,
                    }
                }], _this.chartOption);
            $.plot($('#sec-ecommerce-chart-line'), [{
                    data: [
                        [0, 1],
                        [1, 27],
                        [2, 15],
                        [3, 25],
                        [4, 10],
                        [5, 20],
                        [6, 15],
                        [7, 25],
                        [8, 10],
                        [9, 25],
                        [10, 15],
                        [11, 27],
                        [12, 12],
                        [13, 1],
                    ],
                    color: '#fff',
                    lines: {
                        show: true,
                        fill: false,
                        lineWidth: 2
                    },
                    points: {
                        show: true,
                        radius: 3,
                        fill: true,
                        fillColor: '#fff'
                    },
                    curvedLines: {
                        apply: false,
                    }
                }], _this.chartOption);
            $.plot($('#sec-ecommerce-chart-bar'), [{
                    data: [
                        [0, 18],
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
                    ],
                    color: '#558B2F',
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
                        barWidth: 0.6,
                        align: 'center',
                        horizontal: false
                    },
                    points: {
                        show: false
                    },
                }], _this.chartOption);
            AmCharts.makeChart('seo-ecommerce-barchart', {
                'type': 'serial',
                'theme': 'light',
                'dataProvider': [{
                        'visits': 10
                    }, {
                        'visits': 15
                    }, {
                        'visits': 12
                    }, {
                        'visits': 16
                    }, {
                        'visits': 8
                    }, {
                        'visits': 10
                    }, {
                        'visits': 9
                    }, {
                        'visits': 6
                    }, {
                        'visits': 10
                    }, {
                        'visits': 12
                    }, {
                        'visits': 10
                    }, {
                        'visits': 13
                    }, {
                        'visits': 11
                    }, {
                        'visits': 16
                    }, {
                        'visits': 8
                    }, {
                        'visits': 10
                    }, {
                        'visits': 9
                    }, {
                        'visits': 6
                    }, {
                        'visits': 10
                    }, {
                        'visits': 6
                    }, {
                        'visits': 10
                    }, {
                        'visits': 12
                    }, {
                        'visits': 10
                    }, {
                        'visits': 13
                    }, {
                        'visits': 11
                    }, {
                        'visits': 16
                    }, {
                        'visits': 8
                    }, {
                        'visits': 10
                    }, {
                        'visits': 9
                    }, {
                        'visits': 12
                    }, {
                        'visits': 10
                    }, {
                        'visits': 13
                    }, {
                        'visits': 11
                    }],
                'valueAxes': [{
                        'gridAlpha': 0.1,
                        'dashLength': 0
                    }],
                'gridAboveGraphs': true,
                'startDuration': 1,
                'graphs': [{
                        'balloonText': 'Active User: <b>[[value]]</b>',
                        'fillAlphas': 1,
                        'lineAlpha': 1,
                        'lineColor': '#448aff',
                        'type': 'column',
                        'valueField': 'visits',
                        'columnWidth': 0.5
                    }],
                'chartCursor': {
                    'categoryBalloonEnabled': false,
                    'cursorAlpha': 0,
                    'zoomable': false
                },
                'categoryAxis': {
                    'gridPosition': 'start',
                    'gridAlpha': 0,
                    'axesAlpha': 0,
                    'lineAlpha': 0,
                    'fontSize': 0,
                    'tickLength': 0
                },
                'export': {
                    'enabled': true
                }
            });
            $.plot($('#sal-income'), [{
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
                        apply: true,
                    }
                }], _this.chartOption);
            $.plot($('#rent-income'), [{
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
                        [13, 1],
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
                        apply: true,
                    }
                }], _this.chartOption);
            $.plot($('#income-analysis'), [{
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
                        apply: true,
                    }
                }], _this.chartOption);
            $.plot($('#sale-report-1'), [{
                    data: [
                        [0, 2],
                        [1, 20],
                        [2, 10],
                        [3, 27],
                        [4, 10],
                        [5, 20],
                        [6, 15],
                        [7, 24],
                        [8, 16],
                        [9, 20],
                        [10, 10],
                        [11, 18],
                        [12, 20],
                        [13, 10],
                        [14, 5],
                    ],
                    color: '#448aff',
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
            $.plot($('#sale-report-2'), [{
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
            $.plot($('#sale-report-3'), [{
                    data: [
                        [0, 2],
                        [1, 20],
                        [2, 10],
                        [3, 27],
                        [4, 10],
                        [5, 20],
                        [6, 15],
                        [7, 24],
                        [8, 16],
                        [9, 20],
                        [10, 10],
                        [11, 18],
                        [12, 20],
                        [13, 10],
                        [14, 5],
                    ],
                    color: '#ff5252',
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
            $.plot($('#sale-report-4'), [{
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
                    color: '#ffba57',
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
            _this.chartEcommerce = AmCharts.makeChart('sales-analytics', {
                'type': 'serial',
                'theme': 'light',
                'marginRight': 40,
                'marginLeft': 40,
                'autoMarginOffset': 20,
                'dataDateFormat': 'YYYY-MM-DD',
                'valueAxes': [{
                        'id': 'v1',
                        'axisAlpha': 0,
                        'position': 'left',
                        'ignoreAxisWidth': true
                    }],
                'balloon': {
                    'borderThickness': 1,
                    'shadowAlpha': 0
                },
                'graphs': [{
                        'id': 'g1',
                        'balloon': {
                            'drop': true,
                            'adjustBorderColor': false,
                            'color': '#ffffff',
                            'type': 'smoothedLine'
                        },
                        'fillAlphas': 0.5,
                        'bullet': 'round',
                        'bulletBorderAlpha': 1,
                        'bulletColor': '#FFFFFF',
                        'lineColor': '#9ccc65',
                        'bulletSize': 5,
                        'hideBulletsCount': 50,
                        'lineThickness': 4,
                        'title': 'red line',
                        'useLineColorForBulletBorder': true,
                        'valueField': 'value',
                        'balloonText': '<span style="font-size:18px;">[[value]]</span>'
                    }],
                'chartCursor': {
                    'valueLineEnabled': true,
                    'valueLineBalloonEnabled': true,
                    'cursorAlpha': 0,
                    'zoomable': false,
                    'valueZoomable': true,
                    'valueLineAlpha': 0.5
                },
                'chartScrollbar': {
                    'autoGridCount': true,
                    'graph': 'g1',
                    'oppositeAxis': true,
                    'scrollbarHeight': 90
                },
                'categoryField': 'date',
                'categoryAxis': {
                    'parseDates': true,
                    'dashLength': 1,
                    'minorGridEnabled': true
                },
                'export': {
                    'enabled': true
                },
                'dataProvider': [{
                        'date': '2012-07-27',
                        'value': 13
                    }, {
                        'date': '2012-07-28',
                        'value': 11
                    }, {
                        'date': '2012-07-29',
                        'value': 15
                    }, {
                        'date': '2012-07-30',
                        'value': 16
                    }, {
                        'date': '2012-07-31',
                        'value': 18
                    }, {
                        'date': '2012-08-01',
                        'value': 13
                    }, {
                        'date': '2012-08-02',
                        'value': 22
                    }, {
                        'date': '2012-08-03',
                        'value': 23
                    }, {
                        'date': '2012-08-04',
                        'value': 20
                    }, {
                        'date': '2012-08-05',
                        'value': 17
                    }, {
                        'date': '2012-08-06',
                        'value': 16
                    }, {
                        'date': '2012-08-07',
                        'value': 18
                    }, {
                        'date': '2012-08-08',
                        'value': 21
                    }, {
                        'date': '2012-08-09',
                        'value': 26
                    }, {
                        'date': '2012-08-10',
                        'value': 24
                    }, {
                        'date': '2012-08-11',
                        'value': 29
                    }, {
                        'date': '2012-08-12',
                        'value': 32
                    }, {
                        'date': '2012-08-13',
                        'value': 18
                    }, {
                        'date': '2012-08-14',
                        'value': 24
                    }, {
                        'date': '2012-08-15',
                        'value': 22
                    }, {
                        'date': '2012-08-16',
                        'value': 18
                    }, {
                        'date': '2012-08-17',
                        'value': 19
                    }, {
                        'date': '2012-08-18',
                        'value': 14
                    }, {
                        'date': '2012-08-19',
                        'value': 15
                    }, {
                        'date': '2012-08-20',
                        'value': 12
                    }, {
                        'date': '2012-08-21',
                        'value': 8
                    }, {
                        'date': '2012-08-22',
                        'value': 9
                    }, {
                        'date': '2012-08-23',
                        'value': 8
                    }, {
                        'date': '2012-08-24',
                        'value': 7
                    }, {
                        'date': '2012-08-25',
                        'value': 5
                    }, {
                        'date': '2012-08-26',
                        'value': 11
                    }, {
                        'date': '2012-08-27',
                        'value': 13
                    }, {
                        'date': '2012-08-28',
                        'value': 18
                    }, {
                        'date': '2012-08-29',
                        'value': 20
                    }, {
                        'date': '2012-08-30',
                        'value': 29
                    }, {
                        'date': '2012-08-31',
                        'value': 33
                    }, {
                        'date': '2012-09-01',
                        'value': 42
                    }, {
                        'date': '2012-09-02',
                        'value': 35
                    }, {
                        'date': '2012-09-03',
                        'value': 31
                    }, {
                        'date': '2012-09-04',
                        'value': 47
                    }, {
                        'date': '2012-09-05',
                        'value': 52
                    }, {
                        'date': '2012-09-06',
                        'value': 46
                    }, {
                        'date': '2012-09-07',
                        'value': 41
                    }, {
                        'date': '2012-09-08',
                        'value': 43
                    }, {
                        'date': '2012-09-09',
                        'value': 40
                    }, {
                        'date': '2012-09-10',
                        'value': 39
                    }, {
                        'date': '2012-09-11',
                        'value': 34
                    }, {
                        'date': '2012-09-12',
                        'value': 29
                    }, {
                        'date': '2012-09-13',
                        'value': 34
                    }, {
                        'date': '2012-09-14',
                        'value': 37
                    }, {
                        'date': '2012-09-15',
                        'value': 42
                    }, {
                        'date': '2012-09-16',
                        'value': 49
                    }, {
                        'date': '2012-09-17',
                        'value': 46
                    }, {
                        'date': '2012-09-18',
                        'value': 47
                    }, {
                        'date': '2012-09-19',
                        'value': 55
                    }, {
                        'date': '2012-09-20',
                        'value': 59
                    }, {
                        'date': '2012-09-21',
                        'value': 58
                    }, {
                        'date': '2012-09-22',
                        'value': 57
                    }, {
                        'date': '2012-09-23',
                        'value': 61
                    }, {
                        'date': '2012-09-24',
                        'value': 59
                    }, {
                        'date': '2012-09-25',
                        'value': 67
                    }, {
                        'date': '2012-09-26',
                        'value': 65
                    }, {
                        'date': '2012-09-27',
                        'value': 61
                    }, {
                        'date': '2012-09-28',
                        'value': 66
                    }, {
                        'date': '2012-09-29',
                        'value': 69
                    }, {
                        'date': '2012-09-30',
                        'value': 71
                    }, {
                        'date': '2012-10-01',
                        'value': 67
                    }, {
                        'date': '2012-10-02',
                        'value': 63
                    }, {
                        'date': '2012-10-03',
                        'value': 46
                    }, {
                        'date': '2012-10-04',
                        'value': 32
                    }, {
                        'date': '2012-10-05',
                        'value': 21
                    }, {
                        'date': '2012-10-06',
                        'value': 18
                    }, {
                        'date': '2012-10-07',
                        'value': 21
                    }, {
                        'date': '2012-10-08',
                        'value': 28
                    }, {
                        'date': '2012-10-09',
                        'value': 27
                    }, {
                        'date': '2012-10-10',
                        'value': 36
                    }, {
                        'date': '2012-10-11',
                        'value': 33
                    }, {
                        'date': '2012-10-12',
                        'value': 31
                    }, {
                        'date': '2012-10-13',
                        'value': 30
                    }, {
                        'date': '2012-10-14',
                        'value': 34
                    }, {
                        'date': '2012-10-15',
                        'value': 38
                    }, {
                        'date': '2012-10-16',
                        'value': 37
                    }, {
                        'date': '2012-10-17',
                        'value': 44
                    }, {
                        'date': '2012-10-18',
                        'value': 49
                    }, {
                        'date': '2012-10-19',
                        'value': 53
                    }, {
                        'date': '2012-10-20',
                        'value': 57
                    }, {
                        'date': '2012-10-21',
                        'value': 60
                    }, {
                        'date': '2012-10-22',
                        'value': 61
                    }, {
                        'date': '2012-10-23',
                        'value': 69
                    }, {
                        'date': '2012-10-24',
                        'value': 67
                    }, {
                        'date': '2012-10-25',
                        'value': 72
                    }, {
                        'date': '2012-10-26',
                        'value': 77
                    }, {
                        'date': '2012-10-27',
                        'value': 75
                    }, {
                        'date': '2012-10-28',
                        'value': 70
                    }, {
                        'date': '2012-10-29',
                        'value': 72
                    }, {
                        'date': '2012-10-30',
                        'value': 70
                    }, {
                        'date': '2012-10-31',
                        'value': 72
                    }, {
                        'date': '2012-11-01',
                        'value': 73
                    }, {
                        'date': '2012-11-02',
                        'value': 67
                    }, {
                        'date': '2012-11-03',
                        'value': 68
                    }, {
                        'date': '2012-11-04',
                        'value': 65
                    }, {
                        'date': '2012-11-05',
                        'value': 71
                    }, {
                        'date': '2012-11-06',
                        'value': 75
                    }, {
                        'date': '2012-11-07',
                        'value': 74
                    }, {
                        'date': '2012-11-08',
                        'value': 71
                    }, {
                        'date': '2012-11-09',
                        'value': 76
                    }, {
                        'date': '2012-11-10',
                        'value': 77
                    }, {
                        'date': '2012-11-11',
                        'value': 81
                    }, {
                        'date': '2012-11-12',
                        'value': 83
                    }, {
                        'date': '2012-11-13',
                        'value': 80
                    }, {
                        'date': '2012-11-14',
                        'value': 81
                    }, {
                        'date': '2012-11-15',
                        'value': 87
                    }, {
                        'date': '2012-11-16',
                        'value': 82
                    }, {
                        'date': '2012-11-17',
                        'value': 86
                    }, {
                        'date': '2012-11-18',
                        'value': 80
                    }, {
                        'date': '2012-11-19',
                        'value': 87
                    }, {
                        'date': '2012-11-20',
                        'value': 83
                    }, {
                        'date': '2012-11-21',
                        'value': 85
                    }, {
                        'date': '2012-11-22',
                        'value': 84
                    }, {
                        'date': '2012-11-23',
                        'value': 82
                    }, {
                        'date': '2012-11-24',
                        'value': 73
                    }, {
                        'date': '2012-11-25',
                        'value': 71
                    }, {
                        'date': '2012-11-26',
                        'value': 75
                    }, {
                        'date': '2012-11-27',
                        'value': 79
                    }, {
                        'date': '2012-11-28',
                        'value': 70
                    }, {
                        'date': '2012-11-29',
                        'value': 73
                    }, {
                        'date': '2012-11-30',
                        'value': 61
                    }, {
                        'date': '2012-12-01',
                        'value': 62
                    }, {
                        'date': '2012-12-02',
                        'value': 66
                    }, {
                        'date': '2012-12-03',
                        'value': 65
                    }, {
                        'date': '2012-12-04',
                        'value': 73
                    }, {
                        'date': '2012-12-05',
                        'value': 79
                    }, {
                        'date': '2012-12-06',
                        'value': 78
                    }, {
                        'date': '2012-12-07',
                        'value': 78
                    }, {
                        'date': '2012-12-08',
                        'value': 78
                    }, {
                        'date': '2012-12-09',
                        'value': 74
                    }, {
                        'date': '2012-12-10',
                        'value': 73
                    }, {
                        'date': '2012-12-11',
                        'value': 75
                    }, {
                        'date': '2012-12-12',
                        'value': 70
                    }, {
                        'date': '2012-12-13',
                        'value': 77
                    }, {
                        'date': '2012-12-14',
                        'value': 67
                    }, {
                        'date': '2012-12-15',
                        'value': 62
                    }, {
                        'date': '2012-12-16',
                        'value': 64
                    }, {
                        'date': '2012-12-17',
                        'value': 61
                    }, {
                        'date': '2012-12-18',
                        'value': 59
                    }, {
                        'date': '2012-12-19',
                        'value': 53
                    }, {
                        'date': '2012-12-20',
                        'value': 54
                    }, {
                        'date': '2012-12-21',
                        'value': 56
                    }, {
                        'date': '2012-12-22',
                        'value': 59
                    }, {
                        'date': '2012-12-23',
                        'value': 58
                    }, {
                        'date': '2012-12-24',
                        'value': 55
                    }, {
                        'date': '2012-12-25',
                        'value': 52
                    }, {
                        'date': '2012-12-26',
                        'value': 54
                    }, {
                        'date': '2012-12-27',
                        'value': 50
                    }, {
                        'date': '2012-12-28',
                        'value': 50
                    }, {
                        'date': '2012-12-29',
                        'value': 51
                    }, {
                        'date': '2012-12-30',
                        'value': 52
                    }, {
                        'date': '2012-12-31',
                        'value': 58
                    }, {
                        'date': '2013-01-01',
                        'value': 60
                    }, {
                        'date': '2013-01-02',
                        'value': 67
                    }, {
                        'date': '2013-01-03',
                        'value': 64
                    }, {
                        'date': '2013-01-04',
                        'value': 66
                    }, {
                        'date': '2013-01-05',
                        'value': 60
                    }, {
                        'date': '2013-01-06',
                        'value': 63
                    }, {
                        'date': '2013-01-07',
                        'value': 61
                    }, {
                        'date': '2013-01-08',
                        'value': 60
                    }, {
                        'date': '2013-01-09',
                        'value': 65
                    }, {
                        'date': '2013-01-10',
                        'value': 75
                    }, {
                        'date': '2013-01-11',
                        'value': 77
                    }, {
                        'date': '2013-01-12',
                        'value': 78
                    }, {
                        'date': '2013-01-13',
                        'value': 70
                    }, {
                        'date': '2013-01-14',
                        'value': 70
                    }, {
                        'date': '2013-01-15',
                        'value': 73
                    }, {
                        'date': '2013-01-16',
                        'value': 71
                    }, {
                        'date': '2013-01-17',
                        'value': 74
                    }, {
                        'date': '2013-01-18',
                        'value': 78
                    }, {
                        'date': '2013-01-19',
                        'value': 85
                    }, {
                        'date': '2013-01-20',
                        'value': 82
                    }, {
                        'date': '2013-01-21',
                        'value': 83
                    }, {
                        'date': '2013-01-22',
                        'value': 88
                    }, {
                        'date': '2013-01-23',
                        'value': 85
                    }, {
                        'date': '2013-01-24',
                        'value': 85
                    }, {
                        'date': '2013-01-25',
                        'value': 80
                    }, {
                        'date': '2013-01-26',
                        'value': 87
                    }, {
                        'date': '2013-01-27',
                        'value': 84
                    }, {
                        'date': '2013-01-28',
                        'value': 83
                    }, {
                        'date': '2013-01-29',
                        'value': 84
                    }, {
                        'date': '2013-01-30',
                        'value': 81
                    }]
            });
            $.plot($('#this-month'), [{
                    data: [
                        [0, 18],
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
                        barWidth: 0.6,
                        align: 'center',
                        horizontal: false
                    },
                    points: {
                        show: false
                    },
                }], _this.chartOption);
            $.plot($('#sale-chart1'), [{
                    data: [
                        [0, 18],
                        [20, 10],
                        [35, 20],
                        [50, 10],
                        [65, 27],
                        [75, 15],
                        [90, 20],
                    ],
                    color: '#fff',
                    lines: {
                        show: true,
                        fill: false,
                        lineWidth: 3
                    },
                    points: {
                        show: false
                    },
                    curvedLines: {
                        apply: true,
                    }
                }], _this.chartOption);
            $.plot($('#sale-chart2'), [{
                    data: [
                        [0, 18],
                        [20, 10],
                        [35, 20],
                        [50, 10],
                        [65, 27],
                        [75, 15],
                        [90, 20],
                    ],
                    color: '#fff',
                    lines: {
                        show: true,
                        fill: false,
                        lineWidth: 3
                    },
                    points: {
                        show: false
                    },
                    curvedLines: {
                        apply: true,
                    }
                }], _this.chartOption);
            $.plot($('#sale-chart3'), [{
                    data: [
                        [0, 18],
                        [20, 10],
                        [35, 20],
                        [50, 10],
                        [65, 27],
                        [75, 15],
                        [90, 20],
                    ],
                    color: '#fff',
                    lines: {
                        show: true,
                        fill: false,
                        lineWidth: 3
                    },
                    points: {
                        show: false
                    },
                    curvedLines: {
                        apply: true,
                    }
                }], _this.chartOption);
            AmCharts.makeChart('product-sales-chart', {
                'type': 'serial',
                'theme': 'light',
                'dataDateFormat': 'YYYY-MM-DD',
                'precision': 2,
                'valueAxes': [{
                        'id': 'v1',
                        'title': 'Sales',
                        'position': 'left',
                        'autoGridCount': false,
                        'labelFunction': function (value) {
                            return '$' + Math.round(value) + 'M';
                        }
                    }, {
                        'id': 'v2',
                        'gridAlpha': 0.1,
                        'autoGridCount': false
                    }],
                'graphs': [{
                        'id': 'g1',
                        'valueAxis': 'v2',
                        'lineThickness': 0,
                        'fillAlphas': 0.9,
                        'lineColor': '#448aff',
                        'type': 'smoothedLine',
                        'title': 'Laptop',
                        'useLineColorForBulletBorder': true,
                        'valueField': 'market1',
                        'balloonText': '[[title]]<br /><b style="font-size: 130%">[[value]]</b>'
                    }, {
                        'id': 'g2',
                        'valueAxis': 'v2',
                        'fillAlphas': 0.9,
                        'bulletColor': '#ff5252',
                        'lineThickness': 0,
                        'lineColor': '#ff5252',
                        'type': 'smoothedLine',
                        'title': 'TV',
                        'useLineColorForBulletBorder': true,
                        'valueField': 'market2',
                        'balloonText': '[[title]]<br /><b style="font-size: 130%">[[value]]</b>'
                    }, {
                        'id': 'g3',
                        'valueAxis': 'v2',
                        'fillAlphas': 0.9,
                        'bulletColor': '#9ccc65',
                        'lineThickness': 0,
                        'lineColor': '#9ccc65',
                        'type': 'smoothedLine',
                        'title': 'Mobile',
                        'useLineColorForBulletBorder': true,
                        'valueField': 'sales1',
                        'balloonText': '[[title]]<br /><b style="font-size: 130%">[[value]]</b>'
                    }],
                'chartCursor': {
                    'pan': true,
                    'valueLineEnabled': true,
                    'valueLineBalloonEnabled': true,
                    'cursorAlpha': 0,
                    'valueLineAlpha': 0.2
                },
                'categoryField': 'date',
                'categoryAxis': {
                    'parseDates': true,
                    'gridAlpha': 0,
                    'minorGridEnabled': true
                },
                'legend': {
                    'position': 'top',
                },
                'balloon': {
                    'borderThickness': 1,
                    'shadowAlpha': 0
                },
                'export': {
                    'enabled': true
                },
                'dataProvider': [{
                        'date': '2013-01-01',
                        'market1': 0,
                        'market2': 0,
                        'sales1': 0
                    }, {
                        'date': '2013-02-01',
                        'market1': 0,
                        'market2': 0,
                        'sales1': 40
                    }, {
                        'date': '2013-03-01',
                        'market1': 0,
                        'market2': 0,
                        'sales1': 0
                    }, {
                        'date': '2013-04-01',
                        'market1': 30,
                        'market2': 0,
                        'sales1': 0
                    }, {
                        'date': '2013-05-01',
                        'market1': 0,
                        'market2': 20,
                        'sales1': 0
                    }, {
                        'date': '2013-06-01',
                        'market1': 25,
                        'market2': 0,
                        'sales1': 0
                    }, {
                        'date': '2013-07-01',
                        'market1': 0,
                        'market2': 0,
                        'sales1': 0
                    }, {
                        'date': '2013-08-01',
                        'market1': 0,
                        'market2': 0,
                        'sales1': 30
                    }, {
                        'date': '2013-09-01',
                        'market1': 0,
                        'market2': 0,
                        'sales1': 0
                    }, {
                        'date': '2013-10-01',
                        'market1': 0,
                        'market2': 50,
                        'sales1': 0
                    }, {
                        'date': '2013-11-01',
                        'market1': 0,
                        'market2': 0,
                        'sales1': 65
                    }, {
                        'date': '2013-12-01',
                        'market1': 0,
                        'market2': 0,
                        'sales1': 0
                    }]
            });
            _this.chartEcommerceLine = AmCharts.makeChart('seo-ecommerce-linechart', {
                'type': 'serial',
                'theme': 'light',
                'marginTop': 0,
                'marginRight': 0,
                'dataProvider': [{
                        'year': '1950',
                        'value': -0.307
                    }, {
                        'year': '1951',
                        'value': -0.168
                    }, {
                        'year': '1952',
                        'value': -0.073
                    }, {
                        'year': '1953',
                        'value': -0.027
                    }, {
                        'year': '1954',
                        'value': -0.251
                    }, {
                        'year': '1955',
                        'value': -0.281
                    }, {
                        'year': '1956',
                        'value': -0.348
                    }, {
                        'year': '1957',
                        'value': -0.074
                    }, {
                        'year': '1958',
                        'value': -0.011
                    }, {
                        'year': '1959',
                        'value': -0.074
                    }, {
                        'year': '1960',
                        'value': -0.124
                    }, {
                        'year': '1961',
                        'value': -0.024
                    }, {
                        'year': '1962',
                        'value': -0.022
                    }, {
                        'year': '1963',
                        'value': 0
                    }, {
                        'year': '1964',
                        'value': -0.296
                    }, {
                        'year': '1965',
                        'value': -0.217
                    }, {
                        'year': '1966',
                        'value': -0.147
                    }, {
                        'year': '1967',
                        'value': -0.15
                    }, {
                        'year': '1968',
                        'value': -0.16
                    }, {
                        'year': '1969',
                        'value': -0.011
                    }, {
                        'year': '1970',
                        'value': -0.068
                    }, {
                        'year': '1971',
                        'value': -0.19
                    }, {
                        'year': '1972',
                        'value': -0.056
                    }, {
                        'year': '1973',
                        'value': 0.077
                    }, {
                        'year': '1974',
                        'value': -0.213
                    }, {
                        'year': '1975',
                        'value': -0.17
                    }, {
                        'year': '1976',
                        'value': -0.254
                    }, {
                        'year': '1977',
                        'value': 0.019
                    }, {
                        'year': '1978',
                        'value': -0.063
                    }, {
                        'year': '1979',
                        'value': 0.05
                    }, {
                        'year': '1980',
                        'value': 0.077
                    }, {
                        'year': '1981',
                        'value': 0.12
                    }, {
                        'year': '1982',
                        'value': 0.011
                    }, {
                        'year': '1983',
                        'value': 0.177
                    }, {
                        'year': '1984',
                        'value': -0.021
                    }, {
                        'year': '1985',
                        'value': -0.037
                    }, {
                        'year': '1986',
                        'value': 0.03
                    }, {
                        'year': '1987',
                        'value': 0.179
                    }, {
                        'year': '1988',
                        'value': 0.18
                    }, {
                        'year': '1989',
                        'value': 0.104
                    }, {
                        'year': '1990',
                        'value': 0.255
                    }, {
                        'year': '1991',
                        'value': 0.21
                    }, {
                        'year': '1992',
                        'value': 0.065
                    }, {
                        'year': '1993',
                        'value': 0.11
                    }, {
                        'year': '1994',
                        'value': 0.172
                    }, {
                        'year': '1995',
                        'value': 0.269
                    }, {
                        'year': '1996',
                        'value': 0.141
                    }, {
                        'year': '1997',
                        'value': 0.353
                    }, {
                        'year': '1998',
                        'value': 0.548
                    }, {
                        'year': '1999',
                        'value': 0.298
                    }, {
                        'year': '2000',
                        'value': 0.267
                    }, {
                        'year': '2001',
                        'value': 0.411
                    }, {
                        'year': '2002',
                        'value': 0.462
                    }, {
                        'year': '2003',
                        'value': 0.47
                    }, {
                        'year': '2004',
                        'value': 0.445
                    }, {
                        'year': '2005',
                        'value': 0.47
                    }],
                'valueAxes': [{
                        'axisAlpha': 0,
                        // 'gridAlpha': 0,
                        'dashLength': 6,
                        'position': 'left'
                    }],
                'graphs': [{
                        'id': 'g1',
                        'balloonText': '[[category]]<br><b><span style="font-size:14px;">[[value]]</span></b>',
                        'bullet': 'round',
                        'bulletSize': 8,
                        // 'fillAlphas': 0.1,
                        'lineColor': '#448aff',
                        'lineThickness': 2,
                        'negativeLineColor': '#ff5252',
                        'type': 'smoothedLine',
                        'valueField': 'value'
                    }],
                'chartScrollbar': {
                    'graph': 'g1',
                    'gridAlpha': 0,
                    'color': '#888888',
                    'scrollbarHeight': 55,
                    'backgroundAlpha': 0,
                    'selectedBackgroundAlpha': 0.1,
                    'selectedBackgroundColor': '#888888',
                    'graphFillAlpha': 0,
                    'autoGridCount': true,
                    'selectedGraphFillAlpha': 0,
                    'graphLineAlpha': 0.2,
                    'graphLineColor': '#c2c2c2',
                    'selectedGraphLineColor': '#888888',
                    'selectedGraphLineAlpha': 1
                },
                'chartCursor': {
                    'categoryBalloonDateFormat': 'YYYY',
                    'cursorAlpha': 0,
                    'valueLineEnabled': true,
                    'valueLineBalloonEnabled': true,
                    'valueLineAlpha': 0.5,
                    'fullWidth': true
                },
                'dataDateFormat': 'YYYY',
                'categoryField': 'year',
                'categoryAxis': {
                    'minPeriod': 'YYYY',
                    'gridAlpha': 0,
                    'parseDates': true,
                },
            });
            $.plot($('#power-card-chart1'), [{
                    data: [
                        [0, 18],
                        [20, 10],
                        [35, 20],
                        [50, 10],
                        [65, 27],
                        [75, 15],
                        [90, 20],
                    ],
                    color: '#ff5252',
                    lines: {
                        show: true,
                        fill: false,
                        lineWidth: 3
                    },
                    points: {
                        show: false
                    },
                    curvedLines: {
                        apply: true,
                    }
                }], _this.chartOption);
            $.plot($('#power-card-chart2'), [{
                    data: [
                        [0, 10],
                        [20, 25],
                        [35, 15],
                        [50, 27],
                        [65, 20],
                        [75, 28],
                        [90, 10],
                    ],
                    color: '#448aff',
                    lines: {
                        show: true,
                        fill: false,
                        lineWidth: 3
                    },
                    points: {
                        show: false
                    },
                    curvedLines: {
                        apply: true,
                    }
                }], _this.chartOption);
            $.plot($('#power-card-chart3'), [{
                    data: [
                        [0, 18],
                        [20, 10],
                        [35, 20],
                        [50, 10],
                        [65, 27],
                        [75, 15],
                        [90, 20],
                    ],
                    color: '#ffba57',
                    lines: {
                        show: true,
                        fill: false,
                        lineWidth: 3
                    },
                    points: {
                        show: false
                    },
                    curvedLines: {
                        apply: true,
                    }
                }], _this.chartOption);
            AmCharts.makeChart('revenue-map', {
                'type': 'serial',
                'theme': 'light',
                'dataDateFormat': 'YYYY-MM-DD',
                'precision': 2,
                'valueAxes': [{
                        'id': 'v1',
                        'title': 'Sales',
                        'position': 'left',
                        'autoGridCount': false,
                        'labelFunction': function (value) {
                            return '$' + Math.round(value) + 'M';
                        }
                    }, {
                        'id': 'v2',
                        'title': 'Revenue Market',
                        'gridAlpha': 0,
                        'autoGridCount': false
                    }],
                'graphs': [{
                        'id': 'g1',
                        'valueAxis': 'v2',
                        'bullet': 'round',
                        'bulletBorderAlpha': 1,
                        'bulletColor': '#FFFFFF',
                        'bulletSize': 5,
                        'hideBulletsCount': 50,
                        'lineThickness': 2,
                        'lineColor': '#448aff',
                        'type': 'smoothedLine',
                        'title': 'Market Days',
                        'useLineColorForBulletBorder': true,
                        'valueField': 'market1',
                        'balloonText': '[[title]]<br /><b style="font-size: 130%">[[value]]</b>'
                    }, {
                        'id': 'g2',
                        'valueAxis': 'v2',
                        'bullet': 'round',
                        'bulletBorderAlpha': 1,
                        'bulletColor': '#FFFFFF',
                        'bulletSize': 5,
                        'hideBulletsCount': 50,
                        'lineThickness': 2,
                        'lineColor': '#9ccc65',
                        'type': 'smoothedLine',
                        'title': 'Market Days ALL',
                        'useLineColorForBulletBorder': true,
                        'valueField': 'market2',
                        'balloonText': '[[title]]<br /><b style="font-size: 130%">[[value]]</b>'
                    }],
                'chartCursor': {
                    'pan': true,
                    'valueLineEnabled': true,
                    'valueLineBalloonEnabled': true,
                    'cursorAlpha': 0,
                    'valueLineAlpha': 0.2
                },
                'categoryField': 'date',
                'categoryAxis': {
                    'parseDates': true,
                    'dashLength': 1,
                    'minorGridEnabled': true
                },
                'legend': {
                    'useGraphSettings': true,
                    'position': 'top'
                },
                'balloon': {
                    'borderThickness': 1,
                    'shadowAlpha': 0
                },
                'export': {
                    'enabled': true
                },
                'dataProvider': [{
                        'date': '2013-01-16',
                        'market1': 85,
                        'market2': 75
                    }, {
                        'date': '2013-01-17',
                        'market1': 74,
                        'market2': 80
                    }, {
                        'date': '2013-01-18',
                        'market1': 78,
                        'market2': 88
                    }, {
                        'date': '2013-01-19',
                        'market1': 85,
                        'market2': 75
                    }, {
                        'date': '2013-01-20',
                        'market1': 82,
                        'market2': 89
                    }, {
                        'date': '2013-01-21',
                        'market1': 83,
                        'market2': 78
                    }, {
                        'date': '2013-01-22',
                        'market1': 72,
                        'market2': 92
                    }, {
                        'date': '2013-01-23',
                        'market1': 85,
                        'market2': 76
                    }]
            });
            var monthly_expense = AmCharts.makeChart('monthly-expense', {
                'theme': 'light',
                'type': 'gauge',
                'axes': [{
                        'topTextFontSize': 1,
                        'topTextYOffset': 0,
                        'topTextColor': '#fff',
                        'axisColor': '#31d6ea',
                        'axisThickness': 0,
                        'endValue': 100,
                        'gridInside': false,
                        'inside': true,
                        'radius': '50%',
                        'fontSize': 0,
                        'valueInterval': 100,
                        'tickAlpha': 0,
                        'startAngle': -90,
                        'endAngle': 90,
                        'unit': '%',
                        'bandOutlineAlpha': 0,
                        'bands': [{
                                'color': '#d6d6d6',
                                'endValue': 100,
                                'innerRadius': '105%',
                                'radius': '170%',
                                'gradientRatio': [0],
                                'startValue': 0
                            }, {
                                'color': '#9ccc65',
                                'endValue': 0,
                                'innerRadius': '105%',
                                'radius': '170%',
                                'gradientRatio': [0],
                                'startValue': 0
                            }]
                    }],
                'arrows': [{
                        'alpha': 1,
                        'innerRadius': '0%',
                        'startWidth': 13,
                        'nailRadius': 10,
                        'nailAlpha': 1,
                        'radius': '140%'
                    }]
            });
            _this.monthlyInterval = setInterval(function () {
                var value = Math.round(Math.random() * 100);
                monthly_expense.arrows[0].setValue(value);
                monthly_expense.axes[0].setTopText(value + ' %');
                document.getElementById('exp-val').innerHTML = ('$ ' + (value * 10));
                monthly_expense.axes[0].bands[1].setEndValue(value);
            }, 2000);
            AmCharts.makeChart('daily-visitor', {
                'type': 'serial',
                'theme': 'light',
                'precision': 2,
                'graphs': [{
                        'id': 'g1',
                        'valueAxis': 'v2',
                        'bullet': 'round',
                        'bulletBorderAlpha': 1,
                        'bulletColor': '#FFFFFF',
                        'bulletSize': 5,
                        'hideBulletsCount': 50,
                        'lineThickness': 2,
                        'lineColor': '#448aff',
                        'type': 'smoothedLine',
                        'title': 'Market Days',
                        'useLineColorForBulletBorder': true,
                        'valueField': 'market1',
                        'balloonText': '[[title]]<br /><b style="font-size: 130%">[[value]]</b>'
                    }],
                'chartCursor': {
                    'pan': true,
                    'valueLineEnabled': true,
                    'valueLineBalloonEnabled': true,
                    'cursorAlpha': 0,
                    'valueLineAlpha': 0.2
                },
                'categoryField': 'date',
                'categoryAxis': {
                    'dashLength': 1,
                    'axisAlpha': 0,
                    'lineAlpha': 0,
                    'gridAlpha': 0,
                    'minorGridEnabled': true
                },
                'legend': {
                    'enabled': false
                },
                'balloon': {
                    'borderThickness': 1,
                    'shadowAlpha': 0
                },
                'export': {
                    'enabled': true
                },
                'dataProvider': [{
                        'date': '1',
                        'market1': 85
                    }, {
                        'date': '2',
                        'market1': 74
                    }, {
                        'date': '3',
                        'market1': 78
                    }, {
                        'date': '4',
                        'market1': 85
                    }, {
                        'date': '5',
                        'market1': 82
                    }, {
                        'date': '6',
                        'market1': 83
                    }, {
                        'date': '7',
                        'market1': 72
                    }, {
                        'date': '8',
                        'market1': 85
                    }]
            });
            AmCharts.makeChart('daily-sales', {
                'type': 'serial',
                'theme': 'light',
                'dataProvider': [{
                        'country': 'USA',
                        'visits': 10,
                        'color': '#ffba57'
                    }, {
                        'country': 'Russia',
                        'visits': 8,
                        'color': '#ff5252'
                    }, {
                        'country': 'South Korea',
                        'visits': 5,
                        'color': '#9ccc65'
                    }, {
                        'country': 'Canada',
                        'visits': 7,
                        'color': '#448aff'
                    }],
                'valueAxes': [{
                        'axisAlpha': 0,
                        'lineAlpha': 0,
                        'gridAlpha': 0,
                        'position': 'left',
                        'fontSize': 0
                    }],
                'startDuration': 1,
                'graphs': [{
                        'balloonText': '<b>[[category]]: [[value]]</b>',
                        'fillColorsField': 'color',
                        'fillAlphas': 0.9,
                        'lineAlpha': 0.2,
                        'type': 'column',
                        'valueField': 'visits'
                    }],
                'chartCursor': {
                    'categoryBalloonEnabled': false,
                    'cursorAlpha': 0,
                    'zoomable': false
                },
                'categoryField': 'country',
                'categoryAxis': {
                    'gridPosition': 'start',
                    'axisAlpha': 1,
                    'lineAlpha': 0,
                    'gridAlpha': 0
                },
                'export': {
                    'enabled': true
                }
            });
            AmCharts.makeChart('storage-space', {
                'type': 'pie',
                'startDuration': 0,
                'theme': 'light',
                'labelRadius': 0,
                'pullOutRadius': 0,
                'labelText': '',
                'colorField': 'color',
                'legend': {
                    'enabled': false,
                },
                'innerRadius': '00%',
                'dataProvider': [{
                        'country': 'Lithuania',
                        'litres': 501.9,
                        'color': '#448aff'
                    }, {
                        'country': 'Czech Republic',
                        'litres': 301.9,
                        'color': '#ffba57'
                    }, {
                        'country': 'Ireland',
                        'litres': 201.1,
                        'color': '#ff5252'
                    }, {
                        'country': 'india',
                        'litres': 220.1,
                        'color': '#9ccc65'
                    }],
                'valueField': 'litres',
                'export': {
                    'enabled': true
                }
            });
            var real_time_chart = AmCharts.makeChart('real-time-chart', {
                'type': 'serial',
                'theme': 'light',
                'hideCredits': true,
                'zoomOutButton': {
                    'backgroundColor': '#000000',
                    'backgroundAlpha': 0.15
                },
                'dataProvider': _this.realTimeChartData,
                'categoryField': 'date',
                'categoryAxis': {
                    'parseDates': true,
                    'minPeriod': 'DD',
                    'dashLength': 1,
                    'gridAlpha': 0.15,
                    'axisColor': '#DADADA'
                },
                'graphs': [{
                        'id': 'g1',
                        'valueField': 'visits',
                        'bullet': 'round',
                        'bulletBorderColor': '#FFFFFF',
                        'bulletBorderThickness': 2,
                        'lineThickness': 2,
                        'lineColor': '#448aff',
                        'negativeLineColor': '#ff5252',
                        'hideBulletsCount': 50
                    }],
                'chartCursor': {
                    'cursorPosition': 'mouse'
                }
            });
            var days = 31;
            _this.realTime = setInterval(function () {
                real_time_chart.dataProvider.shift();
                days++;
                var newDate = new Date(_this.firstDate);
                newDate.setDate(newDate.getDate() + days);
                var visits = Math.round(Math.random() * 40) - 20;
                real_time_chart.dataProvider.push({
                    date: newDate,
                    visits: visits
                });
                real_time_chart.validateData();
            }, 1000);
            var sales_prediction_chart = AmCharts.makeChart('sales-prediction-chart', {
                'theme': 'light',
                'hideCredits': true,
                'type': 'gauge',
                'axes': [{
                        'topTextFontSize': 0,
                        'topTextYOffset': 0,
                        'topTextColor': '#fff',
                        'axisColor': '#31d6ea',
                        'axisThickness': 0,
                        'endValue': 100,
                        'gridInside': false,
                        'inside': true,
                        'radius': '50%',
                        'fontSize': 0.,
                        'valueInterval': 100,
                        'tickAlpha': 0,
                        'startAngle': -140,
                        'endAngle': 140,
                        'unit': '%',
                        'bandOutlineAlpha': 0,
                        'bands': [{
                                'color': '#ff9797',
                                'endValue': 100,
                                'innerRadius': '105%',
                                'radius': '170%',
                                'gradientRatio': [0],
                                'startValue': 0
                            }, {
                                'color': '#ff5252',
                                'endValue': 0,
                                'innerRadius': '105%',
                                'radius': '170%',
                                'gradientRatio': [0],
                                'startValue': 0
                            }]
                    }],
                'arrows': [{
                        'alpha': 1,
                        'innerRadius': '0%',
                        'startWidth': 10,
                        'nailRadius': 8,
                        'nailAlpha': 1,
                        'radius': '140%'
                    }]
            });
            _this.saleChart = setInterval(function () {
                var value = Math.round(Math.random() * 100);
                sales_prediction_chart.arrows[0].setValue(value);
                sales_prediction_chart.axes[0].setTopText(value + ' %');
                sales_prediction_chart.axes[0].bands[1].setEndValue(value);
            }, 2000);
            var emails_sent_sales_chart = AmCharts.makeChart('emails-sent-sales-chart', {
                'theme': 'light',
                'hideCredits': true,
                'type': 'gauge',
                'axes': [{
                        'topTextFontSize': 0,
                        'topTextYOffset': 0,
                        'topTextColor': '#fff',
                        'axisColor': '#31d6ea',
                        'axisThickness': 0,
                        'endValue': 100,
                        'gridInside': false,
                        'inside': true,
                        'radius': '50%',
                        'fontSize': 0.,
                        'valueInterval': 100,
                        'tickAlpha': 0,
                        'startAngle': 0,
                        'endAngle': 360,
                        'unit': '%',
                        'bandOutlineAlpha': 0,
                        'bands': [{
                                'color': '#448aff',
                                'endValue': 100,
                                'innerRadius': '105%',
                                'radius': '170%',
                                'gradientRatio': [0],
                                'startValue': 0
                            }, {
                                'color': '#ff5252',
                                'endValue': 0,
                                'innerRadius': '105%',
                                'radius': '170%',
                                'gradientRatio': [0],
                                'startValue': 0
                            }]
                    }],
                'arrows': [{
                        'alpha': 0,
                        'innerRadius': '100%',
                        'borderAlpha': 0,
                        'nailAlpha': 0,
                    }]
            });
            _this.emailSentInterval = setInterval(function () {
                var value = Math.round(Math.random() * 100);
                document.getElementById('opened').innerHTML = ((1000 - (value * 10)) + ' opened');
                document.getElementById('unopened').innerHTML = ((value * 10) + ' unopened');
                emails_sent_sales_chart.axes[0].bands[1].setEndValue(value);
            }, 2000);
            AmCharts.makeChart('project-earning', {
                'type': 'serial',
                'hideCredits': true,
                'theme': 'light',
                'dataProvider': [{
                        'type': 'UI',
                        'visits': 10
                    }, {
                        'type': 'UX',
                        'visits': 15
                    }, {
                        'type': 'Web',
                        'visits': 12
                    }, {
                        'type': 'App',
                        'visits': 16
                    }, {
                        'type': 'SEO',
                        'visits': 8
                    }],
                'valueAxes': [{
                        'gridAlpha': 0.3,
                        'gridColor': '#fff',
                        'axisColor': 'transparent',
                        'color': '#fff',
                        'dashLength': 0
                    }],
                'gridAboveGraphs': true,
                'startDuration': 1,
                'graphs': [{
                        'balloonText': 'Active User: <b>[[value]]</b>',
                        'fillAlphas': 1,
                        'lineAlpha': 1,
                        'lineColor': '#fff',
                        'type': 'column',
                        'valueField': 'visits',
                        'columnWidth': 0.5
                    }],
                'chartCursor': {
                    'categoryBalloonEnabled': false,
                    'cursorAlpha': 0,
                    'zoomable': false
                },
                'categoryField': 'type',
                'categoryAxis': {
                    'gridPosition': 'start',
                    'gridAlpha': 0,
                    'axesAlpha': 0,
                    'lineAlpha': 0,
                    'fontSize': 12,
                    'color': '#fff',
                    'tickLength': 0
                },
                'export': {
                    'enabled': false
                }
            });
            var realtime_visit_chart = AmCharts.makeChart('realtime-visit-chart', {
                'type': 'serial',
                'theme': 'light',
                'hideCredits': true,
                'zoomOutButton': {
                    'backgroundColor': '#000000',
                    'backgroundAlpha': 0.15
                },
                'dataProvider': _this.realTimeVisitData,
                'categoryField': 'date',
                'categoryAxis': {
                    'parseDates': true,
                    'minPeriod': 'DD',
                    'dashLength': 1,
                    'gridAlpha': 0.15,
                    'axisColor': '#DADADA'
                },
                'graphs': [{
                        'id': 'g1',
                        'valueField': 'visits1',
                        'bullet': 'round',
                        'bulletBorderColor': '#FFFFFF',
                        'bulletBorderThickness': 0,
                        'lineThickness': 3,
                        'bulletAlpha': 0,
                        'type': 'smoothedLine',
                        'lineColor': '#448aff',
                        'hideBulletsCount': 10
                    }, {
                        'id': 'g2',
                        'valueField': 'visits2',
                        'bullet': 'round',
                        'type': 'smoothedLine',
                        'bulletBorderColor': '#FFFFFF',
                        'bulletBorderThickness': 2,
                        'lineThickness': 3,
                        'bulletAlpha': 0,
                        'lineColor': '#ff5252',
                        'hideBulletsCount': 50
                    }, {
                        'id': 'g3',
                        'valueField': 'visits3',
                        'bullet': 'round',
                        'type': 'smoothedLine',
                        'bulletBorderColor': '#FFFFFF',
                        'bulletBorderThickness': 0,
                        'lineThickness': 3,
                        'bulletAlpha': 0,
                        'lineColor': '#11c15b',
                        'hideBulletsCount': 0
                    }],
                'chartCursor': {
                    'cursorPosition': 'mouse'
                }
            });
            var day_count = 11;
            _this.visitChart = setInterval(function () {
                realtime_visit_chart.dataProvider.shift();
                day_count++;
                var newDate = new Date(_this.firstDate);
                newDate.setDate(newDate.getDate() + day_count);
                var visits1 = Math.round(Math.random() * 10);
                var visits2 = Math.round(Math.random() * 10);
                var visits3 = Math.round(Math.random() * 10);
                realtime_visit_chart.dataProvider.push({
                    date: newDate,
                    visits1: visits1,
                    visits2: visits2,
                    visits3: visits3
                });
                realtime_visit_chart.validateData();
            }, 2000);
        }, 1);
        setTimeout(function () {
            _this.chartEcommerce.zoomToIndexes(Math.round(_this.chartEcommerce.dataProvider.length * 0.3), Math.round(_this.chartEcommerce.dataProvider.length * 0.55));
            _this.chartEcommerceLine.zoomToIndexes(Math.round(_this.chartEcommerceLine.dataProvider.length * 0.3), Math.round(_this.chartEcommerceLine.dataProvider.length * 0.55));
        }, 2500);
    };
    ChartWidgetComponent.prototype.ngOnDestroy = function () {
        if (this.monthlyInterval) {
            clearInterval(this.monthlyInterval);
        }
        if (this.visitChart) {
            clearInterval(this.visitChart);
        }
        if (this.emailSentInterval) {
            clearInterval(this.emailSentInterval);
        }
        if (this.saleChart) {
            clearInterval(this.saleChart);
        }
        if (this.realTime) {
            clearInterval(this.realTime);
        }
    };
    ChartWidgetComponent.prototype.generateChartData = function () {
        for (var day = 0; day < 30; day++) {
            var newDate = new Date(this.firstDate);
            newDate.setDate(newDate.getDate() + day);
            var visits = Math.round(Math.random() * 40) - 20;
            this.realTimeChartData.push({
                'date': newDate,
                'visits': visits
            });
        }
    };
    ChartWidgetComponent.prototype.generateVisitChartData = function () {
        for (var day = 0; day < 10; day++) {
            var newDate = new Date(this.firstDate);
            newDate.setDate(newDate.getDate() + day);
            var visits1 = Math.round(Math.random() * 10);
            var visits2 = Math.round(Math.random() * 10);
            var visits3 = Math.round(Math.random() * 10);
            this.realTimeVisitData.push({
                'date': newDate,
                'visits1': visits1,
                'visits2': visits2,
                'visits3': visits3
            });
        }
    };
    ChartWidgetComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-chart-widget',
            template: __webpack_require__(/*! ./chart-widget.component.html */ "./src/app/theme/widget/chart-widget/chart-widget.component.html"),
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewEncapsulation"].None,
            styles: [__webpack_require__(/*! ./chart-widget.component.scss */ "./src/app/theme/widget/chart-widget/chart-widget.component.scss"), __webpack_require__(/*! ../../../../assets/charts/radial/css/radial.scss */ "./src/assets/charts/radial/css/radial.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ChartWidgetComponent);
    return ChartWidgetComponent;
}());



/***/ }),

/***/ "./src/app/theme/widget/chart-widget/chart-widget.module.ts":
/*!******************************************************************!*\
  !*** ./src/app/theme/widget/chart-widget/chart-widget.module.ts ***!
  \******************************************************************/
/*! exports provided: ChartWidgetModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChartWidgetModule", function() { return ChartWidgetModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _chart_widget_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./chart-widget.component */ "./src/app/theme/widget/chart-widget/chart-widget.component.ts");
/* harmony import */ var _chart_widget_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./chart-widget-routing.module */ "./src/app/theme/widget/chart-widget/chart-widget-routing.module.ts");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var angular2_chartjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! angular2-chartjs */ "./node_modules/angular2-chartjs/dist/index.js");
/* harmony import */ var angular2_chartjs__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(angular2_chartjs__WEBPACK_IMPORTED_MODULE_6__);







var ChartWidgetModule = /** @class */ (function () {
    function ChartWidgetModule() {
    }
    ChartWidgetModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _chart_widget_routing_module__WEBPACK_IMPORTED_MODULE_4__["ChartWidgetRoutingModule"],
                _shared_shared_module__WEBPACK_IMPORTED_MODULE_5__["SharedModule"],
                angular2_chartjs__WEBPACK_IMPORTED_MODULE_6__["ChartModule"]
            ],
            declarations: [_chart_widget_component__WEBPACK_IMPORTED_MODULE_3__["ChartWidgetComponent"]]
        })
    ], ChartWidgetModule);
    return ChartWidgetModule;
}());



/***/ })

}]);
//# sourceMappingURL=chart-widget-chart-widget-module.js.map