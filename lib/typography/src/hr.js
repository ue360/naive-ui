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
const hr_cssr_1 = __importDefault(require('./styles/hr.cssr'))
exports.default = (0, vue_1.defineComponent)({
  name: 'Hr',
  props: Object.assign({}, _mixins_1.useTheme.props),
  setup(props) {
    const { mergedClsPrefixRef } = (0, _mixins_1.useConfig)(props)
    const themeRef = (0, _mixins_1.useTheme)(
      'Typography',
      'Hr',
      hr_cssr_1.default,
      styles_1.typographyLight,
      props,
      mergedClsPrefixRef
    )
    return {
      mergedClsPrefix: mergedClsPrefixRef,
      cssVars: (0, vue_1.computed)(() => {
        return {
          '--color': themeRef.value.self.hrColor
        }
      })
    }
  },
  render() {
    return (0, vue_1.h)('hr', {
      class: `${this.mergedClsPrefix}-hr`,
      style: this.cssVars
    })
  }
})