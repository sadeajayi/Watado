webpackJsonp([1,4],{

/***/ 356:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_socket_io_client__ = __webpack_require__(791);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_socket_io_client___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_socket_io_client__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SocketService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SocketService = (function () {
    function SocketService() {
        this.socket = __WEBPACK_IMPORTED_MODULE_1_socket_io_client__["connect"]();
    }
    SocketService.prototype.on = function (eventName, callback) {
        if (this.socket) {
            this.socket.on(eventName, function (data) {
                callback(data);
            });
        }
    };
    ;
    SocketService.prototype.emit = function (eventName, data) {
        if (this.socket) {
            this.socket.emit(eventName, data);
        }
    };
    ;
    SocketService.prototype.removeListener = function (eventName) {
        if (this.socket) {
            this.socket.removeListener(eventName);
        }
    };
    ;
    SocketService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [])
    ], SocketService);
    return SocketService;
}());

//# sourceMappingURL=/Users/sadeajayi/GitHub/watado/angular-src/src/socket.service.js.map

/***/ }),

/***/ 357:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__init_markers__ = __webpack_require__(572);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MarkerService; });
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var MarkerService = (function (_super) {
    __extends(MarkerService, _super);
    function MarkerService() {
        var _this = _super.call(this) || this;
        console.log("Marker Service Initialized ");
        _this.load();
        return _this;
    }
    MarkerService.prototype.getMarkers = function () {
        var markers = JSON.parse(localStorage.getItem('markers'));
        return markers;
    };
    MarkerService.prototype.addMarker = function (newMarker) {
        //fetch marker that are already there
        var markers = JSON.parse(localStorage.getItem('markers'));
        // Push to array
        markers.push(newMarker);
        //set markers again
        localStorage.setItem('markers', JSON.stringify(markers));
    };
    MarkerService.prototype.updateMarker = function (marker, newLat, newLng) {
        var markers = JSON.parse(localStorage.getItem('markers'));
        for (var i = 0; i < markers.length; i++) {
            if (marker.lat == markers[i].lat && marker.lng == markers[i].lng) {
                markers[i].lat = newLat;
                markers[i].lng = newLng;
            }
        }
        //set markers again
        localStorage.setItem('markers', JSON.stringify(markers));
    };
    MarkerService.prototype.removeMarker = function (marker) {
        var markers = JSON.parse(localStorage.getItem('markers'));
        for (var i = 0; i < markers.length; i++) {
            if (marker.lat == markers[i].lat && marker.lng == markers[i].lng) {
                markers.splice(i, 1);
            }
        }
        //set markers again
        localStorage.setItem('markers', JSON.stringify(markers));
    };
    MarkerService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [])
    ], MarkerService);
    return MarkerService;
}(__WEBPACK_IMPORTED_MODULE_1__init_markers__["a" /* Init */]));

//# sourceMappingURL=/Users/sadeajayi/GitHub/watado/angular-src/src/marker.service.js.map

/***/ }),

/***/ 358:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ValidateService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ValidateService = (function () {
    function ValidateService() {
    }
    ValidateService.prototype.validateRegister = function (user) {
        if (user.name == undefined || user.email == undefined || user.username == undefined || user.password == undefined ||
            user.passwordConf == undefined) {
            return true;
        }
        else {
            return true;
        }
    };
    ValidateService.prototype.validateEmail = function (email) {
        var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(email);
    };
    ValidateService.prototype.validatePassword = function (user) {
        if (user.password !== user.passwordConf) {
            var err = new Error('Passwords do not match.');
            console.log("passwords don't match");
            return err;
        }
        else {
            return user.password;
        }
    };
    ValidateService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [])
    ], ValidateService);
    return ValidateService;
}());

//# sourceMappingURL=/Users/sadeajayi/GitHub/watado/angular-src/src/validate.service.js.map

/***/ }),

/***/ 445:
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 445;


/***/ }),

/***/ 446:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(532);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__environments_environment__ = __webpack_require__(573);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_app_module__ = __webpack_require__(563);




if (__WEBPACK_IMPORTED_MODULE_2__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["enableProdMode"])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_3__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=/Users/sadeajayi/GitHub/watado/angular-src/src/main.js.map

/***/ }),

/***/ 562:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = (function () {
    function AppComponent() {
        this.title = 'app works!';
    }
    AppComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(762),
            styles: [__webpack_require__(754)]
        })
    ], AppComponent);
    return AppComponent;
}());

//# sourceMappingURL=/Users/sadeajayi/GitHub/watado/angular-src/src/app.component.js.map

/***/ }),

/***/ 563:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(156);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(216);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__(67);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ngx_facebook__ = __webpack_require__(752);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_forms__ = __webpack_require__(327);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_angular2_google_maps_core__ = __webpack_require__(365);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_angular2_google_maps_core___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_angular2_google_maps_core__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__services_marker_service__ = __webpack_require__(357);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__app_component__ = __webpack_require__(562);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__components_login_login_component__ = __webpack_require__(567);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__components_register_register_component__ = __webpack_require__(570);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__components_home_home_component__ = __webpack_require__(566);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__components_map_page_map_page_component__ = __webpack_require__(568);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__components_about_about_component__ = __webpack_require__(564);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__components_meet_the_team_meet_the_team_component__ = __webpack_require__(569);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__components_footer_footer_component__ = __webpack_require__(565);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__services_validate_service__ = __webpack_require__(358);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__services_auth_service__ = __webpack_require__(69);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18_angular2_flash_messages__ = __webpack_require__(84);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_18_angular2_flash_messages__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__guards_auth_guard__ = __webpack_require__(571);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__components_shared_socket_service__ = __webpack_require__(356);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






/*import { AgmCoreModule, AgmMarker } from '@agm/core';*/














//Importing socket-io services

