/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 4);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var service_keys_1 = __webpack_require__(2);
var http_service_1 = __webpack_require__(3);
var Main = (function () {
    function Main() {
        this.requestSamples();
    }
    Main.prototype.run = function () {
        var welcomeTitle = "Welcome to Evolution - Learning New Things";
        document.querySelector('#welcome-title').innerHTML = welcomeTitle;
    };
    Main.prototype.requestSamples = function () {
        this.httpService = new http_service_1.HttpService();
        // Get Samples
        // 200 success
        this.httpService
            .get(service_keys_1.serviceKeys['getArticles'].url)
            .then(function (data) { return console.log('200 ok, successful get request:', data); })
            .catch(function (error) {
            console.error(error);
        });
        // Post Samples
        // 201 created
        this.httpService
            .post(service_keys_1.serviceKeys['postArticle'].url, {
            title: 'foo',
            body: 'bar',
            userId: 1
        })
            .then(function (data) {
            console.log('201 created, successful post request: ', data);
        })
            .catch(function (error) {
            console.error(error);
        });
    };
    return Main;
}());
exports.Main = Main;
var main = new Main().run();


/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.serviceKeys = {
    getArticles: {
        url: "http://jsonplaceholder.typicode.com/posts"
    },
    postArticle: {
        url: "http://jsonplaceholder.typicode.com/posts"
    }
};


/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var HttpService = (function () {
    function HttpService() {
    }
    HttpService.prototype.get = function (url, queryParams) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var xhr = new XMLHttpRequest();
            xhr.onreadystatechange = function () {
                if (xhr.readyState === 4) {
                    if (xhr.status === 200) {
                        resolve(JSON.parse(xhr.response));
                    }
                    else {
                        reject(xhr.response);
                    }
                }
            };
            xhr.open("GET", url + _this.queryParamsToString(queryParams), true);
            xhr.send();
        });
    };
    HttpService.prototype.post = function (url, data) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var xhr = new XMLHttpRequest();
            xhr.onreadystatechange = function () {
                if (xhr.readyState === 4) {
                    if (xhr.status === 200 || xhr.status === 201) {
                        resolve(JSON.parse(xhr.response));
                    }
                    else {
                        reject(xhr.response);
                    }
                }
            };
            xhr.open('POST', url, true);
            // set headers
            xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded; charset=utf-8");
            xhr.send(_this.createPayloadFromObject(data));
        });
    };
    HttpService.prototype.createPayloadFromObject = function (requestParams) {
        var keyValuePairs = [];
        if (requestParams) {
            for (var requestParam in requestParams) {
                if (requestParams.hasOwnProperty(requestParam)) {
                    keyValuePairs.push(encodeURIComponent(requestParam) + "=" + requestParams[encodeURIComponent(requestParam)]);
                }
            }
            return keyValuePairs.join("&");
        }
        return '';
    };
    HttpService.prototype.queryParamsToString = function (queryParams) {
        var keyValuePairs = [];
        if (queryParams) {
            queryParams.map(function (queryParams) {
                for (var queryParam in queryParams) {
                    if (queryParams.hasOwnProperty(queryParam)) {
                        keyValuePairs.push(encodeURIComponent(queryParam) + "=" + queryParams[encodeURIComponent(queryParam)]);
                    }
                }
            });
            return "?" + keyValuePairs.join("&");
        }
        else {
            return '';
        }
    };
    return HttpService;
}());
exports.HttpService = HttpService;


/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(1);
module.exports = __webpack_require__(0);


/***/ })
/******/ ]);