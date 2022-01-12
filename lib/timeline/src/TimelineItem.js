'use strict'
Object.defineProperty(exports, '__esModule', { value: true })
const vue_1 = require('vue')
const _utils_1 = require('../../_utils')
const Timeline_1 = require('./Timeline')
const timelineItemProps = {
  time: [String, Number],
  title: String,
  content: String,
  color: String,
  type: {
    type: String,
    default: 'default'
  }
}
exports.default = (0, vue_1.defineComponent)({
  name: 'TimelineItem',
  props: timelineItemProps,
  setup(props) {
    const NTimeline = (0, vue_1.inject)(Timeline_1.timelineInjectionKey)
    if (!NTimeline) {
      ;(0, _utils_1.throwError)(
        'timeline-item',
        '`n-timeline-item` must be placed inside `n-timeline`.'
      )
    }
    return {
      mergedClsPrefix: NTimeline.mergedClsPrefixRef,
      cssVars: (0, vue_1.computed)(() => {
        const {
          props: { size, iconSize: iconSizeProp },
          mergedThemeRef
        } = NTimeline
        const { type } = props
        const {
          self: {
            titleTextColor,
            contentTextColor,
            metaTextColor,
            lineColor,
            titleFontWeight,
            contentFontSize,
            [(0, _utils_1.createKey)('iconSize', size)]: iconSize,
            [(0, _utils_1.createKey)('titleMargin', size)]: titleMargin,
            [(0, _utils_1.createKey)('titleFontSize', size)]: titleFontSize,
            [(0, _utils_1.createKey)('circleBorder', type)]: circleBorder,
            [(0, _utils_1.createKey)('iconColor', type)]: iconColor
          },
          common: { cubicBezierEaseInOut }
        } = mergedThemeRef.value
        return {
          '--bezier': cubicBezierEaseInOut,
          '--circle-border': circleBorder,
          '--icon-color': iconColor,
          '--content-font-size': contentFontSize,
          '--content-text-color': contentTextColor,
          '--line-color': lineColor,
          '--meta-text-color': metaTextColor,
          '--title-font-size': titleFontSize,
          '--title-font-weight': titleFontWeight,
          '--title-margin': titleMargin,
          '--title-text-color': titleTextColor,
          '--icon-size': (0, _utils_1.formatLength)(iconSizeProp) || iconSize
        }
      })
    }
  },
  render() {
    const { mergedClsPrefix, color, $slots } = this
    return (0, vue_1.h)(
      'div',
      {
        class: [
          `${mergedClsPrefix}-timeline-item`,
          `${mergedClsPrefix}-timeline-item--${this.type}-type`
        ],
        style: this.cssVars
      },
      (0, vue_1.h)(
        'div',
        { class: `${mergedClsPrefix}-timeline-item-timeline` },
        (0, vue_1.h)('div', {
          class: `${mergedClsPrefix}-timeline-item-timeline__line`
        }),
        $slots.icon
          ? (0, vue_1.h)(
              'div',
              {
                class: `${mergedClsPrefix}-timeline-item-timeline__icon`,
                style: { color: color }
              },
              $slots.icon()
            )
          : (0, vue_1.h)('div', {
              class: `${mergedClsPrefix}-timeline-item-timeline__circle`,
              style: { borderColor: color }
            })
      ),
      (0, vue_1.h)(
        'div',
        { class: `${mergedClsPrefix}-timeline-item-content` },
        this.title || $slots.header
          ? (0, vue_1.h)(
              'div',
              { class: `${mergedClsPrefix}-timeline-item-content__title` },
              (0, vue_1.renderSlot)($slots, 'header', undefined, () => [
                this.title
              ])
            )
          : null,
        (0, vue_1.h)(
          'div',
          { class: `${mergedClsPrefix}-timeline-item-content__content` },
          (0, vue_1.renderSlot)($slots, 'default', undefined, () => [
            this.content
          ])
        ),
        (0, vue_1.h)(
          'div',
          { class: `${mergedClsPrefix}-timeline-item-content__meta` },
          (0, vue_1.renderSlot)($slots, 'footer', undefined, () => [this.time])
        )
      )
    )
  }
})
