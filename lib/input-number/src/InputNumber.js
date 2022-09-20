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
const icons_1 = require('../../_internal/icons')
const input_1 = require('../../input')
const _internal_1 = require('../../_internal')
const button_1 = require('../../button')
const _mixins_1 = require('../../_mixins')
const _utils_1 = require('../../_utils')
const styles_1 = require('../styles')
const utils_1 = require('./utils')
const input_number_cssr_1 = __importDefault(
  require('./styles/input-number.cssr')
)
const inputNumberProps = Object.assign(
  Object.assign({}, _mixins_1.useTheme.props),
  {
    placeholder: String,
    defaultValue: {
      type: Number,
      default: null
    },
    value: Number,
    step: {
      type: [Number, String],
      default: 1
    },
    min: [Number, String],
    max: [Number, String],
    size: String,
    disabled: {
      type: Boolean,
      default: undefined
    },
    validator: Function,
    bordered: {
      type: Boolean,
      default: undefined
    },
    showButton: {
      type: Boolean,
      default: true
    },
    readonly: Boolean,
    clearable: Boolean,
    keyboard: {
      type: Object,
      default: {}
    },
    updateValueOnInput: {
      type: Boolean,
      default: true
    },
    'onUpdate:value': [Function, Array],
    onUpdateValue: [Function, Array],
    onFocus: [Function, Array],
    onBlur: [Function, Array],
    onClear: [Function, Array],
    // deprecated
    onChange: {
      type: [Function, Array],
      validator: () => {
        if (process.env.NODE_ENV !== 'production') {
          ;(0, _utils_1.warn)(
            'input-number',
            '`on-change` is deprecated, please use `on-update:value` instead.'
          )
        }
        return true
      },
      default: undefined
    }
  }
)
exports.default = (0, vue_1.defineComponent)({
  name: 'InputNumber',
  props: inputNumberProps,
  setup(props) {
    const { mergedBorderedRef, mergedClsPrefixRef } = (0, _mixins_1.useConfig)(
      props
    )
    const themeRef = (0, _mixins_1.useTheme)(
      'InputNumber',
      'InputNumber',
      input_number_cssr_1.default,
      styles_1.inputNumberLight,
      props,
      mergedClsPrefixRef
    )
    const { localeRef } = (0, _mixins_1.useLocale)('InputNumber')
    const formItem = (0, _mixins_1.useFormItem)(props)
    const { mergedSizeRef, mergedDisabledRef } = formItem
    // dom ref
    const inputInstRef = (0, vue_1.ref)(null)
    const minusButtonInstRef = (0, vue_1.ref)(null)
    const addButtonInstRef = (0, vue_1.ref)(null)
    // value
    const uncontrolledValueRef = (0, vue_1.ref)(props.defaultValue)
    const controlledValueRef = (0, vue_1.toRef)(props, 'value')
    const mergedValueRef = (0, vooks_1.useMergedState)(
      controlledValueRef,
      uncontrolledValueRef
    )
    const displayedValueRef = (0, vue_1.ref)('')
    const getMaxPrecision = (currentValue) => {
      const precisions = [props.min, props.max, props.step, currentValue].map(
        (item) => {
          const fraction = String(item).split('.')[1]
          return fraction ? fraction.length : 0
        }
      )
      return Math.max(...precisions)
    }
    const mergedPlaceholderRef = (0, vooks_1.useMemo)(() => {
      const { placeholder } = props
      if (placeholder !== undefined) return placeholder
      return localeRef.value.placeholder
    })
    const mergedStepRef = (0, vooks_1.useMemo)(() => {
      const parsedNumber = (0, utils_1.parseNumber)(props.step)
      if (parsedNumber !== null) {
        return parsedNumber === 0 ? 1 : Math.abs(parsedNumber)
      }
      return 1
    })
    const mergedMinRef = (0, vooks_1.useMemo)(() => {
      const parsedNumber = (0, utils_1.parseNumber)(props.min)
      if (parsedNumber !== null) return parsedNumber
      else return null
    })
    const mergedMaxRef = (0, vooks_1.useMemo)(() => {
      const parsedNumber = (0, utils_1.parseNumber)(props.max)
      if (parsedNumber !== null) return parsedNumber
      else return null
    })
    const doUpdateValue = (value) => {
      const { value: mergedValue } = mergedValueRef
      if (value === mergedValue) {
        deriveDisplayedValueFromValue()
        return
      }
      const {
        'onUpdate:value': _onUpdateValue,
        onUpdateValue,
        onChange
      } = props
      const { nTriggerFormInput, nTriggerFormChange } = formItem
      if (onChange) (0, _utils_1.call)(onChange, value)
      if (onUpdateValue) (0, _utils_1.call)(onUpdateValue, value)
      if (_onUpdateValue) (0, _utils_1.call)(_onUpdateValue, value)
      uncontrolledValueRef.value = value
      nTriggerFormInput()
      nTriggerFormChange()
    }
    const deriveValueFromDisplayedValue = (
      offset = 0,
      doUpdateIfValid = true,
      isInputing = false
    ) => {
      const { value: displayedValue } = displayedValueRef
      if (isInputing && (0, utils_1.isWipValue)(displayedValue)) {
        return false
      }
      const parsedValue = (0, utils_1.parse)(displayedValue)
      if (parsedValue === null) {
        if (doUpdateIfValid) doUpdateValue(null)
        return null
      }
      if ((0, utils_1.validator)(parsedValue)) {
        const precision = getMaxPrecision(parsedValue)
        let nextValue = parseFloat((parsedValue + offset).toFixed(precision))
        if ((0, utils_1.validator)(nextValue)) {
          const { value: mergedMax } = mergedMaxRef
          const { value: mergedMin } = mergedMinRef
          if (mergedMax !== null && nextValue > mergedMax) {
            if (!doUpdateIfValid || isInputing) return false
            // if doUpdateIfValid=true, we try to make it a valid value
            nextValue = mergedMax
          }
          if (mergedMin !== null && nextValue < mergedMin) {
            if (!doUpdateIfValid || isInputing) return false
            // if doUpdateIfValid=true, we try to make it a valid value
            nextValue = mergedMin
          }
          if (props.validator && !props.validator(nextValue)) return false
          if (doUpdateIfValid) doUpdateValue(nextValue)
          return nextValue
        }
      }
      return false
    }
    const deriveDisplayedValueFromValue = () => {
      const { value: mergedValue } = mergedValueRef
      if ((0, utils_1.validator)(mergedValue)) {
        displayedValueRef.value = (0, utils_1.format)(mergedValue)
      } else {
        // null can pass the validator check
        // so mergedValue is a number
        displayedValueRef.value = String(mergedValue)
      }
    }
    deriveDisplayedValueFromValue()
    const displayedValueInvalidRef = (0, vooks_1.useMemo)(() => {
      const derivedValue = deriveValueFromDisplayedValue(0, false)
      return derivedValue === false
    })
    const minusableRef = (0, vooks_1.useMemo)(() => {
      const { value: mergedValue } = mergedValueRef
      if (props.validator && mergedValue === null) {
        return false
      }
      const { value: mergedStep } = mergedStepRef
      const derivedNextValue = deriveValueFromDisplayedValue(-mergedStep, false)
      return derivedNextValue !== false
    })
    const addableRef = (0, vooks_1.useMemo)(() => {
      const { value: mergedValue } = mergedValueRef
      if (props.validator && mergedValue === null) {
        return false
      }
      const { value: mergedStep } = mergedStepRef
      const derivedNextValue = deriveValueFromDisplayedValue(+mergedStep, false)
      return derivedNextValue !== false
    })
    function doFocus(e) {
      const { onFocus } = props
      const { nTriggerFormFocus } = formItem
      if (onFocus) (0, _utils_1.call)(onFocus, e)
      nTriggerFormFocus()
    }
    function doBlur(e) {
      var _a, _b
      if (
        e.target ===
        ((_a = inputInstRef.value) === null || _a === void 0
          ? void 0
          : _a.wrapperElRef)
      ) {
        // hit input wrapper
        // which means not activated
        return
      }
      const value = deriveValueFromDisplayedValue()
      // If valid, update event has been emitted
      // make sure e.target.value is correct in blur callback
      if (value !== false) {
        const inputElRef =
          (_b = inputInstRef.value) === null || _b === void 0
            ? void 0
            : _b.inputElRef
        if (inputElRef) {
          inputElRef.value = String(value || '')
        }
        // If value is not changed, the displayed value may be greater than or
        // less than the current value. The derived value is reformatted so the
        // value is not changed. We can simply derive a new displayed value
        if (mergedValueRef.value === value) {
          deriveDisplayedValueFromValue()
        }
      } else {
        // If not valid, nothing will be emitted, so derive displayed value from
        // origin value
        deriveDisplayedValueFromValue()
      }
      const { onBlur } = props
      const { nTriggerFormBlur } = formItem
      if (onBlur) (0, _utils_1.call)(onBlur, e)
      nTriggerFormBlur()
    }
    function doClear(e) {
      const { onClear } = props
      if (onClear) (0, _utils_1.call)(onClear, e)
    }
    function doAdd() {
      const { value: addable } = addableRef
      if (!addable) return
      const { value: mergedValue } = mergedValueRef
      if (mergedValue === null) {
        if (!props.validator) {
          doUpdateValue(createValidValue())
        }
      } else {
        const { value: mergedStep } = mergedStepRef
        deriveValueFromDisplayedValue(mergedStep)
      }
    }
    function doMinus() {
      const { value: minusable } = minusableRef
      if (!minusable) return
      const { value: mergedValue } = mergedValueRef
      if (mergedValue === null) {
        if (!props.validator) {
          doUpdateValue(createValidValue())
        }
      } else {
        const { value: mergedStep } = mergedStepRef
        deriveValueFromDisplayedValue(-mergedStep)
      }
    }
    const handleFocus = doFocus
    const handleBlur = doBlur
    function createValidValue() {
      if (props.validator) return null
      const { value: mergedMin } = mergedMinRef
      const { value: mergedMax } = mergedMaxRef
      if (mergedMin !== null) {
        return Math.max(0, mergedMin)
      } else if (mergedMax !== null) {
        return Math.min(0, mergedMax)
      } else {
        return 0
      }
    }
    function handleClear(e) {
      doClear(e)
      doUpdateValue(null)
    }
    function handleMouseDown(e) {
      var _a, _b, _c
      if (
        (_a = addButtonInstRef.value) === null || _a === void 0
          ? void 0
          : _a.$el.contains(e.target)
      ) {
        e.preventDefault()
      }
      if (
        (_b = minusButtonInstRef.value) === null || _b === void 0
          ? void 0
          : _b.$el.contains(e.target)
      ) {
        e.preventDefault()
      }
      ;(_c = inputInstRef.value) === null || _c === void 0
        ? void 0
        : _c.activate()
    }
    const handleAddClick = doAdd
    const handleMinusClick = doMinus
    function handleKeyDown(e) {
      var _a, _b
      if (e.code === 'Enter' || e.code === 'NumpadEnter') {
        if (
          e.target ===
          ((_a = inputInstRef.value) === null || _a === void 0
            ? void 0
            : _a.wrapperElRef)
        ) {
          // hit input wrapper
          // which means not activated
          return
        }
        const value = deriveValueFromDisplayedValue()
        if (value !== false) {
          ;(_b = inputInstRef.value) === null || _b === void 0
            ? void 0
            : _b.deactivate()
        }
      } else if (e.code === 'ArrowUp') {
        if (props.keyboard.ArrowUp === false) return
        e.preventDefault()
        const value = deriveValueFromDisplayedValue()
        if (value !== false) {
          doAdd()
        }
      } else if (e.code === 'ArrowDown') {
        if (props.keyboard.ArrowDown === false) return
        e.preventDefault()
        const value = deriveValueFromDisplayedValue()
        if (value !== false) {
          doMinus()
        }
      }
    }
    function handleUpdateDisplayedValue(value) {
      displayedValueRef.value = value
      if (props.updateValueOnInput) {
        deriveValueFromDisplayedValue(0, true, true)
      }
    }
    ;(0, vue_1.watch)(mergedValueRef, () => {
      deriveDisplayedValueFromValue()
    })
    const exposedMethods = {
      focus: () => {
        var _a
        return (_a = inputInstRef.value) === null || _a === void 0
          ? void 0
          : _a.focus()
      },
      blur: () => {
        var _a
        return (_a = inputInstRef.value) === null || _a === void 0
          ? void 0
          : _a.blur()
      }
    }
    return Object.assign(Object.assign({}, exposedMethods), {
      inputInstRef,
      minusButtonInstRef,
      addButtonInstRef,
      mergedClsPrefix: mergedClsPrefixRef,
      mergedBordered: mergedBorderedRef,
      uncontrolledValue: uncontrolledValueRef,
      mergedValue: mergedValueRef,
      mergedPlaceholder: mergedPlaceholderRef,
      displayedValueInvalid: displayedValueInvalidRef,
      mergedSize: mergedSizeRef,
      mergedDisabled: mergedDisabledRef,
      displayedValue: displayedValueRef,
      addable: addableRef,
      minusable: minusableRef,
      handleFocus,
      handleBlur,
      handleClear,
      handleMouseDown,
      handleAddClick,
      handleMinusClick,
      handleKeyDown,
      handleUpdateDisplayedValue,
      // theme
      mergedTheme: themeRef,
      inputThemeOverrides: {
        paddingSmall: '0 8px 0 10px',
        paddingMedium: '0 8px 0 12px',
        paddingLarge: '0 8px 0 14px'
      },
      buttonThemeOverrides: (0, vue_1.computed)(() => {
        const {
          self: { iconColorDisabled }
        } = themeRef.value
        const [r, g, b, a] = (0, seemly_1.rgba)(iconColorDisabled)
        return {
          textColorTextDisabled: `rgb(${r}, ${g}, ${b})`,
          opacityDisabled: `${a}`
        }
      })
    })
  },
  render() {
    const { mergedClsPrefix } = this
    return (0, vue_1.h)(
      'div',
      { class: `${mergedClsPrefix}-input-number` },
      (0, vue_1.h)(
        input_1.NInput,
        {
          ref: 'inputInstRef',
          bordered: this.mergedBordered,
          value: this.displayedValue,
          onUpdateValue: this.handleUpdateDisplayedValue,
          theme: this.mergedTheme.peers.Input,
          themeOverrides: this.mergedTheme.peerOverrides.Input,
          builtinThemeOverrides: this.inputThemeOverrides,
          size: this.mergedSize,
          placeholder: this.mergedPlaceholder,
          disabled: this.mergedDisabled,
          readonly: this.readonly,
          textDecoration: this.displayedValueInvalid
            ? 'line-through'
            : undefined,
          onFocus: this.handleFocus,
          onBlur: this.handleBlur,
          onKeydown: this.handleKeyDown,
          onMousedown: this.handleMouseDown,
          onClear: this.handleClear,
          clearable: this.clearable
        },
        {
          _: 2,
          prefix: this.$slots.prefix,
          suffix: this.showButton
            ? () => [
                this.$slots.suffix &&
                  (0, vue_1.h)(
                    'span',
                    { class: `${mergedClsPrefix}-input-number-suffix` },
                    { default: this.$slots.suffix }
                  ),
                (0, vue_1.h)(
                  button_1.NButton,
                  {
                    text: true,
                    disabled:
                      !this.minusable || this.mergedDisabled || this.readonly,
                    focusable: false,
                    builtinThemeOverrides: this.buttonThemeOverrides,
                    onClick: this.handleMinusClick,
                    ref: 'minusButtonInstRef'
                  },
                  {
                    default: () =>
                      (0, vue_1.h)(
                        _internal_1.NBaseIcon,
                        { clsPrefix: mergedClsPrefix },
                        {
                          default: () => (0, vue_1.h)(icons_1.RemoveIcon, null)
                        }
                      )
                  }
                ),
                (0, vue_1.h)(
                  button_1.NButton,
                  {
                    text: true,
                    disabled:
                      !this.addable || this.mergedDisabled || this.readonly,
                    focusable: false,
                    builtinThemeOverrides: this.buttonThemeOverrides,
                    onClick: this.handleAddClick,
                    ref: 'addButtonInstRef'
                  },
                  {
                    default: () =>
                      (0, vue_1.h)(
                        _internal_1.NBaseIcon,
                        { clsPrefix: mergedClsPrefix },
                        {
                          default: () => (0, vue_1.h)(icons_1.AddIcon, null)
                        }
                      )
                  }
                )
              ]
            : this.$slots.suffix
        }
      )
    )
  }
})