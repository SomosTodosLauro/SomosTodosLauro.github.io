(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "+E44":
/*!***************************************!*\
  !*** ./src/app/audio/audio.module.ts ***!
  \***************************************/
/*! exports provided: AudioModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AudioModule", function() { return AudioModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @fortawesome/angular-fontawesome */ "6NWb");
/* harmony import */ var _audio_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./audio.component */ "ebS6");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");




class AudioModule {
}
AudioModule.ɵfac = function AudioModule_Factory(t) { return new (t || AudioModule)(); };
AudioModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({ type: AudioModule });
AudioModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({ imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
            _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_1__["FontAwesomeModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](AudioModule, { declarations: [_audio_component__WEBPACK_IMPORTED_MODULE_2__["AudioComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
        _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_1__["FontAwesomeModule"]], exports: [_audio_component__WEBPACK_IMPORTED_MODULE_2__["AudioComponent"]] }); })();


/***/ }),

/***/ "/gu6":
/*!*********************************************!*\
  !*** ./src/app/lauro/options/mouth.enum.ts ***!
  \*********************************************/
/*! exports provided: Mouth */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Mouth", function() { return Mouth; });
var Mouth;
(function (Mouth) {
    Mouth["APATICO"] = "mouth-1";
    Mouth["FELIZ"] = "mouth-2";
    Mouth["LINGUA"] = "mouth-3";
    Mouth["TRISTE"] = "mouth-4";
    Mouth["PENSATIVO"] = "mouth-5";
})(Mouth || (Mouth = {}));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/kevintalarico/Documents/kev/grilo/SomosTodosLauro.github.io/src/main.ts */"zUnb");


/***/ }),

/***/ "1tXq":
/*!********************************************!*\
  !*** ./src/app/lauro/nose/nose.service.ts ***!
  \********************************************/
/*! exports provided: NoseService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NoseService", function() { return NoseService; });
/* harmony import */ var _options_nose_enum__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../options/nose.enum */ "hgpc");
/* harmony import */ var _services_options_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/options.service */ "pR33");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");



class NoseService extends _services_options_service__WEBPACK_IMPORTED_MODULE_1__["OptionsService"] {
    constructor() {
        super(_options_nose_enum__WEBPACK_IMPORTED_MODULE_0__["Nose"]);
    }
}
NoseService.ɵfac = function NoseService_Factory(t) { return new (t || NoseService)(); };
NoseService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({ token: NoseService, factory: NoseService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "3b4f":
/*!********************************************!*\
  !*** ./src/app/lauro/eyes/eyes.service.ts ***!
  \********************************************/
/*! exports provided: EyesService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EyesService", function() { return EyesService; });
/* harmony import */ var _options_eyes_enum__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../options/eyes.enum */ "YEWi");
/* harmony import */ var _services_options_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/options.service */ "pR33");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");



class EyesService extends _services_options_service__WEBPACK_IMPORTED_MODULE_1__["OptionsService"] {
    constructor() {
        super(_options_eyes_enum__WEBPACK_IMPORTED_MODULE_0__["Eyes"]);
    }
}
EyesService.ɵfac = function EyesService_Factory(t) { return new (t || EyesService)(); };
EyesService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({ token: EyesService, factory: EyesService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "4Qva":
/*!**********************************************!*\
  !*** ./src/app/lauro/base/base.component.ts ***!
  \**********************************************/
/*! exports provided: BaseComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BaseComponent", function() { return BaseComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");

class BaseComponent {
    constructor() { }
    ngOnInit() {
    }
}
BaseComponent.ɵfac = function BaseComponent_Factory(t) { return new (t || BaseComponent)(); };
BaseComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: BaseComponent, selectors: [["app-base"]], decls: 8, vars: 0, consts: [["viewBox", "0 0 1080 1920", "version", "1.1", "xmlns", "http://www.w3.org/2000/svg", 0, "xmlns", "link", "http://www.w3.org/1999/xlink"], ["id", "Layer_9", "data-name", "Layer 9"], ["width", "1080", "height", "1920", 1, "cls-1"], ["id", "Layer_3", "data-name", "Layer 3"], ["d", "M966.72,1716.21S747.38,1635,746.53,1624s-6.77-345.4-6.77-345.4c3.13-16.17,6-33.45,8.25-51.75,2.18-17.37,3.68-33.95,4.66-49.63,6.48,1.15,76.43,12.39,125.2-37.87,4.82-5,46.4-50.58,35.76-108.54-3.57-19.43-13.88-38.9-33.48-58.11-20.89-18.9-40-26.37-53.64-29.68-31.66-7.64-56.21,1.75-66.67-12.54-5.66-7.74-3.31-17.1-1.91-27.6,6-44.49-6.77-96.23-29.68-119.76-11-11.26-29.37-14.91-66.19-22.21C622.42,753,569.88,748.12,504.65,754a477.92,477.92,0,0,0-64,10.33c-58.5,13.39-98.59,23.17-114.53,56.22-9.68,20.08-9.69,47.18-9.71,77.74a381.56,381.56,0,0,0,4.45,58.38c-8.44-2.21-21.22-2.28-36.52-2.28-13.7,0-93.6,33.1-98.16,117.56-1.28,23.67,3.26,43.66,11,60.22,22.91,49.09,72.33,62.69,78,64.2a122.64,122.64,0,0,0,62.63-.41,170.16,170.16,0,0,1,11.56,68.06l13.69,354.67s-1.14,12.55-10.27,16-259.1,81.51-259.1,81.51Z", 1, "cls-2"], ["d", "M321.93,1112.8S381.09,1427.23,426,1460.09s111.4,40.54,136.77,39.44,76.86,1.1,115.2-48.2,39.44-58.07,43.82-81.07,32.87-179.67,35.06-239.93", 1, "cls-3"], ["d", "M270.07,1050.67c-10.36,7.12-9.06,31.07,0,40.77", 1, "cls-3"], ["d", "M827.28,1050.67c13.59,15.54-5.83,33.66-5.83,33.66", 1, "cls-3"]], template: function BaseComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "svg", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "g", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "rect", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "g", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "path", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "path", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "path", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "path", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: [".cls-1[_ngcontent-%COMP%], .cls-3[_ngcontent-%COMP%] {\n  fill: none;\n}\n\n.cls-2[_ngcontent-%COMP%] {\n  fill: #fff;\n}\n\n.cls-2[_ngcontent-%COMP%], .cls-3[_ngcontent-%COMP%] {\n  stroke: #231f20;\n  stroke-miterlimit: 10;\n  stroke-width: 8px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL2Jhc2UuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFBYyxVQUFBO0FBRWQ7O0FBRnlCO0VBQU8sVUFBQTtBQU1oQzs7QUFOMkM7RUFBYyxlQUFBO0VBQWUscUJBQUE7RUFBcUIsaUJBQUE7QUFZN0YiLCJmaWxlIjoiYmFzZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jbHMtMSwuY2xzLTN7ZmlsbDpub25lO30uY2xzLTJ7ZmlsbDojZmZmO30uY2xzLTIsLmNscy0ze3N0cm9rZTojMjMxZjIwO3N0cm9rZS1taXRlcmxpbWl0OjEwO3N0cm9rZS13aWR0aDo4cHg7fSJdfQ== */"] });


/***/ }),

/***/ "4W3w":
/*!**************************************************!*\
  !*** ./src/app/lauro/options/background.enum.ts ***!
  \**************************************************/
/*! exports provided: Background */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Background", function() { return Background; });
var Background;
(function (Background) {
    Background["MEU_AMOR"] = "./assets/04-meu-amor";
    Background["TRELA"] = "./assets/01-trela";
    Background["CONTRAMAO"] = "./assets/02-contramao";
    Background["TERREIRO"] = "./assets/03-terreiro";
})(Background || (Background = {}));


/***/ }),

/***/ "8UEm":
/*!******************************************!*\
  !*** ./src/app/lauro/lauro.component.ts ***!
  \******************************************/
/*! exports provided: LauroComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LauroComponent", function() { return LauroComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_background_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./services/background.service */ "AaWH");
/* harmony import */ var _base_base_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./base/base.component */ "4Qva");
/* harmony import */ var _hair_hair_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./hair/hair.component */ "SFPB");
/* harmony import */ var _facial_hair_facial_hair_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./facial-hair/facial-hair.component */ "rcU2");
/* harmony import */ var _mouth_mouth_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./mouth/mouth.component */ "d0/c");
/* harmony import */ var _nose_nose_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./nose/nose.component */ "wTkp");
/* harmony import */ var _eyes_eyes_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./eyes/eyes.component */ "vBxA");
/* harmony import */ var _clothes_clothes_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./clothes/clothes.component */ "FuwP");









class LauroComponent {
    constructor(backgroundService) {
        this.backgroundService = backgroundService;
    }
    get background() {
        return `${this.backgroundService.selected}.png`;
    }
}
LauroComponent.ɵfac = function LauroComponent_Factory(t) { return new (t || LauroComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_background_service__WEBPACK_IMPORTED_MODULE_1__["BackgroundService"])); };
LauroComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: LauroComponent, selectors: [["app-lauro"]], decls: 9, vars: 1, consts: [["width", "100%", 3, "src"]], template: function LauroComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "img", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "app-base");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "app-hair");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "app-facial-hair");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "app-mouth");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "app-nose");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "app-eyes");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "app-clothes");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx.background, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    } }, directives: [_base_base_component__WEBPACK_IMPORTED_MODULE_2__["BaseComponent"], _hair_hair_component__WEBPACK_IMPORTED_MODULE_3__["HairComponent"], _facial_hair_facial_hair_component__WEBPACK_IMPORTED_MODULE_4__["FacialHairComponent"], _mouth_mouth_component__WEBPACK_IMPORTED_MODULE_5__["MouthComponent"], _nose_nose_component__WEBPACK_IMPORTED_MODULE_6__["NoseComponent"], _eyes_eyes_component__WEBPACK_IMPORTED_MODULE_7__["EyesComponent"], _clothes_clothes_component__WEBPACK_IMPORTED_MODULE_8__["ClothesComponent"]], styles: ["div[_ngcontent-%COMP%] {\n  position: absolute;\n  top: -20%;\n  left: 0px;\n  width: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2xhdXJvLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usa0JBQUE7RUFDQSxTQUFBO0VBQ0EsU0FBQTtFQUNBLFdBQUE7QUFDRiIsImZpbGUiOiJsYXVyby5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImRpdiB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAtMjAlO1xuICBsZWZ0OiAwcHg7XG4gIHdpZHRoOiAxMDAlO1xufSJdfQ== */"] });


/***/ }),

/***/ "AaWH":
/*!******************************************************!*\
  !*** ./src/app/lauro/services/background.service.ts ***!
  \******************************************************/
/*! exports provided: BackgroundService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BackgroundService", function() { return BackgroundService; });
/* harmony import */ var _options_background_enum__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../options/background.enum */ "4W3w");
/* harmony import */ var _options_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./options.service */ "pR33");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");



class BackgroundService extends _options_service__WEBPACK_IMPORTED_MODULE_1__["OptionsService"] {
    constructor() {
        super(_options_background_enum__WEBPACK_IMPORTED_MODULE_0__["Background"]);
    }
    get image() {
        return `<image src="${this.selected}.png" width="100%" />`;
    }
    get music() {
        return `${this.selected}.mp3`;
    }
}
BackgroundService.ɵfac = function BackgroundService_Factory(t) { return new (t || BackgroundService)(); };
BackgroundService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({ token: BackgroundService, factory: BackgroundService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "AytR":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "FgFe":
/*!***************************************!*\
  !*** ./src/app/lauro/lauro.module.ts ***!
  \***************************************/
/*! exports provided: LauroModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LauroModule", function() { return LauroModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _base_base_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./base/base.component */ "4Qva");
/* harmony import */ var _clothes_clothes_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./clothes/clothes.component */ "FuwP");
/* harmony import */ var _eyes_eyes_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./eyes/eyes.component */ "vBxA");
/* harmony import */ var _facial_hair_facial_hair_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./facial-hair/facial-hair.component */ "rcU2");
/* harmony import */ var _hair_hair_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./hair/hair.component */ "SFPB");
/* harmony import */ var _lauro_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./lauro.component */ "8UEm");
/* harmony import */ var _mouth_mouth_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./mouth/mouth.component */ "d0/c");
/* harmony import */ var _nose_nose_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./nose/nose.component */ "wTkp");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ "fXoL");










class LauroModule {
}
LauroModule.ɵfac = function LauroModule_Factory(t) { return new (t || LauroModule)(); };
LauroModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineNgModule"]({ type: LauroModule });
LauroModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineInjector"]({ imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵsetNgModuleScope"](LauroModule, { declarations: [_lauro_component__WEBPACK_IMPORTED_MODULE_6__["LauroComponent"],
        _base_base_component__WEBPACK_IMPORTED_MODULE_1__["BaseComponent"],
        _clothes_clothes_component__WEBPACK_IMPORTED_MODULE_2__["ClothesComponent"],
        _eyes_eyes_component__WEBPACK_IMPORTED_MODULE_3__["EyesComponent"],
        _facial_hair_facial_hair_component__WEBPACK_IMPORTED_MODULE_4__["FacialHairComponent"],
        _hair_hair_component__WEBPACK_IMPORTED_MODULE_5__["HairComponent"],
        _nose_nose_component__WEBPACK_IMPORTED_MODULE_8__["NoseComponent"],
        _mouth_mouth_component__WEBPACK_IMPORTED_MODULE_7__["MouthComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"]], exports: [_lauro_component__WEBPACK_IMPORTED_MODULE_6__["LauroComponent"]] }); })();


/***/ }),

/***/ "FuwP":
/*!****************************************************!*\
  !*** ./src/app/lauro/clothes/clothes.component.ts ***!
  \****************************************************/
/*! exports provided: ClothesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClothesComponent", function() { return ClothesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _clothes_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./clothes.service */ "PH8q");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");



