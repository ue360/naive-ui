'use strict'
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod }
  }
Object.defineProperty(exports, '__esModule', { value: true })
exports.dialogPropKeys = exports.dialogProps = void 0
const vue_1 = require('vue')
const _mixins_1 = require('../../_mixins')
const _utils_1 = require('../../_utils')
const _internal_1 = require('../../_internal')
const button_1 = require('../../button')
const icons_1 = require('../../_internal/icons')
const styles_1 = require('../styles')
const index_cssr_1 = __importDefault(require('./styles/index.cssr'))
const infoIcon = (0, vue_1.h)(icons_1.InfoIcon, null)
const iconMap = {
  default: infoIcon,
  info: infoIcon,
  success: (0, vue_1.h)(icons_1.SuccessIcon, null),
  warning: (0, vue_1.h)(icons_1.WarningIcon, null),
  error: (0, vue_1.h)(icons_1.ErrorIcon, null)
}
const dialogProps = {
  icon: Function,
  type: {
    type: String,
    default: 'default'
  },
  title: [String, Function],
  closable: {
    type: Boolean,
    default: true
  },
  negativeText: String,
  positiveText: String,
  content: [String, Function],
  action: Function,
  showIcon: {
    type: Boolean,
    default: true
  },
  loading: Boolean,
  bordered: Boolean,
  iconPlacement: String,
  onPositiveClick: Function,
  onNegativeClick: Function,
  onClose: Function
}
exports.dialogProps = dialogProps
exports.dialogPropKeys = (0, _utils_1.keysOf)(dialogProps)
exports.default = (0, vue_1.defineComponent)({
  name: 'Dialog',
  alias: [
    'NimbusConfirmCard',
    'Confirm' // deprecated
  ],
  props: Object.assign(
    Object.assign({}, _mixins_1.useTheme.props),
    dialogProps
  ),
  setup(props) {
    const { NConfigProvider, mergedClsPrefixRef } = (0, _mixins_1.useConfig)(
      props
    )
    const mergedIconPlacementRef = (0, vue_1.computed)(() => {
      var _a, _b, _c
      const { iconPlacement } = props
      return (_c =
        iconPlacement !== null && iconPlacement !== void 0
          ? iconPlacement
          : (_b =
              (_a =
                NConfigProvider === null || NConfigProvider === void 0
                  ? void 0
                  : NConfigProvider.mergedComponentPropsRef.value) === null ||
              _a === void 0
                ? void 0
                : _a.Dialog) === null || _b === void 0
          ? void 0
          : _b.iconPlacement) !== null && _c !== void 0
        ? _c
        : 'left'
    })
    function handlePositiveClick(e) {
      const { onPositiveClick } = props
      if (onPositiveClick) onPositiveClick(e)
    }
    function handleNegativeClick(e) {
      const { onNegativeClick } = props
      if (onNegativeClick) onNegativeClick(e)
    }
    function handleCloseClick() {
      const { onClose } = props
      if (onClose) onClose()
    }
    const themeRef = (0, _mixins_1.useTheme)(
      'Dialog',
      'Dialog',
      index_cssr_1.default,
      styles_1.dialogLight,
      props,
      mergedClsPrefixRef
    )
    return {
      mergedClsPrefix: mergedClsPrefixRef,
      mergedIconPlacement: mergedIconPlacementRef,
      mergedTheme: themeRef,
      handlePositiveClick,
      handleNegativeClick,
      handleCloseClick,
      cssVars: (0, vue_1.computed)(() => {
        const { type, iconPlacement } = props
        const {
          common: { cubicBezierEaseInOut },
          self: {
            fontSize,
            lineHeight,
            border,
            titleTextColor,
            textColor,
            color,
            closeColor,
            closeColorHover,
            closeColorPressed,
            borderRadius,
            titleFontWeight,
            titleFontSize,
            padding,
            iconSize,
            actionSpace,
            contentMargin,
            closeSize,
            [iconPlacement === 'top' ? 'iconMarginIconTop' : 'iconMargin']:
              iconMargin,
            [iconPlacement === 'top' ? 'closeMarginIconTop' : 'closeMargin']:
              closeMargin,
            [(0, _utils_1.createKey)('iconColor', type)]: iconColor
          }
        } = themeRef.value
        return {
          '--font-size': fontSize,
          '--icon-color': iconColor,
          '--bezier': cubicBezierEaseInOut,
          '--close-margin': closeMargin,
          '--icon-margin': iconMargin,
          '--icon-size': iconSize,
          '--close-size': closeSize,
          '--close-color': closeColor,
          '--close-color-hover': closeColorHover,
          '--close-color-pressed': closeColorPressed,
          '--color': color,
          '--text-color': textColor,
          '--border-radius': borderRadius,
          '--padding': padding,
          '--line-height': lineHeight,
          '--border': border,
          '--content-margin': contentMargin,
          '--title-font-size': titleFontSize,
          '--title-font-weight': titleFontWeight,
          '--title-text-color': titleTextColor,
          '--action-space': actionSpace
        }
      })
    }
  },
  render() {
    const {
      $slots,
      bordered,
      mergedIconPlacement,
      cssVars,
      closable,
      showIcon,
      title,
      content,
      action,
      negativeText,
      positiveText,
      handlePositiveClick,
      handleNegativeClick,
      mergedTheme,
      loading,
      type,
      mergedClsPrefix
    } = this
    return (0, vue_1.h)(
      'div',
      {
        class: [
          `${mergedClsPrefix}-dialog`,
          `${mergedClsPrefix}-dialog--icon-${mergedIconPlacement}`,
          bordered && `${mergedClsPrefix}-dialog--bordered`
        ],
        style: cssVars
      },
      closable
        ? (0, vue_1.h)(_internal_1.NBaseClose, {
            clsPrefix: mergedClsPrefix,
            class: `${mergedClsPrefix}-dialog__close`,
            onClick: this.handleCloseClick
          })
        : null,
      showIcon && mergedIconPlacement === 'top'
        ? (0, vue_1.h)(
            'div',
            { class: `${mergedClsPrefix}-dialog-icon-container` },
            (0, vue_1.h)(
              _internal_1.NBaseIcon,
              {
                clsPrefix: mergedClsPrefix,
                class: `${mergedClsPrefix}-dialog__icon`
              },
              {
                default: () =>
                  (0, vue_1.renderSlot)($slots, 'icon', undefined, () => [
                    this.icon
                      ? (0, _utils_1.render)(this.icon)
                      : iconMap[this.type]
                  ])
              }
            )
          )
        : null,
      (0, vue_1.h)(
        'div',
        { class: `${mergedClsPrefix}-dialog__title` },
        showIcon && mergedIconPlacement === 'left'
          ? (0, vue_1.h)(
              _internal_1.NBaseIcon,
              {
                clsPrefix: mergedClsPrefix,
                class: `${mergedClsPrefix}-dialog__icon`
              },
              {
                default: () =>
                  (0, vue_1.renderSlot)($slots, 'icon', undefined, () => [
                    this.icon
                      ? (0, _utils_1.render)(this.icon)
                      : iconMap[this.type]
                  ])
              }
            )
          : null,
        (0, vue_1.renderSlot)($slots, 'header', undefined, () => [
          (0, _utils_1.render)(title)
        ])
      ),
      (0, vue_1.h)(
        'div',
        { class: `${mergedClsPrefix}-dialog__content` },
        (0, vue_1.renderSlot)($slots, 'default', undefined, () => [
          (0, _utils_1.render)(content)
        ])
      ),
      $slots.action || positiveText || negativeText || action
        ? (0, vue_1.h)(
            'div',
            { class: `${mergedClsPrefix}-dialog__action` },
            (0, vue_1.renderSlot)(
              $slots,
              'action',
              undefined,
              action
                ? () => [(0, _utils_1.render)(action)]
                : () => [
                    this.negativeText &&
                      (0, vue_1.h)(
                        button_1.NButton,
                        {
                          theme: mergedTheme.peers.Button,
                          themeOverrides: mergedTheme.peerOverrides.Button,
                          ghost: true,
                          size: 'small',
                          onClick: handleNegativeClick
                        },
                        {
                          default: () => (0, _utils_1.render)(this.negativeText)
                        }
                      ),
                    this.positiveText &&
                      (0, vue_1.h)(
                        button_1.NButton,
                        {
                          theme: mergedTheme.peers.Button,
                          themeOverrides: mergedTheme.peerOverrides.Button,
                          disabled: loading,
                          loading: loading,
                          size: 'small',
                          type: type === 'default' ? 'primary' : type,
                          onClick: handlePositiveClick
                        },
                        {
                          default: () => (0, _utils_1.render)(this.positiveText)
                        }
                      )
                  ]
            )
          )
        : null
    )
  }
})
