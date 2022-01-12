import { h, defineComponent, computed, ref, provide, toRef } from 'vue'
import { useConfig, useTheme } from '../../_mixins'
import { NBaseClose } from '../../_internal'
import { warn, createKey, call } from '../../_utils'
import { tagLight } from '../styles'
import commonProps from './common-props'
import style from './styles/index.cssr'
import useRtl from '../../_mixins/use-rtl'
const tagProps = Object.assign(
  Object.assign(Object.assign({}, useTheme.props), commonProps),
  {
    bordered: {
      type: Boolean,
      default: undefined
    },
    checked: Boolean,
    checkable: Boolean,
    onClose: [Array, Function],
    onMouseenter: Function,
    onMouseleave: Function,
    'onUpdate:checked': Function,
    onUpdateChecked: Function,
    // private
    internalStopClickPropagation: Boolean,
    // deprecated
    onCheckedChange: {
      type: Function,
      validator: () => {
        if (process.env.NODE_ENV !== 'production') {
          warn(
            'tag',
            '`on-checked-change` is deprecated, please use `on-update:checked` instead'
          )
        }
        return true
      },
      default: undefined
    }
  }
)
export const tagInjectionKey = Symbol('tag')
export default defineComponent({
  name: 'Tag',
  props: tagProps,
  setup(props) {
    const contentRef = ref(null)
    const { mergedBorderedRef, mergedClsPrefixRef, NConfigProvider } =
      useConfig(props)
    const themeRef = useTheme(
      'Tag',
      'Tag',
      style,
      tagLight,
      props,
      mergedClsPrefixRef
    )
    provide(tagInjectionKey, {
      roundRef: toRef(props, 'round')
    })
    function handleClick(e) {
      if (!props.disabled) {
        if (props.checkable) {
          const {
            checked,
            onCheckedChange,
            onUpdateChecked,
            'onUpdate:checked': _onUpdateChecked
          } = props
          if (onUpdateChecked) onUpdateChecked(!checked)
          if (_onUpdateChecked) _onUpdateChecked(!checked)
          // deprecated
          if (onCheckedChange) onCheckedChange(!checked)
        }
      }
    }
    function handleCloseClick(e) {
      if (props.internalStopClickPropagation) {
        e.stopPropagation()
      }
      if (!props.disabled) {
        const { onClose } = props
        if (onClose) call(onClose, e)
      }
    }
    const tagPublicMethods = {
      setTextContent(textContent) {
        const { value } = contentRef
        if (value) value.textContent = textContent
      }
    }
    const rtlEnabledRef = useRtl(
      'Tag',
      NConfigProvider === null || NConfigProvider === void 0
        ? void 0
        : NConfigProvider.mergedRtlRef,
      mergedClsPrefixRef
    )
    return Object.assign(Object.assign({}, tagPublicMethods), {
      rtlEnabled: rtlEnabledRef,
      mergedClsPrefix: mergedClsPrefixRef,
      contentRef,
      mergedBordered: mergedBorderedRef,
      handleClick,
      handleCloseClick,
      cssVars: computed(() => {
        const { type, size, color: { color, textColor } = {} } = props
        const {
          common: { cubicBezierEaseInOut },
          self: {
            padding,
            closeMargin,
            closeMarginRtl,
            borderRadius,
            opacityDisabled,
            textColorCheckable,
            textColorHoverCheckable,
            textColorPressedCheckable,
            textColorChecked,
            colorCheckable,
            colorHoverCheckable,
            colorPressedCheckable,
            colorChecked,
            colorCheckedHover,
            colorCheckedPressed,
            [createKey('closeSize', size)]: closeSize,
            [createKey('fontSize', size)]: fontSize,
            [createKey('height', size)]: height,
            [createKey('color', type)]: typedColor,
            [createKey('textColor', type)]: typeTextColor,
            [createKey('border', type)]: border,
            [createKey('closeColor', type)]: closeColor,
            [createKey('closeColorHover', type)]: closeColorHover,
            [createKey('closeColorPressed', type)]: closeColorPressed
          }
        } = themeRef.value
        return {
          '--avatar-size-override': `calc(${height} - 8px)`,
          '--bezier': cubicBezierEaseInOut,
          '--border-radius': borderRadius,
          '--border': border,
          '--close-color': closeColor,
          '--close-color-hover': closeColorHover,
          '--close-color-pressed': closeColorPressed,
          '--close-margin': closeMargin,
          '--close-margin-rtl': closeMarginRtl,
          '--close-size': closeSize,
          '--color': color || typedColor,
          '--color-checkable': colorCheckable,
          '--color-checked': colorChecked,
          '--color-checked-hover': colorCheckedHover,
          '--color-checked-pressed': colorCheckedPressed,
          '--color-hover-checkable': colorHoverCheckable,
          '--color-pressed-checkable': colorPressedCheckable,
          '--font-size': fontSize,
          '--height': height,
          '--opacity-disabled': opacityDisabled,
          '--padding': padding,
          '--text-color': textColor || typeTextColor,
          '--text-color-checkable': textColorCheckable,
          '--text-color-checked': textColorChecked,
          '--text-color-hover-checkable': textColorHoverCheckable,
          '--text-color-pressed-checkable': textColorPressedCheckable
        }
      })
    })
  },
  render() {
    const {
      mergedClsPrefix,
      rtlEnabled,
      color: { borderColor } = {},
      $slots
    } = this
    return h(
      'div',
      {
        class: [
          `${mergedClsPrefix}-tag`,
          {
            [`${mergedClsPrefix}-tag--rtl`]: rtlEnabled,
            [`${mergedClsPrefix}-tag--disabled`]: this.disabled,
            [`${mergedClsPrefix}-tag--checkable`]: this.checkable,
            [`${mergedClsPrefix}-tag--checked`]: this.checkable && this.checked,
            [`${mergedClsPrefix}-tag--round`]: this.round
          }
        ],
        style: this.cssVars,
        onClick: this.handleClick,
        onMouseenter: this.onMouseenter,
        onMouseleave: this.onMouseleave
      },
      $slots.avatar &&
        h(
          'div',
          { class: `${mergedClsPrefix}-tag__avatar` },
          {
            default: $slots.avatar
          }
        ),
      h(
        'span',
        { class: `${mergedClsPrefix}-tag__content`, ref: 'contentRef' },
        this.$slots
      ),
      !this.checkable && this.closable
        ? h(NBaseClose, {
            clsPrefix: mergedClsPrefix,
            class: `${mergedClsPrefix}-tag__close`,
            disabled: this.disabled,
            onClick: this.handleCloseClick
          })
        : null,
      !this.checkable && this.mergedBordered
        ? h('div', {
            class: `${mergedClsPrefix}-tag__border`,
            style: { borderColor }
          })
        : null
    )
  }
})
