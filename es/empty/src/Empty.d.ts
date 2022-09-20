import { PropType, VNodeChild } from 'vue'
import { ExtractPublicPropTypes } from '../../_utils'
declare const emptyProps: {
  description: {
    type: StringConstructor
    default: undefined
  }
  showDescription: {
    type: BooleanConstructor
    default: boolean
  }
  size: {
    type: PropType<'small' | 'medium' | 'large' | 'huge'>
    default: string
  }
  renderIcon: PropType<() => VNodeChild>
  theme: PropType<
    import('../../_mixins').Theme<
      'Empty',
      {
        fontSizeSmall: string
        fontSizeMedium: string
        fontSizeLarge: string
        fontSizeHuge: string
        textColor: string
        iconColor: string
        extraTextColor: string
        iconSizeSmall: string
        iconSizeMedium: string
        iconSizeLarge: string
        iconSizeHuge: string
      },
      any
    >
  >
  themeOverrides: PropType<
    import('../../_mixins/use-theme').ExtractThemeOverrides<
      import('../../_mixins').Theme<
        'Empty',
        {
          fontSizeSmall: string
          fontSizeMedium: string
          fontSizeLarge: string
          fontSizeHuge: string
          textColor: string
          iconColor: string
          extraTextColor: string
          iconSizeSmall: string
          iconSizeMedium: string
          iconSizeLarge: string
          iconSizeHuge: string
        },
        any
      >
    >
  >
  builtinThemeOverrides: PropType<
    import('../../_mixins/use-theme').ExtractThemeOverrides<
      import('../../_mixins').Theme<
        'Empty',
        {
          fontSizeSmall: string
          fontSizeMedium: string
          fontSizeLarge: string
          fontSizeHuge: string
          textColor: string
          iconColor: string
          extraTextColor: string
          iconSizeSmall: string
          iconSizeMedium: string
          iconSizeLarge: string
          iconSizeHuge: string
        },
        any
      >
    >
  >
}
export declare type EmptyProps = ExtractPublicPropTypes<typeof emptyProps>
declare const _default: import('vue').DefineComponent<
  {
    description: {
      type: StringConstructor
      default: undefined
    }
    showDescription: {
      type: BooleanConstructor
      default: boolean
    }
    size: {
      type: PropType<'small' | 'medium' | 'large' | 'huge'>
      default: string
    }
    renderIcon: PropType<() => VNodeChild>
    theme: PropType<
      import('../../_mixins').Theme<
        'Empty',
        {
          fontSizeSmall: string
          fontSizeMedium: string
          fontSizeLarge: string
          fontSizeHuge: string
          textColor: string
          iconColor: string
          extraTextColor: string
          iconSizeSmall: string
          iconSizeMedium: string
          iconSizeLarge: string
          iconSizeHuge: string
        },
        any
      >
    >
    themeOverrides: PropType<
      import('../../_mixins/use-theme').ExtractThemeOverrides<
        import('../../_mixins').Theme<
          'Empty',
          {
            fontSizeSmall: string
            fontSizeMedium: string
            fontSizeLarge: string
            fontSizeHuge: string
            textColor: string
            iconColor: string
            extraTextColor: string
            iconSizeSmall: string
            iconSizeMedium: string
            iconSizeLarge: string
            iconSizeHuge: string
          },
          any
        >
      >
    >
    builtinThemeOverrides: PropType<
      import('../../_mixins/use-theme').ExtractThemeOverrides<
        import('../../_mixins').Theme<
          'Empty',
          {
            fontSizeSmall: string
            fontSizeMedium: string
            fontSizeLarge: string
            fontSizeHuge: string
            textColor: string
            iconColor: string
            extraTextColor: string
            iconSizeSmall: string
            iconSizeMedium: string
            iconSizeLarge: string
            iconSizeHuge: string
          },
          any
        >
      >
    >
  },
  {
    mergedClsPrefix: import('vue').ComputedRef<string>
    mergedRenderIcon: import('vue').ComputedRef<() => VNodeChild>
    localizedDescription: import('vue').ComputedRef<string>
    cssVars: import('vue').ComputedRef<{
      '--icon-size': string
      '--font-size': string
      '--bezier': string
      '--text-color': string
      '--icon-color': string
      '--extra-text-color': string
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
      description?: unknown
      showDescription?: unknown
      size?: unknown
      renderIcon?: unknown
      theme?: unknown
      themeOverrides?: unknown
      builtinThemeOverrides?: unknown
    } & {
      size: 'small' | 'medium' | 'large' | 'huge'
      showDescription: boolean
    } & {
      description?: string | undefined
      theme?:
        | import('../../_mixins').Theme<
            'Empty',
            {
              fontSizeSmall: string
              fontSizeMedium: string
              fontSizeLarge: string
              fontSizeHuge: string
              textColor: string
              iconColor: string
              extraTextColor: string
              iconSizeSmall: string
              iconSizeMedium: string
              iconSizeLarge: string
              iconSizeHuge: string
            },
            any
          >
        | undefined
      themeOverrides?:
        | import('../../_mixins/use-theme').ExtractThemeOverrides<
            import('../../_mixins').Theme<
              'Empty',
              {
                fontSizeSmall: string
                fontSizeMedium: string
                fontSizeLarge: string
                fontSizeHuge: string
                textColor: string
                iconColor: string
                extraTextColor: string
                iconSizeSmall: string
                iconSizeMedium: string
                iconSizeLarge: string
                iconSizeHuge: string
              },
              any
            >
          >
        | undefined
      builtinThemeOverrides?:
        | import('../../_mixins/use-theme').ExtractThemeOverrides<
            import('../../_mixins').Theme<
              'Empty',
              {
                fontSizeSmall: string
                fontSizeMedium: string
                fontSizeLarge: string
                fontSizeHuge: string
                textColor: string
                iconColor: string
                extraTextColor: string
                iconSizeSmall: string
                iconSizeMedium: string
                iconSizeLarge: string
                iconSizeHuge: string
              },
              any
            >
          >
        | undefined
      renderIcon?: (() => VNodeChild) | undefined
    }
  >,
  {
    description: string
    size: 'small' | 'medium' | 'large' | 'huge'
    showDescription: boolean
  }
>
export default _default