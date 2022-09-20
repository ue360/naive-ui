'use strict'
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod }
  }
Object.defineProperty(exports, '__esModule', { value: true })
const vue_1 = require('vue')
const vooks_1 = require('vooks')
const common_props_1 = __importDefault(require('../../tag/src/common-props'))
const icons_1 = require('../../_internal/icons')
const button_1 = require('../../button')
const space_1 = require('../../space')
const input_1 = require('../../input')
const tag_1 = require('../../tag')
const _internal_1 = require('../../_internal')
const _mixins_1 = require('../../_mixins')
const _utils_1 = require('../../_utils')
const styles_1 = require('../styles')
const index_cssr_1 = __importDefault(require('./styles/index.cssr'))
const dynamicTagsProps = Object.assign(
  Object.assign(
    Object.assign({}, _mixins_1.useTheme.props),
    common_props_1.default
  ),
  {
    closable: {
      type: Boolean,
      default: true
    },
    defaultValue: {
      type: Array,
      default: () => []
    },
    value: Array,
    inputStyle: [String, Object],
    max: Number,
    tagStyle: [String, Object],
    'onUpdate:value': [Function, Array],
    onUpdateValue: [Function, Array],
    // deprecated
    onChange: {
      type: [Function, Array],
      validator: () => {
        if (process.env.NODE_ENV !== 'production') {
          ;(0, _utils_1.warn)(
            'dynamic-tags',
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
  name: 'DynamicTags',
  props: dynamicTagsProps,
  setup(props) {
    const { mergedClsPrefixRef } = (0, _mixins_1.useConfig)(props)
    const { localeRef } = (0, _mixins_1.useLocale)('DynamicTags')
    const formItem = (0, _mixins_1.useFormItem)(props)
    const { mergedDisabledRef } = formItem
    const inputValueRef = (0, vue_1.ref)('')
    const showInputRef = (0, vue_1.ref)(false)
    const inputForceFocusedRef = (0, vue_1.ref)(true)
    const inputInstRef = (0, vue_1.ref)(null)
    const themeRef = (0, _mixins_1.useTheme)(
      'DynamicTags',
      'DynamicTags',
      index_cssr_1.default,
      styles_1.dynamicTagsLight,
      props,
      mergedClsPrefixRef
    )
    const uncontrolledValueRef = (0, vue_1.ref)(props.defaultValue)
    const controlledValueRef = (0, vue_1.toRef)(props, 'value')
    const mergedValueRef = (0, vooks_1.useMergedState)(
      controlledValueRef,
      uncontrolledValueRef
    )
    const localizedAddRef = (0, vue_1.computed)(() => {
      return localeRef.value.add
    })
    const inputSizeRef = (0, vue_1.computed)(() => {
      return (0, _utils_1.smallerSize)(props.size)
    })
    const triggerDisabledRef = (0, vue_1.computed)(() => {
      return (
        mergedDisabledRef.value ||
        (!!props.max && mergedValueRef.value.length >= props.max)
      )
    })
    function doChange(value) {
      const {
        onChange,
        'onUpdate:value': _onUpdateValue,
        onUpdateValue
      } = props
      const { nTriggerFormInput, nTriggerFormChange } = formItem
      if (onChange) (0, _utils_1.call)(onChange, value)
      if (onUpdateValue) (0, _utils_1.call)(onUpdateValue, value)
      if (_onUpdateValue) (0, _utils_1.call)(_onUpdateValue, value)
      uncontrolledValueRef.value = value
      nTriggerFormInput()
      nTriggerFormChange()
    }
    function handleCloseClick(index) {
      const tags = mergedValueRef.value.slice(0)
      tags.splice(index, 1)
      doChange(tags)
    }
    function handleInputKeyUp(e) {
      switch (e.code) {
        case 'Enter':
        case 'NumpadEnter':
          handleInputConfirm()
      }
    }
    function handleInputConfirm(externalValue) {
      const nextValue =
        externalValue !== null && externalValue !== void 0
          ? externalValue
          : inputValueRef.value
      if (nextValue) {
        const tags = mergedValueRef.value.slice(0)
        tags.push(nextValue)
        doChange(tags)
      }
      showInputRef.value = false
      inputForceFocusedRef.value = true
      inputValueRef.value = ''
    }
    function handleInputBlur() {
      handleInputConfirm()
    }
    function handleAddClick() {
      showInputRef.value = true
      void (0, vue_1.nextTick)(() => {
        var _a
        ;(_a = inputInstRef.value) === null || _a === void 0
          ? void 0
          : _a.focus()
        inputForceFocusedRef.value = false
      })
    }
    return {
      mergedClsPrefix: mergedClsPrefixRef,
      inputInstRef,
      localizedAdd: localizedAddRef,
      inputSize: inputSizeRef,
      inputValue: inputValueRef,
      showInput: showInputRef,
      inputForceFocused: inputForceFocusedRef,
      mergedValue: mergedValueRef,
      mergedDisabled: mergedDisabledRef,
      triggerDisabled: triggerDisabledRef,
      handleInputKeyUp,
      handleAddClick,
      handleInputBlur,
      handleCloseClick,
      handleInputConfirm,
      mergedTheme: themeRef,
      cssVars: (0, vue_1.computed)(() => {
        const {
          self: { inputWidth }
        } = themeRef.value
        return {
          '--input-width': inputWidth
        }
      })
    }
  },
  render() {
    const { mergedTheme, cssVars, mergedClsPrefix } = this
    return (0, vue_1.h)(
      space_1.NSpace,
      {
        class: `${mergedClsPrefix}-dynamic-tags`,
        size: 'small',
        style: cssVars,
        theme: mergedTheme.peers.Space,
        themeOverrides: mergedTheme.peerOverrides.Space,
        itemStyle: 'display: flex;'
      },
      {
        default: () => {
          const {
            mergedTheme,
            tagStyle,
            type,
            round,
            size,
            color,
            closable,
            mergedDisabled,
            showInput,
            inputValue,
            inputStyle,
            inputSize,
            inputForceFocused,
            triggerDisabled,
            handleInputKeyUp,
            handleInputBlur,
            handleAddClick,
            handleCloseClick,
            handleInputConfirm,
            $slots
          } = this
          return this.mergedValue
            .map((tag, index) =>
              (0, vue_1.h)(
                tag_1.NTag,
                {
                  key: index,
                  theme: mergedTheme.peers.Tag,
                  themeOverrides: mergedTheme.peerOverrides.Tag,
                  style: tagStyle,
                  type: type,
                  round: round,
                  size: size,
                  color: color,
                  closable: closable,
                  disabled: mergedDisabled,
                  onClose: () => handleCloseClick(index)
                },
                { default: () => tag }
              )
            )
            .concat(
              showInput
                ? $slots.input
                  ? $slots.input({ submit: handleInputConfirm })
                  : (0, vue_1.h)(input_1.NInput, {
                      ref: 'inputInstRef',
                      autosize: true,
                      value: inputValue,
                      onUpdateValue: (v) => {
                        this.inputValue = v
                      },
                      theme: mergedTheme.peers.Input,
                      themeOverrides: mergedTheme.peerOverrides.Input,
                      style: inputStyle,
                      size: inputSize,
                      placeholder: '',
                      onKeyup: handleInputKeyUp,
                      onBlur: handleInputBlur,
                      internalForceFocus: inputForceFocused
                    })
                : $slots.trigger
                ? $slots.trigger({
                    activate: handleAddClick,
                    disabled: triggerDisabled
                  })
                : (0, vue_1.h)(
                    button_1.NButton,
                    {
                      dashed: true,
                      disabled: triggerDisabled,
                      theme: mergedTheme.peers.Button,
                      themeOverrides: mergedTheme.peerOverrides.Button,
                      size: inputSize,
                      onClick: handleAddClick
                    },
                    {
                      icon: () =>
                        (0, vue_1.h)(
                          _internal_1.NBaseIcon,
                          { clsPrefix: mergedClsPrefix },
                          { default: () => (0, vue_1.h)(icons_1.AddIcon, null) }
                        )
                    }
                  )
            )
        }
      }
    )
  }
})