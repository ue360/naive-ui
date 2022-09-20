'use strict'
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod }
  }
Object.defineProperty(exports, '__esModule', { value: true })
const vue_1 = require('vue')
const seemly_1 = require('seemly')
const vooks_1 = require('vooks')
const _mixins_1 = require('../../_mixins')
const _internal_1 = require('../../_internal')
const _utils_1 = require('../../_utils')
const styles_1 = require('../styles')
const index_cssr_1 = __importDefault(require('./styles/index.cssr'))
const switchProps = Object.assign(Object.assign({}, _mixins_1.useTheme.props), {
  size: {
    type: String,
    default: 'medium'
  },
  value: {
    type: [String, Number, Boolean],
    default: undefined
  },
  loading: Boolean,
  defaultValue: {
    type: [String, Number, Boolean],
    default: false
  },
  disabled: {
    type: Boolean,
    default: undefined
  },
  round: {
    type: Boolean,
    default: true
  },
  'onUpdate:value': [Function, Array],
  onUpdateValue: [Function, Array],
  checkedValue: {
    type: [String, Number, Boolean],
    default: true
  },
  uncheckedValue: {
    type: [String, Number, Boolean],
    default: false
  },
  railStyle: Function,
  /** @deprecated */
  onChange: [Function, Array]
})
exports.default = (0, vue_1.defineComponent)({
  name: 'Switch',
  props: switchProps,
  setup(props) {
    if (process.env.NODE_ENV !== 'production') {
      ;(0, vue_1.watchEffect)(() => {
        if (props.onChange) {
          ;(0, _utils_1.warnOnce)(
            'switch',
            '`on-change` is deprecated, please use `on-update:value` instead.'
          )
        }
      })
    }
    const { mergedClsPrefixRef } = (0, _mixins_1.useConfig)(props)
    const themeRef = (0, _mixins_1.useTheme)(
      'Switch',
      'Switch',
      index_cssr_1.default,
      styles_1.switchLight,
      props,
      mergedClsPrefixRef
    )
    const formItem = (0, _mixins_1.useFormItem)(props)
    const { mergedSizeRef, mergedDisabledRef } = formItem
    const uncontrolledValueRef = (0, vue_1.ref)(props.defaultValue)
    const controlledValueRef = (0, vue_1.toRef)(props, 'value')
    const mergedValueRef = (0, vooks_1.useMergedState)(
      controlledValueRef,
      uncontrolledValueRef
    )
    const checkedRef = (0, vue_1.computed)(() => {
      return mergedValueRef.value === props.checkedValue
    })
    const pressedRef = (0, vue_1.ref)(false)
    const focusedRef = (0, vue_1.ref)(false)
    const mergedRailStyleRef = (0, vue_1.computed)(() => {
      const { railStyle } = props
      if (!railStyle) return undefined
      return railStyle({ focused: focusedRef.value, checked: checkedRef.value })
    })
    function doUpdateValue(value) {
      const {
        'onUpdate:value': _onUpdateValue,
        onChange,
        onUpdateValue
      } = props
      const { nTriggerFormInput, nTriggerFormChange } = formItem
      if (_onUpdateValue) (0, _utils_1.call)(_onUpdateValue, value)
      if (onUpdateValue) (0, _utils_1.call)(onUpdateValue, value)
      if (onChange) (0, _utils_1.call)(onChange, value)
      uncontrolledValueRef.value = value
      nTriggerFormInput()
      nTriggerFormChange()
    }
    function doFocus() {
      const { nTriggerFormFocus } = formItem
      nTriggerFormFocus()
    }
    function doBlur() {
      const { nTriggerFormBlur } = formItem
      nTriggerFormBlur()
    }
    function handleClick() {
      if (!mergedDisabledRef.value) {
        if (mergedValueRef.value !== props.checkedValue) {
          doUpdateValue(props.checkedValue)
        } else {
          doUpdateValue(props.uncheckedValue)
        }
      }
    }
    function handleFocus() {
      focusedRef.value = true
      doFocus()
    }
    function handleBlur() {
      focusedRef.value = false
      doBlur()
      pressedRef.value = false
    }
    function handleKeyup(e) {
      if (e.code === 'Space') {
        doUpdateValue(!mergedValueRef.value)
        pressedRef.value = false
      }
    }
    function handleKeydown(e) {
      if (e.code === 'Space') {
        e.preventDefault()
        pressedRef.value = true
      }
    }
    return {
      handleClick,
      handleBlur,
      handleFocus,
      handleKeyup,
      handleKeydown,
      mergedRailStyle: mergedRailStyleRef,
      pressed: pressedRef,
      mergedClsPrefix: mergedClsPrefixRef,
      mergedValue: mergedValueRef,
      checked: checkedRef,
      mergedDisabled: mergedDisabledRef,
      cssVars: (0, vue_1.computed)(() => {
        const { value: size } = mergedSizeRef
        const {
          self: {
            opacityDisabled,
            railColor,
            railColorActive,
            buttonBoxShadow,
            buttonColor,
            boxShadowFocus,
            loadingColor,
            textColor,
            [(0, _utils_1.createKey)('buttonHeight', size)]: buttonHeight,
            [(0, _utils_1.createKey)('buttonWidth', size)]: buttonWidth,
            [(0, _utils_1.createKey)('buttonWidthPressed', size)]:
              buttonWidthPressed,
            [(0, _utils_1.createKey)('railHeight', size)]: railHeight,
            [(0, _utils_1.createKey)('railWidth', size)]: railWidth,
            [(0, _utils_1.createKey)('railBorderRadius', size)]:
              railBorderRadius,
            [(0, _utils_1.createKey)('buttonBorderRadius', size)]:
              buttonBorderRadius
          },
          common: { cubicBezierEaseInOut }
        } = themeRef.value
        const offset = (0, seemly_1.pxfy)(
          ((0, seemly_1.depx)(railHeight) - (0, seemly_1.depx)(buttonHeight)) /
            2
        )
        const height = (0, seemly_1.pxfy)(
          Math.max(
            (0, seemly_1.depx)(railHeight),
            (0, seemly_1.depx)(buttonHeight)
          )
        )
        const width =
          (0, seemly_1.depx)(railHeight) > (0, seemly_1.depx)(buttonHeight)
            ? railWidth
            : (0, seemly_1.pxfy)(
                (0, seemly_1.depx)(railWidth) +
                  (0, seemly_1.depx)(buttonHeight) -
                  (0, seemly_1.depx)(railHeight)
              )
        return {
          '--bezier': cubicBezierEaseInOut,
          '--button-border-radius': buttonBorderRadius,
          '--button-box-shadow': buttonBoxShadow,
          '--button-color': buttonColor,
          '--button-width': buttonWidth,
          '--button-width-pressed': buttonWidthPressed,
          '--button-height': buttonHeight,
          '--height': height,
          '--offset': offset,
          '--opacity-disabled': opacityDisabled,
          '--rail-border-radius': railBorderRadius,
          '--rail-color': railColor,
          '--rail-color-active': railColorActive,
          '--rail-height': railHeight,
          '--rail-width': railWidth,
          '--width': width,
          '--box-shadow-focus': boxShadowFocus,
          '--loading-color': loadingColor,
          '--text-color': textColor
        }
      })
    }
  },
  render() {
    const {
      mergedClsPrefix,
      mergedDisabled,
      checked,
      mergedRailStyle,
      $slots
    } = this
    const { checked: checkedSlot, unchecked: uncheckedSlot } = $slots
    return (0, vue_1.h)(
      'div',
      {
        role: 'switch',
        'aria-checked': checked,
        class: [
          `${mergedClsPrefix}-switch`,
          checked && `${mergedClsPrefix}-switch--active`,
          mergedDisabled && `${mergedClsPrefix}-switch--disabled`,
          this.round && `${mergedClsPrefix}-switch--round`,
          this.pressed && `${mergedClsPrefix}-switch--pressed`
        ],
        tabindex: !this.mergedDisabled ? 0 : undefined,
        style: this.cssVars,
        onClick: this.handleClick,
        onFocus: this.handleFocus,
        onBlur: this.handleBlur,
        onKeyup: this.handleKeyup,
        onKeydown: this.handleKeydown
      },
      (0, vue_1.h)(
        'div',
        {
          class: `${mergedClsPrefix}-switch__rail`,
          'aria-hidden': 'true',
          style: mergedRailStyle
        },
        (checkedSlot || uncheckedSlot) &&
          (0, vue_1.h)(
            'div',
            {
              'aria-hidden': true,
              class: `${mergedClsPrefix}-switch__children-placeholder`
            },
            (0, vue_1.h)(
              'div',
              { class: `${mergedClsPrefix}-switch__rail-placeholder` },
              (0, vue_1.h)('div', {
                class: `${mergedClsPrefix}-switch__button-placeholder`
              }),
              checkedSlot === null || checkedSlot === void 0
                ? void 0
                : checkedSlot()
            ),
            (0, vue_1.h)(
              'div',
              { class: `${mergedClsPrefix}-switch__rail-placeholder` },
              (0, vue_1.h)('div', {
                class: `${mergedClsPrefix}-switch__button-placeholder`
              }),
              uncheckedSlot === null || uncheckedSlot === void 0
                ? void 0
                : uncheckedSlot()
            )
          ),
        (0, vue_1.h)(
          'div',
          { class: `${mergedClsPrefix}-switch__button` },
          (0, vue_1.h)(
            vue_1.Transition,
            { name: 'fade-in-scale-up-transition' },
            {
              default: () =>
                this.loading
                  ? (0, vue_1.h)(_internal_1.NBaseLoading, {
                      key: 'loading',
                      clsPrefix: mergedClsPrefix,
                      strokeWidth: 20
                    })
                  : null
            }
          ),
          checkedSlot &&
            (0, vue_1.h)(
              'div',
              { key: 'checked', class: `${mergedClsPrefix}-switch__checked` },
              checkedSlot()
            ),
          uncheckedSlot &&
            (0, vue_1.h)(
              'div',
              {
                key: 'unchecked',
                class: `${mergedClsPrefix}-switch__unchecked`
              },
              uncheckedSlot()
            )
        )
      )
    )
  }
})