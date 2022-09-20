'use strict'
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod }
  }
Object.defineProperty(exports, '__esModule', { value: true })
const vue_1 = require('vue')
const _mixins_1 = require('../../_mixins')
const _utils_1 = require('../../_utils')
const styles_1 = require('../styles')
const index_cssr_1 = __importDefault(require('./styles/index.cssr'))
const Line_1 = __importDefault(require('./Line'))
const Circle_1 = __importDefault(require('./Circle'))
const MultipleCircle_1 = __importDefault(require('./MultipleCircle'))
const progressProps = Object.assign(
  Object.assign({}, _mixins_1.useTheme.props),
  {
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
  }
)
exports.default = (0, vue_1.defineComponent)({
  name: 'Progress',
  props: progressProps,
  setup(props) {
    const mergedIndicatorPlacementRef = (0, vue_1.computed)(() => {
      return props.indicatorPlacement || props.indicatorPosition
    })
    const { mergedClsPrefixRef } = (0, _mixins_1.useConfig)(props)
    const themeRef = (0, _mixins_1.useTheme)(
      'Progress',
      'Progress',
      index_cssr_1.default,
      styles_1.progressLight,
      props,
      mergedClsPrefixRef
    )
    return {
      mergedClsPrefix: mergedClsPrefixRef,
      mergedIndicatorPlacement: mergedIndicatorPlacementRef,
      cssVars: (0, vue_1.computed)(() => {
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
            [(0, _utils_1.createKey)('iconColor', status)]: iconColor,
            [(0, _utils_1.createKey)('fillColor', status)]: fillColor
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
    return (0, vue_1.h)(
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
        ? (0, vue_1.h)(
            Circle_1.default,
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
        ? (0, vue_1.h)(
            Line_1.default,
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
        ? (0, vue_1.h)(
            MultipleCircle_1.default,
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