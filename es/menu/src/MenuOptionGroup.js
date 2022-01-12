import { h, defineComponent, provide, Fragment, inject } from 'vue'
import { render } from '../../_utils'
import { useMenuChild, useMenuChildProps } from './use-menu-child'
import { itemRenderer } from './utils'
import { submenuInjectionKey } from './Submenu'
import { menuInjectionKey } from './Menu'
export const menuItemGroupProps = Object.assign(
  Object.assign({}, useMenuChildProps),
  {
    tmNodes: {
      type: Array,
      required: true
    }
  }
)
export const menuItemGroupInjectionKey = Symbol('menu-item-group')
export default defineComponent({
  name: 'MenuOptionGroup',
  props: menuItemGroupProps,
  setup(props) {
    provide(submenuInjectionKey, null)
    const MenuChild = useMenuChild(props)
    provide(menuItemGroupInjectionKey, {
      paddingLeftRef: MenuChild.paddingLeft
    })
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    const { mergedClsPrefixRef, props: menuProps } = inject(menuInjectionKey)
    return function () {
      const { value: mergedClsPrefix } = mergedClsPrefixRef
      const paddingLeft = MenuChild.paddingLeft.value
      return h(
        'div',
        { class: `${mergedClsPrefix}-menu-item-group`, role: 'group' },
        h(
          'span',
          {
            class: `${mergedClsPrefix}-menu-item-group-title`,
            style:
              paddingLeft !== undefined
                ? `padding-left: ${paddingLeft}px;`
                : undefined
          },
          render(props.title),
          props.extra ? h(Fragment, null, ' ', render(props.extra)) : null
        ),
        h(
          'div',
          null,
          props.tmNodes.map((tmNode) => itemRenderer(tmNode, menuProps))
        )
      )
    }
  }
})
