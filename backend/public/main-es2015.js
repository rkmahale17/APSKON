(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
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
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<Toolbar></Toolbar>\n<router-outlet></router-outlet>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/Landing/landing.component.html":
/*!*************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/Landing/landing.component.html ***!
  \*************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container toolbar\">\n\n  <div class=\"m-4 b-l div-box-shadow\">\n    <div class=\"d-flex home_banner justify-content-between \">\n      <div class=\"mt-5 ml-4\">\n        <section class=\"heading-1\">\n          “All who have accomplished\n          great things in life had great\n          <span class=\"tc-p\">GOAL.</span>”\n        </section>\n        <p class=\"heading-3 tc-gl mt-3\">\n          GOAL.io provides you feature to create a\n          Goal and help you to complete it by using\n        </p>\n        <ul class=\"feature\">\n          <li>Anaylse it</li>\n          <li>Add Milestones</li>\n          <li>Share on Competion</li>\n          <li>Track It</li>\n          <li>Add Timeline</li>\n\n        </ul>\n        <section>\n\n        </section>\n\n      </div>\n\n\n      <div>\n        <img src=\"../../assets/achievement.svg\" alt=\"achievement \" class=\"home_achiever\" />\n\n      </div>\n    </div>\n\n\n    <div class=\"d-flex home_banner justify-content-between \">\n      <button type=\"submit\" class=\"btn-mr m-4 b-s t-15 f-wm letter-space-1 ml-2\">\n        DEMO\n      </button>\n      <button type=\"submit\" [routerLink]=\"['/SignUp']\" class=\"btn-mr m-4 b-p t-15 f-wm letter-space-1\">\n        SIGN UP\n      </button>\n\n    </div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/Navbar/navbar.component.html":
/*!***********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/Navbar/navbar.component.html ***!
  \***********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div *ngIf=\"showMobileNavBar\" class=\" b-navbar navbar d-block d-b\">\n\n\n    <div class=\"nav_menu tc-b f-wm d-flex  justify-content-between\" (click)=\"close()\" [routerLink]=\"[item.url]\"\n        *ngFor=\"let item of menu\">\n        <div>\n            {{item.name}}\n\n        </div>\n        <div>\n            <fa-icon [icon]=\"arrowForward\" class=\"close_icon\"></fa-icon>\n\n        </div>\n\n    </div>\n\n    <div class=\"pl-4 py-2 my-3 loginButons\">\n      \n    </div>\n    <div class=\"pl-4 py-2 my-3\" class=\"navbar__close\">\n        <button type=\"button\" class=\"btn-r m-4 b-s\" (click)=\"close()\">\n            <fa-icon [icon]=\"close_icon\" class=\"close_icon\"></fa-icon>\n        </button>\n    </div>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/Toolbar/Toolbar.component.html":
/*!*************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/Toolbar/Toolbar.component.html ***!
  \*************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container toolbar\">\n  <div class=\"d-flex justify-content-between m-4\">\n    <div>\n      <a href=\"/Home\" class=\"tc-p heading-3 f-wm letter-space-3\">ASPON</a>\n    </div>\n    <div class=\"m-menu-icon\">\n      <button type=\"button\" (click)=\"showMobileNavBar = !showMobileNavBar\" class=\"btn btn-outline-dark px-2\">\n        <fa-icon [icon]=\"menu_icon\"></fa-icon>\n      </button>\n    </div>\n    <div class=\"d-flex desktop\">\n      <ul>\n        <li class=\"px-3\">\n          <a href=\"/Home\" class=\"heading-4 tc-gl f-wr\">SUPPORT US</a>\n        </li>\n        <li class=\"px-3\">\n          <a href=\"/Home\" class=\"heading-4 tc-gl f-wr\">CONTACT US</a>\n        </li>\n        <li class=\"px-3\">\n          <a href=\"/Home\" class=\"heading-4 tc-gl f-wr\">ABOUT US</a>\n        </li>\n        \n\n      </ul>\n    </div>\n  </div>\n</div>\n<nav-bar [showMobileNavBar]=\"showMobileNavBar\" [menu]=\"menu\" (closeNavBar)=\"showMobileNavBar = false\"></nav-bar>");

/***/ }),

/***/ "./node_modules/tslib/tslib.es6.js":
/*!*****************************************!*\
  !*** ./node_modules/tslib/tslib.es6.js ***!
  \*****************************************/
/*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __createBinding, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault, __classPrivateFieldGet, __classPrivateFieldSet */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__extends", function() { return __extends; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__assign", function() { return __assign; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__rest", function() { return __rest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__decorate", function() { return __decorate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__param", function() { return __param; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__metadata", function() { return __metadata; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__awaiter", function() { return __awaiter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__generator", function() { return __generator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__createBinding", function() { return __createBinding; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__exportStar", function() { return __exportStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__values", function() { return __values; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__read", function() { return __read; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spread", function() { return __spread; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spreadArrays", function() { return __spreadArrays; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__await", function() { return __await; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function() { return __asyncGenerator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function() { return __asyncDelegator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncValues", function() { return __asyncValues; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function() { return __makeTemplateObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importStar", function() { return __importStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importDefault", function() { return __importDefault; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__classPrivateFieldGet", function() { return __classPrivateFieldGet; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__classPrivateFieldSet", function() { return __classPrivateFieldSet; });
/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    }
    return __assign.apply(this, arguments);
}

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}

function __param(paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
}

function __metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}

function __awaiter(thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

function __createBinding(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}

function __exportStar(m, exports) {
    for (var p in m) if (p !== "default" && !exports.hasOwnProperty(p)) exports[p] = m[p];
}

function __values(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
}

function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
}

function __spread() {
    for (var ar = [], i = 0; i < arguments.length; i++)
        ar = ar.concat(__read(arguments[i]));
    return ar;
}

function __spreadArrays() {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};

function __await(v) {
    return this instanceof __await ? (this.v = v, this) : new __await(v);
}

function __asyncGenerator(thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
    function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
    function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
    function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
    function fulfill(value) { resume("next", value); }
    function reject(value) { resume("throw", value); }
    function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
}

function __asyncDelegator(o) {
    var i, p;
    return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
    function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
}

function __asyncValues(o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
}

function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};

function __importStar(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result.default = mod;
    return result;
}

function __importDefault(mod) {
    return (mod && mod.__esModule) ? mod : { default: mod };
}

function __classPrivateFieldGet(receiver, privateMap) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to get private field on non-instance");
    }
    return privateMap.get(receiver);
}

function __classPrivateFieldSet(receiver, privateMap, value) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to set private field on non-instance");
    }
    privateMap.set(receiver, value);
    return value;
}


/***/ }),