function ClothesComponent__svg_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "g", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "rect", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "g", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "path", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "path", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "path", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "path", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} }
function ClothesComponent__svg_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "g", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "rect", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "g", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "polygon", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "path", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "path", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "path", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} }
function ClothesComponent__svg_ng_container_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "g", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "rect", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "g", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "path", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "path", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} }
function ClothesComponent__svg_ng_container_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "g", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "rect", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "g", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "path", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "path", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "path", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "path", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "path", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "path", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "path", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "path", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} }
function ClothesComponent__svg_ng_container_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "g", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "rect", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "g", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "circle", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "circle", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "circle", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "circle", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "circle", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "circle", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "circle", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "circle", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "circle", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "circle", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "circle", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "path", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "path", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} }
class ClothesComponent {
    constructor(service) {
        this.service = service;
    }
    get selected() {
        return this.service.selected;
    }
}
ClothesComponent.ɵfac = function ClothesComponent_Factory(t) { return new (t || ClothesComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_clothes_service__WEBPACK_IMPORTED_MODULE_1__["ClothesService"])); };
ClothesComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ClothesComponent, selectors: [["app-clothes"]], decls: 6, vars: 7, consts: [["viewBox", "0 0 1080 1920", "version", "1.1", "xmlns", "http://www.w3.org/2000/svg", 0, "xmlns", "link", "http://www.w3.org/1999/xlink"], [4, "ngIf"], ["id", "Layer_9", "data-name", "Layer 9"], ["width", "1080", "height", "1920", 1, "cls-1"], ["id", "Layer_8", "data-name", "Layer 8"], ["d", "M87.44,1716.21s220-76.17,229-77.22,21.21,77.22,21.21,77.22Z", 1, "cls-2"], ["d", "M966.58,1716.21s-195-82-201.51-82-19.39,82-19.39,82Z", 1, "cls-2"], ["d", "M748.08,1544.09c2.41-.56,6.87,4.31,15.75,25.78a125.31,125.31,0,0,1,14.56,47.67c4.8,51.46-24.87,89.26-32.71,98.67H624.37a415.15,415.15,0,0,0,54.93-44.84c23.41-22.71,36.16-41.82,39.12-46.18,13.3-19.65,21.25-31.39,24.89-49.59C746.76,1558.3,744.38,1544.94,748.08,1544.09Z", 1, "cls-2"], ["d", "M358.49,1609.37c7.49,9.16,74.49,94.87,117.76,103.2l-138.56,3.64s-26.63-56.49-20.39-94.35,34.95-78.42,37.87-78.74S358.49,1609.37,358.49,1609.37Z", 1, "cls-2"], ["id", "Layer_26", "data-name", "Layer 26"], ["points", "66.43 1716.21 363.1 1618.71 553.22 1626.21 747.94 1616.02 984.56 1716.21 66.43 1716.21", 1, "cls-2"], ["d", "M358.39,1616v-80.5s188.87,85.6,194.45,90.69-53,69.3-53,69.3Z", 1, "cls-2"], ["d", "M747.94,1616v-80.5s-189.12,85.6-194.72,90.69,53.08,69.3,53.08,69.3Z", 1, "cls-2"], ["d", "M578,1716.21c29.56-7.36,28.33-20.7,28.33-20.7l-53.08-69.3-53.38,69.3s0,15.84,30.38,20.7S578,1716.21,578,1716.21Z", 1, "cls-3"], ["id", "Layer_27", "data-name", "Layer 27"], ["d", "M355.2,1599.76s2.84,14.22,0,19.91-267.76,96.94-267.76,96.94H966.58s-204.18-85.92-209.72-96.23-11.18-28.64-11.18-28.64Z", 1, "cls-2"], ["d", "M340.26,1552c30-31.74,75.51-1.68,173-2.33,12.07-.08,149.21-1.45,216.82-10,4.76-.6,19.5-2.53,31.41,6,15.3,10.95,22.25,36.55,13.45,51.34-8.31,14-28.54,14.71-62.8,15.46-72.26,1.57-108.39,2.36-127.57,1.8-67-2-64,2.07-137.6-.31-93-3-114.3-10-119.63-23.92C322.58,1577.53,331.37,1561.38,340.26,1552Z", 1, "cls-2"], ["id", "Layer_31", "data-name", "Layer 31"], ["d", "M302.4,1649.38c-10.84-.32-53.34-14-45.89-38.41s32.53-69.79,51.5-68.44,40-.73,46.08,0a6.69,6.69,0,0,1,6.3,6.18l1.24,32.07-8.81,54Z", 1, "cls-2"], ["d", "M348,1632.83c-19.79,2.75-219.08,50.34-248,83.38H973s-164.77-88.62-200.32-83.38-142.42,65.57-142.42,65.57l-103.83-8L455,1671.17Z", 1, "cls-2"], ["d", "M514.66,1670.43c-59.78-17.67-79.36-57.73-97.55-48.31-17,8.8-25.15,65,0,70.84,10.47,2.43,30.9,14.65,61,12s99.48,4.94,115.42,4.33,51.31-7,86-19.55,22.85-63.68,9.43-63.68c-15.64,0-32.9,33.13-85.22,47.63C564.33,1684.66,528.29,1674.46,514.66,1670.43Z", 1, "cls-2"], ["d", "M354.09,1542.5c13.71.55,60.49,70.21,72,81.73s23.71,90.21-29.15,71.23-74.66-48.14-75-59.88S331.32,1541.59,354.09,1542.5Z", 1, "cls-2"], ["d", "M417.11,1644.85c15.58-1.35,39.3,25.07,46.75,25.07h14.23v9.49H461.15s-39.3-26.43-41.33-25.75S417.11,1644.85,417.11,1644.85Z", 1, "cls-3"], ["d", "M803.71,1643.7c10.85-.32,53.35-14,45.9-38.41s-32.53-69.79-51.51-68.44-40-.74-46.09,0a6.69,6.69,0,0,0-6.3,6.18l-1.24,32.07,8.81,53.94Z", 1, "cls-2"], ["d", "M752,1536.82c-13.71.55-60.27,72.36-71.8,83.88s-44.09,85.56,8.77,66.58,94.84-45.64,95.2-57.38S774.79,1535.91,752,1536.82Z", 1, "cls-2"], ["d", "M674.32,1656.72c-15.57,1.59-34.9,24.17-42.23,25.57s-13,10.5-13,10.5l4.86,5.61,6.68-8s40.53-24.78,42.66-24.5S674.32,1656.72,674.32,1656.72Z", 1, "cls-3"], ["id", "Layer_30", "data-name", "Layer 30"], ["cx", "363.62", "cy", "1607.47", "r", "18.98", 1, "cls-2"], ["cx", "396.11", "cy", "1626.27", "r", "18.98", 1, "cls-2"], ["cx", "433.13", "cy", "1640.51", "r", "18.98", 1, "cls-2"], ["cx", "473.47", "cy", "1653.42", "r", "18.98", 1, "cls-2"], ["cx", "513.32", "cy", "1662.98", "r", "18.98", 1, "cls-2"], ["cx", "554.18", "cy", "1670.48", "r", "18.98", 1, "cls-2"], ["cx", "594.13", "cy", "1665.14", "r", "18.98", 1, "cls-2"], ["cx", "631.61", "cy", "1652.42", "r", "18.98", 1, "cls-2"], ["cx", "671.27", "cy", "1638.16", "r", "18.98", 1, "cls-2"], ["cx", "710.04", "cy", "1621.27", "r", "18.98", 1, "cls-2"], ["cx", "744.79", "cy", "1602.3", "r", "18.98", 1, "cls-2"], ["d", "M255.35,1669.82c-7.9-4.64-14.27-3.13-14.56-5.23-.47-3.39,15.89-8.61,44.06-16.43,27.29-7.58,40.94-11.37,43.69-11.58,59.1-4.55,119.91,79.63,119.91,79.63H275.87a64.27,64.27,0,0,0-3.72-22.12C269.64,1687.07,265.63,1675.84,255.35,1669.82Z", 1, "cls-3"], ["d", "M835.23,1668.53c7.93-4.64,14.33-3.13,14.63-5.23.47-3.38-16-8.61-44.26-16.43-27.42-7.57-41.12-11.36-43.89-11.57-59.36-4.56-120.44,79.63-120.44,79.63H814.62a64,64,0,0,1,3.73-22.13C820.87,1685.78,824.91,1674.56,835.23,1668.53Z", 1, "cls-3"]], template: function ClothesComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "svg", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ClothesComponent__svg_ng_container_1_Template, 8, 0, "ng-container", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, ClothesComponent__svg_ng_container_2_Template, 8, 0, "ng-container", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, ClothesComponent__svg_ng_container_3_Template, 6, 0, "ng-container", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, ClothesComponent__svg_ng_container_4_Template, 12, 0, "ng-container", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, ClothesComponent__svg_ng_container_5_Template, 17, 0, "ng-container", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](ctx.selected);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.selected === "clothes-1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.selected === "clothes-2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.selected === "clothes-3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.selected === "clothes-4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.selected === "clothes-5");
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"]], styles: [".clothes-1[_ngcontent-%COMP%]   .cls-1[_ngcontent-%COMP%] {\n  fill: none;\n}\n.clothes-1[_ngcontent-%COMP%]   .cls-2[_ngcontent-%COMP%] {\n  fill: #ffc50c;\n  stroke: #231f20;\n  stroke-miterlimit: 10;\n  stroke-width: 8px;\n}\n.clothes-2[_ngcontent-%COMP%]   .cls-1[_ngcontent-%COMP%] {\n  fill: none;\n}\n.clothes-2[_ngcontent-%COMP%]   .cls-2[_ngcontent-%COMP%] {\n  fill: #ffc50c;\n}\n.clothes-2[_ngcontent-%COMP%]   .cls-2[_ngcontent-%COMP%], .clothes-2[_ngcontent-%COMP%]   .cls-3[_ngcontent-%COMP%] {\n  stroke: #231f20;\n  stroke-miterlimit: 10;\n  stroke-width: 8px;\n}\n.clothes-2[_ngcontent-%COMP%]   .cls-3[_ngcontent-%COMP%] {\n  fill: #ed1c24;\n}\n.clothes-3[_ngcontent-%COMP%]   .cls-1[_ngcontent-%COMP%] {\n  fill: none;\n}\n.clothes-3[_ngcontent-%COMP%]   .cls-2[_ngcontent-%COMP%] {\n  fill: #ffc50c;\n  stroke: #231f20;\n  stroke-miterlimit: 10;\n  stroke-width: 8px;\n}\n.clothes-4[_ngcontent-%COMP%]   .cls-1[_ngcontent-%COMP%] {\n  fill: none;\n}\n.clothes-4[_ngcontent-%COMP%]   .cls-2[_ngcontent-%COMP%] {\n  fill: #ffc50c;\n}\n.clothes-4[_ngcontent-%COMP%]   .cls-2[_ngcontent-%COMP%], .clothes-4[_ngcontent-%COMP%]   .cls-3[_ngcontent-%COMP%] {\n  stroke: #231f20;\n  stroke-miterlimit: 10;\n  stroke-width: 8px;\n}\n.clothes-4[_ngcontent-%COMP%]   .cls-3[_ngcontent-%COMP%] {\n  fill: #231f20;\n}\n.clothes-5[_ngcontent-%COMP%]   .cls-1[_ngcontent-%COMP%] {\n  fill: none;\n}\n.clothes-5[_ngcontent-%COMP%]   .cls-2[_ngcontent-%COMP%] {\n  fill: #fefbdf;\n}\n.clothes-5[_ngcontent-%COMP%]   .cls-2[_ngcontent-%COMP%], .clothes-5[_ngcontent-%COMP%]   .cls-3[_ngcontent-%COMP%] {\n  stroke: #231f20;\n  stroke-miterlimit: 10;\n  stroke-width: 8px;\n}\n.clothes-5[_ngcontent-%COMP%]   .cls-3[_ngcontent-%COMP%] {\n  fill: #ffc50c;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL2Nsb3RoZXMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0U7RUFBTyxVQUFBO0FBQ1Q7QUFEb0I7RUFBTyxhQUFBO0VBQWEsZUFBQTtFQUFlLHFCQUFBO0VBQXFCLGlCQUFBO0FBTzVFO0FBSEU7RUFBTyxVQUFBO0FBT1Q7QUFQb0I7RUFBTyxhQUFBO0FBVTNCO0FBVnlDO0VBQWMsZUFBQTtFQUFlLHFCQUFBO0VBQXFCLGlCQUFBO0FBZTNGO0FBZjZHO0VBQU8sYUFBQTtBQWtCcEg7QUFkRTtFQUFPLFVBQUE7QUFrQlQ7QUFsQm9CO0VBQU8sYUFBQTtFQUFhLGVBQUE7RUFBZSxxQkFBQTtFQUFxQixpQkFBQTtBQXdCNUU7QUFwQkU7RUFBTyxVQUFBO0FBd0JUO0FBeEJvQjtFQUFPLGFBQUE7QUEyQjNCO0FBM0J5QztFQUFjLGVBQUE7RUFBZSxxQkFBQTtFQUFxQixpQkFBQTtBQWdDM0Y7QUFoQzZHO0VBQU8sYUFBQTtBQW1DcEg7QUEvQkU7RUFBTyxVQUFBO0FBbUNUO0FBbkNvQjtFQUFPLGFBQUE7QUFzQzNCO0FBdEN5QztFQUFjLGVBQUE7RUFBZSxxQkFBQTtFQUFxQixpQkFBQTtBQTJDM0Y7QUEzQzZHO0VBQU8sYUFBQTtBQThDcEgiLCJmaWxlIjoiY2xvdGhlcy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jbG90aGVzLTEge1xuICAuY2xzLTF7ZmlsbDpub25lO30uY2xzLTJ7ZmlsbDojZmZjNTBjO3N0cm9rZTojMjMxZjIwO3N0cm9rZS1taXRlcmxpbWl0OjEwO3N0cm9rZS13aWR0aDo4cHg7fVxufVxuXG4uY2xvdGhlcy0yIHtcbiAgLmNscy0xe2ZpbGw6bm9uZTt9LmNscy0ye2ZpbGw6I2ZmYzUwYzt9LmNscy0yLC5jbHMtM3tzdHJva2U6IzIzMWYyMDtzdHJva2UtbWl0ZXJsaW1pdDoxMDtzdHJva2Utd2lkdGg6OHB4O30uY2xzLTN7ZmlsbDojZWQxYzI0O31cbn1cblxuLmNsb3RoZXMtMyB7XG4gIC5jbHMtMXtmaWxsOm5vbmU7fS5jbHMtMntmaWxsOiNmZmM1MGM7c3Ryb2tlOiMyMzFmMjA7c3Ryb2tlLW1pdGVybGltaXQ6MTA7c3Ryb2tlLXdpZHRoOjhweDt9XG59XG5cbi5jbG90aGVzLTQge1xuICAuY2xzLTF7ZmlsbDpub25lO30uY2xzLTJ7ZmlsbDojZmZjNTBjO30uY2xzLTIsLmNscy0ze3N0cm9rZTojMjMxZjIwO3N0cm9rZS1taXRlcmxpbWl0OjEwO3N0cm9rZS13aWR0aDo4cHg7fS5jbHMtM3tmaWxsOiMyMzFmMjA7fVxufVxuXG4uY2xvdGhlcy01IHtcbiAgLmNscy0xe2ZpbGw6bm9uZTt9LmNscy0ye2ZpbGw6I2ZlZmJkZjt9LmNscy0yLC5jbHMtM3tzdHJva2U6IzIzMWYyMDtzdHJva2UtbWl0ZXJsaW1pdDoxMDtzdHJva2Utd2lkdGg6OHB4O30uY2xzLTN7ZmlsbDojZmZjNTBjO31cbn0iXX0= */"] });


/***/ }),

/***/ "JvAG":
/*!***********************************************!*\
  !*** ./src/app/lauro/options/clothes.enum.ts ***!
  \***********************************************/
/*! exports provided: Clothes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Clothes", function() { return Clothes; });
var Clothes;
(function (Clothes) {
    Clothes["POLO"] = "clothes-1";
    Clothes["GRAVATA"] = "clothes-2";
    Clothes["OLIMPICA"] = "clothes-3";
    Clothes["MOLETOM"] = "clothes-4";
    Clothes["VESTIDO"] = "clothes-5";
})(Clothes || (Clothes = {}));


/***/ }),

/***/ "PH8q":
/*!**************************************************!*\
  !*** ./src/app/lauro/clothes/clothes.service.ts ***!
  \**************************************************/
/*! exports provided: ClothesService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClothesService", function() { return ClothesService; });
/* harmony import */ var _options_clothes_enum__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../options/clothes.enum */ "JvAG");
/* harmony import */ var _services_options_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/options.service */ "pR33");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");



