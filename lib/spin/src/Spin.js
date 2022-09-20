'use strict'
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod }
  }
Object.defineProperty(exports, '__esModule', { value: true })
const vue_1 = require('vue')
const vooks_1 = require('vooks')
const seemly_1 = require('seemly')
const _internal_1 = require('../../_internal')
const _mixins_1 = require('../../_mixins')
const _utils_1 = require('../../_utils')
const styles_1 = require('../styles')
const index_cssr_1 = __importDefault(require('./styles/index.cssr'))
const STROKE_WIDTH = {
  small: 20,
  medium: 18,
  large: 16
}
const spinProps = Object.assign(Object.assign({}, _mixins_1.useTheme.props), {
  description: String,
  stroke: String,
  size: {
    type: [String, Number],
    default: 'medium'
  },
  show: {
    type: Boolean,
    default: true
  },
  strokeWidth: Number,
  rotate: {
    type: Boolean,
    default: true
  },
  spinning: {
    type: Boolean,
    validator: () => {
      return true
    },
    default: undefined
  }
})
exports.default = (0, vue_1.defineComponent)({
  name: 'Spin',
  props: spinProps,
  setup(props) {
    if (process.env.NODE_ENV !== 'production') {
      ;(0, vue_1.watchEffect)(() => {
        if (props.spinning !== undefined) {
          ;(0, _utils_1.warnOnce)(
            'spin',
            '`spinning` is deprecated, please use `show` instead.'
          )
        }
      })
    }
    const { mergedClsPrefixRef } = (0, _mixins_1.useConfig)(props)
    const themeRef = (0, _mixins_1.useTheme)(
      'Spin',
      'Spin',
      index_cssr_1.default,
      styles_1.spinLight,
      props,
      mergedClsPrefixRef
    )
    return {
      mergedClsPrefix: mergedClsPrefixRef,
      compitableShow: (0, vooks_1.useCompitable)(props, ['spinning', 'show']),
      mergedStrokeWidth: (0, vue_1.computed)(() => {
        const { strokeWidth } = props
        if (strokeWidth !== undefined) return strokeWidth
        const { size } = props
        return STROKE_WIDTH[typeof size === 'number' ? 'medium' : size]
      }),
      cssVars: (0, vue_1.computed)(() => {
        const { size: spinSize } = props
        const {
          common: { cubicBezierEaseInOut },
          self
        } = themeRef.value
        const { opacitySpinning, color, textColor } = self
        const size =
          typeof spinSize === 'number'
            ? (0, seemly_1.pxfy)(spinSize)
            : self[(0, _utils_1.createKey)('size', spinSize)]
        return {
          '--bezier': cubicBezierEaseInOut,
          '--opacity-spinning': opacitySpinning,
          '--size': size,
          '--color': color,
          '--text-color': textColor
        }
      })
    }
  },
  render() {
    var _a
    const { $slots, mergedClsPrefix, description } = this
    const rotate = $slots.icon && this.rotate
    const descriptionNode =
      (description || $slots.description) &&
      (0, vue_1.h)(
        'div',
        { class: `${mergedClsPrefix}-spin-description` },
        description ||
          ((_a = $slots.description) === null || _a === void 0
            ? void 0
            : _a.call($slots))
      )
    const icon = $slots.icon
      ? (0, vue_1.h)(
          'div',
          { class: `${mergedClsPrefix}-spin-body` },
          (0, vue_1.h)(
            'div',
            {
              class: [
                `${mergedClsPrefix}-spin`,
                rotate && `${mergedClsPrefix}-spin--rotate`
              ],
              style: $slots.default ? '' : this.cssVars
            },
            $slots.icon()
          ),
          descriptionNode
        )
      : (0, vue_1.h)(
          'div',
          { class: `${mergedClsPrefix}-spin-body` },
          (0, vue_1.h)(_internal_1.NBaseLoading, {
            clsPrefix: mergedClsPrefix,
            style: $slots.default ? '' : this.cssVars,
            stroke: this.stroke,
            'stroke-width': this.mergedStrokeWidth,
            class: `${mergedClsPrefix}-spin`
          }),
          descriptionNode
        )
    return $slots.default
      ? (0, vue_1.h)(
          'div',
          { class: `${mergedClsPrefix}-spin-container`, style: this.cssVars },
          (0, vue_1.h)(
            'div',
            {
              class: [
                `${mergedClsPrefix}-spin-content`,
                this.compitableShow &&
                  `${mergedClsPrefix}-spin-content--spinning`
              ]
            },
            $slots
          ),
          (0, vue_1.h)(
            vue_1.Transition,
            { name: 'fade-in-transition' },
            {
              default: () => (this.compitableShow ? icon : null)
            }
          )
        )
      : icon
  }
})