import {
  h,
  ref,
  toRef,
  isProxy,
  toRaw,
  computed,
  defineComponent,
  renderSlot,
  inject,
  provide
} from 'vue'
import { useMergedState } from 'vooks'
import { createId } from 'seemly'
import { RemoveIcon, AddIcon } from '../../_internal/icons'
import { NBaseIcon } from '../../_internal'
import { NButton, NButtonGroup } from '../../button'
import { useTheme, useLocale, useConfig } from '../../_mixins'
import { warn, call } from '../../_utils'
import { formItemInjectionKey } from '../../_mixins/use-form-item'
import { dynamicInputLight } from '../styles'
import NDynamicInputInputPreset from './InputPreset'
import NDynamicInputPairPreset from './PairPreset'
import { dynamicInputInjectionKey } from './interface'
import style from './styles/index.cssr'
const globalDataKeyMap = new WeakMap()
const dynamicInputProps = Object.assign(Object.assign({}, useTheme.props), {
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
      warn(
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
        warn(
          'dynamic-input',
          '`on-input` is deprecated, please use `on-update:value` instead.'
        )
      }
      return true
    },
    default: undefined
  }
})
export default defineComponent({
  name: 'DynamicInput',
  props: dynamicInputProps,
  setup(props, { slots }) {
    const { NConfigProvider, mergedClsPrefixRef } = useConfig()
    const NFormItem = inject(formItemInjectionKey, null)
    const uncontrolledValueRef = ref(props.defaultValue)
    const controlledValueRef = toRef(props, 'value')
    const mergedValueRef = useMergedState(
      controlledValueRef,
      uncontrolledValueRef
    )
    const themeRef = useTheme(
      'DynamicInput',
      'DynamicInput',
      style,
      dynamicInputLight,
      props,
      mergedClsPrefixRef
    )
    const insertionDisabledRef = computed(() => {
      const { value: mergedValue } = mergedValueRef
      if (Array.isArray(mergedValue)) {
        const { max } = props
        return max !== undefined && mergedValue.length >= max
      }
      return false
    })
    const removeDisabledRef = computed(() => {
      const { value: mergedValue } = mergedValueRef
      if (Array.isArray(mergedValue)) return mergedValue.length <= props.min
      return true
    })
    const buttonSizeRef = computed(() => {
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
      if (onInput) call(onInput, value)
      if (_onUpdateValue) call(_onUpdateValue, value)
      if (onUpdateValue) call(onUpdateValue, value)
      uncontrolledValueRef.value = value
    }
    function ensureKey(value, index) {
      if (value === undefined || value === null) return index
      if (typeof value !== 'object') return index
      const rawValue = isProxy(value) ? toRaw(value) : value
      let key = globalDataKeyMap.get(rawValue)
      if (key === undefined) {
        globalDataKeyMap.set(rawValue, (key = createId()))
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
        const rawOriginal = isProxy(originalItem)
          ? toRaw(originalItem)
          : originalItem
        const rawNew = isProxy(value) ? toRaw(value) : value
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
    provide(dynamicInputInjectionKey, {
      mergedThemeRef: themeRef,
      keyPlaceholderRef: toRef(props, 'keyPlaceholder'),
      valuePlaceholderRef: toRef(props, 'valuePlaceholder'),
      placeholderRef: toRef(props, 'placeholder')
    })
    return {
      locale: useLocale('DynamicInput').localeRef,
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
      cssVars: computed(() => {
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
    return h(
      'div',
      { class: `${mergedClsPrefix}-dynamic-input`, style: this.cssVars },
      !Array.isArray(mergedValue) || mergedValue.length === 0
        ? h(
            NButton,
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
                h(
                  NBaseIcon,
                  { clsPrefix: mergedClsPrefix },
                  { default: () => h(AddIcon, null) }
                )
            }
          )
        : mergedValue.map((_, index) =>
            h(
              'div',
              {
                key: keyField ? _[keyField] : ensureKey(_, index),
                'data-key': keyField ? _[keyField] : ensureKey(_, index),
                class: `${mergedClsPrefix}-dynamic-input-item`,
                style: itemStyle
              },
              $slots.default
                ? renderSlot($slots, 'default', {
                    value: mergedValue[index],
                    index
                  })
                : preset === 'input'
                ? h(NDynamicInputInputPreset, {
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
                ? h(NDynamicInputPairPreset, {
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
              h(
                'div',
                { class: `${mergedClsPrefix}-dynamic-input-item__action` },
                h(
                  NButtonGroup,
                  { size: buttonSize },
                  {
                    default: () => [
                      !this.removeDisabled
                        ? h(
                            NButton,
                            {
                              theme: mergedTheme.peers.Button,
                              themeOverrides: mergedTheme.peerOverrides.Button,
                              circle: true,
                              onClick: () => remove(index)
                            },
                            {
                              icon: () =>
                                h(
                                  NBaseIcon,
                                  { clsPrefix: mergedClsPrefix },
                                  { default: () => h(RemoveIcon, null) }
                                )
                            }
                          )
                        : null,
                      h(
                        NButton,
                        {
                          disabled: this.insertionDisabled,
                          circle: true,
                          theme: mergedTheme.peers.Button,
                          themeOverrides: mergedTheme.peerOverrides.Button,
                          onClick: () => createItem(index)
                        },
                        {
                          icon: () =>
                            h(
                              NBaseIcon,
                              { clsPrefix: mergedClsPrefix },
                              { default: () => h(AddIcon, null) }
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