'use strict'
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod }
  }
Object.defineProperty(exports, '__esModule', { value: true })
const button_rtl_cssr_1 = __importDefault(
  require('../src/styles/button-rtl.cssr')
)
exports.default = {
  name: 'Button',
  style: button_rtl_cssr_1.default
}