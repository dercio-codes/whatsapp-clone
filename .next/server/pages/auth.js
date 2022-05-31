module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../ssr-module-cache.js');
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
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/auth.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/auth/FirebaseAuth.js":
/*!*****************************************!*\
  !*** ./components/auth/FirebaseAuth.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _firebase_initFirebase__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../firebase/initFirebase */ \"./firebase/initFirebase.js\");\n/* harmony import */ var react_firebaseui_StyledFirebaseAuth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-firebaseui/StyledFirebaseAuth */ \"react-firebaseui/StyledFirebaseAuth\");\n/* harmony import */ var react_firebaseui_StyledFirebaseAuth__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_firebaseui_StyledFirebaseAuth__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! firebase/app */ \"firebase/app\");\n/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(firebase_app__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var firebase_auth__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! firebase/auth */ \"firebase/auth\");\n/* harmony import */ var firebase_auth__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(firebase_auth__WEBPACK_IMPORTED_MODULE_4__);\n\nvar _jsxFileName = \"/home/dercio/AppWorld/appworld-templates/whatsapp-clone/components/auth/FirebaseAuth.js\";\n\n\n\n\nObject(_firebase_initFirebase__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(); // initialize firebase\n\nconst firebaseAuthConfig = {\n  signInFlow: 'popup',\n  signInOptions: [{\n    provider: firebase_app__WEBPACK_IMPORTED_MODULE_3___default.a.auth.GoogleAuthProvider.PROVIDER_ID,\n    requireDisplayName: true\n  }],\n  signInSuccessUrl: '/chatroom',\n  credentialHelper: 'none',\n  callbacks: {\n    signInSuccessWithAuthResult: async ({\n      user\n    }, redirectUrl) => {\n      const userData = mapUserData(user);\n      setUserCookie(userData);\n    }\n  }\n};\n\nconst FirebaseAuth = () => {\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react_firebaseui_StyledFirebaseAuth__WEBPACK_IMPORTED_MODULE_2___default.a, {\n      uiConfig: firebaseAuthConfig,\n      firebaseAuth: firebase_app__WEBPACK_IMPORTED_MODULE_3___default.a.auth()\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 31,\n      columnNumber: 17\n    }, undefined)\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 30,\n    columnNumber: 9\n  }, undefined);\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (FirebaseAuth);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2F1dGgvRmlyZWJhc2VBdXRoLmpzPzA2YzQiXSwibmFtZXMiOlsiaW5pdEZpcmViYXNlIiwiZmlyZWJhc2VBdXRoQ29uZmlnIiwic2lnbkluRmxvdyIsInNpZ25Jbk9wdGlvbnMiLCJwcm92aWRlciIsImZpcmViYXNlIiwiYXV0aCIsIkdvb2dsZUF1dGhQcm92aWRlciIsIlBST1ZJREVSX0lEIiwicmVxdWlyZURpc3BsYXlOYW1lIiwic2lnbkluU3VjY2Vzc1VybCIsImNyZWRlbnRpYWxIZWxwZXIiLCJjYWxsYmFja3MiLCJzaWduSW5TdWNjZXNzV2l0aEF1dGhSZXN1bHQiLCJ1c2VyIiwicmVkaXJlY3RVcmwiLCJ1c2VyRGF0YSIsIm1hcFVzZXJEYXRhIiwic2V0VXNlckNvb2tpZSIsIkZpcmViYXNlQXV0aCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFFQUEsc0VBQVksRyxDQUFHOztBQUVmLE1BQU1DLGtCQUFrQixHQUFHO0FBQ3ZCQyxZQUFVLEVBQUUsT0FEVztBQUV2QkMsZUFBYSxFQUFFLENBQ1g7QUFDSUMsWUFBUSxFQUFHQyxtREFBUSxDQUFDQyxJQUFULENBQWNDLGtCQUFkLENBQWlDQyxXQURoRDtBQUVJQyxzQkFBa0IsRUFBRTtBQUZ4QixHQURXLENBRlE7QUFTdkJDLGtCQUFnQixFQUFFLFdBVEs7QUFVdkJDLGtCQUFnQixFQUFFLE1BVks7QUFXdkJDLFdBQVMsRUFBRTtBQUNQQywrQkFBMkIsRUFBRSxPQUFPO0FBQUVDO0FBQUYsS0FBUCxFQUFpQkMsV0FBakIsS0FBaUM7QUFDMUQsWUFBTUMsUUFBUSxHQUFHQyxXQUFXLENBQUNILElBQUQsQ0FBNUI7QUFDQUksbUJBQWEsQ0FBQ0YsUUFBRCxDQUFiO0FBQ0g7QUFKTTtBQVhZLENBQTNCOztBQW1CQSxNQUFNRyxZQUFZLEdBQUcsTUFBTTtBQUV2QixzQkFDSTtBQUFBLDJCQUNRLHFFQUFDLDBFQUFEO0FBQ0ksY0FBUSxFQUFFbEIsa0JBRGQ7QUFFSSxrQkFBWSxFQUFFSSxtREFBUSxDQUFDQyxJQUFUO0FBRmxCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFEUjtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBREo7QUFRSCxDQVZEOztBQVllYSwyRUFBZiIsImZpbGUiOiIuL2NvbXBvbmVudHMvYXV0aC9GaXJlYmFzZUF1dGguanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgaW5pdEZpcmViYXNlIGZyb20gJy4uLy4uL2ZpcmViYXNlL2luaXRGaXJlYmFzZSdcbmltcG9ydCBTdHlsZWRGaXJlYmFzZUF1dGggZnJvbSAncmVhY3QtZmlyZWJhc2V1aS9TdHlsZWRGaXJlYmFzZUF1dGgnXG5pbXBvcnQgZmlyZWJhc2UgZnJvbSAnZmlyZWJhc2UvYXBwJ1xuaW1wb3J0ICdmaXJlYmFzZS9hdXRoJ1xuXG5pbml0RmlyZWJhc2UoKSAvLyBpbml0aWFsaXplIGZpcmViYXNlXG5cbmNvbnN0IGZpcmViYXNlQXV0aENvbmZpZyA9IHtcbiAgICBzaWduSW5GbG93OiAncG9wdXAnLFxuICAgIHNpZ25Jbk9wdGlvbnM6IFtcbiAgICAgICAge1xuICAgICAgICAgICAgcHJvdmlkZXI6ICBmaXJlYmFzZS5hdXRoLkdvb2dsZUF1dGhQcm92aWRlci5QUk9WSURFUl9JRCxcbiAgICAgICAgICAgIHJlcXVpcmVEaXNwbGF5TmFtZTogdHJ1ZSxcbiAgICAgICAgfSxcblxuICAgIF0sXG4gICAgc2lnbkluU3VjY2Vzc1VybDogJy9jaGF0cm9vbScsXG4gICAgY3JlZGVudGlhbEhlbHBlcjogJ25vbmUnLFxuICAgIGNhbGxiYWNrczoge1xuICAgICAgICBzaWduSW5TdWNjZXNzV2l0aEF1dGhSZXN1bHQ6IGFzeW5jICh7IHVzZXIgfSwgcmVkaXJlY3RVcmwpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHVzZXJEYXRhID0gbWFwVXNlckRhdGEodXNlcilcbiAgICAgICAgICAgIHNldFVzZXJDb29raWUodXNlckRhdGEpXG4gICAgICAgIH0sXG4gICAgfSxcbn1cblxuY29uc3QgRmlyZWJhc2VBdXRoID0gKCkgPT4ge1xuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICA8U3R5bGVkRmlyZWJhc2VBdXRoXG4gICAgICAgICAgICAgICAgICAgIHVpQ29uZmlnPXtmaXJlYmFzZUF1dGhDb25maWd9XG4gICAgICAgICAgICAgICAgICAgIGZpcmViYXNlQXV0aD17ZmlyZWJhc2UuYXV0aCgpfVxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgIDwvZGl2PlxuICAgIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgRmlyZWJhc2VBdXRoIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/auth/FirebaseAuth.js\n");

