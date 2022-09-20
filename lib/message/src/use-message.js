'use strict'
Object.defineProperty(exports, '__esModule', { value: true })
exports.useMessage = void 0
const vue_1 = require('vue')
const _utils_1 = require('../../_utils')
const MessageProvider_1 = require('./MessageProvider')
function useMessage() {
  const api = (0, vue_1.inject)(MessageProvider_1.messageApiInjectionKey, null)
  if (api === null) {
    ;(0, _utils_1.throwError)(
      'use-message',
      'No outer <n-message-provider /> founded. See prerequisite in https://www.naiveui.com/en-US/os-theme/components/message for more details. If you want to use `useMessage` outside setup, please check https://www.naiveui.com/zh-CN/os-theme/components/message#Q-&-A.'
    )
  }
  return api
}
exports.useMessage = useMessage