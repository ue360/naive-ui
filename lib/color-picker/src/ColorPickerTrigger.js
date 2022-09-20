'use strict'
Object.defineProperty(exports, '__esModule', { value: true })
const seemly_1 = require('seemly')
const vue_1 = require('vue')
exports.default = (0, vue_1.defineComponent)({
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
    return (0, vue_1.h)(
      'div',
      { class: `${clsPrefix}-color-picker-trigger`, onClick: this.onClick },
      (0, vue_1.h)(
        'div',
        { class: `${clsPrefix}-color-picker-trigger__fill` },
        (0, vue_1.h)('div', { class: `${clsPrefix}-color-picker-checkboard` }),
        (0, vue_1.h)('div', {
          style: {
            position: 'absolute',
            left: 0,
            right: 0,
            top: 0,
            bottom: 0,
            backgroundColor: hsla ? (0, seemly_1.toHslaString)(hsla) : ''
          }
        }),
        value && hsla
          ? (0, vue_1.h)(
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