var appRoutes = [
    { path: '', component: __WEBPACK_IMPORTED_MODULE_11__components_home_home_component__["a" /* HomeComponent */] },
    { path: 'register', component: __WEBPACK_IMPORTED_MODULE_10__components_register_register_component__["a" /* RegisterComponent */] },
    { path: 'login', component: __WEBPACK_IMPORTED_MODULE_9__components_login_login_component__["a" /* LoginComponent */] },
    { path: 'map-page', component: __WEBPACK_IMPORTED_MODULE_12__components_map_page_map_page_component__["a" /* MapPageComponent */] },
    { path: 'about', component: __WEBPACK_IMPORTED_MODULE_13__components_about_about_component__["a" /* AboutComponent */] },
    { path: 'meet-the-team', component: __WEBPACK_IMPORTED_MODULE_14__components_meet_the_team_meet_the_team_component__["a" /* MeetTheTeamComponent */] },
    { path: 'footer', component: __WEBPACK_IMPORTED_MODULE_15__components_footer_footer_component__["a" /* FooterComponent */] },
];
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_8__app_component__["a" /* AppComponent */],
                //NavbarComponent,
                __WEBPACK_IMPORTED_MODULE_9__components_login_login_component__["a" /* LoginComponent */],
                __WEBPACK_IMPORTED_MODULE_10__components_register_register_component__["a" /* RegisterComponent */],
                __WEBPACK_IMPORTED_MODULE_11__components_home_home_component__["a" /* HomeComponent */],
                __WEBPACK_IMPORTED_MODULE_12__components_map_page_map_page_component__["a" /* MapPageComponent */],
                __WEBPACK_IMPORTED_MODULE_13__components_about_about_component__["a" /* AboutComponent */],
                __WEBPACK_IMPORTED_MODULE_14__components_meet_the_team_meet_the_team_component__["a" /* MeetTheTeamComponent */],
                __WEBPACK_IMPORTED_MODULE_15__components_footer_footer_component__["a" /* FooterComponent */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_http__["HttpModule"],
                __WEBPACK_IMPORTED_MODULE_5__angular_forms__["b" /* ReactiveFormsModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* RouterModule */].forRoot(appRoutes),
                __WEBPACK_IMPORTED_MODULE_18_angular2_flash_messages__["FlashMessagesModule"],
                __WEBPACK_IMPORTED_MODULE_4_ngx_facebook__["a" /* FacebookModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_6_angular2_google_maps_core__["AgmCoreModule"].forRoot({
                    apiKey: 'AIzaSyBfW8ETNs6vnLAlGqcqHIZg52NI9lupHxM',
                    libraries: ["places"]
                })
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_16__services_validate_service__["a" /* ValidateService */], __WEBPACK_IMPORTED_MODULE_7__services_marker_service__["a" /* MarkerService */], __WEBPACK_IMPORTED_MODULE_17__services_auth_service__["a" /* AuthService */], __WEBPACK_IMPORTED_MODULE_19__guards_auth_guard__["a" /* AuthGuard */], __WEBPACK_IMPORTED_MODULE_20__components_shared_socket_service__["a" /* SocketService */]],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_8__app_component__["a" /* AppComponent */]],
            schemas: [__WEBPACK_IMPORTED_MODULE_1__angular_core__["CUSTOM_ELEMENTS_SCHEMA"]]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=/Users/sadeajayi/GitHub/watado/angular-src/src/app.module.js.map

/***/ }),

/***/ 564:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_auth_service__ = __webpack_require__(69);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(67);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__ = __webpack_require__(84);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AboutComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AboutComponent = (function () {
    function AboutComponent(authService, router, flashMessage) {
        this.authService = authService;
        this.router = router;
        this.flashMessage = flashMessage;
    }
    AboutComponent.prototype.ngOnInit = function () {
    };
    AboutComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-about',
            template: __webpack_require__(763),
            styles: [__webpack_require__(755)]
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__["FlashMessagesService"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__["FlashMessagesService"]) === "function" && _c || Object])
    ], AboutComponent);
    return AboutComponent;
    var _a, _b, _c;
}());

//# sourceMappingURL=/Users/sadeajayi/GitHub/watado/angular-src/src/about.component.js.map

/***/ }),

/***/ 565:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FooterComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FooterComponent = (function () {
    function FooterComponent() {
    }
    FooterComponent.prototype.ngOnInit = function () {
    };
    FooterComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-footer',
            template: __webpack_require__(764),
            styles: [__webpack_require__(756)]
        }),
        __metadata("design:paramtypes", [])
    ], FooterComponent);
    return FooterComponent;
}());

//# sourceMappingURL=/Users/sadeajayi/GitHub/watado/angular-src/src/footer.component.js.map

/***/ }),

/***/ 566:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_auth_service__ = __webpack_require__(69);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(67);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__ = __webpack_require__(84);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var HomeComponent = (function () {
    function HomeComponent(authService, router, flashMessage) {
        this.authService = authService;
        this.router = router;
        this.flashMessage = flashMessage;
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent.prototype.onLogoutClick = function () {
        //this.authService.logout();
        this.flashMessage.show('You are logged out', {
            cssClass: 'alert-success',
            timeout: 3000
        });
        this.router.navigate(['/login']);
        return false;
    };
    HomeComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(765),
            styles: [__webpack_require__(757)]
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__["FlashMessagesService"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__["FlashMessagesService"]) === "function" && _c || Object])
    ], HomeComponent);
    return HomeComponent;
    var _a, _b, _c;
}());

//# sourceMappingURL=/Users/sadeajayi/GitHub/watado/angular-src/src/home.component.js.map

/***/ }),

/***/ 567:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_auth_service__ = __webpack_require__(69);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(67);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__ = __webpack_require__(84);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var LoginComponent = (function () {
    function LoginComponent(authService, router, flashMessage) {
        this.authService = authService;
        this.router = router;
        this.flashMessage = flashMessage;
    }
    LoginComponent.prototype.ngOnInit = function () {
    };
    LoginComponent.prototype.onLoginSubmit = function () {
        var _this = this;
        var user = {
            email: this.email,
            password: this.password
        };
        this.authService.authenticateUser(user).subscribe(function (data) {
            if (data.success) {
                _this.authService.storeUserData(data.token, data.user);
                _this.flashMessage.show('You are now logged in', {
                    cssClass: 'alert-success',
                    timeout: 5000
                });
                _this.router.navigate(['map-page']);
            }
            else {
                _this.flashMessage.show(data.msg, {
                    cssClass: 'alert-danger',
                    timeout: 5000
                });
                _this.router.navigate(['login']);
            }
        });
    };
    LoginComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(766),
            styles: [__webpack_require__(758)]
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__["FlashMessagesService"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__["FlashMessagesService"]) === "function" && _c || Object])
    ], LoginComponent);
    return LoginComponent;
    var _a, _b, _c;
}());

//# sourceMappingURL=/Users/sadeajayi/GitHub/watado/angular-src/src/login.component.js.map

/***/ }),

/***/ 568:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_marker_service__ = __webpack_require__(357);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular2_google_maps_core__ = __webpack_require__(365);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular2_google_maps_core___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_angular2_google_maps_core__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__(327);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__shared_socket_service__ = __webpack_require__(356);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MapPageComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




//Importing socket-io services