/***/ "./node_modules/zone.js/dist/zone-evergreen.js":
/*!*****************************************************!*\
  !*** ./node_modules/zone.js/dist/zone-evergreen.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_RESULT__;/**
* @license Angular v9.1.0-next.4+61.sha-e552591.with-local-changes
* (c) 2010-2020 Google LLC. https://angular.io/
* License: MIT
*/
(function (factory) {
     true ? !(__WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.call(exports, __webpack_require__, exports, module)) :
				__WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)) :
    undefined;
}((function () { 'use strict';

    /**
     * @license
     * Copyright Google Inc. All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
    const Zone$1 = (function (global) {
        const performance = global['performance'];
        function mark(name) { performance && performance['mark'] && performance['mark'](name); }
        function performanceMeasure(name, label) {
            performance && performance['measure'] && performance['measure'](name, label);
        }
        mark('Zone');
        // Initialize before it's accessed below.
        // __Zone_symbol_prefix global can be used to override the default zone
        // symbol prefix with a custom one if needed.
        const symbolPrefix = global['__Zone_symbol_prefix'] || '__zone_symbol__';
        function __symbol__(name) { return symbolPrefix + name; }
        const checkDuplicate = global[__symbol__('forceDuplicateZoneCheck')] === true;
        if (global['Zone']) {
            // if global['Zone'] already exists (maybe zone.js was already loaded or
            // some other lib also registered a global object named Zone), we may need
            // to throw an error, but sometimes user may not want this error.
            // For example,
            // we have two web pages, page1 includes zone.js, page2 doesn't.
            // and the 1st time user load page1 and page2, everything work fine,
            // but when user load page2 again, error occurs because global['Zone'] already exists.
            // so we add a flag to let user choose whether to throw this error or not.
            // By default, if existing Zone is from zone.js, we will not throw the error.
            if (checkDuplicate || typeof global['Zone'].__symbol__ !== 'function') {
                throw new Error('Zone already loaded.');
            }
            else {
                return global['Zone'];
            }
        }
        class Zone {
            constructor(parent, zoneSpec) {
                this._parent = parent;
                this._name = zoneSpec ? zoneSpec.name || 'unnamed' : '<root>';
                this._properties = zoneSpec && zoneSpec.properties || {};
                this._zoneDelegate =
                    new ZoneDelegate(this, this._parent && this._parent._zoneDelegate, zoneSpec);
            }
            static assertZonePatched() {
                if (global['Promise'] !== patches['ZoneAwarePromise']) {
                    throw new Error('Zone.js has detected that ZoneAwarePromise `(window|global).Promise` ' +
                        'has been overwritten.\n' +
                        'Most likely cause is that a Promise polyfill has been loaded ' +
                        'after Zone.js (Polyfilling Promise api is not necessary when zone.js is loaded. ' +
                        'If you must load one, do so before loading zone.js.)');
                }
            }
            static get root() {
                let zone = Zone.current;
                while (zone.parent) {
                    zone = zone.parent;
                }
                return zone;
            }
            static get current() { return _currentZoneFrame.zone; }
            static get currentTask() { return _currentTask; }
            // tslint:disable-next-line:require-internal-with-underscore
            static __load_patch(name, fn) {
                if (patches.hasOwnProperty(name)) {
                    if (checkDuplicate) {
                        throw Error('Already loaded patch: ' + name);
                    }
                }
                else if (!global['__Zone_disable_' + name]) {
                    const perfName = 'Zone:' + name;
                    mark(perfName);
                    patches[name] = fn(global, Zone, _api);
                    performanceMeasure(perfName, perfName);
                }
            }
            get parent() { return this._parent; }
            get name() { return this._name; }
            get(key) {
                const zone = this.getZoneWith(key);
                if (zone)
                    return zone._properties[key];
            }
            getZoneWith(key) {
                let current = this;
                while (current) {
                    if (current._properties.hasOwnProperty(key)) {
                        return current;
                    }
                    current = current._parent;
                }
                return null;
            }
            fork(zoneSpec) {
                if (!zoneSpec)
                    throw new Error('ZoneSpec required!');
                return this._zoneDelegate.fork(this, zoneSpec);
            }
            wrap(callback, source) {
                if (typeof callback !== 'function') {
                    throw new Error('Expecting function got: ' + callback);
                }
                const _callback = this._zoneDelegate.intercept(this, callback, source);
                const zone = this;
                return function () {
                    return zone.runGuarded(_callback, this, arguments, source);
                };
            }
            run(callback, applyThis, applyArgs, source) {
                _currentZoneFrame = { parent: _currentZoneFrame, zone: this };
                try {
                    return this._zoneDelegate.invoke(this, callback, applyThis, applyArgs, source);
                }
                finally {
                    _currentZoneFrame = _currentZoneFrame.parent;
                }
            }
            runGuarded(callback, applyThis = null, applyArgs, source) {
                _currentZoneFrame = { parent: _currentZoneFrame, zone: this };
                try {
                    try {
                        return this._zoneDelegate.invoke(this, callback, applyThis, applyArgs, source);
                    }
                    catch (error) {
                        if (this._zoneDelegate.handleError(this, error)) {
                            throw error;
                        }
                    }
                }
                finally {
                    _currentZoneFrame = _currentZoneFrame.parent;
                }
            }
            runTask(task, applyThis, applyArgs) {
                if (task.zone != this) {
                    throw new Error('A task can only be run in the zone of creation! (Creation: ' +
                        (task.zone || NO_ZONE).name + '; Execution: ' + this.name + ')');
                }
                // https://github.com/angular/zone.js/issues/778, sometimes eventTask
                // will run in notScheduled(canceled) state, we should not try to
                // run such kind of task but just return
                if (task.state === notScheduled && (task.type === eventTask || task.type === macroTask)) {
                    return;
                }
                const reEntryGuard = task.state != running;
                reEntryGuard && task._transitionTo(running, scheduled);
                task.runCount++;
                const previousTask = _currentTask;
                _currentTask = task;
                _currentZoneFrame = { parent: _currentZoneFrame, zone: this };
                try {
                    if (task.type == macroTask && task.data && !task.data.isPeriodic) {
                        task.cancelFn = undefined;
                    }
                    try {
                        return this._zoneDelegate.invokeTask(this, task, applyThis, applyArgs);
                    }
                    catch (error) {
                        if (this._zoneDelegate.handleError(this, error)) {
                            throw error;
                        }
                    }
                }
                finally {
                    // if the task's state is notScheduled or unknown, then it has already been cancelled
                    // we should not reset the state to scheduled
                    if (task.state !== notScheduled && task.state !== unknown) {
                        if (task.type == eventTask || (task.data && task.data.isPeriodic)) {
                            reEntryGuard && task._transitionTo(scheduled, running);
                        }
                        else {
                            task.runCount = 0;
                            this._updateTaskCount(task, -1);
                            reEntryGuard &&
                                task._transitionTo(notScheduled, running, notScheduled);
                        }
                    }
                    _currentZoneFrame = _currentZoneFrame.parent;
                    _currentTask = previousTask;
                }
            }
            scheduleTask(task) {
                if (task.zone && task.zone !== this) {
                    // check if the task was rescheduled, the newZone
                    // should not be the children of the original zone
                    let newZone = this;
                    while (newZone) {
                        if (newZone === task.zone) {
                            throw Error(`can not reschedule task to ${this.name} which is descendants of the original zone ${task.zone.name}`);
                        }
                        newZone = newZone.parent;
                    }
                }
                task._transitionTo(scheduling, notScheduled);
                const zoneDelegates = [];
                task._zoneDelegates = zoneDelegates;
                task._zone = this;
                try {
                    task = this._zoneDelegate.scheduleTask(this, task);
                }
                catch (err) {
                    // should set task's state to unknown when scheduleTask throw error
                    // because the err may from reschedule, so the fromState maybe notScheduled
                    task._transitionTo(unknown, scheduling, notScheduled);
                    // TODO: @JiaLiPassion, should we check the result from handleError?
                    this._zoneDelegate.handleError(this, err);
                    throw err;
                }
                if (task._zoneDelegates === zoneDelegates) {
                    // we have to check because internally the delegate can reschedule the task.
                    this._updateTaskCount(task, 1);
                }
                if (task.state == scheduling) {
                    task._transitionTo(scheduled, scheduling);
                }
                return task;
            }
            scheduleMicroTask(source, callback, data, customSchedule) {
                return this.scheduleTask(new ZoneTask(microTask, source, callback, data, customSchedule, undefined));
            }
            scheduleMacroTask(source, callback, data, customSchedule, customCancel) {
                return this.scheduleTask(new ZoneTask(macroTask, source, callback, data, customSchedule, customCancel));
            }
            scheduleEventTask(source, callback, data, customSchedule, customCancel) {
                return this.scheduleTask(new ZoneTask(eventTask, source, callback, data, customSchedule, customCancel));
            }
            cancelTask(task) {
                if (task.zone != this)
                    throw new Error('A task can only be cancelled in the zone of creation! (Creation: ' +
                        (task.zone || NO_ZONE).name + '; Execution: ' + this.name + ')');
                task._transitionTo(canceling, scheduled, running);
                try {
                    this._zoneDelegate.cancelTask(this, task);
                }
                catch (err) {
                    // if error occurs when cancelTask, transit the state to unknown
                    task._transitionTo(unknown, canceling);
                    this._zoneDelegate.handleError(this, err);
                    throw err;
                }
                this._updateTaskCount(task, -1);
                task._transitionTo(notScheduled, canceling);
                task.runCount = 0;
                return task;
            }
            _updateTaskCount(task, count) {
                const zoneDelegates = task._zoneDelegates;
                if (count == -1) {
                    task._zoneDelegates = null;
                }
                for (let i = 0; i < zoneDelegates.length; i++) {
                    zoneDelegates[i]._updateTaskCount(task.type, count);
                }
            }
        }
        // tslint:disable-next-line:require-internal-with-underscore
        Zone.__symbol__ = __symbol__;
        const DELEGATE_ZS = {
            name: '',
            onHasTask: (delegate, _, target, hasTaskState) => delegate.hasTask(target, hasTaskState),
            onScheduleTask: (delegate, _, target, task) => delegate.scheduleTask(target, task),
            onInvokeTask: (delegate, _, target, task, applyThis, applyArgs) => delegate.invokeTask(target, task, applyThis, applyArgs),
            onCancelTask: (delegate, _, target, task) => delegate.cancelTask(target, task)
        };
        class ZoneDelegate {
            constructor(zone, parentDelegate, zoneSpec) {
                this._taskCounts = { 'microTask': 0, 'macroTask': 0, 'eventTask': 0 };
                this.zone = zone;
                this._parentDelegate = parentDelegate;
                this._forkZS =
                    zoneSpec && (zoneSpec && zoneSpec.onFork ? zoneSpec : parentDelegate._forkZS);
                this._forkDlgt = zoneSpec && (zoneSpec.onFork ? parentDelegate : parentDelegate._forkDlgt);
                this._forkCurrZone =
                    zoneSpec && (zoneSpec.onFork ? this.zone : parentDelegate._forkCurrZone);
                this._interceptZS =
                    zoneSpec && (zoneSpec.onIntercept ? zoneSpec : parentDelegate._interceptZS);
                this._interceptDlgt =
                    zoneSpec && (zoneSpec.onIntercept ? parentDelegate : parentDelegate._interceptDlgt);
                this._interceptCurrZone =
                    zoneSpec && (zoneSpec.onIntercept ? this.zone : parentDelegate._interceptCurrZone);
                this._invokeZS = zoneSpec && (zoneSpec.onInvoke ? zoneSpec : parentDelegate._invokeZS);
                this._invokeDlgt =
                    zoneSpec && (zoneSpec.onInvoke ? parentDelegate : parentDelegate._invokeDlgt);
                this._invokeCurrZone =
                    zoneSpec && (zoneSpec.onInvoke ? this.zone : parentDelegate._invokeCurrZone);
                this._handleErrorZS =
                    zoneSpec && (zoneSpec.onHandleError ? zoneSpec : parentDelegate._handleErrorZS);
                this._handleErrorDlgt = zoneSpec &&
                    (zoneSpec.onHandleError ? parentDelegate : parentDelegate._handleErrorDlgt);
                this._handleErrorCurrZone =
                    zoneSpec && (zoneSpec.onHandleError ? this.zone : parentDelegate._handleErrorCurrZone);
                this._scheduleTaskZS =
                    zoneSpec && (zoneSpec.onScheduleTask ? zoneSpec : parentDelegate._scheduleTaskZS);
                this._scheduleTaskDlgt = zoneSpec &&
                    (zoneSpec.onScheduleTask ? parentDelegate : parentDelegate._scheduleTaskDlgt);
                this._scheduleTaskCurrZone = zoneSpec &&
                    (zoneSpec.onScheduleTask ? this.zone : parentDelegate._scheduleTaskCurrZone);
                this._invokeTaskZS =
                    zoneSpec && (zoneSpec.onInvokeTask ? zoneSpec : parentDelegate._invokeTaskZS);
                this._invokeTaskDlgt =
                    zoneSpec && (zoneSpec.onInvokeTask ? parentDelegate : parentDelegate._invokeTaskDlgt);
                this._invokeTaskCurrZone =
                    zoneSpec && (zoneSpec.onInvokeTask ? this.zone : parentDelegate._invokeTaskCurrZone);
                this._cancelTaskZS =
                    zoneSpec && (zoneSpec.onCancelTask ? zoneSpec : parentDelegate._cancelTaskZS);
                this._cancelTaskDlgt =
                    zoneSpec && (zoneSpec.onCancelTask ? parentDelegate : parentDelegate._cancelTaskDlgt);
                this._cancelTaskCurrZone =
                    zoneSpec && (zoneSpec.onCancelTask ? this.zone : parentDelegate._cancelTaskCurrZone);
                this._hasTaskZS = null;
                this._hasTaskDlgt = null;
                this._hasTaskDlgtOwner = null;
                this._hasTaskCurrZone = null;
                const zoneSpecHasTask = zoneSpec && zoneSpec.onHasTask;
                const parentHasTask = parentDelegate && parentDelegate._hasTaskZS;
                if (zoneSpecHasTask || parentHasTask) {
                    // If we need to report hasTask, than this ZS needs to do ref counting on tasks. In such
                    // a case all task related interceptors must go through this ZD. We can't short circuit it.
                    this._hasTaskZS = zoneSpecHasTask ? zoneSpec : DELEGATE_ZS;
                    this._hasTaskDlgt = parentDelegate;
                    this._hasTaskDlgtOwner = this;
                    this._hasTaskCurrZone = zone;
                    if (!zoneSpec.onScheduleTask) {
                        this._scheduleTaskZS = DELEGATE_ZS;
                        this._scheduleTaskDlgt = parentDelegate;
                        this._scheduleTaskCurrZone = this.zone;
                    }
                    if (!zoneSpec.onInvokeTask) {
                        this._invokeTaskZS = DELEGATE_ZS;
                        this._invokeTaskDlgt = parentDelegate;
                        this._invokeTaskCurrZone = this.zone;
                    }
                    if (!zoneSpec.onCancelTask) {
                        this._cancelTaskZS = DELEGATE_ZS;
                        this._cancelTaskDlgt = parentDelegate;
                        this._cancelTaskCurrZone = this.zone;
                    }
                }
            }
            fork(targetZone, zoneSpec) {
                return this._forkZS ?
                    this._forkZS.onFork(this._forkDlgt, this.zone, targetZone, zoneSpec) :
                    new Zone(targetZone, zoneSpec);
            }
            intercept(targetZone, callback, source) {
                return this._interceptZS ?
                    this._interceptZS.onIntercept(this._interceptDlgt, this._interceptCurrZone, targetZone, callback, source) :
                    callback;
            }
            invoke(targetZone, callback, applyThis, applyArgs, source) {
                return this._invokeZS ?
                    this._invokeZS.onInvoke(this._invokeDlgt, this._invokeCurrZone, targetZone, callback, applyThis, applyArgs, source) :
                    callback.apply(applyThis, applyArgs);
            }
            handleError(targetZone, error) {
                return this._handleErrorZS ?
                    this._handleErrorZS.onHandleError(this._handleErrorDlgt, this._handleErrorCurrZone, targetZone, error) :
                    true;
            }
            scheduleTask(targetZone, task) {
                let returnTask = task;
                if (this._scheduleTaskZS) {
                    if (this._hasTaskZS) {
                        returnTask._zoneDelegates.push(this._hasTaskDlgtOwner);
                    }
                    // clang-format off
                    returnTask = this._scheduleTaskZS.onScheduleTask(this._scheduleTaskDlgt, this._scheduleTaskCurrZone, targetZone, task);
                    // clang-format on
                    if (!returnTask)
                        returnTask = task;
                }
                else {
                    if (task.scheduleFn) {
                        task.scheduleFn(task);
                    }
                    else if (task.type == microTask) {
                        scheduleMicroTask(task);
                    }
                    else {
                        throw new Error('Task is missing scheduleFn.');
                    }
                }
                return returnTask;
            }
            invokeTask(targetZone, task, applyThis, applyArgs) {
                return this._invokeTaskZS ?
                    this._invokeTaskZS.onInvokeTask(this._invokeTaskDlgt, this._invokeTaskCurrZone, targetZone, task, applyThis, applyArgs) :
                    task.callback.apply(applyThis, applyArgs);
            }
            cancelTask(targetZone, task) {
                let value;
                if (this._cancelTaskZS) {
                    value = this._cancelTaskZS.onCancelTask(this._cancelTaskDlgt, this._cancelTaskCurrZone, targetZone, task);
                }
                else {
                    if (!task.cancelFn) {
                        throw Error('Task is not cancelable');
                    }
                    value = task.cancelFn(task);
                }
                return value;
            }
            hasTask(targetZone, isEmpty) {
                // hasTask should not throw error so other ZoneDelegate
                // can still trigger hasTask callback
                try {
                    this._hasTaskZS &&
                        this._hasTaskZS.onHasTask(this._hasTaskDlgt, this._hasTaskCurrZone, targetZone, isEmpty);
                }
                catch (err) {
                    this.handleError(targetZone, err);
                }
            }
            // tslint:disable-next-line:require-internal-with-underscore
            _updateTaskCount(type, count) {
                const counts = this._taskCounts;
                const prev = counts[type];
                const next = counts[type] = prev + count;
                if (next < 0) {
                    throw new Error('More tasks executed then were scheduled.');
                }
                if (prev == 0 || next == 0) {
                    const isEmpty = {
                        microTask: counts['microTask'] > 0,
                        macroTask: counts['macroTask'] > 0,
                        eventTask: counts['eventTask'] > 0,
                        change: type
                    };
                    this.hasTask(this.zone, isEmpty);
                }
            }
        }
        class ZoneTask {
            constructor(type, source, callback, options, scheduleFn, cancelFn) {
                // tslint:disable-next-line:require-internal-with-underscore
                this._zone = null;
                this.runCount = 0;
                // tslint:disable-next-line:require-internal-with-underscore
                this._zoneDelegates = null;
                // tslint:disable-next-line:require-internal-with-underscore
                this._state = 'notScheduled';
                this.type = type;
                this.source = source;
                this.data = options;
                this.scheduleFn = scheduleFn;
                this.cancelFn = cancelFn;
                if (!callback) {
                    throw new Error('callback is not defined');
                }
                this.callback = callback;
                const self = this;
                // TODO: @JiaLiPassion options should have interface
                if (type === eventTask && options && options.useG) {
                    this.invoke = ZoneTask.invokeTask;
                }
                else {
                    this.invoke = function () {
                        return ZoneTask.invokeTask.call(global, self, this, arguments);
                    };
                }
            }
            static invokeTask(task, target, args) {
                if (!task) {
                    task = this;
                }
                _numberOfNestedTaskFrames++;
                try {
                    task.runCount++;
                    return task.zone.runTask(task, target, args);
                }
                finally {
                    if (_numberOfNestedTaskFrames == 1) {
                        drainMicroTaskQueue();
                    }
                    _numberOfNestedTaskFrames--;
                }
            }
            get zone() { return this._zone; }
            get state() { return this._state; }
            cancelScheduleRequest() { this._transitionTo(notScheduled, scheduling); }
            // tslint:disable-next-line:require-internal-with-underscore
            _transitionTo(toState, fromState1, fromState2) {
                if (this._state === fromState1 || this._state === fromState2) {
                    this._state = toState;
                    if (toState == notScheduled) {
                        this._zoneDelegates = null;
                    }
                }
                else {
                    throw new Error(`${this.type} '${this.source}': can not transition to '${toState}', expecting state '${fromState1}'${fromState2 ? ' or \'' + fromState2 + '\'' : ''}, was '${this._state}'.`);
                }
            }
            toString() {
                if (this.data && typeof this.data.handleId !== 'undefined') {
                    return this.data.handleId.toString();
                }
                else {
                    return Object.prototype.toString.call(this);
                }
            }
            // add toJSON method to prevent cyclic error when
            // call JSON.stringify(zoneTask)
            toJSON() {
                return {
                    type: this.type,
                    state: this.state,
                    source: this.source,
                    zone: this.zone.name,
                    runCount: this.runCount
                };
            }
        }
        //////////////////////////////////////////////////////
        //////////////////////////////////////////////////////
        ///  MICROTASK QUEUE
        //////////////////////////////////////////////////////
        //////////////////////////////////////////////////////
        const symbolSetTimeout = __symbol__('setTimeout');
        const symbolPromise = __symbol__('Promise');
        const symbolThen = __symbol__('then');
        let _microTaskQueue = [];
        let _isDrainingMicrotaskQueue = false;
        let nativeMicroTaskQueuePromise;
        function scheduleMicroTask(task) {
            // if we are not running in any task, and there has not been anything scheduled
            // we must bootstrap the initial task creation by manually scheduling the drain
            if (_numberOfNestedTaskFrames === 0 && _microTaskQueue.length === 0) {
                // We are not running in Task, so we need to kickstart the microtask queue.
                if (!nativeMicroTaskQueuePromise) {
                    if (global[symbolPromise]) {
                        nativeMicroTaskQueuePromise = global[symbolPromise].resolve(0);
                    }
                }
                if (nativeMicroTaskQueuePromise) {
                    let nativeThen = nativeMicroTaskQueuePromise[symbolThen];
                    if (!nativeThen) {
                        // native Promise is not patchable, we need to use `then` directly
                        // issue 1078
                        nativeThen = nativeMicroTaskQueuePromise['then'];
                    }
                    nativeThen.call(nativeMicroTaskQueuePromise, drainMicroTaskQueue);
                }
                else {
                    global[symbolSetTimeout](drainMicroTaskQueue, 0);
                }
            }
            task && _microTaskQueue.push(task);
        }
        function drainMicroTaskQueue() {
            if (!_isDrainingMicrotaskQueue) {
                _isDrainingMicrotaskQueue = true;
                while (_microTaskQueue.length) {
                    const queue = _microTaskQueue;
                    _microTaskQueue = [];
                    for (let i = 0; i < queue.length; i++) {
                        const task = queue[i];
                        try {
                            task.zone.runTask(task, null, null);
                        }
                        catch (error) {
                            _api.onUnhandledError(error);
                        }
                    }
                }
                _api.microtaskDrainDone();
                _isDrainingMicrotaskQueue = false;
            }
        }
        //////////////////////////////////////////////////////
        //////////////////////////////////////////////////////
        ///  BOOTSTRAP
        //////////////////////////////////////////////////////
        //////////////////////////////////////////////////////
        const NO_ZONE = { name: 'NO ZONE' };
        const notScheduled = 'notScheduled', scheduling = 'scheduling', scheduled = 'scheduled', running = 'running', canceling = 'canceling', unknown = 'unknown';
        const microTask = 'microTask', macroTask = 'macroTask', eventTask = 'eventTask';
        const patches = {};
        const _api = {
            symbol: __symbol__,
            currentZoneFrame: () => _currentZoneFrame,
            onUnhandledError: noop,
            microtaskDrainDone: noop,
            scheduleMicroTask: scheduleMicroTask,
            showUncaughtError: () => !Zone[__symbol__('ignoreConsoleErrorUncaughtError')],
            patchEventTarget: () => [],
            patchOnProperties: noop,
            patchMethod: () => noop,
            bindArguments: () => [],
            patchThen: () => noop,
            patchMacroTask: () => noop,
            setNativePromise: (NativePromise) => {
                // sometimes NativePromise.resolve static function
                // is not ready yet, (such as core-js/es6.promise)
                // so we need to check here.
                if (NativePromise && typeof NativePromise.resolve === 'function') {
                    nativeMicroTaskQueuePromise = NativePromise.resolve(0);
                }
            },
            patchEventPrototype: () => noop,
            isIEOrEdge: () => false,
            getGlobalObjects: () => undefined,
            ObjectDefineProperty: () => noop,
            ObjectGetOwnPropertyDescriptor: () => undefined,
            ObjectCreate: () => undefined,
            ArraySlice: () => [],
            patchClass: () => noop,
            wrapWithCurrentZone: () => noop,
            filterProperties: () => [],
            attachOriginToPatched: () => noop,
            _redefineProperty: () => noop,
            patchCallbacks: () => noop
        };
        let _currentZoneFrame = { parent: null, zone: new Zone(null, null) };
        let _currentTask = null;
        let _numberOfNestedTaskFrames = 0;
        function noop() { }
        performanceMeasure('Zone', 'Zone');
        return global['Zone'] = Zone;
    })(typeof window !== 'undefined' && window || typeof self !== 'undefined' && self || global);

    /**
     * @license
     * Copyright Google Inc. All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
    Zone.__load_patch('ZoneAwarePromise', (global, Zone, api) => {
        const ObjectGetOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;
        const ObjectDefineProperty = Object.defineProperty;
        function readableObjectToString(obj) {
            if (obj && obj.toString === Object.prototype.toString) {
                const className = obj.constructor && obj.constructor.name;
                return (className ? className : '') + ': ' + JSON.stringify(obj);
            }
            return obj ? obj.toString() : Object.prototype.toString.call(obj);
        }
        const __symbol__ = api.symbol;
        const _uncaughtPromiseErrors = [];
        const isDisableWrappingUncaughtPromiseRejection = global[__symbol__('DISABLE_WRAPPING_UNCAUGHT_PROMISE_REJECTION')] === true;
        const symbolPromise = __symbol__('Promise');
        const symbolThen = __symbol__('then');
        const creationTrace = '__creationTrace__';
        api.onUnhandledError = (e) => {
            if (api.showUncaughtError()) {
                const rejection = e && e.rejection;
                if (rejection) {
                    console.error('Unhandled Promise rejection:', rejection instanceof Error ? rejection.message : rejection, '; Zone:', e.zone.name, '; Task:', e.task && e.task.source, '; Value:', rejection, rejection instanceof Error ? rejection.stack : undefined);
                }
                else {
                    console.error(e);
                }
            }
        };
        api.microtaskDrainDone = () => {
            while (_uncaughtPromiseErrors.length) {
                const uncaughtPromiseError = _uncaughtPromiseErrors.shift();
                try {
                    uncaughtPromiseError.zone.runGuarded(() => { throw uncaughtPromiseError; });
                }
                catch (error) {
                    handleUnhandledRejection(error);
                }
            }
        };
        const UNHANDLED_PROMISE_REJECTION_HANDLER_SYMBOL = __symbol__('unhandledPromiseRejectionHandler');
        function handleUnhandledRejection(e) {
            api.onUnhandledError(e);
            try {
                const handler = Zone[UNHANDLED_PROMISE_REJECTION_HANDLER_SYMBOL];
                if (typeof handler === 'function') {
                    handler.call(this, e);
                }
            }
            catch (err) {
            }
        }
        function isThenable(value) { return value && value.then; }
        function forwardResolution(value) { return value; }
        function forwardRejection(rejection) { return ZoneAwarePromise.reject(rejection); }
        const symbolState = __symbol__('state');
        const symbolValue = __symbol__('value');
        const symbolFinally = __symbol__('finally');
        const symbolParentPromiseValue = __symbol__('parentPromiseValue');
        const symbolParentPromiseState = __symbol__('parentPromiseState');
        const source = 'Promise.then';
        const UNRESOLVED = null;
        const RESOLVED = true;
        const REJECTED = false;
        const REJECTED_NO_CATCH = 0;
        function makeResolver(promise, state) {
            return (v) => {
                try {
                    resolvePromise(promise, state, v);
                }
                catch (err) {
                    resolvePromise(promise, false, err);
                }
                // Do not return value or you will break the Promise spec.
            };
        }
        const once = function () {
            let wasCalled = false;
            return function wrapper(wrappedFunction) {
                return function () {
                    if (wasCalled) {
                        return;
                    }
                    wasCalled = true;
                    wrappedFunction.apply(null, arguments);
                };
            };
        };
        const TYPE_ERROR = 'Promise resolved with itself';
        const CURRENT_TASK_TRACE_SYMBOL = __symbol__('currentTaskTrace');
        // Promise Resolution
        function resolvePromise(promise, state, value) {
            const onceWrapper = once();
            if (promise === value) {
                throw new TypeError(TYPE_ERROR);
            }
            if (promise[symbolState] === UNRESOLVED) {
                // should only get value.then once based on promise spec.
                let then = null;
                try {
                    if (typeof value === 'object' || typeof value === 'function') {
                        then = value && value.then;
                    }
                }
                catch (err) {
                    onceWrapper(() => { resolvePromise(promise, false, err); })();
                    return promise;
                }
                // if (value instanceof ZoneAwarePromise) {
                if (state !== REJECTED && value instanceof ZoneAwarePromise &&
                    value.hasOwnProperty(symbolState) && value.hasOwnProperty(symbolValue) &&
                    value[symbolState] !== UNRESOLVED) {
                    clearRejectedNoCatch(value);
                    resolvePromise(promise, value[symbolState], value[symbolValue]);
                }
                else if (state !== REJECTED && typeof then === 'function') {
                    try {
                        then.call(value, onceWrapper(makeResolver(promise, state)), onceWrapper(makeResolver(promise, false)));
                    }
                    catch (err) {
                        onceWrapper(() => { resolvePromise(promise, false, err); })();
                    }
                }
                else {
                    promise[symbolState] = state;
                    const queue = promise[symbolValue];
                    promise[symbolValue] = value;
                    if (promise[symbolFinally] === symbolFinally) {
                        // the promise is generated by Promise.prototype.finally
                        if (state === RESOLVED) {
                            // the state is resolved, should ignore the value
                            // and use parent promise value
                            promise[symbolState] = promise[symbolParentPromiseState];
                            promise[symbolValue] = promise[symbolParentPromiseValue];
                        }
                    }
                    // record task information in value when error occurs, so we can
                    // do some additional work such as render longStackTrace
                    if (state === REJECTED && value instanceof Error) {
                        // check if longStackTraceZone is here
                        const trace = Zone.currentTask && Zone.currentTask.data &&
                            Zone.currentTask.data[creationTrace];
                        if (trace) {
                            // only keep the long stack trace into error when in longStackTraceZone
                            ObjectDefineProperty(value, CURRENT_TASK_TRACE_SYMBOL, { configurable: true, enumerable: false, writable: true, value: trace });
                        }
                    }
                    for (let i = 0; i < queue.length;) {
                        scheduleResolveOrReject(promise, queue[i++], queue[i++], queue[i++], queue[i++]);
                    }
                    if (queue.length == 0 && state == REJECTED) {
                        promise[symbolState] = REJECTED_NO_CATCH;
                        let uncaughtPromiseError = value;
                        if (!isDisableWrappingUncaughtPromiseRejection) {
                            // If disable wrapping uncaught promise reject
                            // and the rejected value is an Error object,
                            // use the value instead of wrapping it.
                            try {
                                // Here we throws a new Error to print more readable error log
                                // and if the value is not an error, zone.js builds an `Error`
                                // Object here to attach the stack information.
                                throw new Error('Uncaught (in promise): ' + readableObjectToString(value) +
                                    (value && value.stack ? '\n' + value.stack : ''));
                            }
                            catch (err) {
                                uncaughtPromiseError = err;
                            }
                        }
                        uncaughtPromiseError.rejection = value;
                        uncaughtPromiseError.promise = promise;
                        uncaughtPromiseError.zone = Zone.current;
                        uncaughtPromiseError.task = Zone.currentTask;
                        _uncaughtPromiseErrors.push(uncaughtPromiseError);
                        api.scheduleMicroTask(); // to make sure that it is running
                    }
                }
            }
            // Resolving an already resolved promise is a noop.
            return promise;
        }
        const REJECTION_HANDLED_HANDLER = __symbol__('rejectionHandledHandler');
        function clearRejectedNoCatch(promise) {
            if (promise[symbolState] === REJECTED_NO_CATCH) {
                // if the promise is rejected no catch status
                // and queue.length > 0, means there is a error handler
                // here to handle the rejected promise, we should trigger
                // windows.rejectionhandled eventHandler or nodejs rejectionHandled
                // eventHandler
                try {
                    const handler = Zone[REJECTION_HANDLED_HANDLER];
                    if (handler && typeof handler === 'function') {
                        handler.call(this, { rejection: promise[symbolValue], promise: promise });
                    }
                }
                catch (err) {
                }
                promise[symbolState] = REJECTED;
                for (let i = 0; i < _uncaughtPromiseErrors.length; i++) {
                    if (promise === _uncaughtPromiseErrors[i].promise) {
                        _uncaughtPromiseErrors.splice(i, 1);
                    }
                }
            }
        }
        function scheduleResolveOrReject(promise, zone, chainPromise, onFulfilled, onRejected) {
            clearRejectedNoCatch(promise);
            const promiseState = promise[symbolState];
            const delegate = promiseState ?
                (typeof onFulfilled === 'function') ? onFulfilled : forwardResolution :
                (typeof onRejected === 'function') ? onRejected : forwardRejection;
            zone.scheduleMicroTask(source, () => {
                try {
                    const parentPromiseValue = promise[symbolValue];
                    const isFinallyPromise = !!chainPromise && symbolFinally === chainPromise[symbolFinally];
                    if (isFinallyPromise) {
                        // if the promise is generated from finally call, keep parent promise's state and value
                        chainPromise[symbolParentPromiseValue] = parentPromiseValue;
                        chainPromise[symbolParentPromiseState] = promiseState;
                    }
                    // should not pass value to finally callback
                    const value = zone.run(delegate, undefined, isFinallyPromise && delegate !== forwardRejection && delegate !== forwardResolution ?
                        [] :
                        [parentPromiseValue]);
                    resolvePromise(chainPromise, true, value);
                }
                catch (error) {
                    // if error occurs, should always return this error
                    resolvePromise(chainPromise, false, error);
                }
            }, chainPromise);
        }
        const ZONE_AWARE_PROMISE_TO_STRING = 'function ZoneAwarePromise() { [native code] }';
        const noop = function () { };
        class ZoneAwarePromise {
            static toString() { return ZONE_AWARE_PROMISE_TO_STRING; }
            static resolve(value) {
                return resolvePromise(new this(null), RESOLVED, value);
            }
            static reject(error) {
                return resolvePromise(new this(null), REJECTED, error);
            }
            static race(values) {
                let resolve;
                let reject;
                let promise = new this((res, rej) => {
                    resolve = res;
                    reject = rej;
                });
                function onResolve(value) { resolve(value); }
                function onReject(error) { reject(error); }
                for (let value of values) {
                    if (!isThenable(value)) {
                        value = this.resolve(value);
                    }
                    value.then(onResolve, onReject);
                }
                return promise;
            }
            static all(values) { return ZoneAwarePromise.allWithCallback(values); }
            static allSettled(values) {
                const P = this && this.prototype instanceof ZoneAwarePromise ? this : ZoneAwarePromise;
                return P.allWithCallback(values, {
                    thenCallback: (value) => ({ status: 'fulfilled', value }),
                    errorCallback: (err) => ({ status: 'rejected', reason: err })
                });
            }
            static allWithCallback(values, callback) {
                let resolve;
                let reject;
                let promise = new this((res, rej) => {
                    resolve = res;
                    reject = rej;
                });
                // Start at 2 to prevent prematurely resolving if .then is called immediately.
                let unresolvedCount = 2;
                let valueIndex = 0;
                const resolvedValues = [];
                for (let value of values) {
                    if (!isThenable(value)) {
                        value = this.resolve(value);
                    }
                    const curValueIndex = valueIndex;
                    try {
                        value.then((value) => {
                            resolvedValues[curValueIndex] = callback ? callback.thenCallback(value) : value;
                            unresolvedCount--;
                            if (unresolvedCount === 0) {
                                resolve(resolvedValues);
                            }
                        }, (err) => {
                            if (!callback) {
                                reject(err);
                            }
                            else {
                                resolvedValues[curValueIndex] = callback.errorCallback(err);
                                unresolvedCount--;
                                if (unresolvedCount === 0) {
                                    resolve(resolvedValues);
                                }
                            }
                        });
                    }
                    catch (thenErr) {
                        reject(thenErr);
                    }
                    unresolvedCount++;
                    valueIndex++;
                }
                // Make the unresolvedCount zero-based again.
                unresolvedCount -= 2;
                if (unresolvedCount === 0) {
                    resolve(resolvedValues);
                }
                return promise;
            }
            constructor(executor) {
                const promise = this;
                if (!(promise instanceof ZoneAwarePromise)) {
                    throw new Error('Must be an instanceof Promise.');
                }
                promise[symbolState] = UNRESOLVED;
                promise[symbolValue] = []; // queue;
                try {
                    executor && executor(makeResolver(promise, RESOLVED), makeResolver(promise, REJECTED));
                }
                catch (error) {
                    resolvePromise(promise, false, error);
                }
            }
            get [Symbol.toStringTag]() { return 'Promise'; }
            get [Symbol.species]() { return ZoneAwarePromise; }
            then(onFulfilled, onRejected) {
                let C = this.constructor[Symbol.species];
                if (!C || typeof C !== 'function') {
                    C = this.constructor || ZoneAwarePromise;
                }
                const chainPromise = new C(noop);
                const zone = Zone.current;
                if (this[symbolState] == UNRESOLVED) {
                    this[symbolValue].push(zone, chainPromise, onFulfilled, onRejected);
                }
                else {
                    scheduleResolveOrReject(this, zone, chainPromise, onFulfilled, onRejected);
                }
                return chainPromise;
            }
            catch(onRejected) {
                return this.then(null, onRejected);
            }
            finally(onFinally) {
                let C = this.constructor[Symbol.species];
                if (!C || typeof C !== 'function') {
                    C = ZoneAwarePromise;
                }
                const chainPromise = new C(noop);
                chainPromise[symbolFinally] = symbolFinally;
                const zone = Zone.current;
                if (this[symbolState] == UNRESOLVED) {
                    this[symbolValue].push(zone, chainPromise, onFinally, onFinally);
                }
                else {
                    scheduleResolveOrReject(this, zone, chainPromise, onFinally, onFinally);
                }
                return chainPromise;
            }
        }
        // Protect against aggressive optimizers dropping seemingly unused properties.
        // E.g. Closure Compiler in advanced mode.
        ZoneAwarePromise['resolve'] = ZoneAwarePromise.resolve;
        ZoneAwarePromise['reject'] = ZoneAwarePromise.reject;
        ZoneAwarePromise['race'] = ZoneAwarePromise.race;
        ZoneAwarePromise['all'] = ZoneAwarePromise.all;
        const NativePromise = global[symbolPromise] = global['Promise'];
        const ZONE_AWARE_PROMISE = Zone.__symbol__('ZoneAwarePromise');
        let desc = ObjectGetOwnPropertyDescriptor(global, 'Promise');
        if (!desc || desc.configurable) {
            desc && delete desc.writable;
            desc && delete desc.value;
            if (!desc) {
                desc = { configurable: true, enumerable: true };
            }
            desc.get = function () {
                // if we already set ZoneAwarePromise, use patched one
                // otherwise return native one.
                return global[ZONE_AWARE_PROMISE] ? global[ZONE_AWARE_PROMISE] : global[symbolPromise];
            };
            desc.set = function (NewNativePromise) {
                if (NewNativePromise === ZoneAwarePromise) {
                    // if the NewNativePromise is ZoneAwarePromise
                    // save to global
                    global[ZONE_AWARE_PROMISE] = NewNativePromise;
                }
                else {
                    // if the NewNativePromise is not ZoneAwarePromise
                    // for example: after load zone.js, some library just
                    // set es6-promise to global, if we set it to global
                    // directly, assertZonePatched will fail and angular
                    // will not loaded, so we just set the NewNativePromise
                    // to global[symbolPromise], so the result is just like
                    // we load ES6 Promise before zone.js
                    global[symbolPromise] = NewNativePromise;
                    if (!NewNativePromise.prototype[symbolThen]) {
                        patchThen(NewNativePromise);
                    }
                    api.setNativePromise(NewNativePromise);
                }
            };
            ObjectDefineProperty(global, 'Promise', desc);
        }
        global['Promise'] = ZoneAwarePromise;
        const symbolThenPatched = __symbol__('thenPatched');
        function patchThen(Ctor) {
            const proto = Ctor.prototype;
            const prop = ObjectGetOwnPropertyDescriptor(proto, 'then');
            if (prop && (prop.writable === false || !prop.configurable)) {
                // check Ctor.prototype.then propertyDescriptor is writable or not
                // in meteor env, writable is false, we should ignore such case
                return;
            }
            const originalThen = proto.then;
            // Keep a reference to the original method.
            proto[symbolThen] = originalThen;
            Ctor.prototype.then = function (onResolve, onReject) {
                const wrapped = new ZoneAwarePromise((resolve, reject) => { originalThen.call(this, resolve, reject); });
                return wrapped.then(onResolve, onReject);
            };
            Ctor[symbolThenPatched] = true;
        }
        api.patchThen = patchThen;
        function zoneify(fn) {
            return function () {
                let resultPromise = fn.apply(this, arguments);
                if (resultPromise instanceof ZoneAwarePromise) {
                    return resultPromise;
                }
                let ctor = resultPromise.constructor;
                if (!ctor[symbolThenPatched]) {
                    patchThen(ctor);
                }
                return resultPromise;
            };
        }
        if (NativePromise) {
            patchThen(NativePromise);
            const fetch = global['fetch'];
            if (typeof fetch == 'function') {
                global[api.symbol('fetch')] = fetch;
                global['fetch'] = zoneify(fetch);
            }
        }
        // This is not part of public API, but it is useful for tests, so we expose it.
        Promise[Zone.__symbol__('uncaughtPromiseErrors')] = _uncaughtPromiseErrors;
        return ZoneAwarePromise;
    });

    /**
     * @license
     * Copyright Google Inc. All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
    /**
     * Suppress closure compiler errors about unknown 'Zone' variable
     * @fileoverview
     * @suppress {undefinedVars,globalThis,missingRequire}
     */
    /// <reference types="node"/>
    // issue #989, to reduce bundle size, use short name
    /** Object.getOwnPropertyDescriptor */
    const ObjectGetOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;
    /** Object.defineProperty */
    const ObjectDefineProperty = Object.defineProperty;
    /** Object.getPrototypeOf */
    const ObjectGetPrototypeOf = Object.getPrototypeOf;
    /** Object.create */
    const ObjectCreate = Object.create;
    /** Array.prototype.slice */
    const ArraySlice = Array.prototype.slice;
    /** addEventListener string const */
    const ADD_EVENT_LISTENER_STR = 'addEventListener';
    /** removeEventListener string const */
    const REMOVE_EVENT_LISTENER_STR = 'removeEventListener';
    /** zoneSymbol addEventListener */
    const ZONE_SYMBOL_ADD_EVENT_LISTENER = Zone.__symbol__(ADD_EVENT_LISTENER_STR);
    /** zoneSymbol removeEventListener */
    const ZONE_SYMBOL_REMOVE_EVENT_LISTENER = Zone.__symbol__(REMOVE_EVENT_LISTENER_STR);
    /** true string const */
    const TRUE_STR = 'true';
    /** false string const */
    const FALSE_STR = 'false';
    /** Zone symbol prefix string const. */
    const ZONE_SYMBOL_PREFIX = Zone.__symbol__('');
    function wrapWithCurrentZone(callback, source) {
        return Zone.current.wrap(callback, source);
    }
    function scheduleMacroTaskWithCurrentZone(source, callback, data, customSchedule, customCancel) {
        return Zone.current.scheduleMacroTask(source, callback, data, customSchedule, customCancel);
    }
    const zoneSymbol = Zone.__symbol__;
    const isWindowExists = typeof window !== 'undefined';
    const internalWindow = isWindowExists ? window : undefined;
    const _global = isWindowExists && internalWindow || typeof self === 'object' && self || global;
    const REMOVE_ATTRIBUTE = 'removeAttribute';
    const NULL_ON_PROP_VALUE = [null];
    function bindArguments(args, source) {
        for (let i = args.length - 1; i >= 0; i--) {
            if (typeof args[i] === 'function') {
                args[i] = wrapWithCurrentZone(args[i], source + '_' + i);
            }
        }
        return args;
    }
    function patchPrototype(prototype, fnNames) {
        const source = prototype.constructor['name'];
        for (let i = 0; i < fnNames.length; i++) {
            const name = fnNames[i];
            const delegate = prototype[name];
            if (delegate) {
                const prototypeDesc = ObjectGetOwnPropertyDescriptor(prototype, name);
                if (!isPropertyWritable(prototypeDesc)) {
                    continue;
                }
                prototype[name] = ((delegate) => {
                    const patched = function () {
                        return delegate.apply(this, bindArguments(arguments, source + '.' + name));
                    };
                    attachOriginToPatched(patched, delegate);
                    return patched;
                })(delegate);
            }
        }
    }
    function isPropertyWritable(propertyDesc) {
        if (!propertyDesc) {
            return true;
        }
        if (propertyDesc.writable === false) {
            return false;
        }
        return !(typeof propertyDesc.get === 'function' && typeof propertyDesc.set === 'undefined');
    }
    const isWebWorker = (typeof WorkerGlobalScope !== 'undefined' && self instanceof WorkerGlobalScope);
    // Make sure to access `process` through `_global` so that WebPack does not accidentally browserify
    // this code.
    const isNode = (!('nw' in _global) && typeof _global.process !== 'undefined' &&
        {}.toString.call(_global.process) === '[object process]');
    const isBrowser = !isNode && !isWebWorker && !!(isWindowExists && internalWindow['HTMLElement']);
    // we are in electron of nw, so we are both browser and nodejs
    // Make sure to access `process` through `_global` so that WebPack does not accidentally browserify
    // this code.
    const isMix = typeof _global.process !== 'undefined' &&
        {}.toString.call(_global.process) === '[object process]' && !isWebWorker &&
        !!(isWindowExists && internalWindow['HTMLElement']);
    const zoneSymbolEventNames = {};
    const wrapFn = function (event) {
        // https://github.com/angular/zone.js/issues/911, in IE, sometimes
        // event will be undefined, so we need to use window.event
        event = event || _global.event;
        if (!event) {
            return;
        }
        let eventNameSymbol = zoneSymbolEventNames[event.type];
        if (!eventNameSymbol) {
            eventNameSymbol = zoneSymbolEventNames[event.type] = zoneSymbol('ON_PROPERTY' + event.type);
        }
        const target = this || event.target || _global;
        const listener = target[eventNameSymbol];
        let result;
        if (isBrowser && target === internalWindow && event.type === 'error') {
            // window.onerror have different signiture
            // https://developer.mozilla.org/en-US/docs/Web/API/GlobalEventHandlers/onerror#window.onerror
            // and onerror callback will prevent default when callback return true
            const errorEvent = event;
            result = listener &&
                listener.call(this, errorEvent.message, errorEvent.filename, errorEvent.lineno, errorEvent.colno, errorEvent.error);
            if (result === true) {
                event.preventDefault();
            }
        }
        else {
            result = listener && listener.apply(this, arguments);
            if (result != undefined && !result) {
                event.preventDefault();
            }
        }
        return result;
    };
    function patchProperty(obj, prop, prototype) {
        let desc = ObjectGetOwnPropertyDescriptor(obj, prop);
        if (!desc && prototype) {
            // when patch window object, use prototype to check prop exist or not
            const prototypeDesc = ObjectGetOwnPropertyDescriptor(prototype, prop);
            if (prototypeDesc) {
                desc = { enumerable: true, configurable: true };
            }
        }
        // if the descriptor not exists or is not configurable
        // just return
        if (!desc || !desc.configurable) {
            return;
        }
        const onPropPatchedSymbol = zoneSymbol('on' + prop + 'patched');
        if (obj.hasOwnProperty(onPropPatchedSymbol) && obj[onPropPatchedSymbol]) {
            return;
        }
        // A property descriptor cannot have getter/setter and be writable
        // deleting the writable and value properties avoids this error:
        //
        // TypeError: property descriptors must not specify a value or be writable when a
        // getter or setter has been specified
        delete desc.writable;
        delete desc.value;
        const originalDescGet = desc.get;
        const originalDescSet = desc.set;
        // substr(2) cuz 'onclick' -> 'click', etc
        const eventName = prop.substr(2);
        let eventNameSymbol = zoneSymbolEventNames[eventName];
        if (!eventNameSymbol) {
            eventNameSymbol = zoneSymbolEventNames[eventName] = zoneSymbol('ON_PROPERTY' + eventName);
        }
        desc.set = function (newValue) {
            // in some of windows's onproperty callback, this is undefined
            // so we need to check it
            let target = this;
            if (!target && obj === _global) {
                target = _global;
            }
            if (!target) {
                return;
            }
            let previousValue = target[eventNameSymbol];
            if (previousValue) {
                target.removeEventListener(eventName, wrapFn);
            }
            // issue #978, when onload handler was added before loading zone.js
            // we should remove it with originalDescSet
            if (originalDescSet) {
                originalDescSet.apply(target, NULL_ON_PROP_VALUE);
            }
            if (typeof newValue === 'function') {
                target[eventNameSymbol] = newValue;
                target.addEventListener(eventName, wrapFn, false);
            }
            else {
                target[eventNameSymbol] = null;
            }
        };
        // The getter would return undefined for unassigned properties but the default value of an
        // unassigned property is null
        desc.get = function () {
            // in some of windows's onproperty callback, this is undefined
            // so we need to check it
            let target = this;
            if (!target && obj === _global) {
                target = _global;
            }
            if (!target) {
                return null;
            }
            const listener = target[eventNameSymbol];
            if (listener) {
                return listener;
            }
            else if (originalDescGet) {
                // result will be null when use inline event attribute,
                // such as <button onclick="func();">OK</button>
                // because the onclick function is internal raw uncompiled handler
                // the onclick will be evaluated when first time event was triggered or
                // the property is accessed, https://github.com/angular/zone.js/issues/525
                // so we should use original native get to retrieve the handler
                let value = originalDescGet && originalDescGet.call(this);
                if (value) {
                    desc.set.call(this, value);
                    if (typeof target[REMOVE_ATTRIBUTE] === 'function') {
                        target.removeAttribute(prop);
                    }
                    return value;
                }
            }
            return null;
        };
        ObjectDefineProperty(obj, prop, desc);
        obj[onPropPatchedSymbol] = true;
    }
    function patchOnProperties(obj, properties, prototype) {
        if (properties) {
            for (let i = 0; i < properties.length; i++) {
                patchProperty(obj, 'on' + properties[i], prototype);
            }
        }
        else {
            const onProperties = [];
            for (const prop in obj) {
                if (prop.substr(0, 2) == 'on') {
                    onProperties.push(prop);
                }
            }
            for (let j = 0; j < onProperties.length; j++) {
                patchProperty(obj, onProperties[j], prototype);
            }
        }
    }
    const originalInstanceKey = zoneSymbol('originalInstance');
    // wrap some native API on `window`
    function patchClass(className) {
        const OriginalClass = _global[className];
        if (!OriginalClass)
            return;
        // keep original class in global
        _global[zoneSymbol(className)] = OriginalClass;
        _global[className] = function () {
            const a = bindArguments(arguments, className);
            switch (a.length) {
                case 0:
                    this[originalInstanceKey] = new OriginalClass();
                    break;
                case 1:
                    this[originalInstanceKey] = new OriginalClass(a[0]);
                    break;
                case 2:
                    this[originalInstanceKey] = new OriginalClass(a[0], a[1]);
                    break;
                case 3:
                    this[originalInstanceKey] = new OriginalClass(a[0], a[1], a[2]);
                    break;
                case 4:
                    this[originalInstanceKey] = new OriginalClass(a[0], a[1], a[2], a[3]);
                    break;
                default:
                    throw new Error('Arg list too long.');
            }
        };
        // attach original delegate to patched function
        attachOriginToPatched(_global[className], OriginalClass);
        const instance = new OriginalClass(function () { });
        let prop;
        for (prop in instance) {
            // https://bugs.webkit.org/show_bug.cgi?id=44721
            if (className === 'XMLHttpRequest' && prop === 'responseBlob')
                continue;
            (function (prop) {
                if (typeof instance[prop] === 'function') {
                    _global[className].prototype[prop] = function () {
                        return this[originalInstanceKey][prop].apply(this[originalInstanceKey], arguments);
                    };
                }
                else {
                    ObjectDefineProperty(_global[className].prototype, prop, {
                        set: function (fn) {
                            if (typeof fn === 'function') {
                                this[originalInstanceKey][prop] = wrapWithCurrentZone(fn, className + '.' + prop);
                                // keep callback in wrapped function so we can
                                // use it in Function.prototype.toString to return
                                // the native one.
                                attachOriginToPatched(this[originalInstanceKey][prop], fn);
                            }
                            else {
                                this[originalInstanceKey][prop] = fn;
                            }
                        },
                        get: function () { return this[originalInstanceKey][prop]; }
                    });
                }
            }(prop));
        }
        for (prop in OriginalClass) {
            if (prop !== 'prototype' && OriginalClass.hasOwnProperty(prop)) {
                _global[className][prop] = OriginalClass[prop];
            }
        }
    }
    function copySymbolProperties(src, dest) {
        if (typeof Object.getOwnPropertySymbols !== 'function') {
            return;
        }
        const symbols = Object.getOwnPropertySymbols(src);
        symbols.forEach((symbol) => {
            const desc = Object.getOwnPropertyDescriptor(src, symbol);
            Object.defineProperty(dest, symbol, {
                get: function () { return src[symbol]; },
                set: function (value) {
                    if (desc && (!desc.writable || typeof desc.set !== 'function')) {
                        // if src[symbol] is not writable or not have a setter, just return
                        return;
                    }
                    src[symbol] = value;
                },
                enumerable: desc ? desc.enumerable : true,
                configurable: desc ? desc.configurable : true
            });
        });
    }
    let shouldCopySymbolProperties = false;
    function patchMethod(target, name, patchFn) {
        let proto = target;
        while (proto && !proto.hasOwnProperty(name)) {
            proto = ObjectGetPrototypeOf(proto);
        }
        if (!proto && target[name]) {
            // somehow we did not find it, but we can see it. This happens on IE for Window properties.
            proto = target;
        }
        const delegateName = zoneSymbol(name);
        let delegate = null;
        if (proto && !(delegate = proto[delegateName])) {
            delegate = proto[delegateName] = proto[name];
            // check whether proto[name] is writable
            // some property is readonly in safari, such as HtmlCanvasElement.prototype.toBlob
            const desc = proto && ObjectGetOwnPropertyDescriptor(proto, name);
            if (isPropertyWritable(desc)) {
                const patchDelegate = patchFn(delegate, delegateName, name);
                proto[name] = function () { return patchDelegate(this, arguments); };
                attachOriginToPatched(proto[name], delegate);
                if (shouldCopySymbolProperties) {
                    copySymbolProperties(delegate, proto[name]);
                }
            }
        }
        return delegate;
    }
    // TODO: @JiaLiPassion, support cancel task later if necessary
    function patchMacroTask(obj, funcName, metaCreator) {
        let setNative = null;
        function scheduleTask(task) {
            const data = task.data;
            data.args[data.cbIdx] = function () { task.invoke.apply(this, arguments); };
            setNative.apply(data.target, data.args);
            return task;
        }
        setNative = patchMethod(obj, funcName, (delegate) => function (self, args) {
            const meta = metaCreator(self, args);
            if (meta.cbIdx >= 0 && typeof args[meta.cbIdx] === 'function') {
                return scheduleMacroTaskWithCurrentZone(meta.name, args[meta.cbIdx], meta, scheduleTask);
            }
            else {
                // cause an error by calling it directly.
                return delegate.apply(self, args);
            }
        });
    }
    function attachOriginToPatched(patched, original) {
        patched[zoneSymbol('OriginalDelegate')] = original;
    }
    let isDetectedIEOrEdge = false;
    let ieOrEdge = false;
    function isIE() {
        try {
            const ua = internalWindow.navigator.userAgent;
            if (ua.indexOf('MSIE ') !== -1 || ua.indexOf('Trident/') !== -1) {
                return true;
            }
        }
        catch (error) {
        }
        return false;
    }
    function isIEOrEdge() {
        if (isDetectedIEOrEdge) {
            return ieOrEdge;
        }
        isDetectedIEOrEdge = true;
        try {
            const ua = internalWindow.navigator.userAgent;
            if (ua.indexOf('MSIE ') !== -1 || ua.indexOf('Trident/') !== -1 || ua.indexOf('Edge/') !== -1) {
                ieOrEdge = true;
            }
        }
        catch (error) {
        }
        return ieOrEdge;
    }

    /**
     * @license
     * Copyright Google Inc. All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
    // override Function.prototype.toString to make zone.js patched function
    // look like native function
    Zone.__load_patch('toString', (global) => {
        // patch Func.prototype.toString to let them look like native
        const originalFunctionToString = Function.prototype.toString;
        const ORIGINAL_DELEGATE_SYMBOL = zoneSymbol('OriginalDelegate');
        const PROMISE_SYMBOL = zoneSymbol('Promise');
        const ERROR_SYMBOL = zoneSymbol('Error');
        const newFunctionToString = function toString() {
            if (typeof this === 'function') {
                const originalDelegate = this[ORIGINAL_DELEGATE_SYMBOL];
                if (originalDelegate) {
                    if (typeof originalDelegate === 'function') {
                        return originalFunctionToString.call(originalDelegate);
                    }
                    else {
                        return Object.prototype.toString.call(originalDelegate);
                    }
                }
                if (this === Promise) {
                    const nativePromise = global[PROMISE_SYMBOL];
                    if (nativePromise) {
                        return originalFunctionToString.call(nativePromise);
                    }
                }
                if (this === Error) {
                    const nativeError = global[ERROR_SYMBOL];
                    if (nativeError) {
                        return originalFunctionToString.call(nativeError);
                    }
                }
            }
            return originalFunctionToString.call(this);
        };
        newFunctionToString[ORIGINAL_DELEGATE_SYMBOL] = originalFunctionToString;
        Function.prototype.toString = newFunctionToString;
        // patch Object.prototype.toString to let them look like native
        const originalObjectToString = Object.prototype.toString;
        const PROMISE_OBJECT_TO_STRING = '[object Promise]';
        Object.prototype.toString = function () {
            if (this instanceof Promise) {
                return PROMISE_OBJECT_TO_STRING;
            }
            return originalObjectToString.call(this);
        };
    });

    /**
     * @license
     * Copyright Google Inc. All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
    let passiveSupported = false;
    if (typeof window !== 'undefined') {
        try {
            const options = Object.defineProperty({}, 'passive', { get: function () { passiveSupported = true; } });
            window.addEventListener('test', options, options);
            window.removeEventListener('test', options, options);
        }
        catch (err) {
            passiveSupported = false;
        }
    }
    // an identifier to tell ZoneTask do not create a new invoke closure
    const OPTIMIZED_ZONE_EVENT_TASK_DATA = {
        useG: true
    };
    const zoneSymbolEventNames$1 = {};
    const globalSources = {};
    const EVENT_NAME_SYMBOL_REGX = new RegExp('^' + ZONE_SYMBOL_PREFIX + '(\\w+)(true|false)$');
    const IMMEDIATE_PROPAGATION_SYMBOL = zoneSymbol('propagationStopped');
    function prepareEventNames(eventName, eventNameToString) {
        const falseEventName = (eventNameToString ? eventNameToString(eventName) : eventName) + FALSE_STR;
        const trueEventName = (eventNameToString ? eventNameToString(eventName) : eventName) + TRUE_STR;
        const symbol = ZONE_SYMBOL_PREFIX + falseEventName;
        const symbolCapture = ZONE_SYMBOL_PREFIX + trueEventName;
        zoneSymbolEventNames$1[eventName] = {};
        zoneSymbolEventNames$1[eventName][FALSE_STR] = symbol;
        zoneSymbolEventNames$1[eventName][TRUE_STR] = symbolCapture;
    }
    function patchEventTarget(_global, apis, patchOptions) {
        const ADD_EVENT_LISTENER = (patchOptions && patchOptions.add) || ADD_EVENT_LISTENER_STR;
        const REMOVE_EVENT_LISTENER = (patchOptions && patchOptions.rm) || REMOVE_EVENT_LISTENER_STR;
        const LISTENERS_EVENT_LISTENER = (patchOptions && patchOptions.listeners) || 'eventListeners';
        const REMOVE_ALL_LISTENERS_EVENT_LISTENER = (patchOptions && patchOptions.rmAll) || 'removeAllListeners';
        const zoneSymbolAddEventListener = zoneSymbol(ADD_EVENT_LISTENER);
        const ADD_EVENT_LISTENER_SOURCE = '.' + ADD_EVENT_LISTENER + ':';
        const PREPEND_EVENT_LISTENER = 'prependListener';
        const PREPEND_EVENT_LISTENER_SOURCE = '.' + PREPEND_EVENT_LISTENER + ':';
        const invokeTask = function (task, target, event) {
            // for better performance, check isRemoved which is set
            // by removeEventListener
            if (task.isRemoved) {
                return;
            }
            const delegate = task.callback;
            if (typeof delegate === 'object' && delegate.handleEvent) {
                // create the bind version of handleEvent when invoke
                task.callback = (event) => delegate.handleEvent(event);
                task.originalDelegate = delegate;
            }
            // invoke static task.invoke
            task.invoke(task, target, [event]);
            const options = task.options;
            if (options && typeof options === 'object' && options.once) {
                // if options.once is true, after invoke once remove listener here
                // only browser need to do this, nodejs eventEmitter will cal removeListener
                // inside EventEmitter.once
                const delegate = task.originalDelegate ? task.originalDelegate : task.callback;
                target[REMOVE_EVENT_LISTENER].call(target, event.type, delegate, options);
            }
        };
        // global shared zoneAwareCallback to handle all event callback with capture = false
        const globalZoneAwareCallback = function (event) {
            // https://github.com/angular/zone.js/issues/911, in IE, sometimes
            // event will be undefined, so we need to use window.event
            event = event || _global.event;
            if (!event) {
                return;
            }
            // event.target is needed for Samsung TV and SourceBuffer
            // || global is needed https://github.com/angular/zone.js/issues/190
            const target = this || event.target || _global;
            const tasks = target[zoneSymbolEventNames$1[event.type][FALSE_STR]];
            if (tasks) {
                // invoke all tasks which attached to current target with given event.type and capture = false
                // for performance concern, if task.length === 1, just invoke
                if (tasks.length === 1) {
                    invokeTask(tasks[0], target, event);
                }
                else {
                    // https://github.com/angular/zone.js/issues/836
                    // copy the tasks array before invoke, to avoid
                    // the callback will remove itself or other listener
                    const copyTasks = tasks.slice();
                    for (let i = 0; i < copyTasks.length; i++) {
                        if (event && event[IMMEDIATE_PROPAGATION_SYMBOL] === true) {
                            break;
                        }
                        invokeTask(copyTasks[i], target, event);
                    }
                }
            }
        };
        // global shared zoneAwareCallback to handle all event callback with capture = true
        const globalZoneAwareCaptureCallback = function (event) {
            // https://github.com/angular/zone.js/issues/911, in IE, sometimes
            // event will be undefined, so we need to use window.event
            event = event || _global.event;
            if (!event) {
                return;
            }
            // event.target is needed for Samsung TV and SourceBuffer
            // || global is needed https://github.com/angular/zone.js/issues/190
            const target = this || event.target || _global;
            const tasks = target[zoneSymbolEventNames$1[event.type][TRUE_STR]];
            if (tasks) {
                // invoke all tasks which attached to current target with given event.type and capture = false
                // for performance concern, if task.length === 1, just invoke
                if (tasks.length === 1) {
                    invokeTask(tasks[0], target, event);
                }
                else {
                    // https://github.com/angular/zone.js/issues/836
                    // copy the tasks array before invoke, to avoid
                    // the callback will remove itself or other listener
                    const copyTasks = tasks.slice();
                    for (let i = 0; i < copyTasks.length; i++) {
                        if (event && event[IMMEDIATE_PROPAGATION_SYMBOL] === true) {
                            break;
                        }
                        invokeTask(copyTasks[i], target, event);
                    }
                }
            }
        };
        function patchEventTargetMethods(obj, patchOptions) {
            if (!obj) {
                return false;
            }
            let useGlobalCallback = true;
            if (patchOptions && patchOptions.useG !== undefined) {
                useGlobalCallback = patchOptions.useG;
            }
            const validateHandler = patchOptions && patchOptions.vh;
            let checkDuplicate = true;
            if (patchOptions && patchOptions.chkDup !== undefined) {
                checkDuplicate = patchOptions.chkDup;
            }
            let returnTarget = false;
            if (patchOptions && patchOptions.rt !== undefined) {
                returnTarget = patchOptions.rt;
            }
            let proto = obj;
            while (proto && !proto.hasOwnProperty(ADD_EVENT_LISTENER)) {
                proto = ObjectGetPrototypeOf(proto);
            }
            if (!proto && obj[ADD_EVENT_LISTENER]) {
                // somehow we did not find it, but we can see it. This happens on IE for Window properties.
                proto = obj;
            }
            if (!proto) {
                return false;
            }
            if (proto[zoneSymbolAddEventListener]) {
                return false;
            }
            const eventNameToString = patchOptions && patchOptions.eventNameToString;
            // a shared global taskData to pass data for scheduleEventTask
            // so we do not need to create a new object just for pass some data
            const taskData = {};
            const nativeAddEventListener = proto[zoneSymbolAddEventListener] = proto[ADD_EVENT_LISTENER];
            const nativeRemoveEventListener = proto[zoneSymbol(REMOVE_EVENT_LISTENER)] =
                proto[REMOVE_EVENT_LISTENER];
            const nativeListeners = proto[zoneSymbol(LISTENERS_EVENT_LISTENER)] =
                proto[LISTENERS_EVENT_LISTENER];
            const nativeRemoveAllListeners = proto[zoneSymbol(REMOVE_ALL_LISTENERS_EVENT_LISTENER)] =
                proto[REMOVE_ALL_LISTENERS_EVENT_LISTENER];
            let nativePrependEventListener;
            if (patchOptions && patchOptions.prepend) {
                nativePrependEventListener = proto[zoneSymbol(patchOptions.prepend)] =
                    proto[patchOptions.prepend];
            }
            /**
             * This util function will build an option object with passive option
             * to handle all possible input from the user.
             */
            function buildEventListenerOptions(options, passive) {
                if (!passiveSupported && typeof options === 'object' && options) {
                    // doesn't support passive but user want to pass an object as options.
                    // this will not work on some old browser, so we just pass a boolean
                    // as useCapture parameter
                    return !!options.capture;
                }
                if (!passiveSupported || !passive) {
                    return options;
                }
                if (typeof options === 'boolean') {
                    return { capture: options, passive: true };
                }
                if (!options) {
                    return { passive: true };
                }
                if (typeof options === 'object' && options.passive !== false) {
                    return Object.assign(Object.assign({}, options), { passive: true });
                }
                return options;
            }
            const customScheduleGlobal = function (task) {
                // if there is already a task for the eventName + capture,
                // just return, because we use the shared globalZoneAwareCallback here.
                if (taskData.isExisting) {
                    return;
                }
                return nativeAddEventListener.call(taskData.target, taskData.eventName, taskData.capture ? globalZoneAwareCaptureCallback : globalZoneAwareCallback, taskData.options);
            };
            const customCancelGlobal = function (task) {
                // if task is not marked as isRemoved, this call is directly
                // from Zone.prototype.cancelTask, we should remove the task
                // from tasksList of target first
                if (!task.isRemoved) {
                    const symbolEventNames = zoneSymbolEventNames$1[task.eventName];
                    let symbolEventName;
                    if (symbolEventNames) {
                        symbolEventName = symbolEventNames[task.capture ? TRUE_STR : FALSE_STR];
                    }
                    const existingTasks = symbolEventName && task.target[symbolEventName];
                    if (existingTasks) {
                        for (let i = 0; i < existingTasks.length; i++) {
                            const existingTask = existingTasks[i];
                            if (existingTask === task) {
                                existingTasks.splice(i, 1);
                                // set isRemoved to data for faster invokeTask check
                                task.isRemoved = true;
                                if (existingTasks.length === 0) {
                                    // all tasks for the eventName + capture have gone,
                                    // remove globalZoneAwareCallback and remove the task cache from target
                                    task.allRemoved = true;
                                    task.target[symbolEventName] = null;
                                }
                                break;
                            }
                        }
                    }
                }
                // if all tasks for the eventName + capture have gone,
                // we will really remove the global event callback,
                // if not, return
                if (!task.allRemoved) {
                    return;
                }
                return nativeRemoveEventListener.call(task.target, task.eventName, task.capture ? globalZoneAwareCaptureCallback : globalZoneAwareCallback, task.options);
            };
            const customScheduleNonGlobal = function (task) {
                return nativeAddEventListener.call(taskData.target, taskData.eventName, task.invoke, taskData.options);
            };
            const customSchedulePrepend = function (task) {
                return nativePrependEventListener.call(taskData.target, taskData.eventName, task.invoke, taskData.options);
            };
            const customCancelNonGlobal = function (task) {
                return nativeRemoveEventListener.call(task.target, task.eventName, task.invoke, task.options);
            };
            const customSchedule = useGlobalCallback ? customScheduleGlobal : customScheduleNonGlobal;
            const customCancel = useGlobalCallback ? customCancelGlobal : customCancelNonGlobal;
            const compareTaskCallbackVsDelegate = function (task, delegate) {
                const typeOfDelegate = typeof delegate;
                return (typeOfDelegate === 'function' && task.callback === delegate) ||
                    (typeOfDelegate === 'object' && task.originalDelegate === delegate);
            };
            const compare = (patchOptions && patchOptions.diff) ? patchOptions.diff : compareTaskCallbackVsDelegate;
            const blackListedEvents = Zone[zoneSymbol('BLACK_LISTED_EVENTS')];
            const passiveEvents = _global[zoneSymbol('PASSIVE_EVENTS')];
            const makeAddListener = function (nativeListener, addSource, customScheduleFn, customCancelFn, returnTarget = false, prepend = false) {
                return function () {
                    const target = this || _global;
                    let eventName = arguments[0];
                    if (patchOptions && patchOptions.transferEventName) {
                        eventName = patchOptions.transferEventName(eventName);
                    }
                    let delegate = arguments[1];
                    if (!delegate) {
                        return nativeListener.apply(this, arguments);
                    }
                    if (isNode && eventName === 'uncaughtException') {
                        // don't patch uncaughtException of nodejs to prevent endless loop
                        return nativeListener.apply(this, arguments);
                    }
                    // don't create the bind delegate function for handleEvent
                    // case here to improve addEventListener performance
                    // we will create the bind delegate when invoke
                    let isHandleEvent = false;
                    if (typeof delegate !== 'function') {
                        if (!delegate.handleEvent) {
                            return nativeListener.apply(this, arguments);
                        }
                        isHandleEvent = true;
                    }
                    if (validateHandler && !validateHandler(nativeListener, delegate, target, arguments)) {
                        return;
                    }
                    const passive = passiveSupported && !!passiveEvents && passiveEvents.indexOf(eventName) !== -1;
                    const options = buildEventListenerOptions(arguments[2], passive);
                    if (blackListedEvents) {
                        // check black list
                        for (let i = 0; i < blackListedEvents.length; i++) {
                            if (eventName === blackListedEvents[i]) {
                                if (passive) {
                                    return nativeListener.call(target, eventName, delegate, options);
                                }
                                else {
                                    return nativeListener.apply(this, arguments);
                                }
                            }
                        }
                    }
                    const capture = !options ? false : typeof options === 'boolean' ? true : options.capture;
                    const once = options && typeof options === 'object' ? options.once : false;
                    const zone = Zone.current;
                    let symbolEventNames = zoneSymbolEventNames$1[eventName];
                    if (!symbolEventNames) {
                        prepareEventNames(eventName, eventNameToString);
                        symbolEventNames = zoneSymbolEventNames$1[eventName];
                    }
                    const symbolEventName = symbolEventNames[capture ? TRUE_STR : FALSE_STR];
                    let existingTasks = target[symbolEventName];
                    let isExisting = false;
                    if (existingTasks) {
                        // already have task registered
                        isExisting = true;
                        if (checkDuplicate) {
                            for (let i = 0; i < existingTasks.length; i++) {
                                if (compare(existingTasks[i], delegate)) {
                                    // same callback, same capture, same event name, just return
                                    return;
                                }
                            }
                        }
                    }
                    else {
                        existingTasks = target[symbolEventName] = [];
                    }
                    let source;
                    const constructorName = target.constructor['name'];
                    const targetSource = globalSources[constructorName];
                    if (targetSource) {
                        source = targetSource[eventName];
                    }
                    if (!source) {
                        source = constructorName + addSource +
                            (eventNameToString ? eventNameToString(eventName) : eventName);
                    }
                    // do not create a new object as task.data to pass those things
                    // just use the global shared one
                    taskData.options = options;
                    if (once) {
                        // if addEventListener with once options, we don't pass it to
                        // native addEventListener, instead we keep the once setting
                        // and handle ourselves.
                        taskData.options.once = false;
                    }
                    taskData.target = target;
                    taskData.capture = capture;
                    taskData.eventName = eventName;
                    taskData.isExisting = isExisting;
                    const data = useGlobalCallback ? OPTIMIZED_ZONE_EVENT_TASK_DATA : undefined;
                    // keep taskData into data to allow onScheduleEventTask to access the task information
                    if (data) {
                        data.taskData = taskData;
                    }
                    const task = zone.scheduleEventTask(source, delegate, data, customScheduleFn, customCancelFn);
                    // should clear taskData.target to avoid memory leak
                    // issue, https://github.com/angular/angular/issues/20442
                    taskData.target = null;
                    // need to clear up taskData because it is a global object
                    if (data) {
                        data.taskData = null;
                    }
                    // have to save those information to task in case
                    // application may call task.zone.cancelTask() directly
                    if (once) {
                        options.once = true;
                    }
                    if (!(!passiveSupported && typeof task.options === 'boolean')) {
                        // if not support passive, and we pass an option object
                        // to addEventListener, we should save the options to task
                        task.options = options;
                    }
                    task.target = target;
                    task.capture = capture;
                    task.eventName = eventName;
                    if (isHandleEvent) {
                        // save original delegate for compare to check duplicate
                        task.originalDelegate = delegate;
                    }
                    if (!prepend) {
                        existingTasks.push(task);
                    }
                    else {
                        existingTasks.unshift(task);
                    }
                    if (returnTarget) {
                        return target;
                    }
                };
            };
            proto[ADD_EVENT_LISTENER] = makeAddListener(nativeAddEventListener, ADD_EVENT_LISTENER_SOURCE, customSchedule, customCancel, returnTarget);
            if (nativePrependEventListener) {
                proto[PREPEND_EVENT_LISTENER] = makeAddListener(nativePrependEventListener, PREPEND_EVENT_LISTENER_SOURCE, customSchedulePrepend, customCancel, returnTarget, true);
            }
            proto[REMOVE_EVENT_LISTENER] = function () {
                const target = this || _global;
                let eventName = arguments[0];
                if (patchOptions && patchOptions.transferEventName) {
                    eventName = patchOptions.transferEventName(eventName);
                }
                const options = arguments[2];
                const capture = !options ? false : typeof options === 'boolean' ? true : options.capture;
                const delegate = arguments[1];
                if (!delegate) {
                    return nativeRemoveEventListener.apply(this, arguments);
                }
                if (validateHandler &&
                    !validateHandler(nativeRemoveEventListener, delegate, target, arguments)) {
                    return;
                }
                const symbolEventNames = zoneSymbolEventNames$1[eventName];
                let symbolEventName;
                if (symbolEventNames) {
                    symbolEventName = symbolEventNames[capture ? TRUE_STR : FALSE_STR];
                }
                const existingTasks = symbolEventName && target[symbolEventName];
                if (existingTasks) {
                    for (let i = 0; i < existingTasks.length; i++) {
                        const existingTask = existingTasks[i];
                        if (compare(existingTask, delegate)) {
                            existingTasks.splice(i, 1);
                            // set isRemoved to data for faster invokeTask check
                            existingTask.isRemoved = true;
                            if (existingTasks.length === 0) {
                                // all tasks for the eventName + capture have gone,
                                // remove globalZoneAwareCallback and remove the task cache from target
                                existingTask.allRemoved = true;
                                target[symbolEventName] = null;
                                // in the target, we have an event listener which is added by on_property
                                // such as target.onclick = function() {}, so we need to clear this internal
                                // property too if all delegates all removed
                                if (typeof eventName === 'string') {
                                    const onPropertySymbol = ZONE_SYMBOL_PREFIX + 'ON_PROPERTY' + eventName;
                                    target[onPropertySymbol] = null;
                                }
                            }
                            existingTask.zone.cancelTask(existingTask);
                            if (returnTarget) {
                                return target;
                            }
                            return;
                        }
                    }
                }
                // issue 930, didn't find the event name or callback
                // from zone kept existingTasks, the callback maybe
                // added outside of zone, we need to call native removeEventListener
                // to try to remove it.
                return nativeRemoveEventListener.apply(this, arguments);
            };
            proto[LISTENERS_EVENT_LISTENER] = function () {
                const target = this || _global;
                let eventName = arguments[0];
                if (patchOptions && patchOptions.transferEventName) {
                    eventName = patchOptions.transferEventName(eventName);
                }
                const listeners = [];
                const tasks = findEventTasks(target, eventNameToString ? eventNameToString(eventName) : eventName);
                for (let i = 0; i < tasks.length; i++) {
                    const task = tasks[i];
                    let delegate = task.originalDelegate ? task.originalDelegate : task.callback;
                    listeners.push(delegate);
                }
                return listeners;
            };
            proto[REMOVE_ALL_LISTENERS_EVENT_LISTENER] = function () {
                const target = this || _global;
                let eventName = arguments[0];
                if (!eventName) {
                    const keys = Object.keys(target);
                    for (let i = 0; i < keys.length; i++) {
                        const prop = keys[i];
                        const match = EVENT_NAME_SYMBOL_REGX.exec(prop);
                        let evtName = match && match[1];
                        // in nodejs EventEmitter, removeListener event is
                        // used for monitoring the removeListener call,
                        // so just keep removeListener eventListener until
                        // all other eventListeners are removed
                        if (evtName && evtName !== 'removeListener') {
                            this[REMOVE_ALL_LISTENERS_EVENT_LISTENER].call(this, evtName);
                        }
                    }
                    // remove removeListener listener finally
                    this[REMOVE_ALL_LISTENERS_EVENT_LISTENER].call(this, 'removeListener');
                }
                else {
                    if (patchOptions && patchOptions.transferEventName) {
                        eventName = patchOptions.transferEventName(eventName);
                    }
                    const symbolEventNames = zoneSymbolEventNames$1[eventName];
                    if (symbolEventNames) {
                        const symbolEventName = symbolEventNames[FALSE_STR];
                        const symbolCaptureEventName = symbolEventNames[TRUE_STR];
                        const tasks = target[symbolEventName];
                        const captureTasks = target[symbolCaptureEventName];
                        if (tasks) {
                            const removeTasks = tasks.slice();
                            for (let i = 0; i < removeTasks.length; i++) {
                                const task = removeTasks[i];
                                let delegate = task.originalDelegate ? task.originalDelegate : task.callback;
                                this[REMOVE_EVENT_LISTENER].call(this, eventName, delegate, task.options);
                            }
                        }
                        if (captureTasks) {
                            const removeTasks = captureTasks.slice();
                            for (let i = 0; i < removeTasks.length; i++) {
                                const task = removeTasks[i];
                                let delegate = task.originalDelegate ? task.originalDelegate : task.callback;
                                this[REMOVE_EVENT_LISTENER].call(this, eventName, delegate, task.options);
                            }
                        }
                    }
                }
                if (returnTarget) {
                    return this;
                }
            };
            // for native toString patch
            attachOriginToPatched(proto[ADD_EVENT_LISTENER], nativeAddEventListener);
            attachOriginToPatched(proto[REMOVE_EVENT_LISTENER], nativeRemoveEventListener);
            if (nativeRemoveAllListeners) {
                attachOriginToPatched(proto[REMOVE_ALL_LISTENERS_EVENT_LISTENER], nativeRemoveAllListeners);
            }
            if (nativeListeners) {
                attachOriginToPatched(proto[LISTENERS_EVENT_LISTENER], nativeListeners);
            }
            return true;
        }
        let results = [];
        for (let i = 0; i < apis.length; i++) {
            results[i] = patchEventTargetMethods(apis[i], patchOptions);
        }
        return results;
    }
    function findEventTasks(target, eventName) {
        if (!eventName) {
            const foundTasks = [];
            for (let prop in target) {
                const match = EVENT_NAME_SYMBOL_REGX.exec(prop);
                let evtName = match && match[1];
                if (evtName && (!eventName || evtName === eventName)) {
                    const tasks = target[prop];
                    if (tasks) {
                        for (let i = 0; i < tasks.length; i++) {
                            foundTasks.push(tasks[i]);
                        }
                    }
                }
            }
            return foundTasks;
        }
        let symbolEventName = zoneSymbolEventNames$1[eventName];
        if (!symbolEventName) {
            prepareEventNames(eventName);
            symbolEventName = zoneSymbolEventNames$1[eventName];
        }
        const captureFalseTasks = target[symbolEventName[FALSE_STR]];
        const captureTrueTasks = target[symbolEventName[TRUE_STR]];
        if (!captureFalseTasks) {
            return captureTrueTasks ? captureTrueTasks.slice() : [];
        }
        else {
            return captureTrueTasks ? captureFalseTasks.concat(captureTrueTasks) :
                captureFalseTasks.slice();
        }
    }
    function patchEventPrototype(global, api) {
        const Event = global['Event'];
        if (Event && Event.prototype) {
            api.patchMethod(Event.prototype, 'stopImmediatePropagation', (delegate) => function (self, args) {
                self[IMMEDIATE_PROPAGATION_SYMBOL] = true;
                // we need to call the native stopImmediatePropagation
                // in case in some hybrid application, some part of
                // application will be controlled by zone, some are not
                delegate && delegate.apply(self, args);
            });
        }
    }

    /**
     * @license
     * Copyright Google Inc. All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
    function patchCallbacks(api, target, targetName, method, callbacks) {
        const symbol = Zone.__symbol__(method);
        if (target[symbol]) {
            return;
        }
        const nativeDelegate = target[symbol] = target[method];
        target[method] = function (name, opts, options) {
            if (opts && opts.prototype) {
                callbacks.forEach(function (callback) {
                    const source = `${targetName}.${method}::` + callback;
                    const prototype = opts.prototype;
                    if (prototype.hasOwnProperty(callback)) {
                        const descriptor = api.ObjectGetOwnPropertyDescriptor(prototype, callback);
                        if (descriptor && descriptor.value) {
                            descriptor.value = api.wrapWithCurrentZone(descriptor.value, source);
                            api._redefineProperty(opts.prototype, callback, descriptor);
                        }
                        else if (prototype[callback]) {
                            prototype[callback] = api.wrapWithCurrentZone(prototype[callback], source);
                        }
                    }
                    else if (prototype[callback]) {
                        prototype[callback] = api.wrapWithCurrentZone(prototype[callback], source);
                    }
                });
            }
            return nativeDelegate.call(target, name, opts, options);
        };
        api.attachOriginToPatched(target[method], nativeDelegate);
    }

    /**
     * @license
     * Copyright Google Inc. All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
    const globalEventHandlersEventNames = [
        'abort',
        'animationcancel',
        'animationend',
        'animationiteration',
        'auxclick',
        'beforeinput',
        'blur',
        'cancel',
        'canplay',
        'canplaythrough',
        'change',
        'compositionstart',
        'compositionupdate',
        'compositionend',
        'cuechange',
        'click',
        'close',
        'contextmenu',
        'curechange',
        'dblclick',
        'drag',
        'dragend',
        'dragenter',
        'dragexit',
        'dragleave',
        'dragover',
        'drop',
        'durationchange',
        'emptied',
        'ended',
        'error',
        'focus',
        'focusin',
        'focusout',
        'gotpointercapture',
        'input',
        'invalid',
        'keydown',
        'keypress',
        'keyup',
        'load',
        'loadstart',
        'loadeddata',
        'loadedmetadata',
        'lostpointercapture',
        'mousedown',
        'mouseenter',
        'mouseleave',
        'mousemove',
        'mouseout',
        'mouseover',
        'mouseup',
        'mousewheel',
        'orientationchange',
        'pause',
        'play',
        'playing',
        'pointercancel',
        'pointerdown',
        'pointerenter',
        'pointerleave',
        'pointerlockchange',
        'mozpointerlockchange',
        'webkitpointerlockerchange',
        'pointerlockerror',
        'mozpointerlockerror',
        'webkitpointerlockerror',
        'pointermove',
        'pointout',
        'pointerover',
        'pointerup',
        'progress',
        'ratechange',
        'reset',
        'resize',
        'scroll',
        'seeked',
        'seeking',
        'select',
        'selectionchange',
        'selectstart',
        'show',
        'sort',
        'stalled',
        'submit',
        'suspend',
        'timeupdate',
        'volumechange',
        'touchcancel',
        'touchmove',
        'touchstart',
        'touchend',
        'transitioncancel',
        'transitionend',
        'waiting',
        'wheel'
    ];
    const documentEventNames = [
        'afterscriptexecute', 'beforescriptexecute', 'DOMContentLoaded', 'freeze', 'fullscreenchange',
        'mozfullscreenchange', 'webkitfullscreenchange', 'msfullscreenchange', 'fullscreenerror',
        'mozfullscreenerror', 'webkitfullscreenerror', 'msfullscreenerror', 'readystatechange',
        'visibilitychange', 'resume'
    ];
    const windowEventNames = [
        'absolutedeviceorientation',
        'afterinput',
        'afterprint',
        'appinstalled',
        'beforeinstallprompt',
        'beforeprint',
        'beforeunload',
        'devicelight',
        'devicemotion',
        'deviceorientation',
        'deviceorientationabsolute',
        'deviceproximity',
        'hashchange',
        'languagechange',
        'message',
        'mozbeforepaint',
        'offline',
        'online',
        'paint',
        'pageshow',
        'pagehide',
        'popstate',
        'rejectionhandled',
        'storage',
        'unhandledrejection',
        'unload',
        'userproximity',
        'vrdisplayconnected',
        'vrdisplaydisconnected',
        'vrdisplaypresentchange'
    ];
    const htmlElementEventNames = [
        'beforecopy', 'beforecut', 'beforepaste', 'copy', 'cut', 'paste', 'dragstart', 'loadend',
        'animationstart', 'search', 'transitionrun', 'transitionstart', 'webkitanimationend',
        'webkitanimationiteration', 'webkitanimationstart', 'webkittransitionend'
    ];
    const mediaElementEventNames = ['encrypted', 'waitingforkey', 'msneedkey', 'mozinterruptbegin', 'mozinterruptend'];
    const ieElementEventNames = [
        'activate',
        'afterupdate',
        'ariarequest',
        'beforeactivate',
        'beforedeactivate',
        'beforeeditfocus',
        'beforeupdate',
        'cellchange',
        'controlselect',
        'dataavailable',
        'datasetchanged',
        'datasetcomplete',
        'errorupdate',
        'filterchange',
        'layoutcomplete',
        'losecapture',
        'move',
        'moveend',
        'movestart',
        'propertychange',
        'resizeend',
        'resizestart',
        'rowenter',
        'rowexit',
        'rowsdelete',
        'rowsinserted',
        'command',
        'compassneedscalibration',
        'deactivate',
        'help',
        'mscontentzoom',
        'msmanipulationstatechanged',
        'msgesturechange',
        'msgesturedoubletap',
        'msgestureend',
        'msgesturehold',
        'msgesturestart',
        'msgesturetap',
        'msgotpointercapture',
        'msinertiastart',
        'mslostpointercapture',
        'mspointercancel',
        'mspointerdown',
        'mspointerenter',
        'mspointerhover',
        'mspointerleave',
        'mspointermove',
        'mspointerout',
        'mspointerover',
        'mspointerup',
        'pointerout',
        'mssitemodejumplistitemremoved',
        'msthumbnailclick',
        'stop',
        'storagecommit'
    ];
    const webglEventNames = ['webglcontextrestored', 'webglcontextlost', 'webglcontextcreationerror'];
    const formEventNames = ['autocomplete', 'autocompleteerror'];
    const detailEventNames = ['toggle'];
    const frameEventNames = ['load'];
    const frameSetEventNames = ['blur', 'error', 'focus', 'load', 'resize', 'scroll', 'messageerror'];
    const marqueeEventNames = ['bounce', 'finish', 'start'];
    const XMLHttpRequestEventNames = [
        'loadstart', 'progress', 'abort', 'error', 'load', 'progress', 'timeout', 'loadend',
        'readystatechange'
    ];
    const IDBIndexEventNames = ['upgradeneeded', 'complete', 'abort', 'success', 'error', 'blocked', 'versionchange', 'close'];
    const websocketEventNames = ['close', 'error', 'open', 'message'];
    const workerEventNames = ['error', 'message'];
    const eventNames = globalEventHandlersEventNames.concat(webglEventNames, formEventNames, detailEventNames, documentEventNames, windowEventNames, htmlElementEventNames, ieElementEventNames);
    function filterProperties(target, onProperties, ignoreProperties) {
        if (!ignoreProperties || ignoreProperties.length === 0) {
            return onProperties;
        }
        const tip = ignoreProperties.filter(ip => ip.target === target);
        if (!tip || tip.length === 0) {
            return onProperties;
        }
        const targetIgnoreProperties = tip[0].ignoreProperties;
        return onProperties.filter(op => targetIgnoreProperties.indexOf(op) === -1);
    }
    function patchFilteredProperties(target, onProperties, ignoreProperties, prototype) {
        // check whether target is available, sometimes target will be undefined
        // because different browser or some 3rd party plugin.
        if (!target) {
            return;
        }
        const filteredProperties = filterProperties(target, onProperties, ignoreProperties);
        patchOnProperties(target, filteredProperties, prototype);
    }
    function propertyDescriptorPatch(api, _global) {
        if (isNode && !isMix) {
            return;
        }
        if (Zone[api.symbol('patchEvents')]) {
            // events are already been patched by legacy patch.
            return;
        }
        const supportsWebSocket = typeof WebSocket !== 'undefined';
        const ignoreProperties = _global['__Zone_ignore_on_properties'];
        // for browsers that we can patch the descriptor:  Chrome & Firefox
        if (isBrowser) {
            const internalWindow = window;
            const ignoreErrorProperties = isIE ? [{ target: internalWindow, ignoreProperties: ['error'] }] : [];
            // in IE/Edge, onProp not exist in window object, but in WindowPrototype
            // so we need to pass WindowPrototype to check onProp exist or not
            patchFilteredProperties(internalWindow, eventNames.concat(['messageerror']), ignoreProperties ? ignoreProperties.concat(ignoreErrorProperties) : ignoreProperties, ObjectGetPrototypeOf(internalWindow));
            patchFilteredProperties(Document.prototype, eventNames, ignoreProperties);
            if (typeof internalWindow['SVGElement'] !== 'undefined') {
                patchFilteredProperties(internalWindow['SVGElement'].prototype, eventNames, ignoreProperties);
            }
            patchFilteredProperties(Element.prototype, eventNames, ignoreProperties);
            patchFilteredProperties(HTMLElement.prototype, eventNames, ignoreProperties);
            patchFilteredProperties(HTMLMediaElement.prototype, mediaElementEventNames, ignoreProperties);
            patchFilteredProperties(HTMLFrameSetElement.prototype, windowEventNames.concat(frameSetEventNames), ignoreProperties);
            patchFilteredProperties(HTMLBodyElement.prototype, windowEventNames.concat(frameSetEventNames), ignoreProperties);
            patchFilteredProperties(HTMLFrameElement.prototype, frameEventNames, ignoreProperties);
            patchFilteredProperties(HTMLIFrameElement.prototype, frameEventNames, ignoreProperties);
            const HTMLMarqueeElement = internalWindow['HTMLMarqueeElement'];
            if (HTMLMarqueeElement) {
                patchFilteredProperties(HTMLMarqueeElement.prototype, marqueeEventNames, ignoreProperties);
            }
            const Worker = internalWindow['Worker'];
            if (Worker) {
                patchFilteredProperties(Worker.prototype, workerEventNames, ignoreProperties);
            }
        }
        const XMLHttpRequest = _global['XMLHttpRequest'];
        if (XMLHttpRequest) {
            // XMLHttpRequest is not available in ServiceWorker, so we need to check here
            patchFilteredProperties(XMLHttpRequest.prototype, XMLHttpRequestEventNames, ignoreProperties);
        }
        const XMLHttpRequestEventTarget = _global['XMLHttpRequestEventTarget'];
        if (XMLHttpRequestEventTarget) {
            patchFilteredProperties(XMLHttpRequestEventTarget && XMLHttpRequestEventTarget.prototype, XMLHttpRequestEventNames, ignoreProperties);
        }
        if (typeof IDBIndex !== 'undefined') {
            patchFilteredProperties(IDBIndex.prototype, IDBIndexEventNames, ignoreProperties);
            patchFilteredProperties(IDBRequest.prototype, IDBIndexEventNames, ignoreProperties);
            patchFilteredProperties(IDBOpenDBRequest.prototype, IDBIndexEventNames, ignoreProperties);
            patchFilteredProperties(IDBDatabase.prototype, IDBIndexEventNames, ignoreProperties);
            patchFilteredProperties(IDBTransaction.prototype, IDBIndexEventNames, ignoreProperties);
            patchFilteredProperties(IDBCursor.prototype, IDBIndexEventNames, ignoreProperties);
        }
        if (supportsWebSocket) {
            patchFilteredProperties(WebSocket.prototype, websocketEventNames, ignoreProperties);
        }
    }

    /**
     * @license
     * Copyright Google Inc. All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
    Zone.__load_patch('util', (global, Zone, api) => {
        api.patchOnProperties = patchOnProperties;
        api.patchMethod = patchMethod;
        api.bindArguments = bindArguments;
        api.patchMacroTask = patchMacroTask;
        // In earlier version of zone.js (<0.9.0), we use env name `__zone_symbol__BLACK_LISTED_EVENTS` to
        // define which events will not be patched by `Zone.js`.
        // In newer version (>=0.9.0), we change the env name to `__zone_symbol__UNPATCHED_EVENTS` to keep
        // the name consistent with angular repo.
        // The  `__zone_symbol__BLACK_LISTED_EVENTS` is deprecated, but it is still be supported for
        // backwards compatibility.
        const SYMBOL_BLACK_LISTED_EVENTS = Zone.__symbol__('BLACK_LISTED_EVENTS');
        const SYMBOL_UNPATCHED_EVENTS = Zone.__symbol__('UNPATCHED_EVENTS');
        if (global[SYMBOL_UNPATCHED_EVENTS]) {
            global[SYMBOL_BLACK_LISTED_EVENTS] = global[SYMBOL_UNPATCHED_EVENTS];
        }
        if (global[SYMBOL_BLACK_LISTED_EVENTS]) {
            Zone[SYMBOL_BLACK_LISTED_EVENTS] = Zone[SYMBOL_UNPATCHED_EVENTS] =
                global[SYMBOL_BLACK_LISTED_EVENTS];
        }
        api.patchEventPrototype = patchEventPrototype;
        api.patchEventTarget = patchEventTarget;
        api.isIEOrEdge = isIEOrEdge;
        api.ObjectDefineProperty = ObjectDefineProperty;
        api.ObjectGetOwnPropertyDescriptor = ObjectGetOwnPropertyDescriptor;
        api.ObjectCreate = ObjectCreate;
        api.ArraySlice = ArraySlice;
        api.patchClass = patchClass;
        api.wrapWithCurrentZone = wrapWithCurrentZone;
        api.filterProperties = filterProperties;
        api.attachOriginToPatched = attachOriginToPatched;
        api._redefineProperty = Object.defineProperty;
        api.patchCallbacks = patchCallbacks;
        api.getGlobalObjects = () => ({ globalSources, zoneSymbolEventNames: zoneSymbolEventNames$1, eventNames, isBrowser, isMix, isNode, TRUE_STR,
            FALSE_STR, ZONE_SYMBOL_PREFIX, ADD_EVENT_LISTENER_STR, REMOVE_EVENT_LISTENER_STR });
    });

    /**
     * @license
     * Copyright Google Inc. All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
    const taskSymbol = zoneSymbol('zoneTask');
    function patchTimer(window, setName, cancelName, nameSuffix) {
        let setNative = null;
        let clearNative = null;
        setName += nameSuffix;
        cancelName += nameSuffix;
        const tasksByHandleId = {};
        function scheduleTask(task) {
            const data = task.data;
            function timer() {
                try {
                    task.invoke.apply(this, arguments);
                }
                finally {
                    // issue-934, task will be cancelled
                    // even it is a periodic task such as
                    // setInterval
                    if (!(task.data && task.data.isPeriodic)) {
                        if (typeof data.handleId === 'number') {
                            // in non-nodejs env, we remove timerId
                            // from local cache
                            delete tasksByHandleId[data.handleId];
                        }
                        else if (data.handleId) {
                            // Node returns complex objects as handleIds
                            // we remove task reference from timer object
                            data.handleId[taskSymbol] = null;
                        }
                    }
                }
            }
            data.args[0] = timer;
            data.handleId = setNative.apply(window, data.args);
            return task;
        }
        function clearTask(task) { return clearNative(task.data.handleId); }
        setNative =
            patchMethod(window, setName, (delegate) => function (self, args) {
                if (typeof args[0] === 'function') {
                    const options = {
                        isPeriodic: nameSuffix === 'Interval',
                        delay: (nameSuffix === 'Timeout' || nameSuffix === 'Interval') ? args[1] || 0 :
                            undefined,
                        args: args
                    };
                    const task = scheduleMacroTaskWithCurrentZone(setName, args[0], options, scheduleTask, clearTask);
                    if (!task) {
                        return task;
                    }
                    // Node.js must additionally support the ref and unref functions.
                    const handle = task.data.handleId;
                    if (typeof handle === 'number') {
                        // for non nodejs env, we save handleId: task
                        // mapping in local cache for clearTimeout
                        tasksByHandleId[handle] = task;
                    }
                    else if (handle) {
                        // for nodejs env, we save task
                        // reference in timerId Object for clearTimeout
                        handle[taskSymbol] = task;
                    }
                    // check whether handle is null, because some polyfill or browser
                    // may return undefined from setTimeout/setInterval/setImmediate/requestAnimationFrame
                    if (handle && handle.ref && handle.unref && typeof handle.ref === 'function' &&
                        typeof handle.unref === 'function') {
                        task.ref = handle.ref.bind(handle);
                        task.unref = handle.unref.bind(handle);
                    }
                    if (typeof handle === 'number' || handle) {
                        return handle;
                    }
                    return task;
                }
                else {
                    // cause an error by calling it directly.
                    return delegate.apply(window, args);
                }
            });
        clearNative =
            patchMethod(window, cancelName, (delegate) => function (self, args) {
                const id = args[0];
                let task;
                if (typeof id === 'number') {
                    // non nodejs env.
                    task = tasksByHandleId[id];
                }
                else {
                    // nodejs env.
                    task = id && id[taskSymbol];
                    // other environments.
                    if (!task) {
                        task = id;
                    }
                }
                if (task && typeof task.type === 'string') {
                    if (task.state !== 'notScheduled' &&
                        (task.cancelFn && task.data.isPeriodic || task.runCount === 0)) {
                        if (typeof id === 'number') {
                            delete tasksByHandleId[id];
                        }
                        else if (id) {
                            id[taskSymbol] = null;
                        }
                        // Do not cancel already canceled functions
                        task.zone.cancelTask(task);
                    }
                }
                else {
                    // cause an error by calling it directly.
                    delegate.apply(window, args);
                }
            });
    }

    /**
     * @license
     * Copyright Google Inc. All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
    function patchCustomElements(_global, api) {
        const { isBrowser, isMix } = api.getGlobalObjects();
        if ((!isBrowser && !isMix) || !_global['customElements'] || !('customElements' in _global)) {
            return;
        }
        const callbacks = ['connectedCallback', 'disconnectedCallback', 'adoptedCallback', 'attributeChangedCallback'];
        api.patchCallbacks(api, _global.customElements, 'customElements', 'define', callbacks);
    }

    /**
     * @license
     * Copyright Google Inc. All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
    function eventTargetPatch(_global, api) {
        if (Zone[api.symbol('patchEventTarget')]) {
            // EventTarget is already patched.
            return;
        }
        const { eventNames, zoneSymbolEventNames, TRUE_STR, FALSE_STR, ZONE_SYMBOL_PREFIX } = api.getGlobalObjects();
        //  predefine all __zone_symbol__ + eventName + true/false string
        for (let i = 0; i < eventNames.length; i++) {
            const eventName = eventNames[i];
            const falseEventName = eventName + FALSE_STR;
            const trueEventName = eventName + TRUE_STR;
            const symbol = ZONE_SYMBOL_PREFIX + falseEventName;
            const symbolCapture = ZONE_SYMBOL_PREFIX + trueEventName;
            zoneSymbolEventNames[eventName] = {};
            zoneSymbolEventNames[eventName][FALSE_STR] = symbol;
            zoneSymbolEventNames[eventName][TRUE_STR] = symbolCapture;
        }
        const EVENT_TARGET = _global['EventTarget'];
        if (!EVENT_TARGET || !EVENT_TARGET.prototype) {
            return;
        }
        api.patchEventTarget(_global, [EVENT_TARGET && EVENT_TARGET.prototype]);
        return true;
    }
    function patchEvent(global, api) {
        api.patchEventPrototype(global, api);
    }

    /**
     * @license
     * Copyright Google Inc. All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
    Zone.__load_patch('legacy', (global) => {
        const legacyPatch = global[Zone.__symbol__('legacyPatch')];
        if (legacyPatch) {
            legacyPatch();
        }
    });
    Zone.__load_patch('timers', (global) => {
        const set = 'set';
        const clear = 'clear';
        patchTimer(global, set, clear, 'Timeout');
        patchTimer(global, set, clear, 'Interval');
        patchTimer(global, set, clear, 'Immediate');
    });
    Zone.__load_patch('requestAnimationFrame', (global) => {
        patchTimer(global, 'request', 'cancel', 'AnimationFrame');
        patchTimer(global, 'mozRequest', 'mozCancel', 'AnimationFrame');
        patchTimer(global, 'webkitRequest', 'webkitCancel', 'AnimationFrame');
    });
    Zone.__load_patch('blocking', (global, Zone) => {
        const blockingMethods = ['alert', 'prompt', 'confirm'];
        for (let i = 0; i < blockingMethods.length; i++) {
            const name = blockingMethods[i];
            patchMethod(global, name, (delegate, symbol, name) => {
                return function (s, args) {
                    return Zone.current.run(delegate, global, args, name);
                };
            });
        }
    });
    Zone.__load_patch('EventTarget', (global, Zone, api) => {
        patchEvent(global, api);
        eventTargetPatch(global, api);
        // patch XMLHttpRequestEventTarget's addEventListener/removeEventListener
        const XMLHttpRequestEventTarget = global['XMLHttpRequestEventTarget'];
        if (XMLHttpRequestEventTarget && XMLHttpRequestEventTarget.prototype) {
            api.patchEventTarget(global, [XMLHttpRequestEventTarget.prototype]);
        }
        patchClass('MutationObserver');
        patchClass('WebKitMutationObserver');
        patchClass('IntersectionObserver');
        patchClass('FileReader');
    });
    Zone.__load_patch('on_property', (global, Zone, api) => {
        propertyDescriptorPatch(api, global);
    });
    Zone.__load_patch('customElements', (global, Zone, api) => {
        patchCustomElements(global, api);
    });
    Zone.__load_patch('XHR', (global, Zone) => {
        // Treat XMLHttpRequest as a macrotask.
        patchXHR(global);
        const XHR_TASK = zoneSymbol('xhrTask');
        const XHR_SYNC = zoneSymbol('xhrSync');
        const XHR_LISTENER = zoneSymbol('xhrListener');
        const XHR_SCHEDULED = zoneSymbol('xhrScheduled');
        const XHR_URL = zoneSymbol('xhrURL');
        const XHR_ERROR_BEFORE_SCHEDULED = zoneSymbol('xhrErrorBeforeScheduled');
        function patchXHR(window) {
            const XMLHttpRequest = window['XMLHttpRequest'];
            if (!XMLHttpRequest) {
                // XMLHttpRequest is not available in service worker
                return;
            }
            const XMLHttpRequestPrototype = XMLHttpRequest.prototype;
            function findPendingTask(target) { return target[XHR_TASK]; }
            let oriAddListener = XMLHttpRequestPrototype[ZONE_SYMBOL_ADD_EVENT_LISTENER];
            let oriRemoveListener = XMLHttpRequestPrototype[ZONE_SYMBOL_REMOVE_EVENT_LISTENER];
            if (!oriAddListener) {
                const XMLHttpRequestEventTarget = window['XMLHttpRequestEventTarget'];
                if (XMLHttpRequestEventTarget) {
                    const XMLHttpRequestEventTargetPrototype = XMLHttpRequestEventTarget.prototype;
                    oriAddListener = XMLHttpRequestEventTargetPrototype[ZONE_SYMBOL_ADD_EVENT_LISTENER];
                    oriRemoveListener = XMLHttpRequestEventTargetPrototype[ZONE_SYMBOL_REMOVE_EVENT_LISTENER];
                }
            }
            const READY_STATE_CHANGE = 'readystatechange';
            const SCHEDULED = 'scheduled';
            function scheduleTask(task) {
                const data = task.data;
                const target = data.target;
                target[XHR_SCHEDULED] = false;
                target[XHR_ERROR_BEFORE_SCHEDULED] = false;
                // remove existing event listener
                const listener = target[XHR_LISTENER];
                if (!oriAddListener) {
                    oriAddListener = target[ZONE_SYMBOL_ADD_EVENT_LISTENER];
                    oriRemoveListener = target[ZONE_SYMBOL_REMOVE_EVENT_LISTENER];
                }
                if (listener) {
                    oriRemoveListener.call(target, READY_STATE_CHANGE, listener);
                }
                const newListener = target[XHR_LISTENER] = () => {
                    if (target.readyState === target.DONE) {
                        // sometimes on some browsers XMLHttpRequest will fire onreadystatechange with
                        // readyState=4 multiple times, so we need to check task state here
                        if (!data.aborted && target[XHR_SCHEDULED] && task.state === SCHEDULED) {
                            // check whether the xhr has registered onload listener
                            // if that is the case, the task should invoke after all
                            // onload listeners finish.
                            const loadTasks = target[Zone.__symbol__('loadfalse')];
                            if (loadTasks && loadTasks.length > 0) {
                                const oriInvoke = task.invoke;
                                task.invoke = function () {
                                    // need to load the tasks again, because in other
                                    // load listener, they may remove themselves
                                    const loadTasks = target[Zone.__symbol__('loadfalse')];
                                    for (let i = 0; i < loadTasks.length; i++) {
                                        if (loadTasks[i] === task) {
                                            loadTasks.splice(i, 1);
                                        }
                                    }
                                    if (!data.aborted && task.state === SCHEDULED) {
                                        oriInvoke.call(task);
                                    }
                                };
                                loadTasks.push(task);
                            }
                            else {
                                task.invoke();
                            }
                        }
                        else if (!data.aborted && target[XHR_SCHEDULED] === false) {
                            // error occurs when xhr.send()
                            target[XHR_ERROR_BEFORE_SCHEDULED] = true;
                        }
                    }
                };
                oriAddListener.call(target, READY_STATE_CHANGE, newListener);
                const storedTask = target[XHR_TASK];
                if (!storedTask) {
                    target[XHR_TASK] = task;
                }
                sendNative.apply(target, data.args);
                target[XHR_SCHEDULED] = true;
                return task;
            }
            function placeholderCallback() { }
            function clearTask(task) {
                const data = task.data;
                // Note - ideally, we would call data.target.removeEventListener here, but it's too late
                // to prevent it from firing. So instead, we store info for the event listener.
                data.aborted = true;
                return abortNative.apply(data.target, data.args);
            }
            const openNative = patchMethod(XMLHttpRequestPrototype, 'open', () => function (self, args) {
                self[XHR_SYNC] = args[2] == false;
                self[XHR_URL] = args[1];
                return openNative.apply(self, args);
            });
            const XMLHTTPREQUEST_SOURCE = 'XMLHttpRequest.send';
            const fetchTaskAborting = zoneSymbol('fetchTaskAborting');
            const fetchTaskScheduling = zoneSymbol('fetchTaskScheduling');
            const sendNative = patchMethod(XMLHttpRequestPrototype, 'send', () => function (self, args) {
                if (Zone.current[fetchTaskScheduling] === true) {
                    // a fetch is scheduling, so we are using xhr to polyfill fetch
                    // and because we already schedule macroTask for fetch, we should
                    // not schedule a macroTask for xhr again
                    return sendNative.apply(self, args);
                }
                if (self[XHR_SYNC]) {
                    // if the XHR is sync there is no task to schedule, just execute the code.
                    return sendNative.apply(self, args);
                }
                else {
                    const options = { target: self, url: self[XHR_URL], isPeriodic: false, args: args, aborted: false };
                    const task = scheduleMacroTaskWithCurrentZone(XMLHTTPREQUEST_SOURCE, placeholderCallback, options, scheduleTask, clearTask);
                    if (self && self[XHR_ERROR_BEFORE_SCHEDULED] === true && !options.aborted &&
                        task.state === SCHEDULED) {
                        // xhr request throw error when send
                        // we should invoke task instead of leaving a scheduled
                        // pending macroTask
                        task.invoke();
                    }
                }
            });
            const abortNative = patchMethod(XMLHttpRequestPrototype, 'abort', () => function (self, args) {
                const task = findPendingTask(self);
                if (task && typeof task.type == 'string') {
                    // If the XHR has already completed, do nothing.
                    // If the XHR has already been aborted, do nothing.
                    // Fix #569, call abort multiple times before done will cause
                    // macroTask task count be negative number
                    if (task.cancelFn == null || (task.data && task.data.aborted)) {
                        return;
                    }
                    task.zone.cancelTask(task);
                }
                else if (Zone.current[fetchTaskAborting] === true) {
                    // the abort is called from fetch polyfill, we need to call native abort of XHR.
                    return abortNative.apply(self, args);
                }
                // Otherwise, we are trying to abort an XHR which has not yet been sent, so there is no
                // task
                // to cancel. Do nothing.
            });
        }
    });
    Zone.__load_patch('geolocation', (global) => {
        /// GEO_LOCATION
        if (global['navigator'] && global['navigator'].geolocation) {
            patchPrototype(global['navigator'].geolocation, ['getCurrentPosition', 'watchPosition']);
        }
    });
    Zone.__load_patch('PromiseRejectionEvent', (global, Zone) => {
        // handle unhandled promise rejection
        function findPromiseRejectionHandler(evtName) {
            return function (e) {
                const eventTasks = findEventTasks(global, evtName);
                eventTasks.forEach(eventTask => {
                    // windows has added unhandledrejection event listener
                    // trigger the event listener
                    const PromiseRejectionEvent = global['PromiseRejectionEvent'];
                    if (PromiseRejectionEvent) {
                        const evt = new PromiseRejectionEvent(evtName, { promise: e.promise, reason: e.rejection });
                        eventTask.invoke(evt);
                    }
                });
            };
        }
        if (global['PromiseRejectionEvent']) {
            Zone[zoneSymbol('unhandledPromiseRejectionHandler')] =
                findPromiseRejectionHandler('unhandledrejection');
            Zone[zoneSymbol('rejectionHandledHandler')] =
                findPromiseRejectionHandler('rejectionhandled');
        }
    });

})));


/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _components_Landing_landing_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/Landing/landing.component */ "./src/app/components/Landing/landing.component.ts");




