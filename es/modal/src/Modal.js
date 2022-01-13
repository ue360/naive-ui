import {
  h,
  withDirectives,
  Transition,
  ref,
  computed,
  defineComponent,
  provide,
  toRef,
  inject
} from 'vue'
import { zindexable } from 'vdirs'
import { useIsMounted, useClicked, useClickPosition } from 'vooks'
import { VLazyTeleport } from 'vueuc'
import { dialogProviderInjectionKey } from '../../dialog/src/DialogProvider'
import { useConfig, useTheme } from '../../_mixins'
import { keep, call, warnOnce } from '../../_utils'
import { modalLight } from '../styles'
import { presetProps, presetPropsKeys } from './presetProps'
import NModalBodyWrapper from './BodyWrapper'
import { modalInjectionKey } from './interface'
import style from './styles/index.cssr'
const modalProps = Object.assign(
  Object.assign(
    Object.assign(Object.assign({}, useTheme.props), {
      show: Boolean,
      draggable: [Boolean, String],
      unstableShowMask: {
        type: Boolean,
        default: true
      },
      maskClosable: {
        type: Boolean,
        default: true
      },
      preset: String,
      to: [String, Object],
      displayDirective: {
        type: String,
        default: 'if'
      },
      transformOrigin: {
        type: String,
        default: 'mouse'
      }
    }),
    presetProps
  ),
  {
    // events
    'onUpdate:show': [Function, Array],
    onUpdateShow: [Function, Array],
    onAfterEnter: Function,
    onBeforeLeave: Function,
    onAfterLeave: Function,
    onClose: Function,
    onPositiveClick: Function,
    onNegativeClick: Function,
    onMaskClick: Function,
    // private
    dialog: Boolean,
    appear: {
      type: Boolean,
      default: undefined
    },
    // deprecated
    overlayStyle: [String, Object],
    onBeforeHide: Function,
    onAfterHide: Function,
    onHide: Function
  }
)
export default defineComponent({
  name: 'Modal',
  inheritAttrs: false,
  props: modalProps,
  setup(props) {
    if (process.env.NODE_ENV !== 'production') {
      if (props.onHide) {
        warnOnce('modal', '`on-hide` is deprecated.')
      }
      if (props.onAfterHide) {
        warnOnce(
          'modal',
          '`on-after-hide` is deprecated, please use `on-after-leave` instead.'
        )
      }
      if (props.onBeforeHide) {
        warnOnce(
          'modal',
          '`on-before-hide` is deprecated, please use `on-before-leave` instead.'
        )
      }
      if (props.overlayStyle) {
        warnOnce(
          'modal',
          '`overlay-style` is deprecated, please use `style` instead.'
        )
      }
    }
    const containerRef = ref(null)
    const { mergedClsPrefixRef, namespaceRef } = useConfig(props)
    const themeRef = useTheme(
      'Modal',
      'Modal',
      style,
      modalLight,
      props,
      mergedClsPrefixRef
    )
    const clickedRef = useClicked(64)
    const clickedPositionRef = useClickPosition()
    const isMountedRef = useIsMounted()
    const NDialogProvider = props.dialog
      ? inject(dialogProviderInjectionKey, null)
      : null
    function doUpdateShow(show) {
      const { onUpdateShow, 'onUpdate:show': _onUpdateShow, onHide } = props
      if (onUpdateShow) call(onUpdateShow, show)
      if (_onUpdateShow) call(_onUpdateShow, show)
      // deprecated
      if (onHide && !show) onHide(show)
    }
    function handleCloseClick() {
      const { onClose } = props
      if (onClose) {
        void Promise.resolve(onClose()).then((value) => {
          if (value === false) return
          doUpdateShow(false)
        })
      } else {
        doUpdateShow(false)
      }
    }
    function handlePositiveClick() {
      const { onPositiveClick } = props
      if (onPositiveClick) {
        void Promise.resolve(onPositiveClick()).then((value) => {
          if (value === false) return
          doUpdateShow(false)
        })
      } else {
        doUpdateShow(false)
      }
    }
    function handleNegativeClick() {
      const { onNegativeClick } = props
      if (onNegativeClick) {
        void Promise.resolve(onNegativeClick()).then((value) => {
          if (value === false) return
          doUpdateShow(false)
        })
      } else {
        doUpdateShow(false)
      }
    }
    function handleBeforeLeave() {
      const { onBeforeLeave, onBeforeHide } = props
      if (onBeforeLeave) call(onBeforeLeave)
      // deprecated
      if (onBeforeHide) onBeforeHide()
    }
    function handleAfterLeave() {
      const { onAfterLeave, onAfterHide } = props
      if (onAfterLeave) call(onAfterLeave)
      // deprecated
      if (onAfterHide) onAfterHide()
    }
    function handleClickoutside(e) {
      var _a
      const { onMaskClick } = props
      if (onMaskClick) {
        onMaskClick(e)
      }
      if (props.maskClosable) {
        if (
          (_a = containerRef.value) === null || _a === void 0
            ? void 0
            : _a.contains(e.target)
        ) {
          doUpdateShow(false)
        }
      }
    }
    provide(modalInjectionKey, {
      getMousePosition: () => {
        if (NDialogProvider) {
          const { clickedRef, clickPositionRef } = NDialogProvider
          if (clickedRef.value && clickPositionRef.value) {
            return clickPositionRef.value
          }
        }
        if (clickedRef.value) {
          return clickedPositionRef.value
        }
        return null
      },
      mergedClsPrefixRef,
      mergedThemeRef: themeRef,
      isMountedRef,
      appearRef: toRef(props, 'appear'),
      transformOriginRef: toRef(props, 'transformOrigin')
    })
    return {
      mergedClsPrefix: mergedClsPrefixRef,
      namespace: namespaceRef,
      isMounted: isMountedRef,
      containerRef,
      presetProps: computed(() => {
        const pickedProps = keep(props, presetPropsKeys)
        return pickedProps
      }),
      handleAfterLeave,
      handleClickoutside,
      handleBeforeLeave,
      doUpdateShow,
      handleNegativeClick,
      handlePositiveClick,
      handleCloseClick,
      cssVars: computed(() => {
        const {
          common: { cubicBezierEaseOut },
          self: { boxShadow, color, textColor }
        } = themeRef.value
        return {
          '--bezier-ease-out': cubicBezierEaseOut,
          '--box-shadow': boxShadow,
          '--color': color,
          '--text-color': textColor
        }
      })
    }
  },
  render() {
    const { mergedClsPrefix } = this
    return h(
      VLazyTeleport,
      { to: this.to, show: this.show },
      {
        default: () => {
          var _a
          return [
            withDirectives(
              h(
                'div',
                {
                  ref: 'containerRef',
                  class: [`${mergedClsPrefix}-modal-container`, this.namespace],
                  style: this.cssVars
                },
                this.unstableShowMask
                  ? h(
                      Transition,
                      {
                        name: 'fade-in-transition',
                        key: 'mask',
                        appear:
                          (_a = this.appear) !== null && _a !== void 0
                            ? _a
                            : this.isMounted
                      },
                      {
                        default: () => {
                          return this.show
                            ? h('div', {
                                ref: 'containerRef',
                                class: `${mergedClsPrefix}-modal-mask`
                              })
                            : null
                        }
                      }
                    )
                  : null,
                h(
                  NModalBodyWrapper,
                  Object.assign(
                    { style: this.overlayStyle },
                    this.$attrs,
                    {
                      ref: 'bodyWrapper',
                      displayDirective: this.displayDirective,
                      show: this.show,
                      draggable: this.draggable,
                      preset: this.preset
                    },
                    this.presetProps,
                    {
                      onClose: this.handleCloseClick,
                      onNegativeClick: this.handleNegativeClick,
                      onPositiveClick: this.handlePositiveClick,
                      onBeforeLeave: this.handleBeforeLeave,
                      onAfterEnter: this.onAfterEnter,
                      onAfterLeave: this.handleAfterLeave,
                      onClickoutside: this.handleClickoutside
                    }
                  ),
                  this.$slots
                )
              ),
              [
                [
                  zindexable,
                  {
                    enabled: this.show
                  }
                ]
              ]
            )
          ]
        }
      }
    )
  }
})
