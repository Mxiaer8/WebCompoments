(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else {
		var a = factory();
		for(var i in a) (typeof exports === 'object' ? exports : root)[i] = a[i];
	}
})(typeof self !== 'undefined' ? self : this, function() {
return /******/ (function(modules) { // webpackBootstrap
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
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _SlidePicturesMin = __webpack_require__(1);

console.log({ SlidePicture: _SlidePicturesMin.SlidePicture });
//调用轮播图
var path1 = ['https://img03.sogoucdn.com/app/a/100520093/dc72c3c04ef01fdf-22176402958c6b80-c38b335da7c9b59cca351a1973458b0f.jpg', 'https://img01.sogoucdn.com/app/a/100520093/12400ee0679b6e1e-d3e639ff657519ea-a9d4d43a8f00e80cfae6b8f74af91564.jpg', 'https://img03.sogoucdn.com/app/a/100520093/3c28af542f2d49f7-da1566425074a021-9c373de8439e52c5d885c8459d285946.jpg'];
var slidePicture = new _SlidePicturesMin.SlidePicture(path1);
slidePicture.init('1000', '500'); //轮播图长度和宽度
slidePicture.show();

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

(function webpackUniversalModuleDefinition(root, factory) {
	if (( false ? 'undefined' : _typeof(exports)) === 'object' && ( false ? 'undefined' : _typeof(module)) === 'object') module.exports = factory();else if (true) !(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));else {
		var a = factory();
		for (var i in a) {
			((typeof exports === 'undefined' ? 'undefined' : _typeof(exports)) === 'object' ? exports : root)[i] = a[i];
		}
	}
})(typeof self !== 'undefined' ? self : undefined, function () {
	return (/******/function (modules) {
			// webpackBootstrap
			/******/ // The module cache
			/******/var installedModules = {};
			/******/
			/******/ // The require function
			/******/function __webpack_require__(moduleId) {
				/******/
				/******/ // Check if module is in cache
				/******/if (installedModules[moduleId]) {
					/******/return installedModules[moduleId].exports;
					/******/
				}
				/******/ // Create a new module (and put it into the cache)
				/******/var module = installedModules[moduleId] = {
					/******/i: moduleId,
					/******/l: false,
					/******/exports: {}
					/******/ };
				/******/
				/******/ // Execute the module function
				/******/modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
				/******/
				/******/ // Flag the module as loaded
				/******/module.l = true;
				/******/
				/******/ // Return the exports of the module
				/******/return module.exports;
				/******/
			}
			/******/
			/******/
			/******/ // expose the modules object (__webpack_modules__)
			/******/__webpack_require__.m = modules;
			/******/
			/******/ // expose the module cache
			/******/__webpack_require__.c = installedModules;
			/******/
			/******/ // define getter function for harmony exports
			/******/__webpack_require__.d = function (exports, name, getter) {
				/******/if (!__webpack_require__.o(exports, name)) {
					/******/Object.defineProperty(exports, name, {
						/******/configurable: false,
						/******/enumerable: true,
						/******/get: getter
						/******/ });
					/******/
				}
				/******/
			};
			/******/
			/******/ // getDefaultExport function for compatibility with non-harmony modules
			/******/__webpack_require__.n = function (module) {
				/******/var getter = module && module.__esModule ?
				/******/function getDefault() {
					return module['default'];
				} :
				/******/function getModuleExports() {
					return module;
				};
				/******/__webpack_require__.d(getter, 'a', getter);
				/******/return getter;
				/******/
			};
			/******/
			/******/ // Object.prototype.hasOwnProperty.call
			/******/__webpack_require__.o = function (object, property) {
				return Object.prototype.hasOwnProperty.call(object, property);
			};
			/******/
			/******/ // __webpack_public_path__
			/******/__webpack_require__.p = "";
			/******/
			/******/ // Load entry module and return exports
			/******/return __webpack_require__(__webpack_require__.s = 0);
			/******/
		}(
		/************************************************************************/
		/******/[
		/* 0 */
		/***/function (module, exports, __webpack_require__) {

			"use strict";

			Object.defineProperty(exports, "__esModule", {
				value: true
			});

			var _createClass = function () {
				function defineProperties(target, props) {
					for (var i = 0; i < props.length; i++) {
						var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
					}
				}return function (Constructor, protoProps, staticProps) {
					if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
				};
			}();

			function _classCallCheck(instance, Constructor) {
				if (!(instance instanceof Constructor)) {
					throw new TypeError("Cannot call a class as a function");
				}
			}

			//引入css文件
			__webpack_require__(1);

			//引入jq文件
			var _element = document.createElement('script');
			_element.setAttribute('type', 'text/javaScript');
			_element.setAttribute('src', 'https://cdn.staticfile.org/jquery/2.1.1/jquery.min.js');
			document.body.appendChild(_element);

			// 轮播图

			var SlidePicture = function () {
				//轮播图图片初始化
				function SlidePicture(picturesPath) {
					_classCallCheck(this, SlidePicture);

					this.picturesPath = picturesPath;
					this.picturesNum = picturesPath.length;
					this.radioNum = picturesPath.length;
					this.number = 0;
					this.timer = null;
				}

				_createClass(SlidePicture, [{
					key: 'init',
					value: function init(width, height) {
						this.width = width;
						this.height = height;
						var pictureHtml = '';
						var radioHtml = '';

						for (var i = 0; i < this.picturesPath.length; i++) {
							pictureHtml += '<li><img class="my-photo" alt="loading" src="' + this.picturesPath[i] + '"></li>';
							radioHtml += '<li></li>';
						}
						pictureHtml += '<li><img class="my-photo" alt="loading" src=' + this.picturesPath[0] + '></li>'; //处理轮播图无缝链接

						//初始化轮播图ul
						var ul = document.getElementById('slide_img');
						ul.innerHTML = pictureHtml;
						ul.style.width = (this.picturesNum + 1) * 100 + '%';

						//初始化轮播图li
						var lis = ul.getElementsByTagName('li');
						var liWidth = 100 / (this.picturesNum + 1);
						for (var i = 0; i < lis.length; i++) {
							lis[i].style.width = liWidth + '%';
						}

						//初始化轮播图小圆点
						var radio = document.getElementById('num');
						var radioLis = radio.getElementsByTagName('li');
						radio.innerHTML = radioHtml;
						radioLis[0].style.backgroundColor = 'red';
						var _this = this;
						for (var i = 0; i < radioLis.length; i++) {
							(function (i) {
								radioLis[i].onclick = function () {
									SlidePicture.prototype.radioOnclick(i, _this);
								};
							})(i);
						}
					}

					//小圆点轮播

				}, {
					key: 'dealRadius',
					value: function dealRadius(num) {
						var lis = document.getElementById('num').getElementsByTagName('li');
						lis[num].style.backgroundColor = 'red';
						for (var i = 0; i < num; i++) {
							lis[i].style.backgroundColor = 'white';
						}
						for (var i = num + 1; i < this.picturesNum; i++) {
							lis[i].style.backgroundColor = 'white';
						}
					}

					//轮播图展示

				}, {
					key: 'show',
					value: function show() {
						var _slide = document.getElementsByClassName('slide_content')[0].getElementsByClassName('slide')[0];
						var image = document.getElementById('slide_img').getElementsByTagName('img');
						_slide.style.width = this.width;
						_slide.style.height = this.height;
						for (var i = 0; i < image.length; i++) {
							image[i].style.height = this.height;
						}
						var that = this;
						SlidePicture.prototype.startSlide = function () {
							that.number++;
							if (that.number == that.picturesNum + 1) {
								that.number = 1;
								$('#slide_img').css({ left: '0px' }); //处理无缝衔接小圆点的跳转理无缝衔接图
								that.dealRadius(0); // 处理无缝衔接小圆点的跳转
							}

							var imageLeft = -1 * that.number * that.width;
							$('#slide_img').animate({ left: imageLeft }, 700);
							if (that.number == that.picturesNum) that.dealRadius(0);else that.dealRadius(that.number);
						};

						this.timer = setInterval(this.startSlide, 4500);
						//console.log(this.timer);
					}

					//轮播图小圆点的点击实现

				}, {
					key: 'radioOnclick',
					value: function radioOnclick(num, _this) {
						//console.log(_this.number);
						clearInterval(_this.timer);
						_this.dealRadius(num);
						var imageLeft = -1 * num * _this.width;
						if (!(_this.number == _this.picturesNum && num == 0)) $('#slide_img').animate({ left: imageLeft }, 700);
						_this.number = num;
						_this.timer = setInterval(_this.startSlide, 4500);
					}
				}]);

				return SlidePicture;
			}();

			;

			exports.SlidePicture = SlidePicture;

			/***/
		},
		/* 1 */
		/***/function (module, exports, __webpack_require__) {

			var content = __webpack_require__(2);

			if (typeof content === 'string') content = [[module.i, content, '']];

			var transform;
			var insertInto;

			var options = { "hmr": true };

			options.transform = transform;
			options.insertInto = undefined;

			var update = __webpack_require__(4)(content, options);

			if (content.locals) module.exports = content.locals;

			if (false) {
				module.hot.accept("!!./node_modules/css-loader/dist/cjs.js!./SlidePictures.css", function () {
					var newContent = require("!!./node_modules/css-loader/dist/cjs.js!./SlidePictures.css");

					if (typeof newContent === 'string') newContent = [[module.id, newContent, '']];

					var locals = function (a, b) {
						var key,
						    idx = 0;

						for (key in a) {
							if (!b || a[key] !== b[key]) return false;
							idx++;
						}

						for (key in b) {
							idx--;
						}return idx === 0;
					}(content.locals, newContent.locals);

					if (!locals) throw new Error('Aborting CSS HMR due to changed css-modules locals.');

					update(newContent);
				});

				module.hot.dispose(function () {
					update();
				});
			}

			/***/
		},
		/* 2 */
		/***/function (module, exports, __webpack_require__) {

			exports = module.exports = __webpack_require__(3)(false);
			// Module
			exports.push([module.i, "*{\r\n    padding: 0;\r\n    margin: 0;\r\n}\r\n.slide{\r\n\tposition: relative;\r\n\tmargin: 0px auto;\r\n\toverflow: hidden;\r\n}\r\n.slide .img ul{\r\n\tposition: absolute;\r\n\tleft: 0;\r\n}\r\n.slide .img li{\r\n\tlist-style-type: none;\r\n\tfloat: left;\r\n}\r\n.slide img{\r\n\twidth: 100%;\r\n}\r\n.slide #num li{\r\n\tlist-style-type: none;\r\n\tbackground-color: white;\r\n\tborder: 1px solid red;\r\n\tborder-radius: 100px;\r\n\tdisplay: inline-block;\r\n\twidth: 10px;\r\n\theight: 10px;\r\n\tmargin: 10px;\r\n\tcursor: pointer;\r\n}\r\n.slide #num {\r\n\tposition: absolute;\r\n\tleft: 0;\r\n\tright: 0;\r\n\tbottom: 5%;\r\n\ttext-align: center;\r\n}", ""]);

			/***/
		},
		/* 3 */
		/***/function (module, exports, __webpack_require__) {

			"use strict";

			/*
     MIT License http://www.opensource.org/licenses/mit-license.php
     Author Tobias Koppers @sokra
   */
			// css base code, injected by the css-loader

			module.exports = function (useSourceMap) {
				var list = []; // return the list of modules as css string

				list.toString = function toString() {
					return this.map(function (item) {
						var content = cssWithMappingToString(item, useSourceMap);

						if (item[2]) {
							return '@media ' + item[2] + '{' + content + '}';
						} else {
							return content;
						}
					}).join('');
				}; // import a list of modules into the list


				list.i = function (modules, mediaQuery) {
					if (typeof modules === 'string') {
						modules = [[null, modules, '']];
					}

					var alreadyImportedModules = {};

					for (var i = 0; i < this.length; i++) {
						var id = this[i][0];

						if (id != null) {
							alreadyImportedModules[id] = true;
						}
					}

					for (i = 0; i < modules.length; i++) {
						var item = modules[i]; // skip already imported module
						// this implementation is not 100% perfect for weird media query combinations
						// when a module is imported multiple times with different media queries.
						// I hope this will never occur (Hey this way we have smaller bundles)

						if (item[0] == null || !alreadyImportedModules[item[0]]) {
							if (mediaQuery && !item[2]) {
								item[2] = mediaQuery;
							} else if (mediaQuery) {
								item[2] = '(' + item[2] + ') and (' + mediaQuery + ')';
							}

							list.push(item);
						}
					}
				};

				return list;
			};

			function cssWithMappingToString(item, useSourceMap) {
				var content = item[1] || '';
				var cssMapping = item[3];

				if (!cssMapping) {
					return content;
				}

				if (useSourceMap && typeof btoa === 'function') {
					var sourceMapping = toComment(cssMapping);
					var sourceURLs = cssMapping.sources.map(function (source) {
						return '/*# sourceURL=' + cssMapping.sourceRoot + source + ' */';
					});
					return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
				}

				return [content].join('\n');
			} // Adapted from convert-source-map (MIT)


			function toComment(sourceMap) {
				// eslint-disable-next-line no-undef
				var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
				var data = 'sourceMappingURL=data:application/json;charset=utf-8;base64,' + base64;
				return '/*# ' + data + ' */';
			}

			/***/
		},
		/* 4 */
		/***/function (module, exports, __webpack_require__) {

			/*
   	MIT License http://www.opensource.org/licenses/mit-license.php
   	Author Tobias Koppers @sokra
   */

			var stylesInDom = {};

			var memoize = function memoize(fn) {
				var memo;

				return function () {
					if (typeof memo === "undefined") memo = fn.apply(this, arguments);
					return memo;
				};
			};

			var isOldIE = memoize(function () {
				// Test for IE <= 9 as proposed by Browserhacks
				// @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
				// Tests for existence of standard globals is to allow style-loader
				// to operate correctly into non-standard environments
				// @see https://github.com/webpack-contrib/style-loader/issues/177
				return window && document && document.all && !window.atob;
			});

			var getTarget = function getTarget(target, parent) {
				if (parent) {
					return parent.querySelector(target);
				}
				return document.querySelector(target);
			};

			var getElement = function (fn) {
				var memo = {};

				return function (target, parent) {
					// If passing function in options, then use it for resolve "head" element.
					// Useful for Shadow Root style i.e
					// {
					//   insertInto: function () { return document.querySelector("#foo").shadowRoot }
					// }
					if (typeof target === 'function') {
						return target();
					}
					if (typeof memo[target] === "undefined") {
						var styleTarget = getTarget.call(this, target, parent);
						// Special case to return head of iframe instead of iframe itself
						if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
							try {
								// This will throw an exception if access to iframe is blocked
								// due to cross-origin restrictions
								styleTarget = styleTarget.contentDocument.head;
							} catch (e) {
								styleTarget = null;
							}
						}
						memo[target] = styleTarget;
					}
					return memo[target];
				};
			}();

			var singleton = null;
			var singletonCounter = 0;
			var stylesInsertedAtTop = [];

			var fixUrls = __webpack_require__(5);

			module.exports = function (list, options) {
				if (typeof DEBUG !== "undefined" && DEBUG) {
					if ((typeof document === 'undefined' ? 'undefined' : _typeof(document)) !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
				}

				options = options || {};

				options.attrs = _typeof(options.attrs) === "object" ? options.attrs : {};

				// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
				// tags it will allow on a page
				if (!options.singleton && typeof options.singleton !== "boolean") options.singleton = isOldIE();

				// By default, add <style> tags to the <head> element
				if (!options.insertInto) options.insertInto = "head";

				// By default, add <style> tags to the bottom of the target
				if (!options.insertAt) options.insertAt = "bottom";

				var styles = listToStyles(list, options);

				addStylesToDom(styles, options);

				return function update(newList) {
					var mayRemove = [];

					for (var i = 0; i < styles.length; i++) {
						var item = styles[i];
						var domStyle = stylesInDom[item.id];

						domStyle.refs--;
						mayRemove.push(domStyle);
					}

					if (newList) {
						var newStyles = listToStyles(newList, options);
						addStylesToDom(newStyles, options);
					}

					for (var i = 0; i < mayRemove.length; i++) {
						var domStyle = mayRemove[i];

						if (domStyle.refs === 0) {
							for (var j = 0; j < domStyle.parts.length; j++) {
								domStyle.parts[j]();
							}delete stylesInDom[domStyle.id];
						}
					}
				};
			};

			function addStylesToDom(styles, options) {
				for (var i = 0; i < styles.length; i++) {
					var item = styles[i];
					var domStyle = stylesInDom[item.id];

					if (domStyle) {
						domStyle.refs++;

						for (var j = 0; j < domStyle.parts.length; j++) {
							domStyle.parts[j](item.parts[j]);
						}

						for (; j < item.parts.length; j++) {
							domStyle.parts.push(addStyle(item.parts[j], options));
						}
					} else {
						var parts = [];

						for (var j = 0; j < item.parts.length; j++) {
							parts.push(addStyle(item.parts[j], options));
						}

						stylesInDom[item.id] = { id: item.id, refs: 1, parts: parts };
					}
				}
			}

			function listToStyles(list, options) {
				var styles = [];
				var newStyles = {};

				for (var i = 0; i < list.length; i++) {
					var item = list[i];
					var id = options.base ? item[0] + options.base : item[0];
					var css = item[1];
					var media = item[2];
					var sourceMap = item[3];
					var part = { css: css, media: media, sourceMap: sourceMap };

					if (!newStyles[id]) styles.push(newStyles[id] = { id: id, parts: [part] });else newStyles[id].parts.push(part);
				}

				return styles;
			}

			function insertStyleElement(options, style) {
				var target = getElement(options.insertInto);

				if (!target) {
					throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");
				}

				var lastStyleElementInsertedAtTop = stylesInsertedAtTop[stylesInsertedAtTop.length - 1];

				if (options.insertAt === "top") {
					if (!lastStyleElementInsertedAtTop) {
						target.insertBefore(style, target.firstChild);
					} else if (lastStyleElementInsertedAtTop.nextSibling) {
						target.insertBefore(style, lastStyleElementInsertedAtTop.nextSibling);
					} else {
						target.appendChild(style);
					}
					stylesInsertedAtTop.push(style);
				} else if (options.insertAt === "bottom") {
					target.appendChild(style);
				} else if (_typeof(options.insertAt) === "object" && options.insertAt.before) {
					var nextSibling = getElement(options.insertAt.before, target);
					target.insertBefore(style, nextSibling);
				} else {
					throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");
				}
			}

			function removeStyleElement(style) {
				if (style.parentNode === null) return false;
				style.parentNode.removeChild(style);

				var idx = stylesInsertedAtTop.indexOf(style);
				if (idx >= 0) {
					stylesInsertedAtTop.splice(idx, 1);
				}
			}

			function createStyleElement(options) {
				var style = document.createElement("style");

				if (options.attrs.type === undefined) {
					options.attrs.type = "text/css";
				}

				if (options.attrs.nonce === undefined) {
					var nonce = getNonce();
					if (nonce) {
						options.attrs.nonce = nonce;
					}
				}

				addAttrs(style, options.attrs);
				insertStyleElement(options, style);

				return style;
			}

			function createLinkElement(options) {
				var link = document.createElement("link");

				if (options.attrs.type === undefined) {
					options.attrs.type = "text/css";
				}
				options.attrs.rel = "stylesheet";

				addAttrs(link, options.attrs);
				insertStyleElement(options, link);

				return link;
			}

			function addAttrs(el, attrs) {
				Object.keys(attrs).forEach(function (key) {
					el.setAttribute(key, attrs[key]);
				});
			}

			function getNonce() {
				if (false) {
					return null;
				}

				return __webpack_require__.nc;
			}

			function addStyle(obj, options) {
				var style, update, remove, result;

				// If a transform function was defined, run it on the css
				if (options.transform && obj.css) {
					result = typeof options.transform === 'function' ? options.transform(obj.css) : options.transform.default(obj.css);

					if (result) {
						// If transform returns a value, use that instead of the original css.
						// This allows running runtime transformations on the css.
						obj.css = result;
					} else {
						// If the transform function returns a falsy value, don't add this css.
						// This allows conditional loading of css
						return function () {
							// noop
						};
					}
				}

				if (options.singleton) {
					var styleIndex = singletonCounter++;

					style = singleton || (singleton = createStyleElement(options));

					update = applyToSingletonTag.bind(null, style, styleIndex, false);
					remove = applyToSingletonTag.bind(null, style, styleIndex, true);
				} else if (obj.sourceMap && typeof URL === "function" && typeof URL.createObjectURL === "function" && typeof URL.revokeObjectURL === "function" && typeof Blob === "function" && typeof btoa === "function") {
					style = createLinkElement(options);
					update = updateLink.bind(null, style, options);
					remove = function remove() {
						removeStyleElement(style);

						if (style.href) URL.revokeObjectURL(style.href);
					};
				} else {
					style = createStyleElement(options);
					update = applyToTag.bind(null, style);
					remove = function remove() {
						removeStyleElement(style);
					};
				}

				update(obj);

				return function updateStyle(newObj) {
					if (newObj) {
						if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {
							return;
						}

						update(obj = newObj);
					} else {
						remove();
					}
				};
			}

			var replaceText = function () {
				var textStore = [];

				return function (index, replacement) {
					textStore[index] = replacement;

					return textStore.filter(Boolean).join('\n');
				};
			}();

			function applyToSingletonTag(style, index, remove, obj) {
				var css = remove ? "" : obj.css;

				if (style.styleSheet) {
					style.styleSheet.cssText = replaceText(index, css);
				} else {
					var cssNode = document.createTextNode(css);
					var childNodes = style.childNodes;

					if (childNodes[index]) style.removeChild(childNodes[index]);

					if (childNodes.length) {
						style.insertBefore(cssNode, childNodes[index]);
					} else {
						style.appendChild(cssNode);
					}
				}
			}

			function applyToTag(style, obj) {
				var css = obj.css;
				var media = obj.media;

				if (media) {
					style.setAttribute("media", media);
				}

				if (style.styleSheet) {
					style.styleSheet.cssText = css;
				} else {
					while (style.firstChild) {
						style.removeChild(style.firstChild);
					}

					style.appendChild(document.createTextNode(css));
				}
			}

			function updateLink(link, options, obj) {
				var css = obj.css;
				var sourceMap = obj.sourceMap;

				/*
    	If convertToAbsoluteUrls isn't defined, but sourcemaps are enabled
    	and there is no publicPath defined then lets turn convertToAbsoluteUrls
    	on by default.  Otherwise default to the convertToAbsoluteUrls option
    	directly
    */
				var autoFixUrls = options.convertToAbsoluteUrls === undefined && sourceMap;

				if (options.convertToAbsoluteUrls || autoFixUrls) {
					css = fixUrls(css);
				}

				if (sourceMap) {
					// http://stackoverflow.com/a/26603875
					css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
				}

				var blob = new Blob([css], { type: "text/css" });

				var oldSrc = link.href;

				link.href = URL.createObjectURL(blob);

				if (oldSrc) URL.revokeObjectURL(oldSrc);
			}

			/***/
		},
		/* 5 */
		/***/function (module, exports) {

			/**
    * When source maps are enabled, `style-loader` uses a link element with a data-uri to
    * embed the css on the page. This breaks all relative urls because now they are relative to a
    * bundle instead of the current page.
    *
    * One solution is to only use full urls, but that may be impossible.
    *
    * Instead, this function "fixes" the relative urls to be absolute according to the current page location.
    *
    * A rudimentary test suite is located at `test/fixUrls.js` and can be run via the `npm test` command.
    *
    */

			module.exports = function (css) {
				// get current location
				var location = typeof window !== "undefined" && window.location;

				if (!location) {
					throw new Error("fixUrls requires window.location");
				}

				// blank or null?
				if (!css || typeof css !== "string") {
					return css;
				}

				var baseUrl = location.protocol + "//" + location.host;
				var currentDir = baseUrl + location.pathname.replace(/\/[^\/]*$/, "/");

				// convert each url(...)
				/*
    This regular expression is just a way to recursively match brackets within
    a string.
    	 /url\s*\(  = Match on the word "url" with any whitespace after it and then a parens
       (  = Start a capturing group
         (?:  = Start a non-capturing group
             [^)(]  = Match anything that isn't a parentheses
             |  = OR
             \(  = Match a start parentheses
                 (?:  = Start another non-capturing groups
                     [^)(]+  = Match anything that isn't a parentheses
                     |  = OR
                     \(  = Match a start parentheses
                         [^)(]*  = Match anything that isn't a parentheses
                     \)  = Match a end parentheses
                 )  = End Group
                 *\) = Match anything and then a close parens
             )  = Close non-capturing group
             *  = Match anything
          )  = Close capturing group
     \)  = Match a close parens
    	 /gi  = Get all matches, not the first.  Be case insensitive.
     */
				var fixedCss = css.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi, function (fullMatch, origUrl) {
					// strip quotes (if they exist)
					var unquotedOrigUrl = origUrl.trim().replace(/^"(.*)"$/, function (o, $1) {
						return $1;
					}).replace(/^'(.*)'$/, function (o, $1) {
						return $1;
					});

					// already a full url? no change
					if (/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(unquotedOrigUrl)) {
						return fullMatch;
					}

					// convert the url to a full url
					var newUrl;

					if (unquotedOrigUrl.indexOf("//") === 0) {
						//TODO: should we add protocol?
						newUrl = unquotedOrigUrl;
					} else if (unquotedOrigUrl.indexOf("/") === 0) {
						// path should be relative to the base url
						newUrl = baseUrl + unquotedOrigUrl; // already starts with '/'
					} else {
						// path should be relative to current directory
						newUrl = currentDir + unquotedOrigUrl.replace(/^\.\//, ""); // Strip leading './'
					}

					// send back the fixed url(...)
					return "url(" + JSON.stringify(newUrl) + ")";
				});

				// send back the fixed css
				return fixedCss;
			};

			/***/
		}]
		/******/)
	);
});
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(2)(module)))

/***/ }),
/* 2 */
/***/ (function(module, exports) {

module.exports = function(module) {
	if(!module.webpackPolyfill) {
		module.deprecate = function() {};
		module.paths = [];
		// module.parent = undefined by default
		if(!module.children) module.children = [];
		Object.defineProperty(module, "loaded", {
			enumerable: true,
			get: function() {
				return module.l;
			}
		});
		Object.defineProperty(module, "id", {
			enumerable: true,
			get: function() {
				return module.i;
			}
		});
		module.webpackPolyfill = 1;
	}
	return module;
};


/***/ })
/******/ ]);
});