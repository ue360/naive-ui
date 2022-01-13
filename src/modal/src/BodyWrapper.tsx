import {
  h,
  nextTick,
  toRef,
  watch,
  ref,
  inject,
  defineComponent,
  PropType,
  provide,
  withDirectives,
  vShow,
  Transition,
  VNode,
  ComponentPublicInstance,
  mergeProps,
  cloneVNode,
  resolveDirective,
  Directive
} from 'vue'
import { clickoutside } from 'vdirs'
import { dialogPropKeys } from '../../dialog/src/Dialog'
import { cardBasePropKeys } from '../../card/src/Card'
import { NScrollbar, ScrollbarInst } from '../../_internal'
import { NDialog } from '../../dialog'
import { NCard } from '../../card'
import { getFirstSlotVNode, keep, warn } from '../../_utils'
import { presetProps } from './presetProps'
import { drawerBodyInjectionKey } from '../../drawer/src/interface'
import { popoverBodyInjectionKey } from '../../popover/src/interface'
import { modalBodyInjectionKey, modalInjectionKey } from './interface'

export default defineComponent({
  name: 'ModalBody',
  inheritAttrs: false,
  directives: {
    vdrag: {
      mounted (el: HTMLDivElement, binding) {
        const { value = false } = binding
        if (!value) return
        const header = (
          typeof value === 'string'
            ? el.querySelector(value)
            : el.querySelector('.n-card-header') ||
              el.querySelector('.n-dialog__title')
        ) as HTMLDivElement
        if (header) {
          const dialog = el.querySelector('.n-modal') as HTMLDivElement
          // header.style.cursor = 'move'

          // 获取原有属性 ie dom元素.currentStyle 火狐谷歌 window.getComputedStyle(dom元素, null);
          const style =
            (dialog as any).currentStyle ||
            window.getComputedStyle(dialog, null)

          header.onmousedown = (e: MouseEvent) => {
            document.body.style.userSelect = 'none'
            // 鼠标按下，计算当前元素距离可视区的距离
            const _x = e.clientX - header.offsetLeft
            const _y = e.clientY - header.offsetTop

            // 获取到的值带px 正则匹配替换
            let left: number, top: number

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

            document.onmousemove = (e: MouseEvent) => {
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
  props: {
    show: {
      type: Boolean,
      required: true
    },
    draggable: [Boolean, String],
    preset: String as PropType<'confirm' | 'dialog' | 'card'>,
    displayDirective: {
      type: String as PropType<'if' | 'show'>,
      required: true
    },
    ...presetProps,
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
    onAfterEnter: Function as PropType<() => void>
  },
  setup (props) {
    const bodyRef = ref<HTMLElement | ComponentPublicInstance | null>(null)
    const scrollbarRef = ref<ScrollbarInst | null>(null)
    const displayedRef = ref(props.show)
    const transformOriginXRef = ref<number | null>(null)
    const transformOriginYRef = ref<number | null>(null)
    watch(toRef(props, 'show'), (value) => {
      if (value) displayedRef.value = true
    })
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    const NModal = inject(modalInjectionKey)!
    function styleTransformOrigin (): string {
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
    function syncTransformOrigin (el: HTMLElement): void {
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
    function handleEnter (el: HTMLElement): void {
      void nextTick(() => {
        syncTransformOrigin(el)
      })
    }
    function handleBeforeLeave (el: HTMLElement): void {
      el.style.transformOrigin = styleTransformOrigin()
      props.onBeforeLeave()
    }
    function handleAfterLeave (): void {
      displayedRef.value = false
      transformOriginXRef.value = null
      transformOriginYRef.value = null
      props.onAfterLeave()
    }
    function handleCloseClick (): void {
      const { onClose } = props
      if (onClose) {
        onClose()
      }
    }
    function handleNegativeClick (): void {
      props.onNegativeClick()
    }
    function handlePositiveClick (): void {
      props.onPositiveClick()
    }
    function handleClickOutside (e: MouseEvent): void {
      props.onClickoutside(e)
    }
    provide(modalBodyInjectionKey, bodyRef)
    provide(drawerBodyInjectionKey, null)
    provide(popoverBodyInjectionKey, null)
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
  render () {
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
    let childNode: VNode | null = null
    if (!preset) {
      childNode = getFirstSlotVNode($slots)
      if (!childNode) {
        warn('modal', 'default slot is empty')
        return
      }
      childNode = cloneVNode(childNode)
      childNode.props = mergeProps(
        {
          class: `${mergedClsPrefix}-modal`
        },
        $attrs,
        childNode.props || {}
      )
    }
    const VDrag = resolveDirective('vdrag') as Directive<any, any>
    return this.displayDirective === 'show' || this.displayed || this.show
      ? withDirectives(
          <div class={`${mergedClsPrefix}-modal-body-wrapper`}>
            <NScrollbar
              ref="scrollbarRef"
              theme={this.mergedTheme.peers.Scrollbar}
              themeOverrides={this.mergedTheme.peerOverrides.Scrollbar}
              contentClass={`${mergedClsPrefix}-modal-scroll-content`}
            >
              {{
                default: () => (
                  <Transition
                    name="fade-in-scale-up-transition"
                    appear={this.appear ?? this.isMounted}
                    onEnter={handleEnter as any}
                    onAfterEnter={this.onAfterEnter}
                    onAfterLeave={handleAfterLeave}
                    onBeforeLeave={handleBeforeLeave as any}
                  >
                    {{
                      default: () =>
                        withDirectives(
                          (this.preset === 'confirm' ||
                          this.preset === 'dialog' ? (
                            <NDialog
                              {...this.$attrs}
                              class={[
                                `${mergedClsPrefix}-modal`,
                                this.draggable
                                  ? `${mergedClsPrefix}-modal-draggable`
                                  : '',
                                this.$attrs.class
                              ]}
                              ref="bodyRef"
                              theme={this.mergedTheme.peers.Dialog}
                              themeOverrides={
                                this.mergedTheme.peerOverrides.Dialog
                              }
                              {...keep(this.$props, dialogPropKeys)}
                            >
                              {$slots}
                            </NDialog>
                              ) : this.preset === 'card' ? (
                            <NCard
                              {...this.$attrs}
                              ref="bodyRef"
                              class={[
                                `${mergedClsPrefix}-modal`,
                                this.draggable
                                  ? `${mergedClsPrefix}-modal-draggable`
                                  : '',
                                this.$attrs.class
                              ]}
                              theme={this.mergedTheme.peers.Card}
                              themeOverrides={
                                this.mergedTheme.peerOverrides.Card
                              }
                              {...keep(this.$props, cardBasePropKeys)}
                            >
                              {$slots}
                            </NCard>
                              ) : (
                                childNode
                              )) as any,
                          [
                            [vShow, this.show],
                            [clickoutside, handleClickOutside]
                          ]
                        )
                    }}
                  </Transition>
                )
              }}
            </NScrollbar>
          </div>,
          [
            [
              vShow,
              this.displayDirective === 'if' || this.displayed || this.show
            ],
            [VDrag, this.draggable]
          ]
      )
      : null
  }
})
