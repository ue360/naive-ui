'use strict'
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod }
  }
Object.defineProperty(exports, '__esModule', { value: true })
exports.tagRtl = exports.tagLight = exports.tagDark = void 0
var dark_1 = require('./dark')
Object.defineProperty(exports, 'tagDark', {
  enumerable: true,
  get: function () {
    return __importDefault(dark_1).default
  }
})
var light_1 = require('./light')
Object.defineProperty(exports, 'tagLight', {
  enumerable: true,
  get: function () {
    return __importDefault(light_1).default
  }
})
var rtl_1 = require('./rtl')
Object.defineProperty(exports, 'tagRtl', {
  enumerable: true,
  get: function () {
    return __importDefault(rtl_1).default
  }
})