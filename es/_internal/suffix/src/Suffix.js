import { h, defineComponent } from 'vue'
import NBaseClear from '../../clear'
import NBaseLoading from '../../loading'
import NBaseIcon from '../../icon'
import { ChevronDownIcon } from '../../icons'
export default defineComponent({
  name: 'InternalSelectionSuffix',
  props: {
    clsPrefix: {
      type: String,
      required: true
    },
    showArrow: {
      type: Boolean,
      default: undefined
    },
    showClear: {
      type: Boolean,
      default: undefined
    },
    loading: {
      type: Boolean,
      default: false
    },
    onClear: Function
  },
  setup(props) {
    return () => {
      const { clsPrefix } = props
      return h(
        NBaseLoading,
        {
          clsPrefix: clsPrefix,
          class: `${clsPrefix}-base-suffix`,
          strokeWidth: 24,
          scale: 0.85,
          show: props.loading
        },
        {
          default: () =>
            props.showArrow
              ? h(
                  NBaseClear,
                  {
                    clsPrefix: clsPrefix,
                    show: props.showClear,
                    onClear: props.onClear
                  },
                  {
                    default: () =>
                      h(
                        NBaseIcon,
                        {
                          clsPrefix: clsPrefix,
                          class: `${clsPrefix}-base-suffix__arrow`
                        },
                        { default: () => h(ChevronDownIcon, null) }
                      )
                  }
                )
              : null
        }
      )
    }
  }
})