var MapPageComponent = (function () {
    /*Gets pre-defined markers from MarkerServices and adds them to the map */
    function MapPageComponent(markerService, _socketService, mapsAPILoader, ngZone) {
        this.markerService = markerService;
        this._socketService = _socketService;
        this.mapsAPILoader = mapsAPILoader;
        this.ngZone = ngZone;
        // socket: SocketIOClient.Socket
        this.lat = 6.4471;
        this.lng = 3.4182;
        this.zoom = 14;
        this.markers = [];
        this.markers = this.markerService.getMarkers();
        //this.socket = io.connect();
    }
    /* Testing to respond to user clicking marker on client */
    MapPageComponent.prototype.clickedMarker = function (marker, index) {
        console.log("clicked the marker:" + marker.name + index);
    };
    /*Should render new marker onclick on map */
    MapPageComponent.prototype.mapClicked = function ($event) {
        var newMarker = {
            name: 'Untitled',
            lat: $event.coords.lat,
            lng: $event.coords.lng,
            draggable: false
        };
        this.markers.push(newMarker);
        this._socketService.emit('add-marker', newMarker);
    };
    MapPageComponent.prototype.markerDragEnd = function (marker, $event) {
        console.log('dragEnd', marker, $event);
        var updMarker = {
            name: marker.name,
            lat: parseFloat(marker.lat),
            lng: parseFloat(marker.lng),
            draggable: false
        };
        var newLat = $event.coords.lat;
        var newLng = $event.coords.lng;
        this.markerService.updateMarker(updMarker, newLat, newLng);
    };
    //Allows user add new marker to the map 
    MapPageComponent.prototype.addMarker = function () {
        if (this.markerDraggable == 'yes') {
            var isDraggable = true;
        }
        else {
            var isDraggable = false;
        }
        var newMarker = {
            name: this.markerName,
            lat: parseFloat(this.markerLat),
            lng: parseFloat(this.markerLng),
            draggable: isDraggable
        };
        this.markers.push(newMarker);
        this.markerService.addMarker(newMarker);
        /*this._socketService.on('marker-added', (marker:any) => {
          this.markers.push(marker);
          //this.markerService.addMarker(marker);
          //console.log(marker);
          //console.log(this.markers);
        });
  */
        this._socketService.emit('add-marker', newMarker);
        // this.markerService.addMarker(newMarker);
    };
    MapPageComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._socketService.on('marker-added', function (marker) {
            _this.markers.push(marker);
            //this.markerService.addMarker(marker);
            //console.log(marker);
            //console.log(this.markers);
        });
        this.zoom = 14;
        this.lat = 6.4471;
        this.lng = 3.4182;
        //create search FormControl
        this.searchControl = new __WEBPACK_IMPORTED_MODULE_3__angular_forms__["c" /* FormControl */]();
        /*
      //marker
      var marker = new google.maps.Marker();
  
      //set current position
      //this.setCurrentPosition();
        */
        //load Places Autocomplete
        this.mapsAPILoader.load().then(function () {
            var autocomplete = new google.maps.places.Autocomplete(_this.searchElementRef.nativeElement, {
                bounds: {
                    east: 3.696728,
                    north: 6.702798,
                    south: 6.393351,
                    west: 3.098273
                },
                types: ["address"]
            });
            autocomplete.addListener("place_changed", function () {
                _this.ngZone.run(function () {
                    //get the place result
                    //var input = document.getElementById('pac-input');
                    //var autocomplete = new google.maps.places.Autocomplete(input);
                    // Bind the map's bounds (viewport) property to the autocomplete object,
                    // so that the autocomplete requests use the current map bounds for the
                    // bounds option in the request.
                    //autocomplete.bindTo('bounds', map);
                    var place = google.maps.places.PlaceResult = autocomplete.getPlace();
                    //var boundsByViewport = place.geometry.viewport;
                    //verify result
                    if (place.geometry === undefined || place.geometry === null) {
                        return;
                    }
                    //set latitude, longitude and zoom
                    _this.lat = place.geometry.location.lat();
                    _this.lng = place.geometry.location.lng();
                    _this.zoom = 16;
                });
            });
        });
    };
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])("search"),
        __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"]) === "function" && _a || Object)
    ], MapPageComponent.prototype, "searchElementRef", void 0);
    MapPageComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-map-page',
            template: __webpack_require__(767),
            styles: [__webpack_require__(759)],
        }),
        __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__services_marker_service__["a" /* MarkerService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_marker_service__["a" /* MarkerService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_4__shared_socket_service__["a" /* SocketService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__shared_socket_service__["a" /* SocketService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_2_angular2_google_maps_core__["MapsAPILoader"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_angular2_google_maps_core__["MapsAPILoader"]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["NgZone"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["NgZone"]) === "function" && _e || Object])
    ], MapPageComponent);
    return MapPageComponent;
    var _a, _b, _c, _d, _e;
}());

//# sourceMappingURL=/Users/sadeajayi/GitHub/watado/angular-src/src/map-page.component.js.map

/***/ }),

/***/ 569:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_auth_service__ = __webpack_require__(69);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(67);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__ = __webpack_require__(84);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MeetTheTeamComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var MeetTheTeamComponent = (function () {
    function MeetTheTeamComponent(authService, router, flashMessage) {
        this.authService = authService;
        this.router = router;
        this.flashMessage = flashMessage;
    }
    MeetTheTeamComponent.prototype.ngOnInit = function () {
    };
    MeetTheTeamComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-meet-the-team',
            template: __webpack_require__(768),
            styles: [__webpack_require__(760)]
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__["FlashMessagesService"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__["FlashMessagesService"]) === "function" && _c || Object])
    ], MeetTheTeamComponent);
    return MeetTheTeamComponent;
    var _a, _b, _c;
}());

//# sourceMappingURL=/Users/sadeajayi/GitHub/watado/angular-src/src/meet-the-team.component.js.map

/***/ }),

/***/ 570:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_validate_service__ = __webpack_require__(358);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_auth_service__ = __webpack_require__(69);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__ = __webpack_require__(84);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__(67);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegisterComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var RegisterComponent = (function () {
    function RegisterComponent(validateService, flashMessage, authService, router) {
        this.validateService = validateService;
        this.flashMessage = flashMessage;
        this.authService = authService;
        this.router = router;
    }
    RegisterComponent.prototype.ngOnInit = function () {
    };
    RegisterComponent.prototype.onRegisterSubmit = function () {
        var _this = this;
        var user = {
            email: this.email,
            username: this.username,
            password: this.password,
            passwordConf: this.passwordConf
        };
        // Required Fields
        if (!this.validateService.validateRegister(user)) {
            this.flashMessage.show('Please fill in all fields', { cssClass: 'alert-danger', timeout: 3000 });
            return false;
        }
        // Validate Email
        if (!this.validateService.validateEmail(user.email)) {
            this.flashMessage.show('Please use a valid email', { cssClass: 'alert-danger', timeout: 3000 });
            return false;
        }
        // Register user
        this.authService.registerUser(user).subscribe(function (data) {
            if (data.success) {
                _this.flashMessage.show('You are now registered and can log in', { cssClass: 'alert-success', timeout: 3000 });
                _this.router.navigate(['/login']);
            }
            else {
                console.log('TRYING TO GO WRONG');
                _this.flashMessage.show('Something went wrong', { cssClass: 'alert-danger', timeout: 3000 });
                _this.router.navigate(['/register']);
            }
        });
    };
    RegisterComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-register',
            template: __webpack_require__(769),
            styles: [__webpack_require__(761)]
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_validate_service__["a" /* ValidateService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_validate_service__["a" /* ValidateService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__["FlashMessagesService"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__["FlashMessagesService"]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_4__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__angular_router__["b" /* Router */]) === "function" && _d || Object])
    ], RegisterComponent);
    return RegisterComponent;
    var _a, _b, _c, _d;
}());

