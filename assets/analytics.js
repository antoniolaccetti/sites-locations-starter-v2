/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/@babel/runtime/helpers/esm/arrayLikeToArray.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/arrayLikeToArray.js ***!
  \*********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _arrayLikeToArray)
/* harmony export */ });
function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;

  for (var i = 0, arr2 = new Array(len); i < len; i++) {
    arr2[i] = arr[i];
  }

  return arr2;
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/arrayWithHoles.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/arrayWithHoles.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _arrayWithHoles)
/* harmony export */ });
function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/arrayWithoutHoles.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/arrayWithoutHoles.js ***!
  \**********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _arrayWithoutHoles)
/* harmony export */ });
/* harmony import */ var _arrayLikeToArray_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./arrayLikeToArray.js */ "./node_modules/@babel/runtime/helpers/esm/arrayLikeToArray.js");

function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr)) return (0,_arrayLikeToArray_js__WEBPACK_IMPORTED_MODULE_0__.default)(arr);
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js ***!
  \*********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _asyncToGenerator)
/* harmony export */ });
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
  try {
    var info = gen[key](arg);
    var value = info.value;
  } catch (error) {
    reject(error);
    return;
  }

  if (info.done) {
    resolve(value);
  } else {
    Promise.resolve(value).then(_next, _throw);
  }
}

function _asyncToGenerator(fn) {
  return function () {
    var self = this,
        args = arguments;
    return new Promise(function (resolve, reject) {
      var gen = fn.apply(self, args);

      function _next(value) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
      }

      function _throw(err) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
      }

      _next(undefined);
    });
  };
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _classCallCheck)
/* harmony export */ });
function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/createClass.js":
/*!****************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/createClass.js ***!
  \****************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _createClass)
/* harmony export */ });
function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  Object.defineProperty(Constructor, "prototype", {
    writable: false
  });
  return Constructor;
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/defineProperty.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _defineProperty)
/* harmony export */ });
function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/iterableToArray.js":
/*!********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/iterableToArray.js ***!
  \********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _iterableToArray)
/* harmony export */ });
function _iterableToArray(iter) {
  if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/iterableToArrayLimit.js":
/*!*************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/iterableToArrayLimit.js ***!
  \*************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _iterableToArrayLimit)
/* harmony export */ });
function _iterableToArrayLimit(arr, i) {
  var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"];

  if (_i == null) return;
  var _arr = [];
  var _n = true;
  var _d = false;

  var _s, _e;

  try {
    for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);

      if (i && _arr.length === i) break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null) _i["return"]();
    } finally {
      if (_d) throw _e;
    }
  }

  return _arr;
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/nonIterableRest.js":
/*!********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/nonIterableRest.js ***!
  \********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _nonIterableRest)
/* harmony export */ });
function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/nonIterableSpread.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/nonIterableSpread.js ***!
  \**********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _nonIterableSpread)
/* harmony export */ });
function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js":
/*!******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/slicedToArray.js ***!
  \******************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _slicedToArray)
/* harmony export */ });
/* harmony import */ var _arrayWithHoles_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./arrayWithHoles.js */ "./node_modules/@babel/runtime/helpers/esm/arrayWithHoles.js");
/* harmony import */ var _iterableToArrayLimit_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./iterableToArrayLimit.js */ "./node_modules/@babel/runtime/helpers/esm/iterableToArrayLimit.js");
/* harmony import */ var _unsupportedIterableToArray_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./unsupportedIterableToArray.js */ "./node_modules/@babel/runtime/helpers/esm/unsupportedIterableToArray.js");
/* harmony import */ var _nonIterableRest_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./nonIterableRest.js */ "./node_modules/@babel/runtime/helpers/esm/nonIterableRest.js");




function _slicedToArray(arr, i) {
  return (0,_arrayWithHoles_js__WEBPACK_IMPORTED_MODULE_0__.default)(arr) || (0,_iterableToArrayLimit_js__WEBPACK_IMPORTED_MODULE_1__.default)(arr, i) || (0,_unsupportedIterableToArray_js__WEBPACK_IMPORTED_MODULE_2__.default)(arr, i) || (0,_nonIterableRest_js__WEBPACK_IMPORTED_MODULE_3__.default)();
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js ***!
  \**********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _toConsumableArray)
/* harmony export */ });
/* harmony import */ var _arrayWithoutHoles_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./arrayWithoutHoles.js */ "./node_modules/@babel/runtime/helpers/esm/arrayWithoutHoles.js");
/* harmony import */ var _iterableToArray_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./iterableToArray.js */ "./node_modules/@babel/runtime/helpers/esm/iterableToArray.js");
/* harmony import */ var _unsupportedIterableToArray_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./unsupportedIterableToArray.js */ "./node_modules/@babel/runtime/helpers/esm/unsupportedIterableToArray.js");
/* harmony import */ var _nonIterableSpread_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./nonIterableSpread.js */ "./node_modules/@babel/runtime/helpers/esm/nonIterableSpread.js");




function _toConsumableArray(arr) {
  return (0,_arrayWithoutHoles_js__WEBPACK_IMPORTED_MODULE_0__.default)(arr) || (0,_iterableToArray_js__WEBPACK_IMPORTED_MODULE_1__.default)(arr) || (0,_unsupportedIterableToArray_js__WEBPACK_IMPORTED_MODULE_2__.default)(arr) || (0,_nonIterableSpread_js__WEBPACK_IMPORTED_MODULE_3__.default)();
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/unsupportedIterableToArray.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/unsupportedIterableToArray.js ***!
  \*******************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _unsupportedIterableToArray)
/* harmony export */ });
/* harmony import */ var _arrayLikeToArray_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./arrayLikeToArray.js */ "./node_modules/@babel/runtime/helpers/esm/arrayLikeToArray.js");

function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return (0,_arrayLikeToArray_js__WEBPACK_IMPORTED_MODULE_0__.default)(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return (0,_arrayLikeToArray_js__WEBPACK_IMPORTED_MODULE_0__.default)(o, minLen);
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/regeneratorRuntime.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/regeneratorRuntime.js ***!
  \*******************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var _typeof = __webpack_require__(/*! ./typeof.js */ "./node_modules/@babel/runtime/helpers/typeof.js").default;

function _regeneratorRuntime() {
  "use strict";
  /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */

  module.exports = _regeneratorRuntime = function _regeneratorRuntime() {
    return exports;
  }, module.exports.__esModule = true, module.exports.default = module.exports;
  var exports = {},
      Op = Object.prototype,
      hasOwn = Op.hasOwnProperty,
      $Symbol = "function" == typeof Symbol ? Symbol : {},
      iteratorSymbol = $Symbol.iterator || "@@iterator",
      asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator",
      toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag";

  function define(obj, key, value) {
    return Object.defineProperty(obj, key, {
      value: value,
      enumerable: !0,
      configurable: !0,
      writable: !0
    }), obj[key];
  }

  try {
    define({}, "");
  } catch (err) {
    define = function define(obj, key, value) {
      return obj[key] = value;
    };
  }

  function wrap(innerFn, outerFn, self, tryLocsList) {
    var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator,
        generator = Object.create(protoGenerator.prototype),
        context = new Context(tryLocsList || []);
    return generator._invoke = function (innerFn, self, context) {
      var state = "suspendedStart";
      return function (method, arg) {
        if ("executing" === state) throw new Error("Generator is already running");

        if ("completed" === state) {
          if ("throw" === method) throw arg;
          return doneResult();
        }

        for (context.method = method, context.arg = arg;;) {
          var delegate = context.delegate;

          if (delegate) {
            var delegateResult = maybeInvokeDelegate(delegate, context);

            if (delegateResult) {
              if (delegateResult === ContinueSentinel) continue;
              return delegateResult;
            }
          }

          if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) {
            if ("suspendedStart" === state) throw state = "completed", context.arg;
            context.dispatchException(context.arg);
          } else "return" === context.method && context.abrupt("return", context.arg);
          state = "executing";
          var record = tryCatch(innerFn, self, context);

          if ("normal" === record.type) {
            if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue;
            return {
              value: record.arg,
              done: context.done
            };
          }

          "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg);
        }
      };
    }(innerFn, self, context), generator;
  }

  function tryCatch(fn, obj, arg) {
    try {
      return {
        type: "normal",
        arg: fn.call(obj, arg)
      };
    } catch (err) {
      return {
        type: "throw",
        arg: err
      };
    }
  }

  exports.wrap = wrap;
  var ContinueSentinel = {};

  function Generator() {}

  function GeneratorFunction() {}

  function GeneratorFunctionPrototype() {}

  var IteratorPrototype = {};
  define(IteratorPrototype, iteratorSymbol, function () {
    return this;
  });
  var getProto = Object.getPrototypeOf,
      NativeIteratorPrototype = getProto && getProto(getProto(values([])));
  NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype);
  var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype);

  function defineIteratorMethods(prototype) {
    ["next", "throw", "return"].forEach(function (method) {
      define(prototype, method, function (arg) {
        return this._invoke(method, arg);
      });
    });
  }

  function AsyncIterator(generator, PromiseImpl) {
    function invoke(method, arg, resolve, reject) {
      var record = tryCatch(generator[method], generator, arg);

      if ("throw" !== record.type) {
        var result = record.arg,
            value = result.value;
        return value && "object" == _typeof(value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) {
          invoke("next", value, resolve, reject);
        }, function (err) {
          invoke("throw", err, resolve, reject);
        }) : PromiseImpl.resolve(value).then(function (unwrapped) {
          result.value = unwrapped, resolve(result);
        }, function (error) {
          return invoke("throw", error, resolve, reject);
        });
      }

      reject(record.arg);
    }

    var previousPromise;

    this._invoke = function (method, arg) {
      function callInvokeWithMethodAndArg() {
        return new PromiseImpl(function (resolve, reject) {
          invoke(method, arg, resolve, reject);
        });
      }

      return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg();
    };
  }

  function maybeInvokeDelegate(delegate, context) {
    var method = delegate.iterator[context.method];

    if (undefined === method) {
      if (context.delegate = null, "throw" === context.method) {
        if (delegate.iterator["return"] && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method)) return ContinueSentinel;
        context.method = "throw", context.arg = new TypeError("The iterator does not provide a 'throw' method");
      }

      return ContinueSentinel;
    }

    var record = tryCatch(method, delegate.iterator, context.arg);
    if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel;
    var info = record.arg;
    return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel);
  }

  function pushTryEntry(locs) {
    var entry = {
      tryLoc: locs[0]
    };
    1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry);
  }

  function resetTryEntry(entry) {
    var record = entry.completion || {};
    record.type = "normal", delete record.arg, entry.completion = record;
  }

  function Context(tryLocsList) {
    this.tryEntries = [{
      tryLoc: "root"
    }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0);
  }

  function values(iterable) {
    if (iterable) {
      var iteratorMethod = iterable[iteratorSymbol];
      if (iteratorMethod) return iteratorMethod.call(iterable);
      if ("function" == typeof iterable.next) return iterable;

      if (!isNaN(iterable.length)) {
        var i = -1,
            next = function next() {
          for (; ++i < iterable.length;) {
            if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next;
          }

          return next.value = undefined, next.done = !0, next;
        };

        return next.next = next;
      }
    }

    return {
      next: doneResult
    };
  }

  function doneResult() {
    return {
      value: undefined,
      done: !0
    };
  }

  return GeneratorFunction.prototype = GeneratorFunctionPrototype, define(Gp, "constructor", GeneratorFunctionPrototype), define(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) {
    var ctor = "function" == typeof genFun && genFun.constructor;
    return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name));
  }, exports.mark = function (genFun) {
    return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun;
  }, exports.awrap = function (arg) {
    return {
      __await: arg
    };
  }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () {
    return this;
  }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) {
    void 0 === PromiseImpl && (PromiseImpl = Promise);
    var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl);
    return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) {
      return result.done ? result.value : iter.next();
    });
  }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () {
    return this;
  }), define(Gp, "toString", function () {
    return "[object Generator]";
  }), exports.keys = function (object) {
    var keys = [];

    for (var key in object) {
      keys.push(key);
    }

    return keys.reverse(), function next() {
      for (; keys.length;) {
        var key = keys.pop();
        if (key in object) return next.value = key, next.done = !1, next;
      }

      return next.done = !0, next;
    };
  }, exports.values = values, Context.prototype = {
    constructor: Context,
    reset: function reset(skipTempReset) {
      if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) {
        "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined);
      }
    },
    stop: function stop() {
      this.done = !0;
      var rootRecord = this.tryEntries[0].completion;
      if ("throw" === rootRecord.type) throw rootRecord.arg;
      return this.rval;
    },
    dispatchException: function dispatchException(exception) {
      if (this.done) throw exception;
      var context = this;

      function handle(loc, caught) {
        return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught;
      }

      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i],
            record = entry.completion;
        if ("root" === entry.tryLoc) return handle("end");

        if (entry.tryLoc <= this.prev) {
          var hasCatch = hasOwn.call(entry, "catchLoc"),
              hasFinally = hasOwn.call(entry, "finallyLoc");

          if (hasCatch && hasFinally) {
            if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0);
            if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc);
          } else if (hasCatch) {
            if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0);
          } else {
            if (!hasFinally) throw new Error("try statement without catch or finally");
            if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc);
          }
        }
      }
    },
    abrupt: function abrupt(type, arg) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];

        if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) {
          var finallyEntry = entry;
          break;
        }
      }

      finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null);
      var record = finallyEntry ? finallyEntry.completion : {};
      return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record);
    },
    complete: function complete(record, afterLoc) {
      if ("throw" === record.type) throw record.arg;
      return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel;
    },
    finish: function finish(finallyLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel;
      }
    },
    "catch": function _catch(tryLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];

        if (entry.tryLoc === tryLoc) {
          var record = entry.completion;

          if ("throw" === record.type) {
            var thrown = record.arg;
            resetTryEntry(entry);
          }

          return thrown;
        }
      }

      throw new Error("illegal catch attempt");
    },
    delegateYield: function delegateYield(iterable, resultName, nextLoc) {
      return this.delegate = {
        iterator: values(iterable),
        resultName: resultName,
        nextLoc: nextLoc
      }, "next" === this.method && (this.arg = undefined), ContinueSentinel;
    }
  }, exports;
}

module.exports = _regeneratorRuntime, module.exports.__esModule = true, module.exports.default = module.exports;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/typeof.js":
/*!*******************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/typeof.js ***!
  \*******************************************************/
/***/ ((module) => {

function _typeof(obj) {
  "@babel/helpers - typeof";

  return (module.exports = _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) {
    return typeof obj;
  } : function (obj) {
    return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
  }, module.exports.__esModule = true, module.exports.default = module.exports), _typeof(obj);
}

module.exports = _typeof, module.exports.__esModule = true, module.exports.default = module.exports;

/***/ }),

/***/ "./node_modules/@babel/runtime/regenerator/index.js":
/*!**********************************************************!*\
  !*** ./node_modules/@babel/runtime/regenerator/index.js ***!
  \**********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

// TODO(Babel 8): Remove this file.
var runtime = __webpack_require__(/*! ../helpers/regeneratorRuntime */ "./node_modules/@babel/runtime/helpers/regeneratorRuntime.js")();

module.exports = runtime; // Copied from https://github.com/facebook/regenerator/blob/main/packages/runtime/runtime.js#L736=

try {
  regeneratorRuntime = runtime;
} catch (accidentalStrictMode) {
  if ((typeof globalThis === "undefined" ? "undefined" : _typeof(globalThis)) === "object") {
    globalThis.regeneratorRuntime = runtime;
  } else {
    Function("r", "regeneratorRuntime = r")(runtime);
  }
}

/***/ }),

/***/ "./src/analytics/Analytics.js":
/*!************************************!*\
  !*** ./src/analytics/Analytics.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Analytics": () => (/* binding */ Analytics)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/toConsumableArray */ "./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _DelayNavigation_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./DelayNavigation.js */ "./src/analytics/DelayNavigation.js");
/* harmony import */ var _Helpers_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./Helpers.js */ "./src/analytics/Helpers.js");









var conversionDomain = 'realtimeanalytics.yext.com';
var eventDomain = 'www.yext-pixel.com';
var conversionEndpoint = 'conversiontracking/conversion';
var listingsEndpoint = 'listings';
var eventEndpoint = 'store_pagespixel';

