'use strict'
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod }
  }
Object.defineProperty(exports, '__esModule', { value: true })
const vue_1 = require('vue')
const _mixins_1 = require('../../_mixins')
const styles_1 = require('../styles')
const index_cssr_1 = __importDefault(require('./styles/index.cssr'))
const dividerProps = Object.assign(
  Object.assign({}, _mixins_1.useTheme.props),
  {
    titlePlacement: {
      type: String,
      default: 'center'
    },
    dashed: Boolean,
    vertical: Boolean
  }
)
exports.default = (0, vue_1.defineComponent)({
  name: 'Divider',
  props: dividerProps,
  setup(props) {
    const { mergedClsPrefixRef } = (0, _mixins_1.useConfig)(props)
    const themeRef = (0, _mixins_1.useTheme)(
      'Divider',
      'Divider',
      index_cssr_1.default,
      styles_1.dividerLight,
      props,
      mergedClsPrefixRef
    )
    return {
      mergedClsPrefix: mergedClsPrefixRef,
      cssVars: (0, vue_1.computed)(() => {
        const {
          common: { cubicBezierEaseInOut },
          self: { color, textColor, fontWeight }
        } = themeRef.value
        return {
          '--bezier': cubicBezierEaseInOut,
          '--color': color,
          '--text-color': textColor,
          '--font-weight': fontWeight
        }
      })
    }
  },
  render() {
    const {
      $slots,
      titlePlacement,
      vertical,
      dashed,
      cssVars,
      mergedClsPrefix
    } = this
    return (0, vue_1.h)(
      'div',
      {
        role: 'separator',
        class: [
          `${mergedClsPrefix}-divider`,
          {
            [`${mergedClsPrefix}-divider--vertical`]: vertical,
            [`${mergedClsPrefix}-divider--no-title`]: !$slots.default,
            [`${mergedClsPrefix}-divider--dashed`]: dashed,
            [`${mergedClsPrefix}-divider--title-position-${titlePlacement}`]:
              $slots.default && titlePlacement
          }
        ],
        style: cssVars
      },
      !vertical
        ? (0, vue_1.h)('div', {
            class: `${mergedClsPrefix}-divider__line ${mergedClsPrefix}-divider__line--left`
          })
        : null,
      !vertical && $slots.default
        ? (0, vue_1.h)(
            vue_1.Fragment,
            null,
            (0, vue_1.h)(
              'div',
              { class: `${mergedClsPrefix}-divider__title` },
              this.$slots
            ),
            (0, vue_1.h)('div', {
              class: `${mergedClsPrefix}-divider__line ${mergedClsPrefix}-divider__line--right`
            })
          )
        : null
    )
  }
})