//# sourceMappingURL=/Users/sadeajayi/GitHub/watado/angular-src/src/register.component.js.map

/***/ }),

/***/ 571:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(67);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_auth_service__ = __webpack_require__(69);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthGuard; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AuthGuard = (function () {
    function AuthGuard(authService, router) {
        this.authService = authService;
        this.router = router;
    }
    AuthGuard.prototype.canActivate = function () {
        if (this.authService.loggedIn()) {
            return true;
        }
        else {
            this.router.navigate(['/login']);
            return false;
        }
    };
    AuthGuard = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _b || Object])
    ], AuthGuard);
    return AuthGuard;
    var _a, _b;
}());

//# sourceMappingURL=/Users/sadeajayi/GitHub/watado/angular-src/src/auth.guard.js.map

/***/ }),

/***/ 572:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Init; });
var Init = (function () {
    function Init() {
    }
    Init.prototype.load = function () {
        if (localStorage.getItem('markers') === null || localStorage.getItem('markers') === undefined) {
            console.log("No markers found .... creating...");
            var markers = [
                {
                    name: 'Company One',
                    lat: 6.4338,
                    lng: 3.4220,
                    draggable: true
                },
                {
                    name: 'Company Two',
                    lat: 6.4561,
                    lng: 3.4306,
                    draggable: true
                },
                {
                    name: 'Company Three',
                    lat: 6.5244,
                    lng: 3.3792,
                    draggable: false
                }
            ];
            localStorage.setItem('markers', JSON.stringify(markers));
        }
        else {
            console.log('Loading markers...');
            var markers = [
                {
                    name: 'Company One',
                    lat: 6.4338,
                    lng: 3.4220,
                    draggable: true
                },
                {
                    name: 'Company Two',
                    lat: 6.4561,
                    lng: 3.4306,
                    draggable: true
                },
                {
                    name: 'Company Three',
                    lat: 6.4471,
                    lng: 3.4182,
                    draggable: false
                }
            ];
            localStorage.setItem('markers', JSON.stringify(markers));
        }
    };
    return Init;
}());

//# sourceMappingURL=/Users/sadeajayi/GitHub/watado/angular-src/src/init-markers.js.map

/***/ }),

/***/ 573:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `angular-cli.json`.
var environment = {
    production: false
};
//# sourceMappingURL=/Users/sadeajayi/GitHub/watado/angular-src/src/environment.js.map

/***/ }),

/***/ 69:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(216);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(775);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_jwt__ = __webpack_require__(583);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_jwt___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_angular2_jwt__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AuthService = (function () {
    function AuthService(http) {
        this.http = http;
        this.isDev = false;
    }
    AuthService.prototype.registerUser = function (user) {
        console.log('TRYING TO REGISTER');
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        headers.append('Content-Type', 'application/json');
        //let ep = this.prepEndpoint('users/register');
        return this.http.post('/users/register', user, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    AuthService.prototype.authenticateUser = function (user) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        headers.append('Content-Type', 'application/json');
        //let ep = this.prepEndpoint('users/authenticate');
        return this.http.post('/users/authenticate', user, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    AuthService.prototype.getProfile = function () {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        this.loadToken();
        headers.append('Authorization', this.authToken);
        headers.append('Content-Type', 'application/json');
        var ep = this.prepEndpoint('users/map-page');
        return this.http.get(ep, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    AuthService.prototype.storeUserData = function (token, user) {
        localStorage.setItem('id_token', token);
        localStorage.setItem('user', JSON.stringify(user || null));
        this.authToken = token;
        this.user = user;
    };
    AuthService.prototype.loadToken = function () {
        var token = localStorage.getItem('id_token');
        this.authToken = token;
    };
    AuthService.prototype.loggedIn = function () {
        return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3_angular2_jwt__["tokenNotExpired"])('id_token');
    };
    AuthService.prototype.logout = function () {
        this.authToken = null;
        this.user = null;
        localStorage.clear();
    };
    AuthService.prototype.prepEndpoint = function (ep) {
        if (this.isDev) {
            return ep;
        }
        else {
            return 'http://localhost:8080/' + ep;
        }
    };
    AuthService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"]) === "function" && _a || Object])
    ], AuthService);
    return AuthService;
    var _a;
}());

//# sourceMappingURL=/Users/sadeajayi/GitHub/watado/angular-src/src/auth.service.js.map

/***/ }),

/***/ 754:
/***/ (function(module, exports) {

module.exports = "/*\n.site-wrapper {\n  display: table;\n  width: 100%;\n  height: 100%; /* For at least Firefox \n  min-height: 100%;\n}\n.site-wrapper-inner {\n  display: table-cell;\n  vertical-align: top;\n}\n\n.inner {\n  padding: 30px;\n}\n\n.middle{\n  padding: auto;\n}\n*/\n.main-section{\n  background-color: white;\n}\n\n\n@media (min-width: 768px) {\n\n  /* Handle the widths */\n\n  .site-wrapper-inner{\n    /*vertical-align: middle;*/\n  }\n}\n\n"

/***/ }),

/***/ 755:
/***/ (function(module, exports) {

module.exports = "nav{\n  background-color: #1289e8;\n  border: none;\n  /*box-shadow: none;*/\n}\n\n.jumbotron{padding-top:30px;padding-bottom:30px;margin-bottom:30px;color:inherit;background-color:#eee}\n.jumbotron .h1,.jumbotron h1{color:inherit}\n.jumbotron p{margin-bottom:15px;font-size:21px;font-weight:200}\n.jumbotron>hr{border-top-color:#d5d5d5}\n.container .jumbotron,.container-fluid .jumbotron{padding-right:15px;padding-left:15px;border-radius:6px}\n.jumbotron .container{max-width:100%}\n@media screen and (min-width:768px){\n  .jumbotron{padding-top:48px;padding-bottom:48px\n  }\n  .container .jumbotron,.container-fluid .jumbotron{\n    padding-right:60px;padding-left:60px\n  }\n  .jumbotron .h1,.jumbotron h1{\n    font-size:63px}}"

/***/ }),

/***/ 756:
/***/ (function(module, exports) {

module.exports = ".page-footer{\n  color: #999; /* IE8 proofing */\n  background-color: #9e9e9e;\n  width: 100%;\n}\n\n"

/***/ }),

