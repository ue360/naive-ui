import {
  h,
  ref,
  toRef,
  defineComponent,
  computed,
  Transition,
  watchEffect
} from 'vue'
import { depx, pxfy } from 'seemly'
import { useMergedState } from 'vooks'
import { useConfig, useFormItem, useTheme } from '../../_mixins'
import { NBaseLoading } from '../../_internal'
import { call, createKey, warnOnce } from '../../_utils'
import { switchLight } from '../styles'
import style from './styles/index.cssr'
const switchProps = Object.assign(Object.assign({}, useTheme.props), {
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
export default defineComponent({
  name: 'Switch',
  props: switchProps,
  setup(props) {
    if (process.env.NODE_ENV !== 'production') {
      watchEffect(() => {
        if (props.onChange) {
          warnOnce(
            'switch',
            '`on-change` is deprecated, please use `on-update:value` instead.'
          )
        }
      })
    }
    const { mergedClsPrefixRef } = useConfig(props)
    const themeRef = useTheme(
      'Switch',
      'Switch',
      style,
      switchLight,
      props,
      mergedClsPrefixRef
    )
    const formItem = useFormItem(props)
    const { mergedSizeRef, mergedDisabledRef } = formItem
    const uncontrolledValueRef = ref(props.defaultValue)
    const controlledValueRef = toRef(props, 'value')
    const mergedValueRef = useMergedState(
      controlledValueRef,
      uncontrolledValueRef
    )
    const checkedRef = computed(() => {
      return mergedValueRef.value === props.checkedValue
    })
    const pressedRef = ref(false)
    const focusedRef = ref(false)
    const mergedRailStyleRef = computed(() => {
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
      if (_onUpdateValue) call(_onUpdateValue, value)
      if (onUpdateValue) call(onUpdateValue, value)
      if (onChange) call(onChange, value)
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
      cssVars: computed(() => {
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
            [createKey('buttonHeight', size)]: buttonHeight,
            [createKey('buttonWidth', size)]: buttonWidth,
            [createKey('buttonWidthPressed', size)]: buttonWidthPressed,
            [createKey('railHeight', size)]: railHeight,
            [createKey('railWidth', size)]: railWidth,
            [createKey('railBorderRadius', size)]: railBorderRadius,
            [createKey('buttonBorderRadius', size)]: buttonBorderRadius
          },
          common: { cubicBezierEaseInOut }
        } = themeRef.value
        const offset = pxfy((depx(railHeight) - depx(buttonHeight)) / 2)
        const height = pxfy(Math.max(depx(railHeight), depx(buttonHeight)))
        const width =
          depx(railHeight) > depx(buttonHeight)
            ? railWidth
            : pxfy(depx(railWidth) + depx(buttonHeight) - depx(railHeight))
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
    return h(
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
      h(
        'div',
        {
          class: `${mergedClsPrefix}-switch__rail`,
          'aria-hidden': 'true',
          style: mergedRailStyle
        },
        (checkedSlot || uncheckedSlot) &&
          h(
            'div',
            {
              'aria-hidden': true,
              class: `${mergedClsPrefix}-switch__children-placeholder`
            },
            h(
              'div',
              { class: `${mergedClsPrefix}-switch__rail-placeholder` },
              h('div', {
                class: `${mergedClsPrefix}-switch__button-placeholder`
              }),
              checkedSlot === null || checkedSlot === void 0
                ? void 0
                : checkedSlot()
            ),
            h(
              'div',
              { class: `${mergedClsPrefix}-switch__rail-placeholder` },
              h('div', {
                class: `${mergedClsPrefix}-switch__button-placeholder`
              }),
              uncheckedSlot === null || uncheckedSlot === void 0
                ? void 0
                : uncheckedSlot()
            )
          ),
        h(
          'div',
          { class: `${mergedClsPrefix}-switch__button` },
          h(
            Transition,
            { name: 'fade-in-scale-up-transition' },
            {
              default: () =>
                this.loading
                  ? h(NBaseLoading, {
                      key: 'loading',
                      clsPrefix: mergedClsPrefix,
                      strokeWidth: 20
                    })
                  : null
            }
          ),
          checkedSlot &&
            h(
              'div',
              { key: 'checked', class: `${mergedClsPrefix}-switch__checked` },
              checkedSlot()
            ),
          uncheckedSlot &&
            h(
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
