'use strict'
Object.defineProperty(exports, '__esModule', { value: true })
const vue_1 = require('vue')
const vueuc_1 = require('vueuc')
const button_1 = require('../../../button')
const _internal_1 = require('../../../_internal')
const use_calendar_1 = require('./use-calendar')
const config_1 = require('../config')
/**
 * Month Panel
 * Update picker value on:
 * 1. item click
 * 2. clear click
 */
exports.default = (0, vue_1.defineComponent)({
  name: 'MonthPanel',
  props: Object.assign(Object.assign({}, use_calendar_1.useCalendar.props), {
    type: {
      type: String,
      required: true
    }
  }),
  setup(props) {
    const useCalendarRef = (0, use_calendar_1.useCalendar)(props, props.type)
    const renderItem = (item, i, mergedClsPrefix) => {
      const { mergedIsDateDisabled, handleDateClick } = useCalendarRef
      return (0, vue_1.h)(
        'div',
        {
          'data-n-date': true,
          key: i,
          class: [
            `${mergedClsPrefix}-date-panel-month-calendar__picker-col-item`,
            {
              [`${mergedClsPrefix}-date-panel-month-calendar__picker-col-item--current`]:
                item.type === 'month'
                  ? item.isCurrentMonth
                  : item.isCurrentYear,
              [`${mergedClsPrefix}-date-panel-month-calendar__picker-col-item--selected`]:
                item.selected,
              [`${mergedClsPrefix}-date-panel-month-calendar__picker-col-item--disabled`]:
                mergedIsDateDisabled(item.ts)
            }
          ],
          onClick: () => handleDateClick(item)
        },
        item.type === 'month' ? item.dateObject.month + 1 : item.dateObject.year
      )
    }
    return Object.assign(Object.assign({}, useCalendarRef), { renderItem })
  },
  render() {
    const {
      mergedClsPrefix,
      mergedTheme,
      shortcuts,
      actions,
      renderItem,
      type
    } = this
    return (0, vue_1.h)(
      'div',
      {
        ref: 'selfRef',
        tabindex: 0,
        class: `${mergedClsPrefix}-date-panel ${mergedClsPrefix}-date-panel--month`,
        onFocus: this.handlePanelFocus,
        onKeydown: this.handlePanelKeyDown
      },
      (0, vue_1.h)(
        'div',
        { class: `${mergedClsPrefix}-date-panel-month-calendar` },
        (0, vue_1.h)(
          _internal_1.NScrollbar,
          {
            ref: 'scrollbarInstRef',
            class: `${mergedClsPrefix}-date-panel-month-calendar__picker-col`,
            theme: mergedTheme.peers.Scrollbar,
            themeOverrides: mergedTheme.peerOverrides.Scrollbar,
            container: this.virtualListContainer,
            content: this.virtualListContent,
            horizontalRailStyle: { zIndex: 1 },
            verticalRailStyle: { zIndex: 1 }
          },
          {
            default: () =>
              (0, vue_1.h)(
                vueuc_1.VirtualList,
                {
                  ref: 'yearScrollRef',
                  items: this.yearArray,
                  itemSize: config_1.MONTH_ITEM_HEIGHT,
                  showScrollbar: false,
                  keyField: 'ts',
                  onScroll: this.handleVirtualListScroll,
                  paddingBottom: 4
                },
                {
                  default: ({ item, index }) => {
                    return renderItem(item, index, mergedClsPrefix)
                  }
                }
              )
          }
        ),
        type === 'month'
          ? (0, vue_1.h)(
              'div',
              {
                class: `${mergedClsPrefix}-date-panel-month-calendar__picker-col`
              },
              (0, vue_1.h)(
                _internal_1.NScrollbar,
                {
                  ref: 'monthScrollRef',
                  theme: mergedTheme.peers.Scrollbar,
                  themeOverrides: mergedTheme.peerOverrides.Scrollbar
                },
                {
                  default: () => [
                    this.monthArray.map((monthItem, i) =>
                      renderItem(monthItem, i, mergedClsPrefix)
                    ),
                    (0, vue_1.h)('div', {
                      class: `${mergedClsPrefix}-date-panel-month-calendar__padding`
                    })
                  ]
                }
              )
            )
          : null
      ),
      this.datePickerSlots.footer
        ? (0, vue_1.h)(
            'div',
            { class: `${mergedClsPrefix}-date-panel-footer` },
            {
              default: this.datePickerSlots.footer
            }
          )
        : null,
      (actions === null || actions === void 0 ? void 0 : actions.length) ||
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
                actions === null || actions === void 0
                  ? void 0
                  : actions.includes('clear')
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
                actions === null || actions === void 0
                  ? void 0
                  : actions.includes('now')
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
                : null,
              (
                actions === null || actions === void 0
                  ? void 0
                  : actions.includes('confirm')
              )
                ? (0, vue_1.h)(
                    button_1.NButton,
                    {
                      theme: mergedTheme.peers.Button,
                      themeOverrides: mergedTheme.peerOverrides.Button,
                      size: 'tiny',
                      type: 'primary',
                      disabled: this.isDateInvalid,
                      onClick: this.handleConfirmClick
                    },
                    { default: () => this.locale.confirm }
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