'use strict'
Object.defineProperty(exports, '__esModule', { value: true })
const vue_1 = require('vue')
exports.default = (0, vue_1.defineComponent)({
  name: 'Switcher',
  render() {
    return (0, vue_1.h)(
      'svg',
      {
        version: '1.1',
        xmlns: 'http://www.w3.org/2000/svg',
        viewBox: '0 0 512 512',
        'enable-background': 'new 0 0 512 512'
      },
      (0, vue_1.h)(
        'g',
        null,
        (0, vue_1.h)('polygon', { points: '192,128 320,256 192,384' })
      )
    )
  }
})