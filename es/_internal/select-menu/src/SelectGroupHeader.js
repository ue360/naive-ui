import { h, defineComponent, inject } from 'vue'
import { render } from '../../../_utils'
import { internalSelectionMenuInjectionKey } from './interface'
export default defineComponent({
  name: 'NBaseSelectGroupHeader',
  props: {
    clsPrefix: {
      type: String,
      required: true
    },
    tmNode: {
      type: Object,
      required: true
    }
  },
  setup() {
    const {
      renderLabelRef,
      renderOptionRef
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    } = inject(internalSelectionMenuInjectionKey)
    return {
      renderLabel: renderLabelRef,
      renderOption: renderOptionRef
    }
  },
  render() {
    const {
      clsPrefix,
      renderLabel,
      renderOption,
      tmNode: { rawNode }
    } = this
    const children = renderLabel
      ? renderLabel(rawNode, false)
      : render(rawNode.label, rawNode, false)
    const node = h(
      'div',
      { class: `${clsPrefix}-base-select-group-header` },
      children
    )
    return rawNode.render
      ? rawNode.render({ node, option: rawNode })
      : renderOption
      ? renderOption({ node, option: rawNode, selected: false })
      : node
  }
})
