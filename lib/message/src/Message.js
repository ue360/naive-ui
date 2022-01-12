'use strict'
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod }
  }
Object.defineProperty(exports, '__esModule', { value: true })
const vue_1 = require('vue')
const icons_1 = require('../../_internal/icons')
const _internal_1 = require('../../_internal')
const _utils_1 = require('../../_utils')
const _mixins_1 = require('../../_mixins')
const styles_1 = require('../styles')
const message_props_1 = require('./message-props')
const MessageProvider_1 = require('./MessageProvider')
const index_cssr_1 = __importDefault(require('./styles/index.cssr'))
const iconMap = {
  info: (0, vue_1.h)(icons_1.InfoIcon, null),
  success: (0, vue_1.h)(icons_1.SuccessIcon, null),
  warning: (0, vue_1.h)(icons_1.WarningIcon, null),
  error: (0, vue_1.h)(icons_1.ErrorIcon, null)
}
exports.default = (0, vue_1.defineComponent)({
  name: 'Message',
  props: message_props_1.messageProps,
  setup(props) {
    const {
      props: messageProviderProps,
      mergedClsPrefixRef
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    } = (0, vue_1.inject)(MessageProvider_1.messageProviderInjectionKey)
    const themeRef = (0, _mixins_1.useTheme)(
      'Message',
      'Message',
      index_cssr_1.default,
      styles_1.messageLight,
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
      cssVars: (0, vue_1.computed)(() => {
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
            [(0, _utils_1.createKey)('textColor', type)]: textColor,
            [(0, _utils_1.createKey)('boxShadow', type)]: boxShadow,
            [(0, _utils_1.createKey)('color', type)]: color,
            [(0, _utils_1.createKey)('closeColor', type)]: closeColor,
            [(0, _utils_1.createKey)('closeColorPressed', type)]:
              closeColorPressed,
            [(0, _utils_1.createKey)('closeColorHover', type)]: closeColorHover
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
    return (0, vue_1.h)(
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
      (0, vue_1.h)(
        'div',
        {
          class: `${mergedClsPrefix}-message ${mergedClsPrefix}-message--${type}-type`
        },
        (0, vue_1.h)(
          'div',
          {
            class: `${mergedClsPrefix}-message__icon ${mergedClsPrefix}-message__icon--${type}-type`
          },
          (0, vue_1.h)(_internal_1.NIconSwitchTransition, null, {
            default: () => [createIconVNode(icon, type, mergedClsPrefix)]
          })
        ),
        (0, vue_1.h)(
          'div',
          { class: `${mergedClsPrefix}-message__content` },
          (0, _utils_1.render)(content)
        ),
        closable
          ? (0, vue_1.h)(_internal_1.NBaseClose, {
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
    return (0, vue_1.h)(
      _internal_1.NBaseIcon,
      { clsPrefix: clsPrefix, key: type },
      {
        default: () =>
          type === 'loading'
            ? (0, vue_1.h)(_internal_1.NBaseLoading, {
                clsPrefix: clsPrefix,
                strokeWidth: 24,
                scale: 0.85
              })
            : iconMap[type]
      }
    )
  }
}
