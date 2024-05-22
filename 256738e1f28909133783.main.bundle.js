/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles/styles.css":
/*!*********************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles/styles.css ***!
  \*********************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `/* *{
    outline: red solid 1px;
} */
:root{
    --background-color: #241A2F;
    --test-color : #0B080E;
    --visible-state : hidden;
}
body{
    margin: 0;
    padding: 0;
    background-color: var(--background-color);
    box-sizing: border-box;
}
button{
    border: none;
    border-radius: 16px;
    cursor: pointer;
    padding: 5px;
}
.main-grid{
    display: grid;
    grid-template-columns: 80%;
    grid-template-rows: .5fr 1.5fr 1fr 1fr;
    grid-column-gap: 0px;
    justify-content: center;
    height: 100vh;
    align-items: center;
    gap: 8px;
}
.main-grid__search{
    grid-area: 1 / 1 / 2 / 2; 
    align-self: center;
    width: clamp(275px,50vw,600px);
    justify-self: center;
}
.search{
    display: flex;
    gap: 20px;
    justify-content: center;
    align-items: center;
    padding: 10px;
    border-radius: 32px;
}
.search__input{
    width: 100%;
}
.main-grid__current{
    grid-area: 2 / 1 / 3 / 2;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: clamp(14px,4vw,30px);
    visibility: var(--visible-state);
}
.current-weather{
    display: flex;
    flex-direction: column;
    gap: 16px;
    align-items: center;
    padding: 16px;
    background-color: var(--test-color);
    color: white;
    border-radius: 32px;
}
.current-weather__location{
    text-align: center;
    padding: 5px;
}
.current-weather__conidition{
    padding: 5px;
}
.image--weather-icon{
    vertical-align: top;
}
.current-weather__temperature{
    padding: 5px;
}
.flex-grid__additional{
    display: flex;
    align-items: center;
    overflow-x: auto;

}
.main-grid__scrollbar-wrapper{
    background-color: var(--test-color);
    border-radius: 32px;
    display: flex;
    align-items: center;
    grid-area: 3 / 1 / 4 / 2;
    width: clamp(25px,50vw,50%);
    justify-self: center;
    visibility: var(--visible-state);
    
}
.current-weather-additional{
    display: flex;
    gap: clamp(0px,3vw,32px);
    text-align: center;
    justify-content: space-evenly;
}
.additional-stats{
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    gap: 8px;
    padding: 8px;
    background-color: var(--test-color);
    color: white;
    border-radius: 16px;
    width: 80px;
    height: 60px;
}
.main-grid__forecast{
    grid-area: 4 / 1 / 5 / 2;
    visibility: var(--visible-state);
}
.forcecast-container{
    display: flex;
    gap: clamp(8px,5%,64px);
    align-items: center;
    justify-content:center;
}
.forecast{
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    gap: 8px;
    text-align: center;
    padding: 5px;
    background-color: var(--test-color);
    color: white;
    border-radius: 16px;
    width: clamp(140px,3vw,400px);
    font-size: clamp(12px,2vw,18px);
    height: 180px;

}
.forecast__temperatures{
    display: flex;
    justify-content: space-between;
}
.forecast--weather-icon{
    vertical-align: top;
    object-fit: contain;
    height: 100%;
    width: auto;
}
.forecast__temp{
    display: flex;
    flex-direction: column;
    gap: 8px;
}
.input-field{
    border: none;
    width: 100%;
    border-radius: 18px;
    background-color: var(--test-color);
    padding: 5px;
    color: white;
    caret-color: white;
    
}
.input-field::placeholder{
    color: white;
}
.button--search{
    background-color: var(--test-color);
    color: white;
    padding-left: 25%;
    padding-right: 25%;
    transition-duration: 0.4s;
    position: relative;
}
.button--search:hover{
    transition-duration: 0.1s;
    background-color: #3A3A3A;
}
.button--search:after{
    content: "";
    display: block;
    position: absolute;
    border-radius: 1em;
    left: 0;
    top:0;
    width: 100%;
    height: 100%;
    opacity: 0;
    transition: all 0.5s;
    box-shadow: 0 0 5px 20px green;
}
.button--search:active:after {
    box-shadow: 0 0 0 0 white;
    position: absolute;
    border-radius: 1em;
    left: 0;
    top:0;
    opacity: 1;
    transition: 0s;
  }
  .button--search:active {
    top: 1px;
  }
  .main--grid__error{
    background-color: red;
    color: white;
    text-align: center;
    border-radius: 32px ;
    width: 80%;
  }
  .error__container{
   
    visibility: hidden;
  }
  .ul__container{
    display: none;
    position: relative;
    left: 3%;
    flex-direction: column;
    gap: 3px;
  }
  .location__auto-search{
    background-color: white;
    border-radius: 16px;
    width: 80%;
    display: flex;
    flex-direction: column;
    gap: 4px;
    text-align: left;
    list-style-type: none;
    
  }
.auto-search__location{
    position: relative;
    right: 6%;
    padding: 2px;
    border-bottom: 1px solid gray;
    cursor: pointer;
}
ul{
    margin: 0px;
}`, "",{"version":3,"sources":["webpack://./src/styles/styles.css"],"names":[],"mappings":"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","sourcesContent":["/* *{\n    outline: red solid 1px;\n} */\n:root{\n    --background-color: #241A2F;\n    --test-color : #0B080E;\n    --visible-state : hidden;\n}\nbody{\n    margin: 0;\n    padding: 0;\n    background-color: var(--background-color);\n    box-sizing: border-box;\n}\nbutton{\n    border: none;\n    border-radius: 16px;\n    cursor: pointer;\n    padding: 5px;\n}\n.main-grid{\n    display: grid;\n    grid-template-columns: 80%;\n    grid-template-rows: .5fr 1.5fr 1fr 1fr;\n    grid-column-gap: 0px;\n    justify-content: center;\n    height: 100vh;\n    align-items: center;\n    gap: 8px;\n}\n.main-grid__search{\n    grid-area: 1 / 1 / 2 / 2; \n    align-self: center;\n    width: clamp(275px,50vw,600px);\n    justify-self: center;\n}\n.search{\n    display: flex;\n    gap: 20px;\n    justify-content: center;\n    align-items: center;\n    padding: 10px;\n    border-radius: 32px;\n}\n.search__input{\n    width: 100%;\n}\n.main-grid__current{\n    grid-area: 2 / 1 / 3 / 2;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    font-size: clamp(14px,4vw,30px);\n    visibility: var(--visible-state);\n}\n.current-weather{\n    display: flex;\n    flex-direction: column;\n    gap: 16px;\n    align-items: center;\n    padding: 16px;\n    background-color: var(--test-color);\n    color: white;\n    border-radius: 32px;\n}\n.current-weather__location{\n    text-align: center;\n    padding: 5px;\n}\n.current-weather__conidition{\n    padding: 5px;\n}\n.image--weather-icon{\n    vertical-align: top;\n}\n.current-weather__temperature{\n    padding: 5px;\n}\n.flex-grid__additional{\n    display: flex;\n    align-items: center;\n    overflow-x: auto;\n\n}\n.main-grid__scrollbar-wrapper{\n    background-color: var(--test-color);\n    border-radius: 32px;\n    display: flex;\n    align-items: center;\n    grid-area: 3 / 1 / 4 / 2;\n    width: clamp(25px,50vw,50%);\n    justify-self: center;\n    visibility: var(--visible-state);\n    \n}\n.current-weather-additional{\n    display: flex;\n    gap: clamp(0px,3vw,32px);\n    text-align: center;\n    justify-content: space-evenly;\n}\n.additional-stats{\n    display: flex;\n    flex-direction: column;\n    justify-content: space-between;\n    align-items: center;\n    gap: 8px;\n    padding: 8px;\n    background-color: var(--test-color);\n    color: white;\n    border-radius: 16px;\n    width: 80px;\n    height: 60px;\n}\n.main-grid__forecast{\n    grid-area: 4 / 1 / 5 / 2;\n    visibility: var(--visible-state);\n}\n.forcecast-container{\n    display: flex;\n    gap: clamp(8px,5%,64px);\n    align-items: center;\n    justify-content:center;\n}\n.forecast{\n    display: flex;\n    flex-direction: column;\n    justify-content: space-evenly;\n    gap: 8px;\n    text-align: center;\n    padding: 5px;\n    background-color: var(--test-color);\n    color: white;\n    border-radius: 16px;\n    width: clamp(140px,3vw,400px);\n    font-size: clamp(12px,2vw,18px);\n    height: 180px;\n\n}\n.forecast__temperatures{\n    display: flex;\n    justify-content: space-between;\n}\n.forecast--weather-icon{\n    vertical-align: top;\n    object-fit: contain;\n    height: 100%;\n    width: auto;\n}\n.forecast__temp{\n    display: flex;\n    flex-direction: column;\n    gap: 8px;\n}\n.input-field{\n    border: none;\n    width: 100%;\n    border-radius: 18px;\n    background-color: var(--test-color);\n    padding: 5px;\n    color: white;\n    caret-color: white;\n    \n}\n.input-field::placeholder{\n    color: white;\n}\n.button--search{\n    background-color: var(--test-color);\n    color: white;\n    padding-left: 25%;\n    padding-right: 25%;\n    transition-duration: 0.4s;\n    position: relative;\n}\n.button--search:hover{\n    transition-duration: 0.1s;\n    background-color: #3A3A3A;\n}\n.button--search:after{\n    content: \"\";\n    display: block;\n    position: absolute;\n    border-radius: 1em;\n    left: 0;\n    top:0;\n    width: 100%;\n    height: 100%;\n    opacity: 0;\n    transition: all 0.5s;\n    box-shadow: 0 0 5px 20px green;\n}\n.button--search:active:after {\n    box-shadow: 0 0 0 0 white;\n    position: absolute;\n    border-radius: 1em;\n    left: 0;\n    top:0;\n    opacity: 1;\n    transition: 0s;\n  }\n  .button--search:active {\n    top: 1px;\n  }\n  .main--grid__error{\n    background-color: red;\n    color: white;\n    text-align: center;\n    border-radius: 32px ;\n    width: 80%;\n  }\n  .error__container{\n   \n    visibility: hidden;\n  }\n  .ul__container{\n    display: none;\n    position: relative;\n    left: 3%;\n    flex-direction: column;\n    gap: 3px;\n  }\n  .location__auto-search{\n    background-color: white;\n    border-radius: 16px;\n    width: 80%;\n    display: flex;\n    flex-direction: column;\n    gap: 4px;\n    text-align: left;\n    list-style-type: none;\n    \n  }\n.auto-search__location{\n    position: relative;\n    right: 6%;\n    padding: 2px;\n    border-bottom: 1px solid gray;\n    cursor: pointer;\n}\nul{\n    margin: 0px;\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/styles/styles.css":
/*!*******************************!*\
  !*** ./src/styles/styles.css ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./styles.css */ "./node_modules/css-loader/dist/cjs.js!./src/styles/styles.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());
options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }
  return result;
}
function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }
    memo[target] = styleTarget;
  }
  return memo[target];
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

/***/ }),

/***/ "./src/scripts/autoComplete.js":
/*!*************************************!*\
  !*** ./src/scripts/autoComplete.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   autoComplete: () => (/* binding */ autoComplete)
/* harmony export */ });
/* harmony import */ var _main__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./main */ "./src/scripts/main.js");
/* harmony import */ var _domElements__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./domElements */ "./src/scripts/domElements.js");
/* harmony import */ var _changeForecast__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./changeForecast */ "./src/scripts/changeForecast.js");
/* harmony import */ var _currentWeatherAPI__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./currentWeatherAPI */ "./src/scripts/currentWeatherAPI.js");





const autoSearchContainer = document.querySelector('.location__auto-search');
const ulListContainer = document.querySelector('.ul__container');
async function autoComplete(search) {
  const response = await fetch(
    `http://api.weatherapi.com/v1/search.json?key=${_main__WEBPACK_IMPORTED_MODULE_0__.key}&q=${search}`,
    { mode: 'cors' },
  );
  const currentData = await response.json();
  const frag = new DocumentFragment();
  while (autoSearchContainer.firstChild) {
    autoSearchContainer.removeChild(autoSearchContainer.firstChild);
  }
  if (currentData.length > 0) {
    ulListContainer.style.display = 'flex';
    currentData.forEach(async (location) => {
      const place = await location;
      //   console.log(`${place.name}, ${place.region}, ${place.country}`);
      const listLocation = (0,_domElements__WEBPACK_IMPORTED_MODULE_1__.newList)('auto-search__location');
      listLocation.innerHTML = `${place.name}, ${place.region}, ${place.country}`;
      listLocation.addEventListener('click', () => {
        _domElements__WEBPACK_IMPORTED_MODULE_1__.searchValue.value = `${place.name}, ${place.region}, ${place.country}`;
        ulListContainer.style.display = 'none';
        (0,_currentWeatherAPI__WEBPACK_IMPORTED_MODULE_3__.currentWeather)();
        (0,_changeForecast__WEBPACK_IMPORTED_MODULE_2__.changeForecast)();
        _domElements__WEBPACK_IMPORTED_MODULE_1__.searchValue.value = '';
        ulListContainer.style.display = 'none';
      });
      frag.append(listLocation);
      autoSearchContainer.append(frag);
    });
  }
}


