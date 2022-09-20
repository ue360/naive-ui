import {
  h,
  computed,
  inject,
  ref,
  Transition,
  defineComponent,
  provide,
  mergeProps
} from 'vue'
import { VBinder, VTarget, VFollower } from 'vueuc'
import { useMemo } from 'vooks'
import { ChevronRightIcon } from '../../_internal/icons'
import { render, useDeferredTrue } from '../../_utils'
import { NIcon } from '../../icon'
import NDropdownMenu, { dropdownMenuInjectionKey } from './DropdownMenu'
import { dropdownInjectionKey } from './Dropdown'
import { isSubmenuNode } from './utils'
import { happensIn } from 'seemly'
const dropdownOptionInjectionKey = Symbol('dropdown-option')
export default defineComponent({
  name: 'DropdownOption',
  props: {
    clsPrefix: {
      type: String,
      required: true
    },
    tmNode: {
      type: Object,
      required: true
    },
    parentKey: {
      type: [String, Number],
      default: null
    },
    placement: {
      type: String,
      default: 'right-start'
    },
    props: Object
  },
  setup(props) {
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    const NDropdown = inject(dropdownInjectionKey)
    const {
      hoverKeyRef,
      keyboardKeyRef,
      lastToggledSubmenuKeyRef,
      pendingKeyPathRef,
      activeKeyPathRef,
      animatedRef,
      mergedShowRef,
      renderLabelRef,
      renderIconRef,
      labelFieldRef,
      childrenFieldRef
    } = NDropdown
    const NDropdownOption = inject(dropdownOptionInjectionKey, null)
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    const NDropdownMenu = inject(dropdownMenuInjectionKey)
    const rawNodeRef = computed(() => props.tmNode.rawNode)
    const hasSubmenuRef = computed(() => {
      const { value: childrenField } = childrenFieldRef
      return isSubmenuNode(props.tmNode.rawNode, childrenField)
    })
    const mergedDisabledRef = computed(() => {
      const { disabled } = props.tmNode
      return disabled
    })
    const showSubmenuRef = computed(() => {
      if (!hasSubmenuRef.value) return false
      const { key, disabled } = props.tmNode
      if (disabled) return false
      const { value: hoverKey } = hoverKeyRef
      const { value: keyboardKey } = keyboardKeyRef
      const { value: lastToggledSubmenuKey } = lastToggledSubmenuKeyRef
      const { value: pendingKeyPath } = pendingKeyPathRef
      if (hoverKey !== null) return pendingKeyPath.includes(key)
      if (keyboardKey !== null) {
        return (
          pendingKeyPath.includes(key) &&
          pendingKeyPath[pendingKeyPath.length - 1] !== key
        )
      }
      if (lastToggledSubmenuKey !== null) return pendingKeyPath.includes(key)
      return false
    })
    const shouldDelayRef = computed(() => {
      return keyboardKeyRef.value === null && !animatedRef.value
    })
    const deferredShowSubmenuRef = useDeferredTrue(
      showSubmenuRef,
      300,
      shouldDelayRef
    )
    const parentEnteringSubmenuRef = computed(() => {
      return !!(NDropdownOption === null || NDropdownOption === void 0
        ? void 0
        : NDropdownOption.enteringSubmenuRef.value)
    })
    const enteringSubmenuRef = ref(false)
    provide(dropdownOptionInjectionKey, {
      enteringSubmenuRef
    })
    // methods
    function handleSubmenuBeforeEnter() {
      enteringSubmenuRef.value = true
    }
    function handleSubmenuAfterEnter() {
      enteringSubmenuRef.value = false
    }
    function handleMouseEnter() {
      const { parentKey, tmNode } = props
      if (!mergedShowRef.value) return
      lastToggledSubmenuKeyRef.value = parentKey
      keyboardKeyRef.value = null
      hoverKeyRef.value = tmNode.key
    }
    function handleMouseMove() {
      const { tmNode } = props
      if (!mergedShowRef.value) return
      if (hoverKeyRef.value === tmNode.key) return
      handleMouseEnter()
    }
    function handleMouseLeave(e) {
      if (!mergedShowRef.value) return
      const { relatedTarget } = e
      if (
        relatedTarget &&
        !happensIn({ target: relatedTarget }, 'dropdownOption')
      ) {
        hoverKeyRef.value = null
      }
    }
    function handleClick() {
      const { value: hasSubmenu } = hasSubmenuRef
      const { tmNode } = props
      if (!mergedShowRef.value) return
      if (!hasSubmenu && !tmNode.disabled) {
        NDropdown.doSelect(tmNode.key, tmNode.rawNode)
        NDropdown.doUpdateShow(false)
      }
    }
    return {
      labelField: labelFieldRef,
      renderLabel: renderLabelRef,
      renderIcon: renderIconRef,
      siblingHasIcon: NDropdownMenu.showIconRef,
      siblingHasSubmenu: NDropdownMenu.hasSubmenuRef,
      animated: animatedRef,
      mergedShowSubmenu: computed(() => {
        return deferredShowSubmenuRef.value && !parentEnteringSubmenuRef.value
      }),
      rawNode: rawNodeRef,
      hasSubmenu: hasSubmenuRef,
      pending: useMemo(() => {
        const { value: pendingKeyPath } = pendingKeyPathRef
        const { key } = props.tmNode
        return pendingKeyPath.includes(key)
      }),
      childActive: useMemo(() => {
        const { value: activeKeyPath } = activeKeyPathRef
        const { key } = props.tmNode
        const index = activeKeyPath.findIndex((k) => key === k)
        if (index === -1) return false
        return index < activeKeyPath.length - 1
      }),
      active: useMemo(() => {
        const { value: activeKeyPath } = activeKeyPathRef
        const { key } = props.tmNode
        const index = activeKeyPath.findIndex((k) => key === k)
        if (index === -1) return false
        return index === activeKeyPath.length - 1
      }),
      mergedDisabled: mergedDisabledRef,
      handleClick,
      handleMouseMove,
      handleMouseEnter,
      handleMouseLeave,
      handleSubmenuBeforeEnter,
      handleSubmenuAfterEnter
    }
  },
  render() {
    var _a
    const {
      animated,
      rawNode,
      mergedShowSubmenu,
      clsPrefix,
      siblingHasIcon,
      siblingHasSubmenu,
      renderLabel,
      renderIcon,
      props
    } = this
    const submenuVNode = mergedShowSubmenu
      ? h(NDropdownMenu, {
          clsPrefix: clsPrefix,
          tmNodes: this.tmNode.children,
          parentKey: this.tmNode.key
        })
      : null
    const builtinProps = {
      class: [
        `${clsPrefix}-dropdown-option-body`,
        this.pending && `${clsPrefix}-dropdown-option-body--pending`,
        this.active && `${clsPrefix}-dropdown-option-body--active`,
        this.childActive && `${clsPrefix}-dropdown-option-body--child-active`,
        this.mergedDisabled && `${clsPrefix}-dropdown-option-body--disabled`
      ],
      onMousemove: this.handleMouseMove,
      onMouseenter: this.handleMouseEnter,
      onMouseleave: this.handleMouseLeave,
      onClick: this.handleClick
    }
    return h(
      'div',
      { class: `${clsPrefix}-dropdown-option` },
      h('div', mergeProps(builtinProps, props), [
        h(
          'div',
          {
            'data-dropdown-option': true,
            class: [
              `${clsPrefix}-dropdown-option-body__prefix`,
              siblingHasIcon &&
                `${clsPrefix}-dropdown-option-body__prefix--show-icon`
            ]
          },
          [renderIcon ? renderIcon(rawNode) : render(rawNode.icon)]
        ),
        h(
          'div',
          {
            'data-dropdown-option': true,
            class: `${clsPrefix}-dropdown-option-body__label`
          },
          renderLabel
            ? renderLabel(rawNode)
            : render(
                (_a = rawNode[this.labelField]) !== null && _a !== void 0
                  ? _a
                  : rawNode.title
              )
        ),
        h(
          'div',
          {
            'data-dropdown-option': true,
            class: [
              `${clsPrefix}-dropdown-option-body__suffix`,
              siblingHasSubmenu &&
                `${clsPrefix}-dropdown-option-body__suffix--has-submenu`
            ]
          },
          this.hasSubmenu
            ? h(NIcon, null, {
                default: () => h(ChevronRightIcon, null)
              })
            : null
        )
      ]),
      this.hasSubmenu
        ? h(VBinder, null, {
            default: () => [
              h(VTarget, null, {
                default: () =>
                  h(
                    'div',
                    { class: `${clsPrefix}-dropdown-offset-container` },
                    h(
                      VFollower,
                      {
                        show: this.mergedShowSubmenu,
                        placement: this.placement,
                        teleportDisabled: true
                      },
                      {
                        default: () => {
                          return h(
                            'div',
                            { class: `${clsPrefix}-dropdown-menu-wrapper` },
                            animated
                              ? h(
                                  Transition,
                                  {
                                    onBeforeEnter:
                                      this.handleSubmenuBeforeEnter,
                                    onAfterEnter: this.handleSubmenuAfterEnter,
                                    name: 'fade-in-scale-up-transition',
                                    appear: true
                                  },
                                  {
                                    default: () => submenuVNode
                                  }
                                )
                              : submenuVNode
                          )
                        }
                      }
                    )
                  )
              })
            ]
          })
        : null
    )
  }
})