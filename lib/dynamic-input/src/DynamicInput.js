'use strict'
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod }
  }
Object.defineProperty(exports, '__esModule', { value: true })
const vue_1 = require('vue')
const vooks_1 = require('vooks')
const seemly_1 = require('seemly')
const icons_1 = require('../../_internal/icons')
const _internal_1 = require('../../_internal')
const button_1 = require('../../button')
const _mixins_1 = require('../../_mixins')
const _utils_1 = require('../../_utils')
const use_form_item_1 = require('../../_mixins/use-form-item')
const styles_1 = require('../styles')
const InputPreset_1 = __importDefault(require('./InputPreset'))
const PairPreset_1 = __importDefault(require('./PairPreset'))
const interface_1 = require('./interface')
const index_cssr_1 = __importDefault(require('./styles/index.cssr'))
const globalDataKeyMap = new WeakMap()
const dynamicInputProps = Object.assign(
  Object.assign({}, _mixins_1.useTheme.props),
  {
    max: Number,
    min: {
      type: Number,
      default: 0
    },
    value: Array,
    // TODO: make it robust for different types
    defaultValue: {
      type: Array,
      default: () => []
    },
    preset: {
      type: String,
      default: 'input'
    },
    keyField: String,
    itemStyle: [String, Object],
    // for preset pair
    keyPlaceholder: {
      type: String,
      default: ''
    },
    valuePlaceholder: {
      type: String,
      default: ''
    },
    // for preset input
    placeholder: {
      type: String,
      default: ''
    },
    onCreate: Function,
    onRemove: Function,
    'onUpdate:value': [Function, Array],
    onUpdateValue: [Function, Array],
    // deprecated
    onClear: {
      type: Function,
      validator: () => {
        ;(0, _utils_1.warn)(
          'dynamic-input',
          '`on-clear` is deprecated, it is out of usage anymore.'
        )
        return true
      },
      default: undefined
    },
    onInput: {
      type: [Function, Array],
      validator: () => {
        if (process.env.NODE_ENV !== 'production') {
          ;(0, _utils_1.warn)(
            'dynamic-input',
            '`on-input` is deprecated, please use `on-update:value` instead.'
          )
        }
        return true
      },
      default: undefined
    }
  }
)
exports.default = (0, vue_1.defineComponent)({
  name: 'DynamicInput',
  props: dynamicInputProps,
  setup(props, { slots }) {
    const { NConfigProvider, mergedClsPrefixRef } = (0, _mixins_1.useConfig)()
    const NFormItem = (0, vue_1.inject)(
      use_form_item_1.formItemInjectionKey,
      null
    )
    const uncontrolledValueRef = (0, vue_1.ref)(props.defaultValue)
    const controlledValueRef = (0, vue_1.toRef)(props, 'value')
    const mergedValueRef = (0, vooks_1.useMergedState)(
      controlledValueRef,
      uncontrolledValueRef
    )
    const themeRef = (0, _mixins_1.useTheme)(
      'DynamicInput',
      'DynamicInput',
      index_cssr_1.default,
      styles_1.dynamicInputLight,
      props,
      mergedClsPrefixRef
    )
    const insertionDisabledRef = (0, vue_1.computed)(() => {
      const { value: mergedValue } = mergedValueRef
      if (Array.isArray(mergedValue)) {
        const { max } = props
        return max !== undefined && mergedValue.length >= max
      }
      return false
    })
    const removeDisabledRef = (0, vue_1.computed)(() => {
      const { value: mergedValue } = mergedValueRef
      if (Array.isArray(mergedValue)) return mergedValue.length <= props.min
      return true
    })
    const buttonSizeRef = (0, vue_1.computed)(() => {
      var _a, _b
      return (_b =
        (_a =
          NConfigProvider === null || NConfigProvider === void 0
            ? void 0
            : NConfigProvider.mergedComponentPropsRef.value) === null ||
        _a === void 0
          ? void 0
          : _a.DynamicInput) === null || _b === void 0
        ? void 0
        : _b.buttonSize
    })
    function doUpdateValue(value) {
      const { onInput, 'onUpdate:value': _onUpdateValue, onUpdateValue } = props
      if (onInput) (0, _utils_1.call)(onInput, value)
      if (_onUpdateValue) (0, _utils_1.call)(_onUpdateValue, value)
      if (onUpdateValue) (0, _utils_1.call)(onUpdateValue, value)
      uncontrolledValueRef.value = value
    }
    function ensureKey(value, index) {
      if (value === undefined || value === null) return index
      if (typeof value !== 'object') return index
      const rawValue = (0, vue_1.isProxy)(value)
        ? (0, vue_1.toRaw)(value)
        : value
      let key = globalDataKeyMap.get(rawValue)
      if (key === undefined) {
        globalDataKeyMap.set(rawValue, (key = (0, seemly_1.createId)()))
      }
      return key
    }
    function handleValueChange(index, value) {
      const { value: mergedValue } = mergedValueRef
      const newValue = Array.from(
        mergedValue !== null && mergedValue !== void 0 ? mergedValue : []
      )
      const originalItem = newValue[index]
      newValue[index] = value
      // update dataKeyMap
      if (
        originalItem &&
        value &&
        typeof originalItem === 'object' &&
        typeof value === 'object'
      ) {
        const rawOriginal = (0, vue_1.isProxy)(originalItem)
          ? (0, vue_1.toRaw)(originalItem)
          : originalItem
        const rawNew = (0, vue_1.isProxy)(value)
          ? (0, vue_1.toRaw)(value)
          : value
        // inherit key is value position is not change
        const originalKey = globalDataKeyMap.get(rawOriginal)
        if (originalKey !== undefined) {
          globalDataKeyMap.set(rawNew, originalKey)
        }
      }
      doUpdateValue(newValue)
    }
    function handleCreateClick() {
      createItem(0)
    }
    function createItem(index) {
      const { value: mergedValue } = mergedValueRef
      const { onCreate } = props
      const newValue = Array.from(
        mergedValue !== null && mergedValue !== void 0 ? mergedValue : []
      )
      if (onCreate) {
        newValue.splice(index + 1, 0, onCreate(index + 1))
        doUpdateValue(newValue)
      } else if (slots.default) {
        newValue.splice(index + 1, 0, null)
        doUpdateValue(newValue)
      } else {
        switch (props.preset) {
          case 'input':
            newValue.splice(index + 1, 0, '')
            doUpdateValue(newValue)
            break
          case 'pair':
            newValue.splice(index + 1, 0, { key: '', value: '' })
            doUpdateValue(newValue)
            break
        }
      }
    }
    function remove(index) {
      const { value: mergedValue } = mergedValueRef
      if (!Array.isArray(mergedValue)) return
      const { min } = props
      if (mergedValue.length <= min) return
      const newValue = Array.from(mergedValue)
      newValue.splice(index, 1)
      doUpdateValue(newValue)
      const { onRemove } = props
      if (onRemove) onRemove(index)
    }
    ;(0, vue_1.provide)(interface_1.dynamicInputInjectionKey, {
      mergedThemeRef: themeRef,
      keyPlaceholderRef: (0, vue_1.toRef)(props, 'keyPlaceholder'),
      valuePlaceholderRef: (0, vue_1.toRef)(props, 'valuePlaceholder'),
      placeholderRef: (0, vue_1.toRef)(props, 'placeholder')
    })
    return {
      locale: (0, _mixins_1.useLocale)('DynamicInput').localeRef,
      buttonSize: buttonSizeRef,
      mergedClsPrefix: mergedClsPrefixRef,
      NFormItem,
      uncontrolledValue: uncontrolledValueRef,
      mergedValue: mergedValueRef,
      insertionDisabled: insertionDisabledRef,
      removeDisabled: removeDisabledRef,
      handleCreateClick,
      ensureKey,
      handleValueChange,
      remove,
      createItem,
      mergedTheme: themeRef,
      cssVars: (0, vue_1.computed)(() => {
        const {
          self: { actionMargin }
        } = themeRef.value
        return {
          '--action-margin': actionMargin
        }
      })
    }
  },
  render() {
    const {
      buttonSize,
      mergedClsPrefix,
      mergedValue,
      locale,
      mergedTheme,
      keyField,
      $slots,
      preset,
      itemStyle,
      NFormItem,
      ensureKey,
      handleValueChange,
      remove,
      createItem
    } = this
    return (0, vue_1.h)(
      'div',
      { class: `${mergedClsPrefix}-dynamic-input`, style: this.cssVars },
      !Array.isArray(mergedValue) || mergedValue.length === 0
        ? (0, vue_1.h)(
            button_1.NButton,
            {
              block: true,
              ghost: true,
              dashed: true,
              size: buttonSize,
              theme: mergedTheme.peers.Button,
              themeOverrides: mergedTheme.peerOverrides.Button,
              onClick: this.handleCreateClick
            },
            {
              default: () => locale.create,
              icon: () =>
                (0, vue_1.h)(
                  _internal_1.NBaseIcon,
                  { clsPrefix: mergedClsPrefix },
                  { default: () => (0, vue_1.h)(icons_1.AddIcon, null) }
                )
            }
          )
        : mergedValue.map((_, index) =>
            (0, vue_1.h)(
              'div',
              {
                key: keyField ? _[keyField] : ensureKey(_, index),
                'data-key': keyField ? _[keyField] : ensureKey(_, index),
                class: `${mergedClsPrefix}-dynamic-input-item`,
                style: itemStyle
              },
              $slots.default
                ? (0, vue_1.renderSlot)($slots, 'default', {
                    value: mergedValue[index],
                    index
                  })
                : preset === 'input'
                ? (0, vue_1.h)(InputPreset_1.default, {
                    clsPrefix: mergedClsPrefix,
                    value: mergedValue[index],
                    parentPath: NFormItem ? NFormItem.path.value : undefined,
                    path: (
                      NFormItem === null || NFormItem === void 0
                        ? void 0
                        : NFormItem.path.value
                    )
                      ? `${NFormItem.path.value}[${index}]`
                      : undefined,
                    onUpdateValue: (v) => handleValueChange(index, v)
                  })
                : preset === 'pair'
                ? (0, vue_1.h)(PairPreset_1.default, {
                    clsPrefix: mergedClsPrefix,
                    value: mergedValue[index],
                    parentPath: NFormItem ? NFormItem.path.value : undefined,
                    path: (
                      NFormItem === null || NFormItem === void 0
                        ? void 0
                        : NFormItem.path.value
                    )
                      ? `${NFormItem.path.value}[${index}]`
                      : undefined,
                    onUpdateValue: (v) => handleValueChange(index, v)
                  })
                : null,
              (0, vue_1.h)(
                'div',
                { class: `${mergedClsPrefix}-dynamic-input-item__action` },
                (0, vue_1.h)(
                  button_1.NButtonGroup,
                  { size: buttonSize },
                  {
                    default: () => [
                      !this.removeDisabled
                        ? (0, vue_1.h)(
                            button_1.NButton,
                            {
                              theme: mergedTheme.peers.Button,
                              themeOverrides: mergedTheme.peerOverrides.Button,
                              circle: true,
                              onClick: () => remove(index)
                            },
                            {
                              icon: () =>
                                (0, vue_1.h)(
                                  _internal_1.NBaseIcon,
                                  { clsPrefix: mergedClsPrefix },
                                  {
                                    default: () =>
                                      (0, vue_1.h)(icons_1.RemoveIcon, null)
                                  }
                                )
                            }
                          )
                        : null,
                      (0, vue_1.h)(
                        button_1.NButton,
                        {
                          disabled: this.insertionDisabled,
                          circle: true,
                          theme: mergedTheme.peers.Button,
                          themeOverrides: mergedTheme.peerOverrides.Button,
                          onClick: () => createItem(index)
                        },
                        {
                          icon: () =>
                            (0, vue_1.h)(
                              _internal_1.NBaseIcon,
                              { clsPrefix: mergedClsPrefix },
                              {
                                default: () =>
                                  (0, vue_1.h)(icons_1.AddIcon, null)
                              }
                            )
                        }
                      )
                    ]
                  }
                )
              )
            )
          )
    )
  }
})