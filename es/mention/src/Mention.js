/* eslint-disable @typescript-eslint/no-non-null-assertion */
import {
  defineComponent,
  h,
  ref,
  toRef,
  nextTick,
  computed,
  Transition
} from 'vue'
import { createTreeMate } from 'treemate'
import { VBinder, VFollower, VTarget } from 'vueuc'
import { useIsMounted, useMergedState } from 'vooks'
import { NInput } from '../../input'
import { NInternalSelectMenu } from '../../_internal'
import { call, useAdjustedTo, warn } from '../../_utils'
import { useConfig, useFormItem, useTheme } from '../../_mixins'
import { mentionLight } from '../styles'
import { getRelativePosition } from './utils'
import style from './styles/index.cssr'
const mentionProps = Object.assign(Object.assign({}, useTheme.props), {
  to: useAdjustedTo.propTo,
  autosize: [Boolean, Object],
  options: {
    type: Array,
    default: []
  },
  type: {
    type: String,
    default: 'text'
  },
  separator: {
    type: String,
    validator: (separator) => {
      if (separator.length !== 1) {
        warn('mention', "`separator`'s length must be 1.")
        return false
      }
      return true
    },
    default: ' '
  },
  bordered: {
    type: Boolean,
    default: undefined
  },
  disabled: Boolean,
  value: String,
  defaultValue: {
    type: String,
    default: ''
  },
  loading: Boolean,
  prefix: {
    type: [String, Array],
    default: '@'
  },
  placeholder: {
    type: String,
    default: ''
  },
  size: String,
  'onUpdate:value': [Array, Function],
  renderLabel: Function,
  onUpdateValue: [Array, Function],
  onSearch: Function,
  onSelect: Function,
  onFocus: Function,
  onBlur: Function,
  // private
  internalDebug: Boolean
})
export default defineComponent({
  name: 'Mention',
  props: mentionProps,
  setup(props) {
    const { namespaceRef, mergedClsPrefixRef, mergedBorderedRef } =
      useConfig(props)
    const themeRef = useTheme(
      'Mention',
      'Mention',
      style,
      mentionLight,
      props,
      mergedClsPrefixRef
    )
    const formItem = useFormItem(props)
    const inputInstRef = ref(null)
    const cursorRef = ref(null)
    const followerRef = ref(null)
    const partialPatternRef = ref('')
    let cachedPrefix = null
    // cached pattern end is for partial pattern
    // for example @abc|def
    // end is after `c`
    let cachedPartialPatternStart = null
    let cachedPartialPatternEnd = null
    const filteredOptionsRef = computed(() => {
      const { value: pattern } = partialPatternRef
      return props.options.filter((option) => {
        if (!pattern) return true
        if (typeof option.label === 'string') {
          return option.label.startsWith(pattern)
        }
        return option.value.startsWith(pattern)
      })
    })
    const treeMateRef = computed(() => {
      return createTreeMate(filteredOptionsRef.value, {
        getKey: (v) => {
          return v.value
        }
      })
    })
    const selectMenuInstRef = ref(null)
    const showMenuRef = ref(false)
    const uncontrolledValueRef = ref(props.defaultValue)
    const controlledValueRef = toRef(props, 'value')
    const mergedValueRef = useMergedState(
      controlledValueRef,
      uncontrolledValueRef
    )
    function doUpdateShowMenu(show) {
      if (props.disabled) return
      if (!show) {
        cachedPrefix = null
        cachedPartialPatternStart = null
        cachedPartialPatternEnd = null
      }
      showMenuRef.value = show
    }
    function doUpdateValue(value) {
      const { onUpdateValue, 'onUpdate:value': _onUpdateValue } = props
      const { nTriggerFormChange, nTriggerFormInput } = formItem
      if (_onUpdateValue) {
        call(_onUpdateValue, value)
      }
      if (onUpdateValue) {
        call(onUpdateValue, value)
      }
      nTriggerFormInput()
      nTriggerFormChange()
      uncontrolledValueRef.value = value
    }
    function getInputEl() {
      return props.type === 'text'
        ? inputInstRef.value.inputElRef
        : inputInstRef.value.textareaElRef
    }
    function deriveShowMenu() {
      var _a
      const inputEl = getInputEl()
      if (document.activeElement !== inputEl) {
        doUpdateShowMenu(false)
        return
      }
      const { selectionEnd } = inputEl
      if (selectionEnd === null) {
        doUpdateShowMenu(false)
        return
      }
      const inputValue = inputEl.value
      const { separator } = props
      const { prefix } = props
      const prefixArray = typeof prefix === 'string' ? [prefix] : prefix
      for (let i = selectionEnd - 1; i >= 0; --i) {
        const char = inputValue[i]
        if (char === separator || char === '\n' || char === '\r') {
          doUpdateShowMenu(false)
          return
        }
        if (prefixArray.includes(char)) {
          const partialPattern = inputValue.slice(i + 1, selectionEnd)
          doUpdateShowMenu(true)
          ;(_a = props.onSearch) === null || _a === void 0
            ? void 0
            : _a.call(props, partialPattern, char)
          partialPatternRef.value = partialPattern
          cachedPrefix = char
          cachedPartialPatternStart = i + 1
          cachedPartialPatternEnd = selectionEnd
          return
        }
      }
      doUpdateShowMenu(false)
    }
    function syncCursor() {
      const { value: cursorAnchor } = cursorRef
      if (!cursorAnchor) return
      const inputEl = getInputEl()
      const cursorPos = getRelativePosition(inputEl)
      cursorPos.left += inputEl.parentElement.offsetLeft
      cursorAnchor.style.left = `${cursorPos.left}px`
      cursorAnchor.style.top = `${cursorPos.top + cursorPos.height}px`
    }
    function syncPosition() {
      var _a
      if (!showMenuRef.value) return
      ;(_a = followerRef.value) === null || _a === void 0
        ? void 0
        : _a.syncPosition()
    }
    function handleInputUpdateValue(value) {
      doUpdateValue(value)
      // Vue update is mirco task.
      // So DOM must have been done when sync start in marco task.
      // I can't use nextTick(), Chrome doesn't update scrollLeft of INPUT
      // element is immediatelly updated. The behavior is wired but that's what
      // happens.
      syncAfterCursorMove()
    }
    function syncAfterCursorMove() {
      setTimeout(() => {
        syncCursor()
        deriveShowMenu()
        void nextTick().then(syncPosition)
      }, 0)
    }
    function handleInputKeyDown(e) {
      var _a, _b
      if (e.code === 'ArrowLeft' || e.code === 'ArrowRight') {
        if (
          (_a = inputInstRef.value) === null || _a === void 0
            ? void 0
            : _a.isCompositing
        )
          return
        syncAfterCursorMove()
      } else if (
        e.code === 'ArrowUp' ||
        e.code === 'ArrowDown' ||
        e.code === 'Enter' ||
        e.code === 'NumpadEnter'
      ) {
        if (
          (_b = inputInstRef.value) === null || _b === void 0
            ? void 0
            : _b.isCompositing
        )
          return
        const { value: selectMenuInst } = selectMenuInstRef
        if (showMenuRef.value) {
          if (selectMenuInst) {
            e.preventDefault()
            if (e.code === 'ArrowUp') {
              selectMenuInst.prev()
            } else if (e.code === 'ArrowDown') {
              selectMenuInst.next()
            } else {
              // Enter
              const pendingOptionTmNode = selectMenuInst.getPendingTmNode()
              if (pendingOptionTmNode) {
                handleSelect(pendingOptionTmNode)
              } else {
                doUpdateShowMenu(false)
              }
            }
          }
        } else {
          syncAfterCursorMove()
        }
      }
    }
    function handleInputFocus(e) {
      const { onFocus } = props
      onFocus === null || onFocus === void 0 ? void 0 : onFocus(e)
      const { nTriggerFormFocus } = formItem
      nTriggerFormFocus()
      syncAfterCursorMove()
    }
    function focus() {
      var _a
      ;(_a = inputInstRef.value) === null || _a === void 0 ? void 0 : _a.focus()
    }
    function blur() {
      var _a
      ;(_a = inputInstRef.value) === null || _a === void 0 ? void 0 : _a.blur()
    }
    function handleInputBlur(e) {
      const { onBlur } = props
      onBlur === null || onBlur === void 0 ? void 0 : onBlur(e)
      const { nTriggerFormBlur } = formItem
      nTriggerFormBlur()
      doUpdateShowMenu(false)
    }
    function handleSelect(tmNode) {
      var _a
      if (
        cachedPrefix === null ||
        cachedPartialPatternStart === null ||
        cachedPartialPatternEnd === null
      ) {
        if (process.env.NODE_ENV !== 'production') {
          warn(
            'mention',
            'Cache works unexpectly, this is probably a bug. Please create an issue.'
          )
        }
        return
      }
      const {
        rawNode: { value }
      } = tmNode
      const inputEl = getInputEl()
      const inputValue = inputEl.value
      const { separator } = props
      const nextEndPart = inputValue.slice(cachedPartialPatternEnd)
      const alreadySeparated = nextEndPart.startsWith(separator)
      const nextMiddlePart = `${value}${alreadySeparated ? '' : separator}`
      doUpdateValue(
        inputValue.slice(0, cachedPartialPatternStart) +
          nextMiddlePart +
          nextEndPart
      )
      ;(_a = props.onSelect) === null || _a === void 0
        ? void 0
        : _a.call(props, tmNode.rawNode, cachedPrefix)
      const nextSelectionEnd =
        cachedPartialPatternStart +
        nextMiddlePart.length +
        (alreadySeparated ? 1 : 0)
      void nextTick().then(() => {
        // input value is updated
        inputEl.selectionStart = nextSelectionEnd
        inputEl.selectionEnd = nextSelectionEnd
        deriveShowMenu()
      })
    }
    function handleInputMouseDown() {
      if (!props.disabled) {
        syncAfterCursorMove()
      }
    }
    return {
      namespace: namespaceRef,
      mergedClsPrefix: mergedClsPrefixRef,
      mergedBordered: mergedBorderedRef,
      mergedSize: formItem.mergedSizeRef,
      mergedTheme: themeRef,
      treeMate: treeMateRef,
      selectMenuInstRef,
      inputInstRef,
      cursorRef,
      followerRef,
      showMenu: showMenuRef,
      adjustedTo: useAdjustedTo(props),
      isMounted: useIsMounted(),
      mergedValue: mergedValueRef,
      handleInputFocus,
      handleInputBlur,
      handleInputUpdateValue,
      handleInputKeyDown,
      handleSelect,
      handleInputMouseDown,
      focus,
      blur,
      cssVars: computed(() => {
        const {
          self: { menuBoxShadow }
        } = themeRef.value
        return {
          '--menu-box-shadow': menuBoxShadow
        }
      })
    }
  },
  render() {
    const { mergedTheme, mergedClsPrefix, $slots } = this
    return h(
      'div',
      { class: `${mergedClsPrefix}-mention` },
      h(NInput, {
        themeOverrides: mergedTheme.peerOverrides.Input,
        theme: mergedTheme.peers.Input,
        size: this.mergedSize,
        autosize: this.autosize,
        type: this.type,
        ref: 'inputInstRef',
        placeholder: this.placeholder,
        onMousedown: this.handleInputMouseDown,
        onUpdateValue: this.handleInputUpdateValue,
        onKeydown: this.handleInputKeyDown,
        onFocus: this.handleInputFocus,
        onBlur: this.handleInputBlur,
        bordered: this.mergedBordered,
        disabled: this.disabled,
        value: this.mergedValue
      }),
      h(VBinder, null, {
        default: () => [
          h(VTarget, null, {
            default: () => {
              const style = {
                position: 'absolute',
                width: 0,
                height: 0
              }
              if (process.env.NODE_ENV !== 'production' && this.internalDebug) {
                style.width = '1px'
                style.height = '1px'
                style.background = 'red'
              }
              return h('div', { style: style, ref: 'cursorRef' })
            }
          }),
          h(
            VFollower,
            {
              ref: 'followerRef',
              placement: 'bottom-start',
              show: this.showMenu,
              containerClass: this.namespace,
              to: this.adjustedTo,
              teleportDisabled: this.adjustedTo === useAdjustedTo.tdkey
            },
            {
              default: () =>
                h(
                  Transition,
                  {
                    name: 'fade-in-scale-up-transition',
                    appear: this.isMounted
                  },
                  {
                    default: () => {
                      const { mergedTheme } = this
                      return this.showMenu
                        ? h(
                            NInternalSelectMenu,
                            {
                              clsPrefix: mergedClsPrefix,
                              theme: mergedTheme.peers.InternalSelectMenu,
                              themeOverrides:
                                mergedTheme.peerOverrides.InternalSelectMenu,
                              autoPending: true,
                              ref: 'selectMenuInstRef',
                              class: `${mergedClsPrefix}-mention-menu`,
                              loading: this.loading,
                              treeMate: this.treeMate,
                              virtualScroll: false,
                              style: this.cssVars,
                              onToggle: this.handleSelect,
                              renderLabel: this.renderLabel
                            },
                            $slots
                          )
                        : null
                    }
                  }
                )
            }
          )
        ]
      })
    )
  }
})
