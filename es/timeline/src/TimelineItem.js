import { defineComponent, computed, inject, h, renderSlot } from 'vue'
import { createKey, formatLength, throwError } from '../../_utils'
import { timelineInjectionKey } from './Timeline'
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
export default defineComponent({
  name: 'TimelineItem',
  props: timelineItemProps,
  setup(props) {
    const NTimeline = inject(timelineInjectionKey)
    if (!NTimeline) {
      throwError(
        'timeline-item',
        '`n-timeline-item` must be placed inside `n-timeline`.'
      )
    }
    return {
      mergedClsPrefix: NTimeline.mergedClsPrefixRef,
      cssVars: computed(() => {
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
            [createKey('iconSize', size)]: iconSize,
            [createKey('titleMargin', size)]: titleMargin,
            [createKey('titleFontSize', size)]: titleFontSize,
            [createKey('circleBorder', type)]: circleBorder,
            [createKey('iconColor', type)]: iconColor
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
          '--icon-size': formatLength(iconSizeProp) || iconSize
        }
      })
    }
  },
  render() {
    const { mergedClsPrefix, color, $slots } = this
    return h(
      'div',
      {
        class: [
          `${mergedClsPrefix}-timeline-item`,
          `${mergedClsPrefix}-timeline-item--${this.type}-type`
        ],
        style: this.cssVars
      },
      h(
        'div',
        { class: `${mergedClsPrefix}-timeline-item-timeline` },
        h('div', { class: `${mergedClsPrefix}-timeline-item-timeline__line` }),
        $slots.icon
          ? h(
              'div',
              {
                class: `${mergedClsPrefix}-timeline-item-timeline__icon`,
                style: { color: color }
              },
              $slots.icon()
            )
          : h('div', {
              class: `${mergedClsPrefix}-timeline-item-timeline__circle`,
              style: { borderColor: color }
            })
      ),
      h(
        'div',
        { class: `${mergedClsPrefix}-timeline-item-content` },
        this.title || $slots.header
          ? h(
              'div',
              { class: `${mergedClsPrefix}-timeline-item-content__title` },
              renderSlot($slots, 'header', undefined, () => [this.title])
            )
          : null,
        h(
          'div',
          { class: `${mergedClsPrefix}-timeline-item-content__content` },
          renderSlot($slots, 'default', undefined, () => [this.content])
        ),
        h(
          'div',
          { class: `${mergedClsPrefix}-timeline-item-content__meta` },
          renderSlot($slots, 'footer', undefined, () => [this.time])
        )
      )
    )
  }
})
