import { h, computed, defineComponent } from 'vue'
import { useConfig, useTheme } from '../../_mixins'
import { createKey } from '../../_utils'
import { progressLight } from '../styles'
import style from './styles/index.cssr'
import Line from './Line'
import Circle from './Circle'
import MultipleCircle from './MultipleCircle'
const progressProps = Object.assign(Object.assign({}, useTheme.props), {
  processing: Boolean,
  type: {
    type: String,
    default: 'line'
  },
  status: {
    type: String,
    default: 'default'
  },
  railColor: [String, Array],
  railStyle: [String, Array],
  color: [String, Array],
  viewBoxWidth: {
    type: Number,
    default: 100
  },
  strokeWidth: {
    type: Number,
    default: 7
  },
  percentage: [Number, Array],
  unit: {
    type: String,
    default: '%'
  },
  showIndicator: {
    type: Boolean,
    default: true
  },
  indicatorPosition: {
    type: String,
    default: 'outside'
  },
  indicatorPlacement: {
    type: String,
    default: 'outside'
  },
  indicatorTextColor: String,
  circleGap: {
    type: Number,
    default: 1
  },
  height: Number,
  borderRadius: [String, Number],
  fillBorderRadius: [String, Number]
})
export default defineComponent({
  name: 'Progress',
  props: progressProps,
  setup(props) {
    const mergedIndicatorPlacementRef = computed(() => {
      return props.indicatorPlacement || props.indicatorPosition
    })
    const { mergedClsPrefixRef } = useConfig(props)
    const themeRef = useTheme(
      'Progress',
      'Progress',
      style,
      progressLight,
      props,
      mergedClsPrefixRef
    )
    return {
      mergedClsPrefix: mergedClsPrefixRef,
      mergedIndicatorPlacement: mergedIndicatorPlacementRef,
      cssVars: computed(() => {
        const { status } = props
        const {
          common: { cubicBezierEaseInOut },
          self: {
            fontSize,
            fontSizeCircle,
            railColor,
            railHeight,
            iconSizeCircle,
            iconSizeLine,
            textColorCircle,
            textColorLineInner,
            textColorLineOuter,
            lineBgProcessing,
            fontWeightCircle,
            [createKey('iconColor', status)]: iconColor,
            [createKey('fillColor', status)]: fillColor
          }
        } = themeRef.value
        return {
          '--bezier': cubicBezierEaseInOut,
          '--fill-color': fillColor,
          '--font-size': fontSize,
          '--font-size-circle': fontSizeCircle,
          '--font-weight-circle': fontWeightCircle,
          '--icon-color': iconColor,
          '--icon-size-circle': iconSizeCircle,
          '--icon-size-line': iconSizeLine,
          '--line-bg-processing': lineBgProcessing,
          '--rail-color': railColor,
          '--rail-height': railHeight,
          '--text-color-circle': textColorCircle,
          '--text-color-line-inner': textColorLineInner,
          '--text-color-line-outer': textColorLineOuter
        }
      })
    }
  },
  render() {
    // it's ok to expand all prop here since no slots' deps
    const {
      type,
      cssVars,
      indicatorTextColor,
      showIndicator,
      status,
      railColor,
      railStyle,
      color,
      percentage,
      viewBoxWidth,
      strokeWidth,
      mergedIndicatorPlacement,
      unit,
      borderRadius,
      fillBorderRadius,
      height,
      processing,
      circleGap,
      mergedClsPrefix,
      $slots
    } = this
    return h(
      'div',
      {
        class: [
          `${mergedClsPrefix}-progress`,
          `${mergedClsPrefix}-progress--${type}`,
          `${mergedClsPrefix}-progress--${status}`
        ],
        style: cssVars,
        'aria-valuemax': 100,
        'aria-valuemin': 0,
        'aria-valuenow': percentage,
        role: type === 'circle' || type === 'line' ? 'progressbar' : 'none'
      },
      type === 'circle'
        ? h(
            Circle,
            {
              clsPrefix: mergedClsPrefix,
              status: status,
              showIndicator: showIndicator,
              indicatorTextColor: indicatorTextColor,
              railColor: railColor,
              fillColor: color,
              railStyle: railStyle,
              percentage: percentage,
              viewBoxWidth: viewBoxWidth,
              strokeWidth: strokeWidth,
              unit: unit
            },
            $slots
          )
        : type === 'line'
        ? h(
            Line,
            {
              clsPrefix: mergedClsPrefix,
              status: status,
              showIndicator: showIndicator,
              indicatorTextColor: indicatorTextColor,
              railColor: railColor,
              fillColor: color,
              railStyle: railStyle,
              percentage: percentage,
              processing: processing,
              indicatorPlacement: mergedIndicatorPlacement,
              unit: unit,
              fillBorderRadius: fillBorderRadius,
              railBorderRadius: borderRadius,
              height: height
            },
            $slots
          )
        : type === 'multiple-circle'
        ? h(
            MultipleCircle,
            {
              clsPrefix: mergedClsPrefix,
              strokeWidth: strokeWidth,
              railColor: railColor,
              fillColor: color,
              railStyle: railStyle,
              viewBoxWidth: viewBoxWidth,
              percentage: percentage,
              showIndicator: showIndicator,
              circleGap: circleGap
            },
            $slots
          )
        : null
    )
  }
})
