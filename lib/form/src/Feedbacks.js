'use strict'
Object.defineProperty(exports, '__esModule', { value: true })
const vue_1 = require('vue')
exports.default = (0, vue_1.defineComponent)({
  name: 'FormItemFeedback',
  props: {
    clsPrefix: {
      type: String,
      required: true
    },
    explains: Array,
    feedback: String
  },
  render() {
    var _a
    const { feedback, clsPrefix } = this
    return feedback
      ? (0, vue_1.h)(
          'div',
          { key: feedback, class: `${clsPrefix}-form-item-feedback__line` },
          feedback
        )
      : (_a = this.explains) === null || _a === void 0
      ? void 0
      : _a.map((explain) =>
          (0, vue_1.h)(
            'div',
            { key: explain, class: `${clsPrefix}-form-item-feedback__line` },
            explain
          )
        )
  }
})