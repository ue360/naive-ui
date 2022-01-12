import { h, defineComponent, toRef } from 'vue'
import { useStyle, useConfig } from '../../../_mixins'
import { ClearIcon } from '../../icons'
import NBaseIcon from '../../icon'
import NIconSwitchTransition from '../../icon-switch-transition'
import style from './styles/index.cssr'
export default defineComponent({
  name: 'BaseClear',
  props: {
    clsPrefix: {
      type: String,
      required: true
    },
    show: Boolean,
    onClear: Function
  },
  setup(props) {
    useStyle('BaseClear', style, toRef(props, 'clsPrefix'))
    const { NConfigProvider } = useConfig()
    return {
      NConfigProvider,
      handleMouseDown(e) {
        e.preventDefault()
      }
    }
  },
  render() {
    const { clsPrefix } = this
    return h(
      'div',
      { class: `${clsPrefix}-base-clear` },
      h(NIconSwitchTransition, null, {
        default: () => {
          return this.show
            ? h(
                NBaseIcon,
                {
                  clsPrefix: clsPrefix,
                  key: 'dismiss',
                  class: `${clsPrefix}-base-clear__clear`,
                  onClick: this.onClear,
                  onMousedown: this.handleMouseDown,
                  'data-clear': true
                },
                {
                  default: () => h(ClearIcon, null)
                }
              )
            : h(
                'div',
                { key: 'icon', class: `${clsPrefix}-base-clear__placeholder` },
                this.$slots
              )
        }
      })
    )
  }
})