const routes = [
    { path: '', component: _components_Landing_landing_component__WEBPACK_IMPORTED_MODULE_3__["LandingComponent"] },
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], AppRoutingModule);



/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


let AppComponent = class AppComponent {
    constructor() {
        this.title = 'GOALS';
    }
};
AppComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-root',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")).default]
    })
], AppComponent);



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _components_Toolbar_Toolbar_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/Toolbar/Toolbar.component */ "./src/app/components/Toolbar/Toolbar.component.ts");
/* harmony import */ var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @fortawesome/angular-fontawesome */ "./node_modules/@fortawesome/angular-fontawesome/__ivy_ngcc__/fesm2015/angular-fontawesome.js");
/* harmony import */ var _components_Landing_landing_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/Landing/landing.component */ "./src/app/components/Landing/landing.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _components_Navbar_navbar_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/Navbar/navbar.component */ "./src/app/components/Navbar/navbar.component.ts");










// Services

let AppModule = class AppModule {
};
AppModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
            _components_Toolbar_Toolbar_component__WEBPACK_IMPORTED_MODULE_5__["ToolbarComponent"],
            _components_Landing_landing_component__WEBPACK_IMPORTED_MODULE_7__["LandingComponent"],
            _components_Navbar_navbar_component__WEBPACK_IMPORTED_MODULE_10__["NavbarComponent"],
        ],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
            _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_6__["FontAwesomeModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_8__["ReactiveFormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormsModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_9__["HttpClientModule"]
        ],
        providers: [],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]],
    })
], AppModule);



