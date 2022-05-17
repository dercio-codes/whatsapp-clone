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
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/navbar/chatOptions.jsx":
/*!*******************************************!*\
  !*** ./components/navbar/chatOptions.jsx ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return ChatOptions; });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _mui_material_Button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @mui/material/Button */ \"@mui/material/Button\");\n/* harmony import */ var _mui_material_Button__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_mui_material_Button__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _mui_material_Menu__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @mui/material/Menu */ \"@mui/material/Menu\");\n/* harmony import */ var _mui_material_Menu__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_mui_material_Menu__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _mui_material_MenuItem__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @mui/material/MenuItem */ \"@mui/material/MenuItem\");\n/* harmony import */ var _mui_material_MenuItem__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_mui_material_MenuItem__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _mui_icons_material_MoreVert__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @mui/icons-material/MoreVert */ \"@mui/icons-material/MoreVert\");\n/* harmony import */ var _mui_icons_material_MoreVert__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_mui_icons_material_MoreVert__WEBPACK_IMPORTED_MODULE_5__);\n\nvar _jsxFileName = \"/home/dercio/AppWorld/appworld-templates/whatsapp-clone/components/navbar/chatOptions.jsx\";\n\n\n\n\n\nfunction ChatOptions() {\n  const [anchorEl, setAnchorEl] = react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"](null);\n  const open = Boolean(anchorEl);\n\n  const handleClick = event => {\n    setAnchorEl(event.currentTarget);\n  };\n\n  const handleClose = () => {\n    setAnchorEl(null);\n  };\n\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_mui_material_Button__WEBPACK_IMPORTED_MODULE_2___default.a, {\n      id: \"basic-button\",\n      \"aria-controls\": open ? \"basic-menu\" : undefined,\n      \"aria-haspopup\": \"true\",\n      \"aria-expanded\": open ? \"true\" : undefined,\n      onClick: handleClick,\n      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_mui_icons_material_MoreVert__WEBPACK_IMPORTED_MODULE_5___default.a, {\n        sx: {\n          fill: \"#eee\"\n        }\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 26,\n        columnNumber: 9\n      }, this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 19,\n      columnNumber: 7\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_mui_material_Menu__WEBPACK_IMPORTED_MODULE_3___default.a, {\n      id: \"basic-menu\",\n      anchorEl: anchorEl,\n      open: open,\n      onClose: handleClose,\n      MenuListProps: {\n        \"aria-labelledby\": \"basic-button\"\n      },\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_mui_material_MenuItem__WEBPACK_IMPORTED_MODULE_4___default.a, {\n        onClick: handleClose,\n        children: \"Profile\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 41,\n        columnNumber: 9\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_mui_material_MenuItem__WEBPACK_IMPORTED_MODULE_4___default.a, {\n        onClick: handleClose,\n        children: \"My account\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 42,\n        columnNumber: 9\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_mui_material_MenuItem__WEBPACK_IMPORTED_MODULE_4___default.a, {\n        onClick: handleClose,\n        children: \"Logout\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 43,\n        columnNumber: 9\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 32,\n      columnNumber: 7\n    }, this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 18,\n    columnNumber: 5\n  }, this);\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL25hdmJhci9jaGF0T3B0aW9ucy5qc3g/YWYwZiJdLCJuYW1lcyI6WyJDaGF0T3B0aW9ucyIsImFuY2hvckVsIiwic2V0QW5jaG9yRWwiLCJSZWFjdCIsIm9wZW4iLCJCb29sZWFuIiwiaGFuZGxlQ2xpY2siLCJldmVudCIsImN1cnJlbnRUYXJnZXQiLCJoYW5kbGVDbG9zZSIsInVuZGVmaW5lZCIsImZpbGwiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRWUsU0FBU0EsV0FBVCxHQUF1QjtBQUNwQyxRQUFNLENBQUNDLFFBQUQsRUFBV0MsV0FBWCxJQUEwQkMsOENBQUEsQ0FBZSxJQUFmLENBQWhDO0FBQ0EsUUFBTUMsSUFBSSxHQUFHQyxPQUFPLENBQUNKLFFBQUQsQ0FBcEI7O0FBQ0EsUUFBTUssV0FBVyxHQUFJQyxLQUFELElBQVc7QUFDN0JMLGVBQVcsQ0FBQ0ssS0FBSyxDQUFDQyxhQUFQLENBQVg7QUFDRCxHQUZEOztBQUdBLFFBQU1DLFdBQVcsR0FBRyxNQUFNO0FBQ3hCUCxlQUFXLENBQUMsSUFBRCxDQUFYO0FBQ0QsR0FGRDs7QUFJQSxzQkFDRTtBQUFBLDRCQUNFLHFFQUFDLDJEQUFEO0FBQ0UsUUFBRSxFQUFDLGNBREw7QUFFRSx1QkFBZUUsSUFBSSxHQUFHLFlBQUgsR0FBa0JNLFNBRnZDO0FBR0UsdUJBQWMsTUFIaEI7QUFJRSx1QkFBZU4sSUFBSSxHQUFHLE1BQUgsR0FBWU0sU0FKakM7QUFLRSxhQUFPLEVBQUVKLFdBTFg7QUFBQSw2QkFPRSxxRUFBQyxtRUFBRDtBQUNFLFVBQUUsRUFBRTtBQUNGSyxjQUFJLEVBQUU7QUFESjtBQUROO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFQRjtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBREYsZUFjRSxxRUFBQyx5REFBRDtBQUNFLFFBQUUsRUFBQyxZQURMO0FBRUUsY0FBUSxFQUFFVixRQUZaO0FBR0UsVUFBSSxFQUFFRyxJQUhSO0FBSUUsYUFBTyxFQUFFSyxXQUpYO0FBS0UsbUJBQWEsRUFBRTtBQUNiLDJCQUFtQjtBQUROLE9BTGpCO0FBQUEsOEJBU0UscUVBQUMsNkRBQUQ7QUFBVSxlQUFPLEVBQUVBLFdBQW5CO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBVEYsZUFVRSxxRUFBQyw2REFBRDtBQUFVLGVBQU8sRUFBRUEsV0FBbkI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FWRixlQVdFLHFFQUFDLDZEQUFEO0FBQVUsZUFBTyxFQUFFQSxXQUFuQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQVhGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQWRGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURGO0FBOEJEIiwiZmlsZSI6Ii4vY29tcG9uZW50cy9uYXZiYXIvY2hhdE9wdGlvbnMuanN4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgQnV0dG9uIGZyb20gXCJAbXVpL21hdGVyaWFsL0J1dHRvblwiO1xuaW1wb3J0IE1lbnUgZnJvbSBcIkBtdWkvbWF0ZXJpYWwvTWVudVwiO1xuaW1wb3J0IE1lbnVJdGVtIGZyb20gXCJAbXVpL21hdGVyaWFsL01lbnVJdGVtXCI7XG5pbXBvcnQgTW9yZVZlcnRJY29uIGZyb20gXCJAbXVpL2ljb25zLW1hdGVyaWFsL01vcmVWZXJ0XCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIENoYXRPcHRpb25zKCkge1xuICBjb25zdCBbYW5jaG9yRWwsIHNldEFuY2hvckVsXSA9IFJlYWN0LnVzZVN0YXRlKG51bGwpO1xuICBjb25zdCBvcGVuID0gQm9vbGVhbihhbmNob3JFbCk7XG4gIGNvbnN0IGhhbmRsZUNsaWNrID0gKGV2ZW50KSA9PiB7XG4gICAgc2V0QW5jaG9yRWwoZXZlbnQuY3VycmVudFRhcmdldCk7XG4gIH07XG4gIGNvbnN0IGhhbmRsZUNsb3NlID0gKCkgPT4ge1xuICAgIHNldEFuY2hvckVsKG51bGwpO1xuICB9O1xuXG4gIHJldHVybiAoXG4gICAgPGRpdj5cbiAgICAgIDxCdXR0b25cbiAgICAgICAgaWQ9XCJiYXNpYy1idXR0b25cIlxuICAgICAgICBhcmlhLWNvbnRyb2xzPXtvcGVuID8gXCJiYXNpYy1tZW51XCIgOiB1bmRlZmluZWR9XG4gICAgICAgIGFyaWEtaGFzcG9wdXA9XCJ0cnVlXCJcbiAgICAgICAgYXJpYS1leHBhbmRlZD17b3BlbiA/IFwidHJ1ZVwiIDogdW5kZWZpbmVkfVxuICAgICAgICBvbkNsaWNrPXtoYW5kbGVDbGlja31cbiAgICAgID5cbiAgICAgICAgPE1vcmVWZXJ0SWNvblxuICAgICAgICAgIHN4PXt7XG4gICAgICAgICAgICBmaWxsOiBcIiNlZWVcIixcbiAgICAgICAgICB9fVxuICAgICAgICAvPlxuICAgICAgPC9CdXR0b24+XG4gICAgICA8TWVudVxuICAgICAgICBpZD1cImJhc2ljLW1lbnVcIlxuICAgICAgICBhbmNob3JFbD17YW5jaG9yRWx9XG4gICAgICAgIG9wZW49e29wZW59XG4gICAgICAgIG9uQ2xvc2U9e2hhbmRsZUNsb3NlfVxuICAgICAgICBNZW51TGlzdFByb3BzPXt7XG4gICAgICAgICAgXCJhcmlhLWxhYmVsbGVkYnlcIjogXCJiYXNpYy1idXR0b25cIixcbiAgICAgICAgfX1cbiAgICAgID5cbiAgICAgICAgPE1lbnVJdGVtIG9uQ2xpY2s9e2hhbmRsZUNsb3NlfT5Qcm9maWxlPC9NZW51SXRlbT5cbiAgICAgICAgPE1lbnVJdGVtIG9uQ2xpY2s9e2hhbmRsZUNsb3NlfT5NeSBhY2NvdW50PC9NZW51SXRlbT5cbiAgICAgICAgPE1lbnVJdGVtIG9uQ2xpY2s9e2hhbmRsZUNsb3NlfT5Mb2dvdXQ8L01lbnVJdGVtPlxuICAgICAgPC9NZW51PlxuICAgIDwvZGl2PlxuICApO1xufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/navbar/chatOptions.jsx\n");

