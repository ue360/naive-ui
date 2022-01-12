import { PropType } from 'vue'
import type { ExtractPublicPropTypes } from '../../_utils'
declare const avatarProps: {
  readonly size: {
    readonly type: PropType<number | 'small' | 'medium' | 'large'>
    readonly default: 'medium'
  }
  readonly src: StringConstructor
  readonly circle: BooleanConstructor
  readonly color: StringConstructor
  readonly objectFit: {
    readonly type: PropType<
      'fill' | 'none' | 'contain' | 'cover' | 'scale-down'
    >
    readonly default: 'fill'
  }
  readonly round: BooleanConstructor
  readonly onError: PropType<(e: Event) => void>
  readonly fallbackSrc: StringConstructor
  readonly theme: PropType<
    import('../../_mixins').Theme<
      'Avatar',
      {
        borderRadius: string
        fontSize: string
        heightTiny: string
        heightSmall: string
        heightMedium: string
        heightLarge: string
        heightHuge: string
        color: string
      },
      any
    >
  >
  readonly themeOverrides: PropType<
    import('../../_mixins/use-theme').ExtractThemeOverrides<
      import('../../_mixins').Theme<
        'Avatar',
        {
          borderRadius: string
          fontSize: string
          heightTiny: string
          heightSmall: string
          heightMedium: string
          heightLarge: string
          heightHuge: string
          color: string
        },
        any
      >
    >
  >
  readonly builtinThemeOverrides: PropType<
    import('../../_mixins/use-theme').ExtractThemeOverrides<
      import('../../_mixins').Theme<
        'Avatar',
        {
          borderRadius: string
          fontSize: string
          heightTiny: string
          heightSmall: string
          heightMedium: string
          heightLarge: string
          heightHuge: string
          color: string
        },
        any
      >
    >
  >
}
export declare type AvatarProps = ExtractPublicPropTypes<typeof avatarProps>
declare const _default: import('vue').DefineComponent<
  {
    readonly size: {
      readonly type: PropType<number | 'small' | 'medium' | 'large'>
      readonly default: 'medium'
    }
    readonly src: StringConstructor
    readonly circle: BooleanConstructor
    readonly color: StringConstructor
    readonly objectFit: {
      readonly type: PropType<
        'fill' | 'none' | 'contain' | 'cover' | 'scale-down'
      >
      readonly default: 'fill'
    }
    readonly round: BooleanConstructor
    readonly onError: PropType<(e: Event) => void>
    readonly fallbackSrc: StringConstructor
    readonly theme: PropType<
      import('../../_mixins').Theme<
        'Avatar',
        {
          borderRadius: string
          fontSize: string
          heightTiny: string
          heightSmall: string
          heightMedium: string
          heightLarge: string
          heightHuge: string
          color: string
        },
        any
      >
    >
    readonly themeOverrides: PropType<
      import('../../_mixins/use-theme').ExtractThemeOverrides<
        import('../../_mixins').Theme<
          'Avatar',
          {
            borderRadius: string
            fontSize: string
            heightTiny: string
            heightSmall: string
            heightMedium: string
            heightLarge: string
            heightHuge: string
            color: string
          },
          any
        >
      >
    >
    readonly builtinThemeOverrides: PropType<
      import('../../_mixins/use-theme').ExtractThemeOverrides<
        import('../../_mixins').Theme<
          'Avatar',
          {
            borderRadius: string
            fontSize: string
            heightTiny: string
            heightSmall: string
            heightMedium: string
            heightLarge: string
            heightHuge: string
            color: string
          },
          any
        >
      >
    >
  },
  {
    textRef: import('vue').Ref<HTMLElement | null>
    selfRef: import('vue').Ref<HTMLElement | null>
    mergedRoundRef: import('vue').ComputedRef<boolean>
    mergedClsPrefix: import('vue').ComputedRef<string>
    fitTextTransform: () => void
    cssVars: import('vue').ComputedRef<{
      '--font-size': string
      '--border-radius': string
      '--color': string
      '--bezier': string
      '--merged-size': string
    }>
    hasLoadError: import('vue').Ref<boolean>
    handleError: (e: Event) => void
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
      readonly src?: unknown
      readonly circle?: unknown
      readonly color?: unknown
      readonly objectFit?: unknown
      readonly round?: unknown
      readonly onError?: unknown
      readonly fallbackSrc?: unknown
      readonly theme?: unknown
      readonly themeOverrides?: unknown
      readonly builtinThemeOverrides?: unknown
    } & {
      round: boolean
      size: number | 'small' | 'medium' | 'large'
      circle: boolean
      objectFit: 'fill' | 'none' | 'contain' | 'cover' | 'scale-down'
    } & {
      onError?: ((e: Event) => void) | undefined
      color?: string | undefined
      src?: string | undefined
      theme?:
        | import('../../_mixins').Theme<
            'Avatar',
            {
              borderRadius: string
              fontSize: string
              heightTiny: string
              heightSmall: string
              heightMedium: string
              heightLarge: string
              heightHuge: string
              color: string
            },
            any
          >
        | undefined
      themeOverrides?:
        | import('../../_mixins/use-theme').ExtractThemeOverrides<
            import('../../_mixins').Theme<
              'Avatar',
              {
                borderRadius: string
                fontSize: string
                heightTiny: string
                heightSmall: string
                heightMedium: string
                heightLarge: string
                heightHuge: string
                color: string
              },
              any
            >
          >
        | undefined
      builtinThemeOverrides?:
        | import('../../_mixins/use-theme').ExtractThemeOverrides<
            import('../../_mixins').Theme<
              'Avatar',
              {
                borderRadius: string
                fontSize: string
                heightTiny: string
                heightSmall: string
                heightMedium: string
                heightLarge: string
                heightHuge: string
                color: string
              },
              any
            >
          >
        | undefined
      fallbackSrc?: string | undefined
    }
  >,
  {
    round: boolean
    size: number | 'small' | 'medium' | 'large'
    circle: boolean
    objectFit: 'fill' | 'none' | 'contain' | 'cover' | 'scale-down'
  }
>
export default _default
