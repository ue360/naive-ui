import { h, defineComponent } from 'vue'
export default defineComponent({
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
      ? h(
          'div',
          { key: feedback, class: `${clsPrefix}-form-item-feedback__line` },
          feedback
        )
      : (_a = this.explains) === null || _a === void 0
      ? void 0
      : _a.map((explain) =>
          h(
            'div',
            { key: explain, class: `${clsPrefix}-form-item-feedback__line` },
            explain
          )
        )
  }
})