/***/ }),

/***/ "./components/navbar/index.jsx":
/*!*************************************!*\
  !*** ./components/navbar/index.jsx ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @mui/material */ \"@mui/material\");\n/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_mui_material__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _mui_icons_material_AutoModeOutlined__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @mui/icons-material/AutoModeOutlined */ \"@mui/icons-material/AutoModeOutlined\");\n/* harmony import */ var _mui_icons_material_AutoModeOutlined__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_mui_icons_material_AutoModeOutlined__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _mui_icons_material_Forum__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @mui/icons-material/Forum */ \"@mui/icons-material/Forum\");\n/* harmony import */ var _mui_icons_material_Forum__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_mui_icons_material_Forum__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _mui_icons_material_MoreVert__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @mui/icons-material/MoreVert */ \"@mui/icons-material/MoreVert\");\n/* harmony import */ var _mui_icons_material_MoreVert__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_mui_icons_material_MoreVert__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _mui_icons_material_Search__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @mui/icons-material/Search */ \"@mui/icons-material/Search\");\n/* harmony import */ var _mui_icons_material_Search__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_mui_icons_material_Search__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var _chatOptions__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./chatOptions */ \"./components/navbar/chatOptions.jsx\");\n\nvar _jsxFileName = \"/home/dercio/AppWorld/appworld-templates/whatsapp-clone/components/navbar/index.jsx\";\n\n\n\n\n\n\n\n\nconst Navbar = () => {\n  const currentProfile = {\n    id: 1,\n    name: \"Karthik\",\n    picture: \"https://image.ibb.co/k0wVTm/profile_pic.jpg\",\n    status: \"Available\"\n  };\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_mui_material__WEBPACK_IMPORTED_MODULE_1__[\"Box\"], {\n    sx: {\n      height: \"10vh\",\n      background: \"#111\"\n    },\n    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_mui_material__WEBPACK_IMPORTED_MODULE_1__[\"Grid\"], {\n      container: true,\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_mui_material__WEBPACK_IMPORTED_MODULE_1__[\"Grid\"], {\n        item: true,\n        md: 3.5,\n        sx: {\n          // background: \"pink\",\n          color: \"#eee\",\n          height: \"10vh\",\n          padding: \"8px\",\n          display: \"flex\"\n        },\n        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_mui_material__WEBPACK_IMPORTED_MODULE_1__[\"Box\"], {\n          sx: {\n            flex: 1.5\n          },\n          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_mui_material__WEBPACK_IMPORTED_MODULE_1__[\"Badge\"], {\n            color: \"success\",\n            badgeContent: currentProfile.status === \"Available\" ? \" \" : \"\",\n            anchorOrigin: {\n              vertical: \"bottom\",\n              horizontal: \"right\"\n            },\n            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_mui_material__WEBPACK_IMPORTED_MODULE_1__[\"Avatar\"], {\n              src: currentProfile.picture,\n              alt: \"Boom\"\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 46,\n              columnNumber: 15\n            }, undefined)\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 40,\n            columnNumber: 13\n          }, undefined)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 35,\n          columnNumber: 11\n        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_mui_material__WEBPACK_IMPORTED_MODULE_1__[\"Box\"], {\n          sx: {\n            flex: 1,\n            // background: \"maroon\",\n            display: \"flex\",\n            justifyContent: \"space-evenly\",\n            alignItems: \"center\"\n          },\n          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_mui_icons_material_AutoModeOutlined__WEBPACK_IMPORTED_MODULE_2___default.a, {}, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 58,\n            columnNumber: 13\n          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_mui_icons_material_Forum__WEBPACK_IMPORTED_MODULE_3___default.a, {}, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 59,\n            columnNumber: 13\n          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_mui_icons_material_MoreVert__WEBPACK_IMPORTED_MODULE_4___default.a, {}, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 60,\n            columnNumber: 13\n          }, undefined)]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 49,\n          columnNumber: 11\n        }, undefined)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 24,\n        columnNumber: 9\n      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_mui_material__WEBPACK_IMPORTED_MODULE_1__[\"Grid\"], {\n        item: true,\n        md: 8.5,\n        sx: {\n          display: \"flex\",\n          justifyContent: \"space-between\",\n          alignItems: \"center\"\n        },\n        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_mui_material__WEBPACK_IMPORTED_MODULE_1__[\"Box\"], {\n          sx: {\n            minWidth: \"24%\",\n            height: \"100%\",\n            width: \"80%\",\n            padding: \"8px\",\n            // justifyContent: \"space-evenly\",\n            display: \"flex\",\n            alignItems: \"center\" // background: \"yellow\",\n\n          },\n          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_mui_material__WEBPACK_IMPORTED_MODULE_1__[\"Avatar\"], {\n            src: \"\",\n            alt: \"Boom\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 85,\n            columnNumber: 13\n          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_mui_material__WEBPACK_IMPORTED_MODULE_1__[\"Typography\"], {\n            color: \"#eee\",\n            fontWeight: \"600\",\n            margin: \"0 16px\",\n            fontSize: \"18px\",\n            children: \"Name of Monday\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 86,\n            columnNumber: 13\n          }, undefined)]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 72,\n          columnNumber: 11\n        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_mui_material__WEBPACK_IMPORTED_MODULE_1__[\"Box\"], {\n          sx: {\n            minWwidth: \"120px\",\n            height: \"100%\",\n            // background: \"maroon\",\n            display: \"flex\",\n            justifyContent: \"space-evenly\",\n            alignItems: \"center\"\n          },\n          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_mui_icons_material_Search__WEBPACK_IMPORTED_MODULE_5___default.a, {\n            sx: {\n              fill: \"#eee\"\n            }\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 105,\n            columnNumber: 13\n          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_chatOptions__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {}, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 110,\n            columnNumber: 13\n          }, undefined)]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 95,\n          columnNumber: 11\n        }, undefined)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 63,\n        columnNumber: 9\n      }, undefined)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 23,\n      columnNumber: 7\n    }, undefined)\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 17,\n    columnNumber: 5\n  }, undefined);\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Navbar);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL25hdmJhci9pbmRleC5qc3g/ZGQwNyJdLCJuYW1lcyI6WyJOYXZiYXIiLCJjdXJyZW50UHJvZmlsZSIsImlkIiwibmFtZSIsInBpY3R1cmUiLCJzdGF0dXMiLCJoZWlnaHQiLCJiYWNrZ3JvdW5kIiwiY29sb3IiLCJwYWRkaW5nIiwiZGlzcGxheSIsImZsZXgiLCJ2ZXJ0aWNhbCIsImhvcml6b250YWwiLCJqdXN0aWZ5Q29udGVudCIsImFsaWduSXRlbXMiLCJtaW5XaWR0aCIsIndpZHRoIiwibWluV3dpZHRoIiwiZmlsbCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsTUFBTUEsTUFBTSxHQUFHLE1BQU07QUFDbkIsUUFBTUMsY0FBYyxHQUFHO0FBQ3JCQyxNQUFFLEVBQUUsQ0FEaUI7QUFFckJDLFFBQUksRUFBRSxTQUZlO0FBR3JCQyxXQUFPLEVBQUUsNkNBSFk7QUFJckJDLFVBQU0sRUFBRTtBQUphLEdBQXZCO0FBTUEsc0JBQ0UscUVBQUMsaURBQUQ7QUFDRSxNQUFFLEVBQUU7QUFDRkMsWUFBTSxFQUFFLE1BRE47QUFFRkMsZ0JBQVUsRUFBRTtBQUZWLEtBRE47QUFBQSwyQkFNRSxxRUFBQyxrREFBRDtBQUFNLGVBQVMsTUFBZjtBQUFBLDhCQUNFLHFFQUFDLGtEQUFEO0FBQ0UsWUFBSSxNQUROO0FBRUUsVUFBRSxFQUFFLEdBRk47QUFHRSxVQUFFLEVBQUU7QUFDRjtBQUNBQyxlQUFLLEVBQUUsTUFGTDtBQUdGRixnQkFBTSxFQUFFLE1BSE47QUFJRkcsaUJBQU8sRUFBRSxLQUpQO0FBS0ZDLGlCQUFPLEVBQUU7QUFMUCxTQUhOO0FBQUEsZ0NBV0UscUVBQUMsaURBQUQ7QUFDRSxZQUFFLEVBQUU7QUFDRkMsZ0JBQUksRUFBRTtBQURKLFdBRE47QUFBQSxpQ0FLRSxxRUFBQyxtREFBRDtBQUFPLGlCQUFLLEVBQUMsU0FBYjtBQUF1Qix3QkFBWSxFQUFFVixjQUFjLENBQUNJLE1BQWYsS0FBMEIsV0FBMUIsR0FBd0MsR0FBeEMsR0FBOEMsRUFBbkY7QUFDRSx3QkFBWSxFQUFFO0FBQ1pPLHNCQUFRLEVBQUUsUUFERTtBQUVaQyx3QkFBVSxFQUFFO0FBRkEsYUFEaEI7QUFBQSxtQ0FNRSxxRUFBQyxvREFBRDtBQUFRLGlCQUFHLEVBQUVaLGNBQWMsQ0FBQ0csT0FBNUI7QUFBcUMsaUJBQUcsRUFBQztBQUF6QztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBTkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUxGO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBWEYsZUF5QkUscUVBQUMsaURBQUQ7QUFDRSxZQUFFLEVBQUU7QUFDRk8sZ0JBQUksRUFBRSxDQURKO0FBRUY7QUFDQUQsbUJBQU8sRUFBRSxNQUhQO0FBSUZJLDBCQUFjLEVBQUUsY0FKZDtBQUtGQyxzQkFBVSxFQUFFO0FBTFYsV0FETjtBQUFBLGtDQVNFLHFFQUFDLDJFQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsdUJBVEYsZUFVRSxxRUFBQyxnRUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLHVCQVZGLGVBV0UscUVBQUMsbUVBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSx1QkFYRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBekJGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFERixlQXdDRSxxRUFBQyxrREFBRDtBQUNFLFlBQUksTUFETjtBQUVFLFVBQUUsRUFBRSxHQUZOO0FBR0UsVUFBRSxFQUFFO0FBQ0ZMLGlCQUFPLEVBQUUsTUFEUDtBQUVGSSx3QkFBYyxFQUFFLGVBRmQ7QUFHRkMsb0JBQVUsRUFBRTtBQUhWLFNBSE47QUFBQSxnQ0FTRSxxRUFBQyxpREFBRDtBQUNFLFlBQUUsRUFBRTtBQUNGQyxvQkFBUSxFQUFFLEtBRFI7QUFFRlYsa0JBQU0sRUFBRSxNQUZOO0FBR0ZXLGlCQUFLLEVBQUUsS0FITDtBQUlGUixtQkFBTyxFQUFFLEtBSlA7QUFNRjtBQUNBQyxtQkFBTyxFQUFFLE1BUFA7QUFRRkssc0JBQVUsRUFBRSxRQVJWLENBU0Y7O0FBVEUsV0FETjtBQUFBLGtDQWFFLHFFQUFDLG9EQUFEO0FBQVEsZUFBRyxFQUFDLEVBQVo7QUFBZSxlQUFHLEVBQUM7QUFBbkI7QUFBQTtBQUFBO0FBQUE7QUFBQSx1QkFiRixlQWNFLHFFQUFDLHdEQUFEO0FBQ0UsaUJBQUssRUFBRSxNQURUO0FBRUUsc0JBQVUsRUFBRSxLQUZkO0FBR0Usa0JBQU0sRUFBRSxRQUhWO0FBSUUsb0JBQVEsRUFBRSxNQUpaO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHVCQWRGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFURixlQWdDRSxxRUFBQyxpREFBRDtBQUNFLFlBQUUsRUFBRTtBQUNGRyxxQkFBUyxFQUFFLE9BRFQ7QUFFRlosa0JBQU0sRUFBRSxNQUZOO0FBR0Y7QUFDQUksbUJBQU8sRUFBRSxNQUpQO0FBS0ZJLDBCQUFjLEVBQUUsY0FMZDtBQU1GQyxzQkFBVSxFQUFFO0FBTlYsV0FETjtBQUFBLGtDQVVFLHFFQUFDLGlFQUFEO0FBQ0UsY0FBRSxFQUFFO0FBQ0ZJLGtCQUFJLEVBQUU7QUFESjtBQUROO0FBQUE7QUFBQTtBQUFBO0FBQUEsdUJBVkYsZUFlRSxxRUFBQyxvREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLHVCQWZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFoQ0Y7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQXhDRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFORjtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBREY7QUFvR0QsQ0EzR0Q7O0FBNkdlbkIscUVBQWYiLCJmaWxlIjoiLi9jb21wb25lbnRzL25hdmJhci9pbmRleC5qc3guanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBCb3gsIEdyaWQsIEF2YXRhciwgVHlwb2dyYXBoeSwgQmFkZ2UgfSBmcm9tIFwiQG11aS9tYXRlcmlhbFwiO1xuaW1wb3J0IEF1dG9Nb2RlT3V0bGluZWRJY29uIGZyb20gXCJAbXVpL2ljb25zLW1hdGVyaWFsL0F1dG9Nb2RlT3V0bGluZWRcIjtcbmltcG9ydCBGb3J1bUljb24gZnJvbSBcIkBtdWkvaWNvbnMtbWF0ZXJpYWwvRm9ydW1cIjtcbmltcG9ydCBNb3JlVmVydEljb24gZnJvbSBcIkBtdWkvaWNvbnMtbWF0ZXJpYWwvTW9yZVZlcnRcIjtcbmltcG9ydCBTZWFyY2hJY29uIGZyb20gXCJAbXVpL2ljb25zLW1hdGVyaWFsL1NlYXJjaFwiO1xuaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IENoYXRPcHRpb25zIGZyb20gXCIuL2NoYXRPcHRpb25zXCI7XG5cbmNvbnN0IE5hdmJhciA9ICgpID0+IHtcbiAgY29uc3QgY3VycmVudFByb2ZpbGUgPSB7XG4gICAgaWQ6IDEsXG4gICAgbmFtZTogXCJLYXJ0aGlrXCIsXG4gICAgcGljdHVyZTogXCJodHRwczovL2ltYWdlLmliYi5jby9rMHdWVG0vcHJvZmlsZV9waWMuanBnXCIsXG4gICAgc3RhdHVzOiBcIkF2YWlsYWJsZVwiLFxuICB9O1xuICByZXR1cm4gKFxuICAgIDxCb3hcbiAgICAgIHN4PXt7XG4gICAgICAgIGhlaWdodDogXCIxMHZoXCIsXG4gICAgICAgIGJhY2tncm91bmQ6IFwiIzExMVwiLFxuICAgICAgfX1cbiAgICA+XG4gICAgICA8R3JpZCBjb250YWluZXI+XG4gICAgICAgIDxHcmlkXG4gICAgICAgICAgaXRlbVxuICAgICAgICAgIG1kPXszLjV9XG4gICAgICAgICAgc3g9e3tcbiAgICAgICAgICAgIC8vIGJhY2tncm91bmQ6IFwicGlua1wiLFxuICAgICAgICAgICAgY29sb3I6IFwiI2VlZVwiLFxuICAgICAgICAgICAgaGVpZ2h0OiBcIjEwdmhcIixcbiAgICAgICAgICAgIHBhZGRpbmc6IFwiOHB4XCIsXG4gICAgICAgICAgICBkaXNwbGF5OiBcImZsZXhcIixcbiAgICAgICAgICB9fVxuICAgICAgICA+XG4gICAgICAgICAgPEJveFxuICAgICAgICAgICAgc3g9e3tcbiAgICAgICAgICAgICAgZmxleDogMS41LFxuICAgICAgICAgICAgfX1cbiAgICAgICAgICA+XG4gICAgICAgICAgICA8QmFkZ2UgY29sb3I9XCJzdWNjZXNzXCIgYmFkZ2VDb250ZW50PXtjdXJyZW50UHJvZmlsZS5zdGF0dXMgPT09IFwiQXZhaWxhYmxlXCIgPyBcIiBcIiA6IFwiXCIgfVxuICAgICAgICAgICAgICBhbmNob3JPcmlnaW49e3tcbiAgICAgICAgICAgICAgICB2ZXJ0aWNhbDogXCJib3R0b21cIixcbiAgICAgICAgICAgICAgICBob3Jpem9udGFsOiBcInJpZ2h0XCIsXG4gICAgICAgICAgICAgIH19XG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIDxBdmF0YXIgc3JjPXtjdXJyZW50UHJvZmlsZS5waWN0dXJlfSBhbHQ9XCJCb29tXCIgLz5cbiAgICAgICAgICAgIDwvQmFkZ2U+XG4gICAgICAgICAgPC9Cb3g+XG4gICAgICAgICAgPEJveFxuICAgICAgICAgICAgc3g9e3tcbiAgICAgICAgICAgICAgZmxleDogMSxcbiAgICAgICAgICAgICAgLy8gYmFja2dyb3VuZDogXCJtYXJvb25cIixcbiAgICAgICAgICAgICAgZGlzcGxheTogXCJmbGV4XCIsXG4gICAgICAgICAgICAgIGp1c3RpZnlDb250ZW50OiBcInNwYWNlLWV2ZW5seVwiLFxuICAgICAgICAgICAgICBhbGlnbkl0ZW1zOiBcImNlbnRlclwiLFxuICAgICAgICAgICAgfX1cbiAgICAgICAgICA+XG4gICAgICAgICAgICA8QXV0b01vZGVPdXRsaW5lZEljb24gLz5cbiAgICAgICAgICAgIDxGb3J1bUljb24gLz5cbiAgICAgICAgICAgIDxNb3JlVmVydEljb24gLz5cbiAgICAgICAgICA8L0JveD5cbiAgICAgICAgPC9HcmlkPlxuICAgICAgICA8R3JpZFxuICAgICAgICAgIGl0ZW1cbiAgICAgICAgICBtZD17OC41fVxuICAgICAgICAgIHN4PXt7XG4gICAgICAgICAgICBkaXNwbGF5OiBcImZsZXhcIixcbiAgICAgICAgICAgIGp1c3RpZnlDb250ZW50OiBcInNwYWNlLWJldHdlZW5cIixcbiAgICAgICAgICAgIGFsaWduSXRlbXM6IFwiY2VudGVyXCIsXG4gICAgICAgICAgfX1cbiAgICAgICAgPlxuICAgICAgICAgIDxCb3hcbiAgICAgICAgICAgIHN4PXt7XG4gICAgICAgICAgICAgIG1pbldpZHRoOiBcIjI0JVwiLFxuICAgICAgICAgICAgICBoZWlnaHQ6IFwiMTAwJVwiLFxuICAgICAgICAgICAgICB3aWR0aDogXCI4MCVcIixcbiAgICAgICAgICAgICAgcGFkZGluZzogXCI4cHhcIixcblxuICAgICAgICAgICAgICAvLyBqdXN0aWZ5Q29udGVudDogXCJzcGFjZS1ldmVubHlcIixcbiAgICAgICAgICAgICAgZGlzcGxheTogXCJmbGV4XCIsXG4gICAgICAgICAgICAgIGFsaWduSXRlbXM6IFwiY2VudGVyXCIsXG4gICAgICAgICAgICAgIC8vIGJhY2tncm91bmQ6IFwieWVsbG93XCIsXG4gICAgICAgICAgICB9fVxuICAgICAgICAgID5cbiAgICAgICAgICAgIDxBdmF0YXIgc3JjPVwiXCIgYWx0PVwiQm9vbVwiIC8+XG4gICAgICAgICAgICA8VHlwb2dyYXBoeVxuICAgICAgICAgICAgICBjb2xvcj17XCIjZWVlXCJ9XG4gICAgICAgICAgICAgIGZvbnRXZWlnaHQ9e1wiNjAwXCJ9XG4gICAgICAgICAgICAgIG1hcmdpbj17XCIwIDE2cHhcIn1cbiAgICAgICAgICAgICAgZm9udFNpemU9e1wiMThweFwifVxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICBOYW1lIG9mIE1vbmRheVxuICAgICAgICAgICAgPC9UeXBvZ3JhcGh5PlxuICAgICAgICAgIDwvQm94PlxuICAgICAgICAgIDxCb3hcbiAgICAgICAgICAgIHN4PXt7XG4gICAgICAgICAgICAgIG1pbld3aWR0aDogXCIxMjBweFwiLFxuICAgICAgICAgICAgICBoZWlnaHQ6IFwiMTAwJVwiLFxuICAgICAgICAgICAgICAvLyBiYWNrZ3JvdW5kOiBcIm1hcm9vblwiLFxuICAgICAgICAgICAgICBkaXNwbGF5OiBcImZsZXhcIixcbiAgICAgICAgICAgICAganVzdGlmeUNvbnRlbnQ6IFwic3BhY2UtZXZlbmx5XCIsXG4gICAgICAgICAgICAgIGFsaWduSXRlbXM6IFwiY2VudGVyXCIsXG4gICAgICAgICAgICB9fVxuICAgICAgICAgID5cbiAgICAgICAgICAgIDxTZWFyY2hJY29uXG4gICAgICAgICAgICAgIHN4PXt7XG4gICAgICAgICAgICAgICAgZmlsbDogXCIjZWVlXCIsXG4gICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAvPlxuICAgICAgICAgICAgPENoYXRPcHRpb25zIC8+XG4gICAgICAgICAgPC9Cb3g+XG4gICAgICAgIDwvR3JpZD5cbiAgICAgIDwvR3JpZD5cbiAgICA8L0JveD5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IE5hdmJhcjtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/navbar/index.jsx\n");

