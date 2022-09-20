import { h, defineComponent, computed, renderSlot } from 'vue'
import { useConfig, useTheme } from '../../_mixins'
import { render, createKey, keysOf } from '../../_utils'
import { NBaseIcon, NBaseClose } from '../../_internal'
import { NButton } from '../../button'
import {
  InfoIcon,
  SuccessIcon,
  WarningIcon,
  ErrorIcon
} from '../../_internal/icons'
import { dialogLight } from '../styles'
import style from './styles/index.cssr'
const infoIcon = h(InfoIcon, null)
const iconMap = {
  default: infoIcon,
  info: infoIcon,
  success: h(SuccessIcon, null),
  warning: h(WarningIcon, null),
  error: h(ErrorIcon, null)
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
export { dialogProps }
export const dialogPropKeys = keysOf(dialogProps)
export default defineComponent({
  name: 'Dialog',
  alias: [
    'NimbusConfirmCard',
    'Confirm' // deprecated
  ],
  props: Object.assign(Object.assign({}, useTheme.props), dialogProps),
  setup(props) {
    const { NConfigProvider, mergedClsPrefixRef } = useConfig(props)
    const mergedIconPlacementRef = computed(() => {
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
    const themeRef = useTheme(
      'Dialog',
      'Dialog',
      style,
      dialogLight,
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
      cssVars: computed(() => {
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
            [createKey('iconColor', type)]: iconColor
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
    return h(
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
        ? h(NBaseClose, {
            clsPrefix: mergedClsPrefix,
            class: `${mergedClsPrefix}-dialog__close`,
            onClick: this.handleCloseClick
          })
        : null,
      showIcon && mergedIconPlacement === 'top'
        ? h(
            'div',
            { class: `${mergedClsPrefix}-dialog-icon-container` },
            h(
              NBaseIcon,
              {
                clsPrefix: mergedClsPrefix,
                class: `${mergedClsPrefix}-dialog__icon`
              },
              {
                default: () =>
                  renderSlot($slots, 'icon', undefined, () => [
                    this.icon ? render(this.icon) : iconMap[this.type]
                  ])
              }
            )
          )
        : null,
      h(
        'div',
        { class: `${mergedClsPrefix}-dialog__title` },
        showIcon && mergedIconPlacement === 'left'
          ? h(
              NBaseIcon,
              {
                clsPrefix: mergedClsPrefix,
                class: `${mergedClsPrefix}-dialog__icon`
              },
              {
                default: () =>
                  renderSlot($slots, 'icon', undefined, () => [
                    this.icon ? render(this.icon) : iconMap[this.type]
                  ])
              }
            )
          : null,
        renderSlot($slots, 'header', undefined, () => [render(title)])
      ),
      h(
        'div',
        { class: `${mergedClsPrefix}-dialog__content` },
        renderSlot($slots, 'default', undefined, () => [render(content)])
      ),
      $slots.action || positiveText || negativeText || action
        ? h(
            'div',
            { class: `${mergedClsPrefix}-dialog__action` },
            renderSlot(
              $slots,
              'action',
              undefined,
              action
                ? () => [render(action)]
                : () => [
                    this.negativeText &&
                      h(
                        NButton,
                        {
                          theme: mergedTheme.peers.Button,
                          themeOverrides: mergedTheme.peerOverrides.Button,
                          ghost: true,
                          size: 'small',
                          onClick: handleNegativeClick
                        },
                        {
                          default: () => render(this.negativeText)
                        }
                      ),
                    this.positiveText &&
                      h(
                        NButton,
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
                          default: () => render(this.positiveText)
                        }
                      )
                  ]
            )
          )
        : null
    )
  }
})