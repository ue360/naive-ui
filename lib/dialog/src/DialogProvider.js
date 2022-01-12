'use strict'
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod }
  }
Object.defineProperty(exports, '__esModule', { value: true })
exports.dialogProviderInjectionKey = exports.dialogApiInjectionKey = void 0
const vue_1 = require('vue')
const seemly_1 = require('seemly')
const _utils_1 = require('../../_utils')
const DialogEnvironment_1 = __importDefault(require('./DialogEnvironment'))
const vooks_1 = require('vooks')
exports.dialogApiInjectionKey = Symbol('dialogApi')
exports.dialogProviderInjectionKey = Symbol('dialogProvider')
const dialogProviderProps = {
  injectionKey: String,
  to: [String, Object]
}
exports.default = (0, vue_1.defineComponent)({
  name: 'DialogProvider',
  props: dialogProviderProps,
  setup() {
    const dialogListRef = (0, vue_1.ref)([])
    const dialogInstRefs = {}
    function create(options = {}) {
      const key = (0, seemly_1.createId)()
      const dialogReactive = (0, vue_1.reactive)(
        Object.assign(Object.assign({}, options), {
          key,
          destroy: () => {
            dialogInstRefs[`n-dialog-${key}`].hide()
          }
        })
      )
      dialogListRef.value.push(dialogReactive)
      return dialogReactive
    }
    const typedApi = ['info', 'success', 'warning', 'error'].map(
      (type) => (options) => {
        return create(Object.assign(Object.assign({}, options), { type }))
      }
    )
    function handleAfterLeave(key) {
      const { value: dialogList } = dialogListRef
      dialogList.splice(
        dialogList.findIndex((dialog) => dialog.key === key),
        1
      )
    }
    function destroyAll() {
      Object.values(dialogInstRefs).forEach((dialogInstRef) =>
        dialogInstRef.hide()
      )
    }
    const api = {
      create,
      destroyAll,
      info: typedApi[0],
      success: typedApi[1],
      warning: typedApi[2],
      error: typedApi[3]
    }
    ;(0, vue_1.provide)(exports.dialogApiInjectionKey, api)
    ;(0, vue_1.provide)(exports.dialogProviderInjectionKey, {
      clickedRef: (0, vooks_1.useClicked)(64),
      clickPositionRef: (0, vooks_1.useClickPosition)()
    })
    return Object.assign(Object.assign({}, api), {
      dialogList: dialogListRef,
      dialogInstRefs,
      handleAfterLeave
    })
  },
  render() {
    var _a, _b
    return (0, vue_1.h)(vue_1.Fragment, null, [
      this.dialogList.map((dialog) =>
        (0, vue_1.h)(
          DialogEnvironment_1.default,
          (0, _utils_1.omit)(dialog, ['destroy', 'style'], {
            internalStyle: dialog.style,
            to: this.to,
            ref: (inst) => {
              if (inst === null) {
                // eslint-disable-next-line @typescript-eslint/no-dynamic-delete
                delete this.dialogInstRefs[`n-dialog-${dialog.key}`]
              } else {
                this.dialogInstRefs[`n-dialog-${dialog.key}`] = inst
              }
            },
            internalKey: dialog.key,
            onInternalAfterLeave: this.handleAfterLeave
          })
        )
      ),
      (_b = (_a = this.$slots).default) === null || _b === void 0
        ? void 0
        : _b.call(_a)
    ])
  }
})
