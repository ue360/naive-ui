import { h, defineComponent } from 'vue'
import useRadio from './use-radio'
export default defineComponent({
  name: 'RadioButton',
  props: useRadio.props,
  setup(props) {
    return useRadio(props)
  },
  render() {
    const { mergedClsPrefix } = this
    return h(
      'div',
      {
        class: [
          `${mergedClsPrefix}-radio-button`,
          {
            [`${mergedClsPrefix}-radio-button--disabled`]: this.mergedDisabled,
            [`${mergedClsPrefix}-radio-button--checked`]:
              this.renderSafeChecked,
            [`${mergedClsPrefix}-radio-button--focus`]: this.focus
          }
        ],
        onKeyup: this.handleKeyUp,
        onClick: this.handleClick,
        onMousedown: this.handleMouseDown
      },
      h('input', {
        ref: 'inputRef',
        type: 'radio',
        class: `${mergedClsPrefix}-radio-button__radio-input`,
        value: this.value,
        name: this.mergedName,
        checked: this.renderSafeChecked,
        disabled: this.mergedDisabled,
        onChange: this.handleRadioInputChange,
        onFocus: this.handleRadioInputFocus,
        onBlur: this.handleRadioInputBlur
      }),
      h('div', { class: `${mergedClsPrefix}-radio-button__state-border` }),
      h('span', { ref: 'labelRef' }, this.$slots)
    )
  }
})
