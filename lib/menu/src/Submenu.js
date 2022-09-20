'use strict'
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod }
  }
Object.defineProperty(exports, '__esModule', { value: true })
exports.submenuInjectionKey = exports.submenuProps = void 0
const vue_1 = require('vue')
const vooks_1 = require('vooks')
const _internal_1 = require('../../_internal')
const dropdown_1 = require('../../dropdown')
const MenuOptionContent_1 = __importDefault(require('./MenuOptionContent'))
const utils_1 = require('./utils')
const use_menu_child_1 = require('./use-menu-child')
const MenuOptionGroup_1 = require('./MenuOptionGroup')
exports.submenuProps = Object.assign(
  Object.assign({}, use_menu_child_1.useMenuChildProps),
  {
    rawNodes: {
      type: Array,
      default: () => []
    },
    tmNodes: {
      type: Array,
      default: () => []
    },
    tmNode: {
      type: Object,
      required: true
    },
    disabled: {
      type: Boolean,
      default: false
    },
    icon: Function,
    onClick: Function
  }
)
exports.submenuInjectionKey = Symbol('submenu')
exports.default = (0, vue_1.defineComponent)({
  name: 'Submenu',
  props: exports.submenuProps,
  setup(props) {
    const MenuChild = (0, use_menu_child_1.useMenuChild)(props)
    const { NMenu, NSubmenu } = MenuChild
    const { props: menuProps, mergedCollapsedRef } = NMenu
    const mergedDisabledRef = (0, vue_1.computed)(() => {
      const { disabled } = props
      if (
        NSubmenu === null || NSubmenu === void 0
          ? void 0
          : NSubmenu.mergedDisabledRef.value
      )
        return true
      if (menuProps.disabled) return true
      return disabled
    })
    const dropdownShowRef = (0, vue_1.ref)(false)
    ;(0, vue_1.provide)(exports.submenuInjectionKey, {
      paddingLeftRef: MenuChild.paddingLeft,
      mergedDisabledRef
    })
    ;(0, vue_1.provide)(MenuOptionGroup_1.menuItemGroupInjectionKey, null)
    function doClick() {
      const { onClick } = props
      if (onClick) onClick()
    }
    function handleClick() {
      if (!mergedDisabledRef.value) {
        if (!mergedCollapsedRef.value) {
          NMenu.toggleExpand(props.internalKey)
        }
        doClick()
      }
    }
    function handlePopoverShowChange(value) {
      dropdownShowRef.value = value
    }
    return {
      menuProps,
      doSelect: NMenu.doSelect,
      inverted: NMenu.invertedRef,
      isHorizontal: NMenu.isHorizontalRef,
      mergedClsPrefix: NMenu.mergedClsPrefixRef,
      maxIconSize: MenuChild.maxIconSize,
      activeIconSize: MenuChild.activeIconSize,
      iconMarginRight: MenuChild.iconMarginRight,
      dropdownPlacement: MenuChild.dropdownPlacement,
      dropdownShow: dropdownShowRef,
      paddingLeft: MenuChild.paddingLeft,
      mergedDisabled: mergedDisabledRef,
      mergedValue: NMenu.mergedValueRef,
      childActive: (0, vooks_1.useMemo)(() => {
        return NMenu.activePathRef.value.includes(props.internalKey)
      }),
      collapsed: (0, vue_1.computed)(() => {
        if (menuProps.mode === 'horizontal') return false
        if (mergedCollapsedRef.value) {
          return true
        }
        return !NMenu.mergedExpandedKeysRef.value.includes(props.internalKey)
      }),
      dropdownEnabled: (0, vue_1.computed)(() => {
        return (
          !mergedDisabledRef.value &&
          (menuProps.mode === 'horizontal' || mergedCollapsedRef.value)
        )
      }),
      handlePopoverShowChange,
      handleClick
    }
  },
  render() {
    var _a
    const {
      mergedClsPrefix,
      menuProps: { renderIcon, renderLabel }
    } = this
    const createSubmenuItem = () => {
      const {
        isHorizontal,
        paddingLeft,
        collapsed,
        mergedDisabled,
        maxIconSize,
        activeIconSize,
        title,
        childActive,
        icon,
        handleClick,
        dropdownShow,
        iconMarginRight,
        tmNode
      } = this
      return (0, vue_1.h)(MenuOptionContent_1.default, {
        tmNode: tmNode,
        paddingLeft: paddingLeft,
        collapsed: collapsed,
        disabled: mergedDisabled,
        iconMarginRight: iconMarginRight,
        maxIconSize: maxIconSize,
        activeIconSize: activeIconSize,
        title: title,
        showArrow: !isHorizontal,
        childActive: childActive,
        clsPrefix: mergedClsPrefix,
        icon: icon,
        hover: dropdownShow,
        onClick: handleClick
      })
    }
    const createSubmenuChildren = () => {
      return (0, vue_1.h)(_internal_1.NFadeInExpandTransition, null, {
        default: () => {
          const { tmNodes, collapsed } = this
          return !collapsed
            ? (0, vue_1.h)(
                'div',
                { class: `${mergedClsPrefix}-submenu-children`, role: 'menu' },
                tmNodes.map((item) =>
                  (0, utils_1.itemRenderer)(item, this.menuProps)
                )
              )
            : null
        }
      })
    }
    return this.root
      ? (0, vue_1.h)(
          dropdown_1.NDropdown,
          Object.assign(
            {},
            (_a = this.menuProps) === null || _a === void 0
              ? void 0
              : _a.dropdownProps,
            {
              builtinThemeOverrides: {
                fontSizeLarge: '14px',
                optionIconSizeLarge: '18px'
              },
              value: this.mergedValue,
              size: 'large',
              trigger: 'hover',
              disabled: !this.dropdownEnabled,
              placement: this.dropdownPlacement,
              keyField: this.menuProps.keyField,
              labelField: this.menuProps.labelField,
              childrenField: this.menuProps.childrenField,
              onUpdateShow: this.handlePopoverShowChange,
              options: this.rawNodes,
              onSelect: this.doSelect,
              inverted: this.inverted,
              renderIcon: renderIcon,
              renderLabel: renderLabel
            }
          ),
          {
            default: () =>
              (0, vue_1.h)(
                'div',
                {
                  class: `${mergedClsPrefix}-submenu`,
                  role: 'menuitem',
                  'aria-expanded': !this.collapsed
                },
                createSubmenuItem(),
                this.isHorizontal ? null : createSubmenuChildren()
              )
          }
        )
      : (0, vue_1.h)(
          'div',
          {
            class: `${mergedClsPrefix}-submenu`,
            role: 'menuitem',
            'aria-expanded': !this.collapsed
          },
          createSubmenuItem(),
          createSubmenuChildren()
        )
  }
})