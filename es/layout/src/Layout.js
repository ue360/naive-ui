import { h, defineComponent, computed, ref, provide } from 'vue'
import { NScrollbar } from '../../_internal'
import { useConfig, useTheme } from '../../_mixins'
import { layoutLight } from '../styles'
import style from './styles/layout.cssr'
import { positionProp } from './interface'
const layoutProps = {
  embedded: Boolean,
  position: positionProp,
  nativeScrollbar: {
    type: Boolean,
    default: true
  },
  scrollbarProps: Object,
  onScroll: Function,
  contentStyle: {
    type: [String, Object],
    default: ''
  },
  hasSider: Boolean,
  siderPlacement: {
    type: String,
    default: 'left'
  }
}
export const layoutInjectionKey = Symbol('layout')
// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
export function createLayoutComponent(isContent) {
  return defineComponent({
    name: isContent ? 'LayoutContent' : 'Layout',
    props: Object.assign(Object.assign({}, useTheme.props), layoutProps),
    setup(props) {
      const scrollableElRef = ref(null)
      const scrollbarInstRef = ref(null)
      const { mergedClsPrefixRef } = useConfig(props)
      const themeRef = useTheme(
        'Layout',
        'Layout',
        style,
        layoutLight,
        props,
        mergedClsPrefixRef
      )
      function scrollTo(options, y) {
        if (props.nativeScrollbar) {
          const { value: scrollableEl } = scrollableElRef
          if (scrollableEl) {
            if (y === undefined) {
              scrollableEl.scrollTo(options)
            } else {
              scrollableEl.scrollTo(options, y)
            }
          }
        } else {
          const { value: scrollbarInst } = scrollbarInstRef
          if (scrollbarInst) {
            scrollbarInst.scrollTo(options, y)
          }
        }
      }
      provide(layoutInjectionKey, props)
      const hasSiderStyle = {
        display: 'flex',
        flexWrap: 'nowrap',
        width: '100%',
        flexDirection: 'row'
      }
      const exposedMethods = {
        scrollTo
      }
      return Object.assign(
        {
          mergedClsPrefix: mergedClsPrefixRef,
          scrollableElRef,
          scrollbarInstRef,
          hasSiderStyle,
          mergedTheme: themeRef,
          cssVars: computed(() => {
            const {
              common: { cubicBezierEaseInOut },
              self
            } = themeRef.value
            return {
              '--bezier': cubicBezierEaseInOut,
              '--color': props.embedded ? self.colorEmbedded : self.color,
              '--text-color': self.textColor
            }
          })
        },
        exposedMethods
      )
    },
    render() {
      const { mergedClsPrefix, hasSider } = this
      const hasSiderStyle = hasSider ? this.hasSiderStyle : undefined
      const layoutClass = [
        isContent && `${mergedClsPrefix}-layout-content`,
        `${mergedClsPrefix}-layout`,
        `${mergedClsPrefix}-layout--${this.position}-positioned`
      ]
      return h(
        'div',
        { class: layoutClass, style: this.cssVars },
        this.nativeScrollbar
          ? h(
              'div',
              {
                ref: 'scrollableElRef',
                class: `${mergedClsPrefix}-layout-scroll-container`,
                style: [this.contentStyle, hasSiderStyle],
                onScroll: this.onScroll
              },
              this.$slots
            )
          : h(
              NScrollbar,
              Object.assign({}, this.scrollbarProps, {
                onScroll: this.onScroll,
                ref: 'scrollbarInstRef',
                theme: this.mergedTheme.peers.Scrollbar,
                themeOverrides: this.mergedTheme.peerOverrides.Scrollbar,
                contentStyle: [this.contentStyle, hasSiderStyle]
              }),
              this.$slots
            )
      )
    }
  })
}
export default createLayoutComponent(false)
