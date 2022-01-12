'use strict'
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod }
  }
Object.defineProperty(exports, '__esModule', { value: true })
const vue_1 = require('vue')
const vueuc_1 = require('vueuc')
const vdirs_1 = require('vdirs')
const date_fns_1 = require('date-fns')
const vooks_1 = require('vooks')
const seemly_1 = require('seemly')
const input_1 = require('../../input')
const _internal_1 = require('../../_internal')
const _mixins_1 = require('../../_mixins')
const icons_1 = require('../../_internal/icons')
const _utils_1 = require('../../_utils')
const styles_1 = require('../styles')
const utils_1 = require('./utils')
const validation_utils_1 = require('./validation-utils')
const config_1 = require('./config')
const interface_1 = require('./interface')
const datetime_1 = __importDefault(require('./panel/datetime'))
const datetimerange_1 = __importDefault(require('./panel/datetimerange'))
const date_1 = __importDefault(require('./panel/date'))
const daterange_1 = __importDefault(require('./panel/daterange'))
const month_1 = __importDefault(require('./panel/month'))
const index_cssr_1 = __importDefault(require('./styles/index.cssr'))
const datePickerProps = Object.assign(
  Object.assign({}, _mixins_1.useTheme.props),
  {
    to: _utils_1.useAdjustedTo.propTo,
    bordered: {
      type: Boolean,
      default: undefined
    },
    clearable: Boolean,
    updateValueOnClose: Boolean,
    defaultValue: {
      type: [Number, Array],
      default: null
    },
    disabled: {
      type: Boolean,
      default: undefined
    },
    placement: {
      type: String,
      default: 'bottom-start'
    },
    value: [Number, Array],
    size: String,
    type: {
      type: String,
      default: 'date'
    },
    separator: String,
    placeholder: String,
    startPlaceholder: String,
    endPlaceholder: String,
    format: String,
    dateFormat: String,
    timeFormat: String,
    actions: Array,
    shortcuts: Object,
    isDateDisabled: Function,
    isTimeDisabled: Function,
    show: {
      type: Boolean,
      default: undefined
    },
    ranges: Object,
    firstDayOfWeek: Number,
    inputReadonly: Boolean,
    closeOnSelect: Boolean,
    'onUpdate:show': [Function, Array],
    onUpdateShow: [Function, Array],
    'onUpdate:value': [Function, Array],
    onUpdateValue: [Function, Array],
    onFocus: [Function, Array],
    onBlur: [Function, Array],
    // deprecated
    onChange: {
      type: [Function, Array],
      validator: () => {
        if (process.env.NODE_ENV !== 'production') {
          ;(0, _utils_1.warn)(
            'data-picker',
            '`on-change` is deprecated, please use `on-update:value` instead.'
          )
        }
        return true
      },
      default: undefined
    }
  }
)
exports.default = (0, vue_1.defineComponent)({
  name: 'DatePicker',
  props: datePickerProps,
  setup(props, { slots }) {
    const { localeRef, dateLocaleRef } = (0, _mixins_1.useLocale)('DatePicker')
    const formItem = (0, _mixins_1.useFormItem)(props)
    const { mergedSizeRef, mergedDisabledRef } = formItem
    const {
      NConfigProvider,
      mergedClsPrefixRef,
      mergedBorderedRef,
      namespaceRef
    } = (0, _mixins_1.useConfig)(props)
    const panelInstRef = (0, vue_1.ref)(null)
    const triggerElRef = (0, vue_1.ref)(null)
    const inputInstRef = (0, vue_1.ref)(null)
    const uncontrolledShowRef = (0, vue_1.ref)(false)
    const controlledShowRef = (0, vue_1.toRef)(props, 'show')
    const mergedShowRef = (0, vooks_1.useMergedState)(
      controlledShowRef,
      uncontrolledShowRef
    )
    const uncontrolledValueRef = (0, vue_1.ref)(props.defaultValue)
    const controlledValueRef = (0, vue_1.computed)(() => props.value)
    const mergedValueRef = (0, vooks_1.useMergedState)(
      controlledValueRef,
      uncontrolledValueRef
    )
    // We don't change value unless blur or confirm is called
    const pendingValueRef = (0, vue_1.ref)(null)
    ;(0, vue_1.watchEffect)(() => {
      pendingValueRef.value = mergedValueRef.value
    })
    const singleInputValueRef = (0, vue_1.ref)('')
    const rangeStartInputValueRef = (0, vue_1.ref)('')
    const rangeEndInputValueRef = (0, vue_1.ref)('')
    const themeRef = (0, _mixins_1.useTheme)(
      'DatePicker',
      'DatePicker',
      index_cssr_1.default,
      styles_1.datePickerLight,
      props,
      mergedClsPrefixRef
    )
    const dateFnsOptionsRef = (0, vue_1.computed)(() => {
      return {
        locale: dateLocaleRef.value.locale
      }
    })
    const timePickerSizeRef = (0, vue_1.computed)(() => {
      var _a, _b
      return (
        ((_b =
          (_a =
            NConfigProvider === null || NConfigProvider === void 0
              ? void 0
              : NConfigProvider.mergedComponentPropsRef.value) === null ||
          _a === void 0
            ? void 0
            : _a.DatePicker) === null || _b === void 0
          ? void 0
          : _b.timePickerSize) || 'small'
      )
    })
    const isRangeRef = (0, vue_1.computed)(() => {
      return ['daterange', 'datetimerange'].includes(props.type)
    })
    const localizedPlacehoderRef = (0, vue_1.computed)(() => {
      const { placeholder } = props
      if (placeholder === undefined) {
        const { type } = props
        switch (type) {
          case 'date':
            return localeRef.value.datePlaceholder
          case 'datetime':
            return localeRef.value.datetimePlaceholder
          case 'month':
            return localeRef.value.monthPlaceholder
          case 'year':
            return localeRef.value.yearPlaceholder
          default:
            return ''
        }
      } else {
        return placeholder
      }
    })
    const localizedStartPlaceholderRef = (0, vue_1.computed)(() => {
      if (props.startPlaceholder === undefined) {
        if (props.type === 'daterange') {
          return localeRef.value.startDatePlaceholder
        } else if (props.type === 'datetimerange') {
          return localeRef.value.startDatetimePlaceholder
        }
        return ''
      } else {
        return props.startPlaceholder
      }
    })
    const localizedEndPlaceholderRef = (0, vue_1.computed)(() => {
      if (props.endPlaceholder === undefined) {
        if (props.type === 'daterange') {
          return localeRef.value.endDatePlaceholder
        } else if (props.type === 'datetimerange') {
          return localeRef.value.endDatetimePlaceholder
        }
        return ''
      } else {
        return props.endPlaceholder
      }
    })
    const mergedFormatRef = (0, vue_1.computed)(() => {
      const { format } = props
      if (format) return format
      switch (props.type) {
        case 'date':
        case 'daterange':
          return localeRef.value.dateFormat
        case 'datetime':
        case 'datetimerange':
          return localeRef.value.dateTimeFormat
        case 'year':
          return localeRef.value.yearTypeFormat
        case 'month':
          return localeRef.value.monthTypeFormat
      }
    })
    const mergedActionsRef = (0, vue_1.computed)(() => {
      const { actions, type } = props
      if (actions !== undefined) return actions
      switch (type) {
        case 'date': {
          return ['clear', 'now']
        }
        case 'datetime': {
          return ['clear', 'now', 'confirm']
        }
        case 'daterange': {
          return ['clear', 'confirm']
        }
        case 'datetimerange': {
          return ['clear', 'confirm']
        }
        case 'month': {
          return ['clear', 'now', 'confirm']
        }
        case 'year': {
          return ['clear', 'now']
        }
        default: {
          ;(0, _utils_1.warn)(
            'data-picker',
            "The type is wrong, n-date-picker's type only supports `date`, `datetime`, `daterange` and `datetimerange`."
          )
          break
        }
      }
    })
    function doUpdatePendingValue(value) {
      pendingValueRef.value = value
    }
    function doUpdateValue(value) {
      const {
        'onUpdate:value': _onUpdateValue,
        onUpdateValue,
        onChange
      } = props
      const { nTriggerFormChange, nTriggerFormInput } = formItem
      if (onUpdateValue) (0, _utils_1.call)(onUpdateValue, value)
      if (_onUpdateValue) (0, _utils_1.call)(_onUpdateValue, value)
      if (onChange) (0, _utils_1.call)(onChange, value)
      uncontrolledValueRef.value = value
      nTriggerFormChange()
      nTriggerFormInput()
    }
    function doFocus(e) {
      const { onFocus } = props
      const { nTriggerFormFocus } = formItem
      if (onFocus) (0, _utils_1.call)(onFocus, e)
      nTriggerFormFocus()
    }
    function doBlur(e) {
      const { onBlur } = props
      const { nTriggerFormBlur } = formItem
      if (onBlur) (0, _utils_1.call)(onBlur, e)
      nTriggerFormBlur()
    }
    function doUpdateShow(show) {
      const { 'onUpdate:show': _onUpdateShow, onUpdateShow } = props
      if (_onUpdateShow) (0, _utils_1.call)(_onUpdateShow, show)
      if (onUpdateShow) (0, _utils_1.call)(onUpdateShow, show)
      uncontrolledShowRef.value = show
    }
    function handleKeyDown(e) {
      if (e.code === 'Escape') {
        closeCalendar({
          returnFocus: true
        })
      }
      // We need to handle the conflict with normal date value input
      // const { value: mergedValue } = mergedValueRef
      // if (props.type === 'date' && !Array.isArray(mergedValue)) {
      //   const nextValue = getDerivedTimeFromKeyboardEvent(mergedValue, e)
      //   doUpdateValue(nextValue)
      // }
    }
    function handleClear() {
      var _a
      doUpdateShow(false)
      ;(_a = inputInstRef.value) === null || _a === void 0
        ? void 0
        : _a.deactivate()
    }
    function handlePanelTabOut() {
      closeCalendar({
        returnFocus: true
      })
    }
    function handleClickOutside(e) {
      var _a
      if (
        mergedShowRef.value &&
        !((_a = triggerElRef.value) === null || _a === void 0
          ? void 0
          : _a.contains(e.target))
      ) {
        closeCalendar({
          returnFocus: false
        })
      }
    }
    function handlePanelClose(disableUpdateOnClose) {
      closeCalendar({
        returnFocus: true,
        disableUpdateOnClose
      })
    }
    function scrollYearMonth(value) {
      if (!panelInstRef.value) return
      const { monthScrollRef, yearScrollRef } = panelInstRef.value
      const { value: mergedValue } = mergedValueRef
      if (monthScrollRef) {
        const monthIndex =
          value === undefined
            ? mergedValue === null
              ? (0, date_fns_1.getMonth)(Date.now())
              : (0, date_fns_1.getMonth)(mergedValue)
            : (0, date_fns_1.getMonth)(value)
        monthScrollRef.scrollTo({
          top: monthIndex * config_1.MONTH_ITEM_HEIGHT
        })
      }
      if (yearScrollRef) {
        const yearIndex =
          (value === undefined
            ? mergedValue === null
              ? (0, date_fns_1.getYear)(Date.now())
              : (0, date_fns_1.getYear)(mergedValue)
            : (0, date_fns_1.getYear)(value)) - config_1.START_YEAR
        yearScrollRef.scrollTo({ top: yearIndex * config_1.MONTH_ITEM_HEIGHT })
      }
    }
    // --- Panel update value
    function handlePanelUpdateValue(value, doUpdate) {
      if (doUpdate) {
        doUpdateValue(value)
      } else {
        doUpdatePendingValue(value)
      }
    }
    function handlePanelConfirm() {
      doUpdateValue(pendingValueRef.value)
    }
    // --- Refresh
    function deriveInputState() {
      const { value } = pendingValueRef
      if (isRangeRef.value) {
        if (Array.isArray(value) || value === null) {
          deriveRangeInputState(value)
        }
      } else {
        if (!Array.isArray(value)) {
          deriveSingleInputState(value)
        }
      }
    }
    function deriveSingleInputState(value) {
      if (value === null) {
        singleInputValueRef.value = ''
      } else {
        singleInputValueRef.value = (0, date_fns_1.format)(
          value,
          mergedFormatRef.value,
          dateFnsOptionsRef.value
        )
      }
    }
    function deriveRangeInputState(values) {
      if (values === null) {
        rangeStartInputValueRef.value = ''
        rangeEndInputValueRef.value = ''
      } else {
        const dateFnsOptions = dateFnsOptionsRef.value
        rangeStartInputValueRef.value = (0, date_fns_1.format)(
          values[0],
          mergedFormatRef.value,
          dateFnsOptions
        )
        rangeEndInputValueRef.value = (0, date_fns_1.format)(
          values[1],
          mergedFormatRef.value,
          dateFnsOptions
        )
      }
    }
    // --- Input deactivate & blur
    function handleInputActivate() {
      if (!mergedShowRef.value) {
        openCalendar()
      }
    }
    function handleInputBlur(e) {
      var _a
      if (
        !((_a = panelInstRef.value) === null || _a === void 0
          ? void 0
          : _a.$el.contains(e.relatedTarget))
      ) {
        doBlur(e)
        deriveInputState()
        closeCalendar({
          returnFocus: false
        })
      }
    }
    function handleInputDeactivate() {
      if (mergedDisabledRef.value) return
      deriveInputState()
      closeCalendar({
        returnFocus: false
      })
    }
    // --- Input
    function handleSingleUpdateValue(v) {
      // TODO, fix conflict with clear
      if (v === '') {
        doUpdateValue(null)
        return
      }
      const newSelectedDateTime = (0, utils_1.strictParse)(
        v,
        mergedFormatRef.value,
        new Date(),
        dateFnsOptionsRef.value
      )
      if ((0, date_fns_1.isValid)(newSelectedDateTime)) {
        doUpdateValue((0, date_fns_1.getTime)(newSelectedDateTime))
        deriveInputState()
      } else {
        singleInputValueRef.value = v
      }
    }
    function handleRangeUpdateValue(v) {
      if (v[0] === '' && v[1] === '') {
        // clear or just delete all the inputs
        doUpdateValue(null)
        return
      }
      const [startTime, endTime] = v
      const newStartTime = (0, utils_1.strictParse)(
        startTime,
        mergedFormatRef.value,
        new Date(),
        dateFnsOptionsRef.value
      )
      const newEndTime = (0, utils_1.strictParse)(
        endTime,
        mergedFormatRef.value,
        new Date(),
        dateFnsOptionsRef.value
      )
      if (
        (0, date_fns_1.isValid)(newStartTime) &&
        (0, date_fns_1.isValid)(newEndTime)
      ) {
        doUpdateValue([
          (0, date_fns_1.getTime)(newStartTime),
          (0, date_fns_1.getTime)(newEndTime)
        ])
        deriveInputState()
      } else {
        ;[rangeStartInputValueRef.value, rangeEndInputValueRef.value] = v
      }
    }
    // --- Click
    function handleTriggerClick(e) {
      if (mergedDisabledRef.value) return
      if ((0, seemly_1.happensIn)(e, 'clear')) return
      if (!mergedShowRef.value) {
        openCalendar()
      }
    }
    // --- Focus
    function handleInputFocus(e) {
      if (mergedDisabledRef.value) return
      doFocus(e)
    }
    // --- Calendar
    function openCalendar() {
      if (mergedDisabledRef.value || mergedShowRef.value) return
      doUpdateShow(true)
      if (props.type === 'month' || props.type === 'year') {
        void (0, vue_1.nextTick)(scrollYearMonth)
      }
    }
    function closeCalendar({ returnFocus, disableUpdateOnClose }) {
      var _a
      if (mergedShowRef.value) {
        doUpdateShow(false)
        if (
          props.type !== 'date' &&
          props.updateValueOnClose &&
          !disableUpdateOnClose
        ) {
          handlePanelConfirm()
        }
        if (returnFocus) {
          ;(_a = inputInstRef.value) === null || _a === void 0
            ? void 0
            : _a.focus()
        }
      }
    }
    // If new value is valid, set calendarTime and refresh display strings.
    // If new value is invalid, do nothing.
    ;(0, vue_1.watch)(pendingValueRef, () => {
      deriveInputState()
    })
    // init
    deriveInputState()
    ;(0, vue_1.watch)(mergedShowRef, (value) => {
      if (!value) {
        // close & restore original value
        // it won't conflict with props.value change
        // since when prop is passed, it is already
        // up to date.
        pendingValueRef.value = mergedValueRef.value
      }
    })
    // use pending value to do validation
    const uniVaidation = (0, validation_utils_1.uniCalendarValidation)(
      props,
      pendingValueRef
    )
    const dualValidation = (0, validation_utils_1.dualCalendarValidation)(
      props,
      pendingValueRef
    )
    ;(0, vue_1.provide)(
      interface_1.datePickerInjectionKey,
      Object.assign(
        Object.assign(
          Object.assign(
            {
              scrollYearMonth,
              mergedClsPrefixRef,
              mergedThemeRef: themeRef,
              timePickerSizeRef,
              localeRef,
              dateLocaleRef,
              firstDayOfWeekRef: (0, vue_1.toRef)(props, 'firstDayOfWeek'),
              isDateDisabledRef: (0, vue_1.toRef)(props, 'isDateDisabled'),
              rangesRef: (0, vue_1.toRef)(props, 'ranges'),
              closeOnSelectRef: (0, vue_1.toRef)(props, 'closeOnSelect'),
              updateValueOnCloseRef: (0, vue_1.toRef)(
                props,
                'updateValueOnClose'
              )
            },
            uniVaidation
          ),
          dualValidation
        ),
        { datePickerSlots: slots }
      )
    )
    return {
      mergedClsPrefix: mergedClsPrefixRef,
      mergedBordered: mergedBorderedRef,
      namespace: namespaceRef,
      uncontrolledValue: uncontrolledValueRef,
      pendingValue: pendingValueRef,
      panelInstRef,
      triggerElRef,
      inputInstRef,
      isMounted: (0, vooks_1.useIsMounted)(),
      displayTime: singleInputValueRef,
      displayStartTime: rangeStartInputValueRef,
      displayEndTime: rangeEndInputValueRef,
      mergedShow: mergedShowRef,
      adjustedTo: (0, _utils_1.useAdjustedTo)(props),
      isRange: isRangeRef,
      localizedStartPlaceholder: localizedStartPlaceholderRef,
      localizedEndPlaceholder: localizedEndPlaceholderRef,
      mergedSize: mergedSizeRef,
      mergedDisabled: mergedDisabledRef,
      localizedPlacehoder: localizedPlacehoderRef,
      isValueInvalid: uniVaidation.isValueInvalidRef,
      isStartValueInvalid: dualValidation.isStartValueInvalidRef,
      isEndValueInvalid: dualValidation.isEndValueInvalidRef,
      handleClickOutside,
      handleKeyDown,
      handleClear,
      handleTriggerClick,
      handleInputActivate,
      handleInputDeactivate,
      handleInputFocus,
      handleInputBlur,
      handlePanelTabOut,
      handlePanelClose,
      handleRangeUpdateValue,
      handleSingleUpdateValue,
      handlePanelUpdateValue,
      handlePanelConfirm,
      mergedTheme: themeRef,
      actions: mergedActionsRef,
      triggerCssVars: (0, vue_1.computed)(() => {
        const {
          common: { cubicBezierEaseInOut },
          self: { iconColor, iconColorDisabled }
        } = themeRef.value
        return {
          '--bezier': cubicBezierEaseInOut,
          '--icon-color': iconColor,
          '--icon-color-disabled': iconColorDisabled
        }
      }),
      cssVars: (0, vue_1.computed)(() => {
        const { type } = props
        const {
          common: { cubicBezierEaseInOut },
          self: {
            calendarTitleFontSize,
            calendarDaysFontSize,
            itemFontSize,
            itemTextColor,
            itemColorDisabled,
            itemColorIncluded,
            itemColorHover,
            itemColorActive,
            itemBorderRadius,
            itemTextColorDisabled,
            itemTextColorActive,
            panelColor,
            panelTextColor,
            arrowColor,
            calendarTitleTextColor,
            panelActionDividerColor,
            panelHeaderDividerColor,
            calendarDaysDividerColor,
            panelBoxShadow,
            panelBorderRadius,
            calendarTitleFontWeight,
            panelExtraFooterPadding,
            panelActionPadding,
            itemSize,
            itemCellWidth,
            itemCellHeight,
            scrollItemWidth,
            scrollItemHeight,
            calendarTitlePadding,
            calendarTitleHeight,
            calendarDaysHeight,
            calendarDaysTextColor,
            arrowSize,
            panelHeaderPadding,
            calendarDividerColor,
            calendarTitleGridTempateColumns,
            iconColor,
            iconColorDisabled,
            scrollItemBorderRadius,
            [(0, _utils_1.createKey)('calendarLeftPadding', type)]:
              calendarLeftPadding,
            [(0, _utils_1.createKey)('calendarRightPadding', type)]:
              calendarRightPadding
          }
        } = themeRef.value
        return {
          '--bezier': cubicBezierEaseInOut,
          '--panel-border-radius': panelBorderRadius,
          '--panel-color': panelColor,
          '--panel-box-shadow': panelBoxShadow,
          '--panel-text-color': panelTextColor,
          // panel header
          '--panel-header-padding': panelHeaderPadding,
          '--panel-header-divider-color': panelHeaderDividerColor,
          // panel calendar
          '--calendar-left-padding': calendarLeftPadding,
          '--calendar-right-padding': calendarRightPadding,
          '--calendar-title-height': calendarTitleHeight,
          '--calendar-title-padding': calendarTitlePadding,
          '--calendar-title-font-size': calendarTitleFontSize,
          '--calendar-title-font-weight': calendarTitleFontWeight,
          '--calendar-title-text-color': calendarTitleTextColor,
          '--calendar-title-grid-template-columns':
            calendarTitleGridTempateColumns,
          '--calendar-days-height': calendarDaysHeight,
          '--calendar-days-divider-color': calendarDaysDividerColor,
          '--calendar-days-font-size': calendarDaysFontSize,
          '--calendar-days-text-color': calendarDaysTextColor,
          '--calendar-divider-color': calendarDividerColor,
          // panel action
          '--panel-action-padding': panelActionPadding,
          '--panel-extra-footer-padding': panelExtraFooterPadding,
          '--panel-action-divider-color': panelActionDividerColor,
          // panel item
          '--item-font-size': itemFontSize,
          '--item-border-radius': itemBorderRadius,
          '--item-size': itemSize,
          '--item-cell-width': itemCellWidth,
          '--item-cell-height': itemCellHeight,
          '--item-text-color': itemTextColor,
          '--item-color-included': itemColorIncluded,
          '--item-color-disabled': itemColorDisabled,
          '--item-color-hover': itemColorHover,
          '--item-color-active': itemColorActive,
          '--item-text-color-disabled': itemTextColorDisabled,
          '--item-text-color-active': itemTextColorActive,
          // scroll item
          '--scroll-item-width': scrollItemWidth,
          '--scroll-item-height': scrollItemHeight,
          '--scroll-item-border-radius': scrollItemBorderRadius,
          // panel arrow
          '--arrow-size': arrowSize,
          '--arrow-color': arrowColor,
          // icon in trigger
          '--icon-color': iconColor,
          '--icon-color-disabled': iconColorDisabled
        }
      })
    }
  },
  render() {
    const { clearable } = this
    const commonInputProps = {
      bordered: this.mergedBordered,
      size: this.mergedSize,
      passivelyActivated: true,
      disabled: this.mergedDisabled,
      readonly: this.inputReadonly || this.mergedDisabled,
      clearable,
      onClear: this.handleClear,
      onClick: this.handleTriggerClick,
      onActivate: this.handleInputActivate,
      onDeactivate: this.handleInputDeactivate,
      onFocus: this.handleInputFocus,
      onBlur: this.handleInputBlur
    }
    const commonPanelProps = {
      onUpdateValue: this.handlePanelUpdateValue,
      onTabOut: this.handlePanelTabOut,
      onClose: this.handlePanelClose,
      onKeydown: this.handleKeyDown,
      onConfirm: this.handlePanelConfirm,
      ref: 'panelInstRef',
      value: this.pendingValue,
      active: this.mergedShow,
      actions: this.actions,
      shortcuts: this.shortcuts,
      style: this.cssVars
    }
    const { mergedClsPrefix } = this
    return (0, vue_1.h)(
      'div',
      {
        ref: 'triggerElRef',
        class: [
          `${mergedClsPrefix}-date-picker`,
          this.mergedDisabled && `${mergedClsPrefix}-date-picker--disabled`,
          this.isRange && `${mergedClsPrefix}-date-picker--range`
        ],
        style: this.triggerCssVars,
        onKeydown: this.handleKeyDown
      },
      (0, vue_1.h)(vueuc_1.VBinder, null, {
        default: () => [
          (0, vue_1.h)(vueuc_1.VTarget, null, {
            default: () =>
              this.isRange
                ? (0, vue_1.h)(
                    input_1.NInput,
                    Object.assign(
                      {
                        ref: 'inputInstRef',
                        value: [this.displayStartTime, this.displayEndTime],
                        placeholder: [
                          this.localizedStartPlaceholder,
                          this.localizedEndPlaceholder
                        ],
                        textDecoration: [
                          this.isStartValueInvalid ? 'line-through' : '',
                          this.isEndValueInvalid ? 'line-through' : ''
                        ],
                        pair: true,
                        onUpdateValue: this.handleRangeUpdateValue,
                        theme: this.mergedTheme.peers.Input,
                        themeOverrides: this.mergedTheme.peerOverrides.Input,
                        internalForceFocus: this.mergedShow,
                        internalDeactivateOnEnter: true
                      },
                      commonInputProps
                    ),
                    {
                      separator: () =>
                        this.separator === undefined
                          ? (0, vue_1.h)(
                              _internal_1.NBaseIcon,
                              {
                                clsPrefix: mergedClsPrefix,
                                class: `${mergedClsPrefix}-date-picker-icon`
                              },
                              {
                                default: () =>
                                  (0, vue_1.h)(icons_1.ToIcon, null)
                              }
                            )
                          : this.separator,
                      [clearable ? 'clear' : 'suffix']: () =>
                        (0, vue_1.h)(
                          _internal_1.NBaseIcon,
                          {
                            clsPrefix: mergedClsPrefix,
                            class: `${mergedClsPrefix}-date-picker-icon`
                          },
                          {
                            default: () => (0, vue_1.h)(icons_1.DateIcon, null)
                          }
                        )
                    }
                  )
                : (0, vue_1.h)(
                    input_1.NInput,
                    Object.assign(
                      {
                        ref: 'inputInstRef',
                        value: this.displayTime,
                        placeholder: this.localizedPlacehoder,
                        textDecoration:
                          this.isValueInvalid && !this.isRange
                            ? 'line-through'
                            : '',
                        onUpdateValue: this.handleSingleUpdateValue,
                        theme: this.mergedTheme.peers.Input,
                        themeOverrides: this.mergedTheme.peerOverrides.Input,
                        internalForceFocus: this.mergedShow,
                        internalDeactivateOnEnter: true
                      },
                      commonInputProps
                    ),
                    {
                      [clearable ? 'clear' : 'suffix']: () =>
                        (0, vue_1.h)(
                          _internal_1.NBaseIcon,
                          {
                            clsPrefix: mergedClsPrefix,
                            class: `${mergedClsPrefix}-date-picker-icon`
                          },
                          {
                            default: () => (0, vue_1.h)(icons_1.DateIcon, null)
                          }
                        )
                    }
                  )
          }),
          (0, vue_1.h)(
            vueuc_1.VFollower,
            {
              show: this.mergedShow,
              containerClass: this.namespace,
              to: this.adjustedTo,
              teleportDisabled:
                this.adjustedTo === _utils_1.useAdjustedTo.tdkey,
              placement: 'bottom-start'
            },
            {
              default: () =>
                (0, vue_1.h)(
                  vue_1.Transition,
                  {
                    name: 'fade-in-scale-up-transition',
                    appear: this.isMounted
                  },
                  {
                    default: () =>
                      this.mergedShow
                        ? (0, vue_1.withDirectives)(
                            this.type === 'datetime'
                              ? (0, vue_1.h)(
                                  datetime_1.default,
                                  Object.assign({}, commonPanelProps)
                                )
                              : this.type === 'daterange'
                              ? (0, vue_1.h)(
                                  daterange_1.default,
                                  Object.assign({}, commonPanelProps)
                                )
                              : this.type === 'datetimerange'
                              ? (0, vue_1.h)(
                                  datetimerange_1.default,
                                  Object.assign({}, commonPanelProps)
                                )
                              : this.type === 'month'
                              ? (0, vue_1.h)(
                                  month_1.default,
                                  Object.assign({}, commonPanelProps, {
                                    type: 'month',
                                    key: 'month'
                                  })
                                )
                              : this.type === 'year'
                              ? (0, vue_1.h)(
                                  month_1.default,
                                  Object.assign({}, commonPanelProps, {
                                    type: 'year',
                                    key: 'year'
                                  })
                                )
                              : (0, vue_1.h)(
                                  date_1.default,
                                  Object.assign({}, commonPanelProps)
                                ),
                            [[vdirs_1.clickoutside, this.handleClickOutside]]
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