/***/ }),

/***/ "./src/app/components/Landing/landing.component.scss":
/*!***********************************************************!*\
  !*** ./src/app/components/Landing/landing.component.scss ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("@charset \"UTF-8\";\n/* You can add global styles to this file, and also import other style files */\na:hover {\n  text-decoration: none;\n}\n.b-p {\n  background: #1639F7;\n}\n.b-pl {\n  background: #7084F2;\n}\n.b-s {\n  background: #FD9300;\n}\n.b-sl {\n  background: #EBB468;\n}\n.b-g {\n  background: #383333;\n}\n.b-gl {\n  background: #7E7070;\n}\n.b-b {\n  background: #050505;\n}\n.b-l {\n  background: #FAFAFA;\n}\n.b-navbar {\n  background: #00168D;\n}\n.tc-p {\n  color: #1639F7;\n}\n.tc-pl {\n  color: #7084F2;\n}\n.tc-s {\n  color: #FD9300;\n}\n.tc-sl {\n  color: #EBB468;\n}\n.tc-g {\n  color: #383333;\n}\n.tc-gl {\n  color: #7E7070;\n}\n.tc-b {\n  color: #050505;\n}\n.b-0 {\n  border: none;\n}\n.b1 {\n  border-width: 1px;\n  border-style: solid;\n}\n.b2 {\n  border-width: 2px;\n  border-style: solid;\n}\n.b3 {\n  border-width: 3px;\n  border-style: solid;\n}\n.b4 {\n  border-width: 4px;\n  border-style: solid;\n}\n.b5 {\n  border-width: 5px;\n  border-style: solid;\n}\n.bc-p {\n  border-color: #1639F7;\n}\n.bc-pl {\n  border-color: #7084F2;\n}\n.bc-s {\n  border-color: #FD9300;\n}\n.bc-sl {\n  border-color: #EBB468;\n}\n.bc-g {\n  border-color: #383333;\n}\n.bc-gl {\n  border-color: #7E7070;\n}\n.bc-b {\n  border-color: #050505;\n}\n.g-form label {\n  margin: 0px;\n  padding: 0px;\n  display: block;\n}\n.g-form input {\n  padding: 4px 8px;\n  border-radius: 5px;\n  width: 100%;\n  max-width: 350px;\n}\n.g-form input:hover, .g-form input:active, .g-form input:focus {\n  box-shadow: 0px 3px 1px -2px rgba(0, 0, 0, 0.2), 0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12);\n}\na {\n  text-decoration: none;\n}\n.box {\n  width: 100px;\n  height: 100px;\n  text-align: center;\n  line-height: 100px;\n  box-shadow: 0px 3px 1px -2px rgba(0, 0, 0, 0.2), 0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12);\n}\n.t-40 {\n  font-size: 40px;\n}\n.t-35 {\n  font-size: 35px;\n}\n.t-30 {\n  font-size: 30px;\n}\n.t-25 {\n  font-size: 25px;\n}\n.t-20 {\n  font-size: 20px;\n}\n.t-15 {\n  font-size: 15px;\n}\n.t-10 {\n  font-size: 10px;\n}\n.t-18 {\n  font-size: 18px;\n}\n.t-14 {\n  font-size: 14px;\n}\n.t-12 {\n  font-size: 12px;\n}\n.f-wb {\n  font-weight: 900;\n}\n.f-wm {\n  font-weight: 600;\n}\n.f-wr {\n  font-weight: 500;\n}\n.f-wl {\n  font-weight: 300;\n}\n.heading-1 {\n  font-size: 30px;\n}\n.heading-2 {\n  font-size: 25px;\n}\n.heading-3 {\n  font-size: 18px;\n}\n.heading-4 {\n  font-size: 14px;\n}\n.heading-5 {\n  font-size: 12px;\n}\n.heading-6 {\n  font-size: 10px;\n}\n.btn-n {\n  border-radius: 2px;\n}\n.btn-r {\n  width: 50px;\n  height: 50px;\n  border-radius: 50%;\n}\n.btn-sr {\n  border-radius: 20px;\n}\n.btn-mr, .btn-out-mr {\n  border-radius: 7px;\n}\n.btn-out-mr {\n  background: transparent;\n  padding: 6px 20px;\n}\n.btn-n, .btn-r, .btn-mr, .btn-sr {\n  border: none;\n  color: white;\n  padding: 6px 20px;\n  box-shadow: 0px 3px 1px -2px rgba(0, 0, 0, 0.2), 0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12);\n  cursor: pointer;\n}\n.btn-n:hover, .btn-r:hover, .btn-sr:hover, .btn-mr:hover, .btn-out-mr:hover {\n  box-shadow: 1px 3px 5px rgba(0, 0, 0, 0.25), 0px 4px 10px rgba(0, 0, 0, 0.22);\n  transition: box-shadow 280ms cubic-bezier(0.4, 0, 0.2, 1);\n  transition-property: box-shadow;\n  transition-duration: 280ms;\n  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);\n  transition-delay: 0s;\n  cursor: pointer;\n}\n.div-shadow {\n  box-shadow: 0px 3px 1px -2px rgba(0, 0, 0, 0.2), 0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12);\n}\n.div-box-shadow:hover {\n  box-shadow: 1px 3px 3px rgba(0, 0, 0, 0.25), 0px 3px 2px rgba(0, 0, 0, 0.22);\n}\n.btn-shadow {\n  box-shadow: 0px 3px 1px -2px rgba(0, 0, 0, 0.2), 0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12);\n}\n.btn-shadow-h {\n  box-shadow: 0px 3px 1px -2px rgba(0, 0, 0, 0.2), 0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12);\n}\n.letter-space-1 {\n  letter-spacing: 1px;\n}\n.letter-space-2 {\n  letter-spacing: 2px;\n}\n.letter-space-3 {\n  letter-spacing: 3px;\n}\n.custom_label {\n  font-size: 0.6em;\n  color: #37afe5;\n}\n.custome-btn-1 {\n  position: relative;\n  overflow: hidden;\n  background-color: #37afe5;\n  padding: 4px 1px;\n  border-radius: 20px;\n  display: inline-block;\n  width: 100%;\n  max-width: 120px;\n  color: white;\n  box-shadow: 0 4px 5px 0 rgba(0, 0, 0, 0.14), 0 1px 10px 0 rgba(0, 0, 0, 0.12), 0 2px 4px -1px rgba(0, 0, 0, 0.3);\n}\n.custome-btn-1:hover::before {\n  width: 200px;\n  height: 200px;\n  top: -78px;\n  left: 0;\n  border-radius: 0;\n  opacity: 1;\n}\n.custome-btn-1::before {\n  content: \"\";\n  width: 0;\n  height: 0;\n  position: absolute;\n  background: #07fb113d;\n  top: 22px;\n  left: 100px;\n  border-radius: 50%;\n  transition: all 0.5s ease-out;\n  opacity: 0;\n}\n.custom_input {\n  font-size: 1em;\n  color: #37afe5;\n  border-color: #03A9F4;\n}\n/* Small devices (portrait tablets and large phones, 600px and up) */\n@media only screen and (min-width: 600px) {\n  .toolbar .desktop {\n    display: none !important;\n  }\n}\n@media only screen and (max-width: 600px) {\n  .toolbar .desktop {\n    display: none !important;\n  }\n\n  .home {\n    display: block !important;\n  }\n\n  .home__feature_box {\n    display: block !important;\n  }\n\n  .home_banner {\n    display: block !important;\n  }\n\n  .home__feature_menu {\n    padding: 10px;\n    background: white;\n    border-radius: 4px;\n    margin: 10px;\n    width: 200px !important;\n    padding-left: 25px;\n  }\n}\n@media only screen and (max-width: 768px) {\n  .home__feature_box {\n    display: block !important;\n  }\n\n  .home_banner {\n    display: block !important;\n  }\n\n  .home_header2 {\n    color: #676363;\n    width: 100% !important;\n  }\n\n  .home__feature {\n    margin: 15% 0px !important;\n    background: linear-gradient(90deg, #00d2ff 0%, #3a47d5 100%);\n  }\n\n  .home__feature_menu {\n    padding: 10px;\n    background: white;\n    border-radius: 4px;\n    margin: 10px;\n    width: 200px !important;\n    padding-left: 25px;\n  }\n}\n/* Medium devices (landscape tablets, 768px and up) */\n@media only screen and (min-width: 768px) {\n  .toolbar .desktop {\n    display: flex !important;\n  }\n\n  .m-menu-icon {\n    display: none !important;\n  }\n\n  .home_header2 {\n    color: #676363;\n    width: 100% !important;\n  }\n\n  .home__feature {\n    margin: 15% 0px !important;\n    background: linear-gradient(90deg, #00d2ff 0%, #3a47d5 100%);\n  }\n}\n/* Large devices (laptops/desktops, 992px and up) */\n@media only screen and (min-width: 992px) {\n  .toolbar .mobile {\n    display: none !important;\n  }\n\n  .m-menu-icon {\n    display: none !important;\n  }\n}\n/* Extra large devices (large laptops and desktops, 1200px and up) */\n@media only screen and (min-width: 1200px) {\n  .toolbar .desktop {\n    display: flex !important;\n  }\n\n  .m-menu-icon {\n    display: none !important;\n  }\n}\n.home_achiever {\n  width: 100%;\n  height: auto;\n}\n.home {\n  margin-top: 10% !important;\n}\n.home_header2 {\n  color: #676363;\n  margin-top: 3em;\n  font-size: 0.8em;\n  width: 80%;\n}\n.home__feature {\n  margin: 15% 2em;\n  background: linear-gradient(90deg, #00d2ff 0%, #3a47d5 100%);\n}\n.home__feature_menu {\n  padding: 10px;\n  background: white;\n  border-radius: 4px;\n  margin: 10px;\n  width: 300px;\n  padding-left: 25px;\n}\n.home_header1 {\n  color: white;\n  width: 80%;\n  font-size: 1em;\n  font-weight: 500;\n}\n.home__feature_box {\n  display: flex;\n  max-width: 800px;\n  margin: auto;\n  margin-top: 4%;\n}\n.feature li {\n  list-style: none;\n  padding: 10px;\n}\n.feature li::before {\n  color: #FD9300;\n  content: \"•\";\n  display: inline-block;\n  font-size: 1.4em;\n  top: 0em;\n  font-weight: 600;\n  width: 15px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9MYW5kaW5nL2xhbmRpbmcuY29tcG9uZW50LnNjc3MiLCIvUHJvamVjdHMvQ2F0ZXJTZXJ2aWNlcy9zcmMvc3R5bGVzLnNjc3MiLCIvUHJvamVjdHMvQ2F0ZXJTZXJ2aWNlcy9zcmMvYXBwL2NvbXBvbmVudHMvTGFuZGluZy9sYW5kaW5nLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLGdCQUFnQjtBQ0FoQiw4RUFBQTtBQW9DQTtFQUNFLHFCQUFBO0FEakNGO0FDcUNBO0VBQ0ksbUJBdENTO0FESWI7QUNxQ0E7RUFDSSxtQkF6Q2M7QURPbEI7QUNxQ0E7RUFDSSxtQkE1Q1M7QURVYjtBQ29DQTtFQUNJLG1CQTdDYztBRFlsQjtBQ29DQTtFQUNJLG1CQS9DRztBRGNQO0FDbUNBO0VBQ0ksbUJBakRTO0FEaUJiO0FDa0NBO0VBQ0ksbUJBdERJO0FEdUJSO0FDaUNBO0VBRUUsbUJBdkRNO0FEd0JSO0FDaUNBO0VBQ0UsbUJBQUE7QUQ5QkY7QUNtQ0E7RUFDSSxjQXhFUztBRHdDYjtBQ21DQTtFQUNJLGNBM0VjO0FEMkNsQjtBQ21DQTtFQUNJLGNBOUVTO0FEOENiO0FDa0NBO0VBQ0ksY0EvRWM7QURnRGxCO0FDa0NBO0VBQ0ksY0FqRkc7QURrRFA7QUNpQ0E7RUFDSSxjQW5GUztBRHFEYjtBQ2dDQTtFQUNJLGNBeEZJO0FEMkRSO0FDbUNBO0VBQ0UsWUFBQTtBRGhDRjtBQ2tDQTtFQUNHLGlCQUFBO0VBQ0EsbUJBQUE7QUQvQkg7QUNpQ0E7RUFDRyxpQkFBQTtFQUNHLG1CQUFBO0FEOUJOO0FDZ0NBO0VBQ0csaUJBQUE7RUFDRyxtQkFBQTtBRDdCTjtBQytCQTtFQUNHLGlCQUFBO0VBQ0csbUJBQUE7QUQ1Qk47QUM4QkE7RUFDRyxpQkFBQTtFQUNHLG1CQUFBO0FEM0JOO0FDOEJBO0VBQ0kscUJBNUhTO0FEaUdiO0FDOEJBO0VBQ0sscUJBL0hhO0FEb0dsQjtBQzhCQTtFQUNLLHFCQWxJUTtBRHVHYjtBQzZCQTtFQUNLLHFCQW5JYTtBRHlHbEI7QUM2QkE7RUFDSyxxQkFySUU7QUQyR1A7QUM0QkE7RUFDSyxxQkF2SVE7QUQ4R2I7QUMyQkE7RUFDSyxxQkE1SUc7QURvSFI7QUMrQkU7RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGNBQUE7QUQ1Qko7QUM4QkU7RUFDRCxnQkFBQTtFQUNHLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLGdCQUFBO0FENUJKO0FDOEJJO0VBQ0EseUhBMUlRO0FEOEdaO0FDa0NBO0VBQ0UscUJBQUE7QUQvQkY7QUNtQ0E7RUFDSSxZQUFBO0VBQ0EsYUFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSx5SEExSlE7QUQwSFo7QUNtQ0E7RUFDSSxlQTlLTTtBRDhJVjtBQ2tDQTtFQUNJLGVBaExNO0FEaUpWO0FDaUNBO0VBQ0ksZUFqTE07QURtSlY7QUNnQ0E7RUFDSSxlQXJMTTtBRHdKVjtBQytCQTtFQUNJLGVBckxNO0FEeUpWO0FDOEJBO0VBQ0ksZUF2TE07QUQ0SlY7QUM2QkE7RUFDSSxlQXJMTTtBRDJKVjtBQzRCQTtFQUNJLGVBMUxNO0FEaUtWO0FDMkJBO0VBQ0ksZUE5TE07QURzS1Y7QUMwQkE7RUFDSSxlQS9MTTtBRHdLVjtBQzBCQTtFQUNJLGdCQWpNTTtBRDBLVjtBQzZCQTtFQUNJLGdCQXZNTTtBRDZLVjtBQzZCQTtFQUNJLGdCQTFNTTtBRGdMVjtBQzZCQTtFQUNJLGdCQTdNTTtBRG1MVjtBQytCQTtFQUNDLGVBL05TO0FEbU1WO0FDOEJBO0VBQ0MsZUFuT1M7QUR3TVY7QUM2QkE7RUFDQyxlQS9OUztBRHFNVjtBQzRCQTtFQUNDLGVBbk9TO0FEME1WO0FDMkJBO0VBQ0MsZUFwT1M7QUQ0TVY7QUMwQkE7RUFDQyxlQXRPUztBRCtNVjtBQzJCQTtFQUNBLGtCQUFBO0FEeEJBO0FDMEJBO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDRixrQkFBQTtBRHZCQTtBQ3lCQztFQUNELG1CQUFBO0FEdEJBO0FDeUJBO0VBQ0Esa0JBQUE7QUR0QkE7QUN3QkE7RUFDRSx1QkFBQTtFQUNBLGlCQUFBO0FEckJGO0FDd0JBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtFQUNBLHlIQTNQYTtFQTRQYixlQUFBO0FEckJBO0FDeUJBO0VBQ0EsNkVBaFFnQjtFQWlRYix5REFBQTtFQUNDLCtCQUFBO0VBQ0EsMEJBQUE7RUFDQSx3REFBQTtFQUNBLG9CQUFBO0VBQ0EsZUFBQTtBRHRCSjtBQzBCQTtFQUNFLHlIQTlRVTtBRHVQWjtBQ3lCQTtFQUNFLDRFQWhSYTtBRDBQZjtBQ3dCQTtFQUNFLHlIQWxSVztBRDZQYjtBQ3VCQTtFQUNFLHlIQXZSVTtBRG1RWjtBQ3VCQTtFQUNFLG1CQUFBO0FEcEJGO0FDd0JBO0VBQ0UsbUJBQUE7QURyQkY7QUN3QkE7RUFDRSxtQkFBQTtBRHJCRjtBQzZCQTtFQUNJLGdCQUFBO0VBQ0EsY0FIVztBRHZCZjtBQzRCQTtFQUNFLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDRix5QkFBQTtFQUNJLGdCQUFBO0VBQ0EsbUJBQUE7RUFDQSxxQkFBQTtFQUNBLFdBQUE7RUFDQSxnQkFBQTtFQUVBLFlBQUE7RUFDQSxnSEFBQTtBRDFCSjtBQytCRztFQUErQixZQUFBO0VBQzlCLGFBQUE7RUFDQSxVQUFBO0VBQ0EsT0FBQTtFQUNBLGdCQUFBO0VBQ0YsVUFBQTtBRDNCRjtBQzZCQTtFQUVJLFdBQUE7RUFDQSxRQUFBO0VBQ0EsU0FBQTtFQUNBLGtCQUFBO0VBQ0EscUJBQUE7RUFDQSxTQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsNkJBQUE7RUFDSCxVQUFBO0FEM0JEO0FDNkJBO0VBQ0EsY0FBQTtFQUNJLGNBQUE7RUFDQSxxQkFBQTtBRDFCSjtBQzRCQSxvRUFBQTtBQUNBO0VBQ0U7SUFDRSx3QkFBQTtFRHpCRjtBQUNGO0FDMkJBO0VBQ0U7SUFDRSx3QkFBQTtFRHpCRjs7RUMyQkE7SUFDRSx5QkFBQTtFRHhCRjs7RUMwQkE7SUFDRSx5QkFBQTtFRHZCRjs7RUN5QkE7SUFDRSx5QkFBQTtFRHRCRjs7RUN3QkE7SUFDRSxhQUFBO0lBQ0EsaUJBQUE7SUFDQSxrQkFBQTtJQUNBLFlBQUE7SUFDQSx1QkFBQTtJQUNBLGtCQUFBO0VEckJGO0FBQ0Y7QUN3QkE7RUFDRTtJQUNFLHlCQUFBO0VEdEJGOztFQ3dCQTtJQUNFLHlCQUFBO0VEckJGOztFQ3VCQTtJQUNFLGNBQUE7SUFFQSxzQkFBQTtFRHJCRjs7RUN1QkE7SUFDRSwwQkFBQTtJQUVBLDREQUFBO0VEckJGOztFQ3VCQTtJQUNFLGFBQUE7SUFDQSxpQkFBQTtJQUNBLGtCQUFBO0lBQ0EsWUFBQTtJQUNBLHVCQUFBO0lBQ0Esa0JBQUE7RURwQkY7QUFDRjtBQ3NCQSxxREFBQTtBQUNBO0VBQ0U7SUFDRSx3QkFBQTtFRHBCRjs7RUNzQkE7SUFDRSx3QkFBQTtFRG5CRjs7RUNxQkE7SUFDRSxjQUFBO0lBRUEsc0JBQUE7RURuQkY7O0VDcUJBO0lBQ0UsMEJBQUE7SUFFQSw0REFBQTtFRG5CRjtBQUNGO0FDc0JBLG1EQUFBO0FBQ0E7RUFDRTtJQUNFLHdCQUFBO0VEcEJGOztFQ3NCQTtJQUNFLHdCQUFBO0VEbkJGO0FBQ0Y7QUNzQkEsb0VBQUE7QUFDQTtFQUNFO0lBQ0Usd0JBQUE7RURwQkY7O0VDc0JBO0lBQ0Usd0JBQUE7RURuQkY7QUFDRjtBRS9iQTtFQUNFLFdBQUE7RUFDQSxZQUFBO0FGaWNGO0FFOWJBO0VBQ0UsMEJBQUE7QUZpY0Y7QUUvYkE7RUFDRSxjQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsVUFBQTtBRmtjRjtBRWhjQTtFQUNFLGVBQUE7RUFFQSw0REFBQTtBRmtjRjtBRWhjQTtFQUNFLGFBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtBRm1jRjtBRWhjQTtFQUNFLFlBQUE7RUFDQSxVQUFBO0VBQ0EsY0FBQTtFQUNBLGdCQUFBO0FGbWNGO0FFamNBO0VBQ0UsYUFBQTtFQUNBLGdCQUFBO0VBQ0EsWUFBQTtFQUNBLGNBQUE7QUZvY0Y7QUU5Ykc7RUFDRSxnQkFBQTtFQUNBLGFBQUE7QUZpY0w7QUUvYkc7RUFDQyxjRDVDUztFQzZDVCxZQUFBO0VBQ0EscUJBQUE7RUFDQSxnQkFBQTtFQUNBLFFBQUE7RUFDQSxnQkFBQTtFQUNBLFdBQUE7QUZpY0oiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL0xhbmRpbmcvbGFuZGluZy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBjaGFyc2V0IFwiVVRGLThcIjtcbi8qIFlvdSBjYW4gYWRkIGdsb2JhbCBzdHlsZXMgdG8gdGhpcyBmaWxlLCBhbmQgYWxzbyBpbXBvcnQgb3RoZXIgc3R5bGUgZmlsZXMgKi9cbmE6aG92ZXIge1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG59XG5cbi5iLXAge1xuICBiYWNrZ3JvdW5kOiAjMTYzOUY3O1xufVxuXG4uYi1wbCB7XG4gIGJhY2tncm91bmQ6ICM3MDg0RjI7XG59XG5cbi5iLXMge1xuICBiYWNrZ3JvdW5kOiAjRkQ5MzAwO1xufVxuXG4uYi1zbCB7XG4gIGJhY2tncm91bmQ6ICNFQkI0Njg7XG59XG5cbi5iLWcge1xuICBiYWNrZ3JvdW5kOiAjMzgzMzMzO1xufVxuXG4uYi1nbCB7XG4gIGJhY2tncm91bmQ6ICM3RTcwNzA7XG59XG5cbi5iLWIge1xuICBiYWNrZ3JvdW5kOiAjMDUwNTA1O1xufVxuXG4uYi1sIHtcbiAgYmFja2dyb3VuZDogI0ZBRkFGQTtcbn1cblxuLmItbmF2YmFyIHtcbiAgYmFja2dyb3VuZDogIzAwMTY4RDtcbn1cblxuLnRjLXAge1xuICBjb2xvcjogIzE2MzlGNztcbn1cblxuLnRjLXBsIHtcbiAgY29sb3I6ICM3MDg0RjI7XG59XG5cbi50Yy1zIHtcbiAgY29sb3I6ICNGRDkzMDA7XG59XG5cbi50Yy1zbCB7XG4gIGNvbG9yOiAjRUJCNDY4O1xufVxuXG4udGMtZyB7XG4gIGNvbG9yOiAjMzgzMzMzO1xufVxuXG4udGMtZ2wge1xuICBjb2xvcjogIzdFNzA3MDtcbn1cblxuLnRjLWIge1xuICBjb2xvcjogIzA1MDUwNTtcbn1cblxuLmItMCB7XG4gIGJvcmRlcjogbm9uZTtcbn1cblxuLmIxIHtcbiAgYm9yZGVyLXdpZHRoOiAxcHg7XG4gIGJvcmRlci1zdHlsZTogc29saWQ7XG59XG5cbi5iMiB7XG4gIGJvcmRlci13aWR0aDogMnB4O1xuICBib3JkZXItc3R5bGU6IHNvbGlkO1xufVxuXG4uYjMge1xuICBib3JkZXItd2lkdGg6IDNweDtcbiAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcbn1cblxuLmI0IHtcbiAgYm9yZGVyLXdpZHRoOiA0cHg7XG4gIGJvcmRlci1zdHlsZTogc29saWQ7XG59XG5cbi5iNSB7XG4gIGJvcmRlci13aWR0aDogNXB4O1xuICBib3JkZXItc3R5bGU6IHNvbGlkO1xufVxuXG4uYmMtcCB7XG4gIGJvcmRlci1jb2xvcjogIzE2MzlGNztcbn1cblxuLmJjLXBsIHtcbiAgYm9yZGVyLWNvbG9yOiAjNzA4NEYyO1xufVxuXG4uYmMtcyB7XG4gIGJvcmRlci1jb2xvcjogI0ZEOTMwMDtcbn1cblxuLmJjLXNsIHtcbiAgYm9yZGVyLWNvbG9yOiAjRUJCNDY4O1xufVxuXG4uYmMtZyB7XG4gIGJvcmRlci1jb2xvcjogIzM4MzMzMztcbn1cblxuLmJjLWdsIHtcbiAgYm9yZGVyLWNvbG9yOiAjN0U3MDcwO1xufVxuXG4uYmMtYiB7XG4gIGJvcmRlci1jb2xvcjogIzA1MDUwNTtcbn1cblxuLmctZm9ybSBsYWJlbCB7XG4gIG1hcmdpbjogMHB4O1xuICBwYWRkaW5nOiAwcHg7XG4gIGRpc3BsYXk6IGJsb2NrO1xufVxuLmctZm9ybSBpbnB1dCB7XG4gIHBhZGRpbmc6IDRweCA4cHg7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgd2lkdGg6IDEwMCU7XG4gIG1heC13aWR0aDogMzUwcHg7XG59XG4uZy1mb3JtIGlucHV0OmhvdmVyLCAuZy1mb3JtIGlucHV0OmFjdGl2ZSwgLmctZm9ybSBpbnB1dDpmb2N1cyB7XG4gIGJveC1zaGFkb3c6IDBweCAzcHggMXB4IC0ycHggcmdiYSgwLCAwLCAwLCAwLjIpLCAwcHggMnB4IDJweCAwcHggcmdiYSgwLCAwLCAwLCAwLjE0KSwgMHB4IDFweCA1cHggMHB4IHJnYmEoMCwgMCwgMCwgMC4xMik7XG59XG5cbmEge1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG59XG5cbi5ib3gge1xuICB3aWR0aDogMTAwcHg7XG4gIGhlaWdodDogMTAwcHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgbGluZS1oZWlnaHQ6IDEwMHB4O1xuICBib3gtc2hhZG93OiAwcHggM3B4IDFweCAtMnB4IHJnYmEoMCwgMCwgMCwgMC4yKSwgMHB4IDJweCAycHggMHB4IHJnYmEoMCwgMCwgMCwgMC4xNCksIDBweCAxcHggNXB4IDBweCByZ2JhKDAsIDAsIDAsIDAuMTIpO1xufVxuXG4udC00MCB7XG4gIGZvbnQtc2l6ZTogNDBweDtcbn1cblxuLnQtMzUge1xuICBmb250LXNpemU6IDM1cHg7XG59XG5cbi50LTMwIHtcbiAgZm9udC1zaXplOiAzMHB4O1xufVxuXG4udC0yNSB7XG4gIGZvbnQtc2l6ZTogMjVweDtcbn1cblxuLnQtMjAge1xuICBmb250LXNpemU6IDIwcHg7XG59XG5cbi50LTE1IHtcbiAgZm9udC1zaXplOiAxNXB4O1xufVxuXG4udC0xMCB7XG4gIGZvbnQtc2l6ZTogMTBweDtcbn1cblxuLnQtMTgge1xuICBmb250LXNpemU6IDE4cHg7XG59XG5cbi50LTE0IHtcbiAgZm9udC1zaXplOiAxNHB4O1xufVxuXG4udC0xMiB7XG4gIGZvbnQtc2l6ZTogMTJweDtcbn1cblxuLmYtd2Ige1xuICBmb250LXdlaWdodDogOTAwO1xufVxuXG4uZi13bSB7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG59XG5cbi5mLXdyIHtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbn1cblxuLmYtd2wge1xuICBmb250LXdlaWdodDogMzAwO1xufVxuXG4uaGVhZGluZy0xIHtcbiAgZm9udC1zaXplOiAzMHB4O1xufVxuXG4uaGVhZGluZy0yIHtcbiAgZm9udC1zaXplOiAyNXB4O1xufVxuXG4uaGVhZGluZy0zIHtcbiAgZm9udC1zaXplOiAxOHB4O1xufVxuXG4uaGVhZGluZy00IHtcbiAgZm9udC1zaXplOiAxNHB4O1xufVxuXG4uaGVhZGluZy01IHtcbiAgZm9udC1zaXplOiAxMnB4O1xufVxuXG4uaGVhZGluZy02IHtcbiAgZm9udC1zaXplOiAxMHB4O1xufVxuXG4uYnRuLW4ge1xuICBib3JkZXItcmFkaXVzOiAycHg7XG59XG5cbi5idG4tciB7XG4gIHdpZHRoOiA1MHB4O1xuICBoZWlnaHQ6IDUwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbn1cblxuLmJ0bi1zciB7XG4gIGJvcmRlci1yYWRpdXM6IDIwcHg7XG59XG5cbi5idG4tbXIsIC5idG4tb3V0LW1yIHtcbiAgYm9yZGVyLXJhZGl1czogN3B4O1xufVxuXG4uYnRuLW91dC1tciB7XG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICBwYWRkaW5nOiA2cHggMjBweDtcbn1cblxuLmJ0bi1uLCAuYnRuLXIsIC5idG4tbXIsIC5idG4tc3Ige1xuICBib3JkZXI6IG5vbmU7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgcGFkZGluZzogNnB4IDIwcHg7XG4gIGJveC1zaGFkb3c6IDBweCAzcHggMXB4IC0ycHggcmdiYSgwLCAwLCAwLCAwLjIpLCAwcHggMnB4IDJweCAwcHggcmdiYSgwLCAwLCAwLCAwLjE0KSwgMHB4IDFweCA1cHggMHB4IHJnYmEoMCwgMCwgMCwgMC4xMik7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLmJ0bi1uOmhvdmVyLCAuYnRuLXI6aG92ZXIsIC5idG4tc3I6aG92ZXIsIC5idG4tbXI6aG92ZXIsIC5idG4tb3V0LW1yOmhvdmVyIHtcbiAgYm94LXNoYWRvdzogMXB4IDNweCA1cHggcmdiYSgwLCAwLCAwLCAwLjI1KSwgMHB4IDRweCAxMHB4IHJnYmEoMCwgMCwgMCwgMC4yMik7XG4gIHRyYW5zaXRpb246IGJveC1zaGFkb3cgMjgwbXMgY3ViaWMtYmV6aWVyKDAuNCwgMCwgMC4yLCAxKTtcbiAgdHJhbnNpdGlvbi1wcm9wZXJ0eTogYm94LXNoYWRvdztcbiAgdHJhbnNpdGlvbi1kdXJhdGlvbjogMjgwbXM7XG4gIHRyYW5zaXRpb24tdGltaW5nLWZ1bmN0aW9uOiBjdWJpYy1iZXppZXIoMC40LCAwLCAwLjIsIDEpO1xuICB0cmFuc2l0aW9uLWRlbGF5OiAwcztcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4uZGl2LXNoYWRvdyB7XG4gIGJveC1zaGFkb3c6IDBweCAzcHggMXB4IC0ycHggcmdiYSgwLCAwLCAwLCAwLjIpLCAwcHggMnB4IDJweCAwcHggcmdiYSgwLCAwLCAwLCAwLjE0KSwgMHB4IDFweCA1cHggMHB4IHJnYmEoMCwgMCwgMCwgMC4xMik7XG59XG5cbi5kaXYtYm94LXNoYWRvdzpob3ZlciB7XG4gIGJveC1zaGFkb3c6IDFweCAzcHggM3B4IHJnYmEoMCwgMCwgMCwgMC4yNSksIDBweCAzcHggMnB4IHJnYmEoMCwgMCwgMCwgMC4yMik7XG59XG5cbi5idG4tc2hhZG93IHtcbiAgYm94LXNoYWRvdzogMHB4IDNweCAxcHggLTJweCByZ2JhKDAsIDAsIDAsIDAuMiksIDBweCAycHggMnB4IDBweCByZ2JhKDAsIDAsIDAsIDAuMTQpLCAwcHggMXB4IDVweCAwcHggcmdiYSgwLCAwLCAwLCAwLjEyKTtcbn1cblxuLmJ0bi1zaGFkb3ctaCB7XG4gIGJveC1zaGFkb3c6IDBweCAzcHggMXB4IC0ycHggcmdiYSgwLCAwLCAwLCAwLjIpLCAwcHggMnB4IDJweCAwcHggcmdiYSgwLCAwLCAwLCAwLjE0KSwgMHB4IDFweCA1cHggMHB4IHJnYmEoMCwgMCwgMCwgMC4xMik7XG59XG5cbi5sZXR0ZXItc3BhY2UtMSB7XG4gIGxldHRlci1zcGFjaW5nOiAxcHg7XG59XG5cbi5sZXR0ZXItc3BhY2UtMiB7XG4gIGxldHRlci1zcGFjaW5nOiAycHg7XG59XG5cbi5sZXR0ZXItc3BhY2UtMyB7XG4gIGxldHRlci1zcGFjaW5nOiAzcHg7XG59XG5cbi5jdXN0b21fbGFiZWwge1xuICBmb250LXNpemU6IDAuNmVtO1xuICBjb2xvcjogIzM3YWZlNTtcbn1cblxuLmN1c3RvbWUtYnRuLTEge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIGJhY2tncm91bmQtY29sb3I6ICMzN2FmZTU7XG4gIHBhZGRpbmc6IDRweCAxcHg7XG4gIGJvcmRlci1yYWRpdXM6IDIwcHg7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgd2lkdGg6IDEwMCU7XG4gIG1heC13aWR0aDogMTIwcHg7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgYm94LXNoYWRvdzogMCA0cHggNXB4IDAgcmdiYSgwLCAwLCAwLCAwLjE0KSwgMCAxcHggMTBweCAwIHJnYmEoMCwgMCwgMCwgMC4xMiksIDAgMnB4IDRweCAtMXB4IHJnYmEoMCwgMCwgMCwgMC4zKTtcbn1cblxuLmN1c3RvbWUtYnRuLTE6aG92ZXI6OmJlZm9yZSB7XG4gIHdpZHRoOiAyMDBweDtcbiAgaGVpZ2h0OiAyMDBweDtcbiAgdG9wOiAtNzhweDtcbiAgbGVmdDogMDtcbiAgYm9yZGVyLXJhZGl1czogMDtcbiAgb3BhY2l0eTogMTtcbn1cblxuLmN1c3RvbWUtYnRuLTE6OmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIHdpZHRoOiAwO1xuICBoZWlnaHQ6IDA7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgYmFja2dyb3VuZDogIzA3ZmIxMTNkO1xuICB0b3A6IDIycHg7XG4gIGxlZnQ6IDEwMHB4O1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIHRyYW5zaXRpb246IGFsbCAwLjVzIGVhc2Utb3V0O1xuICBvcGFjaXR5OiAwO1xufVxuXG4uY3VzdG9tX2lucHV0IHtcbiAgZm9udC1zaXplOiAxZW07XG4gIGNvbG9yOiAjMzdhZmU1O1xuICBib3JkZXItY29sb3I6ICMwM0E5RjQ7XG59XG5cbi8qIFNtYWxsIGRldmljZXMgKHBvcnRyYWl0IHRhYmxldHMgYW5kIGxhcmdlIHBob25lcywgNjAwcHggYW5kIHVwKSAqL1xuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA2MDBweCkge1xuICAudG9vbGJhciAuZGVza3RvcCB7XG4gICAgZGlzcGxheTogbm9uZSAhaW1wb3J0YW50O1xuICB9XG59XG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDYwMHB4KSB7XG4gIC50b29sYmFyIC5kZXNrdG9wIHtcbiAgICBkaXNwbGF5OiBub25lICFpbXBvcnRhbnQ7XG4gIH1cblxuICAuaG9tZSB7XG4gICAgZGlzcGxheTogYmxvY2sgIWltcG9ydGFudDtcbiAgfVxuXG4gIC5ob21lX19mZWF0dXJlX2JveCB7XG4gICAgZGlzcGxheTogYmxvY2sgIWltcG9ydGFudDtcbiAgfVxuXG4gIC5ob21lX2Jhbm5lciB7XG4gICAgZGlzcGxheTogYmxvY2sgIWltcG9ydGFudDtcbiAgfVxuXG4gIC5ob21lX19mZWF0dXJlX21lbnUge1xuICAgIHBhZGRpbmc6IDEwcHg7XG4gICAgYmFja2dyb3VuZDogd2hpdGU7XG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xuICAgIG1hcmdpbjogMTBweDtcbiAgICB3aWR0aDogMjAwcHggIWltcG9ydGFudDtcbiAgICBwYWRkaW5nLWxlZnQ6IDI1cHg7XG4gIH1cbn1cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY4cHgpIHtcbiAgLmhvbWVfX2ZlYXR1cmVfYm94IHtcbiAgICBkaXNwbGF5OiBibG9jayAhaW1wb3J0YW50O1xuICB9XG5cbiAgLmhvbWVfYmFubmVyIHtcbiAgICBkaXNwbGF5OiBibG9jayAhaW1wb3J0YW50O1xuICB9XG5cbiAgLmhvbWVfaGVhZGVyMiB7XG4gICAgY29sb3I6ICM2NzYzNjM7XG4gICAgd2lkdGg6IDEwMCUgIWltcG9ydGFudDtcbiAgfVxuXG4gIC5ob21lX19mZWF0dXJlIHtcbiAgICBtYXJnaW46IDE1JSAwcHggIWltcG9ydGFudDtcbiAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoOTBkZWcsICMwMGQyZmYgMCUsICMzYTQ3ZDUgMTAwJSk7XG4gIH1cblxuICAuaG9tZV9fZmVhdHVyZV9tZW51IHtcbiAgICBwYWRkaW5nOiAxMHB4O1xuICAgIGJhY2tncm91bmQ6IHdoaXRlO1xuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgICBtYXJnaW46IDEwcHg7XG4gICAgd2lkdGg6IDIwMHB4ICFpbXBvcnRhbnQ7XG4gICAgcGFkZGluZy1sZWZ0OiAyNXB4O1xuICB9XG59XG4vKiBNZWRpdW0gZGV2aWNlcyAobGFuZHNjYXBlIHRhYmxldHMsIDc2OHB4IGFuZCB1cCkgKi9cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNzY4cHgpIHtcbiAgLnRvb2xiYXIgLmRlc2t0b3Age1xuICAgIGRpc3BsYXk6IGZsZXggIWltcG9ydGFudDtcbiAgfVxuXG4gIC5tLW1lbnUtaWNvbiB7XG4gICAgZGlzcGxheTogbm9uZSAhaW1wb3J0YW50O1xuICB9XG5cbiAgLmhvbWVfaGVhZGVyMiB7XG4gICAgY29sb3I6ICM2NzYzNjM7XG4gICAgd2lkdGg6IDEwMCUgIWltcG9ydGFudDtcbiAgfVxuXG4gIC5ob21lX19mZWF0dXJlIHtcbiAgICBtYXJnaW46IDE1JSAwcHggIWltcG9ydGFudDtcbiAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoOTBkZWcsICMwMGQyZmYgMCUsICMzYTQ3ZDUgMTAwJSk7XG4gIH1cbn1cbi8qIExhcmdlIGRldmljZXMgKGxhcHRvcHMvZGVza3RvcHMsIDk5MnB4IGFuZCB1cCkgKi9cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogOTkycHgpIHtcbiAgLnRvb2xiYXIgLm1vYmlsZSB7XG4gICAgZGlzcGxheTogbm9uZSAhaW1wb3J0YW50O1xuICB9XG5cbiAgLm0tbWVudS1pY29uIHtcbiAgICBkaXNwbGF5OiBub25lICFpbXBvcnRhbnQ7XG4gIH1cbn1cbi8qIEV4dHJhIGxhcmdlIGRldmljZXMgKGxhcmdlIGxhcHRvcHMgYW5kIGRlc2t0b3BzLCAxMjAwcHggYW5kIHVwKSAqL1xuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAxMjAwcHgpIHtcbiAgLnRvb2xiYXIgLmRlc2t0b3Age1xuICAgIGRpc3BsYXk6IGZsZXggIWltcG9ydGFudDtcbiAgfVxuXG4gIC5tLW1lbnUtaWNvbiB7XG4gICAgZGlzcGxheTogbm9uZSAhaW1wb3J0YW50O1xuICB9XG59XG4uaG9tZV9hY2hpZXZlciB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IGF1dG87XG59XG5cbi5ob21lIHtcbiAgbWFyZ2luLXRvcDogMTAlICFpbXBvcnRhbnQ7XG59XG5cbi5ob21lX2hlYWRlcjIge1xuICBjb2xvcjogIzY3NjM2MztcbiAgbWFyZ2luLXRvcDogM2VtO1xuICBmb250LXNpemU6IDAuOGVtO1xuICB3aWR0aDogODAlO1xufVxuXG4uaG9tZV9fZmVhdHVyZSB7XG4gIG1hcmdpbjogMTUlIDJlbTtcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDkwZGVnLCAjMDBkMmZmIDAlLCAjM2E0N2Q1IDEwMCUpO1xufVxuXG4uaG9tZV9fZmVhdHVyZV9tZW51IHtcbiAgcGFkZGluZzogMTBweDtcbiAgYmFja2dyb3VuZDogd2hpdGU7XG4gIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgbWFyZ2luOiAxMHB4O1xuICB3aWR0aDogMzAwcHg7XG4gIHBhZGRpbmctbGVmdDogMjVweDtcbn1cblxuLmhvbWVfaGVhZGVyMSB7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgd2lkdGg6IDgwJTtcbiAgZm9udC1zaXplOiAxZW07XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG59XG5cbi5ob21lX19mZWF0dXJlX2JveCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIG1heC13aWR0aDogODAwcHg7XG4gIG1hcmdpbjogYXV0bztcbiAgbWFyZ2luLXRvcDogNCU7XG59XG5cbi5mZWF0dXJlIGxpIHtcbiAgbGlzdC1zdHlsZTogbm9uZTtcbiAgcGFkZGluZzogMTBweDtcbn1cbi5mZWF0dXJlIGxpOjpiZWZvcmUge1xuICBjb2xvcjogI0ZEOTMwMDtcbiAgY29udGVudDogXCLigKJcIjtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBmb250LXNpemU6IDEuNGVtO1xuICB0b3A6IDBlbTtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgd2lkdGg6IDE1cHg7XG59IiwiLyogWW91IGNhbiBhZGQgZ2xvYmFsIHN0eWxlcyB0byB0aGlzIGZpbGUsIGFuZCBhbHNvIGltcG9ydCBvdGhlciBzdHlsZSBmaWxlcyAqL1xuXG4vL3ZhcmlhYmxlc1xuXG4gICRwcmltYXJ5IDogIzE2MzlGNztcbiAgJHByaW1hcnktbGlnaHQ6ICM3MDg0RjI7XG4gICRzZWNvdW5kcnk6I0ZEOTMwMDtcblxuJHNlY291bmRyeS1saWdodDogI0VCQjQ2ODtcbiRibGFjazogIzA1MDUwNTtcbiRncmF5OiAjMzgzMzMzO1xuJGdyYXktbGlnaHQ6ICM3RTcwNzA7XG4kbGlnaHQ6ICNGQUZBRkE7XG4kd2hpdGU6IHdoaXRlO1xuJHRleHQtNDA6IDQwcHg7XG4kdGV4dC0zNTogMzVweDtcbiR0ZXh0LTI1OiAyNXB4O1xuJHRleHQtMzA6IDMwcHg7XG5cbiR0ZXh0LTIwOiAyMHB4O1xuJHRleHQtMTU6IDE1cHg7XG4kdGV4dC0xODogMThweDtcbiR0ZXh0LTE0OiAxNHB4O1xuJHRleHQtMTg6IDE4cHg7XG4kdGV4dC0xMjogMTJweDtcbiR0ZXh0LTEwOiAxMHB4O1xuJGZvbnQtd2I6IDkwMDtcbiRmb250LXdtOiA2MDA7XG4kZm9udC13cjogNTAwO1xuJGZvbnQtd2w6IDMwMDtcbiRkLXNoYWRvdzogIDBweCAzcHggMXB4IC0ycHggcmdiYSgwLCAwLCAwLCAwLjIpLCAwcHggMnB4IDJweCAwcHggcmdiYSgwLCAwLCAwLCAwLjE0KSwgMHB4IDFweCA1cHggMHB4IHJnYmEoMCwwLDAsLjEyKTtcbiRkLXNoYWRvdy1oIDogIDFweCAzcHggM3B4IHJnYmEoMCwgMCwgMCwgMC4yNSksIDBweCAzcHggMnB4IHJnYmEoMCwgMCwgMCwgMC4yMik7XG4kYnRuLXNoYWRvdzogMHB4IDNweCAxcHggLTJweCByZ2JhKDAsIDAsIDAsIDAuMiksIDBweCAycHggMnB4IDBweCByZ2JhKDAsIDAsIDAsIDAuMTQpLCAwcHggMXB4IDVweCAwcHggcmdiYSgwLDAsMCwuMTIpO1xuJGJ0bi1zaGFkb3ctaCA6IDFweCAzcHggNXB4IHJnYmEoMCwgMCwgMCwgMC4yNSksIDBweCA0cHggMTBweCByZ2JhKDAsIDAsIDAsIDAuMjIpO1xuXG4vL2FcbmE6aG92ZXJ7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbn1cbiBcbi8vQ29tbW9uIENsYXNzZXNcbi5iLXAge1xuICAgIGJhY2tncm91bmQ6ICRwcmltYXJ5O1xufVxuXG4uYi1wbCB7XG4gICAgYmFja2dyb3VuZDogJHByaW1hcnktbGlnaHQ7XG59XG5cbi5iLXMge1xuICAgIGJhY2tncm91bmQ6ICRzZWNvdW5kcnk7XG59XG4uYi1zbCB7XG4gICAgYmFja2dyb3VuZDogJHNlY291bmRyeS1saWdodFxufVxuXG4uYi1ne1xuICAgIGJhY2tncm91bmQ6ICRncmF5O1xufVxuLmItZ2x7XG4gICAgYmFja2dyb3VuZDogJGdyYXktbGlnaHQ7XG59XG4uYi1ie1xuICAgIGJhY2tncm91bmQ6ICRibGFjaztcbn1cbi5iLWx7XG4gIFxuICBiYWNrZ3JvdW5kOiRsaWdodH1cblxuLmItbmF2YmFye1xuICBiYWNrZ3JvdW5kOiAjMDAxNjhEO1xufVxuXG5cbi8vdGV4dC1jb2xvclxuLnRjLXAge1xuICAgIGNvbG9yOiAkcHJpbWFyeTtcbn1cblxuLnRjLXBsIHtcbiAgICBjb2xvcjogJHByaW1hcnktbGlnaHQ7XG59XG5cbi50Yy1zIHtcbiAgICBjb2xvcjogJHNlY291bmRyeTtcbn1cbi50Yy1zbCB7XG4gICAgY29sb3I6ICRzZWNvdW5kcnktbGlnaHRcbn1cblxuLnRjLWd7XG4gICAgY29sb3I6ICRncmF5O1xufVxuLnRjLWdse1xuICAgIGNvbG9yOiAkZ3JheS1saWdodDtcbn1cbi50Yy1ie1xuICAgIGNvbG9yOiAkYmxhY2s7XG59XG5cblxuLy9ib3JkZXIgXG5cbi5iLTB7XG4gIGJvcmRlcjpub25lO1xufVxuLmIxe1xuICAgYm9yZGVyLXdpZHRoOiAxcHg7XG4gICBib3JkZXItc3R5bGU6IHNvbGlkO1xufVxuLmIye1xuICAgYm9yZGVyLXdpZHRoOiAycHg7XG4gICAgICBib3JkZXItc3R5bGU6IHNvbGlkO1xufVxuLmIze1xuICAgYm9yZGVyLXdpZHRoOiAzcHg7XG4gICAgICBib3JkZXItc3R5bGU6IHNvbGlkO1xufVxuLmI0e1xuICAgYm9yZGVyLXdpZHRoOiA0cHg7XG4gICAgICBib3JkZXItc3R5bGU6IHNvbGlkO1xufVxuLmI1e1xuICAgYm9yZGVyLXdpZHRoOiA1cHg7XG4gICAgICBib3JkZXItc3R5bGU6IHNvbGlkO1xufVxuXG4uYmMtcCB7XG4gICAgYm9yZGVyLWNvbG9yOiAkcHJpbWFyeTtcbn1cblxuLmJjLXBsIHtcbiAgICAgYm9yZGVyLWNvbG9yOiAkcHJpbWFyeS1saWdodDtcbn1cblxuLmJjLXMge1xuICAgICBib3JkZXItY29sb3I6ICRzZWNvdW5kcnk7XG59XG4uYmMtc2wge1xuICAgICBib3JkZXItY29sb3I6ICRzZWNvdW5kcnktbGlnaHRcbn1cblxuLmJjLWd7XG4gICAgIGJvcmRlci1jb2xvcjogJGdyYXk7XG59XG4uYmMtZ2x7XG4gICAgIGJvcmRlci1jb2xvcjogJGdyYXktbGlnaHQ7XG59XG4uYmMtYntcbiAgICAgYm9yZGVyLWNvbG9yOiAkYmxhY2s7XG59XG5cblxuLy9mb3JtIFxuXG4uZy1mb3Jte1xuICBsYWJlbHtcbiAgICBtYXJnaW46MHB4O1xuICAgIHBhZGRpbmc6IDBweDtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgfVxuICBpbnB1dHtcbiBwYWRkaW5nOiA0cHggOHB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBtYXgtd2lkdGg6IDM1MHB4O1xuICB9XG4gICAgaW5wdXQ6aG92ZXIgLCBpbnB1dDphY3RpdmUgLCBpbnB1dDpmb2N1c3tcbiAgICBib3gtc2hhZG93OiAkZC1zaGFkb3c7XG4gIH1cbn1cblxuLy9hXG5cbmF7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbn1cblxuXG4uYm94e1xuICAgIHdpZHRoOjEwMHB4O1xuICAgIGhlaWdodDogMTAwcHg7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGxpbmUtaGVpZ2h0OiAxMDBweDtcbiAgICBib3gtc2hhZG93OiAkZC1zaGFkb3c7XG59XG5cbi50LTQwe1xuICAgIGZvbnQtc2l6ZTogJHRleHQtNDA7XG59XG4udC0zNXtcbiAgICBmb250LXNpemU6ICR0ZXh0LTM1O1xufVxuLnQtMzB7XG4gICAgZm9udC1zaXplOiAkdGV4dC0zMDtcbn1cbi50LTI1e1xuICAgIGZvbnQtc2l6ZTogJHRleHQtMjU7XG59XG4udC0yMHtcbiAgICBmb250LXNpemU6ICR0ZXh0LTIwO1xufVxuLnQtMTV7XG4gICAgZm9udC1zaXplOiAkdGV4dC0xNTtcbn1cbi50LTEwe1xuICAgIGZvbnQtc2l6ZTogJHRleHQtMTA7XG59XG4udC0xOHtcbiAgICBmb250LXNpemU6ICR0ZXh0LTE4O1xufVxuLnQtMTR7XG4gICAgZm9udC1zaXplOiAkdGV4dC0xNDtcbn1cbi50LTEye1xuICAgIGZvbnQtc2l6ZTogJHRleHQtMTI7XG59XG5cbi5mLXdie1xuICAgIGZvbnQtd2VpZ2h0OiAkZm9udC13Yjtcbn1cblxuXG5cblxuLmYtd217XG4gICAgZm9udC13ZWlnaHQ6ICRmb250LXdtO1xufVxuXG4uZi13cntcbiAgICBmb250LXdlaWdodDogJGZvbnQtd3I7XG59XG5cbi5mLXdse1xuICAgIGZvbnQtd2VpZ2h0OiAkZm9udC13bDtcbn1cblxuLy9UZXh0IGhlYWRpbmcgXG5cbi5oZWFkaW5nLTF7XG4gZm9udC1zaXplOiAkdGV4dC0zMDtcbn1cbi5oZWFkaW5nLTJ7XG4gZm9udC1zaXplOiAkdGV4dC0yNTtcbn1cbi5oZWFkaW5nLTN7XG4gZm9udC1zaXplOiAkdGV4dC0xODtcbn1cbi5oZWFkaW5nLTR7XG4gZm9udC1zaXplOiAkdGV4dC0xNDtcbn1cbi5oZWFkaW5nLTV7XG4gZm9udC1zaXplOiAkdGV4dC0xMjtcbn1cbi5oZWFkaW5nLTZ7XG4gZm9udC1zaXplOiAkdGV4dC0xMDtcbn1cblxuLy9CdXR0b25zXG4uYnRuLW57XG5ib3JkZXItcmFkaXVzOiAycHg7XG59XG4uYnRuLXJ7XG4gIHdpZHRoOiA1MHB4O1xuICBoZWlnaHQ6IDUwcHg7XG5ib3JkZXItcmFkaXVzOiA1MCU7XG4gfVxuIC5idG4tc3J7XG5ib3JkZXItcmFkaXVzOiAyMHB4O1xuIH1cblxuLmJ0bi1tciAsIC5idG4tb3V0LW1ye1xuYm9yZGVyLXJhZGl1czogN3B4O1xufVxuLmJ0bi1vdXQtbXJ7XG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICBwYWRkaW5nOjZweCAyMHB4O1xufVxuXG4uYnRuLW4sIC5idG4tciwgLmJ0bi1tciwgLmJ0bi1zcntcbmJvcmRlcjogbm9uZTtcbmNvbG9yOiB3aGl0ZTtcbnBhZGRpbmc6NnB4IDIwcHg7XG5ib3gtc2hhZG93OiAkYnRuLXNoYWRvdztcbmN1cnNvcjogcG9pbnRlcjtcblxufVxuXG4uYnRuLW46aG92ZXIgLCAuYnRuLXI6aG92ZXIsICAuYnRuLXNyOmhvdmVyICwgLmJ0bi1tcjpob3ZlciwgLmJ0bi1vdXQtbXI6aG92ZXJ7XG5ib3gtc2hhZG93OiAkYnRuLXNoYWRvdy1oO1xuICAgdHJhbnNpdGlvbjogYm94LXNoYWRvdyAyODBtcyBjdWJpYy1iZXppZXIoMC40LCAwLCAwLjIsIDEpO1xuICAgIHRyYW5zaXRpb24tcHJvcGVydHk6IGJveC1zaGFkb3c7XG4gICAgdHJhbnNpdGlvbi1kdXJhdGlvbjogMjgwbXM7XG4gICAgdHJhbnNpdGlvbi10aW1pbmctZnVuY3Rpb246IGN1YmljLWJlemllcigwLjQsIDAsIDAuMiwgMSk7XG4gICAgdHJhbnNpdGlvbi1kZWxheTogMHM7XG4gICAgY3Vyc29yOiBwb2ludGVyXG5cbn1cblxuLmRpdi1zaGFkb3cge1xuICBib3gtc2hhZG93OiAkZC1zaGFkb3c7XG59XG4uZGl2LWJveC1zaGFkb3c6aG92ZXIge1xuICBib3gtc2hhZG93OiAkZC1zaGFkb3ctaDtcbn1cbi5idG4tc2hhZG93IHtcbiAgYm94LXNoYWRvdzogJGJ0bi1zaGFkb3c7XG59XG4uYnRuLXNoYWRvdy1oe1xuICBib3gtc2hhZG93OiAkZC1zaGFkb3c7XG59XG5cbi5sZXR0ZXItc3BhY2UtMXtcbiAgbGV0dGVyLXNwYWNpbmc6IDFweDtcbn1cblxuXG4ubGV0dGVyLXNwYWNlLTJ7XG4gIGxldHRlci1zcGFjaW5nOiAycHg7XG59XG5cbi5sZXR0ZXItc3BhY2UtM3tcbiAgbGV0dGVyLXNwYWNpbmc6IDNweDtcbn1cblxuLnRvb2xiYXIge1xuXG59XG5cbiR0aGVtZS1jb2xvciA6ICMzN2FmZTU7XG4uY3VzdG9tX2xhYmVse1xuICAgIGZvbnQtc2l6ZTogMC42ZW07XG4gICAgY29sb3I6ICR0aGVtZS1jb2xvcjtcbn1cbi5jdXN0b21lLWJ0bi0xIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuYmFja2dyb3VuZC1jb2xvcjogIzM3YWZlNTtcbiAgICBwYWRkaW5nOiA0cHggMXB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIG1heC13aWR0aDogMTIwcHg7XG5cbiAgICBjb2xvcjogd2hpdGU7XG4gICAgYm94LXNoYWRvdzogMCA0cHggNXB4IDAgcmdiYSgwLCAwLCAwLCAwLjE0KSwgMCAxcHggMTBweCAwIHJnYmEoMCwgMCwgMCwgMC4xMiksIDAgMnB4IDRweCAtMXB4IHJnYmEoMCwgMCwgMCwgMC4zKTtcblxufVxuXG5cbiAgIC5jdXN0b21lLWJ0bi0xOmhvdmVyOjpiZWZvcmUgeyB3aWR0aDogMjAwcHg7XG4gICAgaGVpZ2h0OiAyMDBweDtcbiAgICB0b3A6IC03OHB4O1xuICAgIGxlZnQ6IDA7XG4gICAgYm9yZGVyLXJhZGl1czogMDtcbiAgb3BhY2l0eToxO1xuICAgfVxuLmN1c3RvbWUtYnRuLTE6OmJlZm9yZXtcblxuICAgIGNvbnRlbnQ6IFwiXCI7XG4gICAgd2lkdGg6IDA7XG4gICAgaGVpZ2h0OiAwO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBiYWNrZ3JvdW5kOiAjMDdmYjExM2Q7XG4gICAgdG9wOiAyMnB4O1xuICAgIGxlZnQ6IDEwMHB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC41cyBlYXNlLW91dDtcblx0b3BhY2l0eTowO1xufVxuLmN1c3RvbV9pbnB1dHtcbmZvbnQtc2l6ZTogMWVtO1xuICAgIGNvbG9yOiAjMzdhZmU1O1xuICAgIGJvcmRlci1jb2xvcjogIzAzQTlGNDtcbn1cbi8qIFNtYWxsIGRldmljZXMgKHBvcnRyYWl0IHRhYmxldHMgYW5kIGxhcmdlIHBob25lcywgNjAwcHggYW5kIHVwKSAqL1xuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA2MDBweCkge1xuICAudG9vbGJhciAuZGVza3RvcCB7XG4gICAgZGlzcGxheTogbm9uZSAhaW1wb3J0YW50O1xuICB9XG59XG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDYwMHB4KSB7XG4gIC50b29sYmFyIC5kZXNrdG9wIHtcbiAgICBkaXNwbGF5OiBub25lICFpbXBvcnRhbnQ7XG4gIH1cbiAgLmhvbWUge1xuICAgIGRpc3BsYXk6IGJsb2NrICFpbXBvcnRhbnQ7XG4gIH1cbiAgLmhvbWVfX2ZlYXR1cmVfYm94IHtcbiAgICBkaXNwbGF5OiBibG9jayAhaW1wb3J0YW50O1xuICB9XG4gIC5ob21lX2Jhbm5lciB7XG4gICAgZGlzcGxheTogYmxvY2sgIWltcG9ydGFudDtcbiAgfVxuICAuaG9tZV9fZmVhdHVyZV9tZW51IHtcbiAgICBwYWRkaW5nOiAxMHB4O1xuICAgIGJhY2tncm91bmQ6IHdoaXRlO1xuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgICBtYXJnaW46IDEwcHg7XG4gICAgd2lkdGg6IDIwMHB4ICFpbXBvcnRhbnQ7XG4gICAgcGFkZGluZy1sZWZ0OiAyNXB4O1xuICB9XG59XG5cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY4cHgpIHtcbiAgLmhvbWVfX2ZlYXR1cmVfYm94IHtcbiAgICBkaXNwbGF5OiBibG9jayAhaW1wb3J0YW50O1xuICB9XG4gIC5ob21lX2Jhbm5lciB7XG4gICAgZGlzcGxheTogYmxvY2sgIWltcG9ydGFudDtcbiAgfVxuICAuaG9tZV9oZWFkZXIyIHtcbiAgICBjb2xvcjogIzY3NjM2MztcblxuICAgIHdpZHRoOiAxMDAlICFpbXBvcnRhbnQ7XG4gIH1cbiAgLmhvbWVfX2ZlYXR1cmUge1xuICAgIG1hcmdpbjogMTUlIDBweCAhaW1wb3J0YW50O1xuXG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDkwZGVnLCAjMDBkMmZmIDAlLCAjM2E0N2Q1IDEwMCUpO1xuICB9XG4gIC5ob21lX19mZWF0dXJlX21lbnUge1xuICAgIHBhZGRpbmc6IDEwcHg7XG4gICAgYmFja2dyb3VuZDogd2hpdGU7XG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xuICAgIG1hcmdpbjogMTBweDtcbiAgICB3aWR0aDogMjAwcHggIWltcG9ydGFudDtcbiAgICBwYWRkaW5nLWxlZnQ6IDI1cHg7XG4gIH1cbn1cbi8qIE1lZGl1bSBkZXZpY2VzIChsYW5kc2NhcGUgdGFibGV0cywgNzY4cHggYW5kIHVwKSAqL1xuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA3NjhweCkge1xuICAudG9vbGJhciAuZGVza3RvcCB7XG4gICAgZGlzcGxheTogZmxleCAhaW1wb3J0YW50O1xuICB9XG4gIC5tLW1lbnUtaWNvbiB7XG4gICAgZGlzcGxheTogbm9uZSAhaW1wb3J0YW50O1xuICB9XG4gIC5ob21lX2hlYWRlcjIge1xuICAgIGNvbG9yOiAjNjc2MzYzO1xuXG4gICAgd2lkdGg6IDEwMCUgIWltcG9ydGFudDtcbiAgfVxuICAuaG9tZV9fZmVhdHVyZSB7XG4gICAgbWFyZ2luOiAxNSUgMHB4ICFpbXBvcnRhbnQ7XG5cbiAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoOTBkZWcsICMwMGQyZmYgMCUsICMzYTQ3ZDUgMTAwJSk7XG4gIH1cbn1cblxuLyogTGFyZ2UgZGV2aWNlcyAobGFwdG9wcy9kZXNrdG9wcywgOTkycHggYW5kIHVwKSAqL1xuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA5OTJweCkge1xuICAudG9vbGJhciAubW9iaWxlIHtcbiAgICBkaXNwbGF5OiBub25lICFpbXBvcnRhbnQ7XG4gIH1cbiAgLm0tbWVudS1pY29uIHtcbiAgICBkaXNwbGF5OiBub25lICFpbXBvcnRhbnQ7XG4gIH1cbn1cblxuLyogRXh0cmEgbGFyZ2UgZGV2aWNlcyAobGFyZ2UgbGFwdG9wcyBhbmQgZGVza3RvcHMsIDEyMDBweCBhbmQgdXApICovXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDEyMDBweCkge1xuICAudG9vbGJhciAuZGVza3RvcCB7XG4gICAgZGlzcGxheTogZmxleCAhaW1wb3J0YW50O1xuICB9XG4gIC5tLW1lbnUtaWNvbiB7XG4gICAgZGlzcGxheTogbm9uZSAhaW1wb3J0YW50O1xuICB9XG59XG4iLCJAaW1wb3J0IFwiLi4vLi4vLi4vc3R5bGVzLnNjc3NcIjtcbi5ob21lX2FjaGlldmVyIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogYXV0bztcbn1cblxuLmhvbWUge1xuICBtYXJnaW4tdG9wOiAxMCUgIWltcG9ydGFudDtcbn1cbi5ob21lX2hlYWRlcjIge1xuICBjb2xvcjogIzY3NjM2MztcbiAgbWFyZ2luLXRvcDogM2VtO1xuICBmb250LXNpemU6IDAuOGVtO1xuICB3aWR0aDogODAlO1xufVxuLmhvbWVfX2ZlYXR1cmUge1xuICBtYXJnaW46IDE1JSAyZW07XG5cbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDkwZGVnLCAjMDBkMmZmIDAlLCAjM2E0N2Q1IDEwMCUpO1xufVxuLmhvbWVfX2ZlYXR1cmVfbWVudSB7XG4gIHBhZGRpbmc6IDEwcHg7XG4gIGJhY2tncm91bmQ6IHdoaXRlO1xuICBib3JkZXItcmFkaXVzOiA0cHg7XG4gIG1hcmdpbjogMTBweDtcbiAgd2lkdGg6IDMwMHB4O1xuICBwYWRkaW5nLWxlZnQ6IDI1cHg7XG59XG5cbi5ob21lX2hlYWRlcjEge1xuICBjb2xvcjogd2hpdGU7XG4gIHdpZHRoOiA4MCU7XG4gIGZvbnQtc2l6ZTogMWVtO1xuICBmb250LXdlaWdodDogNTAwO1xufVxuLmhvbWVfX2ZlYXR1cmVfYm94IHtcbiAgZGlzcGxheTogZmxleDtcbiAgbWF4LXdpZHRoOiA4MDBweDtcbiAgbWFyZ2luOiBhdXRvO1xuICBtYXJnaW4tdG9wOiA0JTtcbn1cblxuXG4uZmVhdHVyZSB7XG4gXG4gICBsaXtcbiAgICAgbGlzdC1zdHlsZTpub25lIDtcbiAgICAgcGFkZGluZzogMTBweDtcbiAgIH1cbiAgIGxpOjpiZWZvcmV7XG4gICAgY29sb3I6ICRzZWNvdW5kcnk7XG4gICAgY29udGVudDogXCLigKJcIjtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgZm9udC1zaXplOiAxLjRlbTtcbiAgICB0b3A6IDBlbTtcbiAgICBmb250LXdlaWdodDogNjAwO1xuICAgIHdpZHRoOiAxNXB4O1xuICAgfVxuXG59Il19 */");

/***/ }),

