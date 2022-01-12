import { h, ref, computed, defineComponent, mergeProps, renderSlot } from 'vue'
import { getMargin } from 'seemly'
import {
  InfoIcon,
  SuccessIcon,
  WarningIcon,
  ErrorIcon
} from '../../_internal/icons'
import { NFadeInExpandTransition, NBaseClose, NBaseIcon } from '../../_internal'
import { useConfig, useTheme } from '../../_mixins'
import { warn, createKey } from '../../_utils'
import { alertLight } from '../styles'
import style from './styles/index.cssr'
const alertProps = Object.assign(Object.assign({}, useTheme.props), {
  title: {
    type: String,
    default: undefined
  },
  showIcon: {
    type: Boolean,
    default: true
  },
  type: {
    type: String,
    default: 'default'
  },
  closable: {
    type: Boolean,
    default: false
  },
  onClose: Function,
  onAfterLeave: {
    type: Function,
    default: undefined
  },
  onAfterHide: {
    type: Function,
    validator: () => {
      if (process.env.NODE_ENV !== 'production') {
        warn(
          'alert',
          '`on-after-hide` is deprecated, please use `on-after-leave` instead.'
        )
      }
      return true
    },
    default: undefined
  }
})
export default defineComponent({
  name: 'Alert',
  inheritAttrs: false,
  props: alertProps,
  setup(props) {
    const { mergedClsPrefixRef } = useConfig(props)
    const themeRef = useTheme(
      'Alert',
      'Alert',
      style,
      alertLight,
      props,
      mergedClsPrefixRef
    )
    const cssVars = computed(() => {
      const {
        common: { cubicBezierEaseInOut },
        self
      } = themeRef.value
      const {
        fontSize,
        borderRadius,
        titleFontWeight,
        lineHeight,
        iconSize,
        iconMargin,
        closeSize,
        closeMargin,
        padding
      } = self
      const { type } = props
      const { left, right } = getMargin(iconMargin)
      return {
        '--bezier': cubicBezierEaseInOut,
        '--color': self[createKey('color', type)],
        '--close-color': self[createKey('closeColor', type)],
        '--close-color-hover': self[createKey('closeColorHover', type)],
        '--close-color-pressed': self[createKey('closeColorPressed', type)],
        '--icon-color': self[createKey('iconColor', type)],
        '--border': self[createKey('border', type)],
        '--title-text-color': self[createKey('titleTextColor', type)],
        '--content-text-color': self[createKey('contentTextColor', type)],
        '--line-height': lineHeight,
        '--border-radius': borderRadius,
        '--font-size': fontSize,
        '--title-font-weight': titleFontWeight,
        '--icon-size': iconSize,
        '--icon-margin': iconMargin,
        '--close-size': closeSize,
        '--close-margin': closeMargin,
        '--padding': padding,
        '--icon-margin-left': left,
        '--icon-margin-right': right
      }
    })
    const visibleRef = ref(true)
    const doAfterLeave = () => {
      const {
        onAfterLeave,
        onAfterHide // deprecated
      } = props
      if (onAfterLeave) onAfterLeave()
      if (onAfterHide) onAfterHide()
    }
    const handleCloseClick = () => {
      var _a
      void Promise.resolve(
        (_a = props.onClose) === null || _a === void 0 ? void 0 : _a.call(props)
      ).then((result) => {
        if (result === false) return
        visibleRef.value = false
      })
    }
    const handleAfterLeave = () => {
      doAfterLeave()
    }
    return {
      mergedClsPrefix: mergedClsPrefixRef,
      visible: visibleRef,
      handleCloseClick,
      handleAfterLeave,
      mergedTheme: themeRef,
      cssVars
    }
  },
  render() {
    return h(
      NFadeInExpandTransition,
      { onAfterLeave: this.handleAfterLeave },
      {
        default: () => {
          const { mergedClsPrefix, $slots } = this
          const attrs = {
            class: [
              `${mergedClsPrefix}-alert`,
              this.showIcon && `${mergedClsPrefix}-alert--show-icon`
            ],
            style: this.cssVars,
            role: 'alert'
          }
          return this.visible
            ? h(
                'div',
                Object.assign({}, mergeProps(this.$attrs, attrs)),
                this.closable &&
                  h(NBaseClose, {
                    clsPrefix: mergedClsPrefix,
                    class: `${mergedClsPrefix}-alert__close`,
                    onClick: this.handleCloseClick
                  }),
                this.showIcon &&
                  h(
                    'div',
                    {
                      class: `${mergedClsPrefix}-alert__icon`,
                      'aria-hidden': 'true'
                    },
                    $slots.icon
                      ? $slots.icon()
                      : h(
                          NBaseIcon,
                          { clsPrefix: mergedClsPrefix },
                          {
                            default: () => {
                              switch (this.type) {
                                case 'success':
                                  return h(SuccessIcon, null)
                                case 'info':
                                  return h(InfoIcon, null)
                                case 'warning':
                                  return h(WarningIcon, null)
                                case 'error':
                                  return h(ErrorIcon, null)
                                default:
                                  return null
                              }
                            }
                          }
                        )
                  ),
                h(
                  'div',
                  { class: `${mergedClsPrefix}-alert-body` },
                  this.title !== undefined &&
                    h(
                      'div',
                      { class: `${mergedClsPrefix}-alert-body__title` },
                      renderSlot($slots, 'header', undefined, () => [
                        this.title
                      ])
                    ),
                  $slots.default &&
                    h(
                      'div',
                      { class: `${mergedClsPrefix}-alert-body__content` },
                      $slots
                    )
                )
              )
            : null
        }
      }
    )
  }
})
