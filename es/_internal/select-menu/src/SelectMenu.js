import {
  h,
  ref,
  onMounted,
  computed,
  defineComponent,
  watch,
  toRef,
  renderSlot,
  provide,
  nextTick,
  watchEffect
} from 'vue'
import { createIndexGetter } from 'treemate'
import { VirtualList } from 'vueuc'
import { depx, getPadding, happensIn } from 'seemly'
import { NEmpty } from '../../../empty'
import { NScrollbar } from '../../scrollbar'
import { formatLength } from '../../../_utils'
import { createKey } from '../../../_utils/cssr'
import { useTheme } from '../../../_mixins'
import NInternalLoading from '../../loading'
import NFocusDetector from '../../focus-detector'
import NSelectOption from './SelectOption'
import NSelectGroupHeader from './SelectGroupHeader'
import style from './styles/index.cssr'
import { internalSelectMenuLight } from '../styles'
import {
  internalSelectionMenuInjectionKey,
  internalSelectionMenuBodyInjectionKey
} from './interface'
export default defineComponent({
  name: 'InternalSelectMenu',
  props: Object.assign(Object.assign({}, useTheme.props), {
    clsPrefix: {
      type: String,
      required: true
    },
    scrollable: {
      type: Boolean,
      default: true
    },
    treeMate: {
      type: Object,
      required: true
    },
    multiple: Boolean,
    size: {
      type: String,
      default: 'medium'
    },
    value: {
      type: [String, Number, Array],
      default: null
    },
    width: [Number, String],
    autoPending: Boolean,
    virtualScroll: {
      type: Boolean,
      default: true
    },
    // show is used to toggle pending state initialization
    show: {
      type: Boolean,
      default: true
    },
    loading: Boolean,
    focusable: Boolean,
    renderLabel: Function,
    renderOption: Function,
    onMousedown: Function,
    onScroll: Function,
    onFocus: Function,
    onBlur: Function,
    onKeyup: Function,
    onKeydown: Function,
    onTabOut: Function,
    onMouseenter: Function,
    onMouseleave: Function,
    // deprecated
    onToggle: Function
  }),
  setup(props) {
    const themeRef = useTheme(
      'InternalSelectMenu',
      'InternalSelectMenu',
      style,
      internalSelectMenuLight,
      props,
      toRef(props, 'clsPrefix')
    )
    const selfRef = ref(null)
    const virtualListRef = ref(null)
    const scrollbarRef = ref(null)
    const flattenedNodesRef = computed(() => props.treeMate.getFlattenedNodes())
    const fIndexGetterRef = computed(() =>
      createIndexGetter(flattenedNodesRef.value)
    )
    const pendingNodeRef = ref(null)
    function initPendingNode() {
      const { treeMate } = props
      setPendingTmNode(
        props.autoPending
          ? props.value === null
            ? treeMate.getFirstAvailableNode()
            : props.multiple
            ? treeMate.getNode(
                (props.value || [])[(props.value || []).length - 1]
              ) || treeMate.getFirstAvailableNode()
            : treeMate.getNode(props.value) || treeMate.getFirstAvailableNode()
          : null
      )
    }
    initPendingNode()
    onMounted(() => {
      watchEffect(() => {
        if (props.show) {
          initPendingNode()
          void nextTick(scrollToPendingNode)
        }
      })
    })
    const itemSizeRef = computed(() => {
      return depx(themeRef.value.self[createKey('optionHeight', props.size)])
    })
    const paddingRef = computed(() => {
      return getPadding(themeRef.value.self[createKey('padding', props.size)])
    })
    const valueSetRef = computed(() => {
      if (props.multiple && Array.isArray(props.value)) {
        return new Set(props.value)
      }
      return new Set()
    })
    const emptyRef = computed(() => {
      const tmNodes = flattenedNodesRef.value
      return tmNodes && tmNodes.length === 0
    })
    const styleRef = computed(() => {
      return [{ width: formatLength(props.width) }, cssVarsRef.value]
    })
    watch(toRef(props, 'treeMate'), () => {
      if (props.autoPending) {
        const tmNode = props.treeMate.getFirstAvailableNode()
        setPendingTmNode(tmNode)
      } else {
        setPendingTmNode(null)
      }
    })
    function doToggle(tmNode) {
      const { onToggle } = props
      if (onToggle) onToggle(tmNode)
    }
    function doScroll(e) {
      const { onScroll } = props
      if (onScroll) onScroll(e)
    }
    // required, scroller sync need to be triggered manually
    function handleVirtualListScroll(e) {
      var _a
      ;(_a = scrollbarRef.value) === null || _a === void 0 ? void 0 : _a.sync()
      doScroll(e)
    }
    function handleVirtualListResize() {
      var _a
      ;(_a = scrollbarRef.value) === null || _a === void 0 ? void 0 : _a.sync()
    }
    function getPendingTmNode() {
      const { value: pendingTmNode } = pendingNodeRef
      if (pendingTmNode) return pendingTmNode
      return null
    }
    function handleOptionMouseEnter(e, tmNode) {
      if (tmNode.disabled) return
      setPendingTmNode(tmNode, false)
    }
    function handleOptionClick(e, tmNode) {
      if (tmNode.disabled) return
      doToggle(tmNode)
    }
    // keyboard related methods
    function handleKeyUp(e) {
      var _a
      if (happensIn(e, 'action')) return
      ;(_a = props.onKeyup) === null || _a === void 0
        ? void 0
        : _a.call(props, e)
    }
    function handleKeyDown(e) {
      var _a
      if (happensIn(e, 'action')) return
      ;(_a = props.onKeydown) === null || _a === void 0
        ? void 0
        : _a.call(props, e)
    }
    function handleMouseDown(e) {
      var _a
      ;(_a = props.onMousedown) === null || _a === void 0
        ? void 0
        : _a.call(props, e)
      if (props.focusable) return
      e.preventDefault()
    }
    function next() {
      const { value: pendingTmNode } = pendingNodeRef
      if (pendingTmNode) {
        setPendingTmNode(pendingTmNode.getNext({ loop: true }), true)
      }
    }
    function prev() {
      const { value: pendingTmNode } = pendingNodeRef
      if (pendingTmNode) {
        setPendingTmNode(pendingTmNode.getPrev({ loop: true }), true)
      }
    }
    function setPendingTmNode(tmNode, doScroll = false) {
      pendingNodeRef.value = tmNode
      if (doScroll) scrollToPendingNode()
    }
    function scrollToPendingNode() {
      var _a, _b
      const tmNode = pendingNodeRef.value
      if (!tmNode) return
      const fIndex = fIndexGetterRef.value(tmNode.key)
      if (fIndex === null) return
      if (props.virtualScroll) {
        ;(_a = virtualListRef.value) === null || _a === void 0
          ? void 0
          : _a.scrollTo({ index: fIndex })
      } else {
        ;(_b = scrollbarRef.value) === null || _b === void 0
          ? void 0
          : _b.scrollTo({
              index: fIndex,
              elSize: itemSizeRef.value
            })
      }
    }
    function handleFocusin(e) {
      var _a, _b
      if (
        (_a = selfRef.value) === null || _a === void 0
          ? void 0
          : _a.contains(e.target)
      ) {
        ;(_b = props.onFocus) === null || _b === void 0
          ? void 0
          : _b.call(props, e)
      }
    }
    function handleFocusout(e) {
      var _a, _b
      if (
        !((_a = selfRef.value) === null || _a === void 0
          ? void 0
          : _a.contains(e.relatedTarget))
      ) {
        ;(_b = props.onBlur) === null || _b === void 0
          ? void 0
          : _b.call(props, e)
      }
    }
    provide(internalSelectionMenuInjectionKey, {
      handleOptionMouseEnter,
      handleOptionClick,
      valueSetRef,
      multipleRef: toRef(props, 'multiple'),
      valueRef: toRef(props, 'value'),
      renderLabelRef: toRef(props, 'renderLabel'),
      renderOptionRef: toRef(props, 'renderOption'),
      pendingTmNodeRef: pendingNodeRef
    })
    provide(internalSelectionMenuBodyInjectionKey, selfRef)
    onMounted(() => {
      const { value } = scrollbarRef
      if (value) value.sync()
    })
    const cssVarsRef = computed(() => {
      const { size } = props
      const {
        common: { cubicBezierEaseInOut },
        self: {
          height,
          borderRadius,
          color,
          groupHeaderTextColor,
          actionDividerColor,
          optionTextColorPressed,
          optionTextColor,
          optionTextColorDisabled,
          optionTextColorActive,
          optionOpacityDisabled,
          optionCheckColor,
          actionTextColor,
          optionColorPending,
          optionColorActive,
          loadingColor,
          loadingSize,
          [createKey('optionFontSize', size)]: fontSize,
          [createKey('optionHeight', size)]: optionHeight,
          [createKey('optionPadding', size)]: optionPadding
        }
      } = themeRef.value
      return {
        '--height': height,
        '--action-divider-color': actionDividerColor,
        '--action-text-color': actionTextColor,
        '--bezier': cubicBezierEaseInOut,
        '--border-radius': borderRadius,
        '--color': color,
        '--option-font-size': fontSize,
        '--group-header-text-color': groupHeaderTextColor,
        '--option-check-color': optionCheckColor,
        '--option-color-pending': optionColorPending,
        '--option-color-active': optionColorActive,
        '--option-height': optionHeight,
        '--option-opacity-disabled': optionOpacityDisabled,
        '--option-text-color': optionTextColor,
        '--option-text-color-active': optionTextColorActive,
        '--option-text-color-disabled': optionTextColorDisabled,
        '--option-text-color-pressed': optionTextColorPressed,
        '--option-padding': optionPadding,
        '--option-padding-left': getPadding(optionPadding, 'left'),
        '--loading-color': loadingColor,
        '--loading-size': loadingSize
      }
    })
    const exposedProps = {
      selfRef,
      next,
      prev,
      getPendingTmNode
    }
    return Object.assign(
      {
        mergedTheme: themeRef,
        virtualListRef,
        scrollbarRef,
        style: styleRef,
        itemSize: itemSizeRef,
        padding: paddingRef,
        flattenedNodes: flattenedNodesRef,
        empty: emptyRef,
        virtualListContainer() {
          const { value } = virtualListRef
          return value === null || value === void 0 ? void 0 : value.listElRef
        },
        virtualListContent() {
          const { value } = virtualListRef
          return value === null || value === void 0 ? void 0 : value.itemsElRef
        },
        doScroll,
        handleFocusin,
        handleFocusout,
        handleKeyUp,
        handleKeyDown,
        handleMouseDown,
        handleVirtualListResize,
        handleVirtualListScroll
      },
      exposedProps
    )
  },
  render() {
    const { $slots, virtualScroll, clsPrefix, mergedTheme } = this
    return h(
      'div',
      {
        ref: 'selfRef',
        tabindex: this.focusable ? 0 : -1,
        class: [
          `${clsPrefix}-base-select-menu`,
          this.multiple && `${clsPrefix}-base-select-menu--multiple`
        ],
        style: this.style,
        onFocusin: this.handleFocusin,
        onFocusout: this.handleFocusout,
        onKeyup: this.handleKeyUp,
        onKeydown: this.handleKeyDown,
        onMousedown: this.handleMouseDown,
        onMouseenter: this.onMouseenter,
        onMouseleave: this.onMouseleave
      },
      this.loading
        ? h(
            'div',
            { class: `${clsPrefix}-base-select-menu__loading` },
            h(NInternalLoading, { clsPrefix: clsPrefix, strokeWidth: 20 })
          )
        : !this.empty
        ? h(
            NScrollbar,
            {
              ref: 'scrollbarRef',
              theme: mergedTheme.peers.Scrollbar,
              themeOverrides: mergedTheme.peerOverrides.Scrollbar,
              scrollable: this.scrollable,
              container: virtualScroll ? this.virtualListContainer : undefined,
              content: virtualScroll ? this.virtualListContent : undefined,
              onScroll: virtualScroll ? undefined : this.doScroll
            },
            {
              default: () => {
                return virtualScroll
                  ? h(
                      VirtualList,
                      {
                        ref: 'virtualListRef',
                        class: `${clsPrefix}-virtual-list`,
                        items: this.flattenedNodes,
                        itemSize: this.itemSize,
                        showScrollbar: false,
                        paddingTop: this.padding.top,
                        paddingBottom: this.padding.bottom,
                        onResize: this.handleVirtualListResize,
                        onScroll: this.handleVirtualListScroll,
                        itemResizable: true
                      },
                      {
                        default: ({ item: tmNode }) => {
                          return tmNode.isGroup
                            ? h(NSelectGroupHeader, {
                                key: tmNode.key,
                                clsPrefix: clsPrefix,
                                tmNode: tmNode
                              })
                            : tmNode.ignored
                            ? null
                            : h(NSelectOption, {
                                clsPrefix: clsPrefix,
                                key: tmNode.key,
                                tmNode: tmNode
                              })
                        }
                      }
                    )
                  : h(
                      'div',
                      {
                        class: `${clsPrefix}-base-select-menu-option-wrapper`,
                        style: {
                          paddingTop: this.padding.top,
                          paddingBottom: this.padding.bottom
                        }
                      },
                      this.flattenedNodes.map((tmNode) =>
                        tmNode.isGroup
                          ? h(NSelectGroupHeader, {
                              key: tmNode.key,
                              clsPrefix: clsPrefix,
                              tmNode: tmNode
                            })
                          : h(NSelectOption, {
                              clsPrefix: clsPrefix,
                              key: tmNode.key,
                              tmNode: tmNode
                            })
                      )
                    )
              }
            }
          )
        : h(
            'div',
            { class: `${clsPrefix}-base-select-menu__empty` },
            renderSlot($slots, 'empty', undefined, () => [
              h(NEmpty, {
                theme: mergedTheme.peers.Empty,
                themeOverrides: mergedTheme.peerOverrides.Empty
              })
            ])
          ),
      $slots.action &&
        h(
          'div',
          {
            class: `${clsPrefix}-base-select-menu__action`,
            'data-action': true
          },
          renderSlot($slots, 'action')
        ),
      $slots.action && h(NFocusDetector, { onFocus: this.onTabOut })
    )
  }
})