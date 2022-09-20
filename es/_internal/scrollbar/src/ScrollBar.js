import {
  h,
  ref,
  defineComponent,
  computed,
  onMounted,
  onBeforeUnmount,
  mergeProps,
  renderSlot,
  Transition,
  watchEffect
} from 'vue'
import { on, off } from 'evtd'
import { VResizeObserver } from 'vueuc'
import { useIsIos } from 'vooks'
import { useConfig, useTheme } from '../../../_mixins'
import { scrollbarLight } from '../styles'
import style from './styles/index.cssr'
const scrollbarProps = Object.assign(Object.assign({}, useTheme.props), {
  size: {
    type: Number,
    default: 5
  },
  duration: {
    type: Number,
    default: 0
  },
  scrollable: {
    type: Boolean,
    default: true
  },
  xScrollable: {
    type: Boolean,
    default: false
  },
  // If container is set, resize observer won't not attached
  container: Function,
  content: Function,
  containerStyle: [String, Object],
  contentClass: String,
  contentStyle: [String, Object],
  horizontalRailStyle: [String, Object],
  verticalRailStyle: [String, Object],
  onScroll: Function,
  onWheel: Function,
  onResize: Function,
  internalOnUpdateScrollLeft: Function
})
const Scrollbar = defineComponent({
  name: 'Scrollbar',
  props: scrollbarProps,
  inheritAttrs: false,
  setup(props) {
    const { mergedClsPrefixRef } = useConfig(props)
    // dom ref
    const wrapperRef = ref(null)
    const containerRef = ref(null)
    const contentRef = ref(null)
    const yRailRef = ref(null)
    const xRailRef = ref(null)
    // data ref
    const contentHeightRef = ref(null)
    const contentWidthRef = ref(null)
    const containerHeightRef = ref(null)
    const containerWidthRef = ref(null)
    const yRailSizeRef = ref(null)
    const xRailSizeRef = ref(null)
    const containerScrollTopRef = ref(0)
    const containerScrollLeftRef = ref(0)
    const isShowXBarRef = ref(false)
    const isShowYBarRef = ref(false)
    let yBarPressed = false
    let xBarPressed = false
    let xBarVanishTimerId
    let yBarVanishTimerId
    let memoYTop = 0
    let memoXLeft = 0
    let memoMouseX = 0
    let memoMouseY = 0
    const isIos = useIsIos()
    const yBarSizeRef = computed(() => {
      const { value: containerHeight } = containerHeightRef
      const { value: contentHeight } = contentHeightRef
      const { value: yRailSize } = yRailSizeRef
      if (
        containerHeight === null ||
        contentHeight === null ||
        yRailSize === null
      ) {
        return 0
      } else {
        return Math.min(
          containerHeight,
          (yRailSize * containerHeight) / contentHeight + props.size * 1.5
        )
      }
    })
    const yBarSizePxRef = computed(() => {
      return `${yBarSizeRef.value}px`
    })
    const xBarSizeRef = computed(() => {
      const { value: containerWidth } = containerWidthRef
      const { value: contentWidth } = contentWidthRef
      const { value: xRailSize } = xRailSizeRef
      if (
        containerWidth === null ||
        contentWidth === null ||
        xRailSize === null
      ) {
        return 0
      } else {
        return (xRailSize * containerWidth) / contentWidth + props.size * 1.5
      }
    })
    const xBarSizePxRef = computed(() => {
      return `${xBarSizeRef.value}px`
    })
    const yBarTopRef = computed(() => {
      const { value: containerHeight } = containerHeightRef
      const { value: containerScrollTop } = containerScrollTopRef
      const { value: contentHeight } = contentHeightRef
      const { value: yRailSize } = yRailSizeRef
      if (
        containerHeight === null ||
        contentHeight === null ||
        yRailSize === null
      ) {
        return 0
      } else {
        return (
          (containerScrollTop / (contentHeight - containerHeight)) *
          (yRailSize - yBarSizeRef.value)
        )
      }
    })
    const yBarTopPxRef = computed(() => {
      return `${yBarTopRef.value}px`
    })
    const xBarLeftRef = computed(() => {
      const { value: containerWidth } = containerWidthRef
      const { value: containerScrollLeft } = containerScrollLeftRef
      const { value: contentWidth } = contentWidthRef
      const { value: xRailSize } = xRailSizeRef
      if (
        containerWidth === null ||
        contentWidth === null ||
        xRailSize === null
      ) {
        return 0
      } else {
        return (
          (containerScrollLeft / (contentWidth - containerWidth)) *
          (xRailSize - xBarSizeRef.value)
        )
      }
    })
    const xBarLeftPxRef = computed(() => {
      return `${xBarLeftRef.value}px`
    })
    const needYBarRef = computed(() => {
      const { value: containerHeight } = containerHeightRef
      const { value: contentHeight } = contentHeightRef
      return (
        containerHeight !== null &&
        contentHeight !== null &&
        contentHeight > containerHeight
      )
    })
    const needXBarRef = computed(() => {
      const { value: containerWidth } = containerWidthRef
      const { value: contentWidth } = contentWidthRef
      return (
        containerWidth !== null &&
        contentWidth !== null &&
        contentWidth > containerWidth
      )
    })
    const mergedContainerRef = computed(() => {
      const { container } = props
      if (container) return container()
      return containerRef.value
    })
    const mergedContentRef = computed(() => {
      const { content } = props
      if (content) return content()
      return contentRef.value
    })
    // methods
    const handleContentResize = sync
    const handleContainerResize = (e) => {
      const { onResize } = props
      if (onResize) onResize(e)
      sync()
    }
    const scrollTo = (options, y) => {
      if (!props.scrollable) return
      if (typeof options === 'number') {
        scrollToPosition(
          options,
          y !== null && y !== void 0 ? y : 0,
          0,
          false,
          'auto'
        )
        return
      }
      const {
        left,
        top,
        index,
        elSize,
        position,
        behavior,
        el,
        debounce = true
      } = options
      if (left !== undefined || top !== undefined) {
        scrollToPosition(
          left !== null && left !== void 0 ? left : 0,
          top !== null && top !== void 0 ? top : 0,
          0,
          false,
          behavior
        )
      }
      if (el !== undefined) {
        scrollToPosition(0, el.offsetTop, el.offsetHeight, debounce, behavior)
      } else if (index !== undefined && elSize !== undefined) {
        scrollToPosition(0, index * elSize, elSize, debounce, behavior)
      } else if (position === 'bottom') {
        scrollToPosition(0, Number.MAX_SAFE_INTEGER, 0, false, behavior)
      } else if (position === 'top') {
        scrollToPosition(0, 0, 0, false, behavior)
      }
    }
    function scrollToPosition(left, top, elSize, debounce, behavior) {
      const { value: container } = mergedContainerRef
      if (!container) return
      if (debounce) {
        const { scrollTop, offsetHeight } = container
        if (top > scrollTop) {
          if (top + elSize <= scrollTop + offsetHeight) {
            // do nothing
          } else {
            container.scrollTo({
              left,
              top: top + elSize - offsetHeight,
              behavior
            })
          }
          return
        }
      }
      container.scrollTo({
        left,
        top,
        behavior
      })
    }
    function handleMouseEnterWrapper() {
      showXBar()
      showYBar()
      sync()
    }
    function handleMouseLeaveWrapper() {
      hideBar()
    }
    function hideBar() {
      hideYBar()
      hideXBar()
    }
    function hideYBar() {
      if (yBarVanishTimerId !== undefined) {
        window.clearTimeout(yBarVanishTimerId)
      }
      yBarVanishTimerId = window.setTimeout(() => {
        isShowYBarRef.value = false
      }, props.duration)
    }
    function hideXBar() {
      if (xBarVanishTimerId !== undefined) {
        window.clearTimeout(xBarVanishTimerId)
      }
      xBarVanishTimerId = window.setTimeout(() => {
        isShowXBarRef.value = false
      }, props.duration)
    }
    function showXBar() {
      if (xBarVanishTimerId !== undefined) {
        window.clearTimeout(xBarVanishTimerId)
      }
      isShowXBarRef.value = true
    }
    function showYBar() {
      if (yBarVanishTimerId !== undefined) {
        window.clearTimeout(yBarVanishTimerId)
      }
      isShowYBarRef.value = true
    }
    function handleScroll(e) {
      const { onScroll } = props
      if (onScroll) onScroll(e)
      syncScrollState()
    }
    function syncScrollState() {
      // only collect scroll state, do not trigger any dom event
      const { value: container } = mergedContainerRef
      if (container) {
        containerScrollTopRef.value = container.scrollTop
        containerScrollLeftRef.value = container.scrollLeft
      }
    }
    function syncPositionState() {
      // only collect position state, do not trigger any dom event
      // Don't use getClientBoundingRect because element may be scale transformed
      const { value: content } = mergedContentRef
      if (content) {
        contentHeightRef.value = content.offsetHeight
        contentWidthRef.value = content.offsetWidth
      }
      const { value: container } = mergedContainerRef
      if (container) {
        containerHeightRef.value = container.offsetHeight
        containerWidthRef.value = container.offsetWidth
      }
      const { value: xRailEl } = xRailRef
      const { value: yRailEl } = yRailRef
      if (xRailEl) {
        xRailSizeRef.value = xRailEl.offsetWidth
      }
      if (yRailEl) {
        yRailSizeRef.value = yRailEl.offsetHeight
      }
    }
    function sync() {
      if (!props.scrollable) return
      syncPositionState()
      syncScrollState()
    }
    function isMouseUpAway(e) {
      var _a
      return !((_a = wrapperRef.value) === null || _a === void 0
        ? void 0
        : _a.contains(e.target))
    }
    function handleXScrollMouseDown(e) {
      e.preventDefault()
      e.stopPropagation()
      xBarPressed = true
      on('mousemove', window, handleXScrollMouseMove, true)
      on('mouseup', window, handleXScrollMouseUp, true)
      memoXLeft = containerScrollLeftRef.value
      memoMouseX = e.clientX
    }
    function handleXScrollMouseMove(e) {
      if (!xBarPressed) return
      if (xBarVanishTimerId !== undefined) {
        window.clearTimeout(xBarVanishTimerId)
      }
      if (yBarVanishTimerId !== undefined) {
        window.clearTimeout(yBarVanishTimerId)
      }
      const { value: containerWidth } = containerWidthRef
      const { value: contentWidth } = contentWidthRef
      const { value: xBarSize } = xBarSizeRef
      if (containerWidth === null || contentWidth === null) return
      const dX = e.clientX - memoMouseX
      const dScrollLeft =
        (dX * (contentWidth - containerWidth)) / (containerWidth - xBarSize)
      const toScrollLeftUpperBound = contentWidth - containerWidth
      let toScrollLeft = memoXLeft + dScrollLeft
      toScrollLeft = Math.min(toScrollLeftUpperBound, toScrollLeft)
      toScrollLeft = Math.max(toScrollLeft, 0)
      const { value: container } = mergedContainerRef
      if (container) {
        container.scrollLeft = toScrollLeft
        const { internalOnUpdateScrollLeft } = props
        if (internalOnUpdateScrollLeft) internalOnUpdateScrollLeft(toScrollLeft)
      }
    }
    function handleXScrollMouseUp(e) {
      e.preventDefault()
      e.stopPropagation()
      off('mousemove', window, handleXScrollMouseMove, true)
      off('mouseup', window, handleXScrollMouseUp, true)
      xBarPressed = false
      sync()
      if (isMouseUpAway(e)) {
        hideBar()
      }
    }
    function handleYScrollMouseDown(e) {
      e.preventDefault()
      e.stopPropagation()
      yBarPressed = true
      on('mousemove', window, handleYScrollMouseMove, true)
      on('mouseup', window, handleYScrollMouseUp, true)
      memoYTop = containerScrollTopRef.value
      memoMouseY = e.clientY
    }
    function handleYScrollMouseMove(e) {
      if (!yBarPressed) return
      if (xBarVanishTimerId !== undefined) {
        window.clearTimeout(xBarVanishTimerId)
      }
      if (yBarVanishTimerId !== undefined) {
        window.clearTimeout(yBarVanishTimerId)
      }
      const { value: containerHeight } = containerHeightRef
      const { value: contentHeight } = contentHeightRef
      const { value: yBarSize } = yBarSizeRef
      if (containerHeight === null || contentHeight === null) return
      const dY = e.clientY - memoMouseY
      const dScrollTop =
        (dY * (contentHeight - containerHeight)) / (containerHeight - yBarSize)
      const toScrollTopUpperBound = contentHeight - containerHeight
      let toScrollTop = memoYTop + dScrollTop
      toScrollTop = Math.min(toScrollTopUpperBound, toScrollTop)
      toScrollTop = Math.max(toScrollTop, 0)
      const { value: container } = mergedContainerRef
      if (container) {
        container.scrollTop = toScrollTop
      }
    }
    function handleYScrollMouseUp(e) {
      e.preventDefault()
      e.stopPropagation()
      off('mousemove', window, handleYScrollMouseMove, true)
      off('mouseup', window, handleYScrollMouseUp, true)
      yBarPressed = false
      sync()
      if (isMouseUpAway(e)) {
        hideBar()
      }
    }
    watchEffect(() => {
      const { value: needXBar } = needXBarRef
      const { value: needYBar } = needYBarRef
      const { value: mergedClsPrefix } = mergedClsPrefixRef
      const { value: xRailEl } = xRailRef
      const { value: yRailEl } = yRailRef
      if (xRailEl) {
        if (!needXBar) {
          xRailEl.classList.add(`${mergedClsPrefix}-scrollbar-rail--disabled`)
        } else {
          xRailEl.classList.remove(
            `${mergedClsPrefix}-scrollbar-rail--disabled`
          )
        }
      }
      if (yRailEl) {
        if (!needYBar) {
          yRailEl.classList.add(`${mergedClsPrefix}-scrollbar-rail--disabled`)
        } else {
          yRailEl.classList.remove(
            `${mergedClsPrefix}-scrollbar-rail--disabled`
          )
        }
      }
    })
    onMounted(() => {
      // if container exist, it always can't be resolved when scrollbar is mounted
      // for example:
      // - component
      //   - scrollbar
      //     - inner
      // if you pass inner to scrollbar, you may use a ref inside component
      // however, when scrollbar is mounted, ref is not ready at component
      // you need to init by yourself
      if (props.container) return
      sync()
    })
    onBeforeUnmount(() => {
      if (xBarVanishTimerId !== undefined) {
        window.clearTimeout(xBarVanishTimerId)
      }
      if (yBarVanishTimerId !== undefined) {
        window.clearTimeout(yBarVanishTimerId)
      }
      off('mousemove', window, handleYScrollMouseMove, true)
      off('mouseup', window, handleYScrollMouseUp, true)
    })
    const themeRef = useTheme(
      'Scrollbar',
      'Scrollbar',
      style,
      scrollbarLight,
      props,
      mergedClsPrefixRef
    )
    return {
      sync,
      scrollTo,
      mergedClsPrefix: mergedClsPrefixRef,
      containerScrollTop: containerScrollTopRef,
      wrapperRef,
      containerRef,
      contentRef,
      yRailRef,
      xRailRef,
      needYBar: needYBarRef,
      needXBar: needXBarRef,
      yBarSizePx: yBarSizePxRef,
      xBarSizePx: xBarSizePxRef,
      yBarTopPx: yBarTopPxRef,
      xBarLeftPx: xBarLeftPxRef,
      isShowXBar: isShowXBarRef,
      isShowYBar: isShowYBarRef,
      isIos,
      handleScroll,
      handleContentResize,
      handleContainerResize,
      handleMouseEnterWrapper,
      handleMouseLeaveWrapper,
      handleYScrollMouseDown,
      handleXScrollMouseDown,
      cssVars: computed(() => {
        const {
          common: {
            cubicBezierEaseInOut,
            scrollbarBorderRadius,
            scrollbarHeight,
            scrollbarWidth
          },
          self: { color, colorHover }
        } = themeRef.value
        return {
          '--scrollbar-bezier': cubicBezierEaseInOut,
          '--scrollbar-color': color,
          '--scrollbar-color-hover': colorHover,
          '--scrollbar-border-radius': scrollbarBorderRadius,
          '--scrollbar-width': scrollbarWidth,
          '--scrollbar-height': scrollbarHeight
        }
      })
    }
  },
  render() {
    const { $slots, mergedClsPrefix } = this
    if (!this.scrollable) return renderSlot($slots, 'default')
    const createChildren = () =>
      h(
        'div',
        mergeProps(this.$attrs, {
          ref: 'wrapperRef',
          class: `${mergedClsPrefix}-scrollbar`,
          style: this.cssVars,
          onMouseenter: this.handleMouseEnterWrapper,
          onMouseleave: this.handleMouseLeaveWrapper
        }),
        [
          this.container
            ? renderSlot($slots, 'default')
            : h(
                'div',
                {
                  ref: 'containerRef',
                  class: `${mergedClsPrefix}-scrollbar-container`,
                  style: this.containerStyle,
                  onScroll: this.handleScroll,
                  onWheel: this.onWheel
                },
                h(
                  VResizeObserver,
                  { onResize: this.handleContentResize },
                  {
                    default: () =>
                      h(
                        'div',
                        {
                          ref: 'contentRef',
                          style: [
                            {
                              width: this.xScrollable ? 'fit-content' : null
                            },
                            this.contentStyle
                          ],
                          class: [
                            `${mergedClsPrefix}-scrollbar-content`,
                            this.contentClass
                          ]
                        },
                        $slots
                      )
                  }
                )
              ),
          h(
            'div',
            {
              ref: 'yRailRef',
              class: `${mergedClsPrefix}-scrollbar-rail ${mergedClsPrefix}-scrollbar-rail--vertical`,
              style: [this.horizontalRailStyle]
            },
            h(
              Transition,
              { name: 'fade-in-transition' },
              {
                default: () =>
                  this.needYBar && this.isShowYBar && !this.isIos
                    ? h('div', {
                        class: `${mergedClsPrefix}-scrollbar-rail__scrollbar`,
                        style: {
                          height: this.yBarSizePx,
                          top: this.yBarTopPx
                        },
                        onMousedown: this.handleYScrollMouseDown
                      })
                    : null
              }
            )
          ),
          h(
            'div',
            {
              ref: 'xRailRef',
              class: `${mergedClsPrefix}-scrollbar-rail ${mergedClsPrefix}-scrollbar-rail--horizontal`,
              style: [this.verticalRailStyle]
            },
            h(
              Transition,
              { name: 'fade-in-transition' },
              {
                default: () =>
                  this.needXBar && this.isShowXBar && !this.isIos
                    ? h('div', {
                        class: `${mergedClsPrefix}-scrollbar-rail__scrollbar`,
                        style: {
                          width: this.xBarSizePx,
                          left: this.xBarLeftPx
                        },
                        onMousedown: this.handleXScrollMouseDown
                      })
                    : null
              }
            )
          )
        ]
      )
    return this.container
      ? createChildren()
      : h(
          VResizeObserver,
          { onResize: this.handleContainerResize },
          {
            default: createChildren
          }
        )
  }
})
export default Scrollbar
export const XScrollbar = Scrollbar