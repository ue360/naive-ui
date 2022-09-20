'use strict'
var __awaiter =
  (this && this.__awaiter) ||
  function (thisArg, _arguments, P, generator) {
    function adopt(value) {
      return value instanceof P
        ? value
        : new P(function (resolve) {
            resolve(value)
          })
    }
    return new (P || (P = Promise))(function (resolve, reject) {
      function fulfilled(value) {
        try {
          step(generator.next(value))
        } catch (e) {
          reject(e)
        }
      }
      function rejected(value) {
        try {
          step(generator['throw'](value))
        } catch (e) {
          reject(e)
        }
      }
      function step(result) {
        result.done
          ? resolve(result.value)
          : adopt(result.value).then(fulfilled, rejected)
      }
      step((generator = generator.apply(thisArg, _arguments || [])).next())
    })
  }
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod }
  }
Object.defineProperty(exports, '__esModule', { value: true })
exports.treeSharedProps = exports.createTreeMateOptions = void 0
/* eslint-disable @typescript-eslint/no-non-null-assertion */
const vue_1 = require('vue')
const treemate_1 = require('treemate')
const vooks_1 = require('vooks')
const vueuc_1 = require('vueuc')
const seemly_1 = require('seemly')
const _mixins_1 = require('../../_mixins')
const _utils_1 = require('../../_utils')
const _internal_1 = require('../../_internal')
const styles_1 = require('../styles')
const TreeNode_1 = __importDefault(require('./TreeNode'))
const utils_1 = require('./utils')
const keyboard_1 = require('./keyboard')
const interface_1 = require('./interface')
const MotionWrapper_1 = __importDefault(require('./MotionWrapper'))
const dnd_1 = require('./dnd')
const index_cssr_1 = __importDefault(require('./styles/index.cssr'))
// TODO:
// During expanding, some node are mis-applied with :active style
// Async dnd has bug
const ITEM_SIZE = 30 // 24 + 3 + 3
function createTreeMateOptions(keyField, childrenField) {
  return {
    getKey(node) {
      return node[keyField]
    },
    getChildren(node) {
      return node[childrenField]
    },
    getDisabled(node) {
      return !!(node.disabled || node.checkboxDisabled)
    }
  }
}
exports.createTreeMateOptions = createTreeMateOptions
exports.treeSharedProps = {
  filter: Function,
  defaultExpandAll: Boolean,
  expandedKeys: Array,
  keyField: {
    type: String,
    default: 'key'
  },
  labelField: {
    type: String,
    default: 'label'
  },
  childrenField: {
    type: String,
    default: 'children'
  },
  defaultExpandedKeys: {
    type: Array,
    default: () => []
  },
  indeterminateKeys: Array,
  onUpdateIndeterminateKeys: [Function, Array],
  'onUpdate:indeterminateKeys': [Function, Array],
  onUpdateExpandedKeys: [Function, Array],
  'onUpdate:expandedKeys': [Function, Array]
}
const treeProps = Object.assign(
  Object.assign(
    Object.assign(Object.assign({}, _mixins_1.useTheme.props), {
      data: {
        type: Array,
        default: () => []
      },
      expandOnDragenter: {
        type: Boolean,
        default: true
      },
      cancelable: {
        type: Boolean,
        default: true
      },
      checkable: Boolean,
      draggable: Boolean,
      blockNode: Boolean,
      blockLine: Boolean,
      disabled: Boolean,
      checkedKeys: Array,
      defaultCheckedKeys: {
        type: Array,
        default: () => []
      },
      selectedKeys: Array,
      defaultSelectedKeys: {
        type: Array,
        default: () => []
      },
      remote: Boolean,
      leafOnly: Boolean,
      multiple: Boolean,
      pattern: {
        type: String,
        default: ''
      },
      onLoad: Function,
      cascade: Boolean,
      selectable: {
        type: Boolean,
        default: true
      },
      indent: {
        type: Number,
        default: 16
      },
      allowDrop: {
        type: Function,
        default: dnd_1.defaultAllowDrop
      },
      animated: {
        type: Boolean,
        default: true
      },
      virtualScroll: Boolean,
      watchProps: Array,
      renderLabel: Function,
      renderPrefix: Function,
      renderSuffix: Function,
      onDragenter: [Function, Array],
      onDragleave: [Function, Array],
      onDragend: [Function, Array],
      onDragstart: [Function, Array],
      onDragover: [Function, Array],
      onDrop: [Function, Array],
      onUpdateCheckedKeys: [Function, Array],
      'onUpdate:checkedKeys': [Function, Array],
      onUpdateSelectedKeys: [Function, Array],
      'onUpdate:selectedKeys': [Function, Array]
    }),
    exports.treeSharedProps
  ),
  {
    // internal props for tree-select
    internalScrollable: Boolean,
    internalScrollablePadding: String,
    // use it to do check
    internalDataTreeMate: Object,
    // use it to display
    internalDisplayTreeMate: Object,
    internalHighlightKeySet: Object,
    internalUnifySelectCheck: Boolean,
    internalHideFilteredNode: Boolean,
    internalCheckboxFocusable: {
      type: Boolean,
      default: true
    },
    internalFocusable: {
      // Make tree-select take over keyboard operations
      type: Boolean,
      default: true
    },
    checkStrategy: {
      type: String,
      default: 'all'
    }
  }
)
exports.default = (0, vue_1.defineComponent)({
  name: 'Tree',
  props: treeProps,
  setup(props) {
    const { mergedClsPrefixRef } = (0, _mixins_1.useConfig)(props)
    const themeRef = (0, _mixins_1.useTheme)(
      'Tree',
      'Tree',
      index_cssr_1.default,
      styles_1.treeLight,
      props,
      mergedClsPrefixRef
    )
    const selfElRef = (0, vue_1.ref)(null)
    const scrollbarInstRef = (0, vue_1.ref)(null)
    const virtualListInstRef = (0, vue_1.ref)(null)
    function getScrollContainer() {
      var _a
      return (_a = virtualListInstRef.value) === null || _a === void 0
        ? void 0
        : _a.listElRef
    }
    function getScrollContent() {
      var _a
      return (_a = virtualListInstRef.value) === null || _a === void 0
        ? void 0
        : _a.itemsElRef
    }
    // We don't expect data source to change so we just determine it once
    const displayTreeMateRef = props.internalDisplayTreeMate
      ? (0, vue_1.toRef)(props, 'internalDisplayTreeMate')
      : (0, vue_1.computed)(() =>
          (0, treemate_1.createTreeMate)(
            props.data,
            createTreeMateOptions(props.keyField, props.childrenField)
          )
        )
    const dataTreeMateRef = props.internalDataTreeMate
      ? (0, vue_1.toRef)(props, 'internalDataTreeMate')
      : displayTreeMateRef
    const { watchProps } = props
    const uncontrolledCheckedKeysRef = (0, vue_1.ref)([])
    if (
      watchProps === null || watchProps === void 0
        ? void 0
        : watchProps.includes('defaultCheckedKeys')
    ) {
      ;(0, vue_1.watchEffect)(() => {
        uncontrolledCheckedKeysRef.value = props.defaultCheckedKeys
      })
    } else {
      uncontrolledCheckedKeysRef.value = props.defaultCheckedKeys
    }
    const controlledCheckedKeysRef = (0, vue_1.toRef)(props, 'checkedKeys')
    const mergedCheckedKeysRef = (0, vooks_1.useMergedState)(
      controlledCheckedKeysRef,
      uncontrolledCheckedKeysRef
    )
    const checkedStatusRef = (0, vue_1.computed)(() => {
      const value = dataTreeMateRef.value.getCheckedKeys(
        mergedCheckedKeysRef.value,
        {
          cascade: props.cascade
        }
      )
      return value
    })
    const mergedCheckStrategyRef = (0, vue_1.computed)(() =>
      props.leafOnly ? 'child' : props.checkStrategy
    )
    const displayedCheckedKeysRef = (0, vue_1.computed)(() => {
      return checkedStatusRef.value.checkedKeys
    })
    const displayedIndeterminateKeysRef = (0, vue_1.computed)(() => {
      const { indeterminateKeys } = props
      if (indeterminateKeys !== undefined) return indeterminateKeys
      return checkedStatusRef.value.indeterminateKeys
    })
    const uncontrolledSelectedKeysRef = (0, vue_1.ref)([])
    if (
      watchProps === null || watchProps === void 0
        ? void 0
        : watchProps.includes('defaultSelectedKeys')
    ) {
      ;(0, vue_1.watchEffect)(() => {
        uncontrolledSelectedKeysRef.value = props.defaultSelectedKeys
      })
    } else {
      uncontrolledSelectedKeysRef.value = props.defaultSelectedKeys
    }
    const controlledSelectedKeysRef = (0, vue_1.toRef)(props, 'selectedKeys')
    const mergedSelectedKeysRef = (0, vooks_1.useMergedState)(
      controlledSelectedKeysRef,
      uncontrolledSelectedKeysRef
    )
    const uncontrolledExpandedKeysRef = (0, vue_1.ref)([])
    const initUncontrolledExpandedKeys = () => {
      uncontrolledExpandedKeysRef.value = props.defaultExpandAll
        ? dataTreeMateRef.value.getNonLeafKeys()
        : props.defaultExpandedKeys
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
    const controlledExpandedKeysRef = (0, vue_1.toRef)(props, 'expandedKeys')
    const mergedExpandedKeysRef = (0, vooks_1.useMergedState)(
      controlledExpandedKeysRef,
      uncontrolledExpandedKeysRef
    )
    const fNodesRef = (0, vue_1.computed)(() =>
      displayTreeMateRef.value.getFlattenedNodes(mergedExpandedKeysRef.value)
    )
    const { pendingNodeKeyRef, handleKeyup, handleKeydown } = (0,
    keyboard_1.useKeyboard)({
      mergedSelectedKeysRef,
      fNodesRef,
      mergedExpandedKeysRef,
      handleSelect,
      handleSwitcherClick
    })
    let expandTimerId = null
    let nodeKeyToBeExpanded = null
    const uncontrolledHighlightKeySetRef = (0, vue_1.ref)(new Set())
    const controlledHighlightKeySetRef = (0, vue_1.toRef)(
      props,
      'internalHighlightKeySet'
    )
    const mergedHighlightKeySetRef = (0, vooks_1.useMergedState)(
      controlledHighlightKeySetRef,
      uncontrolledHighlightKeySetRef
    )
    const loadingKeysRef = (0, vue_1.ref)(new Set())
    const expandedNonLoadingKeysRef = (0, vue_1.computed)(() => {
      return mergedExpandedKeysRef.value.filter(
        (key) => !loadingKeysRef.value.has(key)
      )
    })
    let dragStartX = 0
    const draggingNodeRef = (0, vue_1.ref)(null)
    const droppingNodeRef = (0, vue_1.ref)(null)
    const droppingMouseNodeRef = (0, vue_1.ref)(null)
    const droppingPositionRef = (0, vue_1.ref)(null)
    const droppingOffsetLevelRef = (0, vue_1.ref)(0)
    const droppingNodeParentRef = (0, vue_1.computed)(() => {
      const { value: droppingNode } = droppingNodeRef
      if (!droppingNode) return null
      // May avoid overlap between line mark of first child & rect mark of parent
      // if (droppingNode.isFirstChild && droppingPositionRef.value === 'before') {
      //   return null
      // }
      return droppingNode.parent
    })
    const mergedFilterRef = (0, vue_1.computed)(() => {
      const { filter } = props
      if (filter) return filter
      const { labelField } = props
      return (pattern, node) => {
        if (!pattern.length) return true
        return node[labelField].toLowerCase().includes(pattern.toLowerCase())
      }
    })
    // shallow watch data
    ;(0, vue_1.watch)(
      (0, vue_1.toRef)(props, 'data'),
      () => {
        loadingKeysRef.value.clear()
        pendingNodeKeyRef.value = null
        resetDndState()
      },
      {
        deep: false
      }
    )
    ;(0, vue_1.watch)((0, vue_1.toRef)(props, 'pattern'), (value) => {
      if (value) {
        const { expandedKeys: expandedKeysAfterChange, highlightKeySet } = (0,
        utils_1.keysWithFilter)(
          props.data,
          props.pattern,
          props.keyField,
          props.childrenField,
          mergedFilterRef.value
        )
        uncontrolledHighlightKeySetRef.value = highlightKeySet
        doUpdateExpandedKeys(
          expandedKeysAfterChange,
          getOptionsByKeys(expandedKeysAfterChange)
        )
      } else {
        uncontrolledHighlightKeySetRef.value = new Set()
      }
    })
    function triggerLoading(node) {
      return __awaiter(this, void 0, void 0, function* () {
        const { onLoad } = props
        if (!onLoad) {
          if (process.env.NODE_ENV !== 'production') {
            ;(0, _utils_1.warn)(
              'tree',
              'There is unloaded node in data but props.onLoad is not specified.'
            )
          }
          return yield Promise.resolve()
        }
        const { value: loadingKeys } = loadingKeysRef
        return yield new Promise((resolve) => {
          if (!loadingKeys.has(node.key)) {
            loadingKeys.add(node.key)
            onLoad(node.rawNode)
              .then(() => {
                loadingKeys.delete(node.key)
                resolve()
              })
              .catch((loadError) => {
                console.error(loadError)
                resetDragExpandState()
              })
          }
        })
      })
    }
    ;(0, vue_1.watchEffect)(() => {
      var _a
      const { value: displayTreeMate } = displayTreeMateRef
      if (!displayTreeMate) return
      const { getNode } = displayTreeMate
      ;(_a = mergedExpandedKeysRef.value) === null || _a === void 0
        ? void 0
        : _a.forEach((key) => {
            const node = getNode(key)
            if (node && !node.shallowLoaded) {
              void triggerLoading(node)
            }
          })
    })
    // animation in progress
    const aipRef = (0, vue_1.ref)(false)
    // animation flattened nodes
    const afNodeRef = (0, vue_1.ref)([])
    // Note: Since the virtual list depends on min height, if there's a node
    // whose height starts from 0, the virtual list will have a wrong height
    // during animation. This will seldom cause wired scrollbar status. It is
    // fixable and need some changes in vueuc, I've no time so I just leave it
    // here. Maybe the bug won't be fixed during the life time of the project.
    ;(0, vue_1.watch)(expandedNonLoadingKeysRef, (value, prevValue) => {
      if (!props.animated) {
        void (0, vue_1.nextTick)(syncScrollbar)
        return
      }
      const prevVSet = new Set(prevValue)
      let addedKey = null
      let removedKey = null
      for (const expandedKey of value) {
        if (!prevVSet.has(expandedKey)) {
          if (addedKey !== null) return // multi expand, not triggered by click
          addedKey = expandedKey
        }
      }
      const currentVSet = new Set(value)
      for (const expandedKey of prevValue) {
        if (!currentVSet.has(expandedKey)) {
          if (removedKey !== null) return // multi collapse, not triggered by click
          removedKey = expandedKey
        }
      }
      if (
        (addedKey !== null && removedKey !== null) ||
        (addedKey === null && removedKey === null)
      ) {
        // 1. multi action, not triggered by click
        // 2. no action, don't know what happened
        return
      }
      const { virtualScroll } = props
      const viewportHeight = (
        virtualScroll ? virtualListInstRef.value.listElRef : selfElRef.value
      ).offsetHeight
      const viewportItemCount = Math.ceil(viewportHeight / ITEM_SIZE) + 1
      if (addedKey !== null) {
        // play add animation
        aipRef.value = true
        afNodeRef.value = displayTreeMateRef.value.getFlattenedNodes(prevValue)
        const expandedNodeIndex = afNodeRef.value.findIndex(
          (node) => node.key === addedKey
        )
        if (~expandedNodeIndex) {
          const expandedChildren = (0, treemate_1.flatten)(
            // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
            afNodeRef.value[expandedNodeIndex].children,
            value
          )
          afNodeRef.value.splice(expandedNodeIndex + 1, 0, {
            __motion: true,
            mode: 'expand',
            height: virtualScroll
              ? expandedChildren.length * ITEM_SIZE
              : undefined,
            nodes: virtualScroll
              ? expandedChildren.slice(0, viewportItemCount)
              : expandedChildren
          })
        }
      }
      if (removedKey !== null) {
        // play remove animation
        aipRef.value = true
        afNodeRef.value = displayTreeMateRef.value.getFlattenedNodes(value)
        const collapsedNodeIndex = afNodeRef.value.findIndex(
          (node) => node.key === removedKey
        )
        if (~collapsedNodeIndex) {
          const collapsedChildren = (0, treemate_1.flatten)(
            // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
            afNodeRef.value[collapsedNodeIndex].children,
            value
          )
          afNodeRef.value.splice(collapsedNodeIndex + 1, 0, {
            __motion: true,
            mode: 'collapse',
            height: virtualScroll
              ? collapsedChildren.length * ITEM_SIZE
              : undefined,
            nodes: virtualScroll
              ? collapsedChildren.slice(0, viewportItemCount)
              : collapsedChildren
          })
        }
      }
    })
    const getFIndexRef = (0, vue_1.computed)(() => {
      return (0, treemate_1.createIndexGetter)(fNodesRef.value)
    })
    const mergedFNodesRef = (0, vue_1.computed)(() => {
      if (aipRef.value) return afNodeRef.value
      else return fNodesRef.value
    })
    function syncScrollbar() {
      const { value: scrollbarInst } = scrollbarInstRef
      if (scrollbarInst) scrollbarInst.sync()
    }
    function handleAfterEnter() {
      aipRef.value = false
      if (props.virtualScroll) {
        // If virtual scroll, we won't listen to resize during animation, so
        // resize callback of virtual list won't be called and as a result
        // scrollbar won't sync. We need to sync scrollbar manually.
        void (0, vue_1.nextTick)(syncScrollbar)
      }
    }
    function getOptionsByKeys(keys) {
      const { getNode } = dataTreeMateRef.value
      return keys.map((key) => {
        var _a
        return (
          ((_a = getNode(key)) === null || _a === void 0
            ? void 0
            : _a.rawNode) || null
        )
      })
    }
    function doUpdateExpandedKeys(value, option) {
      const {
        'onUpdate:expandedKeys': _onUpdateExpandedKeys,
        onUpdateExpandedKeys
      } = props
      uncontrolledExpandedKeysRef.value = value
      if (_onUpdateExpandedKeys)
        (0, _utils_1.call)(_onUpdateExpandedKeys, value, option)
      if (onUpdateExpandedKeys)
        (0, _utils_1.call)(onUpdateExpandedKeys, value, option)
    }
    function doUpdateCheckedKeys(value, option) {
      const {
        'onUpdate:checkedKeys': _onUpdateCheckedKeys,
        onUpdateCheckedKeys
      } = props
      uncontrolledCheckedKeysRef.value = value
      if (onUpdateCheckedKeys)
        (0, _utils_1.call)(onUpdateCheckedKeys, value, option)
      if (_onUpdateCheckedKeys)
        (0, _utils_1.call)(_onUpdateCheckedKeys, value, option)
    }
    function doUpdateIndeterminateKeys(value, option) {
      const {
        'onUpdate:indeterminateKeys': _onUpdateIndeterminateKeys,
        onUpdateIndeterminateKeys
      } = props
      if (_onUpdateIndeterminateKeys) {
        ;(0, _utils_1.call)(_onUpdateIndeterminateKeys, value, option)
      }
      if (onUpdateIndeterminateKeys) {
        ;(0, _utils_1.call)(onUpdateIndeterminateKeys, value, option)
      }
    }
    function doUpdateSelectedKeys(value, option) {
      const {
        'onUpdate:selectedKeys': _onUpdateSelectedKeys,
        onUpdateSelectedKeys
      } = props
      uncontrolledSelectedKeysRef.value = value
      if (onUpdateSelectedKeys)
        (0, _utils_1.call)(onUpdateSelectedKeys, value, option)
      if (_onUpdateSelectedKeys)
        (0, _utils_1.call)(_onUpdateSelectedKeys, value, option)
    }
    // Drag & Drop
    function doDragEnter(info) {
      const { onDragenter } = props
      if (onDragenter) (0, _utils_1.call)(onDragenter, info)
    }
    function doDragLeave(info) {
      const { onDragleave } = props
      if (onDragleave) (0, _utils_1.call)(onDragleave, info)
    }
    function doDragEnd(info) {
      const { onDragend } = props
      if (onDragend) (0, _utils_1.call)(onDragend, info)
    }
    function doDragStart(info) {
      const { onDragstart } = props
      if (onDragstart) (0, _utils_1.call)(onDragstart, info)
    }
    function doDragOver(info) {
      const { onDragover } = props
      if (onDragover) (0, _utils_1.call)(onDragover, info)
    }
    function doDrop(info) {
      const { onDrop } = props
      if (onDrop) (0, _utils_1.call)(onDrop, info)
    }
    function resetDndState() {
      resetDragState()
      resetDropState()
    }
    function resetDragState() {
      draggingNodeRef.value = null
    }
    function resetDropState() {
      droppingOffsetLevelRef.value = 0
      droppingNodeRef.value = null
      droppingMouseNodeRef.value = null
      droppingPositionRef.value = null
      resetDragExpandState()
    }
    function resetDragExpandState() {
      if (expandTimerId) {
        window.clearTimeout(expandTimerId)
        expandTimerId = null
      }
      nodeKeyToBeExpanded = null
    }
    function handleCheck(node, checked) {
      // We don't guard for leaf only since we have done it in view layer
      if (props.disabled || node.disabled) {
        return
      }
      if (props.internalUnifySelectCheck && !props.multiple) {
        handleSelect(node)
        return
      }
      const { checkedKeys, indeterminateKeys } = dataTreeMateRef.value[
        checked ? 'check' : 'uncheck'
      ](node.key, displayedCheckedKeysRef.value, {
        cascade: props.cascade,
        checkStrategy: mergedCheckStrategyRef.value
      })
      doUpdateCheckedKeys(checkedKeys, getOptionsByKeys(checkedKeys))
      doUpdateIndeterminateKeys(
        indeterminateKeys,
        getOptionsByKeys(indeterminateKeys)
      )
    }
    function toggleExpand(key) {
      if (props.disabled) return
      const { value: mergedExpandedKeys } = mergedExpandedKeysRef
      const index = mergedExpandedKeys.findIndex(
        (expandNodeId) => expandNodeId === key
      )
      if (~index) {
        const expandedKeysAfterChange = Array.from(mergedExpandedKeys)
        expandedKeysAfterChange.splice(index, 1)
        doUpdateExpandedKeys(
          expandedKeysAfterChange,
          getOptionsByKeys(expandedKeysAfterChange)
        )
      } else {
        const nodeToBeExpanded = displayTreeMateRef.value.getNode(key)
        if (!nodeToBeExpanded || nodeToBeExpanded.isLeaf) {
          return
        }
        const nextKeys = mergedExpandedKeys.concat(key)
        doUpdateExpandedKeys(nextKeys, getOptionsByKeys(nextKeys))
      }
    }
    function handleSwitcherClick(node) {
      if (props.disabled || aipRef.value) return
      toggleExpand(node.key)
    }
    function handleSelect(node) {
      if (
        props.disabled ||
        node.disabled ||
        !props.selectable ||
        (mergedCheckStrategyRef.value === 'child' && !node.isLeaf)
      ) {
        return
      }
      pendingNodeKeyRef.value = node.key
      if (props.internalUnifySelectCheck) {
        const {
          value: { checkedKeys, indeterminateKeys }
        } = checkedStatusRef
        if (props.multiple) {
          handleCheck(
            node,
            !(
              checkedKeys.includes(node.key) ||
              indeterminateKeys.includes(node.key)
            )
          )
        } else {
          doUpdateCheckedKeys([node.key], getOptionsByKeys([node.key]))
        }
      }
      if (props.multiple) {
        const selectedKeys = Array.from(mergedSelectedKeysRef.value)
        const index = selectedKeys.findIndex((key) => key === node.key)
        if (~index) {
          if (props.cancelable) {
            selectedKeys.splice(index, 1)
          }
        } else if (!~index) {
          selectedKeys.push(node.key)
        }
        doUpdateSelectedKeys(selectedKeys, getOptionsByKeys(selectedKeys))
      } else {
        const selectedKeys = mergedSelectedKeysRef.value
        if (selectedKeys.includes(node.key)) {
          if (props.cancelable) {
            doUpdateSelectedKeys([], [])
          }
        } else {
          doUpdateSelectedKeys([node.key], getOptionsByKeys([node.key]))
        }
      }
    }
    function expandDragEnterNode(node) {
      if (expandTimerId) {
        window.clearTimeout(expandTimerId)
        expandTimerId = null
      }
      // Don't expand leaf node.
      if (node.isLeaf) return
      nodeKeyToBeExpanded = node.key
      const expand = () => {
        if (nodeKeyToBeExpanded !== node.key) return
        const { value: droppingMouseNode } = droppingMouseNodeRef
        if (
          droppingMouseNode &&
          droppingMouseNode.key === node.key &&
          !mergedExpandedKeysRef.value.includes(node.key)
        ) {
          const nextKeys = mergedExpandedKeysRef.value.concat(node.key)
          doUpdateExpandedKeys(nextKeys, getOptionsByKeys(nextKeys))
        }
        expandTimerId = null
        nodeKeyToBeExpanded = null
      }
      if (!node.shallowLoaded) {
        expandTimerId = window.setTimeout(() => {
          void triggerLoading(node).then(() => {
            expand()
          })
        }, 1000)
      } else {
        expandTimerId = window.setTimeout(() => {
          expand()
        }, 1000)
      }
    }
    // Dnd
    function handleDragEnter({ event, node }) {
      // node should be a tmNode
      if (!props.draggable || props.disabled || node.disabled) return
      handleDragOver({ event, node }, false)
      doDragEnter({ event, node: node.rawNode })
    }
    function handleDragLeave({ event, node }) {
      if (!props.draggable || props.disabled || node.disabled) return
      doDragLeave({ event, node: node.rawNode })
    }
    function handleDragLeaveTree(e) {
      if (e.target !== e.currentTarget) return
      resetDropState()
    }
    // Dragend is ok, we don't need to add global listener to reset drag status
    function handleDragEnd({ event, node }) {
      resetDndState()
      if (!props.draggable || props.disabled || node.disabled) return
      doDragEnd({ event, node: node.rawNode })
    }
    function handleDragStart({ event, node }) {
      var _a
      if (!props.draggable || props.disabled || node.disabled) return
      // Most of time, the image will block user's view
      utils_1.emptyImage &&
        ((_a = event.dataTransfer) === null || _a === void 0
          ? void 0
          : _a.setDragImage(utils_1.emptyImage, 0, 0))
      dragStartX = event.clientX
      draggingNodeRef.value = node
      doDragStart({ event, node: node.rawNode })
    }
    function handleDragOver({ event, node }, emit = true) {
      var _a
      if (!props.draggable || props.disabled || node.disabled) return
      const { value: draggingNode } = draggingNodeRef
      if (!draggingNode) return
      const { allowDrop, indent } = props
      if (emit) doDragOver({ event, node: node.rawNode })
      // Update dropping node
      const el = event.currentTarget
      const { height: elOffsetHeight, top: elClientTop } =
        el.getBoundingClientRect()
      const eventOffsetY = event.clientY - elClientTop
      let mousePosition
      const allowDropInside = allowDrop({
        node: node.rawNode,
        dropPosition: 'inside',
        phase: 'drag'
      })
      if (allowDropInside) {
        if (eventOffsetY <= 8) {
          mousePosition = 'before'
        } else if (eventOffsetY >= elOffsetHeight - 8) {
          mousePosition = 'after'
        } else {
          mousePosition = 'inside'
        }
      } else {
        if (eventOffsetY <= elOffsetHeight / 2) {
          mousePosition = 'before'
        } else {
          mousePosition = 'after'
        }
      }
      const { value: getFindex } = getFIndexRef
      /** determine the drop position and drop node */
      /** the dropping node needn't to be the mouse hovering node! */
      /**
       * if there is something i've learned from implementing a complex
       * drag & drop. that is never write unit test before you really figure
       * out what behavior is exactly you want.
       */
      let finalDropNode
      let finalDropPosition
      const hoverNodeFIndex = getFindex(node.key)
      if (hoverNodeFIndex === null) {
        resetDropState()
        return
      }
      let mouseAtExpandedNonLeafNode = false
      if (mousePosition === 'inside') {
        finalDropNode = node
        finalDropPosition = 'inside'
      } else {
        if (mousePosition === 'before') {
          if (node.isFirstChild) {
            finalDropNode = node
            finalDropPosition = 'before'
          } else {
            finalDropNode = fNodesRef.value[hoverNodeFIndex - 1]
            finalDropPosition = 'after'
          }
        } else {
          finalDropNode = node
          finalDropPosition = 'after'
        }
      }
      // If the node is non-leaf and it is expanded, we don't allow it to
      // drop after it and change it to drop before its next view sibling
      if (
        !finalDropNode.isLeaf &&
        mergedExpandedKeysRef.value.includes(finalDropNode.key)
      ) {
        mouseAtExpandedNonLeafNode = true
        if (finalDropPosition === 'after') {
          finalDropNode = fNodesRef.value[hoverNodeFIndex + 1]
          if (!finalDropNode) {
            // maybe there is no next view sibling when non-leaf node has no
            // children and it is the last node in the tree
            finalDropNode = node
            finalDropPosition = 'inside'
          } else {
            finalDropPosition = 'before'
          }
        }
      }
      const droppingMouseNode = finalDropNode
      droppingMouseNodeRef.value = droppingMouseNode
      // This is a speacial case, user is dragging a last child itself, so we
      // only view it as they are trying to drop after it.
      // There are some relevant codes in bailout 1's child branch.
      // Also, the expand bailout should have a high priority. If it's non-leaf
      // node and expanded, keep its origin drop position
      if (
        !mouseAtExpandedNonLeafNode &&
        draggingNode.isLastChild &&
        draggingNode.key === finalDropNode.key
      ) {
        finalDropPosition = 'after'
      }
      if (finalDropPosition === 'after') {
        let offset = dragStartX - event.clientX // drag left => > 0
        let offsetLevel = 0
        while (
          offset >= indent / 2 && // divide by 2 to make it easier to trigger
          finalDropNode.parent !== null &&
          finalDropNode.isLastChild &&
          offsetLevel < 1
        ) {
          offset -= indent
          offsetLevel += 1
          finalDropNode = finalDropNode.parent
        }
        droppingOffsetLevelRef.value = offsetLevel
      } else {
        droppingOffsetLevelRef.value = 0
      }
      // Bailout 1
      // Drag self into self
      // Drag it into direct parent
      if (
        draggingNode.contains(finalDropNode) ||
        (finalDropPosition === 'inside' &&
          ((_a = draggingNode.parent) === null || _a === void 0
            ? void 0
            : _a.key) === finalDropNode.key)
      ) {
        if (
          draggingNode.key === droppingMouseNode.key &&
          draggingNode.key === finalDropNode.key
        ) {
          // This is special case that we want ui to show a mark to guide user
          // to start dragging. Nor they will think nothing happens.
          // However this is an invalid drop, we need to guard it inside
          // handleDrop
        } else {
          resetDropState()
          return
        }
      }
      // Bailout 3
      if (
        !allowDrop({
          node: finalDropNode.rawNode,
          dropPosition: finalDropPosition,
          phase: 'drag'
        })
      ) {
        resetDropState()
        return
      }
      if (draggingNode.key === finalDropNode.key) {
        // don't expand when drag on itself
        resetDragExpandState()
      } else {
        if (nodeKeyToBeExpanded !== finalDropNode.key) {
          if (finalDropPosition === 'inside') {
            if (props.expandOnDragenter) {
              expandDragEnterNode(finalDropNode)
              // Bailout 4
              // not try to loading
              if (
                !finalDropNode.shallowLoaded &&
                nodeKeyToBeExpanded !== finalDropNode.key
              ) {
                resetDndState()
                return
              }
            } else {
              // Bailout 5
              // never expands on drag
              if (!finalDropNode.shallowLoaded) {
                resetDndState()
                return
              }
            }
          } else {
            resetDragExpandState()
          }
        } else {
          if (finalDropPosition !== 'inside') {
            resetDragExpandState()
          }
        }
      }
      droppingPositionRef.value = finalDropPosition
      droppingNodeRef.value = finalDropNode
    }
    function handleDrop({ event, node, dropPosition }) {
      if (!props.draggable || props.disabled || node.disabled) {
        return
      }
      const { value: draggingNode } = draggingNodeRef
      const { value: droppingNode } = droppingNodeRef
      const { value: droppingPosition } = droppingPositionRef
      if (!draggingNode || !droppingNode || !droppingPosition) {
        return
      }
      // Bailout 1
      if (
        !props.allowDrop({
          node: droppingNode.rawNode,
          dropPosition: droppingPosition,
          phase: 'drag'
        })
      ) {
        return
      }
      // Bailout 2
      // This is a special case to guard since we want ui to show the status
      // but not to emit a event
      if (draggingNode.key === droppingNode.key) {
        return
      }
      // Bailout 3
      // insert before its next node
      // insert after its prev node
      if (droppingPosition === 'before') {
        const nextNode = draggingNode.getNext({ includeDisabled: true })
        if (nextNode) {
          if (nextNode.key === droppingNode.key) {
            resetDropState()
            return
          }
        }
      }
      if (droppingPosition === 'after') {
        const prevNode = draggingNode.getPrev({ includeDisabled: true })
        if (prevNode) {
          if (prevNode.key === droppingNode.key) {
            resetDropState()
            return
          }
        }
      }
      doDrop({
        event,
        node: droppingNode.rawNode,
        dragNode: draggingNode.rawNode,
        dropPosition
      })
      resetDndState()
    }
    function handleScroll() {
      syncScrollbar()
    }
    function handleResize() {
      syncScrollbar()
    }
    function handleFocusout(e) {
      var _a
      if (props.virtualScroll || props.internalScrollable) {
        const { value: scrollbarInst } = scrollbarInstRef
        if (
          (_a =
            scrollbarInst === null || scrollbarInst === void 0
              ? void 0
              : scrollbarInst.containerRef) === null || _a === void 0
            ? void 0
            : _a.contains(e.relatedTarget)
        ) {
          return
        }
        pendingNodeKeyRef.value = null
      } else {
        const { value: selfEl } = selfElRef
        if (
          selfEl === null || selfEl === void 0
            ? void 0
            : selfEl.contains(e.relatedTarget)
        )
          return
        pendingNodeKeyRef.value = null
      }
    }
    ;(0, vue_1.watch)(pendingNodeKeyRef, (value) => {
      var _a, _b
      if (value === null) return
      if (props.virtualScroll) {
        ;(_a = virtualListInstRef.value) === null || _a === void 0
          ? void 0
          : _a.scrollTo({ key: value })
      } else if (props.internalScrollable) {
        const { value: scrollbarInst } = scrollbarInstRef
        if (scrollbarInst === null) return
        const targetEl =
          (_b = scrollbarInst.contentRef) === null || _b === void 0
            ? void 0
            : _b.querySelector(
                `[data-key="${(0, _utils_1.createDataKey)(value)}"]`
              )
        if (!targetEl) return
        scrollbarInst.scrollTo({
          el: targetEl
        })
      }
    })
    ;(0, vue_1.provide)(interface_1.treeInjectionKey, {
      loadingKeysRef,
      highlightKeySetRef: mergedHighlightKeySetRef,
      displayedCheckedKeysRef,
      displayedIndeterminateKeysRef,
      mergedSelectedKeysRef,
      mergedExpandedKeysRef,
      mergedThemeRef: themeRef,
      mergedCheckStrategyRef,
      disabledRef: (0, vue_1.toRef)(props, 'disabled'),
      checkableRef: (0, vue_1.toRef)(props, 'checkable'),
      selectableRef: (0, vue_1.toRef)(props, 'selectable'),
      remoteRef: (0, vue_1.toRef)(props, 'remote'),
      onLoadRef: (0, vue_1.toRef)(props, 'onLoad'),
      draggableRef: (0, vue_1.toRef)(props, 'draggable'),
      blockLineRef: (0, vue_1.toRef)(props, 'blockLine'),
      indentRef: (0, vue_1.toRef)(props, 'indent'),
      cascadeRef: (0, vue_1.toRef)(props, 'cascade'),
      droppingMouseNodeRef,
      droppingNodeParentRef,
      draggingNodeRef,
      droppingPositionRef,
      droppingOffsetLevelRef,
      fNodesRef,
      pendingNodeKeyRef,
      internalScrollableRef: (0, vue_1.toRef)(props, 'internalScrollable'),
      internalCheckboxFocusableRef: (0, vue_1.toRef)(
        props,
        'internalCheckboxFocusable'
      ),
      renderLabelRef: (0, vue_1.toRef)(props, 'renderLabel'),
      renderPrefixRef: (0, vue_1.toRef)(props, 'renderPrefix'),
      renderSuffixRef: (0, vue_1.toRef)(props, 'renderSuffix'),
      labelFieldRef: (0, vue_1.toRef)(props, 'labelField'),
      handleSwitcherClick,
      handleDragEnd,
      handleDragEnter,
      handleDragLeave,
      handleDragStart,
      handleDrop,
      handleDragOver,
      handleSelect,
      handleCheck
    })
    const exposedMethods = {
      handleKeydown,
      handleKeyup
    }
    return Object.assign(
      {
        mergedClsPrefix: mergedClsPrefixRef,
        mergedTheme: themeRef,
        fNodes: mergedFNodesRef,
        aip: aipRef,
        selfElRef,
        virtualListInstRef,
        scrollbarInstRef,
        handleFocusout,
        handleDragLeaveTree,
        handleScroll,
        getScrollContainer,
        getScrollContent,
        handleAfterEnter,
        handleResize,
        cssVars: (0, vue_1.computed)(() => {
          const {
            common: { cubicBezierEaseInOut },
            self: {
              fontSize,
              nodeBorderRadius,
              nodeColorHover,
              nodeColorPressed,
              nodeColorActive,
              arrowColor,
              loadingColor,
              nodeTextColor,
              nodeTextColorDisabled,
              dropMarkColor
            }
          } = themeRef.value
          return {
            '--arrow-color': arrowColor,
            '--loading-color': loadingColor,
            '--bezier': cubicBezierEaseInOut,
            '--font-size': fontSize,
            '--node-border-radius': nodeBorderRadius,
            '--node-color-active': nodeColorActive,
            '--node-color-hover': nodeColorHover,
            '--node-color-pressed': nodeColorPressed,
            '--node-text-color': nodeTextColor,
            '--node-text-color-disabled': nodeTextColorDisabled,
            '--drop-mark-color': dropMarkColor
          }
        })
      },
      exposedMethods
    )
  },
  render() {
    const {
      mergedClsPrefix,
      blockNode,
      blockLine,
      draggable,
      disabled,
      internalFocusable,
      handleKeyup,
      handleKeydown,
      handleFocusout
    } = this
    const mergedFocusable = internalFocusable && !disabled
    const tabindex = mergedFocusable ? '0' : undefined
    const treeClass = [
      `${mergedClsPrefix}-tree`,
      (blockLine || blockNode) && `${mergedClsPrefix}-tree--block-node`,
      blockLine && `${mergedClsPrefix}-tree--block-line`
    ]
    const createNode = (tmNode) => {
      return '__motion' in tmNode
        ? (0, vue_1.h)(MotionWrapper_1.default, {
            height: tmNode.height,
            nodes: tmNode.nodes,
            clsPrefix: mergedClsPrefix,
            mode: tmNode.mode,
            onAfterEnter: this.handleAfterEnter
          })
        : (0, vue_1.h)(TreeNode_1.default, {
            key: tmNode.key,
            tmNode: tmNode,
            clsPrefix: mergedClsPrefix
          })
    }
    if (this.virtualScroll) {
      const { mergedTheme, internalScrollablePadding } = this
      const padding = (0, seemly_1.getPadding)(internalScrollablePadding || '0')
      return (0, vue_1.h)(
        _internal_1.NxScrollbar,
        {
          ref: 'scrollbarInstRef',
          onDragleave: draggable ? this.handleDragLeaveTree : undefined,
          container: this.getScrollContainer,
          content: this.getScrollContent,
          class: treeClass,
          theme: mergedTheme.peers.Scrollbar,
          themeOverrides: mergedTheme.peerOverrides.Scrollbar,
          tabindex: tabindex,
          onKeyup: mergedFocusable ? handleKeyup : undefined,
          onKeydown: mergedFocusable ? handleKeydown : undefined,
          onFocusout: mergedFocusable ? handleFocusout : undefined
        },
        {
          default: () =>
            (0, vue_1.h)(
              vueuc_1.VVirtualList,
              {
                ref: 'virtualListInstRef',
                items: this.fNodes,
                itemSize: ITEM_SIZE,
                ignoreItemResize: this.aip,
                paddingTop: padding.top,
                paddingBottom: padding.bottom,
                style: [
                  this.cssVars,
                  {
                    paddingLeft: padding.left,
                    paddingRight: padding.right
                  }
                ],
                onScroll: this.handleScroll,
                onResize: this.handleResize,
                showScrollbar: false,
                itemResizable: true
              },
              {
                default: ({ item }) => createNode(item)
              }
            )
        }
      )
    }
    const { internalScrollable } = this
    if (internalScrollable) {
      return (0, vue_1.h)(
        _internal_1.NxScrollbar,
        {
          class: treeClass,
          tabindex: tabindex,
          onKeyup: mergedFocusable ? handleKeyup : undefined,
          onKeydown: mergedFocusable ? handleKeydown : undefined,
          onFocusout: mergedFocusable ? handleFocusout : undefined,
          style: this.cssVars,
          contentStyle: { padding: this.internalScrollablePadding }
        },
        {
          default: () =>
            (0, vue_1.h)(
              'div',
              {
                onDragleave: draggable ? this.handleDragLeaveTree : undefined,
                ref: 'selfElRef'
              },
              this.fNodes.map(createNode)
            )
        }
      )
    } else {
      return (0, vue_1.h)(
        'div',
        {
          class: treeClass,
          tabindex: tabindex,
          ref: 'selfElRef',
          style: this.cssVars,
          onKeyup: mergedFocusable ? handleKeyup : undefined,
          onKeydown: mergedFocusable ? handleKeydown : undefined,
          onFocusout: mergedFocusable ? handleFocusout : undefined,
          onDragleave: draggable ? this.handleDragLeaveTree : undefined
        },
        this.fNodes.map(createNode)
      )
    }
  }
})