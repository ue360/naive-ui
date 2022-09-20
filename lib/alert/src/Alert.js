'use strict'
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod }
  }
Object.defineProperty(exports, '__esModule', { value: true })
const vue_1 = require('vue')
const seemly_1 = require('seemly')
const icons_1 = require('../../_internal/icons')
const _internal_1 = require('../../_internal')
const _mixins_1 = require('../../_mixins')
const _utils_1 = require('../../_utils')
const styles_1 = require('../styles')
const index_cssr_1 = __importDefault(require('./styles/index.cssr'))
const alertProps = Object.assign(Object.assign({}, _mixins_1.useTheme.props), {
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
        ;(0, _utils_1.warn)(
          'alert',
          '`on-after-hide` is deprecated, please use `on-after-leave` instead.'
        )
      }
      return true
    },
    default: undefined
  }
})
exports.default = (0, vue_1.defineComponent)({
  name: 'Alert',
  inheritAttrs: false,
  props: alertProps,
  setup(props) {
    const { mergedClsPrefixRef } = (0, _mixins_1.useConfig)(props)
    const themeRef = (0, _mixins_1.useTheme)(
      'Alert',
      'Alert',
      index_cssr_1.default,
      styles_1.alertLight,
      props,
      mergedClsPrefixRef
    )
    const cssVars = (0, vue_1.computed)(() => {
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
      const { left, right } = (0, seemly_1.getMargin)(iconMargin)
      return {
        '--bezier': cubicBezierEaseInOut,
        '--color': self[(0, _utils_1.createKey)('color', type)],
        '--close-color': self[(0, _utils_1.createKey)('closeColor', type)],
        '--close-color-hover':
          self[(0, _utils_1.createKey)('closeColorHover', type)],
        '--close-color-pressed':
          self[(0, _utils_1.createKey)('closeColorPressed', type)],
        '--icon-color': self[(0, _utils_1.createKey)('iconColor', type)],
        '--border': self[(0, _utils_1.createKey)('border', type)],
        '--title-text-color':
          self[(0, _utils_1.createKey)('titleTextColor', type)],
        '--content-text-color':
          self[(0, _utils_1.createKey)('contentTextColor', type)],
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
    const visibleRef = (0, vue_1.ref)(true)
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
    return (0, vue_1.h)(
      _internal_1.NFadeInExpandTransition,
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
            ? (0, vue_1.h)(
                'div',
                Object.assign({}, (0, vue_1.mergeProps)(this.$attrs, attrs)),
                this.closable &&
                  (0, vue_1.h)(_internal_1.NBaseClose, {
                    clsPrefix: mergedClsPrefix,
                    class: `${mergedClsPrefix}-alert__close`,
                    onClick: this.handleCloseClick
                  }),
                this.showIcon &&
                  (0, vue_1.h)(
                    'div',
                    {
                      class: `${mergedClsPrefix}-alert__icon`,
                      'aria-hidden': 'true'
                    },
                    $slots.icon
                      ? $slots.icon()
                      : (0, vue_1.h)(
                          _internal_1.NBaseIcon,
                          { clsPrefix: mergedClsPrefix },
                          {
                            default: () => {
                              switch (this.type) {
                                case 'success':
                                  return (0, vue_1.h)(icons_1.SuccessIcon, null)
                                case 'info':
                                  return (0, vue_1.h)(icons_1.InfoIcon, null)
                                case 'warning':
                                  return (0, vue_1.h)(icons_1.WarningIcon, null)
                                case 'error':
                                  return (0, vue_1.h)(icons_1.ErrorIcon, null)
                                default:
                                  return null
                              }
                            }
                          }
                        )
                  ),
                (0, vue_1.h)(
                  'div',
                  { class: `${mergedClsPrefix}-alert-body` },
                  this.title !== undefined &&
                    (0, vue_1.h)(
                      'div',
                      { class: `${mergedClsPrefix}-alert-body__title` },
                      (0, vue_1.renderSlot)($slots, 'header', undefined, () => [
                        this.title
                      ])
                    ),
                  $slots.default &&
                    (0, vue_1.h)(
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