class ClothesService extends _services_options_service__WEBPACK_IMPORTED_MODULE_1__["OptionsService"] {
    constructor() {
        super(_options_clothes_enum__WEBPACK_IMPORTED_MODULE_0__["Clothes"]);
    }
}
ClothesService.ɵfac = function ClothesService_Factory(t) { return new (t || ClothesService)(); };
ClothesService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({ token: ClothesService, factory: ClothesService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "SFPB":
/*!**********************************************!*\
  !*** ./src/app/lauro/hair/hair.component.ts ***!
  \**********************************************/
/*! exports provided: HairComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HairComponent", function() { return HairComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _hair_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./hair.service */ "bY7f");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");



function HairComponent__svg_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "rect", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} }
function HairComponent__svg_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "g", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "rect", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "g", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "path", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "path", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "path", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} }
function HairComponent__svg_ng_container_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "g", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "rect", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "g", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "path", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "path", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} }
function HairComponent__svg_ng_container_4__svg_g_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "g", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "rect", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function HairComponent__svg_ng_container_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, HairComponent__svg_ng_container_4__svg_g_1_Template, 2, 0, "g", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "g", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "path", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "path", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "path", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "path", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r3.selected === "hair-4");
} }
function HairComponent__svg_ng_container_5__svg_g_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "g", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "rect", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function HairComponent__svg_ng_container_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, HairComponent__svg_ng_container_5__svg_g_1_Template, 2, 0, "g", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "g", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "path", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "path", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "path", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "path", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "path", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "path", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "path", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r4.selected === "hair-5");
} }
class HairComponent {
    constructor(service) {
        this.service = service;
    }
    get selected() {
        return this.service.selected;
    }
}
HairComponent.ɵfac = function HairComponent_Factory(t) { return new (t || HairComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_hair_service__WEBPACK_IMPORTED_MODULE_1__["HairService"])); };
HairComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HairComponent, selectors: [["app-hair"]], decls: 6, vars: 7, consts: [["viewBox", "0 0 1080 1920", "version", "1.1", "xmlns", "http://www.w3.org/2000/svg", 0, "xmlns", "link", "http://www.w3.org/1999/xlink"], [4, "ngIf"], ["width", "1080", "height", "1920", 1, "cls-1"], ["id", "Layer_9", "data-name", "Layer 9"], ["id", "Layer_14", "data-name", "Layer 14"], ["d", "M791.78,941.48l-45.34,27.6a204.9,204.9,0,0,0,2-28.59c-.06-26.93-5.48-40-7.89-72-.6-8-1.08-18-1-29.56a212.18,212.18,0,0,0-143.23-35,200.16,200.16,0,0,0-161,5,309.65,309.65,0,0,0-106.84,12.25,3.76,3.76,0,0,0-2.75-.53c-1.93.51-4.15,3.27-4.15,13.34V963.16s-15.77-13.8-22.67-13.8-28.58,2-33.51,5.92a313.89,313.89,0,0,0,4.38-67.83,312.3,312.3,0,0,0-4.38-40.11,363.2,363.2,0,0,1,0-97.09c5.57-5.46,14.16-13.56,25.18-22.73,0,0,38.33-31.86,78.5-51.64C419,651.29,485.68,661.22,617,682.08c108.23,17.2,156.44,33.15,166.93,67.14C785,752.8,785.38,755.58,791.78,941.48Z", 1, "cls-2"], ["d", "M1152,953.71", 1, "cls-2"], ["d", "M279.3,807.66s0-41.73,4.56-44.77,11.38-15.93,17.45-21.25,54.63-46.28,61.46-46.28,30.36-19,43.26-19c0,0-46.43,8.73-56.71,15.17s-55.11,38.92-61.14,44.28-21.81,19.41-21,30.09S279.3,807.66,279.3,807.66Z", 1, "cls-3"], ["id", "Layer_15", "data-name", "Layer 15"], ["d", "M792.08,943.73l-45.34,27.6a204.75,204.75,0,0,0,2-28.58c-.06-26.94-5.48-40-7.89-72-.6-8-1.08-18-1-29.56-11.07-11.34-29.12-26.77-54.72-35.83-38.85-13.75-58.74,0-115.13,3.68-82.1,5.31-99.6-20.06-171.32-7.36a291.67,291.67,0,0,0-69.88,21.77,3.81,3.81,0,0,0-2.75-.54c-1.93.51-4.15,3.28-4.15,13.35V965.42s-15.77-13.8-22.67-13.8-28.58,2-33.51,5.91a313.8,313.8,0,0,0,4.38-67.82,312.3,312.3,0,0,0-4.38-40.11,363.29,363.29,0,0,1,0-97.1c9.68-22.62,21.8-33,31.65-38.29,8.94-4.78,28.48-12,28.48-12a237.22,237.22,0,0,1,199.94-25.79,110.23,110.23,0,0,0,31.31,0,112.84,112.84,0,0,0,49.74-20.26,112.8,112.8,0,0,1,34.08-25.79c24.83-12.06,34.55-4.77,58-14.74,34-14.45,42.21-41.93,56.19-37.76C764,580.53,767,593.4,771,610.61c8.63,36.78.24,57.07,5.29,92.54.48,3.38,2.44,15.11,4.09,26.39.82,5.59,2,12.59,3.81,21.94C785.14,756.32,785.88,759.81,792.08,943.73Z", 1, "cls-2"], ["d", "M762.82,664.85c-4.89-35.9-3.28-51-11-54.12-2.92-1.18-5.75-.07-10.5,1.84-11,4.42-12.4,13-24.52,20.27a52.43,52.43,0,0,1-10.36,4.58c-15.94,5.77-28.2,2.83-36.61,5-18.28,4.79-28.58,13.06-40.79,21-20.92,13.6-51.61,33.36-75.87,33.36-23.54,0-80.26-28.69-89.6-24a124.58,124.58,0,0,1,37.64,1.13c20.84,3.88,22.45,9.9,38.74,12.22,27.83,4,52.08-9.46,60.58-14.84,16.31-10.33,11.61-14.45,28.51-24.53,10.38-6.18,30.75-15.66,52.72-17.35,21.61-1.66,25.26-2.61,33.67-8.67,7.31-5.28,25.31-22,33.53-28.69a10.29,10.29,0,0,1,6.11-2.62h0s7.73,3.65,8.29,3.93c11.65,5.83,8,90.84,2.77,90.53C765.4,683.84,764.54,677.51,762.82,664.85Z", 1, "cls-3"], ["id", "Layer_9", "data-name", "Layer 9", 4, "ngIf"], ["id", "Layer_7", "data-name", "Layer 7"], ["d", "M791.49,943.79l-45.34,27.6a204.86,204.86,0,0,0,2-28.58c-.06-26.94-5.48-40-7.89-72-.6-8-1.08-18-1-29.56l-131.1-35.49s-24.65-5.91-13.8,6.9,39.43,31.54,39.43,31.54,13.8,13.8-14.79,9.86-167.57-41.4-167.57-41.4-24.65-3-11.83,6.9,28.58,16.76,28.58,16.76,20.7,13.8-21.68,9.85S328.2,823.53,328.2,823.53s-6.9-4.93-6.9,12.82V965.48s-15.77-13.8-22.67-13.8-28.59,2-33.52,5.91a313.1,313.1,0,0,0,4.39-67.82,312,312,0,0,0-4.39-40.11,364.13,364.13,0,0,1,0-97.1S276,679.61,314.4,641.17c4.93-4.92,10.84-7.88,8.87,6.9s2,54.22,2,54.22S506.65,553.45,558.88,538.66s25.61-3,15.75,6.9-50.27,82.8-51.26,94.63c0,0,93.65-70,107.45-74.92s26.61-12.81-1,18.73-33.51,70-33.51,70,89.7-59.14,113.36-61.12,25.62-1,3.94,19.72-54.22,53.23-53.23,65.06c0,0,42.39-22.68,82.8-21.69s1,9.86-1,14.79-20.7,23.65-10.84,33.51,19.72,10.84,30.56,10.84,27.6-7.88,29.57-7.88,4.93-1-3.94,15.77-3.95,24.57-3.95,28.55S798.39,795.93,791.49,943.79Z", 1, "cls-2"], ["d", "M538.27,574c3.78-5,4.75-14.83,4.75-17.8s15-17.33,20.7-18.87S589,532,574.63,545.56s-45.93,74.71-45.93,74.71S527.58,588.22,538.27,574Z", 1, "cls-3"], ["d", "M561.42,631s36.8-31.46,35-27.9-10.09,39.77-9.5,45.11,9.38,5.82,9.38,5.82,3.52-41.37,18.52-55.68,21.62-22,21.62-22,12-21.47-5.64-11S563.79,607.21,561.42,631Z", 1, "cls-3"], ["d", "M614.24,698.62s17.42.6,26.22-5.93c0,0-4.85,13.06-28.59,32,0,0-3.56,8.9,25.52-10.09s55.2-30.87,62.92-30.87,8.31,6.53-4.75,15.44-19.59,16-14.24,16.62,29.67-2.38,34.42,0,10.69,12.46,13.06,17.21,9.5,9.5,19.59,7.12,21.37-10.68,27.3-11.87,7.71,3.11,11.86-5.31,15-19.57,3.94-15.77-33,13.4-50.82,5.07-13.4-19.45-5.93-30.49,9.71-13.27,15.57-16,19.29-10.05-1.37-9.65-68.62,6.42-88.55,21.46c0,0,34-49.69,43.63-57.38s35.19-30.24,17.06-28.08c0,0-27.3,16.21-35,28.08s-20.18,14.25-23.74,20.78S651.64,660.93,651,666.42,641,679,634.42,682,614.24,698.62,614.24,698.62Z", 1, "cls-3"], ["id", "Layer_16", "data-name", "Layer 16"], ["d", "M262.41,789.24c23.37-37.58,48.76-98.65,104.09-102.91,35.2-2.71,160.4,14.45,186.72,11.74,83-8.55,91.18-56.74,162.26-50.56,7.77.68,84.36,8.39,111.15,61.92,8,16,8.54,30.09,9.15,53.22.76,28.83-1.94,73.87-21.93,128.6C831,901,856,918.69,867.71,948.33c24.9,63-37.45,107.66-31.1,219.16,0,0,4.24,74.36,39.3,94.49a45.27,45.27,0,0,0,14.35,5.43c12.75,1.88,22-4.13,23.65-1.55,1.29,2-3.16,7.83-7.8,11.54-13.21,10.55-31.94,7.38-39.5,5.64a72.62,72.62,0,0,0,25.62,6.66c24.88,1.65,43.41-10.82,45.72-7.17.94,1.49-.89,5.56-13.57,17.06a61.41,61.41,0,0,1-12,7.37,62.71,62.71,0,0,1-25,5.73,159,159,0,0,0,36.78,7c12.44.87,22.51,1.48,34.22-2.87,8.84-3.27,12.81-7.22,13.59-6.44,1.58,1.57-12.46,19.88-75.57,88.31,10.19,2.65,24.1,4.49,38.82,0,18.16-5.55,28.12-17.87,30.6-15.66,2.69,2.41-6.24,19.49-19.46,33.9-16.16,17.61-35,29.33-54.47,34.63-64.1,17.4-148.58,21.06-148.68,16l4.8-240.82s-6.36-119.9-6-127.6,9.11-168.27,5.91-174.58-6.81-101.1-17.64-113.74-42.23-32.5-50.91-35.21S543.5,953.82,321.84,963.16l-10.87-8-26.63-.7s-62.33,3-84.57,66.82c-4.82,13.82-27.4,74.45,5.36,125.19a111.2,111.2,0,0,0,27.19,28.83c34.25,21,47.51,26.2,52.23,25.85a37.44,37.44,0,0,1,12.06.65c5.15,1.14,4.92,2.88,19.74-.65l21.49-5.12,9,46.66,10.08,215.89S188.23,1481.79,157.09,1441s-39.89-67-37.94-74.81,12.65,12,32.11,14.29,10.7-15.26,5.83-18.18-32.11-17.09-47.67-38.71-15.57-39.63-6.81-33.54,48.65,14.84,70.05,8,34.08-18.48,39.91-26.27-52.56-68.46-63.26-94.07-36-69.3-22.38-65,47.68,30.61,40.87,19.91-63.25-39.36-47.68-48.38,52.54-15.87,41.84-16.83c-9.08-.81-61.61-20.78-59.47-28.8.5-1.85,4-2.4,6.93-3,31.08-5.89,61.52-25.09,60.34-29.75-.25-1-2-2-9.36-1.91-17.07-2.11-37.94-5.71-38.26-11.52s20.74-10.23,32.56-14.65C212.08,956.47,209.4,874.49,262.41,789.24Z", 1, "cls-2"], ["d", "M1075.58,1239.88", 1, "cls-3"], ["d", "M643.54,698.66a292.35,292.35,0,0,1-58.73,15.23c-41.72,6.21-62.13-.25-132.48,3-19.4.89-29.31,1.38-39.85,3.36C377,726.91,350,742.28,332.74,754.31a242,242,0,0,1,63.56-21.42c56.49-10.55,120.18-1,123.53-.48,13.91,2.17,49.58,8.51,76.5-1.31A131.4,131.4,0,0,0,616,721.7,115.79,115.79,0,0,0,643.54,698.66Z", 1, "cls-3"], ["d", "M638.51,730.16c-33.78,12.75-62.64,23.8-89,33.42-10.87,4-27.16,9.84-38.26,25.42-5.94,8.34-6.66,14.22-10.71,24.46a136.33,136.33,0,0,1-32.73,48.09c-28.16,25.44-66.3.16-114.8,9.35-26.41,5-61.73,21.34-98.59,72.36a374.29,374.29,0,0,1,63.78-39.15c14.56-7,27.68-13.39,44.7-18.12,56.57-15.74,74.86,9,111.77-9.53,26.47-13.26,47.74-41.35,44.53-55.66-.46-2.06-2.43-8.3-.46-15.75a29.14,29.14,0,0,1,7.62-12.87c15.19-15.69,53.67-24.62,82.69-40.76A156.55,156.55,0,0,0,638.51,730.16Z", 1, "cls-3"], ["d", "M534.4,748.45c-18.67-.83-44.25,1.17-67.64,15.9C444,778.69,439.35,795,422.61,809.67c-17.53,15.37-48.54,29.17-107.72,21.47a139.48,139.48,0,0,0,58.32,8.94c11.59-.73,45.76-2.88,73.27-26.43,24.61-21.07,23.36-41.67,44.51-46,10.6-2.19,23,.48,34.61-8.82A36.61,36.61,0,0,0,534.4,748.45Z", 1, "cls-3"], ["d", "M672.67,699.15c16.73-30.22,74.52-16.7,84.19-10.34s56.58,51.68,60.56,77.13,6.36,30.21,0,35.78c-1.38,1.21-1.84,1.89-1.69,2.1,0,0,8.12-9.37,11-14.05,14.51-23.19-14.15-67-17.24-71.69-6.25-9.55-21-31.4-49.37-43.58a96.62,96.62,0,0,0-38.17-8c-5.1,0-42.36.05-49.33,18.84C670.73,690.62,671.69,695.81,672.67,699.15Z", 1, "cls-3"], ["d", "M579.18,724.11", 1, "cls-3"]], template: function HairComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "svg", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, HairComponent__svg_ng_container_1_Template, 2, 0, "ng-container", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, HairComponent__svg_ng_container_2_Template, 7, 0, "ng-container", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, HairComponent__svg_ng_container_3_Template, 6, 0, "ng-container", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, HairComponent__svg_ng_container_4_Template, 7, 1, "ng-container", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, HairComponent__svg_ng_container_5_Template, 10, 1, "ng-container", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](ctx.selected);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.selected === "hair-1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.selected === "hair-2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.selected === "hair-3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.selected === "hair-4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.selected === "hair-5");
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"]], styles: [".cls-1[_ngcontent-%COMP%] {\n  fill: none;\n}\n\n.hair-2[_ngcontent-%COMP%]   .cls-1[_ngcontent-%COMP%] {\n  fill: none;\n}\n\n.hair-2[_ngcontent-%COMP%]   .cls-2[_ngcontent-%COMP%] {\n  fill: #231f20;\n  stroke: #231f20;\n  stroke-miterlimit: 10;\n  stroke-width: 8px;\n}\n\n.hair-2[_ngcontent-%COMP%]   .cls-3[_ngcontent-%COMP%] {\n  fill: #fff;\n}\n\n.hair-3[_ngcontent-%COMP%]   .cls-1[_ngcontent-%COMP%] {\n  fill: none;\n}\n\n.hair-3[_ngcontent-%COMP%]   .cls-2[_ngcontent-%COMP%] {\n  fill: #231f20;\n  stroke-width: 8px;\n}\n\n.hair-3[_ngcontent-%COMP%]   .cls-2[_ngcontent-%COMP%], .hair-3[_ngcontent-%COMP%]   .cls-3[_ngcontent-%COMP%] {\n  stroke: #231f20;\n  stroke-miterlimit: 10;\n}\n\n.hair-3[_ngcontent-%COMP%]   .cls-3[_ngcontent-%COMP%] {\n  fill: #fff;\n  stroke-width: 6px;\n}\n\n.hair-4[_ngcontent-%COMP%]   .cls-1[_ngcontent-%COMP%] {\n  fill: none;\n}\n\n.hair-4[_ngcontent-%COMP%]   .cls-2[_ngcontent-%COMP%] {\n  fill: #231f20;\n  stroke-width: 8px;\n}\n\n.hair-4[_ngcontent-%COMP%]   .cls-2[_ngcontent-%COMP%], .hair-4[_ngcontent-%COMP%]   .cls-3[_ngcontent-%COMP%] {\n  stroke: #231f20;\n  stroke-miterlimit: 10;\n}\n\n.hair-4[_ngcontent-%COMP%]   .cls-3[_ngcontent-%COMP%] {\n  fill: #fff;\n  stroke-width: 2px;\n}\n\n.hair-5[_ngcontent-%COMP%]   .cls-1[_ngcontent-%COMP%] {\n  fill: none;\n}\n\n.hair-5[_ngcontent-%COMP%]   .cls-2[_ngcontent-%COMP%] {\n  fill: #231f20;\n}\n\n.hair-5[_ngcontent-%COMP%]   .cls-2[_ngcontent-%COMP%], .hair-5[_ngcontent-%COMP%]   .cls-3[_ngcontent-%COMP%] {\n  stroke: #231f20;\n  stroke-miterlimit: 10;\n  stroke-width: 8px;\n}\n\n.hair-5[_ngcontent-%COMP%]   .cls-3[_ngcontent-%COMP%] {\n  fill: #fff;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL2hhaXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFBTyxVQUFBO0FBRVA7O0FBQUU7RUFBTyxVQUFBO0FBSVQ7O0FBSm9CO0VBQU8sYUFBQTtFQUFhLGVBQUE7RUFBZSxxQkFBQTtFQUFxQixpQkFBQTtBQVU1RTs7QUFWOEY7RUFBTyxVQUFBO0FBYXJHOztBQVRFO0VBQU8sVUFBQTtBQWFUOztBQWJvQjtFQUFPLGFBQUE7RUFBYSxpQkFBQTtBQWlCeEM7O0FBakIwRDtFQUFjLGVBQUE7RUFBZSxxQkFBQTtBQXFCdkY7O0FBckI2RztFQUFPLFVBQUE7RUFBVSxpQkFBQTtBQXlCOUg7O0FBckJFO0VBQU8sVUFBQTtBQXlCVDs7QUF6Qm9CO0VBQU8sYUFBQTtFQUFhLGlCQUFBO0FBNkJ4Qzs7QUE3QjBEO0VBQWMsZUFBQTtFQUFlLHFCQUFBO0FBaUN2Rjs7QUFqQzZHO0VBQU8sVUFBQTtFQUFVLGlCQUFBO0FBcUM5SDs7QUFqQ0U7RUFBTyxVQUFBO0FBcUNUOztBQXJDb0I7RUFBTyxhQUFBO0FBd0MzQjs7QUF4Q3lDO0VBQWMsZUFBQTtFQUFlLHFCQUFBO0VBQXFCLGlCQUFBO0FBNkMzRjs7QUE3QzZHO0VBQU8sVUFBQTtBQWdEcEgiLCJmaWxlIjoiaGFpci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jbHMtMXtmaWxsOm5vbmU7fVxuLmhhaXItMiB7XG4gIC5jbHMtMXtmaWxsOm5vbmU7fS5jbHMtMntmaWxsOiMyMzFmMjA7c3Ryb2tlOiMyMzFmMjA7c3Ryb2tlLW1pdGVybGltaXQ6MTA7c3Ryb2tlLXdpZHRoOjhweDt9LmNscy0ze2ZpbGw6I2ZmZjt9XG59XG5cbi5oYWlyLTMge1xuICAuY2xzLTF7ZmlsbDpub25lO30uY2xzLTJ7ZmlsbDojMjMxZjIwO3N0cm9rZS13aWR0aDo4cHg7fS5jbHMtMiwuY2xzLTN7c3Ryb2tlOiMyMzFmMjA7c3Ryb2tlLW1pdGVybGltaXQ6MTA7fS5jbHMtM3tmaWxsOiNmZmY7c3Ryb2tlLXdpZHRoOjZweDt9XG59XG5cbi5oYWlyLTQge1xuICAuY2xzLTF7ZmlsbDpub25lO30uY2xzLTJ7ZmlsbDojMjMxZjIwO3N0cm9rZS13aWR0aDo4cHg7fS5jbHMtMiwuY2xzLTN7c3Ryb2tlOiMyMzFmMjA7c3Ryb2tlLW1pdGVybGltaXQ6MTA7fS5jbHMtM3tmaWxsOiNmZmY7c3Ryb2tlLXdpZHRoOjJweDt9XG59XG5cbi5oYWlyLTUge1xuICAuY2xzLTF7ZmlsbDpub25lO30uY2xzLTJ7ZmlsbDojMjMxZjIwO30uY2xzLTIsLmNscy0ze3N0cm9rZTojMjMxZjIwO3N0cm9rZS1taXRlcmxpbWl0OjEwO3N0cm9rZS13aWR0aDo4cHg7fS5jbHMtM3tmaWxsOiNmZmY7fVxufSJdfQ== */"] });


/***/ }),

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var file_saver__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! file-saver */ "Iab2");
/* harmony import */ var file_saver__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(file_saver__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var html2canvas__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! html2canvas */ "wOnQ");
/* harmony import */ var html2canvas__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(html2canvas__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _lauro_services_background_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./lauro/services/background.service */ "AaWH");
/* harmony import */ var _lauro_hair_hair_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./lauro/hair/hair.service */ "bY7f");
/* harmony import */ var _lauro_eyes_eyes_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./lauro/eyes/eyes.service */ "3b4f");
/* harmony import */ var _lauro_mouth_mouth_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./lauro/mouth/mouth.service */ "xnTV");
/* harmony import */ var _lauro_facial_hair_facial_hair_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./lauro/facial-hair/facial-hair.service */ "r4wN");
/* harmony import */ var _lauro_nose_nose_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./lauro/nose/nose.service */ "1tXq");
/* harmony import */ var _lauro_clothes_clothes_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./lauro/clothes/clothes.service */ "PH8q");
/* harmony import */ var _lauro_lauro_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./lauro/lauro.component */ "8UEm");
/* harmony import */ var _audio_audio_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./audio/audio.component */ "ebS6");












