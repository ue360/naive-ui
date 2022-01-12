import { PropType } from 'vue'
import type { ExtractPublicPropTypes } from '../../_utils'
declare const skeletonProps: {
  readonly text: BooleanConstructor
  readonly round: BooleanConstructor
  readonly circle: BooleanConstructor
  readonly height: PropType<string | number>
  readonly width: PropType<string | number>
  readonly size: PropType<'small' | 'medium' | 'large'>
  readonly repeat: {
    readonly type: NumberConstructor
    readonly default: 1
  }
  readonly animated: {
    readonly type: BooleanConstructor
    readonly default: true
  }
  readonly sharp: {
    readonly type: BooleanConstructor
    readonly default: true
  }
  readonly theme: PropType<
    import('../../_mixins').Theme<
      'Skeleton',
      {
        color: string
        colorEnd: string
        borderRadius: string
        heightSmall: string
        heightMedium: string
        heightLarge: string
      },
      any
    >
  >
  readonly themeOverrides: PropType<
    import('../../_mixins/use-theme').ExtractThemeOverrides<
      import('../../_mixins').Theme<
        'Skeleton',
        {
          color: string
          colorEnd: string
          borderRadius: string
          heightSmall: string
          heightMedium: string
          heightLarge: string
        },
        any
      >
    >
  >
  readonly builtinThemeOverrides: PropType<
    import('../../_mixins/use-theme').ExtractThemeOverrides<
      import('../../_mixins').Theme<
        'Skeleton',
        {
          color: string
          colorEnd: string
          borderRadius: string
          heightSmall: string
          heightMedium: string
          heightLarge: string
        },
        any
      >
    >
  >
}
export declare type SkeletonProps = ExtractPublicPropTypes<typeof skeletonProps>
declare const _default: import('vue').DefineComponent<
  {
    readonly text: BooleanConstructor
    readonly round: BooleanConstructor
    readonly circle: BooleanConstructor
    readonly height: PropType<string | number>
    readonly width: PropType<string | number>
    readonly size: PropType<'small' | 'medium' | 'large'>
    readonly repeat: {
      readonly type: NumberConstructor
      readonly default: 1
    }
    readonly animated: {
      readonly type: BooleanConstructor
      readonly default: true
    }
    readonly sharp: {
      readonly type: BooleanConstructor
      readonly default: true
    }
    readonly theme: PropType<
      import('../../_mixins').Theme<
        'Skeleton',
        {
          color: string
          colorEnd: string
          borderRadius: string
          heightSmall: string
          heightMedium: string
          heightLarge: string
        },
        any
      >
    >
    readonly themeOverrides: PropType<
      import('../../_mixins/use-theme').ExtractThemeOverrides<
        import('../../_mixins').Theme<
          'Skeleton',
          {
            color: string
            colorEnd: string
            borderRadius: string
            heightSmall: string
            heightMedium: string
            heightLarge: string
          },
          any
        >
      >
    >
    readonly builtinThemeOverrides: PropType<
      import('../../_mixins/use-theme').ExtractThemeOverrides<
        import('../../_mixins').Theme<
          'Skeleton',
          {
            color: string
            colorEnd: string
            borderRadius: string
            heightSmall: string
            heightMedium: string
            heightLarge: string
          },
          any
        >
      >
    >
  },
  {
    mergedClsPrefix: import('vue').ComputedRef<string>
    style: import('vue').ComputedRef<{
      display: string
      verticalAlign: string
      borderRadius: string
      width: string | undefined
      height: string | undefined
      animation: string
      '--bezier': string
      '--color-start': string
      '--color-end': string
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
      readonly text?: unknown
      readonly round?: unknown
      readonly circle?: unknown
      readonly height?: unknown
      readonly width?: unknown
      readonly size?: unknown
      readonly repeat?: unknown
      readonly animated?: unknown
      readonly sharp?: unknown
      readonly theme?: unknown
      readonly themeOverrides?: unknown
      readonly builtinThemeOverrides?: unknown
    } & {
      repeat: number
      round: boolean
      text: boolean
      circle: boolean
      animated: boolean
      sharp: boolean
    } & {
      size?: 'small' | 'medium' | 'large' | undefined
      height?: string | number | undefined
      width?: string | number | undefined
      theme?:
        | import('../../_mixins').Theme<
            'Skeleton',
            {
              color: string
              colorEnd: string
              borderRadius: string
              heightSmall: string
              heightMedium: string
              heightLarge: string
            },
            any
          >
        | undefined
      themeOverrides?:
        | import('../../_mixins/use-theme').ExtractThemeOverrides<
            import('../../_mixins').Theme<
              'Skeleton',
              {
                color: string
                colorEnd: string
                borderRadius: string
                heightSmall: string
                heightMedium: string
                heightLarge: string
              },
              any
            >
          >
        | undefined
      builtinThemeOverrides?:
        | import('../../_mixins/use-theme').ExtractThemeOverrides<
            import('../../_mixins').Theme<
              'Skeleton',
              {
                color: string
                colorEnd: string
                borderRadius: string
                heightSmall: string
                heightMedium: string
                heightLarge: string
              },
              any
            >
          >
        | undefined
    }
  >,
  {
    repeat: number
    round: boolean
    text: boolean
    circle: boolean
    animated: boolean
    sharp: boolean
  }
>
export default _default
