'use strict'
Object.defineProperty(exports, '__esModule', { value: true })
const vue_1 = require('vue')
const _internal_1 = require('../../_internal')
const icons_1 = require('../../_internal/icons')
const iconMap = {
  success: (0, vue_1.h)(icons_1.SuccessIcon, null),
  error: (0, vue_1.h)(icons_1.ErrorIcon, null),
  warning: (0, vue_1.h)(icons_1.WarningIcon, null),
  info: (0, vue_1.h)(icons_1.InfoIcon, null)
}
exports.default = (0, vue_1.defineComponent)({
  name: 'ProgressCircle',
  props: {
    clsPrefix: {
      type: String,
      required: true
    },
    status: {
      type: String,
      required: true
    },
    strokeWidth: {
      type: Number,
      required: true
    },
    fillColor: String,
    railColor: String,
    railStyle: [String, Object],
    percentage: {
      type: Number,
      default: 0
    },
    showIndicator: {
      type: Boolean,
      reqiuired: true
    },
    indicatorTextColor: String,
    unit: String,
    viewBoxWidth: {
      type: Number,
      required: true
    }
  },
  setup(props, { slots }) {
    const strokeDasharrayRef = (0, vue_1.computed)(() => {
      return `${Math.PI * props.percentage}, ${props.viewBoxWidth * 8}`
    })
    return () => {
      const {
        fillColor,
        railColor,
        railStyle,
        strokeWidth,
        status,
        percentage,
        showIndicator,
        indicatorTextColor,
        unit,
        clsPrefix
      } = props
      return (0, vue_1.h)(
        'div',
        { class: `${clsPrefix}-progress-content`, role: 'none' },
        (0, vue_1.h)(
          'div',
          { class: `${clsPrefix}-progress-graph`, 'aria-hidden': true },
          (0, vue_1.h)(
            'div',
            { class: `${clsPrefix}-progress-graph-circle` },
            (0, vue_1.h)(
              'svg',
              { viewBox: '0 0 110 110' },
              (0, vue_1.h)(
                'g',
                null,
                (0, vue_1.h)('path', {
                  class: `${clsPrefix}-progress-graph-circle-rail`,
                  d: 'm 55 5 a 50 50 0 1 1 0 100 a 50 50 0 1 1 0 -100',
                  'stroke-width': strokeWidth * 1.1,
                  'stroke-linecap': 'round',
                  fill: 'none',
                  style: [
                    {
                      strokeDashoffset: 0,
                      stroke: railColor
                    },
                    railStyle
                  ]
                })
              ),
              (0, vue_1.h)(
                'g',
                null,
                (0, vue_1.h)('path', {
                  class: [
                    `${clsPrefix}-progress-graph-circle-fill`,
                    percentage === 0 &&
                      `${clsPrefix}-progress-graph-circle-fill--empty`
                  ],
                  d: 'm 55 5 a 50 50 0 1 1 0 100 a 50 50 0 1 1 0 -100',
                  'stroke-width': strokeWidth * 1.1,
                  'stroke-linecap': 'round',
                  fill: 'none',
                  style: {
                    strokeDasharray: strokeDasharrayRef.value,
                    strokeDashoffset: 0,
                    stroke: fillColor
                  }
                })
              )
            )
          )
        ),
        showIndicator
          ? (0, vue_1.h)(
              'div',
              null,
              slots.default
                ? (0, vue_1.h)(
                    'div',
                    {
                      class: `${clsPrefix}-progress-custom-content`,
                      role: 'none'
                    },
                    slots.default()
                  )
                : status !== 'default'
                ? (0, vue_1.h)(
                    'div',
                    {
                      class: `${clsPrefix}-progress-icon`,
                      'aria-hidden': true
                    },
                    (0, vue_1.h)(
                      _internal_1.NBaseIcon,
                      { clsPrefix: clsPrefix },
                      {
                        default: () => iconMap[status]
                      }
                    )
                  )
                : (0, vue_1.h)(
                    'div',
                    {
                      class: `${clsPrefix}-progress-text`,
                      style: {
                        color: indicatorTextColor
                      },
                      role: 'none'
                    },
                    (0, vue_1.h)(
                      'span',
                      { class: `${clsPrefix}-progress-text__percentage` },
                      percentage
                    ),
                    (0, vue_1.h)(
                      'span',
                      { class: `${clsPrefix}-progress-text__unit` },
                      unit
                    )
                  )
            )
          : null
      )
    }
  }
})