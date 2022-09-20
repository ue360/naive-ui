'use strict'
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod }
  }
Object.defineProperty(exports, '__esModule', { value: true })
const vue_1 = require('vue')
const vueuc_1 = require('vueuc')
const lodash_1 = require('lodash')
const vooks_1 = require('vooks')
const _mixins_1 = require('../../_mixins')
const _utils_1 = require('../../_utils')
const styles_1 = require('../styles')
const interface_1 = require('./interface')
const index_cssr_1 = __importDefault(require('./styles/index.cssr'))
const Tab_1 = __importDefault(require('./Tab'))
const tabsProps = Object.assign(Object.assign({}, _mixins_1.useTheme.props), {
  value: [String, Number],
  defaultValue: [String, Number],
  type: {
    type: String,
    default: 'bar'
  },
  closable: Boolean,
  justifyContent: String,
  size: {
    type: String,
    default: 'medium'
  },
  tabStyle: [String, Object],
  paneClass: String,
  paneStyle: [String, Object],
  addable: [Boolean, Object],
  tabsPadding: {
    type: Number,
    default: 0
  },
  onBeforeLeave: Function,
  onAdd: Function,
  'onUpdate:value': [Function, Array],
  onUpdateValue: [Function, Array],
  onClose: [Function, Array],
  // deprecated
  labelSize: String,
  activeName: [String, Number],
  onActiveNameChange: [Function, Array]
})
exports.default = (0, vue_1.defineComponent)({
  name: 'Tabs',
  props: tabsProps,
  setup(props, { slots }) {
    var _a, _b
    if (process.env.NODE_ENV !== 'production') {
      ;(0, vue_1.watchEffect)(() => {
        if (props.labelSize !== undefined) {
          ;(0, _utils_1.warnOnce)(
            'tabs',
            '`label-size` is deprecated, please use `size` instead.'
          )
        }
        if (props.activeName !== undefined) {
          ;(0, _utils_1.warnOnce)(
            'tabs',
            '`active-name` is deprecated, please use `value` instead.'
          )
        }
        if (props.onActiveNameChange !== undefined) {
          ;(0, _utils_1.warnOnce)(
            'tabs',
            '`on-active-name-change` is deprecated, please use `on-update:value` instead.'
          )
        }
      })
    }
    const { mergedClsPrefixRef } = (0, _mixins_1.useConfig)(props)
    const themeRef = (0, _mixins_1.useTheme)(
      'Tabs',
      'Tabs',
      index_cssr_1.default,
      styles_1.tabsLight,
      props,
      mergedClsPrefixRef
    )
    const tabsElRef = (0, vue_1.ref)(null)
    const barElRef = (0, vue_1.ref)(null)
    const scrollWrapperElRef = (0, vue_1.ref)(null)
    const addTabInstRef = (0, vue_1.ref)(null)
    const xScrollInstRef = (0, vue_1.ref)(null)
    const leftReachedRef = (0, vue_1.ref)(true)
    const rightReachedRef = (0, vue_1.ref)(true)
    const compitableSizeRef = (0, vooks_1.useCompitable)(props, [
      'labelSize',
      'size'
    ])
    const compitableValueRef = (0, vooks_1.useCompitable)(props, [
      'activeName',
      'value'
    ])
    const uncontrolledValueRef = (0, vue_1.ref)(
      (_b =
        (_a = compitableValueRef.value) !== null && _a !== void 0
          ? _a
          : props.defaultValue) !== null && _b !== void 0
        ? _b
        : slots.default
        ? (0, _utils_1.flatten)(slots.default())[0].props.name
        : null
    )
    const mergedValueRef = (0, vooks_1.useMergedState)(
      compitableValueRef,
      uncontrolledValueRef
    )
    const tabChangeIdRef = { id: 0 }
    ;(0, vue_1.watch)(mergedValueRef, () => {
      tabChangeIdRef.id = 0
    })
    const tabWrapperStyleRef = (0, vue_1.computed)(() => {
      if (!props.justifyContent || props.type === 'card') return undefined
      return {
        display: 'flex',
        justifyContent: props.justifyContent
      }
    })
    ;(0, vue_1.watch)(mergedValueRef, () => {
      updateCurrentBarStyle()
    })
    function getCurrentEl() {
      var _a
      const { value } = mergedValueRef
      if (value === null) return null
      const tabEl =
        (_a = tabsElRef.value) === null || _a === void 0
          ? void 0
          : _a.querySelector(`[data-name="${value}"]`)
      return tabEl
    }
    function updateBarStyle(tabEl) {
      if (props.type === 'card') return
      const { value: barEl } = barElRef
      if (!barEl) return
      if (tabEl) {
        const disabledClassName = `${mergedClsPrefixRef.value}-tabs-bar--disabled`
        if (tabEl.dataset.disabled === 'true') {
          barEl.classList.add(disabledClassName)
        } else {
          barEl.classList.remove(disabledClassName)
        }
        barEl.style.left = `${tabEl.offsetLeft}px`
        barEl.style.width = '8192px'
        barEl.style.maxWidth = `${tabEl.offsetWidth + 1}px`
      }
    }
    function updateCurrentBarStyle() {
      if (props.type === 'card') return
      const tabEl = getCurrentEl()
      if (tabEl) {
        updateBarStyle(tabEl)
      }
    }
    function handleTabClick(panelName) {
      doUpdateValue(panelName)
    }
    function doUpdateValue(panelName) {
      const {
        onActiveNameChange,
        onUpdateValue,
        'onUpdate:value': _onUpdateValue
      } = props
      if (onActiveNameChange) {
        ;(0, _utils_1.call)(onActiveNameChange, panelName)
      }
      if (onUpdateValue) (0, _utils_1.call)(onUpdateValue, panelName)
      if (_onUpdateValue) (0, _utils_1.call)(_onUpdateValue, panelName)
      uncontrolledValueRef.value = panelName
    }
    function handleClose(panelName) {
      const { onClose } = props
      if (onClose) (0, _utils_1.call)(onClose, panelName)
    }
    let firstTimeUpdatePosition = true
    const handleNavResize = (0, lodash_1.throttle)(function handleNavResize() {
      var _a
      const { type } = props
      if (
        (type === 'line' || type === 'bar') &&
        (firstTimeUpdatePosition || props.justifyContent)
      ) {
        const { value: barEl } = barElRef
        if (!barEl) return
        if (!firstTimeUpdatePosition) firstTimeUpdatePosition = false
        const disableTransitionClassName = `${mergedClsPrefixRef.value}-tabs-bar--transition-disabled`
        barEl.classList.add(disableTransitionClassName)
        updateCurrentBarStyle()
        // here we don't need to force layout after update bar style
        // since deriveScrollShadow will force layout
        barEl.classList.remove(disableTransitionClassName)
      }
      if (type !== 'segment') {
        deriveScrollShadow(
          (_a = xScrollInstRef.value) === null || _a === void 0
            ? void 0
            : _a.$el
        )
      }
    }, 64)
    const addTabFixedRef = (0, vue_1.ref)(false)
    function _handleTabsResize(entry) {
      var _a
      const {
        target,
        contentRect: { width }
      } = entry
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const containerWidth = target.parentElement.offsetWidth
      if (!addTabFixedRef.value) {
        if (containerWidth < width) {
          addTabFixedRef.value = true
        }
      } else {
        const { value: addTabInst } = addTabInstRef
        if (!addTabInst) return
        if (containerWidth - width > addTabInst.$el.offsetWidth) {
          addTabFixedRef.value = false
        }
      }
      deriveScrollShadow(
        (_a = xScrollInstRef.value) === null || _a === void 0 ? void 0 : _a.$el
      )
    }
    const handleTabsResize = (0, lodash_1.throttle)(_handleTabsResize, 64)
    function handleAdd() {
      const { onAdd } = props
      if (onAdd) onAdd()
      void (0, vue_1.nextTick)(() => {
        const currentEl = getCurrentEl()
        const { value: xScrollInst } = xScrollInstRef
        if (!currentEl || !xScrollInst) return
        xScrollInst.scrollTo({
          left: currentEl.offsetLeft,
          top: 0,
          behavior: 'smooth'
        })
      })
    }
    function deriveScrollShadow(el) {
      if (!el) return
      const { scrollLeft, scrollWidth, offsetWidth } = el
      leftReachedRef.value = scrollLeft <= 0
      rightReachedRef.value = scrollLeft + offsetWidth >= scrollWidth
    }
    const handleScroll = (0, lodash_1.throttle)((e) => {
      deriveScrollShadow(e.target)
    }, 64)
    ;(0, vue_1.provide)(interface_1.tabsInjectionKey, {
      tabStyleRef: (0, vue_1.toRef)(props, 'tabStyle'),
      paneClassRef: (0, vue_1.toRef)(props, 'paneClass'),
      paneStyleRef: (0, vue_1.toRef)(props, 'paneStyle'),
      mergedClsPrefixRef,
      typeRef: (0, vue_1.toRef)(props, 'type'),
      closableRef: (0, vue_1.toRef)(props, 'closable'),
      valueRef: mergedValueRef,
      tabChangeIdRef,
      onBeforeLeaveRef: (0, vue_1.toRef)(props, 'onBeforeLeave'),
      handleTabClick,
      handleClose,
      handleAdd
    })
    ;(0, vooks_1.onFontsReady)(() => {
      updateCurrentBarStyle()
    })
    // avoid useless rerender
    ;(0, vue_1.watchEffect)(() => {
      const { value: el } = scrollWrapperElRef
      if (!el) return
      const { value: clsPrefix } = mergedClsPrefixRef
      const shadowBeforeClass = `${clsPrefix}-tabs-nav-scroll-wrapper--shadow-before`
      const shadowAfterClass = `${clsPrefix}-tabs-nav-scroll-wrapper--shadow-after`
      if (leftReachedRef.value) {
        el.classList.remove(shadowBeforeClass)
      } else {
        el.classList.add(shadowBeforeClass)
      }
      if (rightReachedRef.value) {
        el.classList.remove(shadowAfterClass)
      } else {
        el.classList.add(shadowAfterClass)
      }
    })
    return {
      mergedClsPrefix: mergedClsPrefixRef,
      mergedValue: mergedValueRef,
      renderedNames: new Set(),
      tabsElRef,
      barElRef,
      addTabInstRef,
      xScrollInstRef,
      scrollWrapperElRef,
      addTabFixed: addTabFixedRef,
      tabWrapperStyle: tabWrapperStyleRef,
      handleNavResize,
      mergedSize: compitableSizeRef,
      handleScroll,
      handleTabsResize,
      cssVars: (0, vue_1.computed)(() => {
        const { value: size } = compitableSizeRef
        const { type } = props
        const typeSuffix = {
          card: 'Card',
          bar: 'Bar',
          line: 'Line',
          segment: 'Segment'
        }[type]
        const sizeType = `${size}${typeSuffix}`
        const {
          self: {
            barColor,
            closeColor,
            closeColorHover,
            closeColorPressed,
            tabColor,
            tabBorderColor,
            paneTextColor,
            tabFontWeight,
            tabBorderRadius,
            tabFontWeightActive,
            colorSegment,
            fontWeightStrong,
            tabColorSegment,
            [(0, _utils_1.createKey)('panePadding', size)]: panePadding,
            [(0, _utils_1.createKey)('tabPadding', sizeType)]: tabPadding,
            [(0, _utils_1.createKey)('tabGap', sizeType)]: tabGap,
            [(0, _utils_1.createKey)('tabTextColor', type)]: tabTextColor,
            [(0, _utils_1.createKey)('tabTextColorActive', type)]:
              tabTextColorActive,
            [(0, _utils_1.createKey)('tabTextColorHover', type)]:
              tabTextColorHover,
            [(0, _utils_1.createKey)('tabTextColorDisabled', type)]:
              tabTextColorDisabled,
            [(0, _utils_1.createKey)('tabFontSize', size)]: tabFontSize
          },
          common: { cubicBezierEaseInOut }
        } = themeRef.value
        return {
          '--bezier': cubicBezierEaseInOut,
          '--color-segment': colorSegment,
          '--bar-color': barColor,
          '--tab-font-size': tabFontSize,
          '--tab-text-color': tabTextColor,
          '--tab-text-color-active': tabTextColorActive,
          '--tab-text-color-disabled': tabTextColorDisabled,
          '--tab-text-color-hover': tabTextColorHover,
          '--pane-text-color': paneTextColor,
          '--tab-border-color': tabBorderColor,
          '--tab-border-radius': tabBorderRadius,
          '--close-color': closeColor,
          '--close-color-hover': closeColorHover,
          '--close-color-pressed': closeColorPressed,
          '--tab-color': tabColor,
          '--tab-font-weight': tabFontWeight,
          '--tab-font-weight-active': tabFontWeightActive,
          '--tab-padding': tabPadding,
          '--tab-gap': tabGap,
          '--pane-padding': panePadding,
          '--font-weight-strong': fontWeightStrong,
          '--tab-color-segment': tabColorSegment
        }
      })
    }
  },
  render() {
    const {
      mergedClsPrefix,
      type,
      addTabFixed,
      addable,
      mergedSize,
      $slots: { default: defaultSlot, prefix: prefixSlot, suffix: suffixSlot }
    } = this
    const tabPaneChildren = defaultSlot
      ? (0, _utils_1.flatten)(defaultSlot()).filter((v) => {
          return v.type.__TAB_PANE__ === true
        })
      : []
    const tabChildren = defaultSlot
      ? (0, _utils_1.flatten)(defaultSlot()).filter((v) => {
          return v.type.__TAB__ === true
        })
      : []
    const showPane = !tabChildren.length
    const prefix = prefixSlot ? prefixSlot() : null
    const suffix = suffixSlot ? suffixSlot() : null
    const isCard = type === 'card'
    const isSegment = type === 'segment'
    const mergedJustifyContent = !isCard && !isSegment && this.justifyContent
    return (0, vue_1.h)(
      'div',
      {
        class: [
          `${mergedClsPrefix}-tabs`,
          `${mergedClsPrefix}-tabs--${type}-type`,
          `${mergedClsPrefix}-tabs--${mergedSize}-size`,
          mergedJustifyContent && `${mergedClsPrefix}-tabs--flex`
        ],
        style: this.cssVars
      },
      (0, vue_1.h)(
        'div',
        {
          class: [
            // the class should be applied here since it's possible
            // to make tabs nested in tabs, style may influence each
            // other. adding a class will make it easy to write the
            // style.
            `${mergedClsPrefix}-tabs-nav--${type}-type`,
            `${mergedClsPrefix}-tabs-nav`
          ]
        },
        prefix
          ? (0, vue_1.h)(
              'div',
              { class: `${mergedClsPrefix}-tabs-nav__prefix` },
              prefix
            )
          : null,
        isSegment
          ? (0, vue_1.h)(
              'div',
              { class: `${mergedClsPrefix}-tabs-rail` },
              showPane
                ? tabPaneChildren.map((tabPaneVNode, index) => {
                    return (0, vue_1.h)(
                      Tab_1.default,
                      Object.assign({}, tabPaneVNode.props, {
                        internalLeftPadded: index !== 0
                      }),
                      tabPaneVNode.children
                        ? {
                            default: tabPaneVNode.children.tab
                          }
                        : undefined
                    )
                  })
                : tabChildren.map((tabVNode, index) => {
                    if (index === 0) {
                      return tabVNode
                    } else {
                      return createLeftPaddedTabVNode(tabVNode)
                    }
                  })
            )
          : (0, vue_1.h)(
              vueuc_1.VResizeObserver,
              { onResize: this.handleNavResize },
              {
                default: () =>
                  (0, vue_1.h)(
                    'div',
                    {
                      class: `${mergedClsPrefix}-tabs-nav-scroll-wrapper`,
                      ref: 'scrollWrapperElRef'
                    },
                    (0, vue_1.h)(
                      vueuc_1.VXScroll,
                      { ref: 'xScrollInstRef', onScroll: this.handleScroll },
                      {
                        default: () => {
                          const rawWrappedTabs = (0, vue_1.h)(
                            'div',
                            {
                              style: this.tabWrapperStyle,
                              class: `${mergedClsPrefix}-tabs-wrapper`
                            },
                            mergedJustifyContent
                              ? null
                              : (0, vue_1.h)('div', {
                                  class: `${mergedClsPrefix}-tabs-scroll-padding`,
                                  style: { width: `${this.tabsPadding}px` }
                                }),
                            showPane
                              ? tabPaneChildren.map((tabPaneVNode, index) => {
                                  return (0, vue_1.h)(
                                    Tab_1.default,
                                    Object.assign({}, tabPaneVNode.props, {
                                      internalLeftPadded:
                                        index !== 0 && !mergedJustifyContent
                                    }),
                                    tabPaneVNode.children
                                      ? {
                                          default: tabPaneVNode.children.tab
                                        }
                                      : undefined
                                  )
                                })
                              : tabChildren.map((tabVNode, index) => {
                                  if (index !== 0 && !mergedJustifyContent) {
                                    return createLeftPaddedTabVNode(tabVNode)
                                  } else {
                                    return tabVNode
                                  }
                                }),
                            !addTabFixed && addable && isCard
                              ? createAddTag(
                                  addable,
                                  (showPane
                                    ? tabPaneChildren.length
                                    : tabChildren.length) !== 0
                                )
                              : null,
                            mergedJustifyContent
                              ? null
                              : (0, vue_1.h)('div', {
                                  class: `${mergedClsPrefix}-tabs-scroll-padding`,
                                  style: { width: `${this.tabsPadding}px` }
                                })
                          )
                          let wrappedTabs = rawWrappedTabs
                          if (isCard && addable) {
                            wrappedTabs = (0, vue_1.h)(
                              vueuc_1.VResizeObserver,
                              { onResize: this.handleTabsResize },
                              {
                                default: () => rawWrappedTabs
                              }
                            )
                          }
                          return (0, vue_1.h)(
                            'div',
                            {
                              ref: 'tabsElRef',
                              class: `${mergedClsPrefix}-tabs-nav-scroll-content`
                            },
                            wrappedTabs,
                            isCard
                              ? (0, vue_1.h)('div', {
                                  class: `${mergedClsPrefix}-tabs-pad`
                                })
                              : null,
                            isCard
                              ? null
                              : (0, vue_1.h)('div', {
                                  ref: 'barElRef',
                                  class: `${mergedClsPrefix}-tabs-bar`
                                })
                          )
                        }
                      }
                    )
                  )
              }
            ),
        addTabFixed && addable && isCard ? createAddTag(addable, true) : null,
        suffix
          ? (0, vue_1.h)(
              'div',
              { class: `${mergedClsPrefix}-tabs-nav__suffix` },
              suffix
            )
          : null
      ),
      showPane &&
        filterMapTabPanes(tabPaneChildren, this.mergedValue, this.renderedNames)
    )
  }
})
function filterMapTabPanes(tabPaneVNodes, value, renderedNames) {
  const children = []
  tabPaneVNodes.forEach((vNode) => {
    const {
      name,
      displayDirective,
      'display-directive': _displayDirective
    } = vNode.props
    const matchDisplayDirective = (directive) =>
      displayDirective === directive || _displayDirective === directive
    const show = value === name
    if (vNode.key !== undefined) {
      vNode.key = name
    }
    if (
      show ||
      matchDisplayDirective('show') ||
      (matchDisplayDirective('show:lazy') && renderedNames.has(name))
    ) {
      if (!renderedNames.has(name)) {
        renderedNames.add(name)
      }
      const useVShow = !matchDisplayDirective('if')
      children.push(
        useVShow
          ? (0, vue_1.withDirectives)(vNode, [[vue_1.vShow, show]])
          : vNode
      )
    }
  })
  return children
}
function createAddTag(addable, internalLeftPadded) {
  return (0, vue_1.h)(Tab_1.default, {
    ref: 'addTabInstRef',
    key: '__addable',
    name: '__addable',
    internalAddable: true,
    internalLeftPadded: internalLeftPadded,
    disabled: typeof addable === 'object' && addable.disabled
  })
}
function createLeftPaddedTabVNode(tabVNode) {
  const modifiedVNode = (0, vue_1.cloneVNode)(tabVNode)
  if (modifiedVNode.props) {
    modifiedVNode.props.internalLeftPadded = true
  } else {
    modifiedVNode.props = {
      internalLeftPadded: true
    }
  }
  return modifiedVNode
}