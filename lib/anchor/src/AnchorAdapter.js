'use strict'
var __createBinding =
  (this && this.__createBinding) ||
  (Object.create
    ? function (o, m, k, k2) {
        if (k2 === undefined) k2 = k
        Object.defineProperty(o, k2, {
          enumerable: true,
          get: function () {
            return m[k]
          }
        })
      }
    : function (o, m, k, k2) {
        if (k2 === undefined) k2 = k
        o[k2] = m[k]
      })
var __setModuleDefault =
  (this && this.__setModuleDefault) ||
  (Object.create
    ? function (o, v) {
        Object.defineProperty(o, 'default', { enumerable: true, value: v })
      }
    : function (o, v) {
        o['default'] = v
      })
var __importStar =
  (this && this.__importStar) ||
  function (mod) {
    if (mod && mod.__esModule) return mod
    var result = {}
    if (mod != null)
      for (var k in mod)
        if (k !== 'default' && Object.prototype.hasOwnProperty.call(mod, k))
          __createBinding(result, mod, k)
    __setModuleDefault(result, mod)
    return result
  }
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod }
  }
Object.defineProperty(exports, '__esModule', { value: true })
const vue_1 = require('vue')
const affix_1 = require('../../affix')
const Affix_1 = require('../../affix/src/Affix')
const _mixins_1 = require('../../_mixins')
const _utils_1 = require('../../_utils')
const styles_1 = require('../styles')
const index_cssr_1 = __importDefault(require('./styles/index.cssr'))
const BaseAnchor_1 = __importStar(require('./BaseAnchor'))
const anchorProps = Object.assign(
  Object.assign(
    Object.assign(Object.assign({}, _mixins_1.useTheme.props), {
      affix: Boolean
    }),
    Affix_1.affixProps
  ),
  BaseAnchor_1.baseAnchorProps
)
exports.default = (0, vue_1.defineComponent)({
  name: 'Anchor',
  props: anchorProps,
  setup(props, { slots }) {
    const { mergedClsPrefixRef } = (0, _mixins_1.useConfig)(props)
    const themeRef = (0, _mixins_1.useTheme)(
      'Anchor',
      'Anchor',
      index_cssr_1.default,
      styles_1.anchorLight,
      props,
      mergedClsPrefixRef
    )
    const anchorRef = (0, vue_1.ref)(null)
    const cssVarsRef = (0, vue_1.computed)(() => {
      const {
        self: {
          railColor,
          linkColor,
          railColorActive,
          linkTextColor,
          linkTextColorHover,
          linkTextColorPressed,
          linkTextColorActive,
          linkFontSize,
          railWidth,
          linkPadding,
          borderRadius
        },
        common: { cubicBezierEaseInOut }
      } = themeRef.value
      return {
        '--link-border-radius': borderRadius,
        '--link-color': linkColor,
        '--link-font-size': linkFontSize,
        '--link-text-color': linkTextColor,
        '--link-text-color-hover': linkTextColorHover,
        '--link-text-color-active': linkTextColorActive,
        '--link-text-color-pressed': linkTextColorPressed,
        '--link-padding': linkPadding,
        '--bezier': cubicBezierEaseInOut,
        '--rail-color': railColor,
        '--rail-color-active': railColorActive,
        '--rail-width': railWidth
      }
    })
    return {
      scrollTo(href) {
        var _a
        ;(_a = anchorRef.value) === null || _a === void 0
          ? void 0
          : _a.setActiveHref(href)
      },
      renderAnchor: () => {
        return (0, vue_1.h)(
          BaseAnchor_1.default,
          Object.assign(
            { ref: anchorRef, style: cssVarsRef.value },
            (0, _utils_1.keep)(props, BaseAnchor_1.baseAnchorPropKeys),
            { mergedClsPrefix: mergedClsPrefixRef.value }
          ),
          slots
        )
      }
    }
  },
  render() {
    return !this.affix
      ? this.renderAnchor()
      : (0, vue_1.h)(
          affix_1.NAffix,
          Object.assign({}, (0, _utils_1.keep)(this, Affix_1.affixPropKeys)),
          { default: this.renderAnchor }
        )
  }
})
