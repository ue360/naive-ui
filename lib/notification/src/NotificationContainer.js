'use strict'
Object.defineProperty(exports, '__esModule', { value: true })
const vue_1 = require('vue')
const _internal_1 = require('../../_internal')
const NotificationProvider_1 = require('./NotificationProvider')
exports.default = (0, vue_1.defineComponent)({
  name: 'NotificationContainer',
  props: {
    scrollable: {
      type: Boolean,
      required: true
    },
    placement: {
      type: String,
      required: true
    }
  },
  setup() {
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    const { mergedThemeRef, mergedClsPrefixRef } = (0, vue_1.inject)(
      NotificationProvider_1.notificationProviderInjectionKey
    )
    return {
      mergedTheme: mergedThemeRef,
      mergedClsPrefix: mergedClsPrefixRef
    }
  },
  render() {
    const { $slots, scrollable, mergedClsPrefix, mergedTheme, placement } = this
    return (0, vue_1.h)(
      'div',
      {
        class: [
          `${mergedClsPrefix}-notification-container`,
          scrollable && `${mergedClsPrefix}-notification-container--scrollable`,
          `${mergedClsPrefix}-notification-container--${placement}`
        ]
      },
      scrollable
        ? (0, vue_1.h)(
            _internal_1.NScrollbar,
            {
              theme: mergedTheme.peers.Scrollbar,
              themeOverrides: mergedTheme.peerOverrides.Scrollbar
            },
            $slots
          )
        : $slots
    )
  }
})