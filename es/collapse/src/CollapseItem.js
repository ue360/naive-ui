import { h, defineComponent, inject, computed, renderSlot } from 'vue'
import { createId } from 'seemly'
import { useMemo } from 'vooks'
import { ChevronRightIcon as ArrowIcon } from '../../_internal/icons'
import { NBaseIcon } from '../../_internal'
import { throwError } from '../../_utils'
import { collapseInjectionKey } from './Collapse'
import NCollapseItemContent from './CollapseItemContent'
const collapseItemProps = {
  title: String,
  name: [String, Number],
  displayDirective: String
}
export default defineComponent({
  name: 'CollapseItem',
  props: collapseItemProps,
  setup(props) {
    const randomName = createId()
    const mergedNameRef = useMemo(() => {
      var _a
      return (_a = props.name) !== null && _a !== void 0 ? _a : randomName
    })
    const NCollapse = inject(collapseInjectionKey)
    if (!NCollapse) {
      throwError(
        'collapse-item',
        '`n-collapse-item` must be placed inside `n-collapse`.'
      )
    }
    const {
      expandedNamesRef,
      props: collapseProps,
      mergedClsPrefixRef,
      slots: collapseSlots
    } = NCollapse
    const collapsedRef = computed(() => {
      const { value: expandedNames } = expandedNamesRef
      if (Array.isArray(expandedNames)) {
        const { value: name } = mergedNameRef
        return !~expandedNames.findIndex(
          (expandedName) => expandedName === name
        )
      } else if (expandedNames) {
        const { value: name } = mergedNameRef
        return name !== expandedNames
      }
      return true
    })
    return {
      collapseSlots,
      randomName,
      mergedClsPrefix: mergedClsPrefixRef,
      collapsed: collapsedRef,
      mergedDisplayDirective: computed(() => {
        const { displayDirective } = props
        if (displayDirective) {
          return displayDirective
        } else {
          return collapseProps.displayDirective
        }
      }),
      arrowPlacement: computed(() => {
        return collapseProps.arrowPlacement
      }),
      handleClick(e) {
        if (NCollapse) {
          NCollapse.toggleItem(collapsedRef.value, mergedNameRef.value, e)
        }
      }
    }
  },
  render() {
    const {
      collapseSlots,
      $slots,
      arrowPlacement,
      collapsed,
      title,
      mergedDisplayDirective,
      mergedClsPrefix
    } = this
    const headerNode = renderSlot($slots, 'header', undefined, () => [title])
    const headerExtraSlot =
      $slots['header-extra'] || collapseSlots['header-extra']
    return h(
      'div',
      {
        class: [
          `${mergedClsPrefix}-collapse-item`,
          `${mergedClsPrefix}-collapse-item--${arrowPlacement}-arrow-placement`,
          !collapsed && `${mergedClsPrefix}-collapse-item--active`
        ]
      },
      h(
        'div',
        {
          class: [
            `${mergedClsPrefix}-collapse-item__header`,
            !collapsed && `${mergedClsPrefix}-collapse-item__header--active`
          ]
        },
        h(
          'div',
          {
            class: `${mergedClsPrefix}-collapse-item__header-main`,
            onClick: this.handleClick
          },
          arrowPlacement === 'right' && headerNode,
          h(
            'div',
            { class: `${mergedClsPrefix}-collapse-item-arrow` },
            renderSlot(
              $slots.arrow
                ? $slots
                : collapseSlots.arrow
                ? collapseSlots
                : $slots,
              'arrow',
              { collapsed: collapsed },
              () => {
                var _a
                return [
                  h(
                    NBaseIcon,
                    { clsPrefix: mergedClsPrefix },
                    {
                      default:
                        (_a = collapseSlots.expandIcon) !== null &&
                        _a !== void 0
                          ? _a
                          : () => h(ArrowIcon, null)
                    }
                  )
                ]
              }
            )
          ),
          arrowPlacement === 'left' && headerNode
        ),
        headerExtraSlot &&
          h(
            'div',
            {
              class: `${mergedClsPrefix}-collapse-item__header-extra`,
              onClick: this.handleClick
            },
            { default: headerExtraSlot }
          )
      ),
      h(
        NCollapseItemContent,
        {
          clsPrefix: mergedClsPrefix,
          displayDirective: mergedDisplayDirective,
          show: !collapsed
        },
        $slots
      )
    )
  }
})