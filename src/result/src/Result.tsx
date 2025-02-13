import { h, defineComponent, computed, PropType, CSSProperties } from 'vue'
import { useConfig, useTheme } from '../../_mixins'
import type { ThemeProps } from '../../_mixins'
import { createKey } from '../../_utils'
import type { ExtractPublicPropTypes } from '../../_utils'
import {
  InfoIcon,
  SuccessIcon,
  WarningIcon,
  ErrorIcon
} from '../../_internal/icons'
import { NBaseIcon } from '../../_internal'
import { resultLight } from '../styles'
import type { ResultTheme } from '../styles'
import image404 from './404'
import image500 from './500'
import image418 from './418'
import image403 from './403'
import style from './styles/index.cssr'

const iconMap = {
  403: image403,
  404: image404,
  418: image418,
  500: image500,
  info: <InfoIcon />,
  success: <SuccessIcon />,
  warning: <WarningIcon />,
  error: <ErrorIcon />
}

const resultProps = {
  ...(useTheme.props as ThemeProps<ResultTheme>),
  size: {
    type: String as PropType<'small' | 'medium' | 'large' | 'huge'>,
    default: 'medium'
  },
  status: {
    type: String as PropType<
    'info' | 'success' | 'warning' | 'error' | '404' | '403' | '500' | '418'
    >,
    default: 'info'
  },
  title: String,
  description: String
}

export type ResultProps = ExtractPublicPropTypes<typeof resultProps>

export default defineComponent({
  name: 'Result',
  props: resultProps,
  setup (props) {
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
          '--n-bezier': cubicBezierEaseInOut,
          '--n-font-size': fontSize,
          '--n-icon-size': iconSize,
          '--n-line-height': lineHeight,
          '--n-text-color': textColor,
          '--n-title-font-size': titleFontSize,
          '--n-title-font-weight': titleFontWeight,
          '--n-title-text-color': titleTextColor,
          '--n-icon-color': iconColor
        }
      })
    }
  },
  render () {
    const { status, $slots, mergedClsPrefix } = this
    return (
      <div
        class={`${mergedClsPrefix}-result`}
        style={this.cssVars as CSSProperties}
      >
        <div class={`${mergedClsPrefix}-result-icon`}>
          {$slots.icon?.() || (
            <NBaseIcon clsPrefix={mergedClsPrefix}>
              {{ default: () => iconMap[status] }}
            </NBaseIcon>
          )}
        </div>
        <div class={`${mergedClsPrefix}-result-header`}>
          {this.title ? (
            <div class={`${mergedClsPrefix}-result-header__title`}>
              {this.title}
            </div>
          ) : null}
          {this.description ? (
            <div class={`${mergedClsPrefix}-result-header__description`}>
              {this.description}
            </div>
          ) : null}
        </div>
        {$slots.default && (
          <div class={`${mergedClsPrefix}-result-content`}>{$slots}</div>
        )}
        {$slots.footer && (
          <div class={`${mergedClsPrefix}-result-footer`}>
            {$slots.footer()}
          </div>
        )}
      </div>
    )
  }
})
