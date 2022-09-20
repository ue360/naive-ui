import { computed, inject, ref, nextTick } from 'vue'
import { useKeyboard } from 'vooks'
import { datePickerInjectionKey } from '../interface'
const DATE_FORMAT = 'yyyy-MM-dd'
const TIME_FORMAT = 'HH:mm:ss'
const usePanelCommonProps = {
  active: Boolean,
  dateFormat: {
    type: String,
    default: DATE_FORMAT
  },
  timeFormat: {
    type: String,
    default: TIME_FORMAT
  },
  value: {
    type: [Array, Number],
    default: null
  },
  shortcuts: Object,
  onConfirm: Function,
  onClose: Function,
  onTabOut: Function,
  onUpdateValue: {
    type: Function,
    required: true
  }
}
// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
function usePanelCommon(props) {
  const {
    dateLocaleRef,
    timePickerSizeRef,
    localeRef,
    mergedClsPrefixRef,
    mergedThemeRef
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
  } = inject(datePickerInjectionKey)
  const dateFnsOptionsRef = computed(() => {
    return {
      locale: dateLocaleRef.value.locale
    }
  })
  const selfRef = ref(null)
  const keyboardState = useKeyboard()
  function doConfirm() {
    const { onConfirm } = props
    if (onConfirm) onConfirm()
  }
  function doUpdateValue(value, doUpdate) {
    const { onUpdateValue } = props
    onUpdateValue(value, doUpdate)
  }
  function doClose(disableUpdateOnClose = false) {
    const { onClose } = props
    if (onClose) onClose(disableUpdateOnClose)
  }
  function doTabOut() {
    const { onTabOut } = props
    if (onTabOut) onTabOut()
  }
  function handleClearClick() {
    doUpdateValue(null, true)
    doClose(true)
  }
  function handleFocusDetectorFocus() {
    doTabOut()
  }
  function disableTransitionOneTick() {
    if (props.active) {
      void nextTick(() => {
        const { value: selfEl } = selfRef
        if (!selfEl) return
        const dateEls = selfEl.querySelectorAll('[data-n-date]')
        dateEls.forEach((el) => {
          el.classList.add('transition-disabled')
        })
        void selfEl.offsetWidth
        dateEls.forEach((el) => {
          el.classList.remove('transition-disabled')
        })
      })
    }
  }
  function handlePanelKeyDown(e) {
    if (e.code === 'Tab' && e.target === selfRef.value && keyboardState.shift) {
      e.preventDefault()
      doTabOut()
    }
  }
  function handlePanelFocus(e) {
    const { value: el } = selfRef
    if (
      keyboardState.tab &&
      e.target === el &&
      (el === null || el === void 0 ? void 0 : el.contains(e.relatedTarget))
    ) {
      doTabOut()
    }
  }
  let cachedValue = null
  let cached = false
  function cachePendingValue() {
    cachedValue = props.value
    cached = true
  }
  function clearPendingValue() {
    cached = false
  }
  function restorePendingValue() {
    if (cached) {
      doUpdateValue(cachedValue, false)
      cached = false
    }
  }
  function getShortcutValue(shortcut) {
    if (typeof shortcut === 'function') {
      return shortcut()
    }
    return shortcut
  }
  return {
    mergedTheme: mergedThemeRef,
    mergedClsPrefix: mergedClsPrefixRef,
    dateFnsOptions: dateFnsOptionsRef,
    timePickerSize: timePickerSizeRef,
    selfRef,
    locale: localeRef,
    doConfirm,
    doClose,
    doUpdateValue,
    doTabOut,
    handleClearClick,
    handleFocusDetectorFocus,
    disableTransitionOneTick,
    handlePanelKeyDown,
    handlePanelFocus,
    cachePendingValue,
    clearPendingValue,
    restorePendingValue,
    getShortcutValue,
    handleShortcutMouseleave: restorePendingValue
  }
}
usePanelCommon.props = usePanelCommonProps
export { usePanelCommon }