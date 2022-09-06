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

/***/ "./src/js/custom/icone.js":
/*!********************************!*\
  !*** ./src/js/custom/icone.js ***!
  \********************************/
/***/ (() => {

icone = [{
  image: "<svg width='21px' height='24px' aria-hidden='true' focusable='false' data-prefix='fas' data-icon='calendar-check' role='img' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 448 512' data-fa-i2svg=''><path fill='currentColor' d='M160 32V64H288V32C288 14.33 302.3 0 320 0C337.7 0 352 14.33 352 32V64H400C426.5 64 448 85.49 448 112V160H0V112C0 85.49 21.49 64 48 64H96V32C96 14.33 110.3 0 128 0C145.7 0 160 14.33 160 32zM0 192H448V464C448 490.5 426.5 512 400 512H48C21.49 512 0 490.5 0 464V192zM328.1 304.1C338.3 295.6 338.3 280.4 328.1 271C319.6 261.7 304.4 261.7 295 271L200 366.1L152.1 319C143.6 309.7 128.4 309.7 119 319C109.7 328.4 109.7 343.6 119 352.1L183 416.1C192.4 426.3 207.6 426.3 216.1 416.1L328.1 304.1z'></path></svg>"
}];

/***/ }),

/***/ "./src/images sync \\.(png|jpe?g|svg)$":
/*!**********************************************************!*\
  !*** ./src/images/ sync nonrecursive \.(png|jpe?g|svg)$ ***!
  \**********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var map = {
	"./gruppovillamaria_logo.png": "./src/images/gruppovillamaria_logo.png",
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
/* harmony import */ var _js_custom_icone_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./js/custom/icone.js */ "./src/js/custom/icone.js");
/* harmony import */ var _js_custom_icone_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_js_custom_icone_js__WEBPACK_IMPORTED_MODULE_2__);




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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9zaXRlcy1sb2NhdGlvbnMtc3RhcnRlci8uL3NyYy9pbWFnZXMvZ3J1cHBvdmlsbGFtYXJpYV9sb2dvLnBuZyIsIndlYnBhY2s6Ly9zaXRlcy1sb2NhdGlvbnMtc3RhcnRlci8uL3NyYy9pbWFnZXMvbGVmdC1hcnJvdy5zdmciLCJ3ZWJwYWNrOi8vc2l0ZXMtbG9jYXRpb25zLXN0YXJ0ZXIvLi9zcmMvaW1hZ2VzL2x1eHVyeXN0b3JlLmpwZWciLCJ3ZWJwYWNrOi8vc2l0ZXMtbG9jYXRpb25zLXN0YXJ0ZXIvLi9zcmMvaW1hZ2VzL3JpZ2h0LWFycm93LnN2ZyIsIndlYnBhY2s6Ly9zaXRlcy1sb2NhdGlvbnMtc3RhcnRlci8uL3NyYy9pbWFnZXMveWV4dC1mYXZpY29uLnBuZyIsIndlYnBhY2s6Ly9zaXRlcy1sb2NhdGlvbnMtc3RhcnRlci8uL3NyYy9pbWFnZXMveWV4dC1sb2dvLnN2ZyIsIndlYnBhY2s6Ly9zaXRlcy1sb2NhdGlvbnMtc3RhcnRlci8uL3NyYy9tYWluLmNzcyIsIndlYnBhY2s6Ly9zaXRlcy1sb2NhdGlvbnMtc3RhcnRlci8uL3NyYy9qcy9jdXN0b20vaG91cnMtYWN0aXZlLmpzIiwid2VicGFjazovL3NpdGVzLWxvY2F0aW9ucy1zdGFydGVyLy4vc3JjL2pzL2N1c3RvbS9pY29uZS5qcyIsIndlYnBhY2s6Ly9zaXRlcy1sb2NhdGlvbnMtc3RhcnRlci8vVXNlcnMvdG9ueWxhY2VzL0Ryb3Bib3gvUHJvamVjdHMvR1ZNX1lFWFQvc2l0ZXMtbG9jYXRpb25zLXN0YXJ0ZXItdjIvc3JjL2ltYWdlc3xzeW5jfG5vbnJlY3Vyc2l2ZXwvXFwuKHBuZ3xqcGUiLCJ3ZWJwYWNrOi8vc2l0ZXMtbG9jYXRpb25zLXN0YXJ0ZXIvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vc2l0ZXMtbG9jYXRpb25zLXN0YXJ0ZXIvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vc2l0ZXMtbG9jYXRpb25zLXN0YXJ0ZXIvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3NpdGVzLWxvY2F0aW9ucy1zdGFydGVyL3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vc2l0ZXMtbG9jYXRpb25zLXN0YXJ0ZXIvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9zaXRlcy1sb2NhdGlvbnMtc3RhcnRlci93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3NpdGVzLWxvY2F0aW9ucy1zdGFydGVyL3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL3NpdGVzLWxvY2F0aW9ucy1zdGFydGVyLy4vc3JjL21haW4uanMiXSwibmFtZXMiOlsiX193ZWJwYWNrX3B1YmxpY19wYXRoX18iLCIkIiwiZG9jdW1lbnQiLCJyZWFkeSIsImQiLCJEYXRlIiwiZHkiLCJnZXREYXkiLCJjb3VudGVyIiwieCIsImFkZENsYXNzIiwiZWFjaCIsImljb25lIiwiaW1hZ2UiLCJpbXBvcnRBbGwiLCJyIiwiaW1hZ2VzIiwia2V5cyIsIm1hcCIsIml0ZW0iLCJpbmRleCIsInJlcGxhY2UiLCJyZXF1aXJlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBLGlFQUFlQSxxQkFBdUIsR0FBRyxrQ0FBekMsRTs7Ozs7Ozs7Ozs7Ozs7O0FDQUEsaUVBQWVBLHFCQUF1QixHQUFHLHVCQUF6QyxFOzs7Ozs7Ozs7Ozs7Ozs7QUNBQSxpRUFBZUEscUJBQXVCLEdBQUcseUJBQXpDLEU7Ozs7Ozs7Ozs7Ozs7OztBQ0FBLGlFQUFlQSxxQkFBdUIsR0FBRyx3QkFBekMsRTs7Ozs7Ozs7Ozs7Ozs7O0FDQUEsaUVBQWVBLHFCQUF1QixHQUFHLHlCQUF6QyxFOzs7Ozs7Ozs7Ozs7Ozs7QUNBQSxpRUFBZUEscUJBQXVCLEdBQUcsc0JBQXpDLEU7Ozs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7OztBQ0FBQyxDQUFDLENBQUNDLFFBQUQsQ0FBRCxDQUFZQyxLQUFaLENBQWtCLFlBQVc7QUFDekIsTUFBSUMsQ0FBQyxHQUFHLElBQUlDLElBQUosRUFBUixDQUR5QixDQUNMOztBQUNwQixNQUFJQyxFQUFFLEdBQUdGLENBQUMsQ0FBQ0csTUFBRixFQUFULENBRnlCLENBRUo7O0FBQ3JCLE1BQUlDLE9BQU8sR0FBRyxDQUFkOztBQUVBLE1BQUlGLEVBQUUsSUFBSSxDQUFWLEVBQWE7QUFDVCxRQUFJRyxDQUFDLEdBQUdSLENBQUMsQ0FBQyxpQkFBRCxDQUFELENBQXFCLENBQXJCLENBQVI7QUFDQUEsS0FBQyxDQUFDUSxDQUFELENBQUQsQ0FBS0MsUUFBTCxDQUFjLGVBQWQ7QUFDSCxHQUhELE1BR087QUFDSFQsS0FBQyxDQUFDLGlCQUFELENBQUQsQ0FBcUJVLElBQXJCLENBQTBCLFlBQVk7QUFDbEMsVUFBSUgsT0FBTyxJQUFJRixFQUFmLEVBQW1CO0FBQ2ZMLFNBQUMsQ0FBQyxJQUFELENBQUQsQ0FBUVMsUUFBUixDQUFpQixlQUFqQjtBQUNIOztBQUNERixhQUFPO0FBQ1YsS0FMRDtBQU1IO0FBQ0osQ0FoQkQsRTs7Ozs7Ozs7OztBQ0FBSSxLQUFLLEdBQUcsQ0FBQztBQUNQQyxPQUFLLEVBQUU7QUFEQSxDQUFELENBQVIsQzs7Ozs7Ozs7OztBQ0FBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw0RDs7Ozs7O1VDM0JBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSxnQ0FBZ0MsWUFBWTtXQUM1QztXQUNBLEU7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx3Q0FBd0MseUNBQXlDO1dBQ2pGO1dBQ0E7V0FDQSxFOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsRUFBRTtXQUNGO1dBQ0E7V0FDQSxDQUFDLEk7Ozs7O1dDUEQsd0Y7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0Esc0RBQXNELGtCQUFrQjtXQUN4RTtXQUNBLCtDQUErQyxjQUFjO1dBQzdELEU7Ozs7O1dDTkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0Esa0M7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDZkE7QUFBb0I7QUFBcUM7O0FBQ3pELFNBQVNDLFNBQVQsQ0FBbUJDLENBQW5CLEVBQXNCO0FBQUMsTUFBSUMsTUFBTSxHQUFHLEVBQWI7QUFBZ0JELEdBQUMsQ0FBQ0UsSUFBRixHQUFTQyxHQUFULENBQWEsVUFBQ0MsSUFBRCxFQUFPQyxLQUFQLEVBQWlCO0FBQUVKLFVBQU0sQ0FBQ0csSUFBSSxDQUFDRSxPQUFMLENBQWEsSUFBYixFQUFtQixFQUFuQixDQUFELENBQU4sR0FBaUNOLENBQUMsQ0FBQ0ksSUFBRCxDQUFsQztBQUEyQyxHQUEzRTtBQUE2RSxTQUFPSCxNQUFQO0FBQWU7O0FBQ25JLElBQU1BLE1BQU0sR0FBR0YsU0FBUyxDQUFDUSw0REFBRCxDQUF4QixDIiwiZmlsZSI6Im1haW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiaW1hZ2VzL2dydXBwb3ZpbGxhbWFyaWFfbG9nby5wbmdcIjsiLCJleHBvcnQgZGVmYXVsdCBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiaW1hZ2VzL2xlZnQtYXJyb3cuc3ZnXCI7IiwiZXhwb3J0IGRlZmF1bHQgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcImltYWdlcy9sdXh1cnlzdG9yZS5qcGVnXCI7IiwiZXhwb3J0IGRlZmF1bHQgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcImltYWdlcy9yaWdodC1hcnJvdy5zdmdcIjsiLCJleHBvcnQgZGVmYXVsdCBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiaW1hZ2VzL3lleHQtZmF2aWNvbi5wbmdcIjsiLCJleHBvcnQgZGVmYXVsdCBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiaW1hZ2VzL3lleHQtbG9nby5zdmdcIjsiLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiLCIkKGRvY3VtZW50KS5yZWFkeShmdW5jdGlvbigpIHtcbiAgICB2YXIgZCA9IG5ldyBEYXRlKCk7IC8vdmVkbyBjaGUgZ2lvcm5vIO+/vVxuICAgIHZhciBkeSA9IGQuZ2V0RGF5KCk7IC8vIDAgPSBkb21lbmljYSwgMSA9IGx1bmVk77+9IGV0Yy4uXG4gICAgdmFyIGNvdW50ZXIgPSAxO1xuXG4gICAgaWYgKGR5ID09IDApIHtcbiAgICAgICAgbGV0IHggPSAkKFwiLmRheS1saXN0LWlubmVyXCIpWzZdO1xuICAgICAgICAkKHgpLmFkZENsYXNzKFwiZ2lvcm5vX2F0dGl2b1wiKVxuICAgIH0gZWxzZSB7XG4gICAgICAgICQoXCIuZGF5LWxpc3QtaW5uZXJcIikuZWFjaChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBpZiAoY291bnRlciA9PSBkeSkge1xuICAgICAgICAgICAgICAgICQodGhpcykuYWRkQ2xhc3MoXCJnaW9ybm9fYXR0aXZvXCIpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY291bnRlcisrO1xuICAgICAgICB9KVxuICAgIH1cbn0pO1xuIiwiaWNvbmUgPSBbe1xuICBpbWFnZTogXCI8c3ZnIHdpZHRoPScyMXB4JyBoZWlnaHQ9JzI0cHgnIGFyaWEtaGlkZGVuPSd0cnVlJyBmb2N1c2FibGU9J2ZhbHNlJyBkYXRhLXByZWZpeD0nZmFzJyBkYXRhLWljb249J2NhbGVuZGFyLWNoZWNrJyByb2xlPSdpbWcnIHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Zycgdmlld0JveD0nMCAwIDQ0OCA1MTInIGRhdGEtZmEtaTJzdmc9Jyc+PHBhdGggZmlsbD0nY3VycmVudENvbG9yJyBkPSdNMTYwIDMyVjY0SDI4OFYzMkMyODggMTQuMzMgMzAyLjMgMCAzMjAgMEMzMzcuNyAwIDM1MiAxNC4zMyAzNTIgMzJWNjRINDAwQzQyNi41IDY0IDQ0OCA4NS40OSA0NDggMTEyVjE2MEgwVjExMkMwIDg1LjQ5IDIxLjQ5IDY0IDQ4IDY0SDk2VjMyQzk2IDE0LjMzIDExMC4zIDAgMTI4IDBDMTQ1LjcgMCAxNjAgMTQuMzMgMTYwIDMyek0wIDE5Mkg0NDhWNDY0QzQ0OCA0OTAuNSA0MjYuNSA1MTIgNDAwIDUxMkg0OEMyMS40OSA1MTIgMCA0OTAuNSAwIDQ2NFYxOTJ6TTMyOC4xIDMwNC4xQzMzOC4zIDI5NS42IDMzOC4zIDI4MC40IDMyOC4xIDI3MUMzMTkuNiAyNjEuNyAzMDQuNCAyNjEuNyAyOTUgMjcxTDIwMCAzNjYuMUwxNTIuMSAzMTlDMTQzLjYgMzA5LjcgMTI4LjQgMzA5LjcgMTE5IDMxOUMxMDkuNyAzMjguNCAxMDkuNyAzNDMuNiAxMTkgMzUyLjFMMTgzIDQxNi4xQzE5Mi40IDQyNi4zIDIwNy42IDQyNi4zIDIxNi4xIDQxNi4xTDMyOC4xIDMwNC4xeic+PC9wYXRoPjwvc3ZnPlwiXG59XG5dXG5cblxuIiwidmFyIG1hcCA9IHtcblx0XCIuL2dydXBwb3ZpbGxhbWFyaWFfbG9nby5wbmdcIjogXCIuL3NyYy9pbWFnZXMvZ3J1cHBvdmlsbGFtYXJpYV9sb2dvLnBuZ1wiLFxuXHRcIi4vbGVmdC1hcnJvdy5zdmdcIjogXCIuL3NyYy9pbWFnZXMvbGVmdC1hcnJvdy5zdmdcIixcblx0XCIuL2x1eHVyeXN0b3JlLmpwZWdcIjogXCIuL3NyYy9pbWFnZXMvbHV4dXJ5c3RvcmUuanBlZ1wiLFxuXHRcIi4vcmlnaHQtYXJyb3cuc3ZnXCI6IFwiLi9zcmMvaW1hZ2VzL3JpZ2h0LWFycm93LnN2Z1wiLFxuXHRcIi4veWV4dC1mYXZpY29uLnBuZ1wiOiBcIi4vc3JjL2ltYWdlcy95ZXh0LWZhdmljb24ucG5nXCIsXG5cdFwiLi95ZXh0LWxvZ28uc3ZnXCI6IFwiLi9zcmMvaW1hZ2VzL3lleHQtbG9nby5zdmdcIlxufTtcblxuXG5mdW5jdGlvbiB3ZWJwYWNrQ29udGV4dChyZXEpIHtcblx0dmFyIGlkID0gd2VicGFja0NvbnRleHRSZXNvbHZlKHJlcSk7XG5cdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKGlkKTtcbn1cbmZ1bmN0aW9uIHdlYnBhY2tDb250ZXh0UmVzb2x2ZShyZXEpIHtcblx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhtYXAsIHJlcSkpIHtcblx0XHR2YXIgZSA9IG5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIgKyByZXEgKyBcIidcIik7XG5cdFx0ZS5jb2RlID0gJ01PRFVMRV9OT1RfRk9VTkQnO1xuXHRcdHRocm93IGU7XG5cdH1cblx0cmV0dXJuIG1hcFtyZXFdO1xufVxud2VicGFja0NvbnRleHQua2V5cyA9IGZ1bmN0aW9uIHdlYnBhY2tDb250ZXh0S2V5cygpIHtcblx0cmV0dXJuIE9iamVjdC5rZXlzKG1hcCk7XG59O1xud2VicGFja0NvbnRleHQucmVzb2x2ZSA9IHdlYnBhY2tDb250ZXh0UmVzb2x2ZTtcbm1vZHVsZS5leHBvcnRzID0gd2VicGFja0NvbnRleHQ7XG53ZWJwYWNrQ29udGV4dC5pZCA9IFwiLi9zcmMvaW1hZ2VzIHN5bmMgXFxcXC4ocG5nfGpwZT9nfHN2ZykkXCI7IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwidmFyIHNjcmlwdFVybDtcbmlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLmcuaW1wb3J0U2NyaXB0cykgc2NyaXB0VXJsID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmxvY2F0aW9uICsgXCJcIjtcbnZhciBkb2N1bWVudCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5kb2N1bWVudDtcbmlmICghc2NyaXB0VXJsICYmIGRvY3VtZW50KSB7XG5cdGlmIChkb2N1bWVudC5jdXJyZW50U2NyaXB0KVxuXHRcdHNjcmlwdFVybCA9IGRvY3VtZW50LmN1cnJlbnRTY3JpcHQuc3JjXG5cdGlmICghc2NyaXB0VXJsKSB7XG5cdFx0dmFyIHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKTtcblx0XHRpZihzY3JpcHRzLmxlbmd0aCkgc2NyaXB0VXJsID0gc2NyaXB0c1tzY3JpcHRzLmxlbmd0aCAtIDFdLnNyY1xuXHR9XG59XG4vLyBXaGVuIHN1cHBvcnRpbmcgYnJvd3NlcnMgd2hlcmUgYW4gYXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCB5b3UgbXVzdCBzcGVjaWZ5IGFuIG91dHB1dC5wdWJsaWNQYXRoIG1hbnVhbGx5IHZpYSBjb25maWd1cmF0aW9uXG4vLyBvciBwYXNzIGFuIGVtcHR5IHN0cmluZyAoXCJcIikgYW5kIHNldCB0aGUgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gdmFyaWFibGUgZnJvbSB5b3VyIGNvZGUgdG8gdXNlIHlvdXIgb3duIGxvZ2ljLlxuaWYgKCFzY3JpcHRVcmwpIHRocm93IG5ldyBFcnJvcihcIkF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gdGhpcyBicm93c2VyXCIpO1xuc2NyaXB0VXJsID0gc2NyaXB0VXJsLnJlcGxhY2UoLyMuKiQvLCBcIlwiKS5yZXBsYWNlKC9cXD8uKiQvLCBcIlwiKS5yZXBsYWNlKC9cXC9bXlxcL10rJC8sIFwiL1wiKTtcbl9fd2VicGFja19yZXF1aXJlX18ucCA9IHNjcmlwdFVybDsiLCJpbXBvcnQgJy4vbWFpbi5jc3MnO2ltcG9ydCAnLi9qcy9jdXN0b20vaG91cnMtYWN0aXZlLmpzJztpbXBvcnQgJy4vanMvY3VzdG9tL2ljb25lLmpzJztcbmZ1bmN0aW9uIGltcG9ydEFsbChyKSB7bGV0IGltYWdlcyA9IHt9O3Iua2V5cygpLm1hcCgoaXRlbSwgaW5kZXgpID0+IHsgaW1hZ2VzW2l0ZW0ucmVwbGFjZSgnLi8nLCAnJyldID0gcihpdGVtKTsgfSk7cmV0dXJuIGltYWdlczt9XG5jb25zdCBpbWFnZXMgPSBpbXBvcnRBbGwocmVxdWlyZS5jb250ZXh0KCcuL2ltYWdlcycsIGZhbHNlLCAvXFwuKHBuZ3xqcGU/Z3xzdmcpJC8pKTsiXSwic291cmNlUm9vdCI6IiJ9