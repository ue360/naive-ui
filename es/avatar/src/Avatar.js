import { h, ref, computed, defineComponent, inject, watch } from 'vue'
import { VResizeObserver } from 'vueuc'
import { tagInjectionKey } from '../../tag/src/Tag'
import { useConfig, useTheme } from '../../_mixins'
import { avatarLight } from '../styles'
import { createKey } from '../../_utils'
import style from './styles/index.cssr'
const avatarProps = Object.assign(Object.assign({}, useTheme.props), {
  size: {
    type: [String, Number],
    default: 'medium'
  },
  src: String,
  circle: Boolean,
  color: String,
  objectFit: {
    type: String,
    default: 'fill'
  },
  round: Boolean,
  onError: Function,
  fallbackSrc: String
})
export default defineComponent({
  name: 'Avatar',
  props: avatarProps,
  setup(props) {
    const { mergedClsPrefixRef } = useConfig(props)
    const hasLoadErrorRef = ref(false)
    let memoedTextHtml = null
    const textRef = ref(null)
    const selfRef = ref(null)
    const fitTextTransform = () => {
      const { value: textEl } = textRef
      if (textEl) {
        if (memoedTextHtml === null || memoedTextHtml !== textEl.innerHTML) {
          memoedTextHtml = textEl.innerHTML
          const { value: selfEl } = selfRef
          if (selfEl) {
            const { offsetWidth: elWidth, offsetHeight: elHeight } = selfEl
            const { offsetWidth: textWidth, offsetHeight: textHeight } = textEl
            const radix = 0.9
            const ratio = Math.min(
              (elWidth / textWidth) * radix,
              (elHeight / textHeight) * radix,
              1
            )
            textEl.style.transform = `translateX(-50%) translateY(-50%) scale(${ratio})`
          }
        }
      }
    }
    const themeRef = useTheme(
      'Avatar',
      'Avatar',
      style,
      avatarLight,
      props,
      mergedClsPrefixRef
    )
    const TagInjection = inject(tagInjectionKey, null)
    const mergedRoundRef = computed(() => {
      if (props.round || props.circle) return true
      if (TagInjection) {
        return TagInjection.roundRef.value
      }
      return false
    })
    const handleError = (e) => {
      hasLoadErrorRef.value = true
      const { onError } = props
      if (onError) {
        onError(e)
      }
    }
    watch(
      () => props.src,
      () => (hasLoadErrorRef.value = false)
    )
    return {
      textRef,
      selfRef,
      mergedRoundRef,
      mergedClsPrefix: mergedClsPrefixRef,
      fitTextTransform,
      cssVars: computed(() => {
        const { size } = props
        const {
          self: { borderRadius, fontSize, color },
          common: { cubicBezierEaseInOut }
        } = themeRef.value
        let height
        if (typeof size === 'number') {
          height = `${size}px`
        } else {
          height = themeRef.value.self[createKey('height', size)]
        }
        return {
          '--font-size': fontSize,
          '--border-radius': mergedRoundRef.value ? '50%' : borderRadius,
          '--color': color,
          '--bezier': cubicBezierEaseInOut,
          '--merged-size': `var(--avatar-size-override, ${height})`
        }
      }),
      hasLoadError: hasLoadErrorRef,
      handleError
    }
  },
  render() {
    const { $slots, src, mergedClsPrefix } = this
    let img
    if (this.hasLoadError) {
      img = h('img', {
        src: this.fallbackSrc,
        style: { objectFit: this.objectFit }
      })
    } else if (!(!$slots.default && src)) {
      img = h(
        VResizeObserver,
        { onResize: this.fitTextTransform },
        {
          default: () =>
            h(
              'span',
              {
                ref: 'textRef',
                class: `${mergedClsPrefix}-avatar__text`,
                style: { background: this.color }
              },
              $slots
            )
        }
      )
    } else {
      img = h('img', {
        src: src,
        onError: this.handleError,
        style: { objectFit: this.objectFit }
      })
    }
    return h(
      'span',
      {
        ref: 'selfRef',
        class: `${mergedClsPrefix}-avatar`,
        style: this.cssVars
      },
      img
    )
  }
})