/***/ }),

/***/ "./src/scripts/changeDOM.js":
/*!**********************************!*\
  !*** ./src/scripts/changeDOM.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   changeCloudCoverage: () => (/* binding */ changeCloudCoverage),
/* harmony export */   changeCurrentCondition: () => (/* binding */ changeCurrentCondition),
/* harmony export */   changeCurrentHumidity: () => (/* binding */ changeCurrentHumidity),
/* harmony export */   changeCurrentImage: () => (/* binding */ changeCurrentImage),
/* harmony export */   changeCurrentTemp: () => (/* binding */ changeCurrentTemp),
/* harmony export */   changeCurrentUV: () => (/* binding */ changeCurrentUV),
/* harmony export */   changeLocation: () => (/* binding */ changeLocation),
/* harmony export */   changeRainChance: () => (/* binding */ changeRainChance),
/* harmony export */   changeWindDirection: () => (/* binding */ changeWindDirection),
/* harmony export */   changeWindSpeed: () => (/* binding */ changeWindSpeed)
/* harmony export */ });
const currentCondition = document.querySelector('.current-weather__conidition');
const locationDOM = document.querySelector('.current-weather__location');
const currentWeatherIcon = document.querySelector('.image--weather-icon');
const currentTemp = document.querySelector('.current-weather__temperature');
const currentHumidity = document.querySelector('.humidity');
const UvIndex = document.querySelector('.UV-Index');
const windSpeed = document.querySelector('.wind-speed');
const windDirection = document.querySelector('.wind-direction');
const cloudCoverage = document.querySelector('.cloud-coverage');
const rainChange = document.querySelector('.rain-chance');
function changeCurrentCondition(condition) {
  currentCondition.innerHTML = condition;
}
function changeLocation(city, state, location, time) {
  locationDOM.innerHTML = `${city} ${state} ${location} ${time.slice(11)}`;
}
function changeCurrentImage(url) {
  currentWeatherIcon.src = url;
}
function changeCurrentTemp(temp) {
  currentTemp.innerHTML = `Feels like ${temp} °F`;
}
function changeCurrentHumidity(humidity) {
  currentHumidity.innerHTML = humidity;
}
function changeCurrentUV(UV) {
  UvIndex.innerHTML = UV;
}
function changeWindSpeed(speed) {
  windSpeed.innerHTML = `${speed} MPH`;
}
function changeWindDirection(direction) {
  windDirection.innerHTML = direction;
}
function changeCloudCoverage(coverage) {
  cloudCoverage.innerHTML = `${coverage}%`;
}
function changeRainChance(chance) {
  rainChange.innerHTML = `${chance}%`;
}


/***/ }),

/***/ "./src/scripts/changeForecast.js":
/*!***************************************!*\
  !*** ./src/scripts/changeForecast.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   changeForecast: () => (/* binding */ changeForecast)
/* harmony export */ });
/* harmony import */ var _main__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./main */ "./src/scripts/main.js");
/* harmony import */ var _domElements__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./domElements */ "./src/scripts/domElements.js");
/* harmony import */ var _changeDOM__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./changeDOM */ "./src/scripts/changeDOM.js");
/* harmony import */ var _changeForecastDOM__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./changeForecastDOM */ "./src/scripts/changeForecastDOM.js");





async function changeForecast() {
  try {
    const response = await fetch(
      `http://api.weatherapi.com/v1/forecast.json?key=${_main__WEBPACK_IMPORTED_MODULE_0__.key}&q=${_domElements__WEBPACK_IMPORTED_MODULE_1__.searchValue.value}&days=4`,
      { mode: 'cors' },
    );
    const forecastData = await response.json();
    // console.log(forecastData);
    (0,_changeDOM__WEBPACK_IMPORTED_MODULE_2__.changeRainChance)(
      forecastData.forecast.forecastday[0].day.daily_will_it_rain,
    );
    // eslint-disable-next-line no-plusplus
    for (let i = 1; i < 4; i++) {
      let day;
      if (i === 1) {
        day = 'one';
      } else if (i === 2) {
        day = 'two';
      } else {
        day = 'three';
      }
      const { date } = forecastData.forecast.forecastday[i];
      const condition = forecastData.forecast.forecastday[i].day.condition.text;
      const image = forecastData.forecast.forecastday[i].day.condition.icon;
      const min = forecastData.forecast.forecastday[i].day.mintemp_f;
      const max = forecastData.forecast.forecastday[i].day.maxtemp_f;
      (0,_changeForecastDOM__WEBPACK_IMPORTED_MODULE_3__.changeDay)(day, date, condition, image, min, max);
    }
  } catch (error) {
    console.log(error);
    _domElements__WEBPACK_IMPORTED_MODULE_1__.errorState.style.visibility = 'visible';
  }
}


/***/ }),

/***/ "./src/scripts/changeForecastDOM.js":
/*!******************************************!*\
  !*** ./src/scripts/changeForecastDOM.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   changeDay: () => (/* binding */ changeDay)
