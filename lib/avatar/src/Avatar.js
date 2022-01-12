'use strict'
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod }
  }
Object.defineProperty(exports, '__esModule', { value: true })
const vue_1 = require('vue')
const vueuc_1 = require('vueuc')
const Tag_1 = require('../../tag/src/Tag')
const _mixins_1 = require('../../_mixins')
const styles_1 = require('../styles')
const _utils_1 = require('../../_utils')
const index_cssr_1 = __importDefault(require('./styles/index.cssr'))
const avatarProps = Object.assign(Object.assign({}, _mixins_1.useTheme.props), {
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
exports.default = (0, vue_1.defineComponent)({
  name: 'Avatar',
  props: avatarProps,
  setup(props) {
    const { mergedClsPrefixRef } = (0, _mixins_1.useConfig)(props)
    const hasLoadErrorRef = (0, vue_1.ref)(false)
    let memoedTextHtml = null
    const textRef = (0, vue_1.ref)(null)
    const selfRef = (0, vue_1.ref)(null)
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
    const themeRef = (0, _mixins_1.useTheme)(
      'Avatar',
      'Avatar',
      index_cssr_1.default,
      styles_1.avatarLight,
      props,
      mergedClsPrefixRef
    )
    const TagInjection = (0, vue_1.inject)(Tag_1.tagInjectionKey, null)
    const mergedRoundRef = (0, vue_1.computed)(() => {
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
    ;(0, vue_1.watch)(
      () => props.src,
      () => (hasLoadErrorRef.value = false)
    )
    return {
      textRef,
      selfRef,
      mergedRoundRef,
      mergedClsPrefix: mergedClsPrefixRef,
      fitTextTransform,
      cssVars: (0, vue_1.computed)(() => {
        const { size } = props
        const {
          self: { borderRadius, fontSize, color },
          common: { cubicBezierEaseInOut }
        } = themeRef.value
        let height
        if (typeof size === 'number') {
          height = `${size}px`
        } else {
          height = themeRef.value.self[(0, _utils_1.createKey)('height', size)]
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
      img = (0, vue_1.h)('img', {
        src: this.fallbackSrc,
        style: { objectFit: this.objectFit }
      })
    } else if (!(!$slots.default && src)) {
      img = (0, vue_1.h)(
        vueuc_1.VResizeObserver,
        { onResize: this.fitTextTransform },
        {
          default: () =>
            (0, vue_1.h)(
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
      img = (0, vue_1.h)('img', {
        src: src,
        onError: this.handleError,
        style: { objectFit: this.objectFit }
      })
    }
    return (0, vue_1.h)(
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
