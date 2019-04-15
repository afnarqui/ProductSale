(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["google-map-google-map-module"],{

/***/ "./src/app/theme/map/google-map/google-map-routing.module.ts":
/*!*******************************************************************!*\
  !*** ./src/app/theme/map/google-map/google-map-routing.module.ts ***!
  \*******************************************************************/
/*! exports provided: GoogleMapRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GoogleMapRoutingModule", function() { return GoogleMapRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _google_map_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./google-map.component */ "./src/app/theme/map/google-map/google-map.component.ts");




var routes = [
    {
        path: '',
        component: _google_map_component__WEBPACK_IMPORTED_MODULE_3__["GoogleMapComponent"],
        data: {
            title: 'Google Map',
            icon: 'icon-map-alt',
            caption: 'lorem ipsum dolor sit amet, consectetur adipisicing elit - google map',
            status: true
        }
    }
];
var GoogleMapRoutingModule = /** @class */ (function () {
    function GoogleMapRoutingModule() {
    }
    GoogleMapRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], GoogleMapRoutingModule);
    return GoogleMapRoutingModule;
}());



/***/ }),

/***/ "./src/app/theme/map/google-map/google-map.component.html":
/*!****************************************************************!*\
  !*** ./src/app/theme/map/google-map/google-map.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"page-body\">\r\n  <div class=\"row\">\r\n    <div class=\"col-sm-6\">\r\n      <app-card [title]=\"'Basic Map'\" [classHeader]=\"true\">\r\n        <span class=\"code-header\">use property <code>latitude, longitude</code> with <code>agm-map</code> element</span>\r\n        <agm-map [latitude]=\"lat\" [longitude]=\"lng\" [zoom]=\"zoom\"></agm-map>\r\n      </app-card>\r\n    </div>\r\n    <div class=\"col-sm-6\">\r\n      <app-card [title]=\"'Markers Map'\" [classHeader]=\"true\">\r\n        <span class=\"code-header\">use element <code>agm-marker</code> with <code>agm-map</code> element</span>\r\n        <agm-map [latitude]=\"lat\" [longitude]=\"lng\" [zoom]=\"6\">\r\n          <agm-marker [latitude]=\"lat\" [longitude]=\"lng\"></agm-marker>\r\n          <agm-marker [latitude]=\"latA\" [longitude]=\"lngA\"></agm-marker>\r\n          <agm-marker [latitude]=\"21.6776887\" [longitude]=\"71.566261\"></agm-marker>\r\n          <agm-marker [latitude]=\"22.3220876\" [longitude]=\"73.1030464\"></agm-marker>\r\n          <agm-marker [latitude]=\"23.0201818\" [longitude]=\"72.4396587\"></agm-marker>\r\n          <agm-marker [latitude]=\"22.2734719\" [longitude]=\"70.7512565\"></agm-marker>\r\n        </agm-map>\r\n      </app-card>\r\n    </div>\r\n    <div class=\"col-sm-6\">\r\n      <app-card [title]=\"'Styled Map'\" [classHeader]=\"true\">\r\n        <span class=\"code-header\">use property <code>styles</code> with <code>agm-map</code> element</span>\r\n        <agm-map [latitude]=\"lat\" [longitude]=\"lng\" [zoom]=\"zoom\" [styles]=\"styles\"></agm-map>\r\n      </app-card>\r\n    </div>\r\n    <div class=\"col-sm-6\">\r\n      <app-card [title]=\"'Polylines'\" [classHeader]=\"true\">\r\n        <span class=\"code-header\">use property <code>styles</code> with <code>agm-map</code> element</span>\r\n        <agm-map [latitude]=\"lat\" [longitude]=\"lng\" [zoom]=\"zoom\">\r\n          <agm-marker [latitude]=\"lat\" [longitude]=\"lng\"></agm-marker>\r\n          <agm-marker [latitude]=\"latA\" [longitude]=\"lngA\"></agm-marker>\r\n          <agm-polyline>\r\n            <agm-polyline-point [latitude]=\"lat\" [longitude]=\"lng\">\r\n            </agm-polyline-point>\r\n            <agm-polyline-point [latitude]=\"latA\" [longitude]=\"lngA\">\r\n            </agm-polyline-point>\r\n          </agm-polyline>\r\n        </agm-map>\r\n      </app-card>\r\n    </div>\r\n    <div class=\"col-sm-6\">\r\n      <app-card [title]=\"'Info Window'\" [classHeader]=\"true\">\r\n        <span class=\"code-header\">use property <code>styles</code> with <code>agm-map</code> element</span>\r\n        <agm-map [latitude]=\"21.6776887\" [longitude]=\"71.566261\" [zoom]=\"zoom\" [disableDefaultUI]=\"false\" [zoomControl]=\"false\">\r\n          <agm-marker [latitude]=\"21.6776887\" [longitude]=\"71.566261\">\r\n            <agm-info-window>Nice Place</agm-info-window>\r\n          </agm-marker>\r\n        </agm-map>\r\n      </app-card>\r\n    </div>\r\n    <div class=\"col-sm-6\">\r\n      <app-card [title]=\"'Circle'\" [classHeader]=\"true\">\r\n        <span class=\"code-header\">use property <code>styles</code> with <code>agm-map</code> element</span>\r\n        <agm-map [latitude]=\"lat\" [longitude]=\"lng\" [zoom]=\"zoom\">\r\n          <agm-circle\r\n            [latitude]=\"lat + 0.3\"\r\n            [longitude]=\"lng\"\r\n            [radius]=\"50000\"\r\n            [fillColor]=\"'red'\"\r\n            [circleDraggable]=\"true\"\r\n            [editable]=\"true\"\r\n          >\r\n          </agm-circle>\r\n        </agm-map>\r\n      </app-card>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/theme/map/google-map/google-map.component.scss":
/*!****************************************************************!*\
  !*** ./src/app/theme/map/google-map/google-map.component.scss ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "agm-map {\n  height: 350px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdGhlbWUvbWFwL2dvb2dsZS1tYXAvRDpcXHBocGxhcmF2ZWxcXHdlYi9zcmNcXGFwcFxcdGhlbWVcXG1hcFxcZ29vZ2xlLW1hcFxcZ29vZ2xlLW1hcC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGNBQWEsRUFDZCIsImZpbGUiOiJzcmMvYXBwL3RoZW1lL21hcC9nb29nbGUtbWFwL2dvb2dsZS1tYXAuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJhZ20tbWFwIHtcclxuICBoZWlnaHQ6IDM1MHB4O1xyXG59XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/theme/map/google-map/google-map.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/theme/map/google-map/google-map.component.ts ***!
  \**************************************************************/
