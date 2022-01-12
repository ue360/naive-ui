'use strict'
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod }
  }
Object.defineProperty(exports, '__esModule', { value: true })
const vue_1 = require('vue')
const seemly_1 = require('seemly')
const evtd_1 = require('evtd')
const icons_1 = require('../../_internal/icons')
const _mixins_1 = require('../../_mixins')
const _utils_1 = require('../../_utils')
const styles_1 = require('../styles')
const index_cssr_1 = __importDefault(require('./styles/index.cssr'))
const carouselProps = Object.assign(
  Object.assign({}, _mixins_1.useTheme.props),
  {
    showArrow: Boolean,
    autoplay: Boolean,
    dotPlacement: {
      type: String,
      default: 'bottom'
    },
    interval: {
      type: Number,
      default: 5000
    },
    trigger: {
      type: String,
      default: 'click'
    }
  }
)
exports.default = (0, vue_1.defineComponent)({
  name: 'Carousel',
  props: carouselProps,
  setup(props) {
    const { mergedClsPrefixRef } = (0, _mixins_1.useConfig)(props)
    const currentRef = (0, vue_1.ref)(1)
    const lengthRef = { value: 1 }
    const touchingRef = (0, vue_1.ref)(false)
    const dragOffsetRef = (0, vue_1.ref)(0)
    const selfElRef = (0, vue_1.ref)(null)
    const dotPlacementRef = (0, vue_1.toRef)(props, 'dotPlacement')
    let timerId = null
    let inTransition = false
    // current from 0 to length + 1
    function next() {
      if (lengthRef.value <= 1) return
      if (inTransition) return
      inTransition = true
      // no need for reset since transitionend handler will handle it
      currentRef.value++
    }
    function prev() {
      if (lengthRef.value <= 1) return
      if (inTransition) return
      inTransition = true
      // no need for reset since transitionend handler will handle it
      currentRef.value--
    }
    function setCurrent(value) {
      if (lengthRef.value <= 1) return
      if (inTransition) return
      const { value: current } = currentRef
      if (value === current) return
      inTransition = true
      if (current === 1 && value === lengthRef.value && value - current > 1) {
        currentRef.value--
      } else if (
        value === 1 &&
        current === lengthRef.value &&
        current - value > 1
      ) {
        currentRef.value++
      } else {
        currentRef.value = value
      }
      if (props.autoplay) {
        resetInterval()
      }
    }
    // slot    [ 0 1 2 ]
    // index   0 1 2 3 4
    // display 2 0 1 2 0
    function handleTransitionEnd(e) {
      const target = e.target
      if (target !== e.currentTarget) return
      const { value: current } = currentRef
      const { value: length } = lengthRef
      const nextCurrent =
        current === 0 ? length : current === length + 1 ? 1 : null
      if (nextCurrent !== null) {
        currentRef.value = nextCurrent
        void (0, vue_1.nextTick)(() => {
          target.style.transition = 'none'
          void target.offsetWidth
          target.style.transition = ''
          inTransition = false
        })
      } else {
        inTransition = false
      }
    }
    function handleKeydown(e, current) {
      switch (e.code) {
        case 'Enter':
        case 'NumpadEnter':
        case 'Space':
          setCurrent(current)
      }
    }
    let dragStartX = 0
    let dragStartY = 0
    let dragStartTime = 0
    let memorizedContainerWidth = 0
    let memorizedContainerHeight = 0
    function handleTouchstart(e) {
      if (timerId !== null) {
        window.clearInterval(timerId)
      }
      e.preventDefault()
      const { value: dotPlacement } = dotPlacementRef
      if (dotPlacement === 'left' || dotPlacement === 'right') {
        // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
        memorizedContainerHeight = selfElRef.value.offsetHeight
        touchingRef.value = true
        dragStartTime = Date.now()
        dragStartY = e.touches[0].clientY
      } else {
        // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
        memorizedContainerWidth = selfElRef.value.offsetWidth
        touchingRef.value = true
        dragStartTime = Date.now()
        dragStartX = e.touches[0].clientX
      }
      ;(0, evtd_1.on)('touchmove', document, handleTouchmove)
      ;(0, evtd_1.on)('touchend', document, handleTouchend)
      ;(0, evtd_1.on)('touchcancel', document, handleTouchend)
    }
    function handleTouchmove(e) {
      const { value: dotPlacement } = dotPlacementRef
      if (dotPlacement === 'left' || dotPlacement === 'right') {
        const dragOffset = e.touches[0].clientY - dragStartY
        dragOffsetRef.value =
          dragOffset > memorizedContainerHeight
            ? memorizedContainerHeight
            : dragOffset < -memorizedContainerHeight
            ? -memorizedContainerHeight
            : dragOffset
      } else {
        const dragOffset = e.touches[0].clientX - dragStartX
        dragOffsetRef.value =
          dragOffset > memorizedContainerWidth
            ? memorizedContainerWidth
            : dragOffset < -memorizedContainerWidth
            ? -memorizedContainerWidth
            : dragOffset
      }
    }
    function handleTouchend() {
      if (props.autoplay) resetInterval()
      void (0, vue_1.nextTick)(() => {
        touchingRef.value = false
      })
      const { value: selfEl } = selfElRef
      if (selfEl) {
        const { offsetWidth, offsetHeight } = selfEl
        const { value: dragOffset } = dragOffsetRef
        const duration = Date.now() - dragStartTime
        const { value: dotPlacement } = dotPlacementRef
        // more than 50% width or faster than 0.4px per ms
        if (dotPlacement === 'left' || dotPlacement === 'right') {
          if (dragOffset > offsetHeight / 2 || dragOffset / duration > 0.4) {
            prev()
          } else if (
            dragOffset < -offsetHeight / 2 ||
            dragOffset / duration < -0.4
          ) {
            next()
          }
        } else {
          if (dragOffset > offsetWidth / 2 || dragOffset / duration > 0.4) {
            prev()
          } else if (
            dragOffset < -offsetWidth / 2 ||
            dragOffset / duration < -0.4
          ) {
            next()
          }
        }
      }
      dragOffsetRef.value = 0
      ;(0, evtd_1.off)('touchmove', document, handleTouchmove)
      ;(0, evtd_1.off)('touchend', document, handleTouchend)
      ;(0, evtd_1.off)('touchcancel', document, handleTouchend)
    }
    function handleMouseenter(current) {
      if (props.trigger === 'hover') {
        setCurrent(current)
      }
    }
    function resetInterval() {
      if (timerId !== null) {
        window.clearInterval(timerId)
      }
      timerId = window.setInterval(() => {
        next()
      }, props.interval)
    }
    ;(0, vue_1.onMounted)(() => {
      ;(0, vue_1.watchEffect)(() => {
        if (props.autoplay) {
          resetInterval()
        } else {
          if (timerId !== null) {
            window.clearInterval(timerId)
          }
        }
      })
    })
    ;(0, vue_1.onBeforeUnmount)(() => {
      if (timerId !== null) {
        window.clearInterval(timerId)
      }
    })
    const themeRef = (0, _mixins_1.useTheme)(
      'Carousel',
      'Carousel',
      index_cssr_1.default,
      styles_1.carouselLight,
      props
    )
    return {
      selfElRef,
      mergedClsPrefix: mergedClsPrefixRef,
      current: currentRef,
      lengthRef,
      touching: touchingRef,
      dragOffset: dragOffsetRef,
      prev,
      next,
      setCurrent,
      handleKeydown,
      handleTouchstart,
      handleTransitionEnd,
      handleMouseenter,
      cssVars: (0, vue_1.computed)(() => {
        const {
          common: { cubicBezierEaseInOut },
          self: { dotColor, dotColorActive, dotSize, arrowColor }
        } = themeRef.value
        return {
          '--bezier': cubicBezierEaseInOut,
          '--dot-color': dotColor,
          '--dot-color-active': dotColorActive,
          '--dot-size': dotSize,
          '--arrow-color': arrowColor
        }
      })
    }
  },
  render() {
    const {
      showArrow,
      dotPlacement,
      mergedClsPrefix,
      current,
      lengthRef,
      autoplay,
      $slots: { default: defaultSlot }
    } = this
    const children = (0, _utils_1.flatten)(
      (defaultSlot === null || defaultSlot === void 0
        ? void 0
        : defaultSlot()) || []
    )
    const { length } = children
    lengthRef.value = length
    const leftOverflowVNode = length
      ? (0, vue_1.cloneVNode)(children[length - 1])
      : null
    const rightOverflowVNode = length
      ? (0, vue_1.cloneVNode)(children[0])
      : null
    const total = length + 2
    const vertical = dotPlacement === 'left' || dotPlacement === 'right'
    return (0, vue_1.h)(
      'div',
      {
        class: [
          `${mergedClsPrefix}-carousel`,
          `${mergedClsPrefix}-carousel--${this.dotPlacement}`
        ],
        style: this.cssVars,
        ref: 'selfElRef'
      },
      (0, vue_1.h)(
        'div',
        {
          class: `${mergedClsPrefix}-carousel__slides`,
          onTouchstart: this.handleTouchstart,
          style: {
            [vertical ? 'height' : 'width']: `${total}00%`,
            [vertical ? 'width' : 'height']: '100%',
            transition: this.touching ? 'none' : '',
            transform: vertical
              ? `translate3d(0, -${(100 / total) * (current % total)}%, 0)` +
                (this.touching ? `translateY(${this.dragOffset}px)` : '')
              : `translate3d(-${(100 / total) * (current % total)}%, 0, 0)` +
                (this.touching ? `translateX(${this.dragOffset}px)` : '')
          },
          onTransitionend: this.handleTransitionEnd,
          role: 'listbox'
        },
        [leftOverflowVNode, ...children, rightOverflowVNode].map((vNode, i) =>
          (0, vue_1.h)(
            'div',
            {
              'data-index': i,
              style: { [vertical ? 'height' : 'width']: `${100 / total}%` },
              key: i,
              role: 'option',
              'aria-hidden': i !== current
            },
            vNode
          )
        )
      ),
      (0, vue_1.h)(
        'div',
        { class: `${mergedClsPrefix}-carousel__dots`, role: 'tablist' },
        (0, seemly_1.indexMap)(length, (i) => {
          const selected = i + 1 === current
          return (0, vue_1.h)('div', {
            'aria-selected': selected,
            role: 'button',
            tabindex: '0',
            class: [
              `${mergedClsPrefix}-carousel__dot`,
              selected && `${mergedClsPrefix}-carousel__dot--active`
            ],
            onClick: () => this.setCurrent(i + 1),
            onMouseenter: () => this.handleMouseenter(i + 1),
            onMousedown: autoplay
              ? (e) => {
                  e.preventDefault()
                }
              : undefined,
            onKeydown: (e) => this.handleKeydown(e, i + 1)
          })
        })
      ),
      showArrow && [
        (0, vue_1.h)(
          'div',
          {
            class: [
              `${mergedClsPrefix}-carousel__arrow`,
              `${mergedClsPrefix}-carousel__arrow--${
                vertical ? 'bottom' : 'right'
              }`
            ],
            role: 'button',
            onClick: () => {
              this.next()
            }
          },
          (0, vue_1.h)(icons_1.ForwardIcon, null)
        ),
        (0, vue_1.h)(
          'div',
          {
            class: [
              `${mergedClsPrefix}-carousel__arrow`,
              `${mergedClsPrefix}-carousel__arrow--${vertical ? 'top' : 'left'}`
            ],
            role: 'button',
            onClick: () => {
              this.prev()
            }
          },
          (0, vue_1.h)(icons_1.BackwardIcon, null)
        )
      ]
    )
  }
})
