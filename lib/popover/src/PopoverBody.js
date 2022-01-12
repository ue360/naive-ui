'use strict'
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod }
  }
Object.defineProperty(exports, '__esModule', { value: true })
exports.renderArrow = exports.popoverBodyProps = void 0
const vue_1 = require('vue')
const vueuc_1 = require('vueuc')
const vdirs_1 = require('vdirs')
const _mixins_1 = require('../../_mixins')
const _utils_1 = require('../../_utils')
const styles_1 = require('../styles')
const index_cssr_1 = __importDefault(require('./styles/index.cssr'))
const interface_1 = require('./interface')
const interface_2 = require('../../drawer/src/interface')
const interface_3 = require('../../modal/src/interface')
exports.popoverBodyProps = Object.assign(
  Object.assign({}, _mixins_1.useTheme.props),
  {
    to: _utils_1.useAdjustedTo.propTo,
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
const renderArrow = ({ arrowStyle, clsPrefix }) => {
  return (0, vue_1.h)(
    'div',
    { key: '__popover-arrow__', class: `${clsPrefix}-popover-arrow-wrapper` },
    (0, vue_1.h)('div', {
      class: `${clsPrefix}-popover-arrow`,
      style: arrowStyle
    })
  )
}
exports.renderArrow = renderArrow
exports.default = (0, vue_1.defineComponent)({
  name: 'PopoverBody',
  inheritAttrs: false,
  props: exports.popoverBodyProps,
  setup(props, { slots, attrs }) {
    const { namespaceRef, mergedClsPrefixRef } = (0, _mixins_1.useConfig)(props)
    const themeRef = (0, _mixins_1.useTheme)(
      'Popover',
      'Popover',
      index_cssr_1.default,
      styles_1.popoverLight,
      props,
      mergedClsPrefixRef
    )
    const followerRef = (0, vue_1.ref)(null)
    const NPopover = (0, vue_1.inject)('NPopover')
    const bodyRef = (0, vue_1.ref)(null)
    const followerEnabledRef = (0, vue_1.ref)(props.show)
    const directivesRef = (0, vue_1.computed)(() => {
      const { trigger, onClickoutside } = props
      const directives = []
      const {
        positionManuallyRef: { value: positionManually }
      } = NPopover
      if (!positionManually) {
        if (trigger === 'click' && !onClickoutside) {
          directives.push([vdirs_1.clickoutside, handleClickOutside])
        }
        if (trigger === 'hover') {
          directives.push([vdirs_1.mousemoveoutside, handleMouseMoveOutside])
        }
      }
      if (onClickoutside) {
        directives.push([vdirs_1.clickoutside, handleClickOutside])
      }
      if (props.displayDirective === 'show') {
        directives.push([vue_1.vShow, props.show])
      }
      return directives
    })
    const styleRef = (0, vue_1.computed)(() => {
      return [
        {
          width:
            props.width === 'trigger'
              ? ''
              : (0, _utils_1.formatLength)(props.width),
          maxWidth: (0, _utils_1.formatLength)(props.maxWidth),
          minWidth: (0, _utils_1.formatLength)(props.minWidth)
        },
        cssVarsRef.value
      ]
    })
    const cssVarsRef = (0, vue_1.computed)(() => {
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
    ;(0, vue_1.onBeforeUnmount)(() => {
      NPopover.setBodyInstance(null)
    })
    ;(0, vue_1.watch)((0, vue_1.toRef)(props, 'show'), (value) => {
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
    ;(0, vue_1.provide)(interface_1.popoverBodyInjectionKey, bodyRef)
    ;(0, vue_1.provide)(interface_2.drawerBodyInjectionKey, null)
    ;(0, vue_1.provide)(interface_3.modalBodyInjectionKey, null)
    function renderContentNode() {
      let contentNode
      const {
        internalRenderBodyRef: { value: renderBody }
      } = NPopover
      const { value: mergedClsPrefix } = mergedClsPrefixRef
      if (!renderBody) {
        const { value: extraClass } = NPopover.extraClassRef
        contentNode = (0, vue_1.h)(
          'div',
          (0, vue_1.mergeProps)(
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
              ? (0, vue_1.h)(
                  vue_1.Fragment,
                  null,
                  (0, vue_1.h)(
                    'div',
                    { class: `${mergedClsPrefix}-popover__header` },
                    slots.header()
                  ),
                  (0, vue_1.h)(
                    'div',
                    { class: `${mergedClsPrefix}-popover__content` },
                    slots
                  )
                )
              : (0, vue_1.renderSlot)(slots, 'default'),
            props.showArrow
              ? (0, exports.renderArrow)({
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
        ? (0, vue_1.withDirectives)(contentNode, directivesRef.value)
        : null
    }
    return {
      namespace: namespaceRef,
      isMounted: NPopover.isMountedRef,
      zIndex: NPopover.zIndexRef,
      followerRef,
      adjustedTo: (0, _utils_1.useAdjustedTo)(props),
      followerEnabled: followerEnabledRef,
      renderContentNode
    }
  },
  render() {
    return (0, vue_1.h)(
      vueuc_1.VFollower,
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
        teleportDisabled: this.adjustedTo === _utils_1.useAdjustedTo.tdkey
      },
      {
        default: () => {
          return this.animated
            ? (0, vue_1.h)(
                vue_1.Transition,
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
