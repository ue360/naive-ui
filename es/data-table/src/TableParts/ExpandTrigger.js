import { h, defineComponent } from 'vue'
import { ChevronRightIcon } from '../../../_internal/icons'
import { NBaseIcon } from '../../../_internal'
export default defineComponent({
  name: 'DataTableExpandTrigger',
  props: {
    clsPrefix: {
      type: String,
      required: true
    },
    expanded: Boolean,
    onClick: {
      type: Function,
      required: true
    }
  },
  render() {
    return h(
      NBaseIcon,
      {
        class: `${this.clsPrefix}-data-table-expand-trigger`,
        clsPrefix: this.clsPrefix,
        onClick: this.onClick
      },
      {
        default: () => {
          return h(ChevronRightIcon, {
            style: this.expanded ? 'transform: rotate(90deg);' : undefined
          })
        }
      }
    )
  }
})
