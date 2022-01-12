import { PropType } from 'vue'
import type { ExtractPublicPropTypes } from '../../_utils'
declare const collapseProps: {
  readonly show: {
    readonly type: BooleanConstructor
    readonly default: true
  }
  readonly appear: BooleanConstructor
  /** @deprecated */
  readonly collapsed: {
    readonly type: PropType<boolean | undefined>
    readonly default: undefined
  }
  readonly theme: PropType<
    import('../../_mixins').Theme<
      'CollapseTransition',
      {
        bezier: string
      },
      any
    >
  >
  readonly themeOverrides: PropType<
    import('../../_mixins/use-theme').ExtractThemeOverrides<
      import('../../_mixins').Theme<
        'CollapseTransition',
        {
          bezier: string
        },
        any
      >
    >
  >
  readonly builtinThemeOverrides: PropType<
    import('../../_mixins/use-theme').ExtractThemeOverrides<
      import('../../_mixins').Theme<
        'CollapseTransition',
        {
          bezier: string
        },
        any
      >
    >
  >
}
export declare type CollapseTransitionProps = ExtractPublicPropTypes<
  typeof collapseProps
>
declare const _default: import('vue').DefineComponent<
  {
    readonly show: {
      readonly type: BooleanConstructor
      readonly default: true
    }
    readonly appear: BooleanConstructor
    /** @deprecated */
    readonly collapsed: {
      readonly type: PropType<boolean | undefined>
      readonly default: undefined
    }
    readonly theme: PropType<
      import('../../_mixins').Theme<
        'CollapseTransition',
        {
          bezier: string
        },
        any
      >
    >
    readonly themeOverrides: PropType<
      import('../../_mixins/use-theme').ExtractThemeOverrides<
        import('../../_mixins').Theme<
          'CollapseTransition',
          {
            bezier: string
          },
          any
        >
      >
    >
    readonly builtinThemeOverrides: PropType<
      import('../../_mixins/use-theme').ExtractThemeOverrides<
        import('../../_mixins').Theme<
          'CollapseTransition',
          {
            bezier: string
          },
          any
        >
      >
    >
  },
  {
    mergedShow: import('vue').ComputedRef<boolean>
    mergedClsPrefix: import('vue').ComputedRef<string>
    cssVars: import('vue').ComputedRef<{
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
      readonly show?: unknown
      readonly appear?: unknown
      readonly collapsed?: unknown
      readonly theme?: unknown
      readonly themeOverrides?: unknown
      readonly builtinThemeOverrides?: unknown
    } & {
      show: boolean
      appear: boolean
    } & {
      theme?:
        | import('../../_mixins').Theme<
            'CollapseTransition',
            {
              bezier: string
            },
            any
          >
        | undefined
      themeOverrides?:
        | import('../../_mixins/use-theme').ExtractThemeOverrides<
            import('../../_mixins').Theme<
              'CollapseTransition',
              {
                bezier: string
              },
              any
            >
          >
        | undefined
      builtinThemeOverrides?:
        | import('../../_mixins/use-theme').ExtractThemeOverrides<
            import('../../_mixins').Theme<
              'CollapseTransition',
              {
                bezier: string
              },
              any
            >
          >
        | undefined
      collapsed?: boolean | undefined
    }
  >,
  {
    show: boolean
    appear: boolean
    collapsed: boolean | undefined
  }
>
export default _default
