'use strict'
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod }
  }
Object.defineProperty(exports, '__esModule', { value: true })
/* eslint-disable @typescript-eslint/no-non-null-assertion */
const vue_1 = require('vue')
const vooks_1 = require('vooks')
const seemly_1 = require('seemly')
const _utils_1 = require('../../_utils')
const TreeNodeSwitcher_1 = __importDefault(require('./TreeNodeSwitcher'))
const TreeNodeCheckbox_1 = __importDefault(require('./TreeNodeCheckbox'))
const TreeNodeContent_1 = __importDefault(require('./TreeNodeContent'))
const interface_1 = require('./interface')
const dnd_1 = require('./dnd')
const TreeNode = (0, vue_1.defineComponent)({
  name: 'TreeNode',
  props: {
    clsPrefix: {
      type: String,
      required: true
    },
    tmNode: {
      type: Object,
      required: true
    }
  },
  setup(props) {
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    const NTree = (0, vue_1.inject)(interface_1.treeInjectionKey)
    const {
      droppingNodeParentRef,
      droppingMouseNodeRef,
      draggingNodeRef,
      droppingPositionRef,
      droppingOffsetLevelRef,
      indentRef
    } = NTree
    // used for drag and drop
    const contentInstRef = (0, vue_1.ref)(null)
    // must be non-reactive
    const contentElRef = { value: null }
    ;(0, vue_1.onMounted)(() => {
      contentElRef.value = contentInstRef.value.$el
    })
    function handleSwitcherClick() {
      const { tmNode } = props
      if (NTree.remoteRef.value && !tmNode.isLeaf && !tmNode.shallowLoaded) {
        if (!NTree.loadingKeysRef.value.has(tmNode.key)) {
          NTree.loadingKeysRef.value.add(tmNode.key)
        }
        const {
          onLoadRef: { value: onLoad }
        } = NTree
        if (onLoad) {
          void onLoad(tmNode.rawNode)
            .then(() => {
              NTree.handleSwitcherClick(tmNode)
            })
            .finally(() => {
              NTree.loadingKeysRef.value.delete(tmNode.key)
            })
        }
      } else {
        NTree.handleSwitcherClick(tmNode)
      }
    }
    function handleContentClick(e) {
      if (
        (0, seemly_1.happensIn)(e, 'checkbox') ||
        (0, seemly_1.happensIn)(e, 'switcher')
      )
        return
      NTree.handleSelect(props.tmNode)
    }
    function handleCheck(checked) {
      NTree.handleCheck(props.tmNode, checked)
    }
    // Dnd
    function handleDragStart(e) {
      NTree.handleDragStart({
        event: e,
        node: props.tmNode
      })
    }
    function handleDragEnter(e) {
      if (e.currentTarget !== e.target) {
        return
      }
      NTree.handleDragEnter({
        event: e,
        node: props.tmNode
      })
    }
    function handleDragOver(e) {
      e.preventDefault() // if not prevent, drop event won't be fired...
      NTree.handleDragOver({
        event: e,
        node: props.tmNode
      })
    }
    function handleDragEnd(e) {
      NTree.handleDragEnd({
        event: e,
        node: props.tmNode
      })
    }
    function handleDragLeave(e) {
      if (e.currentTarget !== e.target) {
        return
      }
      NTree.handleDragLeave({
        event: e,
        node: props.tmNode
      })
    }
    function handleDrop(e) {
      e.preventDefault()
      if (droppingPositionRef.value !== null) {
        NTree.handleDrop({
          event: e,
          node: props.tmNode,
          dropPosition: droppingPositionRef.value
        })
      }
    }
    return {
      showDropMark: (0, vooks_1.useMemo)(() => {
        const { value: draggingNode } = draggingNodeRef
        if (!draggingNode) return
        const { value: droppingPosition } = droppingPositionRef
        if (!droppingPosition) return
        const { value: droppingMouseNode } = droppingMouseNodeRef
        if (!droppingMouseNode) {
          return
        }
        const { tmNode } = props
        if (tmNode.key === droppingMouseNode.key) return true
        return false
      }),
      showDropMarkAsParent: (0, vooks_1.useMemo)(() => {
        const { value: droppingNodeParent } = droppingNodeParentRef
        if (!droppingNodeParent) return false
        const { tmNode } = props
        const { value: droppingPosition } = droppingPositionRef
        if (droppingPosition === 'before' || droppingPosition === 'after') {
          return droppingNodeParent.key === tmNode.key
        }
        return false
      }),
      pending: (0, vooks_1.useMemo)(
        () => NTree.pendingNodeKeyRef.value === props.tmNode.key
      ),
      loading: (0, vooks_1.useMemo)(() =>
        NTree.loadingKeysRef.value.has(props.tmNode.key)
      ),
      highlight: (0, vooks_1.useMemo)(() =>
        NTree.highlightKeySetRef.value.has(props.tmNode.key)
      ),
      checked: (0, vooks_1.useMemo)(() =>
        NTree.displayedCheckedKeysRef.value.includes(props.tmNode.key)
      ),
      indeterminate: (0, vooks_1.useMemo)(() =>
        NTree.displayedIndeterminateKeysRef.value.includes(props.tmNode.key)
      ),
      selected: (0, vooks_1.useMemo)(() =>
        NTree.mergedSelectedKeysRef.value.includes(props.tmNode.key)
      ),
      expanded: (0, vooks_1.useMemo)(() =>
        NTree.mergedExpandedKeysRef.value.includes(props.tmNode.key)
      ),
      disabled: (0, vue_1.computed)(
        () => NTree.disabledRef.value || props.tmNode.disabled
      ),
      checkable: (0, vue_1.computed)(
        () =>
          NTree.checkableRef.value &&
          (NTree.cascadeRef.value ||
            NTree.mergedCheckStrategyRef.value !== 'child' ||
            props.tmNode.isLeaf)
      ),
      checkboxDisabled: (0, vue_1.computed)(
        () => !!props.tmNode.rawNode.checkboxDisabled
      ),
      selectable: (0, vue_1.computed)(
        () =>
          NTree.selectableRef.value &&
          (NTree.mergedCheckStrategyRef.value === 'child'
            ? props.tmNode.isLeaf
            : true)
      ),
      internalScrollable: NTree.internalScrollableRef,
      draggable: NTree.draggableRef,
      blockLine: NTree.blockLineRef,
      checkboxFocusable: NTree.internalCheckboxFocusableRef,
      droppingPosition: droppingPositionRef,
      droppingOffsetLevel: droppingOffsetLevelRef,
      indent: indentRef,
      contentInstRef,
      contentElRef,
      handleCheck,
      handleDrop,
      handleDragStart,
      handleDragEnter,
      handleDragOver,
      handleDragEnd,
      handleDragLeave,
      handleContentClick,
      handleSwitcherClick
    }
  },
  render() {
    const {
      tmNode,
      clsPrefix,
      checkable,
      selectable,
      selected,
      checked,
      highlight,
      draggable,
      blockLine,
      indent,
      disabled,
      pending,
      internalScrollable
    } = this
    // drag start not inside
    // it need to be append to node itself, not wrapper
    const dragEventHandlers =
      draggable && !disabled
        ? {
            onDragenter: this.handleDragEnter,
            onDragleave: this.handleDragLeave,
            onDragend: this.handleDragEnd,
            onDrop: this.handleDrop,
            onDragover: this.handleDragOver
          }
        : undefined
    // In non virtual mode, there's no evidence that which element should be
    // scrolled to, so we need data-key to query the target element.
    const dataKey = internalScrollable
      ? (0, _utils_1.createDataKey)(tmNode.key)
      : undefined
    return (0, vue_1.h)(
      'div',
      Object.assign(
        { class: `${clsPrefix}-tree-node-wrapper` },
        dragEventHandlers
      ),
      (0, vue_1.h)(
        'div',
        {
          class: [
            `${clsPrefix}-tree-node`,
            {
              [`${clsPrefix}-tree-node--selected`]: selected,
              [`${clsPrefix}-tree-node--checkable`]: checkable,
              [`${clsPrefix}-tree-node--highlight`]: highlight,
              [`${clsPrefix}-tree-node--pending`]: pending,
              [`${clsPrefix}-tree-node--disabled`]: disabled,
              [`${clsPrefix}-tree-node--selectable`]: selectable
            }
          ],
          'data-key': dataKey,
          draggable: draggable && blockLine,
          onClick: blockLine && !disabled ? this.handleContentClick : undefined,
          onDragstart:
            draggable && blockLine && !disabled
              ? this.handleDragStart
              : undefined
        },
        (0, seemly_1.repeat)(
          tmNode.level,
          (0, vue_1.h)('div', {
            class: `${clsPrefix}-tree-node-indent`,
            style: { flex: `0 0 ${indent}px` }
          })
        ),
        (0, vue_1.h)(TreeNodeSwitcher_1.default, {
          clsPrefix: clsPrefix,
          expanded: this.expanded,
          loading: this.loading,
          hide: tmNode.isLeaf,
          onClick: this.handleSwitcherClick
        }),
        checkable
          ? (0, vue_1.h)(TreeNodeCheckbox_1.default, {
              focusable: this.checkboxFocusable,
              disabled: disabled || this.checkboxDisabled,
              clsPrefix: clsPrefix,
              checked: this.checked,
              indeterminate: this.indeterminate,
              onCheck: this.handleCheck
            })
          : null,
        (0, vue_1.h)(TreeNodeContent_1.default, {
          ref: 'contentInstRef',
          clsPrefix: clsPrefix,
          checked: checked,
          selected: selected,
          onClick: blockLine || disabled ? undefined : this.handleContentClick,
          onDragstart:
            draggable && !blockLine && !disabled
              ? this.handleDragStart
              : undefined,
          tmNode: tmNode
        }),
        draggable
          ? this.showDropMark
            ? (0, dnd_1.renderDropMark)({
                el: this.contentElRef.value,
                position: this.droppingPosition,
                offsetLevel: this.droppingOffsetLevel,
                indent
              })
            : this.showDropMarkAsParent
            ? (0, dnd_1.renderDropMark)({
                el: this.contentElRef.value,
                position: 'inside',
                offsetLevel: this.droppingOffsetLevel,
                indent
              })
            : null
          : null
      )
    )
  }
})
exports.default = TreeNode