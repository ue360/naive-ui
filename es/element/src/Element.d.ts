import type { ExtractPublicPropTypes } from '../../_utils'
declare const elementProps: {
  readonly tag: {
    readonly type: StringConstructor
    readonly default: 'div'
  }
  readonly theme: import('vue').PropType<
    import('../../_mixins').Theme<'Element', {}, any>
  >
  readonly themeOverrides: import('vue').PropType<
    import('../../_mixins/use-theme').ExtractThemeOverrides<
      import('../../_mixins').Theme<'Element', {}, any>
    >
  >
  readonly builtinThemeOverrides: import('vue').PropType<
    import('../../_mixins/use-theme').ExtractThemeOverrides<
      import('../../_mixins').Theme<'Element', {}, any>
    >
  >
}
export declare type ElementProps = ExtractPublicPropTypes<typeof elementProps>
declare const _default: import('vue').DefineComponent<
  {
    readonly tag: {
      readonly type: StringConstructor
      readonly default: 'div'
    }
    readonly theme: import('vue').PropType<
      import('../../_mixins').Theme<'Element', {}, any>
    >
    readonly themeOverrides: import('vue').PropType<
      import('../../_mixins/use-theme').ExtractThemeOverrides<
        import('../../_mixins').Theme<'Element', {}, any>
      >
    >
    readonly builtinThemeOverrides: import('vue').PropType<
      import('../../_mixins/use-theme').ExtractThemeOverrides<
        import('../../_mixins').Theme<'Element', {}, any>
      >
    >
  },
  {
    mergedClsPrefix: import('vue').ComputedRef<string>
    cssVars: import('vue').ComputedRef<Record<string, string | number>>
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
      readonly tag?: unknown
      readonly theme?: unknown
      readonly themeOverrides?: unknown
      readonly builtinThemeOverrides?: unknown
    } & {
      tag: string
    } & {
      theme?: import('../../_mixins').Theme<'Element', {}, any> | undefined
      themeOverrides?:
        | import('../../_mixins/use-theme').ExtractThemeOverrides<
            import('../../_mixins').Theme<'Element', {}, any>
          >
        | undefined
      builtinThemeOverrides?:
        | import('../../_mixins/use-theme').ExtractThemeOverrides<
            import('../../_mixins').Theme<'Element', {}, any>
          >
        | undefined
    }
  >,
  {
    tag: string
  }
>
export default _default