/***/ 757:
/***/ (function(module, exports) {

module.exports = "@import url(https://fonts.googleapis.com/css?family=Lato&subset=latin,latin-ext);\n\n.brand-logo{\n  float: left;\n  margin-bottom: 0;\n  padding-left: 3%;\n\n}\n.material-icons{\n    font-size: 2.4rem; \n}\nnav{\n  background-color: rgba(0, 137, 236, 0);\n  border: none;\n  box-shadow: none;\n}\nli{\n  color: orange;\n\n}\n.lead{\n  font-size: 2rem;\n}\n.right.hide-on-med-and-down{\n  padding-right: 3%; \n}\n\nnav ul li.active {\n   background: rgba(217, 35, 15, 0);\n}\n\n.nav-wrapper{\n    background: rgba(217, 35, 15, 0);\n    border-color: rgba(217, 35, 15, 0);\n}\n\n.nav-sign-up{\n  /*border: 2px solid white;*/\n  border-radius: 25px;\n  background:#2196F3;\n}\n\n.cover-heading{\n\n    font-family: lato;\n    text-align: center;\n    font-size: 5.56rem;\n    color: white;\n}\n/* Declare heights because of positioning of img element */\n\n@media (min-width: 768px) {\n  .navbrand-logo {\n    float: left;\n    \n  }\n.material-icons{\n    font-size: 2.4rem; \n}\n  #nav-mobile {\n    float: right;\n  }\n\n}\n\n@media (min-width: 768px) {\n  /* Start the vertical centering */\n  .site-wrapper-inner {\n    position: fixed;\n    width: 100%;\n    top: 0;\n  }\n}\n.parallax-container{\n    position: inherit;\n    padding: 50px;\n}\n\n.parallax{\n\n  background: linear-gradient(rgba(0, 0, 0, 0.2), rgba(255, 152, 0, 0.83), rgba(255, 193, 7, 0.96)),\n               url(./assets/beach.png) center no-repeat;\n  background-size: cover;             \n}\n\n\n.btn-floating{\n    width: 20%;\n}\n\n.cover-heading{\n\n    font-family: lato;\n    text-align: center;\n    font-size: 4.56rem;\n    color: white;\n}\n\n.lead{\n    text-align: center;\n    font-style: italic;\n}\n\n.signup{\n    text-align: center;\n\n}\n.waves-effect.waves-light.btn-large{\n    background-color: #0089ec; \n    border-radius: 10px;\n}\n@media (max-width: 1024){\n\n}\n\n.main-section{\n    background-color: #ffffff;\n}\n\n.page-footer{\n  color: #999; /* IE8 proofing */\n  background-color: #1289e8;\n  width: 100%;\n}\n"

/***/ }),

/***/ 758:
/***/ (function(module, exports) {

module.exports = "\nnav{\n  background-color: #1289e8;\n  border: none;\n  /*box-shadow: none;*/\n}\n.btn.btn-lg.btn-primary.btn-block{\n    background-color: #0a78d6;\n}\n.jumbotron{padding-top:30px;padding-bottom:30px;margin-bottom:30px;color:inherit;background-color:#eee}\n.jumbotron .h1,.jumbotron h1{color:inherit}\n.jumbotron p{margin-bottom:15px;font-size:21px;font-weight:200}\n.jumbotron>hr{border-top-color:#d5d5d5}\n.container .jumbotron,.container-fluid .jumbotron{padding-right:15px;padding-left:15px;border-radius:6px}\n.jumbotron .container{max-width:100%}\n@media screen and (min-width:768px){\n  .jumbotron{padding-top:48px;padding-bottom:48px\n  }\n  .container .jumbotron,.container-fluid .jumbotron{\n    padding-right:60px;padding-left:60px\n  }\n  .jumbotron .h1,.jumbotron h1{\n    font-size:63px}}\n"

/***/ }),

/***/ 759:
/***/ (function(module, exports) {

module.exports = "nav{\n  background-color: #1289e8;\n  border: none;\n  /*box-shadow: none;*/\n}\n\n.sebm-google-map-container {\n  height: 500px;\n}\n\n.elements{\n    border-width: 20px;\n    border-style: solid;\n}\n\n/* Was for autocomplete search box for map */\n  .pac-card {\n      margin: 10px 10px 0 0;\n      border-radius: 2px 0 0 2px;\n      box-sizing: border-box;\n      -moz-box-sizing: border-box;\n      outline: none;\n      box-shadow: 0 2px 6px rgba(0, 0, 0, 0.3);\n      background-color: #fff;\n      font-family: Roboto;\n  }\n\n      #pac-container {\n        padding-bottom: 12px;\n        margin-right: 12px;\n      }\n\n      .pac-controls {\n        display: inline-block;\n        padding: 5px 11px;\n      }\n\n      .pac-controls label {\n        font-family: Roboto;\n        font-size: 13px;\n        font-weight: 300;\n      }\n\n      #pac-input {\n        background-color: #fff;\n        font-family: Roboto;\n        font-size: 15px;\n        font-weight: 300;\n        margin-left: 12px;\n        padding: 0 11px 0 13px;\n        text-overflow: ellipsis;\n        width: 400px;\n      }\n\n      #pac-input:focus {\n        border-color: #4d90fe;\n      }\n\n      #title {\n        color: #fff;\n        background-color: #4d90fe;\n        font-size: 25px;\n        font-weight: 500;\n        padding: 6px 12px;\n      }\n      #target {\n        width: 345px;\n      }"

/***/ }),

/***/ 760:
/***/ (function(module, exports) {

module.exports = "nav{\n  background-color: #1289e8;\n  border: none;\n  /*box-shadow: none;*/\n}\n\n.jumbotron{padding-top:30px;padding-bottom:30px;margin-bottom:30px;color:inherit;background-color:#eee}\n.jumbotron .h1,.jumbotron h1{color:inherit}\n.jumbotron p{margin-bottom:15px;font-size:21px;font-weight:200}\n.jumbotron>hr{border-top-color:#d5d5d5}\n.container .jumbotron,.container-fluid .jumbotron{padding-right:15px;padding-left:15px;border-radius:6px}\n.jumbotron .container{max-width:100%}\n@media screen and (min-width:768px){\n  .jumbotron{padding-top:48px;padding-bottom:48px\n  }\n  .container .jumbotron,.container-fluid .jumbotron{\n    padding-right:60px;padding-left:60px\n  }\n  .jumbotron .h1,.jumbotron h1{\n    font-size:63px}}"

/***/ }),

