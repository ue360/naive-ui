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
const styles_1 = require('../styles')
const index_cssr_1 = __importDefault(require('./styles/index.cssr'))
exports.default = (0, vue_1.defineComponent)({
  _n_icon__: true,
  name: 'Icon',
  inheritAttrs: false,
  props: Object.assign(Object.assign({}, _mixins_1.useTheme.props), {
    depth: [String, Number],
    size: [Number, String],
    color: String
  }),
  setup(props) {
    const { mergedClsPrefixRef } = (0, _mixins_1.useConfig)(props)
    const themeRef = (0, _mixins_1.useTheme)(
      'Icon',
      'Icon',
      index_cssr_1.default,
      styles_1.iconLight,
      props,
      mergedClsPrefixRef
    )
    return {
      mergedClsPrefix: mergedClsPrefixRef,
      mergedStyle: (0, vue_1.computed)(() => {
        const { size, color } = props
        return {
          fontSize: (0, _utils_1.formatLength)(size),
          color
        }
      }),
      cssVars: (0, vue_1.computed)(() => {
        const { depth } = props
        const {
          common: { cubicBezierEaseInOut },
          self
        } = themeRef.value
        if (depth !== undefined) {
          const { color, [`opacity${depth}Depth`]: opacity } = self
          return {
            '--bezier': cubicBezierEaseInOut,
            '--color': color,
            '--opacity': opacity
          }
        }
        return {
          '--bezier': cubicBezierEaseInOut
        }
      })
    }
  },
  render() {
    var _a
    const { $parent, depth, mergedClsPrefix } = this
    if (
      (_a =
        $parent === null || $parent === void 0 ? void 0 : $parent.$options) ===
        null || _a === void 0
        ? void 0
        : _a._n_icon__
    ) {
      ;(0, _utils_1.warn)('icon', "don't wrap `n-icon` inside `n-icon`")
    }
    return (0, vue_1.h)(
      'i',
      (0, vue_1.mergeProps)(this.$attrs, {
        role: 'img',
        class: [
          `${mergedClsPrefix}-icon`,
          {
            [`${mergedClsPrefix}-icon--depth`]: depth,
            [`${mergedClsPrefix}-icon--color-transition`]: depth !== undefined
          }
        ],
        style: Object.assign(this.cssVars, this.mergedStyle)
      }),
      this.$slots
    )
  }
})
