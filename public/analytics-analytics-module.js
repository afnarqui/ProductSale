(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["analytics-analytics-module"],{

/***/ "./src/app/theme/dashboard/analytics/analytics-routing.module.ts":
/*!***********************************************************************!*\
  !*** ./src/app/theme/dashboard/analytics/analytics-routing.module.ts ***!
  \***********************************************************************/
/*! exports provided: AnalyticsRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AnalyticsRoutingModule", function() { return AnalyticsRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _analytics_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./analytics.component */ "./src/app/theme/dashboard/analytics/analytics.component.ts");




var routes = [
    {
        path: '',
        component: _analytics_component__WEBPACK_IMPORTED_MODULE_3__["AnalyticsComponent"],
        data: {
            title: 'Analytics',
            icon: 'icon-home',
            caption: 'lorem ipsum dolor sit amet, consectetur adipisicing elit',
            status: true
        }
    }
];
var AnalyticsRoutingModule = /** @class */ (function () {
    function AnalyticsRoutingModule() {
    }
    AnalyticsRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AnalyticsRoutingModule);
    return AnalyticsRoutingModule;
}());



/***/ }),

/***/ "./src/app/theme/dashboard/analytics/analytics.component.html":
/*!********************************************************************!*\
  !*** ./src/app/theme/dashboard/analytics/analytics.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"page-body\">\r\n  <div class=\"row\">\r\n\r\n    <!-- amount start -->\r\n    <div class=\"col-md-6 col-xl-4\">\r\n      <div class=\"card amount-card o-hidden\">\r\n        <div class=\"card-block\">\r\n          <h2 class=\"f-w-400\">$23,567</h2>\r\n          <p class=\"text-muted f-w-600 f-16\"><span class=\"text-c-blue\">Amount</span> Processed</p>\r\n        </div>\r\n        <div id=\"amount-processed\" style=\"height:50px\"></div>\r\n      </div>\r\n    </div>\r\n    <div class=\"col-md-6 col-xl-4\">\r\n      <div class=\"card amount-card o-hidden\">\r\n        <div class=\"card-block\">\r\n          <h2 class=\"f-w-400\">$14,552</h2>\r\n          <p class=\"text-muted f-w-600 f-16\"><span class=\"text-c-green\">Amount</span> Spent</p>\r\n        </div>\r\n        <div id=\"amount-spent\" style=\"height:50px\"></div>\r\n      </div>\r\n    </div>\r\n    <div class=\"col-md-12 col-xl-4\">\r\n      <div class=\"card amount-card o-hidden\">\r\n        <div class=\"card-block\">\r\n          <h2 class=\"f-w-400\">$31,156</h2>\r\n          <p class=\"text-muted f-w-600 f-16\"><span class=\"text-c-yellow\">Profit</span> Processed\r\n          </p>\r\n        </div>\r\n        <div id=\"profit-processed\" style=\"height:50px\"></div>\r\n      </div>\r\n    </div>\r\n    <!-- amount end -->\r\n\r\n    <!-- page statustic card start -->\r\n    <div class=\"col-xl-3 col-md-6\">\r\n      <div class=\"card\">\r\n        <div class=\"card-block\">\r\n          <div class=\"row align-items-center\">\r\n            <div class=\"col-8\">\r\n              <h4 class=\"text-c-yellow\">$30200</h4>\r\n              <h6 class=\"text-muted m-b-0\">All Earnings</h6>\r\n            </div>\r\n            <div class=\"col-4 text-right\">\r\n              <i class=\"feather icon-bar-chart-2 f-28\"></i>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <div class=\"card-footer bg-c-yellow\">\r\n          <div class=\"row align-items-center\">\r\n            <div class=\"col-9\">\r\n              <p class=\"text-white m-b-0\">% change</p>\r\n            </div>\r\n            <div class=\"col-3 text-right\">\r\n              <i class=\"feather icon-trending-up text-white f-16\"></i>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"col-xl-3 col-md-6\">\r\n      <div class=\"card\">\r\n        <div class=\"card-block\">\r\n          <div class=\"row align-items-center\">\r\n            <div class=\"col-8\">\r\n              <h4 class=\"text-c-green\">290+</h4>\r\n              <h6 class=\"text-muted m-b-0\">Page Views</h6>\r\n            </div>\r\n            <div class=\"col-4 text-right\">\r\n              <i class=\"feather icon-file-text f-28\"></i>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <div class=\"card-footer bg-c-green\">\r\n          <div class=\"row align-items-center\">\r\n            <div class=\"col-9\">\r\n              <p class=\"text-white m-b-0\">% change</p>\r\n            </div>\r\n            <div class=\"col-3 text-right\">\r\n              <i class=\"feather icon-trending-up text-white f-16\"></i>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"col-xl-3 col-md-6\">\r\n      <div class=\"card\">\r\n        <div class=\"card-block\">\r\n          <div class=\"row align-items-center\">\r\n            <div class=\"col-8\">\r\n              <h4 class=\"text-c-red\">145</h4>\r\n              <h6 class=\"text-muted m-b-0\">Task</h6>\r\n            </div>\r\n            <div class=\"col-4 text-right\">\r\n              <i class=\"feather icon-calendar f-28\"></i>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <div class=\"card-footer bg-c-red\">\r\n          <div class=\"row align-items-center\">\r\n            <div class=\"col-9\">\r\n              <p class=\"text-white m-b-0\">% change</p>\r\n            </div>\r\n            <div class=\"col-3 text-right\">\r\n              <i class=\"feather icon-trending-down text-white f-16\"></i>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"col-xl-3 col-md-6\">\r\n      <div class=\"card\">\r\n        <div class=\"card-block\">\r\n          <div class=\"row align-items-center\">\r\n            <div class=\"col-8\">\r\n              <h4 class=\"text-c-blue\">500</h4>\r\n              <h6 class=\"text-muted m-b-0\">Downloads</h6>\r\n            </div>\r\n            <div class=\"col-4 text-right\">\r\n              <i class=\"feather icon-thumbs-down f-28\"></i>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <div class=\"card-footer bg-c-blue\">\r\n          <div class=\"row align-items-center\">\r\n            <div class=\"col-9\">\r\n              <p class=\"text-white m-b-0\">% change</p>\r\n            </div>\r\n            <div class=\"col-3 text-right\">\r\n              <i class=\"feather icon-trending-down text-white f-16\"></i>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <!-- page statustic card end -->\r\n\r\n    <div class=\"col-xl-8 col-md-12\">\r\n      <app-card [title]=\"'Sales Analytics'\" [headerClass]=\"'borderless'\">\r\n        <div id=\"sales-analytics\" style=\"height: 360px;\"></div>\r\n      </app-card>\r\n    </div>\r\n    <div class=\"col-xl-4 col-md-12\">\r\n      <div class=\"card\">\r\n        <div class=\"card-block\">\r\n          <h3>20500</h3>\r\n          <p class=\"text-muted\">Site Analysis</p>\r\n          <div id=\"seo-anlytics1\" style=\"height:50px\"></div>\r\n        </div>\r\n      </div>\r\n      <div class=\"card bg-c-blue text-white widget-visitor-card\">\r\n        <div class=\"card-block-small text-center\">\r\n          <h2>5,678</h2>\r\n          <h6>Daily Visitor</h6>\r\n          <i class=\"feather icon-file-text\"></i>\r\n        </div>\r\n      </div>\r\n      <div class=\"card bg-c-yellow text-white widget-visitor-card\">\r\n        <div class=\"card-block-small text-center\">\r\n          <h2>5,678</h2>\r\n          <h6>Last Month Visitor</h6>\r\n          <i class=\"feather icon-award\"></i>\r\n        </div>\r\n      </div>\r\n    </div>\r\n\r\n    <!-- seo start -->\r\n    <div class=\"col-xl-6 col-md-12\">\r\n      <app-card [title]=\"'Allocation'\">\r\n        <div class=\"row\">\r\n          <div class=\"col-sm-8\">\r\n            <div id=\"allocation-map\" style=\"height:250px\"></div>\r\n          </div>\r\n          <div class=\"col-sm-4\">\r\n            <div id=\"allocation-chart\" style=\"height:250px\"></div>\r\n          </div>\r\n        </div>\r\n      </app-card>\r\n    </div>\r\n    <div class=\"col-xl-6 col-md-12\">\r\n      <div class=\"card\">\r\n        <div class=\"card-block\">\r\n          <div class=\"row align-items-center\">\r\n            <div class=\"col-6\">\r\n              <h3>$16,756</h3>\r\n              <h6 class=\"text-muted m-b-0\">Visits<i class=\"fa fa-caret-down text-c-red m-l-10\"></i></h6>\r\n            </div>\r\n            <div class=\"col-6\">\r\n              <div id=\"seo-chart1\" style=\"height:50px\"></div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div class=\"card\">\r\n        <div class=\"card-block\">\r\n          <div class=\"row align-items-center\">\r\n            <div class=\"col-6\">\r\n              <h3>49.54%</h3>\r\n              <h6 class=\"text-muted m-b-0\">Bounce Rate<i class=\"fa fa-caret-up text-c-green m-l-10\"></i></h6>\r\n            </div>\r\n            <div class=\"col-6\">\r\n              <div id=\"seo-chart2\" style=\"height:50px\"></div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div class=\"card\">\r\n        <div class=\"card-block\">\r\n          <div class=\"row align-items-center\">\r\n            <div class=\"col-6\">\r\n              <h3>16,256</h3>\r\n              <h6 class=\"text-muted m-b-0\">Products<i class=\"fa fa-caret-down text-c-red m-l-10\"></i></h6>\r\n            </div>\r\n            <div class=\"col-6\">\r\n              <div id=\"seo-chart3\" style=\"height:50px\"></div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <!-- seo end -->\r\n\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/theme/dashboard/analytics/analytics.component.scss":
/*!********************************************************************!*\
  !*** ./src/app/theme/dashboard/analytics/analytics.component.scss ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3RoZW1lL2Rhc2hib2FyZC9hbmFseXRpY3MvYW5hbHl0aWNzLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/theme/dashboard/analytics/analytics.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/theme/dashboard/analytics/analytics.component.ts ***!
  \******************************************************************/
