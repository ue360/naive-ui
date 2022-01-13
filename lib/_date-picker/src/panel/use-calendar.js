'use strict'
Object.defineProperty(exports, '__esModule', { value: true })
exports.useCalendar = void 0
const vue_1 = require('vue')
const date_fns_1 = require('date-fns')
const utils_1 = require('../utils')
const use_panel_common_1 = require('./use-panel-common')
const interface_1 = require('../interface')
const useCalendarProps = Object.assign(
  Object.assign({}, use_panel_common_1.usePanelCommon.props),
  {
    actions: {
      type: Array,
      default: () => ['now', 'clear', 'confirm']
    }
  }
)
// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
function useCalendar(props, type) {
  const panelCommon = (0, use_panel_common_1.usePanelCommon)(props)
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
  } = (0, vue_1.inject)(interface_1.datePickerInjectionKey)
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
  const dateInputValueRef = (0, vue_1.ref)(
    props.value === null || Array.isArray(props.value)
      ? ''
      : (0, date_fns_1.format)(props.value, props.dateFormat)
  )
  const calendarValueRef = (0, vue_1.ref)(
    props.value === null || Array.isArray(props.value)
      ? Date.now()
      : props.value
  )
  const yearScrollRef = (0, vue_1.ref)(null)
  const monthScrollRef = (0, vue_1.ref)(null)
  const scrollbarInstRef = (0, vue_1.ref)(null)
  const nowRef = (0, vue_1.ref)(Date.now())
  const dateArrayRef = (0, vue_1.computed)(() => {
    var _a
    return (0, utils_1.dateArray)(
      calendarValueRef.value,
      props.value,
      nowRef.value,
      (_a = firstDayOfWeekRef.value) !== null && _a !== void 0
        ? _a
        : localeRef.value.firstDayOfWeek
    )
  })
  const monthArrayRef = (0, vue_1.computed)(() => {
    return (0, utils_1.monthArray)(
      calendarValueRef.value,
      props.value,
      nowRef.value
    )
  })
  const yearArrayRef = (0, vue_1.computed)(() => {
    return (0, utils_1.yearArray)(
      calendarValueRef.value,
      props.value,
      nowRef.value
    )
  })
  const weekdaysRef = (0, vue_1.computed)(() => {
    return dateArrayRef.value.slice(0, 7).map((dateItem) => {
      const { ts } = dateItem
      return (0, date_fns_1.format)(
        ts,
        localeRef.value.dayFormat,
        panelCommon.dateFnsOptions.value
      )
    })
  })
  const calendarMonthRef = (0, vue_1.computed)(() => {
    return (0, date_fns_1.format)(
      calendarValueRef.value,
      localeRef.value.monthFormat,
      panelCommon.dateFnsOptions.value
    )
  })
  const calendarYearRef = (0, vue_1.computed)(() => {
    return (0, date_fns_1.format)(
      calendarValueRef.value,
      localeRef.value.yearFormat,
      panelCommon.dateFnsOptions.value
    )
  })
  ;(0, vue_1.watch)(calendarValueRef, (value, oldValue) => {
    if (!(0, date_fns_1.isSameMonth)(value, oldValue)) {
      panelCommon.disableTransitionOneTick()
    }
  })
  ;(0, vue_1.watch)(
    (0, vue_1.computed)(() => props.value),
    (value) => {
      if (value !== null && !Array.isArray(value)) {
        dateInputValueRef.value = (0, date_fns_1.format)(
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
    if (type === 'datetime')
      return (0, date_fns_1.getTime)((0, date_fns_1.startOfSecond)(value))
    if (type === 'month')
      return (0, date_fns_1.getTime)((0, date_fns_1.startOfMonth)(value))
    if (type === 'year')
      return (0, date_fns_1.getTime)((0, date_fns_1.startOfYear)(value))
    return (0, date_fns_1.getTime)((0, date_fns_1.startOfDay)(value))
  }
  function mergedIsDateDisabled(ts) {
    const {
      isDateDisabled: { value: isDateDisabled }
    } = validation
    if (!isDateDisabled) return false
    return isDateDisabled(ts)
  }
  function handleDateInput(value) {
    const date = (0, utils_1.strictParse)(
      value,
      props.dateFormat,
      new Date(),
      panelCommon.dateFnsOptions.value
    )
    if ((0, date_fns_1.isValid)(date)) {
      if (props.value === null) {
        panelCommon.doUpdateValue(
          (0, date_fns_1.getTime)(sanitizeValue(Date.now())),
          false
        )
      } else if (!Array.isArray(props.value)) {
        const newDateTime = (0, date_fns_1.set)(props.value, {
          year: (0, date_fns_1.getYear)(date),
          month: (0, date_fns_1.getMonth)(date),
          date: (0, date_fns_1.getDate)(date)
        })
        panelCommon.doUpdateValue(
          (0, date_fns_1.getTime)(
            sanitizeValue((0, date_fns_1.getTime)(newDateTime))
          ),
          false
        )
      }
    } else {
      dateInputValueRef.value = value
    }
  }
  function handleDateInputBlur() {
    const date = (0, utils_1.strictParse)(
      dateInputValueRef.value,
      props.dateFormat,
      new Date(),
      panelCommon.dateFnsOptions.value
    )
    if ((0, date_fns_1.isValid)(date)) {
      if (props.value === null) {
        panelCommon.doUpdateValue(
          (0, date_fns_1.getTime)(sanitizeValue(Date.now())),
          false
        )
      } else if (!Array.isArray(props.value)) {
        const newDateTime = (0, date_fns_1.set)(props.value, {
          year: (0, date_fns_1.getYear)(date),
          month: (0, date_fns_1.getMonth)(date),
          date: (0, date_fns_1.getDate)(date)
        })
        panelCommon.doUpdateValue(
          (0, date_fns_1.getTime)(
            sanitizeValue((0, date_fns_1.getTime)(newDateTime))
          ),
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
    panelCommon.doUpdateValue(
      (0, date_fns_1.getTime)(sanitizeValue(Date.now())),
      true
    )
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
    newValue = (0, date_fns_1.getTime)(
      (0, date_fns_1.set)(newValue, dateItem.dateObject)
    )
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
    dateInputValueRef.value = (0, date_fns_1.format)(
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
    calendarValueRef.value = (0, date_fns_1.getTime)(
      (0, date_fns_1.addYears)(calendarValueRef.value, 1)
    )
  }
  function prevYear() {
    calendarValueRef.value = (0, date_fns_1.getTime)(
      (0, date_fns_1.addYears)(calendarValueRef.value, -1)
    )
  }
  function nextMonth() {
    calendarValueRef.value = (0, date_fns_1.getTime)(
      (0, date_fns_1.addMonths)(calendarValueRef.value, 1)
    )
  }
  function prevMonth() {
    calendarValueRef.value = (0, date_fns_1.getTime)(
      (0, date_fns_1.addMonths)(calendarValueRef.value, -1)
    )
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
exports.useCalendar = useCalendar
useCalendar.props = useCalendarProps
