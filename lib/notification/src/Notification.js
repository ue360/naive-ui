'use strict'
Object.defineProperty(exports, '__esModule', { value: true })
exports.notificationPropKeys = exports.notificationProps = void 0
const vue_1 = require('vue')
const seemly_1 = require('seemly')
const _utils_1 = require('../../_utils')
const _internal_1 = require('../../_internal')
const icons_1 = require('../../_internal/icons')
const NotificationProvider_1 = require('./NotificationProvider')
const iconMap = {
  info: (0, vue_1.h)(icons_1.InfoIcon, null),
  success: (0, vue_1.h)(icons_1.SuccessIcon, null),
  warning: (0, vue_1.h)(icons_1.WarningIcon, null),
  error: (0, vue_1.h)(icons_1.ErrorIcon, null),
  default: null
}
exports.notificationProps = {
  closable: {
    type: Boolean,
    default: true
  },
  type: {
    type: String,
    default: 'default'
  },
  avatar: Function,
  // BUG
  // Wired Case, can't be set to [String, Function] as PropType<string | (() => VNodeChild)>,
  title: [String, Function],
  description: [String, Function],
  content: [String, Function],
  meta: [String, Function],
  action: [String, Function],
  onClose: {
    type: Function,
    required: true
  }
}
exports.notificationPropKeys = (0, _utils_1.keysOf)(exports.notificationProps)
exports.default = (0, vue_1.defineComponent)({
  name: 'Notification',
  props: exports.notificationProps,
  setup(props) {
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    const { mergedClsPrefixRef, mergedThemeRef } = (0, vue_1.inject)(
      NotificationProvider_1.notificationProviderInjectionKey
    )
    return {
      mergedClsPrefix: mergedClsPrefixRef,
      showAvatar: (0, vue_1.computed)(() => {
        return props.avatar || props.type !== 'default'
      }),
      handleCloseClick() {
        props.onClose()
      },
      cssVars: (0, vue_1.computed)(() => {
        const { type } = props
        const {
          self: {
            color,
            textColor,
            closeColor,
            closeColorHover,
            closeColorPressed,
            headerTextColor,
            descriptionTextColor,
            actionTextColor,
            borderRadius,
            headerFontWeight,
            boxShadow,
            lineHeight,
            fontSize,
            closeMargin,
            closeSize,
            width,
            padding,
            [(0, _utils_1.createKey)('iconColor', type)]: iconColor
          },
          common: {
            cubicBezierEaseOut,
            cubicBezierEaseIn,
            cubicBezierEaseInOut
          }
        } = mergedThemeRef.value
        const { left, right, top, bottom } = (0, seemly_1.getPadding)(padding)
        return {
          '--color': color,
          '--font-size': fontSize,
          '--text-color': textColor,
          '--description-text-color': descriptionTextColor,
          '--action-text-color': actionTextColor,
          '--title-text-color': headerTextColor,
          '--title-font-weight': headerFontWeight,
          '--bezier': cubicBezierEaseInOut,
          '--bezier-ease-out': cubicBezierEaseOut,
          '--bezier-ease-in': cubicBezierEaseIn,
          '--border-radius': borderRadius,
          '--box-shadow': boxShadow,
          '--close-color': closeColor,
          '--close-color-hover': closeColorHover,
          '--close-color-pressed': closeColorPressed,
          '--line-height': lineHeight,
          '--icon-color': iconColor,
          '--close-margin': closeMargin,
          '--close-size': closeSize,
          '--width': width,
          '--padding-left': left,
          '--padding-right': right,
          '--padding-top': top,
          '--padding-bottom': bottom
        }
      })
    }
  },
  render() {
    const { mergedClsPrefix } = this
    return (0, vue_1.h)(
      'div',
      {
        class: [
          `${mergedClsPrefix}-notification`,
          {
            [`${mergedClsPrefix}-notification--closable`]: this.closable,
            [`${mergedClsPrefix}-notification--show-avatar`]: this.showAvatar
          }
        ],
        style: this.cssVars
      },
      this.showAvatar
        ? (0, vue_1.h)(
            'div',
            { class: `${mergedClsPrefix}-notification__avatar` },
            this.avatar
              ? (0, _utils_1.render)(this.avatar)
              : this.type !== 'default'
              ? (0, vue_1.h)(
                  _internal_1.NBaseIcon,
                  { clsPrefix: mergedClsPrefix },
                  { default: () => iconMap[this.type] }
                )
              : null
          )
        : null,
      this.closable
        ? (0, vue_1.h)(_internal_1.NBaseClose, {
            clsPrefix: mergedClsPrefix,
            class: `${mergedClsPrefix}-notification__close`,
            onClick: this.handleCloseClick
          })
        : null,
      (0, vue_1.h)(
        'div',
        { ref: 'bodyRef', class: `${mergedClsPrefix}-notification-main` },
        this.title
          ? (0, vue_1.h)(
              'div',
              { class: `${mergedClsPrefix}-notification-main__header` },
              (0, _utils_1.render)(this.title)
            )
          : null,
        this.description
          ? (0, vue_1.h)(
              'div',
              { class: `${mergedClsPrefix}-notification-main__description` },
              (0, _utils_1.render)(this.description)
            )
          : null,
        this.content
          ? (0, vue_1.h)(
              'pre',
              { class: `${mergedClsPrefix}-notification-main__content` },
              (0, _utils_1.render)(this.content)
            )
          : null,
        this.meta || this.action
          ? (0, vue_1.h)(
              'div',
              { class: `${mergedClsPrefix}-notification-main-footer` },
              this.meta
                ? (0, vue_1.h)(
                    'div',
                    {
                      class: `${mergedClsPrefix}-notification-main-footer__meta`
                    },
                    (0, _utils_1.render)(this.meta)
                  )
                : null,
              this.action
                ? (0, vue_1.h)(
                    'div',
                    {
                      class: `${mergedClsPrefix}-notification-main-footer__action`
                    },
                    (0, _utils_1.render)(this.action)
                  )
                : null
            )
          : null
      )
    )
  }
})