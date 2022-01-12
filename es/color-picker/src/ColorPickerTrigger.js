import { toHslaString } from 'seemly'
import { defineComponent, h } from 'vue'
export default defineComponent({
  name: 'ColorPickerTrigger',
  props: {
    clsPrefix: {
      type: String,
      required: true
    },
    value: {
      type: String,
      default: null
    },
    hsla: {
      type: Array,
      default: null
    },
    onClick: Function
  },
  render() {
    const { hsla, value, clsPrefix } = this
    return h(
      'div',
      { class: `${clsPrefix}-color-picker-trigger`, onClick: this.onClick },
      h(
        'div',
        { class: `${clsPrefix}-color-picker-trigger__fill` },
        h('div', { class: `${clsPrefix}-color-picker-checkboard` }),
        h('div', {
          style: {
            position: 'absolute',
            left: 0,
            right: 0,
            top: 0,
            bottom: 0,
            backgroundColor: hsla ? toHslaString(hsla) : ''
          }
        }),
        value && hsla
          ? h(
              'div',
              {
                class: `${clsPrefix}-color-picker-trigger__value`,
                style: {
                  color: hsla[2] > 50 || hsla[3] < 0.5 ? 'black' : 'white'
                }
              },
              value
            )
          : null
      )
    )
  }
})
