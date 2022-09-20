import { h, defineComponent, computed, renderSlot } from 'vue'
import { useConfig, useTheme } from '../../_mixins'
import { createKey } from '../../_utils'
import {
  InfoIcon,
  SuccessIcon,
  WarningIcon,
  ErrorIcon
} from '../../_internal/icons'
import { NBaseIcon } from '../../_internal'
import { resultLight } from '../styles'
import image404 from './404'
import image500 from './500'
import image418 from './418'
import image403 from './403'
import style from './styles/index.cssr'
const imgMap = {
  403: image403,
  404: image404,
  418: image418,
  500: image500
}
const iconMap = {
  info: h(InfoIcon, null),
  success: h(SuccessIcon, null),
  warning: h(WarningIcon, null),
  error: h(ErrorIcon, null)
}
const resultProps = Object.assign(Object.assign({}, useTheme.props), {
  size: {
    type: String,
    default: 'medium'
  },
  status: {
    type: String,
    default: 'info'
  },
  title: String,
  description: String
})
export default defineComponent({
  name: 'Result',
  props: resultProps,
  setup(props) {
    const { mergedClsPrefixRef } = useConfig(props)
    const themeRef = useTheme(
      'Result',
      'Result',
      style,
      resultLight,
      props,
      mergedClsPrefixRef
    )
    return {
      mergedClsPrefix: mergedClsPrefixRef,
      cssVars: computed(() => {
        const { size, status } = props
        const {
          common: { cubicBezierEaseInOut },
          self: {
            textColor,
            lineHeight,
            titleTextColor,
            titleFontWeight,
            [createKey('iconColor', status)]: iconColor,
            [createKey('fontSize', size)]: fontSize,
            [createKey('titleFontSize', size)]: titleFontSize,
            [createKey('iconSize', size)]: iconSize
          }
        } = themeRef.value
        return {
          '--bezier': cubicBezierEaseInOut,
          '--font-size': fontSize,
          '--icon-size': iconSize,
          '--line-height': lineHeight,
          '--text-color': textColor,
          '--title-font-size': titleFontSize,
          '--title-font-weight': titleFontWeight,
          '--title-text-color': titleTextColor,
          '--icon-color': iconColor
        }
      })
    }
  },
  render() {
    const { status, $slots, mergedClsPrefix } = this
    return h(
      'div',
      { class: `${mergedClsPrefix}-result`, style: this.cssVars },
      h(
        'div',
        { class: `${mergedClsPrefix}-result-icon` },
        status in imgMap
          ? imgMap[status]
          : h(
              NBaseIcon,
              { clsPrefix: mergedClsPrefix },
              { default: () => iconMap[status] }
            )
      ),
      h(
        'div',
        { class: `${mergedClsPrefix}-result-header` },
        h(
          'div',
          { class: `${mergedClsPrefix}-result-header__title` },
          this.title
        ),
        h(
          'div',
          { class: `${mergedClsPrefix}-result-header__description` },
          this.description
        )
      ),
      $slots.default
        ? h('div', { class: `${mergedClsPrefix}-result-content` }, $slots)
        : null,
      h(
        'div',
        { class: `${mergedClsPrefix}-result-footer` },
        renderSlot($slots, 'footer')
      )
    )
  }
})