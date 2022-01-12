import { PropType, ExtractPropTypes, InjectionKey, Ref } from 'vue'
import { MergedTheme } from '../../_mixins'
import type { TimelineTheme } from '../styles'
import type { ExtractPublicPropTypes } from '../../_utils'
declare const timelineProps: {
  readonly horizontal: BooleanConstructor
  readonly itemPlacement: {
    readonly type: PropType<'left' | 'right'>
    readonly default: 'left'
  }
  readonly size: {
    readonly type: PropType<'medium' | 'large'>
    readonly default: 'medium'
  }
  readonly iconSize: NumberConstructor
  readonly theme: PropType<
    import('../../_mixins').Theme<
      'Timeline',
      {
        contentFontSize: string
        titleFontWeight: string
        circleBorder: string
        circleBorderInfo: string
        circleBorderError: string
        circleBorderSuccess: string
        circleBorderWarning: string
        iconColor: string
        iconColorInfo: string
        iconColorError: string
        iconColorSuccess: string
        iconColorWarning: string
        titleTextColor: string
        contentTextColor: string
        metaTextColor: string
        lineColor: string
        titleMarginMedium: number
        titleMarginLarge: string
        titleFontSizeMedium: string
        titleFontSizeLarge: string
        iconSizeMedium: string
        iconSizeLarge: string
      },
      any
    >
  >
  readonly themeOverrides: PropType<
    import('../../_mixins/use-theme').ExtractThemeOverrides<
      import('../../_mixins').Theme<
        'Timeline',
        {
          contentFontSize: string
          titleFontWeight: string
          circleBorder: string
          circleBorderInfo: string
          circleBorderError: string
          circleBorderSuccess: string
          circleBorderWarning: string
          iconColor: string
          iconColorInfo: string
          iconColorError: string
          iconColorSuccess: string
          iconColorWarning: string
          titleTextColor: string
          contentTextColor: string
          metaTextColor: string
          lineColor: string
          titleMarginMedium: number
          titleMarginLarge: string
          titleFontSizeMedium: string
          titleFontSizeLarge: string
          iconSizeMedium: string
          iconSizeLarge: string
        },
        any
      >
    >
  >
  readonly builtinThemeOverrides: PropType<
    import('../../_mixins/use-theme').ExtractThemeOverrides<
      import('../../_mixins').Theme<
        'Timeline',
        {
          contentFontSize: string
          titleFontWeight: string
          circleBorder: string
          circleBorderInfo: string
          circleBorderError: string
          circleBorderSuccess: string
          circleBorderWarning: string
          iconColor: string
          iconColorInfo: string
          iconColorError: string
          iconColorSuccess: string
          iconColorWarning: string
          titleTextColor: string
          contentTextColor: string
          metaTextColor: string
          lineColor: string
          titleMarginMedium: number
          titleMarginLarge: string
          titleFontSizeMedium: string
          titleFontSizeLarge: string
          iconSizeMedium: string
          iconSizeLarge: string
        },
        any
      >
    >
  >
}
export interface TimelineInjection {
  props: ExtractPropTypes<typeof timelineProps>
  mergedThemeRef: Ref<MergedTheme<TimelineTheme>>
  mergedClsPrefixRef: Ref<string>
}
export declare const timelineInjectionKey: InjectionKey<TimelineInjection>
export declare type TimelineProps = ExtractPublicPropTypes<typeof timelineProps>
declare const _default: import('vue').DefineComponent<
  {
    readonly horizontal: BooleanConstructor
    readonly itemPlacement: {
      readonly type: PropType<'left' | 'right'>
      readonly default: 'left'
    }
    readonly size: {
      readonly type: PropType<'medium' | 'large'>
      readonly default: 'medium'
    }
    readonly iconSize: NumberConstructor
    readonly theme: PropType<
      import('../../_mixins').Theme<
        'Timeline',
        {
          contentFontSize: string
          titleFontWeight: string
          circleBorder: string
          circleBorderInfo: string
          circleBorderError: string
          circleBorderSuccess: string
          circleBorderWarning: string
          iconColor: string
          iconColorInfo: string
          iconColorError: string
          iconColorSuccess: string
          iconColorWarning: string
          titleTextColor: string
          contentTextColor: string
          metaTextColor: string
          lineColor: string
          titleMarginMedium: number
          titleMarginLarge: string
          titleFontSizeMedium: string
          titleFontSizeLarge: string
          iconSizeMedium: string
          iconSizeLarge: string
        },
        any
      >
    >
    readonly themeOverrides: PropType<
      import('../../_mixins/use-theme').ExtractThemeOverrides<
        import('../../_mixins').Theme<
          'Timeline',
          {
            contentFontSize: string
            titleFontWeight: string
            circleBorder: string
            circleBorderInfo: string
            circleBorderError: string
            circleBorderSuccess: string
            circleBorderWarning: string
            iconColor: string
            iconColorInfo: string
            iconColorError: string
            iconColorSuccess: string
            iconColorWarning: string
            titleTextColor: string
            contentTextColor: string
            metaTextColor: string
            lineColor: string
            titleMarginMedium: number
            titleMarginLarge: string
            titleFontSizeMedium: string
            titleFontSizeLarge: string
            iconSizeMedium: string
            iconSizeLarge: string
          },
          any
        >
      >
    >
    readonly builtinThemeOverrides: PropType<
      import('../../_mixins/use-theme').ExtractThemeOverrides<
        import('../../_mixins').Theme<
          'Timeline',
          {
            contentFontSize: string
            titleFontWeight: string
            circleBorder: string
            circleBorderInfo: string
            circleBorderError: string
            circleBorderSuccess: string
            circleBorderWarning: string
            iconColor: string
            iconColorInfo: string
            iconColorError: string
            iconColorSuccess: string
            iconColorWarning: string
            titleTextColor: string
            contentTextColor: string
            metaTextColor: string
            lineColor: string
            titleMarginMedium: number
            titleMarginLarge: string
            titleFontSizeMedium: string
            titleFontSizeLarge: string
            iconSizeMedium: string
            iconSizeLarge: string
          },
          any
        >
      >
    >
  },
  () => JSX.Element,
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
      readonly horizontal?: unknown
      readonly itemPlacement?: unknown
      readonly size?: unknown
      readonly iconSize?: unknown
      readonly theme?: unknown
      readonly themeOverrides?: unknown
      readonly builtinThemeOverrides?: unknown
    } & {
      size: 'medium' | 'large'
      horizontal: boolean
      itemPlacement: 'left' | 'right'
    } & {
      theme?:
        | import('../../_mixins').Theme<
            'Timeline',
            {
              contentFontSize: string
              titleFontWeight: string
              circleBorder: string
              circleBorderInfo: string
              circleBorderError: string
              circleBorderSuccess: string
              circleBorderWarning: string
              iconColor: string
              iconColorInfo: string
              iconColorError: string
              iconColorSuccess: string
              iconColorWarning: string
              titleTextColor: string
              contentTextColor: string
              metaTextColor: string
              lineColor: string
              titleMarginMedium: number
              titleMarginLarge: string
              titleFontSizeMedium: string
              titleFontSizeLarge: string
              iconSizeMedium: string
              iconSizeLarge: string
            },
            any
          >
        | undefined
      themeOverrides?:
        | import('../../_mixins/use-theme').ExtractThemeOverrides<
            import('../../_mixins').Theme<
              'Timeline',
              {
                contentFontSize: string
                titleFontWeight: string
                circleBorder: string
                circleBorderInfo: string
                circleBorderError: string
                circleBorderSuccess: string
                circleBorderWarning: string
                iconColor: string
                iconColorInfo: string
                iconColorError: string
                iconColorSuccess: string
                iconColorWarning: string
                titleTextColor: string
                contentTextColor: string
                metaTextColor: string
                lineColor: string
                titleMarginMedium: number
                titleMarginLarge: string
                titleFontSizeMedium: string
                titleFontSizeLarge: string
                iconSizeMedium: string
                iconSizeLarge: string
              },
              any
            >
          >
        | undefined
      builtinThemeOverrides?:
        | import('../../_mixins/use-theme').ExtractThemeOverrides<
            import('../../_mixins').Theme<
              'Timeline',
              {
                contentFontSize: string
                titleFontWeight: string
                circleBorder: string
                circleBorderInfo: string
                circleBorderError: string
                circleBorderSuccess: string
                circleBorderWarning: string
                iconColor: string
                iconColorInfo: string
                iconColorError: string
                iconColorSuccess: string
                iconColorWarning: string
                titleTextColor: string
                contentTextColor: string
                metaTextColor: string
                lineColor: string
                titleMarginMedium: number
                titleMarginLarge: string
                titleFontSizeMedium: string
                titleFontSizeLarge: string
                iconSizeMedium: string
                iconSizeLarge: string
              },
              any
            >
          >
        | undefined
      iconSize?: number | undefined
    }
  >,
  {
    size: 'medium' | 'large'
    horizontal: boolean
    itemPlacement: 'left' | 'right'
  }
>
export default _default
