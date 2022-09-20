'use strict'
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod }
  }
Object.defineProperty(exports, '__esModule', { value: true })
const vue_1 = require('vue')
const _mixins_1 = require('../../_mixins')
const _utils_1 = require('../../_utils')
const index_cssr_1 = __importDefault(require('./styles/index.cssr'))
const styles_1 = require('../styles')
const _internal_1 = require('../../_internal')
const collapseProps = Object.assign(
  Object.assign({}, _mixins_1.useTheme.props),
  {
    show: {
      type: Boolean,
      default: true
    },
    appear: Boolean,
    // The collapsed is implemented will mistake, collapsed=true would make it show
    // However there's no possibility to change so I just let it deprecated and use
    // `show` prop instead.
    /** @deprecated */
    collapsed: {
      type: Boolean,
      default: undefined
    }
  }
)
exports.default = (0, vue_1.defineComponent)({
  name: 'CollapseTransition',
  props: collapseProps,
  inheritAttrs: false,
  setup(props) {
    if (process.env.NODE_ENV !== 'production') {
      ;(0, vue_1.watchEffect)(() => {
        if (props.collapsed !== undefined) {
          ;(0, _utils_1.warnOnce)(
            'collapse-transition',
            '`collapsed` is deprecated, please use `show` instead'
          )
        }
      })
    }
    const { mergedClsPrefixRef } = (0, _mixins_1.useConfig)(props)
    const mergedThemeRef = (0, _mixins_1.useTheme)(
      'CollapseTransition',
      'CollapseTransition',
      index_cssr_1.default,
      styles_1.collapseTransitionLight,
      props
    )
    const mergedShowRef = (0, vue_1.computed)(() => {
      if (props.collapsed !== undefined) {
        // No mistake, it's implemented with error at first, just keep it here
        return props.collapsed
      }
      return props.show
    })
    return {
      mergedShow: mergedShowRef,
      mergedClsPrefix: mergedClsPrefixRef,
      cssVars: (0, vue_1.computed)(() => {
        const {
          self: { bezier }
        } = mergedThemeRef.value
        return {
          '--bezier': bezier
        }
      })
    }
  },
  render() {
    return (0, vue_1.h)(
      _internal_1.NFadeInExpandTransition,
      { appear: this.appear },
      {
        default: () =>
          this.mergedShow
            ? (0, vue_1.h)(
                'div', // Don't use jsx since it would cause useless spread in each rendering
                (0, vue_1.mergeProps)(
                  {
                    class: `${this.mergedClsPrefix}-collapse-transition`,
                    style: this.cssVars
                  },
                  this.$attrs
                ),
                this.$slots
              )
            : null
      }
    )
  }
})