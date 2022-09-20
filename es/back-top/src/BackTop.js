import {
  h,
  ref,
  computed,
  toRef,
  watch,
  nextTick,
  defineComponent,
  renderSlot,
  mergeProps,
  Transition,
  onMounted,
  onBeforeUnmount
} from 'vue'
import { VLazyTeleport } from 'vueuc'
import { useIsMounted, useMergedState } from 'vooks'
import { getScrollParent, unwrapElement } from 'seemly'
import { useConfig, useTheme } from '../../_mixins'
import { NBaseIcon } from '../../_internal'
import { formatLength, warn } from '../../_utils'
import { backTopLight } from '../styles'
import BackTopIcon from './BackTopIcon'
import style from './styles/index.cssr'
const backTopProps = Object.assign(Object.assign({}, useTheme.props), {
  show: {
    type: Boolean,
    default: undefined
  },
  right: {
    type: [Number, String],
    default: 40
  },
  bottom: {
    type: [Number, String],
    default: 40
  },
  to: {
    type: [String, Object],
    default: 'body'
  },
  visibilityHeight: {
    type: Number,
    default: 180
  },
  listenTo: [String, Object, Function],
  'onUpdate:show': {
    type: Function,
    default: () => {}
  },
  // deprecated
  target: {
    type: Function,
    validator: () => {
      warn(
        'back-top',
        '`target` is deprecated, please use `listen-to` instead.'
      )
      return true
    },
    default: undefined
  },
  onShow: {
    type: Function,
    validator: () => {
      warn(
        'back-top',
        '`on-show` is deprecated, please use `on-update:show` instead.'
      )
      return true
    },
    default: undefined
  },
  onHide: {
    type: Function,
    validator: () => {
      warn(
        'back-top',
        '`on-hide` is deprecated, please use `on-update:show` instead.'
      )
      return true
    },
    default: undefined
  }
})
export default defineComponent({
  name: 'BackTop',
  // make style applied to back-top button
  inheritAttrs: false,
  props: backTopProps,
  setup(props) {
    const { mergedClsPrefixRef } = useConfig(props)
    const scrollTopRef = ref(null)
    const uncontrolledShowRef = computed(() => {
      if (scrollTopRef.value === null) return false
      return scrollTopRef.value >= props.visibilityHeight
    })
    const DomInfoReadyRef = ref(false)
    watch(uncontrolledShowRef, (value) => {
      if (DomInfoReadyRef.value) {
        props['onUpdate:show'](value)
      }
    })
    const controlledShowRef = toRef(props, 'show')
    const mergedShowRef = useMergedState(controlledShowRef, uncontrolledShowRef)
    const transitionDisabledRef = ref(true)
    const placeholderRef = ref(null)
    const styleRef = computed(() => {
      return {
        right: formatLength(props.right),
        bottom: formatLength(props.bottom)
      }
    })
    let scrollElement
    let scrollListenerRegistered
    // deprecated
    watch(mergedShowRef, (value) => {
      var _a, _b
      if (DomInfoReadyRef.value) {
        if (value) {
          ;(_a = props.onShow) === null || _a === void 0
            ? void 0
            : _a.call(props)
        }
        ;(_b = props.onHide) === null || _b === void 0 ? void 0 : _b.call(props)
      }
    })
    const themeRef = useTheme(
      'BackTop',
      'BackTop',
      style,
      backTopLight,
      props,
      mergedClsPrefixRef
    )
    function init() {
      var _a
      if (scrollListenerRegistered) return
      scrollListenerRegistered = true
      const scrollEl =
        ((_a = props.target) === null || _a === void 0
          ? void 0
          : _a.call(props)) ||
        unwrapElement(props.listenTo) ||
        getScrollParent(placeholderRef.value)
      if (!scrollEl) {
        if (process.env.NODE_ENV !== 'production') {
          warn(
            'back-top',
            'Container of back-top element is not found. This could be a bug of naive-ui.'
          )
        }
        return
      }
      scrollElement = scrollEl
      const { to } = props
      const target = typeof to === 'string' ? document.querySelector(to) : to
      if (process.env.NODE_ENV !== 'production' && !target) {
        warn('back-top', 'Target is not found.')
      }
      if (scrollEl) {
        scrollEl.addEventListener('scroll', handleScroll)
        handleScroll()
      }
    }
    function handleClick(e) {
      if (scrollElement.nodeName === '#document') {
        scrollElement.documentElement.scrollTo({
          top: 0,
          behavior: 'smooth'
        })
      } else {
        scrollElement.scrollTo({
          top: 0,
          behavior: 'smooth'
        })
      }
    }
    function handleScroll() {
      if (scrollElement.nodeName === '#document') {
        scrollTopRef.value = scrollElement.documentElement.scrollTop
      } else {
        scrollTopRef.value = scrollElement.scrollTop
      }
      if (!DomInfoReadyRef.value) {
        void nextTick(() => {
          DomInfoReadyRef.value = true
        })
      }
    }
    function handleAfterEnter() {
      transitionDisabledRef.value = false
    }
    onMounted(() => {
      init()
      transitionDisabledRef.value = mergedShowRef.value
    })
    onBeforeUnmount(() => {
      if (scrollElement) {
        scrollElement.removeEventListener('scroll', handleScroll)
      }
    })
    return {
      placeholderRef,
      style: styleRef,
      mergedShow: mergedShowRef,
      isMounted: useIsMounted(),
      scrollElement: ref(null),
      scrollTop: scrollTopRef,
      DomInfoReady: DomInfoReadyRef,
      transitionDisabled: transitionDisabledRef,
      mergedClsPrefix: mergedClsPrefixRef,
      handleAfterEnter,
      handleScroll,
      handleClick,
      cssVars: computed(() => {
        const {
          self: {
            color,
            boxShadow,
            boxShadowHover,
            boxShadowPressed,
            iconColor,
            iconColorHover,
            iconColorPressed,
            width,
            height,
            iconSize,
            borderRadius,
            textColor
          },
          common: { cubicBezierEaseInOut }
        } = themeRef.value
        return {
          '--bezier': cubicBezierEaseInOut,
          '--border-radius': borderRadius,
          '--height': height,
          '--width': width,
          '--box-shadow': boxShadow,
          '--box-shadow-hover': boxShadowHover,
          '--box-shadow-pressed': boxShadowPressed,
          '--color': color,
          '--icon-size': iconSize,
          '--icon-color': iconColor,
          '--icon-color-hover': iconColorHover,
          '--icon-color-pressed': iconColorPressed,
          '--text-color': textColor
        }
      })
    }
  },
  render() {
    const { mergedClsPrefix } = this
    return h(
      'div',
      {
        ref: 'placeholderRef',
        class: `${mergedClsPrefix}-back-top-placeholder`,
        style: 'display: none',
        'aria-hidden': true
      },
      h(
        VLazyTeleport,
        { to: this.to, show: this.mergedShow },
        {
          default: () =>
            h(
              Transition,
              {
                name: 'fade-in-scale-up-transition',
                appear: this.isMounted,
                onAfterEnter: this.handleAfterEnter
              },
              {
                default: () =>
                  this.mergedShow
                    ? h(
                        'div',
                        mergeProps(this.$attrs, {
                          class: [
                            `${mergedClsPrefix}-back-top`,
                            {
                              [`${mergedClsPrefix}-back-top--transition-disabled`]:
                                this.transitionDisabled
                            }
                          ],
                          style: Object.assign(
                            Object.assign({}, this.style),
                            this.cssVars
                          ),
                          onClick: this.handleClick
                        }),
                        [
                          renderSlot(this.$slots, 'default', undefined, () => [
                            h(
                              NBaseIcon,
                              { clsPrefix: mergedClsPrefix },
                              { default: () => BackTopIcon }
                            )
                          ])
                        ]
                      )
                    : null
              }
            )
        }
      )
    )
  }
})