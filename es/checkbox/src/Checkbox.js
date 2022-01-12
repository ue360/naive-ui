import {
  h,
  defineComponent,
  computed,
  inject,
  ref,
  toRef,
  renderSlot,
  watchEffect
} from 'vue'
import { useMergedState, useMemo } from 'vooks'
import { createId } from 'seemly'
import { useConfig, useFormItem, useTheme } from '../../_mixins'
import { NIconSwitchTransition } from '../../_internal'
import { call, createKey, warnOnce } from '../../_utils'
import { checkboxLight } from '../styles'
import CheckMark from './CheckMark'
import LineMark from './LineMark'
import { checkboxGroupInjectionKey } from './CheckboxGroup'
import style from './styles/index.cssr'
import { on } from 'evtd'
const checkboxProps = Object.assign(Object.assign({}, useTheme.props), {
  size: String,
  checked: {
    type: [Boolean, String, Number],
    default: undefined
  },
  defaultChecked: {
    type: [Boolean, String, Number],
    default: false
  },
  value: [String, Number],
  disabled: {
    type: Boolean,
    default: undefined
  },
  indeterminate: Boolean,
  label: String,
  focusable: {
    type: Boolean,
    default: true
  },
  checkedValue: {
    type: [Boolean, String, Number],
    default: true
  },
  uncheckedValue: {
    type: [Boolean, String, Number],
    default: false
  },
  'onUpdate:checked': [Function, Array],
  onUpdateChecked: [Function, Array],
  // private
  privateInsideTable: Boolean,
  // deprecated
  onChange: [Function, Array]
})
export default defineComponent({
  name: 'Checkbox',
  props: checkboxProps,
  setup(props) {
    if (process.env.NODE_ENV !== 'production') {
      watchEffect(() => {
        if (props.onChange) {
          warnOnce(
            'checkbox',
            '`on-change` is deprecated, please use `on-update:checked` instead.'
          )
        }
      })
    }
    const { mergedClsPrefixRef } = useConfig(props)
    const formItem = useFormItem(props, {
      mergedSize(NFormItem) {
        const { size } = props
        if (size !== undefined) return size
        if (NCheckboxGroup) {
          const { value: mergedSize } = NCheckboxGroup.mergedSizeRef
          if (mergedSize !== undefined) {
            return mergedSize
          }
        }
        if (NFormItem) {
          const { mergedSize } = NFormItem
          if (mergedSize !== undefined) return mergedSize.value
        }
        return 'medium'
      },
      mergedDisabled(NFormItem) {
        const { disabled } = props
        if (disabled !== undefined) return disabled
        if (NCheckboxGroup) {
          if (NCheckboxGroup.disabledRef.value) return true
          const {
            maxRef: { value: max },
            checkedCountRef
          } = NCheckboxGroup
          if (
            max !== undefined &&
            checkedCountRef.value >= max &&
            !renderedCheckedRef.value
          ) {
            return true
          }
          const {
            minRef: { value: min }
          } = NCheckboxGroup
          if (
            min !== undefined &&
            checkedCountRef.value <= min &&
            renderedCheckedRef.value
          ) {
            return true
          }
        }
        if (NFormItem) {
          return NFormItem.disabled.value
        }
        return false
      }
    })
    const { mergedDisabledRef, mergedSizeRef } = formItem
    const NCheckboxGroup = inject(checkboxGroupInjectionKey, null)
    const uncontrolledCheckedRef = ref(props.defaultChecked)
    const controlledCheckedRef = toRef(props, 'checked')
    const mergedCheckedRef = useMergedState(
      controlledCheckedRef,
      uncontrolledCheckedRef
    )
    const renderedCheckedRef = useMemo(() => {
      if (NCheckboxGroup) {
        const groupValueSet = NCheckboxGroup.valueSetRef.value
        if (groupValueSet && props.value !== undefined) {
          return groupValueSet.has(props.value)
        }
        return false
      } else {
        return mergedCheckedRef.value === props.checkedValue
      }
    })
    const themeRef = useTheme(
      'Checkbox',
      'Checkbox',
      style,
      checkboxLight,
      props,
      mergedClsPrefixRef
    )
    function toggle(e) {
      if (NCheckboxGroup && props.value !== undefined) {
        NCheckboxGroup.toggleCheckbox(!renderedCheckedRef.value, props.value)
      } else {
        const {
          onChange,
          'onUpdate:checked': _onUpdateCheck,
          onUpdateChecked
        } = props
        const { nTriggerFormInput, nTriggerFormChange } = formItem
        const nextChecked = renderedCheckedRef.value
          ? props.uncheckedValue
          : props.checkedValue
        if (_onUpdateCheck) {
          call(_onUpdateCheck, nextChecked, e)
        }
        if (onUpdateChecked) {
          call(onUpdateChecked, nextChecked, e)
        }
        if (onChange) call(onChange, nextChecked, e) // deprecated
        nTriggerFormInput()
        nTriggerFormChange()
        uncontrolledCheckedRef.value = nextChecked
      }
    }
    function handleClick(e) {
      if (!mergedDisabledRef.value) {
        toggle(e)
      }
    }
    function handleKeyUp(e) {
      if (mergedDisabledRef.value) return
      switch (e.code) {
        case 'Space':
        case 'Enter':
        case 'NumpadEnter':
          toggle(e)
      }
    }
    function handleKeyDown(e) {
      switch (e.code) {
        case 'Space':
          e.preventDefault()
      }
    }
    return Object.assign(formItem, {
      mergedClsPrefix: mergedClsPrefixRef,
      mergedDisabled: mergedDisabledRef,
      renderedChecked: renderedCheckedRef,
      mergedTheme: themeRef,
      labelId: createId(),
      handleClick,
      handleKeyUp,
      handleKeyDown,
      cssVars: computed(() => {
        const { value: mergedSize } = mergedSizeRef
        const {
          common: { cubicBezierEaseInOut },
          self: {
            borderRadius,
            color,
            colorChecked,
            colorDisabled,
            colorTableHeader,
            colorTableHeaderModal,
            colorTableHeaderPopover,
            checkMarkColor,
            checkMarkColorDisabled,
            border,
            borderFocus,
            borderDisabled,
            borderChecked,
            boxShadowFocus,
            textColor,
            textColorDisabled,
            checkMarkColorDisabledChecked,
            colorDisabledChecked,
            borderDisabledChecked,
            labelPadding,
            [createKey('fontSize', mergedSize)]: fontSize,
            [createKey('size', mergedSize)]: size
          }
        } = themeRef.value
        return {
          '--size': size,
          '--bezier': cubicBezierEaseInOut,
          '--border-radius': borderRadius,
          '--border': border,
          '--border-checked': borderChecked,
          '--border-focus': borderFocus,
          '--border-disabled': borderDisabled,
          '--border-disabled-checked': borderDisabledChecked,
          '--box-shadow-focus': boxShadowFocus,
          '--color': color,
          '--color-checked': colorChecked,
          '--color-table-header': colorTableHeader,
          '--color-table-header-modal': colorTableHeaderModal,
          '--color-table-header-popover': colorTableHeaderPopover,
          '--color-disabled': colorDisabled,
          '--color-disabled-checked': colorDisabledChecked,
          '--text-color': textColor,
          '--text-color-disabled': textColorDisabled,
          '--check-mark-color': checkMarkColor,
          '--check-mark-color-disabled': checkMarkColorDisabled,
          '--check-mark-color-disabled-checked': checkMarkColorDisabledChecked,
          '--font-size': fontSize,
          '--label-padding': labelPadding
        }
      })
    })
  },
  render() {
    const {
      $slots,
      renderedChecked,
      mergedDisabled,
      indeterminate,
      privateInsideTable,
      cssVars,
      labelId,
      label,
      mergedClsPrefix,
      focusable,
      handleKeyUp,
      handleKeyDown,
      handleClick
    } = this
    return h(
      'div',
      {
        class: [
          `${mergedClsPrefix}-checkbox`,
          renderedChecked && `${mergedClsPrefix}-checkbox--checked`,
          mergedDisabled && `${mergedClsPrefix}-checkbox--disabled`,
          indeterminate && `${mergedClsPrefix}-checkbox--indeterminate`,
          privateInsideTable && `${mergedClsPrefix}-checkbox--table-header`
        ],
        tabindex: mergedDisabled || !focusable ? undefined : 0,
        role: 'checkbox',
        'aria-checked': indeterminate ? 'mixed' : renderedChecked,
        'aria-labelledby': labelId,
        style: cssVars,
        onKeyup: handleKeyUp,
        onKeydown: handleKeyDown,
        onClick: handleClick,
        onMousedown: () => {
          on(
            'selectstart',
            window,
            (e) => {
              e.preventDefault()
            },
            {
              once: true
            }
          )
        }
      },
      h(
        'div',
        { class: `${mergedClsPrefix}-checkbox-box` },
        h(NIconSwitchTransition, null, {
          default: () =>
            this.indeterminate
              ? h(
                  'div',
                  {
                    key: 'indeterminate',
                    class: `${mergedClsPrefix}-checkbox-icon`
                  },
                  LineMark
                )
              : h(
                  'div',
                  { key: 'check', class: `${mergedClsPrefix}-checkbox-icon` },
                  CheckMark
                )
        }),
        h('div', { class: `${mergedClsPrefix}-checkbox-box__border` })
      ),
      label !== null || $slots.default
        ? h(
            'span',
            { class: `${mergedClsPrefix}-checkbox__label`, id: labelId },
            renderSlot($slots, 'default', undefined, () => [label])
          )
        : null
    )
  }
})
