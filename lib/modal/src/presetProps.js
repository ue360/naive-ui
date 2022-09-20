'use strict'
Object.defineProperty(exports, '__esModule', { value: true })
exports.presetPropsKeys = exports.presetProps = void 0
const Dialog_1 = require('../../dialog/src/Dialog')
const Card_1 = require('../../card/src/Card')
const _utils_1 = require('../../_utils')
const presetProps = Object.assign(
  Object.assign({}, Card_1.cardBaseProps),
  Dialog_1.dialogProps
)
exports.presetProps = presetProps
const presetPropsKeys = (0, _utils_1.keysOf)(presetProps)
exports.presetPropsKeys = presetPropsKeys