/***/ }),

/***/ "./node_modules/bootstrap/dist/css/bootstrap.min.css":
/*!***********************************************************!*\
  !*** ./node_modules/bootstrap/dist/css/bootstrap.min.css ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiIuL25vZGVfbW9kdWxlcy9ib290c3RyYXAvZGlzdC9jc3MvYm9vdHN0cmFwLm1pbi5jc3MuanMiLCJzb3VyY2VzQ29udGVudCI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./node_modules/bootstrap/dist/css/bootstrap.min.css\n");

/***/ }),

/***/ "./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../styles/globals.css */ \"./styles/globals.css\");\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_globals_css__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var bootstrap_dist_css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! bootstrap/dist/css/bootstrap.min.css */ \"./node_modules/bootstrap/dist/css/bootstrap.min.css\");\n/* harmony import */ var bootstrap_dist_css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(bootstrap_dist_css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @mui/material */ \"@mui/material\");\n/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_mui_material__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _components_navbar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/navbar */ \"./components/navbar/index.jsx\");\n\nvar _jsxFileName = \"/home/dercio/AppWorld/appworld-templates/whatsapp-clone/pages/_app.js\";\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n\n\n\n\n\nfunction MyApp({\n  Component,\n  pageProps\n}) {\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_mui_material__WEBPACK_IMPORTED_MODULE_3__[\"Box\"], {\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_components_navbar__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {}, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 9,\n      columnNumber: 7\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(Component, _objectSpread({}, pageProps), void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 10,\n      columnNumber: 7\n    }, this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 8,\n    columnNumber: 5\n  }, this);\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (MyApp);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9fYXBwLmpzP2Q1MzAiXSwibmFtZXMiOlsiTXlBcHAiLCJDb21wb25lbnQiLCJwYWdlUHJvcHMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxTQUFTQSxLQUFULENBQWU7QUFBRUMsV0FBRjtBQUFhQztBQUFiLENBQWYsRUFBeUM7QUFDdkMsc0JBQ0UscUVBQUMsaURBQUQ7QUFBQSw0QkFDRSxxRUFBQywwREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBREYsZUFFRSxxRUFBQyxTQUFELG9CQUFlQSxTQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFGRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFERjtBQU1EOztBQUVjRixvRUFBZiIsImZpbGUiOiIuL3BhZ2VzL19hcHAuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgJy4uL3N0eWxlcy9nbG9iYWxzLmNzcydcbmltcG9ydCAnYm9vdHN0cmFwL2Rpc3QvY3NzL2Jvb3RzdHJhcC5taW4uY3NzJ1xuaW1wb3J0IHsgIEJveCB9IGZyb20gJ0BtdWkvbWF0ZXJpYWwnXG5pbXBvcnQgTmF2YmFyIGZyb20gJy4uL2NvbXBvbmVudHMvbmF2YmFyJ1xuXG5mdW5jdGlvbiBNeUFwcCh7IENvbXBvbmVudCwgcGFnZVByb3BzIH0pIHtcbiAgcmV0dXJuKFxuICAgIDxCb3g+XG4gICAgICA8TmF2YmFyIC8+XG4gICAgICA8Q29tcG9uZW50IHsuLi5wYWdlUHJvcHN9IC8+XG4gICAgPC9Cb3g+XG4gIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgTXlBcHBcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/_app.js\n");