const _c0 = ["lauro"];
const _c1 = ["text"];
const _c2 = ["canvasRef"];
class AppComponent {
    constructor(backgroundService, hairService, eyesService, mouthService, facialHairService, noseSerivce, renderer, clothesService) {
        this.backgroundService = backgroundService;
        this.hairService = hairService;
        this.eyesService = eyesService;
        this.mouthService = mouthService;
        this.facialHairService = facialHairService;
        this.noseSerivce = noseSerivce;
        this.renderer = renderer;
        this.clothesService = clothesService;
        this.overlay = false;
        this.done = false;
    }
    ngAfterViewInit() {
        this.setTextSize();
    }
    onResize() {
        this.setTextSize();
    }
    get music() {
        return this.backgroundService.music;
    }
    get options() {
        return {
            background: this.backgroundService.image
        };
    }
    select(option) {
        this.selectedService = this.resolveService(option);
    }
    previous() {
        return this.selectedService && this.selectedService.previous();
    }
    next() {
        return this.selectedService && this.selectedService.next();
    }
    resolveService(option) {
        switch (option) {
            case 'background':
                return this.backgroundService;
            case 'hair':
                return this.hairService;
            case 'eyes':
                return this.eyesService;
            case 'mouth':
                return this.mouthService;
            case 'facial-hair':
                return this.facialHairService;
            case 'nose':
                return this.noseSerivce;
            case 'clothes':
                return this.clothesService;
        }
        return null;
    }
    setTextSize() {
        const fontSizeModifier = 0.041152263;
        const textElement = this.text.nativeElement;
        const fontSize = `${textElement.clientWidth * fontSizeModifier}px`;
        this.renderer.setStyle(textElement, 'font-size', fontSize);
    }
    share(e) {
        this.overlay = false;
        this.done = true;
        e.stopPropagation();
        setTimeout(() => {
            html2canvas__WEBPACK_IMPORTED_MODULE_1___default()(this.lauro.nativeElement, {
                width: 1080,
                height: 1920,
                windowWidth: 1080,
                windowHeight: 1920,
                x: 0,
                onclone: (doc) => {
                    const svgs = doc.getElementsByTagName('svg');
                    for (let x = 0; x < svgs.length; x++) {
                        const svg = svgs.item(x);
                        svg.setAttribute('width', '1080px');
                        svg.setAttribute('height', '1920px');
                        svg.style.width = '1080px';
                        svg.style.height = '1920px';
                    }
                }
            }).then((canvas) => {
                canvas.toBlob(imageBlob => {
                    this.triggerDownload(imageBlob, 'SomosTodosLauro.png');
                });
            });
        }, 0);
    }
    triggerDownload(imageBlob, fileName) {
        file_saver__WEBPACK_IMPORTED_MODULE_0___default()(imageBlob, fileName);
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_lauro_services_background_service__WEBPACK_IMPORTED_MODULE_3__["BackgroundService"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_lauro_hair_hair_service__WEBPACK_IMPORTED_MODULE_4__["HairService"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_lauro_eyes_eyes_service__WEBPACK_IMPORTED_MODULE_5__["EyesService"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_lauro_mouth_mouth_service__WEBPACK_IMPORTED_MODULE_6__["MouthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_lauro_facial_hair_facial_hair_service__WEBPACK_IMPORTED_MODULE_7__["FacialHairService"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_lauro_nose_nose_service__WEBPACK_IMPORTED_MODULE_8__["NoseService"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["Renderer2"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_lauro_clothes_clothes_service__WEBPACK_IMPORTED_MODULE_9__["ClothesService"])); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], viewQuery: function AppComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵviewQuery"](_c0, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵviewQuery"](_c1, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵviewQuery"](_c2, 1);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵloadQuery"]()) && (ctx.lauro = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵloadQuery"]()) && (ctx.text = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵloadQuery"]()) && (ctx.canvasRef = _t.first);
    } }, hostBindings: function AppComponent_HostBindings(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("resize", function AppComponent_resize_HostBindingHandler($event) { return ctx.onResize($event); }, false, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresolveWindow"]);
    } }, decls: 34, vars: 7, consts: [[1, "container", 3, "click"], ["lauro", ""], [1, "aspect-ratio-container"], ["id", "contianer", 1, "content-container"], [1, "lauro"], [1, "logo"], ["src", "assets/logo.png", "alt", "#SomosTodosLauro"], ["text", ""], [1, "overlay"], [1, "music", 3, "file"], [1, "arrows"], [3, "click"], ["src", "assets/icons/arrow-left.svg", "alt", "Previous"], ["src", "assets/icons/arrow-right.svg", "alt", "Next"], [1, "options"], ["src", "assets/icons/hair.svg", "alt", "Change hair"], ["src", "assets/icons/eyes.svg", "alt", "Change eyes"], ["src", "assets/icons/nose.svg", "alt", "Change nose"], ["src", "assets/icons/mouth.svg", "alt", "Change mouth"], ["src", "assets/icons/facial-hair.svg", "alt", "Change facial hair"], ["src", "assets/icons/clothes.svg", "alt", "Change clothes"], ["src", "assets/icons/background.svg", "alt", "Change background"], ["src", "assets/icons/share.svg", "alt", "Share"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function AppComponent_Template_div_click_0_listener() { return ctx.overlay = true; });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](4, "app-lauro", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](6, "img", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "p", null, 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](9, "Toque em qualquer lugar pra come\u00E7ar");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](11, "app-audio", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](12, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](13, "button", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function AppComponent_Template_button_click_13_listener() { return ctx.previous(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](14, "img", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](15, "button", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function AppComponent_Template_button_click_15_listener() { return ctx.next(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](16, "img", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](17, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](18, "button", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function AppComponent_Template_button_click_18_listener() { return ctx.select("hair"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](19, "img", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](20, "button", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function AppComponent_Template_button_click_20_listener() { return ctx.select("eyes"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](21, "img", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](22, "button", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function AppComponent_Template_button_click_22_listener() { return ctx.select("nose"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](23, "img", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](24, "button", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function AppComponent_Template_button_click_24_listener() { return ctx.select("mouth"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](25, "img", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](26, "button", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function AppComponent_Template_button_click_26_listener() { return ctx.select("facial-hair"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](27, "img", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](28, "button", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function AppComponent_Template_button_click_28_listener() { return ctx.select("clothes"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](29, "img", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](30, "button", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function AppComponent_Template_button_click_30_listener() { return ctx.select("background"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](31, "img", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](32, "button", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function AppComponent_Template_button_click_32_listener($event) { return ctx.share($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](33, "img", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassProp"]("fadeOut", ctx.overlay)("done", ctx.done);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassProp"]("fadeIn", ctx.overlay);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("file", ctx.music);
    } }, directives: [_lauro_lauro_component__WEBPACK_IMPORTED_MODULE_10__["LauroComponent"], _audio_audio_component__WEBPACK_IMPORTED_MODULE_11__["AudioComponent"]], styles: [".container[_ngcontent-%COMP%] {\n  width: 56.25vh;\n  max-width: 100%;\n  margin: 0 auto;\n}\n\n.aspect-ratio-container[_ngcontent-%COMP%] {\n  padding-top: 177.777777778%;\n  position: relative;\n}\n\n.content-container[_ngcontent-%COMP%], .overlay[_ngcontent-%COMP%], .logo[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  overflow: hidden;\n}\n\n.overlay[_ngcontent-%COMP%] {\n  opacity: 0;\n  z-index: -1;\n}\n\n.logo[_ngcontent-%COMP%] {\n  height: auto;\n  width: 90%;\n  margin: 115% 5% 0;\n  box-sizing: border-box;\n  opacity: 1;\n}\n\n.logo[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 100%;\n}\n\n.logo[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  text-align: center;\n  color: #333;\n  font-size: 40px;\n  line-height: 1em;\n  margin: 2% 0;\n  animation: fade 2s infinite ease-in;\n}\n\n.logo.done[_ngcontent-%COMP%] {\n  margin-top: 130%;\n}\n\n.logo.done[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  display: none;\n}\n\n.fadeOut[_ngcontent-%COMP%] {\n  transition: opacity 1s;\n  opacity: 0;\n}\n\n.fadeIn[_ngcontent-%COMP%] {\n  transition: opacity 1s;\n  opacity: 1;\n  z-index: 0;\n}\n\n@keyframes fade {\n  0% {\n    opacity: 1;\n  }\n  50% {\n    opacity: 0;\n  }\n  60% {\n    opacity: 1;\n  }\n}\n\n.lauro[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n}\n\n.arrows[_ngcontent-%COMP%] {\n  width: 100%;\n  position: absolute;\n  top: 40%;\n  left: 0;\n  display: flex;\n  justify-content: space-between;\n}\n\n.arrows[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  width: 25%;\n}\n\n.options[_ngcontent-%COMP%] {\n  position: absolute;\n  bottom: 0;\n  left: 0;\n  text-align: center;\n  width: 100%;\n}\n\n.options[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  width: 25%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2FwcC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGNBQUE7RUFDQSxlQUFBO0VBQ0EsY0FBQTtBQUNGOztBQUVBO0VBQ0UsMkJBQUE7RUFDQSxrQkFBQTtBQUNGOztBQUVBO0VBQ0Usa0JBQUE7RUFDQSxNQUFBO0VBQ0EsT0FBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7QUFDRjs7QUFFQTtFQUNFLFVBQUE7RUFDQSxXQUFBO0FBQ0Y7O0FBRUE7RUFDRSxZQUFBO0VBQ0EsVUFBQTtFQUNBLGlCQUFBO0VBQ0Esc0JBQUE7RUFDQSxVQUFBO0FBQ0Y7O0FBQ0U7RUFDRSxXQUFBO0FBQ0o7O0FBRUU7RUFDRSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxZQUFBO0VBQ0EsbUNBQUE7QUFBSjs7QUFHRTtFQUNFLGdCQUFBO0FBREo7O0FBRUk7RUFDRSxhQUFBO0FBQU47O0FBS0E7RUFDRSxzQkFBQTtFQUNBLFVBQUE7QUFGRjs7QUFLQTtFQUNFLHNCQUFBO0VBQ0EsVUFBQTtFQUNBLFVBQUE7QUFGRjs7QUFLQTtFQUNFO0lBQUksVUFBQTtFQURKO0VBRUE7SUFBSyxVQUFBO0VBQ0w7RUFBQTtJQUFLLFVBQUE7RUFHTDtBQUNGOztBQURBO0VBQ0Usa0JBQUE7RUFDQSxNQUFBO0VBQ0EsT0FBQTtFQUNBLFdBQUE7QUFHRjs7QUFBQTtFQUNFLFdBQUE7RUFDQSxrQkFBQTtFQUNBLFFBQUE7RUFDQSxPQUFBO0VBQ0EsYUFBQTtFQUNBLDhCQUFBO0FBR0Y7O0FBREU7RUFDRSxVQUFBO0FBR0o7O0FBQ0E7RUFDRSxrQkFBQTtFQUNBLFNBQUE7RUFDQSxPQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0FBRUY7O0FBQUU7RUFDRSxVQUFBO0FBRUoiLCJmaWxlIjoiYXBwLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbnRhaW5lciB7XG4gIHdpZHRoOiA1Ni4yNXZoO1xuICBtYXgtd2lkdGg6IDEwMCU7XG4gIG1hcmdpbjogMCBhdXRvO1xufVxuXG4uYXNwZWN0LXJhdGlvLWNvbnRhaW5lciB7XG4gIHBhZGRpbmctdG9wOiAxNzcuNzc3Nzc3Nzc4JTtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuXG4uY29udGVudC1jb250YWluZXIsIC5vdmVybGF5LCAubG9nbyB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAwO1xuICBsZWZ0OiAwO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBvdmVyZmxvdzogaGlkZGVuO1xufVxuXG4ub3ZlcmxheSB7XG4gIG9wYWNpdHk6IDA7XG4gIHotaW5kZXg6IC0xO1xufVxuXG4ubG9nbyB7XG4gIGhlaWdodDogYXV0bztcbiAgd2lkdGg6IDkwJTtcbiAgbWFyZ2luOiAxMTUlIDUlIDA7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIG9wYWNpdHk6IDE7XG5cbiAgaW1nIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgfVxuXG4gIHAge1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBjb2xvcjogIzMzMztcbiAgICBmb250LXNpemU6IDQwcHg7XG4gICAgbGluZS1oZWlnaHQ6IDFlbTtcbiAgICBtYXJnaW46IDIlIDA7XG4gICAgYW5pbWF0aW9uOiBmYWRlIDJzIGluZmluaXRlIGVhc2UtaW47XG4gIH1cblxuICAmLmRvbmUge1xuICAgIG1hcmdpbi10b3A6IDEzMCU7XG4gICAgcCB7XG4gICAgICBkaXNwbGF5OiBub25lO1xuICAgIH1cbiAgfVxufVxuXG4uZmFkZU91dCB7XG4gIHRyYW5zaXRpb246IG9wYWNpdHkgMXM7XG4gIG9wYWNpdHk6IDA7XG59XG5cbi5mYWRlSW4ge1xuICB0cmFuc2l0aW9uOiBvcGFjaXR5IDFzO1xuICBvcGFjaXR5OiAxO1xuICB6LWluZGV4OiAwO1xufVxuXG5Aa2V5ZnJhbWVzIGZhZGUge1xuICAwJSB7b3BhY2l0eTogMX07XG4gIDUwJSB7b3BhY2l0eTogMH07XG4gIDYwJSB7b3BhY2l0eTogMX07XG59XG5cbi5sYXVybyB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAwO1xuICBsZWZ0OiAwO1xuICB3aWR0aDogMTAwJTtcbn1cblxuLmFycm93cyB7XG4gIHdpZHRoOiAxMDAlO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogNDAlO1xuICBsZWZ0OiAwO1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG5cbiAgYnV0dG9uIHtcbiAgICB3aWR0aDogMjUlO1xuICB9XG59XG5cbi5vcHRpb25zIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBib3R0b206IDA7XG4gIGxlZnQ6IDA7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgd2lkdGg6IDEwMCU7XG5cbiAgYnV0dG9uIHtcbiAgICB3aWR0aDogMjUlO1xuICB9XG59Il19 */"] });


/***/ }),

/***/ "YEWi":
/*!********************************************!*\
  !*** ./src/app/lauro/options/eyes.enum.ts ***!
  \********************************************/
/*! exports provided: Eyes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Eyes", function() { return Eyes; });
var Eyes;
(function (Eyes) {
    Eyes["OCULOS"] = "eyes-1";
    Eyes["OCULOS_SOL"] = "eyes-2";
    Eyes["MASCARA"] = "eyes-3";
    Eyes["OLHINHO"] = "eyes-4";
    Eyes["BRILHANTE"] = "eyes-5";
})(Eyes || (Eyes = {}));


/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser/animations */ "R1ws");
/* harmony import */ var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @fortawesome/angular-fontawesome */ "6NWb");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "vY5A");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _audio_audio_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./audio/audio.module */ "+E44");
/* harmony import */ var _lauro_lauro_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./lauro/lauro.module */ "FgFe");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ "fXoL");








class AppModule {
}
AppModule.ɵfac = function AppModule_Factory(t) { return new (t || AppModule)(); };
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineInjector"]({ providers: [], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
            _lauro_lauro_module__WEBPACK_IMPORTED_MODULE_6__["LauroModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_1__["NoopAnimationsModule"],
            _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_2__["FontAwesomeModule"],
            _audio_audio_module__WEBPACK_IMPORTED_MODULE_5__["AudioModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
        _lauro_lauro_module__WEBPACK_IMPORTED_MODULE_6__["LauroModule"],
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_1__["NoopAnimationsModule"],
        _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_2__["FontAwesomeModule"],
        _audio_audio_module__WEBPACK_IMPORTED_MODULE_5__["AudioModule"]] }); })();


/***/ }),

/***/ "bY7f":
/*!********************************************!*\
  !*** ./src/app/lauro/hair/hair.service.ts ***!
  \********************************************/
/*! exports provided: HairService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HairService", function() { return HairService; });
/* harmony import */ var _options_hair_enum__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../options/hair.enum */ "vGd/");
/* harmony import */ var _services_options_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/options.service */ "pR33");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");



class HairService extends _services_options_service__WEBPACK_IMPORTED_MODULE_1__["OptionsService"] {
    constructor() {
        super(_options_hair_enum__WEBPACK_IMPORTED_MODULE_0__["Hair"]);
    }
}
HairService.ɵfac = function HairService_Factory(t) { return new (t || HairService)(); };
HairService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({ token: HairService, factory: HairService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "d0/c":
/*!************************************************!*\
  !*** ./src/app/lauro/mouth/mouth.component.ts ***!
  \************************************************/
/*! exports provided: MouthComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MouthComponent", function() { return MouthComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _mouth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./mouth.service */ "xnTV");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");



function MouthComponent__svg_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "g", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "rect", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "g", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "path", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "path", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} }
function MouthComponent__svg_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "g", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "rect", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "g", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "path", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} }
function MouthComponent__svg_ng_container_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "g", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "rect", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "g", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "path", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "path", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "path", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} }
function MouthComponent__svg_ng_container_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "g", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "rect", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "g", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "path", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} }
function MouthComponent__svg_ng_container_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "g", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "rect", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "g", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "path", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "path", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} }
class MouthComponent {
    constructor(service) {
        this.service = service;
    }
    get selected() {
        return this.service.selected;
    }
}
MouthComponent.ɵfac = function MouthComponent_Factory(t) { return new (t || MouthComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_mouth_service__WEBPACK_IMPORTED_MODULE_1__["MouthService"])); };
MouthComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: MouthComponent, selectors: [["app-mouth"]], decls: 6, vars: 7, consts: [["viewBox", "0 0 1080 1920", "version", "1.1", "xmlns", "http://www.w3.org/2000/svg", 0, "xmlns", "link", "http://www.w3.org/1999/xlink"], [4, "ngIf"], ["id", "Layer_9", "data-name", "Layer 9"], ["width", "1080", "height", "1920", 1, "cls-1"], ["id", "Layer_6", "data-name", "Layer 6"], ["d", "M455.34,1227.3", 1, "cls-2"], ["d", "M428.79,1226.26c3.06,3.62,11.6.94,13.7.35,25.5-7.15,176.61-8.22,209.35-.7,2.9.67,13.8,3.45,18.62-1.75a8.1,8.1,0,0,0,2.1-6.68c-1-5.32-8.78-8-11.89-9-31.66-10.8-161.89-12.6-216.07,1-4.73,1.19-14.45,3.88-16.51,10.54C428,1220.34,426.88,1224,428.79,1226.26Z", 1, "cls-3"], ["id", "Layer_17", "data-name", "Layer 17"], ["d", "M427.67,1206.29c3.37-10,37.84,3.81,128.85,1.17,69.6-2,112.66-12,116.15-1.17,2.64,8.14-19.12,22.2-34.76,32.32-9.73,6.3-37.74,24.41-68.58,29.62C498.29,1280.23,422.4,1222,427.67,1206.29Z", 1, "cls-2"], ["id", "Layer_20", "data-name", "Layer 20"], ["d", "M427.67,1206.29c1.26-6.72,48.63,3.69,128.85,1.17,67.14-2.11,112.87-11.88,116.15-1.17,1.52,5-6.83,11.7-20.69,22.9-5.71,4.62-24.24,19.6-46.13,26.06-16.71,4.92-32.7,4.09-106.51-20.56C451,1218.56,426.9,1210.41,427.67,1206.29Z", 1, "cls-2"], ["d", "M633.41,1233.82c19.13,3.68,28.64,20.29,30.37,23.3s8,14.29,6.07,29c-.82,6.32-2.19,16.84-9.34,20.55-10.82,5.62-29.06-7.37-37.84-17.75-2.23-2.62-2.56-3.56-9.35-12.14-1.85-2.34-5.9-6.86-14-15.89,0,0-7.52-8.37-12.31-8.45C586.56,1251.49,607.7,1228.87,633.41,1233.82Z", 1, "cls-3"], ["d", "M598.93,1243.42a46.84,46.84,0,0,1,31.64,8.42c15.66,11.32,18.23,28.42,18.63,31.39", 1, "cls-3"], ["id", "Layer_18", "data-name", "Layer 18"], ["d", "M554.31,1199.17a119.23,119.23,0,0,0-60.27,19.4c-36,23.64-55.9,65.08-49.7,70.79,4.71,4.34,19.25-16.73,54.43-28.76,50.14-17.15,101.45-2,114.63,1.94,32.08,9.49,45.64,21.57,50.09,16.54,6.62-7.5-14.69-44.29-47.28-64C590.82,1199.66,565.5,1198.82,554.31,1199.17Z", 1, "cls-2"], ["id", "Layer_19", "data-name", "Layer 19"], ["d", "M455.36,1250c98.94-10.7,193.27-3.59,205.13-1.17", 1, "cls-2"], ["d", "M670.31,1204.73c-14.52,26.77-15.77,43.78-14.52,55.72s14.52,23.87,14.52,23.87", 1, "cls-2"]], template: function MouthComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "svg", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, MouthComponent__svg_ng_container_1_Template, 6, 0, "ng-container", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, MouthComponent__svg_ng_container_2_Template, 5, 0, "ng-container", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, MouthComponent__svg_ng_container_3_Template, 7, 0, "ng-container", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, MouthComponent__svg_ng_container_4_Template, 5, 0, "ng-container", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, MouthComponent__svg_ng_container_5_Template, 6, 0, "ng-container", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](ctx.selected);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.selected === "mouth-1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.selected === "mouth-2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.selected === "mouth-3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.selected === "mouth-4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.selected === "mouth-5");
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"]], styles: [".mouth-1[_ngcontent-%COMP%]   .cls-1[_ngcontent-%COMP%] {\n  fill: none;\n}\n.mouth-1[_ngcontent-%COMP%]   .cls-2[_ngcontent-%COMP%] {\n  fill: #7baea8;\n}\n.mouth-1[_ngcontent-%COMP%]   .cls-3[_ngcontent-%COMP%] {\n  fill: #fff;\n  stroke: #231f20;\n  stroke-miterlimit: 10;\n  stroke-width: 6px;\n}\n.mouth-2[_ngcontent-%COMP%]   .cls-1[_ngcontent-%COMP%] {\n  fill: none;\n}\n.mouth-2[_ngcontent-%COMP%]   .cls-2[_ngcontent-%COMP%] {\n  fill: #fff;\n  stroke: #231f20;\n  stroke-miterlimit: 10;\n  stroke-width: 6px;\n}\n.mouth-3[_ngcontent-%COMP%]   .cls-1[_ngcontent-%COMP%] {\n  fill: none;\n}\n.mouth-3[_ngcontent-%COMP%]   .cls-2[_ngcontent-%COMP%] {\n  fill: #fff;\n}\n.mouth-3[_ngcontent-%COMP%]   .cls-2[_ngcontent-%COMP%], .mouth-3[_ngcontent-%COMP%]   .cls-3[_ngcontent-%COMP%] {\n  stroke: #231f20;\n  stroke-miterlimit: 10;\n  stroke-width: 6px;\n}\n.mouth-3[_ngcontent-%COMP%]   .cls-3[_ngcontent-%COMP%] {\n  fill: #be1e2d;\n}\n.mouth-4[_ngcontent-%COMP%]   .cls-1[_ngcontent-%COMP%] {\n  fill: none;\n}\n.mouth-4[_ngcontent-%COMP%]   .cls-2[_ngcontent-%COMP%] {\n  fill: #fff;\n  stroke: #231f20;\n  stroke-miterlimit: 10;\n  stroke-width: 6px;\n}\n.mouth-5[_ngcontent-%COMP%]   .cls-1[_ngcontent-%COMP%] {\n  fill: none;\n}\n.mouth-5[_ngcontent-%COMP%]   .cls-2[_ngcontent-%COMP%] {\n  fill: #fff;\n  stroke: #231f20;\n  stroke-miterlimit: 10;\n  stroke-width: 8px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL21vdXRoLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNFO0VBQU8sVUFBQTtBQUNUO0FBRG9CO0VBQU8sYUFBQTtBQUkzQjtBQUp5QztFQUFPLFVBQUE7RUFBVSxlQUFBO0VBQWUscUJBQUE7RUFBcUIsaUJBQUE7QUFVOUY7QUFORTtFQUFPLFVBQUE7QUFVVDtBQVZvQjtFQUFPLFVBQUE7RUFBVSxlQUFBO0VBQWUscUJBQUE7RUFBcUIsaUJBQUE7QUFnQnpFO0FBWkU7RUFBTyxVQUFBO0FBZ0JUO0FBaEJvQjtFQUFPLFVBQUE7QUFtQjNCO0FBbkJzQztFQUFjLGVBQUE7RUFBZSxxQkFBQTtFQUFxQixpQkFBQTtBQXdCeEY7QUF4QjBHO0VBQU8sYUFBQTtBQTJCakg7QUF2QkU7RUFBTyxVQUFBO0FBMkJUO0FBM0JvQjtFQUFPLFVBQUE7RUFBVSxlQUFBO0VBQWUscUJBQUE7RUFBcUIsaUJBQUE7QUFpQ3pFO0FBN0JFO0VBQU8sVUFBQTtBQWlDVDtBQWpDb0I7RUFBTyxVQUFBO0VBQVUsZUFBQTtFQUFlLHFCQUFBO0VBQXFCLGlCQUFBO0FBdUN6RSIsImZpbGUiOiJtb3V0aC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5tb3V0aC0xIHtcbiAgLmNscy0xe2ZpbGw6bm9uZTt9LmNscy0ye2ZpbGw6IzdiYWVhODt9LmNscy0ze2ZpbGw6I2ZmZjtzdHJva2U6IzIzMWYyMDtzdHJva2UtbWl0ZXJsaW1pdDoxMDtzdHJva2Utd2lkdGg6NnB4O31cbn1cblxuLm1vdXRoLTIge1xuICAuY2xzLTF7ZmlsbDpub25lO30uY2xzLTJ7ZmlsbDojZmZmO3N0cm9rZTojMjMxZjIwO3N0cm9rZS1taXRlcmxpbWl0OjEwO3N0cm9rZS13aWR0aDo2cHg7fVxufVxuXG4ubW91dGgtMyB7XG4gIC5jbHMtMXtmaWxsOm5vbmU7fS5jbHMtMntmaWxsOiNmZmY7fS5jbHMtMiwuY2xzLTN7c3Ryb2tlOiMyMzFmMjA7c3Ryb2tlLW1pdGVybGltaXQ6MTA7c3Ryb2tlLXdpZHRoOjZweDt9LmNscy0ze2ZpbGw6I2JlMWUyZDt9XG59XG5cbi5tb3V0aC00IHtcbiAgLmNscy0xe2ZpbGw6bm9uZTt9LmNscy0ye2ZpbGw6I2ZmZjtzdHJva2U6IzIzMWYyMDtzdHJva2UtbWl0ZXJsaW1pdDoxMDtzdHJva2Utd2lkdGg6NnB4O31cbn1cblxuLm1vdXRoLTUge1xuICAuY2xzLTF7ZmlsbDpub25lO30uY2xzLTJ7ZmlsbDojZmZmO3N0cm9rZTojMjMxZjIwO3N0cm9rZS1taXRlcmxpbWl0OjEwO3N0cm9rZS13aWR0aDo4cHg7fVxufSJdfQ== */"] });


/***/ }),

