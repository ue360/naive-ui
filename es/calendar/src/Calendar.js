import { computed, defineComponent, h, ref, Fragment, toRef } from 'vue'
import { format, getYear, addMonths, startOfDay, startOfMonth } from 'date-fns'
import { useMergedState } from 'vooks'
import { dateArray } from '../../date-picker/src/utils'
import { ChevronLeftIcon, ChevronRightIcon } from '../../_internal/icons'
import { NBaseIcon } from '../../_internal'
import { call } from '../../_utils'
import { NButton, NButtonGroup } from '../../button'
import { useConfig, useLocale, useTheme } from '../../_mixins'
import { calendarLight } from '../styles'
import style from './styles/index.cssr'
const calendarProps = Object.assign(Object.assign({}, useTheme.props), {
  isDateDisabled: Function,
  value: Number,
  defaultValue: {
    type: Number,
    defualt: null
  },
  'onUpdate:value': [Function, Array],
  onUpdateValue: [Function, Array]
})
export default defineComponent({
  name: 'Calendar',
  props: calendarProps,
  setup(props) {
    const { mergedClsPrefixRef } = useConfig(props)
    const themeRef = useTheme(
      'Calendar',
      'Calendar',
      style,
      calendarLight,
      props,
      mergedClsPrefixRef
    )
    const { localeRef, dateLocaleRef } = useLocale('DatePicker')
    const now = Date.now()
    // ts => timestamp
    const monthTsRef = ref(startOfMonth(now).valueOf())
    const uncontrolledValueRef = ref(props.defaultValue || null)
    const mergedValueRef = useMergedState(
      toRef(props, 'value'),
      uncontrolledValueRef
    )
    function doUpdateValue(value, time) {
      const { onUpdateValue, 'onUpdate:value': _onUpdateValue } = props
      if (onUpdateValue) {
        call(onUpdateValue, value, time)
      }
      if (_onUpdateValue) {
        call(_onUpdateValue, value, time)
      }
      uncontrolledValueRef.value = value
    }
    function handlePrevClick() {
      monthTsRef.value = addMonths(monthTsRef.value, -1).valueOf()
    }
    function handleNextClick() {
      monthTsRef.value = addMonths(monthTsRef.value, 1).valueOf()
    }
    function handleTodayClick() {
      monthTsRef.value = startOfMonth(now).valueOf()
    }
    return {
      mergedClsPrefix: mergedClsPrefixRef,
      locale: localeRef,
      dateLocale: dateLocaleRef,
      now,
      mergedValue: mergedValueRef,
      monthTs: monthTsRef,
      dateItems: computed(() => {
        return dateArray(
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
      cssVars: computed(() => {
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
    const normalizedValue = mergedValue && startOfDay(mergedValue).valueOf()
    const localeMonth = format(monthTs, 'MMMM', { locale })
    const year = getYear(monthTs)
    const title = monthBeforeYear
      ? `${localeMonth} ${year}`
      : `${year} ${localeMonth}`
    return h(
      'div',
      { class: `${mergedClsPrefix}-calendar`, style: cssVars },
      h(
        'div',
        { class: `${mergedClsPrefix}-calendar-header` },
        h('div', { class: `${mergedClsPrefix}-calendar-header__title` }, title),
        h(
          'div',
          { class: `${mergedClsPrefix}-calendar-header__extra` },
          h(NButtonGroup, null, {
            default: () =>
              h(
                Fragment,
                null,
                h(
                  NButton,
                  {
                    size: 'small',
                    onClick: handlePrevClick,
                    theme: mergedTheme.peers.Button,
                    themeOverrides: mergedTheme.peerOverrides.Button
                  },
                  {
                    icon: () =>
                      h(
                        NBaseIcon,
                        {
                          clsPrefix: mergedClsPrefix,
                          class: `${mergedClsPrefix}-calendar-prev-btn`
                        },
                        { default: () => h(ChevronLeftIcon, null) }
                      )
                  }
                ),
                h(
                  NButton,
                  {
                    size: 'small',
                    onClick: handleTodayClick,
                    theme: mergedTheme.peers.Button,
                    themeOverrides: mergedTheme.peerOverrides.Button
                  },
                  { default: () => today }
                ),
                h(
                  NButton,
                  {
                    size: 'small',
                    onClick: handleNextClick,
                    theme: mergedTheme.peers.Button,
                    themeOverrides: mergedTheme.peerOverrides.Button
                  },
                  {
                    icon: () =>
                      h(
                        NBaseIcon,
                        {
                          clsPrefix: mergedClsPrefix,
                          class: `${mergedClsPrefix}-calendar-next-btn`
                        },
                        { default: () => h(ChevronRightIcon, null) }
                      )
                  }
                )
              )
          })
        )
      ),
      h(
        'div',
        { class: `${mergedClsPrefix}-calendar-dates` },
        this.dateItems.map(
          ({ dateObject, ts, inCurrentMonth, isCurrentDate }, index) => {
            var _a
            const { year, month, date } = dateObject
            const fullDate = format(ts, 'yyyy-MM-dd')
            const disabled =
              !inCurrentMonth ||
              (isDateDisabled === null || isDateDisabled === void 0
                ? void 0
                : isDateDisabled(ts)) === true
            const selected = normalizedValue === startOfDay(ts).valueOf()
            return h(
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
                  this.monthTs = startOfMonth(ts).valueOf()
                }
              },
              h(
                'div',
                { class: `${mergedClsPrefix}-calendar-date` },
                disabled
                  ? h(
                      'div',
                      {
                        class: `${mergedClsPrefix}-calendar-date__date`,
                        title: fullDate,
                        key: 'disabled'
                      },
                      date
                    )
                  : h(
                      'div',
                      {
                        class: `${mergedClsPrefix}-calendar-date__date`,
                        title: fullDate,
                        key: 'available'
                      },
                      date
                    ),
                index < 7 &&
                  h(
                    'div',
                    {
                      class: `${mergedClsPrefix}-calendar-date__day`,
                      title: fullDate
                    },
                    format(ts, 'EEE', {
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
              h('div', {
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
