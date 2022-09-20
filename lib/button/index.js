'use strict'
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod }
  }
Object.defineProperty(exports, '__esModule', { value: true })
exports.NButtonGroup = exports.NxButton = exports.NButton = void 0
var Button_1 = require('./src/Button')
Object.defineProperty(exports, 'NButton', {
  enumerable: true,
  get: function () {
    return __importDefault(Button_1).default
  }
})
Object.defineProperty(exports, 'NxButton', {
  enumerable: true,
  get: function () {
    return Button_1.XButton
  }
})
var ButtonGroup_1 = require('./src/ButtonGroup')
Object.defineProperty(exports, 'NButtonGroup', {
  enumerable: true,
  get: function () {
    return __importDefault(ButtonGroup_1).default
  }
})