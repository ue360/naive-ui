import { h, computed, defineComponent, provide, toRef } from 'vue'
import { useConfig, useTheme } from '../../_mixins'
import { breadcrumbLight } from '../styles'
import style from './styles/index.cssr'
export const breadcrumbInjectionKey = Symbol('breadcrumb')
const breadcrumbProps = Object.assign(Object.assign({}, useTheme.props), {
  separator: {
    type: String,
    default: '/'
  }
})
export default defineComponent({
  name: 'Breadcrumb',
  props: breadcrumbProps,
  setup(props) {
    const { mergedClsPrefixRef } = useConfig(props)
    const themeRef = useTheme(
      'Breadcrumb',
      'Breadcrumb',
      style,
      breadcrumbLight,
      props,
      mergedClsPrefixRef
    )
    provide(breadcrumbInjectionKey, {
      separatorRef: toRef(props, 'separator'),
      mergedClsPrefixRef
    })
    return {
      mergedClsPrefix: mergedClsPrefixRef,
      cssVars: computed(() => {
        const {
          common: { cubicBezierEaseInOut },
          self: {
            separatorColor,
            itemTextColor,
            itemTextColorHover,
            itemTextColorPressed,
            itemTextColorActive,
            fontSize,
            fontWeightActive
          }
        } = themeRef.value
        return {
          '--font-size': fontSize,
          '--bezier': cubicBezierEaseInOut,
          '--item-text-color': itemTextColor,
          '--item-text-color-hover': itemTextColorHover,
          '--item-text-color-pressed': itemTextColorPressed,
          '--item-text-color-active': itemTextColorActive,
          '--separator-color': separatorColor,
          '--font-weight-active': fontWeightActive
        }
      })
    }
  },
  render() {
    return h(
      'nav',
      {
        class: `${this.mergedClsPrefix}-breadcrumb`,
        style: this.cssVars,
        'aria-label': 'Breadcrumb'
      },
      h('ul', null, this.$slots)
    )
  }
})
