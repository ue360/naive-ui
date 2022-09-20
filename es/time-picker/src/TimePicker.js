import {
  h,
  ref,
  toRef,
  defineComponent,
  computed,
  withDirectives,
  Transition,
  provide,
  nextTick,
  watch,
  watchEffect
} from 'vue'
import { useIsMounted, useKeyboard, useMergedState } from 'vooks'
import { VBinder, VTarget, VFollower } from 'vueuc'
import { clickoutside } from 'vdirs'
import { happensIn } from 'seemly'
import {
  isValid,
  startOfSecond,
  startOfMinute,
  startOfHour,
  format,
  set,
  setHours,
  setMinutes,
  setSeconds,
  getTime,
  getMinutes,
  getHours,
  getSeconds
} from 'date-fns'
import { strictParse } from '../../date-picker/src/utils'
import { TimeIcon } from '../../_internal/icons'
import { NInput } from '../../input'
import { NBaseIcon } from '../../_internal'
import { useConfig, useTheme, useLocale, useFormItem } from '../../_mixins'
import { call, useAdjustedTo, warnOnce } from '../../_utils'
import { timePickerLight } from '../styles'
import Panel from './Panel'
import { timePickerInjectionKey } from './interface'
import { findSimilarTime, isTimeInStep } from './utils'
import style from './styles/index.cssr'
// validate hours, minutes, seconds prop
function validateUnits(value, max) {
  if (value === undefined) {
    return true
  }
  if (Array.isArray(value)) {
    return value.every((v) => v >= 0 && v <= max)
  } else {
    return value >= 0 && value <= max
  }
}
const timePickerProps = Object.assign(Object.assign({}, useTheme.props), {
  to: useAdjustedTo.propTo,
  bordered: {
    type: Boolean,
    default: undefined
  },
  actions: Array,
  defaultValue: {
    type: Number,
    default: null
  },
  placeholder: String,
  placement: {
    type: String,
    default: 'bottom-start'
  },
  value: Number,
  format: {
    type: String,
    default: 'HH:mm:ss'
  },
  isHourDisabled: Function,
  size: String,
  isMinuteDisabled: Function,
  isSecondDisabled: Function,
  inputReadonly: Boolean,
  clearable: Boolean,
  'onUpdate:value': [Function, Array],
  onUpdateValue: [Function, Array],
  onBlur: [Function, Array],
  onFocus: [Function, Array],
  // private
  stateful: {
    type: Boolean,
    default: true
  },
  showIcon: {
    type: Boolean,
    default: true
  },
  disabled: {
    type: Boolean,
    default: undefined
  },
  show: {
    type: Boolean,
    default: undefined
  },
  hours: {
    type: [Number, Array],
    validator: (value) => validateUnits(value, 23)
  },
  minutes: {
    type: [Number, Array],
    validator: (value) => validateUnits(value, 59)
  },
  seconds: {
    type: [Number, Array],
    validator: (value) => validateUnits(value, 59)
  },
  use12Hours: Boolean,
  // deprecated
  onChange: [Function, Array]
})
export default defineComponent({
  name: 'TimePicker',
  props: timePickerProps,
  setup(props) {
    if (process.env.NODE_ENV !== 'production') {
      watchEffect(() => {
        if (props.onChange !== undefined) {
          warnOnce(
            'time-picker',
            '`on-change` is deprecated, please use `on-update:value` instead.'
          )
        }
      })
    }
    const { mergedBorderedRef, mergedClsPrefixRef, namespaceRef } =
      useConfig(props)
    const { localeRef, dateLocaleRef } = useLocale('TimePicker')
    const formItem = useFormItem(props)
    const { mergedSizeRef, mergedDisabledRef } = formItem
    const themeRef = useTheme(
      'TimePicker',
      'TimePicker',
      style,
      timePickerLight,
      props,
      mergedClsPrefixRef
    )
    const keyboardState = useKeyboard()
    const inputInstRef = ref(null)
    const panelInstRef = ref(null)
    const uncontrolledValueRef = ref(props.defaultValue)
    const controlledValueRef = toRef(props, 'value')
    const mergedValueRef = useMergedState(
      controlledValueRef,
      uncontrolledValueRef
    )
    const dateFnsOptionsRef = computed(() => {
      return {
        locale: dateLocaleRef.value.locale
      }
    })
    const { value: mergedValue } = mergedValueRef
    const displayTimeStringRef = ref(
      mergedValue === null
        ? ''
        : format(mergedValue, props.format, dateFnsOptionsRef.value)
    )
    const uncontrolledShowRef = ref(false)
    const controlledShowRef = toRef(props, 'show')
    const mergedShowRef = useMergedState(controlledShowRef, uncontrolledShowRef)
    const memorizedValueRef = ref(mergedValue)
    const transitionDisabledRef = ref(false)
    const localizedNowRef = computed(() => {
      return localeRef.value.now
    })
    const localizedPlaceholderRef = computed(() => {
      if (props.placeholder !== undefined) return props.placeholder
      return localeRef.value.placeholder
    })
    const localizedNegativeTextRef = computed(() => {
      return localeRef.value.negativeText
    })
    const localizedPositiveTextRef = computed(() => {
      return localeRef.value.positiveText
    })
    const hourInFormatRef = computed(() => {
      return /H|h|K|k/.test(props.format)
    })
    const minuteInFormatRef = computed(() => {
      return props.format.includes('m')
    })
    const secondInFormatRef = computed(() => {
      return props.format.includes('s')
    })
    const isHourInvalidRef = computed(() => {
      const { isHourDisabled } = props
      if (hourValueRef.value === null) return false
      if (!isTimeInStep(hourValueRef.value, 'hours', props.hours)) return true
      if (!isHourDisabled) return false
      return isHourDisabled(hourValueRef.value)
    })
    const isMinuteInvalidRef = computed(() => {
      const { value: minuteValue } = minuteValueRef
      const { value: hourValue } = hourValueRef
      if (minuteValue === null || hourValue === null) return false
      if (!isTimeInStep(minuteValue, 'minutes', props.minutes)) return true
      const { isMinuteDisabled } = props
      if (!isMinuteDisabled) return false
      return isMinuteDisabled(minuteValue, hourValue)
    })
    const isSecondInvalidRef = computed(() => {
      const { value: minuteValue } = minuteValueRef
      const { value: hourValue } = hourValueRef
      const { value: secondValue } = secondValueRef
      if (secondValue === null || minuteValue === null || hourValue === null) {
        return false
      }
      if (!isTimeInStep(secondValue, 'seconds', props.seconds)) return true
      const { isSecondDisabled } = props
      if (!isSecondDisabled) return false
      return isSecondDisabled(secondValue, minuteValue, hourValue)
    })
    const isValueInvalidRef = computed(() => {
      return (
        isHourInvalidRef.value ||
        isMinuteInvalidRef.value ||
        isSecondInvalidRef.value
      )
    })
    const mergedAttrSizeRef = computed(() => {
      return props.format.length + 4
    })
    const amPmValueRef = computed(() => {
      const { value } = mergedValueRef
      if (value === null) return null
      return getHours(value) < 12 ? 'am' : 'pm'
    })
    const hourValueRef = computed(() => {
      const { value } = mergedValueRef
      if (value === null) return null
      return Number(format(value, 'HH', dateFnsOptionsRef.value))
    })
    const minuteValueRef = computed(() => {
      const { value } = mergedValueRef
      if (value === null) return null
      return Number(format(value, 'mm', dateFnsOptionsRef.value))
    })
    const secondValueRef = computed(() => {
      const { value } = mergedValueRef
      if (value === null) return null
      return Number(format(value, 'ss', dateFnsOptionsRef.value))
    })
    function doChange(value) {
      const {
        onUpdateValue,
        'onUpdate:value': _onUpdateValue,
        onChange
      } = props
      const { nTriggerFormChange, nTriggerFormInput } = formItem
      if (onUpdateValue) call(onUpdateValue, value)
      if (_onUpdateValue) call(_onUpdateValue, value)
      if (onChange) call(onChange, value)
      uncontrolledValueRef.value = value
      nTriggerFormChange()
      nTriggerFormInput()
    }
    function doFocus(e) {
      const { onFocus } = props
      const { nTriggerFormFocus } = formItem
      if (onFocus) call(onFocus, e)
      nTriggerFormFocus()
    }
    function doBlur(e) {
      const { onBlur } = props
      const { nTriggerFormBlur } = formItem
      if (onBlur) call(onBlur, e)
      nTriggerFormBlur()
    }
    function handleTimeInputClear(e) {
      e.stopPropagation()
      doChange(null)
      deriveInputValue(null)
    }
    function handleFocusDetectorFocus() {
      closePanel({
        returnFocus: true
      })
    }
    function handleMenuKeyDown(e) {
      var _a
      switch (e.code) {
        case 'Escape':
          closePanel({
            returnFocus: true
          })
          break
        case 'Tab':
          if (
            keyboardState.shift &&
            e.target ===
              ((_a = panelInstRef.value) === null || _a === void 0
                ? void 0
                : _a.$el)
          ) {
            e.preventDefault()
            closePanel({
              returnFocus: true
            })
          }
          break
      }
    }
    function disableTransitionOneTick() {
      transitionDisabledRef.value = true
      void nextTick(() => {
        transitionDisabledRef.value = false
      })
    }
    function handleTriggerClick(e) {
      if (mergedDisabledRef.value || happensIn(e, 'clear')) return
      if (!mergedShowRef.value) {
        openPanel()
      }
    }
    function handleHourClick(hour) {
      if (typeof hour === 'string') return
      if (mergedValueRef.value === null) {
        doChange(getTime(setHours(startOfHour(new Date()), hour)))
      } else {
        doChange(getTime(setHours(mergedValueRef.value, hour)))
      }
    }
    function handleMinuteClick(minute) {
      if (typeof minute === 'string') return
      if (mergedValueRef.value === null) {
        doChange(getTime(setMinutes(startOfMinute(new Date()), minute)))
      } else {
        doChange(getTime(setMinutes(mergedValueRef.value, minute)))
      }
    }
    function handleSecondClick(second) {
      if (typeof second === 'string') return
      if (mergedValueRef.value === null) {
        doChange(getTime(setSeconds(startOfSecond(new Date()), second)))
      } else {
        doChange(getTime(setSeconds(mergedValueRef.value, second)))
      }
    }
    function handleAmPmClick(amPm) {
      const { value: mergedValue } = mergedValueRef
      if (mergedValue === null) {
        const now = new Date()
        const hours = getHours(now)
        if (amPm === 'pm' && hours < 12) {
          doChange(getTime(setHours(now, hours + 12)))
        } else if (amPm === 'am' && hours >= 12) {
          doChange(getTime(setHours(now, hours - 12)))
        }
        doChange(getTime(now))
      } else {
        const hours = getHours(mergedValue)
        if (amPm === 'pm' && hours < 12) {
          doChange(getTime(setHours(mergedValue, hours + 12)))
        } else if (amPm === 'am' && hours >= 12) {
          doChange(getTime(setHours(mergedValue, hours - 12)))
        }
      }
    }
    function deriveInputValue(time) {
      if (time === undefined) time = mergedValueRef.value
      if (time === null) displayTimeStringRef.value = ''
      else {
        displayTimeStringRef.value = format(
          time,
          props.format,
          dateFnsOptionsRef.value
        )
      }
    }
    function handleTimeInputFocus(e) {
      if (isInternalFocusSwitch(e)) return
      doFocus(e)
    }
    function handleTimeInputBlur(e) {
      var _a
      if (isInternalFocusSwitch(e)) return
      if (mergedShowRef.value) {
        const panelEl =
          (_a = panelInstRef.value) === null || _a === void 0 ? void 0 : _a.$el
        if (
          !(panelEl === null || panelEl === void 0
            ? void 0
            : panelEl.contains(e.relatedTarget))
        ) {
          doBlur(e)
          closePanel({
            returnFocus: false
          })
        }
      } else {
        doBlur(e)
      }
    }
    function handleTimeInputActivate() {
      if (mergedDisabledRef.value) return
      if (!mergedShowRef.value) {
        openPanel()
      }
    }
    function handleTimeInputDeactivate() {
      if (mergedDisabledRef.value) return
      deriveInputValue()
      closePanel({
        returnFocus: false
      })
    }
    function scrollTimer() {
      if (!panelInstRef.value) return
      const { hourScrollRef, minuteScrollRef, secondScrollRef, amPmScrollRef } =
        panelInstRef.value
      ;[hourScrollRef, minuteScrollRef, secondScrollRef, amPmScrollRef].forEach(
        (itemScrollRef) => {
          var _a
          if (!itemScrollRef) return
          const activeItemEl =
            (_a = itemScrollRef.contentRef) === null || _a === void 0
              ? void 0
              : _a.querySelector('[data-active]')
          if (activeItemEl) {
            itemScrollRef.scrollTo({
              top: activeItemEl.offsetTop
            })
          }
        }
      )
    }
    function doUpdateShow(value) {
      uncontrolledShowRef.value = value
    }
    function isInternalFocusSwitch(e) {
      var _a, _b, _c
      return !!(
        ((_b =
          (_a = inputInstRef.value) === null || _a === void 0
            ? void 0
            : _a.wrapperElRef) === null || _b === void 0
          ? void 0
          : _b.contains(e.relatedTarget)) ||
        ((_c = panelInstRef.value) === null || _c === void 0
          ? void 0
          : _c.$el.contains(e.relatedTarget))
      )
    }
    function openPanel() {
      memorizedValueRef.value = mergedValueRef.value
      doUpdateShow(true)
      void nextTick(scrollTimer)
    }
    function handleClickOutside(e) {
      var _a, _b
      if (
        mergedShowRef.value &&
        !((_b =
          (_a = inputInstRef.value) === null || _a === void 0
            ? void 0
            : _a.wrapperElRef) === null || _b === void 0
          ? void 0
          : _b.contains(e.target))
      ) {
        closePanel({
          returnFocus: false
        })
      }
    }
    function closePanel({ returnFocus }) {
      var _a
      if (mergedShowRef.value) {
        doUpdateShow(false)
        if (returnFocus) {
          ;(_a = inputInstRef.value) === null || _a === void 0
            ? void 0
            : _a.focus()
        }
      }
    }
    function handleTimeInputUpdateValue(v) {
      if (v === '') {
        doChange(null)
        return
      }
      const time = strictParse(
        v,
        props.format,
        new Date(),
        dateFnsOptionsRef.value
      )
      displayTimeStringRef.value = v
      if (isValid(time)) {
        const { value: mergedValue } = mergedValueRef
        if (mergedValue !== null) {
          const newTime = set(mergedValue, {
            hours: getHours(time),
            minutes: getMinutes(time),
            seconds: getSeconds(time)
          })
          doChange(getTime(newTime))
        } else {
          doChange(getTime(time))
        }
      }
    }
    function handleCancelClick() {
      doChange(memorizedValueRef.value)
      doUpdateShow(false)
    }
    function handleNowClick() {
      const now = new Date()
      const getNowTime = {
        hours: getHours,
        minutes: getMinutes,
        seconds: getSeconds
      }
      const [mergeHours, mergeMinutes, mergeSeconds] = [
        'hours',
        'minutes',
        'seconds'
      ].map((i) =>
        !props[i] || isTimeInStep(getNowTime[i](now), i, props[i])
          ? getNowTime[i](now)
          : findSimilarTime(getNowTime[i](now), i, props[i])
      )
      const newValue = setSeconds(
        setMinutes(
          setHours(
            mergedValueRef.value ? mergedValueRef.value : getTime(now),
            mergeHours
          ),
          mergeMinutes
        ),
        mergeSeconds
      )
      doChange(getTime(newValue))
    }
    function handleConfirmClick() {
      deriveInputValue()
      closePanel({
        returnFocus: true
      })
    }
    function handleMenuFocusOut(e) {
      if (isInternalFocusSwitch(e)) return
      doBlur(e)
      closePanel({
        returnFocus: false
      })
    }
    watch(mergedValueRef, (value) => {
      deriveInputValue(value)
      disableTransitionOneTick()
      void nextTick(scrollTimer)
    })
    watch(mergedShowRef, () => {
      if (isValueInvalidRef.value) {
        doChange(memorizedValueRef.value)
      }
    })
    provide(timePickerInjectionKey, {
      mergedThemeRef: themeRef,
      mergedClsPrefixRef
    })
    return {
      mergedBordered: mergedBorderedRef,
      mergedClsPrefix: mergedClsPrefixRef,
      namespace: namespaceRef,
      uncontrolledValue: uncontrolledValueRef,
      mergedValue: mergedValueRef,
      isMounted: useIsMounted(),
      inputInstRef,
      panelInstRef,
      adjustedTo: useAdjustedTo(props),
      mergedShow: mergedShowRef,
      localizedNow: localizedNowRef,
      localizedPlaceholder: localizedPlaceholderRef,
      localizedNegativeText: localizedNegativeTextRef,
      localizedPositiveText: localizedPositiveTextRef,
      hourInFormat: hourInFormatRef,
      minuteInFormat: minuteInFormatRef,
      secondInFormat: secondInFormatRef,
      mergedAttrSize: mergedAttrSizeRef,
      displayTimeString: displayTimeStringRef,
      mergedSize: mergedSizeRef,
      mergedDisabled: mergedDisabledRef,
      isValueInvalid: isValueInvalidRef,
      isHourInvalid: isHourInvalidRef,
      isMinuteInvalid: isMinuteInvalidRef,
      isSecondInvalid: isSecondInvalidRef,
      transitionDisabled: transitionDisabledRef,
      hourValue: hourValueRef,
      minuteValue: minuteValueRef,
      secondValue: secondValueRef,
      amPmValue: amPmValueRef,
      handleTimeInputFocus,
      handleTimeInputBlur,
      handleNowClick,
      handleConfirmClick,
      handleTimeInputUpdateValue,
      handleMenuFocusOut,
      handleCancelClick,
      handleClickOutside,
      handleTimeInputActivate,
      handleTimeInputDeactivate,
      handleHourClick,
      handleMinuteClick,
      handleSecondClick,
      handleAmPmClick,
      handleTimeInputClear,
      handleFocusDetectorFocus,
      handleMenuKeyDown,
      handleTriggerClick,
      mergedTheme: themeRef,
      triggerCssVars: computed(() => {
        const {
          common: { cubicBezierEaseInOut },
          self: { iconColor, iconColorDisabled }
        } = themeRef.value
        return {
          '--icon-color': iconColor,
          '--icon-color-disabled': iconColorDisabled,
          '--bezier': cubicBezierEaseInOut
        }
      }),
      cssVars: computed(() => {
        const {
          self: {
            panelColor,
            itemTextColor,
            itemTextColorActive,
            itemColorHover,
            panelDividerColor,
            panelBoxShadow,
            itemOpacityDisabled,
            borderRadius,
            itemFontSize,
            itemWidth,
            itemHeight,
            panelActionPadding,
            itemBorderRadius
          },
          common: { cubicBezierEaseInOut }
        } = themeRef.value
        return {
          '--bezier': cubicBezierEaseInOut,
          '--border-radius': borderRadius,
          '--item-color-hover': itemColorHover,
          '--item-font-size': itemFontSize,
          '--item-height': itemHeight,
          '--item-opacity-disabled': itemOpacityDisabled,
          '--item-text-color': itemTextColor,
          '--item-text-color-active': itemTextColorActive,
          '--item-width': itemWidth,
          '--panel-action-padding': panelActionPadding,
          '--panel-box-shadow': panelBoxShadow,
          '--panel-color': panelColor,
          '--panel-divider-color': panelDividerColor,
          '--item-border-radius': itemBorderRadius
        }
      })
    }
  },
  render() {
    const { mergedClsPrefix } = this
    return h(
      'div',
      { class: `${mergedClsPrefix}-time-picker`, style: this.triggerCssVars },
      h(VBinder, null, {
        default: () => [
          h(VTarget, null, {
            default: () =>
              h(
                NInput,
                {
                  ref: 'inputInstRef',
                  value: this.displayTimeString,
                  bordered: this.mergedBordered,
                  passivelyActivated: true,
                  attrSize: this.mergedAttrSize,
                  theme: this.mergedTheme.peers.Input,
                  themeOverrides: this.mergedTheme.peerOverrides.Input,
                  stateful: this.stateful,
                  size: this.mergedSize,
                  placeholder: this.localizedPlaceholder,
                  clearable: this.clearable,
                  disabled: this.mergedDisabled,
                  textDecoration: this.isValueInvalid
                    ? 'line-through'
                    : undefined,
                  onFocus: this.handleTimeInputFocus,
                  onBlur: this.handleTimeInputBlur,
                  onActivate: this.handleTimeInputActivate,
                  onDeactivate: this.handleTimeInputDeactivate,
                  onUpdateValue: this.handleTimeInputUpdateValue,
                  onClear: this.handleTimeInputClear,
                  internalDeactivateOnEnter: true,
                  internalForceFocus: this.mergedShow,
                  readonly: this.inputReadonly || this.mergedDisabled,
                  onClick: this.handleTriggerClick
                },
                this.showIcon
                  ? {
                      [this.clearable ? 'clear' : 'suffix']: () =>
                        h(
                          NBaseIcon,
                          {
                            clsPrefix: mergedClsPrefix,
                            class: `${mergedClsPrefix}-time-picker-icon`
                          },
                          {
                            default: () => h(TimeIcon, null)
                          }
                        )
                    }
                  : null
              )
          }),
          h(
            VFollower,
            {
              teleportDisabled: this.adjustedTo === useAdjustedTo.tdkey,
              show: this.mergedShow,
              to: this.adjustedTo,
              containerClass: this.namespace,
              placement: 'bottom-start'
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
                      this.mergedShow
                        ? withDirectives(
                            h(Panel, {
                              ref: 'panelInstRef',
                              actions: this.actions,
                              style: this.cssVars,
                              seconds: this.seconds,
                              minutes: this.minutes,
                              hours: this.hours,
                              transitionDisabled: this.transitionDisabled,
                              hourValue: this.hourValue,
                              showHour: this.hourInFormat,
                              isHourInvalid: this.isHourInvalid,
                              isHourDisabled: this.isHourDisabled,
                              minuteValue: this.minuteValue,
                              showMinute: this.minuteInFormat,
                              isMinuteInvalid: this.isMinuteInvalid,
                              isMinuteDisabled: this.isMinuteDisabled,
                              secondValue: this.secondValue,
                              amPmValue: this.amPmValue,
                              showSecond: this.secondInFormat,
                              isSecondInvalid: this.isSecondInvalid,
                              isSecondDisabled: this.isSecondDisabled,
                              isValueInvalid: this.isValueInvalid,
                              nowText: this.localizedNow,
                              confirmText: this.localizedPositiveText,
                              use12Hours: this.use12Hours,
                              onFocusout: this.handleMenuFocusOut,
                              onKeydown: this.handleMenuKeyDown,
                              onHourClick: this.handleHourClick,
                              onMinuteClick: this.handleMinuteClick,
                              onSecondClick: this.handleSecondClick,
                              onAmPmClick: this.handleAmPmClick,
                              onNowClick: this.handleNowClick,
                              onConfirmClick: this.handleConfirmClick,
                              onFocusDetectorFocus:
                                this.handleFocusDetectorFocus
                            }),
                            [[clickoutside, this.handleClickOutside]]
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