/***/ "ebS6":
/*!******************************************!*\
  !*** ./src/app/audio/audio.component.ts ***!
  \******************************************/
/*! exports provided: AudioComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AudioComponent", function() { return AudioComponent; });
/* harmony import */ var howler__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! howler */ "HlzF");
/* harmony import */ var howler__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(howler__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");


class AudioComponent {
    constructor() {
        this.muted = false;
    }
    ngOnInit() {
        howler__WEBPACK_IMPORTED_MODULE_0__["Howler"].mute(this.muted);
    }
    ngOnChanges() {
        this.initMusic();
    }
    muteToggle() {
        this.muted = !this.muted;
        howler__WEBPACK_IMPORTED_MODULE_0__["Howler"].mute(this.muted);
    }
    initMusic() {
        if (this.howl) {
            this.howl.stop();
        }
        if (this.file) {
            this.howl = new howler__WEBPACK_IMPORTED_MODULE_0__["Howl"]({ autoplay: true, volume: .25, loop: true, src: new Array(this.file) });
        }
    }
}
AudioComponent.ɵfac = function AudioComponent_Factory(t) { return new (t || AudioComponent)(); };
AudioComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: AudioComponent, selectors: [["app-audio"]], inputs: { file: "file" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵNgOnChangesFeature"]], decls: 2, vars: 1, consts: [[3, "click"], ["alt", "Play/mute music", 3, "src"]], template: function AudioComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "button", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function AudioComponent_Template_button_click_0_listener() { return ctx.muteToggle(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "img", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate1"]("src", "assets/icons/music", ctx.muted ? "-off" : "", ".svg", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
    } }, styles: ["button[_ngcontent-%COMP%] {\n  width: 20%;\n  position: absolute;\n  top: 0;\n  right: 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2F1ZGlvLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsVUFBQTtFQUNBLGtCQUFBO0VBQ0EsTUFBQTtFQUNBLFFBQUE7QUFDRiIsImZpbGUiOiJhdWRpby5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImJ1dHRvbiB7XG4gIHdpZHRoOiAyMCU7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAwO1xuICByaWdodDogMDtcbn0iXX0= */"] });


/***/ }),

/***/ "hgpc":
/*!********************************************!*\
  !*** ./src/app/lauro/options/nose.enum.ts ***!
  \********************************************/
/*! exports provided: Nose */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Nose", function() { return Nose; });
var Nose;
(function (Nose) {
    Nose["NARIGUDO"] = "nose-1";
    Nose["COUVE"] = "nose-2";
    Nose["PEQUENO"] = "nose-3";
    Nose["PORQUINHO"] = "nose-4";
    Nose["BOZO"] = "nose-5";
})(Nose || (Nose = {}));


/***/ }),

/***/ "pR33":
/*!***************************************************!*\
  !*** ./src/app/lauro/services/options.service.ts ***!
  \***************************************************/
/*! exports provided: OptionsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OptionsService", function() { return OptionsService; });
class OptionsService {
    constructor(enumOptions) {
        this.indexSelected = 0;
        this.options = this.getEnumTuple(enumOptions);
        this.lastIndex = this.options.length - 1;
        // this.indexSelected = Math.floor(Math.random() * this.lastIndex);
    }
    get selected() {
        return this.options[this.indexSelected];
    }
    next() {
        if (this.indexSelected === this.lastIndex) {
            this.indexSelected = 0;
            return;
        }
        this.indexSelected++;
    }
    previous() {
        if (this.indexSelected === 0) {
            this.indexSelected = this.lastIndex;
            return;
        }
        this.indexSelected--;
    }
    getEnumTuple(e) {
        return Object.keys(e).map(key => e[key]);
    }
}


/***/ }),

/***/ "r4wN":
/*!**********************************************************!*\
  !*** ./src/app/lauro/facial-hair/facial-hair.service.ts ***!
  \**********************************************************/
/*! exports provided: FacialHairService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FacialHairService", function() { return FacialHairService; });
/* harmony import */ var _options_facial_hair_enum__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../options/facial-hair.enum */ "xgS0");
/* harmony import */ var _services_options_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/options.service */ "pR33");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");



