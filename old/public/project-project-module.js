(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["project-project-module"],{

/***/ "./src/app/theme/dashboard/project/project-routing.module.ts":
/*!*******************************************************************!*\
  !*** ./src/app/theme/dashboard/project/project-routing.module.ts ***!
  \*******************************************************************/
/*! exports provided: ProjectRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProjectRoutingModule", function() { return ProjectRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _project_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./project.component */ "./src/app/theme/dashboard/project/project.component.ts");




var routes = [
    {
        path: '',
        component: _project_component__WEBPACK_IMPORTED_MODULE_3__["ProjectComponent"],
        data: {
            title: 'Project',
            icon: 'icon-home',
            caption: 'lorem ipsum dolor sit amet, consectetur adipisicing elit - project',
            status: true
        }
    }
];
var ProjectRoutingModule = /** @class */ (function () {
    function ProjectRoutingModule() {
    }
    ProjectRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], ProjectRoutingModule);
    return ProjectRoutingModule;
}());



/***/ }),

/***/ "./src/app/theme/dashboard/project/project.component.html":
/*!****************************************************************!*\
  !*** ./src/app/theme/dashboard/project/project.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"page-body\">\r\n  <div class=\"row\">\r\n\r\n    <!-- customar project  start -->\r\n    <div class=\"col-xl-3 col-md-6\">\r\n      <div class=\"card\">\r\n        <div class=\"card-block\">\r\n          <div class=\"row align-items-center m-l-0\">\r\n            <div class=\"col-auto\">\r\n              <i class=\"icon feather icon-book f-30 text-c-purple\"></i>\r\n            </div>\r\n            <div class=\"col-auto\">\r\n              <h6 class=\"text-muted m-b-10\">Tickets Answered</h6>\r\n              <h2 class=\"m-b-0\">379</h2>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"col-xl-3 col-md-6\">\r\n      <div class=\"card\">\r\n        <div class=\"card-block\">\r\n          <div class=\"row align-items-center m-l-0\">\r\n            <div class=\"col-auto\">\r\n              <i class=\"icon feather icon-navigation-2 f-30 text-c-green\"></i>\r\n            </div>\r\n            <div class=\"col-auto\">\r\n              <h6 class=\"text-muted m-b-10\">Projects Launched</h6>\r\n              <h2 class=\"m-b-0\">205</h2>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"col-xl-3 col-md-6\">\r\n      <div class=\"card\">\r\n        <div class=\"card-block\">\r\n          <div class=\"row align-items-center m-l-0\">\r\n            <div class=\"col-auto\">\r\n              <i class=\"icon feather icon-users f-30 text-c-red\"></i>\r\n            </div>\r\n            <div class=\"col-auto\">\r\n              <h6 class=\"text-muted m-b-10\">Happy Customers</h6>\r\n              <h2 class=\"m-b-0\">5984</h2>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"col-xl-3 col-md-6\">\r\n      <div class=\"card\">\r\n        <div class=\"card-block\">\r\n          <div class=\"row align-items-center m-l-0\">\r\n            <div class=\"col-auto\">\r\n              <i class=\"icon feather icon-award f-30 text-c-blue\"></i>\r\n            </div>\r\n            <div class=\"col-auto\">\r\n              <h6 class=\"text-muted m-b-10\">Unique Innovation</h6>\r\n              <h2 class=\"m-b-0\">325</h2>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <!-- customar project  end -->\r\n\r\n    <div class=\"col-md-12 col-xl-8\">\r\n      <app-card [title]=\"'Products Sales'\">\r\n        <div id=\"product-sales-chart\" style=\"height: 225px\"></div>\r\n      </app-card>\r\n    </div>\r\n    <div class=\"col-md-12 col-xl-4\">\r\n      <div class=\"card app-design\">\r\n        <div class=\"card-block\">\r\n          <button class=\"btn btn-primary float-right\">Completed</button>\r\n          <h6 class=\"f-w-400 text-muted\">App Design And Development</h6>\r\n          <p class=\"text-c-blue f-w-400\">Android</p>\r\n          <p class=\"text-muted\">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's.</p>\r\n          <div class=\"design-description d-inline-block m-r-40\">\r\n            <h3 class=\"f-w-400\">678</h3>\r\n            <p class=\"text-muted\">Question</p>\r\n          </div>\r\n          <div class=\"design-description d-inline-block\">\r\n            <h3 class=\"f-w-400\">1,452</h3>\r\n            <p class=\"text-muted\">Comments</p>\r\n          </div>\r\n          <div class=\"team-box p-b-20\">\r\n            <p class=\"d-inline-block m-r-20 f-w-400\">Team</p>\r\n            <div class=\"team-section d-inline-block\">\r\n              <a href=\"javascript: \"><img src=\"assets/images/avatar-2.jpg \" data-toggle=\"tooltip\" title=\"Josephin Doe\" alt=\" \"></a>\r\n              <a href=\"javascript: \"><img src=\"assets/images/avatar-3.jpg \" data-toggle=\"tooltip\" title=\"Lary Doe\" alt=\" \" class=\"m-l-5 \"></a>\r\n              <a href=\"javascript: \"><img src=\"assets/images/avatar-4.jpg \" data-toggle=\"tooltip\" title=\"Alia\" alt=\" \" class=\"m-l-5 \"></a>\r\n              <a href=\"javascript: \"><img src=\"assets/images/avatar-2.jpg \" data-toggle=\"tooltip\" title=\"Suzen\" alt=\" \" class=\"m-l-5 \"></a>\r\n            </div>\r\n          </div>\r\n          <div class=\"progress-box\">\r\n            <p class=\"d-inline-block m-r-20 f-w-400\">Progress</p>\r\n            <div class=\"progress d-inline-block\">\r\n              <div class=\"progress-bar bg-c-blue\" style=\"width:78% \"><label>78%</label></div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n\r\n    <div class=\"col-xl-5 col-md-12\">\r\n      <app-card [title]=\"'Latest Updates'\" [cardClass]=\"'latest-update-card'\">\r\n        <div class=\"latest-update-box\">\r\n          <div class=\"row p-t-20 p-b-30\">\r\n            <div class=\"col-auto text-right update-meta\">\r\n              <p class=\"text-muted m-b-0 d-inline\">4 hrs ago</p>\r\n              <i class=\"feather icon-briefcase bg-c-red update-icon\"></i>\r\n            </div>\r\n            <div class=\"col\">\r\n              <h6>+ 5 New Products were added!</h6>\r\n              <p class=\"text-muted m-b-0\">Congratulations!</p>\r\n            </div>\r\n          </div>\r\n          <div class=\"row p-b-30\">\r\n            <div class=\"col-auto text-right update-meta\">\r\n              <p class=\"text-muted m-b-0 d-inline\">1 day ago</p>\r\n              <i class=\"feather icon-check f-w-600 bg-c-green update-icon\"></i>\r\n            </div>\r\n            <div class=\"col\">\r\n              <h6>Database backup completed!</h6>\r\n              <p class=\"text-muted m-b-0\">Download the <span class=\"text-c-blue\"> <a href=\"javascript:\" class=\"text-c-blue\">latest backup</a> </span>.</p>\r\n            </div>\r\n          </div>\r\n          <div class=\"row p-b-0\">\r\n            <div class=\"col-auto text-right update-meta\">\r\n              <p class=\"text-muted m-b-0 d-inline\">2 day ago</p>\r\n              <i class=\"feather icon-facebook bg-facebook update-icon\"></i>\r\n            </div>\r\n            <div class=\"col\">\r\n              <h6>+2 Friend Requests</h6>\r\n              <p class=\"text-muted m-b-10\">This is great, keep it up!</p>\r\n              <div class=\"table-responsive\">\r\n                <table class=\"table table-hover\">\r\n                  <tbody>\r\n                  <tr>\r\n                    <td class=\"b-none\">\r\n                      <a href=\"javascript:\" class=\"align-middle\">\r\n                        <img src=\"assets/images/avatar-2.jpg\" alt=\"user image\" class=\"img-radius img-40 align-top m-r-15\">\r\n                        <div class=\"d-inline-block\">\r\n                          <h6>Jeny William</h6>\r\n                          <p class=\"text-muted m-b-0\">Graphic Designer</p>\r\n                        </div>\r\n                      </a>\r\n                    </td>\r\n                  </tr>\r\n                  </tbody>\r\n                </table>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </app-card>\r\n    </div>\r\n    <div class=\"col-xl-3 col-md-12\">\r\n      <div class=\"card user-card2\">\r\n        <div class=\"card-block text-center\">\r\n          <h6 class=\"m-b-15\">Project Risk</h6>\r\n          <div class=\"risk-rate\">\r\n            <span><b>5</b></span>\r\n          </div>\r\n          <h6 class=\"m-b-15 m-t-15\">Balanced</h6>\r\n          <a href=\"javascript:\" class=\"text-c-green b-b-success\">Change Your Risk</a>\r\n          <div class=\"row justify-content-center m-t-15 b-t-default m-l-0 m-r-0\">\r\n            <div class=\"col m-t-20 b-r-default\">\r\n              <h6 class=\"text-muted m-t-5\">Nr</h6>\r\n              <h6>AWS 2455</h6>\r\n            </div>\r\n            <div class=\"col m-t-20\">\r\n              <h6 class=\"text-muted m-t-5\">Created</h6>\r\n              <h6>30th Sep</h6>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <button class=\"btn btn-success btn-block\">Download Overall Report</button>\r\n      </div>\r\n    </div>\r\n    <div class=\"col-xl-4 col-md-12\">\r\n      <app-card [title]=\"'Tasks'\" [cardClass]=\"'task-card'\">\r\n        <ul class=\"list-unstyled task-list\">\r\n          <li>\r\n            <i class=\"feather icon-check f-w-600 task-icon bg-c-green\"></i>\r\n            <p class=\"m-b-5\">8:50</p>\r\n            <h6 class=\"text-muted\">Call to customer <span class=\"text-c-blue\"> <a href=\"javascript:\" class=\"text-c-blue\">Jacob</a> </span> and discuss the</h6>\r\n          </li>\r\n          <li>\r\n            <i class=\"task-icon bg-c-blue\"></i>\r\n            <p class=\"m-b-5\">Sat, 5 Mar</p>\r\n            <h6 class=\"text-muted\">Design mobile Application</h6>\r\n          </li>\r\n          <li>\r\n            <i class=\"task-icon bg-c-red\"></i>\r\n            <p class=\"m-b-5\">Sun, 17 Feb</p>\r\n            <h6 class=\"text-muted\"><span class=\"text-c-blue\"><a href=\"javascript:\" class=\"text-c-blue\">Jeny</a></span> assign you a task <span class=\"text-c-blue\"><a href=\"javascript:\" class=\"text-c-blue\">Mockup Design.</a></span></h6>\r\n          </li>\r\n          <li class=\"p-b-10\">\r\n            <i class=\"task-icon bg-c-yellow\"></i>\r\n            <p class=\"m-b-5\">Sat, 18 Mar</p>\r\n            <h6 class=\"text-muted\">Design logo</h6>\r\n          </li>\r\n        </ul>\r\n      </app-card>\r\n    </div>\r\n\r\n    <!-- project ,team member start -->\r\n    <div class=\"col-xl-6 col-md-12\">\r\n      <app-card [title]=\"'Projects'\" [cardClass]=\"'table-card'\">\r\n        <div class=\"table-responsive\">\r\n          <table class=\"table table-hover\">\r\n            <thead>\r\n            <tr>\r\n              <th>\r\n                <div class=\"chk-option\">\r\n                  <div class=\"checkbox-fade fade-in-primary\">\r\n                    <label class=\"check-task\">\r\n                      <input type=\"checkbox\" id=\"selectall\"/>\r\n                      <span class=\"cr\">\r\n                                                                                            <i class=\"cr-icon feather icon-check f-w-600 txt-default\"></i>\r\n                                                                                        </span>\r\n                    </label>\r\n                  </div>\r\n                </div>\r\n                Assigned</th>\r\n              <th>Name</th>\r\n              <th>Due Date</th>\r\n              <th class=\"text-right\">Priority</th>\r\n            </tr>\r\n            </thead>\r\n            <tbody>\r\n            <tr>\r\n              <td>\r\n                <div class=\"chk-option\">\r\n                  <div class=\"checkbox-fade fade-in-primary\">\r\n                    <label class=\"check-task\">\r\n                      <input type=\"checkbox\" class=\"case\" name=\"case\" value=\"1\"/>\r\n                      <span class=\"cr\">\r\n                                                                                                <i class=\"cr-icon feather icon-check f-w-600 txt-default\"></i>\r\n                                                                                            </span>\r\n                    </label>\r\n                  </div>\r\n                </div>\r\n                <div class=\"d-inline-block align-middle\">\r\n                  <img src=\"assets/images/avatar-4.jpg\" alt=\"user image\" class=\"img-radius img-40 align-top m-r-15\">\r\n                  <div class=\"d-inline-block\">\r\n                    <h6>John Deo</h6>\r\n                    <p class=\"text-muted m-b-0\">Graphics Designer</p>\r\n                  </div>\r\n                </div>\r\n              </td>\r\n              <td>Able Pro</td>\r\n              <td>Jun, 26</td>\r\n              <td class=\"text-right\"><label class=\"label label-danger\">Low</label></td>\r\n            </tr>\r\n            <tr>\r\n              <td>\r\n                <div class=\"chk-option\">\r\n                  <div class=\"checkbox-fade fade-in-primary\">\r\n                    <label class=\"check-task\">\r\n                      <input type=\"checkbox\" class=\"case\" name=\"case\" value=\"2\"/>\r\n                      <span class=\"cr\">\r\n                                                                                                <i class=\"cr-icon feather icon-check f-w-600 txt-default\"></i>\r\n                                                                                            </span>\r\n                    </label>\r\n                  </div>\r\n                </div>\r\n                <div class=\"d-inline-block align-middle\">\r\n                  <img src=\"assets/images/avatar-2.jpg\" alt=\"user image\" class=\"img-radius img-40 align-top m-r-15\">\r\n                  <div class=\"d-inline-block\">\r\n                    <h6>Jenifer Vintage</h6>\r\n                    <p class=\"text-muted m-b-0\">Web Designer</p>\r\n                  </div>\r\n                </div>\r\n              </td>\r\n              <td>Mashable</td>\r\n              <td>March, 31</td>\r\n              <td class=\"text-right\"><label class=\"label label-primary\">high</label></td>\r\n            </tr>\r\n            <tr>\r\n              <td>\r\n                <div class=\"chk-option\">\r\n                  <div class=\"checkbox-fade fade-in-primary\">\r\n                    <label class=\"check-task\">\r\n                      <input type=\"checkbox\" class=\"case\" name=\"case\" value=\"3\"/>\r\n                      <span class=\"cr\">\r\n                                                                                                <i class=\"cr-icon feather icon-check f-w-600 txt-default\"></i>\r\n                                                                                            </span>\r\n                    </label>\r\n                  </div>\r\n                </div>\r\n                <div class=\"d-inline-block align-middle\">\r\n                  <img src=\"assets/images/avatar-3.jpg\" alt=\"user image\" class=\"img-radius img-40 align-top m-r-15\">\r\n                  <div class=\"d-inline-block\">\r\n                    <h6>William Jem</h6>\r\n                    <p class=\"text-muted m-b-0\">Developer</p>\r\n                  </div>\r\n                </div>\r\n              </td>\r\n              <td>Flatable</td>\r\n              <td>Aug, 02</td>\r\n              <td class=\"text-right\"><label class=\"label label-success\">medium</label></td>\r\n            </tr>\r\n            <tr>\r\n              <td>\r\n                <div class=\"chk-option\">\r\n                  <div class=\"checkbox-fade fade-in-primary\">\r\n                    <label class=\"check-task\">\r\n                      <input type=\"checkbox\" class=\"case\" name=\"case\" value=\"4\"/>\r\n                      <span class=\"cr\">\r\n                                                                                                <i class=\"cr-icon feather icon-check f-w-600 txt-default\"></i>\r\n                                                                                            </span>\r\n                    </label>\r\n                  </div>\r\n                </div>\r\n                <div class=\"d-inline-block align-middle\">\r\n                  <img src=\"assets/images/avatar-2.jpg\" alt=\"user image\" class=\"img-radius img-40 align-top m-r-15\">\r\n                  <div class=\"d-inline-block\">\r\n                    <h6>David Jones</h6>\r\n                    <p class=\"text-muted m-b-0\">Developer</p>\r\n                  </div>\r\n                </div>\r\n              </td>\r\n              <td>Guruable</td>\r\n              <td>Sep, 22</td>\r\n              <td class=\"text-right\"><label class=\"label label-primary\">high</label></td>\r\n            </tr>\r\n            </tbody>\r\n          </table>\r\n          <div class=\"text-right m-r-20\">\r\n            <a href=\"javascript:\" class=\" b-b-primary text-primary\">View all Projects</a>\r\n          </div>\r\n        </div>\r\n      </app-card>\r\n    </div>\r\n    <div class=\"col-xl-6 col-md-12\">\r\n      <app-card [title]=\"'Active Tickets'\" [cardClass]=\"'table-card'\">\r\n        <div class=\"table-responsive\">\r\n          <table class=\"table table-hover table-borderless\">\r\n            <thead>\r\n            <tr>\r\n              <th>\r\n                <div class=\"chk-option\">\r\n                  <div class=\"checkbox-fade fade-in-primary\">\r\n                    <label class=\"check-task\">\r\n                      <input type=\"checkbox\" value=\"\">\r\n                      <span class=\"cr\">\r\n                                                                                                                                        <i class=\"cr-icon feather icon-check f-w-600 txt-default\"></i>\r\n                                                                                                                                    </span>\r\n                    </label>\r\n                  </div>\r\n                </div>\r\n                Due</th>\r\n              <th>User</th>\r\n              <th>Description</th>\r\n            </tr>\r\n            </thead>\r\n            <tbody>\r\n            <tr>\r\n              <td>\r\n                <div class=\"chk-option\">\r\n                  <div class=\"checkbox-fade fade-in-primary\">\r\n                    <label class=\"check-task\">\r\n                      <input type=\"checkbox\" value=\"\">\r\n                      <span class=\"cr\">\r\n                                                                                                                                        <i class=\"cr-icon feather icon-check f-w-600 txt-default\"></i>\r\n                                                                                                                                    </span>\r\n                    </label>\r\n                  </div>\r\n                </div>\r\n                <div class=\"d-inline-block align-middle text-center\">\r\n                  <h6>12</h6>\r\n                  <p class=\"text-muted m-b-0\">hours</p>\r\n                </div>\r\n              </td>\r\n              <td>\r\n                <div class=\"d-inline-block align-middle\">\r\n                  <img src=\"assets/images/avatar-4.jpg\" alt=\"user image\" class=\"img-radius img-40 align-top m-r-15\">\r\n                  <div class=\"d-inline-block\">\r\n                    <h6 class=\"text-muted m-b-0 m-t-15\">John Deo</h6>\r\n                  </div>\r\n                </div>\r\n              </td>\r\n              <td>\r\n                <div class=\"d-inline-block align-middle\">\r\n                  <h6>[#1183] Workaround for OS X selects printing bug</h6>\r\n                  <p class=\"text-muted m-b-0\">Chrome fixed the bug several versions ago, thus rendering this...</p>\r\n                </div>\r\n              </td>\r\n            </tr>\r\n            <tr>\r\n              <td>\r\n                <div class=\"chk-option\">\r\n                  <div class=\"checkbox-fade fade-in-primary\">\r\n                    <label class=\"check-task\">\r\n                      <input type=\"checkbox\" value=\"\">\r\n                      <span class=\"cr\">\r\n                                                                                                                                        <i class=\"cr-icon feather icon-check f-w-600 txt-default\"></i>\r\n                                                                                                                                    </span>\r\n                    </label>\r\n                  </div>\r\n                </div>\r\n                <div class=\"d-inline-block align-middle text-center\">\r\n                  <h6>16</h6>\r\n                  <p class=\"text-muted m-b-0\">hours</p>\r\n                </div>\r\n              </td>\r\n              <td>\r\n                <div class=\"d-inline-block align-middle\">\r\n                  <img src=\"assets/images/avatar-3.jpg\" alt=\"user image\" class=\"img-radius img-40 align-top m-r-15\">\r\n                  <div class=\"d-inline-block\">\r\n                    <h6 class=\"text-muted m-b-0 m-t-15\">Jems Win</h6>\r\n                  </div>\r\n                </div>\r\n              </td>\r\n              <td>\r\n                <div class=\"d-inline-block align-middle\">\r\n                  <h6>[#1249] Vertically center carousel controls</h6>\r\n                  <p class=\"text-muted m-b-0\">Try any carousel control and reduce the screen width below...</p>\r\n                </div>\r\n              </td>\r\n            </tr>\r\n            <tr>\r\n              <td>\r\n                <div class=\"chk-option\">\r\n                  <div class=\"checkbox-fade fade-in-primary\">\r\n                    <label class=\"check-task\">\r\n                      <input type=\"checkbox\" value=\"\">\r\n                      <span class=\"cr\">\r\n                                                                                                                                        <i class=\"cr-icon feather icon-check f-w-600 txt-default\"></i>\r\n                                                                                                                                    </span>\r\n                    </label>\r\n                  </div>\r\n                </div>\r\n                <div class=\"d-inline-block align-middle text-center\">\r\n                  <h6>40</h6>\r\n                  <p class=\"text-muted m-b-0\">hours</p>\r\n                </div>\r\n              </td>\r\n              <td>\r\n                <div class=\"d-inline-block align-middle\">\r\n                  <img src=\"assets/images/avatar-2.jpg\" alt=\"user image\" class=\"img-radius img-40 align-top m-r-15\">\r\n                  <div class=\"d-inline-block\">\r\n                    <h6 class=\"text-muted m-b-0 m-t-15\">Jeny Wiliiam</h6>\r\n                  </div>\r\n                </div>\r\n              </td>\r\n              <td>\r\n                <div class=\"d-inline-block align-middle\">\r\n                  <h6>[#1254] Inaccurate small pagination height</h6>\r\n                  <p class=\"text-muted m-b-0\">The height of pagination elements is not consistent with...</p>\r\n                </div>\r\n              </td>\r\n            </tr>\r\n            </tbody>\r\n          </table>\r\n          <div class=\"text-right m-r-20\">\r\n            <a href=\"javascript:\" class=\" b-b-primary text-primary\">View all Projects</a>\r\n          </div>\r\n        </div>\r\n      </app-card>\r\n    </div>\r\n    <!-- Active Tickets, Latest Posts end -->\r\n\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/theme/dashboard/project/project.component.scss":
/*!****************************************************************!*\
  !*** ./src/app/theme/dashboard/project/project.component.scss ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3RoZW1lL2Rhc2hib2FyZC9wcm9qZWN0L3Byb2plY3QuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/theme/dashboard/project/project.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/theme/dashboard/project/project.component.ts ***!
  \**************************************************************/
