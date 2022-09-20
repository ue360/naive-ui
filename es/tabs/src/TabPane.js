import { h, defineComponent, inject } from 'vue'
import { throwError, warn } from '../../_utils'
import { tabsInjectionKey } from './interface'
export const tabPaneProps = {
  /** @deprecated */
  label: {
    type: [String, Number, Object, Function],
    default: undefined,
    validator: () => {
      if (process.env.NODE_ENV !== 'production') {
        warn('tab-pane', '`label` is deprecated, please use `tab` instead.')
      }
      return true
    }
  },
  tab: [String, Number, Object, Function],
  name: {
    type: [String, Number],
    required: true
  },
  disabled: Boolean,
  displayDirective: {
    type: String,
    default: 'if'
  },
  closable: {
    type: Boolean,
    default: undefined
  }
}
export default defineComponent({
  __TAB_PANE__: true,
  name: 'TabPane',
  alias: ['TabPanel'],
  props: tabPaneProps,
  setup() {
    const NTab = inject(tabsInjectionKey, null)
    if (!NTab) {
      throwError('tab-pane', '`n-tab-pane` must be placed inside `n-tabs`.')
    }
    return {
      style: NTab.paneStyleRef,
      class: NTab.paneClassRef,
      mergedClsPrefix: NTab.mergedClsPrefixRef
    }
  },
  render() {
    return h(
      'div',
      {
        class: [`${this.mergedClsPrefix}-tab-pane`, this.class],
        style: this.style
      },
      this.$slots
    )
  }
})