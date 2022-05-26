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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @mui/material */ \"@mui/material\");\n/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_mui_material__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _mui_icons_material_AutoModeOutlined__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @mui/icons-material/AutoModeOutlined */ \"@mui/icons-material/AutoModeOutlined\");\n/* harmony import */ var _mui_icons_material_AutoModeOutlined__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_mui_icons_material_AutoModeOutlined__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _mui_icons_material_Forum__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @mui/icons-material/Forum */ \"@mui/icons-material/Forum\");\n/* harmony import */ var _mui_icons_material_Forum__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_mui_icons_material_Forum__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _mui_icons_material_MoreVert__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @mui/icons-material/MoreVert */ \"@mui/icons-material/MoreVert\");\n/* harmony import */ var _mui_icons_material_MoreVert__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_mui_icons_material_MoreVert__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _mui_icons_material_Search__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @mui/icons-material/Search */ \"@mui/icons-material/Search\");\n/* harmony import */ var _mui_icons_material_Search__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_mui_icons_material_Search__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var _chatOptions__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./chatOptions */ \"./components/navbar/chatOptions.jsx\");\n/* harmony import */ var _settings__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./settings */ \"./components/navbar/settings.jsx\");\n\nvar _jsxFileName = \"/home/dercio/AppWorld/appworld-templates/whatsapp-clone/components/navbar/index.jsx\";\n\n\n\n\n\n\n\n\n\nconst Navbar = () => {\n  const currentProfile = {\n    id: 1,\n    name: \"Karthik\",\n    picture: \"https://image.ibb.co/k0wVTm/profile_pic.jpg\",\n    status: \"Available\"\n  };\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_mui_material__WEBPACK_IMPORTED_MODULE_1__[\"Paper\"], {\n    elevation: 5,\n    sx: {\n      height: \"10vh\",\n      borderRadius: '0px',\n      background: \"#111\",\n      borderBottom: '1px solid grey'\n    },\n    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_mui_material__WEBPACK_IMPORTED_MODULE_1__[\"Grid\"], {\n      container: true,\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_mui_material__WEBPACK_IMPORTED_MODULE_1__[\"Grid\"], {\n        item: true,\n        md: 3.5,\n        sx: {\n          // background: \"pink\",\n          color: \"#eee\",\n          height: \"10vh\",\n          padding: \"8px\",\n          display: \"flex\"\n        },\n        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_mui_material__WEBPACK_IMPORTED_MODULE_1__[\"Box\"], {\n          sx: {\n            flex: 1.5\n          },\n          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_mui_material__WEBPACK_IMPORTED_MODULE_1__[\"Badge\"], {\n            color: \"success\",\n            badgeContent: currentProfile.status === \"Available\" ? \" \" : \"\",\n            anchorOrigin: {\n              vertical: \"bottom\",\n              horizontal: \"right\"\n            },\n            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_mui_material__WEBPACK_IMPORTED_MODULE_1__[\"Avatar\"], {\n              src: currentProfile.picture,\n              alt: \"Boom\"\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 49,\n              columnNumber: 15\n            }, undefined)\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 43,\n            columnNumber: 13\n          }, undefined)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 38,\n          columnNumber: 11\n        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_mui_material__WEBPACK_IMPORTED_MODULE_1__[\"Box\"], {\n          sx: {\n            flex: 1,\n            // background: \"maroon\",\n            display: \"flex\",\n            justifyContent: \"space-evenly\",\n            alignItems: \"center\"\n          },\n          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_mui_icons_material_AutoModeOutlined__WEBPACK_IMPORTED_MODULE_2___default.a, {}, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 61,\n            columnNumber: 13\n          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_mui_icons_material_Forum__WEBPACK_IMPORTED_MODULE_3___default.a, {}, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 62,\n            columnNumber: 13\n          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_settings__WEBPACK_IMPORTED_MODULE_8__[\"default\"], {}, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 63,\n            columnNumber: 13\n          }, undefined)]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 52,\n          columnNumber: 11\n        }, undefined)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 27,\n        columnNumber: 9\n      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_mui_material__WEBPACK_IMPORTED_MODULE_1__[\"Grid\"], {\n        item: true,\n        md: 8.5,\n        sx: {\n          display: \"flex\",\n          justifyContent: \"space-between\",\n          alignItems: \"center\"\n        },\n        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_mui_material__WEBPACK_IMPORTED_MODULE_1__[\"Box\"], {\n          sx: {\n            minWidth: \"24%\",\n            height: \"100%\",\n            width: \"80%\",\n            padding: \"8px\",\n            // justifyContent: \"space-evenly\",\n            display: \"flex\",\n            alignItems: \"center\" // background: \"yellow\",\n\n          },\n          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_mui_material__WEBPACK_IMPORTED_MODULE_1__[\"Avatar\"], {\n            src: \"\",\n            alt: \"Boom\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 88,\n            columnNumber: 13\n          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_mui_material__WEBPACK_IMPORTED_MODULE_1__[\"Typography\"], {\n            color: \"#eee\",\n            fontWeight: \"600\",\n            margin: \"0 16px\",\n            fontSize: \"18px\",\n            children: \"Name of Monday\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 89,\n            columnNumber: 13\n          }, undefined)]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 75,\n          columnNumber: 11\n        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_mui_material__WEBPACK_IMPORTED_MODULE_1__[\"Box\"], {\n          sx: {\n            minWwidth: \"120px\",\n            height: \"100%\",\n            // background: \"maroon\",\n            display: \"flex\",\n            justifyContent: \"space-evenly\",\n            alignItems: \"center\"\n          },\n          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_mui_icons_material_Search__WEBPACK_IMPORTED_MODULE_5___default.a, {\n            sx: {\n              fill: \"#eee\"\n            }\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 108,\n            columnNumber: 13\n          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_chatOptions__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {}, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 113,\n            columnNumber: 13\n          }, undefined)]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 98,\n          columnNumber: 11\n        }, undefined)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 66,\n        columnNumber: 9\n      }, undefined)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 26,\n      columnNumber: 7\n    }, undefined)\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 18,\n    columnNumber: 5\n  }, undefined);\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Navbar);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL25hdmJhci9pbmRleC5qc3g/ZGQwNyJdLCJuYW1lcyI6WyJOYXZiYXIiLCJjdXJyZW50UHJvZmlsZSIsImlkIiwibmFtZSIsInBpY3R1cmUiLCJzdGF0dXMiLCJoZWlnaHQiLCJib3JkZXJSYWRpdXMiLCJiYWNrZ3JvdW5kIiwiYm9yZGVyQm90dG9tIiwiY29sb3IiLCJwYWRkaW5nIiwiZGlzcGxheSIsImZsZXgiLCJ2ZXJ0aWNhbCIsImhvcml6b250YWwiLCJqdXN0aWZ5Q29udGVudCIsImFsaWduSXRlbXMiLCJtaW5XaWR0aCIsIndpZHRoIiwibWluV3dpZHRoIiwiZmlsbCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsTUFBTUEsTUFBTSxHQUFHLE1BQU07QUFDbkIsUUFBTUMsY0FBYyxHQUFHO0FBQ3JCQyxNQUFFLEVBQUUsQ0FEaUI7QUFFckJDLFFBQUksRUFBRSxTQUZlO0FBR3JCQyxXQUFPLEVBQUUsNkNBSFk7QUFJckJDLFVBQU0sRUFBRTtBQUphLEdBQXZCO0FBTUEsc0JBQ0UscUVBQUMsbURBQUQ7QUFBTyxhQUFTLEVBQUUsQ0FBbEI7QUFDRSxNQUFFLEVBQUU7QUFDRkMsWUFBTSxFQUFFLE1BRE47QUFFRkMsa0JBQVksRUFBQyxLQUZYO0FBR0ZDLGdCQUFVLEVBQUUsTUFIVjtBQUlGQyxrQkFBWSxFQUFDO0FBSlgsS0FETjtBQUFBLDJCQVFFLHFFQUFDLGtEQUFEO0FBQU0sZUFBUyxNQUFmO0FBQUEsOEJBQ0UscUVBQUMsa0RBQUQ7QUFDRSxZQUFJLE1BRE47QUFFRSxVQUFFLEVBQUUsR0FGTjtBQUdFLFVBQUUsRUFBRTtBQUNGO0FBQ0FDLGVBQUssRUFBRSxNQUZMO0FBR0ZKLGdCQUFNLEVBQUUsTUFITjtBQUlGSyxpQkFBTyxFQUFFLEtBSlA7QUFLRkMsaUJBQU8sRUFBRTtBQUxQLFNBSE47QUFBQSxn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ZW50IjpbImltcG9ydCB7IEJveCwgR3JpZCwgQXZhdGFyLCBUeXBvZ3JhcGh5LCBCYWRnZSAsIFBhcGVyIH0gZnJvbSBcIkBtdWkvbWF0ZXJpYWxcIjtcbmltcG9ydCBBdXRvTW9kZU91dGxpbmVkSWNvbiBmcm9tIFwiQG11aS9pY29ucy1tYXRlcmlhbC9BdXRvTW9kZU91dGxpbmVkXCI7XG5pbXBvcnQgRm9ydW1JY29uIGZyb20gXCJAbXVpL2ljb25zLW1hdGVyaWFsL0ZvcnVtXCI7XG5pbXBvcnQgTW9yZVZlcnRJY29uIGZyb20gXCJAbXVpL2ljb25zLW1hdGVyaWFsL01vcmVWZXJ0XCI7XG5pbXBvcnQgU2VhcmNoSWNvbiBmcm9tIFwiQG11aS9pY29ucy1tYXRlcmlhbC9TZWFyY2hcIjtcbmltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBDaGF0T3B0aW9ucyBmcm9tIFwiLi9jaGF0T3B0aW9uc1wiO1xuaW1wb3J0IFNldHRpbmdzIGZyb20gXCIuL3NldHRpbmdzXCI7XG5cbmNvbnN0IE5hdmJhciA9ICgpID0+IHtcbiAgY29uc3QgY3VycmVudFByb2ZpbGUgPSB7XG4gICAgaWQ6IDEsXG4gICAgbmFtZTogXCJLYXJ0aGlrXCIsXG4gICAgcGljdHVyZTogXCJodHRwczovL2ltYWdlLmliYi5jby9rMHdWVG0vcHJvZmlsZV9waWMuanBnXCIsXG4gICAgc3RhdHVzOiBcIkF2YWlsYWJsZVwiLFxuICB9O1xuICByZXR1cm4gKFxuICAgIDxQYXBlciBlbGV2YXRpb249ezV9XG4gICAgICBzeD17e1xuICAgICAgICBoZWlnaHQ6IFwiMTB2aFwiLFxuICAgICAgICBib3JkZXJSYWRpdXM6JzBweCcsXG4gICAgICAgIGJhY2tncm91bmQ6IFwiIzExMVwiLFxuICAgICAgICBib3JkZXJCb3R0b206JzFweCBzb2xpZCBncmV5JyxcbiAgICAgIH19XG4gICAgPlxuICAgICAgPEdyaWQgY29udGFpbmVyPlxuICAgICAgICA8R3JpZFxuICAgICAgICAgIGl0ZW1cbiAgICAgICAgICBtZD17My41fVxuICAgICAgICAgIHN4PXt7XG4gICAgICAgICAgICAvLyBiYWNrZ3JvdW5kOiBcInBpbmtcIixcbiAgICAgICAgICAgIGNvbG9yOiBcIiNlZWVcIixcbiAgICAgICAgICAgIGhlaWdodDogXCIxMHZoXCIsXG4gICAgICAgICAgICBwYWRkaW5nOiBcIjhweFwiLFxuICAgICAgICAgICAgZGlzcGxheTogXCJmbGV4XCIsXG4gICAgICAgICAgfX1cbiAgICAgICAgPlxuICAgICAgICAgIDxCb3hcbiAgICAgICAgICAgIHN4PXt7XG4gICAgICAgICAgICAgIGZsZXg6IDEuNSxcbiAgICAgICAgICAgIH19XG4gICAgICAgICAgPlxuICAgICAgICAgICAgPEJhZGdlIGNvbG9yPVwic3VjY2Vzc1wiIGJhZGdlQ29udGVudD17Y3VycmVudFByb2ZpbGUuc3RhdHVzID09PSBcIkF2YWlsYWJsZVwiID8gXCIgXCIgOiBcIlwiIH1cbiAgICAgICAgICAgICAgYW5jaG9yT3JpZ2luPXt7XG4gICAgICAgICAgICAgICAgdmVydGljYWw6IFwiYm90dG9tXCIsXG4gICAgICAgICAgICAgICAgaG9yaXpvbnRhbDogXCJyaWdodFwiLFxuICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICA8QXZhdGFyIHNyYz17Y3VycmVudFByb2ZpbGUucGljdHVyZX0gYWx0PVwiQm9vbVwiIC8+XG4gICAgICAgICAgICA8L0JhZGdlPlxuICAgICAgICAgIDwvQm94PlxuICAgICAgICAgIDxCb3hcbiAgICAgICAgICAgIHN4PXt7XG4gICAgICAgICAgICAgIGZsZXg6IDEsXG4gICAgICAgICAgICAgIC8vIGJhY2tncm91bmQ6IFwibWFyb29uXCIsXG4gICAgICAgICAgICAgIGRpc3BsYXk6IFwiZmxleFwiLFxuICAgICAgICAgICAgICBqdXN0aWZ5Q29udGVudDogXCJzcGFjZS1ldmVubHlcIixcbiAgICAgICAgICAgICAgYWxpZ25JdGVtczogXCJjZW50ZXJcIixcbiAgICAgICAgICAgIH19XG4gICAgICAgICAgPlxuICAgICAgICAgICAgPEF1dG9Nb2RlT3V0bGluZWRJY29uIC8+XG4gICAgICAgICAgICA8Rm9ydW1JY29uIC8+XG4gICAgICAgICAgICA8U2V0dGluZ3MgLz5cbiAgICAgICAgICA8L0JveD5cbiAgICAgICAgPC9HcmlkPlxuICAgICAgICA8R3JpZFxuICAgICAgICAgIGl0ZW1cbiAgICAgICAgICBtZD17OC41fVxuICAgICAgICAgIHN4PXt7XG4gICAgICAgICAgICBkaXNwbGF5OiBcImZsZXhcIixcbiAgICAgICAgICAgIGp1c3RpZnlDb250ZW50OiBcInNwYWNlLWJldHdlZW5cIixcbiAgICAgICAgICAgIGFsaWduSXRlbXM6IFwiY2VudGVyXCIsXG4gICAgICAgICAgfX1cbiAgICAgICAgPlxuICAgICAgICAgIDxCb3hcbiAgICAgICAgICAgIHN4PXt7XG4gICAgICAgICAgICAgIG1pbldpZHRoOiBcIjI0JVwiLFxuICAgICAgICAgICAgICBoZWlnaHQ6IFwiMTAwJVwiLFxuICAgICAgICAgICAgICB3aWR0aDogXCI4MCVcIixcbiAgICAgICAgICAgICAgcGFkZGluZzogXCI4cHhcIixcblxuICAgICAgICAgICAgICAvLyBqdXN0aWZ5Q29udGVudDogXCJzcGFjZS1ldmVubHlcIixcbiAgICAgICAgICAgICAgZGlzcGxheTogXCJmbGV4XCIsXG4gICAgICAgICAgICAgIGFsaWduSXRlbXM6IFwiY2VudGVyXCIsXG4gICAgICAgICAgICAgIC8vIGJhY2tncm91bmQ6IFwieWVsbG93XCIsXG4gICAgICAgICAgICB9fVxuICAgICAgICAgID5cbiAgICAgICAgICAgIDxBdmF0YXIgc3JjPVwiXCIgYWx0PVwiQm9vbVwiIC8+XG4gICAgICAgICAgICA8VHlwb2dyYXBoeVxuICAgICAgICAgICAgICBjb2xvcj17XCIjZWVlXCJ9XG4gICAgICAgICAgICAgIGZvbnRXZWlnaHQ9e1wiNjAwXCJ9XG4gICAgICAgICAgICAgIG1hcmdpbj17XCIwIDE2cHhcIn1cbiAgICAgICAgICAgICAgZm9udFNpemU9e1wiMThweFwifVxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICBOYW1lIG9mIE1vbmRheVxuICAgICAgICAgICAgPC9UeXBvZ3JhcGh5PlxuICAgICAgICAgIDwvQm94PlxuICAgICAgICAgIDxCb3hcbiAgICAgICAgICAgIHN4PXt7XG4gICAgICAgICAgICAgIG1pbld3aWR0aDogXCIxMjBweFwiLFxuICAgICAgICAgICAgICBoZWlnaHQ6IFwiMTAwJVwiLFxuICAgICAgICAgICAgICAvLyBiYWNrZ3JvdW5kOiBcIm1hcm9vblwiLFxuICAgICAgICAgICAgICBkaXNwbGF5OiBcImZsZXhcIixcbiAgICAgICAgICAgICAganVzdGlmeUNvbnRlbnQ6IFwic3BhY2UtZXZlbmx5XCIsXG4gICAgICAgICAgICAgIGFsaWduSXRlbXM6IFwiY2VudGVyXCIsXG4gICAgICAgICAgICB9fVxuICAgICAgICAgID5cbiAgICAgICAgICAgIDxTZWFyY2hJY29uXG4gICAgICAgICAgICAgIHN4PXt7XG4gICAgICAgICAgICAgICAgZmlsbDogXCIjZWVlXCIsXG4gICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAvPlxuICAgICAgICAgICAgPENoYXRPcHRpb25zIC8+XG4gICAgICAgICAgPC9Cb3g+XG4gICAgICAgIDwvR3JpZD5cbiAgICAgIDwvR3JpZD5cbiAgICA8L1BhcGVyPlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgTmF2YmFyO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/navbar/index.jsx\n");

