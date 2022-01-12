'use strict'
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod }
  }
Object.defineProperty(exports, '__esModule', { value: true })
exports.buttonGroupInjectionKey = void 0
const vue_1 = require('vue')
const _mixins_1 = require('../../_mixins')
const button_group_cssr_1 = __importDefault(
  require('./styles/button-group.cssr')
)
exports.buttonGroupInjectionKey = Symbol('button-group')
const buttonGroupProps = {
  size: {
    type: String,
    default: undefined
  },
  vertical: Boolean
}
exports.default = (0, vue_1.defineComponent)({
  name: 'ButtonGroup',
  props: buttonGroupProps,
  setup(props) {
    const { mergedClsPrefixRef } = (0, _mixins_1.useConfig)(props)
    ;(0, _mixins_1.useStyle)(
      'ButtonGroup',
      button_group_cssr_1.default,
      mergedClsPrefixRef
    )
    ;(0, vue_1.provide)(exports.buttonGroupInjectionKey, props)
    return {
      mergedClsPrefix: mergedClsPrefixRef
    }
  },
  render() {
    const { mergedClsPrefix } = this
    return (0, vue_1.h)(
      'div',
      {
        class: [
          `${mergedClsPrefix}-button-group`,
          this.vertical && `${mergedClsPrefix}-button-group--vertical`
        ],
        role: 'group'
      },
      this.$slots
    )
  }
})
