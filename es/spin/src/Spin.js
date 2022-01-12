import { computed, defineComponent, h, Transition, watchEffect } from 'vue'
import { useCompitable } from 'vooks'
import { pxfy } from 'seemly'
import { NBaseLoading } from '../../_internal'
import { useConfig, useTheme } from '../../_mixins'
import { createKey, warnOnce } from '../../_utils'
import { spinLight } from '../styles'
import style from './styles/index.cssr'
const STROKE_WIDTH = {
  small: 20,
  medium: 18,
  large: 16
}
const spinProps = Object.assign(Object.assign({}, useTheme.props), {
  description: String,
  stroke: String,
  size: {
    type: [String, Number],
    default: 'medium'
  },
  show: {
    type: Boolean,
    default: true
  },
  strokeWidth: Number,
  rotate: {
    type: Boolean,
    default: true
  },
  spinning: {
    type: Boolean,
    validator: () => {
      return true
    },
    default: undefined
  }
})
export default defineComponent({
  name: 'Spin',
  props: spinProps,
  setup(props) {
    if (process.env.NODE_ENV !== 'production') {
      watchEffect(() => {
        if (props.spinning !== undefined) {
          warnOnce(
            'spin',
            '`spinning` is deprecated, please use `show` instead.'
          )
        }
      })
    }
    const { mergedClsPrefixRef } = useConfig(props)
    const themeRef = useTheme(
      'Spin',
      'Spin',
      style,
      spinLight,
      props,
      mergedClsPrefixRef
    )
    return {
      mergedClsPrefix: mergedClsPrefixRef,
      compitableShow: useCompitable(props, ['spinning', 'show']),
      mergedStrokeWidth: computed(() => {
        const { strokeWidth } = props
        if (strokeWidth !== undefined) return strokeWidth
        const { size } = props
        return STROKE_WIDTH[typeof size === 'number' ? 'medium' : size]
      }),
      cssVars: computed(() => {
        const { size: spinSize } = props
        const {
          common: { cubicBezierEaseInOut },
          self
        } = themeRef.value
        const { opacitySpinning, color, textColor } = self
        const size =
          typeof spinSize === 'number'
            ? pxfy(spinSize)
            : self[createKey('size', spinSize)]
        return {
          '--bezier': cubicBezierEaseInOut,
          '--opacity-spinning': opacitySpinning,
          '--size': size,
          '--color': color,
          '--text-color': textColor
        }
      })
    }
  },
  render() {
    var _a
    const { $slots, mergedClsPrefix, description } = this
    const rotate = $slots.icon && this.rotate
    const descriptionNode =
      (description || $slots.description) &&
      h(
        'div',
        { class: `${mergedClsPrefix}-spin-description` },
        description ||
          ((_a = $slots.description) === null || _a === void 0
            ? void 0
            : _a.call($slots))
      )
    const icon = $slots.icon
      ? h(
          'div',
          { class: `${mergedClsPrefix}-spin-body` },
          h(
            'div',
            {
              class: [
                `${mergedClsPrefix}-spin`,
                rotate && `${mergedClsPrefix}-spin--rotate`
              ],
              style: $slots.default ? '' : this.cssVars
            },
            $slots.icon()
          ),
          descriptionNode
        )
      : h(
          'div',
          { class: `${mergedClsPrefix}-spin-body` },
          h(NBaseLoading, {
            clsPrefix: mergedClsPrefix,
            style: $slots.default ? '' : this.cssVars,
            stroke: this.stroke,
            'stroke-width': this.mergedStrokeWidth,
            class: `${mergedClsPrefix}-spin`
          }),
          descriptionNode
        )
    return $slots.default
      ? h(
          'div',
          { class: `${mergedClsPrefix}-spin-container`, style: this.cssVars },
          h(
            'div',
            {
              class: [
                `${mergedClsPrefix}-spin-content`,
                this.compitableShow &&
                  `${mergedClsPrefix}-spin-content--spinning`
              ]
            },
            $slots
          ),
          h(
            Transition,
            { name: 'fade-in-transition' },
            {
              default: () => (this.compitableShow ? icon : null)
            }
          )
        )
      : icon
  }
})
