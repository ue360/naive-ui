import { PropType } from 'vue'
import type { ExtractPublicPropTypes } from '../../_utils'
declare const pageHeaderProps: {
  title: StringConstructor
  subtitle: StringConstructor
  extra: StringConstructor
  onBack: PropType<() => void>
  theme: PropType<
    import('../../_mixins').Theme<
      'PageHeader',
      {
        titleFontWeight: string
        fontSize: string
        titleTextColor: string
        backColor: string
        backColorHover: string
        backColorPressed: string
        subtitleTextColor: string
        titleFontSize: string
        backSize: string
      },
      unknown
    >
  >
  themeOverrides: PropType<
    import('../../_mixins/use-theme').ExtractThemeOverrides<
      import('../../_mixins').Theme<
        'PageHeader',
        {
          titleFontWeight: string
          fontSize: string
          titleTextColor: string
          backColor: string
          backColorHover: string
          backColorPressed: string
          subtitleTextColor: string
          titleFontSize: string
          backSize: string
        },
        unknown
      >
    >
  >
  builtinThemeOverrides: PropType<
    import('../../_mixins/use-theme').ExtractThemeOverrides<
      import('../../_mixins').Theme<
        'PageHeader',
        {
          titleFontWeight: string
          fontSize: string
          titleTextColor: string
          backColor: string
          backColorHover: string
          backColorPressed: string
          subtitleTextColor: string
          titleFontSize: string
          backSize: string
        },
        unknown
      >
    >
  >
}
export declare type PageHeaderPorps = ExtractPublicPropTypes<
  typeof pageHeaderProps
>
declare const _default: import('vue').DefineComponent<
  {
    title: StringConstructor
    subtitle: StringConstructor
    extra: StringConstructor
    onBack: PropType<() => void>
    theme: PropType<
      import('../../_mixins').Theme<
        'PageHeader',
        {
          titleFontWeight: string
          fontSize: string
          titleTextColor: string
          backColor: string
          backColorHover: string
          backColorPressed: string
          subtitleTextColor: string
          titleFontSize: string
          backSize: string
        },
        unknown
      >
    >
    themeOverrides: PropType<
      import('../../_mixins/use-theme').ExtractThemeOverrides<
        import('../../_mixins').Theme<
          'PageHeader',
          {
            titleFontWeight: string
            fontSize: string
            titleTextColor: string
            backColor: string
            backColorHover: string
            backColorPressed: string
            subtitleTextColor: string
            titleFontSize: string
            backSize: string
          },
          unknown
        >
      >
    >
    builtinThemeOverrides: PropType<
      import('../../_mixins/use-theme').ExtractThemeOverrides<
        import('../../_mixins').Theme<
          'PageHeader',
          {
            titleFontWeight: string
            fontSize: string
            titleTextColor: string
            backColor: string
            backColorHover: string
            backColorPressed: string
            subtitleTextColor: string
            titleFontSize: string
            backSize: string
          },
          unknown
        >
      >
    >
  },
  {
    rtlEnabled:
      | import('vue').Ref<
          | import('../../config-provider/src/internal-interface').RtlItem
          | undefined
        >
      | undefined
    mergedClsPrefix: import('vue').ComputedRef<string>
    cssVars: import('vue').ComputedRef<{
      '--title-text-color': string
      '--title-font-size': string
      '--title-font-weight': string
      '--font-size': string
      '--back-size': string
      '--subtitle-text-color': string
      '--back-color': string
      '--back-color-hover': string
      '--back-color-pressed': string
      '--bezier': string
    }>
  },
  unknown,
  {},
  {},
  import('vue').ComponentOptionsMixin,
  import('vue').ComponentOptionsMixin,
  Record<string, any>,
  string,
  import('vue').VNodeProps &
    import('vue').AllowedComponentProps &
    import('vue').ComponentCustomProps,
  Readonly<
    {
      title?: unknown
      subtitle?: unknown
      extra?: unknown
      onBack?: unknown
      theme?: unknown
      themeOverrides?: unknown
      builtinThemeOverrides?: unknown
    } & {} & {
      extra?: string | undefined
      title?: string | undefined
      theme?:
        | import('../../_mixins').Theme<
            'PageHeader',
            {
              titleFontWeight: string
              fontSize: string
              titleTextColor: string
              backColor: string
              backColorHover: string
              backColorPressed: string
              subtitleTextColor: string
              titleFontSize: string
              backSize: string
            },
            unknown
          >
        | undefined
      themeOverrides?:
        | import('../../_mixins/use-theme').ExtractThemeOverrides<
            import('../../_mixins').Theme<
              'PageHeader',
              {
                titleFontWeight: string
                fontSize: string
                titleTextColor: string
                backColor: string
                backColorHover: string
                backColorPressed: string
                subtitleTextColor: string
                titleFontSize: string
                backSize: string
              },
              unknown
            >
          >
        | undefined
      builtinThemeOverrides?:
        | import('../../_mixins/use-theme').ExtractThemeOverrides<
            import('../../_mixins').Theme<
              'PageHeader',
              {
                titleFontWeight: string
                fontSize: string
                titleTextColor: string
                backColor: string
                backColorHover: string
                backColorPressed: string
                subtitleTextColor: string
                titleFontSize: string
                backSize: string
              },
              unknown
            >
          >
        | undefined
      subtitle?: string | undefined
      onBack?: (() => void) | undefined
    }
  >,
  {}
>
export default _default