/***/ 761:
/***/ (function(module, exports) {

module.exports = "body{\n      background: linear-gradient(45deg, #49D49D 10%, #A2C7E5 90%);\n    height: 100vh\n}\nnav{\n  background-color: rgba(0, 137, 236, 0);\n  border: none;\n  box-shadow: none;\n}\n\n.login-wrapper{\n      background: linear-gradient(56.94deg,#81D76D -4.06%,#80D66E 12.24%,#67B788 53.05%,#458CAB 87.51%,#2D6EC4 109.39%);\n    height: 100vh;\n}\n\n  \n.btn.btn-lg.btn-primary.btn-block{\n    background-color: #0a78d6;\n}\n  .form{\n        margin-top: 40px;\n    border-radius: 6px;\n    overflow: hidden;\n    opacity: 0;\n    -webkit-transform: translate3d(0, 500px, 0);\n            transform: translate3d(0, 500px, 0);\n    -webkit-animation: arrive 0.3s ease-in-out 0.9s forwards;\n            animation: arrive 0.3s ease-in-out 0.9s forwards;\n  }\n\n  /*\n.input-field{\n    width: 100%;\n    border: 0;\n    font-size: 20px;\n    font-weight: 300;\n    outline: 0;\n    margin: 1em 0 2.5em;\n}\n\nform{\n  text-align: center;\n  background-color: rgba(52, 73, 94, 0.7);\n  border-radius: 4px;\n  position: absolute;\n  margin: 0 auto; \n  margin-top: 150px;\n}\n\n*/\n@media (min-width: 768px) {\n  /* Start the vertical centering */\n  .site-wrapper-inner {\n    position: fixed;\n    width: 100%;\n    top: 0;\n  }\n}\n.container{\n  max-width:500px;\n  max-width: 500px;\n  height: 100%;\n  margin: 10vh auto;\n  position: inherit;\n}\n\n.contain{\n\n  background: linear-gradient(rgba(0, 0, 0, 0.2), rgba(255, 152, 0, 0.83), rgba(255, 193, 7, 0.96)),\n               url(../../app/img/beach.png) center no-repeat;\n  background-size: cover;             \n}\n\n.signin-form {\n    background-size: cover;\n    padding: 2em 2em;\n\t   text-align: center;\n    background-color: white;\n    border-radius: 25px ;\n}\n\n.login-form {\n    margin: 1em 0 2.5em;\n}\n\n/*--//signin-form--*/\n\n\n/*-- agileits --*/\n/*---- responsive-design -----*/\n@media(max-width:1440px){\n.main {\n    width: 56%;\n}\n}\n@media(max-width:1366px){\n.main {\n    width: 59%;\n}\n}\n@media(max-width:1280px){\nh1 {\n    font-size: 2.5em;\n}\n.main {\n    width: 63%;\n}\n}\n@media(max-width:1080px){\n.main {\n    width: 74%;\n\tmargin: 2em auto;\n}\n}\n@media(max-width:1024px){\n.main {\n    width: 82%;\n}\n.signin-form {\n    padding: 3em 2.5em;\n}\n}\n@media(max-width:991px){\n.main {\n    width: 85%;\n}\n}\n@media(max-width:900px){\n.main {\n    width: 93%;\n}\n}\n@media(max-width:800px){\n.main {\n    width: 51%;\n}\n.w3 {\n    float: none;\n    width: 100%;\n    margin-right: 0;\n    margin-bottom: 5%;\n}\n.agile {\n    float: none;\n    width: 100%;\n}\n.signin-form p a {\n    line-height: 1.8em;\n}\n}\n@media(max-width:768px){\n.main {\n    width: 53%;\n}\n}\n@media(max-width:736px){\n.main {\n    width: 55%;\n}\n}\n/*-- w3layouts --*/\n@media(max-width:667px){\n.main {\n    width: 61%;\n}\n}\n@media(max-width:640px){\n.main {\n    width: 64%;\n}\n}\n@media(max-width:600px){\n.main {\n    width: 68%;\n}\n}\n@media(max-width:568px){\n.main {\n    width: 72%;\n}\n}\n@media(max-width:480px){\n.main {\n    width: 78%;\n}\n.header-social a.face {\n    width: 27%;\n}\n.header-social a.goog {\n    width: 21%;\n}\n.w3 {\n    margin-bottom: 0%;\n}\n.signin-form input[type=\"text\"], .signin-form input[type=\"password\"], .signin-form input[type=\"email\"]  {\n    width: 50%;\n}\nh1 {\n    font-size: 2.2em;\n}\n.profile {\n    margin-top: 2em;\n}\n.signin-form {\n    padding: 2em 2em;\n}\n.copyright p {\n    font-size: 0.9em;\n}\n/*-- agileits --*/\n}\n@media(max-width:414px){\n.signin-form input[type=\"text\"], .signin-form input[type=\"password\"], .signin-form input[type=\"email\"] {\n    width: 50%;\n}\n.signin-form {\n    padding: 2em 1.5em;\n}\n.header-social a.face {\n    width: 25%;\n}\n.header-social a.goog {\n    width: 19%;\n}\n.tp {\n    margin: 1.7em 0 0;\n}\n.header-social {\n    margin-bottom: 1em;\n}\n.signin-form h3 {\n    margin-bottom: 1em;\n}\n.login-form {\n    margin: 1em 0 1.5em;\n}\n}\n@media(max-width:384px){\nh1 {\n    font-size: 2em;\n}\n.header-social a.face {\n    width: 22%;\n}\n.header-social a.goog {\n    width: 17%;\n}\n}\n@media(max-width:375px){\n.main {\n    width: 79%;\n}\n.header-social a.goog {\n    width: 15%;\n}\n}\n@media(max-width:320px){\nh1 {\n    font-size: 1.6em;\n}\n.main {\n    width: 89%;\n    margin: 1.5em auto;\n}\n.login-form {\n    margin: 1em 0 1.5em;\n}\n.signin-form {\n    padding: 1.5em 1.5em;\n}\n.signin-form h3 {\n    font-size: 1.5em;\n}\n.signin-form input[type=\"text\"], .signin-form input[type=\"password\"], .signin-form input[type=\"email\"]  {\n    width:50%;\n}\n.signin-form input[type=\"submit\"] {\n    padding: 0.7em 0;\n    font-size: 0.9em;\n}\n.signin-form p a {\n    font-size: 0.9em;\n}\n\n.signin-form p a {\n    line-height: 1.5em;\n}\n.copyright {\n    margin: 1em;\n}\n}\n/*--//responsive-design---*/"

/***/ }),

/***/ 762:
/***/ (function(module, exports) {

module.exports = "\n\n   <!-- Navbar elements are in this first div -->\n    <div class=\"contain\">\n\n      <flash-messages></flash-messages>\n      <!-- Routes to links in nav bar -->\n      <router-outlet></router-outlet>\n    </div>\n\n    \n\n\n\n\n\n"

/***/ }),

/***/ 763:
/***/ (function(module, exports) {

module.exports = "<nav>\n    <div class=\"nav-wrapper\">\n      <a [routerLink]=\"['/']\" class=\"brand-logo center\"><i class=\"material-icons\">comment</i>Watado</a>\n    </div>\n  </nav>\n \n<div class=\"jumbotron text-center\">\n  <div class=\"container\">\n    <h1>About page</h1>\n    <p class=\"lead\">About page works</p>\n    <div>\n      \n    </div>\n  </div>  \n</div>"

/***/ }),

/***/ 764:
/***/ (function(module, exports) {

module.exports = "<footer class=\"page-footer\">\n          <div class=\"container\">\n            <div class=\"row\">\n              <div class=\"col l6 s12\">\n                <h5 class=\"white-text\">Footer Content</h5>\n                <p class=\"grey-text text-lighten-4\">You can use rows and columns here to organize your footer content.</p>\n              </div>\n              <div class=\"col l4 offset-l2 s12\">\n                <h5 class=\"white-text\">Links</h5>\n                <ul>\n                  <li><a class=\"grey-text text-lighten-3\" href=\"#!\">Link 1</a></li>\n                  <li><a class=\"grey-text text-lighten-3\" href=\"#!\">Link 2</a></li>\n                  <li><a class=\"grey-text text-lighten-3\" href=\"#!\">Link 3</a></li>\n                  <li><a class=\"grey-text text-lighten-3\" href=\"#!\">Link 4</a></li>\n                </ul>\n              </div>\n            </div>\n          </div>\n          <div class=\"footer-copyright\">\n            <div class=\"container\">\n            © 2017 Copyright Text\n            <a class=\"grey-text text-lighten-4 right\" href=\"#!\">More Links</a>\n            </div>\n          </div>\n</footer>\n"

/***/ }),