class FacialHairService extends _services_options_service__WEBPACK_IMPORTED_MODULE_1__["OptionsService"] {
    constructor() {
        super(_options_facial_hair_enum__WEBPACK_IMPORTED_MODULE_0__["FacialHair"]);
    }
}
FacialHairService.ɵfac = function FacialHairService_Factory(t) { return new (t || FacialHairService)(); };
FacialHairService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({ token: FacialHairService, factory: FacialHairService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "rcU2":
/*!************************************************************!*\
  !*** ./src/app/lauro/facial-hair/facial-hair.component.ts ***!
  \************************************************************/
/*! exports provided: FacialHairComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FacialHairComponent", function() { return FacialHairComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _facial_hair_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./facial-hair.service */ "r4wN");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");



function FacialHairComponent__svg_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "rect", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} }
function FacialHairComponent__svg_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "g", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "rect", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "g", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "line", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "line", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "line", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "line", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "line", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "line", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "line", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "line", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "line", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "line", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "line", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "line", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "line", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "line", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} }
function FacialHairComponent__svg_ng_container_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "g", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "rect", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "g", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "line", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "line", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "line", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "line", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "line", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "polyline", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "line", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "line", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "line", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "line", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "line", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "line", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "line", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "line", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "line", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "line", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "line", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "line", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "line", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "line", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "line", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](25, "line", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](26, "line", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](27, "line", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](28, "line", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](29, "line", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](30, "line", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](31, "line", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](32, "line", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](33, "line", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](34, "line", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](35, "line", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](36, "line", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](37, "line", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](38, "line", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](39, "line", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](40, "line", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](41, "line", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](42, "line", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](43, "line", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](44, "line", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](45, "line", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](46, "line", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](47, "line", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](48, "line", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](49, "line", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](50, "line", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](51, "line", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](52, "line", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](53, "line", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](54, "line", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](55, "line", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](56, "line", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](57, "line", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](58, "line", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](59, "line", 75);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](60, "path", 76);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](61, "line", 77);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](62, "line", 78);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](63, "line", 79);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](64, "line", 80);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](65, "line", 81);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](66, "line", 82);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](67, "line", 83);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](68, "line", 84);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](69, "path", 85);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](70, "path", 86);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](71, "line", 87);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](72, "line", 88);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](73, "line", 89);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](74, "line", 90);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](75, "line", 91);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](76, "line", 92);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](77, "line", 93);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](78, "line", 94);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](79, "line", 95);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](80, "line", 96);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](81, "line", 97);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](82, "line", 98);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](83, "line", 99);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](84, "line", 100);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](85, "line", 101);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](86, "line", 102);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](87, "line", 103);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](88, "line", 104);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](89, "line", 105);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](90, "line", 106);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](91, "line", 107);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](92, "line", 108);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](93, "line", 109);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](94, "line", 110);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](95, "line", 111);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](96, "line", 112);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](97, "line", 113);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](98, "line", 114);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](99, "line", 115);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](100, "path", 116);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](101, "line", 117);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](102, "line", 118);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](103, "line", 119);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](104, "line", 120);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](105, "line", 121);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](106, "line", 122);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](107, "line", 123);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](108, "line", 124);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](109, "line", 125);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](110, "line", 126);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](111, "line", 127);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](112, "line", 128);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](113, "line", 129);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](114, "line", 130);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](115, "line", 131);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](116, "line", 132);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](117, "line", 133);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](118, "line", 134);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](119, "line", 135);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} }
function FacialHairComponent__svg_ng_container_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "g", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "rect", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "g", 136);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "path", 137);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "path", 138);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "path", 139);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "path", 140);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "path", 141);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "path", 142);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "path", 143);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "path", 144);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "path", 145);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "path", 146);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "path", 147);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "path", 148);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "path", 149);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "path", 150);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "line", 151);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "line", 152);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "path", 153);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "line", 154);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "line", 155);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "line", 156);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "line", 157);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](25, "line", 158);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](26, "line", 159);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](27, "line", 160);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](28, "path", 161);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](29, "line", 162);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](30, "line", 163);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](31, "line", 164);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](32, "line", 165);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](33, "line", 166);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](34, "line", 167);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} }
function FacialHairComponent__svg_ng_container_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "g", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "rect", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "g", 168);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "path", 169);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "path", 170);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "path", 171);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "path", 172);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "path", 173);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "path", 174);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "path", 175);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "path", 176);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "path", 177);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "path", 178);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "path", 179);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "path", 180);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "path", 181);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "path", 182);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} }
class FacialHairComponent {
    constructor(service) {
        this.service = service;
    }
    get selected() {
        return this.service.selected;
    }
}
FacialHairComponent.ɵfac = function FacialHairComponent_Factory(t) { return new (t || FacialHairComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_facial_hair_service__WEBPACK_IMPORTED_MODULE_1__["FacialHairService"])); };
FacialHairComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: FacialHairComponent, selectors: [["app-facial-hair"]], decls: 6, vars: 7, consts: [["viewBox", "0 0 1080 1920", "version", "1.1", "xmlns", "http://www.w3.org/2000/svg", 0, "xmlns", "link", "http://www.w3.org/1999/xlink"], [4, "ngIf"], ["width", "1080", "height", "1920", 1, "cls-1"], ["id", "Layer_9", "data-name", "Layer 9"], ["id", "Layer_2", "data-name", "Layer 2"], ["x1", "378.21", "y1", "1201.11", "x2", "373.83", "y2", "1225.18", 1, "cls-2"], ["x1", "412.48", "y1", "1312.69", "x2", "424.15", "y2", "1334.56", 1, "cls-2"], ["x1", "494.89", "y1", "1398.74", "x2", "479.58", "y2", "1423.53", 1, "cls-2"], ["x1", "583.86", "y1", "1429.37", "x2", "598.44", "y2", "1452.7", 1, "cls-2"], ["x1", "659.7", "y1", "1380.51", "x2", "672.1", "y2", "1398.74", 1, "cls-2"], ["x1", "672.1", "y1", "1312.69", "x2", "686.68", "y2", "1334.56", 1, "cls-2"], ["x1", "701.27", "y1", "1177.77", "x2", "710.75", "y2", "1193.82", 1, "cls-2"], ["x1", "761.07", "y1", "1290.08", "x2", "734.82", "y2", "1264.05", 1, "cls-2"], ["x1", "686.68", "y1", "1476.77", "x2", "665.9", "y2", "1458.54", 1, "cls-2"], ["x1", "643.66", "y1", "1512.5", "x2", "635.64", "y2", "1476.77", 1, "cls-2"], ["x1", "553.23", "y1", "1522.71", "x2", "553.23", "y2", "1494.63", 1, "cls-2"], ["x1", "471.55", "y1", "1508.67", "x2", "462.8", "y2", "1480.41", 1, "cls-2"], ["x1", "390.61", "y1", "1462.18", "x2", "408.11", "y2", "1441.03", 1, "cls-2"], ["x1", "363.62", "y1", "1403.11", "x2", "385.33", "y2", "1384.88", 1, "cls-2"], ["id", "Layer_21", "data-name", "Layer 21"], ["x1", "356.93", "y1", "1233.82", "x2", "359.83", "y2", "1253.02", 1, "cls-2"], ["x1", "370.71", "y1", "1253.02", "x2", "370.71", "y2", "1271.88", 1, "cls-3"], ["x1", "365.64", "y1", "1213.95", "x2", "370.71", "y2", "1233.82", 1, "cls-3"], ["x1", "382.32", "y1", "1246.49", "x2", "382.32", "y2", "1262.45", 1, "cls-3"], ["x1", "359.83", "y1", "1275.51", "x2", "356.93", "y2", "1294.37", 1, "cls-3"], ["points", "368.18 1284.94 368.18 1303.08 359.83 1319.04", 1, "cls-3"], ["x1", "382.32", "y1", "1279.14", "x2", "385.33", "y2", "1288.57", 1, "cls-3"], ["x1", "376.52", "y1", "1294.37", "x2", "382.32", "y2", "1311.06", 1, "cls-3"], ["x1", "396.66", "y1", "1279.14", "x2", "396.66", "y2", "1302.71", 1, "cls-3"], ["x1", "370.71", "y1", "1319.04", "x2", "379.42", "y2", "1330.64", 1, "cls-3"], ["x1", "391.03", "y1", "1319.04", "x2", "391.03", "y2", "1335", 1, "cls-3"], ["x1", "400.46", "y1", "1311.06", "x2", "412.43", "y2", "1327.02", 1, "cls-3"], ["x1", "406.44", "y1", "1335", "x2", "404.54", "y2", "1359.66", 1, "cls-3"], ["x1", "385.33", "y1", "1342.25", "x2", "376.52", "y2", "1363.29", 1, "cls-3"], ["x1", "391.03", "y1", "1352.77", "x2", "396.3", "y2", "1368.37", 1, "cls-3"], ["x1", "385.33", "y1", "1375.65", "x2", "385.33", "y2", "1399.56", 1, "cls-3"], ["x1", "396.66", "y1", "1378.52", "x2", "396.66", "y2", "1393.03", 1, "cls-3"], ["x1", "406.44", "y1", "1371.99", "x2", "412.43", "y2", "1378.52", 1, "cls-3"], ["x1", "417.03", "y1", "1347.33", "x2", "421.5", "y2", "1363.29", 1, "cls-3"], ["x1", "433.83", "y1", "1355.31", "x2", "433.83", "y2", "1371.99", 1, "cls-3"], ["x1", "421.5", "y1", "1375.65", "x2", "421.5", "y2", "1387.6", 1, "cls-3"], ["x1", "409.43", "y1", "1393.03", "x2", "417.03", "y2", "1408.27", 1, "cls-3"], ["x1", "404.54", "y1", "1408.27", "x2", "400.46", "y2", "1429.3", 1, "cls-3"], ["x1", "417.03", "y1", "1425.68", "x2", "413.23", "y2", "1444.21", 1, "cls-3"], ["x1", "427.67", "y1", "1411.17", "x2", "427.67", "y2", "1432.21", 1, "cls-3"], ["x1", "433.83", "y1", "1399.56", "x2", "443.98", "y2", "1411.17", 1, "cls-3"], ["x1", "448.73", "y1", "1378.52", "x2", "433.83", "y2", "1393.03", 1, "cls-3"], ["x1", "455.34", "y1", "1393.03", "x2", "458.49", "y2", "1408.27", 1, "cls-3"], ["x1", "441.28", "y1", "1418.79", "x2", "443.98", "y2", "1434.94", 1, "cls-3"], ["x1", "458.49", "y1", "1418.79", "x2", "455.34", "y2", "1429.3", 1, "cls-3"], ["x1", "427.67", "y1", "1441.64", "x2", "433.83", "y2", "1448.89", 1, "cls-3"], ["x1", "426.01", "y1", "1460.09", "x2", "415.13", "y2", "1468.48", 1, "cls-3"], ["x1", "441.28", "y1", "1453.97", "x2", "433.83", "y2", "1476.46", 1, "cls-3"], ["x1", "443.98", "y1", "1441.64", "x2", "448.73", "y2", "1453.97", 1, "cls-3"], ["x1", "458.49", "y1", "1438.73", "x2", "458.49", "y2", "1453.97", 1, "cls-3"], ["x1", "455.34", "y1", "1464.29", "x2", "454.05", "y2", "1476.46", 1, "cls-3"], ["x1", "467.92", "y1", "1470.37", "x2", "456.92", "y2", "1490.24", 1, "cls-3"], ["x1", "467.92", "y1", "1457.6", "x2", "476.25", "y2", "1468.48", 1, "cls-3"], ["x1", "472.09", "y1", "1432.21", "x2", "472.09", "y2", "1444.21", 1, "cls-3"], ["x1", "472.09", "y1", "1400.65", "x2", "467.92", "y2", "1418.79", 1, "cls-3"], ["x1", "483.88", "y1", "1411.17", "x2", "494.04", "y2", "1432.21", 1, "cls-3"], ["x1", "476.25", "y1", "1424.04", "x2", "483.88", "y2", "1432.21", 1, "cls-3"], ["x1", "494.04", "y1", "1444.21", "x2", "480.07", "y2", "1453.97", 1, "cls-3"], ["x1", "488.96", "y1", "1465.21", "x2", "494.04", "y2", "1480.31", 1, "cls-3"], ["x1", "476.25", "y1", "1476.46", "x2", "480.07", "y2", "1496.77", 1, "cls-3"], ["x1", "502.02", "y1", "1453.97", "x2", "502.02", "y2", "1465.21", 1, "cls-3"], ["x1", "504.92", "y1", "1476.46", "x2", "504.92", "y2", "1499.63", 1, "cls-3"], ["x1", "491.5", "y1", "1490.24", "x2", "489.47", "y2", "1504.75", 1, "cls-3"], ["x1", "515.8", "y1", "1464.29", "x2", "515.8", "y2", "1480.31", 1, "cls-3"], ["x1", "515.8", "y1", "1434.94", "x2", "512.9", "y2", "1449.09", 1, "cls-3"], ["x1", "502.02", "y1", "1438.21", "x2", "504.92", "y2", "1424.04", 1, "cls-3"], ["x1", "525.23", "y1", "1426.86", "x2", "533.94", "y2", "1449.09", 1, "cls-3"], ["x1", "533.94", "y1", "1465.21", "x2", "520.16", "y2", "1457.6", 1, "cls-3"], ["x1", "529.59", "y1", "1476.46", "x2", "520.16", "y2", "1490.24", 1, "cls-3"], ["x1", "533.94", "y1", "1486.61", "x2", "540", "y2", "1509.83", 1, "cls-3"], ["x1", "550.17", "y1", "1465.21", "x2", "553.65", "y2", "1476.46", 1, "cls-3"], ["d", "M545.55,1483.35", 1, "cls-3"], ["x1", "551.91", "y1", "1490.24", "x2", "540", "y2", "1476.46", 1, "cls-3"], ["x1", "540", "y1", "1457.6", "x2", "550.17", "y2", "1442.02", 1, "cls-3"], ["x1", "540", "y1", "1432.21", "x2", "550.17", "y2", "1429.3", 1, "cls-3"], ["x1", "565.13", "y1", "1425.68", "x2", "562.23", "y2", "1447.8", 1, "cls-3"], ["x1", "557.88", "y1", "1457.6", "x2", "570.21", "y2", "1468.48", 1, "cls-3"], ["x1", "565.13", "y1", "1483.35", "x2", "570.21", "y2", "1493.87", 1, "cls-3"], ["x1", "562.78", "y1", "1499.53", "x2", "557.88", "y2", "1509.83", 1, "cls-3"], ["x1", "578.92", "y1", "1476.46", "x2", "578.92", "y2", "1483.35", 1, "cls-3"], ["d", "M576,1449.81c2.91,2.71,10.89,15.4,10.89,15.4", 1, "cls-3"], ["d", "M597.05,1430.76c-7.25,0-21,7.22-21,7.22", 1, "cls-3"], ["x1", "603.58", "y1", "1418.79", "x2", "607.21", "y2", "1438.73", 1, "cls-3"], ["x1", "593.42", "y1", "1444.21", "x2", "597.05", "y2", "1453.97", 1, "cls-3"], ["x1", "610.11", "y1", "1449.81", "x2", "600.68", "y2", "1465.21", 1, "cls-3"], ["x1", "593.42", "y1", "1472.3", "x2", "595.24", "y2", "1483.35", 1, "cls-3"], ["x1", "586.9", "y1", "1490.24", "x2", "586.9", "y2", "1504.75", 1, "cls-3"], ["x1", "610.11", "y1", "1476.46", "x2", "617.83", "y2", "1492.84", 1, "cls-3"], ["x1", "600.68", "y1", "1490.24", "x2", "603.58", "y2", "1504.75", 1, "cls-3"], ["x1", "624.37", "y1", "1463.04", "x2", "624.37", "y2", "1476.46", 1, "cls-3"], ["x1", "613.97", "y1", "1463.04", "x2", "624.37", "y2", "1453.97", 1, "cls-3"], ["x1", "613.97", "y1", "1441.64", "x2", "629.7", "y2", "1430.76", 1, "cls-3"], ["x1", "617.83", "y1", "1421.69", "x2", "624.37", "y2", "1400.65", 1, "cls-3"], ["x1", "629.7", "y1", "1411.17", "x2", "644.93", "y2", "1405.36", 1, "cls-3"], ["x1", "644.93", "y1", "1385.78", "x2", "654.98", "y2", "1399.56", 1, "cls-3"], ["x1", "660.89", "y1", "1385.78", "x2", "667.25", "y2", "1368.37", 1, "cls-3"], ["x1", "675.14", "y1", "1355.31", "x2", "675.14", "y2", "1371.99", 1, "cls-3"], ["x1", "686.68", "y1", "1359.66", "x2", "694.99", "y2", "1355.31", 1, "cls-3"], ["x1", "701.64", "y1", "1335", "x2", "686.68", "y2", "1342.25", 1, "cls-3"], ["x1", "694.99", "y1", "1322.3", "x2", "701.64", "y2", "1302.71", 1, "cls-3"], ["x1", "711.67", "y1", "1311.06", "x2", "706.59", "y2", "1288.57", 1, "cls-3"], ["x1", "718.38", "y1", "1290.93", "x2", "724.73", "y2", "1288.57", 1, "cls-3"], ["x1", "721.56", "y1", "1302.71", "x2", "734.89", "y2", "1319.04", 1, "cls-3"], ["x1", "728.22", "y1", "1271.88", "x2", "745.68", "y2", "1290.93", 1, "cls-3"], ["x1", "718.38", "y1", "1275.51", "x2", "721.56", "y2", "1258.1", 1, "cls-3"], ["x1", "731.98", "y1", "1254.47", "x2", "736.95", "y2", "1233.82", 1, "cls-3"], ["x1", "701.64", "y1", "1279.14", "x2", "706.59", "y2", "1262.45", 1, "cls-3"], ["x1", "711.67", "y1", "1246.49", "x2", "718.38", "y2", "1243.42", 1, "cls-3"], ["x1", "724.73", "y1", "1233.82", "x2", "731.98", "y2", "1213.95", 1, "cls-3"], ["x1", "739.96", "y1", "1223.88", "x2", "745.68", "y2", "1204.42", 1, "cls-3"], ["x1", "745.68", "y1", "1254.47", "x2", "751.57", "y2", "1270.8", 1, "cls-3"], ["d", "M718.38,1322.3c1.27,2.54,0,20,0,20", 1, "cls-3"], ["x1", "706.59", "y1", "1322.3", "x2", "709.13", "y2", "1330.64", 1, "cls-3"], ["x1", "707.86", "y1", "1347.33", "x2", "711.67", "y2", "1363.65", 1, "cls-3"], ["x1", "698.31", "y1", "1368.37", "x2", "709.77", "y2", "1381.63", 1, "cls-3"], ["x1", "721.8", "y1", "1370.26", "x2", "728.22", "y2", "1385.78", 1, "cls-3"], ["x1", "704.12", "y1", "1392.67", "x2", "690.84", "y2", "1408.27", 1, "cls-3"], ["x1", "690.84", "y1", "1418.79", "x2", "697.48", "y2", "1434.37", 1, "cls-3"], ["x1", "679.03", "y1", "1424.04", "x2", "679.03", "y2", "1434.37", 1, "cls-3"], ["x1", "675.14", "y1", "1381.63", "x2", "683.02", "y2", "1390.13", 1, "cls-3"], ["x1", "686.68", "y1", "1371.99", "x2", "690.84", "y2", "1387.6", 1, "cls-3"], ["x1", "667.25", "y1", "1392.67", "x2", "660.89", "y2", "1408.27", 1, "cls-3"], ["x1", "679.03", "y1", "1400.65", "x2", "672.67", "y2", "1418.79", 1, "cls-3"], ["x1", "649.96", "y1", "1414.8", "x2", "660.89", "y2", "1428.13", 1, "cls-3"], ["x1", "640.58", "y1", "1421.69", "x2", "644.93", "y2", "1428.76", 1, "cls-3"], ["x1", "640.58", "y1", "1438.73", "x2", "637.31", "y2", "1449.81", 1, "cls-3"], ["x1", "654.98", "y1", "1436.74", "x2", "672.67", "y2", "1442.02", 1, "cls-3"], ["x1", "660.89", "y1", "1449.81", "x2", "683.02", "y2", "1463.04", 1, "cls-3"], ["x1", "649.96", "y1", "1453.97", "x2", "654.98", "y2", "1465.21", 1, "cls-3"], ["x1", "644.93", "y1", "1490.24", "x2", "642.75", "y2", "1468.48", 1, "cls-3"], ["x1", "640.58", "y1", "1457.6", "x2", "634.05", "y2", "1461.4", 1, "cls-3"], ["id", "Layer_22", "data-name", "Layer 22"], ["d", "M530.22,1546c.75-7.32-9.29-17.07-11.73-26.83s-2.77-23.72,0-43.91", 1, "cls-2"], ["d", "M512.47,1530a72.28,72.28,0,0,0,18.38-32.21,73.18,73.18,0,0,0-3.12-45.68", 1, "cls-2"], ["d", "M543.92,1466.39c2.73,10.94-1.69,41.28-3.92,44.22s-8.39,13.89-3.6,23.46,6,13,3,21.19", 1, "cls-2"], ["d", "M550.15,1543c1.45-2-.76-11.62-1.27-23.24s-2.23-6.84-7-15.19,9.61-16.26,15.08-19.67", 1, "cls-2"], ["d", "M563.06,1471.17c3.42,5.47,2.85,20.49-.28,28.36s-1.65,14.71,0,24.28.14,24.61-1.84,31.45-7.2,5.47-7,11.62", 1, "cls-2"], ["d", "M559.67,1456.14c-6.18,6.15-13.34,40-10.79,43.24s13.9,24.43,13.9,24.43-12,12.31-14.08,21.19.16,9.57,1.45,10.26", 1, "cls-2"], ["d", "M571.26,1460.92c3.42,5.47,11.62,12.31,8.89,21.19s-5.6,6.84-4.17,21.19-4,33.5-4.72,39.65,4.72,12.31,4.72,12.31", 1, "cls-2"], ["d", "M591.09,1488.26c-6.84,6.84-16,25.3-10.39,30.77s2.36,10.93,4.32,15.72", 1, "cls-2"], ["d", "M593.82,1475.24c5.47,8.92,13.67,14.57,9.57,24.39S586.3,1519,593.82,1530s-8.8,16-8.8,16", 1, "cls-2"], ["d", "M604.5,1460.92c1.63,6.84,12.56,13,9.83,21.19s-8,21.19-4.7,31.79,6.24,8.54,0,13.33", 1, "cls-2"], ["d", "M587.67,1460.92c-4.1,4.79-17.5,18.18-11.72,30.1s28.92,14.33,16.22,28-26.38,17.77-20.91,23.92", 1, "cls-2"], ["d", "M621.85,1471.17c3.42,6.16,10.25,13,4.78,22.91s-13.67,10.59-8.88,17.43", 1, "cls-2"], ["d", "M510.42,1460.92c-4.78,6.84-8.44,36.5-4.9,41s-1.06,4-1.42,9.57", 1, "cls-2"], ["d", "M443.22,1172c-1.24,5.54-3.7,14.25-3.7,14.25", 1, "cls-2"], ["x1", "453.06", "y1", "1179.13", "x2", "453.06", "y2", "1193.38", 1, "cls-2"], ["x1", "461.77", "y1", "1179.13", "x2", "464.93", "y2", "1186.26", 1, "cls-2"], ["d", "M473.64,1172v18.21", 1, "cls-2"], ["x1", "486.3", "y1", "1179.13", "x2", "486.3", "y2", "1190.22", 1, "cls-2"], ["x1", "492.64", "y1", "1172.01", "x2", "498.97", "y2", "1186.26", 1, "cls-2"], ["x1", "510.42", "y1", "1175.97", "x2", "507.26", "y2", "1190.22", 1, "cls-2"], ["x1", "523.4", "y1", "1172.01", "x2", "523.4", "y2", "1184.67", 1, "cls-2"], ["x1", "534.62", "y1", "1168.05", "x2", "534.62", "y2", "1186.26", 1, "cls-2"], ["x1", "547.87", "y1", "1175.97", "x2", "550.15", "y2", "1184.67", 1, "cls-2"], ["x1", "556.91", "y1", "1168.05", "x2", "562.78", "y2", "1183.09", 1, "cls-2"], ["d", "M579,1168.05c-1.63,4.75-3,15-3,15", 1, "cls-2"], ["x1", "591.09", "y1", "1177.16", "x2", "591.09", "y2", "1186.26", 1, "cls-2"], ["x1", "604.5", "y1", "1172.01", "x2", "604.5", "y2", "1186.26", 1, "cls-2"], ["x1", "616.3", "y1", "1172.01", "x2", "622.49", "y2", "1182.7", 1, "cls-2"], ["x1", "638.28", "y1", "1177.16", "x2", "632.74", "y2", "1186.26", 1, "cls-2"], ["x1", "647.78", "y1", "1172.01", "x2", "647.78", "y2", "1183.09", 1, "cls-2"], ["x1", "658.86", "y1", "1177.55", "x2", "664.69", "y2", "1186.26", 1, "cls-2"], ["id", "Layer_23", "data-name", "Layer 23"], ["d", "M752.67,1177.2c3.52-10.5,3.08-22,5.39-32.79.82-3.81,2.21-9.94-1.2-14.08a10.57,10.57,0,0,0-9.56-3.56c-4.42.75-7.1,4.75-8.23,6.48-12.08,18.56-18.69,92.33-23.79,92.07a.83.83,0,0,1-.49-.22c-7.56-6.29-17.17-44.25-29.11-55.95-11.45-11.23-28.48-.86-68,4.22-42.65,5.48-84,1.28-135.89-4-34.93-3.55-49.71-7.13-59.15,3-11.9,12.69-21.49,53.61-21.39,61.5,0,.15,0,.58-.19.67-1.87.79-21.47-28.59-31.59-63.39-6.28-21.57-4.94-31.55-14.68-37.85-9.41-6.09-26.17-6.8-28.63-2.11a3.09,3.09,0,0,0-.21,2.11c14.55,72.46,17.59,147.32,37.29,218.55,27.56,99.62,30.21,125,57.21,142.57,7.22,4.69,29.16,17.25,59.21,24.29,17.75,4.16,22,2.55,51.61,5.31,68,6.33,81.91,18.14,107.53,7,10.25-4.46,18.3-12.39,34.41-28.25,17-16.7,37.3-36.74,50.05-68.57,11.6-29,12.37-56.29,10.56-76-1.56-42.53,2.77-75.64,7-98.07C749.89,1212.35,749.15,1187.7,752.67,1177.2Z", 1, "cls-2"], ["d", "M-378.25,872.78", 1, "cls-3"], ["d", "M385.7,1310.59s-1.53,47.32,3.82,64.87", 1, "cls-3"], ["d", "M406.31,1343c3.81,30.92,3.81,82.82,6.1,98.85", 1, "cls-3"], ["d", "M434.55,1486.14l-6.87-13", 1, "cls-3"], ["d", "M434.55,1364c5.34,51.14,6.1,80.91,17.55,100.75", 1, "cls-3"], ["d", "M446,1343c3.81,21.76,9.16,32.44,9.16,32.44", 1, "cls-3"], ["d", "M466.61,1352.57c4.57,25.18.76,51.9,0,64.87", 1, "cls-3"], ["d", "M491.79,1375.46c3.06,34.35-17.55,107.62-17.55,107.62", 1, "cls-3"], ["d", "M673.2,1358.32c3,20.06-5.93,53.3-5.93,53.3", 1, "cls-3"], ["d", "M698.39,1331s1.71,32.93-4.92,47.85", 1, "cls-3"], ["d", "M427.14,1295.56c33.38,13.4,57.61,12,73.51,8.3,24.75-5.77,31.14-17.55,54.91-17.54,19.11,0,19,7.63,54.45,14.31,36.26,6.83,48.17,1.08,53.52-2.31,8.64-5.47,13.59-13.24,16.61-18a72.75,72.75,0,0,0,5.79-65.32c-2.84-7.06-7.58-18.81-18.12-24.67-11.64-6.47-24.91-2.74-32.65-.77,0,0-75,18.38-165.2,2.84l-1.14-.2c-8.65-1.52-26.34-5.07-38,4.66-7.83,6.54-11.32,17.72-14.13,26.75-2.54,8.15-3.05,14.42-4.27,23.52-1.81,13.54-2.67,20.32-1.35,25.76C412.13,1277.34,415.35,1286.58,427.14,1295.56Z", 1, "cls-4"], ["d", "M1045,1271.89", 1, "cls-4"], ["d", "M-339.52,1051.06", 1, "cls-4"]], template: function FacialHairComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "svg", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, FacialHairComponent__svg_ng_container_1_Template, 2, 0, "ng-container", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, FacialHairComponent__svg_ng_container_2_Template, 18, 0, "ng-container", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, FacialHairComponent__svg_ng_container_3_Template, 120, 0, "ng-container", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, FacialHairComponent__svg_ng_container_4_Template, 35, 0, "ng-container", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, FacialHairComponent__svg_ng_container_5_Template, 18, 0, "ng-container", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](ctx.selected);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.selected === "facial-hair-1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.selected === "facial-hair-2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.selected === "facial-hair-3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.selected === "facial-hair-4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.selected === "facial-hair-5");
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"]], styles: [".facial-hair-1[_ngcontent-%COMP%]   .cls-1[_ngcontent-%COMP%] {\n  fill: none;\n}\n\n.facial-hair-2[_ngcontent-%COMP%]   .cls-1[_ngcontent-%COMP%], .facial-hair-2[_ngcontent-%COMP%]   .cls-2[_ngcontent-%COMP%] {\n  fill: none;\n}\n\n.facial-hair-2[_ngcontent-%COMP%]   .cls-2[_ngcontent-%COMP%] {\n  stroke: #231f20;\n  stroke-miterlimit: 10;\n  stroke-width: 8px;\n}\n\n.facial-hair-3[_ngcontent-%COMP%]   .cls-1[_ngcontent-%COMP%] {\n  fill: none;\n}\n\n.facial-hair-3[_ngcontent-%COMP%]   .cls-2[_ngcontent-%COMP%] {\n  fill: #be1e2d;\n  stroke-width: 6px;\n}\n\n.facial-hair-3[_ngcontent-%COMP%]   .cls-2[_ngcontent-%COMP%], .facial-hair-3[_ngcontent-%COMP%]   .cls-3[_ngcontent-%COMP%] {\n  stroke: #231f20;\n  stroke-miterlimit: 10;\n}\n\n.facial-hair-3[_ngcontent-%COMP%]   .cls-3[_ngcontent-%COMP%] {\n  fill: #fff;\n  stroke-width: 8px;\n}\n\n.facial-hair-4[_ngcontent-%COMP%]   .cls-1[_ngcontent-%COMP%], .facial-hair-4[_ngcontent-%COMP%]   .cls-2[_ngcontent-%COMP%] {\n  fill: none;\n}\n\n.facial-hair-4[_ngcontent-%COMP%]   .cls-2[_ngcontent-%COMP%] {\n  stroke: #231f20;\n  stroke-miterlimit: 10;\n  stroke-width: 8px;\n}\n\n.facial-hair-5[_ngcontent-%COMP%]   .cls-1[_ngcontent-%COMP%], .facial-hair-5[_ngcontent-%COMP%]   .cls-3[_ngcontent-%COMP%] {\n  fill: none;\n}\n\n.facial-hair-5[_ngcontent-%COMP%]   .cls-2[_ngcontent-%COMP%] {\n  fill: #231f20;\n}\n\n.facial-hair-5[_ngcontent-%COMP%]   .cls-2[_ngcontent-%COMP%], .facial-hair-5[_ngcontent-%COMP%]   .cls-4[_ngcontent-%COMP%] {\n  stroke: #231f20;\n}\n\n.facial-hair-5[_ngcontent-%COMP%]   .cls-2[_ngcontent-%COMP%], .facial-hair-5[_ngcontent-%COMP%]   .cls-3[_ngcontent-%COMP%], .facial-hair-5[_ngcontent-%COMP%]   .cls-4[_ngcontent-%COMP%] {\n  stroke-miterlimit: 10;\n  stroke-width: 8px;\n}\n\n.facial-hair-5[_ngcontent-%COMP%]   .cls-3[_ngcontent-%COMP%] {\n  stroke: #fff;\n}\n\n.facial-hair-5[_ngcontent-%COMP%]   .cls-4[_ngcontent-%COMP%] {\n  fill: #fff;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL2ZhY2lhbC1oYWlyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNFO0VBQU8sVUFBQTtBQUNUOztBQUdFO0VBQWMsVUFBQTtBQUNoQjs7QUFEMkI7RUFBTyxlQUFBO0VBQWUscUJBQUE7RUFBcUIsaUJBQUE7QUFNdEU7O0FBRkU7RUFBTyxVQUFBO0FBTVQ7O0FBTm9CO0VBQU8sYUFBQTtFQUFhLGlCQUFBO0FBVXhDOztBQVYwRDtFQUFjLGVBQUE7RUFBZSxxQkFBQTtBQWN2Rjs7QUFkNkc7RUFBTyxVQUFBO0VBQVUsaUJBQUE7QUFrQjlIOztBQWRFO0VBQWMsVUFBQTtBQWtCaEI7O0FBbEIyQjtFQUFPLGVBQUE7RUFBZSxxQkFBQTtFQUFxQixpQkFBQTtBQXVCdEU7O0FBbkJFO0VBQWMsVUFBQTtBQXVCaEI7O0FBdkIyQjtFQUFPLGFBQUE7QUEwQmxDOztBQTFCZ0Q7RUFBYyxlQUFBO0FBNkI5RDs7QUE3QjhFO0VBQXFCLHFCQUFBO0VBQXFCLGlCQUFBO0FBaUN4SDs7QUFqQzBJO0VBQU8sWUFBQTtBQW9Dako7O0FBcEM4SjtFQUFPLFVBQUE7QUF1Q3JLIiwiZmlsZSI6ImZhY2lhbC1oYWlyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmZhY2lhbC1oYWlyLTEge1xuICAuY2xzLTF7ZmlsbDpub25lO31cbn1cblxuLmZhY2lhbC1oYWlyLTIge1xuICAuY2xzLTEsLmNscy0ye2ZpbGw6bm9uZTt9LmNscy0ye3N0cm9rZTojMjMxZjIwO3N0cm9rZS1taXRlcmxpbWl0OjEwO3N0cm9rZS13aWR0aDo4cHg7fVxufVxuXG4uZmFjaWFsLWhhaXItMyB7XG4gIC5jbHMtMXtmaWxsOm5vbmU7fS5jbHMtMntmaWxsOiNiZTFlMmQ7c3Ryb2tlLXdpZHRoOjZweDt9LmNscy0yLC5jbHMtM3tzdHJva2U6IzIzMWYyMDtzdHJva2UtbWl0ZXJsaW1pdDoxMDt9LmNscy0ze2ZpbGw6I2ZmZjtzdHJva2Utd2lkdGg6OHB4O31cbn1cblxuLmZhY2lhbC1oYWlyLTQge1xuICAuY2xzLTEsLmNscy0ye2ZpbGw6bm9uZTt9LmNscy0ye3N0cm9rZTojMjMxZjIwO3N0cm9rZS1taXRlcmxpbWl0OjEwO3N0cm9rZS13aWR0aDo4cHg7fVxufVxuXG4uZmFjaWFsLWhhaXItNSB7XG4gIC5jbHMtMSwuY2xzLTN7ZmlsbDpub25lO30uY2xzLTJ7ZmlsbDojMjMxZjIwO30uY2xzLTIsLmNscy00e3N0cm9rZTojMjMxZjIwO30uY2xzLTIsLmNscy0zLC5jbHMtNHtzdHJva2UtbWl0ZXJsaW1pdDoxMDtzdHJva2Utd2lkdGg6OHB4O30uY2xzLTN7c3Ryb2tlOiNmZmY7fS5jbHMtNHtmaWxsOiNmZmY7fVxufSJdfQ== */"] });


/***/ }),

