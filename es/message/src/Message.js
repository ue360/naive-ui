import { computed, h, defineComponent, inject } from 'vue'
import {
  InfoIcon,
  SuccessIcon,
  WarningIcon,
  ErrorIcon
} from '../../_internal/icons'
import {
  NIconSwitchTransition,
  NBaseLoading,
  NBaseIcon,
  NBaseClose
} from '../../_internal'
import { render, createKey } from '../../_utils'
import { useTheme } from '../../_mixins'
import { messageLight } from '../styles'
import { messageProps } from './message-props'
import { messageProviderInjectionKey } from './MessageProvider'
import style from './styles/index.cssr'
const iconMap = {
  info: h(InfoIcon, null),
  success: h(SuccessIcon, null),
  warning: h(WarningIcon, null),
  error: h(ErrorIcon, null)
}
export default defineComponent({
  name: 'Message',
  props: messageProps,
  setup(props) {
    const {
      props: messageProviderProps,
      mergedClsPrefixRef
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    } = inject(messageProviderInjectionKey)
    const themeRef = useTheme(
      'Message',
      'Message',
      style,
      messageLight,
      messageProviderProps,
      mergedClsPrefixRef
    )
    return {
      mergedClsPrefix: mergedClsPrefixRef,
      handleClose() {
        var _a
        ;(_a = props.onClose) === null || _a === void 0
          ? void 0
          : _a.call(props)
      },
      cssVars: computed(() => {
        const { type } = props
        const {
          common: { cubicBezierEaseInOut },
          self: {
            padding,
            margin,
            maxWidth,
            iconMargin,
            closeMargin,
            closeSize,
            iconSize,
            fontSize,
            lineHeight,
            borderRadius,
            iconColorInfo,
            iconColorSuccess,
            iconColorWarning,
            iconColorError,
            iconColorLoading,
            [createKey('textColor', type)]: textColor,
            [createKey('boxShadow', type)]: boxShadow,
            [createKey('color', type)]: color,
            [createKey('closeColor', type)]: closeColor,
            [createKey('closeColorPressed', type)]: closeColorPressed,
            [createKey('closeColorHover', type)]: closeColorHover
          }
        } = themeRef.value
        return {
          '--bezier': cubicBezierEaseInOut,
          '--margin': margin,
          '--padding': padding,
          '--max-width': maxWidth,
          '--font-size': fontSize,
          '--icon-margin': iconMargin,
          '--icon-size': iconSize,
          '--close-size': closeSize,
          '--close-margin': closeMargin,
          '--text-color': textColor,
          '--color': color,
          '--box-shadow': boxShadow,
          '--icon-color-info': iconColorInfo,
          '--icon-color-success': iconColorSuccess,
          '--icon-color-warning': iconColorWarning,
          '--icon-color-error': iconColorError,
          '--icon-color-loading': iconColorLoading,
          '--close-color': closeColor,
          '--close-color-pressed': closeColorPressed,
          '--close-color-hover': closeColorHover,
          '--line-height': lineHeight,
          '--border-radius': borderRadius
        }
      }),
      placement: messageProviderProps.placement
    }
  },
  render() {
    const {
      icon,
      type,
      closable,
      content,
      mergedClsPrefix,
      cssVars,
      handleClose
    } = this
    return h(
      'div',
      {
        class: `${mergedClsPrefix}-message-wrapper`,
        onMouseenter: this.onMouseenter,
        onMouseleave: this.onMouseleave,
        style: Object.assign(Object.assign({}, cssVars), {
          alignItems: this.placement.startsWith('top')
            ? 'flex-start'
            : 'flex-end'
        })
      },
      h(
        'div',
        {
          class: `${mergedClsPrefix}-message ${mergedClsPrefix}-message--${type}-type`
        },
        h(
          'div',
          {
            class: `${mergedClsPrefix}-message__icon ${mergedClsPrefix}-message__icon--${type}-type`
          },
          h(NIconSwitchTransition, null, {
            default: () => [createIconVNode(icon, type, mergedClsPrefix)]
          })
        ),
        h(
          'div',
          { class: `${mergedClsPrefix}-message__content` },
          render(content)
        ),
        closable
          ? h(NBaseClose, {
              clsPrefix: mergedClsPrefix,
              class: `${mergedClsPrefix}-message__close`,
              onClick: handleClose
            })
          : null
      )
    )
  }
})
function createIconVNode(icon, type, clsPrefix) {
  if (typeof icon === 'function') {
    return icon()
  } else {
    return h(
      NBaseIcon,
      { clsPrefix: clsPrefix, key: type },
      {
        default: () =>
          type === 'loading'
            ? h(NBaseLoading, {
                clsPrefix: clsPrefix,
                strokeWidth: 24,
                scale: 0.85
              })
            : iconMap[type]
      }
    )
  }
}
