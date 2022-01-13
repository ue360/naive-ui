import { h, defineComponent } from 'vue'
import { VirtualList } from 'vueuc'
import { NButton, NxButton } from '../../../button'
import { NBaseFocusDetector, NScrollbar } from '../../../_internal'
import { useCalendar } from './use-calendar'
import { MONTH_ITEM_HEIGHT } from '../config'
/**
 * Month Panel
 * Update picker value on:
 * 1. item click
 * 2. clear click
 */
export default defineComponent({
  name: 'MonthPanel',
  props: Object.assign(Object.assign({}, useCalendar.props), {
    type: {
      type: String,
      required: true
    }
  }),
  setup(props) {
    const useCalendarRef = useCalendar(props, props.type)
    const renderItem = (item, i, mergedClsPrefix) => {
      const { mergedIsDateDisabled, handleDateClick } = useCalendarRef
      return h(
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
    return h(
      'div',
      {
        ref: 'selfRef',
        tabindex: 0,
        class: `${mergedClsPrefix}-date-panel ${mergedClsPrefix}-date-panel--month`,
        onFocus: this.handlePanelFocus,
        onKeydown: this.handlePanelKeyDown
      },
      h(
        'div',
        { class: `${mergedClsPrefix}-date-panel-month-calendar` },
        h(
          NScrollbar,
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
              h(
                VirtualList,
                {
                  ref: 'yearScrollRef',
                  items: this.yearArray,
                  itemSize: MONTH_ITEM_HEIGHT,
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
          ? h(
              'div',
              {
                class: `${mergedClsPrefix}-date-panel-month-calendar__picker-col`
              },
              h(
                NScrollbar,
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
                    h('div', {
                      class: `${mergedClsPrefix}-date-panel-month-calendar__padding`
                    })
                  ]
                }
              )
            )
          : null
      ),
      this.datePickerSlots.footer
        ? h(
            'div',
            { class: `${mergedClsPrefix}-date-panel-footer` },
            {
              default: this.datePickerSlots.footer
            }
          )
        : null,
      (actions === null || actions === void 0 ? void 0 : actions.length) ||
        shortcuts
        ? h(
            'div',
            { class: `${mergedClsPrefix}-date-panel-actions` },
            h(
              'div',
              { class: `${mergedClsPrefix}-date-panel-actions__prefix` },
              shortcuts &&
                Object.keys(shortcuts).map((key) => {
                  const shortcut = shortcuts[key]
                  return Array.isArray(shortcut)
                    ? null
                    : h(
                        NxButton,
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
            h(
              'div',
              { class: `${mergedClsPrefix}-date-panel-actions__suffix` },
              (
                actions === null || actions === void 0
                  ? void 0
                  : actions.includes('clear')
              )
                ? h(
                    NButton,
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
                ? h(
                    NButton,
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
                ? h(
                    NButton,
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
      h(NBaseFocusDetector, { onFocus: this.handleFocusDetectorFocus })
    )
  }
})
