import {
  defineComponent,
  h,
  computed,
  ref,
  toRef,
  watch,
  provide,
  mergeProps
} from 'vue'
import { createTreeMate } from 'treemate'
import { useMergedState, useKeyboard, useMemo } from 'vooks'
import { popoverBaseProps } from '../../popover/src/Popover'
import { useConfig, useTheme } from '../../_mixins'
import { NPopover } from '../../popover'
import { keep, call, createKey, createRefSetter } from '../../_utils'
import { dropdownLight } from '../styles'
import NDropdownMenu from './DropdownMenu'
import style from './styles/index.cssr'
export const dropdownInjectionKey = Symbol('dropdown')
const dropdownBaseProps = {
  animated: {
    type: Boolean,
    default: true
  },
  keyboard: {
    type: Boolean,
    default: true
  },
  size: {
    type: String,
    default: 'medium'
  },
  inverted: Boolean,
  placement: {
    type: String,
    default: 'bottom'
  },
  onSelect: [Function, Array],
  options: {
    type: Array,
    default: () => []
  },
  showArrow: Boolean,
  renderLabel: Function,
  renderIcon: Function,
  labelField: {
    type: String,
    default: 'label'
  },
  keyField: {
    type: String,
    default: 'key'
  },
  childrenField: {
    type: String,
    default: 'children'
  },
  // for menu, not documented
  value: [String, Number]
}
const popoverPropKeys = Object.keys(popoverBaseProps)
const dropdownProps = Object.assign(
  Object.assign(Object.assign({}, popoverBaseProps), dropdownBaseProps),
  useTheme.props
)
export default defineComponent({
  name: 'Dropdown',
  inheritAttrs: false,
  props: dropdownProps,
  setup(props) {
    const uncontrolledShowRef = ref(false)
    const mergedShowRef = useMergedState(
      toRef(props, 'show'),
      uncontrolledShowRef
    )
    const treemateRef = computed(() => {
      const { keyField, childrenField } = props
      return createTreeMate(props.options, {
        getKey(node) {
          return node[keyField]
        },
        getDisabled(node) {
          return node.disabled === true
        },
        getIgnored(node) {
          return node.type === 'divider' || node.type === 'render'
        },
        getChildren(node) {
          return node[childrenField]
        }
      })
    })
    const tmNodesRef = computed(() => {
      return treemateRef.value.treeNodes
    })
    const hoverKeyRef = ref(null)
    const keyboardKeyRef = ref(null)
    const lastToggledSubmenuKeyRef = ref(null)
    const pendingKeyRef = computed(() => {
      var _a, _b, _c
      return (_c =
        (_b =
          (_a = hoverKeyRef.value) !== null && _a !== void 0
            ? _a
            : keyboardKeyRef.value) !== null && _b !== void 0
          ? _b
          : lastToggledSubmenuKeyRef.value) !== null && _c !== void 0
        ? _c
        : null
    })
    const pendingKeyPathRef = computed(
      () => treemateRef.value.getPath(pendingKeyRef.value).keyPath
    )
    const activeKeyPathRef = computed(
      () => treemateRef.value.getPath(props.value).keyPath
    )
    const keyboardEnabledRef = useMemo(() => {
      return props.keyboard && mergedShowRef.value
    })
    useKeyboard(
      {
        keydown: {
          ArrowUp: {
            prevent: true,
            handler: handleKeyDownUp
          },
          ArrowRight: {
            prevent: true,
            handler: handleKeyDownRight
          },
          ArrowDown: {
            prevent: true,
            handler: handleKeyDownDown
          },
          ArrowLeft: {
            prevent: true,
            handler: handleKeyDownLeft
          },
          Escape: handleKeyDownEsc
        },
        keyup: {
          Enter: handleKeyUpEnter
        }
      },
      keyboardEnabledRef
    )
    const { mergedClsPrefixRef } = useConfig(props)
    const themeRef = useTheme(
      'Dropdown',
      'Dropdown',
      style,
      dropdownLight,
      props,
      mergedClsPrefixRef
    )
    provide(dropdownInjectionKey, {
      labelFieldRef: toRef(props, 'labelField'),
      childrenFieldRef: toRef(props, 'childrenField'),
      renderLabelRef: toRef(props, 'renderLabel'),
      renderIconRef: toRef(props, 'renderIcon'),
      hoverKeyRef: hoverKeyRef,
      keyboardKeyRef: keyboardKeyRef,
      lastToggledSubmenuKeyRef: lastToggledSubmenuKeyRef,
      pendingKeyPathRef: pendingKeyPathRef,
      activeKeyPathRef: activeKeyPathRef,
      animatedRef: toRef(props, 'animated'),
      mergedShowRef: mergedShowRef,
      doSelect,
      doUpdateShow
    })
    // watch
    watch(mergedShowRef, (value) => {
      if (!value) clearPendingState()
    })
    // methods
    function doSelect(key, node) {
      const { onSelect } = props
      if (onSelect) call(onSelect, key, node)
    }
    function doUpdateShow(value) {
      const { 'onUpdate:show': onUpdateShow } = props
      if (onUpdateShow) call(onUpdateShow, value)
      uncontrolledShowRef.value = value
    }
    function clearPendingState() {
      hoverKeyRef.value = null
      keyboardKeyRef.value = null
      lastToggledSubmenuKeyRef.value = null
    }
    function handleKeyDownEsc() {
      doUpdateShow(false)
    }
    function handleKeyDownLeft() {
      handleKeyDown('left')
    }
    function handleKeyDownRight() {
      handleKeyDown('right')
    }
    function handleKeyDownUp() {
      handleKeyDown('up')
    }
    function handleKeyDownDown() {
      handleKeyDown('down')
    }
    function handleKeyUpEnter() {
      const pendingNode = getPendingNode()
      if (
        pendingNode === null || pendingNode === void 0
          ? void 0
          : pendingNode.isLeaf
      ) {
        doSelect(pendingNode.key, pendingNode.rawNode)
        doUpdateShow(false)
      }
    }
    function getPendingNode() {
      var _a
      const { value: treeMate } = treemateRef
      const { value: pendingKey } = pendingKeyRef
      if (!treeMate || pendingKey === null) return null
      return (_a = treeMate.getNode(pendingKey)) !== null && _a !== void 0
        ? _a
        : null
    }
    function handleKeyDown(direction) {
      const { value: pendingKey } = pendingKeyRef
      const {
        value: { getFirstAvailableNode }
      } = treemateRef
      let nextKeyboardKey = null
      if (pendingKey === null) {
        const firstNode = getFirstAvailableNode()
        if (firstNode !== null) {
          nextKeyboardKey = firstNode.key
        }
      } else {
        const currentNode = getPendingNode()
        if (currentNode) {
          let nextNode
          switch (direction) {
            case 'down':
              nextNode = currentNode.getNext()
              break
            case 'up':
              nextNode = currentNode.getPrev()
              break
            case 'right':
              nextNode = currentNode.getChild()
              break
            case 'left':
              nextNode = currentNode.getParent()
              break
          }
          if (nextNode) nextKeyboardKey = nextNode.key
        }
      }
      if (nextKeyboardKey !== null) {
        hoverKeyRef.value = null
        keyboardKeyRef.value = nextKeyboardKey
      }
    }
    return {
      mergedClsPrefix: mergedClsPrefixRef,
      mergedTheme: themeRef,
      // data
      tmNodes: tmNodesRef,
      // show
      mergedShow: mergedShowRef,
      // methods
      doUpdateShow,
      cssVars: computed(() => {
        const { size, inverted } = props
        const {
          common: { cubicBezierEaseInOut },
          self
        } = themeRef.value
        const {
          padding,
          dividerColor,
          borderRadius,
          optionOpacityDisabled,
          [createKey('optionIconSuffixWidth', size)]: optionIconSuffixWidth,
          [createKey('optionSuffixWidth', size)]: optionSuffixWidth,
          [createKey('optionIconPrefixWidth', size)]: optionIconPrefixWidth,
          [createKey('optionPrefixWidth', size)]: optionPrefixWidth,
          [createKey('fontSize', size)]: fontSize,
          [createKey('optionHeight', size)]: optionHeight,
          [createKey('optionIconSize', size)]: optionIconSize
        } = self
        const vars = {
          '--bezier': cubicBezierEaseInOut,
          '--font-size': fontSize,
          '--padding': padding,
          '--border-radius': borderRadius,
          '--option-height': optionHeight,
          '--option-prefix-width': optionPrefixWidth,
          '--option-icon-prefix-width': optionIconPrefixWidth,
          '--option-suffix-width': optionSuffixWidth,
          '--option-icon-suffix-width': optionIconSuffixWidth,
          '--option-icon-size': optionIconSize,
          '--divider-color': dividerColor,
          '--option-opacity-disabled': optionOpacityDisabled
        }
        // writing like this is the fastest method
        if (inverted) {
          vars['--color'] = self.colorInverted
          vars['--option-color-hover'] = self.optionColorHoverInverted
          vars['--option-color-active'] = self.optionColorActiveInverted
          vars['--option-text-color'] = self.optionTextColorInverted
          vars['--option-text-color-hover'] = self.optionTextColorHoverInverted
          vars['--option-text-color-active'] =
            self.optionTextColorActiveInverted
          vars['--option-text-color-child-active'] =
            self.optionTextColorChildActiveInverted
          vars['--prefix-color'] = self.prefixColorInverted
          vars['--suffix-color'] = self.suffixColorInverted
          vars['--group-header-text-color'] = self.groupHeaderTextColorInverted
        } else {
          vars['--color'] = self.color
          vars['--option-color-hover'] = self.optionColorHover
          vars['--option-color-active'] = self.optionColorActive
          vars['--option-text-color'] = self.optionTextColor
          vars['--option-text-color-hover'] = self.optionTextColorHover
          vars['--option-text-color-active'] = self.optionTextColorActive
          vars['--option-text-color-child-active'] =
            self.optionTextColorChildActive
          vars['--prefix-color'] = self.prefixColor
          vars['--suffix-color'] = self.suffixColor
          vars['--group-header-text-color'] = self.groupHeaderTextColor
        }
        return vars
      })
    }
  },
  render() {
    const renderPopoverBody = (
      className,
      ref,
      style,
      onMouseenter,
      onMouseleave
    ) => {
      const { mergedClsPrefix } = this
      const dropdownProps = {
        ref: createRefSetter(ref),
        class: [
          className,
          `${mergedClsPrefix}-dropdown`,
          this.showArrow && `${mergedClsPrefix}-popover--show-arrow`
        ],
        clsPrefix: mergedClsPrefix,
        tmNodes: this.tmNodes,
        style: [style, this.cssVars],
        showArrow: this.showArrow,
        arrowStyle: this.arrowStyle,
        onMouseenter,
        onMouseleave
      }
      return h(NDropdownMenu, mergeProps(this.$attrs, dropdownProps))
    }
    const { mergedTheme } = this
    const popoverProps = {
      show: this.mergedShow,
      theme: mergedTheme.peers.Popover,
      themeOverrides: mergedTheme.peerOverrides.Popover,
      internalRenderBody: renderPopoverBody,
      onUpdateShow: this.doUpdateShow
    }
    return h(
      NPopover,
      Object.assign({}, keep(this.$props, popoverPropKeys), popoverProps),
      {
        trigger: this.$slots.default,
        _: 1
      }
    )
  }
})