/***/ "./src/app/components/Landing/landing.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/components/Landing/landing.component.ts ***!
  \*********************************************************/
/*! exports provided: LandingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LandingComponent", function() { return LandingComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


let LandingComponent = class LandingComponent {
    constructor() {
        this.feature = ['Thought Reminder', 'Share Pamyat', 'Daily Log', 'Categorization'];
    }
    ngOnInit() {
    }
};
LandingComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-landing',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./landing.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/Landing/landing.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./landing.component.scss */ "./src/app/components/Landing/landing.component.scss")).default]
    })
], LandingComponent);



/***/ }),

/***/ "./src/app/components/Navbar/navbar.component.scss":
/*!*********************************************************!*\
  !*** ./src/app/components/Navbar/navbar.component.scss ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".navbar__close {\n  position: absolute;\n  left: 220px;\n  top: 45%;\n  padding: 10px;\n}\n.navbar__close .close_icon {\n  margin: 13px 10px 0px -2px;\n}\n.navbar {\n  width: 280px;\n  position: absolute;\n  left: 0;\n  top: 0;\n  height: 100vh;\n  padding: 1em;\n  z-index: 2;\n}\n.nav_menu {\n  padding: 10px;\n  background: white;\n  border-radius: 5px;\n  width: 210px;\n  margin: 25px 2px;\n  color: black;\n  cursor: pointer;\n}\n.loginButons {\n  position: absolute;\n  bottom: 20px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Qcm9qZWN0cy9DYXRlclNlcnZpY2VzL3NyYy9hcHAvY29tcG9uZW50cy9OYXZiYXIvbmF2YmFyLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9jb21wb25lbnRzL05hdmJhci9uYXZiYXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxRQUFBO0VBQ0EsYUFBQTtBQ0NGO0FEQUU7RUFDRSwwQkFBQTtBQ0VKO0FERUE7RUFDRSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxPQUFBO0VBQ0EsTUFBQTtFQUNBLGFBQUE7RUFDQSxZQUFBO0VBQ0EsVUFBQTtBQ0NGO0FEQ0E7RUFDRSxhQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0FDRUY7QURDQTtFQUNFLGtCQUFBO0VBQ0EsWUFBQTtBQ0VGIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9OYXZiYXIvbmF2YmFyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm5hdmJhcl9fY2xvc2Uge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGxlZnQ6IDIyMHB4O1xuICB0b3A6IDQ1JTtcbiAgcGFkZGluZzogMTBweDtcbiAgLmNsb3NlX2ljb24ge1xuICAgIG1hcmdpbjogMTNweCAxMHB4IDBweCAtMnB4O1xuICB9XG59XG5cbi5uYXZiYXIge1xuICB3aWR0aDogMjgwcHg7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgbGVmdDogMDtcbiAgdG9wOiAwO1xuICBoZWlnaHQ6IDEwMHZoO1xuICBwYWRkaW5nOiAxZW07XG4gIHotaW5kZXg6IDI7XG59XG4ubmF2X21lbnUge1xuICBwYWRkaW5nOiAxMHB4O1xuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICB3aWR0aDogMjEwcHg7XG4gIG1hcmdpbjogMjVweCAycHg7XG4gIGNvbG9yOiBibGFjaztcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4ubG9naW5CdXRvbnMge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGJvdHRvbTogMjBweDtcbn1cbiIsIi5uYXZiYXJfX2Nsb3NlIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBsZWZ0OiAyMjBweDtcbiAgdG9wOiA0NSU7XG4gIHBhZGRpbmc6IDEwcHg7XG59XG4ubmF2YmFyX19jbG9zZSAuY2xvc2VfaWNvbiB7XG4gIG1hcmdpbjogMTNweCAxMHB4IDBweCAtMnB4O1xufVxuXG4ubmF2YmFyIHtcbiAgd2lkdGg6IDI4MHB4O1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGxlZnQ6IDA7XG4gIHRvcDogMDtcbiAgaGVpZ2h0OiAxMDB2aDtcbiAgcGFkZGluZzogMWVtO1xuICB6LWluZGV4OiAyO1xufVxuXG4ubmF2X21lbnUge1xuICBwYWRkaW5nOiAxMHB4O1xuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICB3aWR0aDogMjEwcHg7XG4gIG1hcmdpbjogMjVweCAycHg7XG4gIGNvbG9yOiBibGFjaztcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4ubG9naW5CdXRvbnMge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGJvdHRvbTogMjBweDtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/components/Navbar/navbar.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/Navbar/navbar.component.ts ***!
  \*******************************************************/
