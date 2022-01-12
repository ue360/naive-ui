import { defineComponent, computed, h, renderSlot } from 'vue'
import { useConfig, useTheme } from '../../_mixins'
import { statisticLight } from '../styles'
import style from './styles/index.cssr'
const statisticProps = Object.assign(Object.assign({}, useTheme.props), {
  label: {
    type: String,
    default: undefined
  },
  value: {
    type: [String, Number],
    default: undefined
  },
  valueStyle: {
    type: [Object, String],
    default: undefined
  }
})
export default defineComponent({
  name: 'Statistic',
  props: statisticProps,
  setup(props) {
    const { mergedClsPrefixRef } = useConfig(props)
    const themeRef = useTheme(
      'Statistic',
      'Statistic',
      style,
      statisticLight,
      props,
      mergedClsPrefixRef
    )
    return {
      mergedClsPrefix: mergedClsPrefixRef,
      cssVars: computed(() => {
        const {
          self: {
            labelFontWeight,
            valueFontWeight,
            valuePrefixTextColor,
            labelTextColor,
            valueSuffixTextColor,
            valueTextColor,
            labelFontSize
          },
          common: { cubicBezierEaseInOut }
        } = themeRef.value
        return {
          '--bezier': cubicBezierEaseInOut,
          '--label-font-size': labelFontSize,
          '--label-font-weight': labelFontWeight,
          '--label-text-color': labelTextColor,
          '--value-font-weight': valueFontWeight,
          '--value-prefix-text-color': valuePrefixTextColor,
          '--value-suffix-text-color': valueSuffixTextColor,
          '--value-text-color': valueTextColor
        }
      })
    }
  },
  render() {
    var _a
    const { $slots, mergedClsPrefix } = this
    return h(
      'div',
      { class: `${mergedClsPrefix}-statistic`, style: this.cssVars },
      h(
        'div',
        { class: `${mergedClsPrefix}-statistic__label` },
        this.label ||
          ((_a = $slots.label) === null || _a === void 0
            ? void 0
            : _a.call($slots))
      ),
      h(
        'div',
        { class: `${mergedClsPrefix}-statistic-value` },
        $slots.prefix
          ? h(
              'span',
              { class: `${mergedClsPrefix}-statistic-value__prefix` },
              renderSlot($slots, 'prefix')
            )
          : null,
        this.value !== undefined
          ? h(
              'span',
              { class: `${mergedClsPrefix}-statistic-value__content` },
              this.value
            )
          : h(
              'span',
              { class: `${mergedClsPrefix}-statistic-value__content` },
              $slots
            ),
        $slots.suffix
          ? h(
              'span',
              { class: `${mergedClsPrefix}-statistic-value__suffix` },
              renderSlot($slots, 'suffix')
            )
          : null
      )
    )
  }
})
