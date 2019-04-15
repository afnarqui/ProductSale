(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default-default-module"],{

/***/ "./src/app/theme/dashboard/default/default-routing.module.ts":
/*!*******************************************************************!*\
  !*** ./src/app/theme/dashboard/default/default-routing.module.ts ***!
  \*******************************************************************/
/*! exports provided: DefaultRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DefaultRoutingModule", function() { return DefaultRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _default_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./default.component */ "./src/app/theme/dashboard/default/default.component.ts");




var routes = [
    {
        path: '',
        component: _default_component__WEBPACK_IMPORTED_MODULE_3__["DefaultComponent"],
        data: {
            title: 'Default',
            icon: 'icon-home',
            caption: 'lorem ipsum dolor sit amet, consectetur adipisicing elit',
            status: true
        }
    }
];
var DefaultRoutingModule = /** @class */ (function () {
    function DefaultRoutingModule() {
    }
    DefaultRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], DefaultRoutingModule);
    return DefaultRoutingModule;
}());



/***/ }),

/***/ "./src/app/theme/dashboard/default/default.component.html":
/*!****************************************************************!*\
  !*** ./src/app/theme/dashboard/default/default.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n<div class=\"page-body\">\r\n  <!--<simple-notifications [options]=\"options\"></simple-notifications>-->\r\n  <div class=\"row\">\r\n    <!-- site Analytics card start -->\r\n    <div class=\"col-xl-7 col-sm-12\">\r\n      <app-card [title]=\"'Site Analytics'\" [classHeader]=\"'true'\" [headerClass]=\"'borderless'\">\r\n        <span class=\"code-header\"><span class=\"text-muted\">For more details about usage, please refer <a href=\"https://www.amcharts.com/online-store/\" target=\"_blank\">amCharts</a> licences.</span></span>\r\n        <div id=\"seo-ecommerce-barchart\" style=\"height: 350px\"></div>\r\n      </app-card>\r\n    </div>\r\n    <div class=\"col-xl-5 col-sm-12\">\r\n      <div class=\"row\">\r\n        <div class=\"col-md-6\">\r\n          <div class=\"card\">\r\n            <div class=\"card-block\">\r\n              <div class=\"row align-items-center\">\r\n                <div class=\"col-8\">\r\n                  <h4 class=\"text-c-yellow\">$3020</h4>\r\n                  <h6 class=\"text-muted m-b-0\">Earnings</h6>\r\n                </div>\r\n                <div class=\"col-4 text-right\">\r\n                  <i class=\"feather icon-bar-chart-2 f-28\"></i>\r\n                </div>\r\n              </div>\r\n            </div>\r\n            <div class=\"card-footer bg-c-yellow\">\r\n              <div class=\"row align-items-center\">\r\n                <div class=\"col-9\">\r\n                  <p class=\"text-white m-b-0\">% change</p>\r\n                </div>\r\n                <div class=\"col-3 text-right\">\r\n                  <i class=\"feather icon-trending-up text-white f-16\"></i>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <div class=\"col-md-6\">\r\n          <div class=\"card\">\r\n            <div class=\"card-block\">\r\n              <div class=\"row align-items-center\">\r\n                <div class=\"col-8\">\r\n                  <h4 class=\"text-c-green\">290+</h4>\r\n                  <h6 class=\"text-muted m-b-0\">Page Views</h6>\r\n                </div>\r\n                <div class=\"col-4 text-right\">\r\n                  <i class=\"feather icon-file-text f-28\"></i>\r\n                </div>\r\n              </div>\r\n            </div>\r\n            <div class=\"card-footer bg-c-green\">\r\n              <div class=\"row align-items-center\">\r\n                <div class=\"col-9\">\r\n                  <p class=\"text-white m-b-0\">% change</p>\r\n                </div>\r\n                <div class=\"col-3 text-right\">\r\n                  <i class=\"feather icon-trending-up text-white f-16\"></i>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div class=\"row\">\r\n        <div class=\"col-md-6\">\r\n          <div class=\"card\">\r\n            <div class=\"card-block\">\r\n              <div class=\"row align-items-center\">\r\n                <div class=\"col-8\">\r\n                  <h4 class=\"text-c-red\">145</h4>\r\n                  <h6 class=\"text-muted m-b-0\">Task</h6>\r\n                </div>\r\n                <div class=\"col-4 text-right\">\r\n                  <i class=\"feather icon-calendar f-28\"></i>\r\n                </div>\r\n              </div>\r\n            </div>\r\n            <div class=\"card-footer bg-c-red\">\r\n              <div class=\"row align-items-center\">\r\n                <div class=\"col-9\">\r\n                  <p class=\"text-white m-b-0\">% change</p>\r\n                </div>\r\n                <div class=\"col-3 text-right\">\r\n                  <i class=\"feather icon-trending-down text-white f-16\"></i>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <div class=\"col-md-6\">\r\n          <div class=\"card\">\r\n            <div class=\"card-block\">\r\n              <div class=\"row align-items-center\">\r\n                <div class=\"col-8\">\r\n                  <h4 class=\"text-c-blue\">500</h4>\r\n                  <h6 class=\"text-muted m-b-0\">Downloads</h6>\r\n                </div>\r\n                <div class=\"col-4 text-right\">\r\n                  <i class=\"feather icon-thumbs-down f-28\"></i>\r\n                </div>\r\n              </div>\r\n            </div>\r\n            <div class=\"card-footer bg-c-blue\">\r\n              <div class=\"row align-items-center\">\r\n                <div class=\"col-9\">\r\n                  <p class=\"text-white m-b-0\">% change</p>\r\n                </div>\r\n                <div class=\"col-3 text-right\">\r\n                  <i class=\"feather icon-trending-down text-white f-16\"></i>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div class=\"row\">\r\n        <div class=\"col-sm-12\">\r\n          <div class=\"card social-card bg-twitter\">\r\n            <div class=\"card-block\">\r\n              <div class=\"row align-items-center\">\r\n                <div class=\"col-auto\">\r\n                  <i class=\"feather icon-twitter f-34 text-twitter social-icon\"></i>\r\n                </div>\r\n                <div class=\"col\">\r\n                  <h6 class=\"m-b-0\">Twitter</h6>\r\n                  <p>231.2w downloads</p>\r\n                  <p class=\"m-b-0\">Lorem Ipsum is simply dummy text of the printing</p>\r\n                </div>\r\n              </div>\r\n            </div>\r\n            <a href=\"javascript:\" class=\"download-icon\"><i class=\"feather icon-arrow-down\"></i></a>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <!-- site Analytics card end -->\r\n\r\n    <!-- project and updates start -->\r\n    <div class=\"col-xl-6 col-sm-12\">\r\n      <app-card [title]=\"'Projects'\" [cardClass]=\"'table-card'\" [headerClass]=\"'borderless'\">\r\n        <div class=\"table-responsive\">\r\n          <table class=\"table table-hover\">\r\n            <thead>\r\n            <tr>\r\n              <th>\r\n                <div class=\"chk-option\">\r\n                  <div class=\"checkbox-fade fade-in-primary\">\r\n                    <label class=\"check-task\">\r\n                      <input type=\"checkbox\" id=\"selectall\"/>\r\n                      <span class=\"cr\">\r\n                        <i class=\"cr-icon feather icon-check f-w-600 txt-default\"></i>\r\n                      </span>\r\n                    </label>\r\n                  </div>\r\n                </div>\r\n                Assigned</th>\r\n              <th>Name</th>\r\n              <th>Due Date</th>\r\n              <th class=\"text-right\">Priority</th>\r\n            </tr>\r\n            </thead>\r\n            <tbody>\r\n            <tr>\r\n              <td>\r\n                <div class=\"chk-option\">\r\n                  <div class=\"checkbox-fade fade-in-primary\">\r\n                    <label class=\"check-task\">\r\n                      <input type=\"checkbox\" class=\"case\" name=\"case\" value=\"1\"/>\r\n                      <span class=\"cr\">\r\n                        <i class=\"cr-icon feather icon-check f-w-600 txt-default\"></i>\r\n                      </span>\r\n                    </label>\r\n                  </div>\r\n                </div>\r\n                <div class=\"d-inline-block align-middle\">\r\n                  <img src=\"assets/images/avatar-4.jpg\" alt=\"user image\" class=\"img-radius img-40 align-top m-r-15\">\r\n                  <div class=\"d-inline-block\">\r\n                    <h6>John Deo</h6>\r\n                    <p class=\"text-muted m-b-0\">Graphics Designer</p>\r\n                  </div>\r\n                </div>\r\n              </td>\r\n              <td>Able Pro</td>\r\n              <td>Jun, 26</td>\r\n              <td class=\"text-right\"><label class=\"label label-danger\">Low</label></td>\r\n            </tr>\r\n            <tr>\r\n              <td>\r\n                <div class=\"chk-option\">\r\n                  <div class=\"checkbox-fade fade-in-primary\">\r\n                    <label class=\"check-task\">\r\n                      <input type=\"checkbox\" class=\"case\" name=\"case\" value=\"2\"/>\r\n                      <span class=\"cr\">\r\n                        <i class=\"cr-icon feather icon-check f-w-600 txt-default\"></i>\r\n                      </span>\r\n                    </label>\r\n                  </div>\r\n                </div>\r\n                <div class=\"d-inline-block align-middle\">\r\n                  <img src=\"assets/images/avatar-2.jpg\" alt=\"user image\" class=\"img-radius img-40 align-top m-r-15\">\r\n                  <div class=\"d-inline-block\">\r\n                    <h6>Jenifer Vintage</h6>\r\n                    <p class=\"text-muted m-b-0\">Web Designer</p>\r\n                  </div>\r\n                </div>\r\n              </td>\r\n              <td>Mashable</td>\r\n              <td>March, 31</td>\r\n              <td class=\"text-right\"><label class=\"label label-primary\">high</label></td>\r\n            </tr>\r\n            <tr>\r\n              <td>\r\n                <div class=\"chk-option\">\r\n                  <div class=\"checkbox-fade fade-in-primary\">\r\n                    <label class=\"check-task\">\r\n                      <input type=\"checkbox\" class=\"case\" name=\"case\" value=\"3\"/>\r\n                      <span class=\"cr\">\r\n                        <i class=\"cr-icon feather icon-check f-w-600 txt-default\"></i>\r\n                      </span>\r\n                    </label>\r\n                  </div>\r\n                </div>\r\n                <div class=\"d-inline-block align-middle\">\r\n                  <img src=\"assets/images/avatar-3.jpg\" alt=\"user image\" class=\"img-radius img-40 align-top m-r-15\">\r\n                  <div class=\"d-inline-block\">\r\n                    <h6>William Jem</h6>\r\n                    <p class=\"text-muted m-b-0\">Developer</p>\r\n                  </div>\r\n                </div>\r\n              </td>\r\n              <td>Flatable</td>\r\n              <td>Aug, 02</td>\r\n              <td class=\"text-right\"><label class=\"label label-success\">medium</label></td>\r\n            </tr>\r\n            <tr>\r\n              <td>\r\n                <div class=\"chk-option\">\r\n                  <div class=\"checkbox-fade fade-in-primary\">\r\n                    <label class=\"check-task\">\r\n                      <input type=\"checkbox\" class=\"case\" name=\"case\" value=\"4\"/>\r\n                      <span class=\"cr\">\r\n                        <i class=\"cr-icon feather icon-check f-w-600 txt-default\"></i>\r\n                      </span>\r\n                    </label>\r\n                  </div>\r\n                </div>\r\n                <div class=\"d-inline-block align-middle\">\r\n                  <img src=\"assets/images/avatar-2.jpg\" alt=\"user image\" class=\"img-radius img-40 align-top m-r-15\">\r\n                  <div class=\"d-inline-block\">\r\n                    <h6>David Jones</h6>\r\n                    <p class=\"text-muted m-b-0\">Developer</p>\r\n                  </div>\r\n                </div>\r\n              </td>\r\n              <td>Guruable</td>\r\n              <td>Sep, 22</td>\r\n              <td class=\"text-right\"><label class=\"label label-primary\">high</label></td>\r\n            </tr>\r\n            </tbody>\r\n          </table>\r\n          <div class=\"text-right m-r-20\">\r\n            <a href=\"javascript:\" class=\" b-b-primary text-primary\">View all Projects</a>\r\n          </div>\r\n        </div>\r\n      </app-card>\r\n    </div>\r\n    <div class=\"col-xl-6 col-sm-12\">\r\n      <app-card [title]=\"'Latest Updates'\" [cardClass]=\"'latest-update-card'\" [headerClass]=\"'borderless'\">\r\n        <div class=\"latest-update-box\">\r\n          <div class=\"row p-t-20 p-b-20\">\r\n            <div class=\"col-auto text-right update-meta\">\r\n              <p class=\"text-muted m-b-0 d-inline\">4 hrs ago</p>\r\n              <i class=\"feather icon-briefcase bg-c-red update-icon\"></i>\r\n            </div>\r\n            <div class=\"col\">\r\n              <h6>+ 5 New Products were added!</h6>\r\n              <p class=\"text-muted m-b-0\">Congratulations!</p>\r\n            </div>\r\n          </div>\r\n          <div class=\"row p-t-20 p-b-20\">\r\n            <div class=\"col-auto text-right update-meta\">\r\n              <p class=\"text-muted m-b-0 d-inline\">1 day ago</p>\r\n              <i class=\"feather icon-check bg-c-green  update-icon\"></i>\r\n            </div>\r\n            <div class=\"col\">\r\n              <h6>Database backup completed!</h6>\r\n              <p class=\"text-muted m-b-0\">Download the <span> <a href=\"javascript:\" target=\"_top\" class=\"text-c-blue\">latest backup</a> </span>.</p>\r\n            </div>\r\n          </div>\r\n          <div class=\"row p-t-20 p-b-20\">\r\n            <div class=\"col-auto text-right update-meta\">\r\n              <p class=\"text-muted m-b-0 d-inline\">2 day ago</p>\r\n              <i class=\"feather icon-facebook bg-facebook update-icon\"></i>\r\n            </div>\r\n            <div class=\"col\">\r\n              <h6>+1 Friend Requests</h6>\r\n              <p class=\"text-muted m-b-10\">This is great, keep it up!</p>\r\n              <div class=\"table-responsive\">\r\n                <table class=\"table table-hover m-b-0\">\r\n                  <tbody>\r\n                  <tr>\r\n                    <td class=\"b-none\">\r\n                      <a href=\"javascript:\" class=\"align-middle\">\r\n                        <img src=\"assets/images/avatar-2.jpg\" alt=\"user image\" class=\"img-radius img-40 align-top m-r-15\">\r\n                        <div class=\"d-inline-block\">\r\n                          <h6>Jeny William</h6>\r\n                          <p class=\"text-muted m-b-0\">Graphic Designer</p>\r\n                        </div>\r\n                      </a>\r\n                    </td>\r\n                  </tr>\r\n                  <tr>\r\n                    <td class=\"b-none\">\r\n                      <a href=\"javascript:\" class=\"align-middle\">\r\n                        <img src=\"assets/images/avatar-3.jpg\" alt=\"user image\" class=\"img-radius img-40 align-top m-r-15\">\r\n                        <div class=\"d-inline-block\">\r\n                          <h6>John Deo</h6>\r\n                          <p class=\"text-muted m-b-0\">Web Designer</p>\r\n                        </div>\r\n                      </a>\r\n                    </td>\r\n                  </tr>\r\n                  </tbody>\r\n                </table>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <div class=\"text-center\">\r\n          <a href=\"javascript:\" class=\"b-b-primary text-primary\">View all Projects</a>\r\n        </div>\r\n      </app-card>\r\n    </div>\r\n    <!-- project and updates end -->\r\n\r\n    <!-- sale card start -->\r\n    <div class=\"col-xl-3 col-md-6\">\r\n      <div class=\"card bg-c-blue total-card\">\r\n        <div class=\"card-block\">\r\n          <div class=\"text-left\">\r\n            <h4>4000</h4>\r\n            <p class=\"m-0\">Total Sales</p>\r\n          </div>\r\n          <span class=\"label bg-c-blue value-badges\">12%</span>\r\n        </div>\r\n        <div id=\"total-value-graph-1\" style=\"height:100px;\"></div>\r\n      </div>\r\n    </div>\r\n    <div class=\"col-xl-3 col-md-6\">\r\n      <div class=\"card bg-c-red total-card\">\r\n        <div class=\"card-block\">\r\n          <div class=\"text-left\">\r\n            <h4>489</h4>\r\n            <p class=\"m-0\">Total Comment</p>\r\n          </div>\r\n          <span class=\"label bg-c-red value-badges\">15%</span>\r\n        </div>\r\n        <div id=\"total-value-graph-2\" style=\"height:100px;\"></div>\r\n      </div>\r\n    </div>\r\n    <div class=\"col-xl-3 col-md-6\">\r\n      <div class=\"card bg-c-green total-card\">\r\n        <div class=\"card-block\">\r\n          <div class=\"text-left\">\r\n            <h4>$5782</h4>\r\n            <p class=\"m-0\">Income Status</p>\r\n          </div>\r\n          <span class=\"label bg-c-green value-badges\">20%</span>\r\n        </div>\r\n        <div id=\"total-value-graph-3\" style=\"height:100px;\"></div>\r\n      </div>\r\n    </div>\r\n    <div class=\"col-xl-3 col-md-6\">\r\n      <div class=\"card bg-c-yellow total-card\">\r\n        <div class=\"card-block\">\r\n          <div class=\"text-left\">\r\n            <h4>378</h4>\r\n            <p class=\"m-0\">Total Visitors</p>\r\n          </div>\r\n          <span class=\"label bg-c-yellow value-badges\">23%</span>\r\n        </div>\r\n        <div id=\"total-value-graph-4\" style=\"height:100px;\"></div>\r\n      </div>\r\n    </div>\r\n    <!-- sale card end -->\r\n\r\n    <!-- project and updates start -->\r\n    <div class=\"col-xl-8 col-md-7 col-sm-12\">\r\n      <app-card [title]=\"'Customer Reviews'\" [headerClass]=\"'borderless'\" [cardClass]=\"'table-card review-card'\">\r\n        <div class=\"review-block\">\r\n          <div class=\"row\">\r\n            <div class=\"col-sm-auto p-r-0\">\r\n              <img src=\"assets/images/avatar-2.jpg\" alt=\"user image\" class=\"img-radius profile-img cust-img m-b-15\">\r\n            </div>\r\n            <div class=\"col\">\r\n              <h6 class=\"m-b-15\">John Deo <span class=\"float-right f-13 text-muted\"> a week ago</span></h6>\r\n              <a href=\"javascript:\"><i class=\"feather icon-star-on f-18 text-c-yellow\"></i></a>\r\n              <a href=\"javascript:\"><i class=\"feather icon-star-on f-18 text-c-yellow\"></i></a>\r\n              <a href=\"javascript:\"><i class=\"feather icon-star-on f-18 text-c-yellow\"></i></a>\r\n              <a href=\"javascript:\"><i class=\"feather icon-star f-18 text-default\"></i></a>\r\n              <a href=\"javascript:\"><i class=\"feather icon-star f-18 text-default\"></i></a>\r\n              <p class=\"m-t-15 m-b-15 text-muted\">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a\r\n                galley of type and scrambled it to make a type specimen book.</p>\r\n              <a href=\"javascript:\" class=\"m-r-30\"><i class=\"feather icon-thumbs-up m-r-15\"></i>Helpful?</a>\r\n              <a href=\"javascript:\"><i class=\"feather icon-heart-on text-c-red m-r-15\"></i></a>\r\n              <a href=\"javascript:\"><i class=\"feather icon-edit\"></i></a>\r\n            </div>\r\n          </div>\r\n          <div class=\"row\">\r\n            <div class=\"col-sm-auto p-r-0\">\r\n              <img src=\"assets/images/avatar-4.jpg\" alt=\"user image\" class=\"img-radius profile-img cust-img m-b-15\">\r\n            </div>\r\n            <div class=\"col\">\r\n              <h6 class=\"m-b-15\">Allina D’croze <span class=\"float-right f-13 text-muted\"> a week ago</span></h6>\r\n              <a href=\"javascript:\"><i class=\"feather icon-star-on f-18 text-c-yellow\"></i></a>\r\n              <a href=\"javascript:\"><i class=\"feather icon-star f-18 text-default\"></i></a>\r\n              <a href=\"javascript:\"><i class=\"feather icon-star f-18 text-default\"></i></a>\r\n              <a href=\"javascript:\"><i class=\"feather icon-star f-18 text-default\"></i></a>\r\n              <a href=\"javascript:\"><i class=\"feather icon-star f-18 text-default\"></i></a>\r\n              <p class=\"m-t-15 m-b-15 text-muted\">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a\r\n                galley of type and scrambled it to make a type specimen book.</p>\r\n              <a href=\"javascript:\" class=\"m-r-30\"><i class=\"feather icon-thumbs-up m-r-15\"></i>Helpful?</a>\r\n              <a href=\"javascript:\"><i class=\"feather icon-heart-on text-c-red m-r-15\"></i></a>\r\n              <a href=\"javascript:\"><i class=\"feather icon-edit\"></i></a>\r\n              <blockquote class=\"blockquote m-t-15 m-b-0\">\r\n                <h6>Allina D’croze</h6>\r\n                <p class=\"m-b-0 text-muted\">Lorem Ipsum is simply dummy text of the industry.</p>\r\n              </blockquote>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <div class=\"text-right  m-r-20\">\r\n          <a href=\"javascript:\" class=\"b-b-primary text-primary\">View all Customer Reviews</a>\r\n        </div>\r\n      </app-card>\r\n      <div class=\"row\">\r\n        <div class=\"col-md-6\">\r\n          <div class=\"card\">\r\n            <div class=\"card-header borderless\">\r\n              <div class=\"card-header-left\">\r\n                <h5>Power</h5>\r\n              </div>\r\n            </div>\r\n            <div class=\"card-block-big card-power\">\r\n              <h2>2789<span class=\"text-muted m-l-5 f-14\">kw</span></h2>\r\n              <div id=\"power-card-chart1\" style=\"height:75px\"></div>\r\n              <div class=\"row\">\r\n                <div class=\"col col-auto\">\r\n                  <div class=\"map-area\">\r\n                    <h6 class=\"m-0\">2876 <span> kw</span></h6>\r\n                    <p class=\"text-muted m-0\">month</p>\r\n                  </div>\r\n                </div>\r\n                <div class=\"col col-auto\">\r\n                  <div class=\"map-area\">\r\n                    <h6 class=\"m-0\">234 <span> kw</span></h6>\r\n                    <p class=\"text-muted m-0\">Today</p>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <div class=\"col-md-6\">\r\n          <div class=\"card\">\r\n            <div class=\"card-header borderless\">\r\n              <div class=\"card-header-left\">\r\n                <h5>Water</h5>\r\n              </div>\r\n            </div>\r\n            <div class=\"card-block-big card-power\">\r\n              <h2>7.3<span class=\"text-muted m-l-10 f-14\">m3</span></h2>\r\n              <div id=\"power-card-chart2\" style=\"height:75px\"></div>\r\n              <div class=\"row\">\r\n                <div class=\"col col-auto\">\r\n                  <div class=\"map-area\">\r\n                    <h6 class=\"m-0\">4.5 <span> m3</span></h6>\r\n                    <p class=\"text-muted m-0\">month</p>\r\n                  </div>\r\n                </div>\r\n                <div class=\"col col-auto\">\r\n                  <div class=\"map-area\">\r\n                    <h6 class=\"m-0\">0.5 <span> m3</span></h6>\r\n                    <p class=\"text-muted m-0\">Today</p>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"col-xl-4 col-md-5 col-sm-12\">\r\n      <app-card [title]=\"'Chat'\" [headerClass]=\"'borderless'\" [cardClass]=\"'chat-card'\">\r\n        <div class=\"row m-b-20 received-chat\">\r\n          <div class=\"col-auto p-r-0\">\r\n            <img src=\"assets/images/avatar-2.jpg\" alt=\"user image\" class=\"img-radius img-40\">\r\n          </div>\r\n          <div class=\"col\">\r\n            <div class=\"msg\">\r\n              <p class=\"m-b-0\">Nice to meet you!</p>\r\n            </div>\r\n            <p class=\"text-muted m-b-0\"><i class=\"feather icon-clock m-r-10\"></i>10:20am</p>\r\n          </div>\r\n        </div>\r\n        <div class=\"row m-b-20 send-chat\">\r\n          <div class=\"col\">\r\n            <div class=\"msg\">\r\n              <p class=\"m-b-0\">Nice to meet you!</p>\r\n            </div>\r\n            <p class=\"text-muted m-b-0\"><i class=\"feather icon-clock m-r-10\"></i>10:20am</p>\r\n          </div>\r\n          <div class=\"col-auto p-l-0\">\r\n            <img src=\"assets/images/avatar-3.jpg\" alt=\"user image\" class=\"img-radius img-40\">\r\n          </div>\r\n        </div>\r\n        <div class=\"row m-b-20 received-chat\">\r\n          <div class=\"col-auto p-r-0\">\r\n            <img src=\"assets/images/avatar-2.jpg\" alt=\"user image\" class=\"img-radius img-40\">\r\n          </div>\r\n          <div class=\"col\">\r\n            <div class=\"msg\">\r\n              <p class=\"m-b-0\">Nice to meet you!</p>\r\n              <img src=\"assets/images/mega-menu/01.jpg\" alt=\"\">\r\n              <img src=\"assets/images/mega-menu/03.jpg\" alt=\"\">\r\n            </div>\r\n            <p class=\"text-muted m-b-0\"><i class=\"feather icon-clock m-r-10\"></i>10:20am</p>\r\n          </div>\r\n        </div>\r\n        <div class=\"right-icon-control\">\r\n          <form class=\"form-material\" action=\"javascript:\">\r\n            <div class=\"form-group form-primary\">\r\n              <input type=\"text\" name=\"footer-email\" class=\"form-control\" required=\"\">\r\n              <span class=\"form-bar\"></span>\r\n              <label class=\"float-label\">Add Task</label>\r\n            </div>\r\n          </form>\r\n          <div class=\"form-icon \">\r\n            <button type=\"button\" class=\"btn btn-success btn-icon waves-effect waves-light\">\r\n              <i class=\"feather icon-message-circle\"></i>\r\n            </button>\r\n          </div>\r\n        </div>\r\n      </app-card>\r\n\r\n      <div class=\"card user-card2\">\r\n        <div class=\"card-block text-center\">\r\n          <h6 class=\"m-b-15\">Project Risk</h6>\r\n          <div class=\"risk-rate\">\r\n            <span><b>5</b></span>\r\n          </div>\r\n          <h6 class=\"m-b-10 m-t-10\">Balanced</h6>\r\n          <a href=\"javascript:\" class=\"text-c-green b-b-success\">Change Your Risk</a>\r\n          <div class=\"row justify-content-center m-t-15 b-t-default m-l-0 m-r-0\">\r\n            <div class=\"col m-t-15 b-r-default\">\r\n              <h6 class=\"text-muted\">Nr</h6>\r\n              <h6>AWS 2455</h6>\r\n            </div>\r\n            <div class=\"col m-t-15\">\r\n              <h6 class=\"text-muted\">Created</h6>\r\n              <h6>30th Sep</h6>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <button type=\"button\" class=\"btn btn-success btn-block p-t-15 p-b-15\">Download Overall Report</button>\r\n      </div>\r\n    </div>\r\n    <!-- project and updates end -->\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/theme/dashboard/default/default.component.scss":
/*!****************************************************************!*\
  !*** ./src/app/theme/dashboard/default/default.component.scss ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3RoZW1lL2Rhc2hib2FyZC9kZWZhdWx0L2RlZmF1bHQuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/theme/dashboard/default/default.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/theme/dashboard/default/default.component.ts ***!
  \**************************************************************/