/***/ "vBxA":
/*!**********************************************!*\
  !*** ./src/app/lauro/eyes/eyes.component.ts ***!
  \**********************************************/
/*! exports provided: EyesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EyesComponent", function() { return EyesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _eyes_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./eyes.service */ "3b4f");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");



function EyesComponent__svg_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "g", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "rect", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "g", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "path", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "path", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "ellipse", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "path", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "path", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "line", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "line", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "line", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "line", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} }
function EyesComponent__svg_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "g", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "rect", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "g", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "path", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "path", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "ellipse", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "path", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "path", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "line", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "line", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "line", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "line", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} }
function EyesComponent__svg_ng_container_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "g", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "rect", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "g", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "path", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "ellipse", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "path", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "circle", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "circle", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} }
function EyesComponent__svg_ng_container_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "g", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "rect", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "g", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "circle", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "circle", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} }
function EyesComponent__svg_ng_container_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "g", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "rect", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "g", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "circle", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "circle", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "circle", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "circle", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "circle", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "circle", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} }
class EyesComponent {
    constructor(service) {
        this.service = service;
    }
    get selected() {
        return this.service.selected;
    }
}
EyesComponent.ɵfac = function EyesComponent_Factory(t) { return new (t || EyesComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_eyes_service__WEBPACK_IMPORTED_MODULE_1__["EyesService"])); };
EyesComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: EyesComponent, selectors: [["app-eyes"]], decls: 6, vars: 7, consts: [["id", "eyes", "viewBox", "0 0 1080 1920", "version", "1.1", "xmlns", "http://www.w3.org/2000/svg", 0, "xmlns", "link", "http://www.w3.org/1999/xlink"], [4, "ngIf"], ["id", "Layer_9", "data-name", "Layer 9"], ["width", "1080", "height", "1920", 1, "cls-1"], ["id", "Layer_5", "data-name", "Layer 5"], ["d", "M534.39,1002.55c15.59.2,55.32,0,55.32,0l-5.94-21.39H539.58Z", 1, "cls-2"], ["d", "M545.9,1006.26c.65-36-21.92-60-27.46-65.93-30-31.91-70.64-33.18-85.29-33.64-16.65-.52-53.21,1.38-86.39,27-13.38,10.32-45,34.74-45.17,72.57-.15,34.44,25.89,57.72,35.36,66.18,32.33,28.91,71.34,29.71,86.8,30,17.9.37,51.62,1.06,81.94-22.7C512.42,1074.48,545.13,1048.86,545.9,1006.26Z", 1, "cls-2"], ["cx", "425.42", "cy", "1007.11", "rx", "97.9", "ry", "69.8", 1, "cls-3"], ["d", "M813.8,995.6c-1.43-37.94-28.49-61.3-33.57-65.69-29.49-25.46-64.85-24.42-85.19-23.82-18.5.54-48.48,1.42-75.73,23.28-6.4,5.13-37.83,30.36-38.39,72.27-.53,39,26,63.94,31.82,69.41,30.49,28.69,68.65,28.3,83.38,28.15,14.09-.14,48.74-1,79-26.71C783.12,1065.75,815.4,1038.39,813.8,995.6Z", 1, "cls-2"], ["d", "M791.78,1012.57c1.43-5.73,4.84-20.22-1.09-36.1-8.24-22.1-28.91-31.64-39.34-36.45-21.2-9.79-40.1-8.89-55.69-8.15-19.49.93-39.13,1.86-58.74,15-6.75,4.53-34.28,23-35.76,54.54-1.66,35.21,30.49,57.35,35.76,61,22.8,15.69,46.6,15.11,59.2,14.8,9.46-.23,45.55-1.65,73.28-28.51C775.74,1042.52,787.13,1031.19,791.78,1012.57Z", 1, "cls-3"], ["x1", "391.61", "y1", "1016", "x2", "451.25", "y2", "939.77", 1, "cls-4"], ["x1", "459.88", "y1", "997.34", "x2", "398.06", "y2", "1074.13", 1, "cls-4"], ["x1", "715.48", "y1", "1002.55", "x2", "658.13", "y2", "1072.8", 1, "cls-4"], ["x1", "658.13", "y1", "1007.11", "x2", "718.95", "y2", "931.45", 1, "cls-4"], ["id", "Layer_10", "data-name", "Layer 10"], ["d", "M534.39,1003c15.59.21,55.32,0,55.32,0l-5.94-21.39H539.58Z", 1, "cls-2"], ["d", "M545.9,1006.68c.65-36-21.92-60-27.46-65.93-30-31.91-70.64-33.18-85.29-33.64-16.65-.52-53.21,1.38-86.39,27-13.38,10.33-45,34.74-45.17,72.57-.15,34.44,25.89,57.72,35.36,66.18,32.33,28.91,71.34,29.71,86.8,30,17.9.37,51.62,1.06,81.94-22.7C512.42,1074.9,545.13,1049.28,545.9,1006.68Z", 1, "cls-2"], ["cx", "425.42", "cy", "1007.53", "rx", "97.9", "ry", "69.8", 1, "cls-3"], ["d", "M813.8,996c-1.43-37.94-28.49-61.3-33.57-65.69-29.49-25.46-64.85-24.42-85.19-23.82-18.5.54-48.48,1.42-75.73,23.28-6.4,5.13-37.83,30.36-38.39,72.27-.53,39,26,63.94,31.82,69.41,30.49,28.69,68.65,28.3,83.38,28.15,14.09-.14,48.74-1,79-26.71C783.12,1066.18,815.4,1038.81,813.8,996Z", 1, "cls-2"], ["d", "M791.78,1013c1.43-5.73,4.84-20.22-1.09-36.1-8.24-22.1-28.91-31.64-39.34-36.45-21.2-9.79-40.1-8.89-55.69-8.15-19.49.93-39.13,1.87-58.74,15-6.75,4.53-34.28,23-35.76,54.54-1.66,35.21,30.49,57.35,35.76,61,22.8,15.69,46.6,15.11,59.2,14.8,9.46-.23,45.55-1.65,73.28-28.51C775.74,1042.94,787.13,1031.61,791.78,1013Z", 1, "cls-3"], ["x1", "391.61", "y1", "1016.42", "x2", "451.25", "y2", "940.19", 1, "cls-4"], ["x1", "459.88", "y1", "997.76", "x2", "398.06", "y2", "1074.55", 1, "cls-4"], ["x1", "715.48", "y1", "1002.97", "x2", "658.13", "y2", "1073.22", 1, "cls-4"], ["x1", "658.13", "y1", "1007.53", "x2", "718.95", "y2", "931.87", 1, "cls-4"], ["id", "Layer_11", "data-name", "Layer 11"], ["d", "M494.89,960s-152.95-31.09-160.74-32-13.29,28.66-13.29,28.66,4.43,84.15,1.07,94,43.16,10.69,54.09,9.83,93.49-4,103.56-9.83l10.07-5.77s56.67-40.68,64-43.27,52.24,40.95,64,49,129.09,6.63,139.24,0,22.52-106,12.75-113.11,7.29-3.82-9.77-7.1-116.32,14.75-142,29.54S534.43,973.78,494.89,960Z", 1, "cls-2"], ["cx", "686.68", "cy", "1002.55", "rx", "60.54", "ry", "43.16", 1, "cls-3"], ["d", "M470.73,1007.5c.88-3.55,3-12.51-.67-22.32-5.1-13.67-17.88-19.57-24.33-22.54-13.1-6.06-24.79-5.5-34.43-5-12.05.57-24.2,1.15-36.32,9.28-4.18,2.8-21.19,14.2-22.11,33.72-1,21.77,18.85,35.46,22.11,37.7,14.09,9.7,28.81,9.34,36.6,9.15,5.85-.14,28.17-1,45.31-17.63C460.81,1026,467.86,1019,470.73,1007.5Z", 1, "cls-3"], ["cx", "417.55", "cy", "999.45", "r", "5.06", 1, "cls-2"], ["cx", "685.68", "cy", "1002.43", "r", "5.06", 1, "cls-2"], ["id", "Layer_12", "data-name", "Layer 12"], ["id", "Layer_13", "data-name", "Layer 13"], ["cx", "417.03", "cy", "998.5", "r", "31.7", 1, "cls-2"], ["cx", "686.68", "cy", "1004.51", "r", "31.7", 1, "cls-2"], ["cx", "404.54", "cy", "1015.34", "r", "7.88", 1, "cls-3"], ["cx", "425.97", "cy", "990.9", "r", "13.55", 1, "cls-3"], ["cx", "675.14", "cy", "1021.51", "r", "7.88", 1, "cls-3"], ["cx", "696.57", "cy", "997.07", "r", "13.55", 1, "cls-3"]], template: function EyesComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "svg", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, EyesComponent__svg_ng_container_1_Template, 13, 0, "ng-container", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, EyesComponent__svg_ng_container_2_Template, 13, 0, "ng-container", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, EyesComponent__svg_ng_container_3_Template, 9, 0, "ng-container", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, EyesComponent__svg_ng_container_4_Template, 6, 0, "ng-container", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, EyesComponent__svg_ng_container_5_Template, 10, 0, "ng-container", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](ctx.selected);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.selected === "eyes-1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.selected === "eyes-2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.selected === "eyes-3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.selected === "eyes-4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.selected === "eyes-5");
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"]], styles: [".eyes-1[_ngcontent-%COMP%]   .cls-1[_ngcontent-%COMP%], .eyes-1[_ngcontent-%COMP%]   .cls-4[_ngcontent-%COMP%] {\n  fill: none;\n}\n.eyes-1[_ngcontent-%COMP%]   .cls-2[_ngcontent-%COMP%] {\n  fill: #7baea8;\n}\n.eyes-1[_ngcontent-%COMP%]   .cls-2[_ngcontent-%COMP%], .eyes-1[_ngcontent-%COMP%]   .cls-3[_ngcontent-%COMP%], .eyes-1[_ngcontent-%COMP%]   .cls-4[_ngcontent-%COMP%] {\n  stroke: #231f20;\n  stroke-miterlimit: 10;\n}\n.eyes-1[_ngcontent-%COMP%]   .cls-2[_ngcontent-%COMP%], .eyes-1[_ngcontent-%COMP%]   .cls-3[_ngcontent-%COMP%] {\n  stroke-width: 8px;\n}\n.eyes-1[_ngcontent-%COMP%]   .cls-3[_ngcontent-%COMP%] {\n  fill: #fffefe;\n}\n.eyes-1[_ngcontent-%COMP%]   .cls-4[_ngcontent-%COMP%] {\n  stroke-width: 6px;\n}\n.eyes-2[_ngcontent-%COMP%]   .cls-1[_ngcontent-%COMP%], .eyes-2[_ngcontent-%COMP%]   .cls-4[_ngcontent-%COMP%] {\n  fill: none;\n}\n.eyes-2[_ngcontent-%COMP%]   .cls-2[_ngcontent-%COMP%] {\n  fill: #bcbec0;\n}\n.eyes-2[_ngcontent-%COMP%]   .cls-2[_ngcontent-%COMP%], .eyes-2[_ngcontent-%COMP%]   .cls-3[_ngcontent-%COMP%] {\n  stroke: #231f20;\n  stroke-width: 8px;\n}\n.eyes-2[_ngcontent-%COMP%]   .cls-2[_ngcontent-%COMP%], .eyes-2[_ngcontent-%COMP%]   .cls-3[_ngcontent-%COMP%], .eyes-2[_ngcontent-%COMP%]   .cls-4[_ngcontent-%COMP%] {\n  stroke-miterlimit: 10;\n}\n.eyes-2[_ngcontent-%COMP%]   .cls-3[_ngcontent-%COMP%] {\n  fill: #231f20;\n}\n.eyes-2[_ngcontent-%COMP%]   .cls-4[_ngcontent-%COMP%] {\n  stroke: #fff;\n  stroke-width: 6px;\n}\n.eyes-3[_ngcontent-%COMP%]   .cls-1[_ngcontent-%COMP%] {\n  fill: none;\n}\n.eyes-3[_ngcontent-%COMP%]   .cls-2[_ngcontent-%COMP%] {\n  fill: #231f20;\n}\n.eyes-3[_ngcontent-%COMP%]   .cls-2[_ngcontent-%COMP%], .eyes-3[_ngcontent-%COMP%]   .cls-3[_ngcontent-%COMP%] {\n  stroke: #231f20;\n  stroke-miterlimit: 10;\n  stroke-width: 8px;\n}\n.eyes-3[_ngcontent-%COMP%]   .cls-3[_ngcontent-%COMP%] {\n  fill: #fffefe;\n}\n.eyes-4[_ngcontent-%COMP%]   .cls-1[_ngcontent-%COMP%] {\n  fill: none;\n}\n.eyes-4[_ngcontent-%COMP%]   .cls-2[_ngcontent-%COMP%] {\n  fill: #231f20;\n  stroke: #231f20;\n  stroke-miterlimit: 10;\n  stroke-width: 8px;\n}\n.eyes-5[_ngcontent-%COMP%]   .cls-1[_ngcontent-%COMP%] {\n  fill: none;\n}\n.eyes-5[_ngcontent-%COMP%]   .cls-2[_ngcontent-%COMP%] {\n  fill: #231f20;\n  stroke: #231f20;\n}\n.eyes-5[_ngcontent-%COMP%]   .cls-2[_ngcontent-%COMP%], .eyes-5[_ngcontent-%COMP%]   .cls-3[_ngcontent-%COMP%] {\n  stroke-miterlimit: 10;\n  stroke-width: 8px;\n}\n.eyes-5[_ngcontent-%COMP%]   .cls-3[_ngcontent-%COMP%] {\n  fill: #fff;\n  stroke: #fff;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL2V5ZXMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0U7RUFBYyxVQUFBO0FBQ2hCO0FBRDJCO0VBQU8sYUFBQTtBQUlsQztBQUpnRDtFQUFxQixlQUFBO0VBQWUscUJBQUE7QUFRcEY7QUFSMEc7RUFBYyxpQkFBQTtBQVd4SDtBQVgwSTtFQUFPLGFBQUE7QUFjako7QUFkK0o7RUFBTyxpQkFBQTtBQWlCdEs7QUFiRTtFQUFjLFVBQUE7QUFpQmhCO0FBakIyQjtFQUFPLGFBQUE7QUFvQmxDO0FBcEJnRDtFQUFjLGVBQUE7RUFBZSxpQkFBQTtBQXdCN0U7QUF4QitGO0VBQXFCLHFCQUFBO0FBMkJwSDtBQTNCMEk7RUFBTyxhQUFBO0FBOEJqSjtBQTlCK0o7RUFBTyxZQUFBO0VBQVksaUJBQUE7QUFrQ2xMO0FBOUJFO0VBQU8sVUFBQTtBQWtDVDtBQWxDb0I7RUFBTyxhQUFBO0FBcUMzQjtBQXJDeUM7RUFBYyxlQUFBO0VBQWUscUJBQUE7RUFBcUIsaUJBQUE7QUEwQzNGO0FBMUM2RztFQUFPLGFBQUE7QUE2Q3BIO0FBekNFO0VBQU8sVUFBQTtBQTZDVDtBQTdDb0I7RUFBTyxhQUFBO0VBQWEsZUFBQTtFQUFlLHFCQUFBO0VBQXFCLGlCQUFBO0FBbUQ1RTtBQS9DRTtFQUFPLFVBQUE7QUFtRFQ7QUFuRG9CO0VBQU8sYUFBQTtFQUFhLGVBQUE7QUF1RHhDO0FBdkR3RDtFQUFjLHFCQUFBO0VBQXFCLGlCQUFBO0FBMkQzRjtBQTNENkc7RUFBTyxVQUFBO0VBQVUsWUFBQTtBQStEOUgiLCJmaWxlIjoiZXllcy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5leWVzLTEge1xuICAuY2xzLTEsLmNscy00e2ZpbGw6bm9uZTt9LmNscy0ye2ZpbGw6IzdiYWVhODt9LmNscy0yLC5jbHMtMywuY2xzLTR7c3Ryb2tlOiMyMzFmMjA7c3Ryb2tlLW1pdGVybGltaXQ6MTA7fS5jbHMtMiwuY2xzLTN7c3Ryb2tlLXdpZHRoOjhweDt9LmNscy0ze2ZpbGw6I2ZmZmVmZTt9LmNscy00e3N0cm9rZS13aWR0aDo2cHg7fVxufVxuXG4uZXllcy0yIHtcbiAgLmNscy0xLC5jbHMtNHtmaWxsOm5vbmU7fS5jbHMtMntmaWxsOiNiY2JlYzA7fS5jbHMtMiwuY2xzLTN7c3Ryb2tlOiMyMzFmMjA7c3Ryb2tlLXdpZHRoOjhweDt9LmNscy0yLC5jbHMtMywuY2xzLTR7c3Ryb2tlLW1pdGVybGltaXQ6MTA7fS5jbHMtM3tmaWxsOiMyMzFmMjA7fS5jbHMtNHtzdHJva2U6I2ZmZjtzdHJva2Utd2lkdGg6NnB4O31cbn1cblxuLmV5ZXMtMyB7XG4gIC5jbHMtMXtmaWxsOm5vbmU7fS5jbHMtMntmaWxsOiMyMzFmMjA7fS5jbHMtMiwuY2xzLTN7c3Ryb2tlOiMyMzFmMjA7c3Ryb2tlLW1pdGVybGltaXQ6MTA7c3Ryb2tlLXdpZHRoOjhweDt9LmNscy0ze2ZpbGw6I2ZmZmVmZTt9XG59XG5cbi5leWVzLTQge1xuICAuY2xzLTF7ZmlsbDpub25lO30uY2xzLTJ7ZmlsbDojMjMxZjIwO3N0cm9rZTojMjMxZjIwO3N0cm9rZS1taXRlcmxpbWl0OjEwO3N0cm9rZS13aWR0aDo4cHg7fVxufVxuXG4uZXllcy01IHtcbiAgLmNscy0xe2ZpbGw6bm9uZTt9LmNscy0ye2ZpbGw6IzIzMWYyMDtzdHJva2U6IzIzMWYyMDt9LmNscy0yLC5jbHMtM3tzdHJva2UtbWl0ZXJsaW1pdDoxMDtzdHJva2Utd2lkdGg6OHB4O30uY2xzLTN7ZmlsbDojZmZmO3N0cm9rZTojZmZmO31cbn0iXX0= */"] });


/***/ }),

