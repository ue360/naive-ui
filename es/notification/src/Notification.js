import { h, defineComponent, computed, inject } from 'vue'
import { getPadding } from 'seemly'
import { createKey, keysOf, render } from '../../_utils'
import { NBaseIcon, NBaseClose } from '../../_internal'
import {
  InfoIcon,
  SuccessIcon,
  WarningIcon,
  ErrorIcon
} from '../../_internal/icons'
import { notificationProviderInjectionKey } from './NotificationProvider'
const iconMap = {
  info: h(InfoIcon, null),
  success: h(SuccessIcon, null),
  warning: h(WarningIcon, null),
  error: h(ErrorIcon, null),
  default: null
}
export const notificationProps = {
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
export const notificationPropKeys = keysOf(notificationProps)
export default defineComponent({
  name: 'Notification',
  props: notificationProps,
  setup(props) {
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    const { mergedClsPrefixRef, mergedThemeRef } = inject(
      notificationProviderInjectionKey
    )
    return {
      mergedClsPrefix: mergedClsPrefixRef,
      showAvatar: computed(() => {
        return props.avatar || props.type !== 'default'
      }),
      handleCloseClick() {
        props.onClose()
      },
      cssVars: computed(() => {
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
            [createKey('iconColor', type)]: iconColor
          },
          common: {
            cubicBezierEaseOut,
            cubicBezierEaseIn,
            cubicBezierEaseInOut
          }
        } = mergedThemeRef.value
        const { left, right, top, bottom } = getPadding(padding)
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
    return h(
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
        ? h(
            'div',
            { class: `${mergedClsPrefix}-notification__avatar` },
            this.avatar
              ? render(this.avatar)
              : this.type !== 'default'
              ? h(
                  NBaseIcon,
                  { clsPrefix: mergedClsPrefix },
                  { default: () => iconMap[this.type] }
                )
              : null
          )
        : null,
      this.closable
        ? h(NBaseClose, {
            clsPrefix: mergedClsPrefix,
            class: `${mergedClsPrefix}-notification__close`,
            onClick: this.handleCloseClick
          })
        : null,
      h(
        'div',
        { ref: 'bodyRef', class: `${mergedClsPrefix}-notification-main` },
        this.title
          ? h(
              'div',
              { class: `${mergedClsPrefix}-notification-main__header` },
              render(this.title)
            )
          : null,
        this.description
          ? h(
              'div',
              { class: `${mergedClsPrefix}-notification-main__description` },
              render(this.description)
            )
          : null,
        this.content
          ? h(
              'pre',
              { class: `${mergedClsPrefix}-notification-main__content` },
              render(this.content)
            )
          : null,
        this.meta || this.action
          ? h(
              'div',
              { class: `${mergedClsPrefix}-notification-main-footer` },
              this.meta
                ? h(
                    'div',
                    {
                      class: `${mergedClsPrefix}-notification-main-footer__meta`
                    },
                    render(this.meta)
                  )
                : null,
              this.action
                ? h(
                    'div',
                    {
                      class: `${mergedClsPrefix}-notification-main-footer__action`
                    },
                    render(this.action)
                  )
                : null
            )
          : null
      )
    )
  }
})