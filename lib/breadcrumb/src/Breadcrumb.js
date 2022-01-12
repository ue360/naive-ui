'use strict'
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod }
  }
Object.defineProperty(exports, '__esModule', { value: true })
exports.breadcrumbInjectionKey = void 0
const vue_1 = require('vue')
const _mixins_1 = require('../../_mixins')
const styles_1 = require('../styles')
const index_cssr_1 = __importDefault(require('./styles/index.cssr'))
exports.breadcrumbInjectionKey = Symbol('breadcrumb')
const breadcrumbProps = Object.assign(
  Object.assign({}, _mixins_1.useTheme.props),
  {
    separator: {
      type: String,
      default: '/'
    }
  }
)
exports.default = (0, vue_1.defineComponent)({
  name: 'Breadcrumb',
  props: breadcrumbProps,
  setup(props) {
    const { mergedClsPrefixRef } = (0, _mixins_1.useConfig)(props)
    const themeRef = (0, _mixins_1.useTheme)(
      'Breadcrumb',
      'Breadcrumb',
      index_cssr_1.default,
      styles_1.breadcrumbLight,
      props,
      mergedClsPrefixRef
    )
    ;(0, vue_1.provide)(exports.breadcrumbInjectionKey, {
      separatorRef: (0, vue_1.toRef)(props, 'separator'),
      mergedClsPrefixRef
    })
    return {
      mergedClsPrefix: mergedClsPrefixRef,
      cssVars: (0, vue_1.computed)(() => {
        const {
          common: { cubicBezierEaseInOut },
          self: {
            separatorColor,
            itemTextColor,
            itemTextColorHover,
            itemTextColorPressed,
            itemTextColorActive,
            fontSize,
            fontWeightActive
          }
        } = themeRef.value
        return {
          '--font-size': fontSize,
          '--bezier': cubicBezierEaseInOut,
          '--item-text-color': itemTextColor,
          '--item-text-color-hover': itemTextColorHover,
          '--item-text-color-pressed': itemTextColorPressed,
          '--item-text-color-active': itemTextColorActive,
          '--separator-color': separatorColor,
          '--font-weight-active': fontWeightActive
        }
      })
    }
  },
  render() {
    return (0, vue_1.h)(
      'nav',
      {
        class: `${this.mergedClsPrefix}-breadcrumb`,
        style: this.cssVars,
        'aria-label': 'Breadcrumb'
      },
      (0, vue_1.h)('ul', null, this.$slots)
    )
  }
})
