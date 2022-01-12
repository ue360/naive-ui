import { h, defineComponent, computed, ref } from 'vue'
import { NAffix } from '../../affix'
import { affixProps, affixPropKeys } from '../../affix/src/Affix'
import { useConfig, useTheme } from '../../_mixins'
import { keep } from '../../_utils'
import { anchorLight } from '../styles'
import style from './styles/index.cssr'
import NBaseAnchor, { baseAnchorProps, baseAnchorPropKeys } from './BaseAnchor'
const anchorProps = Object.assign(
  Object.assign(
    Object.assign(Object.assign({}, useTheme.props), { affix: Boolean }),
    affixProps
  ),
  baseAnchorProps
)
export default defineComponent({
  name: 'Anchor',
  props: anchorProps,
  setup(props, { slots }) {
    const { mergedClsPrefixRef } = useConfig(props)
    const themeRef = useTheme(
      'Anchor',
      'Anchor',
      style,
      anchorLight,
      props,
      mergedClsPrefixRef
    )
    const anchorRef = ref(null)
    const cssVarsRef = computed(() => {
      const {
        self: {
          railColor,
          linkColor,
          railColorActive,
          linkTextColor,
          linkTextColorHover,
          linkTextColorPressed,
          linkTextColorActive,
          linkFontSize,
          railWidth,
          linkPadding,
          borderRadius
        },
        common: { cubicBezierEaseInOut }
      } = themeRef.value
      return {
        '--link-border-radius': borderRadius,
        '--link-color': linkColor,
        '--link-font-size': linkFontSize,
        '--link-text-color': linkTextColor,
        '--link-text-color-hover': linkTextColorHover,
        '--link-text-color-active': linkTextColorActive,
        '--link-text-color-pressed': linkTextColorPressed,
        '--link-padding': linkPadding,
        '--bezier': cubicBezierEaseInOut,
        '--rail-color': railColor,
        '--rail-color-active': railColorActive,
        '--rail-width': railWidth
      }
    })
    return {
      scrollTo(href) {
        var _a
        ;(_a = anchorRef.value) === null || _a === void 0
          ? void 0
          : _a.setActiveHref(href)
      },
      renderAnchor: () => {
        return h(
          NBaseAnchor,
          Object.assign(
            { ref: anchorRef, style: cssVarsRef.value },
            keep(props, baseAnchorPropKeys),
            { mergedClsPrefix: mergedClsPrefixRef.value }
          ),
          slots
        )
      }
    }
  },
  render() {
    return !this.affix
      ? this.renderAnchor()
      : h(NAffix, Object.assign({}, keep(this, affixPropKeys)), {
          default: this.renderAnchor
        })
  }
})