/***/ }),

/***/ "./components/navbar/settings.jsx":
/*!****************************************!*\
  !*** ./components/navbar/settings.jsx ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Settings; });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _mui_material_IconButton__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @mui/material/IconButton */ \"@mui/material/IconButton\");\n/* harmony import */ var _mui_material_IconButton__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_mui_material_IconButton__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _mui_material_Menu__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @mui/material/Menu */ \"@mui/material/Menu\");\n/* harmony import */ var _mui_material_Menu__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_mui_material_Menu__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _mui_material_MenuItem__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @mui/material/MenuItem */ \"@mui/material/MenuItem\");\n/* harmony import */ var _mui_material_MenuItem__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_mui_material_MenuItem__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _mui_icons_material_MoreVert__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @mui/icons-material/MoreVert */ \"@mui/icons-material/MoreVert\");\n/* harmony import */ var _mui_icons_material_MoreVert__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_mui_icons_material_MoreVert__WEBPACK_IMPORTED_MODULE_5__);\n\nvar _jsxFileName = \"/home/dercio/AppWorld/appworld-templates/whatsapp-clone/components/navbar/settings.jsx\";\n\n\n\n\n\nfunction Settings() {\n  const [anchorEl, setAnchorEl] = react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"](null);\n  const open = Boolean(anchorEl);\n\n  const handleClick = event => {\n    setAnchorEl(event.currentTarget);\n  };\n\n  const handleClose = () => {\n    setAnchorEl(null);\n  };\n\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_mui_material_IconButton__WEBPACK_IMPORTED_MODULE_2___default.a, {\n      id: \"basic-button\",\n      \"aria-controls\": open ? \"basic-menu\" : undefined,\n      \"aria-haspopup\": \"true\",\n      \"aria-expanded\": open ? \"true\" : undefined,\n      onClick: handleClick,\n      sx: {\n        fill: \"#eee\"\n      },\n      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_mui_icons_material_MoreVert__WEBPACK_IMPORTED_MODULE_5___default.a, {}, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 29,\n        columnNumber: 9\n      }, this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 19,\n      columnNumber: 7\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_mui_material_Menu__WEBPACK_IMPORTED_MODULE_3___default.a, {\n      id: \"basic-menu\",\n      anchorEl: anchorEl,\n      open: open,\n      onClose: handleClose,\n      MenuListProps: {\n        \"aria-labelledby\": \"basic-button\"\n      },\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_mui_material_MenuItem__WEBPACK_IMPORTED_MODULE_4___default.a, {\n        onClick: handleClose,\n        children: \"Profile\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 40,\n        columnNumber: 9\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_mui_material_MenuItem__WEBPACK_IMPORTED_MODULE_4___default.a, {\n        onClick: handleClose,\n        children: \"My account\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 41,\n        columnNumber: 9\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_mui_material_MenuItem__WEBPACK_IMPORTED_MODULE_4___default.a, {\n        onClick: handleClose,\n        children: \"Settings\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 42,\n        columnNumber: 9\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_mui_material_MenuItem__WEBPACK_IMPORTED_MODULE_4___default.a, {\n        onClick: handleClose,\n        children: \"Logout\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 43,\n        columnNumber: 9\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 31,\n      columnNumber: 7\n    }, this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 18,\n    columnNumber: 5\n  }, this);\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL25hdmJhci9zZXR0aW5ncy5qc3g/MThkMSJdLCJuYW1lcyI6WyJTZXR0aW5ncyIsImFuY2hvckVsIiwic2V0QW5jaG9yRWwiLCJSZWFjdCIsIm9wZW4iLCJCb29sZWFuIiwiaGFuZGxlQ2xpY2siLCJldmVudCIsImN1cnJlbnRUYXJnZXQiLCJoYW5kbGVDbG9zZSIsInVuZGVmaW5lZCIsImZpbGwiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRWUsU0FBU0EsUUFBVCxHQUFvQjtBQUNqQyxRQUFNLENBQUNDLFFBQUQsRUFBV0MsV0FBWCxJQUEwQkMsOENBQUEsQ0FBZSxJQUFmLENBQWhDO0FBQ0EsUUFBTUMsSUFBSSxHQUFHQyxPQUFPLENBQUNKLFFBQUQsQ0FBcEI7O0FBQ0EsUUFBTUssV0FBVyxHQUFJQyxLQUFELElBQVc7QUFDN0JMLGVBQVcsQ0FBQ0ssS0FBSyxDQUFDQyxhQUFQLENBQVg7QUFDRCxHQUZEOztBQUdBLFFBQU1DLFdBQVcsR0FBRyxNQUFNO0FBQ3hCUCxlQUFXLENBQUMsSUFBRCxDQUFYO0FBQ0QsR0FGRDs7QUFJQSxzQkFDRTtBQUFBLDRCQUNFLHFFQUFDLCtEQUFEO0FBQ0UsUUFBRSxFQUFDLGNBREw7QUFFRSx1QkFBZUUsSUFBSSxHQUFHLFlBQUgsR0FBa0JNLFNBRnZDO0FBR0UsdUJBQWMsTUFIaEI7QUFJRSx1QkFBZU4sSUFBSSxHQUFHLE1BQUgsR0FBWU0sU0FKakM7QUFLRSxhQUFPLEVBQUVKLFdBTFg7QUFNRSxRQUFFLEVBQUU7QUFDRkssWUFBSSxFQUFFO0FBREosT0FOTjtBQUFBLDZCQVVFLHFFQUFDLG1FQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFWRjtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBREYsZUFhRSxxRUFBQyx5REFBRDtBQUNFLFFBQUUsRUFBQyxZQURMO0FBRUUsY0FBUSxFQUFFVixRQUZaO0FBR0UsVUFBSSxFQUFFRyxJQUhSO0FBSUUsYUFBTyxFQUFFSyxXQUpYO0FBS0UsbUJBQWEsRUFBRTtBQUNiLDJCQUFtQjtBQUROLE9BTGpCO0FBQUEsOEJBU0UscUVBQUMsNkRBQUQ7QUFBVSxlQUFPLEVBQUVBLFdBQW5CO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBVEYsZUFVRSxxRUFBQyw2REFBRDtBQUFVLGVBQU8sRUFBRUEsV0FBbkI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FWRixlQVdFLHFFQUFDLDZEQUFEO0FBQVUsZUFBTyxFQUFFQSxXQUFuQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQVhGLGVBWUUscUVBQUMsNkRBQUQ7QUFBVSxlQUFPLEVBQUVBLFdBQW5CO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBWkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBYkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREY7QUE4QkQiLCJmaWxlIjoiLi9jb21wb25lbnRzL25hdmJhci9zZXR0aW5ncy5qc3guanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBJY29uQnV0dG9uIGZyb20gXCJAbXVpL21hdGVyaWFsL0ljb25CdXR0b25cIjtcbmltcG9ydCBNZW51IGZyb20gXCJAbXVpL21hdGVyaWFsL01lbnVcIjtcbmltcG9ydCBNZW51SXRlbSBmcm9tIFwiQG11aS9tYXRlcmlhbC9NZW51SXRlbVwiO1xuaW1wb3J0IE1vcmVWZXJ0SWNvbiBmcm9tIFwiQG11aS9pY29ucy1tYXRlcmlhbC9Nb3JlVmVydFwiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBTZXR0aW5ncygpIHtcbiAgY29uc3QgW2FuY2hvckVsLCBzZXRBbmNob3JFbF0gPSBSZWFjdC51c2VTdGF0ZShudWxsKTtcbiAgY29uc3Qgb3BlbiA9IEJvb2xlYW4oYW5jaG9yRWwpO1xuICBjb25zdCBoYW5kbGVDbGljayA9IChldmVudCkgPT4ge1xuICAgIHNldEFuY2hvckVsKGV2ZW50LmN1cnJlbnRUYXJnZXQpO1xuICB9O1xuICBjb25zdCBoYW5kbGVDbG9zZSA9ICgpID0+IHtcbiAgICBzZXRBbmNob3JFbChudWxsKTtcbiAgfTtcblxuICByZXR1cm4gKFxuICAgIDxkaXY+XG4gICAgICA8SWNvbkJ1dHRvblxuICAgICAgICBpZD1cImJhc2ljLWJ1dHRvblwiXG4gICAgICAgIGFyaWEtY29udHJvbHM9e29wZW4gPyBcImJhc2ljLW1lbnVcIiA6IHVuZGVmaW5lZH1cbiAgICAgICAgYXJpYS1oYXNwb3B1cD1cInRydWVcIlxuICAgICAgICBhcmlhLWV4cGFuZGVkPXtvcGVuID8gXCJ0cnVlXCIgOiB1bmRlZmluZWR9XG4gICAgICAgIG9uQ2xpY2s9e2hhbmRsZUNsaWNrfVxuICAgICAgICBzeD17e1xuICAgICAgICAgIGZpbGw6IFwiI2VlZVwiLFxuICAgICAgICB9fVxuICAgICAgPlxuICAgICAgICA8TW9yZVZlcnRJY29uIC8+XG4gICAgICA8L0ljb25CdXR0b24+XG4gICAgICA8TWVudVxuICAgICAgICBpZD1cImJhc2ljLW1lbnVcIlxuICAgICAgICBhbmNob3JFbD17YW5jaG9yRWx9XG4gICAgICAgIG9wZW49e29wZW59XG4gICAgICAgIG9uQ2xvc2U9e2hhbmRsZUNsb3NlfVxuICAgICAgICBNZW51TGlzdFByb3BzPXt7XG4gICAgICAgICAgXCJhcmlhLWxhYmVsbGVkYnlcIjogXCJiYXNpYy1idXR0b25cIixcbiAgICAgICAgfX1cbiAgICAgID5cbiAgICAgICAgPE1lbnVJdGVtIG9uQ2xpY2s9e2hhbmRsZUNsb3NlfT5Qcm9maWxlPC9NZW51SXRlbT5cbiAgICAgICAgPE1lbnVJdGVtIG9uQ2xpY2s9e2hhbmRsZUNsb3NlfT5NeSBhY2NvdW50PC9NZW51SXRlbT5cbiAgICAgICAgPE1lbnVJdGVtIG9uQ2xpY2s9e2hhbmRsZUNsb3NlfT5TZXR0aW5nczwvTWVudUl0ZW0+XG4gICAgICAgIDxNZW51SXRlbSBvbkNsaWNrPXtoYW5kbGVDbG9zZX0+TG9nb3V0PC9NZW51SXRlbT5cbiAgICAgIDwvTWVudT5cbiAgICA8L2Rpdj5cbiAgKTtcbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/navbar/settings.jsx\n");

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

/***/ "@mui/material/IconButton":
/*!*******************************************!*\
  !*** external "@mui/material/IconButton" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@mui/material/IconButton\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbXVpL21hdGVyaWFsL0ljb25CdXR0b25cIj9jOWZlIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6IkBtdWkvbWF0ZXJpYWwvSWNvbkJ1dHRvbi5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBtdWkvbWF0ZXJpYWwvSWNvbkJ1dHRvblwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///@mui/material/IconButton\n");

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