var Analytics = /*#__PURE__*/function () {
  // Takes Window as reference for better minification references
  function Analytics() {
    var _this = this;

    var win = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : window;
    var eventNameCalculator = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _Helpers_js__WEBPACK_IMPORTED_MODULE_8__.CalcEventNameForElement;

    (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_4__.default)(this, Analytics);

    var analyticsQName = win.YextAnalyticsObject || 'ya';
    this._eventNameCalculator = eventNameCalculator;
    this.win = win;
    this.dom = win.document;
    this.set({
      pageurl: win.location.pathname,
      pagesReferrer: win.document.referrer
    });
    this.registeredListeners = {};
    this.StandardEvents = {
      WebsiteClick: 'website',
      DrivingDirections: 'directions',
      MobileCall: 'phone',
      CTAClick: 'cta'
    };
    this.delayNavigation = true;
    this.conversionTrackingEnabled = false;
    this.CONSTANTS = {
      COOKIE_PARAM: '_yfpc',
      COOKIE_REMOVAL_VALUE: '__temp__' // Only for expired cookies to be removed

    };
    this.listingsClickFired = false;

    var queryParams = this._getQueryParams();

    this.y_source = queryParams.y_source;

    if ('y_source' in queryParams) {
      // Remove the conversion source param to prevent re-submission on page reload
      delete queryParams.y_source;

      var queryString = this._buildQueryString(queryParams);

      window.history.replaceState(window.history.state, document.title, window.location.pathname + (queryString ? '?' + queryString : ''));
    }

    onReady(function () {
      // Always observe clicks so we can fire the catch-all interaction events
      _this.registerObserver('click'); // Drain the command queue, if present


      if (win[analyticsQName]) {
        var cq = win[analyticsQName].q || [];

        while (cq.length) {
          var commandArgs = cq.shift();

          _this.processCommand.apply(_this, (0,_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_3__.default)(commandArgs));
        }
      } // Replace the command queue with a proxy to this instance


      win[analyticsQName] = function () {
        return _this.processCommand.apply(_this, arguments);
      };
    });
  }

  (0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_5__.default)(Analytics, [{
    key: "setCalcEventName",
    value: function setCalcEventName(calculator) {
      this._eventNameCalculator = calculator;
    }
  }, {
    key: "CalcEventNameForElement",
    value: function CalcEventNameForElement(target) {
      return this._eventNameCalculator(target);
    }
  }, {
    key: "loaded",
    value: function loaded() {
      return this.siteData.siteId !== undefined && this.siteData.businessids !== undefined;
    }
  }, {
    key: "create",
    value: function create(busId, site, staging) {
      this.set({
        businessids: busId,
        siteId: site,
        isStaging: staging
      });
      return true;
    }
  }, {
    key: "set",
    value: function set(data) {
      this.siteData = Object.assign(this.siteData || {}, data);
    }
  }, {
    key: "setDelayNavigation",
    value: function setDelayNavigation(bool) {
      this.delayNavigation = bool;
    }
  }, {
    key: "setConversionTrackingEnabled",
    value: function setConversionTrackingEnabled(bool) {
      this.conversionTrackingEnabled = bool && !this.doNotTrackEnabled();

      this._fireListingsTagIfShould();
    }
  }, {
    key: "pageview",
    value: function pageview() {
      this.send({
        eventType: 'pageview'
      });
    }
  }, {
    key: "click",
    value: function click(opts) {
      this.registerObserverForSelector('click', opts.selector, opts.name);
    }
  }, {
    key: "trackEvent",
    value: function trackEvent(eventName, cb) {
      this.send({
        eventType: eventName
      }, cb);
    } // Internal from here on out!

    /**
     * @return {number} The random number to include as a URL param
     */

  }, {
    key: "generateRandomCookie_",
    value: function generateRandomCookie_() {
      return Math.floor(Math.random() * new Date().getTime());
    }
    /**
     * Retrieves the identifier stored as a cookie on the user's browser, if present. Otherwise
     * returns empty. This is accomplished by attempting to set a cookie at domains in order of
     * increasing specificity (e.g. ".com", then ".example.com", then ".subdomain.example.com"), and
     * the first one that we can set a cookie in is the root domain. Check if we already have a cookie
     * in the root domain and if not, check if a cookie exists without a domain, for legacy reasons.
     *
     * @private
     * @return {string} The value to include as a URL param, or empty
     */

  }, {
    key: "fetchCookie_",
    value: function fetchCookie_() {
      var _this2 = this;

      var cookieValue = '';

      var checkDomain = function checkDomain(domain) {
        if (_this2.canSetCookieWithDomain_(domain)) {
          var removedValue = _this2.removeCookieByDomain_(domain);

          if (removedValue) {
            // We found and removed a value, so put it back
            cookieValue = removedValue;

            _this2.setCookie_(cookieValue, domain);
          } // Exit the loop once we've reached root domain (the first domain where we can set a cookie)


          return true;
        }
      };

      this.forEachDomainIncreasingSpecificity_(checkDomain); // If no cookie was present in the root domain, check for a cookie that doesn't have a domain
      // specified (by passing an empty string to checkDomain, indicating no domain).

      if (!cookieValue) checkDomain('');
      return cookieValue;
    }
    /**
     * Stores a cookie on the user's browser with the given value and domain, with name COOKIE_PARAM.
     *
     * @private
     * @param {string} cookieValue The value to set as the first party cookie
     * @param {string} cookieDomain The domain in which to set the cookie
     */

  }, {
    key: "setCookie_",
    value: function setCookie_(cookieValue, cookieDomain) {
      var cookieString = this.formatCookie_(this.CONSTANTS.COOKIE_PARAM, cookieValue, cookieDomain);
      this.win.document.cookie = cookieString;
    }
    /**
     * Creates a formatted cookie string given a key, value, domain, and, optionally, a path. 
     * `Expires` is set to ensure the cookie is persistent, `Samesite=None` so the value can be 
     * included in cross-site requests,`Domain` defaults to root domain (if possible) to enable 
     * tracking across subdomains, and `Secure` is required when using 
     * `Samesite=None`: https://www.chromestatus.com/feature/5633521622188032
     * 
     * @private
     * @param {string} cookieName The name of the cookie
     * @param {string} cookieValue The value of the cookie
     * @param {string} domain The domain to set the cookie for
     * @param {string=} path The path to set the cookie for
     * @return {string} A cookie string which can be directly added to a document's cookies
     */

  }, {
    key: "formatCookie_",
    value: function formatCookie_(cookieName, cookieValue, domain) {
      var path = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : '/';
      var cookieString = cookieName + '=' + cookieValue,
          now = new Date();
      now.setTime(now.getTime() + 90 * 24 * 60 * 60 * 1000);
      cookieString += ';path=' + path;
      cookieString += ';expires=' + now.toUTCString();
      if (domain) cookieString += ';domain=' + domain;
      cookieString += ';samesite=None;';

      if (this.win.location.protocol === 'https:') {
        cookieString += ' Secure ';
      }

      return cookieString;
    }
    /**
     * Returns whether we are able to set a cookie (formatted like the actual cookie for tracking)
     * at a specified domain or not. Preserves existing cookies in the same domain (but not their
     * expiration dates).
     * 
     * @private
     * @param {string} domain The value for the cookie's domain attribute
     * @return {boolean} Whether a dummy cookie was successfully set with domain set to domain.
     */

  }, {
    key: "canSetCookieWithDomain_",
    value: function canSetCookieWithDomain_(domain) {
      var lostCookie = this.removeCookieByDomain_(domain);
      var existingCookies = this.allCookies_();
      this.setCookie_(this.CONSTANTS.COOKIE_REMOVAL_VALUE, domain);
      var newCookies = this.allCookies_();

      if (existingCookies.length < newCookies.length) {
        // Cookie was successfully saved, so wipe it and put back the old cookie if there was one
        if (lostCookie) {
          this.setCookie_(lostCookie, domain);
        } else {
          this.clearCookie_(domain);
        }

        return true;
      }

      return false;
    }
    /**
     * Sets a cookie with name COOKIE_PARAM to make it expire immediately.
     * 
     * @private
     * @param {string=} cookieDomain The domain of the cookie to clear
     * @param {string=} cookiePath The path of the cookie to be deleted (defaults to '/')
     */

  }, {
    key: "clearCookie_",
    value: function clearCookie_() {
      var cookieDomain = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
      var cookiePath = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '/';
      var cookieName = this.CONSTANTS.COOKIE_PARAM;
      var epoch = new Date(0);
      var cookieString = cookieName + '=' + this.CONSTANTS.COOKIE_REMOVAL_VALUE;
      cookieString += ';path=' + cookiePath;
      cookieString += ';expires=' + epoch.toUTCString();
      if (cookieDomain) cookieString += ';domain=' + cookieDomain + ';';
      cookieString += ';samesite=None;';

      if (this.win.location.protocol === 'https:') {
        cookieString += ' Secure ';
      }

      this.dom.cookie = cookieString;
    }
    /**
     * Removes a COOKIE_PARAM cookie by domain, then returns its value if successful and empty string
     * otherwise.
     * 
     * @private
     * @param {string} cookieDomain The domain to remove the cookie from
     * @return {string} The value of the cookie, or empty string if not found.
     */

  }, {
    key: "removeCookieByDomain_",
    value: function removeCookieByDomain_(cookieDomain) {
      var prevRemainingCookies = this.persistentCookies_();
      this.clearCookie_(cookieDomain);
      var remainingCookies = this.persistentCookies_();

      if (remainingCookies.length < prevRemainingCookies.length) {
        var removedValue = this.listDifference_(prevRemainingCookies, remainingCookies)[0] || '';
        return removedValue;
      }

      return '';
    }
    /**
     * Returns the list difference between a superlist and sublist, accounting for number of
     * occurrences.
     * 
     * @private
     * @param {!Array<?>} superlist The full array
     * @param {!Array<?>} sublist The subarray
     * @return {!Array<?>} The elements in superset that are not in subset
     */

  }, {
    key: "listDifference_",
    value: function listDifference_(superlist, sublist) {
      var superlistCopy = Array.from(superlist);

      for (var i = 0; i < sublist.length; i++) {
        var index = superlistCopy.indexOf(sublist[i]);

        if (index !== -1) {
          superlistCopy.splice(index, 1);
        }
      }

      return superlistCopy;
    }
    /**
     * Retrieves a list of values of cookies with the name of COOKIE_PARAM that are present and not 
     * set to be removed (i.e. having the specific value this script uses to indicate a removed
     * cookie).
     * 
     * @private
     * @return {!Array<string>} The non-temporary values associated to COOKIE_PARAM
     */

  }, {
    key: "persistentCookies_",
    value: function persistentCookies_() {
      var _this3 = this;

      return this.allCookies_().filter(function (val) {
        return val !== _this3.CONSTANTS.COOKIE_REMOVAL_VALUE;
      });
    }
    /**
     * Retrieves a list of values of cookies with the name of COOKIE_PARAM that are present.
     * 
     * @private
     * @return {!Array<string>} All values associated to COOKIE_PARAM
     */

  }, {
    key: "allCookies_",
    value: function allCookies_() {
      var cookieName = this.CONSTANTS.COOKIE_PARAM;
      var arr = [];
      this.forEachCookieNameValue_(function (name, value) {
        if (name === cookieName) {
          arr.push(value);
        }
      });
      return arr;
    }
    /**
     * Runs nameValueFunc on each cookie's key and value (after trimming), only if the key and value 
     * are both truthy.
     * 
     * @private
     * @param {function(string, string)} nameValueFunc A function to run on each cookie key-value pair
     */

  }, {
    key: "forEachCookieNameValue_",
    value: function forEachCookieNameValue_(nameValueFunc) {
      this.win.document.cookie.split(';').forEach(function (cookie) {
        var keyValue = cookie.split('='),
            key = keyValue[0],
            value = keyValue[1];

        if (key && value) {
          nameValueFunc(key.trim(), value.trim());
        }
      });
    }
    /**
     * Runs a function on each possible domain in order of increasing specificity (e.g. .com,
     * .example.com, .full.example.com). Note that empty string, indicating unset domain, is iterated
     * through at the end. A truthy return value indicates to break out of the loop.
     * 
     * @private
     * @param {function(string): (boolean|undefined)} func A function to call on each possible domain 
     */

  }, {
    key: "forEachDomainIncreasingSpecificity_",
    value: function forEachDomainIncreasingSpecificity_(func) {
      var exitedLoop = false;
      var domainParts = this.win.location.hostname.split('.').reverse();
      var currDomain = '';

      for (var i = 0; i < domainParts.length; i++) {
        currDomain = '.' + domainParts[i] + currDomain;

        if (func(currDomain)) {
          exitedLoop = true;
          break;
        }
      }

      if (!exitedLoop) func('');
    }
    /**
     * Stores a tracking cookie on the user's browser with the given value in the root domain, and
     * removes first party cookies from all other domains (which may be present for legacy reasons).
     *
     * @private
     * @param {string} cookieValue The value to set as the first party cookie
     */

  }, {
    key: "setCookieAndRemoveOldCookies_",
    value: function setCookieAndRemoveOldCookies_(cookieValue) {
      var _this4 = this;

      var rootDomainReached = false;
      var totalCookies = this.allCookies_().length;
      var numCookiesEncountered = 0; // Iterate until we find the topmost domain (the root domain), where we set the cookie, 
      // then continue iterating, just deleting any cookies we find afterwards.

      this.forEachDomainIncreasingSpecificity_(function (domain) {
        if (rootDomainReached) {
          if (_this4.removeCookieByDomain_(domain)) numCookiesEncountered++;
        } else {
          if (_this4.canSetCookieWithDomain_(domain)) {
            // In root domain, so set cookie
            if (_this4.removeCookieByDomain_(domain)) numCookiesEncountered++;

            _this4.setCookie_(cookieValue, domain);

            rootDomainReached = true;
          }
        }

        if (numCookiesEncountered >= totalCookies && rootDomainReached) {
          // Break if we've already encountered every cookie and we already set one in root domain
          return true;
        }
      });
    }
    /**
      * Fire a listings conversion click event once. This event must not be fired before the user
      * opts in to conversion tracking.
      */

  }, {
    key: "_fireListingsTagIfShould",
    value: function _fireListingsTagIfShould() {
      if (this.listingsClickFired || !this.conversionTrackingEnabled || !this.y_source) {
        return;
      }

      var cookieValue = this.fetchCookie_();

      if (!cookieValue) {
        cookieValue = this.generateRandomCookie_().toString();
      }

      this.setCookieAndRemoveOldCookies_(cookieValue);

      var data = (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2__.default)({
        y_source: this.y_source,
        referrer: document.referrer,
        location: window.location.href
      }, this.CONSTANTS.COOKIE_PARAM, cookieValue);

      var url = this._getTrackerUrl(conversionDomain, listingsEndpoint, data);

      this.fire(url);
      this.listingsClickFired = true;
    }
    /**
     * Build a query string from the given data
     *
     * @param {Object} data The data to be serialized in the query
     * @return {string} The data as a query string, 'key=value' joined by '&'
     */

  }, {
    key: "_buildQueryString",
    value: function _buildQueryString(data) {
      return Object.entries(data).filter(function (_ref) {
        var _ref2 = (0,_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1__.default)(_ref, 1),
            key = _ref2[0];

        return key;
      }).map(function (_ref3) {
        var _ref4 = (0,_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1__.default)(_ref3, 2),
            key = _ref4[0],
            value = _ref4[1];

        return (Array.isArray(value) ? value : [value]).map(function (val) {
          return key + '=' + encodeURIComponent(val === undefined ? '' : val);
        }).join('&');
      }).join('&');
    }
    /**
     * Get the URL for an analytics event
     *
     * @param {string} domain The domain of the URL
     * @param {string} endpoint The path after the domain
     * @param {Object} data The data to be serialized in the query
     * @return {string} The full URL
     */

  }, {
    key: "_getTrackerUrl",
    value: function _getTrackerUrl(domain, endpoint, data) {
      var queryString = this._buildQueryString(data);

      return "https://".concat(domain, "/").concat(endpoint, "?").concat(queryString);
    }
    /**
     * Get the URL query parameters from window.location.search
     *
     * @return {Object} The URL parameters
     */

  }, {
    key: "_getQueryParams",
    value: function _getQueryParams() {
      return window.location.search.substring(1).split('&').map(function (param) {
        return param.split('=');
      }).reduce(function (params, _ref5) {
        var _ref6 = (0,_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1__.default)(_ref5, 2),
            key = _ref6[0],
            value = _ref6[1];

        var decodedVal = value && decodeURIComponent(value);

        if (key in params) {
          if (Array.isArray(params[key])) {
            params[key].push(decodedVal);
          } else {
            params[key] = [params[key], decodedVal];
          }
        } else {
          params[key] = decodedVal;
        }

        return params;
      }, {});
    }
  }, {
    key: "once",
    value: function once(task) {
      if (!task) return;
      var invoked = false;
      return function () {
        if (invoked) return;
        invoked = true;
        task();
      };
    }
  }, {
    key: "send",
    value: function send(data, cb) {
      this.fire(this.pixelURL(data), cb);
    }
  }, {
    key: "registerObserverForSelector",
    value: function registerObserverForSelector(eventType, selector, eventName) {
      this.registerObserver(eventType); // GENERATOR TODO: Do we want to be able to track multiple events for the same selector?

      _Helpers_js__WEBPACK_IMPORTED_MODULE_8__.SelectorTracking[selector] = eventName;
    }
  }, {
    key: "registerObserver",
    value: function registerObserver(eventType) {
      if (!this.registeredListeners.hasOwnProperty(eventType)) {
        // this used to call a polyfill at the top of the page that was migrated to
        // the Polyfills Components (test in IE)
        this.dom.body.addEventListener(eventType, this.handleEvent.bind(this));
        this.registeredListeners[eventType] = true;
      }
    }
  }, {
    key: "unRegisterObserver",
    value: function unRegisterObserver(eventType, selector, eventName) {
      if (_Helpers_js__WEBPACK_IMPORTED_MODULE_8__.SelectorTracking.hasOwnProperty(selector)) {
        delete _Helpers_js__WEBPACK_IMPORTED_MODULE_8__.SelectorTracking[selector];
      } // GENERATOR TODO: coordinate remove of selector tracking with unregistering event listener

    }
  }, {
    key: "processCommand",
    value: function processCommand(command) {
      for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
        args[_key - 1] = arguments[_key];
      }

      if (arguments.length === 0) {
        throw 'Received Analytics Command with no Arguments';
      }

      if (typeof this[command] === 'function') {
        return this[command].apply(this, args);
      } else {
        throw "Unknown command ".concat(command);
      }
    }
  }, {
    key: "pixelURL",
    value: function pixelURL(optionalData) {
      var combinedData = Object.assign({
        product: 'sites',
        v: this.seed()
      }, this.siteData, optionalData);

      if (this.conversionTrackingEnabled) {
        var cookieValue = this.fetchCookie_();

        if (!cookieValue) {
          cookieValue = this.generateRandomCookie_().toString();
        }

        this.setCookieAndRemoveOldCookies_(cookieValue);
        combinedData[this.CONSTANTS.COOKIE_PARAM] = cookieValue;
      }

      if (optionalData.eventType) {
        (0,_Helpers_js__WEBPACK_IMPORTED_MODULE_8__.PrintEvent)(optionalData.eventType);
      }

      var analyticsDomain = this.conversionTrackingEnabled ? conversionDomain : eventDomain;
      return this._getTrackerUrl(analyticsDomain, eventEndpoint, combinedData);
    }
  }, {
    key: "getConversionParams",
    value: function getConversionParams(el) {
      for (var current = el; current !== null; current = current.parentNode) {
        if (!current.dataset) {
          continue;
        }

        if (current.dataset.yaCid) {
          var params = {
            cid: current.dataset.yaCid
          };
          return params;
        }
      }
    } // ported from https://assets.sitescdn.net/ytag/ytag.min.js

  }, {
    key: "conversionURL",
    value: function conversionURL(data) {
      return this._getTrackerUrl(conversionDomain, conversionEndpoint, data);
    }
  }, {
    key: "seed",
    value: function seed() {
      return Date.now() + Math.floor(1000 * Math.random());
    }
  }, {
    key: "fire",
    value: function fire(pixel, cb) {
      if (!this.loaded()) {
        throw new Error("Attempted to observe fire ".concat(pixel, " on ").concat(event.type, " before initializing Yext.Analytics.SiteData"));
      }

      var px = this.dom.createElement('img');
      px.src = pixel;
      px.style.width = '0';
      px.style.height = '0';
      px.style.position = 'absolute';
      px.alt = '';

      if (cb) {
        // The callback passed to this function should be invoked after the pixel has successfully
        // fired and we're confident the tracking server has received the request.  The most common
        // use of the callback is to navigate the user agent away from the current domain - say, a click
        // on an anchor tag with an off-domain href.  In those situations, we want to 'delay' the
        // actual browser navigation because the act of moving to another domain will cause some
        // user agents to cancel all in-flight network requests that the current page originated,
        // including an image load like the one we use here for analytics transport.
        //
        // That said, it's critical that the callback is _eventually_ invoked since it represents
        // preservation of the user's intent (to navigate away).  `onload` and `onerror` provide
        // most of the coverage we need - the majority of the time the pixel should load in < 100ms,
        // and in the unlikely scenario the pixel server was unavailable the error should happen
        // quickly.  However, there are situations in which the user-agent could connect to the
        // pixel server but listen indefinitely for a response - high load or stuck threads, for
        // example.  The setTimeout(), thereforce, acts as an absolute failsafe.
        //
        // The once wrapper ensures that the cb function is only invoked a single time.
        var onceCB = this.once(cb);
        px.onload = onceCB;
        px.onerror = onceCB;
        setTimeout(onceCB, 1000);
      }

      this.dom.body.appendChild(px);
    }
  }, {
    key: "fireWithEvent",
    value: function fireWithEvent(pixel, event) {
      var _this5 = this;

      if (this.delayNavigation) {
        (0,_DelayNavigation_js__WEBPACK_IMPORTED_MODULE_7__.DelayNavigation)(function (done) {
          return _this5.fire(pixel, done);
        }, event);
      } else {
        this.fire(pixel);
      }
    }
  }, {
    key: "handleConversion",
    value: function handleConversion(event) {
      var _this6 = this;

      return new Promise(function (resolve, reject) {
        var params = _this6.getConversionParams(event.target);

        if (!params) {
          return resolve();
        }

        Object.assign(params, {
          v: Date.now() + Math.floor(1E3 * Math.random())
        });

        var url = _this6.conversionURL(params);

        _this6.fire(url, resolve);
      });
    }
  }, {
    key: "handleEvent",
    value: function () {
      var _handleEvent = (0,_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_6___default().mark(function _callee(event) {
        var selector, eventName;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_6___default().wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.t0 = _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_6___default().keys(_Helpers_js__WEBPACK_IMPORTED_MODULE_8__.SelectorTracking);

              case 1:
                if ((_context.t1 = _context.t0()).done) {
                  _context.next = 9;
                  break;
                }

                selector = _context.t1.value;

                if (!_Helpers_js__WEBPACK_IMPORTED_MODULE_8__.SelectorTracking.hasOwnProperty(selector)) {
                  _context.next = 7;
                  break;
                }

                if (!(0,_Helpers_js__WEBPACK_IMPORTED_MODULE_8__.SearchElementForSelector)(event.target, selector)) {
                  _context.next = 7;
                  break;
                }

                this.fireWithEvent(this.pixelURL({
                  eventType: _Helpers_js__WEBPACK_IMPORTED_MODULE_8__.SelectorTracking[selector]
                }), event);
                return _context.abrupt("return");

              case 7:
                _context.next = 1;
                break;

              case 9:
                eventName = this.CalcEventNameForElement(event.target);

                if (eventName) {
                  _context.next = 12;
                  break;
                }

                return _context.abrupt("return");

              case 12:
                if (!this.conversionTrackingEnabled) {
                  _context.next = 15;
                  break;
                }

                _context.next = 15;
                return this.handleConversion(event);

              case 15:
                this.fireWithEvent(this.pixelURL({
                  eventType: eventName
                }), event);

              case 16:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function handleEvent(_x) {
        return _handleEvent.apply(this, arguments);
      }

      return handleEvent;
    }()
  }, {
    key: "doNotTrackEnabled",
    value: function doNotTrackEnabled() {
      return this.win.doNotTrack == '1' || this.win.navigator.doNotTrack == 'yes' || this.win.navigator.doNotTrack == '1' || this.win.navigator.msDoNotTrack == '1';
    }
  }]);

  return Analytics;
}();



/***/ }),

/***/ "./src/analytics/Debug.js":
/*!********************************!*\
  !*** ./src/analytics/Debug.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Debug": () => (/* binding */ Debug)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");


var param = 'xYextDebug';
var Debug = /*#__PURE__*/function () {
  function Debug() {
    (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__.default)(this, Debug);
  }

  (0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__.default)(Debug, null, [{
    key: "hasQueryParam",
    value: function hasQueryParam() {
      if ('URL' in window && typeof URL === "function") {
        var params = new URL(window.location.href).searchParams;
        return params && params.get(param) == 'true';
      }

      return false;
    }
  }, {
    key: "enable",
    value: function enable() {
      document.documentElement.classList.add(param);
    }
  }, {
    key: "disable",
    value: function disable() {
      document.documentElement.classList.remove(param);
    }
  }, {
    key: "isEnabled",
    value: function isEnabled() {
      var enabled = this.hasQueryParam();

      if (enabled) {
        this.enable();
      }

      return enabled;
    }
  }]);

  return Debug;
}();

/***/ }),

/***/ "./src/analytics/DelayNavigation.js":
/*!******************************************!*\
  !*** ./src/analytics/DelayNavigation.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DelayNavigation": () => (/* binding */ DelayNavigation)
/* harmony export */ });
function DelayNavigation(action, event) {
  if (!event) {
    action();
    return;
  }

  var el = event.srcElement || event.target;
  /* Loop up the DOM tree through parent elements if clicked element is not a link (eg: an image inside a link) */

  while (el && (typeof el.tagName == 'undefined' || el.tagName.toLowerCase() != 'a' || !el.href)) {
    el = el.parentNode;
  }

  var willFire = false;
  var rightClick = event.which === 3;
  /* if a link with valid href has been clicked */

  if (el && el.href && el.dataset.yaNoWait !== 'true' && !rightClick && !event.defaultPrevented) {
    var link = el.href;
    /* Only if it is an external link */

    if (link.indexOf(location.host) == -1 && !(el.protocol == 'mailto:' || el.protocol == 'tel:' || el.protocol == 'javascript:')) {
      /* Is actual target set and not _(self|parent|top)? */
      var target = el.target && !el.target.match(/^_(self|parent|top)$/i) ? el.target : false;
      /* Assume a target if Ctrl|shift|meta-click */

      if (event.ctrlKey || event.shiftKey || event.metaKey || event.which == 2) {
        target = '_blank';
      }

      if (!target) {
        willFire = true;
        var hbrun = false; // tracker has not yet run

        /* HitCallback to open link in same window after tracker */

        var hitBack = function hitBack() {
          /* run once only */
          if (hbrun) return;
          hbrun = true;
          window.location.href = link;
        };
        /* Prevent standard click, track then open */


        event.preventDefault ? event.preventDefault() : event.returnValue = false;
        /* send event with callback */

        action(hitBack);
      }
    }
  }

  if (!willFire) action();
}



/***/ }),

/***/ "./src/analytics/Helpers.js":
/*!**********************************!*\
  !*** ./src/analytics/Helpers.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SelectorTracking": () => (/* binding */ SelectorTracking),
/* harmony export */   "GetParams": () => (/* binding */ GetParams),
/* harmony export */   "CheckAnchorQueries": () => (/* binding */ CheckAnchorQueries),
/* harmony export */   "SearchElementForSelector": () => (/* binding */ SearchElementForSelector),
/* harmony export */   "CalcEventNameForElement": () => (/* binding */ CalcEventNameForElement),
/* harmony export */   "CalcEventNameMap": () => (/* binding */ CalcEventNameMap),
/* harmony export */   "PrintEvent": () => (/* binding */ PrintEvent)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var _Debug_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Debug.js */ "./src/analytics/Debug.js");


function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }


var SelectorTracking = {};

function GetParams(url) {
  var queries = {};
  var parts = url.split('?');

  if (parts.length == 2) {
    parts[1].split('&').forEach(function (pair) {
      var params = pair.split('=');
      queries[params[0]] = params[1];
    });
  }

  return queries;
}

function CheckAnchorQueries(anchor) {
  if (anchor && anchor.href) {
    var eName = GetParams(anchor.href)['ya-track'];

    if (eName) {
      return eName;
    }
  }

  return false;
}

function SearchElementForSelector(el, s) {
  /* Loop up the DOM tree through parent elements to try to find an element that matches the given selector */
  while (el && el.tagName && !el.matches(s)) {
    el = el.parentNode;
  }

  if (el && el.tagName && el.matches(s)) {
    return el;
  }

  return null;
}

function CalcEventNameForElement(element) {
  var type = null;
  var trackDetails = null;
  var srcEl = null;

  for (var selector in SelectorTracking) {
    if (!element.matches(selector)) continue;
    trackDetails = SelectorTracking[selector];
  }

  if (!trackDetails) {
    var potentialYaTrackedEl = SearchElementForSelector(element, '[data-ya-track]');

    if (potentialYaTrackedEl) {
      srcEl = potentialYaTrackedEl;
      trackDetails = potentialYaTrackedEl.dataset ? potentialYaTrackedEl.dataset.yaTrack : potentialYaTrackedEl.getAttribute('data-ya-track');
    }
  }

  var preventDefaultEvent = SearchElementForSelector(element, '[data-ya-prevent-default]');

  if (!preventDefaultEvent && !trackDetails) {
    var anchor = SearchElementForSelector(element, 'a');

    if (anchor) {
      srcEl = anchor;
      var anchorQuery = CheckAnchorQueries(anchor);
      if (anchorQuery) trackDetails = anchorQuery;

      if (!anchorQuery && !trackDetails) {
        type = 'link';
      }
    }
  }

  if (!preventDefaultEvent && !trackDetails && !type) {
    var button = SearchElementForSelector(element, 'button');

    if (button) {
      srcEl = button;
      type = 'button';
    }
  }

  if (!preventDefaultEvent && !trackDetails && !type) {
    var input = SearchElementForSelector(element, 'input');

    if (input && input.type != 'hidden') {
      srcEl = input;
      type = 'input';
    }
  }

  var dataYaTrack = type || trackDetails;

  if (!dataYaTrack) {
    if (!_Debug_js__WEBPACK_IMPORTED_MODULE_1__.Debug.isEnabled()) return;
    console.warn('No ya-track attribute found for', element);
    return;
  }

  var scopeAncestors = [];

  while (element && element.tagName) {
    if (element.matches('[data-ya-scope]')) {
      scopeAncestors.push(element);
    }

    element = element.parentNode;
  }

  var tags = [srcEl].concat(scopeAncestors);

  var _iterator = _createForOfIteratorHelper(tags.entries()),
      _step;

  try {
    for (_iterator.s(); !(_step = _iterator.n()).done;) {
      var _step$value = (0,_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__.default)(_step.value, 2),
          hierarchyIdx = _step$value[0],
          hierarchyElement = _step$value[1];

      var tagVal = hierarchyIdx == 0 ? dataYaTrack : hierarchyElement.dataset ? hierarchyElement.dataset.yaScope : hierarchyElement.getAttribute('data-ya-scope');

      if (tagVal.indexOf('#') > -1) {
        var attributeName = hierarchyIdx == 0 ? 'data-ya-track' : 'data-ya-scope';
        var ancestor = hierarchyIdx + 1 < tags.length ? tags[hierarchyIdx + 1] : document;
        var siblings = Array.from(ancestor.querySelectorAll("[".concat(attributeName, "='").concat(tagVal, "']")));

        var _iterator2 = _createForOfIteratorHelper(siblings.entries()),
            _step2;

        try {
          for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
            var _step2$value = (0,_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__.default)(_step2.value, 2),
                siblingIdx = _step2$value[0],
                sibling = _step2$value[1];

            if (hierarchyElement == sibling) {
              tagVal = tagVal.replace('#', siblingIdx + 1);
              break;
            }
          }
        } catch (err) {
          _iterator2.e(err);
        } finally {
          _iterator2.f();
        }
      }

      tags[hierarchyIdx] = tagVal;
    }
  } catch (err) {
    _iterator.e(err);
  } finally {
    _iterator.f();
  }

  return tags.reverse().join('_');
}

;

function CalcEventNameMap(yaInstance) {
  var map = new Map();
  var allLinks = Array.from(document.links);
  var allOtherTracked = Array.from(document.querySelectorAll('button, input, select, textarea'));

  var _iterator3 = _createForOfIteratorHelper(allLinks.concat(allOtherTracked)),
      _step3;

  try {
    for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
      var el = _step3.value;
      if (el.tagName.toLowerCase() == 'input' && el.type == 'hidden') continue;
      var name = yaInstance.CalcEventNameForElement(el);
      if (!name) continue;

      if (!map.has(name)) {
        var container = [];
        map.set(name, container);
      }

      var elements = map.get(name);
      elements.push(el);
      map.set(name, elements);
    }
  } catch (err) {
    _iterator3.e(err);
  } finally {
    _iterator3.f();
  }

  return map;
}

function PrintEvent(eventName) {
  if (!_Debug_js__WEBPACK_IMPORTED_MODULE_1__.Debug.isEnabled()) return;
  console.log("%c[YextAnalytics]%c- Fired event: ".concat(eventName), 'background: white; color: blue;', '');
}



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
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
/*!**************************!*\
  !*** ./src/analytics.js ***!
  \**************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _analytics_Analytics_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./analytics/Analytics.js */ "./src/analytics/Analytics.js");