/* harmony export */ });
function changeDay(day, date, condition, image, min, max) {
  const changeDate = document.querySelector(`.forecast__day-${day}-date`);
  const changeCondition = document.querySelector(
    `.forecast__day-${day}-condition`,
  );
  const changeImage = document.querySelector(`.forecast__day-${day}-image`);
  const changeMin = document.querySelector(`.forecast__day-${day}-min`);
  const changeMax = document.querySelector(`.forecast__day-${day}-max`);
  changeDate.innerHTML = date;
  changeCondition.innerHTML = condition;
  changeImage.src = image;
  changeMin.innerHTML = min;
  changeMax.innerHTML = max;
}


/***/ }),

/***/ "./src/scripts/currentWeatherAPI.js":
/*!******************************************!*\
  !*** ./src/scripts/currentWeatherAPI.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   currentWeather: () => (/* binding */ currentWeather)
/* harmony export */ });
/* harmony import */ var _domElements__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./domElements */ "./src/scripts/domElements.js");
/* harmony import */ var _main__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./main */ "./src/scripts/main.js");
/* harmony import */ var _changeForecast__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./changeForecast */ "./src/scripts/changeForecast.js");
/* harmony import */ var _changeDOM__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./changeDOM */ "./src/scripts/changeDOM.js");





async function currentWeather() {
  document.documentElement.style.setProperty('--visible-state', 'hidden');
  try {
    const response = await fetch(
      `http://api.weatherapi.com/v1/current.json?key=${_main__WEBPACK_IMPORTED_MODULE_1__.key}&q=${_domElements__WEBPACK_IMPORTED_MODULE_0__.searchValue.value}`,
      { mode: 'cors' },
    );
    const currentData = await response.json();
    (0,_changeDOM__WEBPACK_IMPORTED_MODULE_3__.changeCurrentCondition)(currentData.current.condition.text);
    (0,_changeDOM__WEBPACK_IMPORTED_MODULE_3__.changeLocation)(
      currentData.location.name,
      currentData.location.region,
      currentData.location.country,
      currentData.location.localtime,
    );
    (0,_changeDOM__WEBPACK_IMPORTED_MODULE_3__.changeCurrentImage)(currentData.current.condition.icon);
    (0,_changeDOM__WEBPACK_IMPORTED_MODULE_3__.changeCurrentTemp)(currentData.current.feelslike_f);
    (0,_changeDOM__WEBPACK_IMPORTED_MODULE_3__.changeCurrentHumidity)(currentData.current.humidity);
    (0,_changeDOM__WEBPACK_IMPORTED_MODULE_3__.changeCurrentUV)(currentData.current.uv);
    (0,_changeDOM__WEBPACK_IMPORTED_MODULE_3__.changeWindSpeed)(currentData.current.gust_mph);
    (0,_changeDOM__WEBPACK_IMPORTED_MODULE_3__.changeWindDirection)(currentData.current.wind_dir);
    (0,_changeDOM__WEBPACK_IMPORTED_MODULE_3__.changeCloudCoverage)(currentData.current.cloud);
    document.documentElement.style.setProperty('--visible-state', 'visible');
  } catch (error) {
    _domElements__WEBPACK_IMPORTED_MODULE_0__.errorState.style.visibility = 'visible';
  }
}


/***/ }),

/***/ "./src/scripts/domElements.js":
/*!************************************!*\
  !*** ./src/scripts/domElements.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createListElement: () => (/* binding */ createListElement),
/* harmony export */   errorState: () => (/* binding */ errorState),
/* harmony export */   newList: () => (/* binding */ newList),
/* harmony export */   searchButton: () => (/* binding */ searchButton),
/* harmony export */   searchValue: () => (/* binding */ searchValue)
/* harmony export */ });
const searchValue = document.querySelector('.input-field');
const searchButton = document.querySelector('.button--search');
const errorState = document.querySelector('.main--grid__error');

function newList(name) {
  const list = document.createElement('li');
  list.className = name;
  return list;
}
function createListElement() {
  const list = newList('location__auto-search');
  list.innerHTML = 'this is a test';
}


/***/ }),

/***/ "./src/scripts/main.js":
/*!*****************************!*\
  !*** ./src/scripts/main.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   key: () => (/* binding */ key)
/* harmony export */ });
/* harmony import */ var _styles_styles_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../styles/styles.css */ "./src/styles/styles.css");
/* harmony import */ var _currentWeatherAPI__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./currentWeatherAPI */ "./src/scripts/currentWeatherAPI.js");
/* harmony import */ var _domElements__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./domElements */ "./src/scripts/domElements.js");
/* harmony import */ var _changeForecast__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./changeForecast */ "./src/scripts/changeForecast.js");
/* harmony import */ var _autoComplete__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./autoComplete */ "./src/scripts/autoComplete.js");







