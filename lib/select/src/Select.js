'use strict'
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod }
  }
Object.defineProperty(exports, '__esModule', { value: true })
const vue_1 = require('vue')
const seemly_1 = require('seemly')
const treemate_1 = require('treemate')
const vueuc_1 = require('vueuc')
const vooks_1 = require('vooks')
const vdirs_1 = require('vdirs')
const _mixins_1 = require('../../_mixins')
const _utils_1 = require('../../_utils')
const _internal_1 = require('../../_internal')
const styles_1 = require('../styles')
const utils_1 = require('./utils')
const index_cssr_1 = __importDefault(require('./styles/index.cssr'))
const selectProps = Object.assign(Object.assign({}, _mixins_1.useTheme.props), {
  to: _utils_1.useAdjustedTo.propTo,
  bordered: {
    type: Boolean,
    default: undefined
  },
  clearable: Boolean,
  options: {
    type: Array,
    default: () => []
  },
  defaultValue: {
    type: [String, Number, Array],
    default: null
  },
  value: [String, Number, Array],
  placeholder: String,
  menuProps: Object,
  multiple: Boolean,
  size: String,
  filterable: Boolean,
  disabled: {
    type: Boolean,
    default: undefined
  },
  remote: Boolean,
  loading: Boolean,
  filter: {
    type: Function,
    default: utils_1.defaultFilter
  },
  placement: {
    type: String,
    default: 'bottom-start'
  },
  widthMode: {
    type: String,
    default: 'trigger'
  },
  tag: Boolean,
  onCreate: {
    type: Function,
    default: (label) => ({
      label: label,
      value: label
    })
  },
  fallbackOption: {
    type: [Function, Boolean],
    default: () => (value) => ({
      label: String(value),
      value
    })
  },
  show: {
    type: Boolean,
    default: undefined
  },
  showArrow: {
    type: Boolean,
    default: true
  },
  maxTagCount: [Number, String],
  consistentMenuWidth: {
    type: Boolean,
    default: true
  },
  virtualScroll: {
    type: Boolean,
    default: true
  },
  renderLabel: Function,
  renderOption: Function,
  renderTag: Function,
  'onUpdate:value': [Function, Array],
  inputProps: Object,
  // for jsx
  onUpdateValue: [Function, Array],
  onBlur: [Function, Array],
  onClear: [Function, Array],
  onFocus: [Function, Array],
  onScroll: [Function, Array],
  onSearch: [Function, Array],
  onUpdateShow: [Function, Array],
  'onUpdate:show': [Function, Array],
  /** deprecated */
  onChange: {
    type: [Function, Array],
    validator: () => {
      if (process.env.NODE_ENV !== 'production') {
        ;(0, _utils_1.warn)(
          'select',
          '`on-change` is deprecated, please use `on-update:value` instead.'
        )
      }
      return true
    },
    default: undefined
  },
  items: {
    type: Array,
    validator: () => {
      if (process.env.NODE_ENV !== 'production') {
        ;(0, _utils_1.warn)(
          'select',
          '`items` is deprecated, please use `options` instead.'
        )
      }
      return true
    },
    default: undefined
  },
  displayDirective: {
    type: String,
    default: 'show'
  }
})
exports.default = (0, vue_1.defineComponent)({
  name: 'Select',
  props: selectProps,
  setup(props) {
    const { mergedClsPrefixRef, mergedBorderedRef, namespaceRef } = (0,
    _mixins_1.useConfig)(props)
    const themeRef = (0, _mixins_1.useTheme)(
      'Select',
      'Select',
      index_cssr_1.default,
      styles_1.selectLight,
      props,
      mergedClsPrefixRef
    )
    const uncontrolledValueRef = (0, vue_1.ref)(props.defaultValue)
    const controlledValueRef = (0, vue_1.toRef)(props, 'value')
    const mergedValueRef = (0, vooks_1.useMergedState)(
      controlledValueRef,
      uncontrolledValueRef
    )
    const focusedRef = (0, vue_1.ref)(false)
    const patternRef = (0, vue_1.ref)('')
    const treeMateRef = (0, vue_1.computed)(() =>
      (0, treemate_1.createTreeMate)(
        filteredOptionsRef.value,
        utils_1.tmOptions
      )
    )
    const valOptMapRef = (0, vue_1.computed)(() =>
      (0, utils_1.createValOptMap)(localOptionsRef.value)
    )
    const uncontrolledShowRef = (0, vue_1.ref)(false)
    const mergedShowRef = (0, vooks_1.useMergedState)(
      (0, vue_1.toRef)(props, 'show'),
      uncontrolledShowRef
    )
    const triggerRef = (0, vue_1.ref)(null)
    const followerRef = (0, vue_1.ref)(null)
    const menuRef = (0, vue_1.ref)(null)
    const { localeRef } = (0, _mixins_1.useLocale)('Select')
    const localizedPlaceholderRef = (0, vue_1.computed)(() => {
      var _a
      return (_a = props.placeholder) !== null && _a !== void 0
        ? _a
        : localeRef.value.placeholder
    })
    const compitableOptionsRef = (0, vooks_1.useCompitable)(props, [
      'items',
      'options'
    ])
    const createdOptionsRef = (0, vue_1.ref)([])
    const beingCreatedOptionsRef = (0, vue_1.ref)([])
    const memoValOptMapRef = (0, vue_1.ref)(new Map())
    const wrappedFallbackOptionRef = (0, vue_1.computed)(() => {
      const { fallbackOption } = props
      if (!fallbackOption) return false
      return (value) => {
        return Object.assign(fallbackOption(value), {
          value
        })
      }
    })
    const localOptionsRef = (0, vue_1.computed)(() => {
      return beingCreatedOptionsRef.value
        .concat(createdOptionsRef.value)
        .concat(compitableOptionsRef.value)
    })
    const filteredOptionsRef = (0, vue_1.computed)(() => {
      if (props.remote) {
        return compitableOptionsRef.value
      } else {
        const { value: localOptions } = localOptionsRef
        const { value: pattern } = patternRef
        if (!pattern.length || !props.filterable) {
          return localOptions
        } else {
          const { filter } = props
          return (0, utils_1.filterOptions)(localOptions, filter, pattern)
        }
      }
    })
    function getMergedOptions(values) {
      const remote = props.remote
      const { value: memoValOptMap } = memoValOptMapRef
      const { value: valOptMap } = valOptMapRef
      const { value: wrappedFallbackOption } = wrappedFallbackOptionRef
      const options = []
      values.forEach((value) => {
        if (valOptMap.has(value)) {
          // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
          options.push(valOptMap.get(value))
        } else if (remote && memoValOptMap.has(value)) {
          // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
          options.push(memoValOptMap.get(value))
        } else if (wrappedFallbackOption) {
          const option = wrappedFallbackOption(value)
          if (option) {
            options.push(option)
          }
        }
      })
      return options
    }
    const selectedOptionsRef = (0, vue_1.computed)(() => {
      if (props.multiple) {
        const { value: values } = mergedValueRef
        if (!Array.isArray(values)) return []
        return getMergedOptions(values)
      }
      return null
    })
    const selectedOptionRef = (0, vue_1.computed)(() => {
      const { value: mergedValue } = mergedValueRef
      if (!props.multiple && !Array.isArray(mergedValue)) {
        if (mergedValue === null) return null
        return getMergedOptions([mergedValue])[0] || null
      }
      return null
    })
    const formItem = (0, _mixins_1.useFormItem)(props)
    const { mergedSizeRef, mergedDisabledRef } = formItem
    function doUpdateValue(value, option) {
      const {
        onChange,
        'onUpdate:value': _onUpdateValue,
        onUpdateValue
      } = props
      const { nTriggerFormChange, nTriggerFormInput } = formItem
      if (onChange) (0, _utils_1.call)(onChange, value, option)
      if (onUpdateValue) (0, _utils_1.call)(onUpdateValue, value, option)
      if (_onUpdateValue) {
        ;(0, _utils_1.call)(_onUpdateValue, value, option)
      }
      uncontrolledValueRef.value = value
      nTriggerFormChange()
      nTriggerFormInput()
    }
    function doBlur(e) {
      const { onBlur } = props
      const { nTriggerFormBlur } = formItem
      if (onBlur) (0, _utils_1.call)(onBlur, e)
      nTriggerFormBlur()
    }
    function doClear() {
      const { onClear } = props
      if (onClear) (0, _utils_1.call)(onClear)
    }
    function doFocus(e) {
      const { onFocus } = props
      const { nTriggerFormFocus } = formItem
      if (onFocus) (0, _utils_1.call)(onFocus, e)
      nTriggerFormFocus()
    }
    function doSearch(value) {
      const { onSearch } = props
      if (onSearch) (0, _utils_1.call)(onSearch, value)
    }
    function doScroll(e) {
      const { onScroll } = props
      if (onScroll) (0, _utils_1.call)(onScroll, e)
    }
    // remote related methods
    function updateMemorizedOptions() {
      var _a
      const { remote, multiple } = props
      if (remote) {
        const { value: memoValOptMap } = memoValOptMapRef
        if (multiple) {
          ;(_a = selectedOptionsRef.value) === null || _a === void 0
            ? void 0
            : _a.forEach((option) => {
                memoValOptMap.set(option.value, option)
              })
        } else {
          const option = selectedOptionRef.value
          if (option) {
            memoValOptMap.set(option.value, option)
          }
        }
      }
    }
    // menu related methods
    function doUpdateShow(value) {
      const { onUpdateShow, 'onUpdate:show': _onUpdateShow } = props
      if (onUpdateShow) (0, _utils_1.call)(onUpdateShow, value)
      if (_onUpdateShow) (0, _utils_1.call)(_onUpdateShow, value)
      uncontrolledShowRef.value = value
    }
    function openMenu() {
      if (!mergedDisabledRef.value) {
        patternRef.value = ''
        doUpdateShow(true)
        uncontrolledShowRef.value = true
        if (props.filterable) {
          focusSelectionInput()
        }
      }
    }
    function closeMenu() {
      doUpdateShow(false)
    }
    function handleMenuAfterLeave() {
      patternRef.value = ''
    }
    function handleTriggerClick() {
      if (mergedDisabledRef.value) return
      if (!mergedShowRef.value) {
        openMenu()
      } else {
        if (!props.filterable) {
          // already focused, don't need to return focus
          closeMenu()
        }
      }
    }
    function handleTriggerBlur(e) {
      var _a, _b
      if (
        (_b =
          (_a = menuRef.value) === null || _a === void 0
            ? void 0
            : _a.selfRef) === null || _b === void 0
          ? void 0
          : _b.contains(e.relatedTarget)
      ) {
        return
      }
      focusedRef.value = false
      doBlur(e)
      // outside select, don't need to return focus
      closeMenu()
    }
    function handleTriggerFocus(e) {
      doFocus(e)
      focusedRef.value = true
    }
    function handleMenuFocus(e) {
      focusedRef.value = true
    }
    function handleMenuBlur(e) {
      var _a
      if (
        (_a = triggerRef.value) === null || _a === void 0
          ? void 0
          : _a.$el.contains(e.relatedTarget)
      )
        return
      focusedRef.value = false
      doBlur(e)
      // outside select, don't need to return focus
      closeMenu()
    }
    function handleMenuTabOut() {
      var _a
      ;(_a = triggerRef.value) === null || _a === void 0 ? void 0 : _a.focus()
      closeMenu()
    }
    function handleMenuClickOutside(e) {
      var _a
      if (mergedShowRef.value) {
        if (
          !((_a = triggerRef.value) === null || _a === void 0
            ? void 0
            : _a.$el.contains(e.target))
        ) {
          // outside select, don't need to return focus
          closeMenu()
        }
      }
    }
    function createClearedMultipleSelectValue(value) {
      if (!Array.isArray(value)) return []
      if (wrappedFallbackOptionRef.value) {
        // if option has a fallback, I can't help user to clear some unknown value
        return Array.from(value)
      } else {
        // if there's no option fallback, unappeared options are treated as invalid
        const { remote } = props
        const { value: valOptMap } = valOptMapRef
        if (remote) {
          const { value: memoValOptMap } = memoValOptMapRef
          return value.filter((v) => valOptMap.has(v) || memoValOptMap.has(v))
        } else {
          return value.filter((v) => valOptMap.has(v))
        }
      }
    }
    function handleToggleByTmNode(tmNode) {
      handleToggleByOption(tmNode.rawNode)
    }
    function handleToggleByOption(option) {
      if (mergedDisabledRef.value) return
      const { tag, remote } = props
      if (tag && !remote) {
        const { value: beingCreatedOptions } = beingCreatedOptionsRef
        const beingCreatedOption = beingCreatedOptions[0] || null
        if (beingCreatedOption) {
          createdOptionsRef.value.push(beingCreatedOption)
          beingCreatedOptionsRef.value = []
        }
      }
      if (remote) {
        memoValOptMapRef.value.set(option.value, option)
      }
      if (props.multiple) {
        const changedValue = createClearedMultipleSelectValue(
          mergedValueRef.value
        )
        const index = changedValue.findIndex((value) => value === option.value)
        if (~index) {
          changedValue.splice(index, 1)
          if (tag && !remote) {
            const createdOptionIndex = getCreatedOptionIndex(option.value)
            if (~createdOptionIndex) {
              createdOptionsRef.value.splice(createdOptionIndex, 1)
              patternRef.value = ''
            }
          }
        } else {
          changedValue.push(option.value)
          patternRef.value = ''
        }
        doUpdateValue(changedValue, getMergedOptions(changedValue))
      } else {
        if (tag && !remote) {
          const createdOptionIndex = getCreatedOptionIndex(option.value)
          if (~createdOptionIndex) {
            createdOptionsRef.value = [
              createdOptionsRef.value[createdOptionIndex]
            ]
          } else {
            createdOptionsRef.value = []
          }
        }
        focusSelection()
        closeMenu()
        doUpdateValue(option.value, option)
      }
    }
    function getCreatedOptionIndex(optionValue) {
      const createdOptions = createdOptionsRef.value
      return createdOptions.findIndex(
        (createdOption) => createdOption.value === optionValue
      )
    }
    function handlePatternInput(e) {
      if (!mergedShowRef.value) {
        openMenu()
      }
      const { value } = e.target
      patternRef.value = value
      const { tag, remote } = props
      doSearch(value)
      if (tag && !remote) {
        if (!value) {
          beingCreatedOptionsRef.value = []
          return
        }
        const optionBeingCreated = props.onCreate(value)
        if (
          compitableOptionsRef.value.some(
            (option) => option.value === optionBeingCreated.value
          ) ||
          createdOptionsRef.value.some(
            (option) => option.value === optionBeingCreated.value
          )
        ) {
          beingCreatedOptionsRef.value = []
        } else {
          beingCreatedOptionsRef.value = [optionBeingCreated]
        }
      }
    }
    function handleClear(e) {
      e.stopPropagation()
      const { multiple } = props
      if (!multiple && props.filterable) {
        closeMenu()
      }
      doClear()
      if (multiple) {
        doUpdateValue([], [])
      } else {
        doUpdateValue(null, null)
      }
    }
    function handleMenuMousedown(e) {
      if (!(0, seemly_1.happensIn)(e, 'action')) e.preventDefault()
    }
    // scroll events on menu
    function handleMenuScroll(e) {
      doScroll(e)
    }
    // keyboard events
    // also for menu keyup
    function handleKeyUp(e) {
      var _a, _b, _c, _d
      switch (e.code) {
        case 'Space':
          if (props.filterable) break
        // eslint-disable-next-line no-fallthrough
        case 'Enter':
        case 'NumpadEnter':
          if (mergedShowRef.value) {
            const pendingTmNode =
              (_a = menuRef.value) === null || _a === void 0
                ? void 0
                : _a.getPendingTmNode()
            if (pendingTmNode) {
              handleToggleByTmNode(pendingTmNode)
            } else if (!props.filterable) {
              closeMenu()
              focusSelection()
            }
          } else {
            openMenu()
          }
          e.preventDefault()
          break
        case 'ArrowUp':
          if (props.loading) return
          if (mergedShowRef.value) {
            ;(_b = menuRef.value) === null || _b === void 0 ? void 0 : _b.prev()
          }
          break
        case 'ArrowDown':
          if (props.loading) return
          if (mergedShowRef.value) {
            ;(_c = menuRef.value) === null || _c === void 0 ? void 0 : _c.next()
          } else {
            openMenu()
          }
          break
        case 'Escape':
          closeMenu()
          ;(_d = triggerRef.value) === null || _d === void 0
            ? void 0
            : _d.focus()
          break
      }
    }
    // also for menu
    function handleKeyDown(e) {
      switch (e.code) {
        case 'Space':
          if (!props.filterable) {
            e.preventDefault()
          }
          break
        case 'ArrowUp':
        case 'ArrowDown':
          e.preventDefault()
          break
      }
    }
    function focusSelection() {
      var _a
      ;(_a = triggerRef.value) === null || _a === void 0 ? void 0 : _a.focus()
    }
    function focusSelectionInput() {
      var _a
      ;(_a = triggerRef.value) === null || _a === void 0
        ? void 0
        : _a.focusInput()
    }
    function syncPosition() {
      var _a
      ;(_a = followerRef.value) === null || _a === void 0
        ? void 0
        : _a.syncPosition()
    }
    updateMemorizedOptions()
    ;(0, vue_1.watch)(
      (0, vue_1.toRef)(props, 'options'),
      updateMemorizedOptions
    )
    ;(0, vue_1.watch)(filteredOptionsRef, () => {
      if (!mergedShowRef.value) return
      void (0, vue_1.nextTick)(syncPosition)
    })
    ;(0, vue_1.watch)(mergedValueRef, () => {
      if (!mergedShowRef.value) return
      void (0, vue_1.nextTick)(syncPosition)
    })
    return {
      mergedClsPrefix: mergedClsPrefixRef,
      mergedBordered: mergedBorderedRef,
      namespace: namespaceRef,
      treeMate: treeMateRef,
      isMounted: (0, vooks_1.useIsMounted)(),
      triggerRef,
      menuRef,
      pattern: patternRef,
      uncontrolledShow: uncontrolledShowRef,
      mergedShow: mergedShowRef,
      adjustedTo: (0, _utils_1.useAdjustedTo)(props),
      uncontrolledValue: uncontrolledValueRef,
      mergedValue: mergedValueRef,
      followerRef,
      localizedPlaceholder: localizedPlaceholderRef,
      selectedOption: selectedOptionRef,
      selectedOptions: selectedOptionsRef,
      mergedSize: mergedSizeRef,
      mergedDisabled: mergedDisabledRef,
      focused: focusedRef,
      handleMenuFocus,
      handleMenuBlur,
      handleMenuTabOut,
      handleTriggerClick,
      handleToggle: handleToggleByTmNode,
      handleDeleteOption: handleToggleByOption,
      handlePatternInput,
      handleClear,
      handleTriggerBlur,
      handleTriggerFocus,
      handleKeyDown,
      handleKeyUp,
      syncPosition,
      handleMenuAfterLeave,
      handleMenuClickOutside,
      handleMenuScroll,
      handleMenuKeyup: handleKeyUp,
      handleMenuKeydown: handleKeyDown,
      handleMenuMousedown,
      mergedTheme: themeRef,
      cssVars: (0, vue_1.computed)(() => {
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
    const { $slots, mergedClsPrefix } = this
    return (0, vue_1.h)(
      'div',
      { class: `${mergedClsPrefix}-select` },
      (0, vue_1.h)(vueuc_1.VBinder, null, {
        default: () => [
          (0, vue_1.h)(vueuc_1.VTarget, null, {
            default: () =>
              (0, vue_1.h)(_internal_1.NInternalSelection, {
                ref: 'triggerRef',
                inputProps: this.inputProps,
                clsPrefix: mergedClsPrefix,
                showArrow: this.showArrow,
                maxTagCount: this.maxTagCount,
                bordered: this.mergedBordered,
                active: this.mergedShow,
                pattern: this.pattern,
                placeholder: this.localizedPlaceholder,
                selectedOption: this.selectedOption,
                selectedOptions: this.selectedOptions,
                multiple: this.multiple,
                renderTag: this.renderTag,
                renderLabel: this.renderLabel,
                filterable: this.filterable,
                clearable: this.clearable,
                disabled: this.mergedDisabled,
                size: this.mergedSize,
                theme: this.mergedTheme.peers.InternalSelection,
                themeOverrides:
                  this.mergedTheme.peerOverrides.InternalSelection,
                loading: this.loading,
                focused: this.focused,
                onClick: this.handleTriggerClick,
                onDeleteOption: this.handleDeleteOption,
                onPatternInput: this.handlePatternInput,
                onClear: this.handleClear,
                onBlur: this.handleTriggerBlur,
                onFocus: this.handleTriggerFocus,
                onKeydown: this.handleKeyDown,
                onKeyup: this.handleKeyUp
              })
          }),
          (0, vue_1.h)(
            vueuc_1.VFollower,
            {
              ref: 'followerRef',
              show: this.mergedShow,
              to: this.adjustedTo,
              teleportDisabled:
                this.adjustedTo === _utils_1.useAdjustedTo.tdkey,
              containerClass: this.namespace,
              width: this.consistentMenuWidth ? 'target' : undefined,
              minWidth: 'target',
              placement: this.placement
            },
            {
              default: () =>
                (0, vue_1.h)(
                  vue_1.Transition,
                  {
                    name: 'fade-in-scale-up-transition',
                    appear: this.isMounted,
                    onAfterLeave: this.handleMenuAfterLeave
                  },
                  {
                    default: () => {
                      var _a, _b
                      return (
                        (this.mergedShow || this.displayDirective === 'show') &&
                        (0, vue_1.withDirectives)(
                          (0, vue_1.h)(
                            _internal_1.NInternalSelectMenu,
                            Object.assign({}, this.menuProps, {
                              ref: 'menuRef',
                              virtualScroll:
                                this.consistentMenuWidth && this.virtualScroll,
                              class: [
                                `${mergedClsPrefix}-select-menu`,
                                (_a = this.menuProps) === null || _a === void 0
                                  ? void 0
                                  : _a.class
                              ],
                              clsPrefix: mergedClsPrefix,
                              focusable: true,
                              autoPending: true,
                              theme: this.mergedTheme.peers.InternalSelectMenu,
                              themeOverrides:
                                this.mergedTheme.peerOverrides
                                  .InternalSelectMenu,
                              treeMate: this.treeMate,
                              multiple: this.multiple,
                              size: 'medium',
                              renderOption: this.renderOption,
                              renderLabel: this.renderLabel,
                              value: this.mergedValue,
                              style: [
                                (_b = this.menuProps) === null || _b === void 0
                                  ? void 0
                                  : _b.style,
                                this.cssVars
                              ],
                              onToggle: this.handleToggle,
                              onScroll: this.handleMenuScroll,
                              onFocus: this.handleMenuFocus,
                              onBlur: this.handleMenuBlur,
                              onKeyup: this.handleMenuKeyup,
                              onKeydown: this.handleMenuKeydown,
                              onTabOut: this.handleMenuTabOut,
                              onMousedown: this.handleMenuMousedown,
                              show: this.mergedShow
                            }),
                            $slots
                          ),
                          this.displayDirective === 'show'
                            ? [
                                [vue_1.vShow, this.mergedShow],
                                [
                                  vdirs_1.clickoutside,
                                  this.handleMenuClickOutside
                                ]
                              ]
                            : [
                                [
                                  vdirs_1.clickoutside,
                                  this.handleMenuClickOutside
                                ]
                              ]
                        )
                      )
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