/*! exports provided: DefaultComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DefaultComponent", function() { return DefaultComponent; });
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













var DefaultComponent = /** @class */ (function () {
    function DefaultComponent() {
        this.options = {
            position: ['bottom', 'right'],
        };
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
    DefaultComponent.prototype.ngOnInit = function () {
        var _this = this;
        setTimeout(function () {
            _this.chartEcommerce = AmCharts.makeChart('seo-ecommerce-barchart', {
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
                    curvedLines: {
                        apply: true,
                    }
                }], _this.chartOption);
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
                        [35, 27],
                        [50, 10],
                        [65, 20],
                        [75, 10],
                        [90, 18],
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
        }, 75);
        setTimeout(function () {
            _this.chartEcommerce.zoomToIndexes(Math.round(_this.chartEcommerce.dataProvider.length * 0.3), Math.round(_this.chartEcommerce.dataProvider.length * 0.55));
        }, 2500);
    };
    DefaultComponent.prototype.ngAfterViewInit = function () {
        /*setTimeout(() => {
          const windowWidth = window.innerWidth;
          if (windowWidth > 992) {
            this.options = {
              position: ['bottom', 'right'],
              maxStack: 8,
              timeOut: 2000,
              showProgressBar: true,
              pauseOnHover: true,
              lastOnBottom: true,
              clickToClose: true,
              preventDuplicates: false,
              preventLastDuplicates: false,
              theClass: 'bg-c-red no-icon',
              rtl: false,
              animate: 'rotate'
            };
            let html = '<h4>Live customizer</h4> <p>Click on Right Gear icon <i class="feather icon-settings"></i>';
            html += 'for apply live styles very first time in Angular 7+.</p>';
            this.servicePNotify.html(
              html,
              'success'
            );
          }
        }, 75);*/
    };
    DefaultComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-default',
            template: __webpack_require__(/*! ./default.component.html */ "./src/app/theme/dashboard/default/default.component.html"),
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewEncapsulation"].None,
            styles: [__webpack_require__(/*! ./default.component.scss */ "./src/app/theme/dashboard/default/default.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], DefaultComponent);
    return DefaultComponent;
}());



/***/ }),

