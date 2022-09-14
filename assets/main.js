/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/images/gruppovillamaria_logo.png":
/*!**********************************************!*\
  !*** ./src/images/gruppovillamaria_logo.png ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "images/gruppovillamaria_logo.png");

/***/ }),

/***/ "./src/images/gvm-care-and-research.jpg":
/*!**********************************************!*\
  !*** ./src/images/gvm-care-and-research.jpg ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "images/gvm-care-and-research.jpg");

/***/ }),

/***/ "./src/images/left-arrow.svg":
/*!***********************************!*\
  !*** ./src/images/left-arrow.svg ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "images/left-arrow.svg");

/***/ }),

/***/ "./src/images/luxurystore.jpeg":
/*!*************************************!*\
  !*** ./src/images/luxurystore.jpeg ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "images/luxurystore.jpeg");

/***/ }),

/***/ "./src/images/right-arrow.svg":
/*!************************************!*\
  !*** ./src/images/right-arrow.svg ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "images/right-arrow.svg");

/***/ }),

/***/ "./src/images/yext-favicon.png":
/*!*************************************!*\
  !*** ./src/images/yext-favicon.png ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "images/yext-favicon.png");

/***/ }),

/***/ "./src/images/yext-logo.svg":
/*!**********************************!*\
  !*** ./src/images/yext-logo.svg ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "images/yext-logo.svg");

/***/ }),

/***/ "./src/main.css":
/*!**********************!*\
  !*** ./src/main.css ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/js/custom/hours-active.js":
/*!***************************************!*\
  !*** ./src/js/custom/hours-active.js ***!
  \***************************************/
/***/ (() => {

$(document).ready(function () {
  var d = new Date(); //vedo che giorno �

  var dy = d.getDay(); // 0 = domenica, 1 = luned� etc..

  var counter = 1;

  if (dy == 0) {
    var x = $(".day-list-inner")[6];
    $(x).addClass("giorno_attivo");
  } else {
    $(".day-list-inner").each(function () {
      if (counter == dy) {
        $(this).addClass("giorno_attivo");
      }

      counter++;
    });
  }
});

/***/ }),

/***/ "./src/images sync \\.(png|jpe?g|svg)$":
/*!**********************************************************!*\
  !*** ./src/images/ sync nonrecursive \.(png|jpe?g|svg)$ ***!
  \**********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var map = {
	"./gruppovillamaria_logo.png": "./src/images/gruppovillamaria_logo.png",
	"./gvm-care-and-research.jpg": "./src/images/gvm-care-and-research.jpg",
	"./left-arrow.svg": "./src/images/left-arrow.svg",
	"./luxurystore.jpeg": "./src/images/luxurystore.jpeg",
	"./right-arrow.svg": "./src/images/right-arrow.svg",
	"./yext-favicon.png": "./src/images/yext-favicon.png",
	"./yext-logo.svg": "./src/images/yext-logo.svg"
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "./src/images sync \\.(png|jpe?g|svg)$";

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
/*!*********************!*\
  !*** ./src/main.js ***!
  \*********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _main_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./main.css */ "./src/main.css");
/* harmony import */ var _js_custom_hours_active_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./js/custom/hours-active.js */ "./src/js/custom/hours-active.js");
/* harmony import */ var _js_custom_hours_active_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_js_custom_hours_active_js__WEBPACK_IMPORTED_MODULE_1__);



function importAll(r) {
  var images = {};
  r.keys().map(function (item, index) {
    images[item.replace('./', '')] = r(item);
  });
  return images;
}

