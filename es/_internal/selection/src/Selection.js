/* eslint-disable @typescript-eslint/no-non-null-assertion */
import {
  h,
  defineComponent,
  Fragment,
  ref,
  computed,
  watch,
  toRef,
  nextTick,
  watchEffect,
  onMounted
} from 'vue'
import { VOverflow } from 'vueuc'
import { NPopover } from '../../../popover'
import { NTag } from '../../../tag'
import { useTheme } from '../../../_mixins'
import { createKey, getTitleAttribute, render } from '../../../_utils'
import Suffix from '../../suffix'
import { internalSelectionLight } from '../styles'
import style from './styles/index.cssr'
export default defineComponent({
  name: 'InternalSelection',
  props: Object.assign(Object.assign({}, useTheme.props), {
    clsPrefix: {
      type: String,
      required: true
    },
    bordered: {
      type: Boolean,
      default: undefined
    },
    active: Boolean,
    pattern: {
      type: String,
      default: null
    },
    placeholder: String,
    selectedOption: {
      type: Object,
      default: null
    },
    selectedOptions: {
      type: Array,
      default: null
    },
    multiple: Boolean,
    filterable: Boolean,
    clearable: Boolean,
    disabled: Boolean,
    size: {
      type: String,
      default: 'medium'
    },
    loading: Boolean,
    autofocus: Boolean,
    showArrow: {
      type: Boolean,
      default: true
    },
    inputProps: Object,
    focused: Boolean,
    renderTag: Function,
    onKeyup: Function,
    onKeydown: Function,
    onClick: Function,
    onBlur: Function,
    onFocus: Function,
    onDeleteOption: Function,
    maxTagCount: [String, Number],
    onClear: Function,
    onPatternInput: Function,
    renderLabel: Function
  }),
  setup(props) {
    const patternInputMirrorRef = ref(null)
    const patternInputRef = ref(null)
    const selfRef = ref(null)
    const multipleElRef = ref(null)
    const singleElRef = ref(null)
    const patternInputWrapperRef = ref(null)
    const counterRef = ref(null)
    const counterWrapperRef = ref(null)
    const overflowRef = ref(null)
    const inputTagElRef = ref(null)
    const showTagsPopoverRef = ref(false)
    const patternInputFocusedRef = ref(false)
    const hoverRef = ref(false)
    const themeRef = useTheme(
      'InternalSelection',
      'InternalSelection',
      style,
      internalSelectionLight,
      props,
      toRef(props, 'clsPrefix')
    )
    const mergedClearableRef = computed(() => {
      return (
        props.clearable && !props.disabled && (hoverRef.value || props.active)
      )
    })
    const filterablePlaceholderRef = computed(() => {
      return props.selectedOption
        ? props.renderTag
          ? props.renderTag({
              option: props.selectedOption,
              handleClose: () => {}
            })
          : props.renderLabel
          ? props.renderLabel(props.selectedOption, true)
          : render(props.selectedOption.label, props.selectedOption, true)
        : props.placeholder
    })
    const labelRef = computed(() => {
      const option = props.selectedOption
      if (!option) return undefined
      return option.label
    })
    const selectedRef = computed(() => {
      if (props.multiple) {
        return !!(
          Array.isArray(props.selectedOptions) && props.selectedOptions.length
        )
      } else {
        return props.selectedOption !== null
      }
    })
    function syncMirrorWidth() {
      var _a
      const { value: patternInputMirrorEl } = patternInputMirrorRef
      if (patternInputMirrorEl) {
        const { value: patternInputEl } = patternInputRef
        if (patternInputEl) {
          patternInputEl.style.width = `${patternInputMirrorEl.offsetWidth}px`
          if (props.maxTagCount !== 'responsive') {
            ;(_a = overflowRef.value) === null || _a === void 0
              ? void 0
              : _a.sync()
          }
        }
      }
    }
    function hideInputTag() {
      const { value: inputTagEl } = inputTagElRef
      if (inputTagEl) inputTagEl.style.display = 'none'
    }
    function showInputTag() {
      const { value: inputTagEl } = inputTagElRef
      if (inputTagEl) inputTagEl.style.display = 'inline-block'
    }
    watch(toRef(props, 'active'), (value) => {
      if (!value) hideInputTag()
    })
    watch(toRef(props, 'pattern'), () => {
      if (props.multiple) {
        void nextTick(syncMirrorWidth)
      }
    })
    function doFocus(e) {
      const { onFocus } = props
      if (onFocus) onFocus(e)
    }
    function doBlur(e) {
      const { onBlur } = props
      if (onBlur) onBlur(e)
    }
    function doDeleteOption(value) {
      const { onDeleteOption } = props
      if (onDeleteOption) onDeleteOption(value)
    }
    function doClear(e) {
      const { onClear } = props
      if (onClear) onClear(e)
    }
    function doPatternInput(value) {
      const { onPatternInput } = props
      if (onPatternInput) onPatternInput(value)
    }
    function handleFocusin(e) {
      var _a
      if (
        !e.relatedTarget ||
        !((_a = selfRef.value) === null || _a === void 0
          ? void 0
          : _a.contains(e.relatedTarget))
      ) {
        doFocus(e)
      }
    }
    function handleFocusout(e) {
      var _a
      if (
        (_a = selfRef.value) === null || _a === void 0
          ? void 0
          : _a.contains(e.relatedTarget)
      )
        return
      doBlur(e)
    }
    function handleClear(e) {
      doClear(e)
    }
    function handleMouseEnter() {
      hoverRef.value = true
    }
    function handleMouseLeave() {
      hoverRef.value = false
    }
    function handleMouseDown(e) {
      if (!props.active || !props.filterable) return
      if (e.target === patternInputRef.value) return
      e.preventDefault()
    }
    function handleDeleteOption(option) {
      doDeleteOption(option)
    }
    function handlePatternKeyDown(e) {
      if (e.code === 'Backspace') {
        if (!props.pattern.length) {
          const { selectedOptions } = props
          if (
            selectedOptions === null || selectedOptions === void 0
              ? void 0
              : selectedOptions.length
          ) {
            handleDeleteOption(selectedOptions[selectedOptions.length - 1])
          }
        }
      }
    }
    const isCompositingRef = ref(false)
    // the composition end is later than its input so we can cached the event
    // and return the input event
    let cachedInputEvent = null
    function handlePatternInputInput(e) {
      // we should sync mirror width here
      const { value: patternInputMirrorEl } = patternInputMirrorRef
      if (patternInputMirrorEl) {
        const inputText = e.target.value
        patternInputMirrorEl.textContent = inputText
        syncMirrorWidth()
      }
      if (!isCompositingRef.value) {
        doPatternInput(e)
      } else {
        cachedInputEvent = e
      }
    }
    function handleCompositionStart() {
      isCompositingRef.value = true
    }
    function handleCompositionEnd() {
      isCompositingRef.value = false
      doPatternInput(cachedInputEvent)
      cachedInputEvent = null
    }
    function handlePatternInputFocus() {
      patternInputFocusedRef.value = true
    }
    function handlePatternInputBlur(e) {
      patternInputFocusedRef.value = false
    }
    function focus() {
      if (props.filterable) {
        patternInputFocusedRef.value = false
        const { value: patternInputWrapperEl } = patternInputWrapperRef
        if (patternInputWrapperEl) patternInputWrapperEl.focus()
      } else if (props.multiple) {
        const { value: multipleEl } = multipleElRef
        multipleEl === null || multipleEl === void 0
          ? void 0
          : multipleEl.focus()
      } else {
        const { value: singleEl } = singleElRef
        singleEl === null || singleEl === void 0 ? void 0 : singleEl.focus()
      }
    }
    function focusInput() {
      const { value: patternInputEl } = patternInputRef
      if (patternInputEl) {
        showInputTag()
        patternInputEl.focus()
      }
    }
    function blurInput() {
      const { value: patternInputEl } = patternInputRef
      if (patternInputEl) {
        patternInputEl.blur()
      }
    }
    function updateCounter(count) {
      const { value } = counterRef
      if (value) {
        value.setTextContent(`+${count}`)
      }
    }
    function getCounter() {
      const { value } = counterWrapperRef
      return value
    }
    function getTail() {
      return patternInputRef.value
    }
    let enterTimerId = null
    function clearEnterTimer() {
      if (enterTimerId !== null) window.clearTimeout(enterTimerId)
    }
    function handleMouseEnterCounter() {
      if (props.disabled || props.active) return
      clearEnterTimer()
      enterTimerId = window.setTimeout(() => {
        showTagsPopoverRef.value = true
      }, 100)
    }
    function handleMouseLeaveCounter() {
      clearEnterTimer()
    }
    function onPopoverUpdateShow(show) {
      if (!show) {
        clearEnterTimer()
        showTagsPopoverRef.value = false
      }
    }
    onMounted(() => {
      watchEffect(() => {
        const patternInputWrapperEl = patternInputWrapperRef.value
        if (!patternInputWrapperEl) return
        patternInputWrapperEl.tabIndex =
          props.disabled || patternInputFocusedRef.value ? -1 : 0
      })
    })
    return {
      mergedTheme: themeRef,
      mergedClearable: mergedClearableRef,
      patternInputFocused: patternInputFocusedRef,
      filterablePlaceholder: filterablePlaceholderRef,
      label: labelRef,
      selected: selectedRef,
      showTagsPanel: showTagsPopoverRef,
      isCompositing: isCompositingRef,
      // dom ref
      counterRef,
      counterWrapperRef,
      patternInputMirrorRef,
      patternInputRef,
      selfRef,
      multipleElRef,
      singleElRef,
      patternInputWrapperRef,
      overflowRef,
      inputTagElRef,
      handleMouseDown,
      handleFocusin,
      handleClear,
      handleMouseEnter,
      handleMouseLeave,
      handleDeleteOption,
      handlePatternKeyDown,
      handlePatternInputInput,
      handlePatternInputBlur,
      handlePatternInputFocus,
      handleMouseEnterCounter,
      handleMouseLeaveCounter,
      handleFocusout,
      handleCompositionEnd,
      handleCompositionStart,
      onPopoverUpdateShow,
      focus,
      focusInput,
      blurInput,
      updateCounter,
      getCounter,
      getTail,
      renderLabel: props.renderLabel,
      cssVars: computed(() => {
        const { size } = props
        const {
          common: { cubicBezierEaseInOut },
          self: {
            borderRadius,
            color,
            placeholderColor,
            textColor,
            paddingSingle,
            caretColor,
            colorDisabled,
            textColorDisabled,
            placeholderColorDisabled,
            colorActive,
            boxShadowFocus,
            boxShadowActive,
            boxShadowHover,
            border,
            borderFocus,
            borderHover,
            borderActive,
            arrowColor,
            arrowColorDisabled,
            loadingColor,
            // form warning
            colorActiveWarning,
            boxShadowFocusWarning,
            boxShadowActiveWarning,
            boxShadowHoverWarning,
            borderWarning,
            borderFocusWarning,
            borderHoverWarning,
            borderActiveWarning,
            // form error
            colorActiveError,
            boxShadowFocusError,
            boxShadowActiveError,
            boxShadowHoverError,
            borderError,
            borderFocusError,
            borderHoverError,
            borderActiveError,
            // clear
            clearColor,
            clearColorHover,
            clearColorPressed,
            clearSize,
            // arrow
            arrowSize,
            [createKey('height', size)]: height,
            [createKey('fontSize', size)]: fontSize
          }
        } = themeRef.value
        return {
          '--bezier': cubicBezierEaseInOut,
          '--border': border,
          '--border-active': borderActive,
          '--border-focus': borderFocus,
          '--border-hover': borderHover,
          '--border-radius': borderRadius,
          '--box-shadow-active': boxShadowActive,
          '--box-shadow-focus': boxShadowFocus,
          '--box-shadow-hover': boxShadowHover,
          '--caret-color': caretColor,
          '--color': color,
          '--color-active': colorActive,
          '--color-disabled': colorDisabled,
          '--font-size': fontSize,
          '--height': height,
          '--padding-single': paddingSingle,
          '--placeholder-color': placeholderColor,
          '--placeholder-color-disabled': placeholderColorDisabled,
          '--text-color': textColor,
          '--text-color-disabled': textColorDisabled,
          '--arrow-color': arrowColor,
          '--arrow-color-disabled': arrowColorDisabled,
          '--loading-color': loadingColor,
          // form warning
          '--color-active-warning': colorActiveWarning,
          '--box-shadow-focus-warning': boxShadowFocusWarning,
          '--box-shadow-active-warning': boxShadowActiveWarning,
          '--box-shadow-hover-warning': boxShadowHoverWarning,
          '--border-warning': borderWarning,
          '--border-focus-warning': borderFocusWarning,
          '--border-hover-warning': borderHoverWarning,
          '--border-active-warning': borderActiveWarning,
          // form error
          '--color-active-error': colorActiveError,
          '--box-shadow-focus-error': boxShadowFocusError,
          '--box-shadow-active-error': boxShadowActiveError,
          '--box-shadow-hover-error': boxShadowHoverError,
          '--border-error': borderError,
          '--border-focus-error': borderFocusError,
          '--border-hover-error': borderHoverError,
          '--border-active-error': borderActiveError,
          // clear
          '--clear-size': clearSize,
          '--clear-color': clearColor,
          '--clear-color-hover': clearColorHover,
          '--clear-color-pressed': clearColorPressed,
          // arrow-size
          '--arrow-size': arrowSize
        }
      })
    }
  },
  render() {
    const {
      multiple,
      size,
      disabled,
      filterable,
      maxTagCount,
      bordered,
      clsPrefix,
      renderTag,
      renderLabel
    } = this
    const maxTagCountResponsive = maxTagCount === 'responsive'
    const maxTagCountNumeric = typeof maxTagCount === 'number'
    const useMaxTagCount = maxTagCountResponsive || maxTagCountNumeric
    const suffix = h(Suffix, {
      clsPrefix: clsPrefix,
      loading: this.loading,
      showArrow: this.showArrow,
      showClear: this.mergedClearable && this.selected,
      onClear: this.handleClear
    })
    let body
    if (multiple) {
      const createTag = (option) =>
        h(
          'div',
          {
            class: `${clsPrefix}-base-selection-tag-wrapper`,
            key: option.value
          },
          renderTag
            ? renderTag({
                option,
                handleClose: () => this.handleDeleteOption(option)
              })
            : h(
                NTag,
                {
                  size: size,
                  closable: !option.disabled,
                  disabled: disabled,
                  internalStopClickPropagation: true,
                  onClose: () => this.handleDeleteOption(option)
                },
                {
                  default: () =>
                    renderLabel
                      ? renderLabel(option, true)
                      : render(option.label, option, true)
                }
              )
        )
      const originalTags = (
        maxTagCountNumeric
          ? this.selectedOptions.slice(0, maxTagCount)
          : this.selectedOptions
      ).map(createTag)
      const input = filterable
        ? h(
            'div',
            {
              class: `${clsPrefix}-base-selection-input-tag`,
              ref: 'inputTagElRef',
              key: '__input-tag__'
            },
            h(
              'input',
              Object.assign({}, this.inputProps, {
                ref: 'patternInputRef',
                tabindex: -1,
                disabled: disabled,
                value: this.pattern,
                autofocus: this.autofocus,
                class: `${clsPrefix}-base-selection-input-tag__input`,
                onBlur: this.handlePatternInputBlur,
                onFocus: this.handlePatternInputFocus,
                onKeydown: this.handlePatternKeyDown,
                onInput: this.handlePatternInputInput,
                onCompositionstart: this.handleCompositionStart,
                onCompositionend: this.handleCompositionEnd
              })
            ),
            h(
              'span',
              {
                ref: 'patternInputMirrorRef',
                class: `${clsPrefix}-base-selection-input-tag__mirror`
              },
              this.pattern ? this.pattern : ''
            )
          )
        : null
      // May Overflow
      const renderCounter = maxTagCountResponsive
        ? () =>
            h(
              'div',
              {
                class: `${clsPrefix}-base-selection-tag-wrapper`,
                ref: 'counterWrapperRef'
              },
              h(NTag, {
                ref: 'counterRef',
                onMouseenter: this.handleMouseEnterCounter,
                onMouseleave: this.handleMouseLeaveCounter,
                disabled: disabled
              })
            )
        : undefined
      let counter
      if (maxTagCountNumeric) {
        const rest = this.selectedOptions.length - maxTagCount
        if (rest > 0) {
          counter = h(
            'div',
            {
              class: `${clsPrefix}-base-selection-tag-wrapper`,
              key: '__counter__'
            },
            h(
              NTag,
              {
                ref: 'counterRef',
                onMouseenter: this.handleMouseEnterCounter,
                disabled: disabled
              },
              {
                default: () => `+${rest}`
              }
            )
          )
        }
      }
      const tags = maxTagCountResponsive
        ? filterable
          ? h(
              VOverflow,
              {
                ref: 'overflowRef',
                updateCounter: this.updateCounter,
                getCounter: this.getCounter,
                getTail: this.getTail,
                style: {
                  width: '100%',
                  display: 'flex',
                  overflow: 'hidden'
                }
              },
              {
                default: () => originalTags,
                counter: renderCounter,
                tail: () => input
              }
            )
          : h(
              VOverflow,
              {
                ref: 'overflowRef',
                updateCounter: this.updateCounter,
                getCounter: this.getCounter,
                style: {
                  width: '100%',
                  display: 'flex',
                  overflow: 'hidden'
                }
              },
              {
                default: () => originalTags,
                counter: renderCounter
              }
            )
        : maxTagCountNumeric
        ? originalTags.concat(counter)
        : originalTags
      const renderPopover = useMaxTagCount
        ? () =>
            h(
              'div',
              { class: `${clsPrefix}-base-selection-popover` },
              maxTagCountResponsive
                ? originalTags
                : this.selectedOptions.map(createTag)
            )
        : undefined
      const popoverProps = useMaxTagCount
        ? {
            show: this.showTagsPanel,
            trigger: 'hover',
            overlap: true,
            placement: 'top',
            width: 'trigger',
            onUpdateShow: this.onPopoverUpdateShow,
            theme: this.mergedTheme.peers.Popover,
            themeOverrides: this.mergedTheme.peerOverrides.Popover
          }
        : null
      const placeholder =
        !this.selected && !this.pattern && !this.isCompositing
          ? h(
              'div',
              {
                class: `${clsPrefix}-base-selection-placeholder ${clsPrefix}-base-selection-overlay`
              },
              this.placeholder
            )
          : null
      if (filterable) {
        const popoverTrigger = h(
          'div',
          {
            ref: 'patternInputWrapperRef',
            class: `${clsPrefix}-base-selection-tags`
          },
          tags,
          maxTagCountResponsive ? null : input,
          suffix
        )
        body = h(
          Fragment,
          null,
          useMaxTagCount
            ? h(NPopover, Object.assign({}, popoverProps), {
                trigger: () => popoverTrigger,
                default: renderPopover
              })
            : popoverTrigger,
          placeholder
        )
      } else {
        const popoverTrigger = h(
          'div',
          {
            ref: 'multipleElRef',
            class: `${clsPrefix}-base-selection-tags`,
            tabindex: disabled ? undefined : 0
          },
          tags,
          suffix
        )
        body = h(
          Fragment,
          null,
          useMaxTagCount
            ? h(NPopover, Object.assign({}, popoverProps), {
                trigger: () => popoverTrigger,
                default: renderPopover
              })
            : popoverTrigger,
          placeholder
        )
      }
    } else {
      if (filterable) {
        const showPlaceholder =
          !this.pattern &&
          (this.active || !this.selected) &&
          !this.isCompositing
        body = h(
          'div',
          {
            ref: 'patternInputWrapperRef',
            class: `${clsPrefix}-base-selection-label`
          },
          h(
            'input',
            Object.assign({}, this.inputProps, {
              ref: 'patternInputRef',
              class: `${clsPrefix}-base-selection-input`,
              value:
                this.patternInputFocused && this.active ? this.pattern : '',
              placeholder: '',
              readonly: disabled,
              disabled: disabled,
              tabindex: -1,
              autofocus: this.autofocus,
              onFocus: this.handlePatternInputFocus,
              onBlur: this.handlePatternInputBlur,
              onInput: this.handlePatternInputInput,
              onCompositionstart: this.handleCompositionStart,
              onCompositionend: this.handleCompositionEnd
            })
          ),
          showPlaceholder
            ? null
            : this.patternInputFocused && this.active
            ? null
            : h(
                'div',
                {
                  class: `${clsPrefix}-base-selection-label__render-label ${clsPrefix}-base-selection-overlay`,
                  key: 'input'
                },
                renderTag
                  ? renderTag({
                      option: this.selectedOption,
                      handleClose: () => {}
                    })
                  : renderLabel
                  ? renderLabel(this.selectedOption, true)
                  : render(this.label, this.selectedOption, true)
              ),
          showPlaceholder
            ? h(
                'div',
                {
                  class: `${clsPrefix}-base-selection-placeholder ${clsPrefix}-base-selection-overlay`,
                  key: 'placeholder'
                },
                this.filterablePlaceholder
              )
            : null,
          suffix
        )
      } else {
        body = h(
          'div',
          {
            ref: 'singleElRef',
            class: `${clsPrefix}-base-selection-label`,
            tabindex: this.disabled ? undefined : 0
          },
          this.label !== undefined
            ? h(
                'div',
                {
                  class: `${clsPrefix}-base-selection-input`,
                  title: getTitleAttribute(this.label),
                  key: 'input'
                },
                h(
                  'div',
                  { class: `${clsPrefix}-base-selection-input__content` },
                  renderTag
                    ? renderTag({
                        option: this.selectedOption,
                        handleClose: () => {}
                      })
                    : renderLabel
                    ? renderLabel(this.selectedOption, true)
                    : render(this.label, this.selectedOption, true)
                )
              )
            : h(
                'div',
                {
                  class: `${clsPrefix}-base-selection-placeholder ${clsPrefix}-base-selection-overlay`,
                  key: 'placeholder'
                },
                this.placeholder
              ),
          suffix
        )
      }
    }
    return h(
      'div',
      {
        ref: 'selfRef',
        class: [
          `${clsPrefix}-base-selection`,
          {
            [`${clsPrefix}-base-selection--active`]: this.active,
            [`${clsPrefix}-base-selection--selected`]:
              this.selected || (this.active && this.pattern),
            [`${clsPrefix}-base-selection--disabled`]: this.disabled,
            [`${clsPrefix}-base-selection--multiple`]: this.multiple,
            // focus is not controlled by selection itself since it always need
            // to be managed together with menu. provide :focus style will cause
            // many redundant codes.
            [`${clsPrefix}-base-selection--focus`]: this.focused
          }
        ],
        style: this.cssVars,
        onClick: this.onClick,
        onMouseenter: this.handleMouseEnter,
        onMouseleave: this.handleMouseLeave,
        onKeyup: this.onKeyup,
        onKeydown: this.onKeydown,
        onFocusin: this.handleFocusin,
        onFocusout: this.handleFocusout,
        onMousedown: this.handleMouseDown
      },
      body,
      bordered
        ? h('div', { class: `${clsPrefix}-base-selection__border` })
        : null,
      bordered
        ? h('div', { class: `${clsPrefix}-base-selection__state-border` })
        : null
    )
  }
})