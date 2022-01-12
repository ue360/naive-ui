import {
  h,
  inject,
  computed,
  defineComponent,
  provide,
  renderSlot,
  markRaw
} from 'vue'
import { useMemo } from 'vooks'
import { merge } from 'lodash-es'
import { warn } from '../../_utils'
import { defaultClsPrefix } from '../../_mixins'
export const configProviderInjectionKey = Symbol('configProviderInjection')
export const configProviderProps = {
  abstract: Boolean,
  bordered: {
    type: Boolean,
    default: undefined
  },
  clsPrefix: String,
  locale: Object,
  dateLocale: Object,
  namespace: String,
  rtl: Array,
  tag: {
    type: String,
    default: 'div'
  },
  hljs: Object,
  theme: Object,
  themeOverrides: Object,
  componentOptions: Object,
  icons: Object,
  breakpoints: Object,
  // deprecated
  as: {
    type: String,
    validator: () => {
      warn('config-provider', '`as` is deprecated, please use `tag` instead.')
      return true
    },
    default: undefined
  }
}
export default defineComponent({
  name: 'ConfigProvider',
  alias: ['App'],
  props: configProviderProps,
  setup(props) {
    const NConfigProvider = inject(configProviderInjectionKey, null)
    const mergedThemeRef = computed(() => {
      const { theme } = props
      if (theme === null) return undefined
      const inheritedTheme =
        NConfigProvider === null || NConfigProvider === void 0
          ? void 0
          : NConfigProvider.mergedThemeRef.value
      return theme === undefined
        ? inheritedTheme
        : inheritedTheme === undefined
        ? theme
        : Object.assign({}, inheritedTheme, theme)
    })
    const mergedThemeOverridesRef = computed(() => {
      const { themeOverrides } = props
      // stop inheriting themeOverrides
      if (themeOverrides === null) return undefined
      // use inherited themeOverrides
      if (themeOverrides === undefined) {
        return NConfigProvider === null || NConfigProvider === void 0
          ? void 0
          : NConfigProvider.mergedThemeOverridesRef.value
      } else {
        const inheritedThemeOverrides =
          NConfigProvider === null || NConfigProvider === void 0
            ? void 0
            : NConfigProvider.mergedThemeOverridesRef.value
        if (inheritedThemeOverrides === undefined) {
          // no inherited, use self overrides
          return themeOverrides
        } else {
          // merge overrides
          return merge({}, inheritedThemeOverrides, themeOverrides)
        }
      }
    })
    const mergedNamespaceRef = useMemo(() => {
      const { namespace } = props
      return namespace === undefined
        ? NConfigProvider === null || NConfigProvider === void 0
          ? void 0
          : NConfigProvider.mergedNamespaceRef.value
        : namespace
    })
    const mergedBorderedRef = useMemo(() => {
      const { bordered } = props
      return bordered === undefined
        ? NConfigProvider === null || NConfigProvider === void 0
          ? void 0
          : NConfigProvider.mergedBorderedRef.value
        : bordered
    })
    const mergedIconsRef = computed(() => {
      const { icons } = props
      return icons === undefined
        ? NConfigProvider === null || NConfigProvider === void 0
          ? void 0
          : NConfigProvider.mergedIconsRef.value
        : icons
    })
    const mergedComponentPropsRef = computed(() => {
      const { componentOptions } = props
      if (componentOptions !== undefined) return componentOptions
      return NConfigProvider === null || NConfigProvider === void 0
        ? void 0
        : NConfigProvider.mergedComponentPropsRef.value
    })
    const mergedClsPrefixRef = computed(() => {
      const { clsPrefix } = props
      if (clsPrefix !== undefined) return clsPrefix
      return NConfigProvider === null || NConfigProvider === void 0
        ? void 0
        : NConfigProvider.mergedClsPrefixRef.value
    })
    const mergedRtlRef = computed(() => {
      const { rtl } = props
      if (rtl === undefined) {
        return NConfigProvider === null || NConfigProvider === void 0
          ? void 0
          : NConfigProvider.mergedRtlRef.value
      }
      const rtlEnabledState = {}
      for (const rtlInfo of rtl) {
        rtlEnabledState[rtlInfo.name] = markRaw(rtlInfo)
      }
      return rtlEnabledState
    })
    const mergedBreakpointsRef = computed(() => {
      return (
        props.breakpoints ||
        (NConfigProvider === null || NConfigProvider === void 0
          ? void 0
          : NConfigProvider.mergedBreakpointsRef.value)
      )
    })
    provide(configProviderInjectionKey, {
      mergedBreakpointsRef,
      mergedRtlRef,
      mergedIconsRef,
      mergedComponentPropsRef,
      mergedBorderedRef,
      mergedNamespaceRef,
      mergedClsPrefixRef,
      mergedLocaleRef: computed(() => {
        const { locale } = props
        if (locale === null) return undefined
        return locale === undefined
          ? NConfigProvider === null || NConfigProvider === void 0
            ? void 0
            : NConfigProvider.mergedLocaleRef.value
          : locale
      }),
      mergedDateLocaleRef: computed(() => {
        const { dateLocale } = props
        if (dateLocale === null) return undefined
        return dateLocale === undefined
          ? NConfigProvider === null || NConfigProvider === void 0
            ? void 0
            : NConfigProvider.mergedDateLocaleRef.value
          : dateLocale
      }),
      mergedHljsRef: computed(() => {
        const { hljs } = props
        return hljs === undefined
          ? NConfigProvider === null || NConfigProvider === void 0
            ? void 0
            : NConfigProvider.mergedHljsRef.value
          : hljs
      }),
      mergedThemeRef,
      mergedThemeOverridesRef
    })
    return {
      mergedClsPrefix: mergedClsPrefixRef,
      mergedBordered: mergedBorderedRef,
      mergedNamespace: mergedNamespaceRef,
      mergedTheme: mergedThemeRef,
      mergedThemeOverrides: mergedThemeOverridesRef
    }
  },
  render() {
    return !this.abstract
      ? h(
          this.as || this.tag,
          {
            class: `${this.mergedClsPrefix || defaultClsPrefix}-config-provider`
          },
          renderSlot(this.$slots, 'default')
        )
      : renderSlot(this.$slots, 'default')
  }
})