/***/ }),

/***/ "./firebase/initFirebase.js":
/*!**********************************!*\
  !*** ./firebase/initFirebase.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return initFirebase; });\n/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! firebase/app */ \"firebase/app\");\n/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(firebase_app__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var firebase_auth__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! firebase/auth */ \"firebase/auth\");\n/* harmony import */ var firebase_auth__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(firebase_auth__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var firebase_firestore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! firebase/firestore */ \"firebase/firestore\");\n/* harmony import */ var firebase_firestore__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(firebase_firestore__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var firebase_storage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! firebase/storage */ \"firebase/storage\");\n/* harmony import */ var firebase_storage__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(firebase_storage__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var firebase_analytics__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! firebase/analytics */ \"firebase/analytics\");\n/* harmony import */ var firebase_analytics__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(firebase_analytics__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var firebase_performance__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! firebase/performance */ \"firebase/performance\");\n/* harmony import */ var firebase_performance__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(firebase_performance__WEBPACK_IMPORTED_MODULE_5__);\n // the below imports are option - comment out what you don't need\n\n\n\n\n\n\nconst clientCredentials = {\n  // apiKey: \"AIzaSyC21ZnljReUXu-8Zlfc5UFUtzhUCrLpYAU\",\n  // authDomain: \"activefm-community-chat.firebaseapp.com\",\n  // projectId: \"activefm-community-chat\",\n  // storageBucket: \"activefm-community-chat.appspot.com\",\n  // messagingSenderId: \"332591026612\",\n  // appId: \"1:332591026612:web:358f5ccb647890745062e1\"\n  apiKey: \"AIzaSyCi1Fr9lRoaRi4wWQmwEgrRCqFxsY3Ycdw\",\n  authDomain: \"whatsapp-web-fbc3f.firebaseapp.com\",\n  projectId: \"whatsapp-web-fbc3f\",\n  storageBucket: \"whatsapp-web-fbc3f.appspot.com\",\n  messagingSenderId: \"509898380560\",\n  appId: \"1:509898380560:web:d137602013e59ca6cc4195\"\n};\nfunction initFirebase() {\n  if (!firebase_app__WEBPACK_IMPORTED_MODULE_0___default.a.apps.length) {\n    firebase_app__WEBPACK_IMPORTED_MODULE_0___default.a.initializeApp(clientCredentials); // Check that `window` is in scope for the analytics module!\n\n    if (false) {}\n\n    console.log('Firebase was successfully init.');\n  }\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9maXJlYmFzZS9pbml0RmlyZWJhc2UuanM/ZTM5YSJdLCJuYW1lcyI6WyJjbGllbnRDcmVkZW50aWFscyIsImFwaUtleSIsImF1dGhEb21haW4iLCJwcm9qZWN0SWQiLCJzdG9yYWdlQnVja2V0IiwibWVzc2FnaW5nU2VuZGVySWQiLCJhcHBJZCIsImluaXRGaXJlYmFzZSIsImZpcmViYXNlIiwiYXBwcyIsImxlbmd0aCIsImluaXRpYWxpemVBcHAiLCJjb25zb2xlIiwibG9nIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0NBQ0E7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBLE1BQU1BLGlCQUFpQixHQUFHO0FBQ3RCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUdBQyxRQUFNLEVBQUUseUNBVGM7QUFVdEJDLFlBQVUsRUFBRSxvQ0FWVTtBQVd0QkMsV0FBUyxFQUFFLG9CQVhXO0FBWXRCQyxlQUFhLEVBQUUsZ0NBWk87QUFhdEJDLG1CQUFpQixFQUFFLGNBYkc7QUFjdEJDLE9BQUssRUFBRTtBQWRlLENBQTFCO0FBaUJlLFNBQVNDLFlBQVQsR0FBd0I7QUFDbkMsTUFBSSxDQUFDQyxtREFBUSxDQUFDQyxJQUFULENBQWNDLE1BQW5CLEVBQTJCO0FBQ3ZCRix1REFBUSxDQUFDRyxhQUFULENBQXVCWCxpQkFBdkIsRUFEdUIsQ0FFdkI7O0FBQ0EsZUFBbUMsRUFNbEM7O0FBQ0RZLFdBQU8sQ0FBQ0MsR0FBUixDQUFZLGlDQUFaO0FBQ0g7QUFDSiIsImZpbGUiOiIuL2ZpcmViYXNlL2luaXRGaXJlYmFzZS5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBmaXJlYmFzZSBmcm9tICdmaXJlYmFzZS9hcHAnXG4vLyB0aGUgYmVsb3cgaW1wb3J0cyBhcmUgb3B0aW9uIC0gY29tbWVudCBvdXQgd2hhdCB5b3UgZG9uJ3QgbmVlZFxuaW1wb3J0ICdmaXJlYmFzZS9hdXRoJ1xuaW1wb3J0ICdmaXJlYmFzZS9maXJlc3RvcmUnXG5pbXBvcnQgJ2ZpcmViYXNlL3N0b3JhZ2UnXG5pbXBvcnQgJ2ZpcmViYXNlL2FuYWx5dGljcydcbmltcG9ydCAnZmlyZWJhc2UvcGVyZm9ybWFuY2UnXG5cbmNvbnN0IGNsaWVudENyZWRlbnRpYWxzID0ge1xuICAgIC8vIGFwaUtleTogXCJBSXphU3lDMjFabmxqUmVVWHUtOFpsZmM1VUZVdHpoVUNyTHBZQVVcIixcbiAgICAvLyBhdXRoRG9tYWluOiBcImFjdGl2ZWZtLWNvbW11bml0eS1jaGF0LmZpcmViYXNlYXBwLmNvbVwiLFxuICAgIC8vIHByb2plY3RJZDogXCJhY3RpdmVmbS1jb21tdW5pdHktY2hhdFwiLFxuICAgIC8vIHN0b3JhZ2VCdWNrZXQ6IFwiYWN0aXZlZm0tY29tbXVuaXR5LWNoYXQuYXBwc3BvdC5jb21cIixcbiAgICAvLyBtZXNzYWdpbmdTZW5kZXJJZDogXCIzMzI1OTEwMjY2MTJcIixcbiAgICAvLyBhcHBJZDogXCIxOjMzMjU5MTAyNjYxMjp3ZWI6MzU4ZjVjY2I2NDc4OTA3NDUwNjJlMVwiXG5cblxuICAgIGFwaUtleTogXCJBSXphU3lDaTFGcjlsUm9hUmk0d1dRbXdFZ3JSQ3FGeHNZM1ljZHdcIixcbiAgICBhdXRoRG9tYWluOiBcIndoYXRzYXBwLXdlYi1mYmMzZi5maXJlYmFzZWFwcC5jb21cIixcbiAgICBwcm9qZWN0SWQ6IFwid2hhdHNhcHAtd2ViLWZiYzNmXCIsXG4gICAgc3RvcmFnZUJ1Y2tldDogXCJ3aGF0c2FwcC13ZWItZmJjM2YuYXBwc3BvdC5jb21cIixcbiAgICBtZXNzYWdpbmdTZW5kZXJJZDogXCI1MDk4OTgzODA1NjBcIixcbiAgICBhcHBJZDogXCIxOjUwOTg5ODM4MDU2MDp3ZWI6ZDEzNzYwMjAxM2U1OWNhNmNjNDE5NVwiXG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGluaXRGaXJlYmFzZSgpIHtcbiAgICBpZiAoIWZpcmViYXNlLmFwcHMubGVuZ3RoKSB7XG4gICAgICAgIGZpcmViYXNlLmluaXRpYWxpemVBcHAoY2xpZW50Q3JlZGVudGlhbHMpXG4gICAgICAgIC8vIENoZWNrIHRoYXQgYHdpbmRvd2AgaXMgaW4gc2NvcGUgZm9yIHRoZSBhbmFseXRpY3MgbW9kdWxlIVxuICAgICAgICBpZiAodHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgICAgIC8vIEVuYWJsZSBhbmFseXRpY3MuIGh0dHBzOi8vZmlyZWJhc2UuZ29vZ2xlLmNvbS9kb2NzL2FuYWx5dGljcy9nZXQtc3RhcnRlZFxuICAgICAgICAgICAgaWYgKCdtZWFzdXJlbWVudElkJyBpbiBjbGllbnRDcmVkZW50aWFscykge1xuICAgICAgICAgICAgICAgIGZpcmViYXNlLmFuYWx5dGljcygpXG4gICAgICAgICAgICAgICAgZmlyZWJhc2UucGVyZm9ybWFuY2UoKVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGNvbnNvbGUubG9nKCdGaXJlYmFzZSB3YXMgc3VjY2Vzc2Z1bGx5IGluaXQuJylcbiAgICB9XG59Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./firebase/initFirebase.js\n");

