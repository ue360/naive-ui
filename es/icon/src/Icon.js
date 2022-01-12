import { h, defineComponent, computed, mergeProps } from 'vue'
import { useConfig, useTheme } from '../../_mixins'
import { formatLength, warn } from '../../_utils'
import { iconLight } from '../styles'
import style from './styles/index.cssr'
export default defineComponent({
  _n_icon__: true,
  name: 'Icon',
  inheritAttrs: false,
  props: Object.assign(Object.assign({}, useTheme.props), {
    depth: [String, Number],
    size: [Number, String],
    color: String
  }),
  setup(props) {
    const { mergedClsPrefixRef } = useConfig(props)
    const themeRef = useTheme(
      'Icon',
      'Icon',
      style,
      iconLight,
      props,
      mergedClsPrefixRef
    )
    return {
      mergedClsPrefix: mergedClsPrefixRef,
      mergedStyle: computed(() => {
        const { size, color } = props
        return {
          fontSize: formatLength(size),
          color
        }
      }),
      cssVars: computed(() => {
        const { depth } = props
        const {
          common: { cubicBezierEaseInOut },
          self
        } = themeRef.value
        if (depth !== undefined) {
          const { color, [`opacity${depth}Depth`]: opacity } = self
          return {
            '--bezier': cubicBezierEaseInOut,
            '--color': color,
            '--opacity': opacity
          }
        }
        return {
          '--bezier': cubicBezierEaseInOut
        }
      })
    }
  },
  render() {
    var _a
    const { $parent, depth, mergedClsPrefix } = this
    if (
      (_a =
        $parent === null || $parent === void 0 ? void 0 : $parent.$options) ===
        null || _a === void 0
        ? void 0
        : _a._n_icon__
    ) {
      warn('icon', "don't wrap `n-icon` inside `n-icon`")
    }
    return h(
      'i',
      mergeProps(this.$attrs, {
        role: 'img',
        class: [
          `${mergedClsPrefix}-icon`,
          {
            [`${mergedClsPrefix}-icon--depth`]: depth,
            [`${mergedClsPrefix}-icon--color-transition`]: depth !== undefined
          }
        ],
        style: Object.assign(this.cssVars, this.mergedStyle)
      }),
      this.$slots
    )
  }
})
