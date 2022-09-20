'use strict'
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod }
  }
Object.defineProperty(exports, '__esModule', { value: true })
exports.cardBasePropKeys = exports.cardBaseProps = void 0
const vue_1 = require('vue')
const seemly_1 = require('seemly')
const _mixins_1 = require('../../_mixins')
const _utils_1 = require('../../_utils')
const _internal_1 = require('../../_internal')
const styles_1 = require('../styles')
const index_cssr_1 = __importDefault(require('./styles/index.cssr'))
const use_rtl_1 = __importDefault(require('../../_mixins/use-rtl'))
exports.cardBaseProps = {
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
exports.cardBasePropKeys = (0, _utils_1.keysOf)(exports.cardBaseProps)
const cardProps = Object.assign(
  Object.assign({}, _mixins_1.useTheme.props),
  exports.cardBaseProps
)
exports.default = (0, vue_1.defineComponent)({
  name: 'Card',
  props: cardProps,
  setup(props) {
    const handleCloseClick = () => {
      const { onClose } = props
      if (onClose) (0, _utils_1.call)(onClose)
    }
    const { mergedClsPrefixRef, NConfigProvider } = (0, _mixins_1.useConfig)(
      props
    )
    const themeRef = (0, _mixins_1.useTheme)(
      'Card',
      'Card',
      index_cssr_1.default,
      styles_1.cardLight,
      props,
      mergedClsPrefixRef
    )
    const rtlEnabledRef = (0, use_rtl_1.default)(
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
      cssVars: (0, vue_1.computed)(() => {
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
            [(0, _utils_1.createKey)('padding', size)]: padding,
            [(0, _utils_1.createKey)('fontSize', size)]: fontSize,
            [(0, _utils_1.createKey)('titleFontSize', size)]: titleFontSize
          },
          common: { cubicBezierEaseInOut }
        } = themeRef.value
        const {
          top: paddingTop,
          left: paddingLeft,
          bottom: paddingBottom
        } = (0, seemly_1.getPadding)(padding)
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
    return (0, vue_1.h)(
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
        ? (0, vue_1.h)(
            'div',
            { class: `${mergedClsPrefix}-card-cover`, role: 'none' },
            (0, vue_1.renderSlot)($slots, 'cover')
          )
        : null,
      $slots.header || this.title || this.closable
        ? (0, vue_1.h)(
            'div',
            {
              class: `${mergedClsPrefix}-card-header`,
              style: this.headerStyle
            },
            (0, vue_1.h)(
              'div',
              {
                class: `${mergedClsPrefix}-card-header__main`,
                role: 'heading'
              },
              (0, vue_1.renderSlot)($slots, 'header', {}, () => [this.title])
            ),
            $slots['header-extra']
              ? (0, vue_1.h)(
                  'div',
                  { class: `${mergedClsPrefix}-card-header__extra` },
                  (0, vue_1.renderSlot)($slots, 'header-extra')
                )
              : null,
            this.closable
              ? (0, vue_1.h)(_internal_1.NBaseClose, {
                  clsPrefix: mergedClsPrefix,
                  class: `${mergedClsPrefix}-card-header__close`,
                  onClick: this.handleCloseClick
                })
              : null
          )
        : null,
      (0, vue_1.h)(
        'div',
        {
          class: `${mergedClsPrefix}-card__content`,
          style: this.contentStyle,
          role: 'none'
        },
        $slots
      ),
      $slots.footer
        ? (0, vue_1.h)(
            'div',
            {
              class: `${mergedClsPrefix}-card__footer`,
              style: this.footerStyle,
              role: 'none'
            },
            (0, vue_1.renderSlot)($slots, 'footer')
          )
        : null,
      $slots.action
        ? (0, vue_1.h)(
            'div',
            { class: `${mergedClsPrefix}-card__action`, role: 'none' },
            (0, vue_1.renderSlot)($slots, 'action')
          )
        : null
    )
  }
})