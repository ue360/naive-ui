'use strict'
Object.defineProperty(exports, '__esModule', { value: true })
const vue_1 = require('vue')
const lodash_1 = require('lodash')
const _mixins_1 = require('../../_mixins')
const styles_1 = require('../styles')
const elementProps = Object.assign(
  Object.assign({}, _mixins_1.useTheme.props),
  {
    tag: {
      type: String,
      default: 'div'
    }
  }
)
exports.default = (0, vue_1.defineComponent)({
  name: 'Element',
  alias: ['El'],
  props: elementProps,
  setup(props) {
    const { mergedClsPrefixRef } = (0, _mixins_1.useConfig)(props)
    const themeRef = (0, _mixins_1.useTheme)(
      'Element',
      'Element',
      undefined,
      styles_1.elementLight,
      props,
      mergedClsPrefixRef
    )
    return {
      mergedClsPrefix: mergedClsPrefixRef,
      cssVars: (0, vue_1.computed)(() => {
        const { common } = themeRef.value
        return Object.keys(common).reduce((prevValue, key) => {
          prevValue[`--${(0, lodash_1.kebabCase)(key)}`] = common[key]
          return prevValue
        }, {})
      })
    }
  },
  render() {
    var _a
    const { tag, mergedClsPrefix, cssVars, $slots } = this
    return (0, vue_1.h)(
      tag,
      {
        role: 'none',
        class: `${mergedClsPrefix}-element`,
        style: cssVars
      },
      (_a = $slots.default) === null || _a === void 0 ? void 0 : _a.call($slots)
    )
  }
})