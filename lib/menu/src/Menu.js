'use strict'
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod }
  }
Object.defineProperty(exports, '__esModule', { value: true })
exports.menuInjectionKey = void 0
const vue_1 = require('vue')
const treemate_1 = require('treemate')
const vooks_1 = require('vooks')
const _mixins_1 = require('../../_mixins')
const _utils_1 = require('../../_utils')
const utils_1 = require('./utils')
const styles_1 = require('../styles')
const index_cssr_1 = __importDefault(require('./styles/index.cssr'))
const interface_1 = require('../../layout/src/interface')
const useCheckDeprecated_1 = require('./useCheckDeprecated')
const menuProps = Object.assign(Object.assign({}, _mixins_1.useTheme.props), {
  options: {
    type: Array,
    default: () => []
  },
  collapsed: {
    type: Boolean,
    default: undefined
  },
  collapsedWidth: {
    type: Number,
    default: 48
  },
  iconSize: {
    type: Number,
    default: 20
  },
  collapsedIconSize: {
    type: Number,
    default: 24
  },
  rootIndent: Number,
  indent: {
    type: Number,
    default: 32
  },
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
  defaultExpandAll: Boolean,
  defaultExpandedKeys: Array,
  expandedKeys: Array,
  value: [String, Number],
  defaultValue: {
    type: [String, Number],
    default: null
  },
  mode: {
    type: String,
    default: 'vertical'
  },
  watchProps: {
    type: Array,
    default: undefined
  },
  disabled: Boolean,
  inverted: Boolean,
  'onUpdate:expandedKeys': [Function, Array],
  onUpdateExpandedKeys: [Function, Array],
  onUpdateValue: [Function, Array],
  'onUpdate:value': [Function, Array],
  expandIcon: Function,
  renderIcon: Function,
  renderLabel: Function,
  renderExtra: Function,
  /** TODO: deprecate it */
  dropdownPlacement: {
    type: String,
    default: 'bottom'
  },
  dropdownProps: Object,
  accordion: Boolean,
  // deprecated
  items: Array,
  onOpenNamesChange: [Function, Array],
  onSelect: [Function, Array],
  onExpandedNamesChange: [Function, Array],
  expandedNames: Array,
  defaultExpandedNames: Array
})
exports.menuInjectionKey = Symbol('menu')
exports.default = (0, vue_1.defineComponent)({
  name: 'Menu',
  props: menuProps,
  setup(props) {
    if (process.env.NODE_ENV !== 'production') {
      ;(0, useCheckDeprecated_1.useCheckDeprecated)(props)
    }
    const { mergedClsPrefixRef } = (0, _mixins_1.useConfig)(props)
    const themeRef = (0, _mixins_1.useTheme)(
      'Menu',
      'Menu',
      index_cssr_1.default,
      styles_1.menuLight,
      props,
      mergedClsPrefixRef
    )
    const layoutSider = (0, vue_1.inject)(
      interface_1.layoutSiderInjectionKey,
      null
    )
    const mergedCollapsedRef = (0, vue_1.computed)(() => {
      var _a
      const { collapsed } = props
      if (collapsed !== undefined) return collapsed
      if (layoutSider) {
        const { collapseModeRef, collapsedRef } = layoutSider
        if (collapseModeRef.value === 'width') {
          return (_a = collapsedRef.value) !== null && _a !== void 0
            ? _a
            : false
        }
      }
      return false
    })
    const treeMateRef = (0, vue_1.computed)(() => {
      const { keyField, childrenField } = props
      return (0, treemate_1.createTreeMate)(props.items || props.options, {
        getChildren(node) {
          return node[childrenField]
        },
        getKey(node) {
          var _a
          return (_a = node[keyField]) !== null && _a !== void 0
            ? _a
            : node.name
        }
      })
    })
    const treeKeysLevelOneRef = (0, vue_1.computed)(
      () => new Set(treeMateRef.value.treeNodes.map((e) => e.key))
    )
    const { watchProps } = props
    const uncontrolledValueRef = (0, vue_1.ref)(null)
    if (
      watchProps === null || watchProps === void 0
        ? void 0
        : watchProps.includes('defaultValue')
    ) {
      ;(0, vue_1.watchEffect)(() => {
        uncontrolledValueRef.value = props.defaultValue
      })
    } else {
      uncontrolledValueRef.value = props.defaultValue
    }
    const controlledValueRef = (0, vue_1.toRef)(props, 'value')
    const mergedValueRef = (0, vooks_1.useMergedState)(
      controlledValueRef,
      uncontrolledValueRef
    )
    const uncontrolledExpandedKeysRef = (0, vue_1.ref)([])
    const initUncontrolledExpandedKeys = () => {
      uncontrolledExpandedKeysRef.value = props.defaultExpandAll
        ? treeMateRef.value.getNonLeafKeys()
        : props.defaultExpandedNames ||
          props.defaultExpandedKeys ||
          treeMateRef.value.getPath(mergedValueRef.value, {
            includeSelf: false
          }).keyPath
    }
    if (
      watchProps === null || watchProps === void 0
        ? void 0
        : watchProps.includes('defaultExpandedKeys')
    ) {
      ;(0, vue_1.watchEffect)(initUncontrolledExpandedKeys)
    } else {
      initUncontrolledExpandedKeys()
    }
    const controlledExpandedKeysRef = (0, vooks_1.useCompitable)(props, [
      'expandedNames',
      'expandedKeys'
    ])
    const mergedExpandedKeysRef = (0, vooks_1.useMergedState)(
      controlledExpandedKeysRef,
      uncontrolledExpandedKeysRef
    )
    const tmNodesRef = (0, vue_1.computed)(() => treeMateRef.value.treeNodes)
    const activePathRef = (0, vue_1.computed)(() => {
      return treeMateRef.value.getPath(mergedValueRef.value).keyPath
    })
    ;(0, vue_1.provide)(exports.menuInjectionKey, {
      props,
      mergedCollapsedRef,
      mergedThemeRef: themeRef,
      mergedValueRef,
      mergedExpandedKeysRef,
      activePathRef,
      mergedClsPrefixRef,
      isHorizontalRef: (0, vue_1.computed)(() => props.mode === 'horizontal'),
      invertedRef: (0, vue_1.toRef)(props, 'inverted'),
      doSelect,
      toggleExpand
    })
    function doSelect(value, item) {
      const {
        'onUpdate:value': _onUpdateValue,
        onUpdateValue,
        onSelect
      } = props
      if (onUpdateValue) {
        ;(0, _utils_1.call)(onUpdateValue, value, item)
      }
      if (_onUpdateValue) {
        ;(0, _utils_1.call)(_onUpdateValue, value, item)
      }
      if (onSelect) {
        ;(0, _utils_1.call)(onSelect, value, item)
      }
      uncontrolledValueRef.value = value
    }
    function doUpdateExpandedKeys(value) {
      const {
        'onUpdate:expandedKeys': _onUpdateExpandedKeys,
        onUpdateExpandedKeys,
        onExpandedNamesChange,
        onOpenNamesChange
      } = props
      if (_onUpdateExpandedKeys) {
        ;(0, _utils_1.call)(_onUpdateExpandedKeys, value)
      }
      if (onUpdateExpandedKeys) {
        ;(0, _utils_1.call)(onUpdateExpandedKeys, value)
      }
      // deprecated
      if (onExpandedNamesChange) {
        ;(0, _utils_1.call)(onExpandedNamesChange, value)
      }
      if (onOpenNamesChange) {
        ;(0, _utils_1.call)(onOpenNamesChange, value)
      }
      uncontrolledExpandedKeysRef.value = value
    }
    function toggleExpand(key) {
      const currentExpandedKeys = Array.from(mergedExpandedKeysRef.value)
      const index = currentExpandedKeys.findIndex(
        (expanededKey) => expanededKey === key
      )
      if (~index) {
        currentExpandedKeys.splice(index, 1)
      } else {
        if (props.accordion) {
          if (treeKeysLevelOneRef.value.has(key)) {
            const closeKeyIndex = currentExpandedKeys.findIndex((e) =>
              treeKeysLevelOneRef.value.has(e)
            )
            if (closeKeyIndex > -1) {
              currentExpandedKeys.splice(closeKeyIndex, 1)
            }
          }
        }
        currentExpandedKeys.push(key)
      }
      doUpdateExpandedKeys(currentExpandedKeys)
    }
    return {
      mergedClsPrefix: mergedClsPrefixRef,
      controlledExpandedKeys: controlledExpandedKeysRef,
      uncontrolledExpanededKeys: uncontrolledExpandedKeysRef,
      mergedExpandedKeys: mergedExpandedKeysRef,
      uncontrolledValue: uncontrolledValueRef,
      mergedValue: mergedValueRef,
      activePath: activePathRef,
      tmNodes: tmNodesRef,
      mergedTheme: themeRef,
      mergedCollapsed: mergedCollapsedRef,
      cssVars: (0, vue_1.computed)(() => {
        const { inverted } = props
        const {
          common: { cubicBezierEaseInOut },
          self
        } = themeRef.value
        const {
          borderRadius,
          borderColorHorizontal,
          fontSize,
          itemHeight,
          dividerColor
        } = self
        const vars = {
          '--divider-color': dividerColor,
          '--bezier': cubicBezierEaseInOut,
          '--font-size': fontSize,
          '--border-color-horizontal': borderColorHorizontal,
          '--border-radius': borderRadius,
          '--item-height': itemHeight
        }
        if (inverted) {
          vars['--group-text-color'] = self.groupTextColorInverted
          vars['--color'] = self.colorInverted
          vars['--item-text-color'] = self.itemTextColorInverted
          vars['--arrow-color'] = self.arrowColorInverted
          vars['--arrow-color-hover'] = self.arrowColorHoverInverted
          vars['--arrow-color-active'] = self.arrowColorActiveInverted
          vars['--arrow-color-child-active'] =
            self.arrowColorChildActiveInverted
          vars['--item-icon-color'] = self.itemIconColorInverted
          vars['--item-text-color-hover'] = self.itemTextColorHoverInverted
          vars['--item-icon-color-hover'] = self.itemIconColorHoverInverted
          vars['--item-text-color-active'] = self.itemTextColorActiveInverted
          vars['--item-icon-color-active'] = self.itemIconColorActiveInverted
          vars['--item-icon-color-collapsed'] =
            self.itemIconColorCollapsedInverted
          vars['--item-color-active'] = self.itemColorActiveInverted
          vars['--item-color-active-collapsed'] =
            self.itemColorActiveCollapsedInverted
          vars['--item-text-color-child-active'] =
            self.itemTextColorChildActiveInverted
          vars['--item-icon-color-child-active'] =
            self.itemIconColorChildActiveInverted
        } else {
          vars['--group-text-color'] = self.groupTextColor
          vars['--color'] = self.color
          vars['--item-text-color'] = self.itemTextColor
          vars['--arrow-color'] = self.arrowColor
          vars['--arrow-color-hover'] = self.arrowColorHover
          vars['--arrow-color-active'] = self.arrowColorActive
          vars['--arrow-color-child-active'] = self.arrowColorChildActive
          vars['--item-icon-color'] = self.itemIconColor
          vars['--item-text-color-hover'] = self.itemTextColorHover
          vars['--item-icon-color-hover'] = self.itemIconColorHover
          vars['--item-text-color-active'] = self.itemTextColorActive
          vars['--item-icon-color-active'] = self.itemIconColorActive
          vars['--item-icon-color-collapsed'] = self.itemIconColorCollapsed
          vars['--item-color-active'] = self.itemColorActive
          vars['--item-color-active-collapsed'] = self.itemColorActiveCollapsed
          vars['--item-text-color-child-active'] = self.itemTextColorChildActive
          vars['--item-icon-color-child-active'] = self.itemIconColorChildActive
        }
        return vars
      })
    }
  },
  render() {
    const { mergedClsPrefix, mode } = this
    return (0, vue_1.h)(
      'div',
      {
        role: mode === 'horizontal' ? 'menubar' : 'menu',
        class: [
          `${mergedClsPrefix}-menu`,
          `${mergedClsPrefix}-menu--${mode}`,
          this.mergedCollapsed && `${mergedClsPrefix}-menu--collapsed`
        ],
        style: this.cssVars
      },
      this.tmNodes.map((tmNode) =>
        (0, utils_1.itemRenderer)(tmNode, this.$props)
      )
    )
  }
})
