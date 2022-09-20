'use strict'
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod }
  }
Object.defineProperty(exports, '__esModule', { value: true })
const vue_1 = require('vue')
const _mixins_1 = require('../../../_mixins')
const icons_1 = require('../../icons')
const icon_1 = __importDefault(require('../../icon'))
const icon_switch_transition_1 = __importDefault(
  require('../../icon-switch-transition')
)
const index_cssr_1 = __importDefault(require('./styles/index.cssr'))
exports.default = (0, vue_1.defineComponent)({
  name: 'BaseClear',
  props: {
    clsPrefix: {
      type: String,
      required: true
    },
    show: Boolean,
    onClear: Function
  },
  setup(props) {
    ;(0, _mixins_1.useStyle)(
      'BaseClear',
      index_cssr_1.default,
      (0, vue_1.toRef)(props, 'clsPrefix')
    )
    const { NConfigProvider } = (0, _mixins_1.useConfig)()
    return {
      NConfigProvider,
      handleMouseDown(e) {
        e.preventDefault()
      }
    }
  },
  render() {
    const { clsPrefix } = this
    return (0, vue_1.h)(
      'div',
      { class: `${clsPrefix}-base-clear` },
      (0, vue_1.h)(icon_switch_transition_1.default, null, {
        default: () => {
          return this.show
            ? (0, vue_1.h)(
                icon_1.default,
                {
                  clsPrefix: clsPrefix,
                  key: 'dismiss',
                  class: `${clsPrefix}-base-clear__clear`,
                  onClick: this.onClear,
                  onMousedown: this.handleMouseDown,
                  'data-clear': true
                },
                {
                  default: () => (0, vue_1.h)(icons_1.ClearIcon, null)
                }
              )
            : (0, vue_1.h)(
                'div',
                { key: 'icon', class: `${clsPrefix}-base-clear__placeholder` },
                this.$slots
              )
        }
      })
    )
  }
})