/*! exports provided: NavbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavbarComponent", function() { return NavbarComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "./node_modules/@fortawesome/free-solid-svg-icons/index.es.js");





let NavbarComponent = class NavbarComponent {
    constructor() {
        this.title = "Toolbar";
        this.menu_icon = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_2__["faBars"];
        this.close_icon = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_2__["faWindowClose"];
        this.arrowForward = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_2__["faArrowCircleRight"];
        this.menu = [];
        this.closeNavBar = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.showMobileNavBar = false;
    }
    close() {
        this.closeNavBar.emit(null);
    }
};
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], NavbarComponent.prototype, "menu", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
], NavbarComponent.prototype, "closeNavBar", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], NavbarComponent.prototype, "showMobileNavBar", void 0);
NavbarComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: "nav-bar",
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./navbar.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/Navbar/navbar.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./navbar.component.scss */ "./src/app/components/Navbar/navbar.component.scss")).default]
    })
], NavbarComponent);



/***/ }),

/***/ "./src/app/components/Toolbar/Toolbar.component.scss":
/*!***********************************************************!*\
  !*** ./src/app/components/Toolbar/Toolbar.component.scss ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ul,\nli {\n  display: inline;\n}\n\n.logo {\n  font-weight: 800;\n  font-size: 1.5em;\n}\n\n.menu {\n  color: gray;\n  font-size: 0.8em;\n}\n\n.menuMobile {\n  color: black;\n  font-size: 1.2em;\n  border-bottom: 2px solid white;\n  margin: 10px 0px;\n}\n\n.menu:hover {\n  color: black !important;\n}\n\n.toolbar .mobile {\n  width: 280px;\n  display: none;\n  position: absolute;\n  background: gray;\n  left: 0;\n  top: 0;\n  height: 100vh;\n  padding: 1em;\n  z-index: 2;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Qcm9qZWN0cy9DYXRlclNlcnZpY2VzL3NyYy9hcHAvY29tcG9uZW50cy9Ub29sYmFyL1Rvb2xiYXIuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2NvbXBvbmVudHMvVG9vbGJhci9Ub29sYmFyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOztFQUVFLGVBQUE7QUNDRjs7QURHQTtFQUNFLGdCQUFBO0VBQ0EsZ0JBQUE7QUNBRjs7QURHQTtFQUNFLFdBQUE7RUFDQSxnQkFBQTtBQ0FGOztBREVBO0VBQ0UsWUFBQTtFQUNBLGdCQUFBO0VBQ0EsOEJBQUE7RUFDQSxnQkFBQTtBQ0NGOztBREVBO0VBQ0UsdUJBQUE7QUNDRjs7QURJQTtFQUNFLFlBQUE7RUFDQSxhQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLE9BQUE7RUFDQSxNQUFBO0VBQ0EsYUFBQTtFQUNBLFlBQUE7RUFDQSxVQUFBO0FDREYiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL1Rvb2xiYXIvVG9vbGJhci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbInVsLFxubGkge1xuICBkaXNwbGF5OiBpbmxpbmU7XG59XG5cblxuLmxvZ28ge1xuICBmb250LXdlaWdodDogODAwO1xuICBmb250LXNpemU6IDEuNWVtO1xufVxuXG4ubWVudSB7XG4gIGNvbG9yOiBncmF5O1xuICBmb250LXNpemU6IDAuOGVtO1xufVxuLm1lbnVNb2JpbGUge1xuICBjb2xvcjogYmxhY2s7XG4gIGZvbnQtc2l6ZTogMS4yZW07XG4gIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCB3aGl0ZTtcbiAgbWFyZ2luOiAxMHB4IDBweDtcbn1cblxuLm1lbnU6aG92ZXIge1xuICBjb2xvcjogYmxhY2sgIWltcG9ydGFudDtcbn1cblxuXG5cbi50b29sYmFyIC5tb2JpbGUge1xuICB3aWR0aDogMjgwcHg7XG4gIGRpc3BsYXk6IG5vbmU7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgYmFja2dyb3VuZDogZ3JheTtcbiAgbGVmdDogMDtcbiAgdG9wOiAwO1xuICBoZWlnaHQ6IDEwMHZoO1xuICBwYWRkaW5nOiAxZW07XG4gIHotaW5kZXg6IDI7XG59XG4iLCJ1bCxcbmxpIHtcbiAgZGlzcGxheTogaW5saW5lO1xufVxuXG4ubG9nbyB7XG4gIGZvbnQtd2VpZ2h0OiA4MDA7XG4gIGZvbnQtc2l6ZTogMS41ZW07XG59XG5cbi5tZW51IHtcbiAgY29sb3I6IGdyYXk7XG4gIGZvbnQtc2l6ZTogMC44ZW07XG59XG5cbi5tZW51TW9iaWxlIHtcbiAgY29sb3I6IGJsYWNrO1xuICBmb250LXNpemU6IDEuMmVtO1xuICBib3JkZXItYm90dG9tOiAycHggc29saWQgd2hpdGU7XG4gIG1hcmdpbjogMTBweCAwcHg7XG59XG5cbi5tZW51OmhvdmVyIHtcbiAgY29sb3I6IGJsYWNrICFpbXBvcnRhbnQ7XG59XG5cbi50b29sYmFyIC5tb2JpbGUge1xuICB3aWR0aDogMjgwcHg7XG4gIGRpc3BsYXk6IG5vbmU7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgYmFja2dyb3VuZDogZ3JheTtcbiAgbGVmdDogMDtcbiAgdG9wOiAwO1xuICBoZWlnaHQ6IDEwMHZoO1xuICBwYWRkaW5nOiAxZW07XG4gIHotaW5kZXg6IDI7XG59Il19 */");

