'use strict'
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod }
  }
Object.defineProperty(exports, '__esModule', { value: true })
exports.tagInjectionKey = void 0
const vue_1 = require('vue')
const _mixins_1 = require('../../_mixins')
const _internal_1 = require('../../_internal')
const _utils_1 = require('../../_utils')
const styles_1 = require('../styles')
const common_props_1 = __importDefault(require('./common-props'))
const index_cssr_1 = __importDefault(require('./styles/index.cssr'))
const use_rtl_1 = __importDefault(require('../../_mixins/use-rtl'))
const tagProps = Object.assign(
  Object.assign(
    Object.assign({}, _mixins_1.useTheme.props),
    common_props_1.default
  ),
  {
    bordered: {
      type: Boolean,
      default: undefined
    },
    checked: Boolean,
    checkable: Boolean,
    onClose: [Array, Function],
    onMouseenter: Function,
    onMouseleave: Function,
    'onUpdate:checked': Function,
    onUpdateChecked: Function,
    // private
    internalStopClickPropagation: Boolean,
    // deprecated
    onCheckedChange: {
      type: Function,
      validator: () => {
        if (process.env.NODE_ENV !== 'production') {
          ;(0, _utils_1.warn)(
            'tag',
            '`on-checked-change` is deprecated, please use `on-update:checked` instead'
          )
        }
        return true
      },
      default: undefined
    }
  }
)
exports.tagInjectionKey = Symbol('tag')
exports.default = (0, vue_1.defineComponent)({
  name: 'Tag',
  props: tagProps,
  setup(props) {
    const contentRef = (0, vue_1.ref)(null)
    const { mergedBorderedRef, mergedClsPrefixRef, NConfigProvider } = (0,
    _mixins_1.useConfig)(props)
    const themeRef = (0, _mixins_1.useTheme)(
      'Tag',
      'Tag',
      index_cssr_1.default,
      styles_1.tagLight,
      props,
      mergedClsPrefixRef
    )
    ;(0, vue_1.provide)(exports.tagInjectionKey, {
      roundRef: (0, vue_1.toRef)(props, 'round')
    })
    function handleClick(e) {
      if (!props.disabled) {
        if (props.checkable) {
          const {
            checked,
            onCheckedChange,
            onUpdateChecked,
            'onUpdate:checked': _onUpdateChecked
          } = props
          if (onUpdateChecked) onUpdateChecked(!checked)
          if (_onUpdateChecked) _onUpdateChecked(!checked)
          // deprecated
          if (onCheckedChange) onCheckedChange(!checked)
        }
      }
    }
    function handleCloseClick(e) {
      if (props.internalStopClickPropagation) {
        e.stopPropagation()
      }
      if (!props.disabled) {
        const { onClose } = props
        if (onClose) (0, _utils_1.call)(onClose, e)
      }
    }
    const tagPublicMethods = {
      setTextContent(textContent) {
        const { value } = contentRef
        if (value) value.textContent = textContent
      }
    }
    const rtlEnabledRef = (0, use_rtl_1.default)(
      'Tag',
      NConfigProvider === null || NConfigProvider === void 0
        ? void 0
        : NConfigProvider.mergedRtlRef,
      mergedClsPrefixRef
    )
    return Object.assign(Object.assign({}, tagPublicMethods), {
      rtlEnabled: rtlEnabledRef,
      mergedClsPrefix: mergedClsPrefixRef,
      contentRef,
      mergedBordered: mergedBorderedRef,
      handleClick,
      handleCloseClick,
      cssVars: (0, vue_1.computed)(() => {
        const { type, size, color: { color, textColor } = {} } = props
        const {
          common: { cubicBezierEaseInOut },
          self: {
            padding,
            closeMargin,
            closeMarginRtl,
            borderRadius,
            opacityDisabled,
            textColorCheckable,
            textColorHoverCheckable,
            textColorPressedCheckable,
            textColorChecked,
            colorCheckable,
            colorHoverCheckable,
            colorPressedCheckable,
            colorChecked,
            colorCheckedHover,
            colorCheckedPressed,
            [(0, _utils_1.createKey)('closeSize', size)]: closeSize,
            [(0, _utils_1.createKey)('fontSize', size)]: fontSize,
            [(0, _utils_1.createKey)('height', size)]: height,
            [(0, _utils_1.createKey)('color', type)]: typedColor,
            [(0, _utils_1.createKey)('textColor', type)]: typeTextColor,
            [(0, _utils_1.createKey)('border', type)]: border,
            [(0, _utils_1.createKey)('closeColor', type)]: closeColor,
            [(0, _utils_1.createKey)('closeColorHover', type)]: closeColorHover,
            [(0, _utils_1.createKey)('closeColorPressed', type)]:
              closeColorPressed
          }
        } = themeRef.value
        return {
          '--avatar-size-override': `calc(${height} - 8px)`,
          '--bezier': cubicBezierEaseInOut,
          '--border-radius': borderRadius,
          '--border': border,
          '--close-color': closeColor,
          '--close-color-hover': closeColorHover,
          '--close-color-pressed': closeColorPressed,
          '--close-margin': closeMargin,
          '--close-margin-rtl': closeMarginRtl,
          '--close-size': closeSize,
          '--color': color || typedColor,
          '--color-checkable': colorCheckable,
          '--color-checked': colorChecked,
          '--color-checked-hover': colorCheckedHover,
          '--color-checked-pressed': colorCheckedPressed,
          '--color-hover-checkable': colorHoverCheckable,
          '--color-pressed-checkable': colorPressedCheckable,
          '--font-size': fontSize,
          '--height': height,
          '--opacity-disabled': opacityDisabled,
          '--padding': padding,
          '--text-color': textColor || typeTextColor,
          '--text-color-checkable': textColorCheckable,
          '--text-color-checked': textColorChecked,
          '--text-color-hover-checkable': textColorHoverCheckable,
          '--text-color-pressed-checkable': textColorPressedCheckable
        }
      })
    })
  },
  render() {
    const {
      mergedClsPrefix,
      rtlEnabled,
      color: { borderColor } = {},
      $slots
    } = this
    return (0, vue_1.h)(
      'div',
      {
        class: [
          `${mergedClsPrefix}-tag`,
          {
            [`${mergedClsPrefix}-tag--rtl`]: rtlEnabled,
            [`${mergedClsPrefix}-tag--disabled`]: this.disabled,
            [`${mergedClsPrefix}-tag--checkable`]: this.checkable,
            [`${mergedClsPrefix}-tag--checked`]: this.checkable && this.checked,
            [`${mergedClsPrefix}-tag--round`]: this.round
          }
        ],
        style: this.cssVars,
        onClick: this.handleClick,
        onMouseenter: this.onMouseenter,
        onMouseleave: this.onMouseleave
      },
      $slots.avatar &&
        (0, vue_1.h)(
          'div',
          { class: `${mergedClsPrefix}-tag__avatar` },
          {
            default: $slots.avatar
          }
        ),
      (0, vue_1.h)(
        'span',
        { class: `${mergedClsPrefix}-tag__content`, ref: 'contentRef' },
        this.$slots
      ),
      !this.checkable && this.closable
        ? (0, vue_1.h)(_internal_1.NBaseClose, {
            clsPrefix: mergedClsPrefix,
            class: `${mergedClsPrefix}-tag__close`,
            disabled: this.disabled,
            onClick: this.handleCloseClick
          })
        : null,
      !this.checkable && this.mergedBordered
        ? (0, vue_1.h)('div', {
            class: `${mergedClsPrefix}-tag__border`,
            style: { borderColor }
          })
        : null
    )
  }
})
