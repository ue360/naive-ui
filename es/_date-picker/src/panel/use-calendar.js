import { ref, computed, inject, watch } from 'vue'
import {
  addMonths,
  addYears,
  isSameMonth,
  getTime,
  format,
  set,
  getYear,
  getMonth,
  getDate,
  isValid,
  startOfDay,
  startOfSecond,
  startOfMonth,
  startOfYear
} from 'date-fns'
import { dateArray, monthArray, strictParse, yearArray } from '../utils'
import { usePanelCommon } from './use-panel-common'
import { datePickerInjectionKey } from '../interface'
const useCalendarProps = Object.assign(
  Object.assign({}, usePanelCommon.props),
  {
    actions: {
      type: Array,
      default: () => ['now', 'clear', 'confirm']
    }
  }
)
// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
function useCalendar(props, type) {
  const panelCommon = usePanelCommon(props)
  const {
    isValueInvalidRef,
    isDateDisabledRef,
    isDateInvalidRef,
    isTimeInvalidRef,
    isDateTimeInvalidRef,
    isHourDisabledRef,
    isMinuteDisabledRef,
    isSecondDisabledRef,
    localeRef,
    firstDayOfWeekRef,
    datePickerSlots,
    scrollYearMonth
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
  } = inject(datePickerInjectionKey)
  const validation = {
    isValueInvalid: isValueInvalidRef,
    isDateDisabled: isDateDisabledRef,
    isDateInvalid: isDateInvalidRef,
    isTimeInvalid: isTimeInvalidRef,
    isDateTimeInvalid: isDateTimeInvalidRef,
    isHourDisabled: isHourDisabledRef,
    isMinuteDisabled: isMinuteDisabledRef,
    isSecondDisabled: isSecondDisabledRef
  }
  const dateInputValueRef = ref(
    props.value === null || Array.isArray(props.value)
      ? ''
      : format(props.value, props.dateFormat)
  )
  const calendarValueRef = ref(
    props.value === null || Array.isArray(props.value)
      ? Date.now()
      : props.value
  )
  const yearScrollRef = ref(null)
  const monthScrollRef = ref(null)
  const scrollbarInstRef = ref(null)
  const nowRef = ref(Date.now())
  const dateArrayRef = computed(() => {
    var _a
    return dateArray(
      calendarValueRef.value,
      props.value,
      nowRef.value,
      (_a = firstDayOfWeekRef.value) !== null && _a !== void 0
        ? _a
        : localeRef.value.firstDayOfWeek
    )
  })
  const monthArrayRef = computed(() => {
    return monthArray(calendarValueRef.value, props.value, nowRef.value)
  })
  const yearArrayRef = computed(() => {
    return yearArray(calendarValueRef.value, props.value, nowRef.value)
  })
  const weekdaysRef = computed(() => {
    return dateArrayRef.value.slice(0, 7).map((dateItem) => {
      const { ts } = dateItem
      return format(
        ts,
        localeRef.value.dayFormat,
        panelCommon.dateFnsOptions.value
      )
    })
  })
  const calendarMonthRef = computed(() => {
    return format(
      calendarValueRef.value,
      localeRef.value.monthFormat,
      panelCommon.dateFnsOptions.value
    )
  })
  const calendarYearRef = computed(() => {
    return format(
      calendarValueRef.value,
      localeRef.value.yearFormat,
      panelCommon.dateFnsOptions.value
    )
  })
  watch(calendarValueRef, (value, oldValue) => {
    if (!isSameMonth(value, oldValue)) {
      panelCommon.disableTransitionOneTick()
    }
  })
  watch(
    computed(() => props.value),
    (value) => {
      if (value !== null && !Array.isArray(value)) {
        dateInputValueRef.value = format(
          value,
          props.dateFormat,
          panelCommon.dateFnsOptions.value
        )
        calendarValueRef.value = value
      } else {
        dateInputValueRef.value = ''
      }
    }
  )
  function sanitizeValue(value) {
    if (type === 'datetime') return getTime(startOfSecond(value))
    if (type === 'month') return getTime(startOfMonth(value))
    if (type === 'year') return getTime(startOfYear(value))
    return getTime(startOfDay(value))
  }
  function mergedIsDateDisabled(ts) {
    const {
      isDateDisabled: { value: isDateDisabled }
    } = validation
    if (!isDateDisabled) return false
    return isDateDisabled(ts)
  }
  function handleDateInput(value) {
    const date = strictParse(
      value,
      props.dateFormat,
      new Date(),
      panelCommon.dateFnsOptions.value
    )
    if (isValid(date)) {
      if (props.value === null) {
        panelCommon.doUpdateValue(getTime(sanitizeValue(Date.now())), false)
      } else if (!Array.isArray(props.value)) {
        const newDateTime = set(props.value, {
          year: getYear(date),
          month: getMonth(date),
          date: getDate(date)
        })
        panelCommon.doUpdateValue(
          getTime(sanitizeValue(getTime(newDateTime))),
          false
        )
      }
    } else {
      dateInputValueRef.value = value
    }
  }
  function handleDateInputBlur() {
    const date = strictParse(
      dateInputValueRef.value,
      props.dateFormat,
      new Date(),
      panelCommon.dateFnsOptions.value
    )
    if (isValid(date)) {
      if (props.value === null) {
        panelCommon.doUpdateValue(getTime(sanitizeValue(Date.now())), false)
      } else if (!Array.isArray(props.value)) {
        const newDateTime = set(props.value, {
          year: getYear(date),
          month: getMonth(date),
          date: getDate(date)
        })
        panelCommon.doUpdateValue(
          getTime(sanitizeValue(getTime(newDateTime))),
          false
        )
      }
    } else {
      deriveDateInputValue()
    }
  }
  function clearSelectedDateTime() {
    panelCommon.doUpdateValue(null, true)
    dateInputValueRef.value = ''
    panelCommon.doClose(true)
  }
  function handleNowClick() {
    panelCommon.doUpdateValue(getTime(sanitizeValue(Date.now())), true)
    calendarValueRef.value = Date.now()
    panelCommon.doClose(true)
  }
  function handleDateClick(dateItem) {
    if (mergedIsDateDisabled(dateItem.ts)) {
      return
    }
    let newValue
    if (props.value !== null && !Array.isArray(props.value)) {
      newValue = props.value
    } else {
      newValue = Date.now()
    }
    newValue = getTime(set(newValue, dateItem.dateObject))
    panelCommon.doUpdateValue(
      sanitizeValue(newValue),
      type === 'date' || type === 'year'
    )
    if (type === 'date') {
      panelCommon.doClose()
    } else if (type === 'month') {
      panelCommon.disableTransitionOneTick()
      scrollYearMonth(newValue)
    } else if (type === 'year') {
      panelCommon.doClose()
    }
  }
  function deriveDateInputValue(time) {
    // If not selected, display nothing,
    // else update datetime related string
    if (props.value === null || Array.isArray(props.value)) {
      dateInputValueRef.value = ''
      return
    }
    if (time === undefined) {
      time = props.value
    }
    dateInputValueRef.value = format(
      time,
      props.dateFormat,
      panelCommon.dateFnsOptions.value
    )
  }
  function handleConfirmClick() {
    if (validation.isDateInvalid.value || validation.isTimeInvalid.value) {
      return
    }
    panelCommon.doConfirm()
    closeCalendar()
  }
  function closeCalendar() {
    if (props.active) {
      panelCommon.doClose()
    }
  }
  function nextYear() {
    calendarValueRef.value = getTime(addYears(calendarValueRef.value, 1))
  }
  function prevYear() {
    calendarValueRef.value = getTime(addYears(calendarValueRef.value, -1))
  }
  function nextMonth() {
    calendarValueRef.value = getTime(addMonths(calendarValueRef.value, 1))
  }
  function prevMonth() {
    calendarValueRef.value = getTime(addMonths(calendarValueRef.value, -1))
  }
  // For month type
  function virtualListContainer() {
    const { value } = yearScrollRef
    return value === null || value === void 0 ? void 0 : value.listElRef
  }
  // For month type
  function virtualListContent() {
    const { value } = yearScrollRef
    return value === null || value === void 0 ? void 0 : value.itemsElRef
  }
  // For month type
  function handleVirtualListScroll(e) {
    var _a
    ;(_a = scrollbarInstRef.value) === null || _a === void 0
      ? void 0
      : _a.sync()
  }
  function handleTimePickerChange(value) {
    if (value === null) return
    panelCommon.doUpdateValue(value, false)
  }
  function handleSingleShortcutMouseenter(shortcut) {
    panelCommon.cachePendingValue()
    const shortcutValue = panelCommon.getShortcutValue(shortcut)
    if (typeof shortcutValue !== 'number') return
    panelCommon.doUpdateValue(shortcutValue, false)
  }
  function handleSingleShortcutClick(shortcut) {
    const shortcutValue = panelCommon.getShortcutValue(shortcut)
    if (typeof shortcutValue !== 'number') return
    panelCommon.doUpdateValue(shortcutValue, false)
    panelCommon.clearPendingValue()
    handleConfirmClick()
  }
  return Object.assign(
    Object.assign(
      Object.assign(
        {
          dateArray: dateArrayRef,
          monthArray: monthArrayRef,
          yearArray: yearArrayRef,
          calendarYear: calendarYearRef,
          calendarMonth: calendarMonthRef,
          weekdays: weekdaysRef,
          mergedIsDateDisabled,
          nextYear,
          prevYear,
          nextMonth,
          prevMonth,
          handleNowClick,
          handleConfirmClick,
          handleSingleShortcutMouseenter,
          handleSingleShortcutClick
        },
        validation
      ),
      panelCommon
    ),
    {
      // datetime only
      handleDateClick,
      handleDateInputBlur,
      handleDateInput,
      handleTimePickerChange,
      clearSelectedDateTime,
      virtualListContainer,
      virtualListContent,
      handleVirtualListScroll,
      timePickerSize: panelCommon.timePickerSize,
      dateInputValue: dateInputValueRef,
      datePickerSlots,
      monthScrollRef,
      yearScrollRef,
      scrollbarInstRef
    }
  )
}
useCalendar.props = useCalendarProps
export { useCalendar }