/***/ 765:
/***/ (function(module, exports) {

module.exports = "<!-- Nav bar-->  \n<nav>\n    <div class=\"nav-wrapper\">\n      <a [routerLink]=\"['/']\" class=\"brand-logo \"><i class=\"material-icons\">comment</i>Watado</a>\n      <a href=\"#\" data-activates=\"mobile-demo\" class=\"button-collapse\"><i class=\"material-icons\">menu</i></a>\n      <ul id=\"nav-mobile\" class=\"right hide-on-med-and-down\">\n          <li *ngIf=\"!authService.loggedIn()\" [routerLinkActive]=\"['active']\" [routerLinkActiveOptions] = \"{exact:true}\"><a [routerLink]=\"['/login']\">Login</a></li>\n          <li *ngIf=\"!authService.loggedIn()\" [routerLinkActive]=\"['active']\" [routerLinkActiveOptions] = \"{exact:true}\"><a class=\"modal-trigger btn nav-sign-up \"  [routerLink]=\"['/register']\">Sign Up</a></li>\n          <li *ngIf=\"!authService.loggedIn()\" [routerLinkActive]=\"['active']\" [routerLinkActiveOptions] = \"{exact:true}\"><a [routerLink]=\"['/map-page']\">MAP</a></li>\n      </ul>\n      <ul class=\"side-nav\" id=\"mobile-demo\">\n          <li *ngIf=\"!authService.loggedIn()\" [routerLinkActive]=\"['active']\" [routerLinkActiveOptions] = \"{exact:true}\"><a [routerLink]=\"['/about']\">About</a></li>\n          <li *ngIf=\"!authService.loggedIn()\" [routerLinkActive]=\"['active']\" [routerLinkActiveOptions] = \"{exact:true}\"><a [routerLink]=\"['/login']\">Login</a></li>\n          <li *ngIf=\"!authService.loggedIn()\" [routerLinkActive]=\"['active']\" [routerLinkActiveOptions] = \"{exact:true}\"><a class=\"modal-trigger btn nav-sign-up \"  [routerLink]=\"['/register']\">Sign Up</a></li>\n          <li *ngIf=\"!authService.loggedIn()\" [routerLinkActive]=\"['active']\" [routerLinkActiveOptions] = \"{exact:true}\"><a [routerLink]=\"['/map-page']\">MAP</a></li>\n      </ul>    \n    </div>\n  </nav>\n \n\n<!-- Top section-->\n  <div class=\"parallax-container\">\n    <div class=\"parallax\"> \n      <img src=\"./assets/beach.png\">\n    </div>\n    <div class=\"row\">\n      <div class=\"col-xs-12 col-md-6\">\n        <h2 class=\"cover-heading\">Discover what Lagos has in Store for you</h2>\n        <p class=\"lead\">Watado, your modern-day town crier</p>\n        <p class=\"signup\">\n        <a class=\"waves-effect waves-light btn-large \" [routerLink]=\"['/register']\">Sign Up</a>\n      </p>\n      </div>\n    </div>  \n  </div>\n\n\n<!-- Main section-->\n<div class=\"main-section\">\n    <div class=\"section white\">\n      <div class=\"row container\">\n        <h2 class=\"header\">Parallax</h2>\n        <p class=\"grey-text text-darken-3 lighten-3\">Parallax is an effect where the background content or image in this case, is moved at a different speed than the foreground content while scrolling.</p>\n      </div>\n    </div>\n</div>   \n\n<!-- Footer -->\n<footer class=\"page-footer\">\n          <div class=\"container\">\n            <div class=\"row\">\n              <div class=\"col l6 s12\">\n                <h5 class=\"white-text\">Footer Content</h5>\n                <p class=\"grey-text text-lighten-4\">You can use rows and columns here to organize your footer content.</p>\n              </div>\n              <div class=\"col l4 offset-l2 s12\">\n                <h5 class=\"white-text\">Links</h5>\n                <ul>\n                  <li><a class=\"grey-text text-lighten-3\" href=\"#!\">Link 1</a></li>\n                  <li><a class=\"grey-text text-lighten-3\" href=\"#!\">Link 2</a></li>\n                  <li><a class=\"grey-text text-lighten-3\" href=\"#!\">Link 3</a></li>\n                  <li><a class=\"grey-text text-lighten-3\" href=\"#!\">Link 4</a></li>\n                </ul>\n              </div>\n            </div>\n          </div>\n          <div class=\"footer-copyright\">\n            <div class=\"container\">\n            © 2017 Copyright Text\n            <a class=\"grey-text text-lighten-4 right\" href=\"#!\">More Links</a>\n            </div>\n          </div>\n</footer> "

/***/ }),

/***/ 766:
/***/ (function(module, exports) {

module.exports = "\n<nav>\n    <div class=\"nav-wrapper\">\n      <a [routerLink]=\"['/']\" class=\"brand-logo center\"><i class=\"material-icons\">comment</i>Watado</a>\n    </div>\n</nav>\n\t\n<div class=\"container\">\n\t<h2 class=\"page-header\">Login</h2>\n\t<div class=\"row\">\n\t\t<form (submit)=\"onLoginSubmit()\" class=\"col s8\">\n\t\t\t<div class=\"row\">\n        <div class=\"input-field col s8\">\n\t\t\t\t\t<label>Username</label>\n\t\t\t\t\t<input type=\"text\" class=\"form-control\" [(ngModel)]=\"username\" name=\"username\">\n\t\t\t\t</div>\n\t\t\t</div>\t\n\t\t\t<div class=\"row\">\n        <div class=\"input-field col s8\">\n\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t<label>Password</label>\n\t\t\t\t\t\t<input type=\"password\" class=\"form-control\" [(ngModel)]=\"password\" name=\"password\">\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\t\t\n\t\t\t<input type=\"submit\" class=\"btn btn-primary\" value=\"Login\">\n\t\t</form>\n\t</div>\n</div> \t"

/***/ }),

