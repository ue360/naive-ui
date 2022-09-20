import { defineComponent, computed, h } from 'vue'
import { useConfig, useTheme } from '../../_mixins'
import { createKey, formatLength, useHoudini } from '../../_utils'
import { gradientTextLight } from '../styles'
import style from './styles/index.cssr'
const gradientTextProps = Object.assign(Object.assign({}, useTheme.props), {
  size: [String, Number],
  fontSize: [String, Number],
  type: {
    type: String,
    default: 'primary'
  },
  color: [Object, String],
  gradient: [Object, String]
})
export default defineComponent({
  name: 'GradientText',
  props: gradientTextProps,
  setup(props) {
    useHoudini()
    const { mergedClsPrefixRef } = useConfig(props)
    const compatibleTypeRef = computed(() => {
      const { type } = props
      if (type === 'danger') return 'error'
      return type
    })
    const styleFontSizeRef = computed(() => {
      let fontSize = props.size || props.fontSize
      if (fontSize) fontSize = formatLength(fontSize)
      return fontSize || undefined
    })
    const styleBgImageRef = computed(() => {
      const gradient = props.color || props.gradient
      if (typeof gradient === 'string') {
        return gradient
      } else if (gradient) {
        const deg = gradient.deg || 0
        const from = gradient.from
        const to = gradient.to
        return `linear-gradient(${deg}deg, ${from} 0%, ${to} 100%)`
      }
      return undefined
    })
    const themeRef = useTheme(
      'GradientText',
      'GradientText',
      style,
      gradientTextLight,
      props,
      mergedClsPrefixRef
    )
    return {
      mergedClsPrefix: mergedClsPrefixRef,
      compatibleType: compatibleTypeRef,
      styleFontSize: styleFontSizeRef,
      styleBgImage: styleBgImageRef,
      cssVars: computed(() => {
        const { value: type } = compatibleTypeRef
        const {
          common: { cubicBezierEaseInOut },
          self: {
            rotate,
            [createKey('colorStart', type)]: colorStart,
            [createKey('colorEnd', type)]: colorEnd,
            fontWeight
          }
        } = themeRef.value
        return {
          '--bezier': cubicBezierEaseInOut,
          '--rotate': rotate,
          '--color-start': colorStart,
          '--color-end': colorEnd,
          '--font-weight': fontWeight
        }
      })
    }
  },
  render() {
    const { mergedClsPrefix } = this
    return h(
      'span',
      {
        class: [
          `${mergedClsPrefix}-gradient-text`,
          `${mergedClsPrefix}-gradient-text--${this.compatibleType}-type`
        ],
        style: [
          {
            fontSize: this.styleFontSize,
            backgroundImage: this.styleBgImage
          },
          this.cssVars
        ]
      },
      this.$slots
    )
  }
})