var images = importAll(__webpack_require__("./src/images sync \\.(png|jpe?g|svg)$"));
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9zaXRlcy1sb2NhdGlvbnMtc3RhcnRlci8uL3NyYy9pbWFnZXMvZ3J1cHBvdmlsbGFtYXJpYV9sb2dvLnBuZyIsIndlYnBhY2s6Ly9zaXRlcy1sb2NhdGlvbnMtc3RhcnRlci8uL3NyYy9pbWFnZXMvZ3ZtLWNhcmUtYW5kLXJlc2VhcmNoLmpwZyIsIndlYnBhY2s6Ly9zaXRlcy1sb2NhdGlvbnMtc3RhcnRlci8uL3NyYy9pbWFnZXMvbGVmdC1hcnJvdy5zdmciLCJ3ZWJwYWNrOi8vc2l0ZXMtbG9jYXRpb25zLXN0YXJ0ZXIvLi9zcmMvaW1hZ2VzL2x1eHVyeXN0b3JlLmpwZWciLCJ3ZWJwYWNrOi8vc2l0ZXMtbG9jYXRpb25zLXN0YXJ0ZXIvLi9zcmMvaW1hZ2VzL3JpZ2h0LWFycm93LnN2ZyIsIndlYnBhY2s6Ly9zaXRlcy1sb2NhdGlvbnMtc3RhcnRlci8uL3NyYy9pbWFnZXMveWV4dC1mYXZpY29uLnBuZyIsIndlYnBhY2s6Ly9zaXRlcy1sb2NhdGlvbnMtc3RhcnRlci8uL3NyYy9pbWFnZXMveWV4dC1sb2dvLnN2ZyIsIndlYnBhY2s6Ly9zaXRlcy1sb2NhdGlvbnMtc3RhcnRlci8uL3NyYy9tYWluLmNzcyIsIndlYnBhY2s6Ly9zaXRlcy1sb2NhdGlvbnMtc3RhcnRlci8uL3NyYy9qcy9jdXN0b20vaG91cnMtYWN0aXZlLmpzIiwid2VicGFjazovL3NpdGVzLWxvY2F0aW9ucy1zdGFydGVyLy9Vc2Vycy90b255bGFjZXMvRHJvcGJveC9Qcm9qZWN0cy9HVk1fWUVYVC9zaXRlcy1sb2NhdGlvbnMtc3RhcnRlci12Mi9zcmMvaW1hZ2VzfHN5bmN8bm9ucmVjdXJzaXZlfC9cXC4ocG5nfGpwZSIsIndlYnBhY2s6Ly9zaXRlcy1sb2NhdGlvbnMtc3RhcnRlci93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9zaXRlcy1sb2NhdGlvbnMtc3RhcnRlci93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly9zaXRlcy1sb2NhdGlvbnMtc3RhcnRlci93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vc2l0ZXMtbG9jYXRpb25zLXN0YXJ0ZXIvd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly9zaXRlcy1sb2NhdGlvbnMtc3RhcnRlci93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3NpdGVzLWxvY2F0aW9ucy1zdGFydGVyL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vc2l0ZXMtbG9jYXRpb25zLXN0YXJ0ZXIvd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vc2l0ZXMtbG9jYXRpb25zLXN0YXJ0ZXIvLi9zcmMvbWFpbi5qcyJdLCJuYW1lcyI6WyJfX3dlYnBhY2tfcHVibGljX3BhdGhfXyIsIiQiLCJkb2N1bWVudCIsInJlYWR5IiwiZCIsIkRhdGUiLCJkeSIsImdldERheSIsImNvdW50ZXIiLCJ4IiwiYWRkQ2xhc3MiLCJlYWNoIiwiaW1wb3J0QWxsIiwiciIsImltYWdlcyIsImtleXMiLCJtYXAiLCJpdGVtIiwiaW5kZXgiLCJyZXBsYWNlIiwicmVxdWlyZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBQSxpRUFBZUEscUJBQXVCLEdBQUcsa0NBQXpDLEU7Ozs7Ozs7Ozs7Ozs7OztBQ0FBLGlFQUFlQSxxQkFBdUIsR0FBRyxrQ0FBekMsRTs7Ozs7Ozs7Ozs7Ozs7O0FDQUEsaUVBQWVBLHFCQUF1QixHQUFHLHVCQUF6QyxFOzs7Ozs7Ozs7Ozs7Ozs7QUNBQSxpRUFBZUEscUJBQXVCLEdBQUcseUJBQXpDLEU7Ozs7Ozs7Ozs7Ozs7OztBQ0FBLGlFQUFlQSxxQkFBdUIsR0FBRyx3QkFBekMsRTs7Ozs7Ozs7Ozs7Ozs7O0FDQUEsaUVBQWVBLHFCQUF1QixHQUFHLHlCQUF6QyxFOzs7Ozs7Ozs7Ozs7Ozs7QUNBQSxpRUFBZUEscUJBQXVCLEdBQUcsc0JBQXpDLEU7Ozs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7OztBQ0FBQyxDQUFDLENBQUNDLFFBQUQsQ0FBRCxDQUFZQyxLQUFaLENBQWtCLFlBQVc7QUFDekIsTUFBSUMsQ0FBQyxHQUFHLElBQUlDLElBQUosRUFBUixDQUR5QixDQUNMOztBQUNwQixNQUFJQyxFQUFFLEdBQUdGLENBQUMsQ0FBQ0csTUFBRixFQUFULENBRnlCLENBRUo7O0FBQ3JCLE1BQUlDLE9BQU8sR0FBRyxDQUFkOztBQUVBLE1BQUlGLEVBQUUsSUFBSSxDQUFWLEVBQWE7QUFDVCxRQUFJRyxDQUFDLEdBQUdSLENBQUMsQ0FBQyxpQkFBRCxDQUFELENBQXFCLENBQXJCLENBQVI7QUFDQUEsS0FBQyxDQUFDUSxDQUFELENBQUQsQ0FBS0MsUUFBTCxDQUFjLGVBQWQ7QUFDSCxHQUhELE1BR087QUFDSFQsS0FBQyxDQUFDLGlCQUFELENBQUQsQ0FBcUJVLElBQXJCLENBQTBCLFlBQVk7QUFDbEMsVUFBSUgsT0FBTyxJQUFJRixFQUFmLEVBQW1CO0FBQ2ZMLFNBQUMsQ0FBQyxJQUFELENBQUQsQ0FBUVMsUUFBUixDQUFpQixlQUFqQjtBQUNIOztBQUNERixhQUFPO0FBQ1YsS0FMRDtBQU1IO0FBQ0osQ0FoQkQsRTs7Ozs7Ozs7OztBQ0FBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDREOzs7Ozs7VUM1QkE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLGdDQUFnQyxZQUFZO1dBQzVDO1dBQ0EsRTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHdDQUF3Qyx5Q0FBeUM7V0FDakY7V0FDQTtXQUNBLEU7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSxFQUFFO1dBQ0Y7V0FDQTtXQUNBLENBQUMsSTs7Ozs7V0NQRCx3Rjs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSxzREFBc0Qsa0JBQWtCO1dBQ3hFO1dBQ0EsK0NBQStDLGNBQWM7V0FDN0QsRTs7Ozs7V0NOQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSxrQzs7Ozs7Ozs7Ozs7Ozs7O0FDZkE7QUFBb0I7O0FBQ3BCLFNBQVNJLFNBQVQsQ0FBbUJDLENBQW5CLEVBQXNCO0FBQUMsTUFBSUMsTUFBTSxHQUFHLEVBQWI7QUFBZ0JELEdBQUMsQ0FBQ0UsSUFBRixHQUFTQyxHQUFULENBQWEsVUFBQ0MsSUFBRCxFQUFPQyxLQUFQLEVBQWlCO0FBQUVKLFVBQU0sQ0FBQ0csSUFBSSxDQUFDRSxPQUFMLENBQWEsSUFBYixFQUFtQixFQUFuQixDQUFELENBQU4sR0FBaUNOLENBQUMsQ0FBQ0ksSUFBRCxDQUFsQztBQUEyQyxHQUEzRTtBQUE2RSxTQUFPSCxNQUFQO0FBQWU7O0FBQ25JLElBQU1BLE1BQU0sR0FBR0YsU0FBUyxDQUFDUSw0REFBRCxDQUF4QixDIiwiZmlsZSI6Im1haW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiaW1hZ2VzL2dydXBwb3ZpbGxhbWFyaWFfbG9nby5wbmdcIjsiLCJleHBvcnQgZGVmYXVsdCBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiaW1hZ2VzL2d2bS1jYXJlLWFuZC1yZXNlYXJjaC5qcGdcIjsiLCJleHBvcnQgZGVmYXVsdCBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiaW1hZ2VzL2xlZnQtYXJyb3cuc3ZnXCI7IiwiZXhwb3J0IGRlZmF1bHQgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcImltYWdlcy9sdXh1cnlzdG9yZS5qcGVnXCI7IiwiZXhwb3J0IGRlZmF1bHQgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcImltYWdlcy9yaWdodC1hcnJvdy5zdmdcIjsiLCJleHBvcnQgZGVmYXVsdCBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiaW1hZ2VzL3lleHQtZmF2aWNvbi5wbmdcIjsiLCJleHBvcnQgZGVmYXVsdCBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiaW1hZ2VzL3lleHQtbG9nby5zdmdcIjsiLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiLCIkKGRvY3VtZW50KS5yZWFkeShmdW5jdGlvbigpIHtcbiAgICB2YXIgZCA9IG5ldyBEYXRlKCk7IC8vdmVkbyBjaGUgZ2lvcm5vIO+/vVxuICAgIHZhciBkeSA9IGQuZ2V0RGF5KCk7IC8vIDAgPSBkb21lbmljYSwgMSA9IGx1bmVk77+9IGV0Yy4uXG4gICAgdmFyIGNvdW50ZXIgPSAxO1xuXG4gICAgaWYgKGR5ID09IDApIHtcbiAgICAgICAgbGV0IHggPSAkKFwiLmRheS1saXN0LWlubmVyXCIpWzZdO1xuICAgICAgICAkKHgpLmFkZENsYXNzKFwiZ2lvcm5vX2F0dGl2b1wiKVxuICAgIH0gZWxzZSB7XG4gICAgICAgICQoXCIuZGF5LWxpc3QtaW5uZXJcIikuZWFjaChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBpZiAoY291bnRlciA9PSBkeSkge1xuICAgICAgICAgICAgICAgICQodGhpcykuYWRkQ2xhc3MoXCJnaW9ybm9fYXR0aXZvXCIpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY291bnRlcisrO1xuICAgICAgICB9KVxuICAgIH1cbn0pO1xuIiwidmFyIG1hcCA9IHtcblx0XCIuL2dydXBwb3ZpbGxhbWFyaWFfbG9nby5wbmdcIjogXCIuL3NyYy9pbWFnZXMvZ3J1cHBvdmlsbGFtYXJpYV9sb2dvLnBuZ1wiLFxuXHRcIi4vZ3ZtLWNhcmUtYW5kLXJlc2VhcmNoLmpwZ1wiOiBcIi4vc3JjL2ltYWdlcy9ndm0tY2FyZS1hbmQtcmVzZWFyY2guanBnXCIsXG5cdFwiLi9sZWZ0LWFycm93LnN2Z1wiOiBcIi4vc3JjL2ltYWdlcy9sZWZ0LWFycm93LnN2Z1wiLFxuXHRcIi4vbHV4dXJ5c3RvcmUuanBlZ1wiOiBcIi4vc3JjL2ltYWdlcy9sdXh1cnlzdG9yZS5qcGVnXCIsXG5cdFwiLi9yaWdodC1hcnJvdy5zdmdcIjogXCIuL3NyYy9pbWFnZXMvcmlnaHQtYXJyb3cuc3ZnXCIsXG5cdFwiLi95ZXh0LWZhdmljb24ucG5nXCI6IFwiLi9zcmMvaW1hZ2VzL3lleHQtZmF2aWNvbi5wbmdcIixcblx0XCIuL3lleHQtbG9nby5zdmdcIjogXCIuL3NyYy9pbWFnZXMveWV4dC1sb2dvLnN2Z1wiXG59O1xuXG5cbmZ1bmN0aW9uIHdlYnBhY2tDb250ZXh0KHJlcSkge1xuXHR2YXIgaWQgPSB3ZWJwYWNrQ29udGV4dFJlc29sdmUocmVxKTtcblx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oaWQpO1xufVxuZnVuY3Rpb24gd2VicGFja0NvbnRleHRSZXNvbHZlKHJlcSkge1xuXHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKG1hcCwgcmVxKSkge1xuXHRcdHZhciBlID0gbmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIiArIHJlcSArIFwiJ1wiKTtcblx0XHRlLmNvZGUgPSAnTU9EVUxFX05PVF9GT1VORCc7XG5cdFx0dGhyb3cgZTtcblx0fVxuXHRyZXR1cm4gbWFwW3JlcV07XG59XG53ZWJwYWNrQ29udGV4dC5rZXlzID0gZnVuY3Rpb24gd2VicGFja0NvbnRleHRLZXlzKCkge1xuXHRyZXR1cm4gT2JqZWN0LmtleXMobWFwKTtcbn07XG53ZWJwYWNrQ29udGV4dC5yZXNvbHZlID0gd2VicGFja0NvbnRleHRSZXNvbHZlO1xubW9kdWxlLmV4cG9ydHMgPSB3ZWJwYWNrQ29udGV4dDtcbndlYnBhY2tDb250ZXh0LmlkID0gXCIuL3NyYy9pbWFnZXMgc3luYyBcXFxcLihwbmd8anBlP2d8c3ZnKSRcIjsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJ2YXIgc2NyaXB0VXJsO1xuaWYgKF9fd2VicGFja19yZXF1aXJlX18uZy5pbXBvcnRTY3JpcHRzKSBzY3JpcHRVcmwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcubG9jYXRpb24gKyBcIlwiO1xudmFyIGRvY3VtZW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmRvY3VtZW50O1xuaWYgKCFzY3JpcHRVcmwgJiYgZG9jdW1lbnQpIHtcblx0aWYgKGRvY3VtZW50LmN1cnJlbnRTY3JpcHQpXG5cdFx0c2NyaXB0VXJsID0gZG9jdW1lbnQuY3VycmVudFNjcmlwdC5zcmNcblx0aWYgKCFzY3JpcHRVcmwpIHtcblx0XHR2YXIgc2NyaXB0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic2NyaXB0XCIpO1xuXHRcdGlmKHNjcmlwdHMubGVuZ3RoKSBzY3JpcHRVcmwgPSBzY3JpcHRzW3NjcmlwdHMubGVuZ3RoIC0gMV0uc3JjXG5cdH1cbn1cbi8vIFdoZW4gc3VwcG9ydGluZyBicm93c2VycyB3aGVyZSBhbiBhdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIHlvdSBtdXN0IHNwZWNpZnkgYW4gb3V0cHV0LnB1YmxpY1BhdGggbWFudWFsbHkgdmlhIGNvbmZpZ3VyYXRpb25cbi8vIG9yIHBhc3MgYW4gZW1wdHkgc3RyaW5nIChcIlwiKSBhbmQgc2V0IHRoZSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyB2YXJpYWJsZSBmcm9tIHlvdXIgY29kZSB0byB1c2UgeW91ciBvd24gbG9naWMuXG5pZiAoIXNjcmlwdFVybCkgdGhyb3cgbmV3IEVycm9yKFwiQXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCBpbiB0aGlzIGJyb3dzZXJcIik7XG5zY3JpcHRVcmwgPSBzY3JpcHRVcmwucmVwbGFjZSgvIy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcPy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcL1teXFwvXSskLywgXCIvXCIpO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gc2NyaXB0VXJsOyIsImltcG9ydCAnLi9tYWluLmNzcyc7aW1wb3J0ICcuL2pzL2N1c3RvbS9ob3Vycy1hY3RpdmUuanMnO1xuZnVuY3Rpb24gaW1wb3J0QWxsKHIpIHtsZXQgaW1hZ2VzID0ge307ci5rZXlzKCkubWFwKChpdGVtLCBpbmRleCkgPT4geyBpbWFnZXNbaXRlbS5yZXBsYWNlKCcuLycsICcnKV0gPSByKGl0ZW0pOyB9KTtyZXR1cm4gaW1hZ2VzO31cbmNvbnN0IGltYWdlcyA9IGltcG9ydEFsbChyZXF1aXJlLmNvbnRleHQoJy4vaW1hZ2VzJywgZmFsc2UsIC9cXC4ocG5nfGpwZT9nfHN2ZykkLykpOyJdLCJzb3VyY2VSb290IjoiIn0=