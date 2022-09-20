'use strict'
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod }
  }
Object.defineProperty(exports, '__esModule', { value: true })
const vue_1 = require('vue')
const _mixins_1 = require('../../_mixins')
const _internal_1 = require('../../_internal')
const _utils_1 = require('../../_utils')
const styles_1 = require('../styles')
const index_cssr_1 = __importDefault(require('./styles/index.cssr'))
const badgeProps = Object.assign(Object.assign({}, _mixins_1.useTheme.props), {
  value: [String, Number],
  max: Number,
  dot: {
    type: Boolean,
    default: false
  },
  type: {
    type: String,
    default: 'default'
  },
  show: {
    type: Boolean,
    default: true
  },
  showZero: {
    type: Boolean,
    default: false
  },
  processing: {
    type: Boolean,
    default: false
  },
  color: String
})
exports.default = (0, vue_1.defineComponent)({
  name: 'Badge',
  props: badgeProps,
  setup(props) {
    const { mergedClsPrefixRef } = (0, _mixins_1.useConfig)(props)
    const themeRef = (0, _mixins_1.useTheme)(
      'Badge',
      'Badge',
      index_cssr_1.default,
      styles_1.badgeLight,
      props,
      mergedClsPrefixRef
    )
    const appearedRef = (0, vue_1.ref)(false)
    const handleAfterEnter = () => {
      appearedRef.value = true
    }
    const handleAfterLeave = () => {
      appearedRef.value = false
    }
    const showBadgeRef = (0, vue_1.computed)(() => {
      return (
        props.show &&
        (props.dot ||
          (props.value !== undefined && !(!props.showZero && props.value <= 0)))
      )
    })
    ;(0, vue_1.onMounted)(() => {
      if (showBadgeRef.value) appearedRef.value = true
    })
    return {
      mergedClsPrefix: mergedClsPrefixRef,
      appeared: (0, vue_1.ref)(false),
      showBadge: showBadgeRef,
      handleAfterEnter,
      handleAfterLeave,
      cssVars: (0, vue_1.computed)(() => {
        const { type, color: propColor } = props
        const {
          common: { cubicBezierEaseInOut, cubicBezierEaseOut },
          self: {
            [(0, _utils_1.createKey)('color', type)]: color,
            fontFamily,
            fontSize
          }
        } = themeRef.value
        return {
          '--font-size': fontSize,
          '--font-family': fontFamily,
          '--color': propColor || color,
          '--ripple-color': propColor || color,
          '--bezier': cubicBezierEaseInOut,
          '--ripple-bezier': cubicBezierEaseOut
        }
      })
    }
  },
  render() {
    const { mergedClsPrefix } = this
    return (0, vue_1.h)(
      'div',
      {
        class: [
          `${mergedClsPrefix}-badge`,
          {
            [`${mergedClsPrefix}-badge--dot`]: this.dot,
            [`${mergedClsPrefix}-badge--as-is`]: !this.$slots.default
          }
        ],
        style: this.cssVars
      },
      (0, vue_1.renderSlot)(this.$slots, 'default'),
      (0, vue_1.h)(
        vue_1.Transition,
        {
          name: 'fade-in-scale-up-transition',
          onAfterEnter: this.handleAfterEnter,
          onAfterLeave: this.handleAfterLeave
        },
        {
          default: () =>
            this.showBadge
              ? (0, vue_1.h)(
                  'sup',
                  {
                    class: `${mergedClsPrefix}-badge-sup`,
                    title: (0, _utils_1.getTitleAttribute)(this.value)
                  },
                  !this.dot
                    ? (0, vue_1.h)(_internal_1.NBaseSlotMachine, {
                        clsPrefix: mergedClsPrefix,
                        appeared: this.appeared,
                        max: this.max,
                        value: this.value
                      })
                    : null,
                  this.processing
                    ? (0, vue_1.h)(_internal_1.NBaseWave, {
                        clsPrefix: mergedClsPrefix
                      })
                    : null
                )
              : null
        }
      )
    )
  }
})