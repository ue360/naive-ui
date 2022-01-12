import { h, defineComponent } from 'vue'
import { SwitcherIcon } from '../../_internal/icons'
import { NIconSwitchTransition, NBaseLoading, NBaseIcon } from '../../_internal'
export default defineComponent({
  name: 'NTreeSwitcher',
  props: {
    clsPrefix: {
      type: String,
      required: true
    },
    expanded: Boolean,
    hide: Boolean,
    loading: Boolean,
    onClick: Function
  },
  render() {
    const { clsPrefix } = this
    return h(
      'span',
      {
        'data-switcher': true,
        class: [
          `${clsPrefix}-tree-node-switcher`,
          {
            [`${clsPrefix}-tree-node-switcher--expanded`]: this.expanded,
            [`${clsPrefix}-tree-node-switcher--hide`]: this.hide
          }
        ],
        onClick: this.onClick
      },
      h(
        'div',
        { class: `${clsPrefix}-tree-node-switcher__icon` },
        h(NIconSwitchTransition, null, {
          default: () =>
            !this.loading
              ? h(
                  NBaseIcon,
                  { clsPrefix: clsPrefix, key: 'switcher' },
                  { default: () => h(SwitcherIcon, null) }
                )
              : h(NBaseLoading, {
                  clsPrefix: clsPrefix,
                  key: 'loading',
                  radius: 85,
                  strokeWidth: 20
                })
        })
      )
    )
  }
})
