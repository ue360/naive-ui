import {
  h,
  defineComponent,
  Fragment,
  ref,
  withDirectives,
  Transition,
  vShow,
  renderSlot,
  watch,
  computed,
  toRef
} from 'vue'
import { zindexable } from 'vdirs'
import { useIsMounted } from 'vooks'
import { LazyTeleport } from 'vueuc'
import { on, off } from 'evtd'
import { beforeNextFrameOnce } from 'seemly'
import {
  RotateClockwiseIcon,
  RotateCounterclockwiseIcon,
  ZoomInIcon,
  ZoomOutIcon
} from '../../_internal/icons'
import { useTheme } from '../../_mixins'
import { NBaseIcon } from '../../_internal'
import { imageLight } from '../styles'
import { prevIcon, nextIcon, closeIcon } from './icons'
import style from './styles/index.cssr'
export default defineComponent({
  name: 'ImagePreview',
  props: {
    showToolbar: Boolean,
    onNext: Function,
    onPrev: Function,
    clsPrefix: {
      type: String,
      required: true
    }
  },
  setup(props) {
    const themeRef = useTheme(
      'Image',
      'Image',
      style,
      imageLight,
      {},
      toRef(props, 'clsPrefix')
    )
    let thumbnailEl = null
    const previewRef = ref(null)
    const previewWrapperRef = ref(null)
    const previewSrcRef = ref(undefined)
    const showRef = ref(false)
    const displayedRef = ref(false)
    function syncTransformOrigin() {
      const { value: previewWrapper } = previewWrapperRef
      if (!thumbnailEl || !previewWrapper) return
      const { style } = previewWrapper
      const tbox = thumbnailEl.getBoundingClientRect()
      const tx = tbox.left + tbox.width / 2
      const ty = tbox.top + tbox.height / 2
      style.transformOrigin = `${tx}px ${ty}px`
    }
    function handleKeyup(e) {
      var _a, _b
      switch (e.code) {
        case 'ArrowLeft':
          ;(_a = props.onPrev) === null || _a === void 0
            ? void 0
            : _a.call(props)
          break
        case 'ArrowRight':
          ;(_b = props.onNext) === null || _b === void 0
            ? void 0
            : _b.call(props)
          break
        case 'Escape':
          toggleShow()
          break
      }
    }
    if (props.onPrev) {
      watch(showRef, (value) => {
        if (value) on('keyup', document, handleKeyup)
        else off('keyup', document, handleKeyup)
      })
    }
    let startX = 0
    let startY = 0
    let offsetX = 0
    let offsetY = 0
    let startOffsetX = 0
    let startOffsetY = 0
    let mouseDownClientX = 0
    let mouseDownClientY = 0
    let dragging = false
    function handleMouseMove(e) {
      const { clientX, clientY } = e
      offsetX = clientX - startX
      offsetY = clientY - startY
      beforeNextFrameOnce(derivePreviewStyle)
    }
    function getMoveStrategy(opts) {
      const {
        mouseUpClientX,
        mouseUpClientY,
        mouseDownClientX,
        mouseDownClientY
      } = opts
      const deltaHorizontal = mouseDownClientX - mouseUpClientX
      const deltaVertical = mouseDownClientY - mouseUpClientY
      let moveVerticalDirection = null
      let moveHorizontalDirection = null
      moveVerticalDirection =
        'vertical' + (deltaVertical > 0 ? 'Top' : 'Bottom')
      moveHorizontalDirection =
        'horizontal' + (deltaHorizontal > 0 ? 'Left' : 'Right')
      return {
        moveVerticalDirection,
        moveHorizontalDirection,
        deltaHorizontal,
        deltaVertical
      }
    }
    // avoid image move outside viewport
    function getDerivedOffset(moveStrategy) {
      const { value: preview } = previewRef
      if (!preview) return { offsetX: 0, offsetY: 0 }
      const pbox = preview.getBoundingClientRect()
      const {
        moveVerticalDirection,
        moveHorizontalDirection,
        deltaHorizontal,
        deltaVertical
      } = moveStrategy || {}
      let nextOffsetX = 0
      let nextOffsetY = 0
      if (pbox.width <= window.innerWidth) {
        nextOffsetX = 0
      } else if (pbox.left > 0) {
        nextOffsetX = (pbox.width - window.innerWidth) / 2
      } else if (pbox.right < window.innerWidth) {
        nextOffsetX = -(pbox.width - window.innerWidth) / 2
      } else if (moveHorizontalDirection === 'horizontalRight') {
        nextOffsetX = Math.min(
          (pbox.width - window.innerWidth) / 2,
          startOffsetX -
            (deltaHorizontal !== null && deltaHorizontal !== void 0
              ? deltaHorizontal
              : 0)
        )
      } else {
        nextOffsetX = Math.max(
          -((pbox.width - window.innerWidth) / 2),
          startOffsetX -
            (deltaHorizontal !== null && deltaHorizontal !== void 0
              ? deltaHorizontal
              : 0)
        )
      }
      if (pbox.height <= window.innerHeight) {
        nextOffsetY = 0
      } else if (pbox.top > 0) {
        nextOffsetY = (pbox.height - window.innerHeight) / 2
      } else if (pbox.bottom < window.innerHeight) {
        nextOffsetY = -(pbox.height - window.innerHeight) / 2
      } else if (moveVerticalDirection === 'verticalBottom') {
        nextOffsetY = Math.min(
          (pbox.height - window.innerHeight) / 2,
          startOffsetY -
            (deltaVertical !== null && deltaVertical !== void 0
              ? deltaVertical
              : 0)
        )
      } else {
        nextOffsetY = Math.max(
          -((pbox.height - window.innerHeight) / 2),
          startOffsetY -
            (deltaVertical !== null && deltaVertical !== void 0
              ? deltaVertical
              : 0)
        )
      }
      return {
        offsetX: nextOffsetX,
        offsetY: nextOffsetY
      }
    }
    function handleMouseUp(e) {
      off('mousemove', document, handleMouseMove)
      off('mouseup', document, handleMouseUp)
      const { clientX: mouseUpClientX, clientY: mouseUpClientY } = e
      dragging = false
      const moveStrategy = getMoveStrategy({
        mouseUpClientX,
        mouseUpClientY,
        mouseDownClientX,
        mouseDownClientY
      })
      const offset = getDerivedOffset(moveStrategy)
      offsetX = offset.offsetX
      offsetY = offset.offsetY
      derivePreviewStyle()
    }
    function handlePreviewMousedown(e) {
      const { clientX, clientY } = e
      dragging = true
      startX = clientX - offsetX
      startY = clientY - offsetY
      startOffsetX = offsetX
      startOffsetY = offsetY
      mouseDownClientX = clientX
      mouseDownClientY = clientY
      derivePreviewStyle()
      on('mousemove', document, handleMouseMove)
      on('mouseup', document, handleMouseUp)
    }
    function handlePreviewDblclick() {
      scale = scale === 1 ? 2 : 1
      derivePreviewStyle()
    }
    let scale = 1
    let rotate = 0
    function handleSwitchPrev() {
      var _a
      scale = 1
      rotate = 0
      ;(_a = props.onPrev) === null || _a === void 0 ? void 0 : _a.call(props)
    }
    function handleSwitchNext() {
      var _a
      scale = 1
      rotate = 0
      ;(_a = props.onNext) === null || _a === void 0 ? void 0 : _a.call(props)
    }
    function rotateCounterclockwise() {
      rotate -= 90
      derivePreviewStyle()
    }
    function rotateClockwise() {
      rotate += 90
      derivePreviewStyle()
    }
    function zoomIn() {
      if (scale < 3) {
        scale += 0.5
        derivePreviewStyle()
      }
    }
    function zoomOut() {
      if (scale > 0.5) {
        scale -= 0.5
        derivePreviewStyle(false)
        const offset = getDerivedOffset()
        scale += 0.5
        derivePreviewStyle(false)
        scale -= 0.5
        offsetX = offset.offsetX
        offsetY = offset.offsetY
        derivePreviewStyle()
      }
    }
    function derivePreviewStyle(transition = true) {
      const { value: preview } = previewRef
      if (!preview) return
      const { style } = preview
      const transformStyle = `transform-origin: center; transform: translateX(${offsetX}px) translateY(${offsetY}px) rotate(${rotate}deg) scale(${scale});`
      if (dragging) {
        style.cssText = 'cursor: grabbing; transition: none;' + transformStyle
      } else {
        style.cssText =
          'cursor: grab;' +
          transformStyle +
          (transition ? '' : 'transition: none;')
      }
      if (!transition) {
        void preview.offsetHeight
      }
    }
    function toggleShow() {
      showRef.value = !showRef.value
      displayedRef.value = true
    }
    const exposedMethods = {
      setPreviewSrc: (src) => {
        previewSrcRef.value = src
      },
      setThumbnailEl: (el) => {
        thumbnailEl = el
      },
      toggleShow
    }
    return Object.assign(
      Object.assign(
        {
          previewRef,
          previewWrapperRef,
          previewSrc: previewSrcRef,
          show: showRef,
          appear: useIsMounted(),
          displayed: displayedRef,
          handlePreviewMousedown,
          handlePreviewDblclick,
          syncTransformOrigin,
          handleAfterLeave: () => {
            rotate = 0
            scale = 1
            displayedRef.value = false
          },
          handleDragStart: (e) => {
            e.preventDefault()
          },
          zoomIn,
          zoomOut,
          rotateCounterclockwise,
          rotateClockwise,
          handleSwitchPrev,
          handleSwitchNext
        },
        exposedMethods
      ),
      {
        cssVars: computed(() => {
          const {
            common: { cubicBezierEaseInOut },
            self: { iconColor }
          } = themeRef.value
          return {
            '--bezier': cubicBezierEaseInOut,
            '--icon-color': iconColor
          }
        })
      }
    )
  },
  render() {
    const { clsPrefix } = this
    return h(
      Fragment,
      null,
      renderSlot(this.$slots, 'default'),
      h(
        LazyTeleport,
        { show: this.show },
        {
          default: () =>
            this.show || this.displayed
              ? withDirectives(
                  h(
                    'div',
                    {
                      class: `${clsPrefix}-image-preview-container`,
                      style: this.cssVars
                    },
                    h(
                      Transition,
                      { name: 'fade-in-transition', appear: this.appear },
                      {
                        default: () =>
                          this.show
                            ? h('div', {
                                class: `${clsPrefix}-image-preview-overlay`,
                                onClick: this.toggleShow
                              })
                            : null
                      }
                    ),
                    this.showToolbar
                      ? h(
                          Transition,
                          { name: 'fade-in-transition', appear: this.appear },
                          {
                            default: () =>
                              this.show
                                ? h(
                                    'div',
                                    {
                                      class: `${clsPrefix}-image-preview-toolbar`
                                    },
                                    this.onPrev
                                      ? h(
                                          Fragment,
                                          null,
                                          h(
                                            NBaseIcon,
                                            {
                                              clsPrefix: clsPrefix,
                                              onClick: this.handleSwitchPrev
                                            },
                                            { default: () => prevIcon }
                                          ),
                                          h(
                                            NBaseIcon,
                                            {
                                              clsPrefix: clsPrefix,
                                              onClick: this.handleSwitchNext
                                            },
                                            { default: () => nextIcon }
                                          )
                                        )
                                      : null,
                                    h(
                                      NBaseIcon,
                                      {
                                        clsPrefix: clsPrefix,
                                        onClick: this.rotateCounterclockwise
                                      },
                                      {
                                        default: () =>
                                          h(RotateCounterclockwiseIcon, null)
                                      }
                                    ),
                                    h(
                                      NBaseIcon,
                                      {
                                        clsPrefix: clsPrefix,
                                        onClick: this.rotateClockwise
                                      },
                                      {
                                        default: () =>
                                          h(RotateClockwiseIcon, null)
                                      }
                                    ),
                                    h(
                                      NBaseIcon,
                                      {
                                        clsPrefix: clsPrefix,
                                        onClick: this.zoomOut
                                      },
                                      { default: () => h(ZoomOutIcon, null) }
                                    ),
                                    h(
                                      NBaseIcon,
                                      {
                                        clsPrefix: clsPrefix,
                                        onClick: this.zoomIn
                                      },
                                      { default: () => h(ZoomInIcon, null) }
                                    ),
                                    h(
                                      NBaseIcon,
                                      {
                                        clsPrefix: clsPrefix,
                                        onClick: this.toggleShow
                                      },
                                      { default: () => closeIcon }
                                    )
                                  )
                                : null
                          }
                        )
                      : null,
                    h(
                      Transition,
                      {
                        name: 'fade-in-scale-up-transition',
                        onAfterLeave: this.handleAfterLeave,
                        appear: this.appear,
                        // BUG:
                        // onEnter will be called twice, I don't know why
                        // Maybe it is a bug of vue
                        onEnter: this.syncTransformOrigin,
                        onBeforeLeave: this.syncTransformOrigin
                      },
                      {
                        default: () =>
                          withDirectives(
                            h(
                              'div',
                              {
                                class: `${clsPrefix}-image-preview-wrapper`,
                                ref: 'previewWrapperRef'
                              },
                              h('img', {
                                draggable: false,
                                onMousedown: this.handlePreviewMousedown,
                                onDblclick: this.handlePreviewDblclick,
                                class: `${clsPrefix}-image-preview`,
                                key: this.previewSrc,
                                src: this.previewSrc,
                                ref: 'previewRef',
                                onDragstart: this.handleDragStart
                              })
                            ),
                            [[vShow, this.show]]
                          )
                      }
                    )
                  ),
                  [[zindexable, { enabled: this.show }]]
                )
              : null
        }
      )
    )
  }
})