/***/ }),

/***/ "./pages/auth.js":
/*!***********************!*\
  !*** ./pages/auth.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components_auth_FirebaseAuth__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/auth/FirebaseAuth */ \"./components/auth/FirebaseAuth.js\");\n\nvar _jsxFileName = \"/home/dercio/AppWorld/appworld-templates/whatsapp-clone/pages/auth.js\";\n\n\nconst Auth = () => {\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_components_auth_FirebaseAuth__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {}, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 7,\n        columnNumber: 17\n      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"p\", {\n        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"a\", {\n          href: \"/\",\n          children: \"Go Home\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 8,\n          columnNumber: 20\n        }, undefined)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 8,\n        columnNumber: 17\n      }, undefined)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 6,\n      columnNumber: 13\n    }, undefined)\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 5,\n    columnNumber: 9\n  }, undefined);\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Auth);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9hdXRoLmpzP2NhNGUiXSwibmFtZXMiOlsiQXV0aCJdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUE7O0FBRUEsTUFBTUEsSUFBSSxHQUFHLE1BQU07QUFDZixzQkFDSTtBQUFBLDJCQUNJO0FBQUEsOEJBQ0kscUVBQUMscUVBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFESixlQUVJO0FBQUEsK0JBQUc7QUFBRyxjQUFJLEVBQUMsR0FBUjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFIO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBRko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURKO0FBUUgsQ0FURDs7QUFXZUEsbUVBQWYiLCJmaWxlIjoiLi9wYWdlcy9hdXRoLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEZpcmViYXNlQXV0aCBmcm9tICcuLi9jb21wb25lbnRzL2F1dGgvRmlyZWJhc2VBdXRoJ1xuXG5jb25zdCBBdXRoID0gKCkgPT4ge1xuICAgIHJldHVybiAoXG4gICAgICAgIDxkaXY+XG4gICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgIDxGaXJlYmFzZUF1dGggLz5cbiAgICAgICAgICAgICAgICA8cD48YSBocmVmPVwiL1wiPkdvIEhvbWU8L2E+PC9wPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgQXV0aFxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/auth.js\n");

