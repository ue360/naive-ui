import { h, defineComponent, computed, inject, renderSlot } from 'vue'
import { NButton } from '../../button'
import { NBaseIcon } from '../../_internal'
import { WarningIcon } from '../../_internal/icons'
import { useLocale } from '../../_mixins'
import { keysOf } from '../../_utils'
import { popconfirmInjectionKey } from './interface'
export const panelProps = {
  positiveText: String,
  negativeText: String,
  showIcon: {
    type: Boolean,
    default: true
  },
  onPositiveClick: {
    type: Function,
    required: true
  },
  onNegativeClick: {
    type: Function,
    required: true
  }
}
export const panelPropKeys = keysOf(panelProps)
export default defineComponent({
  name: 'NPopconfirmPanel',
  props: panelProps,
  setup(props) {
    const { localeRef } = useLocale('Popconfirm')
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    const { mergedClsPrefixRef, mergedThemeRef } = inject(
      popconfirmInjectionKey
    )
    return Object.assign(Object.assign({}, useLocale('Popconfirm')), {
      mergedClsPrefix: mergedClsPrefixRef,
      cssVars: computed(() => {
        const {
          common: { cubicBezierEaseInOut },
          self: { fontSize, iconSize, iconColor }
        } = mergedThemeRef.value
        return {
          '--bezier': cubicBezierEaseInOut,
          '--font-size': fontSize,
          '--icon-size': iconSize,
          '--icon-color': iconColor
        }
      }),
      localizedPositiveText: computed(() => {
        return props.positiveText || localeRef.value.positiveText
      }),
      localizedNegativeText: computed(() => {
        return props.negativeText || localeRef.value.negativeText
      }),
      handlePositiveClick(e) {
        props.onPositiveClick(e)
      },
      handleNegativeClick(e) {
        props.onNegativeClick(e)
      }
    })
  },
  render() {
    const { mergedClsPrefix, $slots } = this
    const actionContentNode = $slots.action
      ? $slots.action()
      : this.negativeText === null && this.positiveText === null
      ? null
      : [
          this.negativeText !== null &&
            h(
              NButton,
              { size: 'small', onClick: this.handleNegativeClick },
              { default: () => this.localizedNegativeText }
            ),
          this.positiveText !== null &&
            h(
              NButton,
              {
                size: 'small',
                type: 'primary',
                onClick: this.handlePositiveClick
              },
              { default: () => this.localizedPositiveText }
            )
        ]
    return h(
      'div',
      { style: this.cssVars },
      h(
        'div',
        { class: `${mergedClsPrefix}-popconfirm__body` },
        this.showIcon
          ? h(
              'div',
              { class: `${mergedClsPrefix}-popconfirm__icon` },
              renderSlot($slots, 'icon', undefined, () => [
                h(
                  NBaseIcon,
                  { clsPrefix: mergedClsPrefix },
                  { default: () => h(WarningIcon, null) }
                )
              ])
            )
          : null,
        renderSlot($slots, 'default')
      ),
      actionContentNode
        ? h(
            'div',
            { class: `${mergedClsPrefix}-popconfirm__action` },
            actionContentNode
          )
        : null
    )
  }
})
