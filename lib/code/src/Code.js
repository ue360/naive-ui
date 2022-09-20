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
const codeProps = Object.assign(Object.assign({}, _mixins_1.useTheme.props), {
  language: String,
  code: {
    type: String,
    default: ''
  },
  trim: {
    type: Boolean,
    default: true
  },
  hljs: Object,
  uri: Boolean,
  inline: Boolean,
  // In n-log, we only need to mount code's style for highlight
  internalFontSize: Number,
  internalNoHighlight: Boolean
})
exports.default = (0, vue_1.defineComponent)({
  name: 'Code',
  props: codeProps,
  setup(props, { slots }) {
    const { internalNoHighlight } = props
    const { mergedClsPrefixRef } = (0, _mixins_1.useConfig)()
    const codeRef = (0, vue_1.ref)(null)
    const hljsRef = internalNoHighlight
      ? { value: undefined }
      : (0, _mixins_1.useHljs)(props)
    const createCodeHtml = (language, code, trim) => {
      const { value: hljs } = hljsRef
      if (!hljs) {
        return null
      }
      if (!(language && hljs.getLanguage(language))) {
        return null
      }
      return hljs.highlight(trim ? code.trim() : code, {
        language
      }).value
    }
    const setCode = () => {
      if (slots.default) return
      const { value: codeEl } = codeRef
      if (!codeEl) return
      const { language } = props
      const code = props.uri
        ? window.decodeURIComponent(props.code)
        : props.code
      if (language) {
        const html = createCodeHtml(language, code, props.trim)
        if (html !== null) {
          codeEl.innerHTML = props.inline ? html : `<pre>${html}</pre>`
          return
        }
      }
      if (props.inline) {
        codeEl.textContent = code
        return
      }
      const warp = document.createElement('pre')
      warp.textContent = code
      codeEl.appendChild(warp)
    }
    ;(0, vue_1.onMounted)(setCode)
    ;(0, vue_1.watch)((0, vue_1.toRef)(props, 'language'), setCode)
    ;(0, vue_1.watch)((0, vue_1.toRef)(props, 'code'), setCode)
    if (!internalNoHighlight) (0, vue_1.watch)(hljsRef, setCode)
    const themeRef = (0, _mixins_1.useTheme)(
      'Code',
      'Code',
      index_cssr_1.default,
      styles_1.codeLight,
      props,
      mergedClsPrefixRef
    )
    return {
      mergedClsPrefix: mergedClsPrefixRef,
      codeRef,
      cssVars: (0, vue_1.computed)(() => {
        const {
          common: { cubicBezierEaseInOut, fontFamilyMono },
          self: {
            textColor,
            fontSize,
            fontWeightStrong,
            // extracted from hljs atom-one-light.scss
            'mono-3': $1,
            'hue-1': $2,
            'hue-2': $3,
            'hue-3': $4,
            'hue-4': $5,
            'hue-5': $6,
            'hue-5-2': $7,
            'hue-6': $8,
            'hue-6-2': $9
          }
        } = themeRef.value
        const { internalFontSize } = props
        return {
          '--font-size': internalFontSize ? `${internalFontSize}px` : fontSize,
          '--font-family': fontFamilyMono,
          '--font-weight-strong': fontWeightStrong,
          '--bezier': cubicBezierEaseInOut,
          '--text-color': textColor,
          '--mono-3': $1,
          '--hue-1': $2,
          '--hue-2': $3,
          '--hue-3': $4,
          '--hue-4': $5,
          '--hue-5': $6,
          '--hue-5-2': $7,
          '--hue-6': $8,
          '--hue-6-2': $9
        }
      })
    }
  },
  render() {
    const { mergedClsPrefix } = this
    return (0, vue_1.h)(
      'code',
      { class: `${mergedClsPrefix}-code`, style: this.cssVars, ref: 'codeRef' },
      this.$slots
    )
  }
})