/***/ }),

/***/ "firebase/analytics":
/*!*************************************!*\
  !*** external "firebase/analytics" ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"firebase/analytics\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJmaXJlYmFzZS9hbmFseXRpY3NcIj82ZjI5Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6ImZpcmViYXNlL2FuYWx5dGljcy5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImZpcmViYXNlL2FuYWx5dGljc1wiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///firebase/analytics\n");

/***/ }),

/***/ "firebase/app":
/*!*******************************!*\
  !*** external "firebase/app" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"firebase/app\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJmaXJlYmFzZS9hcHBcIj9hZDQ4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6ImZpcmViYXNlL2FwcC5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImZpcmViYXNlL2FwcFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///firebase/app\n");

/***/ }),

/***/ "firebase/auth":
/*!********************************!*\
  !*** external "firebase/auth" ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"firebase/auth\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJmaXJlYmFzZS9hdXRoXCI/Mjc2NCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSIsImZpbGUiOiJmaXJlYmFzZS9hdXRoLmpzIiwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiZmlyZWJhc2UvYXV0aFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///firebase/auth\n");

/***/ }),

/***/ "firebase/firestore":
/*!*************************************!*\
  !*** external "firebase/firestore" ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"firebase/firestore\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJmaXJlYmFzZS9maXJlc3RvcmVcIj8wNjI4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6ImZpcmViYXNlL2ZpcmVzdG9yZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImZpcmViYXNlL2ZpcmVzdG9yZVwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///firebase/firestore\n");

/***/ }),