/*! exports provided: ProjectComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProjectComponent", function() { return ProjectComponent; });
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









var ProjectComponent = /** @class */ (function () {
    function ProjectComponent() {
    }
    ProjectComponent.prototype.ngOnInit = function () {
        setTimeout(function () {
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
        }, 75);
    };
    ProjectComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-project',
            template: __webpack_require__(/*! ./project.component.html */ "./src/app/theme/dashboard/project/project.component.html"),
            styles: [__webpack_require__(/*! ./project.component.scss */ "./src/app/theme/dashboard/project/project.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ProjectComponent);
    return ProjectComponent;
}());



/***/ }),

/***/ "./src/app/theme/dashboard/project/project.module.ts":
/*!***********************************************************!*\
  !*** ./src/app/theme/dashboard/project/project.module.ts ***!
  \***********************************************************/
/*! exports provided: ProjectModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProjectModule", function() { return ProjectModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _project_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./project.component */ "./src/app/theme/dashboard/project/project.component.ts");
/* harmony import */ var _project_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./project-routing.module */ "./src/app/theme/dashboard/project/project-routing.module.ts");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var angular2_chartjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! angular2-chartjs */ "./node_modules/angular2-chartjs/dist/index.js");
/* harmony import */ var angular2_chartjs__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(angular2_chartjs__WEBPACK_IMPORTED_MODULE_6__);







var ProjectModule = /** @class */ (function () {
    function ProjectModule() {
    }
    ProjectModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _project_routing_module__WEBPACK_IMPORTED_MODULE_4__["ProjectRoutingModule"],
                _shared_shared_module__WEBPACK_IMPORTED_MODULE_5__["SharedModule"],
                angular2_chartjs__WEBPACK_IMPORTED_MODULE_6__["ChartModule"]
            ],
            declarations: [
                _project_component__WEBPACK_IMPORTED_MODULE_3__["ProjectComponent"]
            ]
        })
    ], ProjectModule);
    return ProjectModule;
}());



/***/ })

}]);
//# sourceMappingURL=project-project-module.js.map