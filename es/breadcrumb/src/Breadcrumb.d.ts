import { InjectionKey, Ref } from 'vue'
import type { ExtractPublicPropTypes } from '../../_utils'
export interface BreadcrumbInjection {
  separatorRef: Ref<string>
  mergedClsPrefixRef: Ref<string>
}
export declare const breadcrumbInjectionKey: InjectionKey<BreadcrumbInjection>
declare const breadcrumbProps: {
  readonly separator: {
    readonly type: StringConstructor
    readonly default: '/'
  }
  readonly theme: import('vue').PropType<
    import('../../_mixins').Theme<
      'Breadcrumb',
      {
        fontSize: string
        itemTextColor: string
        itemTextColorHover: string
        itemTextColorPressed: string
        itemTextColorActive: string
        separatorColor: string
        fontWeightActive: string
      },
      any
    >
  >
  readonly themeOverrides: import('vue').PropType<
    import('../../_mixins/use-theme').ExtractThemeOverrides<
      import('../../_mixins').Theme<
        'Breadcrumb',
        {
          fontSize: string
          itemTextColor: string
          itemTextColorHover: string
          itemTextColorPressed: string
          itemTextColorActive: string
          separatorColor: string
          fontWeightActive: string
        },
        any
      >
    >
  >
  readonly builtinThemeOverrides: import('vue').PropType<
    import('../../_mixins/use-theme').ExtractThemeOverrides<
      import('../../_mixins').Theme<
        'Breadcrumb',
        {
          fontSize: string
          itemTextColor: string
          itemTextColorHover: string
          itemTextColorPressed: string
          itemTextColorActive: string
          separatorColor: string
          fontWeightActive: string
        },
        any
      >
    >
  >
}
export declare type BreadcrumbProps = ExtractPublicPropTypes<
  typeof breadcrumbProps
>
declare const _default: import('vue').DefineComponent<
  {
    readonly separator: {
      readonly type: StringConstructor
      readonly default: '/'
    }
    readonly theme: import('vue').PropType<
      import('../../_mixins').Theme<
        'Breadcrumb',
        {
          fontSize: string
          itemTextColor: string
          itemTextColorHover: string
          itemTextColorPressed: string
          itemTextColorActive: string
          separatorColor: string
          fontWeightActive: string
        },
        any
      >
    >
    readonly themeOverrides: import('vue').PropType<
      import('../../_mixins/use-theme').ExtractThemeOverrides<
        import('../../_mixins').Theme<
          'Breadcrumb',
          {
            fontSize: string
            itemTextColor: string
            itemTextColorHover: string
            itemTextColorPressed: string
            itemTextColorActive: string
            separatorColor: string
            fontWeightActive: string
          },
          any
        >
      >
    >
    readonly builtinThemeOverrides: import('vue').PropType<
      import('../../_mixins/use-theme').ExtractThemeOverrides<
        import('../../_mixins').Theme<
          'Breadcrumb',
          {
            fontSize: string
            itemTextColor: string
            itemTextColorHover: string
            itemTextColorPressed: string
            itemTextColorActive: string
            separatorColor: string
            fontWeightActive: string
          },
          any
        >
      >
    >
  },
  {
    mergedClsPrefix: import('vue').ComputedRef<string>
    cssVars: import('vue').ComputedRef<{
      '--font-size': string
      '--bezier': string
      '--item-text-color': string
      '--item-text-color-hover': string
      '--item-text-color-pressed': string
      '--item-text-color-active': string
      '--separator-color': string
      '--font-weight-active': string
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
      readonly separator?: unknown
      readonly theme?: unknown
      readonly themeOverrides?: unknown
      readonly builtinThemeOverrides?: unknown
    } & {
      separator: string
    } & {
      theme?:
        | import('../../_mixins').Theme<
            'Breadcrumb',
            {
              fontSize: string
              itemTextColor: string
              itemTextColorHover: string
              itemTextColorPressed: string
              itemTextColorActive: string
              separatorColor: string
              fontWeightActive: string
            },
            any
          >
        | undefined
      themeOverrides?:
        | import('../../_mixins/use-theme').ExtractThemeOverrides<
            import('../../_mixins').Theme<
              'Breadcrumb',
              {
                fontSize: string
                itemTextColor: string
                itemTextColorHover: string
                itemTextColorPressed: string
                itemTextColorActive: string
                separatorColor: string
                fontWeightActive: string
              },
              any
            >
          >
        | undefined
      builtinThemeOverrides?:
        | import('../../_mixins/use-theme').ExtractThemeOverrides<
            import('../../_mixins').Theme<
              'Breadcrumb',
              {
                fontSize: string
                itemTextColor: string
                itemTextColorHover: string
                itemTextColorPressed: string
                itemTextColorActive: string
                separatorColor: string
                fontWeightActive: string
              },
              any
            >
          >
        | undefined
    }
  >,
  {
    separator: string
  }
>
export default _default
