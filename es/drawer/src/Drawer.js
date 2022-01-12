import {
  h,
  defineComponent,
  computed,
  provide,
  withDirectives,
  Transition
} from 'vue'
import { VLazyTeleport } from 'vueuc'
import { zindexable } from 'vdirs'
import { useIsMounted } from 'vooks'
import { useTheme, useConfig } from '../../_mixins'
import { warn, formatLength, call } from '../../_utils'
import { drawerLight } from '../styles'
import NDrawerBodyWrapper from './DrawerBodyWrapper'
import { drawerInjectionKey } from './interface'
import style from './styles/index.cssr'
const drawerProps = Object.assign(Object.assign({}, useTheme.props), {
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
            warn(
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
            warn(
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
            warn('drawer', '`target` is deprecated, please use `to` instead.')
            return true
          }
        : undefined,
    default: undefined
  },
  onShow: {
    type: [Function, Array],
    validator: () => {
      warn(
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
      warn(
        'drawer',
        '`on-hide` is deprecated, please use `on-update:show` instead.'
      )
      return true
    },
    default: undefined
  }
})
export default defineComponent({
  name: 'Drawer',
  inheritAttrs: false,
  props: drawerProps,
  setup(props) {
    const { mergedClsPrefixRef, namespaceRef } = useConfig(props)
    const isMountedRef = useIsMounted()
    const themeRef = useTheme(
      'Drawer',
      'Drawer',
      style,
      drawerLight,
      props,
      mergedClsPrefixRef
    )
    const styleWidthRef = computed(() => {
      const { placement } = props
      if (placement === 'top' || placement === 'bottom') return ''
      const { width } = props
      return formatLength(width)
    })
    const styleHeightRef = computed(() => {
      const { placement } = props
      if (placement === 'left' || placement === 'right') return ''
      const { height } = props
      return formatLength(height)
    })
    const mergedBodyStyleRef = computed(() => {
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
      if (onUpdateShow) call(onUpdateShow, show)
      if (_onUpdateShow) call(_onUpdateShow, show)
      // deprecated
      if (onHide && !show) call(onHide, show)
    }
    provide(drawerInjectionKey, {
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
      cssVars: computed(() => {
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
    return h(
      VLazyTeleport,
      { to: this.to, show: this.show },
      {
        default: () => {
          return withDirectives(
            h(
              'div',
              {
                class: [`${mergedClsPrefix}-drawer-container`, this.namespace],
                style: this.cssVars
              },
              h(
                Transition,
                { name: 'fade-in-transition', appear: this.isMounted },
                {
                  default: () =>
                    this.show
                      ? h('div', {
                          class: `${mergedClsPrefix}-drawer-mask`,
                          onClick: this.handleMaskClick
                        })
                      : null
                }
              ),
              h(
                NDrawerBodyWrapper,
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
            [[zindexable, { enabled: this.show }]]
          )
        }
      }
    )
  }
})
