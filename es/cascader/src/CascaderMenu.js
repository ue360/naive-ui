import {
  h,
  ref,
  defineComponent,
  watch,
  toRef,
  inject,
  nextTick,
  Transition,
  withDirectives,
  renderSlot
} from 'vue'
import { clickoutside } from 'vdirs'
import { NEmpty } from '../../empty'
import { NBaseMenuMask } from '../../_internal'
import NCascaderSubmenu from './CascaderSubmenu'
import { cascaderInjectionKey } from './interface'
import FocusDetector from '../../_internal/focus-detector'
export default defineComponent({
  name: 'NCascaderMenu',
  props: {
    value: [String, Number, Array],
    placement: {
      type: String,
      default: 'bottom-start'
    },
    show: Boolean,
    menuModel: {
      type: Array,
      required: true
    },
    loading: Boolean,
    onFocus: {
      type: Function,
      required: true
    },
    onBlur: {
      type: Function,
      required: true
    },
    onKeyup: {
      type: Function,
      required: true
    },
    onMousedown: {
      type: Function,
      required: true
    },
    onTabout: {
      type: Function,
      required: true
    }
  },
  setup(props) {
    const {
      localeRef,
      isMountedRef,
      mergedClsPrefixRef,
      syncCascaderMenuPosition,
      handleCascaderMenuClickOutside
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    } = inject(cascaderInjectionKey)
    const submenuInstRefs = []
    const maskInstRef = ref(null)
    const selfElRef = ref(null)
    watch(toRef(props, 'value'), () => {
      void nextTick(() => {
        syncCascaderMenuPosition()
      })
    })
    watch(toRef(props, 'menuModel'), () => {
      void nextTick(() => {
        syncCascaderMenuPosition()
      })
    })
    function showErrorMessage(label) {
      var _a
      const {
        value: { loadingRequiredMessage }
      } = localeRef
      ;(_a = maskInstRef.value) === null || _a === void 0
        ? void 0
        : _a.showOnce(loadingRequiredMessage(label))
    }
    function handleClickOutside(e) {
      handleCascaderMenuClickOutside(e)
    }
    function handleFocusin(e) {
      const { value: selfEl } = selfElRef
      if (!selfEl) return
      if (!selfEl.contains(e.relatedTarget)) {
        props.onFocus(e)
      }
    }
    function handleFocusout(e) {
      const { value: selfEl } = selfElRef
      if (!selfEl) return
      if (!selfEl.contains(e.relatedTarget)) {
        props.onBlur(e)
      }
    }
    const exposedRef = {
      scroll(depth, index, elSize) {
        const submenuInst = submenuInstRefs[depth]
        if (submenuInst) {
          submenuInst.scroll(index, elSize)
        }
      },
      showErrorMessage
    }
    return Object.assign(
      {
        isMounted: isMountedRef,
        mergedClsPrefix: mergedClsPrefixRef,
        selfElRef,
        submenuInstRefs,
        maskInstRef,
        handleFocusin,
        handleFocusout,
        handleClickOutside
      },
      exposedRef
    )
  },
  render() {
    const { submenuInstRefs, mergedClsPrefix, $slots } = this
    return h(
      Transition,
      { name: 'fade-in-scale-up-transition', appear: this.isMounted },
      {
        default: () => {
          if (!this.show) return null
          return withDirectives(
            h(
              'div',
              {
                tabindex: '0',
                ref: 'selfElRef',
                class: `${mergedClsPrefix}-cascader-menu`,
                onMousedown: this.onMousedown,
                onFocusin: this.handleFocusin,
                onFocusout: this.handleFocusout,
                onKeyup: this.onKeyup,
                style: {
                  '--col-count': this.menuModel.length
                }
              },
              this.menuModel[0].length
                ? h(
                    'div',
                    { class: `${mergedClsPrefix}-cascader-submenu-wrapper` },
                    this.menuModel.map((submenuOptions, index) =>
                      h(NCascaderSubmenu, {
                        ref: (instance) => {
                          if (instance) {
                            submenuInstRefs[index] = instance
                          }
                        },
                        key: index,
                        tmNodes: submenuOptions,
                        depth: index + 1
                      })
                    ),
                    h(NBaseMenuMask, {
                      clsPrefix: mergedClsPrefix,
                      ref: 'maskInstRef'
                    })
                  )
                : h(
                    'div',
                    { class: `${mergedClsPrefix}-cascader-menu__empty` },
                    renderSlot($slots, 'empty', undefined, () => [
                      h(NEmpty, null)
                    ])
                  ),
              $slots.action &&
                h(
                  'div',
                  {
                    class: `${mergedClsPrefix}-cascader-menu-action`,
                    'data-action': true
                  },
                  {
                    default: $slots.action
                  }
                ),
              h(FocusDetector, { onFocus: this.onTabout })
            ),
            [[clickoutside, this.handleClickOutside]]
          )
        }
      }
    )
  }
})