/***/ "firebase/performance":
/*!***************************************!*\
  !*** external "firebase/performance" ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"firebase/performance\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJmaXJlYmFzZS9wZXJmb3JtYW5jZVwiP2Y2NzYiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoiZmlyZWJhc2UvcGVyZm9ybWFuY2UuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJmaXJlYmFzZS9wZXJmb3JtYW5jZVwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///firebase/performance\n");

/***/ }),

/***/ "firebase/storage":
/*!***********************************!*\
  !*** external "firebase/storage" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"firebase/storage\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJmaXJlYmFzZS9zdG9yYWdlXCI/ZTk4YyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSIsImZpbGUiOiJmaXJlYmFzZS9zdG9yYWdlLmpzIiwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiZmlyZWJhc2Uvc3RvcmFnZVwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///firebase/storage\n");

/***/ }),

/***/ "react-firebaseui/StyledFirebaseAuth":
/*!******************************************************!*\
  !*** external "react-firebaseui/StyledFirebaseAuth" ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-firebaseui/StyledFirebaseAuth\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC1maXJlYmFzZXVpL1N0eWxlZEZpcmViYXNlQXV0aFwiPzcyOTQiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoicmVhY3QtZmlyZWJhc2V1aS9TdHlsZWRGaXJlYmFzZUF1dGguanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1maXJlYmFzZXVpL1N0eWxlZEZpcmViYXNlQXV0aFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///react-firebaseui/StyledFirebaseAuth\n");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react/jsx-dev-runtime\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIj9jZDkwIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6InJlYWN0L2pzeC1kZXYtcnVudGltZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///react/jsx-dev-runtime\n");

/***/ })

/******/ });