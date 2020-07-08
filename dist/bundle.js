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
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
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
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nconst numbers = document.getElementById(\"buttons\");\r\nnumbers.addEventListener(\"click\", display);\r\nlet value = document.getElementById(\"selectedNumber\");\r\nlet log = document.getElementById(\"logUl\");\r\nlet previousOperations = document.getElementById(\"history\");\r\nlet clearing = document.getElementById(\"clearing\").addEventListener(\"click\", clear);\r\nnumbers.addEventListener(\"click\", validate);\r\nlet openPar = document.getElementById(\"open\");\r\nlet closePar = document.getElementById(\"close\");\r\nlet toggle = true;\r\nlet historial = [];\r\nlet lastOperation;\r\nfunction display(event) {\r\n    const number = event.target;\r\n    if (validate(event)) {\r\n        return;\r\n    }\r\n    else {\r\n        let type = number.className;\r\n        let first = number.innerText;\r\n        first == \"C\" ? clean() : null;\r\n        type == \"number\" || type == \"operator\" || type == \"parenthesis\" ? value.innerText = value.innerText + first : null;\r\n    }\r\n}\r\nfunction calculate() {\r\n    historial.push(`${value.innerText} = ${eval(value.innerText)}`);\r\n    value.innerText = eval(value.innerText);\r\n    const li = document.createElement(\"li\");\r\n    log.appendChild(li);\r\n    lastOperation = historial[historial.length - 1];\r\n    li.innerText = lastOperation;\r\n}\r\nfunction clean() {\r\n    value.innerText = \"\";\r\n    toggle ? toggle = true : toggle = true;\r\n    openPar.style.display = \"block\";\r\n    closePar.style.display = \"none\";\r\n}\r\nfunction clear() {\r\n    log.innerText = \"\";\r\n    historial = [];\r\n}\r\nfunction showHistory() {\r\n    previousOperations.style.opacity = \"1\";\r\n}\r\nfunction reveal() {\r\n    previousOperations.style.opacity = \"0\";\r\n}\r\nfunction back() {\r\n    value.innerText = value.innerText.substring(0, value.innerText.length - 1);\r\n}\r\nfunction changePar() {\r\n    if (toggle) {\r\n        openPar.style.display = \"none\";\r\n        closePar.style.display = \"block\";\r\n    }\r\n    else {\r\n        openPar.style.display = \"block\";\r\n        closePar.style.display = \"none\";\r\n    }\r\n    toggle = !toggle;\r\n}\r\nfunction validate(event) {\r\n    let lastCharacter = value.innerText[value.innerText.length - 1];\r\n    const button = event.target;\r\n    if (lastCharacter == \"/\" || lastCharacter == \"*\" || lastCharacter == \"+\" || lastCharacter == \"-\" || lastCharacter == \".\") {\r\n        if (button.className == \"operator\") {\r\n            return true;\r\n        }\r\n    }\r\n}\r\n\n\n//# sourceURL=webpack:///./src/index.ts?");

/***/ })

/******/ });