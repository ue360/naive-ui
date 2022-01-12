'use strict'
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod }
  }
Object.defineProperty(exports, '__esModule', { value: true })
exports.useDialog = exports.NDialogProvider = exports.NDialog = void 0
var Dialog_1 = require('./src/Dialog')
Object.defineProperty(exports, 'NDialog', {
  enumerable: true,
  get: function () {
    return __importDefault(Dialog_1).default
  }
})
var DialogProvider_1 = require('./src/DialogProvider')
Object.defineProperty(exports, 'NDialogProvider', {
  enumerable: true,
  get: function () {
    return __importDefault(DialogProvider_1).default
  }
})
var use_dialog_1 = require('./src/use-dialog')
Object.defineProperty(exports, 'useDialog', {
  enumerable: true,
  get: function () {
    return use_dialog_1.useDialog
  }
})
