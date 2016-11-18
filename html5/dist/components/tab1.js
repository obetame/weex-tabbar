/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	var __weex_template__ = __webpack_require__(1)
	var __weex_style__ = __webpack_require__(2)
	var __weex_script__ = __webpack_require__(3)

	__weex_define__('@weex-component/a85e229261394565142d779d08429843', [], function(__weex_require__, __weex_exports__, __weex_module__) {

	    __weex_script__(__weex_module__, __weex_exports__, __weex_require__)
	    if (__weex_exports__.__esModule && __weex_exports__.default) {
	      __weex_module__.exports = __weex_exports__.default
	    }

	    __weex_module__.exports.template = __weex_template__

	    __weex_module__.exports.style = __weex_style__

	})

	__weex_bootstrap__('@weex-component/a85e229261394565142d779d08429843',undefined,undefined)

/***/ },
/* 1 */
/***/ function(module, exports) {

	module.exports = {
	  "type": "scroller",
	  "classList": [
	    "wrapper"
	  ],
	  "children": [
	    {
	      "type": "text",
	      "events": {
	        "disappear": "tabbarState",
	        "appear": "tabbarState"
	      },
	      "classList": [
	        "text"
	      ],
	      "style": {
	        "color": function () {return this.color}
	      },
	      "attr": {
	        "value": function () {return this.text}
	      }
	    },
	    {
	      "type": "text",
	      "classList": [
	        "text"
	      ],
	      "style": {
	        "color": function () {return this.color}
	      },
	      "attr": {
	        "value": function () {return this.text}
	      }
	    },
	    {
	      "type": "text",
	      "events": {
	        "click": "addNumber"
	      },
	      "classList": [
	        "text"
	      ],
	      "style": {
	        "color": function () {return this.color}
	      },
	      "attr": {
	        "value": "点击我增加数量"
	      }
	    },
	    {
	      "type": "text",
	      "events": {
	        "click": "minusNumber"
	      },
	      "classList": [
	        "text"
	      ],
	      "style": {
	        "color": function () {return this.color}
	      },
	      "attr": {
	        "value": "点击我减少数量"
	      }
	    },
	    {
	      "type": "text",
	      "classList": [
	        "text"
	      ],
	      "style": {
	        "color": function () {return this.color}
	      },
	      "attr": {
	        "value": function () {return this.text}
	      }
	    },
	    {
	      "type": "text",
	      "classList": [
	        "text"
	      ],
	      "style": {
	        "color": function () {return this.color}
	      },
	      "attr": {
	        "value": function () {return this.text}
	      }
	    },
	    {
	      "type": "text",
	      "classList": [
	        "text"
	      ],
	      "style": {
	        "color": function () {return this.color}
	      },
	      "attr": {
	        "value": function () {return this.text}
	      }
	    },
	    {
	      "type": "input",
	      "style": {
	        "height": 70,
	        "fontSize": 30
	      },
	      "attr": {
	        "type": "tel",
	        "placeholder": "请输入需要设置的数量",
	        "maxlength": "2"
	      },
	      "events": {
	        "change": "record"
	      }
	    },
	    {
	      "type": "text",
	      "events": {
	        "click": "setNumber"
	      },
	      "classList": [
	        "text"
	      ],
	      "style": {
	        "color": function () {return this.color}
	      },
	      "attr": {
	        "value": "点击设置数量"
	      }
	    },
	    {
	      "type": "text",
	      "classList": [
	        "text"
	      ],
	      "style": {
	        "color": function () {return this.color}
	      },
	      "attr": {
	        "value": function () {return this.text}
	      }
	    },
	    {
	      "type": "text",
	      "classList": [
	        "text"
	      ],
	      "style": {
	        "color": function () {return this.color}
	      },
	      "attr": {
	        "value": function () {return this.text}
	      }
	    },
	    {
	      "type": "text",
	      "classList": [
	        "text"
	      ],
	      "style": {
	        "color": function () {return this.color}
	      },
	      "attr": {
	        "value": function () {return this.text}
	      }
	    },
	    {
	      "type": "text",
	      "classList": [
	        "text"
	      ],
	      "style": {
	        "color": function () {return this.color}
	      },
	      "attr": {
	        "value": function () {return this.text}
	      }
	    },
	    {
	      "type": "text",
	      "classList": [
	        "text"
	      ],
	      "style": {
	        "color": function () {return this.color}
	      },
	      "attr": {
	        "value": function () {return this.text}
	      }
	    },
	    {
	      "type": "text",
	      "classList": [
	        "text"
	      ],
	      "style": {
	        "color": function () {return this.color}
	      },
	      "attr": {
	        "value": function () {return this.text}
	      }
	    },
	    {
	      "type": "text",
	      "classList": [
	        "text"
	      ],
	      "style": {
	        "color": function () {return this.color}
	      },
	      "attr": {
	        "value": function () {return this.text}
	      }
	    },
	    {
	      "type": "text",
	      "classList": [
	        "text"
	      ],
	      "style": {
	        "color": function () {return this.color}
	      },
	      "attr": {
	        "value": function () {return this.text}
	      }
	    },
	    {
	      "type": "text",
	      "classList": [
	        "text"
	      ],
	      "style": {
	        "color": function () {return this.color}
	      },
	      "attr": {
	        "value": function () {return this.text}
	      }
	    },
	    {
	      "type": "text",
	      "classList": [
	        "text"
	      ],
	      "style": {
	        "color": function () {return this.color}
	      },
	      "attr": {
	        "value": function () {return this.text}
	      }
	    },
	    {
	      "type": "text",
	      "classList": [
	        "text"
	      ],
	      "style": {
	        "color": function () {return this.color}
	      },
	      "attr": {
	        "value": function () {return this.text}
	      }
	    },
	    {
	      "type": "text",
	      "classList": [
	        "text"
	      ],
	      "style": {
	        "color": function () {return this.color}
	      },
	      "attr": {
	        "value": function () {return this.text}
	      }
	    },
	    {
	      "type": "text",
	      "classList": [
	        "text"
	      ],
	      "style": {
	        "color": function () {return this.color}
	      },
	      "attr": {
	        "value": function () {return this.text}
	      }
	    },
	    {
	      "type": "text",
	      "classList": [
	        "text"
	      ],
	      "style": {
	        "color": function () {return this.color}
	      },
	      "attr": {
	        "value": function () {return this.text}
	      }
	    },
	    {
	      "type": "text",
	      "classList": [
	        "text"
	      ],
	      "style": {
	        "color": function () {return this.color}
	      },
	      "attr": {
	        "value": function () {return this.text}
	      }
	    },
	    {
	      "type": "text",
	      "classList": [
	        "text"
	      ],
	      "style": {
	        "color": function () {return this.color}
	      },
	      "attr": {
	        "value": function () {return this.text}
	      }
	    },
	    {
	      "type": "text",
	      "classList": [
	        "text"
	      ],
	      "style": {
	        "color": function () {return this.color}
	      },
	      "attr": {
	        "value": function () {return this.text}
	      }
	    },
	    {
	      "type": "text",
	      "classList": [
	        "text"
	      ],
	      "style": {
	        "color": "#000000"
	      },
	      "attr": {
	        "value": function () {return this.text}
	      }
	    },
	    {
	      "type": "text",
	      "classList": [
	        "text"
	      ],
	      "style": {
	        "color": function () {return this.color}
	      },
	      "attr": {
	        "value": function () {return this.text}
	      }
	    },
	    {
	      "type": "text",
	      "classList": [
	        "text"
	      ],
	      "style": {
	        "color": function () {return this.color}
	      },
	      "attr": {
	        "value": function () {return this.text}
	      }
	    },
	    {
	      "type": "text",
	      "classList": [
	        "text"
	      ],
	      "style": {
	        "color": function () {return this.color}
	      },
	      "attr": {
	        "value": function () {return this.text}
	      }
	    },
	    {
	      "type": "text",
	      "classList": [
	        "text"
	      ],
	      "style": {
	        "color": function () {return this.color}
	      },
	      "attr": {
	        "value": function () {return this.text}
	      }
	    },
	    {
	      "type": "text",
	      "classList": [
	        "text"
	      ],
	      "style": {
	        "color": function () {return this.color}
	      },
	      "attr": {
	        "value": function () {return this.text}
	      }
	    },
	    {
	      "type": "text",
	      "classList": [
	        "text"
	      ],
	      "style": {
	        "color": function () {return this.color}
	      },
	      "attr": {
	        "value": function () {return this.text}
	      }
	    },
	    {
	      "type": "text",
	      "classList": [
	        "text"
	      ],
	      "style": {
	        "color": function () {return this.color}
	      },
	      "attr": {
	        "value": function () {return this.text}
	      }
	    },
	    {
	      "type": "text",
	      "classList": [
	        "text"
	      ],
	      "style": {
	        "color": function () {return this.color}
	      },
	      "attr": {
	        "value": function () {return this.text}
	      }
	    },
	    {
	      "type": "text",
	      "classList": [
	        "text"
	      ],
	      "style": {
	        "color": function () {return this.color}
	      },
	      "attr": {
	        "value": function () {return this.text}
	      }
	    },
	    {
	      "type": "text",
	      "classList": [
	        "text"
	      ],
	      "style": {
	        "color": function () {return this.color}
	      },
	      "attr": {
	        "value": function () {return this.text}
	      }
	    },
	    {
	      "type": "text",
	      "classList": [
	        "text"
	      ],
	      "style": {
	        "color": function () {return this.color}
	      },
	      "attr": {
	        "value": function () {return this.text}
	      }
	    },
	    {
	      "type": "text",
	      "classList": [
	        "text"
	      ],
	      "style": {
	        "color": function () {return this.color}
	      },
	      "attr": {
	        "value": function () {return this.text}
	      }
	    },
	    {
	      "type": "text",
	      "classList": [
	        "text"
	      ],
	      "style": {
	        "color": function () {return this.color}
	      },
	      "attr": {
	        "value": function () {return this.text}
	      }
	    },
	    {
	      "type": "text",
	      "classList": [
	        "text"
	      ],
	      "style": {
	        "color": function () {return this.color}
	      },
	      "attr": {
	        "value": function () {return this.text}
	      }
	    },
	    {
	      "type": "text",
	      "classList": [
	        "text"
	      ],
	      "style": {
	        "color": function () {return this.color}
	      },
	      "attr": {
	        "value": function () {return this.text}
	      }
	    },
	    {
	      "type": "text",
	      "classList": [
	        "text"
	      ],
	      "style": {
	        "color": function () {return this.color}
	      },
	      "attr": {
	        "value": function () {return this.text}
	      }
	    }
	  ]
	}

/***/ },
/* 2 */
/***/ function(module, exports) {

	module.exports = {
	  "wrapper": {
	    "width": 750,
	    "position": "absolute",
	    "top": 88,
	    "left": 0,
	    "right": 0,
	    "bottom": 0,
	    "alignItems": "center",
	    "justifyContent": "center"
	  },
	  "text": {
	    "fontSize": 60,
	    "fontWeight": "bold"
	  }
	}

/***/ },
/* 3 */
/***/ function(module, exports) {

	module.exports = function(module, exports, __weex_require__){'use strict';

	module.exports = {
		data: function () {return {
			color: '#ff0000',
			text: '',
			input: ""
		}},
		created: function created() {
			this.color = '#694e4e';
			this.text = 'This is Tab 1 Test.';
		},
		methods: {
			tabbarState: function tabbarState(event) {
				this.$dispatch("State", {
					state: event.direction === "up" ? "hide" : "show"
				});
			},
			addNumber: function addNumber() {
				this.$dispatch("addGoodsNumber", {
					value: 1,
					action: "add",
					target: "cart"
				});
			},
			minusNumber: function minusNumber() {
				this.$dispatch("addGoodsNumber", {
					value: 1,
					action: "minus",
					target: "cart"
				});
			},
			setNumber: function setNumber() {
				this.$dispatch("addGoodsNumber", {
					value: this.input,
					action: "set",
					target: "cart"
				});
			},
			record: function record(e) {
				this.input = e.value;
			}
		}
	};}
	/* generated by weex-loader */


/***/ }
/******/ ]);