/***/ "vGd/":
/*!********************************************!*\
  !*** ./src/app/lauro/options/hair.enum.ts ***!
  \********************************************/
/*! exports provided: Hair */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Hair", function() { return Hair; });
var Hair;
(function (Hair) {
    Hair["GEL"] = "hair-3";
    Hair["CARECA"] = "hair-1";
    Hair["CURTO"] = "hair-2";
    Hair["BAGUNCADO"] = "hair-4";
    Hair["CABELUDO"] = "hair-5";
})(Hair || (Hair = {}));


/***/ }),

/***/ "vY5A":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");



const routes = [];
class AppRoutingModule {
}
AppRoutingModule.ɵfac = function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); };
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] }); })();


/***/ }),

/***/ "wTkp":
/*!**********************************************!*\
  !*** ./src/app/lauro/nose/nose.component.ts ***!
  \**********************************************/
/*! exports provided: NoseComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NoseComponent", function() { return NoseComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _nose_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./nose.service */ "1tXq");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");



function NoseComponent__svg_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "g", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "rect", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "g", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "path", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "path", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} }
function NoseComponent__svg_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "g", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "rect", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "g", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "path", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} }
function NoseComponent__svg_ng_container_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "g", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "rect", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "g", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "path", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} }
function NoseComponent__svg_ng_container_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "g", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "rect", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "g", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "ellipse", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "ellipse", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "path", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} }
function NoseComponent__svg_ng_container_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "g", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "rect", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "g", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "ellipse", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "circle", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "path", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} }
class NoseComponent {
    constructor(service) {
        this.service = service;
    }
    get selected() {
        return this.service.selected;
    }
}
NoseComponent.ɵfac = function NoseComponent_Factory(t) { return new (t || NoseComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_nose_service__WEBPACK_IMPORTED_MODULE_1__["NoseService"])); };
NoseComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NoseComponent, selectors: [["app-nose"]], decls: 6, vars: 7, consts: [["viewBox", "0 0 1080 1920", "version", "1.1", "xmlns", "http://www.w3.org/2000/svg", 0, "xmlns", "link", "http://www.w3.org/1999/xlink"], [4, "ngIf"], ["id", "Layer_9", "data-name", "Layer 9"], ["width", "1080", "height", "1920", 1, "cls-1"], ["id", "Layer_4", "data-name", "Layer 4"], ["d", "M616.65,988.24c2.08,94.45,1.1,173.28-.64,233.82-1,36.37-2.81,79.07-30.08,94.44-17.27,9.73-41,6.38-57-3.84-29-18.48-32.58-59.27-34.85-94.09-3.29-50.39-8.49-224-3.08-230.33C506,970.56,616.65,988.24,616.65,988.24Z", 1, "cls-2"], ["d", "M616.65,988.24c2.08,94.45,1.1,173.28-.64,233.82-1,36.37-2.81,79.07-30.08,94.44-17.27,9.73-41,6.38-57-3.84-29-18.48-32.58-59.27-34.85-94.09-3.6-55.1-6.43-132.75-3.08-230.33", 1, "cls-3"], ["id", "Layer_24", "data-name", "Layer 24"], ["d", "M574.9,988.24l3.73,132.59c10.28-2.33,19,1.06,21.31,6.77,1.72,4.18-.39,8.56-1.07,9.82-3.67,6.78-13.2,10.16-24,8.45.69,6.86-1.78,13.25-6.67,16.28a15.09,15.09,0,0,1-9.85,1.84c-17.58-2.14-13.32-12.79-13.32-16,0,0-24.51,3.73-22.64-12.25s18.38-15.45,18.38-15.45l4.26-132.06", 1, "cls-2"], ["id", "Layer_25", "data-name", "Layer 25"], ["d", "M559.57,1001.63s25.08,26.31,41.53,60.36c29.18,60.42,66.71,128.34-81,95.71", 1, "cls-2"], ["id", "Layer_28", "data-name", "Layer 28"], ["cx", "583.73", "cy", "1138.11", "rx", "3.11", "ry", "5.06", 1, "cls-2"], ["cx", "525.33", "cy", "1138.11", "rx", "3.11", "ry", "5.06", 1, "cls-2"], ["d", "M508.83,1117.8c12.05-23.25,67.92-44.17,98.1,0", 1, "cls-3"], ["id", "Layer_29", "data-name", "Layer 29"], ["cx", "557.88", "cy", "1122.5", "rx", "105.01", "ry", "55.75", 1, "cls-2"], ["cx", "480.8", "cy", "1120.68", "r", "7.88", 1, "cls-3"], ["d", "M497.35,1097.52c1.67-6.17,11.93-8.67,23.76-11.54,0,0,19.89-4.84,28.06,0a6,6,0,0,1,2.9,3.17,5.28,5.28,0,0,1-.86,4c-4.1,6.33-28.39-1.76-42,8.17-3.22,2.34-5.5,5.43-8.1,4.83C498.32,1105.57,496.39,1101.06,497.35,1097.52Z", 1, "cls-3"]], template: function NoseComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "svg", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, NoseComponent__svg_ng_container_1_Template, 6, 0, "ng-container", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, NoseComponent__svg_ng_container_2_Template, 5, 0, "ng-container", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, NoseComponent__svg_ng_container_3_Template, 5, 0, "ng-container", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, NoseComponent__svg_ng_container_4_Template, 7, 0, "ng-container", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, NoseComponent__svg_ng_container_5_Template, 7, 0, "ng-container", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](ctx.selected);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.selected === "nose-1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.selected === "nose-2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.selected === "nose-3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.selected === "nose-4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.selected === "nose-5");
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"]], styles: [".nose-1[_ngcontent-%COMP%]   .cls-1[_ngcontent-%COMP%], .nose-1[_ngcontent-%COMP%]   .cls-3[_ngcontent-%COMP%] {\n  fill: none;\n}\n.nose-1[_ngcontent-%COMP%]   .cls-2[_ngcontent-%COMP%] {\n  fill: #fff;\n}\n.nose-1[_ngcontent-%COMP%]   .cls-3[_ngcontent-%COMP%] {\n  stroke: #231f20;\n  stroke-miterlimit: 10;\n  stroke-width: 8px;\n}\n.nose-2[_ngcontent-%COMP%]   .cls-1[_ngcontent-%COMP%] {\n  fill: none;\n}\n.nose-2[_ngcontent-%COMP%]   .cls-2[_ngcontent-%COMP%] {\n  fill: #fff;\n  stroke: #231f20;\n  stroke-miterlimit: 10;\n  stroke-width: 8px;\n}\n.nose-3[_ngcontent-%COMP%]   .cls-1[_ngcontent-%COMP%] {\n  fill: none;\n}\n.nose-3[_ngcontent-%COMP%]   .cls-2[_ngcontent-%COMP%] {\n  fill: #fff;\n  stroke: #231f20;\n  stroke-miterlimit: 10;\n  stroke-width: 8px;\n}\n.nose-4[_ngcontent-%COMP%]   .cls-1[_ngcontent-%COMP%] {\n  fill: none;\n}\n.nose-4[_ngcontent-%COMP%]   .cls-2[_ngcontent-%COMP%] {\n  fill: #231f20;\n}\n.nose-4[_ngcontent-%COMP%]   .cls-2[_ngcontent-%COMP%], .nose-4[_ngcontent-%COMP%]   .cls-3[_ngcontent-%COMP%] {\n  stroke: #231f20;\n  stroke-miterlimit: 10;\n  stroke-width: 8px;\n}\n.nose-4[_ngcontent-%COMP%]   .cls-3[_ngcontent-%COMP%] {\n  fill: #fff;\n}\n.nose-5[_ngcontent-%COMP%]   .cls-1[_ngcontent-%COMP%] {\n  fill: none;\n}\n.nose-5[_ngcontent-%COMP%]   .cls-2[_ngcontent-%COMP%] {\n  fill: #ed1c24;\n  stroke: #231f20;\n}\n.nose-5[_ngcontent-%COMP%]   .cls-2[_ngcontent-%COMP%], .nose-5[_ngcontent-%COMP%]   .cls-3[_ngcontent-%COMP%] {\n  stroke-miterlimit: 10;\n  stroke-width: 8px;\n}\n.nose-5[_ngcontent-%COMP%]   .cls-3[_ngcontent-%COMP%] {\n  fill: #fff;\n  stroke: #fff;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL25vc2UuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0U7RUFBYyxVQUFBO0FBQ2hCO0FBRDJCO0VBQU8sVUFBQTtBQUlsQztBQUo2QztFQUFPLGVBQUE7RUFBZSxxQkFBQTtFQUFxQixpQkFBQTtBQVN4RjtBQUxFO0VBQU8sVUFBQTtBQVNUO0FBVG9CO0VBQU8sVUFBQTtFQUFVLGVBQUE7RUFBZSxxQkFBQTtFQUFxQixpQkFBQTtBQWV6RTtBQVhFO0VBQU8sVUFBQTtBQWVUO0FBZm9CO0VBQU8sVUFBQTtFQUFVLGVBQUE7RUFBZSxxQkFBQTtFQUFxQixpQkFBQTtBQXFCekU7QUFqQkU7RUFBTyxVQUFBO0FBcUJUO0FBckJvQjtFQUFPLGFBQUE7QUF3QjNCO0FBeEJ5QztFQUFjLGVBQUE7RUFBZSxxQkFBQTtFQUFxQixpQkFBQTtBQTZCM0Y7QUE3QjZHO0VBQU8sVUFBQTtBQWdDcEg7QUE1QkU7RUFBTyxVQUFBO0FBZ0NUO0FBaENvQjtFQUFPLGFBQUE7RUFBYSxlQUFBO0FBb0N4QztBQXBDd0Q7RUFBYyxxQkFBQTtFQUFxQixpQkFBQTtBQXdDM0Y7QUF4QzZHO0VBQU8sVUFBQTtFQUFVLFlBQUE7QUE0QzlIIiwiZmlsZSI6Im5vc2UuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubm9zZS0xIHtcbiAgLmNscy0xLC5jbHMtM3tmaWxsOm5vbmU7fS5jbHMtMntmaWxsOiNmZmY7fS5jbHMtM3tzdHJva2U6IzIzMWYyMDtzdHJva2UtbWl0ZXJsaW1pdDoxMDtzdHJva2Utd2lkdGg6OHB4O31cbn1cblxuLm5vc2UtMiB7XG4gIC5jbHMtMXtmaWxsOm5vbmU7fS5jbHMtMntmaWxsOiNmZmY7c3Ryb2tlOiMyMzFmMjA7c3Ryb2tlLW1pdGVybGltaXQ6MTA7c3Ryb2tlLXdpZHRoOjhweDt9XG59XG5cbi5ub3NlLTMge1xuICAuY2xzLTF7ZmlsbDpub25lO30uY2xzLTJ7ZmlsbDojZmZmO3N0cm9rZTojMjMxZjIwO3N0cm9rZS1taXRlcmxpbWl0OjEwO3N0cm9rZS13aWR0aDo4cHg7fVxufVxuXG4ubm9zZS00IHtcbiAgLmNscy0xe2ZpbGw6bm9uZTt9LmNscy0ye2ZpbGw6IzIzMWYyMDt9LmNscy0yLC5jbHMtM3tzdHJva2U6IzIzMWYyMDtzdHJva2UtbWl0ZXJsaW1pdDoxMDtzdHJva2Utd2lkdGg6OHB4O30uY2xzLTN7ZmlsbDojZmZmO31cbn1cblxuLm5vc2UtNSB7XG4gIC5jbHMtMXtmaWxsOm5vbmU7fS5jbHMtMntmaWxsOiNlZDFjMjQ7c3Ryb2tlOiMyMzFmMjA7fS5jbHMtMiwuY2xzLTN7c3Ryb2tlLW1pdGVybGltaXQ6MTA7c3Ryb2tlLXdpZHRoOjhweDt9LmNscy0ze2ZpbGw6I2ZmZjtzdHJva2U6I2ZmZjt9XG59Il19 */"] });


/***/ }),

/***/ "xgS0":
/*!***************************************************!*\
  !*** ./src/app/lauro/options/facial-hair.enum.ts ***!
  \***************************************************/
/*! exports provided: FacialHair */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FacialHair", function() { return FacialHair; });
var FacialHair;
(function (FacialHair) {
    FacialHair["POR_FAZER"] = "facial-hair-2";
    FacialHair["LIMPO"] = "facial-hair-1";
    FacialHair["BARBA"] = "facial-hair-3";
    FacialHair["CAVANHAQUE"] = "facial-hair-4";
    FacialHair["COMPLETA"] = "facial-hair-5";
})(FacialHair || (FacialHair = {}));


/***/ }),

/***/ "xnTV":
/*!**********************************************!*\
  !*** ./src/app/lauro/mouth/mouth.service.ts ***!
  \**********************************************/
/*! exports provided: MouthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MouthService", function() { return MouthService; });
/* harmony import */ var _options_mouth_enum__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../options/mouth.enum */ "/gu6");
/* harmony import */ var _services_options_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/options.service */ "pR33");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");



class MouthService extends _services_options_service__WEBPACK_IMPORTED_MODULE_1__["OptionsService"] {
    constructor() {
        super(_options_mouth_enum__WEBPACK_IMPORTED_MODULE_0__["Mouth"]);
    }
}
MouthService.ɵfac = function MouthService_Factory(t) { return new (t || MouthService)(); };
MouthService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({ token: MouthService, factory: MouthService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "AytR");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ "zn8P":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "zn8P";

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map