import {
  h,
  defineComponent,
  ref,
  Transition,
  computed,
  provide,
  watch,
  withDirectives,
  toRef,
  watchEffect,
  nextTick
} from 'vue'
import { VBinder, VTarget, VFollower } from 'vueuc'
import { clickoutside } from 'vdirs'
import { format, getTime, isValid, getYear, getMonth } from 'date-fns'
import { useIsMounted, useMergedState } from 'vooks'
import { happensIn } from 'seemly'
import { NInput } from '../../input'
import { NBaseIcon } from '../../_internal'
import { useFormItem, useTheme, useConfig, useLocale } from '../../_mixins'
import { DateIcon, ToIcon } from '../../_internal/icons'
import { warn, call, useAdjustedTo, createKey } from '../../_utils'
import { datePickerLight } from '../styles'
import { strictParse } from './utils'
import {
  uniCalendarValidation,
  dualCalendarValidation
} from './validation-utils'
import { MONTH_ITEM_HEIGHT, START_YEAR } from './config'
import { datePickerInjectionKey } from './interface'
import DatetimePanel from './panel/datetime'
import DatetimerangePanel from './panel/datetimerange'
import DatePanel from './panel/date'
import DaterangePanel from './panel/daterange'
import MonthPanel from './panel/month'
import style from './styles/index.cssr'
const datePickerProps = Object.assign(Object.assign({}, useTheme.props), {
  to: useAdjustedTo.propTo,
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
        warn(
          'data-picker',
          '`on-change` is deprecated, please use `on-update:value` instead.'
        )
      }
      return true
    },
    default: undefined
  }
})
export default defineComponent({
  name: 'DatePicker',
  props: datePickerProps,
  setup(props, { slots }) {
    const { localeRef, dateLocaleRef } = useLocale('DatePicker')
    const formItem = useFormItem(props)
    const { mergedSizeRef, mergedDisabledRef } = formItem
    const {
      NConfigProvider,
      mergedClsPrefixRef,
      mergedBorderedRef,
      namespaceRef
    } = useConfig(props)
    const panelInstRef = ref(null)
    const triggerElRef = ref(null)
    const inputInstRef = ref(null)
    const uncontrolledShowRef = ref(false)
    const controlledShowRef = toRef(props, 'show')
    const mergedShowRef = useMergedState(controlledShowRef, uncontrolledShowRef)
    const uncontrolledValueRef = ref(props.defaultValue)
    const controlledValueRef = computed(() => props.value)
    const mergedValueRef = useMergedState(
      controlledValueRef,
      uncontrolledValueRef
    )
    // We don't change value unless blur or confirm is called
    const pendingValueRef = ref(null)
    watchEffect(() => {
      pendingValueRef.value = mergedValueRef.value
    })
    const singleInputValueRef = ref('')
    const rangeStartInputValueRef = ref('')
    const rangeEndInputValueRef = ref('')
    const themeRef = useTheme(
      'DatePicker',
      'DatePicker',
      style,
      datePickerLight,
      props,
      mergedClsPrefixRef
    )
    const dateFnsOptionsRef = computed(() => {
      return {
        locale: dateLocaleRef.value.locale
      }
    })
    const timePickerSizeRef = computed(() => {
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
    const isRangeRef = computed(() => {
      return ['daterange', 'datetimerange'].includes(props.type)
    })
    const localizedPlacehoderRef = computed(() => {
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
    const localizedStartPlaceholderRef = computed(() => {
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
    const localizedEndPlaceholderRef = computed(() => {
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
    const mergedFormatRef = computed(() => {
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
    const mergedActionsRef = computed(() => {
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
          warn(
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
    function doUpdateShow(show) {
      const { 'onUpdate:show': _onUpdateShow, onUpdateShow } = props
      if (_onUpdateShow) call(_onUpdateShow, show)
      if (onUpdateShow) call(onUpdateShow, show)
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
              ? getMonth(Date.now())
              : getMonth(mergedValue)
            : getMonth(value)
        monthScrollRef.scrollTo({ top: monthIndex * MONTH_ITEM_HEIGHT })
      }
      if (yearScrollRef) {
        const yearIndex =
          (value === undefined
            ? mergedValue === null
              ? getYear(Date.now())
              : getYear(mergedValue)
            : getYear(value)) - START_YEAR
        yearScrollRef.scrollTo({ top: yearIndex * MONTH_ITEM_HEIGHT })
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
        singleInputValueRef.value = format(
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
        rangeStartInputValueRef.value = format(
          values[0],
          mergedFormatRef.value,
          dateFnsOptions
        )
        rangeEndInputValueRef.value = format(
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
      const newSelectedDateTime = strictParse(
        v,
        mergedFormatRef.value,
        new Date(),
        dateFnsOptionsRef.value
      )
      if (isValid(newSelectedDateTime)) {
        doUpdateValue(getTime(newSelectedDateTime))
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
      const newStartTime = strictParse(
        startTime,
        mergedFormatRef.value,
        new Date(),
        dateFnsOptionsRef.value
      )
      const newEndTime = strictParse(
        endTime,
        mergedFormatRef.value,
        new Date(),
        dateFnsOptionsRef.value
      )
      if (isValid(newStartTime) && isValid(newEndTime)) {
        doUpdateValue([getTime(newStartTime), getTime(newEndTime)])
        deriveInputState()
      } else {
        ;[rangeStartInputValueRef.value, rangeEndInputValueRef.value] = v
      }
    }
    // --- Click
    function handleTriggerClick(e) {
      if (mergedDisabledRef.value) return
      if (happensIn(e, 'clear')) return
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
        void nextTick(scrollYearMonth)
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
    watch(pendingValueRef, () => {
      deriveInputState()
    })
    // init
    deriveInputState()
    watch(mergedShowRef, (value) => {
      if (!value) {
        // close & restore original value
        // it won't conflict with props.value change
        // since when prop is passed, it is already
        // up to date.
        pendingValueRef.value = mergedValueRef.value
      }
    })
    // use pending value to do validation
    const uniVaidation = uniCalendarValidation(props, pendingValueRef)
    const dualValidation = dualCalendarValidation(props, pendingValueRef)
    provide(
      datePickerInjectionKey,
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
              firstDayOfWeekRef: toRef(props, 'firstDayOfWeek'),
              isDateDisabledRef: toRef(props, 'isDateDisabled'),
              rangesRef: toRef(props, 'ranges'),
              closeOnSelectRef: toRef(props, 'closeOnSelect'),
              updateValueOnCloseRef: toRef(props, 'updateValueOnClose')
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
      isMounted: useIsMounted(),
      displayTime: singleInputValueRef,
      displayStartTime: rangeStartInputValueRef,
      displayEndTime: rangeEndInputValueRef,
      mergedShow: mergedShowRef,
      adjustedTo: useAdjustedTo(props),
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
      triggerCssVars: computed(() => {
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
      cssVars: computed(() => {
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
            [createKey('calendarLeftPadding', type)]: calendarLeftPadding,
            [createKey('calendarRightPadding', type)]: calendarRightPadding
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
    return h(
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
      h(VBinder, null, {
        default: () => [
          h(VTarget, null, {
            default: () =>
              this.isRange
                ? h(
                    NInput,
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
                          ? h(
                              NBaseIcon,
                              {
                                clsPrefix: mergedClsPrefix,
                                class: `${mergedClsPrefix}-date-picker-icon`
                              },
                              { default: () => h(ToIcon, null) }
                            )
                          : this.separator,
                      [clearable ? 'clear' : 'suffix']: () =>
                        h(
                          NBaseIcon,
                          {
                            clsPrefix: mergedClsPrefix,
                            class: `${mergedClsPrefix}-date-picker-icon`
                          },
                          { default: () => h(DateIcon, null) }
                        )
                    }
                  )
                : h(
                    NInput,
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
                        h(
                          NBaseIcon,
                          {
                            clsPrefix: mergedClsPrefix,
                            class: `${mergedClsPrefix}-date-picker-icon`
                          },
                          { default: () => h(DateIcon, null) }
                        )
                    }
                  )
          }),
          h(
            VFollower,
            {
              show: this.mergedShow,
              containerClass: this.namespace,
              to: this.adjustedTo,
              teleportDisabled: this.adjustedTo === useAdjustedTo.tdkey,
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
                            this.type === 'datetime'
                              ? h(
                                  DatetimePanel,
                                  Object.assign({}, commonPanelProps)
                                )
                              : this.type === 'daterange'
                              ? h(
                                  DaterangePanel,
                                  Object.assign({}, commonPanelProps)
                                )
                              : this.type === 'datetimerange'
                              ? h(
                                  DatetimerangePanel,
                                  Object.assign({}, commonPanelProps)
                                )
                              : this.type === 'month'
                              ? h(
                                  MonthPanel,
                                  Object.assign({}, commonPanelProps, {
                                    type: 'month',
                                    key: 'month'
                                  })
                                )
                              : this.type === 'year'
                              ? h(
                                  MonthPanel,
                                  Object.assign({}, commonPanelProps, {
                                    type: 'year',
                                    key: 'year'
                                  })
                                )
                              : h(
                                  DatePanel,
                                  Object.assign({}, commonPanelProps)
                                ),
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
