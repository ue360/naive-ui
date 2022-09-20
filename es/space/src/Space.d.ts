import { PropType, CSSProperties } from 'vue'
import type { ExtractPublicPropTypes } from '../../_utils'
declare type Align =
  | 'stretch'
  | 'baseline'
  | 'start'
  | 'end'
  | 'center'
  | 'flex-end'
  | 'flex-start'
export declare type Justify =
  | 'start'
  | 'end'
  | 'center'
  | 'space-around'
  | 'space-between'
declare const spaceProps: {
  readonly align: PropType<Align>
  readonly justify: {
    readonly type: PropType<Justify>
    readonly default: 'start'
  }
  readonly inline: BooleanConstructor
  readonly vertical: BooleanConstructor
  readonly size: {
    readonly type: PropType<
      number | [number, number] | 'small' | 'medium' | 'large'
    >
    readonly default: 'medium'
  }
  readonly itemStyle: PropType<string | CSSProperties>
  readonly wrap: {
    readonly type: BooleanConstructor
    readonly default: true
  }
  readonly theme: PropType<
    import('../../_mixins').Theme<
      'Space',
      {
        gapSmall: string
        gapMedium: string
        gapLarge: string
      },
      any
    >
  >
  readonly themeOverrides: PropType<
    import('../../_mixins/use-theme').ExtractThemeOverrides<
      import('../../_mixins').Theme<
        'Space',
        {
          gapSmall: string
          gapMedium: string
          gapLarge: string
        },
        any
      >
    >
  >
  readonly builtinThemeOverrides: PropType<
    import('../../_mixins/use-theme').ExtractThemeOverrides<
      import('../../_mixins').Theme<
        'Space',
        {
          gapSmall: string
          gapMedium: string
          gapLarge: string
        },
        any
      >
    >
  >
}
export declare type SpaceProps = ExtractPublicPropTypes<typeof spaceProps>
declare const _default: import('vue').DefineComponent<
  {
    readonly align: PropType<Align>
    readonly justify: {
      readonly type: PropType<Justify>
      readonly default: 'start'
    }
    readonly inline: BooleanConstructor
    readonly vertical: BooleanConstructor
    readonly size: {
      readonly type: PropType<
        number | [number, number] | 'small' | 'medium' | 'large'
      >
      readonly default: 'medium'
    }
    readonly itemStyle: PropType<string | CSSProperties>
    readonly wrap: {
      readonly type: BooleanConstructor
      readonly default: true
    }
    readonly theme: PropType<
      import('../../_mixins').Theme<
        'Space',
        {
          gapSmall: string
          gapMedium: string
          gapLarge: string
        },
        any
      >
    >
    readonly themeOverrides: PropType<
      import('../../_mixins/use-theme').ExtractThemeOverrides<
        import('../../_mixins').Theme<
          'Space',
          {
            gapSmall: string
            gapMedium: string
            gapLarge: string
          },
          any
        >
      >
    >
    readonly builtinThemeOverrides: PropType<
      import('../../_mixins/use-theme').ExtractThemeOverrides<
        import('../../_mixins').Theme<
          'Space',
          {
            gapSmall: string
            gapMedium: string
            gapLarge: string
          },
          any
        >
      >
    >
  },
  {
    mergedClsPrefix: import('vue').ComputedRef<string>
    margin: import('vue').ComputedRef<{
      horizontal: number
      vertical: number
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
      readonly align?: unknown
      readonly justify?: unknown
      readonly inline?: unknown
      readonly vertical?: unknown
      readonly size?: unknown
      readonly itemStyle?: unknown
      readonly wrap?: unknown
      readonly theme?: unknown
      readonly themeOverrides?: unknown
      readonly builtinThemeOverrides?: unknown
    } & {
      inline: boolean
      size: number | [number, number] | 'small' | 'medium' | 'large'
      wrap: boolean
      vertical: boolean
      justify: Justify
    } & {
      align?: Align | undefined
      theme?:
        | import('../../_mixins').Theme<
            'Space',
            {
              gapSmall: string
              gapMedium: string
              gapLarge: string
            },
            any
          >
        | undefined
      themeOverrides?:
        | import('../../_mixins/use-theme').ExtractThemeOverrides<
            import('../../_mixins').Theme<
              'Space',
              {
                gapSmall: string
                gapMedium: string
                gapLarge: string
              },
              any
            >
          >
        | undefined
      builtinThemeOverrides?:
        | import('../../_mixins/use-theme').ExtractThemeOverrides<
            import('../../_mixins').Theme<
              'Space',
              {
                gapSmall: string
                gapMedium: string
                gapLarge: string
              },
              any
            >
          >
        | undefined
      itemStyle?: string | CSSProperties | undefined
    }
  >,
  {
    inline: boolean
    size: number | [number, number] | 'small' | 'medium' | 'large'
    wrap: boolean
    vertical: boolean
    justify: Justify
  }
>
export default _default