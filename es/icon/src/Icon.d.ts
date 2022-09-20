import { PropType } from 'vue'
export declare type Depth =
  | 1
  | 2
  | 3
  | 4
  | 5
  | '1'
  | '2'
  | '3'
  | '4'
  | '5'
  | undefined
declare const _default: import('vue').DefineComponent<
  {
    depth: PropType<Depth>
    size: (StringConstructor | NumberConstructor)[]
    color: StringConstructor
    theme: PropType<
      import('../../_mixins').Theme<
        'Icon',
        {
          color: string
          opacity1Depth: string
          opacity2Depth: string
          opacity3Depth: string
          opacity4Depth: string
          opacity5Depth: string
        },
        any
      >
    >
    themeOverrides: PropType<
      import('../../_mixins/use-theme').ExtractThemeOverrides<
        import('../../_mixins').Theme<
          'Icon',
          {
            color: string
            opacity1Depth: string
            opacity2Depth: string
            opacity3Depth: string
            opacity4Depth: string
            opacity5Depth: string
          },
          any
        >
      >
    >
    builtinThemeOverrides: PropType<
      import('../../_mixins/use-theme').ExtractThemeOverrides<
        import('../../_mixins').Theme<
          'Icon',
          {
            color: string
            opacity1Depth: string
            opacity2Depth: string
            opacity3Depth: string
            opacity4Depth: string
            opacity5Depth: string
          },
          any
        >
      >
    >
  },
  {
    mergedClsPrefix: import('vue').ComputedRef<string>
    mergedStyle: import('vue').ComputedRef<{
      fontSize: string | undefined
      color: string | undefined
    }>
    cssVars: import('vue').ComputedRef<
      | {
          '--bezier': string
          '--color': string
          '--opacity': string
        }
      | {
          '--bezier': string
          '--color'?: undefined
          '--opacity'?: undefined
        }
    >
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
      depth?: unknown
      size?: unknown
      color?: unknown
      theme?: unknown
      themeOverrides?: unknown
      builtinThemeOverrides?: unknown
    } & {} & {
      color?: string | undefined
      size?: string | number | undefined
      theme?:
        | import('../../_mixins').Theme<
            'Icon',
            {
              color: string
              opacity1Depth: string
              opacity2Depth: string
              opacity3Depth: string
              opacity4Depth: string
              opacity5Depth: string
            },
            any
          >
        | undefined
      themeOverrides?:
        | import('../../_mixins/use-theme').ExtractThemeOverrides<
            import('../../_mixins').Theme<
              'Icon',
              {
                color: string
                opacity1Depth: string
                opacity2Depth: string
                opacity3Depth: string
                opacity4Depth: string
                opacity5Depth: string
              },
              any
            >
          >
        | undefined
      builtinThemeOverrides?:
        | import('../../_mixins/use-theme').ExtractThemeOverrides<
            import('../../_mixins').Theme<
              'Icon',
              {
                color: string
                opacity1Depth: string
                opacity2Depth: string
                opacity3Depth: string
                opacity4Depth: string
                opacity5Depth: string
              },
              any
            >
          >
        | undefined
      depth?: Depth
    }
  >,
  {}
>
export default _default