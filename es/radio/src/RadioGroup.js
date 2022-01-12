import { h, defineComponent, computed, provide, ref, toRef } from 'vue'
import { useMergedState } from 'vooks'
import { useTheme, useFormItem, useConfig } from '../../_mixins'
import { getSlot, warn, createKey, call, flatten } from '../../_utils'
import { radioLight } from '../styles'
import { radioGroupInjectionKey } from './use-radio'
import style from './styles/radio-group.cssr'
function mapSlot(defaultSlot, value, clsPrefix) {
  var _a
  const children = []
  let isButtonGroup = false
  for (let i = 0; i < defaultSlot.length; ++i) {
    const wrappedInstance = defaultSlot[i]
    const name =
      (_a = wrappedInstance.type) === null || _a === void 0 ? void 0 : _a.name
    if (name === 'RadioButton') {
      isButtonGroup = true
    }
    if (
      process.env.NODE_ENV !== 'production' &&
      isButtonGroup &&
      name !== 'RadioButton'
    ) {
      warn(
        'radio-group',
        '`n-radio-group` in button mode only takes `n-radio-button` as children.'
      )
      continue
    }
    const instanceProps = wrappedInstance.props
    if (name !== 'RadioButton') {
      children.push(wrappedInstance)
      continue
    }
    if (i === 0) {
      children.push(wrappedInstance)
    } else {
      const lastInstanceProps = children[children.length - 1].props
      const lastInstanceChecked = value === lastInstanceProps.value
      const lastInstanceDisabled = lastInstanceProps.disabled
      const currentInstanceChecked = value === instanceProps.value
      const currentInstanceDisabled = instanceProps.disabled
      /**
       * Priority of button splitor:
       * !disabled  checked >
       *  disabled  checked >
       * !disabled !checked >
       *  disabled !checked
       */
      const lastInstancePriority =
        (lastInstanceChecked ? 2 : 0) + (!lastInstanceDisabled ? 1 : 0)
      const currentInstancePriority =
        (currentInstanceChecked ? 2 : 0) + (!currentInstanceDisabled ? 1 : 0)
      const lastInstanceClass = {
        [`${clsPrefix}-radio-group__splitor--disabled`]: lastInstanceDisabled,
        [`${clsPrefix}-radio-group__splitor--checked`]: lastInstanceChecked
      }
      const currentInstanceClass = {
        [`${clsPrefix}-radio-group__splitor--disabled`]:
          currentInstanceDisabled,
        [`${clsPrefix}-radio-group__splitor--checked`]: currentInstanceChecked
      }
      const splitorClass =
        lastInstancePriority < currentInstancePriority
          ? currentInstanceClass
          : lastInstanceClass
      children.push(
        h('div', {
          class: [`${clsPrefix}-radio-group__splitor`, splitorClass]
        }),
        wrappedInstance
      )
    }
  }
  return {
    children,
    isButtonGroup
  }
}
const radioGroupProps = Object.assign(Object.assign({}, useTheme.props), {
  name: String,
  value: [String, Number],
  defaultValue: {
    type: [String, Number],
    default: null
  },
  size: String,
  disabled: {
    type: Boolean,
    default: undefined
  },
  'onUpdate:value': [Function, Array],
  onUpdateValue: [Function, Array]
})
export default defineComponent({
  name: 'RadioGroup',
  props: radioGroupProps,
  setup(props) {
    const selfElRef = ref(null)
    const {
      mergedSizeRef,
      mergedDisabledRef,
      nTriggerFormChange,
      nTriggerFormInput,
      nTriggerFormBlur,
      nTriggerFormFocus
    } = useFormItem(props)
    const { mergedClsPrefixRef } = useConfig(props)
    const themeRef = useTheme(
      'Radio',
      'RadioGroup',
      style,
      radioLight,
      props,
      mergedClsPrefixRef
    )
    const uncontrolledValueRef = ref(props.defaultValue)
    const controlledValueRef = toRef(props, 'value')
    const mergedValueRef = useMergedState(
      controlledValueRef,
      uncontrolledValueRef
    )
    function doUpdateValue(value) {
      const { onUpdateValue, 'onUpdate:value': _onUpdateValue } = props
      if (onUpdateValue) {
        call(onUpdateValue, value)
      }
      if (_onUpdateValue) {
        call(_onUpdateValue, value)
      }
      uncontrolledValueRef.value = value
      nTriggerFormChange()
      nTriggerFormInput()
    }
    function handleFocusin(e) {
      const { value: selfEl } = selfElRef
      if (!selfEl) return
      if (selfEl.contains(e.relatedTarget)) return
      nTriggerFormFocus()
    }
    function handleFocusout(e) {
      const { value: selfEl } = selfElRef
      if (!selfEl) return
      if (selfEl.contains(e.relatedTarget)) return
      nTriggerFormBlur()
    }
    provide(radioGroupInjectionKey, {
      mergedClsPrefixRef,
      nameRef: toRef(props, 'name'),
      valueRef: mergedValueRef,
      disabledRef: mergedDisabledRef,
      mergedSizeRef,
      doUpdateValue
    })
    return {
      selfElRef,
      mergedClsPrefix: mergedClsPrefixRef,
      mergedValue: mergedValueRef,
      handleFocusout,
      handleFocusin,
      cssVars: computed(() => {
        const { value: size } = mergedSizeRef
        const {
          common: { cubicBezierEaseInOut },
          self: {
            buttonBorderColor,
            buttonBorderColorActive,
            buttonBorderRadius,
            buttonBoxShadow,
            buttonBoxShadowFocus,
            buttonBoxShadowHover,
            buttonColorActive,
            buttonTextColor,
            buttonTextColorActive,
            buttonTextColorHover,
            opacityDisabled,
            [createKey('buttonHeight', size)]: height,
            [createKey('fontSize', size)]: fontSize
          }
        } = themeRef.value
        return {
          '--font-size': fontSize,
          '--bezier': cubicBezierEaseInOut,
          '--button-border-color': buttonBorderColor,
          '--button-border-color-active': buttonBorderColorActive,
          '--button-border-radius': buttonBorderRadius,
          '--button-box-shadow': buttonBoxShadow,
          '--button-box-shadow-focus': buttonBoxShadowFocus,
          '--button-box-shadow-hover': buttonBoxShadowHover,
          '--button-color-active': buttonColorActive,
          '--button-text-color': buttonTextColor,
          '--button-text-color-hover': buttonTextColorHover,
          '--button-text-color-active': buttonTextColorActive,
          '--height': height,
          '--opacity-disabled': opacityDisabled
        }
      })
    }
  },
  render() {
    const { mergedValue, mergedClsPrefix, handleFocusin, handleFocusout } = this
    const { children, isButtonGroup } = mapSlot(
      flatten(getSlot(this)),
      mergedValue,
      mergedClsPrefix
    )
    return h(
      'div',
      {
        onFocusin: handleFocusin,
        onFocusout: handleFocusout,
        ref: 'selfElRef',
        class: [
          `${mergedClsPrefix}-radio-group`,
          isButtonGroup && `${mergedClsPrefix}-radio-group--button-group`
        ],
        style: this.cssVars
      },
      children
    )
  }
})
