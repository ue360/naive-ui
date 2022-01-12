import { PropType } from 'vue'
import type { ExtractPublicPropTypes } from '../../_utils'
declare const dividerProps: {
  readonly titlePlacement: {
    readonly type: PropType<'left' | 'right' | 'center'>
    readonly default: 'center'
  }
  readonly dashed: BooleanConstructor
  readonly vertical: BooleanConstructor
  readonly theme: PropType<
    import('../../_mixins').Theme<
      'Divider',
      {
        textColor: string
        color: string
        fontWeight: string
      },
      any
    >
  >
  readonly themeOverrides: PropType<
    import('../../_mixins/use-theme').ExtractThemeOverrides<
      import('../../_mixins').Theme<
        'Divider',
        {
          textColor: string
          color: string
          fontWeight: string
        },
        any
      >
    >
  >
  readonly builtinThemeOverrides: PropType<
    import('../../_mixins/use-theme').ExtractThemeOverrides<
      import('../../_mixins').Theme<
        'Divider',
        {
          textColor: string
          color: string
          fontWeight: string
        },
        any
      >
    >
  >
}
export declare type DividerProps = ExtractPublicPropTypes<typeof dividerProps>
declare const _default: import('vue').DefineComponent<
  {
    readonly titlePlacement: {
      readonly type: PropType<'left' | 'right' | 'center'>
      readonly default: 'center'
    }
    readonly dashed: BooleanConstructor
    readonly vertical: BooleanConstructor
    readonly theme: PropType<
      import('../../_mixins').Theme<
        'Divider',
        {
          textColor: string
          color: string
          fontWeight: string
        },
        any
      >
    >
    readonly themeOverrides: PropType<
      import('../../_mixins/use-theme').ExtractThemeOverrides<
        import('../../_mixins').Theme<
          'Divider',
          {
            textColor: string
            color: string
            fontWeight: string
          },
          any
        >
      >
    >
    readonly builtinThemeOverrides: PropType<
      import('../../_mixins/use-theme').ExtractThemeOverrides<
        import('../../_mixins').Theme<
          'Divider',
          {
            textColor: string
            color: string
            fontWeight: string
          },
          any
        >
      >
    >
  },
  {
    mergedClsPrefix: import('vue').ComputedRef<string>
    cssVars: import('vue').ComputedRef<{
      '--bezier': string
      '--color': string
      '--text-color': string
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
      readonly titlePlacement?: unknown
      readonly dashed?: unknown
      readonly vertical?: unknown
      readonly theme?: unknown
      readonly themeOverrides?: unknown
      readonly builtinThemeOverrides?: unknown
    } & {
      dashed: boolean
      vertical: boolean
      titlePlacement: 'left' | 'right' | 'center'
    } & {
      theme?:
        | import('../../_mixins').Theme<
            'Divider',
            {
              textColor: string
              color: string
              fontWeight: string
            },
            any
          >
        | undefined
      themeOverrides?:
        | import('../../_mixins/use-theme').ExtractThemeOverrides<
            import('../../_mixins').Theme<
              'Divider',
              {
                textColor: string
                color: string
                fontWeight: string
              },
              any
            >
          >
        | undefined
      builtinThemeOverrides?:
        | import('../../_mixins/use-theme').ExtractThemeOverrides<
            import('../../_mixins').Theme<
              'Divider',
              {
                textColor: string
                color: string
                fontWeight: string
              },
              any
            >
          >
        | undefined
    }
  >,
  {
    dashed: boolean
    vertical: boolean
    titlePlacement: 'left' | 'right' | 'center'
  }
>
export default _default