/***/ }),

/***/ "./src/app/components/Toolbar/Toolbar.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/components/Toolbar/Toolbar.component.ts ***!
  \*********************************************************/
/*! exports provided: ToolbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ToolbarComponent", function() { return ToolbarComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "./node_modules/@fortawesome/free-solid-svg-icons/index.es.js");




let ToolbarComponent = class ToolbarComponent {
    constructor() {
        this.title = "Toolbar";
        this.menu_icon = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_2__["faBars"];
        this.close_icon = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_2__["faWindowClose"];
        this.menu = [
            { name: "ABOUT US", url: "/Home" },
            { name: "CONTACT US", url: "/Home" },
            { name: "SUPPORT US", url: "/Home" }
        ];
        this.showMobileNavBar = false;
    }
};
ToolbarComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: "Toolbar",
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./Toolbar.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/Toolbar/Toolbar.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./Toolbar.component.scss */ "./src/app/components/Toolbar/Toolbar.component.scss")).default]
    })
], ToolbarComponent);



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

const environment = {
    production: false,
    apiUrl: 'http://localhost:8080',
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

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _polyfills_ts__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./polyfills.ts */ "./src/polyfills.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/__ivy_ngcc__/fesm2015/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");






if (_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__["platformBrowserDynamic"])()
    .bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_4__["AppModule"])
    .catch((err) => console.error(err));


