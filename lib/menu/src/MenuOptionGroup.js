'use strict'
Object.defineProperty(exports, '__esModule', { value: true })
exports.menuItemGroupInjectionKey = exports.menuItemGroupProps = void 0
const vue_1 = require('vue')
const _utils_1 = require('../../_utils')
const use_menu_child_1 = require('./use-menu-child')
const utils_1 = require('./utils')
const Submenu_1 = require('./Submenu')
const Menu_1 = require('./Menu')
exports.menuItemGroupProps = Object.assign(
  Object.assign({}, use_menu_child_1.useMenuChildProps),
  {
    tmNodes: {
      type: Array,
      required: true
    }
  }
)
exports.menuItemGroupInjectionKey = Symbol('menu-item-group')
exports.default = (0, vue_1.defineComponent)({
  name: 'MenuOptionGroup',
  props: exports.menuItemGroupProps,
  setup(props) {
    ;(0, vue_1.provide)(Submenu_1.submenuInjectionKey, null)
    const MenuChild = (0, use_menu_child_1.useMenuChild)(props)
    ;(0, vue_1.provide)(exports.menuItemGroupInjectionKey, {
      paddingLeftRef: MenuChild.paddingLeft
    })
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    const { mergedClsPrefixRef, props: menuProps } = (0, vue_1.inject)(
      Menu_1.menuInjectionKey
    )
    return function () {
      const { value: mergedClsPrefix } = mergedClsPrefixRef
      const paddingLeft = MenuChild.paddingLeft.value
      return (0, vue_1.h)(
        'div',
        { class: `${mergedClsPrefix}-menu-item-group`, role: 'group' },
        (0, vue_1.h)(
          'span',
          {
            class: `${mergedClsPrefix}-menu-item-group-title`,
            style:
              paddingLeft !== undefined
                ? `padding-left: ${paddingLeft}px;`
                : undefined
          },
          (0, _utils_1.render)(props.title),
          props.extra
            ? (0, vue_1.h)(
                vue_1.Fragment,
                null,
                ' ',
                (0, _utils_1.render)(props.extra)
              )
            : null
        ),
        (0, vue_1.h)(
          'div',
          null,
          props.tmNodes.map((tmNode) =>
            (0, utils_1.itemRenderer)(tmNode, menuProps)
          )
        )
      )
    }
  }
})