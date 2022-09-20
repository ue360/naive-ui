'use strict'
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod }
  }
Object.defineProperty(exports, '__esModule', { value: true })
const vue_1 = require('vue')
const icons_1 = require('../../_internal/icons')
const _mixins_1 = require('../../_mixins')
const _utils_1 = require('../../_utils')
const _internal_1 = require('../../_internal')
const styles_1 = require('../styles')
const index_cssr_1 = __importDefault(require('./styles/index.cssr'))
const ConfigProvider_1 = require('../../config-provider/src/ConfigProvider')
const emptyProps = Object.assign(Object.assign({}, _mixins_1.useTheme.props), {
  description: {
    type: String,
    default: undefined
  },
  showDescription: {
    type: Boolean,
    default: true
  },
  size: {
    type: String,
    default: 'medium'
  },
  renderIcon: Function
})
exports.default = (0, vue_1.defineComponent)({
  name: 'Empty',
  props: emptyProps,
  setup(props) {
    const { mergedClsPrefixRef } = (0, _mixins_1.useConfig)(props)
    const themeRef = (0, _mixins_1.useTheme)(
      'Empty',
      'Empty',
      index_cssr_1.default,
      styles_1.emptyLight,
      props,
      mergedClsPrefixRef
    )
    const { localeRef } = (0, _mixins_1.useLocale)('Empty')
    const NConfigProvider = (0, vue_1.inject)(
      ConfigProvider_1.configProviderInjectionKey,
      null
    )
    const mergedDescriptionRef = (0, vue_1.computed)(() => {
      var _a, _b, _c
      return (_a = props.description) !== null && _a !== void 0
        ? _a
        : (_c =
            (_b =
              NConfigProvider === null || NConfigProvider === void 0
                ? void 0
                : NConfigProvider.mergedComponentPropsRef.value) === null ||
            _b === void 0
              ? void 0
              : _b.Empty) === null || _c === void 0
        ? void 0
        : _c.description
    })
    const mergedRenderIconRef = (0, vue_1.computed)(() => {
      var _a, _b
      return (
        ((_b =
          (_a =
            NConfigProvider === null || NConfigProvider === void 0
              ? void 0
              : NConfigProvider.mergedComponentPropsRef.value) === null ||
          _a === void 0
            ? void 0
            : _a.Empty) === null || _b === void 0
          ? void 0
          : _b.renderIcon) || (() => (0, vue_1.h)(icons_1.EmptyIcon, null))
      )
    })
    return {
      mergedClsPrefix: mergedClsPrefixRef,
      mergedRenderIcon: mergedRenderIconRef,
      localizedDescription: (0, vue_1.computed)(() => {
        return mergedDescriptionRef.value || localeRef.value.description
      }),
      cssVars: (0, vue_1.computed)(() => {
        const { size } = props
        const {
          common: { cubicBezierEaseInOut },
          self: {
            [(0, _utils_1.createKey)('iconSize', size)]: iconSize,
            [(0, _utils_1.createKey)('fontSize', size)]: fontSize,
            textColor,
            iconColor,
            extraTextColor
          }
        } = themeRef.value
        return {
          '--icon-size': iconSize,
          '--font-size': fontSize,
          '--bezier': cubicBezierEaseInOut,
          '--text-color': textColor,
          '--icon-color': iconColor,
          '--extra-text-color': extraTextColor
        }
      })
    }
  },
  render() {
    const { $slots, mergedClsPrefix } = this
    return (0, vue_1.h)(
      'div',
      { class: `${mergedClsPrefix}-empty`, style: this.cssVars },
      (0, vue_1.h)(
        'div',
        { class: `${mergedClsPrefix}-empty__icon` },
        (0, vue_1.renderSlot)($slots, 'icon', undefined, () => [
          (0, vue_1.h)(
            _internal_1.NBaseIcon,
            { clsPrefix: mergedClsPrefix },
            { default: this.mergedRenderIcon }
          )
        ])
      ),
      this.showDescription
        ? (0, vue_1.h)(
            'div',
            { class: `${mergedClsPrefix}-empty__description` },
            (0, vue_1.renderSlot)($slots, 'default', undefined, () => [
              this.localizedDescription
            ])
          )
        : null,
      $slots.extra
        ? (0, vue_1.h)(
            'div',
            { class: `${mergedClsPrefix}-empty__extra` },
            (0, vue_1.renderSlot)($slots, 'extra')
          )
        : null
    )
  }
})