/***/ "./src/app/theme/dashboard/default/default.module.ts":
/*!***********************************************************!*\
  !*** ./src/app/theme/dashboard/default/default.module.ts ***!
  \***********************************************************/
/*! exports provided: DefaultModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DefaultModule", function() { return DefaultModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _default_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./default-routing.module */ "./src/app/theme/dashboard/default/default-routing.module.ts");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var angular2_chartjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! angular2-chartjs */ "./node_modules/angular2-chartjs/dist/index.js");
/* harmony import */ var angular2_chartjs__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(angular2_chartjs__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _agm_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @agm/core */ "./node_modules/@agm/core/index.js");
/* harmony import */ var _default_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./default.component */ "./src/app/theme/dashboard/default/default.component.ts");






/*import {SimpleNotificationsModule} from 'angular2-notifications';*/


var DefaultModule = /** @class */ (function () {
    function DefaultModule() {
    }
    DefaultModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _default_routing_module__WEBPACK_IMPORTED_MODULE_3__["DefaultRoutingModule"],
                _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"],
                angular2_chartjs__WEBPACK_IMPORTED_MODULE_5__["ChartModule"],
                /*SimpleNotificationsModule.forRoot(),*/
                _agm_core__WEBPACK_IMPORTED_MODULE_6__["AgmCoreModule"].forRoot({ apiKey: 'AIzaSyCE0nvTeHBsiQIrbpMVTe489_O5mwyqofk' })
            ],
            declarations: [
                _default_component__WEBPACK_IMPORTED_MODULE_7__["DefaultComponent"]
            ],
            bootstrap: [_default_component__WEBPACK_IMPORTED_MODULE_7__["DefaultComponent"]]
        })
    ], DefaultModule);
    return DefaultModule;
}());



/***/ })

}]);
//# sourceMappingURL=default-default-module.js.map