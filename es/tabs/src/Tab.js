import { h, defineComponent, inject, computed } from 'vue'
import { AddIcon } from '../../_internal/icons'
import { NBaseClose, NBaseIcon } from '../../_internal'
import { render, omit } from '../../_utils'
import { tabsInjectionKey } from './interface'
import { tabPaneProps } from './TabPane'
const typeProps = Object.assign(
  { internalLeftPadded: Boolean, internalAddable: Boolean },
  omit(tabPaneProps, ['displayDirective'])
)
export default defineComponent({
  __TAB__: true,
  name: 'Tab',
  props: typeProps,
  setup(props) {
    const {
      mergedClsPrefixRef,
      valueRef,
      typeRef,
      closableRef,
      tabStyleRef,
      tabChangeIdRef,
      onBeforeLeaveRef,
      handleAdd,
      handleTabClick,
      handleClose
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    } = inject(tabsInjectionKey)
    return {
      mergedClosable: computed(() => {
        if (props.internalAddable) return false
        const { closable } = props
        if (closable === undefined) return closableRef.value
        return closable
      }),
      style: tabStyleRef,
      clsPrefix: mergedClsPrefixRef,
      value: valueRef,
      type: typeRef,
      handleClose(e) {
        e.stopPropagation()
        if (props.disabled) return
        handleClose(props.name)
      },
      handleClick() {
        if (props.disabled) return
        if (props.internalAddable) {
          handleAdd()
          return
        }
        const { name: nameProp } = props
        const id = ++tabChangeIdRef.id
        if (nameProp !== valueRef.value) {
          const { value: onBeforeLeave } = onBeforeLeaveRef
          if (!onBeforeLeave) {
            handleTabClick(nameProp)
          } else {
            void Promise.resolve(
              onBeforeLeave(props.name, valueRef.value)
            ).then((allowLeave) => {
              if (allowLeave && tabChangeIdRef.id === id) {
                handleTabClick(nameProp)
              }
            })
          }
        }
      }
    }
  },
  render() {
    const {
      internalAddable,
      clsPrefix,
      name,
      disabled,
      label,
      tab,
      value,
      mergedClosable,
      style,
      $slots: { default: defaultSlot }
    } = this
    const mergedTab = label !== null && label !== void 0 ? label : tab
    return h(
      'div',
      { class: `${clsPrefix}-tabs-tab-wrapper` },
      this.internalLeftPadded
        ? h('div', { class: `${clsPrefix}-tabs-tab-pad` })
        : null,
      h(
        'div',
        {
          key: name,
          'data-name': name,
          'data-disabled': disabled ? true : undefined,
          class: [
            `${clsPrefix}-tabs-tab`,
            value === name && `${clsPrefix}-tabs-tab--active`,
            disabled && `${clsPrefix}-tabs-tab--disabled`,
            mergedClosable && `${clsPrefix}-tabs-tab--closable`,
            internalAddable && `${clsPrefix}-tabs-tab--addable`
          ],
          onClick: this.handleClick,
          style: internalAddable ? undefined : style
        },
        h(
          'span',
          { class: `${clsPrefix}-tabs-tab__label` },
          internalAddable
            ? h(
                NBaseIcon,
                { clsPrefix: clsPrefix },
                {
                  default: () => h(AddIcon, null)
                }
              )
            : defaultSlot
            ? defaultSlot()
            : typeof mergedTab === 'object'
            ? mergedTab // VNode
            : render(
                mergedTab !== null && mergedTab !== void 0 ? mergedTab : name
              )
        ),
        mergedClosable && this.type === 'card'
          ? h(NBaseClose, {
              clsPrefix: clsPrefix,
              class: `${clsPrefix}-tabs-tab__close`,
              onClick: this.handleClose,
              disabled: disabled
            })
          : null
      )
    )
  }
})