/***/ }),

/***/ "./src/polyfills.ts":
/*!**************************!*\
  !*** ./src/polyfills.ts ***!
  \**************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var zone_js_dist_zone__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! zone.js/dist/zone */ "./node_modules/zone.js/dist/zone-evergreen.js");
/* harmony import */ var zone_js_dist_zone__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(zone_js_dist_zone__WEBPACK_IMPORTED_MODULE_1__);
/**
 * This file includes polyfills needed by Angular and is loaded before the app.
 * You can add your own extra polyfills to this file.
 *
 * This file is divided into 2 sections:
 *   1. Browser polyfills. These are applied before loading ZoneJS and are sorted by browsers.
 *   2. Application imports. Files imported after ZoneJS that should be loaded before your main
 *      file.
 *
 * The current setup is for so-called "evergreen" browsers; the last versions of browsers that
 * automatically update themselves. This includes Safari >= 10, Chrome >= 55 (including Opera),
 * Edge >= 13 on the desktop, and iOS 10 and Chrome on mobile.
 *
 * Learn more in https://angular.io/guide/browser-support
 */

/***************************************************************************************************
 * BROWSER POLYFILLS
 */
/** IE10 and IE11 requires the following for NgClass support on SVG elements */
// import 'classlist.js';  // Run `npm install --save classlist.js`.
/**
 * Web Animations `@angular/platform-browser/animations`
 * Only required if AnimationBuilder is used within the application and using IE/Edge or Safari.
 * Standard animation support in Angular DOES NOT require any polyfills (as of Angular 6.0).
 */
// import 'web-animations-js';  // Run `npm install --save web-animations-js`.
/**
 * By default, zone.js will patch all possible macroTask and DomEvents
 * user can disable parts of macroTask/DomEvents patch by setting following flags
 * because those flags need to be set before `zone.js` being loaded, and webpack
 * will put import in the top of bundle, so user need to create a separate file
 * in this directory (for example: zone-flags.ts), and put the following flags
 * into that file, and then add the following code before importing zone.js.
 * import './zone-flags.ts';
 *
 * The flags allowed in zone-flags.ts are listed here.
 *
 * The following flags will work for all browsers.
 *
 * (window as any).__Zone_disable_requestAnimationFrame = true; // disable patch requestAnimationFrame
 * (window as any).__Zone_disable_on_property = true; // disable patch onProperty such as onclick
 * (window as any).__zone_symbol__UNPATCHED_EVENTS = ['scroll', 'mousemove']; // disable patch specified eventNames
 *
 *  in IE/Edge developer tools, the addEventListener will also be wrapped by zone.js
 *  with the following flag, it will bypass `zone.js` patch for IE/Edge
 *
 *  (window as any).__Zone_enable_cross_context_check = true;
 *
 */
/***************************************************************************************************
 * Zone JS is required by default for Angular itself.
 */
 // Included with Angular CLI.
/***************************************************************************************************
 * APPLICATION IMPORTS
 */


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Projects/CaterServices/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map