/***/ }),

/***/ "./styles/globals.css":
/*!****************************!*\
  !*** ./styles/globals.css ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiIuL3N0eWxlcy9nbG9iYWxzLmNzcy5qcyIsInNvdXJjZXNDb250ZW50IjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./styles/globals.css\n");

/***/ }),

/***/ 0:
/*!****************************************!*\
  !*** multi private-next-pages/_app.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! private-next-pages/_app.js */"./pages/_app.js");


/***/ }),

/***/ "@mui/icons-material/AutoModeOutlined":
/*!*******************************************************!*\
  !*** external "@mui/icons-material/AutoModeOutlined" ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@mui/icons-material/AutoModeOutlined\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbXVpL2ljb25zLW1hdGVyaWFsL0F1dG9Nb2RlT3V0bGluZWRcIj80YzRlIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6IkBtdWkvaWNvbnMtbWF0ZXJpYWwvQXV0b01vZGVPdXRsaW5lZC5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBtdWkvaWNvbnMtbWF0ZXJpYWwvQXV0b01vZGVPdXRsaW5lZFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///@mui/icons-material/AutoModeOutlined\n");

/***/ }),

/***/ "@mui/icons-material/Forum":
/*!********************************************!*\
  !*** external "@mui/icons-material/Forum" ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@mui/icons-material/Forum\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbXVpL2ljb25zLW1hdGVyaWFsL0ZvcnVtXCI/ODlmMiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSIsImZpbGUiOiJAbXVpL2ljb25zLW1hdGVyaWFsL0ZvcnVtLmpzIiwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG11aS9pY29ucy1tYXRlcmlhbC9Gb3J1bVwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///@mui/icons-material/Forum\n");

/***/ }),

