'use strict'
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod }
  }
Object.defineProperty(exports, '__esModule', { value: true })
const vue_1 = require('vue')
const vueuc_1 = require('vueuc')
const vdirs_1 = require('vdirs')
const vooks_1 = require('vooks')
const _mixins_1 = require('../../_mixins')
const _utils_1 = require('../../_utils')
const styles_1 = require('../styles')
const DrawerBodyWrapper_1 = __importDefault(require('./DrawerBodyWrapper'))
const interface_1 = require('./interface')
const index_cssr_1 = __importDefault(require('./styles/index.cssr'))
const drawerProps = Object.assign(Object.assign({}, _mixins_1.useTheme.props), {
  show: Boolean,
  width: {
    type: [Number, String],
    default: 251
  },
  height: {
    type: [Number, String],
    default: 251
  },
  placement: {
    type: String,
    default: 'right'
  },
  maskClosable: {
    type: Boolean,
    default: true
  },
  to: [String, Object],
  displayDirective: {
    type: String,
    default: 'if'
  },
  nativeScrollbar: {
    type: Boolean,
    default: true
  },
  onMaskClick: Function,
  scrollbarProps: Object,
  contentStyle: [Object, String],
  'onUpdate:show': [Function, Array],
  onUpdateShow: [Function, Array],
  /** @deprecated */
  drawerStyle: {
    type: [Object, String],
    validator:
      process.env.NODE_ENV !== 'production'
        ? () => {
            ;(0, _utils_1.warn)(
              'drawer',
              '`drawer-style` is deprecated, please use `style` instead.'
            )
            return true
          }
        : undefined,
    default: undefined
  },
  /** @deprecated */
  drawerClass: {
    type: String,
    validator:
      process.env.NODE_ENV !== 'production'
        ? () => {
            ;(0, _utils_1.warn)(
              'drawer',
              '`drawer-class` is deprecated, please use `class` instead.'
            )
            return true
          }
        : undefined,
    default: undefined
  },
  target: {
    validator:
      process.env.NODE_ENV !== 'production'
        ? () => {
            ;(0, _utils_1.warn)(
              'drawer',
              '`target` is deprecated, please use `to` instead.'
            )
            return true
          }
        : undefined,
    default: undefined
  },
  onShow: {
    type: [Function, Array],
    validator: () => {
      ;(0, _utils_1.warn)(
        'drawer',
        '`on-show` is deprecated, please use `on-update:show` instead.'
      )
      return true
    },
    default: undefined
  },
  onHide: {
    type: [Function, Array],
    validator: () => {
      ;(0, _utils_1.warn)(
        'drawer',
        '`on-hide` is deprecated, please use `on-update:show` instead.'
      )
      return true
    },
    default: undefined
  }
})
exports.default = (0, vue_1.defineComponent)({
  name: 'Drawer',
  inheritAttrs: false,
  props: drawerProps,
  setup(props) {
    const { mergedClsPrefixRef, namespaceRef } = (0, _mixins_1.useConfig)(props)
    const isMountedRef = (0, vooks_1.useIsMounted)()
    const themeRef = (0, _mixins_1.useTheme)(
      'Drawer',
      'Drawer',
      index_cssr_1.default,
      styles_1.drawerLight,
      props,
      mergedClsPrefixRef
    )
    const styleWidthRef = (0, vue_1.computed)(() => {
      const { placement } = props
      if (placement === 'top' || placement === 'bottom') return ''
      const { width } = props
      return (0, _utils_1.formatLength)(width)
    })
    const styleHeightRef = (0, vue_1.computed)(() => {
      const { placement } = props
      if (placement === 'left' || placement === 'right') return ''
      const { height } = props
      return (0, _utils_1.formatLength)(height)
    })
    const mergedBodyStyleRef = (0, vue_1.computed)(() => {
      return [
        {
          width: styleWidthRef.value,
          height: styleHeightRef.value
        },
        props.drawerStyle
      ]
    })
    function handleMaskClick(e) {
      const { onMaskClick, maskClosable } = props
      if (maskClosable) {
        doUpdateShow(false)
      }
      if (onMaskClick) onMaskClick(e)
    }
    function doUpdateShow(show) {
      const { onHide, onUpdateShow, 'onUpdate:show': _onUpdateShow } = props
      if (onUpdateShow) (0, _utils_1.call)(onUpdateShow, show)
      if (_onUpdateShow) (0, _utils_1.call)(_onUpdateShow, show)
      // deprecated
      if (onHide && !show) (0, _utils_1.call)(onHide, show)
    }
    ;(0, vue_1.provide)(interface_1.drawerInjectionKey, {
      isMountedRef: isMountedRef,
      mergedThemeRef: themeRef,
      mergedClsPrefixRef,
      doUpdateShow
    })
    return {
      mergedClsPrefix: mergedClsPrefixRef,
      namespace: namespaceRef,
      mergedBodyStyle: mergedBodyStyleRef,
      handleMaskClick,
      mergedTheme: themeRef,
      cssVars: (0, vue_1.computed)(() => {
        const {
          common: {
            cubicBezierEaseInOut,
            cubicBezierEaseIn,
            cubicBezierEaseOut
          },
          self: {
            color,
            textColor,
            boxShadow,
            lineHeight,
            headerPadding,
            footerPadding,
            bodyPadding,
            titleFontSize,
            titleTextColor,
            titleFontWeight,
            headerBorderBottom,
            footerBorderTop,
            closeColor,
            closeColorHover,
            closeColorPressed,
            closeSize
          }
        } = themeRef.value
        return {
          '--line-height': lineHeight,
          '--color': color,
          '--text-color': textColor,
          '--box-shadow': boxShadow,
          '--bezier': cubicBezierEaseInOut,
          '--bezier-out': cubicBezierEaseOut,
          '--bezier-in': cubicBezierEaseIn,
          '--header-padding': headerPadding,
          '--body-padding': bodyPadding,
          '--footer-padding': footerPadding,
          '--title-text-color': titleTextColor,
          '--title-font-size': titleFontSize,
          '--title-font-weight': titleFontWeight,
          '--header-border-bottom': headerBorderBottom,
          '--footer-border-top': footerBorderTop,
          '--close-color': closeColor,
          '--close-color-hover': closeColorHover,
          '--close-color-pressed': closeColorPressed,
          '--close-size': closeSize
        }
      }),
      isMounted: isMountedRef
    }
  },
  render() {
    const { mergedClsPrefix } = this
    return (0, vue_1.h)(
      vueuc_1.VLazyTeleport,
      { to: this.to, show: this.show },
      {
        default: () => {
          return (0, vue_1.withDirectives)(
            (0, vue_1.h)(
              'div',
              {
                class: [`${mergedClsPrefix}-drawer-container`, this.namespace],
                style: this.cssVars
              },
              (0, vue_1.h)(
                vue_1.Transition,
                { name: 'fade-in-transition', appear: this.isMounted },
                {
                  default: () =>
                    this.show
                      ? (0, vue_1.h)('div', {
                          class: `${mergedClsPrefix}-drawer-mask`,
                          onClick: this.handleMaskClick
                        })
                      : null
                }
              ),
              (0, vue_1.h)(
                DrawerBodyWrapper_1.default,
                Object.assign({}, this.$attrs, {
                  class: [this.drawerClass, this.$attrs.class],
                  style: [this.mergedBodyStyle, this.$attrs.style],
                  contentStyle: this.contentStyle,
                  placement: this.placement,
                  scrollbarProps: this.scrollbarProps,
                  show: this.show,
                  displayDirective: this.displayDirective,
                  nativeScrollbar: this.nativeScrollbar
                }),
                this.$slots
              )
            ),
            [[vdirs_1.zindexable, { enabled: this.show }]]
          )
        }
      }
    )
  }
})