new _analytics_Analytics_js__WEBPACK_IMPORTED_MODULE_0__.Analytics();
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9zaXRlcy1sb2NhdGlvbnMtc3RhcnRlci8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9hcnJheUxpa2VUb0FycmF5LmpzIiwid2VicGFjazovL3NpdGVzLWxvY2F0aW9ucy1zdGFydGVyLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL2FycmF5V2l0aEhvbGVzLmpzIiwid2VicGFjazovL3NpdGVzLWxvY2F0aW9ucy1zdGFydGVyLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL2FycmF5V2l0aG91dEhvbGVzLmpzIiwid2VicGFjazovL3NpdGVzLWxvY2F0aW9ucy1zdGFydGVyLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL2FzeW5jVG9HZW5lcmF0b3IuanMiLCJ3ZWJwYWNrOi8vc2l0ZXMtbG9jYXRpb25zLXN0YXJ0ZXIvLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vY2xhc3NDYWxsQ2hlY2suanMiLCJ3ZWJwYWNrOi8vc2l0ZXMtbG9jYXRpb25zLXN0YXJ0ZXIvLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vY3JlYXRlQ2xhc3MuanMiLCJ3ZWJwYWNrOi8vc2l0ZXMtbG9jYXRpb25zLXN0YXJ0ZXIvLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vZGVmaW5lUHJvcGVydHkuanMiLCJ3ZWJwYWNrOi8vc2l0ZXMtbG9jYXRpb25zLXN0YXJ0ZXIvLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vaXRlcmFibGVUb0FycmF5LmpzIiwid2VicGFjazovL3NpdGVzLWxvY2F0aW9ucy1zdGFydGVyLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL2l0ZXJhYmxlVG9BcnJheUxpbWl0LmpzIiwid2VicGFjazovL3NpdGVzLWxvY2F0aW9ucy1zdGFydGVyLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL25vbkl0ZXJhYmxlUmVzdC5qcyIsIndlYnBhY2s6Ly9zaXRlcy1sb2NhdGlvbnMtc3RhcnRlci8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9ub25JdGVyYWJsZVNwcmVhZC5qcyIsIndlYnBhY2s6Ly9zaXRlcy1sb2NhdGlvbnMtc3RhcnRlci8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9zbGljZWRUb0FycmF5LmpzIiwid2VicGFjazovL3NpdGVzLWxvY2F0aW9ucy1zdGFydGVyLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL3RvQ29uc3VtYWJsZUFycmF5LmpzIiwid2VicGFjazovL3NpdGVzLWxvY2F0aW9ucy1zdGFydGVyLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL3Vuc3VwcG9ydGVkSXRlcmFibGVUb0FycmF5LmpzIiwid2VicGFjazovL3NpdGVzLWxvY2F0aW9ucy1zdGFydGVyLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvcmVnZW5lcmF0b3JSdW50aW1lLmpzIiwid2VicGFjazovL3NpdGVzLWxvY2F0aW9ucy1zdGFydGVyLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvdHlwZW9mLmpzIiwid2VicGFjazovL3NpdGVzLWxvY2F0aW9ucy1zdGFydGVyLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL3JlZ2VuZXJhdG9yL2luZGV4LmpzIiwid2VicGFjazovL3NpdGVzLWxvY2F0aW9ucy1zdGFydGVyLy4vc3JjL2FuYWx5dGljcy9BbmFseXRpY3MuanMiLCJ3ZWJwYWNrOi8vc2l0ZXMtbG9jYXRpb25zLXN0YXJ0ZXIvLi9zcmMvYW5hbHl0aWNzL0RlYnVnLmpzIiwid2VicGFjazovL3NpdGVzLWxvY2F0aW9ucy1zdGFydGVyLy4vc3JjL2FuYWx5dGljcy9EZWxheU5hdmlnYXRpb24uanMiLCJ3ZWJwYWNrOi8vc2l0ZXMtbG9jYXRpb25zLXN0YXJ0ZXIvLi9zcmMvYW5hbHl0aWNzL0hlbHBlcnMuanMiLCJ3ZWJwYWNrOi8vc2l0ZXMtbG9jYXRpb25zLXN0YXJ0ZXIvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vc2l0ZXMtbG9jYXRpb25zLXN0YXJ0ZXIvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vc2l0ZXMtbG9jYXRpb25zLXN0YXJ0ZXIvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3NpdGVzLWxvY2F0aW9ucy1zdGFydGVyL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vc2l0ZXMtbG9jYXRpb25zLXN0YXJ0ZXIvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9zaXRlcy1sb2NhdGlvbnMtc3RhcnRlci8uL3NyYy9hbmFseXRpY3MuanMiXSwibmFtZXMiOlsiX2FycmF5TGlrZVRvQXJyYXkiLCJhcnIiLCJsZW4iLCJsZW5ndGgiLCJpIiwiYXJyMiIsIkFycmF5IiwiX2FycmF5V2l0aEhvbGVzIiwiaXNBcnJheSIsIl9hcnJheVdpdGhvdXRIb2xlcyIsImFycmF5TGlrZVRvQXJyYXkiLCJhc3luY0dlbmVyYXRvclN0ZXAiLCJnZW4iLCJyZXNvbHZlIiwicmVqZWN0IiwiX25leHQiLCJfdGhyb3ciLCJrZXkiLCJhcmciLCJpbmZvIiwidmFsdWUiLCJlcnJvciIsImRvbmUiLCJQcm9taXNlIiwidGhlbiIsIl9hc3luY1RvR2VuZXJhdG9yIiwiZm4iLCJzZWxmIiwiYXJncyIsImFyZ3VtZW50cyIsImFwcGx5IiwiZXJyIiwidW5kZWZpbmVkIiwiX2NsYXNzQ2FsbENoZWNrIiwiaW5zdGFuY2UiLCJDb25zdHJ1Y3RvciIsIlR5cGVFcnJvciIsIl9kZWZpbmVQcm9wZXJ0aWVzIiwidGFyZ2V0IiwicHJvcHMiLCJkZXNjcmlwdG9yIiwiZW51bWVyYWJsZSIsImNvbmZpZ3VyYWJsZSIsIndyaXRhYmxlIiwiT2JqZWN0IiwiZGVmaW5lUHJvcGVydHkiLCJfY3JlYXRlQ2xhc3MiLCJwcm90b1Byb3BzIiwic3RhdGljUHJvcHMiLCJwcm90b3R5cGUiLCJfZGVmaW5lUHJvcGVydHkiLCJvYmoiLCJfaXRlcmFibGVUb0FycmF5IiwiaXRlciIsIlN5bWJvbCIsIml0ZXJhdG9yIiwiZnJvbSIsIl9pdGVyYWJsZVRvQXJyYXlMaW1pdCIsIl9pIiwiX2FyciIsIl9uIiwiX2QiLCJfcyIsIl9lIiwiY2FsbCIsIm5leHQiLCJwdXNoIiwiX25vbkl0ZXJhYmxlUmVzdCIsIl9ub25JdGVyYWJsZVNwcmVhZCIsIl9zbGljZWRUb0FycmF5IiwiYXJyYXlXaXRoSG9sZXMiLCJpdGVyYWJsZVRvQXJyYXlMaW1pdCIsInVuc3VwcG9ydGVkSXRlcmFibGVUb0FycmF5Iiwibm9uSXRlcmFibGVSZXN0IiwiX3RvQ29uc3VtYWJsZUFycmF5IiwiYXJyYXlXaXRob3V0SG9sZXMiLCJpdGVyYWJsZVRvQXJyYXkiLCJub25JdGVyYWJsZVNwcmVhZCIsIl91bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheSIsIm8iLCJtaW5MZW4iLCJuIiwidG9TdHJpbmciLCJzbGljZSIsImNvbnN0cnVjdG9yIiwibmFtZSIsInRlc3QiLCJfdHlwZW9mIiwicmVxdWlyZSIsIl9yZWdlbmVyYXRvclJ1bnRpbWUiLCJtb2R1bGUiLCJleHBvcnRzIiwiT3AiLCJoYXNPd24iLCJoYXNPd25Qcm9wZXJ0eSIsIiRTeW1ib2wiLCJpdGVyYXRvclN5bWJvbCIsImFzeW5jSXRlcmF0b3JTeW1ib2wiLCJhc3luY0l0ZXJhdG9yIiwidG9TdHJpbmdUYWdTeW1ib2wiLCJ0b1N0cmluZ1RhZyIsImRlZmluZSIsIndyYXAiLCJpbm5lckZuIiwib3V0ZXJGbiIsInRyeUxvY3NMaXN0IiwicHJvdG9HZW5lcmF0b3IiLCJHZW5lcmF0b3IiLCJnZW5lcmF0b3IiLCJjcmVhdGUiLCJjb250ZXh0IiwiQ29udGV4dCIsIl9pbnZva2UiLCJzdGF0ZSIsIm1ldGhvZCIsIkVycm9yIiwiZG9uZVJlc3VsdCIsImRlbGVnYXRlIiwiZGVsZWdhdGVSZXN1bHQiLCJtYXliZUludm9rZURlbGVnYXRlIiwiQ29udGludWVTZW50aW5lbCIsInNlbnQiLCJfc2VudCIsImRpc3BhdGNoRXhjZXB0aW9uIiwiYWJydXB0IiwicmVjb3JkIiwidHJ5Q2F0Y2giLCJ0eXBlIiwiR2VuZXJhdG9yRnVuY3Rpb24iLCJHZW5lcmF0b3JGdW5jdGlvblByb3RvdHlwZSIsIkl0ZXJhdG9yUHJvdG90eXBlIiwiZ2V0UHJvdG8iLCJnZXRQcm90b3R5cGVPZiIsIk5hdGl2ZUl0ZXJhdG9yUHJvdG90eXBlIiwidmFsdWVzIiwiR3AiLCJkZWZpbmVJdGVyYXRvck1ldGhvZHMiLCJmb3JFYWNoIiwiQXN5bmNJdGVyYXRvciIsIlByb21pc2VJbXBsIiwiaW52b2tlIiwicmVzdWx0IiwiX19hd2FpdCIsInVud3JhcHBlZCIsInByZXZpb3VzUHJvbWlzZSIsImNhbGxJbnZva2VXaXRoTWV0aG9kQW5kQXJnIiwicmVzdWx0TmFtZSIsIm5leHRMb2MiLCJwdXNoVHJ5RW50cnkiLCJsb2NzIiwiZW50cnkiLCJ0cnlMb2MiLCJjYXRjaExvYyIsImZpbmFsbHlMb2MiLCJhZnRlckxvYyIsInRyeUVudHJpZXMiLCJyZXNldFRyeUVudHJ5IiwiY29tcGxldGlvbiIsInJlc2V0IiwiaXRlcmFibGUiLCJpdGVyYXRvck1ldGhvZCIsImlzTmFOIiwiZGlzcGxheU5hbWUiLCJpc0dlbmVyYXRvckZ1bmN0aW9uIiwiZ2VuRnVuIiwiY3RvciIsIm1hcmsiLCJzZXRQcm90b3R5cGVPZiIsIl9fcHJvdG9fXyIsImF3cmFwIiwiYXN5bmMiLCJrZXlzIiwib2JqZWN0IiwicmV2ZXJzZSIsInBvcCIsInNraXBUZW1wUmVzZXQiLCJwcmV2IiwiY2hhckF0Iiwic3RvcCIsInJvb3RSZWNvcmQiLCJydmFsIiwiZXhjZXB0aW9uIiwiaGFuZGxlIiwibG9jIiwiY2F1Z2h0IiwiaGFzQ2F0Y2giLCJoYXNGaW5hbGx5IiwiZmluYWxseUVudHJ5IiwiY29tcGxldGUiLCJmaW5pc2giLCJfY2F0Y2giLCJ0aHJvd24iLCJkZWxlZ2F0ZVlpZWxkIiwicnVudGltZSIsInJlZ2VuZXJhdG9yUnVudGltZSIsImFjY2lkZW50YWxTdHJpY3RNb2RlIiwiZ2xvYmFsVGhpcyIsIkZ1bmN0aW9uIiwiY29udmVyc2lvbkRvbWFpbiIsImV2ZW50RG9tYWluIiwiY29udmVyc2lvbkVuZHBvaW50IiwibGlzdGluZ3NFbmRwb2ludCIsImV2ZW50RW5kcG9pbnQiLCJBbmFseXRpY3MiLCJ3aW4iLCJ3aW5kb3ciLCJldmVudE5hbWVDYWxjdWxhdG9yIiwiQ2FsY0V2ZW50TmFtZUZvckVsZW1lbnQiLCJhbmFseXRpY3NRTmFtZSIsIllleHRBbmFseXRpY3NPYmplY3QiLCJfZXZlbnROYW1lQ2FsY3VsYXRvciIsImRvbSIsImRvY3VtZW50Iiwic2V0IiwicGFnZXVybCIsImxvY2F0aW9uIiwicGF0aG5hbWUiLCJwYWdlc1JlZmVycmVyIiwicmVmZXJyZXIiLCJyZWdpc3RlcmVkTGlzdGVuZXJzIiwiU3RhbmRhcmRFdmVudHMiLCJXZWJzaXRlQ2xpY2siLCJEcml2aW5nRGlyZWN0aW9ucyIsIk1vYmlsZUNhbGwiLCJDVEFDbGljayIsImRlbGF5TmF2aWdhdGlvbiIsImNvbnZlcnNpb25UcmFja2luZ0VuYWJsZWQiLCJDT05TVEFOVFMiLCJDT09LSUVfUEFSQU0iLCJDT09LSUVfUkVNT1ZBTF9WQUxVRSIsImxpc3RpbmdzQ2xpY2tGaXJlZCIsInF1ZXJ5UGFyYW1zIiwiX2dldFF1ZXJ5UGFyYW1zIiwieV9zb3VyY2UiLCJxdWVyeVN0cmluZyIsIl9idWlsZFF1ZXJ5U3RyaW5nIiwiaGlzdG9yeSIsInJlcGxhY2VTdGF0ZSIsInRpdGxlIiwib25SZWFkeSIsInJlZ2lzdGVyT2JzZXJ2ZXIiLCJjcSIsInEiLCJjb21tYW5kQXJncyIsInNoaWZ0IiwicHJvY2Vzc0NvbW1hbmQiLCJjYWxjdWxhdG9yIiwic2l0ZURhdGEiLCJzaXRlSWQiLCJidXNpbmVzc2lkcyIsImJ1c0lkIiwic2l0ZSIsInN0YWdpbmciLCJpc1N0YWdpbmciLCJkYXRhIiwiYXNzaWduIiwiYm9vbCIsImRvTm90VHJhY2tFbmFibGVkIiwiX2ZpcmVMaXN0aW5nc1RhZ0lmU2hvdWxkIiwic2VuZCIsImV2ZW50VHlwZSIsIm9wdHMiLCJyZWdpc3Rlck9ic2VydmVyRm9yU2VsZWN0b3IiLCJzZWxlY3RvciIsImV2ZW50TmFtZSIsImNiIiwiTWF0aCIsImZsb29yIiwicmFuZG9tIiwiRGF0ZSIsImdldFRpbWUiLCJjb29raWVWYWx1ZSIsImNoZWNrRG9tYWluIiwiZG9tYWluIiwiY2FuU2V0Q29va2llV2l0aERvbWFpbl8iLCJyZW1vdmVkVmFsdWUiLCJyZW1vdmVDb29raWVCeURvbWFpbl8iLCJzZXRDb29raWVfIiwiZm9yRWFjaERvbWFpbkluY3JlYXNpbmdTcGVjaWZpY2l0eV8iLCJjb29raWVEb21haW4iLCJjb29raWVTdHJpbmciLCJmb3JtYXRDb29raWVfIiwiY29va2llIiwiY29va2llTmFtZSIsInBhdGgiLCJub3ciLCJzZXRUaW1lIiwidG9VVENTdHJpbmciLCJwcm90b2NvbCIsImxvc3RDb29raWUiLCJleGlzdGluZ0Nvb2tpZXMiLCJhbGxDb29raWVzXyIsIm5ld0Nvb2tpZXMiLCJjbGVhckNvb2tpZV8iLCJjb29raWVQYXRoIiwiZXBvY2giLCJwcmV2UmVtYWluaW5nQ29va2llcyIsInBlcnNpc3RlbnRDb29raWVzXyIsInJlbWFpbmluZ0Nvb2tpZXMiLCJsaXN0RGlmZmVyZW5jZV8iLCJzdXBlcmxpc3QiLCJzdWJsaXN0Iiwic3VwZXJsaXN0Q29weSIsImluZGV4IiwiaW5kZXhPZiIsInNwbGljZSIsImZpbHRlciIsInZhbCIsImZvckVhY2hDb29raWVOYW1lVmFsdWVfIiwibmFtZVZhbHVlRnVuYyIsInNwbGl0Iiwia2V5VmFsdWUiLCJ0cmltIiwiZnVuYyIsImV4aXRlZExvb3AiLCJkb21haW5QYXJ0cyIsImhvc3RuYW1lIiwiY3VyckRvbWFpbiIsInJvb3REb21haW5SZWFjaGVkIiwidG90YWxDb29raWVzIiwibnVtQ29va2llc0VuY291bnRlcmVkIiwiZmV0Y2hDb29raWVfIiwiZ2VuZXJhdGVSYW5kb21Db29raWVfIiwic2V0Q29va2llQW5kUmVtb3ZlT2xkQ29va2llc18iLCJocmVmIiwidXJsIiwiX2dldFRyYWNrZXJVcmwiLCJmaXJlIiwiZW50cmllcyIsIm1hcCIsImVuY29kZVVSSUNvbXBvbmVudCIsImpvaW4iLCJlbmRwb2ludCIsInNlYXJjaCIsInN1YnN0cmluZyIsInBhcmFtIiwicmVkdWNlIiwicGFyYW1zIiwiZGVjb2RlZFZhbCIsImRlY29kZVVSSUNvbXBvbmVudCIsInRhc2siLCJpbnZva2VkIiwicGl4ZWxVUkwiLCJTZWxlY3RvclRyYWNraW5nIiwiYm9keSIsImFkZEV2ZW50TGlzdGVuZXIiLCJoYW5kbGVFdmVudCIsImJpbmQiLCJjb21tYW5kIiwib3B0aW9uYWxEYXRhIiwiY29tYmluZWREYXRhIiwicHJvZHVjdCIsInYiLCJzZWVkIiwiUHJpbnRFdmVudCIsImFuYWx5dGljc0RvbWFpbiIsImVsIiwiY3VycmVudCIsInBhcmVudE5vZGUiLCJkYXRhc2V0IiwieWFDaWQiLCJjaWQiLCJwaXhlbCIsImxvYWRlZCIsImV2ZW50IiwicHgiLCJjcmVhdGVFbGVtZW50Iiwic3JjIiwic3R5bGUiLCJ3aWR0aCIsImhlaWdodCIsInBvc2l0aW9uIiwiYWx0Iiwib25jZUNCIiwib25jZSIsIm9ubG9hZCIsIm9uZXJyb3IiLCJzZXRUaW1lb3V0IiwiYXBwZW5kQ2hpbGQiLCJOYXZpZ2F0ZUFmdGVyQWN0aW9uSWZOZWVkZWQiLCJnZXRDb252ZXJzaW9uUGFyYW1zIiwiY29udmVyc2lvblVSTCIsIlNlYXJjaEVsZW1lbnRGb3JTZWxlY3RvciIsImZpcmVXaXRoRXZlbnQiLCJoYW5kbGVDb252ZXJzaW9uIiwiZG9Ob3RUcmFjayIsIm5hdmlnYXRvciIsIm1zRG9Ob3RUcmFjayIsIkRlYnVnIiwiVVJMIiwic2VhcmNoUGFyYW1zIiwiZ2V0IiwiZG9jdW1lbnRFbGVtZW50IiwiY2xhc3NMaXN0IiwiYWRkIiwicmVtb3ZlIiwiZW5hYmxlZCIsImhhc1F1ZXJ5UGFyYW0iLCJlbmFibGUiLCJEZWxheU5hdmlnYXRpb24iLCJhY3Rpb24iLCJzcmNFbGVtZW50IiwidGFnTmFtZSIsInRvTG93ZXJDYXNlIiwid2lsbEZpcmUiLCJyaWdodENsaWNrIiwid2hpY2giLCJ5YU5vV2FpdCIsImRlZmF1bHRQcmV2ZW50ZWQiLCJsaW5rIiwiaG9zdCIsIm1hdGNoIiwiY3RybEtleSIsInNoaWZ0S2V5IiwibWV0YUtleSIsImhicnVuIiwiaGl0QmFjayIsInByZXZlbnREZWZhdWx0IiwicmV0dXJuVmFsdWUiLCJHZXRQYXJhbXMiLCJxdWVyaWVzIiwicGFydHMiLCJwYWlyIiwiQ2hlY2tBbmNob3JRdWVyaWVzIiwiYW5jaG9yIiwiZU5hbWUiLCJzIiwibWF0Y2hlcyIsImVsZW1lbnQiLCJ0cmFja0RldGFpbHMiLCJzcmNFbCIsInBvdGVudGlhbFlhVHJhY2tlZEVsIiwieWFUcmFjayIsImdldEF0dHJpYnV0ZSIsInByZXZlbnREZWZhdWx0RXZlbnQiLCJhbmNob3JRdWVyeSIsImJ1dHRvbiIsImlucHV0IiwiZGF0YVlhVHJhY2siLCJjb25zb2xlIiwid2FybiIsInNjb3BlQW5jZXN0b3JzIiwidGFncyIsImNvbmNhdCIsImhpZXJhcmNoeUlkeCIsImhpZXJhcmNoeUVsZW1lbnQiLCJ0YWdWYWwiLCJ5YVNjb3BlIiwiYXR0cmlidXRlTmFtZSIsImFuY2VzdG9yIiwic2libGluZ3MiLCJxdWVyeVNlbGVjdG9yQWxsIiwic2libGluZ0lkeCIsInNpYmxpbmciLCJyZXBsYWNlIiwiQ2FsY0V2ZW50TmFtZU1hcCIsInlhSW5zdGFuY2UiLCJNYXAiLCJhbGxMaW5rcyIsImxpbmtzIiwiYWxsT3RoZXJUcmFja2VkIiwiaGFz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QUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsZ0NBQWdDLFlBQVk7V0FDNUM7V0FDQSxFOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0Esd0NBQXdDLHlDQUF5QztXQUNqRjtXQUNBO1dBQ0EsRTs7Ozs7V0NQQSx3Rjs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSxzREFBc0Qsa0JBQWtCO1dBQ3hFO1dBQ0EsK0NBQStDLGNBQWM7V0FDN0QsRTs7Ozs7Ozs7Ozs7OztBQ05BO0FBRUEsSUFBSTdELDhEQUFKLEciLCJmaWxlIjoiYW5hbHl0aWNzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gX2FycmF5TGlrZVRvQXJyYXkoYXJyLCBsZW4pIHtcbiAgaWYgKGxlbiA9PSBudWxsIHx8IGxlbiA+IGFyci5sZW5ndGgpIGxlbiA9IGFyci5sZW5ndGg7XG5cbiAgZm9yICh2YXIgaSA9IDAsIGFycjIgPSBuZXcgQXJyYXkobGVuKTsgaSA8IGxlbjsgaSsrKSB7XG4gICAgYXJyMltpXSA9IGFycltpXTtcbiAgfVxuXG4gIHJldHVybiBhcnIyO1xufSIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIF9hcnJheVdpdGhIb2xlcyhhcnIpIHtcbiAgaWYgKEFycmF5LmlzQXJyYXkoYXJyKSkgcmV0dXJuIGFycjtcbn0iLCJpbXBvcnQgYXJyYXlMaWtlVG9BcnJheSBmcm9tIFwiLi9hcnJheUxpa2VUb0FycmF5LmpzXCI7XG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBfYXJyYXlXaXRob3V0SG9sZXMoYXJyKSB7XG4gIGlmIChBcnJheS5pc0FycmF5KGFycikpIHJldHVybiBhcnJheUxpa2VUb0FycmF5KGFycik7XG59IiwiZnVuY3Rpb24gYXN5bmNHZW5lcmF0b3JTdGVwKGdlbiwgcmVzb2x2ZSwgcmVqZWN0LCBfbmV4dCwgX3Rocm93LCBrZXksIGFyZykge1xuICB0cnkge1xuICAgIHZhciBpbmZvID0gZ2VuW2tleV0oYXJnKTtcbiAgICB2YXIgdmFsdWUgPSBpbmZvLnZhbHVlO1xuICB9IGNhdGNoIChlcnJvcikge1xuICAgIHJlamVjdChlcnJvcik7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgaWYgKGluZm8uZG9uZSkge1xuICAgIHJlc29sdmUodmFsdWUpO1xuICB9IGVsc2Uge1xuICAgIFByb21pc2UucmVzb2x2ZSh2YWx1ZSkudGhlbihfbmV4dCwgX3Rocm93KTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBfYXN5bmNUb0dlbmVyYXRvcihmbikge1xuICByZXR1cm4gZnVuY3Rpb24gKCkge1xuICAgIHZhciBzZWxmID0gdGhpcyxcbiAgICAgICAgYXJncyA9IGFyZ3VtZW50cztcbiAgICByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgdmFyIGdlbiA9IGZuLmFwcGx5KHNlbGYsIGFyZ3MpO1xuXG4gICAgICBmdW5jdGlvbiBfbmV4dCh2YWx1ZSkge1xuICAgICAgICBhc3luY0dlbmVyYXRvclN0ZXAoZ2VuLCByZXNvbHZlLCByZWplY3QsIF9uZXh0LCBfdGhyb3csIFwibmV4dFwiLCB2YWx1ZSk7XG4gICAgICB9XG5cbiAgICAgIGZ1bmN0aW9uIF90aHJvdyhlcnIpIHtcbiAgICAgICAgYXN5bmNHZW5lcmF0b3JTdGVwKGdlbiwgcmVzb2x2ZSwgcmVqZWN0LCBfbmV4dCwgX3Rocm93LCBcInRocm93XCIsIGVycik7XG4gICAgICB9XG5cbiAgICAgIF9uZXh0KHVuZGVmaW5lZCk7XG4gICAgfSk7XG4gIH07XG59IiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gX2NsYXNzQ2FsbENoZWNrKGluc3RhbmNlLCBDb25zdHJ1Y3Rvcikge1xuICBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkge1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIik7XG4gIH1cbn0iLCJmdW5jdGlvbiBfZGVmaW5lUHJvcGVydGllcyh0YXJnZXQsIHByb3BzKSB7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgcHJvcHMubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgZGVzY3JpcHRvciA9IHByb3BzW2ldO1xuICAgIGRlc2NyaXB0b3IuZW51bWVyYWJsZSA9IGRlc2NyaXB0b3IuZW51bWVyYWJsZSB8fCBmYWxzZTtcbiAgICBkZXNjcmlwdG9yLmNvbmZpZ3VyYWJsZSA9IHRydWU7XG4gICAgaWYgKFwidmFsdWVcIiBpbiBkZXNjcmlwdG9yKSBkZXNjcmlwdG9yLndyaXRhYmxlID0gdHJ1ZTtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBkZXNjcmlwdG9yLmtleSwgZGVzY3JpcHRvcik7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gX2NyZWF0ZUNsYXNzKENvbnN0cnVjdG9yLCBwcm90b1Byb3BzLCBzdGF0aWNQcm9wcykge1xuICBpZiAocHJvdG9Qcm9wcykgX2RlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IucHJvdG90eXBlLCBwcm90b1Byb3BzKTtcbiAgaWYgKHN0YXRpY1Byb3BzKSBfZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvciwgc3RhdGljUHJvcHMpO1xuICBPYmplY3QuZGVmaW5lUHJvcGVydHkoQ29uc3RydWN0b3IsIFwicHJvdG90eXBlXCIsIHtcbiAgICB3cml0YWJsZTogZmFsc2VcbiAgfSk7XG4gIHJldHVybiBDb25zdHJ1Y3Rvcjtcbn0iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBfZGVmaW5lUHJvcGVydHkob2JqLCBrZXksIHZhbHVlKSB7XG4gIGlmIChrZXkgaW4gb2JqKSB7XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KG9iaiwga2V5LCB7XG4gICAgICB2YWx1ZTogdmFsdWUsXG4gICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgICAgY29uZmlndXJhYmxlOiB0cnVlLFxuICAgICAgd3JpdGFibGU6IHRydWVcbiAgICB9KTtcbiAgfSBlbHNlIHtcbiAgICBvYmpba2V5XSA9IHZhbHVlO1xuICB9XG5cbiAgcmV0dXJuIG9iajtcbn0iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBfaXRlcmFibGVUb0FycmF5KGl0ZXIpIHtcbiAgaWYgKHR5cGVvZiBTeW1ib2wgIT09IFwidW5kZWZpbmVkXCIgJiYgaXRlcltTeW1ib2wuaXRlcmF0b3JdICE9IG51bGwgfHwgaXRlcltcIkBAaXRlcmF0b3JcIl0gIT0gbnVsbCkgcmV0dXJuIEFycmF5LmZyb20oaXRlcik7XG59IiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gX2l0ZXJhYmxlVG9BcnJheUxpbWl0KGFyciwgaSkge1xuICB2YXIgX2kgPSBhcnIgPT0gbnVsbCA/IG51bGwgOiB0eXBlb2YgU3ltYm9sICE9PSBcInVuZGVmaW5lZFwiICYmIGFycltTeW1ib2wuaXRlcmF0b3JdIHx8IGFycltcIkBAaXRlcmF0b3JcIl07XG5cbiAgaWYgKF9pID09IG51bGwpIHJldHVybjtcbiAgdmFyIF9hcnIgPSBbXTtcbiAgdmFyIF9uID0gdHJ1ZTtcbiAgdmFyIF9kID0gZmFsc2U7XG5cbiAgdmFyIF9zLCBfZTtcblxuICB0cnkge1xuICAgIGZvciAoX2kgPSBfaS5jYWxsKGFycik7ICEoX24gPSAoX3MgPSBfaS5uZXh0KCkpLmRvbmUpOyBfbiA9IHRydWUpIHtcbiAgICAgIF9hcnIucHVzaChfcy52YWx1ZSk7XG5cbiAgICAgIGlmIChpICYmIF9hcnIubGVuZ3RoID09PSBpKSBicmVhaztcbiAgICB9XG4gIH0gY2F0Y2ggKGVycikge1xuICAgIF9kID0gdHJ1ZTtcbiAgICBfZSA9IGVycjtcbiAgfSBmaW5hbGx5IHtcbiAgICB0cnkge1xuICAgICAgaWYgKCFfbiAmJiBfaVtcInJldHVyblwiXSAhPSBudWxsKSBfaVtcInJldHVyblwiXSgpO1xuICAgIH0gZmluYWxseSB7XG4gICAgICBpZiAoX2QpIHRocm93IF9lO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBfYXJyO1xufSIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIF9ub25JdGVyYWJsZVJlc3QoKSB7XG4gIHRocm93IG5ldyBUeXBlRXJyb3IoXCJJbnZhbGlkIGF0dGVtcHQgdG8gZGVzdHJ1Y3R1cmUgbm9uLWl0ZXJhYmxlIGluc3RhbmNlLlxcbkluIG9yZGVyIHRvIGJlIGl0ZXJhYmxlLCBub24tYXJyYXkgb2JqZWN0cyBtdXN0IGhhdmUgYSBbU3ltYm9sLml0ZXJhdG9yXSgpIG1ldGhvZC5cIik7XG59IiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gX25vbkl0ZXJhYmxlU3ByZWFkKCkge1xuICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiSW52YWxpZCBhdHRlbXB0IHRvIHNwcmVhZCBub24taXRlcmFibGUgaW5zdGFuY2UuXFxuSW4gb3JkZXIgdG8gYmUgaXRlcmFibGUsIG5vbi1hcnJheSBvYmplY3RzIG11c3QgaGF2ZSBhIFtTeW1ib2wuaXRlcmF0b3JdKCkgbWV0aG9kLlwiKTtcbn0iLCJpbXBvcnQgYXJyYXlXaXRoSG9sZXMgZnJvbSBcIi4vYXJyYXlXaXRoSG9sZXMuanNcIjtcbmltcG9ydCBpdGVyYWJsZVRvQXJyYXlMaW1pdCBmcm9tIFwiLi9pdGVyYWJsZVRvQXJyYXlMaW1pdC5qc1wiO1xuaW1wb3J0IHVuc3VwcG9ydGVkSXRlcmFibGVUb0FycmF5IGZyb20gXCIuL3Vuc3VwcG9ydGVkSXRlcmFibGVUb0FycmF5LmpzXCI7XG5pbXBvcnQgbm9uSXRlcmFibGVSZXN0IGZyb20gXCIuL25vbkl0ZXJhYmxlUmVzdC5qc1wiO1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gX3NsaWNlZFRvQXJyYXkoYXJyLCBpKSB7XG4gIHJldHVybiBhcnJheVdpdGhIb2xlcyhhcnIpIHx8IGl0ZXJhYmxlVG9BcnJheUxpbWl0KGFyciwgaSkgfHwgdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXkoYXJyLCBpKSB8fCBub25JdGVyYWJsZVJlc3QoKTtcbn0iLCJpbXBvcnQgYXJyYXlXaXRob3V0SG9sZXMgZnJvbSBcIi4vYXJyYXlXaXRob3V0SG9sZXMuanNcIjtcbmltcG9ydCBpdGVyYWJsZVRvQXJyYXkgZnJvbSBcIi4vaXRlcmFibGVUb0FycmF5LmpzXCI7XG5pbXBvcnQgdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXkgZnJvbSBcIi4vdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXkuanNcIjtcbmltcG9ydCBub25JdGVyYWJsZVNwcmVhZCBmcm9tIFwiLi9ub25JdGVyYWJsZVNwcmVhZC5qc1wiO1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gX3RvQ29uc3VtYWJsZUFycmF5KGFycikge1xuICByZXR1cm4gYXJyYXlXaXRob3V0SG9sZXMoYXJyKSB8fCBpdGVyYWJsZVRvQXJyYXkoYXJyKSB8fCB1bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheShhcnIpIHx8IG5vbkl0ZXJhYmxlU3ByZWFkKCk7XG59IiwiaW1wb3J0IGFycmF5TGlrZVRvQXJyYXkgZnJvbSBcIi4vYXJyYXlMaWtlVG9BcnJheS5qc1wiO1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gX3Vuc3VwcG9ydGVkSXRlcmFibGVUb0FycmF5KG8sIG1pbkxlbikge1xuICBpZiAoIW8pIHJldHVybjtcbiAgaWYgKHR5cGVvZiBvID09PSBcInN0cmluZ1wiKSByZXR1cm4gYXJyYXlMaWtlVG9BcnJheShvLCBtaW5MZW4pO1xuICB2YXIgbiA9IE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChvKS5zbGljZSg4LCAtMSk7XG4gIGlmIChuID09PSBcIk9iamVjdFwiICYmIG8uY29uc3RydWN0b3IpIG4gPSBvLmNvbnN0cnVjdG9yLm5hbWU7XG4gIGlmIChuID09PSBcIk1hcFwiIHx8IG4gPT09IFwiU2V0XCIpIHJldHVybiBBcnJheS5mcm9tKG8pO1xuICBpZiAobiA9PT0gXCJBcmd1bWVudHNcIiB8fCAvXig/OlVpfEkpbnQoPzo4fDE2fDMyKSg/OkNsYW1wZWQpP0FycmF5JC8udGVzdChuKSkgcmV0dXJuIGFycmF5TGlrZVRvQXJyYXkobywgbWluTGVuKTtcbn0iLCJ2YXIgX3R5cGVvZiA9IHJlcXVpcmUoXCIuL3R5cGVvZi5qc1wiKVtcImRlZmF1bHRcIl07XG5cbmZ1bmN0aW9uIF9yZWdlbmVyYXRvclJ1bnRpbWUoKSB7XG4gIFwidXNlIHN0cmljdFwiO1xuICAvKiEgcmVnZW5lcmF0b3ItcnVudGltZSAtLSBDb3B5cmlnaHQgKGMpIDIwMTQtcHJlc2VudCwgRmFjZWJvb2ssIEluYy4gLS0gbGljZW5zZSAoTUlUKTogaHR0cHM6Ly9naXRodWIuY29tL2ZhY2Vib29rL3JlZ2VuZXJhdG9yL2Jsb2IvbWFpbi9MSUNFTlNFICovXG5cbiAgbW9kdWxlLmV4cG9ydHMgPSBfcmVnZW5lcmF0b3JSdW50aW1lID0gZnVuY3Rpb24gX3JlZ2VuZXJhdG9yUnVudGltZSgpIHtcbiAgICByZXR1cm4gZXhwb3J0cztcbiAgfSwgbW9kdWxlLmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWUsIG1vZHVsZS5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IG1vZHVsZS5leHBvcnRzO1xuICB2YXIgZXhwb3J0cyA9IHt9LFxuICAgICAgT3AgPSBPYmplY3QucHJvdG90eXBlLFxuICAgICAgaGFzT3duID0gT3AuaGFzT3duUHJvcGVydHksXG4gICAgICAkU3ltYm9sID0gXCJmdW5jdGlvblwiID09IHR5cGVvZiBTeW1ib2wgPyBTeW1ib2wgOiB7fSxcbiAgICAgIGl0ZXJhdG9yU3ltYm9sID0gJFN5bWJvbC5pdGVyYXRvciB8fCBcIkBAaXRlcmF0b3JcIixcbiAgICAgIGFzeW5jSXRlcmF0b3JTeW1ib2wgPSAkU3ltYm9sLmFzeW5jSXRlcmF0b3IgfHwgXCJAQGFzeW5jSXRlcmF0b3JcIixcbiAgICAgIHRvU3RyaW5nVGFnU3ltYm9sID0gJFN5bWJvbC50b1N0cmluZ1RhZyB8fCBcIkBAdG9TdHJpbmdUYWdcIjtcblxuICBmdW5jdGlvbiBkZWZpbmUob2JqLCBrZXksIHZhbHVlKSB7XG4gICAgcmV0dXJuIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShvYmosIGtleSwge1xuICAgICAgdmFsdWU6IHZhbHVlLFxuICAgICAgZW51bWVyYWJsZTogITAsXG4gICAgICBjb25maWd1cmFibGU6ICEwLFxuICAgICAgd3JpdGFibGU6ICEwXG4gICAgfSksIG9ialtrZXldO1xuICB9XG5cbiAgdHJ5IHtcbiAgICBkZWZpbmUoe30sIFwiXCIpO1xuICB9IGNhdGNoIChlcnIpIHtcbiAgICBkZWZpbmUgPSBmdW5jdGlvbiBkZWZpbmUob2JqLCBrZXksIHZhbHVlKSB7XG4gICAgICByZXR1cm4gb2JqW2tleV0gPSB2YWx1ZTtcbiAgICB9O1xuICB9XG5cbiAgZnVuY3Rpb24gd3JhcChpbm5lckZuLCBvdXRlckZuLCBzZWxmLCB0cnlMb2NzTGlzdCkge1xuICAgIHZhciBwcm90b0dlbmVyYXRvciA9IG91dGVyRm4gJiYgb3V0ZXJGbi5wcm90b3R5cGUgaW5zdGFuY2VvZiBHZW5lcmF0b3IgPyBvdXRlckZuIDogR2VuZXJhdG9yLFxuICAgICAgICBnZW5lcmF0b3IgPSBPYmplY3QuY3JlYXRlKHByb3RvR2VuZXJhdG9yLnByb3RvdHlwZSksXG4gICAgICAgIGNvbnRleHQgPSBuZXcgQ29udGV4dCh0cnlMb2NzTGlzdCB8fCBbXSk7XG4gICAgcmV0dXJuIGdlbmVyYXRvci5faW52b2tlID0gZnVuY3Rpb24gKGlubmVyRm4sIHNlbGYsIGNvbnRleHQpIHtcbiAgICAgIHZhciBzdGF0ZSA9IFwic3VzcGVuZGVkU3RhcnRcIjtcbiAgICAgIHJldHVybiBmdW5jdGlvbiAobWV0aG9kLCBhcmcpIHtcbiAgICAgICAgaWYgKFwiZXhlY3V0aW5nXCIgPT09IHN0YXRlKSB0aHJvdyBuZXcgRXJyb3IoXCJHZW5lcmF0b3IgaXMgYWxyZWFkeSBydW5uaW5nXCIpO1xuXG4gICAgICAgIGlmIChcImNvbXBsZXRlZFwiID09PSBzdGF0ZSkge1xuICAgICAgICAgIGlmIChcInRocm93XCIgPT09IG1ldGhvZCkgdGhyb3cgYXJnO1xuICAgICAgICAgIHJldHVybiBkb25lUmVzdWx0KCk7XG4gICAgICAgIH1cblxuICAgICAgICBmb3IgKGNvbnRleHQubWV0aG9kID0gbWV0aG9kLCBjb250ZXh0LmFyZyA9IGFyZzs7KSB7XG4gICAgICAgICAgdmFyIGRlbGVnYXRlID0gY29udGV4dC5kZWxlZ2F0ZTtcblxuICAgICAgICAgIGlmIChkZWxlZ2F0ZSkge1xuICAgICAgICAgICAgdmFyIGRlbGVnYXRlUmVzdWx0ID0gbWF5YmVJbnZva2VEZWxlZ2F0ZShkZWxlZ2F0ZSwgY29udGV4dCk7XG5cbiAgICAgICAgICAgIGlmIChkZWxlZ2F0ZVJlc3VsdCkge1xuICAgICAgICAgICAgICBpZiAoZGVsZWdhdGVSZXN1bHQgPT09IENvbnRpbnVlU2VudGluZWwpIGNvbnRpbnVlO1xuICAgICAgICAgICAgICByZXR1cm4gZGVsZWdhdGVSZXN1bHQ7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgaWYgKFwibmV4dFwiID09PSBjb250ZXh0Lm1ldGhvZCkgY29udGV4dC5zZW50ID0gY29udGV4dC5fc2VudCA9IGNvbnRleHQuYXJnO2Vsc2UgaWYgKFwidGhyb3dcIiA9PT0gY29udGV4dC5tZXRob2QpIHtcbiAgICAgICAgICAgIGlmIChcInN1c3BlbmRlZFN0YXJ0XCIgPT09IHN0YXRlKSB0aHJvdyBzdGF0ZSA9IFwiY29tcGxldGVkXCIsIGNvbnRleHQuYXJnO1xuICAgICAgICAgICAgY29udGV4dC5kaXNwYXRjaEV4Y2VwdGlvbihjb250ZXh0LmFyZyk7XG4gICAgICAgICAgfSBlbHNlIFwicmV0dXJuXCIgPT09IGNvbnRleHQubWV0aG9kICYmIGNvbnRleHQuYWJydXB0KFwicmV0dXJuXCIsIGNvbnRleHQuYXJnKTtcbiAgICAgICAgICBzdGF0ZSA9IFwiZXhlY3V0aW5nXCI7XG4gICAgICAgICAgdmFyIHJlY29yZCA9IHRyeUNhdGNoKGlubmVyRm4sIHNlbGYsIGNvbnRleHQpO1xuXG4gICAgICAgICAgaWYgKFwibm9ybWFsXCIgPT09IHJlY29yZC50eXBlKSB7XG4gICAgICAgICAgICBpZiAoc3RhdGUgPSBjb250ZXh0LmRvbmUgPyBcImNvbXBsZXRlZFwiIDogXCJzdXNwZW5kZWRZaWVsZFwiLCByZWNvcmQuYXJnID09PSBDb250aW51ZVNlbnRpbmVsKSBjb250aW51ZTtcbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgIHZhbHVlOiByZWNvcmQuYXJnLFxuICAgICAgICAgICAgICBkb25lOiBjb250ZXh0LmRvbmVcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgXCJ0aHJvd1wiID09PSByZWNvcmQudHlwZSAmJiAoc3RhdGUgPSBcImNvbXBsZXRlZFwiLCBjb250ZXh0Lm1ldGhvZCA9IFwidGhyb3dcIiwgY29udGV4dC5hcmcgPSByZWNvcmQuYXJnKTtcbiAgICAgICAgfVxuICAgICAgfTtcbiAgICB9KGlubmVyRm4sIHNlbGYsIGNvbnRleHQpLCBnZW5lcmF0b3I7XG4gIH1cblxuICBmdW5jdGlvbiB0cnlDYXRjaChmbiwgb2JqLCBhcmcpIHtcbiAgICB0cnkge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgdHlwZTogXCJub3JtYWxcIixcbiAgICAgICAgYXJnOiBmbi5jYWxsKG9iaiwgYXJnKVxuICAgICAgfTtcbiAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIHR5cGU6IFwidGhyb3dcIixcbiAgICAgICAgYXJnOiBlcnJcbiAgICAgIH07XG4gICAgfVxuICB9XG5cbiAgZXhwb3J0cy53cmFwID0gd3JhcDtcbiAgdmFyIENvbnRpbnVlU2VudGluZWwgPSB7fTtcblxuICBmdW5jdGlvbiBHZW5lcmF0b3IoKSB7fVxuXG4gIGZ1bmN0aW9uIEdlbmVyYXRvckZ1bmN0aW9uKCkge31cblxuICBmdW5jdGlvbiBHZW5lcmF0b3JGdW5jdGlvblByb3RvdHlwZSgpIHt9XG5cbiAgdmFyIEl0ZXJhdG9yUHJvdG90eXBlID0ge307XG4gIGRlZmluZShJdGVyYXRvclByb3RvdHlwZSwgaXRlcmF0b3JTeW1ib2wsIGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gdGhpcztcbiAgfSk7XG4gIHZhciBnZXRQcm90byA9IE9iamVjdC5nZXRQcm90b3R5cGVPZixcbiAgICAgIE5hdGl2ZUl0ZXJhdG9yUHJvdG90eXBlID0gZ2V0UHJvdG8gJiYgZ2V0UHJvdG8oZ2V0UHJvdG8odmFsdWVzKFtdKSkpO1xuICBOYXRpdmVJdGVyYXRvclByb3RvdHlwZSAmJiBOYXRpdmVJdGVyYXRvclByb3RvdHlwZSAhPT0gT3AgJiYgaGFzT3duLmNhbGwoTmF0aXZlSXRlcmF0b3JQcm90b3R5cGUsIGl0ZXJhdG9yU3ltYm9sKSAmJiAoSXRlcmF0b3JQcm90b3R5cGUgPSBOYXRpdmVJdGVyYXRvclByb3RvdHlwZSk7XG4gIHZhciBHcCA9IEdlbmVyYXRvckZ1bmN0aW9uUHJvdG90eXBlLnByb3RvdHlwZSA9IEdlbmVyYXRvci5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKEl0ZXJhdG9yUHJvdG90eXBlKTtcblxuICBmdW5jdGlvbiBkZWZpbmVJdGVyYXRvck1ldGhvZHMocHJvdG90eXBlKSB7XG4gICAgW1wibmV4dFwiLCBcInRocm93XCIsIFwicmV0dXJuXCJdLmZvckVhY2goZnVuY3Rpb24gKG1ldGhvZCkge1xuICAgICAgZGVmaW5lKHByb3RvdHlwZSwgbWV0aG9kLCBmdW5jdGlvbiAoYXJnKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9pbnZva2UobWV0aG9kLCBhcmcpO1xuICAgICAgfSk7XG4gICAgfSk7XG4gIH1cblxuICBmdW5jdGlvbiBBc3luY0l0ZXJhdG9yKGdlbmVyYXRvciwgUHJvbWlzZUltcGwpIHtcbiAgICBmdW5jdGlvbiBpbnZva2UobWV0aG9kLCBhcmcsIHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgdmFyIHJlY29yZCA9IHRyeUNhdGNoKGdlbmVyYXRvclttZXRob2RdLCBnZW5lcmF0b3IsIGFyZyk7XG5cbiAgICAgIGlmIChcInRocm93XCIgIT09IHJlY29yZC50eXBlKSB7XG4gICAgICAgIHZhciByZXN1bHQgPSByZWNvcmQuYXJnLFxuICAgICAgICAgICAgdmFsdWUgPSByZXN1bHQudmFsdWU7XG4gICAgICAgIHJldHVybiB2YWx1ZSAmJiBcIm9iamVjdFwiID09IF90eXBlb2YodmFsdWUpICYmIGhhc093bi5jYWxsKHZhbHVlLCBcIl9fYXdhaXRcIikgPyBQcm9taXNlSW1wbC5yZXNvbHZlKHZhbHVlLl9fYXdhaXQpLnRoZW4oZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgICAgICAgaW52b2tlKFwibmV4dFwiLCB2YWx1ZSwgcmVzb2x2ZSwgcmVqZWN0KTtcbiAgICAgICAgfSwgZnVuY3Rpb24gKGVycikge1xuICAgICAgICAgIGludm9rZShcInRocm93XCIsIGVyciwgcmVzb2x2ZSwgcmVqZWN0KTtcbiAgICAgICAgfSkgOiBQcm9taXNlSW1wbC5yZXNvbHZlKHZhbHVlKS50aGVuKGZ1bmN0aW9uICh1bndyYXBwZWQpIHtcbiAgICAgICAgICByZXN1bHQudmFsdWUgPSB1bndyYXBwZWQsIHJlc29sdmUocmVzdWx0KTtcbiAgICAgICAgfSwgZnVuY3Rpb24gKGVycm9yKSB7XG4gICAgICAgICAgcmV0dXJuIGludm9rZShcInRocm93XCIsIGVycm9yLCByZXNvbHZlLCByZWplY3QpO1xuICAgICAgICB9KTtcbiAgICAgIH1cblxuICAgICAgcmVqZWN0KHJlY29yZC5hcmcpO1xuICAgIH1cblxuICAgIHZhciBwcmV2aW91c1Byb21pc2U7XG5cbiAgICB0aGlzLl9pbnZva2UgPSBmdW5jdGlvbiAobWV0aG9kLCBhcmcpIHtcbiAgICAgIGZ1bmN0aW9uIGNhbGxJbnZva2VXaXRoTWV0aG9kQW5kQXJnKCkge1xuICAgICAgICByZXR1cm4gbmV3IFByb21pc2VJbXBsKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcbiAgICAgICAgICBpbnZva2UobWV0aG9kLCBhcmcsIHJlc29sdmUsIHJlamVjdCk7XG4gICAgICAgIH0pO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gcHJldmlvdXNQcm9taXNlID0gcHJldmlvdXNQcm9taXNlID8gcHJldmlvdXNQcm9taXNlLnRoZW4oY2FsbEludm9rZVdpdGhNZXRob2RBbmRBcmcsIGNhbGxJbnZva2VXaXRoTWV0aG9kQW5kQXJnKSA6IGNhbGxJbnZva2VXaXRoTWV0aG9kQW5kQXJnKCk7XG4gICAgfTtcbiAgfVxuXG4gIGZ1bmN0aW9uIG1heWJlSW52b2tlRGVsZWdhdGUoZGVsZWdhdGUsIGNvbnRleHQpIHtcbiAgICB2YXIgbWV0aG9kID0gZGVsZWdhdGUuaXRlcmF0b3JbY29udGV4dC5tZXRob2RdO1xuXG4gICAgaWYgKHVuZGVmaW5lZCA9PT0gbWV0aG9kKSB7XG4gICAgICBpZiAoY29udGV4dC5kZWxlZ2F0ZSA9IG51bGwsIFwidGhyb3dcIiA9PT0gY29udGV4dC5tZXRob2QpIHtcbiAgICAgICAgaWYgKGRlbGVnYXRlLml0ZXJhdG9yW1wicmV0dXJuXCJdICYmIChjb250ZXh0Lm1ldGhvZCA9IFwicmV0dXJuXCIsIGNvbnRleHQuYXJnID0gdW5kZWZpbmVkLCBtYXliZUludm9rZURlbGVnYXRlKGRlbGVnYXRlLCBjb250ZXh0KSwgXCJ0aHJvd1wiID09PSBjb250ZXh0Lm1ldGhvZCkpIHJldHVybiBDb250aW51ZVNlbnRpbmVsO1xuICAgICAgICBjb250ZXh0Lm1ldGhvZCA9IFwidGhyb3dcIiwgY29udGV4dC5hcmcgPSBuZXcgVHlwZUVycm9yKFwiVGhlIGl0ZXJhdG9yIGRvZXMgbm90IHByb3ZpZGUgYSAndGhyb3cnIG1ldGhvZFwiKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIENvbnRpbnVlU2VudGluZWw7XG4gICAgfVxuXG4gICAgdmFyIHJlY29yZCA9IHRyeUNhdGNoKG1ldGhvZCwgZGVsZWdhdGUuaXRlcmF0b3IsIGNvbnRleHQuYXJnKTtcbiAgICBpZiAoXCJ0aHJvd1wiID09PSByZWNvcmQudHlwZSkgcmV0dXJuIGNvbnRleHQubWV0aG9kID0gXCJ0aHJvd1wiLCBjb250ZXh0LmFyZyA9IHJlY29yZC5hcmcsIGNvbnRleHQuZGVsZWdhdGUgPSBudWxsLCBDb250aW51ZVNlbnRpbmVsO1xuICAgIHZhciBpbmZvID0gcmVjb3JkLmFyZztcbiAgICByZXR1cm4gaW5mbyA/IGluZm8uZG9uZSA/IChjb250ZXh0W2RlbGVnYXRlLnJlc3VsdE5hbWVdID0gaW5mby52YWx1ZSwgY29udGV4dC5uZXh0ID0gZGVsZWdhdGUubmV4dExvYywgXCJyZXR1cm5cIiAhPT0gY29udGV4dC5tZXRob2QgJiYgKGNvbnRleHQubWV0aG9kID0gXCJuZXh0XCIsIGNvbnRleHQuYXJnID0gdW5kZWZpbmVkKSwgY29udGV4dC5kZWxlZ2F0ZSA9IG51bGwsIENvbnRpbnVlU2VudGluZWwpIDogaW5mbyA6IChjb250ZXh0Lm1ldGhvZCA9IFwidGhyb3dcIiwgY29udGV4dC5hcmcgPSBuZXcgVHlwZUVycm9yKFwiaXRlcmF0b3IgcmVzdWx0IGlzIG5vdCBhbiBvYmplY3RcIiksIGNvbnRleHQuZGVsZWdhdGUgPSBudWxsLCBDb250aW51ZVNlbnRpbmVsKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHB1c2hUcnlFbnRyeShsb2NzKSB7XG4gICAgdmFyIGVudHJ5ID0ge1xuICAgICAgdHJ5TG9jOiBsb2NzWzBdXG4gICAgfTtcbiAgICAxIGluIGxvY3MgJiYgKGVudHJ5LmNhdGNoTG9jID0gbG9jc1sxXSksIDIgaW4gbG9jcyAmJiAoZW50cnkuZmluYWxseUxvYyA9IGxvY3NbMl0sIGVudHJ5LmFmdGVyTG9jID0gbG9jc1szXSksIHRoaXMudHJ5RW50cmllcy5wdXNoKGVudHJ5KTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHJlc2V0VHJ5RW50cnkoZW50cnkpIHtcbiAgICB2YXIgcmVjb3JkID0gZW50cnkuY29tcGxldGlvbiB8fCB7fTtcbiAgICByZWNvcmQudHlwZSA9IFwibm9ybWFsXCIsIGRlbGV0ZSByZWNvcmQuYXJnLCBlbnRyeS5jb21wbGV0aW9uID0gcmVjb3JkO1xuICB9XG5cbiAgZnVuY3Rpb24gQ29udGV4dCh0cnlMb2NzTGlzdCkge1xuICAgIHRoaXMudHJ5RW50cmllcyA9IFt7XG4gICAgICB0cnlMb2M6IFwicm9vdFwiXG4gICAgfV0sIHRyeUxvY3NMaXN0LmZvckVhY2gocHVzaFRyeUVudHJ5LCB0aGlzKSwgdGhpcy5yZXNldCghMCk7XG4gIH1cblxuICBmdW5jdGlvbiB2YWx1ZXMoaXRlcmFibGUpIHtcbiAgICBpZiAoaXRlcmFibGUpIHtcbiAgICAgIHZhciBpdGVyYXRvck1ldGhvZCA9IGl0ZXJhYmxlW2l0ZXJhdG9yU3ltYm9sXTtcbiAgICAgIGlmIChpdGVyYXRvck1ldGhvZCkgcmV0dXJuIGl0ZXJhdG9yTWV0aG9kLmNhbGwoaXRlcmFibGUpO1xuICAgICAgaWYgKFwiZnVuY3Rpb25cIiA9PSB0eXBlb2YgaXRlcmFibGUubmV4dCkgcmV0dXJuIGl0ZXJhYmxlO1xuXG4gICAgICBpZiAoIWlzTmFOKGl0ZXJhYmxlLmxlbmd0aCkpIHtcbiAgICAgICAgdmFyIGkgPSAtMSxcbiAgICAgICAgICAgIG5leHQgPSBmdW5jdGlvbiBuZXh0KCkge1xuICAgICAgICAgIGZvciAoOyArK2kgPCBpdGVyYWJsZS5sZW5ndGg7KSB7XG4gICAgICAgICAgICBpZiAoaGFzT3duLmNhbGwoaXRlcmFibGUsIGkpKSByZXR1cm4gbmV4dC52YWx1ZSA9IGl0ZXJhYmxlW2ldLCBuZXh0LmRvbmUgPSAhMSwgbmV4dDtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICByZXR1cm4gbmV4dC52YWx1ZSA9IHVuZGVmaW5lZCwgbmV4dC5kb25lID0gITAsIG5leHQ7XG4gICAgICAgIH07XG5cbiAgICAgICAgcmV0dXJuIG5leHQubmV4dCA9IG5leHQ7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHtcbiAgICAgIG5leHQ6IGRvbmVSZXN1bHRcbiAgICB9O1xuICB9XG5cbiAgZnVuY3Rpb24gZG9uZVJlc3VsdCgpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdmFsdWU6IHVuZGVmaW5lZCxcbiAgICAgIGRvbmU6ICEwXG4gICAgfTtcbiAgfVxuXG4gIHJldHVybiBHZW5lcmF0b3JGdW5jdGlvbi5wcm90b3R5cGUgPSBHZW5lcmF0b3JGdW5jdGlvblByb3RvdHlwZSwgZGVmaW5lKEdwLCBcImNvbnN0cnVjdG9yXCIsIEdlbmVyYXRvckZ1bmN0aW9uUHJvdG90eXBlKSwgZGVmaW5lKEdlbmVyYXRvckZ1bmN0aW9uUHJvdG90eXBlLCBcImNvbnN0cnVjdG9yXCIsIEdlbmVyYXRvckZ1bmN0aW9uKSwgR2VuZXJhdG9yRnVuY3Rpb24uZGlzcGxheU5hbWUgPSBkZWZpbmUoR2VuZXJhdG9yRnVuY3Rpb25Qcm90b3R5cGUsIHRvU3RyaW5nVGFnU3ltYm9sLCBcIkdlbmVyYXRvckZ1bmN0aW9uXCIpLCBleHBvcnRzLmlzR2VuZXJhdG9yRnVuY3Rpb24gPSBmdW5jdGlvbiAoZ2VuRnVuKSB7XG4gICAgdmFyIGN0b3IgPSBcImZ1bmN0aW9uXCIgPT0gdHlwZW9mIGdlbkZ1biAmJiBnZW5GdW4uY29uc3RydWN0b3I7XG4gICAgcmV0dXJuICEhY3RvciAmJiAoY3RvciA9PT0gR2VuZXJhdG9yRnVuY3Rpb24gfHwgXCJHZW5lcmF0b3JGdW5jdGlvblwiID09PSAoY3Rvci5kaXNwbGF5TmFtZSB8fCBjdG9yLm5hbWUpKTtcbiAgfSwgZXhwb3J0cy5tYXJrID0gZnVuY3Rpb24gKGdlbkZ1bikge1xuICAgIHJldHVybiBPYmplY3Quc2V0UHJvdG90eXBlT2YgPyBPYmplY3Quc2V0UHJvdG90eXBlT2YoZ2VuRnVuLCBHZW5lcmF0b3JGdW5jdGlvblByb3RvdHlwZSkgOiAoZ2VuRnVuLl9fcHJvdG9fXyA9IEdlbmVyYXRvckZ1bmN0aW9uUHJvdG90eXBlLCBkZWZpbmUoZ2VuRnVuLCB0b1N0cmluZ1RhZ1N5bWJvbCwgXCJHZW5lcmF0b3JGdW5jdGlvblwiKSksIGdlbkZ1bi5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKEdwKSwgZ2VuRnVuO1xuICB9LCBleHBvcnRzLmF3cmFwID0gZnVuY3Rpb24gKGFyZykge1xuICAgIHJldHVybiB7XG4gICAgICBfX2F3YWl0OiBhcmdcbiAgICB9O1xuICB9LCBkZWZpbmVJdGVyYXRvck1ldGhvZHMoQXN5bmNJdGVyYXRvci5wcm90b3R5cGUpLCBkZWZpbmUoQXN5bmNJdGVyYXRvci5wcm90b3R5cGUsIGFzeW5jSXRlcmF0b3JTeW1ib2wsIGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gdGhpcztcbiAgfSksIGV4cG9ydHMuQXN5bmNJdGVyYXRvciA9IEFzeW5jSXRlcmF0b3IsIGV4cG9ydHMuYXN5bmMgPSBmdW5jdGlvbiAoaW5uZXJGbiwgb3V0ZXJGbiwgc2VsZiwgdHJ5TG9jc0xpc3QsIFByb21pc2VJbXBsKSB7XG4gICAgdm9pZCAwID09PSBQcm9taXNlSW1wbCAmJiAoUHJvbWlzZUltcGwgPSBQcm9taXNlKTtcbiAgICB2YXIgaXRlciA9IG5ldyBBc3luY0l0ZXJhdG9yKHdyYXAoaW5uZXJGbiwgb3V0ZXJGbiwgc2VsZiwgdHJ5TG9jc0xpc3QpLCBQcm9taXNlSW1wbCk7XG4gICAgcmV0dXJuIGV4cG9ydHMuaXNHZW5lcmF0b3JGdW5jdGlvbihvdXRlckZuKSA/IGl0ZXIgOiBpdGVyLm5leHQoKS50aGVuKGZ1bmN0aW9uIChyZXN1bHQpIHtcbiAgICAgIHJldHVybiByZXN1bHQuZG9uZSA/IHJlc3VsdC52YWx1ZSA6IGl0ZXIubmV4dCgpO1xuICAgIH0pO1xuICB9LCBkZWZpbmVJdGVyYXRvck1ldGhvZHMoR3ApLCBkZWZpbmUoR3AsIHRvU3RyaW5nVGFnU3ltYm9sLCBcIkdlbmVyYXRvclwiKSwgZGVmaW5lKEdwLCBpdGVyYXRvclN5bWJvbCwgZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiB0aGlzO1xuICB9KSwgZGVmaW5lKEdwLCBcInRvU3RyaW5nXCIsIGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gXCJbb2JqZWN0IEdlbmVyYXRvcl1cIjtcbiAgfSksIGV4cG9ydHMua2V5cyA9IGZ1bmN0aW9uIChvYmplY3QpIHtcbiAgICB2YXIga2V5cyA9IFtdO1xuXG4gICAgZm9yICh2YXIga2V5IGluIG9iamVjdCkge1xuICAgICAga2V5cy5wdXNoKGtleSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGtleXMucmV2ZXJzZSgpLCBmdW5jdGlvbiBuZXh0KCkge1xuICAgICAgZm9yICg7IGtleXMubGVuZ3RoOykge1xuICAgICAgICB2YXIga2V5ID0ga2V5cy5wb3AoKTtcbiAgICAgICAgaWYgKGtleSBpbiBvYmplY3QpIHJldHVybiBuZXh0LnZhbHVlID0ga2V5LCBuZXh0LmRvbmUgPSAhMSwgbmV4dDtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIG5leHQuZG9uZSA9ICEwLCBuZXh0O1xuICAgIH07XG4gIH0sIGV4cG9ydHMudmFsdWVzID0gdmFsdWVzLCBDb250ZXh0LnByb3RvdHlwZSA9IHtcbiAgICBjb25zdHJ1Y3RvcjogQ29udGV4dCxcbiAgICByZXNldDogZnVuY3Rpb24gcmVzZXQoc2tpcFRlbXBSZXNldCkge1xuICAgICAgaWYgKHRoaXMucHJldiA9IDAsIHRoaXMubmV4dCA9IDAsIHRoaXMuc2VudCA9IHRoaXMuX3NlbnQgPSB1bmRlZmluZWQsIHRoaXMuZG9uZSA9ICExLCB0aGlzLmRlbGVnYXRlID0gbnVsbCwgdGhpcy5tZXRob2QgPSBcIm5leHRcIiwgdGhpcy5hcmcgPSB1bmRlZmluZWQsIHRoaXMudHJ5RW50cmllcy5mb3JFYWNoKHJlc2V0VHJ5RW50cnkpLCAhc2tpcFRlbXBSZXNldCkgZm9yICh2YXIgbmFtZSBpbiB0aGlzKSB7XG4gICAgICAgIFwidFwiID09PSBuYW1lLmNoYXJBdCgwKSAmJiBoYXNPd24uY2FsbCh0aGlzLCBuYW1lKSAmJiAhaXNOYU4oK25hbWUuc2xpY2UoMSkpICYmICh0aGlzW25hbWVdID0gdW5kZWZpbmVkKTtcbiAgICAgIH1cbiAgICB9LFxuICAgIHN0b3A6IGZ1bmN0aW9uIHN0b3AoKSB7XG4gICAgICB0aGlzLmRvbmUgPSAhMDtcbiAgICAgIHZhciByb290UmVjb3JkID0gdGhpcy50cnlFbnRyaWVzWzBdLmNvbXBsZXRpb247XG4gICAgICBpZiAoXCJ0aHJvd1wiID09PSByb290UmVjb3JkLnR5cGUpIHRocm93IHJvb3RSZWNvcmQuYXJnO1xuICAgICAgcmV0dXJuIHRoaXMucnZhbDtcbiAgICB9LFxuICAgIGRpc3BhdGNoRXhjZXB0aW9uOiBmdW5jdGlvbiBkaXNwYXRjaEV4Y2VwdGlvbihleGNlcHRpb24pIHtcbiAgICAgIGlmICh0aGlzLmRvbmUpIHRocm93IGV4Y2VwdGlvbjtcbiAgICAgIHZhciBjb250ZXh0ID0gdGhpcztcblxuICAgICAgZnVuY3Rpb24gaGFuZGxlKGxvYywgY2F1Z2h0KSB7XG4gICAgICAgIHJldHVybiByZWNvcmQudHlwZSA9IFwidGhyb3dcIiwgcmVjb3JkLmFyZyA9IGV4Y2VwdGlvbiwgY29udGV4dC5uZXh0ID0gbG9jLCBjYXVnaHQgJiYgKGNvbnRleHQubWV0aG9kID0gXCJuZXh0XCIsIGNvbnRleHQuYXJnID0gdW5kZWZpbmVkKSwgISFjYXVnaHQ7XG4gICAgICB9XG5cbiAgICAgIGZvciAodmFyIGkgPSB0aGlzLnRyeUVudHJpZXMubGVuZ3RoIC0gMTsgaSA+PSAwOyAtLWkpIHtcbiAgICAgICAgdmFyIGVudHJ5ID0gdGhpcy50cnlFbnRyaWVzW2ldLFxuICAgICAgICAgICAgcmVjb3JkID0gZW50cnkuY29tcGxldGlvbjtcbiAgICAgICAgaWYgKFwicm9vdFwiID09PSBlbnRyeS50cnlMb2MpIHJldHVybiBoYW5kbGUoXCJlbmRcIik7XG5cbiAgICAgICAgaWYgKGVudHJ5LnRyeUxvYyA8PSB0aGlzLnByZXYpIHtcbiAgICAgICAgICB2YXIgaGFzQ2F0Y2ggPSBoYXNPd24uY2FsbChlbnRyeSwgXCJjYXRjaExvY1wiKSxcbiAgICAgICAgICAgICAgaGFzRmluYWxseSA9IGhhc093bi5jYWxsKGVudHJ5LCBcImZpbmFsbHlMb2NcIik7XG5cbiAgICAgICAgICBpZiAoaGFzQ2F0Y2ggJiYgaGFzRmluYWxseSkge1xuICAgICAgICAgICAgaWYgKHRoaXMucHJldiA8IGVudHJ5LmNhdGNoTG9jKSByZXR1cm4gaGFuZGxlKGVudHJ5LmNhdGNoTG9jLCAhMCk7XG4gICAgICAgICAgICBpZiAodGhpcy5wcmV2IDwgZW50cnkuZmluYWxseUxvYykgcmV0dXJuIGhhbmRsZShlbnRyeS5maW5hbGx5TG9jKTtcbiAgICAgICAgICB9IGVsc2UgaWYgKGhhc0NhdGNoKSB7XG4gICAgICAgICAgICBpZiAodGhpcy5wcmV2IDwgZW50cnkuY2F0Y2hMb2MpIHJldHVybiBoYW5kbGUoZW50cnkuY2F0Y2hMb2MsICEwKTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgaWYgKCFoYXNGaW5hbGx5KSB0aHJvdyBuZXcgRXJyb3IoXCJ0cnkgc3RhdGVtZW50IHdpdGhvdXQgY2F0Y2ggb3IgZmluYWxseVwiKTtcbiAgICAgICAgICAgIGlmICh0aGlzLnByZXYgPCBlbnRyeS5maW5hbGx5TG9jKSByZXR1cm4gaGFuZGxlKGVudHJ5LmZpbmFsbHlMb2MpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0sXG4gICAgYWJydXB0OiBmdW5jdGlvbiBhYnJ1cHQodHlwZSwgYXJnKSB7XG4gICAgICBmb3IgKHZhciBpID0gdGhpcy50cnlFbnRyaWVzLmxlbmd0aCAtIDE7IGkgPj0gMDsgLS1pKSB7XG4gICAgICAgIHZhciBlbnRyeSA9IHRoaXMudHJ5RW50cmllc1tpXTtcblxuICAgICAgICBpZiAoZW50cnkudHJ5TG9jIDw9IHRoaXMucHJldiAmJiBoYXNPd24uY2FsbChlbnRyeSwgXCJmaW5hbGx5TG9jXCIpICYmIHRoaXMucHJldiA8IGVudHJ5LmZpbmFsbHlMb2MpIHtcbiAgICAgICAgICB2YXIgZmluYWxseUVudHJ5ID0gZW50cnk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgZmluYWxseUVudHJ5ICYmIChcImJyZWFrXCIgPT09IHR5cGUgfHwgXCJjb250aW51ZVwiID09PSB0eXBlKSAmJiBmaW5hbGx5RW50cnkudHJ5TG9jIDw9IGFyZyAmJiBhcmcgPD0gZmluYWxseUVudHJ5LmZpbmFsbHlMb2MgJiYgKGZpbmFsbHlFbnRyeSA9IG51bGwpO1xuICAgICAgdmFyIHJlY29yZCA9IGZpbmFsbHlFbnRyeSA/IGZpbmFsbHlFbnRyeS5jb21wbGV0aW9uIDoge307XG4gICAgICByZXR1cm4gcmVjb3JkLnR5cGUgPSB0eXBlLCByZWNvcmQuYXJnID0gYXJnLCBmaW5hbGx5RW50cnkgPyAodGhpcy5tZXRob2QgPSBcIm5leHRcIiwgdGhpcy5uZXh0ID0gZmluYWxseUVudHJ5LmZpbmFsbHlMb2MsIENvbnRpbnVlU2VudGluZWwpIDogdGhpcy5jb21wbGV0ZShyZWNvcmQpO1xuICAgIH0sXG4gICAgY29tcGxldGU6IGZ1bmN0aW9uIGNvbXBsZXRlKHJlY29yZCwgYWZ0ZXJMb2MpIHtcbiAgICAgIGlmIChcInRocm93XCIgPT09IHJlY29yZC50eXBlKSB0aHJvdyByZWNvcmQuYXJnO1xuICAgICAgcmV0dXJuIFwiYnJlYWtcIiA9PT0gcmVjb3JkLnR5cGUgfHwgXCJjb250aW51ZVwiID09PSByZWNvcmQudHlwZSA/IHRoaXMubmV4dCA9IHJlY29yZC5hcmcgOiBcInJldHVyblwiID09PSByZWNvcmQudHlwZSA/ICh0aGlzLnJ2YWwgPSB0aGlzLmFyZyA9IHJlY29yZC5hcmcsIHRoaXMubWV0aG9kID0gXCJyZXR1cm5cIiwgdGhpcy5uZXh0ID0gXCJlbmRcIikgOiBcIm5vcm1hbFwiID09PSByZWNvcmQudHlwZSAmJiBhZnRlckxvYyAmJiAodGhpcy5uZXh0ID0gYWZ0ZXJMb2MpLCBDb250aW51ZVNlbnRpbmVsO1xuICAgIH0sXG4gICAgZmluaXNoOiBmdW5jdGlvbiBmaW5pc2goZmluYWxseUxvYykge1xuICAgICAgZm9yICh2YXIgaSA9IHRoaXMudHJ5RW50cmllcy5sZW5ndGggLSAxOyBpID49IDA7IC0taSkge1xuICAgICAgICB2YXIgZW50cnkgPSB0aGlzLnRyeUVudHJpZXNbaV07XG4gICAgICAgIGlmIChlbnRyeS5maW5hbGx5TG9jID09PSBmaW5hbGx5TG9jKSByZXR1cm4gdGhpcy5jb21wbGV0ZShlbnRyeS5jb21wbGV0aW9uLCBlbnRyeS5hZnRlckxvYyksIHJlc2V0VHJ5RW50cnkoZW50cnkpLCBDb250aW51ZVNlbnRpbmVsO1xuICAgICAgfVxuICAgIH0sXG4gICAgXCJjYXRjaFwiOiBmdW5jdGlvbiBfY2F0Y2godHJ5TG9jKSB7XG4gICAgICBmb3IgKHZhciBpID0gdGhpcy50cnlFbnRyaWVzLmxlbmd0aCAtIDE7IGkgPj0gMDsgLS1pKSB7XG4gICAgICAgIHZhciBlbnRyeSA9IHRoaXMudHJ5RW50cmllc1tpXTtcblxuICAgICAgICBpZiAoZW50cnkudHJ5TG9jID09PSB0cnlMb2MpIHtcbiAgICAgICAgICB2YXIgcmVjb3JkID0gZW50cnkuY29tcGxldGlvbjtcblxuICAgICAgICAgIGlmIChcInRocm93XCIgPT09IHJlY29yZC50eXBlKSB7XG4gICAgICAgICAgICB2YXIgdGhyb3duID0gcmVjb3JkLmFyZztcbiAgICAgICAgICAgIHJlc2V0VHJ5RW50cnkoZW50cnkpO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIHJldHVybiB0aHJvd247XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgdGhyb3cgbmV3IEVycm9yKFwiaWxsZWdhbCBjYXRjaCBhdHRlbXB0XCIpO1xuICAgIH0sXG4gICAgZGVsZWdhdGVZaWVsZDogZnVuY3Rpb24gZGVsZWdhdGVZaWVsZChpdGVyYWJsZSwgcmVzdWx0TmFtZSwgbmV4dExvYykge1xuICAgICAgcmV0dXJuIHRoaXMuZGVsZWdhdGUgPSB7XG4gICAgICAgIGl0ZXJhdG9yOiB2YWx1ZXMoaXRlcmFibGUpLFxuICAgICAgICByZXN1bHROYW1lOiByZXN1bHROYW1lLFxuICAgICAgICBuZXh0TG9jOiBuZXh0TG9jXG4gICAgICB9LCBcIm5leHRcIiA9PT0gdGhpcy5tZXRob2QgJiYgKHRoaXMuYXJnID0gdW5kZWZpbmVkKSwgQ29udGludWVTZW50aW5lbDtcbiAgICB9XG4gIH0sIGV4cG9ydHM7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX3JlZ2VuZXJhdG9yUnVudGltZSwgbW9kdWxlLmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWUsIG1vZHVsZS5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IG1vZHVsZS5leHBvcnRzOyIsImZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7XG4gIFwiQGJhYmVsL2hlbHBlcnMgLSB0eXBlb2ZcIjtcblxuICByZXR1cm4gKG1vZHVsZS5leHBvcnRzID0gX3R5cGVvZiA9IFwiZnVuY3Rpb25cIiA9PSB0eXBlb2YgU3ltYm9sICYmIFwic3ltYm9sXCIgPT0gdHlwZW9mIFN5bWJvbC5pdGVyYXRvciA/IGZ1bmN0aW9uIChvYmopIHtcbiAgICByZXR1cm4gdHlwZW9mIG9iajtcbiAgfSA6IGZ1bmN0aW9uIChvYmopIHtcbiAgICByZXR1cm4gb2JqICYmIFwiZnVuY3Rpb25cIiA9PSB0eXBlb2YgU3ltYm9sICYmIG9iai5jb25zdHJ1Y3RvciA9PT0gU3ltYm9sICYmIG9iaiAhPT0gU3ltYm9sLnByb3RvdHlwZSA/IFwic3ltYm9sXCIgOiB0eXBlb2Ygb2JqO1xuICB9LCBtb2R1bGUuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZSwgbW9kdWxlLmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gbW9kdWxlLmV4cG9ydHMpLCBfdHlwZW9mKG9iaik7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX3R5cGVvZiwgbW9kdWxlLmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWUsIG1vZHVsZS5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IG1vZHVsZS5leHBvcnRzOyIsIi8vIFRPRE8oQmFiZWwgOCk6IFJlbW92ZSB0aGlzIGZpbGUuXG5cbnZhciBydW50aW1lID0gcmVxdWlyZShcIi4uL2hlbHBlcnMvcmVnZW5lcmF0b3JSdW50aW1lXCIpKCk7XG5tb2R1bGUuZXhwb3J0cyA9IHJ1bnRpbWU7XG5cbi8vIENvcGllZCBmcm9tIGh0dHBzOi8vZ2l0aHViLmNvbS9mYWNlYm9vay9yZWdlbmVyYXRvci9ibG9iL21haW4vcGFja2FnZXMvcnVudGltZS9ydW50aW1lLmpzI0w3MzY9XG50cnkge1xuICByZWdlbmVyYXRvclJ1bnRpbWUgPSBydW50aW1lO1xufSBjYXRjaCAoYWNjaWRlbnRhbFN0cmljdE1vZGUpIHtcbiAgaWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSBcIm9iamVjdFwiKSB7XG4gICAgZ2xvYmFsVGhpcy5yZWdlbmVyYXRvclJ1bnRpbWUgPSBydW50aW1lO1xuICB9IGVsc2Uge1xuICAgIEZ1bmN0aW9uKFwiclwiLCBcInJlZ2VuZXJhdG9yUnVudGltZSA9IHJcIikocnVudGltZSk7XG4gIH1cbn1cbiIsImltcG9ydCB7IERlbGF5TmF2aWdhdGlvbiBhcyBOYXZpZ2F0ZUFmdGVyQWN0aW9uSWZOZWVkZWQgfSBmcm9tICcuL0RlbGF5TmF2aWdhdGlvbi5qcyc7XG5pbXBvcnQgeyBDYWxjRXZlbnROYW1lRm9yRWxlbWVudCwgU2VsZWN0b3JUcmFja2luZywgU2VhcmNoRWxlbWVudEZvclNlbGVjdG9yLCBQcmludEV2ZW50IH0gZnJvbSAnLi9IZWxwZXJzLmpzJztcblxuY29uc3QgY29udmVyc2lvbkRvbWFpbiA9ICdyZWFsdGltZWFuYWx5dGljcy55ZXh0LmNvbSc7XG5jb25zdCBldmVudERvbWFpbiA9ICd3d3cueWV4dC1waXhlbC5jb20nO1xuY29uc3QgY29udmVyc2lvbkVuZHBvaW50ID0gJ2NvbnZlcnNpb250cmFja2luZy9jb252ZXJzaW9uJztcbmNvbnN0IGxpc3RpbmdzRW5kcG9pbnQgPSAnbGlzdGluZ3MnO1xuY29uc3QgZXZlbnRFbmRwb2ludCA9ICdzdG9yZV9wYWdlc3BpeGVsJztcblxuY2xhc3MgQW5hbHl0aWNzIHtcbiAgLy8gVGFrZXMgV2luZG93IGFzIHJlZmVyZW5jZSBmb3IgYmV0dGVyIG1pbmlmaWNhdGlvbiByZWZlcmVuY2VzXG4gIGNvbnN0cnVjdG9yKHdpbiA9IHdpbmRvdywgZXZlbnROYW1lQ2FsY3VsYXRvciA9IENhbGNFdmVudE5hbWVGb3JFbGVtZW50KSB7XG4gICAgY29uc3QgYW5hbHl0aWNzUU5hbWUgPSB3aW4uWWV4dEFuYWx5dGljc09iamVjdCB8fCAneWEnO1xuXG4gICAgdGhpcy5fZXZlbnROYW1lQ2FsY3VsYXRvciA9IGV2ZW50TmFtZUNhbGN1bGF0b3I7XG4gICAgdGhpcy53aW4gPSB3aW47XG4gICAgdGhpcy5kb20gPSB3aW4uZG9jdW1lbnQ7XG4gICAgdGhpcy5zZXQoeyBwYWdldXJsOiB3aW4ubG9jYXRpb24ucGF0aG5hbWUsIHBhZ2VzUmVmZXJyZXI6IHdpbi5kb2N1bWVudC5yZWZlcnJlciB9KTtcbiAgICB0aGlzLnJlZ2lzdGVyZWRMaXN0ZW5lcnMgPSB7fTtcbiAgICB0aGlzLlN0YW5kYXJkRXZlbnRzID0ge1xuICAgICAgV2Vic2l0ZUNsaWNrOiAnd2Vic2l0ZScsXG4gICAgICBEcml2aW5nRGlyZWN0aW9uczogJ2RpcmVjdGlvbnMnLFxuICAgICAgTW9iaWxlQ2FsbDogJ3Bob25lJyxcbiAgICAgIENUQUNsaWNrOiAnY3RhJ1xuICAgIH07XG4gICAgdGhpcy5kZWxheU5hdmlnYXRpb24gPSB0cnVlO1xuICAgIHRoaXMuY29udmVyc2lvblRyYWNraW5nRW5hYmxlZCA9IGZhbHNlO1xuICAgIHRoaXMuQ09OU1RBTlRTID0ge1xuICAgICAgQ09PS0lFX1BBUkFNOiAnX3lmcGMnLFxuICAgICAgQ09PS0lFX1JFTU9WQUxfVkFMVUU6ICdfX3RlbXBfXycgLy8gT25seSBmb3IgZXhwaXJlZCBjb29raWVzIHRvIGJlIHJlbW92ZWRcbiAgICB9O1xuICAgIHRoaXMubGlzdGluZ3NDbGlja0ZpcmVkID0gZmFsc2U7XG5cbiAgICBjb25zdCBxdWVyeVBhcmFtcyA9IHRoaXMuX2dldFF1ZXJ5UGFyYW1zKCk7XG4gICAgdGhpcy55X3NvdXJjZSA9IHF1ZXJ5UGFyYW1zLnlfc291cmNlO1xuXG4gICAgaWYgKCd5X3NvdXJjZScgaW4gcXVlcnlQYXJhbXMpIHtcbiAgICAgIC8vIFJlbW92ZSB0aGUgY29udmVyc2lvbiBzb3VyY2UgcGFyYW0gdG8gcHJldmVudCByZS1zdWJtaXNzaW9uIG9uIHBhZ2UgcmVsb2FkXG4gICAgICBkZWxldGUgcXVlcnlQYXJhbXMueV9zb3VyY2U7XG5cbiAgICAgIGNvbnN0IHF1ZXJ5U3RyaW5nID0gdGhpcy5fYnVpbGRRdWVyeVN0cmluZyhxdWVyeVBhcmFtcyk7XG4gICAgICB3aW5kb3cuaGlzdG9yeS5yZXBsYWNlU3RhdGUoXG4gICAgICAgIHdpbmRvdy5oaXN0b3J5LnN0YXRlLFxuICAgICAgICBkb2N1bWVudC50aXRsZSxcbiAgICAgICAgd2luZG93LmxvY2F0aW9uLnBhdGhuYW1lICsgKHF1ZXJ5U3RyaW5nID8gJz8nICsgcXVlcnlTdHJpbmcgOiAnJylcbiAgICAgICk7XG4gICAgfVxuXG4gICAgb25SZWFkeSgoKSA9PiB7XG4gICAgICAvLyBBbHdheXMgb2JzZXJ2ZSBjbGlja3Mgc28gd2UgY2FuIGZpcmUgdGhlIGNhdGNoLWFsbCBpbnRlcmFjdGlvbiBldmVudHNcbiAgICAgIHRoaXMucmVnaXN0ZXJPYnNlcnZlcignY2xpY2snKTtcblxuICAgICAgLy8gRHJhaW4gdGhlIGNvbW1hbmQgcXVldWUsIGlmIHByZXNlbnRcbiAgICAgIGlmICh3aW5bYW5hbHl0aWNzUU5hbWVdKSB7XG4gICAgICAgIGNvbnN0IGNxID0gd2luW2FuYWx5dGljc1FOYW1lXS5xIHx8IFtdO1xuICAgICAgICB3aGlsZSAoY3EubGVuZ3RoKSB7XG4gICAgICAgICAgY29uc3QgY29tbWFuZEFyZ3MgPSBjcS5zaGlmdCgpO1xuICAgICAgICAgIHRoaXMucHJvY2Vzc0NvbW1hbmQoLi4uY29tbWFuZEFyZ3MpO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIC8vIFJlcGxhY2UgdGhlIGNvbW1hbmQgcXVldWUgd2l0aCBhIHByb3h5IHRvIHRoaXMgaW5zdGFuY2VcbiAgICAgIHdpblthbmFseXRpY3NRTmFtZV0gPSAoLi4uYXJncykgPT4gdGhpcy5wcm9jZXNzQ29tbWFuZCguLi5hcmdzKTtcbiAgICB9KTtcbiAgfVxuXG4gIHNldENhbGNFdmVudE5hbWUoY2FsY3VsYXRvcikge1xuICAgIHRoaXMuX2V2ZW50TmFtZUNhbGN1bGF0b3IgPSBjYWxjdWxhdG9yO1xuICB9XG5cbiAgQ2FsY0V2ZW50TmFtZUZvckVsZW1lbnQodGFyZ2V0KSB7XG4gICAgcmV0dXJuIHRoaXMuX2V2ZW50TmFtZUNhbGN1bGF0b3IodGFyZ2V0KTtcbiAgfVxuXG4gIGxvYWRlZCgpIHtcbiAgICByZXR1cm4gdGhpcy5zaXRlRGF0YS5zaXRlSWQgIT09IHVuZGVmaW5lZCAmJlxuICAgICAgdGhpcy5zaXRlRGF0YS5idXNpbmVzc2lkcyAhPT0gdW5kZWZpbmVkO1xuICB9XG5cbiAgY3JlYXRlKGJ1c0lkLCBzaXRlLCBzdGFnaW5nKSB7XG4gICAgdGhpcy5zZXQoeyBidXNpbmVzc2lkczogYnVzSWQsIHNpdGVJZDogc2l0ZSwgaXNTdGFnaW5nOiBzdGFnaW5nIH0pO1xuICAgIHJldHVybiB0cnVlO1xuICB9XG5cbiAgc2V0KGRhdGEpIHtcbiAgICB0aGlzLnNpdGVEYXRhID0gT2JqZWN0LmFzc2lnbih0aGlzLnNpdGVEYXRhIHx8IHt9LCBkYXRhKTtcbiAgfVxuXG4gIHNldERlbGF5TmF2aWdhdGlvbihib29sKSB7XG4gICAgdGhpcy5kZWxheU5hdmlnYXRpb24gPSBib29sO1xuICB9XG5cbiAgc2V0Q29udmVyc2lvblRyYWNraW5nRW5hYmxlZChib29sKSB7XG4gICAgdGhpcy5jb252ZXJzaW9uVHJhY2tpbmdFbmFibGVkID0gYm9vbCAmJiAhdGhpcy5kb05vdFRyYWNrRW5hYmxlZCgpO1xuICAgIHRoaXMuX2ZpcmVMaXN0aW5nc1RhZ0lmU2hvdWxkKCk7XG4gIH1cblxuICBwYWdldmlldygpIHtcbiAgICB0aGlzLnNlbmQoeyBldmVudFR5cGU6ICdwYWdldmlldycgfSk7XG4gIH1cblxuICBjbGljayhvcHRzKSB7XG4gICAgdGhpcy5yZWdpc3Rlck9ic2VydmVyRm9yU2VsZWN0b3IoJ2NsaWNrJywgb3B0cy5zZWxlY3Rvciwgb3B0cy5uYW1lKTtcbiAgfVxuXG4gIHRyYWNrRXZlbnQoZXZlbnROYW1lLCBjYikge1xuICAgIHRoaXMuc2VuZCh7IGV2ZW50VHlwZTogZXZlbnROYW1lIH0sIGNiKTtcbiAgfVxuXG4gIC8vIEludGVybmFsIGZyb20gaGVyZSBvbiBvdXQhXG4gIC8qKlxuICAgKiBAcmV0dXJuIHtudW1iZXJ9IFRoZSByYW5kb20gbnVtYmVyIHRvIGluY2x1ZGUgYXMgYSBVUkwgcGFyYW1cbiAgICovXG4gIGdlbmVyYXRlUmFuZG9tQ29va2llXygpIHtcbiAgICByZXR1cm4gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogbmV3IERhdGUoKS5nZXRUaW1lKCkpO1xuICB9XG5cbiAgLyoqXG4gICAqIFJldHJpZXZlcyB0aGUgaWRlbnRpZmllciBzdG9yZWQgYXMgYSBjb29raWUgb24gdGhlIHVzZXIncyBicm93c2VyLCBpZiBwcmVzZW50LiBPdGhlcndpc2VcbiAgICogcmV0dXJucyBlbXB0eS4gVGhpcyBpcyBhY2NvbXBsaXNoZWQgYnkgYXR0ZW1wdGluZyB0byBzZXQgYSBjb29raWUgYXQgZG9tYWlucyBpbiBvcmRlciBvZlxuICAgKiBpbmNyZWFzaW5nIHNwZWNpZmljaXR5IChlLmcuIFwiLmNvbVwiLCB0aGVuIFwiLmV4YW1wbGUuY29tXCIsIHRoZW4gXCIuc3ViZG9tYWluLmV4YW1wbGUuY29tXCIpLCBhbmRcbiAgICogdGhlIGZpcnN0IG9uZSB0aGF0IHdlIGNhbiBzZXQgYSBjb29raWUgaW4gaXMgdGhlIHJvb3QgZG9tYWluLiBDaGVjayBpZiB3ZSBhbHJlYWR5IGhhdmUgYSBjb29raWVcbiAgICogaW4gdGhlIHJvb3QgZG9tYWluIGFuZCBpZiBub3QsIGNoZWNrIGlmIGEgY29va2llIGV4aXN0cyB3aXRob3V0IGEgZG9tYWluLCBmb3IgbGVnYWN5IHJlYXNvbnMuXG4gICAqXG4gICAqIEBwcml2YXRlXG4gICAqIEByZXR1cm4ge3N0cmluZ30gVGhlIHZhbHVlIHRvIGluY2x1ZGUgYXMgYSBVUkwgcGFyYW0sIG9yIGVtcHR5XG4gICAqL1xuICBmZXRjaENvb2tpZV8oKSB7XG4gICAgbGV0IGNvb2tpZVZhbHVlID0gJyc7XG4gICAgbGV0IGNoZWNrRG9tYWluID0gKGRvbWFpbikgPT4ge1xuICAgICAgaWYodGhpcy5jYW5TZXRDb29raWVXaXRoRG9tYWluXyhkb21haW4pKSB7XG4gICAgICAgIGxldCByZW1vdmVkVmFsdWUgPSB0aGlzLnJlbW92ZUNvb2tpZUJ5RG9tYWluXyhkb21haW4pO1xuICAgICAgICBpZihyZW1vdmVkVmFsdWUpIHtcbiAgICAgICAgICAvLyBXZSBmb3VuZCBhbmQgcmVtb3ZlZCBhIHZhbHVlLCBzbyBwdXQgaXQgYmFja1xuICAgICAgICAgIGNvb2tpZVZhbHVlID0gcmVtb3ZlZFZhbHVlO1xuICAgICAgICAgIHRoaXMuc2V0Q29va2llXyhjb29raWVWYWx1ZSwgZG9tYWluKTtcbiAgICAgICAgfVxuICAgICAgICAvLyBFeGl0IHRoZSBsb29wIG9uY2Ugd2UndmUgcmVhY2hlZCByb290IGRvbWFpbiAodGhlIGZpcnN0IGRvbWFpbiB3aGVyZSB3ZSBjYW4gc2V0IGEgY29va2llKVxuICAgICAgICByZXR1cm4gdHJ1ZTsgXG4gICAgICB9XG4gICAgfTtcblxuICAgIHRoaXMuZm9yRWFjaERvbWFpbkluY3JlYXNpbmdTcGVjaWZpY2l0eV8oY2hlY2tEb21haW4pO1xuICAgIC8vIElmIG5vIGNvb2tpZSB3YXMgcHJlc2VudCBpbiB0aGUgcm9vdCBkb21haW4sIGNoZWNrIGZvciBhIGNvb2tpZSB0aGF0IGRvZXNuJ3QgaGF2ZSBhIGRvbWFpblxuICAgIC8vIHNwZWNpZmllZCAoYnkgcGFzc2luZyBhbiBlbXB0eSBzdHJpbmcgdG8gY2hlY2tEb21haW4sIGluZGljYXRpbmcgbm8gZG9tYWluKS5cbiAgICBpZighY29va2llVmFsdWUpIGNoZWNrRG9tYWluKCcnKTtcbiAgICByZXR1cm4gY29va2llVmFsdWU7XG4gIH1cblxuICAvKipcbiAgICogU3RvcmVzIGEgY29va2llIG9uIHRoZSB1c2VyJ3MgYnJvd3NlciB3aXRoIHRoZSBnaXZlbiB2YWx1ZSBhbmQgZG9tYWluLCB3aXRoIG5hbWUgQ09PS0lFX1BBUkFNLlxuICAgKlxuICAgKiBAcHJpdmF0ZVxuICAgKiBAcGFyYW0ge3N0cmluZ30gY29va2llVmFsdWUgVGhlIHZhbHVlIHRvIHNldCBhcyB0aGUgZmlyc3QgcGFydHkgY29va2llXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBjb29raWVEb21haW4gVGhlIGRvbWFpbiBpbiB3aGljaCB0byBzZXQgdGhlIGNvb2tpZVxuICAgKi9cbiAgc2V0Q29va2llXyhjb29raWVWYWx1ZSwgY29va2llRG9tYWluKSB7XG4gICAgbGV0IGNvb2tpZVN0cmluZyA9IHRoaXMuZm9ybWF0Q29va2llXyhcbiAgICAgIHRoaXMuQ09OU1RBTlRTLkNPT0tJRV9QQVJBTSxcbiAgICAgIGNvb2tpZVZhbHVlLFxuICAgICAgY29va2llRG9tYWluKTtcbiAgICB0aGlzLndpbi5kb2N1bWVudC5jb29raWUgPSBjb29raWVTdHJpbmc7XG4gIH1cblxuICAvKipcbiAgICogQ3JlYXRlcyBhIGZvcm1hdHRlZCBjb29raWUgc3RyaW5nIGdpdmVuIGEga2V5LCB2YWx1ZSwgZG9tYWluLCBhbmQsIG9wdGlvbmFsbHksIGEgcGF0aC4gXG4gICAqIGBFeHBpcmVzYCBpcyBzZXQgdG8gZW5zdXJlIHRoZSBjb29raWUgaXMgcGVyc2lzdGVudCwgYFNhbWVzaXRlPU5vbmVgIHNvIHRoZSB2YWx1ZSBjYW4gYmUgXG4gICAqIGluY2x1ZGVkIGluIGNyb3NzLXNpdGUgcmVxdWVzdHMsYERvbWFpbmAgZGVmYXVsdHMgdG8gcm9vdCBkb21haW4gKGlmIHBvc3NpYmxlKSB0byBlbmFibGUgXG4gICAqIHRyYWNraW5nIGFjcm9zcyBzdWJkb21haW5zLCBhbmQgYFNlY3VyZWAgaXMgcmVxdWlyZWQgd2hlbiB1c2luZyBcbiAgICogYFNhbWVzaXRlPU5vbmVgOiBodHRwczovL3d3dy5jaHJvbWVzdGF0dXMuY29tL2ZlYXR1cmUvNTYzMzUyMTYyMjE4ODAzMlxuICAgKiBcbiAgICogQHByaXZhdGVcbiAgICogQHBhcmFtIHtzdHJpbmd9IGNvb2tpZU5hbWUgVGhlIG5hbWUgb2YgdGhlIGNvb2tpZVxuICAgKiBAcGFyYW0ge3N0cmluZ30gY29va2llVmFsdWUgVGhlIHZhbHVlIG9mIHRoZSBjb29raWVcbiAgICogQHBhcmFtIHtzdHJpbmd9IGRvbWFpbiBUaGUgZG9tYWluIHRvIHNldCB0aGUgY29va2llIGZvclxuICAgKiBAcGFyYW0ge3N0cmluZz19IHBhdGggVGhlIHBhdGggdG8gc2V0IHRoZSBjb29raWUgZm9yXG4gICAqIEByZXR1cm4ge3N0cmluZ30gQSBjb29raWUgc3RyaW5nIHdoaWNoIGNhbiBiZSBkaXJlY3RseSBhZGRlZCB0byBhIGRvY3VtZW50J3MgY29va2llc1xuICAgKi9cbiAgZm9ybWF0Q29va2llXyhjb29raWVOYW1lLCBjb29raWVWYWx1ZSwgZG9tYWluLCBwYXRoID0gJy8nKSB7XG4gICAgbGV0IGNvb2tpZVN0cmluZyA9IGNvb2tpZU5hbWUgKyAnPScgKyBjb29raWVWYWx1ZSxcbiAgICAgICAgbm93ID0gbmV3IERhdGUoKTtcbiAgICBub3cuc2V0VGltZShub3cuZ2V0VGltZSgpICsgOTAgKiAyNCAqIDYwICogNjAgKiAxMDAwKTtcbiAgICBjb29raWVTdHJpbmcgKz0gJztwYXRoPScgKyBwYXRoO1xuICAgIGNvb2tpZVN0cmluZyArPSAnO2V4cGlyZXM9JyArIG5vdy50b1VUQ1N0cmluZygpO1xuICAgIGlmKGRvbWFpbikgY29va2llU3RyaW5nICs9ICc7ZG9tYWluPScgKyBkb21haW47XG4gICAgY29va2llU3RyaW5nICs9ICc7c2FtZXNpdGU9Tm9uZTsnO1xuICAgIGlmICh0aGlzLndpbi5sb2NhdGlvbi5wcm90b2NvbCA9PT0gJ2h0dHBzOicpIHtcbiAgICAgIGNvb2tpZVN0cmluZyArPSAnIFNlY3VyZSAnO1xuICAgIH1cbiAgICByZXR1cm4gY29va2llU3RyaW5nO1xuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgd2hldGhlciB3ZSBhcmUgYWJsZSB0byBzZXQgYSBjb29raWUgKGZvcm1hdHRlZCBsaWtlIHRoZSBhY3R1YWwgY29va2llIGZvciB0cmFja2luZylcbiAgICogYXQgYSBzcGVjaWZpZWQgZG9tYWluIG9yIG5vdC4gUHJlc2VydmVzIGV4aXN0aW5nIGNvb2tpZXMgaW4gdGhlIHNhbWUgZG9tYWluIChidXQgbm90IHRoZWlyXG4gICAqIGV4cGlyYXRpb24gZGF0ZXMpLlxuICAgKiBcbiAgICogQHByaXZhdGVcbiAgICogQHBhcmFtIHtzdHJpbmd9IGRvbWFpbiBUaGUgdmFsdWUgZm9yIHRoZSBjb29raWUncyBkb21haW4gYXR0cmlidXRlXG4gICAqIEByZXR1cm4ge2Jvb2xlYW59IFdoZXRoZXIgYSBkdW1teSBjb29raWUgd2FzIHN1Y2Nlc3NmdWxseSBzZXQgd2l0aCBkb21haW4gc2V0IHRvIGRvbWFpbi5cbiAgICovXG4gIGNhblNldENvb2tpZVdpdGhEb21haW5fKGRvbWFpbikge1xuICAgIGxldCBsb3N0Q29va2llID0gdGhpcy5yZW1vdmVDb29raWVCeURvbWFpbl8oZG9tYWluKTtcblxuICAgIGxldCBleGlzdGluZ0Nvb2tpZXMgPSB0aGlzLmFsbENvb2tpZXNfKCk7XG4gICAgdGhpcy5zZXRDb29raWVfKHRoaXMuQ09OU1RBTlRTLkNPT0tJRV9SRU1PVkFMX1ZBTFVFLCBkb21haW4pO1xuICAgIGxldCBuZXdDb29raWVzID0gdGhpcy5hbGxDb29raWVzXygpO1xuICAgIGlmKGV4aXN0aW5nQ29va2llcy5sZW5ndGggPCBuZXdDb29raWVzLmxlbmd0aCkge1xuICAgICAgLy8gQ29va2llIHdhcyBzdWNjZXNzZnVsbHkgc2F2ZWQsIHNvIHdpcGUgaXQgYW5kIHB1dCBiYWNrIHRoZSBvbGQgY29va2llIGlmIHRoZXJlIHdhcyBvbmVcbiAgICAgIGlmKGxvc3RDb29raWUpIHtcbiAgICAgICAgdGhpcy5zZXRDb29raWVfKGxvc3RDb29raWUsIGRvbWFpbik7XG4gICAgICB9ZWxzZSB7XG4gICAgICAgIHRoaXMuY2xlYXJDb29raWVfKGRvbWFpbik7XG4gICAgICB9XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgLyoqXG4gICAqIFNldHMgYSBjb29raWUgd2l0aCBuYW1lIENPT0tJRV9QQVJBTSB0byBtYWtlIGl0IGV4cGlyZSBpbW1lZGlhdGVseS5cbiAgICogXG4gICAqIEBwcml2YXRlXG4gICAqIEBwYXJhbSB7c3RyaW5nPX0gY29va2llRG9tYWluIFRoZSBkb21haW4gb2YgdGhlIGNvb2tpZSB0byBjbGVhclxuICAgKiBAcGFyYW0ge3N0cmluZz19IGNvb2tpZVBhdGggVGhlIHBhdGggb2YgdGhlIGNvb2tpZSB0byBiZSBkZWxldGVkIChkZWZhdWx0cyB0byAnLycpXG4gICAqL1xuICBjbGVhckNvb2tpZV8oY29va2llRG9tYWluID0gJycsIGNvb2tpZVBhdGggPSAnLycpIHtcbiAgICBsZXQgY29va2llTmFtZSA9IHRoaXMuQ09OU1RBTlRTLkNPT0tJRV9QQVJBTTtcbiAgICBsZXQgZXBvY2ggPSBuZXcgRGF0ZSgwKTtcbiAgICBsZXQgY29va2llU3RyaW5nID0gY29va2llTmFtZSArICc9JyArIHRoaXMuQ09OU1RBTlRTLkNPT0tJRV9SRU1PVkFMX1ZBTFVFO1xuICAgIGNvb2tpZVN0cmluZyArPSAnO3BhdGg9JyArIGNvb2tpZVBhdGg7XG4gICAgY29va2llU3RyaW5nICs9ICc7ZXhwaXJlcz0nICsgZXBvY2gudG9VVENTdHJpbmcoKTtcbiAgICBpZihjb29raWVEb21haW4pIGNvb2tpZVN0cmluZyArPSAnO2RvbWFpbj0nICsgY29va2llRG9tYWluICsgJzsnO1xuICAgIGNvb2tpZVN0cmluZyArPSAnO3NhbWVzaXRlPU5vbmU7JztcbiAgICBpZiAodGhpcy53aW4ubG9jYXRpb24ucHJvdG9jb2wgPT09ICdodHRwczonKSB7XG4gICAgICBjb29raWVTdHJpbmcgKz0gJyBTZWN1cmUgJztcbiAgICB9XG4gICAgdGhpcy5kb20uY29va2llID0gY29va2llU3RyaW5nO1xuICB9XG5cbiAgLyoqXG4gICAqIFJlbW92ZXMgYSBDT09LSUVfUEFSQU0gY29va2llIGJ5IGRvbWFpbiwgdGhlbiByZXR1cm5zIGl0cyB2YWx1ZSBpZiBzdWNjZXNzZnVsIGFuZCBlbXB0eSBzdHJpbmdcbiAgICogb3RoZXJ3aXNlLlxuICAgKiBcbiAgICogQHByaXZhdGVcbiAgICogQHBhcmFtIHtzdHJpbmd9IGNvb2tpZURvbWFpbiBUaGUgZG9tYWluIHRvIHJlbW92ZSB0aGUgY29va2llIGZyb21cbiAgICogQHJldHVybiB7c3RyaW5nfSBUaGUgdmFsdWUgb2YgdGhlIGNvb2tpZSwgb3IgZW1wdHkgc3RyaW5nIGlmIG5vdCBmb3VuZC5cbiAgICovXG4gIHJlbW92ZUNvb2tpZUJ5RG9tYWluXyhjb29raWVEb21haW4pIHtcbiAgICBsZXQgcHJldlJlbWFpbmluZ0Nvb2tpZXMgPSB0aGlzLnBlcnNpc3RlbnRDb29raWVzXygpO1xuICAgIHRoaXMuY2xlYXJDb29raWVfKGNvb2tpZURvbWFpbik7XG4gICAgbGV0IHJlbWFpbmluZ0Nvb2tpZXMgPSB0aGlzLnBlcnNpc3RlbnRDb29raWVzXygpO1xuICAgIFxuICAgIGlmKHJlbWFpbmluZ0Nvb2tpZXMubGVuZ3RoIDwgcHJldlJlbWFpbmluZ0Nvb2tpZXMubGVuZ3RoKSB7XG4gICAgICBsZXQgcmVtb3ZlZFZhbHVlID0gdGhpcy5saXN0RGlmZmVyZW5jZV8ocHJldlJlbWFpbmluZ0Nvb2tpZXMsIHJlbWFpbmluZ0Nvb2tpZXMpWzBdIHx8ICcnO1xuICAgICAgcmV0dXJuIHJlbW92ZWRWYWx1ZTtcbiAgICB9XG4gICAgcmV0dXJuICcnO1xuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgdGhlIGxpc3QgZGlmZmVyZW5jZSBiZXR3ZWVuIGEgc3VwZXJsaXN0IGFuZCBzdWJsaXN0LCBhY2NvdW50aW5nIGZvciBudW1iZXIgb2ZcbiAgICogb2NjdXJyZW5jZXMuXG4gICAqIFxuICAgKiBAcHJpdmF0ZVxuICAgKiBAcGFyYW0geyFBcnJheTw/Pn0gc3VwZXJsaXN0IFRoZSBmdWxsIGFycmF5XG4gICAqIEBwYXJhbSB7IUFycmF5PD8+fSBzdWJsaXN0IFRoZSBzdWJhcnJheVxuICAgKiBAcmV0dXJuIHshQXJyYXk8Pz59IFRoZSBlbGVtZW50cyBpbiBzdXBlcnNldCB0aGF0IGFyZSBub3QgaW4gc3Vic2V0XG4gICAqL1xuICBsaXN0RGlmZmVyZW5jZV8oc3VwZXJsaXN0LCBzdWJsaXN0KSB7XG4gICAgbGV0IHN1cGVybGlzdENvcHkgPSBBcnJheS5mcm9tKHN1cGVybGlzdCk7XG4gICAgZm9yKGxldCBpID0gMDsgaSA8IHN1Ymxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICAgIGxldCBpbmRleCA9IHN1cGVybGlzdENvcHkuaW5kZXhPZihzdWJsaXN0W2ldKTtcbiAgICAgIGlmKGluZGV4ICE9PSAtMSkge1xuICAgICAgICBzdXBlcmxpc3RDb3B5LnNwbGljZShpbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBzdXBlcmxpc3RDb3B5O1xuICB9XG5cbiAgLyoqXG4gICAqIFJldHJpZXZlcyBhIGxpc3Qgb2YgdmFsdWVzIG9mIGNvb2tpZXMgd2l0aCB0aGUgbmFtZSBvZiBDT09LSUVfUEFSQU0gdGhhdCBhcmUgcHJlc2VudCBhbmQgbm90IFxuICAgKiBzZXQgdG8gYmUgcmVtb3ZlZCAoaS5lLiBoYXZpbmcgdGhlIHNwZWNpZmljIHZhbHVlIHRoaXMgc2NyaXB0IHVzZXMgdG8gaW5kaWNhdGUgYSByZW1vdmVkXG4gICAqIGNvb2tpZSkuXG4gICAqIFxuICAgKiBAcHJpdmF0ZVxuICAgKiBAcmV0dXJuIHshQXJyYXk8c3RyaW5nPn0gVGhlIG5vbi10ZW1wb3JhcnkgdmFsdWVzIGFzc29jaWF0ZWQgdG8gQ09PS0lFX1BBUkFNXG4gICAqL1xuICBwZXJzaXN0ZW50Q29va2llc18oKSB7XG4gICAgcmV0dXJuIHRoaXMuYWxsQ29va2llc18oKS5maWx0ZXIoXG4gICAgICB2YWwgPT4gdmFsICE9PSB0aGlzLkNPTlNUQU5UUy5DT09LSUVfUkVNT1ZBTF9WQUxVRSk7XG4gIH1cblxuICAvKipcbiAgICogUmV0cmlldmVzIGEgbGlzdCBvZiB2YWx1ZXMgb2YgY29va2llcyB3aXRoIHRoZSBuYW1lIG9mIENPT0tJRV9QQVJBTSB0aGF0IGFyZSBwcmVzZW50LlxuICAgKiBcbiAgICogQHByaXZhdGVcbiAgICogQHJldHVybiB7IUFycmF5PHN0cmluZz59IEFsbCB2YWx1ZXMgYXNzb2NpYXRlZCB0byBDT09LSUVfUEFSQU1cbiAgICovXG4gIGFsbENvb2tpZXNfKCkge1xuICAgIGxldCBjb29raWVOYW1lID0gdGhpcy5DT05TVEFOVFMuQ09PS0lFX1BBUkFNO1xuICAgIGxldCBhcnIgPSBbXTtcbiAgICB0aGlzLmZvckVhY2hDb29raWVOYW1lVmFsdWVfKChuYW1lLCB2YWx1ZSkgPT4ge1xuICAgICAgaWYobmFtZSA9PT0gY29va2llTmFtZSkge1xuICAgICAgICBhcnIucHVzaCh2YWx1ZSk7XG4gICAgICB9XG4gICAgfSk7XG4gICAgcmV0dXJuIGFycjtcbiAgfVxuXG4gIC8qKlxuICAgKiBSdW5zIG5hbWVWYWx1ZUZ1bmMgb24gZWFjaCBjb29raWUncyBrZXkgYW5kIHZhbHVlIChhZnRlciB0cmltbWluZyksIG9ubHkgaWYgdGhlIGtleSBhbmQgdmFsdWUgXG4gICAqIGFyZSBib3RoIHRydXRoeS5cbiAgICogXG4gICAqIEBwcml2YXRlXG4gICAqIEBwYXJhbSB7ZnVuY3Rpb24oc3RyaW5nLCBzdHJpbmcpfSBuYW1lVmFsdWVGdW5jIEEgZnVuY3Rpb24gdG8gcnVuIG9uIGVhY2ggY29va2llIGtleS12YWx1ZSBwYWlyXG4gICAqL1xuICBmb3JFYWNoQ29va2llTmFtZVZhbHVlXyhuYW1lVmFsdWVGdW5jKSB7XG4gICAgdGhpcy53aW4uZG9jdW1lbnQuY29va2llLnNwbGl0KCc7JykuZm9yRWFjaCgoY29va2llKSA9PiB7XG4gICAgICBsZXQga2V5VmFsdWUgPSBjb29raWUuc3BsaXQoJz0nKSxcbiAgICAgICAgICBrZXkgPSBrZXlWYWx1ZVswXSxcbiAgICAgICAgICB2YWx1ZSA9IGtleVZhbHVlWzFdO1xuXG4gICAgICBpZihrZXkgJiYgdmFsdWUpIHtcbiAgICAgICAgbmFtZVZhbHVlRnVuYyhrZXkudHJpbSgpLCB2YWx1ZS50cmltKCkpO1xuICAgICAgfVxuICAgIH0pXG4gIH1cblxuICAvKipcbiAgICogUnVucyBhIGZ1bmN0aW9uIG9uIGVhY2ggcG9zc2libGUgZG9tYWluIGluIG9yZGVyIG9mIGluY3JlYXNpbmcgc3BlY2lmaWNpdHkgKGUuZy4gLmNvbSxcbiAgICogLmV4YW1wbGUuY29tLCAuZnVsbC5leGFtcGxlLmNvbSkuIE5vdGUgdGhhdCBlbXB0eSBzdHJpbmcsIGluZGljYXRpbmcgdW5zZXQgZG9tYWluLCBpcyBpdGVyYXRlZFxuICAgKiB0aHJvdWdoIGF0IHRoZSBlbmQuIEEgdHJ1dGh5IHJldHVybiB2YWx1ZSBpbmRpY2F0ZXMgdG8gYnJlYWsgb3V0IG9mIHRoZSBsb29wLlxuICAgKiBcbiAgICogQHByaXZhdGVcbiAgICogQHBhcmFtIHtmdW5jdGlvbihzdHJpbmcpOiAoYm9vbGVhbnx1bmRlZmluZWQpfSBmdW5jIEEgZnVuY3Rpb24gdG8gY2FsbCBvbiBlYWNoIHBvc3NpYmxlIGRvbWFpbiBcbiAgICovXG4gIGZvckVhY2hEb21haW5JbmNyZWFzaW5nU3BlY2lmaWNpdHlfKGZ1bmMpIHtcbiAgICBsZXQgZXhpdGVkTG9vcCA9IGZhbHNlO1xuICAgIGxldCBkb21haW5QYXJ0cyA9IHRoaXMud2luLmxvY2F0aW9uLmhvc3RuYW1lLnNwbGl0KCcuJykucmV2ZXJzZSgpO1xuICAgIGxldCBjdXJyRG9tYWluID0gJyc7XG5cbiAgICBmb3IobGV0IGkgPSAwOyBpIDwgZG9tYWluUGFydHMubGVuZ3RoOyBpKyspIHtcbiAgICAgIGN1cnJEb21haW4gPSAnLicgKyBkb21haW5QYXJ0c1tpXSArIGN1cnJEb21haW47XG4gICAgICBpZihmdW5jKGN1cnJEb21haW4pKSB7XG4gICAgICAgIGV4aXRlZExvb3AgPSB0cnVlO1xuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICB9XG4gICAgaWYoIWV4aXRlZExvb3ApIGZ1bmMoJycpO1xuICB9XG5cbiAgLyoqXG4gICAqIFN0b3JlcyBhIHRyYWNraW5nIGNvb2tpZSBvbiB0aGUgdXNlcidzIGJyb3dzZXIgd2l0aCB0aGUgZ2l2ZW4gdmFsdWUgaW4gdGhlIHJvb3QgZG9tYWluLCBhbmRcbiAgICogcmVtb3ZlcyBmaXJzdCBwYXJ0eSBjb29raWVzIGZyb20gYWxsIG90aGVyIGRvbWFpbnMgKHdoaWNoIG1heSBiZSBwcmVzZW50IGZvciBsZWdhY3kgcmVhc29ucykuXG4gICAqXG4gICAqIEBwcml2YXRlXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBjb29raWVWYWx1ZSBUaGUgdmFsdWUgdG8gc2V0IGFzIHRoZSBmaXJzdCBwYXJ0eSBjb29raWVcbiAgICovXG4gIHNldENvb2tpZUFuZFJlbW92ZU9sZENvb2tpZXNfKGNvb2tpZVZhbHVlKSB7XG4gICAgbGV0IHJvb3REb21haW5SZWFjaGVkID0gZmFsc2U7XG4gICAgbGV0IHRvdGFsQ29va2llcyA9IHRoaXMuYWxsQ29va2llc18oKS5sZW5ndGg7XG4gICAgbGV0IG51bUNvb2tpZXNFbmNvdW50ZXJlZCA9IDA7XG4gICAgXG4gICAgLy8gSXRlcmF0ZSB1bnRpbCB3ZSBmaW5kIHRoZSB0b3Btb3N0IGRvbWFpbiAodGhlIHJvb3QgZG9tYWluKSwgd2hlcmUgd2Ugc2V0IHRoZSBjb29raWUsIFxuICAgIC8vIHRoZW4gY29udGludWUgaXRlcmF0aW5nLCBqdXN0IGRlbGV0aW5nIGFueSBjb29raWVzIHdlIGZpbmQgYWZ0ZXJ3YXJkcy5cbiAgICB0aGlzLmZvckVhY2hEb21haW5JbmNyZWFzaW5nU3BlY2lmaWNpdHlfKGRvbWFpbiA9PiB7XG4gICAgICBpZihyb290RG9tYWluUmVhY2hlZCkge1xuICAgICAgICBpZih0aGlzLnJlbW92ZUNvb2tpZUJ5RG9tYWluXyhkb21haW4pKSBudW1Db29raWVzRW5jb3VudGVyZWQrKztcbiAgICAgIH1lbHNlIHtcbiAgICAgICAgaWYodGhpcy5jYW5TZXRDb29raWVXaXRoRG9tYWluXyhkb21haW4pKSB7XG4gICAgICAgICAgLy8gSW4gcm9vdCBkb21haW4sIHNvIHNldCBjb29raWVcbiAgICAgICAgICBpZih0aGlzLnJlbW92ZUNvb2tpZUJ5RG9tYWluXyhkb21haW4pKSBudW1Db29raWVzRW5jb3VudGVyZWQrKztcbiAgICAgICAgICB0aGlzLnNldENvb2tpZV8oY29va2llVmFsdWUsIGRvbWFpbik7XG4gICAgICAgICAgcm9vdERvbWFpblJlYWNoZWQgPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmKG51bUNvb2tpZXNFbmNvdW50ZXJlZCA+PSB0b3RhbENvb2tpZXMgJiYgcm9vdERvbWFpblJlYWNoZWQpIHtcbiAgICAgICAgLy8gQnJlYWsgaWYgd2UndmUgYWxyZWFkeSBlbmNvdW50ZXJlZCBldmVyeSBjb29raWUgYW5kIHdlIGFscmVhZHkgc2V0IG9uZSBpbiByb290IGRvbWFpblxuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIC8qKlxuICAgICogRmlyZSBhIGxpc3RpbmdzIGNvbnZlcnNpb24gY2xpY2sgZXZlbnQgb25jZS4gVGhpcyBldmVudCBtdXN0IG5vdCBiZSBmaXJlZCBiZWZvcmUgdGhlIHVzZXJcbiAgICAqIG9wdHMgaW4gdG8gY29udmVyc2lvbiB0cmFja2luZy5cbiAgICAqL1xuICBfZmlyZUxpc3RpbmdzVGFnSWZTaG91bGQoKSB7XG4gICAgaWYgKHRoaXMubGlzdGluZ3NDbGlja0ZpcmVkIHx8ICF0aGlzLmNvbnZlcnNpb25UcmFja2luZ0VuYWJsZWQgfHwgIXRoaXMueV9zb3VyY2UpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBsZXQgY29va2llVmFsdWUgPSB0aGlzLmZldGNoQ29va2llXygpO1xuICAgIGlmICghY29va2llVmFsdWUpIHtcbiAgICAgIGNvb2tpZVZhbHVlID0gdGhpcy5nZW5lcmF0ZVJhbmRvbUNvb2tpZV8oKS50b1N0cmluZygpO1xuICAgIH1cbiAgICB0aGlzLnNldENvb2tpZUFuZFJlbW92ZU9sZENvb2tpZXNfKGNvb2tpZVZhbHVlKTtcblxuXG4gICAgY29uc3QgZGF0YSA9IHtcbiAgICAgIHlfc291cmNlOiB0aGlzLnlfc291cmNlLFxuICAgICAgcmVmZXJyZXI6IGRvY3VtZW50LnJlZmVycmVyLFxuICAgICAgbG9jYXRpb246IHdpbmRvdy5sb2NhdGlvbi5ocmVmLFxuICAgICAgW3RoaXMuQ09OU1RBTlRTLkNPT0tJRV9QQVJBTV06IGNvb2tpZVZhbHVlXG4gICAgfTtcblxuICAgIGNvbnN0IHVybCA9IHRoaXMuX2dldFRyYWNrZXJVcmwoY29udmVyc2lvbkRvbWFpbiwgbGlzdGluZ3NFbmRwb2ludCwgZGF0YSk7XG5cbiAgICB0aGlzLmZpcmUodXJsKTtcbiAgICB0aGlzLmxpc3RpbmdzQ2xpY2tGaXJlZCA9IHRydWU7XG4gIH1cblxuICAvKipcbiAgICogQnVpbGQgYSBxdWVyeSBzdHJpbmcgZnJvbSB0aGUgZ2l2ZW4gZGF0YVxuICAgKlxuICAgKiBAcGFyYW0ge09iamVjdH0gZGF0YSBUaGUgZGF0YSB0byBiZSBzZXJpYWxpemVkIGluIHRoZSBxdWVyeVxuICAgKiBAcmV0dXJuIHtzdHJpbmd9IFRoZSBkYXRhIGFzIGEgcXVlcnkgc3RyaW5nLCAna2V5PXZhbHVlJyBqb2luZWQgYnkgJyYnXG4gICAqL1xuICBfYnVpbGRRdWVyeVN0cmluZyhkYXRhKSB7XG4gICAgcmV0dXJuIE9iamVjdC5lbnRyaWVzKGRhdGEpXG4gICAgICAuZmlsdGVyKChba2V5XSkgPT4ga2V5KVxuICAgICAgLm1hcCgoW2tleSwgdmFsdWVdKSA9PiB7XG4gICAgICAgIHJldHVybiAoQXJyYXkuaXNBcnJheSh2YWx1ZSkgPyB2YWx1ZSA6IFt2YWx1ZV0pXG4gICAgICAgICAgLm1hcCh2YWwgPT4ga2V5ICsgJz0nICsgZW5jb2RlVVJJQ29tcG9uZW50KHZhbCA9PT0gdW5kZWZpbmVkID8gJycgOiB2YWwpKVxuICAgICAgICAgIC5qb2luKCcmJylcbiAgICAgIH0pXG4gICAgICAuam9pbignJicpO1xuICB9XG5cbiAgLyoqXG4gICAqIEdldCB0aGUgVVJMIGZvciBhbiBhbmFseXRpY3MgZXZlbnRcbiAgICpcbiAgICogQHBhcmFtIHtzdHJpbmd9IGRvbWFpbiBUaGUgZG9tYWluIG9mIHRoZSBVUkxcbiAgICogQHBhcmFtIHtzdHJpbmd9IGVuZHBvaW50IFRoZSBwYXRoIGFmdGVyIHRoZSBkb21haW5cbiAgICogQHBhcmFtIHtPYmplY3R9IGRhdGEgVGhlIGRhdGEgdG8gYmUgc2VyaWFsaXplZCBpbiB0aGUgcXVlcnlcbiAgICogQHJldHVybiB7c3RyaW5nfSBUaGUgZnVsbCBVUkxcbiAgICovXG4gIF9nZXRUcmFja2VyVXJsKGRvbWFpbiwgZW5kcG9pbnQsIGRhdGEpIHtcbiAgICBjb25zdCBxdWVyeVN0cmluZyA9IHRoaXMuX2J1aWxkUXVlcnlTdHJpbmcoZGF0YSk7XG4gICAgcmV0dXJuIGBodHRwczovLyR7ZG9tYWlufS8ke2VuZHBvaW50fT8ke3F1ZXJ5U3RyaW5nfWA7XG4gIH1cblxuICAvKipcbiAgICogR2V0IHRoZSBVUkwgcXVlcnkgcGFyYW1ldGVycyBmcm9tIHdpbmRvdy5sb2NhdGlvbi5zZWFyY2hcbiAgICpcbiAgICogQHJldHVybiB7T2JqZWN0fSBUaGUgVVJMIHBhcmFtZXRlcnNcbiAgICovXG4gIF9nZXRRdWVyeVBhcmFtcygpIHtcbiAgICByZXR1cm4gd2luZG93LmxvY2F0aW9uLnNlYXJjaC5zdWJzdHJpbmcoMSlcbiAgICAgIC5zcGxpdCgnJicpXG4gICAgICAubWFwKHBhcmFtID0+IHBhcmFtLnNwbGl0KCc9JykpXG4gICAgICAucmVkdWNlKChwYXJhbXMsIFtrZXksIHZhbHVlXSkgPT4ge1xuICAgICAgICBjb25zdCBkZWNvZGVkVmFsID0gdmFsdWUgJiYgZGVjb2RlVVJJQ29tcG9uZW50KHZhbHVlKTtcbiAgICAgICAgaWYgKGtleSBpbiBwYXJhbXMpIHtcbiAgICAgICAgICBpZiAoQXJyYXkuaXNBcnJheShwYXJhbXNba2V5XSkpIHtcbiAgICAgICAgICAgIHBhcmFtc1trZXldLnB1c2goZGVjb2RlZFZhbCk7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHBhcmFtc1trZXldID0gW3BhcmFtc1trZXldLCBkZWNvZGVkVmFsXTtcbiAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcGFyYW1zW2tleV0gPSBkZWNvZGVkVmFsO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBwYXJhbXM7XG4gICAgICB9LCB7fSk7XG4gIH1cblxuICBvbmNlKHRhc2spIHtcbiAgICBpZiAoIXRhc2spXG4gICAgICByZXR1cm47XG5cbiAgICBsZXQgaW52b2tlZCA9IGZhbHNlO1xuICAgIHJldHVybiAoKSA9PiB7XG4gICAgICBpZiAoaW52b2tlZClcbiAgICAgICAgcmV0dXJuO1xuICAgICAgaW52b2tlZCA9IHRydWU7XG4gICAgICB0YXNrKCk7XG4gICAgfTtcbiAgfVxuXG4gIHNlbmQoZGF0YSwgY2IpIHtcbiAgICB0aGlzLmZpcmUodGhpcy5waXhlbFVSTChkYXRhKSwgY2IpO1xuICB9XG5cbiAgcmVnaXN0ZXJPYnNlcnZlckZvclNlbGVjdG9yKGV2ZW50VHlwZSwgc2VsZWN0b3IsIGV2ZW50TmFtZSkge1xuICAgIHRoaXMucmVnaXN0ZXJPYnNlcnZlcihldmVudFR5cGUpO1xuICAgIC8vIEdFTkVSQVRPUiBUT0RPOiBEbyB3ZSB3YW50IHRvIGJlIGFibGUgdG8gdHJhY2sgbXVsdGlwbGUgZXZlbnRzIGZvciB0aGUgc2FtZSBzZWxlY3Rvcj9cbiAgICBTZWxlY3RvclRyYWNraW5nW3NlbGVjdG9yXSA9IGV2ZW50TmFtZTtcbiAgfVxuXG4gIHJlZ2lzdGVyT2JzZXJ2ZXIoZXZlbnRUeXBlKSB7XG4gICAgaWYgKCF0aGlzLnJlZ2lzdGVyZWRMaXN0ZW5lcnMuaGFzT3duUHJvcGVydHkoZXZlbnRUeXBlKSkge1xuICAgICAgLy8gdGhpcyB1c2VkIHRvIGNhbGwgYSBwb2x5ZmlsbCBhdCB0aGUgdG9wIG9mIHRoZSBwYWdlIHRoYXQgd2FzIG1pZ3JhdGVkIHRvXG4gICAgICAvLyB0aGUgUG9seWZpbGxzIENvbXBvbmVudHMgKHRlc3QgaW4gSUUpXG4gICAgICB0aGlzLmRvbS5ib2R5LmFkZEV2ZW50TGlzdGVuZXIoZXZlbnRUeXBlLCB0aGlzLmhhbmRsZUV2ZW50LmJpbmQodGhpcykpO1xuICAgICAgdGhpcy5yZWdpc3RlcmVkTGlzdGVuZXJzW2V2ZW50VHlwZV0gPSB0cnVlO1xuICAgIH1cbiAgfVxuXG4gIHVuUmVnaXN0ZXJPYnNlcnZlcihldmVudFR5cGUsIHNlbGVjdG9yLCBldmVudE5hbWUpIHtcbiAgICBpZiAoU2VsZWN0b3JUcmFja2luZy5oYXNPd25Qcm9wZXJ0eShzZWxlY3RvcikpIHtcbiAgICAgIGRlbGV0ZSBTZWxlY3RvclRyYWNraW5nW3NlbGVjdG9yXTtcbiAgICB9XG4gICAgLy8gR0VORVJBVE9SIFRPRE86IGNvb3JkaW5hdGUgcmVtb3ZlIG9mIHNlbGVjdG9yIHRyYWNraW5nIHdpdGggdW5yZWdpc3RlcmluZyBldmVudCBsaXN0ZW5lclxuICB9XG5cbiAgcHJvY2Vzc0NvbW1hbmQoY29tbWFuZCwgLi4uYXJncykge1xuICAgIGlmIChhcmd1bWVudHMubGVuZ3RoID09PSAwKSB7XG4gICAgICB0aHJvdyAnUmVjZWl2ZWQgQW5hbHl0aWNzIENvbW1hbmQgd2l0aCBubyBBcmd1bWVudHMnO1xuICAgIH1cblxuICAgIGlmICh0eXBlb2YgdGhpc1tjb21tYW5kXSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgcmV0dXJuIHRoaXNbY29tbWFuZF0oLi4uYXJncyk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRocm93IGBVbmtub3duIGNvbW1hbmQgJHtjb21tYW5kfWA7XG4gICAgfVxuICB9XG5cbiAgcGl4ZWxVUkwob3B0aW9uYWxEYXRhKSB7XG4gICAgY29uc3QgY29tYmluZWREYXRhID0gT2JqZWN0LmFzc2lnbihcbiAgICAgIHtcbiAgICAgICAgcHJvZHVjdDogJ3NpdGVzJyxcbiAgICAgICAgdjogdGhpcy5zZWVkKClcbiAgICAgIH0sXG4gICAgICB0aGlzLnNpdGVEYXRhLFxuICAgICAgb3B0aW9uYWxEYXRhXG4gICAgKTtcblxuICAgIGlmICh0aGlzLmNvbnZlcnNpb25UcmFja2luZ0VuYWJsZWQpIHtcbiAgICAgIGxldCBjb29raWVWYWx1ZSA9IHRoaXMuZmV0Y2hDb29raWVfKCk7XG4gICAgICBpZiAoIWNvb2tpZVZhbHVlKSB7XG4gICAgICAgIGNvb2tpZVZhbHVlID0gdGhpcy5nZW5lcmF0ZVJhbmRvbUNvb2tpZV8oKS50b1N0cmluZygpO1xuICAgICAgfVxuICAgICAgdGhpcy5zZXRDb29raWVBbmRSZW1vdmVPbGRDb29raWVzXyhjb29raWVWYWx1ZSk7XG4gICAgICBjb21iaW5lZERhdGFbdGhpcy5DT05TVEFOVFMuQ09PS0lFX1BBUkFNXSA9IGNvb2tpZVZhbHVlO1xuICAgIH1cblxuICAgIGlmIChvcHRpb25hbERhdGEuZXZlbnRUeXBlKSB7XG4gICAgICBQcmludEV2ZW50KG9wdGlvbmFsRGF0YS5ldmVudFR5cGUpO1xuICAgIH1cblxuICAgIGNvbnN0IGFuYWx5dGljc0RvbWFpbiA9IHRoaXMuY29udmVyc2lvblRyYWNraW5nRW5hYmxlZCA/IGNvbnZlcnNpb25Eb21haW4gOiBldmVudERvbWFpbjtcblxuICAgIHJldHVybiB0aGlzLl9nZXRUcmFja2VyVXJsKGFuYWx5dGljc0RvbWFpbiwgZXZlbnRFbmRwb2ludCwgY29tYmluZWREYXRhKTtcbiAgfVxuXG4gIGdldENvbnZlcnNpb25QYXJhbXMoZWwpIHtcbiAgICBmb3IgKGxldCBjdXJyZW50ID0gZWw7IGN1cnJlbnQgIT09IG51bGw7IGN1cnJlbnQgPSBjdXJyZW50LnBhcmVudE5vZGUpIHtcbiAgICAgIGlmICghY3VycmVudC5kYXRhc2V0KSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICBpZiAoY3VycmVudC5kYXRhc2V0LnlhQ2lkKSB7XG4gICAgICAgIGNvbnN0IHBhcmFtcyA9IHtcbiAgICAgICAgICBjaWQ6IGN1cnJlbnQuZGF0YXNldC55YUNpZFxuICAgICAgICB9O1xuXG4gICAgICAgIHJldHVybiBwYXJhbXM7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgLy8gcG9ydGVkIGZyb20gaHR0cHM6Ly9hc3NldHMuc2l0ZXNjZG4ubmV0L3l0YWcveXRhZy5taW4uanNcbiAgY29udmVyc2lvblVSTChkYXRhKSB7XG4gICAgcmV0dXJuIHRoaXMuX2dldFRyYWNrZXJVcmwoY29udmVyc2lvbkRvbWFpbiwgY29udmVyc2lvbkVuZHBvaW50LCBkYXRhKTtcbiAgfVxuXG4gIHNlZWQoKSB7XG4gICAgcmV0dXJuIERhdGUubm93KCkgKyBNYXRoLmZsb29yKDEwMDAgKiBNYXRoLnJhbmRvbSgpKTtcbiAgfVxuXG4gIGZpcmUocGl4ZWwsIGNiKSB7XG4gICAgaWYgKCF0aGlzLmxvYWRlZCgpKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXG4gICAgICAgIGBBdHRlbXB0ZWQgdG8gb2JzZXJ2ZSBmaXJlICR7cGl4ZWx9IG9uICR7ZXZlbnQudHlwZX0gYmVmb3JlIGluaXRpYWxpemluZyBZZXh0LkFuYWx5dGljcy5TaXRlRGF0YWAsXG4gICAgICApO1xuICAgIH1cblxuICAgIGNvbnN0IHB4ID0gdGhpcy5kb20uY3JlYXRlRWxlbWVudCgnaW1nJyk7XG4gICAgcHguc3JjID0gcGl4ZWw7XG4gICAgcHguc3R5bGUud2lkdGggPSAnMCc7XG4gICAgcHguc3R5bGUuaGVpZ2h0ID0gJzAnO1xuICAgIHB4LnN0eWxlLnBvc2l0aW9uID0gJ2Fic29sdXRlJztcbiAgICBweC5hbHQgPSAnJztcblxuICAgIGlmIChjYikge1xuICAgICAgLy8gVGhlIGNhbGxiYWNrIHBhc3NlZCB0byB0aGlzIGZ1bmN0aW9uIHNob3VsZCBiZSBpbnZva2VkIGFmdGVyIHRoZSBwaXhlbCBoYXMgc3VjY2Vzc2Z1bGx5XG4gICAgICAvLyBmaXJlZCBhbmQgd2UncmUgY29uZmlkZW50IHRoZSB0cmFja2luZyBzZXJ2ZXIgaGFzIHJlY2VpdmVkIHRoZSByZXF1ZXN0LiAgVGhlIG1vc3QgY29tbW9uXG4gICAgICAvLyB1c2Ugb2YgdGhlIGNhbGxiYWNrIGlzIHRvIG5hdmlnYXRlIHRoZSB1c2VyIGFnZW50IGF3YXkgZnJvbSB0aGUgY3VycmVudCBkb21haW4gLSBzYXksIGEgY2xpY2tcbiAgICAgIC8vIG9uIGFuIGFuY2hvciB0YWcgd2l0aCBhbiBvZmYtZG9tYWluIGhyZWYuICBJbiB0aG9zZSBzaXR1YXRpb25zLCB3ZSB3YW50IHRvICdkZWxheScgdGhlXG4gICAgICAvLyBhY3R1YWwgYnJvd3NlciBuYXZpZ2F0aW9uIGJlY2F1c2UgdGhlIGFjdCBvZiBtb3ZpbmcgdG8gYW5vdGhlciBkb21haW4gd2lsbCBjYXVzZSBzb21lXG4gICAgICAvLyB1c2VyIGFnZW50cyB0byBjYW5jZWwgYWxsIGluLWZsaWdodCBuZXR3b3JrIHJlcXVlc3RzIHRoYXQgdGhlIGN1cnJlbnQgcGFnZSBvcmlnaW5hdGVkLFxuICAgICAgLy8gaW5jbHVkaW5nIGFuIGltYWdlIGxvYWQgbGlrZSB0aGUgb25lIHdlIHVzZSBoZXJlIGZvciBhbmFseXRpY3MgdHJhbnNwb3J0LlxuICAgICAgLy9cbiAgICAgIC8vIFRoYXQgc2FpZCwgaXQncyBjcml0aWNhbCB0aGF0IHRoZSBjYWxsYmFjayBpcyBfZXZlbnR1YWxseV8gaW52b2tlZCBzaW5jZSBpdCByZXByZXNlbnRzXG4gICAgICAvLyBwcmVzZXJ2YXRpb24gb2YgdGhlIHVzZXIncyBpbnRlbnQgKHRvIG5hdmlnYXRlIGF3YXkpLiAgYG9ubG9hZGAgYW5kIGBvbmVycm9yYCBwcm92aWRlXG4gICAgICAvLyBtb3N0IG9mIHRoZSBjb3ZlcmFnZSB3ZSBuZWVkIC0gdGhlIG1ham9yaXR5IG9mIHRoZSB0aW1lIHRoZSBwaXhlbCBzaG91bGQgbG9hZCBpbiA8IDEwMG1zLFxuICAgICAgLy8gYW5kIGluIHRoZSB1bmxpa2VseSBzY2VuYXJpbyB0aGUgcGl4ZWwgc2VydmVyIHdhcyB1bmF2YWlsYWJsZSB0aGUgZXJyb3Igc2hvdWxkIGhhcHBlblxuICAgICAgLy8gcXVpY2tseS4gIEhvd2V2ZXIsIHRoZXJlIGFyZSBzaXR1YXRpb25zIGluIHdoaWNoIHRoZSB1c2VyLWFnZW50IGNvdWxkIGNvbm5lY3QgdG8gdGhlXG4gICAgICAvLyBwaXhlbCBzZXJ2ZXIgYnV0IGxpc3RlbiBpbmRlZmluaXRlbHkgZm9yIGEgcmVzcG9uc2UgLSBoaWdoIGxvYWQgb3Igc3R1Y2sgdGhyZWFkcywgZm9yXG4gICAgICAvLyBleGFtcGxlLiAgVGhlIHNldFRpbWVvdXQoKSwgdGhlcmVmb3JjZSwgYWN0cyBhcyBhbiBhYnNvbHV0ZSBmYWlsc2FmZS5cbiAgICAgIC8vXG4gICAgICAvLyBUaGUgb25jZSB3cmFwcGVyIGVuc3VyZXMgdGhhdCB0aGUgY2IgZnVuY3Rpb24gaXMgb25seSBpbnZva2VkIGEgc2luZ2xlIHRpbWUuXG4gICAgICBjb25zdCBvbmNlQ0IgPSB0aGlzLm9uY2UoY2IpO1xuICAgICAgcHgub25sb2FkID0gb25jZUNCO1xuICAgICAgcHgub25lcnJvciA9IG9uY2VDQjtcbiAgICAgIHNldFRpbWVvdXQob25jZUNCLCAxMDAwKTtcbiAgICB9XG5cbiAgICB0aGlzLmRvbS5ib2R5LmFwcGVuZENoaWxkKHB4KTtcbiAgfVxuXG4gIGZpcmVXaXRoRXZlbnQocGl4ZWwsIGV2ZW50KSB7XG4gICAgaWYgKHRoaXMuZGVsYXlOYXZpZ2F0aW9uKSB7XG4gICAgICBOYXZpZ2F0ZUFmdGVyQWN0aW9uSWZOZWVkZWQoXG4gICAgICAgIGRvbmUgPT4gdGhpcy5maXJlKHBpeGVsLCBkb25lKSxcbiAgICAgICAgZXZlbnRcbiAgICAgICk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuZmlyZShwaXhlbCk7XG4gICAgfVxuICB9XG5cbiAgaGFuZGxlQ29udmVyc2lvbihldmVudCkge1xuICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICBjb25zdCBwYXJhbXMgPSB0aGlzLmdldENvbnZlcnNpb25QYXJhbXMoZXZlbnQudGFyZ2V0KTtcbiAgICAgIGlmICghcGFyYW1zKSB7IHJldHVybiByZXNvbHZlKCk7IH1cblxuICAgICAgT2JqZWN0LmFzc2lnbihwYXJhbXMsIHtcbiAgICAgICAgdjogRGF0ZS5ub3coKSArIE1hdGguZmxvb3IoMUUzICogTWF0aC5yYW5kb20oKSlcbiAgICAgIH0pO1xuXG4gICAgICBjb25zdCB1cmwgPSB0aGlzLmNvbnZlcnNpb25VUkwocGFyYW1zKTtcblxuICAgICAgdGhpcy5maXJlKHVybCwgcmVzb2x2ZSk7XG4gICAgfSk7XG4gIH1cblxuICBhc3luYyBoYW5kbGVFdmVudChldmVudCkge1xuICAgIGZvciAoY29uc3Qgc2VsZWN0b3IgaW4gU2VsZWN0b3JUcmFja2luZykge1xuICAgICAgaWYgKFNlbGVjdG9yVHJhY2tpbmcuaGFzT3duUHJvcGVydHkoc2VsZWN0b3IpKSB7XG4gICAgICAgIGlmIChTZWFyY2hFbGVtZW50Rm9yU2VsZWN0b3IoZXZlbnQudGFyZ2V0LCBzZWxlY3RvcikpIHtcbiAgICAgICAgICB0aGlzLmZpcmVXaXRoRXZlbnQodGhpcy5waXhlbFVSTCh7IGV2ZW50VHlwZTogU2VsZWN0b3JUcmFja2luZ1tzZWxlY3Rvcl0gfSksIGV2ZW50KTtcbiAgICAgICAgICByZXR1cm47IC8vIHByZXZlbnQgZG91YmxlIGNvdW50aW5nXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBjb25zdCBldmVudE5hbWUgPSB0aGlzLkNhbGNFdmVudE5hbWVGb3JFbGVtZW50KGV2ZW50LnRhcmdldCk7XG4gICAgaWYgKCFldmVudE5hbWUpIHJldHVybjsgLy8gY291bGQgbm90IHRyYWNrXG5cbiAgICBpZiAodGhpcy5jb252ZXJzaW9uVHJhY2tpbmdFbmFibGVkKSB7XG4gICAgICBhd2FpdCB0aGlzLmhhbmRsZUNvbnZlcnNpb24oZXZlbnQpO1xuICAgIH1cblxuICAgIHRoaXMuZmlyZVdpdGhFdmVudCh0aGlzLnBpeGVsVVJMKHsgZXZlbnRUeXBlOiBldmVudE5hbWUgfSksIGV2ZW50KTtcbiAgfVxuXG4gIGRvTm90VHJhY2tFbmFibGVkKCkge1xuICAgIHJldHVybiB0aGlzLndpbi5kb05vdFRyYWNrID09ICcxJ1xuICAgICAgfHwgdGhpcy53aW4ubmF2aWdhdG9yLmRvTm90VHJhY2sgPT0gJ3llcydcbiAgICAgIHx8IHRoaXMud2luLm5hdmlnYXRvci5kb05vdFRyYWNrID09ICcxJ1xuICAgICAgfHwgdGhpcy53aW4ubmF2aWdhdG9yLm1zRG9Ob3RUcmFjayA9PSAnMSc7XG4gIH1cbn1cblxuZXhwb3J0IHtcbiAgQW5hbHl0aWNzXG59O1xuIiwibGV0IHBhcmFtID0gJ3hZZXh0RGVidWcnO1xuXG5leHBvcnQgY2xhc3MgRGVidWcge1xuICBzdGF0aWMgaGFzUXVlcnlQYXJhbSgpIHtcbiAgICBpZiAoJ1VSTCcgaW4gd2luZG93ICYmIHR5cGVvZiBVUkwgPT09IFwiZnVuY3Rpb25cIikge1xuICAgICAgbGV0IHBhcmFtcyA9IG5ldyBVUkwod2luZG93LmxvY2F0aW9uLmhyZWYpLnNlYXJjaFBhcmFtcztcbiAgICAgIHJldHVybiBwYXJhbXMgJiYgcGFyYW1zLmdldChwYXJhbSkgPT0gJ3RydWUnO1xuICAgIH1cbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzdGF0aWMgZW5hYmxlKCkge1xuICAgIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5jbGFzc0xpc3QuYWRkKHBhcmFtKTtcbiAgfVxuXG4gIHN0YXRpYyBkaXNhYmxlKCkge1xuICAgIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKHBhcmFtKTtcbiAgfVxuXG4gIHN0YXRpYyBpc0VuYWJsZWQoKSB7XG4gICAgbGV0IGVuYWJsZWQgPSB0aGlzLmhhc1F1ZXJ5UGFyYW0oKTtcbiAgICBpZiAoZW5hYmxlZCkge1xuICAgICAgdGhpcy5lbmFibGUoKTtcbiAgICB9XG4gICAgcmV0dXJuIGVuYWJsZWQ7XG4gIH1cbn1cbiIsImZ1bmN0aW9uIERlbGF5TmF2aWdhdGlvbihhY3Rpb24sIGV2ZW50KSB7XG4gICAgaWYgKCFldmVudCkge1xuICAgICAgYWN0aW9uKCk7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGxldCBlbCA9IGV2ZW50LnNyY0VsZW1lbnQgfHwgZXZlbnQudGFyZ2V0O1xuICBcbiAgICAvKiBMb29wIHVwIHRoZSBET00gdHJlZSB0aHJvdWdoIHBhcmVudCBlbGVtZW50cyBpZiBjbGlja2VkIGVsZW1lbnQgaXMgbm90IGEgbGluayAoZWc6IGFuIGltYWdlIGluc2lkZSBhIGxpbmspICovXG4gICAgd2hpbGUgKGVsICYmXG4gICAgKHR5cGVvZiBlbC50YWdOYW1lID09ICd1bmRlZmluZWQnIHx8IGVsLnRhZ05hbWUudG9Mb3dlckNhc2UoKSAhPSAnYScgfHxcbiAgICAgICFlbC5ocmVmKSkge1xuICAgICAgZWwgPSBlbC5wYXJlbnROb2RlO1xuICAgIH1cbiAgXG4gICAgbGV0IHdpbGxGaXJlID0gZmFsc2U7XG4gICAgY29uc3QgcmlnaHRDbGljayA9IGV2ZW50LndoaWNoID09PSAzO1xuICBcbiAgICAvKiBpZiBhIGxpbmsgd2l0aCB2YWxpZCBocmVmIGhhcyBiZWVuIGNsaWNrZWQgKi9cbiAgICBpZiAoZWwgJiYgZWwuaHJlZiAmJiBlbC5kYXRhc2V0LnlhTm9XYWl0ICE9PSAndHJ1ZScgJiYgIXJpZ2h0Q2xpY2sgICYmICFldmVudC5kZWZhdWx0UHJldmVudGVkKSB7XG4gICAgICBjb25zdCBsaW5rID0gZWwuaHJlZjtcbiAgXG4gICAgICAvKiBPbmx5IGlmIGl0IGlzIGFuIGV4dGVybmFsIGxpbmsgKi9cbiAgICAgIGlmIChcbiAgICAgICAgbGluay5pbmRleE9mKGxvY2F0aW9uLmhvc3QpID09IC0xICYmXG4gICAgICAgICEoZWwucHJvdG9jb2wgPT0gJ21haWx0bzonIHx8IGVsLnByb3RvY29sID09ICd0ZWw6JyB8fFxuICAgICAgICAgIGVsLnByb3RvY29sID09ICdqYXZhc2NyaXB0OicpXG4gICAgICApIHtcbiAgICAgICAgLyogSXMgYWN0dWFsIHRhcmdldCBzZXQgYW5kIG5vdCBfKHNlbGZ8cGFyZW50fHRvcCk/ICovXG4gICAgICAgIGxldCB0YXJnZXQgPSBlbC50YXJnZXQgJiYgIWVsLnRhcmdldC5tYXRjaCgvXl8oc2VsZnxwYXJlbnR8dG9wKSQvaSlcbiAgICAgICAgICA/IGVsLnRhcmdldFxuICAgICAgICAgIDogZmFsc2U7XG4gIFxuICAgICAgICAvKiBBc3N1bWUgYSB0YXJnZXQgaWYgQ3RybHxzaGlmdHxtZXRhLWNsaWNrICovXG4gICAgICAgIGlmIChcbiAgICAgICAgICBldmVudC5jdHJsS2V5IHx8IGV2ZW50LnNoaWZ0S2V5IHx8IGV2ZW50Lm1ldGFLZXkgfHwgZXZlbnQud2hpY2ggPT0gMlxuICAgICAgICApIHtcbiAgICAgICAgICB0YXJnZXQgPSAnX2JsYW5rJztcbiAgICAgICAgfVxuICBcbiAgICAgICAgaWYgKCF0YXJnZXQpIHtcbiAgICAgICAgICB3aWxsRmlyZSA9IHRydWU7XG4gIFxuICAgICAgICAgIGxldCBoYnJ1biA9IGZhbHNlO1xuICAgICAgICAgIC8vIHRyYWNrZXIgaGFzIG5vdCB5ZXQgcnVuXG4gICAgICAgICAgLyogSGl0Q2FsbGJhY2sgdG8gb3BlbiBsaW5rIGluIHNhbWUgd2luZG93IGFmdGVyIHRyYWNrZXIgKi9cbiAgICAgICAgICBjb25zdCBoaXRCYWNrID0gZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAvKiBydW4gb25jZSBvbmx5ICovXG4gICAgICAgICAgICBpZiAoaGJydW4pXG4gICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIGhicnVuID0gdHJ1ZTtcbiAgICAgICAgICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gbGluaztcbiAgICAgICAgICB9O1xuICAgICAgICAgIC8qIFByZXZlbnQgc3RhbmRhcmQgY2xpY2ssIHRyYWNrIHRoZW4gb3BlbiAqL1xuICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0XG4gICAgICAgICAgICA/IGV2ZW50LnByZXZlbnREZWZhdWx0KClcbiAgICAgICAgICAgIDogZXZlbnQucmV0dXJuVmFsdWUgPSBmYWxzZTtcbiAgICAgICAgICAvKiBzZW5kIGV2ZW50IHdpdGggY2FsbGJhY2sgKi9cbiAgICAgICAgICBhY3Rpb24oaGl0QmFjayk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIFxuICAgIGlmICghd2lsbEZpcmUpXG4gICAgICBhY3Rpb24oKTtcbiAgfVxuICBcbiAgZXhwb3J0IHtcbiAgICBEZWxheU5hdmlnYXRpb25cbiAgfTtcbiAgIiwiaW1wb3J0IHsgRGVidWcgfSBmcm9tICcuL0RlYnVnLmpzJztcblxubGV0IFNlbGVjdG9yVHJhY2tpbmcgPSB7fTtcblxuZnVuY3Rpb24gR2V0UGFyYW1zKHVybCkge1xuICBsZXQgcXVlcmllcyA9IHt9O1xuICBsZXQgcGFydHMgPSB1cmwuc3BsaXQoJz8nKTtcbiAgaWYgKHBhcnRzLmxlbmd0aCA9PSAyKSB7XG4gICAgcGFydHNbMV0uc3BsaXQoJyYnKS5mb3JFYWNoKChwYWlyKT0+e1xuICAgICAgbGV0IHBhcmFtcyA9IHBhaXIuc3BsaXQoJz0nKTtcbiAgICAgIHF1ZXJpZXNbcGFyYW1zWzBdXSA9IHBhcmFtc1sxXTtcbiAgICB9KTtcbiAgfVxuICByZXR1cm4gcXVlcmllcztcbn1cblxuZnVuY3Rpb24gQ2hlY2tBbmNob3JRdWVyaWVzKGFuY2hvcikge1xuICBpZiAoYW5jaG9yICYmIGFuY2hvci5ocmVmKSB7XG4gICAgbGV0IGVOYW1lID0gR2V0UGFyYW1zKGFuY2hvci5ocmVmKVsneWEtdHJhY2snXTtcbiAgICBpZiAoZU5hbWUpIHtcbiAgICAgIHJldHVybiBlTmFtZTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIGZhbHNlO1xufVxuXG5mdW5jdGlvbiBTZWFyY2hFbGVtZW50Rm9yU2VsZWN0b3IoZWwsIHMpIHtcbiAgLyogTG9vcCB1cCB0aGUgRE9NIHRyZWUgdGhyb3VnaCBwYXJlbnQgZWxlbWVudHMgdG8gdHJ5IHRvIGZpbmQgYW4gZWxlbWVudCB0aGF0IG1hdGNoZXMgdGhlIGdpdmVuIHNlbGVjdG9yICovXG4gIHdoaWxlIChlbCAmJiAoZWwudGFnTmFtZSAmJiAhZWwubWF0Y2hlcyhzKSkpIHtcbiAgICBlbCA9IGVsLnBhcmVudE5vZGU7XG4gIH1cblxuICBpZiAoZWwgJiYgZWwudGFnTmFtZSAmJiBlbC5tYXRjaGVzKHMpKSB7XG4gICAgcmV0dXJuIGVsO1xuICB9XG5cbiAgcmV0dXJuIG51bGw7XG59XG5cbmZ1bmN0aW9uIENhbGNFdmVudE5hbWVGb3JFbGVtZW50KGVsZW1lbnQpIHtcbiAgbGV0IHR5cGUgPSBudWxsO1xuICBsZXQgdHJhY2tEZXRhaWxzID0gbnVsbDtcbiAgbGV0IHNyY0VsID0gbnVsbDtcblxuICBmb3IgKGNvbnN0IHNlbGVjdG9yIGluIFNlbGVjdG9yVHJhY2tpbmcpIHtcbiAgICBpZiAoIWVsZW1lbnQubWF0Y2hlcyhzZWxlY3RvcikpIGNvbnRpbnVlO1xuICAgIHRyYWNrRGV0YWlscyA9IFNlbGVjdG9yVHJhY2tpbmdbc2VsZWN0b3JdO1xuICB9XG5cbiAgaWYgKCF0cmFja0RldGFpbHMpIHtcbiAgICBsZXQgcG90ZW50aWFsWWFUcmFja2VkRWwgPSBTZWFyY2hFbGVtZW50Rm9yU2VsZWN0b3IoZWxlbWVudCwgJ1tkYXRhLXlhLXRyYWNrXScpO1xuICAgIGlmIChwb3RlbnRpYWxZYVRyYWNrZWRFbCkge1xuICAgICAgc3JjRWwgPSBwb3RlbnRpYWxZYVRyYWNrZWRFbDtcbiAgICAgIHRyYWNrRGV0YWlscyA9IChwb3RlbnRpYWxZYVRyYWNrZWRFbC5kYXRhc2V0ID8gcG90ZW50aWFsWWFUcmFja2VkRWwuZGF0YXNldC55YVRyYWNrIDogcG90ZW50aWFsWWFUcmFja2VkRWwuZ2V0QXR0cmlidXRlKCdkYXRhLXlhLXRyYWNrJykpO1xuICAgIH1cbiAgfVxuXG4gIGxldCBwcmV2ZW50RGVmYXVsdEV2ZW50ID0gU2VhcmNoRWxlbWVudEZvclNlbGVjdG9yKGVsZW1lbnQsICdbZGF0YS15YS1wcmV2ZW50LWRlZmF1bHRdJyk7XG5cbiAgaWYgKCFwcmV2ZW50RGVmYXVsdEV2ZW50ICYmICF0cmFja0RldGFpbHMpIHtcbiAgICBsZXQgYW5jaG9yID0gU2VhcmNoRWxlbWVudEZvclNlbGVjdG9yKGVsZW1lbnQsICdhJyk7XG4gICAgaWYgKGFuY2hvcikge1xuICAgICAgc3JjRWwgPSBhbmNob3I7XG4gICAgICBsZXQgYW5jaG9yUXVlcnkgPSBDaGVja0FuY2hvclF1ZXJpZXMoYW5jaG9yKTtcbiAgICAgIGlmIChhbmNob3JRdWVyeSkgdHJhY2tEZXRhaWxzID0gYW5jaG9yUXVlcnk7XG4gICAgICBpZiAoIWFuY2hvclF1ZXJ5ICYmICF0cmFja0RldGFpbHMpIHtcbiAgICAgICAgdHlwZSA9ICdsaW5rJztcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBpZiAoIXByZXZlbnREZWZhdWx0RXZlbnQgJiYgIXRyYWNrRGV0YWlscyAmJiAhdHlwZSkge1xuICAgIGxldCBidXR0b24gPSBTZWFyY2hFbGVtZW50Rm9yU2VsZWN0b3IoZWxlbWVudCwgJ2J1dHRvbicpO1xuICAgIGlmIChidXR0b24pIHtcbiAgICAgIHNyY0VsID0gYnV0dG9uO1xuICAgICAgdHlwZSA9ICdidXR0b24nO1xuICAgIH1cbiAgfVxuXG4gIGlmICghcHJldmVudERlZmF1bHRFdmVudCAmJiAhdHJhY2tEZXRhaWxzICYmICF0eXBlKSB7XG4gICAgbGV0IGlucHV0ID0gU2VhcmNoRWxlbWVudEZvclNlbGVjdG9yKGVsZW1lbnQsICdpbnB1dCcpO1xuICAgIGlmIChpbnB1dCAmJiBpbnB1dC50eXBlICE9ICdoaWRkZW4nKSB7XG4gICAgICBzcmNFbCA9IGlucHV0O1xuICAgICAgdHlwZSA9ICdpbnB1dCc7XG4gICAgfVxuICB9XG5cbiAgbGV0IGRhdGFZYVRyYWNrID0gdHlwZSB8fCB0cmFja0RldGFpbHM7XG5cbiAgaWYgKCFkYXRhWWFUcmFjaykge1xuICAgIGlmICghRGVidWcuaXNFbmFibGVkKCkpIHJldHVybjtcbiAgICBjb25zb2xlLndhcm4oJ05vIHlhLXRyYWNrIGF0dHJpYnV0ZSBmb3VuZCBmb3InLCBlbGVtZW50KTtcbiAgICByZXR1cm47XG4gIH1cblxuICBsZXQgc2NvcGVBbmNlc3RvcnMgPSBbXTtcbiAgd2hpbGUgKGVsZW1lbnQgJiYgZWxlbWVudC50YWdOYW1lKSB7XG4gICAgaWYgKGVsZW1lbnQubWF0Y2hlcygnW2RhdGEteWEtc2NvcGVdJykpIHtcbiAgICAgIHNjb3BlQW5jZXN0b3JzLnB1c2goZWxlbWVudCk7XG4gICAgfVxuICAgIGVsZW1lbnQgPSBlbGVtZW50LnBhcmVudE5vZGU7XG4gIH1cblxuICBsZXQgdGFncyA9IFtzcmNFbF0uY29uY2F0KHNjb3BlQW5jZXN0b3JzKTtcbiAgZm9yIChjb25zdCBbaGllcmFyY2h5SWR4LCBoaWVyYXJjaHlFbGVtZW50XSBvZiB0YWdzLmVudHJpZXMoKSkge1xuICAgIGxldCB0YWdWYWwgPSAoaGllcmFyY2h5SWR4ID09IDApID8gZGF0YVlhVHJhY2sgOiAoaGllcmFyY2h5RWxlbWVudC5kYXRhc2V0ID8gaGllcmFyY2h5RWxlbWVudC5kYXRhc2V0LnlhU2NvcGUgOiBoaWVyYXJjaHlFbGVtZW50LmdldEF0dHJpYnV0ZSgnZGF0YS15YS1zY29wZScpKVxuICAgIGlmICh0YWdWYWwuaW5kZXhPZignIycpID4gLTEpIHtcbiAgICAgIGxldCBhdHRyaWJ1dGVOYW1lID0gaGllcmFyY2h5SWR4ID09IDAgPyAnZGF0YS15YS10cmFjayc6ICdkYXRhLXlhLXNjb3BlJztcbiAgICAgIGxldCBhbmNlc3RvciA9IChoaWVyYXJjaHlJZHggKyAxIDwgdGFncy5sZW5ndGgpID8gdGFnc1toaWVyYXJjaHlJZHggKyAxXTogZG9jdW1lbnQ7XG4gICAgICBsZXQgc2libGluZ3MgPSBBcnJheS5mcm9tKGFuY2VzdG9yLnF1ZXJ5U2VsZWN0b3JBbGwoYFske2F0dHJpYnV0ZU5hbWV9PScke3RhZ1ZhbH0nXWApKTtcbiAgICAgIGZvciAoY29uc3QgW3NpYmxpbmdJZHgsIHNpYmxpbmddIG9mIHNpYmxpbmdzLmVudHJpZXMoKSkge1xuICAgICAgICBpZiAoaGllcmFyY2h5RWxlbWVudCA9PSBzaWJsaW5nKSB7XG4gICAgICAgICAgdGFnVmFsID0gdGFnVmFsLnJlcGxhY2UoJyMnLCBzaWJsaW5nSWR4ICsgMSk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgdGFnc1toaWVyYXJjaHlJZHhdID0gdGFnVmFsO1xuICB9XG5cbiAgcmV0dXJuIHRhZ3MucmV2ZXJzZSgpLmpvaW4oJ18nKTtcbn07XG5cbmZ1bmN0aW9uIENhbGNFdmVudE5hbWVNYXAoeWFJbnN0YW5jZSkge1xuICBjb25zdCBtYXAgPSBuZXcgTWFwKCk7XG4gIGNvbnN0IGFsbExpbmtzID0gQXJyYXkuZnJvbShkb2N1bWVudC5saW5rcyk7XG4gIGNvbnN0IGFsbE90aGVyVHJhY2tlZCA9IEFycmF5LmZyb20oZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnYnV0dG9uLCBpbnB1dCwgc2VsZWN0LCB0ZXh0YXJlYScpKTtcbiAgZm9yIChjb25zdCBlbCBvZiBhbGxMaW5rcy5jb25jYXQoYWxsT3RoZXJUcmFja2VkKSkge1xuICAgIGlmIChlbC50YWdOYW1lLnRvTG93ZXJDYXNlKCkgPT0gJ2lucHV0JyAmJiBlbC50eXBlID09ICdoaWRkZW4nKSBjb250aW51ZTtcbiAgICBjb25zdCBuYW1lID0geWFJbnN0YW5jZS5DYWxjRXZlbnROYW1lRm9yRWxlbWVudChlbCk7XG4gICAgaWYgKCFuYW1lKSBjb250aW51ZTtcbiAgICBpZiAoIW1hcC5oYXMobmFtZSkpIHtcbiAgICAgIGxldCBjb250YWluZXIgPSBbXTtcbiAgICAgIG1hcC5zZXQobmFtZSwgY29udGFpbmVyKTtcbiAgICB9XG4gICAgY29uc3QgZWxlbWVudHMgPSBtYXAuZ2V0KG5hbWUpO1xuICAgIGVsZW1lbnRzLnB1c2goZWwpO1xuICAgIG1hcC5zZXQobmFtZSwgZWxlbWVudHMpO1xuICB9XG4gIHJldHVybiBtYXA7XG59XG5cbmZ1bmN0aW9uIFByaW50RXZlbnQoZXZlbnROYW1lKSB7XG4gIGlmICghRGVidWcuaXNFbmFibGVkKCkpIHJldHVybjtcbiAgY29uc29sZS5sb2coYCVjW1lleHRBbmFseXRpY3NdJWMtIEZpcmVkIGV2ZW50OiAke2V2ZW50TmFtZX1gLCAnYmFja2dyb3VuZDogd2hpdGU7IGNvbG9yOiBibHVlOycsICcnKTtcbn1cblxuZXhwb3J0IHtcbiAgU2VsZWN0b3JUcmFja2luZyxcbiAgR2V0UGFyYW1zLFxuICBDaGVja0FuY2hvclF1ZXJpZXMsXG4gIFNlYXJjaEVsZW1lbnRGb3JTZWxlY3RvcixcbiAgQ2FsY0V2ZW50TmFtZUZvckVsZW1lbnQsXG4gIENhbGNFdmVudE5hbWVNYXAsXG4gIFByaW50RXZlbnRcbn07XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0IHsgQW5hbHl0aWNzIH0gZnJvbSAnLi9hbmFseXRpY3MvQW5hbHl0aWNzLmpzJztcblxubmV3IEFuYWx5dGljcygpO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==