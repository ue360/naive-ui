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
const use_radio_1 = __importDefault(require('./use-radio'))
const radio_cssr_1 = __importDefault(require('./styles/radio.cssr'))
exports.default = (0, vue_1.defineComponent)({
  name: 'Radio',
  props: Object.assign(
    Object.assign({}, _mixins_1.useTheme.props),
    use_radio_1.default.props
  ),
  setup(props) {
    const radio = (0, use_radio_1.default)(props)
    const themeRef = (0, _mixins_1.useTheme)(
      'Radio',
      'Radio',
      radio_cssr_1.default,
      styles_1.radioLight,
      props,
      radio.mergedClsPrefix
    )
    return Object.assign(radio, {
      cssVars: (0, vue_1.computed)(() => {
        const {
          mergedSize: { value: size }
        } = radio
        const {
          common: { cubicBezierEaseInOut },
          self: {
            boxShadow,
            boxShadowActive,
            boxShadowDisabled,
            boxShadowFocus,
            boxShadowHover,
            color,
            colorDisabled,
            textColor,
            textColorDisabled,
            dotColorActive,
            dotColorDisabled,
            labelPadding,
            [(0, _utils_1.createKey)('fontSize', size)]: fontSize,
            [(0, _utils_1.createKey)('radioSize', size)]: radioSize
          }
        } = themeRef.value
        return {
          '--bezier': cubicBezierEaseInOut,
          '--box-shadow': boxShadow,
          '--box-shadow-active': boxShadowActive,
          '--box-shadow-disabled': boxShadowDisabled,
          '--box-shadow-focus': boxShadowFocus,
          '--box-shadow-hover': boxShadowHover,
          '--color': color,
          '--color-disabled': colorDisabled,
          '--dot-color-active': dotColorActive,
          '--dot-color-disabled': dotColorDisabled,
          '--font-size': fontSize,
          '--radio-size': radioSize,
          '--text-color': textColor,
          '--text-color-disabled': textColorDisabled,
          '--label-padding': labelPadding
        }
      })
    })
  },
  render() {
    const { $slots, mergedClsPrefix } = this
    return (0, vue_1.h)(
      'div',
      {
        class: [
          `${mergedClsPrefix}-radio`,
          {
            [`${mergedClsPrefix}-radio--disabled`]: this.mergedDisabled,
            [`${mergedClsPrefix}-radio--checked`]: this.renderSafeChecked,
            [`${mergedClsPrefix}-radio--focus`]: this.focus
          }
        ],
        style: this.cssVars,
        onKeyup: this.handleKeyUp,
        onClick: this.handleClick,
        onMousedown: this.handleMouseDown
      },
      (0, vue_1.h)('input', {
        ref: 'inputRef',
        type: 'radio',
        class: `${mergedClsPrefix}-radio__radio-input`,
        value: this.value,
        name: this.mergedName,
        checked: this.renderSafeChecked,
        disabled: this.mergedDisabled,
        onChange: this.handleRadioInputChange,
        onFocus: this.handleRadioInputFocus,
        onBlur: this.handleRadioInputBlur
      }),
      (0, vue_1.h)('div', {
        class: [
          `${mergedClsPrefix}-radio__dot`,
          this.renderSafeChecked && `${mergedClsPrefix}-radio__dot--checked`
        ]
      }),
      $slots.default
        ? (0, vue_1.h)(
            'div',
            { ref: 'labelRef', class: `${mergedClsPrefix}-radio__label` },
            $slots.default()
          )
        : null
    )
  }
})
