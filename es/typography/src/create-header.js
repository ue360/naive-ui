import { h, defineComponent, computed } from 'vue'
import { useConfig, useTheme } from '../../_mixins'
import { createKey } from '../../_utils'
import { typographyLight } from '../styles'
import style from './styles/header.cssr'
const headerProps = Object.assign(Object.assign({}, useTheme.props), {
  type: {
    type: String,
    default: 'default'
  },
  prefix: String,
  alignText: Boolean
})
// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
export default (level) =>
  defineComponent({
    name: `H${level}`,
    props: headerProps,
    setup(props) {
      const { mergedClsPrefixRef } = useConfig(props)
      const themeRef = useTheme(
        'Typography',
        'H',
        style,
        typographyLight,
        props,
        mergedClsPrefixRef
      )
      return {
        mergedClsPrefix: mergedClsPrefixRef,
        cssVars: computed(() => {
          const { type } = props
          const {
            common: { cubicBezierEaseInOut },
            self: {
              headerFontWeight,
              headerTextColor,
              [createKey('headerPrefixWidth', level)]: prefixWidth,
              [createKey('headerFontSize', level)]: fontSize,
              [createKey('headerMargin', level)]: margin,
              [createKey('headerBarWidth', level)]: barWidth,
              [createKey('headerBarColor', type)]: barColor
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
      return h(
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
