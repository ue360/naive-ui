import {
  h,
  computed,
  defineComponent,
  nextTick,
  ref,
  toRef,
  onMounted,
  getCurrentInstance,
  renderSlot,
  watch,
  watchEffect,
  provide
} from 'vue'
import { useMergedState, useMemo } from 'vooks'
import { getPadding } from 'seemly'
import { VResizeObserver } from 'vueuc'
import { NBaseClear, NBaseIcon, NBaseSuffix } from '../../_internal'
import { EyeIcon, EyeOffIcon } from '../../_internal/icons'
import { useTheme, useLocale, useFormItem, useConfig } from '../../_mixins'
import { call, createKey, warnOnce } from '../../_utils'
import { inputLight } from '../styles'
import { inputInjectionKey } from './interface'
import { isEmptyValue } from './utils'
import WordCount from './WordCount'
import style from './styles/input.cssr'
import { off, on } from 'evtd'
const inputProps = Object.assign(Object.assign({}, useTheme.props), {
  bordered: {
    type: Boolean,
    default: undefined
  },
  type: {
    type: String,
    default: 'text'
  },
  placeholder: [Array, String],
  defaultValue: {
    type: [String, Array],
    default: null
  },
  value: [String, Array],
  disabled: {
    type: Boolean,
    default: undefined
  },
  size: String,
  rows: {
    type: [Number, String],
    default: 3
  },
  round: Boolean,
  minlength: [String, Number],
  maxlength: [String, Number],
  clearable: Boolean,
  autosize: {
    type: [Boolean, Object],
    default: false
  },
  pair: Boolean,
  separator: String,
  readonly: {
    type: [String, Boolean],
    default: false
  },
  passivelyActivated: Boolean,
  showPasswordOn: String,
  stateful: {
    type: Boolean,
    default: true
  },
  autofocus: Boolean,
  inputProps: Object,
  resizable: {
    type: Boolean,
    default: true
  },
  showCount: Boolean,
  loading: {
    type: Boolean,
    default: undefined
  },
  onMousedown: Function,
  onKeydown: Function,
  onKeyup: Function,
  onInput: [Function, Array],
  onFocus: [Function, Array],
  onBlur: [Function, Array],
  onClick: [Function, Array],
  onChange: [Function, Array],
  onClear: [Function, Array],
  'onUpdate:value': [Function, Array],
  onUpdateValue: [Function, Array],
  /** private */
  textDecoration: [String, Array],
  attrSize: {
    type: Number,
    default: 20
  },
  onInputBlur: [Function, Array],
  onInputFocus: [Function, Array],
  onDeactivate: [Function, Array],
  onActivate: [Function, Array],
  onWrapperFocus: [Function, Array],
  onWrapperBlur: [Function, Array],
  internalDeactivateOnEnter: Boolean,
  internalForceFocus: Boolean,
  /** deprecated */
  showPasswordToggle: Boolean
})
export default defineComponent({
  name: 'Input',
  props: inputProps,
  setup(props) {
    if (process.env.NODE_ENV !== 'production') {
      watchEffect(() => {
        if (props.showPasswordToggle) {
          warnOnce(
            'input',
            '`show-password-toggle` is deprecated, please use `showPasswordOn="click"` instead'
          )
        }
      })
    }
    const { mergedClsPrefixRef, mergedBorderedRef } = useConfig(props)
    const themeRef = useTheme(
      'Input',
      'Input',
      style,
      inputLight,
      props,
      mergedClsPrefixRef
    )
    // dom refs
    const wrapperElRef = ref(null)
    const textareaElRef = ref(null)
    const textareaMirrorElRef = ref(null)
    const inputMirrorElRef = ref(null)
    const inputElRef = ref(null)
    const inputEl2Ref = ref(null)
    // local
    const { localeRef } = useLocale('Input')
    // value
    const uncontrolledValueRef = ref(props.defaultValue)
    const controlledValueRef = toRef(props, 'value')
    const mergedValueRef = useMergedState(
      controlledValueRef,
      uncontrolledValueRef
    )
    // form-item
    const formItem = useFormItem(props)
    const { mergedSizeRef, mergedDisabledRef } = formItem
    // states
    const focusedRef = ref(false)
    const hoverRef = ref(false)
    const isComposingRef = ref(false)
    const activatedRef = ref(false)
    let syncSource = null
    // placeholder
    const mergedPlaceholderRef = computed(() => {
      const { placeholder, pair } = props
      if (pair) {
        if (Array.isArray(placeholder)) {
          return placeholder
        } else if (placeholder === undefined) {
          return ['', '']
        }
        return [placeholder, placeholder]
      } else if (placeholder === undefined) {
        return [localeRef.value.placeholder]
      } else {
        return [placeholder]
      }
    })
    const showPlaceholder1Ref = computed(() => {
      const { value: isComposing } = isComposingRef
      const { value: mergedValue } = mergedValueRef
      const { value: mergedPlaceholder } = mergedPlaceholderRef
      return (
        !isComposing &&
        (isEmptyValue(mergedValue) ||
          (Array.isArray(mergedValue) && isEmptyValue(mergedValue[0]))) &&
        mergedPlaceholder[0]
      )
    })
    const showPlaceholder2Ref = computed(() => {
      const { value: isComposing } = isComposingRef
      const { value: mergedValue } = mergedValueRef
      const { value: mergedPlaceholder } = mergedPlaceholderRef
      return (
        !isComposing &&
        mergedPlaceholder[1] &&
        (isEmptyValue(mergedValue) ||
          (Array.isArray(mergedValue) && isEmptyValue(mergedValue[1])))
      )
    })
    // focus
    const mergedFocusRef = useMemo(() => {
      return props.internalForceFocus || focusedRef.value
    })
    // clear
    const showClearButton = useMemo(() => {
      if (
        mergedDisabledRef.value ||
        props.readonly ||
        !props.clearable ||
        (!mergedFocusRef.value && !hoverRef.value)
      ) {
        return false
      }
      const { value: mergedValue } = mergedValueRef
      const { value: mergedFocus } = mergedFocusRef
      if (props.pair) {
        return (
          !!(
            Array.isArray(mergedValue) &&
            (mergedValue[0] || mergedValue[1])
          ) &&
          (hoverRef.value || mergedFocus)
        )
      } else {
        return !!mergedValue && (hoverRef.value || mergedFocus)
      }
    })
    // passwordVisible
    const mergedShowPasswordOnRef = computed(() => {
      const { showPasswordOn } = props
      if (showPasswordOn) {
        return showPasswordOn
      }
      if (props.showPasswordToggle) return 'click'
      return undefined
    })
    const passwordVisibleRef = ref(false)
    // text-decoration
    const textDecorationStyleRef = computed(() => {
      const { textDecoration } = props
      if (!textDecoration) return ['', '']
      if (Array.isArray(textDecoration)) {
        return textDecoration.map((v) => ({
          textDecoration: v
        }))
      }
      return [
        {
          textDecoration
        }
      ]
    })
    // textarea autosize
    const updateTextAreaStyle = () => {
      if (props.type === 'textarea') {
        const { autosize } = props
        if (typeof autosize === 'boolean') return
        if (!textareaElRef.value) return
        const {
          paddingTop: stylePaddingTop,
          paddingBottom: stylePaddingBottom,
          lineHeight: styleLineHeight
        } = window.getComputedStyle(textareaElRef.value)
        const paddingTop = Number(stylePaddingTop.slice(0, -2))
        const paddingBottom = Number(stylePaddingBottom.slice(0, -2))
        const lineHeight = Number(styleLineHeight.slice(0, -2))
        const { value: textareaMirrorEl } = textareaMirrorElRef
        if (!textareaMirrorEl) return
        if (autosize.minRows) {
          const minRows = Math.max(autosize.minRows, 1)
          const styleMinHeight = `${
            paddingTop + paddingBottom + lineHeight * minRows
          }px`
          textareaMirrorEl.style.minHeight = styleMinHeight
        }
        if (autosize.maxRows) {
          const styleMaxHeight = `${
            paddingTop + paddingBottom + lineHeight * autosize.maxRows
          }px`
          textareaMirrorEl.style.maxHeight = styleMaxHeight
        }
      }
    }
    // word count
    const maxlengthRef = computed(() => {
      const { maxlength } = props
      return maxlength === undefined ? undefined : Number(maxlength)
    })
    onMounted(() => {
      // sync mirror if is not pair
      const { value } = mergedValueRef
      if (!Array.isArray(value)) {
        syncMirror(value)
      }
    })
    // other methods
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    const vm = getCurrentInstance().proxy
    function doUpdateValue(value) {
      const { onUpdateValue, 'onUpdate:value': _onUpdateValue, onInput } = props
      const { nTriggerFormInput } = formItem
      if (onUpdateValue) call(onUpdateValue, value)
      if (_onUpdateValue) call(_onUpdateValue, value)
      if (onInput) call(onInput, value)
      uncontrolledValueRef.value = value
      nTriggerFormInput()
    }
    function doChange(value) {
      const { onChange } = props
      const { nTriggerFormChange } = formItem
      if (onChange) call(onChange, value)
      uncontrolledValueRef.value = value
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
    function doClear(e) {
      const { onClear } = props
      if (onClear) call(onClear, e)
    }
    function doUpdateValueBlur(e) {
      const { onInputBlur } = props
      if (onInputBlur) call(onInputBlur, e)
    }
    function doUpdateValueFocus(e) {
      const { onInputFocus } = props
      if (onInputFocus) call(onInputFocus, e)
    }
    function doDeactivate() {
      const { onDeactivate } = props
      if (onDeactivate) call(onDeactivate)
    }
    function doActivate() {
      const { onActivate } = props
      if (onActivate) call(onActivate)
    }
    function doClick(e) {
      const { onClick } = props
      if (onClick) call(onClick, e)
    }
    function doWrapperFocus(e) {
      const { onWrapperFocus } = props
      if (onWrapperFocus) call(onWrapperFocus, e)
    }
    function doWrapperBlur(e) {
      const { onWrapperBlur } = props
      if (onWrapperBlur) call(onWrapperBlur, e)
    }
    // methods
    function handleCompositionStart() {
      isComposingRef.value = true
    }
    function handleCompositionEnd(e) {
      isComposingRef.value = false
      if (e.target === inputEl2Ref.value) {
        handleInput(e, 1)
      } else {
        handleInput(e, 0)
      }
    }
    function handleInput(e, index = 0, event = 'input') {
      const targetValue = e.target.value
      syncMirror(targetValue)
      syncSource = targetValue
      if (isComposingRef.value) return
      const changedValue = targetValue
      if (!props.pair) {
        event === 'input' ? doUpdateValue(changedValue) : doChange(changedValue)
      } else {
        let { value } = mergedValueRef
        if (!Array.isArray(value)) {
          value = ['', '']
        } else {
          value = [...value]
        }
        value[index] = changedValue
        event === 'input' ? doUpdateValue(value) : doChange(value)
      }
      // force update to sync input's view with value
      // if not set, after input, input value won't sync with dom input value
      vm.$forceUpdate()
    }
    function handleInputBlur(e) {
      doUpdateValueBlur(e)
      if (e.relatedTarget === wrapperElRef.value) {
        doDeactivate()
      }
      if (
        !(
          e.relatedTarget !== null &&
          (e.relatedTarget === inputElRef.value ||
            e.relatedTarget === inputEl2Ref.value ||
            e.relatedTarget === textareaElRef.value)
        )
      ) {
        activatedRef.value = false
      }
      dealWithEvent(e, 'blur')
    }
    function handleInputFocus(e) {
      doUpdateValueFocus(e)
      focusedRef.value = true
      activatedRef.value = true
      doActivate()
      dealWithEvent(e, 'focus')
    }
    function handleWrapperBlur(e) {
      if (props.passivelyActivated) {
        doWrapperBlur(e)
        dealWithEvent(e, 'blur')
      }
    }
    function handleWrapperFocus(e) {
      if (props.passivelyActivated) {
        focusedRef.value = true
        doWrapperFocus(e)
        dealWithEvent(e, 'focus')
      }
    }
    function dealWithEvent(e, type) {
      if (
        e.relatedTarget !== null &&
        (e.relatedTarget === inputElRef.value ||
          e.relatedTarget === inputEl2Ref.value ||
          e.relatedTarget === textareaElRef.value ||
          e.relatedTarget === wrapperElRef.value)
      ) {
        /**
         * activeElement transfer inside the input, do nothing
         */
      } else {
        if (type === 'focus') {
          doFocus(e)
          focusedRef.value = true
        } else if (type === 'blur') {
          doBlur(e)
          focusedRef.value = false
        }
      }
    }
    function handleChange(e, index) {
      handleInput(e, index, 'change')
    }
    function handleClick(e) {
      doClick(e)
    }
    function handleClear(e) {
      doClear(e)
      if (props.pair) {
        doUpdateValue(['', ''])
        doChange(['', ''])
      } else {
        doUpdateValue('')
        doChange('')
      }
    }
    function handleMouseDown(e) {
      const { onMousedown } = props
      if (onMousedown) onMousedown(e)
      const { tagName } = e.target
      if (tagName !== 'INPUT' && tagName !== 'TEXTAREA') {
        if (props.resizable) {
          const { value: wrapperEl } = wrapperElRef
          if (wrapperEl) {
            const { left, top, width, height } =
              wrapperEl.getBoundingClientRect()
            const resizeHandleSize = 14
            if (
              left + width - resizeHandleSize < e.clientX &&
              e.clientY < left + width &&
              top + height - resizeHandleSize < e.clientY &&
              e.clientY < top + height
            ) {
              // touching resize handle, just let it go.
              // resize won't take focus, maybe there is a better way to do this.
              // hope someone can figure out a better solution
              return
            }
          }
        }
        e.preventDefault()
        if (!focusedRef.value) {
          focus()
        }
      }
    }
    function handleMouseEnter() {
      hoverRef.value = true
    }
    function handleMouseLeave() {
      hoverRef.value = false
    }
    function handlePasswordToggleClick() {
      if (mergedDisabledRef.value) return
      if (mergedShowPasswordOnRef.value !== 'click') return
      passwordVisibleRef.value = !passwordVisibleRef.value
    }
    function handlePasswordToggleMousedown(e) {
      if (mergedDisabledRef.value) return
      e.preventDefault()
      const preventDefaultOnce = (e) => {
        e.preventDefault()
        off('mouseup', document, preventDefaultOnce)
      }
      on('mouseup', document, preventDefaultOnce)
      if (mergedShowPasswordOnRef.value !== 'mousedown') return
      passwordVisibleRef.value = true
      const hidePassword = () => {
        passwordVisibleRef.value = false
        off('mouseup', document, hidePassword)
      }
      on('mouseup', document, hidePassword)
    }
    function handleWrapperKeyDown(e) {
      var _a
      ;(_a = props.onKeydown) === null || _a === void 0
        ? void 0
        : _a.call(props, e)
      switch (e.code) {
        case 'Escape':
          handleWrapperKeyDownEsc()
          break
        case 'Enter':
        case 'NumpadEnter':
          handleWrapperKeyDownEnter(e)
          break
      }
    }
    function handleWrapperKeyDownEnter(e) {
      var _a, _b
      if (props.passivelyActivated) {
        const { value: focused } = activatedRef
        if (focused) {
          if (props.internalDeactivateOnEnter) {
            handleWrapperKeyDownEsc()
          }
          return
        }
        e.preventDefault()
        if (props.type === 'textarea') {
          ;(_a = textareaElRef.value) === null || _a === void 0
            ? void 0
            : _a.focus()
        } else {
          ;(_b = inputElRef.value) === null || _b === void 0
            ? void 0
            : _b.focus()
        }
      }
    }
    function handleWrapperKeyDownEsc() {
      if (props.passivelyActivated) {
        activatedRef.value = false
        void nextTick(() => {
          var _a
          ;(_a = wrapperElRef.value) === null || _a === void 0
            ? void 0
            : _a.focus()
        })
      }
    }
    function focus() {
      var _a, _b, _c
      if (mergedDisabledRef.value) return
      if (props.passivelyActivated) {
        ;(_a = wrapperElRef.value) === null || _a === void 0
          ? void 0
          : _a.focus()
      } else {
        ;(_b = textareaElRef.value) === null || _b === void 0
          ? void 0
          : _b.focus()
        ;(_c = inputElRef.value) === null || _c === void 0 ? void 0 : _c.focus()
      }
    }
    function blur() {
      var _a
      if (
        (_a = wrapperElRef.value) === null || _a === void 0
          ? void 0
          : _a.contains(document.activeElement)
      ) {
        document.activeElement.blur()
      }
    }
    function select() {
      var _a, _b
      ;(_a = textareaElRef.value) === null || _a === void 0
        ? void 0
        : _a.select()
      ;(_b = inputElRef.value) === null || _b === void 0 ? void 0 : _b.select()
    }
    function activate() {
      if (mergedDisabledRef.value) return
      if (textareaElRef.value) textareaElRef.value.focus()
      else if (inputElRef.value) inputElRef.value.focus()
    }
    function deactivate() {
      const { value: wrapperEl } = wrapperElRef
      if (
        (wrapperEl === null || wrapperEl === void 0
          ? void 0
          : wrapperEl.contains(document.activeElement)) &&
        wrapperEl !== document.activeElement
      ) {
        handleWrapperKeyDownEsc()
      }
    }
    function syncMirror(value) {
      const { type, pair, autosize } = props
      if (!pair && autosize) {
        if (type === 'textarea') {
          const { value: textareaMirrorEl } = textareaMirrorElRef
          if (textareaMirrorEl) {
            textareaMirrorEl.textContent =
              (value !== null && value !== void 0 ? value : '') + '\r\n'
          }
        } else {
          const { value: inputMirrorEl } = inputMirrorElRef
          if (inputMirrorEl) {
            if (value) {
              inputMirrorEl.textContent = value
            } else {
              inputMirrorEl.innerHTML = '&nbsp;'
            }
          }
        }
      }
    }
    function handleTextAreaMirrorResize() {
      updateTextAreaStyle()
    }
    let stopWatchMergedValue = null
    watchEffect(() => {
      const { autosize, type } = props
      if (autosize && type === 'textarea') {
        stopWatchMergedValue = watch(mergedValueRef, (value) => {
          if (!Array.isArray(value) && value !== syncSource) {
            syncMirror(value)
          }
        })
      } else {
        stopWatchMergedValue === null || stopWatchMergedValue === void 0
          ? void 0
          : stopWatchMergedValue()
      }
    })
    provide(inputInjectionKey, {
      mergedValueRef,
      maxlengthRef,
      mergedClsPrefixRef
    })
    const exposedProps = {
      wrapperElRef,
      inputElRef,
      textareaElRef,
      isCompositing: isComposingRef,
      focus,
      blur,
      select,
      deactivate,
      activate
    }
    return Object.assign(Object.assign({}, exposedProps), {
      // DOM ref
      wrapperElRef,
      inputElRef,
      inputMirrorElRef,
      inputEl2Ref,
      textareaElRef,
      textareaMirrorElRef,
      // value
      uncontrolledValue: uncontrolledValueRef,
      mergedValue: mergedValueRef,
      passwordVisible: passwordVisibleRef,
      mergedPlaceholder: mergedPlaceholderRef,
      showPlaceholder1: showPlaceholder1Ref,
      showPlaceholder2: showPlaceholder2Ref,
      mergedFocus: mergedFocusRef,
      isComposing: isComposingRef,
      activated: activatedRef,
      showClearButton,
      mergedSize: mergedSizeRef,
      mergedDisabled: mergedDisabledRef,
      textDecorationStyle: textDecorationStyleRef,
      mergedClsPrefix: mergedClsPrefixRef,
      mergedBordered: mergedBorderedRef,
      mergedShowPasswordOn: mergedShowPasswordOnRef,
      // methods
      handleCompositionStart,
      handleCompositionEnd,
      handleInput,
      handleInputBlur,
      handleInputFocus,
      handleWrapperBlur,
      handleWrapperFocus,
      handleMouseEnter,
      handleMouseLeave,
      handleMouseDown,
      handleChange,
      handleClick,
      handleClear,
      handlePasswordToggleClick,
      handlePasswordToggleMousedown,
      handleWrapperKeyDown,
      handleTextAreaMirrorResize,
      mergedTheme: themeRef,
      cssVars: computed(() => {
        const { value: size } = mergedSizeRef
        const {
          common: { cubicBezierEaseInOut },
          self: {
            color,
            borderRadius,
            textColor,
            caretColor,
            caretColorError,
            caretColorWarning,
            textDecorationColor,
            border,
            borderDisabled,
            borderHover,
            borderFocus,
            placeholderColor,
            placeholderColorDisabled,
            lineHeightTextarea,
            colorDisabled,
            colorFocus,
            textColorDisabled,
            boxShadowFocus,
            iconSize,
            colorFocusWarning,
            boxShadowFocusWarning,
            borderWarning,
            borderFocusWarning,
            borderHoverWarning,
            colorFocusError,
            boxShadowFocusError,
            borderError,
            borderFocusError,
            borderHoverError,
            clearSize,
            clearColor,
            clearColorHover,
            clearColorPressed,
            iconColor,
            iconColorDisabled,
            suffixTextColor,
            countTextColor,
            iconColorHover,
            iconColorPressed,
            loadingColor,
            loadingColorError,
            loadingColorWarning,
            [createKey('padding', size)]: padding,
            [createKey('fontSize', size)]: fontSize,
            [createKey('height', size)]: height
          }
        } = themeRef.value
        const { left: paddingLeft, right: paddingRight } = getPadding(padding)
        return {
          '--bezier': cubicBezierEaseInOut,
          '--count-text-color': countTextColor,
          '--color': color,
          '--font-size': fontSize,
          '--border-radius': borderRadius,
          '--height': height,
          '--padding-left': paddingLeft,
          '--padding-right': paddingRight,
          '--text-color': textColor,
          '--caret-color': caretColor,
          '--text-decoration-color': textDecorationColor,
          '--border': border,
          '--border-disabled': borderDisabled,
          '--border-hover': borderHover,
          '--border-focus': borderFocus,
          '--placeholder-color': placeholderColor,
          '--placeholder-color-disabled': placeholderColorDisabled,
          '--icon-size': iconSize,
          '--line-height-textarea': lineHeightTextarea,
          '--color-disabled': colorDisabled,
          '--color-focus': colorFocus,
          '--text-color-disabled': textColorDisabled,
          '--box-shadow-focus': boxShadowFocus,
          '--loading-color': loadingColor,
          // form warning
          '--caret-color-warning': caretColorWarning,
          '--color-focus-warning': colorFocusWarning,
          '--box-shadow-focus-warning': boxShadowFocusWarning,
          '--border-warning': borderWarning,
          '--border-focus-warning': borderFocusWarning,
          '--border-hover-warning': borderHoverWarning,
          '--loading-color-warning': loadingColorWarning,
          // form error
          '--caret-color-error': caretColorError,
          '--color-focus-error': colorFocusError,
          '--box-shadow-focus-error': boxShadowFocusError,
          '--border-error': borderError,
          '--border-focus-error': borderFocusError,
          '--border-hover-error': borderHoverError,
          '--loading-color-error': loadingColorError,
          // clear-button
          '--clear-color': clearColor,
          '--clear-size': clearSize,
          '--clear-color-hover': clearColorHover,
          '--clear-color-pressed': clearColorPressed,
          '--icon-color': iconColor,
          '--icon-color-hover': iconColorHover,
          '--icon-color-pressed': iconColorPressed,
          '--icon-color-disabled': iconColorDisabled,
          '--suffix-text-color': suffixTextColor
        }
      })
    })
  },
  render() {
    const { mergedClsPrefix } = this
    return h(
      'div',
      {
        ref: 'wrapperElRef',
        class: [
          `${mergedClsPrefix}-input`,
          {
            [`${mergedClsPrefix}-input--disabled`]: this.mergedDisabled,
            [`${mergedClsPrefix}-input--textarea`]: this.type === 'textarea',
            [`${mergedClsPrefix}-input--resizable`]:
              this.resizable && !this.autosize,
            [`${mergedClsPrefix}-input--autosize`]: this.autosize,
            [`${mergedClsPrefix}-input--round`]:
              this.round && !(this.type === 'textarea'),
            [`${mergedClsPrefix}-input--pair`]: this.pair,
            [`${mergedClsPrefix}-input--focus`]: this.mergedFocus,
            [`${mergedClsPrefix}-input--stateful`]: this.stateful
          }
        ],
        style: this.cssVars,
        tabindex:
          !this.mergedDisabled && this.passivelyActivated && !this.activated
            ? 0
            : undefined,
        onFocus: this.handleWrapperFocus,
        onBlur: this.handleWrapperBlur,
        onClick: this.handleClick,
        onMousedown: this.handleMouseDown,
        onMouseenter: this.handleMouseEnter,
        onMouseleave: this.handleMouseLeave,
        onCompositionstart: this.handleCompositionStart,
        onCompositionend: this.handleCompositionEnd,
        onKeyup: this.onKeyup,
        onKeydown: this.handleWrapperKeyDown
      },
      h(
        'div',
        { class: `${mergedClsPrefix}-input-wrapper` },
        this.$slots.affix || this.$slots.prefix
          ? h(
              'div',
              { class: `${mergedClsPrefix}-input__prefix` },
              renderSlot(this.$slots, 'affix', undefined, () => {
                return [renderSlot(this.$slots, 'prefix')]
              })
            )
          : null,
        this.type === 'textarea'
          ? h(
              'div',
              { class: `${mergedClsPrefix}-input__textarea` },
              h(
                'textarea',
                Object.assign({}, this.inputProps, {
                  ref: 'textareaElRef',
                  class: `${mergedClsPrefix}-input__textarea-el`,
                  autofocus: this.autofocus,
                  rows: Number(this.rows),
                  placeholder: this.placeholder,
                  value: this.mergedValue,
                  disabled: this.mergedDisabled,
                  maxlength: this.maxlength,
                  minlength: this.minlength,
                  readonly: this.readonly,
                  tabindex:
                    this.passivelyActivated && !this.activated ? -1 : undefined,
                  style: this.textDecorationStyle[0],
                  onBlur: this.handleInputBlur,
                  onFocus: this.handleInputFocus,
                  onInput: this.handleInput,
                  onChange: this.handleChange
                })
              ),
              this.showPlaceholder1
                ? h(
                    'div',
                    {
                      class: `${mergedClsPrefix}-input__placeholder`,
                      key: 'placeholder'
                    },
                    this.mergedPlaceholder[0]
                  )
                : null,
              this.autosize
                ? h(
                    VResizeObserver,
                    { onResize: this.handleTextAreaMirrorResize },
                    {
                      default: () =>
                        h('div', {
                          ref: 'textareaMirrorElRef',
                          class: `${mergedClsPrefix}-input__textarea-mirror`,
                          key: 'mirror'
                        })
                    }
                  )
                : null
            )
          : h(
              'div',
              { class: `${mergedClsPrefix}-input__input` },
              h(
                'input',
                Object.assign(
                  {
                    type:
                      this.type === 'password' &&
                      this.mergedShowPasswordOn &&
                      this.passwordVisible
                        ? 'text'
                        : this.type
                  },
                  this.inputProps,
                  {
                    ref: 'inputElRef',
                    class: `${mergedClsPrefix}-input__input-el`,
                    style: this.textDecorationStyle[0],
                    tabindex:
                      this.passivelyActivated && !this.activated
                        ? -1
                        : undefined,
                    placeholder: this.mergedPlaceholder[0],
                    disabled: this.mergedDisabled,
                    maxlength: this.maxlength,
                    minlength: this.minlength,
                    value: Array.isArray(this.mergedValue)
                      ? this.mergedValue[0]
                      : this.mergedValue,
                    readonly: this.readonly,
                    autofocus: this.autofocus,
                    size: this.attrSize,
                    onBlur: this.handleInputBlur,
                    onFocus: this.handleInputFocus,
                    onInput: (e) => this.handleInput(e, 0),
                    onChange: (e) => this.handleChange(e, 0)
                  }
                )
              ),
              this.showPlaceholder1
                ? h(
                    'div',
                    { class: `${mergedClsPrefix}-input__placeholder` },
                    h('span', null, this.mergedPlaceholder[0])
                  )
                : null,
              this.autosize
                ? h(
                    'div',
                    {
                      class: `${mergedClsPrefix}-input__input-mirror`,
                      key: 'mirror',
                      ref: 'inputMirrorElRef'
                    },
                    '\u00A0'
                  )
                : null
            ),
        !this.pair &&
          (this.$slots.suffix ||
            this.clearable ||
            this.showCount ||
            this.mergedShowPasswordOn ||
            this.loading !== undefined)
          ? h('div', { class: `${mergedClsPrefix}-input__suffix` }, [
              this.clearable || this.$slots.clear
                ? h(
                    NBaseClear,
                    {
                      clsPrefix: mergedClsPrefix,
                      show: this.showClearButton,
                      onClear: this.handleClear
                    },
                    { default: () => renderSlot(this.$slots, 'clear') }
                  )
                : null,
              renderSlot(this.$slots, 'suffix'),
              this.loading !== undefined
                ? h(NBaseSuffix, {
                    clsPrefix: mergedClsPrefix,
                    loading: this.loading,
                    showArrow: false,
                    showClear: false,
                    style: this.cssVars
                  })
                : null,
              this.showCount && this.type !== 'textarea'
                ? h(WordCount, null, { default: this.$slots.count })
                : null,
              this.mergedShowPasswordOn && this.type === 'password'
                ? h(
                    NBaseIcon,
                    {
                      clsPrefix: mergedClsPrefix,
                      class: `${mergedClsPrefix}-input__eye`,
                      onMousedown: this.handlePasswordToggleMousedown,
                      onClick: this.handlePasswordToggleClick
                    },
                    {
                      default: () =>
                        this.passwordVisible
                          ? h(EyeIcon, null)
                          : h(EyeOffIcon, null)
                    }
                  )
                : null
            ])
          : null
      ),
      this.pair
        ? h(
            'span',
            { class: `${mergedClsPrefix}-input__separator` },
            renderSlot(this.$slots, 'separator', undefined, () => [
              this.separator
            ])
          )
        : null,
      this.pair
        ? h(
            'div',
            { class: `${mergedClsPrefix}-input-wrapper` },
            h(
              'div',
              { class: `${mergedClsPrefix}-input__input` },
              h('input', {
                ref: 'inputEl2Ref',
                type: this.type,
                class: `${mergedClsPrefix}-input__input-el`,
                tabindex:
                  this.passivelyActivated && !this.activated ? -1 : undefined,
                placeholder: this.mergedPlaceholder[1],
                disabled: this.mergedDisabled,
                maxlength: this.maxlength,
                minlength: this.minlength,
                value: Array.isArray(this.mergedValue)
                  ? this.mergedValue[1]
                  : undefined,
                readonly: this.readonly,
                style: this.textDecorationStyle[1],
                onBlur: this.handleInputBlur,
                onFocus: this.handleInputFocus,
                onInput: (e) => this.handleInput(e, 1),
                onChange: (e) => this.handleChange(e, 1)
              }),
              this.showPlaceholder2
                ? h(
                    'div',
                    { class: `${mergedClsPrefix}-input__placeholder` },
                    h('span', null, this.mergedPlaceholder[1])
                  )
                : null
            ),
            h('div', { class: `${mergedClsPrefix}-input__suffix` }, [
              this.clearable || this.$slots.clear
                ? h(
                    NBaseClear,
                    {
                      clsPrefix: mergedClsPrefix,
                      show: this.showClearButton,
                      onClear: this.handleClear
                    },
                    { default: () => renderSlot(this.$slots, 'clear') }
                  )
                : null,
              renderSlot(this.$slots, 'suffix')
            ])
          )
        : null,
      this.mergedBordered
        ? h('div', { class: `${mergedClsPrefix}-input__border` })
        : null,
      this.mergedBordered
        ? h('div', { class: `${mergedClsPrefix}-input__state-border` })
        : null,
      this.showCount && this.type === 'textarea'
        ? h(WordCount, null, { default: this.$slots.count })
        : null
    )
  }
})