/*! exports provided: AnalyticsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AnalyticsComponent", function() { return AnalyticsComponent; });
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













var AnalyticsComponent = /** @class */ (function () {
    function AnalyticsComponent() {
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
    AnalyticsComponent.prototype.ngOnInit = function () {
        var _this = this;
        setTimeout(function () {
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
        }, 75);
        setTimeout(function () {
            _this.chartEcommerce.zoomToIndexes(Math.round(_this.chartEcommerce.dataProvider.length * 0.3), Math.round(_this.chartEcommerce.dataProvider.length * 0.55));
        }, 2500);
    };
    AnalyticsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-analytics',
            template: __webpack_require__(/*! ./analytics.component.html */ "./src/app/theme/dashboard/analytics/analytics.component.html"),
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewEncapsulation"].None,
            styles: [__webpack_require__(/*! ./analytics.component.scss */ "./src/app/theme/dashboard/analytics/analytics.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], AnalyticsComponent);
    return AnalyticsComponent;
}());



/***/ }),

/***/ "./src/app/theme/dashboard/analytics/analytics.module.ts":
/*!***************************************************************!*\
  !*** ./src/app/theme/dashboard/analytics/analytics.module.ts ***!
  \***************************************************************/
/*! exports provided: AnalyticsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AnalyticsModule", function() { return AnalyticsModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _analytics_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./analytics.component */ "./src/app/theme/dashboard/analytics/analytics.component.ts");
/* harmony import */ var _analytics_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./analytics-routing.module */ "./src/app/theme/dashboard/analytics/analytics-routing.module.ts");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var angular2_chartjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! angular2-chartjs */ "./node_modules/angular2-chartjs/dist/index.js");
/* harmony import */ var angular2_chartjs__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(angular2_chartjs__WEBPACK_IMPORTED_MODULE_6__);







var AnalyticsModule = /** @class */ (function () {
    function AnalyticsModule() {
    }
    AnalyticsModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _analytics_routing_module__WEBPACK_IMPORTED_MODULE_4__["AnalyticsRoutingModule"],
                _shared_shared_module__WEBPACK_IMPORTED_MODULE_5__["SharedModule"],
                angular2_chartjs__WEBPACK_IMPORTED_MODULE_6__["ChartModule"]
            ],
            declarations: [_analytics_component__WEBPACK_IMPORTED_MODULE_3__["AnalyticsComponent"]]
        })
    ], AnalyticsModule);
    return AnalyticsModule;
}());



/***/ })

}]);
//# sourceMappingURL=analytics-analytics-module.js.map