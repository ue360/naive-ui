import {
  h,
  vShow,
  withDirectives,
  Transition,
  ref,
  defineComponent,
  computed,
  mergeProps,
  inject,
  onBeforeUnmount,
  watch,
  toRef,
  provide,
  renderSlot,
  Fragment
} from 'vue'
import { VFollower } from 'vueuc'
import { clickoutside, mousemoveoutside } from 'vdirs'
import { useTheme, useConfig } from '../../_mixins'
import { formatLength, useAdjustedTo } from '../../_utils'
import { popoverLight } from '../styles'
import style from './styles/index.cssr'
import { popoverBodyInjectionKey } from './interface'
import { drawerBodyInjectionKey } from '../../drawer/src/interface'
import { modalBodyInjectionKey } from '../../modal/src/interface'
export const popoverBodyProps = Object.assign(
  Object.assign({}, useTheme.props),
  {
    to: useAdjustedTo.propTo,
    show: Boolean,
    trigger: String,
    showArrow: Boolean,
    delay: Number,
    duration: Number,
    raw: Boolean,
    arrowStyle: [String, Object],
    displayDirective: String,
    x: Number,
    y: Number,
    flip: Boolean,
    overlap: Boolean,
    placement: String,
    width: [Number, String],
    // private
    animated: Boolean,
    onClickoutside: Function,
    /** @deprecated */
    minWidth: Number,
    maxWidth: Number
  }
)
export const renderArrow = ({ arrowStyle, clsPrefix }) => {
  return h(
    'div',
    { key: '__popover-arrow__', class: `${clsPrefix}-popover-arrow-wrapper` },
    h('div', { class: `${clsPrefix}-popover-arrow`, style: arrowStyle })
  )
}
export default defineComponent({
  name: 'PopoverBody',
  inheritAttrs: false,
  props: popoverBodyProps,
  setup(props, { slots, attrs }) {
    const { namespaceRef, mergedClsPrefixRef } = useConfig(props)
    const themeRef = useTheme(
      'Popover',
      'Popover',
      style,
      popoverLight,
      props,
      mergedClsPrefixRef
    )
    const followerRef = ref(null)
    const NPopover = inject('NPopover')
    const bodyRef = ref(null)
    const followerEnabledRef = ref(props.show)
    const directivesRef = computed(() => {
      const { trigger, onClickoutside } = props
      const directives = []
      const {
        positionManuallyRef: { value: positionManually }
      } = NPopover
      if (!positionManually) {
        if (trigger === 'click' && !onClickoutside) {
          directives.push([clickoutside, handleClickOutside])
        }
        if (trigger === 'hover') {
          directives.push([mousemoveoutside, handleMouseMoveOutside])
        }
      }
      if (onClickoutside) {
        directives.push([clickoutside, handleClickOutside])
      }
      if (props.displayDirective === 'show') {
        directives.push([vShow, props.show])
      }
      return directives
    })
    const styleRef = computed(() => {
      return [
        {
          width: props.width === 'trigger' ? '' : formatLength(props.width),
          maxWidth: formatLength(props.maxWidth),
          minWidth: formatLength(props.minWidth)
        },
        cssVarsRef.value
      ]
    })
    const cssVarsRef = computed(() => {
      const {
        common: { cubicBezierEaseInOut, cubicBezierEaseIn, cubicBezierEaseOut },
        self: {
          space,
          spaceArrow,
          padding,
          fontSize,
          textColor,
          dividerColor,
          color,
          boxShadow,
          borderRadius,
          arrowHeight,
          arrowOffset,
          arrowOffsetVertical
        }
      } = themeRef.value
      return {
        '--box-shadow': boxShadow,
        '--bezier': cubicBezierEaseInOut,
        '--bezier-ease-in': cubicBezierEaseIn,
        '--bezier-ease-out': cubicBezierEaseOut,
        '--font-size': fontSize,
        '--text-color': textColor,
        '--color': color,
        '--divider-color': dividerColor,
        '--border-radius': borderRadius,
        '--arrow-height': arrowHeight,
        '--arrow-offset': arrowOffset,
        '--arrow-offset-vertical': arrowOffsetVertical,
        '--padding': padding,
        '--space': space,
        '--space-arrow': spaceArrow
      }
    })
    NPopover.setBodyInstance({
      syncPosition
    })
    onBeforeUnmount(() => {
      NPopover.setBodyInstance(null)
    })
    watch(toRef(props, 'show'), (value) => {
      // If no animation, no transition component will be applied to the
      // component. So we need to trigger follower manaully.
      if (props.animated) return
      if (value) {
        followerEnabledRef.value = true
      } else {
        followerEnabledRef.value = false
      }
    })
    function syncPosition() {
      var _a
      // eslint-disable-next-line no-unused-expressions
      ;(_a = followerRef.value) === null || _a === void 0
        ? void 0
        : _a.syncPosition()
    }
    function handleMouseEnter(e) {
      if (props.trigger === 'hover') {
        NPopover.handleMouseEnter(e)
      }
    }
    function handleMouseLeave(e) {
      if (props.trigger === 'hover') {
        NPopover.handleMouseLeave(e)
      }
    }
    function handleMouseMoveOutside(e) {
      if (
        props.trigger === 'hover' &&
        !getTriggerElement().contains(e.target)
      ) {
        NPopover.handleMouseMoveOutside(e)
      }
    }
    function handleClickOutside(e) {
      if (
        (props.trigger === 'click' &&
          !getTriggerElement().contains(e.target)) ||
        props.onClickoutside
      ) {
        NPopover.handleClickOutside(e)
      }
    }
    function getTriggerElement() {
      return NPopover.getTriggerElement()
    }
    provide(popoverBodyInjectionKey, bodyRef)
    provide(drawerBodyInjectionKey, null)
    provide(modalBodyInjectionKey, null)
    function renderContentNode() {
      let contentNode
      const {
        internalRenderBodyRef: { value: renderBody }
      } = NPopover
      const { value: mergedClsPrefix } = mergedClsPrefixRef
      if (!renderBody) {
        const { value: extraClass } = NPopover.extraClassRef
        contentNode = h(
          'div',
          mergeProps(
            {
              class: [
                `${mergedClsPrefix}-popover`,
                extraClass.map((v) => `${mergedClsPrefix}-${v}`),
                {
                  [`${mergedClsPrefix}-popover--overlap`]: props.overlap,
                  [`${mergedClsPrefix}-popover--show-arrow`]: props.showArrow,
                  [`${mergedClsPrefix}-popover--show-header`]: !!slots.header,
                  [`${mergedClsPrefix}-popover--raw`]: props.raw
                }
              ],
              ref: bodyRef,
              style: styleRef.value,
              onMouseenter: handleMouseEnter,
              onMouseleave: handleMouseLeave
            },
            attrs
          ),
          [
            slots.header
              ? h(
                  Fragment,
                  null,
                  h(
                    'div',
                    { class: `${mergedClsPrefix}-popover__header` },
                    slots.header()
                  ),
                  h(
                    'div',
                    { class: `${mergedClsPrefix}-popover__content` },
                    slots
                  )
                )
              : renderSlot(slots, 'default'),
            props.showArrow
              ? renderArrow({
                  arrowStyle: props.arrowStyle,
                  clsPrefix: mergedClsPrefix
                })
              : null
          ]
        )
      } else {
        contentNode = renderBody(
          // The popover class and overlap class must exists, they will be used
          // to place the body & transition animation.
          // Shadow class exists for reuse box-shadow.
          [
            `${mergedClsPrefix}-popover`,
            props.overlap && `${mergedClsPrefix}-popover--overlap`
          ],
          bodyRef,
          styleRef.value,
          handleMouseEnter,
          handleMouseLeave
        )
      }
      return props.displayDirective === 'show' || props.show
        ? withDirectives(contentNode, directivesRef.value)
        : null
    }
    return {
      namespace: namespaceRef,
      isMounted: NPopover.isMountedRef,
      zIndex: NPopover.zIndexRef,
      followerRef,
      adjustedTo: useAdjustedTo(props),
      followerEnabled: followerEnabledRef,
      renderContentNode
    }
  },
  render() {
    return h(
      VFollower,
      {
        zIndex: this.zIndex,
        show: this.show,
        enabled: this.followerEnabled,
        to: this.adjustedTo,
        x: this.x,
        y: this.y,
        flip: this.flip,
        placement: this.placement,
        containerClass: this.namespace,
        ref: 'followerRef',
        overlap: this.overlap,
        width: this.width === 'trigger' ? 'target' : undefined,
        teleportDisabled: this.adjustedTo === useAdjustedTo.tdkey
      },
      {
        default: () => {
          return this.animated
            ? h(
                Transition,
                {
                  name: 'popover-transition',
                  appear: this.isMounted,
                  // Don't use watch to enable follower, since the transition may
                  // make position sync timing very subtle and buggy.
                  onEnter: () => {
                    this.followerEnabled = true
                  },
                  onAfterLeave: () => {
                    this.followerEnabled = false
                  }
                },
                {
                  default: this.renderContentNode
                }
              )
            : this.renderContentNode()
        }
      }
    )
  }
})