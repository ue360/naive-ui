import { h, defineComponent, computed, renderSlot } from 'vue'
import { getPadding } from 'seemly'
import { useConfig, useTheme } from '../../_mixins'
import { call, createKey, keysOf } from '../../_utils'
import { NBaseClose } from '../../_internal'
import { cardLight } from '../styles'
import style from './styles/index.cssr'
import useRtl from '../../_mixins/use-rtl'
export const cardBaseProps = {
  title: String,
  contentStyle: [Object, String],
  headerStyle: [Object, String],
  footerStyle: [Object, String],
  embedded: Boolean,
  segmented: {
    type: [Boolean, Object],
    default: false
  },
  size: {
    type: String,
    default: 'medium'
  },
  bordered: {
    type: Boolean,
    default: true
  },
  closable: {
    type: Boolean,
    default: false
  },
  hoverable: Boolean,
  onClose: [Function, Array]
}
export const cardBasePropKeys = keysOf(cardBaseProps)
const cardProps = Object.assign(
  Object.assign({}, useTheme.props),
  cardBaseProps
)
export default defineComponent({
  name: 'Card',
  props: cardProps,
  setup(props) {
    const handleCloseClick = () => {
      const { onClose } = props
      if (onClose) call(onClose)
    }
    const { mergedClsPrefixRef, NConfigProvider } = useConfig(props)
    const themeRef = useTheme(
      'Card',
      'Card',
      style,
      cardLight,
      props,
      mergedClsPrefixRef
    )
    const rtlEnabledRef = useRtl(
      'Card',
      NConfigProvider === null || NConfigProvider === void 0
        ? void 0
        : NConfigProvider.mergedRtlRef,
      mergedClsPrefixRef
    )
    return {
      rtlEnabled: rtlEnabledRef,
      mergedClsPrefix: mergedClsPrefixRef,
      mergedTheme: themeRef,
      handleCloseClick,
      cssVars: computed(() => {
        const { size } = props
        const {
          self: {
            color,
            colorModal,
            colorTarget,
            textColor,
            titleTextColor,
            titleFontWeight,
            borderColor,
            actionColor,
            borderRadius,
            closeColor,
            closeColorHover,
            closeColorPressed,
            lineHeight,
            closeSize,
            boxShadow,
            colorPopover,
            colorEmbedded,
            [createKey('padding', size)]: padding,
            [createKey('fontSize', size)]: fontSize,
            [createKey('titleFontSize', size)]: titleFontSize
          },
          common: { cubicBezierEaseInOut }
        } = themeRef.value
        const {
          top: paddingTop,
          left: paddingLeft,
          bottom: paddingBottom
        } = getPadding(padding)
        return {
          '--bezier': cubicBezierEaseInOut,
          '--border-radius': borderRadius,
          '--color': props.embedded ? colorEmbedded : color,
          '--color-modal': colorModal,
          '--color-popover': colorPopover,
          '--color-target': colorTarget,
          '--text-color': textColor,
          '--line-height': lineHeight,
          '--action-color': actionColor,
          '--title-text-color': titleTextColor,
          '--title-font-weight': titleFontWeight,
          '--close-color': closeColor,
          '--close-color-hover': closeColorHover,
          '--close-color-pressed': closeColorPressed,
          '--border-color': borderColor,
          '--box-shadow': boxShadow,
          // size
          '--padding-top': paddingTop,
          '--padding-bottom': paddingBottom,
          '--padding-left': paddingLeft,
          '--font-size': fontSize,
          '--title-font-size': titleFontSize,
          '--close-size': closeSize
        }
      })
    }
  },
  render() {
    const {
      segmented,
      bordered,
      hoverable,
      mergedClsPrefix,
      rtlEnabled,
      $slots
    } = this
    return h(
      'div',
      {
        class: [
          `${mergedClsPrefix}-card`,
          {
            [`${mergedClsPrefix}-card--rtl`]: rtlEnabled,
            [`${mergedClsPrefix}-card--content${
              typeof segmented !== 'boolean' && segmented.content === 'soft'
                ? '-soft'
                : ''
            }-segmented`]:
              segmented === true || (segmented !== false && segmented.content),
            [`${mergedClsPrefix}-card--footer${
              typeof segmented !== 'boolean' && segmented.footer === 'soft'
                ? '-soft'
                : ''
            }-segmented`]:
              segmented === true || (segmented !== false && segmented.footer),
            [`${mergedClsPrefix}-card--action-segmented`]:
              segmented === true || (segmented !== false && segmented.action),
            [`${mergedClsPrefix}-card--bordered`]: bordered,
            [`${mergedClsPrefix}-card--hoverable`]: hoverable
          }
        ],
        style: this.cssVars
      },
      $slots.cover
        ? h(
            'div',
            { class: `${mergedClsPrefix}-card-cover`, role: 'none' },
            renderSlot($slots, 'cover')
          )
        : null,
      $slots.header || this.title || this.closable
        ? h(
            'div',
            {
              class: `${mergedClsPrefix}-card-header`,
              style: this.headerStyle
            },
            h(
              'div',
              {
                class: `${mergedClsPrefix}-card-header__main`,
                role: 'heading'
              },
              renderSlot($slots, 'header', {}, () => [this.title])
            ),
            $slots['header-extra']
              ? h(
                  'div',
                  { class: `${mergedClsPrefix}-card-header__extra` },
                  renderSlot($slots, 'header-extra')
                )
              : null,
            this.closable
              ? h(NBaseClose, {
                  clsPrefix: mergedClsPrefix,
                  class: `${mergedClsPrefix}-card-header__close`,
                  onClick: this.handleCloseClick
                })
              : null
          )
        : null,
      h(
        'div',
        {
          class: `${mergedClsPrefix}-card__content`,
          style: this.contentStyle,
          role: 'none'
        },
        $slots
      ),
      $slots.footer
        ? h(
            'div',
            {
              class: `${mergedClsPrefix}-card__footer`,
              style: this.footerStyle,
              role: 'none'
            },
            renderSlot($slots, 'footer')
          )
        : null,
      $slots.action
        ? h(
            'div',
            { class: `${mergedClsPrefix}-card__action`, role: 'none' },
            renderSlot($slots, 'action')
          )
        : null
    )
  }
})