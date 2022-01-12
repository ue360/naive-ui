'use strict'
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod }
  }
Object.defineProperty(exports, '__esModule', { value: true })
const vue_1 = require('vue')
const date_fns_1 = require('date-fns')
const vooks_1 = require('vooks')
const utils_1 = require('../../date-picker/src/utils')
const icons_1 = require('../../_internal/icons')
const _internal_1 = require('../../_internal')
const _utils_1 = require('../../_utils')
const button_1 = require('../../button')
const _mixins_1 = require('../../_mixins')
const styles_1 = require('../styles')
const index_cssr_1 = __importDefault(require('./styles/index.cssr'))
const calendarProps = Object.assign(
  Object.assign({}, _mixins_1.useTheme.props),
  {
    isDateDisabled: Function,
    value: Number,
    defaultValue: {
      type: Number,
      defualt: null
    },
    'onUpdate:value': [Function, Array],
    onUpdateValue: [Function, Array]
  }
)
exports.default = (0, vue_1.defineComponent)({
  name: 'Calendar',
  props: calendarProps,
  setup(props) {
    const { mergedClsPrefixRef } = (0, _mixins_1.useConfig)(props)
    const themeRef = (0, _mixins_1.useTheme)(
      'Calendar',
      'Calendar',
      index_cssr_1.default,
      styles_1.calendarLight,
      props,
      mergedClsPrefixRef
    )
    const { localeRef, dateLocaleRef } = (0, _mixins_1.useLocale)('DatePicker')
    const now = Date.now()
    // ts => timestamp
    const monthTsRef = (0, vue_1.ref)(
      (0, date_fns_1.startOfMonth)(now).valueOf()
    )
    const uncontrolledValueRef = (0, vue_1.ref)(props.defaultValue || null)
    const mergedValueRef = (0, vooks_1.useMergedState)(
      (0, vue_1.toRef)(props, 'value'),
      uncontrolledValueRef
    )
    function doUpdateValue(value, time) {
      const { onUpdateValue, 'onUpdate:value': _onUpdateValue } = props
      if (onUpdateValue) {
        ;(0, _utils_1.call)(onUpdateValue, value, time)
      }
      if (_onUpdateValue) {
        ;(0, _utils_1.call)(_onUpdateValue, value, time)
      }
      uncontrolledValueRef.value = value
    }
    function handlePrevClick() {
      monthTsRef.value = (0, date_fns_1.addMonths)(
        monthTsRef.value,
        -1
      ).valueOf()
    }
    function handleNextClick() {
      monthTsRef.value = (0, date_fns_1.addMonths)(
        monthTsRef.value,
        1
      ).valueOf()
    }
    function handleTodayClick() {
      monthTsRef.value = (0, date_fns_1.startOfMonth)(now).valueOf()
    }
    return {
      mergedClsPrefix: mergedClsPrefixRef,
      locale: localeRef,
      dateLocale: dateLocaleRef,
      now,
      mergedValue: mergedValueRef,
      monthTs: monthTsRef,
      dateItems: (0, vue_1.computed)(() => {
        return (0, utils_1.dateArray)(
          monthTsRef.value,
          mergedValueRef.value,
          now,
          localeRef.value.firstDayOfWeek,
          true
        )
      }),
      doUpdateValue,
      handleTodayClick,
      handlePrevClick,
      handleNextClick,
      mergedTheme: themeRef,
      cssVars: (0, vue_1.computed)(() => {
        const {
          common: { cubicBezierEaseInOut },
          self: {
            borderColor,
            borderColorModal,
            borderColorPopover,
            borderRadius,
            titleFontSize,
            textColor,
            titleFontWeight,
            titleTextColor,
            dayTextColor,
            fontSize,
            lineHeight,
            dateColorCurrent,
            dateTextColorCurrent,
            cellColorHover,
            cellColor,
            cellColorModal,
            barColor,
            cellColorPopover,
            cellColorHoverModal,
            cellColorHoverPopover
          }
        } = themeRef.value
        return {
          '--bezier': cubicBezierEaseInOut,
          '--border-color': borderColor,
          '--border-color-modal': borderColorModal,
          '--border-color-popover': borderColorPopover,
          '--border-radius': borderRadius,
          '--text-color': textColor,
          '--title-font-weight': titleFontWeight,
          '--title-font-size': titleFontSize,
          '--title-text-color': titleTextColor,
          '--day-text-color': dayTextColor,
          '--font-size': fontSize,
          '--line-height': lineHeight,
          '--date-color-current': dateColorCurrent,
          '--date-text-color-current': dateTextColorCurrent,
          '--cell-color': cellColor,
          '--cell-color-modal': cellColorModal,
          '--cell-color-popover': cellColorPopover,
          '--cell-color-hover': cellColorHover,
          '--cell-color-hover-modal': cellColorHoverModal,
          '--cell-color-hover-popover': cellColorHoverPopover,
          '--bar-color': barColor
        }
      })
    }
  },
  render() {
    const {
      isDateDisabled,
      mergedClsPrefix,
      monthTs,
      cssVars,
      mergedValue,
      mergedTheme,
      $slots,
      locale: { monthBeforeYear, today },
      dateLocale: { locale },
      handleTodayClick,
      handlePrevClick,
      handleNextClick
    } = this
    const normalizedValue =
      mergedValue && (0, date_fns_1.startOfDay)(mergedValue).valueOf()
    const localeMonth = (0, date_fns_1.format)(monthTs, 'MMMM', { locale })
    const year = (0, date_fns_1.getYear)(monthTs)
    const title = monthBeforeYear
      ? `${localeMonth} ${year}`
      : `${year} ${localeMonth}`
    return (0, vue_1.h)(
      'div',
      { class: `${mergedClsPrefix}-calendar`, style: cssVars },
      (0, vue_1.h)(
        'div',
        { class: `${mergedClsPrefix}-calendar-header` },
        (0, vue_1.h)(
          'div',
          { class: `${mergedClsPrefix}-calendar-header__title` },
          title
        ),
        (0, vue_1.h)(
          'div',
          { class: `${mergedClsPrefix}-calendar-header__extra` },
          (0, vue_1.h)(button_1.NButtonGroup, null, {
            default: () =>
              (0, vue_1.h)(
                vue_1.Fragment,
                null,
                (0, vue_1.h)(
                  button_1.NButton,
                  {
                    size: 'small',
                    onClick: handlePrevClick,
                    theme: mergedTheme.peers.Button,
                    themeOverrides: mergedTheme.peerOverrides.Button
                  },
                  {
                    icon: () =>
                      (0, vue_1.h)(
                        _internal_1.NBaseIcon,
                        {
                          clsPrefix: mergedClsPrefix,
                          class: `${mergedClsPrefix}-calendar-prev-btn`
                        },
                        {
                          default: () =>
                            (0, vue_1.h)(icons_1.ChevronLeftIcon, null)
                        }
                      )
                  }
                ),
                (0, vue_1.h)(
                  button_1.NButton,
                  {
                    size: 'small',
                    onClick: handleTodayClick,
                    theme: mergedTheme.peers.Button,
                    themeOverrides: mergedTheme.peerOverrides.Button
                  },
                  { default: () => today }
                ),
                (0, vue_1.h)(
                  button_1.NButton,
                  {
                    size: 'small',
                    onClick: handleNextClick,
                    theme: mergedTheme.peers.Button,
                    themeOverrides: mergedTheme.peerOverrides.Button
                  },
                  {
                    icon: () =>
                      (0, vue_1.h)(
                        _internal_1.NBaseIcon,
                        {
                          clsPrefix: mergedClsPrefix,
                          class: `${mergedClsPrefix}-calendar-next-btn`
                        },
                        {
                          default: () =>
                            (0, vue_1.h)(icons_1.ChevronRightIcon, null)
                        }
                      )
                  }
                )
              )
          })
        )
      ),
      (0, vue_1.h)(
        'div',
        { class: `${mergedClsPrefix}-calendar-dates` },
        this.dateItems.map(
          ({ dateObject, ts, inCurrentMonth, isCurrentDate }, index) => {
            var _a
            const { year, month, date } = dateObject
            const fullDate = (0, date_fns_1.format)(ts, 'yyyy-MM-dd')
            const disabled =
              !inCurrentMonth ||
              (isDateDisabled === null || isDateDisabled === void 0
                ? void 0
                : isDateDisabled(ts)) === true
            const selected =
              normalizedValue === (0, date_fns_1.startOfDay)(ts).valueOf()
            return (0, vue_1.h)(
              'div',
              {
                key: isCurrentDate ? 'current' : index,
                class: [
                  `${mergedClsPrefix}-calendar-cell`,
                  disabled && `${mergedClsPrefix}-calendar-cell--disabled`,
                  isCurrentDate && `${mergedClsPrefix}-calendar-cell--current`,
                  selected && `${mergedClsPrefix}-calendar-cell--selected`
                ],
                onClick: () => {
                  this.doUpdateValue(ts, {
                    year,
                    month: month + 1,
                    date
                  })
                  this.monthTs = (0, date_fns_1.startOfMonth)(ts).valueOf()
                }
              },
              (0, vue_1.h)(
                'div',
                { class: `${mergedClsPrefix}-calendar-date` },
                disabled
                  ? (0, vue_1.h)(
                      'div',
                      {
                        class: `${mergedClsPrefix}-calendar-date__date`,
                        title: fullDate,
                        key: 'disabled'
                      },
                      date
                    )
                  : (0, vue_1.h)(
                      'div',
                      {
                        class: `${mergedClsPrefix}-calendar-date__date`,
                        title: fullDate,
                        key: 'available'
                      },
                      date
                    ),
                index < 7 &&
                  (0, vue_1.h)(
                    'div',
                    {
                      class: `${mergedClsPrefix}-calendar-date__day`,
                      title: fullDate
                    },
                    (0, date_fns_1.format)(ts, 'EEE', {
                      locale
                    })
                  )
              ),
              (_a = $slots.default) === null || _a === void 0
                ? void 0
                : _a.call($slots, {
                    year,
                    month: month + 1,
                    date
                  }),
              (0, vue_1.h)('div', {
                class: `${mergedClsPrefix}-calendar-cell__bar`,
                key: month
              })
            )
          }
        )
      )
    )
  }
})
