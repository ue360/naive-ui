'use strict'
Object.defineProperty(exports, '__esModule', { value: true })
const vue_1 = require('vue')
const vdirs_1 = require('vdirs')
const Dialog_1 = require('../../dialog/src/Dialog')
const Card_1 = require('../../card/src/Card')
const _internal_1 = require('../../_internal')
const dialog_1 = require('../../dialog')
const card_1 = require('../../card')
const _utils_1 = require('../../_utils')
const presetProps_1 = require('./presetProps')
const interface_1 = require('../../drawer/src/interface')
const interface_2 = require('../../popover/src/interface')
const interface_3 = require('./interface')
exports.default = (0, vue_1.defineComponent)({
  name: 'ModalBody',
  inheritAttrs: false,
  directives: {
    vdrag: {
      mounted(el, binding) {
        const { value = false } = binding
        if (!value) return
        const header =
          typeof value === 'string'
            ? el.querySelector(value)
            : el.querySelector('.n-card-header') ||
              el.querySelector('.n-dialog__title')
        if (header) {
          const dialog = el.querySelector('.n-modal')
          // header.style.cursor = 'move'
          // 获取原有属性 ie dom元素.currentStyle 火狐谷歌 window.getComputedStyle(dom元素, null);
          const style =
            dialog.currentStyle || window.getComputedStyle(dialog, null)
          header.onmousedown = (e) => {
            document.body.style.userSelect = 'none'
            // 鼠标按下，计算当前元素距离可视区的距离
            const _x = e.clientX - header.offsetLeft
            const _y = e.clientY - header.offsetTop
            // 获取到的值带px 正则匹配替换
            let left, top
            // 注意在ie中 第一次获取到的值为组件自带50% 移动之后赋值为px
            if (style.left.includes('%')) {
              left =
                +document.body.clientWidth *
                (+style.left.replace(/%/g, '') / 100)
              top =
                +document.body.clientHeight *
                (+style.top.replace(/%/g, '') / 100)
            } else {
              left = +style.left.replace(/px/g, '')
              top = +style.top.replace(/px/g, '')
            }
            document.onmousemove = (e) => {
              // 通过事件委托，计算移动的距离
              const _left = e.clientX - _x
              const _top = e.clientY - _y
              // 移动当前元素
              dialog.style.left = `${_left + left}px`
              dialog.style.top = `${_top + top}px`
              // 将此时的位置传出去
              // binding.value({x:e.pageX,y:e.pageY})
            }
            document.onmouseup = () => {
              document.body.style.userSelect = ''
              document.onmousemove = null
              document.onmouseup = null
            }
          }
        }
      }
    }
  },
  props: Object.assign(
    Object.assign(
      {
        show: {
          type: Boolean,
          required: true
        },
        draggable: [Boolean, String],
        preset: String,
        displayDirective: {
          type: String,
          required: true
        }
      },
      presetProps_1.presetProps
    ),
    {
      // events
      onClickoutside: {
        type: Function,
        required: true
      },
      onBeforeLeave: {
        type: Function,
        required: true
      },
      onAfterLeave: {
        type: Function,
        required: true
      },
      onPositiveClick: {
        type: Function,
        required: true
      },
      onNegativeClick: {
        type: Function,
        required: true
      },
      onClose: {
        type: Function,
        required: true
      },
      onAfterEnter: Function
    }
  ),
  setup(props) {
    const bodyRef = (0, vue_1.ref)(null)
    const scrollbarRef = (0, vue_1.ref)(null)
    const displayedRef = (0, vue_1.ref)(props.show)
    const transformOriginXRef = (0, vue_1.ref)(null)
    const transformOriginYRef = (0, vue_1.ref)(null)
    ;(0, vue_1.watch)((0, vue_1.toRef)(props, 'show'), (value) => {
      if (value) displayedRef.value = true
    })
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    const NModal = (0, vue_1.inject)(interface_3.modalInjectionKey)
    function styleTransformOrigin() {
      if (NModal.transformOriginRef.value === 'center') {
        return ''
      }
      const { value: transformOriginX } = transformOriginXRef
      const { value: transformOriginY } = transformOriginYRef
      if (transformOriginX === null || transformOriginY === null) {
        return ''
      } else if (scrollbarRef.value) {
        const scrollTop = scrollbarRef.value.containerScrollTop
        return `${transformOriginX}px ${transformOriginY + scrollTop}px`
      }
      return ''
    }
    function syncTransformOrigin(el) {
      if (NModal.transformOriginRef.value === 'center') {
        return
      }
      const mousePosition = NModal.getMousePosition()
      if (!mousePosition) {
        return
      }
      if (!scrollbarRef.value) return
      const scrollTop = scrollbarRef.value.containerScrollTop
      const { offsetLeft, offsetTop } = el
      if (mousePosition) {
        const top = mousePosition.y
        const left = mousePosition.x
        transformOriginXRef.value = -(offsetLeft - left)
        transformOriginYRef.value = -(offsetTop - top - scrollTop)
      }
      el.style.transformOrigin = styleTransformOrigin()
    }
    function handleEnter(el) {
      void (0, vue_1.nextTick)(() => {
        syncTransformOrigin(el)
      })
    }
    function handleBeforeLeave(el) {
      el.style.transformOrigin = styleTransformOrigin()
      props.onBeforeLeave()
    }
    function handleAfterLeave() {
      displayedRef.value = false
      transformOriginXRef.value = null
      transformOriginYRef.value = null
      props.onAfterLeave()
    }
    function handleCloseClick() {
      const { onClose } = props
      if (onClose) {
        onClose()
      }
    }
    function handleNegativeClick() {
      props.onNegativeClick()
    }
    function handlePositiveClick() {
      props.onPositiveClick()
    }
    function handleClickOutside(e) {
      props.onClickoutside(e)
    }
    ;(0, vue_1.provide)(interface_3.modalBodyInjectionKey, bodyRef)
    ;(0, vue_1.provide)(interface_1.drawerBodyInjectionKey, null)
    ;(0, vue_1.provide)(interface_2.popoverBodyInjectionKey, null)
    return {
      mergedTheme: NModal.mergedThemeRef,
      appear: NModal.appearRef,
      isMounted: NModal.isMountedRef,
      mergedClsPrefix: NModal.mergedClsPrefixRef,
      bodyRef,
      scrollbarRef,
      displayed: displayedRef,
      handleClickOutside,
      handlePositiveClick,
      handleNegativeClick,
      handleCloseClick,
      handleAfterLeave,
      handleBeforeLeave,
      handleEnter
    }
  },
  render() {
    const {
      $slots,
      $attrs,
      handleEnter,
      handleAfterLeave,
      handleBeforeLeave,
      handleClickOutside,
      preset,
      mergedClsPrefix
    } = this
    let childNode = null
    if (!preset) {
      childNode = (0, _utils_1.getFirstSlotVNode)($slots)
      if (!childNode) {
        ;(0, _utils_1.warn)('modal', 'default slot is empty')
        return
      }
      childNode = (0, vue_1.cloneVNode)(childNode)
      childNode.props = (0, vue_1.mergeProps)(
        {
          class: `${mergedClsPrefix}-modal`
        },
        $attrs,
        childNode.props || {}
      )
    }
    const VDrag = (0, vue_1.resolveDirective)('vdrag')
    return this.displayDirective === 'show' || this.displayed || this.show
      ? (0, vue_1.withDirectives)(
          (0, vue_1.h)(
            'div',
            { class: `${mergedClsPrefix}-modal-body-wrapper` },
            (0, vue_1.h)(
              _internal_1.NScrollbar,
              {
                ref: 'scrollbarRef',
                theme: this.mergedTheme.peers.Scrollbar,
                themeOverrides: this.mergedTheme.peerOverrides.Scrollbar,
                contentClass: `${mergedClsPrefix}-modal-scroll-content`
              },
              {
                default: () => {
                  var _a
                  return (0, vue_1.h)(
                    vue_1.Transition,
                    {
                      name: 'fade-in-scale-up-transition',
                      appear:
                        (_a = this.appear) !== null && _a !== void 0
                          ? _a
                          : this.isMounted,
                      onEnter: handleEnter,
                      onAfterEnter: this.onAfterEnter,
                      onAfterLeave: handleAfterLeave,
                      onBeforeLeave: handleBeforeLeave
                    },
                    {
                      default: () =>
                        (0, vue_1.withDirectives)(
                          this.preset === 'confirm' || this.preset === 'dialog'
                            ? (0, vue_1.h)(
                                dialog_1.NDialog,
                                Object.assign(
                                  {},
                                  this.$attrs,
                                  {
                                    class: [
                                      `${mergedClsPrefix}-modal`,
                                      this.draggable
                                        ? `${mergedClsPrefix}-modal-draggable`
                                        : '',
                                      this.$attrs.class
                                    ],
                                    ref: 'bodyRef',
                                    theme: this.mergedTheme.peers.Dialog,
                                    themeOverrides:
                                      this.mergedTheme.peerOverrides.Dialog
                                  },
                                  (0, _utils_1.keep)(
                                    this.$props,
                                    Dialog_1.dialogPropKeys
                                  )
                                ),
                                $slots
                              )
                            : this.preset === 'card'
                            ? (0, vue_1.h)(
                                card_1.NCard,
                                Object.assign(
                                  {},
                                  this.$attrs,
                                  {
                                    ref: 'bodyRef',
                                    class: [
                                      `${mergedClsPrefix}-modal`,
                                      this.draggable
                                        ? `${mergedClsPrefix}-modal-draggable`
                                        : '',
                                      this.$attrs.class
                                    ],
                                    theme: this.mergedTheme.peers.Card,
                                    themeOverrides:
                                      this.mergedTheme.peerOverrides.Card
                                  },
                                  (0, _utils_1.keep)(
                                    this.$props,
                                    Card_1.cardBasePropKeys
                                  )
                                ),
                                $slots
                              )
                            : childNode,
                          [
                            [vue_1.vShow, this.show],
                            [vdirs_1.clickoutside, handleClickOutside]
                          ]
                        )
                    }
                  )
                }
              }
            )
          ),
          [
            [
              vue_1.vShow,
              this.displayDirective === 'if' || this.displayed || this.show
            ],
            [VDrag, this.draggable]
          ]
        )
      : null
  }
})
