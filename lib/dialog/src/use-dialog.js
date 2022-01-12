'use strict'
Object.defineProperty(exports, '__esModule', { value: true })
exports.useDialog = void 0
const vue_1 = require('vue')
const DialogProvider_1 = require('./DialogProvider')
const _utils_1 = require('../../_utils')
function useDialog() {
  const dialog = (0, vue_1.inject)(DialogProvider_1.dialogApiInjectionKey, null)
  if (dialog === null) {
    ;(0, _utils_1.throwError)(
      'use-dialog',
      'No outer <n-dialog-provider /> founded.'
    )
  }
  return dialog
}
exports.useDialog = useDialog