/***/ 767:
/***/ (function(module, exports) {

module.exports = "<nav>\n    <div class=\"nav-wrapper\">\n      <a [routerLink]=\"['/']\" class=\"brand-logo center\"><i class=\"material-icons\">comment</i>Watado</a>\n    </div>\n</nav>\n<!-- this creates a google map on the page with the given lat/lng from -->\n<!-- the component as the initial center of the map: -->\n\n<div class=\"container\">\n\n    <div class=\"row\">\n      <h1>Welcome to Lagos</h1>\n      <div class=\"col s12\">\n        <div id=\"map\"> \n          <div class=\"form-group\">\n            <input id=\"autocomplete\" placeholder=\"search for location\" autocorrect=\"off\" autocapitalize=\"off\" spellcheck=\"off\" type=\"text\" class=\"form-control\" #search [formControl]=\"searchControl\">\n          </div>\n          <sebm-google-map\n            [latitude]=\"lat\"\n            [longitude]=\"lng\"\n            [zoom]=\"zoom\"\n            [disableDefaultUI]= false\n            (mapClick)=\"mapClicked($event)\"\n            >\n            <sebm-google-map-marker\n              *ngFor=\"let m of markers, let i = index\"\n              (markerClick)=\"clickedMarker(m,i)\"\n              [latitude]=\"m.lat\"\n              [longitude]=\"m.lng\"\n              [markerDraggable]=\"m.draggable\"\n              (dragEnd)=\"markerDragEnd(m, $event)\"\n            >\n              <sebm-google-map-info-window>\n                <strong>{{m.name}}</strong>\n              </sebm-google-map-info-window>\n            </sebm-google-map-marker>\n          </sebm-google-map>\n        </div>\n      </div>    \n\n  </div>\n</div>\n\n \n\n\n\n\n"

/***/ }),

/***/ 768:
/***/ (function(module, exports) {

module.exports = "<nav>\n    <div class=\"nav-wrapper\">\n      <a [routerLink]=\"['/']\" class=\"brand-logo center\"><i class=\"material-icons\">comment</i>Watado</a>\n    </div>\n</nav>\n  \n<div class=\"jumbotron text-center\">\n  <div class=\"container\">\n    <h1>Meet the Team Page</h1>\n    <p class=\"lead\">Meet the team page works</p>\n    <div>\n      \n    </div>\n  </div>  \n</div>\n"

/***/ }),

/***/ 769:
/***/ (function(module, exports) {

module.exports = "<nav>\n    <div class=\"nav-wrapper\">\n      <a [routerLink]=\"['/']\" class=\"brand-logo center\"><i class=\"material-icons\">comment</i>Watado</a>\n    </div>\n</nav>\n\n<div class=\"container\">\n    <div class=\"row\">\n          <div class=\"z-depth-1 grey lighten-4 row\" style=\"display: inline-block; padding: 32px 48px 0px 48px; border: 1px solid #EEE;\">\n          <h3>Sign Up</h3>\n            <form  (submit)=\"onRegisterSubmit()\"  class=\"col s12\">\n              \n          <div class=\"row\">\n            <div class=\"input-field \">\n              <input id=\"email\" type=\"email\" [(ngModel)]=\"email\" name=\"email\" class=\"form-control\">\n              <label for=\"email\">Email</label>\n            </div>\n          </div>\n          <div class=\"row\">\n            <div class=\"input-field \">\n              <input id=\"user_name\" type=\"text\" [(ngModel)]=\"username\" name=\"username\"class=\"form-control\">\n              <label for=\"user\">Username</label>\n            </div>\n          </div> \n          <div class=\"row\">\n            <div class=\"input-field \">\n              <input id=\"password\" type=\"password\" [(ngModel)]=\"password\" name=\"password\" class=\"form-control\">\n              <label for=\"password\">Password</label>\n            </div>\n          </div>\n          <div class=\"row\">\n            <div class=\"input-field \">\n              <input id=\"password_conf\" type=\"password\" [(ngModel)]=\"passwordConf\" name=\"passwordConf\" class=\"form-control\">\n              <label for=\"password_Conf\">Confirm Password</label>\n            </div>\n          </div>\n          <br>\n          <div>\n            <input type=\"submit\" class=\"btn btn-primary\" value=\"Register\">\n          </div>  \n          <div class=\"section\">\n            <p><a href=\"#\"> By clicking register, I agree to your terms</a></p>\n          </div>\n            </form>\n          </div>\n        \n    </div>  \n  </div>\n<!-- \n<div class=\"login-wrapper\">\n  <div class=\"container\">\n        <div class=\"signin-form profile\">\n          <h3>Sign Up</h3>\n          <div class=\"login-form\">\n            <form  (submit)=\"onRegisterSubmit()\">\n              <input id=\"email\" type=\"email\" [(ngModel)]=\"email\" name=\"email\" placeholder=\"E-mail\" required=\"\">\n              <input type=\"text\" name=\"username\" [(ngModel)]=\"username\"  placeholder=\"Username\" required=\"\">\n              <input type=\"password\" name=\"password\" [(ngModel)]=\"password\" placeholder=\"Password\" required=\"\">\n              <input type=\"password\" name=\"passwordConf\" [(ngModel)]=\"passwordConf\" placeholder=\"Confirm Password\" required=\"\">\n              <div>\n              <input type=\"submit\" class=\"btn btn-primary\" value=\"Register\">\n              </div>\n            </form>\n          </div>\n          <p><a href=\"#\"> By clicking register, I agree to your terms</a></p>\n      </div>\n      <div class=\"clear\"></div>\n  </div>      \n   \n  <div class=\"container\">\n    \t<div class=\"signup-form\">\n      <form (submit)=\"onRegisterSubmit()\" >\n           <p class=\"m-b-lg font-thin\">Join us and start view what people are currently saying about places around you</p>\n          <button (click)=\"login()\" class=\"btn btn-lg btn-primary btn-block\">\n          Sign Up with Facebook\n          </button>\n\n          <div class=\"row\">\n            <div class=\"input-field col s12\">\n              <input id=\"email\" type=\"email\" [(ngModel)]=\"email\" name=\"email\" class=\"form-control\">\n              <label for=\"email\">Email</label>\n            </div>\n          </div>\n          <div class=\"row\">\n            <div class=\"input-field col s12\">\n              <input id=\"user_name\" type=\"text\" [(ngModel)]=\"username\" name=\"username\"class=\"form-control\">\n              <label for=\"user\">Username</label>\n            </div>\n          </div> \n          <div class=\"row\">\n            <div class=\"input-field col s12\">\n              <input id=\"password\" type=\"password\" [(ngModel)]=\"password\" name=\"password\" class=\"form-control\">\n              <label for=\"password\">Password</label>\n            </div>\n          </div>\n          <div class=\"row\">\n            <div class=\"input-field col s12\">\n              <input id=\"password_conf\" type=\"password\" [(ngModel)]=\"passwordConf\" name=\"passwordConf\" class=\"form-control\">\n              <label for=\"password_Conf\">Confirm Password</label>\n            </div>\n          </div>\n          <br>\n          <div>\n            <input type=\"submit\" class=\"btn btn-primary\" value=\"Register\">\n          </div>  \n          <div class=\"section\">\n            </div>\n      </form>\n    \t</div>        \n</div>\n    -->\n"

/***/ }),

/***/ 799:
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 800:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(446);


/***/ })

},[800]);
//# sourceMappingURL=main.6270d55df216aa7ceb5c.bundle.map