/***/ "@mui/icons-material/MoreVert":
/*!***********************************************!*\
  !*** external "@mui/icons-material/MoreVert" ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@mui/icons-material/MoreVert\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbXVpL2ljb25zLW1hdGVyaWFsL01vcmVWZXJ0XCI/MjA2YSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSIsImZpbGUiOiJAbXVpL2ljb25zLW1hdGVyaWFsL01vcmVWZXJ0LmpzIiwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG11aS9pY29ucy1tYXRlcmlhbC9Nb3JlVmVydFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///@mui/icons-material/MoreVert\n");

/***/ }),

/***/ "@mui/icons-material/Search":
/*!*********************************************!*\
  !*** external "@mui/icons-material/Search" ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@mui/icons-material/Search\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbXVpL2ljb25zLW1hdGVyaWFsL1NlYXJjaFwiPzQwNzIiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoiQG11aS9pY29ucy1tYXRlcmlhbC9TZWFyY2guanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbXVpL2ljb25zLW1hdGVyaWFsL1NlYXJjaFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///@mui/icons-material/Search\n");

/***/ }),

/***/ "@mui/material":
/*!********************************!*\
  !*** external "@mui/material" ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@mui/material\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbXVpL21hdGVyaWFsXCI/YTcxZCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSIsImZpbGUiOiJAbXVpL21hdGVyaWFsLmpzIiwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG11aS9tYXRlcmlhbFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///@mui/material\n");

/***/ }),

