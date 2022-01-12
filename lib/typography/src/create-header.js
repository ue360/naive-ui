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
const header_cssr_1 = __importDefault(require('./styles/header.cssr'))
const headerProps = Object.assign(Object.assign({}, _mixins_1.useTheme.props), {
  type: {
    type: String,
    default: 'default'
  },
  prefix: String,
  alignText: Boolean
})
// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
exports.default = (level) =>
  (0, vue_1.defineComponent)({
    name: `H${level}`,
    props: headerProps,
    setup(props) {
      const { mergedClsPrefixRef } = (0, _mixins_1.useConfig)(props)
      const themeRef = (0, _mixins_1.useTheme)(
        'Typography',
        'H',
        header_cssr_1.default,
        styles_1.typographyLight,
        props,
        mergedClsPrefixRef
      )
      return {
        mergedClsPrefix: mergedClsPrefixRef,
        cssVars: (0, vue_1.computed)(() => {
          const { type } = props
          const {
            common: { cubicBezierEaseInOut },
            self: {
              headerFontWeight,
              headerTextColor,
              [(0, _utils_1.createKey)('headerPrefixWidth', level)]:
                prefixWidth,
              [(0, _utils_1.createKey)('headerFontSize', level)]: fontSize,
              [(0, _utils_1.createKey)('headerMargin', level)]: margin,
              [(0, _utils_1.createKey)('headerBarWidth', level)]: barWidth,
              [(0, _utils_1.createKey)('headerBarColor', type)]: barColor
            }
          } = themeRef.value
          return {
            '--bezier': cubicBezierEaseInOut,
            '--font-size': fontSize,
            '--margin': margin,
            '--bar-color': barColor,
            '--bar-width': barWidth,
            '--font-weight': headerFontWeight,
            '--text-color': headerTextColor,
            '--prefix-width': prefixWidth
          }
        })
      }
    },
    render() {
      const { prefix, alignText, mergedClsPrefix, cssVars, $slots } = this
      return (0, vue_1.h)(
        `h${level}`,
        {
          class: [
            `${mergedClsPrefix}-h`,
            `${mergedClsPrefix}-h${level}`,
            {
              [`${mergedClsPrefix}-h--prefix-bar`]: prefix,
              [`${mergedClsPrefix}-h--align-text`]: alignText
            }
          ],
          style: cssVars
        },
        $slots
      )
    }
  })
