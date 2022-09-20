'use strict'
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod }
  }
Object.defineProperty(exports, '__esModule', { value: true })
const vue_1 = require('vue')
const _mixins_1 = require('../../../_mixins')
const icon_switch_transition_1 = __importDefault(
  require('../../icon-switch-transition')
)
const index_cssr_1 = __importDefault(require('./styles/index.cssr'))
const duration = '1.6s'
// The loading svg dom comes from https://codepen.io/FezVrasta/pen/oXrgdR
exports.default = (0, vue_1.defineComponent)({
  name: 'BaseLoading',
  props: {
    clsPrefix: {
      type: String,
      required: true
    },
    scale: {
      type: Number,
      default: 1
    },
    radius: {
      type: Number,
      default: 100
    },
    strokeWidth: {
      type: Number,
      default: 28
    },
    stroke: {
      type: String,
      default: undefined
    },
    show: {
      type: Boolean,
      default: true
    }
  },
  setup(props) {
    ;(0, _mixins_1.useStyle)(
      'BaseLoading',
      index_cssr_1.default,
      (0, vue_1.toRef)(props, 'clsPrefix')
    )
  },
  render() {
    const { clsPrefix, radius, strokeWidth, stroke, scale } = this
    const scaledRadius = radius / scale
    return (0, vue_1.h)(
      'div',
      {
        class: `${clsPrefix}-base-loading`,
        role: 'img',
        'aria-label': 'loading'
      },
      (0, vue_1.h)(icon_switch_transition_1.default, null, {
        default: () =>
          this.show
            ? (0, vue_1.h)(
                'svg',
                {
                  class: `${clsPrefix}-base-loading__icon`,
                  viewBox: `0 0 ${2 * scaledRadius} ${2 * scaledRadius}`,
                  xmlns: 'http://www.w3.org/2000/svg',
                  style: { color: stroke }
                },
                (0, vue_1.h)(
                  'g',
                  null,
                  (0, vue_1.h)('animateTransform', {
                    attributeName: 'transform',
                    type: 'rotate',
                    values: `0 ${scaledRadius} ${scaledRadius};270 ${scaledRadius} ${scaledRadius}`,
                    begin: '0s',
                    dur: duration,
                    fill: 'freeze',
                    repeatCount: 'indefinite'
                  }),
                  (0, vue_1.h)(
                    'circle',
                    {
                      fill: 'none',
                      stroke: 'currentColor',
                      'stroke-width': strokeWidth,
                      'stroke-linecap': 'round',
                      cx: scaledRadius,
                      cy: scaledRadius,
                      r: radius - strokeWidth / 2,
                      'stroke-dasharray': 5.67 * radius,
                      'stroke-dashoffset': 18.48 * radius
                    },
                    (0, vue_1.h)('animateTransform', {
                      attributeName: 'transform',
                      type: 'rotate',
                      values: `0 ${scaledRadius} ${scaledRadius};135 ${scaledRadius} ${scaledRadius};450 ${scaledRadius} ${scaledRadius}`,
                      begin: '0s',
                      dur: duration,
                      fill: 'freeze',
                      repeatCount: 'indefinite'
                    }),
                    (0, vue_1.h)('animate', {
                      attributeName: 'stroke-dashoffset',
                      values: `${5.67 * radius};${1.42 * radius};${
                        5.67 * radius
                      }`,
                      begin: '0s',
                      dur: duration,
                      fill: 'freeze',
                      repeatCount: 'indefinite'
                    })
                  )
                )
              )
            : (0, vue_1.h)(
                'div',
                {
                  key: 'placeholder',
                  class: `${clsPrefix}-base-loading__placeholder`
                },
                this.$slots
              )
      })
    )
  }
})