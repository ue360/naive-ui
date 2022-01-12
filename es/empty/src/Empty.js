import { h, defineComponent, computed, renderSlot, inject } from 'vue'
import { EmptyIcon } from '../../_internal/icons'
import { useConfig, useLocale, useTheme } from '../../_mixins'
import { createKey } from '../../_utils'
import { NBaseIcon } from '../../_internal'
import { emptyLight } from '../styles'
import style from './styles/index.cssr'
import { configProviderInjectionKey } from '../../config-provider/src/ConfigProvider'
const emptyProps = Object.assign(Object.assign({}, useTheme.props), {
  description: {
    type: String,
    default: undefined
  },
  showDescription: {
    type: Boolean,
    default: true
  },
  size: {
    type: String,
    default: 'medium'
  },
  renderIcon: Function
})
export default defineComponent({
  name: 'Empty',
  props: emptyProps,
  setup(props) {
    const { mergedClsPrefixRef } = useConfig(props)
    const themeRef = useTheme(
      'Empty',
      'Empty',
      style,
      emptyLight,
      props,
      mergedClsPrefixRef
    )
    const { localeRef } = useLocale('Empty')
    const NConfigProvider = inject(configProviderInjectionKey, null)
    const mergedDescriptionRef = computed(() => {
      var _a, _b, _c
      return (_a = props.description) !== null && _a !== void 0
        ? _a
        : (_c =
            (_b =
              NConfigProvider === null || NConfigProvider === void 0
                ? void 0
                : NConfigProvider.mergedComponentPropsRef.value) === null ||
            _b === void 0
              ? void 0
              : _b.Empty) === null || _c === void 0
        ? void 0
        : _c.description
    })
    const mergedRenderIconRef = computed(() => {
      var _a, _b
      return (
        ((_b =
          (_a =
            NConfigProvider === null || NConfigProvider === void 0
              ? void 0
              : NConfigProvider.mergedComponentPropsRef.value) === null ||
          _a === void 0
            ? void 0
            : _a.Empty) === null || _b === void 0
          ? void 0
          : _b.renderIcon) || (() => h(EmptyIcon, null))
      )
    })
    return {
      mergedClsPrefix: mergedClsPrefixRef,
      mergedRenderIcon: mergedRenderIconRef,
      localizedDescription: computed(() => {
        return mergedDescriptionRef.value || localeRef.value.description
      }),
      cssVars: computed(() => {
        const { size } = props
        const {
          common: { cubicBezierEaseInOut },
          self: {
            [createKey('iconSize', size)]: iconSize,
            [createKey('fontSize', size)]: fontSize,
            textColor,
            iconColor,
            extraTextColor
          }
        } = themeRef.value
        return {
          '--icon-size': iconSize,
          '--font-size': fontSize,
          '--bezier': cubicBezierEaseInOut,
          '--text-color': textColor,
          '--icon-color': iconColor,
          '--extra-text-color': extraTextColor
        }
      })
    }
  },
  render() {
    const { $slots, mergedClsPrefix } = this
    return h(
      'div',
      { class: `${mergedClsPrefix}-empty`, style: this.cssVars },
      h(
        'div',
        { class: `${mergedClsPrefix}-empty__icon` },
        renderSlot($slots, 'icon', undefined, () => [
          h(
            NBaseIcon,
            { clsPrefix: mergedClsPrefix },
            { default: this.mergedRenderIcon }
          )
        ])
      ),
      this.showDescription
        ? h(
            'div',
            { class: `${mergedClsPrefix}-empty__description` },
            renderSlot($slots, 'default', undefined, () => [
              this.localizedDescription
            ])
          )
        : null,
      $slots.extra
        ? h(
            'div',
            { class: `${mergedClsPrefix}-empty__extra` },
            renderSlot($slots, 'extra')
          )
        : null
    )
  }
})