/*! exports provided: GoogleMapComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GoogleMapComponent", function() { return GoogleMapComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var GoogleMapComponent = /** @class */ (function () {
    function GoogleMapComponent() {
        this.lat = 21.1591857;
        this.lng = 72.7522563;
        this.latA = 21.7613308;
        this.lngA = 71.6753074;
        this.zoom = 8;
        this.styles = [{
                featureType: 'all',
                stylers: [{
                        saturation: -80
                    }]
            }, {
                featureType: 'road.arterial',
                elementType: 'geometry',
                stylers: [{
                        hue: '#00ffee'
                    }, {
                        saturation: 50
                    }]
            }, {
                featureType: 'poi.business',
                elementType: 'labels',
                stylers: [{
                        visibility: 'off'
                    }]
            }];
    }
    GoogleMapComponent.prototype.ngOnInit = function () {
    };
    GoogleMapComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-google-map',
            template: __webpack_require__(/*! ./google-map.component.html */ "./src/app/theme/map/google-map/google-map.component.html"),
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewEncapsulation"].None,
            styles: [__webpack_require__(/*! ./google-map.component.scss */ "./src/app/theme/map/google-map/google-map.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], GoogleMapComponent);
    return GoogleMapComponent;
}());



/***/ }),

/***/ "./src/app/theme/map/google-map/google-map.module.ts":
/*!***********************************************************!*\
  !*** ./src/app/theme/map/google-map/google-map.module.ts ***!
  \***********************************************************/
/*! exports provided: GoogleMapModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GoogleMapModule", function() { return GoogleMapModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _google_map_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./google-map.component */ "./src/app/theme/map/google-map/google-map.component.ts");
/* harmony import */ var _google_map_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./google-map-routing.module */ "./src/app/theme/map/google-map/google-map-routing.module.ts");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _agm_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @agm/core */ "./node_modules/@agm/core/index.js");







var GoogleMapModule = /** @class */ (function () {
    function GoogleMapModule() {
    }
    GoogleMapModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _google_map_routing_module__WEBPACK_IMPORTED_MODULE_4__["GoogleMapRoutingModule"],
                _shared_shared_module__WEBPACK_IMPORTED_MODULE_5__["SharedModule"],
                _agm_core__WEBPACK_IMPORTED_MODULE_6__["AgmCoreModule"].forRoot({ apiKey: 'AIzaSyCE0nvTeHBsiQIrbpMVTe489_O5mwyqofk' })
            ],
            declarations: [_google_map_component__WEBPACK_IMPORTED_MODULE_3__["GoogleMapComponent"]]
        })
    ], GoogleMapModule);
    return GoogleMapModule;
}());



/***/ })

}]);
//# sourceMappingURL=google-map-google-map-module.js.map