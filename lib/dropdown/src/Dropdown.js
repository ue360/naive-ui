'use strict'
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod }
  }
Object.defineProperty(exports, '__esModule', { value: true })
exports.dropdownInjectionKey = void 0
const vue_1 = require('vue')
const treemate_1 = require('treemate')
const vooks_1 = require('vooks')
const Popover_1 = require('../../popover/src/Popover')
const _mixins_1 = require('../../_mixins')
const popover_1 = require('../../popover')
const _utils_1 = require('../../_utils')
const styles_1 = require('../styles')
const DropdownMenu_1 = __importDefault(require('./DropdownMenu'))
const index_cssr_1 = __importDefault(require('./styles/index.cssr'))
exports.dropdownInjectionKey = Symbol('dropdown')
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
const popoverPropKeys = Object.keys(Popover_1.popoverBaseProps)
const dropdownProps = Object.assign(
  Object.assign(
    Object.assign({}, Popover_1.popoverBaseProps),
    dropdownBaseProps
  ),
  _mixins_1.useTheme.props
)
exports.default = (0, vue_1.defineComponent)({
  name: 'Dropdown',
  inheritAttrs: false,
  props: dropdownProps,
  setup(props) {
    const uncontrolledShowRef = (0, vue_1.ref)(false)
    const mergedShowRef = (0, vooks_1.useMergedState)(
      (0, vue_1.toRef)(props, 'show'),
      uncontrolledShowRef
    )
    const treemateRef = (0, vue_1.computed)(() => {
      const { keyField, childrenField } = props
      return (0, treemate_1.createTreeMate)(props.options, {
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
    const tmNodesRef = (0, vue_1.computed)(() => {
      return treemateRef.value.treeNodes
    })
    const hoverKeyRef = (0, vue_1.ref)(null)
    const keyboardKeyRef = (0, vue_1.ref)(null)
    const lastToggledSubmenuKeyRef = (0, vue_1.ref)(null)
    const pendingKeyRef = (0, vue_1.computed)(() => {
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
    const pendingKeyPathRef = (0, vue_1.computed)(
      () => treemateRef.value.getPath(pendingKeyRef.value).keyPath
    )
    const activeKeyPathRef = (0, vue_1.computed)(
      () => treemateRef.value.getPath(props.value).keyPath
    )
    const keyboardEnabledRef = (0, vooks_1.useMemo)(() => {
      return props.keyboard && mergedShowRef.value
    })
    ;(0, vooks_1.useKeyboard)(
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
    const { mergedClsPrefixRef } = (0, _mixins_1.useConfig)(props)
    const themeRef = (0, _mixins_1.useTheme)(
      'Dropdown',
      'Dropdown',
      index_cssr_1.default,
      styles_1.dropdownLight,
      props,
      mergedClsPrefixRef
    )
    ;(0, vue_1.provide)(exports.dropdownInjectionKey, {
      labelFieldRef: (0, vue_1.toRef)(props, 'labelField'),
      childrenFieldRef: (0, vue_1.toRef)(props, 'childrenField'),
      renderLabelRef: (0, vue_1.toRef)(props, 'renderLabel'),
      renderIconRef: (0, vue_1.toRef)(props, 'renderIcon'),
      hoverKeyRef: hoverKeyRef,
      keyboardKeyRef: keyboardKeyRef,
      lastToggledSubmenuKeyRef: lastToggledSubmenuKeyRef,
      pendingKeyPathRef: pendingKeyPathRef,
      activeKeyPathRef: activeKeyPathRef,
      animatedRef: (0, vue_1.toRef)(props, 'animated'),
      mergedShowRef: mergedShowRef,
      doSelect,
      doUpdateShow
    })
    // watch
    ;(0, vue_1.watch)(mergedShowRef, (value) => {
      if (!value) clearPendingState()
    })
    // methods
    function doSelect(key, node) {
      const { onSelect } = props
      if (onSelect) (0, _utils_1.call)(onSelect, key, node)
    }
    function doUpdateShow(value) {
      const { 'onUpdate:show': onUpdateShow } = props
      if (onUpdateShow) (0, _utils_1.call)(onUpdateShow, value)
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
      cssVars: (0, vue_1.computed)(() => {
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
          [(0, _utils_1.createKey)('optionIconSuffixWidth', size)]:
            optionIconSuffixWidth,
          [(0, _utils_1.createKey)('optionSuffixWidth', size)]:
            optionSuffixWidth,
          [(0, _utils_1.createKey)('optionIconPrefixWidth', size)]:
            optionIconPrefixWidth,
          [(0, _utils_1.createKey)('optionPrefixWidth', size)]:
            optionPrefixWidth,
          [(0, _utils_1.createKey)('fontSize', size)]: fontSize,
          [(0, _utils_1.createKey)('optionHeight', size)]: optionHeight,
          [(0, _utils_1.createKey)('optionIconSize', size)]: optionIconSize
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
        ref: (0, _utils_1.createRefSetter)(ref),
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
      return (0, vue_1.h)(
        DropdownMenu_1.default,
        (0, vue_1.mergeProps)(this.$attrs, dropdownProps)
      )
    }
    const { mergedTheme } = this
    const popoverProps = {
      show: this.mergedShow,
      theme: mergedTheme.peers.Popover,
      themeOverrides: mergedTheme.peerOverrides.Popover,
      internalRenderBody: renderPopoverBody,
      onUpdateShow: this.doUpdateShow
    }
    return (0, vue_1.h)(
      popover_1.NPopover,
      Object.assign(
        {},
        (0, _utils_1.keep)(this.$props, popoverPropKeys),
        popoverProps
      ),
      {
        trigger: this.$slots.default,
        _: 1
      }
    )
  }
})