const ulListContainer = document.querySelector('.ul__container');
const key = 'd317c44b140242988c7140818242005';
const horizontalScroll = document.querySelector('.flex-grid__additional');
horizontalScroll.addEventListener('wheel', (event) => {
  event.preventDefault();

  horizontalScroll.scrollBy({
    left: event.deltaY < 0 ? -30 : 30,
  });
});
_domElements__WEBPACK_IMPORTED_MODULE_2__.searchButton.addEventListener('click', () => {
  (0,_currentWeatherAPI__WEBPACK_IMPORTED_MODULE_1__.currentWeather)();
  (0,_changeForecast__WEBPACK_IMPORTED_MODULE_3__.changeForecast)();
  _domElements__WEBPACK_IMPORTED_MODULE_2__.searchValue.value = '';
  ulListContainer.style.display = 'none';
});
// change on enter press when input field is focused
document.querySelector('.input-field').addEventListener('focus', () => {
  document
    .querySelector('.input-field')
    .addEventListener('keypress', (event) => {
      if (event.key === 'Enter') {
        (0,_currentWeatherAPI__WEBPACK_IMPORTED_MODULE_1__.currentWeather)();
        (0,_changeForecast__WEBPACK_IMPORTED_MODULE_3__.changeForecast)();
        _domElements__WEBPACK_IMPORTED_MODULE_2__.searchValue.value = '';
        _domElements__WEBPACK_IMPORTED_MODULE_2__.errorState.style.visibility = 'hidden';
        ulListContainer.style.display = 'none';
      } else {
        (0,_autoComplete__WEBPACK_IMPORTED_MODULE_4__.autoComplete)(_domElements__WEBPACK_IMPORTED_MODULE_2__.searchValue.value);
      }
    });
});


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
/******/ 			id: moduleId,
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
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./src/scripts/main.js");
/******/ 	
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMjU2NzM4ZTFmMjg5MDkxMzM3ODMubWFpbi5idW5kbGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDNkc7QUFDakI7QUFDNUYsOEJBQThCLG1GQUEyQixDQUFDLDRGQUFxQztBQUMvRjtBQUNBO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDLE9BQU8seUZBQXlGLEtBQUssS0FBSyxZQUFZLGFBQWEsYUFBYSxNQUFNLEtBQUssVUFBVSxVQUFVLFlBQVksYUFBYSxNQUFNLEtBQUssVUFBVSxZQUFZLFdBQVcsVUFBVSxNQUFNLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLFdBQVcsWUFBWSxXQUFXLEtBQUssS0FBSyxZQUFZLGFBQWEsYUFBYSxhQUFhLE1BQU0sS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLFdBQVcsWUFBWSxNQUFNLEtBQUssVUFBVSxLQUFLLEtBQUssWUFBWSxXQUFXLFlBQVksYUFBYSxhQUFhLGFBQWEsTUFBTSxLQUFLLFVBQVUsWUFBWSxXQUFXLFlBQVksV0FBVyxZQUFZLFdBQVcsWUFBWSxNQUFNLEtBQUssWUFBWSxXQUFXLE1BQU0sS0FBSyxVQUFVLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxVQUFVLE1BQU0sS0FBSyxVQUFVLFlBQVksY0FBYyxNQUFNLEtBQUssWUFBWSxhQUFhLFdBQVcsWUFB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QUNBLEdBQUc7QUFDSCxDQUFDO0FBQ0Qsc0RBQVk7QUFDWixFQUFFLGtFQUFjO0FBQ2hCLEVBQUUsK0RBQWM7QUFDaEIsRUFBRSxxREFBVztBQUNiO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVEsa0VBQWM7QUFDdEIsUUFBUSwrREFBYztBQUN0QixRQUFRLHFEQUFXO0FBQ25CLFFBQVEsb0RBQVU7QUFDbEI7QUFDQSxRQUFRO0FBQ1IsUUFBUSwyREFBWSxDQUFDLHFEQUFXO0FBQ2hDO0FBQ0EsS0FBSztBQUNMLENBQUM7Ozs7Ozs7VUN0Q0Q7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLGlDQUFpQyxXQUFXO1dBQzVDO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7O1dDTkE7Ozs7O1VFQUE7VUFDQTtVQUNBO1VBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90ZW1wbGF0ZS8uL3NyYy9zdHlsZXMvc3R5bGVzLmNzcyIsIndlYnBhY2s6Ly90ZW1wbGF0ZS8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vdGVtcGxhdGUvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly90ZW1wbGF0ZS8uL3NyYy9zdHlsZXMvc3R5bGVzLmNzcz9lNDViIiwid2VicGFjazovL3RlbXBsYXRlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3RlbXBsYXRlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly90ZW1wbGF0ZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly90ZW1wbGF0ZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly90ZW1wbGF0ZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL3RlbXBsYXRlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vdGVtcGxhdGUvLi9zcmMvc2NyaXB0cy9hdXRvQ29tcGxldGUuanMiLCJ3ZWJwYWNrOi8vdGVtcGxhdGUvLi9zcmMvc2NyaXB0cy9jaGFuZ2VET00uanMiLCJ3ZWJwYWNrOi8vdGVtcGxhdGUvLi9zcmMvc2NyaXB0cy9jaGFuZ2VGb3JlY2FzdC5qcyIsIndlYnBhY2s6Ly90ZW1wbGF0ZS8uL3NyYy9zY3JpcHRzL2NoYW5nZUZvcmVjYXN0RE9NLmpzIiwid2VicGFjazovL3RlbXBsYXRlLy4vc3JjL3NjcmlwdHMvY3VycmVudFdlYXRoZXJBUEkuanMiLCJ3ZWJwYWNrOi8vdGVtcGxhdGUvLi9zcmMvc2NyaXB0cy9kb21FbGVtZW50cy5qcyIsIndlYnBhY2s6Ly90ZW1wbGF0ZS8uL3NyYy9zY3JpcHRzL21haW4uanMiLCJ3ZWJwYWNrOi8vdGVtcGxhdGUvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vdGVtcGxhdGUvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vdGVtcGxhdGUvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3RlbXBsYXRlL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vdGVtcGxhdGUvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly90ZW1wbGF0ZS93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vdGVtcGxhdGUvd2VicGFjay9iZWZvcmUtc3RhcnR1cCIsIndlYnBhY2s6Ly90ZW1wbGF0ZS93ZWJwYWNrL3N0YXJ0dXAiLCJ3ZWJwYWNrOi8vdGVtcGxhdGUvd2VicGFjay9hZnRlci1zdGFydHVwIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGAvKiAqe1xuICAgIG91dGxpbmU6IHJlZCBzb2xpZCAxcHg7XG59ICovXG46cm9vdHtcbiAgICAtLWJhY2tncm91bmQtY29sb3I6ICMyNDFBMkY7XG4gICAgLS10ZXN0LWNvbG9yIDogIzBCMDgwRTtcbiAgICAtLXZpc2libGUtc3RhdGUgOiBoaWRkZW47XG59XG5ib2R5e1xuICAgIG1hcmdpbjogMDtcbiAgICBwYWRkaW5nOiAwO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJhY2tncm91bmQtY29sb3IpO1xuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG59XG5idXR0b257XG4gICAgYm9yZGVyOiBub25lO1xuICAgIGJvcmRlci1yYWRpdXM6IDE2cHg7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIHBhZGRpbmc6IDVweDtcbn1cbi5tYWluLWdyaWR7XG4gICAgZGlzcGxheTogZ3JpZDtcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDgwJTtcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IC41ZnIgMS41ZnIgMWZyIDFmcjtcbiAgICBncmlkLWNvbHVtbi1nYXA6IDBweDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBoZWlnaHQ6IDEwMHZoO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgZ2FwOiA4cHg7XG59XG4ubWFpbi1ncmlkX19zZWFyY2h7XG4gICAgZ3JpZC1hcmVhOiAxIC8gMSAvIDIgLyAyOyBcbiAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XG4gICAgd2lkdGg6IGNsYW1wKDI3NXB4LDUwdncsNjAwcHgpO1xuICAgIGp1c3RpZnktc2VsZjogY2VudGVyO1xufVxuLnNlYXJjaHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGdhcDogMjBweDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIHBhZGRpbmc6IDEwcHg7XG4gICAgYm9yZGVyLXJhZGl1czogMzJweDtcbn1cbi5zZWFyY2hfX2lucHV0e1xuICAgIHdpZHRoOiAxMDAlO1xufVxuLm1haW4tZ3JpZF9fY3VycmVudHtcbiAgICBncmlkLWFyZWE6IDIgLyAxIC8gMyAvIDI7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGZvbnQtc2l6ZTogY2xhbXAoMTRweCw0dncsMzBweCk7XG4gICAgdmlzaWJpbGl0eTogdmFyKC0tdmlzaWJsZS1zdGF0ZSk7XG59XG4uY3VycmVudC13ZWF0aGVye1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBnYXA6IDE2cHg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBwYWRkaW5nOiAxNnB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXRlc3QtY29sb3IpO1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICBib3JkZXItcmFkaXVzOiAzMnB4O1xufVxuLmN1cnJlbnQtd2VhdGhlcl9fbG9jYXRpb257XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIHBhZGRpbmc6IDVweDtcbn1cbi5jdXJyZW50LXdlYXRoZXJfX2NvbmlkaXRpb257XG4gICAgcGFkZGluZzogNXB4O1xufVxuLmltYWdlLS13ZWF0aGVyLWljb257XG4gICAgdmVydGljYWwtYWxpZ246IHRvcDtcbn1cbi5jdXJyZW50LXdlYXRoZXJfX3RlbXBlcmF0dXJle1xuICAgIHBhZGRpbmc6IDVweDtcbn1cbi5mbGV4LWdyaWRfX2FkZGl0aW9uYWx7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIG92ZXJmbG93LXg6IGF1dG87XG5cbn1cbi5tYWluLWdyaWRfX3Njcm9sbGJhci13cmFwcGVye1xuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXRlc3QtY29sb3IpO1xuICAgIGJvcmRlci1yYWRpdXM6IDMycHg7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGdyaWQtYXJlYTogMyAvIDEgLyA0IC8gMjtcbiAgICB3aWR0aDogY2xhbXAoMjVweCw1MHZ3LDUwJSk7XG4gICAganVzdGlmeS1zZWxmOiBjZW50ZXI7XG4gICAgdmlzaWJpbGl0eTogdmFyKC0tdmlzaWJsZS1zdGF0ZSk7XG4gICAgXG59XG4uY3VycmVudC13ZWF0aGVyLWFkZGl0aW9uYWx7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBnYXA6IGNsYW1wKDBweCwzdncsMzJweCk7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xufVxuLmFkZGl0aW9uYWwtc3RhdHN7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGdhcDogOHB4O1xuICAgIHBhZGRpbmc6IDhweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS10ZXN0LWNvbG9yKTtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgYm9yZGVyLXJhZGl1czogMTZweDtcbiAgICB3aWR0aDogODBweDtcbiAgICBoZWlnaHQ6IDYwcHg7XG59XG4ubWFpbi1ncmlkX19mb3JlY2FzdHtcbiAgICBncmlkLWFyZWE6IDQgLyAxIC8gNSAvIDI7XG4gICAgdmlzaWJpbGl0eTogdmFyKC0tdmlzaWJsZS1zdGF0ZSk7XG59XG4uZm9yY2VjYXN0LWNvbnRhaW5lcntcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGdhcDogY2xhbXAoOHB4LDUlLDY0cHgpO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAganVzdGlmeS1jb250ZW50OmNlbnRlcjtcbn1cbi5mb3JlY2FzdHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XG4gICAgZ2FwOiA4cHg7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIHBhZGRpbmc6IDVweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS10ZXN0LWNvbG9yKTtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgYm9yZGVyLXJhZGl1czogMTZweDtcbiAgICB3aWR0aDogY2xhbXAoMTQwcHgsM3Z3LDQwMHB4KTtcbiAgICBmb250LXNpemU6IGNsYW1wKDEycHgsMnZ3LDE4cHgpO1xuICAgIGhlaWdodDogMTgwcHg7XG5cbn1cbi5mb3JlY2FzdF9fdGVtcGVyYXR1cmVze1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xufVxuLmZvcmVjYXN0LS13ZWF0aGVyLWljb257XG4gICAgdmVydGljYWwtYWxpZ246IHRvcDtcbiAgICBvYmplY3QtZml0OiBjb250YWluO1xuICAgIGhlaWdodDogMTAwJTtcbiAgICB3aWR0aDogYXV0bztcbn1cbi5mb3JlY2FzdF9fdGVtcHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgZ2FwOiA4cHg7XG59XG4uaW5wdXQtZmllbGR7XG4gICAgYm9yZGVyOiBub25lO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGJvcmRlci1yYWRpdXM6IDE4cHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tdGVzdC1jb2xvcik7XG4gICAgcGFkZGluZzogNXB4O1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICBjYXJldC1jb2xvcjogd2hpdGU7XG4gICAgXG59XG4uaW5wdXQtZmllbGQ6OnBsYWNlaG9sZGVye1xuICAgIGNvbG9yOiB3aGl0ZTtcbn1cbi5idXR0b24tLXNlYXJjaHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS10ZXN0LWNvbG9yKTtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgcGFkZGluZy1sZWZ0OiAyNSU7XG4gICAgcGFkZGluZy1yaWdodDogMjUlO1xuICAgIHRyYW5zaXRpb24tZHVyYXRpb246IDAuNHM7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuLmJ1dHRvbi0tc2VhcmNoOmhvdmVye1xuICAgIHRyYW5zaXRpb24tZHVyYXRpb246IDAuMXM7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzNBM0EzQTtcbn1cbi5idXR0b24tLXNlYXJjaDphZnRlcntcbiAgICBjb250ZW50OiBcIlwiO1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBib3JkZXItcmFkaXVzOiAxZW07XG4gICAgbGVmdDogMDtcbiAgICB0b3A6MDtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgb3BhY2l0eTogMDtcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC41cztcbiAgICBib3gtc2hhZG93OiAwIDAgNXB4IDIwcHggZ3JlZW47XG59XG4uYnV0dG9uLS1zZWFyY2g6YWN0aXZlOmFmdGVyIHtcbiAgICBib3gtc2hhZG93OiAwIDAgMCAwIHdoaXRlO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBib3JkZXItcmFkaXVzOiAxZW07XG4gICAgbGVmdDogMDtcbiAgICB0b3A6MDtcbiAgICBvcGFjaXR5OiAxO1xuICAgIHRyYW5zaXRpb246IDBzO1xuICB9XG4gIC5idXR0b24tLXNlYXJjaDphY3RpdmUge1xuICAgIHRvcDogMXB4O1xuICB9XG4gIC5tYWluLS1ncmlkX19lcnJvcntcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZWQ7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBib3JkZXItcmFkaXVzOiAzMnB4IDtcbiAgICB3aWR0aDogODAlO1xuICB9XG4gIC5lcnJvcl9fY29udGFpbmVye1xuICAgXG4gICAgdmlzaWJpbGl0eTogaGlkZGVuO1xuICB9XG4gIC51bF9fY29udGFpbmVye1xuICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIGxlZnQ6IDMlO1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgZ2FwOiAzcHg7XG4gIH1cbiAgLmxvY2F0aW9uX19hdXRvLXNlYXJjaHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgICBib3JkZXItcmFkaXVzOiAxNnB4O1xuICAgIHdpZHRoOiA4MCU7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGdhcDogNHB4O1xuICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gICAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xuICAgIFxuICB9XG4uYXV0by1zZWFyY2hfX2xvY2F0aW9ue1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICByaWdodDogNiU7XG4gICAgcGFkZGluZzogMnB4O1xuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCBncmF5O1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbn1cbnVse1xuICAgIG1hcmdpbjogMHB4O1xufWAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlcy9zdHlsZXMuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBOztHQUVHO0FBQ0g7SUFDSSwyQkFBMkI7SUFDM0Isc0JBQXNCO0lBQ3RCLHdCQUF3QjtBQUM1QjtBQUNBO0lBQ0ksU0FBUztJQUNULFVBQVU7SUFDVix5Q0FBeUM7SUFDekMsc0JBQXNCO0FBQzFCO0FBQ0E7SUFDSSxZQUFZO0lBQ1osbUJBQW1CO0lBQ25CLGVBQWU7SUFDZixZQUFZO0FBQ2hCO0FBQ0E7SUFDSSxhQUFhO0lBQ2IsMEJBQTBCO0lBQzFCLHNDQUFzQztJQUN0QyxvQkFBb0I7SUFDcEIsdUJBQXVCO0lBQ3ZCLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsUUFBUTtBQUNaO0FBQ0E7SUFDSSx3QkFBd0I7SUFDeEIsa0JBQWtCO0lBQ2xCLDhCQUE4QjtJQUM5QixvQkFBb0I7QUFDeEI7QUFDQTtJQUNJLGFBQWE7SUFDYixTQUFTO0lBQ1QsdUJBQXVCO0lBQ3ZCLG1CQUFtQjtJQUNuQixhQUFhO0lBQ2IsbUJBQW1CO0FBQ3ZCO0FBQ0E7SUFD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QUNULFlBQVk7SUFDWiw2QkFBNkI7SUFDN0IsZUFBZTtBQUNuQjtBQUNBO0lBQ0ksV0FBVztBQUNmXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIi8qICp7XFxuICAgIG91dGxpbmU6IHJlZCBzb2xpZCAxcHg7XFxufSAqL1xcbjpyb290e1xcbiAgICAtLWJhY2tncm91bmQtY29sb3I6ICMyNDFBMkY7XFxuICAgIC0tdGVzdC1jb2xvciA6ICMwQjA4MEU7XFxuICAgIC0tdmlzaWJsZS1zdGF0ZSA6IGhpZGRlbjtcXG59XFxuYm9keXtcXG4gICAgbWFyZ2luOiAwO1xcbiAgICBwYWRkaW5nOiAwO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1iYWNrZ3JvdW5kLWNvbG9yKTtcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG59XFxuYnV0dG9ue1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICAgIGJvcmRlci1yYWRpdXM6IDE2cHg7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgcGFkZGluZzogNXB4O1xcbn1cXG4ubWFpbi1ncmlke1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDgwJTtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAuNWZyIDEuNWZyIDFmciAxZnI7XFxuICAgIGdyaWQtY29sdW1uLWdhcDogMHB4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgaGVpZ2h0OiAxMDB2aDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgZ2FwOiA4cHg7XFxufVxcbi5tYWluLWdyaWRfX3NlYXJjaHtcXG4gICAgZ3JpZC1hcmVhOiAxIC8gMSAvIDIgLyAyOyBcXG4gICAgYWxpZ24tc2VsZjogY2VudGVyO1xcbiAgICB3aWR0aDogY2xhbXAoMjc1cHgsNTB2dyw2MDBweCk7XFxuICAgIGp1c3RpZnktc2VsZjogY2VudGVyO1xcbn1cXG4uc2VhcmNoe1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBnYXA6IDIwcHg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBwYWRkaW5nOiAxMHB4O1xcbiAgICBib3JkZXItcmFkaXVzOiAzMnB4O1xcbn1cXG4uc2VhcmNoX19pbnB1dHtcXG4gICAgd2lkdGg6IDEwMCU7XFxufVxcbi5tYWluLWdyaWRfX2N1cnJlbnR7XFxuICAgIGdyaWQtYXJlYTogMiAvIDEgLyAzIC8gMjtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGZvbnQtc2l6ZTogY2xhbXAoMTRweCw0dncsMzBweCk7XFxuICAgIHZpc2liaWxpdHk6IHZhcigtLXZpc2libGUtc3RhdGUpO1xcbn1cXG4uY3VycmVudC13ZWF0aGVye1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBnYXA6IDE2cHg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIHBhZGRpbmc6IDE2cHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXRlc3QtY29sb3IpO1xcbiAgICBjb2xvcjogd2hpdGU7XFxuICAgIGJvcmRlci1yYWRpdXM6IDMycHg7XFxufVxcbi5jdXJyZW50LXdlYXRoZXJfX2xvY2F0aW9ue1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIHBhZGRpbmc6IDVweDtcXG59XFxuLmN1cnJlbnQtd2VhdGhlcl9fY29uaWRpdGlvbntcXG4gICAgcGFkZGluZzogNXB4O1xcbn1cXG4uaW1hZ2UtLXdlYXRoZXItaWNvbntcXG4gICAgdmVydGljYWwtYWxpZ246IHRvcDtcXG59XFxuLmN1cnJlbnQtd2VhdGhlcl9fdGVtcGVyYXR1cmV7XFxuICAgIHBhZGRpbmc6IDVweDtcXG59XFxuLmZsZXgtZ3JpZF9fYWRkaXRpb25hbHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgb3ZlcmZsb3cteDogYXV0bztcXG5cXG59XFxuLm1haW4tZ3JpZF9fc2Nyb2xsYmFyLXdyYXBwZXJ7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXRlc3QtY29sb3IpO1xcbiAgICBib3JkZXItcmFkaXVzOiAzMnB4O1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBncmlkLWFyZWE6IDMgLyAxIC8gNCAvIDI7XFxuICAgIHdpZHRoOiBjbGFtcCgyNXB4LDUwdncsNTAlKTtcXG4gICAganVzdGlmeS1zZWxmOiBjZW50ZXI7XFxuICAgIHZpc2liaWxpdHk6IHZhcigtLXZpc2libGUtc3RhdGUpO1xcbiAgICBcXG59XFxuLmN1cnJlbnQtd2VhdGhlci1hZGRpdGlvbmFse1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBnYXA6IGNsYW1wKDBweCwzdncsMzJweCk7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XFxufVxcbi5hZGRpdGlvbmFsLXN0YXRze1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGdhcDogOHB4O1xcbiAgICBwYWRkaW5nOiA4cHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXRlc3QtY29sb3IpO1xcbiAgICBjb2xvcjogd2hpdGU7XFxuICAgIGJvcmRlci1yYWRpdXM6IDE2cHg7XFxuICAgIHdpZHRoOiA4MHB4O1xcbiAgICBoZWlnaHQ6IDYwcHg7XFxufVxcbi5tYWluLWdyaWRfX2ZvcmVjYXN0e1xcbiAgICBncmlkLWFyZWE6IDQgLyAxIC8gNSAvIDI7XFxuICAgIHZpc2liaWxpdHk6IHZhcigtLXZpc2libGUtc3RhdGUpO1xcbn1cXG4uZm9yY2VjYXN0LWNvbnRhaW5lcntcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZ2FwOiBjbGFtcCg4cHgsNSUsNjRweCk7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktY29udGVudDpjZW50ZXI7XFxufVxcbi5mb3JlY2FzdHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XFxuICAgIGdhcDogOHB4O1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIHBhZGRpbmc6IDVweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tdGVzdC1jb2xvcik7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgYm9yZGVyLXJhZGl1czogMTZweDtcXG4gICAgd2lkdGg6IGNsYW1wKDE0MHB4LDN2dyw0MDBweCk7XFxuICAgIGZvbnQtc2l6ZTogY2xhbXAoMTJweCwydncsMThweCk7XFxuICAgIGhlaWdodDogMTgwcHg7XFxuXFxufVxcbi5mb3JlY2FzdF9fdGVtcGVyYXR1cmVze1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxufVxcbi5mb3JlY2FzdC0td2VhdGhlci1pY29ue1xcbiAgICB2ZXJ0aWNhbC1hbGlnbjogdG9wO1xcbiAgICBvYmplY3QtZml0OiBjb250YWluO1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxuICAgIHdpZHRoOiBhdXRvO1xcbn1cXG4uZm9yZWNhc3RfX3RlbXB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGdhcDogOHB4O1xcbn1cXG4uaW5wdXQtZmllbGR7XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGJvcmRlci1yYWRpdXM6IDE4cHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXRlc3QtY29sb3IpO1xcbiAgICBwYWRkaW5nOiA1cHg7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgY2FyZXQtY29sb3I6IHdoaXRlO1xcbiAgICBcXG59XFxuLmlucHV0LWZpZWxkOjpwbGFjZWhvbGRlcntcXG4gICAgY29sb3I6IHdoaXRlO1xcbn1cXG4uYnV0dG9uLS1zZWFyY2h7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXRlc3QtY29sb3IpO1xcbiAgICBjb2xvcjogd2hpdGU7XFxuICAgIHBhZGRpbmctbGVmdDogMjUlO1xcbiAgICBwYWRkaW5nLXJpZ2h0OiAyNSU7XFxuICAgIHRyYW5zaXRpb24tZHVyYXRpb246IDAuNHM7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG59XFxuLmJ1dHRvbi0tc2VhcmNoOmhvdmVye1xcbiAgICB0cmFuc2l0aW9uLWR1cmF0aW9uOiAwLjFzO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjM0EzQTNBO1xcbn1cXG4uYnV0dG9uLS1zZWFyY2g6YWZ0ZXJ7XFxuICAgIGNvbnRlbnQ6IFxcXCJcXFwiO1xcbiAgICBkaXNwbGF5OiBibG9jaztcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICBib3JkZXItcmFkaXVzOiAxZW07XFxuICAgIGxlZnQ6IDA7XFxuICAgIHRvcDowO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbiAgICBvcGFjaXR5OiAwO1xcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC41cztcXG4gICAgYm94LXNoYWRvdzogMCAwIDVweCAyMHB4IGdyZWVuO1xcbn1cXG4uYnV0dG9uLS1zZWFyY2g6YWN0aXZlOmFmdGVyIHtcXG4gICAgYm94LXNoYWRvdzogMCAwIDAgMCB3aGl0ZTtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICBib3JkZXItcmFkaXVzOiAxZW07XFxuICAgIGxlZnQ6IDA7XFxuICAgIHRvcDowO1xcbiAgICBvcGFjaXR5OiAxO1xcbiAgICB0cmFuc2l0aW9uOiAwcztcXG4gIH1cXG4gIC5idXR0b24tLXNlYXJjaDphY3RpdmUge1xcbiAgICB0b3A6IDFweDtcXG4gIH1cXG4gIC5tYWluLS1ncmlkX19lcnJvcntcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmVkO1xcbiAgICBjb2xvcjogd2hpdGU7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgYm9yZGVyLXJhZGl1czogMzJweCA7XFxuICAgIHdpZHRoOiA4MCU7XFxuICB9XFxuICAuZXJyb3JfX2NvbnRhaW5lcntcXG4gICBcXG4gICAgdmlzaWJpbGl0eTogaGlkZGVuO1xcbiAgfVxcbiAgLnVsX19jb250YWluZXJ7XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgbGVmdDogMyU7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGdhcDogM3B4O1xcbiAgfVxcbiAgLmxvY2F0aW9uX19hdXRvLXNlYXJjaHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxuICAgIGJvcmRlci1yYWRpdXM6IDE2cHg7XFxuICAgIHdpZHRoOiA4MCU7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGdhcDogNHB4O1xcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xcbiAgICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XFxuICAgIFxcbiAgfVxcbi5hdXRvLXNlYXJjaF9fbG9jYXRpb257XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgcmlnaHQ6IDYlO1xcbiAgICBwYWRkaW5nOiAycHg7XFxuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCBncmF5O1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcbnVse1xcbiAgICBtYXJnaW46IDBweDtcXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGVzLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xub3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlcy5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gdXBkYXRlcjtcbn1cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTtcblxuICAgIC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuICBjc3MgKz0gb2JqLmNzcztcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfVxuXG4gIC8vIEZvciBvbGQgSUVcbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgaWYgKHR5cGVvZiBkb2N1bWVudCA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHJldHVybiB7XG4gICAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZSgpIHt9LFxuICAgICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7fVxuICAgIH07XG4gIH1cbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImltcG9ydCB7IGtleSB9IGZyb20gJy4vbWFpbic7XG5pbXBvcnQgeyBjcmVhdGVMaXN0RWxlbWVudCwgbmV3TGlzdCwgc2VhcmNoVmFsdWUgfSBmcm9tICcuL2RvbUVsZW1lbnRzJztcbmltcG9ydCB7IGNoYW5nZUZvcmVjYXN0IH0gZnJvbSAnLi9jaGFuZ2VGb3JlY2FzdCc7XG5pbXBvcnQgeyBjdXJyZW50V2VhdGhlciB9IGZyb20gJy4vY3VycmVudFdlYXRoZXJBUEknO1xuXG5jb25zdCBhdXRvU2VhcmNoQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmxvY2F0aW9uX19hdXRvLXNlYXJjaCcpO1xuY29uc3QgdWxMaXN0Q29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnVsX19jb250YWluZXInKTtcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBhdXRvQ29tcGxldGUoc2VhcmNoKSB7XG4gIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goXG4gICAgYGh0dHA6Ly9hcGkud2VhdGhlcmFwaS5jb20vdjEvc2VhcmNoLmpzb24/a2V5PSR7a2V5fSZxPSR7c2VhcmNofWAsXG4gICAgeyBtb2RlOiAnY29ycycgfSxcbiAgKTtcbiAgY29uc3QgY3VycmVudERhdGEgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XG4gIGNvbnN0IGZyYWcgPSBuZXcgRG9jdW1lbnRGcmFnbWVudCgpO1xuICB3aGlsZSAoYXV0b1NlYXJjaENvbnRhaW5lci5maXJzdENoaWxkKSB7XG4gICAgYXV0b1NlYXJjaENvbnRhaW5lci5yZW1vdmVDaGlsZChhdXRvU2VhcmNoQ29udGFpbmVyLmZpcnN0Q2hpbGQpO1xuICB9XG4gIGlmIChjdXJyZW50RGF0YS5sZW5ndGggPiAwKSB7XG4gICAgdWxMaXN0Q29udGFpbmVyLnN0eWxlLmRpc3BsYXkgPSAnZmxleCc7XG4gICAgY3VycmVudERhdGEuZm9yRWFjaChhc3luYyAobG9jYXRpb24pID0+IHtcbiAgICAgIGNvbnN0IHBsYWNlID0gYXdhaXQgbG9jYXRpb247XG4gICAgICAvLyAgIGNvbnNvbGUubG9nKGAke3BsYWNlLm5hbWV9LCAke3BsYWNlLnJlZ2lvbn0sICR7cGxhY2UuY291bnRyeX1gKTtcbiAgICAgIGNvbnN0IGxpc3RMb2NhdGlvbiA9IG5ld0xpc3QoJ2F1dG8tc2VhcmNoX19sb2NhdGlvbicpO1xuICAgICAgbGlzdExvY2F0aW9uLmlubmVySFRNTCA9IGAke3BsYWNlLm5hbWV9LCAke3BsYWNlLnJlZ2lvbn0sICR7cGxhY2UuY291bnRyeX1gO1xuICAgICAgbGlzdExvY2F0aW9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICBzZWFyY2hWYWx1ZS52YWx1ZSA9IGAke3BsYWNlLm5hbWV9LCAke3BsYWNlLnJlZ2lvbn0sICR7cGxhY2UuY291bnRyeX1gO1xuICAgICAgICB1bExpc3RDb250YWluZXIuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICAgICAgY3VycmVudFdlYXRoZXIoKTtcbiAgICAgICAgY2hhbmdlRm9yZWNhc3QoKTtcbiAgICAgICAgc2VhcmNoVmFsdWUudmFsdWUgPSAnJztcbiAgICAgICAgdWxMaXN0Q29udGFpbmVyLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gICAgICB9KTtcbiAgICAgIGZyYWcuYXBwZW5kKGxpc3RMb2NhdGlvbik7XG4gICAgICBhdXRvU2VhcmNoQ29udGFpbmVyLmFwcGVuZChmcmFnKTtcbiAgICB9KTtcbiAgfVxufVxuIiwiY29uc3QgY3VycmVudENvbmRpdGlvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jdXJyZW50LXdlYXRoZXJfX2NvbmlkaXRpb24nKTtcbmNvbnN0IGxvY2F0aW9uRE9NID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmN1cnJlbnQtd2VhdGhlcl9fbG9jYXRpb24nKTtcbmNvbnN0IGN1cnJlbnRXZWF0aGVySWNvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5pbWFnZS0td2VhdGhlci1pY29uJyk7XG5jb25zdCBjdXJyZW50VGVtcCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jdXJyZW50LXdlYXRoZXJfX3RlbXBlcmF0dXJlJyk7XG5jb25zdCBjdXJyZW50SHVtaWRpdHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaHVtaWRpdHknKTtcbmNvbnN0IFV2SW5kZXggPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuVVYtSW5kZXgnKTtcbmNvbnN0IHdpbmRTcGVlZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy53aW5kLXNwZWVkJyk7XG5jb25zdCB3aW5kRGlyZWN0aW9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLndpbmQtZGlyZWN0aW9uJyk7XG5jb25zdCBjbG91ZENvdmVyYWdlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNsb3VkLWNvdmVyYWdlJyk7XG5jb25zdCByYWluQ2hhbmdlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnJhaW4tY2hhbmNlJyk7XG5leHBvcnQgZnVuY3Rpb24gY2hhbmdlQ3VycmVudENvbmRpdGlvbihjb25kaXRpb24pIHtcbiAgY3VycmVudENvbmRpdGlvbi5pbm5lckhUTUwgPSBjb25kaXRpb247XG59XG5leHBvcnQgZnVuY3Rpb24gY2hhbmdlTG9jYXRpb24oY2l0eSwgc3RhdGUsIGxvY2F0aW9uLCB0aW1lKSB7XG4gIGxvY2F0aW9uRE9NLmlubmVySFRNTCA9IGAke2NpdHl9ICR7c3RhdGV9ICR7bG9jYXRpb259ICR7dGltZS5zbGljZSgxMSl9YDtcbn1cbmV4cG9ydCBmdW5jdGlvbiBjaGFuZ2VDdXJyZW50SW1hZ2UodXJsKSB7XG4gIGN1cnJlbnRXZWF0aGVySWNvbi5zcmMgPSB1cmw7XG59XG5leHBvcnQgZnVuY3Rpb24gY2hhbmdlQ3VycmVudFRlbXAodGVtcCkge1xuICBjdXJyZW50VGVtcC5pbm5lckhUTUwgPSBgRmVlbHMgbGlrZSAke3RlbXB9IMKwRmA7XG59XG5leHBvcnQgZnVuY3Rpb24gY2hhbmdlQ3VycmVudEh1bWlkaXR5KGh1bWlkaXR5KSB7XG4gIGN1cnJlbnRIdW1pZGl0eS5pbm5lckhUTUwgPSBodW1pZGl0eTtcbn1cbmV4cG9ydCBmdW5jdGlvbiBjaGFuZ2VDdXJyZW50VVYoVVYpIHtcbiAgVXZJbmRleC5pbm5lckhUTUwgPSBVVjtcbn1cbmV4cG9ydCBmdW5jdGlvbiBjaGFuZ2VXaW5kU3BlZWQoc3BlZWQpIHtcbiAgd2luZFNwZWVkLmlubmVySFRNTCA9IGAke3NwZWVkfSBNUEhgO1xufVxuZXhwb3J0IGZ1bmN0aW9uIGNoYW5nZVdpbmREaXJlY3Rpb24oZGlyZWN0aW9uKSB7XG4gIHdpbmREaXJlY3Rpb24uaW5uZXJIVE1MID0gZGlyZWN0aW9uO1xufVxuZXhwb3J0IGZ1bmN0aW9uIGNoYW5nZUNsb3VkQ292ZXJhZ2UoY292ZXJhZ2UpIHtcbiAgY2xvdWRDb3ZlcmFnZS5pbm5lckhUTUwgPSBgJHtjb3ZlcmFnZX0lYDtcbn1cbmV4cG9ydCBmdW5jdGlvbiBjaGFuZ2VSYWluQ2hhbmNlKGNoYW5jZSkge1xuICByYWluQ2hhbmdlLmlubmVySFRNTCA9IGAke2NoYW5jZX0lYDtcbn1cbiIsImltcG9ydCB7IGtleSB9IGZyb20gJy4vbWFpbic7XG5pbXBvcnQgeyBzZWFyY2hWYWx1ZSwgc2VhcmNoQnV0dG9uLCBlcnJvclN0YXRlIH0gZnJvbSAnLi9kb21FbGVtZW50cyc7XG5pbXBvcnQgeyBjaGFuZ2VSYWluQ2hhbmNlIH0gZnJvbSAnLi9jaGFuZ2VET00nO1xuaW1wb3J0IHsgY2hhbmdlRGF5IH0gZnJvbSAnLi9jaGFuZ2VGb3JlY2FzdERPTSc7XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBjaGFuZ2VGb3JlY2FzdCgpIHtcbiAgdHJ5IHtcbiAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKFxuICAgICAgYGh0dHA6Ly9hcGkud2VhdGhlcmFwaS5jb20vdjEvZm9yZWNhc3QuanNvbj9rZXk9JHtrZXl9JnE9JHtzZWFyY2hWYWx1ZS52YWx1ZX0mZGF5cz00YCxcbiAgICAgIHsgbW9kZTogJ2NvcnMnIH0sXG4gICAgKTtcbiAgICBjb25zdCBmb3JlY2FzdERhdGEgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XG4gICAgLy8gY29uc29sZS5sb2coZm9yZWNhc3REYXRhKTtcbiAgICBjaGFuZ2VSYWluQ2hhbmNlKFxuICAgICAgZm9yZWNhc3REYXRhLmZvcmVjYXN0LmZvcmVjYXN0ZGF5WzBdLmRheS5kYWlseV93aWxsX2l0X3JhaW4sXG4gICAgKTtcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tcGx1c3BsdXNcbiAgICBmb3IgKGxldCBpID0gMTsgaSA8IDQ7IGkrKykge1xuICAgICAgbGV0IGRheTtcbiAgICAgIGlmIChpID09PSAxKSB7XG4gICAgICAgIGRheSA9ICdvbmUnO1xuICAgICAgfSBlbHNlIGlmIChpID09PSAyKSB7XG4gICAgICAgIGRheSA9ICd0d28nO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgZGF5ID0gJ3RocmVlJztcbiAgICAgIH1cbiAgICAgIGNvbnN0IHsgZGF0ZSB9ID0gZm9yZWNhc3REYXRhLmZvcmVjYXN0LmZvcmVjYXN0ZGF5W2ldO1xuICAgICAgY29uc3QgY29uZGl0aW9uID0gZm9yZWNhc3REYXRhLmZvcmVjYXN0LmZvcmVjYXN0ZGF5W2ldLmRheS5jb25kaXRpb24udGV4dDtcbiAgICAgIGNvbnN0IGltYWdlID0gZm9yZWNhc3REYXRhLmZvcmVjYXN0LmZvcmVjYXN0ZGF5W2ldLmRheS5jb25kaXRpb24uaWNvbjtcbiAgICAgIGNvbnN0IG1pbiA9IGZvcmVjYXN0RGF0YS5mb3JlY2FzdC5mb3JlY2FzdGRheVtpXS5kYXkubWludGVtcF9mO1xuICAgICAgY29uc3QgbWF4ID0gZm9yZWNhc3REYXRhLmZvcmVjYXN0LmZvcmVjYXN0ZGF5W2ldLmRheS5tYXh0ZW1wX2Y7XG4gICAgICBjaGFuZ2VEYXkoZGF5LCBkYXRlLCBjb25kaXRpb24sIGltYWdlLCBtaW4sIG1heCk7XG4gICAgfVxuICB9IGNhdGNoIChlcnJvcikge1xuICAgIGNvbnNvbGUubG9nKGVycm9yKTtcbiAgICBlcnJvclN0YXRlLnN0eWxlLnZpc2liaWxpdHkgPSAndmlzaWJsZSc7XG4gIH1cbn1cbiIsImV4cG9ydCBmdW5jdGlvbiBjaGFuZ2VEYXkoZGF5LCBkYXRlLCBjb25kaXRpb24sIGltYWdlLCBtaW4sIG1heCkge1xuICBjb25zdCBjaGFuZ2VEYXRlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgLmZvcmVjYXN0X19kYXktJHtkYXl9LWRhdGVgKTtcbiAgY29uc3QgY2hhbmdlQ29uZGl0aW9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcbiAgICBgLmZvcmVjYXN0X19kYXktJHtkYXl9LWNvbmRpdGlvbmAsXG4gICk7XG4gIGNvbnN0IGNoYW5nZUltYWdlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgLmZvcmVjYXN0X19kYXktJHtkYXl9LWltYWdlYCk7XG4gIGNvbnN0IGNoYW5nZU1pbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYC5mb3JlY2FzdF9fZGF5LSR7ZGF5fS1taW5gKTtcbiAgY29uc3QgY2hhbmdlTWF4ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgLmZvcmVjYXN0X19kYXktJHtkYXl9LW1heGApO1xuICBjaGFuZ2VEYXRlLmlubmVySFRNTCA9IGRhdGU7XG4gIGNoYW5nZUNvbmRpdGlvbi5pbm5lckhUTUwgPSBjb25kaXRpb247XG4gIGNoYW5nZUltYWdlLnNyYyA9IGltYWdlO1xuICBjaGFuZ2VNaW4uaW5uZXJIVE1MID0gbWluO1xuICBjaGFuZ2VNYXguaW5uZXJIVE1MID0gbWF4O1xufVxuIiwiaW1wb3J0IHsgc2VhcmNoVmFsdWUsIHNlYXJjaEJ1dHRvbiwgZXJyb3JTdGF0ZSB9IGZyb20gJy4vZG9tRWxlbWVudHMnO1xuaW1wb3J0IHsga2V5IH0gZnJvbSAnLi9tYWluJztcbmltcG9ydCB7IGNoYW5nZUZvcmVjYXN0IH0gZnJvbSAnLi9jaGFuZ2VGb3JlY2FzdCc7XG5pbXBvcnQge1xuICBjaGFuZ2VDdXJyZW50Q29uZGl0aW9uLFxuICBjaGFuZ2VMb2NhdGlvbixcbiAgY2hhbmdlQ3VycmVudEltYWdlLFxuICBjaGFuZ2VDdXJyZW50VGVtcCxcbiAgY2hhbmdlQ3VycmVudEh1bWlkaXR5LFxuICBjaGFuZ2VDdXJyZW50VVYsXG4gIGNoYW5nZVdpbmRTcGVlZCxcbiAgY2hhbmdlV2luZERpcmVjdGlvbixcbiAgY2hhbmdlQ2xvdWRDb3ZlcmFnZSxcbiAgY2hhbmdlUmFpbkNoYW5jZSxcbn0gZnJvbSAnLi9jaGFuZ2VET00nO1xuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gY3VycmVudFdlYXRoZXIoKSB7XG4gIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zdHlsZS5zZXRQcm9wZXJ0eSgnLS12aXNpYmxlLXN0YXRlJywgJ2hpZGRlbicpO1xuICB0cnkge1xuICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goXG4gICAgICBgaHR0cDovL2FwaS53ZWF0aGVyYXBpLmNvbS92MS9jdXJyZW50Lmpzb24/a2V5PSR7a2V5fSZxPSR7c2VhcmNoVmFsdWUudmFsdWV9YCxcbiAgICAgIHsgbW9kZTogJ2NvcnMnIH0sXG4gICAgKTtcbiAgICBjb25zdCBjdXJyZW50RGF0YSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcbiAgICBjaGFuZ2VDdXJyZW50Q29uZGl0aW9uKGN1cnJlbnREYXRhLmN1cnJlbnQuY29uZGl0aW9uLnRleHQpO1xuICAgIGNoYW5nZUxvY2F0aW9uKFxuICAgICAgY3VycmVudERhdGEubG9jYXRpb24ubmFtZSxcbiAgICAgIGN1cnJlbnREYXRhLmxvY2F0aW9uLnJlZ2lvbixcbiAgICAgIGN1cnJlbnREYXRhLmxvY2F0aW9uLmNvdW50cnksXG4gICAgICBjdXJyZW50RGF0YS5sb2NhdGlvbi5sb2NhbHRpbWUsXG4gICAgKTtcbiAgICBjaGFuZ2VDdXJyZW50SW1hZ2UoY3VycmVudERhdGEuY3VycmVudC5jb25kaXRpb24uaWNvbik7XG4gICAgY2hhbmdlQ3VycmVudFRlbXAoY3VycmVudERhdGEuY3VycmVudC5mZWVsc2xpa2VfZik7XG4gICAgY2hhbmdlQ3VycmVudEh1bWlkaXR5KGN1cnJlbnREYXRhLmN1cnJlbnQuaHVtaWRpdHkpO1xuICAgIGNoYW5nZUN1cnJlbnRVVihjdXJyZW50RGF0YS5jdXJyZW50LnV2KTtcbiAgICBjaGFuZ2VXaW5kU3BlZWQoY3VycmVudERhdGEuY3VycmVudC5ndXN0X21waCk7XG4gICAgY2hhbmdlV2luZERpcmVjdGlvbihjdXJyZW50RGF0YS5jdXJyZW50LndpbmRfZGlyKTtcbiAgICBjaGFuZ2VDbG91ZENvdmVyYWdlKGN1cnJlbnREYXRhLmN1cnJlbnQuY2xvdWQpO1xuICAgIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zdHlsZS5zZXRQcm9wZXJ0eSgnLS12aXNpYmxlLXN0YXRlJywgJ3Zpc2libGUnKTtcbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICBlcnJvclN0YXRlLnN0eWxlLnZpc2liaWxpdHkgPSAndmlzaWJsZSc7XG4gIH1cbn1cbiIsImV4cG9ydCBjb25zdCBzZWFyY2hWYWx1ZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5pbnB1dC1maWVsZCcpO1xuZXhwb3J0IGNvbnN0IHNlYXJjaEJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5idXR0b24tLXNlYXJjaCcpO1xuZXhwb3J0IGNvbnN0IGVycm9yU3RhdGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubWFpbi0tZ3JpZF9fZXJyb3InKTtcblxuZXhwb3J0IGZ1bmN0aW9uIG5ld0xpc3QobmFtZSkge1xuICBjb25zdCBsaXN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKTtcbiAgbGlzdC5jbGFzc05hbWUgPSBuYW1lO1xuICByZXR1cm4gbGlzdDtcbn1cbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVMaXN0RWxlbWVudCgpIHtcbiAgY29uc3QgbGlzdCA9IG5ld0xpc3QoJ2xvY2F0aW9uX19hdXRvLXNlYXJjaCcpO1xuICBsaXN0LmlubmVySFRNTCA9ICd0aGlzIGlzIGEgdGVzdCc7XG59XG4iLCJpbXBvcnQgJy4uL3N0eWxlcy9zdHlsZXMuY3NzJztcblxuaW1wb3J0IHsgY3VycmVudFdlYXRoZXIgfSBmcm9tICcuL2N1cnJlbnRXZWF0aGVyQVBJJztcbmltcG9ydCB7IHNlYXJjaFZhbHVlLCBzZWFyY2hCdXR0b24sIGVycm9yU3RhdGUgfSBmcm9tICcuL2RvbUVsZW1lbnRzJztcbmltcG9ydCB7IGNoYW5nZUZvcmVjYXN0IH0gZnJvbSAnLi9jaGFuZ2VGb3JlY2FzdCc7XG5pbXBvcnQgeyBhdXRvQ29tcGxldGUgfSBmcm9tICcuL2F1dG9Db21wbGV0ZSc7XG5cbmNvbnN0IHVsTGlzdENvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy51bF9fY29udGFpbmVyJyk7XG5leHBvcnQgY29uc3Qga2V5ID0gJ2QzMTdjNDRiMTQwMjQyOTg4YzcxNDA4MTgyNDIwMDUnO1xuY29uc3QgaG9yaXpvbnRhbFNjcm9sbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5mbGV4LWdyaWRfX2FkZGl0aW9uYWwnKTtcbmhvcml6b250YWxTY3JvbGwuYWRkRXZlbnRMaXN0ZW5lcignd2hlZWwnLCAoZXZlbnQpID0+IHtcbiAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcblxuICBob3Jpem9udGFsU2Nyb2xsLnNjcm9sbEJ5KHtcbiAgICBsZWZ0OiBldmVudC5kZWx0YVkgPCAwID8gLTMwIDogMzAsXG4gIH0pO1xufSk7XG5zZWFyY2hCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gIGN1cnJlbnRXZWF0aGVyKCk7XG4gIGNoYW5nZUZvcmVjYXN0KCk7XG4gIHNlYXJjaFZhbHVlLnZhbHVlID0gJyc7XG4gIHVsTGlzdENvbnRhaW5lci5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xufSk7XG4vLyBjaGFuZ2Ugb24gZW50ZXIgcHJlc3Mgd2hlbiBpbnB1dCBmaWVsZCBpcyBmb2N1c2VkXG5kb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaW5wdXQtZmllbGQnKS5hZGRFdmVudExpc3RlbmVyKCdmb2N1cycsICgpID0+IHtcbiAgZG9jdW1lbnRcbiAgICAucXVlcnlTZWxlY3RvcignLmlucHV0LWZpZWxkJylcbiAgICAuYWRkRXZlbnRMaXN0ZW5lcigna2V5cHJlc3MnLCAoZXZlbnQpID0+IHtcbiAgICAgIGlmIChldmVudC5rZXkgPT09ICdFbnRlcicpIHtcbiAgICAgICAgY3VycmVudFdlYXRoZXIoKTtcbiAgICAgICAgY2hhbmdlRm9yZWNhc3QoKTtcbiAgICAgICAgc2VhcmNoVmFsdWUudmFsdWUgPSAnJztcbiAgICAgICAgZXJyb3JTdGF0ZS5zdHlsZS52aXNpYmlsaXR5ID0gJ2hpZGRlbic7XG4gICAgICAgIHVsTGlzdENvbnRhaW5lci5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgYXV0b0NvbXBsZXRlKHNlYXJjaFZhbHVlLnZhbHVlKTtcbiAgICAgIH1cbiAgICB9KTtcbn0pO1xuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiIiwiLy8gc3RhcnR1cFxuLy8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4vLyBUaGlzIGVudHJ5IG1vZHVsZSBpcyByZWZlcmVuY2VkIGJ5IG90aGVyIG1vZHVsZXMgc28gaXQgY2FuJ3QgYmUgaW5saW5lZFxudmFyIF9fd2VicGFja19leHBvcnRzX18gPSBfX3dlYnBhY2tfcmVxdWlyZV9fKFwiLi9zcmMvc2NyaXB0cy9tYWluLmpzXCIpO1xuIiwiIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9