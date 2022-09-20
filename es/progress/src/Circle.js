import { h, defineComponent, computed } from 'vue'
import { NBaseIcon } from '../../_internal'
import {
  SuccessIcon,
  ErrorIcon,
  WarningIcon,
  InfoIcon
} from '../../_internal/icons'
const iconMap = {
  success: h(SuccessIcon, null),
  error: h(ErrorIcon, null),
  warning: h(WarningIcon, null),
  info: h(InfoIcon, null)
}
export default defineComponent({
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
    const strokeDasharrayRef = computed(() => {
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
      return h(
        'div',
        { class: `${clsPrefix}-progress-content`, role: 'none' },
        h(
          'div',
          { class: `${clsPrefix}-progress-graph`, 'aria-hidden': true },
          h(
            'div',
            { class: `${clsPrefix}-progress-graph-circle` },
            h(
              'svg',
              { viewBox: '0 0 110 110' },
              h(
                'g',
                null,
                h('path', {
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
              h(
                'g',
                null,
                h('path', {
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
          ? h(
              'div',
              null,
              slots.default
                ? h(
                    'div',
                    {
                      class: `${clsPrefix}-progress-custom-content`,
                      role: 'none'
                    },
                    slots.default()
                  )
                : status !== 'default'
                ? h(
                    'div',
                    {
                      class: `${clsPrefix}-progress-icon`,
                      'aria-hidden': true
                    },
                    h(
                      NBaseIcon,
                      { clsPrefix: clsPrefix },
                      {
                        default: () => iconMap[status]
                      }
                    )
                  )
                : h(
                    'div',
                    {
                      class: `${clsPrefix}-progress-text`,
                      style: {
                        color: indicatorTextColor
                      },
                      role: 'none'
                    },
                    h(
                      'span',
                      { class: `${clsPrefix}-progress-text__percentage` },
                      percentage
                    ),
                    h(
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