/***/ "@mui/material/Button":
/*!***************************************!*\
  !*** external "@mui/material/Button" ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@mui/material/Button\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbXVpL21hdGVyaWFsL0J1dHRvblwiPzkyOTciXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoiQG11aS9tYXRlcmlhbC9CdXR0b24uanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbXVpL21hdGVyaWFsL0J1dHRvblwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///@mui/material/Button\n");

/***/ }),

/***/ "@mui/material/Menu":
/*!*************************************!*\
  !*** external "@mui/material/Menu" ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@mui/material/Menu\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbXVpL21hdGVyaWFsL01lbnVcIj85MmY0Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6IkBtdWkvbWF0ZXJpYWwvTWVudS5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBtdWkvbWF0ZXJpYWwvTWVudVwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///@mui/material/Menu\n");

/***/ }),

/***/ "@mui/material/MenuItem":
/*!*****************************************!*\
  !*** external "@mui/material/MenuItem" ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@mui/material/MenuItem\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbXVpL21hdGVyaWFsL01lbnVJdGVtXCI/NGE1YyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSIsImZpbGUiOiJAbXVpL21hdGVyaWFsL01lbnVJdGVtLmpzIiwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG11aS9tYXRlcmlhbC9NZW51SXRlbVwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///@mui/material/MenuItem\n");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdFwiPzU4OGUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoicmVhY3QuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///react\n");

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