import {
  h,
  ref,
  toRef,
  computed,
  defineComponent,
  Transition,
  withDirectives
} from 'vue'
import { createTreeMate } from 'treemate'
import { VBinder, VTarget, VFollower } from 'vueuc'
import { clickoutside } from 'vdirs'
import { useIsMounted, useMergedState } from 'vooks'
import { useFormItem, useTheme, useConfig } from '../../_mixins'
import { call, warn, useAdjustedTo, getFirstSlotVNode } from '../../_utils'
import { NInternalSelectMenu } from '../../_internal'
import { NInput } from '../../input'
import { autoCompleteLight } from '../styles'
import { mapAutoCompleteOptionsToSelectOptions } from './utils'
import style from './styles/index.cssr'
import { tmOptions } from '../../select/src/utils'
const autoCompleteProps = Object.assign(Object.assign({}, useTheme.props), {
  to: useAdjustedTo.propTo,
  bordered: {
    type: Boolean,
    default: undefined
  },
  clearable: {
    type: Boolean,
    default: undefined
  },
  defaultValue: {
    type: String,
    default: null
  },
  loading: {
    type: Boolean,
    default: undefined
  },
  disabled: {
    type: Boolean,
    default: undefined
  },
  placeholder: String,
  value: String,
  blurAfterSelect: Boolean,
  clearAfterSelect: Boolean,
  getShow: Function,
  inputProps: Object,
  size: String,
  options: {
    type: Array,
    default: () => []
  },
  zIndex: Number,
  'onUpdate:value': [Function, Array],
  onUpdateValue: [Function, Array],
  onSelect: [Function, Array],
  onBlur: [Function, Array],
  onFocus: [Function, Array],
  // deprecated
  onInput: {
    type: [Function, Array],
    validator: () => {
      if (process.env.NODE_ENV !== 'production') {
        warn(
          'auto-complete',
          '`on-input` is deprecated, please use `on-update:value` instead.'
        )
      }
      return true
    },
    default: undefined
  }
})
export default defineComponent({
  name: 'AutoComplete',
  props: autoCompleteProps,
  setup(props) {
    const { mergedBorderedRef, namespaceRef, mergedClsPrefixRef } =
      useConfig(props)
    const formItem = useFormItem(props)
    const { mergedSizeRef, mergedDisabledRef } = formItem
    const triggerElRef = ref(null)
    const menuInstRef = ref(null)
    const uncontrolledValueRef = ref(props.defaultValue)
    const controlledValueRef = toRef(props, 'value')
    const mergedValueRef = useMergedState(
      controlledValueRef,
      uncontrolledValueRef
    )
    const canBeActivatedRef = ref(false)
    const isComposingRef = ref(false)
    const themeRef = useTheme(
      'AutoComplete',
      'AutoComplete',
      style,
      autoCompleteLight,
      props,
      mergedClsPrefixRef
    )
    const selectOptionsRef = computed(() => {
      return mapAutoCompleteOptionsToSelectOptions(props.options)
    })
    const mergedShowOptionsRef = computed(() => {
      const { getShow } = props
      if (getShow) {
        return getShow(mergedValueRef.value || '')
      }
      return !!mergedValueRef.value
    })
    const activeRef = computed(() => {
      return (
        mergedShowOptionsRef.value &&
        canBeActivatedRef.value &&
        !!selectOptionsRef.value.length
      )
    })
    const treeMateRef = computed(() =>
      createTreeMate(selectOptionsRef.value, tmOptions)
    )
    function doUpdateValue(value) {
      const { 'onUpdate:value': _onUpdateValue, onUpdateValue, onInput } = props
      const { nTriggerFormInput, nTriggerFormChange } = formItem
      if (onUpdateValue) call(onUpdateValue, value)
      if (_onUpdateValue) call(_onUpdateValue, value)
      if (onInput) call(onInput, value)
      uncontrolledValueRef.value = value
      nTriggerFormInput()
      nTriggerFormChange()
    }
    function doSelect(value) {
      const { onSelect } = props
      const { nTriggerFormInput, nTriggerFormChange } = formItem
      if (onSelect) call(onSelect, value)
      nTriggerFormInput()
      nTriggerFormChange()
    }
    function doBlur(e) {
      const { onBlur } = props
      const { nTriggerFormBlur } = formItem
      if (onBlur) call(onBlur, e)
      nTriggerFormBlur()
    }
    function doFocus(e) {
      const { onFocus } = props
      const { nTriggerFormFocus } = formItem
      if (onFocus) call(onFocus, e)
      nTriggerFormFocus()
    }
    function handleCompositionStart() {
      isComposingRef.value = true
    }
    function handleCompositionEnd() {
      window.setTimeout(() => {
        isComposingRef.value = false
      }, 0)
    }
    function handleKeyDown(e) {
      var _a, _b, _c
      switch (e.code) {
        case 'Enter':
        case 'NumpadEnter':
          if (!isComposingRef.value) {
            const pendingOptionTmNode =
              (_a = menuInstRef.value) === null || _a === void 0
                ? void 0
                : _a.getPendingTmNode()
            if (pendingOptionTmNode) {
              select(pendingOptionTmNode.rawNode)
              e.preventDefault()
            }
          }
          break
        case 'ArrowDown':
          ;(_b = menuInstRef.value) === null || _b === void 0
            ? void 0
            : _b.next()
          break
        case 'ArrowUp':
          ;(_c = menuInstRef.value) === null || _c === void 0
            ? void 0
            : _c.prev()
          break
      }
    }
    function select(option) {
      if (option) {
        if (props.clearAfterSelect) {
          doUpdateValue(null)
        } else {
          doUpdateValue(option.label)
        }
        doSelect(option.value)
        canBeActivatedRef.value = false
        if (props.blurAfterSelect) {
          blur()
        }
      }
    }
    function handleClear() {
      doUpdateValue(null)
    }
    function handleFocus(e) {
      canBeActivatedRef.value = true
      doFocus(e)
    }
    function handleBlur(e) {
      canBeActivatedRef.value = false
      doBlur(e)
    }
    function handleInput(value) {
      canBeActivatedRef.value = true
      doUpdateValue(value)
    }
    function handleToggle(option) {
      select(option.rawNode)
    }
    function handleClickOutsideMenu(e) {
      var _a
      if (
        !((_a = triggerElRef.value) === null || _a === void 0
          ? void 0
          : _a.contains(e.target))
      ) {
        canBeActivatedRef.value = false
      }
    }
    function blur() {
      var _a, _b
      if (
        (_a = triggerElRef.value) === null || _a === void 0
          ? void 0
          : _a.contains(document.activeElement)
      ) {
        ;(_b = document.activeElement) === null || _b === void 0
          ? void 0
          : _b.blur()
      }
    }
    return {
      uncontrolledValue: uncontrolledValueRef,
      mergedValue: mergedValueRef,
      isMounted: useIsMounted(),
      adjustedTo: useAdjustedTo(props),
      menuInstRef,
      triggerElRef,
      treeMate: treeMateRef,
      mergedSize: mergedSizeRef,
      mergedDisabled: mergedDisabledRef,
      active: activeRef,
      handleClear,
      handleFocus,
      handleBlur,
      handleInput,
      handleToggle,
      handleClickOutsideMenu,
      handleCompositionStart,
      handleCompositionEnd,
      handleKeyDown,
      mergedTheme: themeRef,
      cssVars: computed(() => {
        const {
          common: { cubicBezierEaseInOut },
          self: { menuBoxShadow }
        } = themeRef.value
        return {
          '--menu-box-shadow': menuBoxShadow,
          '--bezier': cubicBezierEaseInOut
        }
      }),
      mergedBordered: mergedBorderedRef,
      namespace: namespaceRef,
      mergedClsPrefix: mergedClsPrefixRef
    }
  },
  render() {
    const { mergedClsPrefix } = this
    return h(
      'div',
      {
        class: `${mergedClsPrefix}-auto-complete`,
        ref: 'triggerElRef',
        onKeydown: this.handleKeyDown,
        onCompositionstart: this.handleCompositionStart,
        onCompositionend: this.handleCompositionEnd
      },
      h(VBinder, null, {
        default: () => [
          h(VTarget, null, {
            default: () => {
              const defaultSlot = this.$slots.default
              if (defaultSlot) {
                return getFirstSlotVNode(this.$slots, 'default', {
                  handleInput: this.handleInput,
                  handleFocus: this.handleFocus,
                  handleBlur: this.handleBlur,
                  value: this.mergedValue
                })
              }
              const { mergedTheme } = this
              return h(
                NInput,
                {
                  theme: mergedTheme.peers.Input,
                  themeOverrides: mergedTheme.peerOverrides.Input,
                  bordered: this.mergedBordered,
                  value: this.mergedValue,
                  placeholder: this.placeholder,
                  size: this.mergedSize,
                  disabled: this.mergedDisabled,
                  clearable: this.clearable,
                  loading: this.loading,
                  inputProps: this.inputProps,
                  onClear: this.handleClear,
                  onFocus: this.handleFocus,
                  onUpdateValue: this.handleInput,
                  onBlur: this.handleBlur
                },
                {
                  suffix: this.$slots.suffix,
                  prefix: this.$slots.prefix
                }
              )
            }
          }),
          h(
            VFollower,
            {
              show: this.active,
              to: this.adjustedTo,
              containerClass: this.namespace,
              zIndex: this.zIndex,
              teleportDisabled: this.adjustedTo === useAdjustedTo.tdkey,
              placement: 'bottom-start',
              width: 'target'
            },
            {
              default: () =>
                h(
                  Transition,
                  {
                    name: 'fade-in-scale-up-transition',
                    appear: this.isMounted
                  },
                  {
                    default: () =>
                      this.active
                        ? withDirectives(
                            h(NInternalSelectMenu, {
                              clsPrefix: mergedClsPrefix,
                              ref: 'menuInstRef',
                              theme: this.mergedTheme.peers.InternalSelectMenu,
                              themeOverrides:
                                this.mergedTheme.peerOverrides
                                  .InternalSelectMenu,
                              'auto-pending': true,
                              class: `${mergedClsPrefix}-auto-complete-menu`,
                              style: this.cssVars,
                              treeMate: this.treeMate,
                              multiple: false,
                              size: 'medium',
                              onToggle: this.handleToggle
                            }),
                            [[clickoutside, this.handleClickOutsideMenu]]
                          )
                        : null
                  }
                )
            }
          )
        ]
      })
    )
  }
})