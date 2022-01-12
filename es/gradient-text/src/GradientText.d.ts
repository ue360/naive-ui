import { PropType } from 'vue'
import type { ExtractPublicPropTypes } from '../../_utils'
declare type Gradient =
  | string
  | {
      deg?: string | number
      from: string
      to: string
    }
declare const gradientTextProps: {
  readonly size: PropType<string | number>
  readonly fontSize: PropType<string | number>
  readonly type: {
    readonly type: PropType<
      'error' | 'info' | 'success' | 'warning' | 'primary' | 'danger'
    >
    readonly default: 'primary'
  }
  readonly color: PropType<Gradient>
  readonly gradient: PropType<Gradient>
  readonly theme: PropType<
    import('../../_mixins').Theme<
      'GradientText',
      {
        fontWeight: string
        rotate: string
        colorStartPrimary: string
        colorEndPrimary: string
        colorStartInfo: string
        colorEndInfo: string
        colorStartWarning: string
        colorEndWarning: string
        colorStartError: string
        colorEndError: string
        colorStartSuccess: string
        colorEndSuccess: string
      },
      any
    >
  >
  readonly themeOverrides: PropType<
    import('../../_mixins/use-theme').ExtractThemeOverrides<
      import('../../_mixins').Theme<
        'GradientText',
        {
          fontWeight: string
          rotate: string
          colorStartPrimary: string
          colorEndPrimary: string
          colorStartInfo: string
          colorEndInfo: string
          colorStartWarning: string
          colorEndWarning: string
          colorStartError: string
          colorEndError: string
          colorStartSuccess: string
          colorEndSuccess: string
        },
        any
      >
    >
  >
  readonly builtinThemeOverrides: PropType<
    import('../../_mixins/use-theme').ExtractThemeOverrides<
      import('../../_mixins').Theme<
        'GradientText',
        {
          fontWeight: string
          rotate: string
          colorStartPrimary: string
          colorEndPrimary: string
          colorStartInfo: string
          colorEndInfo: string
          colorStartWarning: string
          colorEndWarning: string
          colorStartError: string
          colorEndError: string
          colorStartSuccess: string
          colorEndSuccess: string
        },
        any
      >
    >
  >
}
export declare type GradientTextProps = ExtractPublicPropTypes<
  typeof gradientTextProps
>
declare const _default: import('vue').DefineComponent<
  {
    readonly size: PropType<string | number>
    readonly fontSize: PropType<string | number>
    readonly type: {
      readonly type: PropType<
        'error' | 'info' | 'success' | 'warning' | 'primary' | 'danger'
      >
      readonly default: 'primary'
    }
    readonly color: PropType<Gradient>
    readonly gradient: PropType<Gradient>
    readonly theme: PropType<
      import('../../_mixins').Theme<
        'GradientText',
        {
          fontWeight: string
          rotate: string
          colorStartPrimary: string
          colorEndPrimary: string
          colorStartInfo: string
          colorEndInfo: string
          colorStartWarning: string
          colorEndWarning: string
          colorStartError: string
          colorEndError: string
          colorStartSuccess: string
          colorEndSuccess: string
        },
        any
      >
    >
    readonly themeOverrides: PropType<
      import('../../_mixins/use-theme').ExtractThemeOverrides<
        import('../../_mixins').Theme<
          'GradientText',
          {
            fontWeight: string
            rotate: string
            colorStartPrimary: string
            colorEndPrimary: string
            colorStartInfo: string
            colorEndInfo: string
            colorStartWarning: string
            colorEndWarning: string
            colorStartError: string
            colorEndError: string
            colorStartSuccess: string
            colorEndSuccess: string
          },
          any
        >
      >
    >
    readonly builtinThemeOverrides: PropType<
      import('../../_mixins/use-theme').ExtractThemeOverrides<
        import('../../_mixins').Theme<
          'GradientText',
          {
            fontWeight: string
            rotate: string
            colorStartPrimary: string
            colorEndPrimary: string
            colorStartInfo: string
            colorEndInfo: string
            colorStartWarning: string
            colorEndWarning: string
            colorStartError: string
            colorEndError: string
            colorStartSuccess: string
            colorEndSuccess: string
          },
          any
        >
      >
    >
  },
  {
    mergedClsPrefix: import('vue').ComputedRef<string>
    compatibleType: import('vue').ComputedRef<
      'error' | 'info' | 'success' | 'warning' | 'primary'
    >
    styleFontSize: import('vue').ComputedRef<string | number | undefined>
    styleBgImage: import('vue').ComputedRef<string | undefined>
    cssVars: import('vue').ComputedRef<{
      '--bezier': string
      '--rotate': string
      '--color-start': string
      '--color-end': string
      '--font-weight': string
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
      readonly size?: unknown
      readonly fontSize?: unknown
      readonly type?: unknown
      readonly color?: unknown
      readonly gradient?: unknown
      readonly theme?: unknown
      readonly themeOverrides?: unknown
      readonly builtinThemeOverrides?: unknown
    } & {
      type: 'error' | 'info' | 'success' | 'warning' | 'primary' | 'danger'
    } & {
      color?: Gradient | undefined
      size?: string | number | undefined
      fontSize?: string | number | undefined
      theme?:
        | import('../../_mixins').Theme<
            'GradientText',
            {
              fontWeight: string
              rotate: string
              colorStartPrimary: string
              colorEndPrimary: string
              colorStartInfo: string
              colorEndInfo: string
              colorStartWarning: string
              colorEndWarning: string
              colorStartError: string
              colorEndError: string
              colorStartSuccess: string
              colorEndSuccess: string
            },
            any
          >
        | undefined
      themeOverrides?:
        | import('../../_mixins/use-theme').ExtractThemeOverrides<
            import('../../_mixins').Theme<
              'GradientText',
              {
                fontWeight: string
                rotate: string
                colorStartPrimary: string
                colorEndPrimary: string
                colorStartInfo: string
                colorEndInfo: string
                colorStartWarning: string
                colorEndWarning: string
                colorStartError: string
                colorEndError: string
                colorStartSuccess: string
                colorEndSuccess: string
              },
              any
            >
          >
        | undefined
      builtinThemeOverrides?:
        | import('../../_mixins/use-theme').ExtractThemeOverrides<
            import('../../_mixins').Theme<
              'GradientText',
              {
                fontWeight: string
                rotate: string
                colorStartPrimary: string
                colorEndPrimary: string
                colorStartInfo: string
                colorEndInfo: string
                colorStartWarning: string
                colorEndWarning: string
                colorStartError: string
                colorEndError: string
                colorStartSuccess: string
                colorEndSuccess: string
              },
              any
            >
          >
        | undefined
      gradient?: Gradient | undefined
    }
  >,
  {
    type: 'error' | 'info' | 'success' | 'warning' | 'primary' | 'danger'
  }
>
export default _default
