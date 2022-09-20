'use strict'
Object.defineProperty(exports, '__esModule', { value: true })
const vue_1 = require('vue')
const button_1 = require('../../../button')
const icons_1 = require('../../../_internal/icons')
const _internal_1 = require('../../../_internal')
const use_calendar_1 = require('./use-calendar')
const _utils_1 = require('../../../_utils')
/**
 * Date Panel
 * Update picker value on:
 * 1. item click
 * 2. clear click
 */
exports.default = (0, vue_1.defineComponent)({
  name: 'DatePanel',
  props: use_calendar_1.useCalendarProps,
  setup(props) {
    if (process.env.NODE_ENV !== 'production') {
      ;(0, vue_1.watchEffect)(() => {
        var _a
        if (
          (_a = props.actions) === null || _a === void 0
            ? void 0
            : _a.includes('confirm')
        ) {
          ;(0, _utils_1.warnOnce)(
            'date-picker',
            'The `confirm` action is not supported for n-date-picker of `date` type'
          )
        }
      })
    }
    return (0, use_calendar_1.useCalendar)(props, 'date')
  },
  render() {
    var _a, _b, _c
    const { mergedClsPrefix, mergedTheme, shortcuts } = this
    return (0, vue_1.h)(
      'div',
      {
        ref: 'selfRef',
        tabindex: 0,
        class: `${mergedClsPrefix}-date-panel ${mergedClsPrefix}-date-panel--date`,
        onFocus: this.handlePanelFocus,
        onKeydown: this.handlePanelKeyDown
      },
      (0, vue_1.h)(
        'div',
        { class: `${mergedClsPrefix}-date-panel-calendar` },
        (0, vue_1.h)(
          'div',
          { class: `${mergedClsPrefix}-date-panel-month` },
          (0, vue_1.h)(
            'div',
            {
              class: `${mergedClsPrefix}-date-panel-month__fast-prev`,
              onClick: this.prevYear
            },
            (0, vue_1.h)(icons_1.FastBackwardIcon, null)
          ),
          (0, vue_1.h)(
            'div',
            {
              class: `${mergedClsPrefix}-date-panel-month__prev`,
              onClick: this.prevMonth
            },
            (0, vue_1.h)(icons_1.BackwardIcon, null)
          ),
          (0, vue_1.h)(
            'div',
            { class: `${mergedClsPrefix}-date-panel-month__month-year` },
            this.locale.monthBeforeYear
              ? `${this.calendarMonth} ${this.calendarYear}`
              : `${this.calendarYear} ${this.calendarMonth}`
          ),
          (0, vue_1.h)(
            'div',
            {
              class: `${mergedClsPrefix}-date-panel-month__next`,
              onClick: this.nextMonth
            },
            (0, vue_1.h)(icons_1.ForwardIcon, null)
          ),
          (0, vue_1.h)(
            'div',
            {
              class: `${mergedClsPrefix}-date-panel-month__fast-next`,
              onClick: this.nextYear
            },
            (0, vue_1.h)(icons_1.FastForwardIcon, null)
          )
        ),
        (0, vue_1.h)(
          'div',
          { class: `${mergedClsPrefix}-date-panel-weekdays` },
          this.weekdays.map((weekday) =>
            (0, vue_1.h)(
              'div',
              {
                key: weekday,
                class: `${mergedClsPrefix}-date-panel-weekdays__day`
              },
              weekday
            )
          )
        ),
        (0, vue_1.h)(
          'div',
          { class: `${mergedClsPrefix}-date-panel-dates` },
          this.dateArray.map((dateItem, i) =>
            (0, vue_1.h)(
              'div',
              {
                'data-n-date': true,
                key: i,
                class: [
                  `${mergedClsPrefix}-date-panel-date`,
                  {
                    [`${mergedClsPrefix}-date-panel-date--current`]:
                      dateItem.isCurrentDate,
                    [`${mergedClsPrefix}-date-panel-date--selected`]:
                      dateItem.selected,
                    [`${mergedClsPrefix}-date-panel-date--excluded`]:
                      !dateItem.inCurrentMonth,
                    [`${mergedClsPrefix}-date-panel-date--disabled`]:
                      this.mergedIsDateDisabled(dateItem.ts)
                  }
                ],
                onClick: () => this.handleDateClick(dateItem)
              },
              dateItem.dateObject.date,
              dateItem.isCurrentDate
                ? (0, vue_1.h)('div', {
                    class: `${mergedClsPrefix}-date-panel-date__sup`
                  })
                : null
            )
          )
        )
      ),
      this.datePickerSlots.footer
        ? (0, vue_1.h)(
            'div',
            { class: `${mergedClsPrefix}-date-panel-footer` },
            (0, vue_1.renderSlot)(this.datePickerSlots, 'footer')
          )
        : null,
      ((_a = this.actions) === null || _a === void 0 ? void 0 : _a.length) ||
        shortcuts
        ? (0, vue_1.h)(
            'div',
            { class: `${mergedClsPrefix}-date-panel-actions` },
            (0, vue_1.h)(
              'div',
              { class: `${mergedClsPrefix}-date-panel-actions__prefix` },
              shortcuts &&
                Object.keys(shortcuts).map((key) => {
                  const shortcut = shortcuts[key]
                  return Array.isArray(shortcut)
                    ? null
                    : (0, vue_1.h)(
                        button_1.NxButton,
                        {
                          size: 'tiny',
                          onMouseenter: () => {
                            this.handleSingleShortcutMouseenter(shortcut)
                          },
                          onClick: () => {
                            this.handleSingleShortcutClick(shortcut)
                          },
                          onMouseleave: () => {
                            this.handleShortcutMouseleave()
                          }
                        },
                        { default: () => key }
                      )
                })
            ),
            (0, vue_1.h)(
              'div',
              { class: `${mergedClsPrefix}-date-panel-actions__suffix` },
              (
                (_b = this.actions) === null || _b === void 0
                  ? void 0
                  : _b.includes('clear')
              )
                ? (0, vue_1.h)(
                    button_1.NButton,
                    {
                      theme: mergedTheme.peers.Button,
                      themeOverrides: mergedTheme.peerOverrides.Button,
                      size: 'tiny',
                      onClick: this.handleClearClick
                    },
                    { default: () => this.locale.clear }
                  )
                : null,
              (
                (_c = this.actions) === null || _c === void 0
                  ? void 0
                  : _c.includes('now')
              )
                ? (0, vue_1.h)(
                    button_1.NButton,
                    {
                      theme: mergedTheme.peers.Button,
                      themeOverrides: mergedTheme.peerOverrides.Button,
                      size: 'tiny',
                      onClick: this.handleNowClick
                    },
                    { default: () => this.locale.now }
                  )
                : null
            )
          )
        : null,
      (0, vue_1.h)(_internal_1.NBaseFocusDetector, {
        onFocus: this.handleFocusDetectorFocus
      })
    )
  }
})