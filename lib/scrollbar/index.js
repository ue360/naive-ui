'use strict'
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod }
  }
Object.defineProperty(exports, '__esModule', { value: true })
exports.NScrollbar = void 0
var ScrollBar_1 = require('./src/ScrollBar')
Object.defineProperty(exports, 'NScrollbar', {
  enumerable: true,
  get: function () {
    return __importDefault(ScrollBar_1).default
  }
})