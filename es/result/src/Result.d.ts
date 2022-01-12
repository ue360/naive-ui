import { PropType } from 'vue'
import type { ExtractPublicPropTypes } from '../../_utils'
declare const resultProps: {
  size: {
    type: PropType<'small' | 'medium' | 'large' | 'huge'>
    default: string
  }
  status: {
    type: PropType<
      '500' | 'error' | 'info' | 'success' | 'warning' | '404' | '403' | '418'
    >
    default: string
  }
  title: StringConstructor
  description: StringConstructor
  theme: PropType<
    import('../../_mixins').Theme<
      'Result',
      {
        lineHeight: string
        titleFontWeight: string
        titleTextColor: string
        textColor: string
        iconColorError: string
        iconColorSuccess: string
        iconColorInfo: string
        iconColorWarning: string
        titleFontSizeSmall: string
        titleFontSizeMedium: string
        titleFontSizeLarge: string
        titleFontSizeHuge: string
        fontSizeSmall: string
        fontSizeMedium: string
        fontSizeLarge: string
        fontSizeHuge: string
        iconSizeSmall: string
        iconSizeMedium: string
        iconSizeLarge: string
        iconSizeHuge: string
        iconColor418: undefined
        iconColor404: undefined
        iconColor403: undefined
        iconColor500: undefined
      },
      any
    >
  >
  themeOverrides: PropType<
    import('../../_mixins/use-theme').ExtractThemeOverrides<
      import('../../_mixins').Theme<
        'Result',
        {
          lineHeight: string
          titleFontWeight: string
          titleTextColor: string
          textColor: string
          iconColorError: string
          iconColorSuccess: string
          iconColorInfo: string
          iconColorWarning: string
          titleFontSizeSmall: string
          titleFontSizeMedium: string
          titleFontSizeLarge: string
          titleFontSizeHuge: string
          fontSizeSmall: string
          fontSizeMedium: string
          fontSizeLarge: string
          fontSizeHuge: string
          iconSizeSmall: string
          iconSizeMedium: string
          iconSizeLarge: string
          iconSizeHuge: string
          iconColor418: undefined
          iconColor404: undefined
          iconColor403: undefined
          iconColor500: undefined
        },
        any
      >
    >
  >
  builtinThemeOverrides: PropType<
    import('../../_mixins/use-theme').ExtractThemeOverrides<
      import('../../_mixins').Theme<
        'Result',
        {
          lineHeight: string
          titleFontWeight: string
          titleTextColor: string
          textColor: string
          iconColorError: string
          iconColorSuccess: string
          iconColorInfo: string
          iconColorWarning: string
          titleFontSizeSmall: string
          titleFontSizeMedium: string
          titleFontSizeLarge: string
          titleFontSizeHuge: string
          fontSizeSmall: string
          fontSizeMedium: string
          fontSizeLarge: string
          fontSizeHuge: string
          iconSizeSmall: string
          iconSizeMedium: string
          iconSizeLarge: string
          iconSizeHuge: string
          iconColor418: undefined
          iconColor404: undefined
          iconColor403: undefined
          iconColor500: undefined
        },
        any
      >
    >
  >
}
export declare type ResultProps = ExtractPublicPropTypes<typeof resultProps>
declare const _default: import('vue').DefineComponent<
  {
    size: {
      type: PropType<'small' | 'medium' | 'large' | 'huge'>
      default: string
    }
    status: {
      type: PropType<
        '500' | 'error' | 'info' | 'success' | 'warning' | '404' | '403' | '418'
      >
      default: string
    }
    title: StringConstructor
    description: StringConstructor
    theme: PropType<
      import('../../_mixins').Theme<
        'Result',
        {
          lineHeight: string
          titleFontWeight: string
          titleTextColor: string
          textColor: string
          iconColorError: string
          iconColorSuccess: string
          iconColorInfo: string
          iconColorWarning: string
          titleFontSizeSmall: string
          titleFontSizeMedium: string
          titleFontSizeLarge: string
          titleFontSizeHuge: string
          fontSizeSmall: string
          fontSizeMedium: string
          fontSizeLarge: string
          fontSizeHuge: string
          iconSizeSmall: string
          iconSizeMedium: string
          iconSizeLarge: string
          iconSizeHuge: string
          iconColor418: undefined
          iconColor404: undefined
          iconColor403: undefined
          iconColor500: undefined
        },
        any
      >
    >
    themeOverrides: PropType<
      import('../../_mixins/use-theme').ExtractThemeOverrides<
        import('../../_mixins').Theme<
          'Result',
          {
            lineHeight: string
            titleFontWeight: string
            titleTextColor: string
            textColor: string
            iconColorError: string
            iconColorSuccess: string
            iconColorInfo: string
            iconColorWarning: string
            titleFontSizeSmall: string
            titleFontSizeMedium: string
            titleFontSizeLarge: string
            titleFontSizeHuge: string
            fontSizeSmall: string
            fontSizeMedium: string
            fontSizeLarge: string
            fontSizeHuge: string
            iconSizeSmall: string
            iconSizeMedium: string
            iconSizeLarge: string
            iconSizeHuge: string
            iconColor418: undefined
            iconColor404: undefined
            iconColor403: undefined
            iconColor500: undefined
          },
          any
        >
      >
    >
    builtinThemeOverrides: PropType<
      import('../../_mixins/use-theme').ExtractThemeOverrides<
        import('../../_mixins').Theme<
          'Result',
          {
            lineHeight: string
            titleFontWeight: string
            titleTextColor: string
            textColor: string
            iconColorError: string
            iconColorSuccess: string
            iconColorInfo: string
            iconColorWarning: string
            titleFontSizeSmall: string
            titleFontSizeMedium: string
            titleFontSizeLarge: string
            titleFontSizeHuge: string
            fontSizeSmall: string
            fontSizeMedium: string
            fontSizeLarge: string
            fontSizeHuge: string
            iconSizeSmall: string
            iconSizeMedium: string
            iconSizeLarge: string
            iconSizeHuge: string
            iconColor418: undefined
            iconColor404: undefined
            iconColor403: undefined
            iconColor500: undefined
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
      '--font-size': string
      '--icon-size': string
      '--line-height': string
      '--text-color': string
      '--title-font-size': string
      '--title-font-weight': string
      '--title-text-color': string
      '--icon-color': string | undefined
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
      size?: unknown
      status?: unknown
      title?: unknown
      description?: unknown
      theme?: unknown
      themeOverrides?: unknown
      builtinThemeOverrides?: unknown
    } & {
      size: 'small' | 'medium' | 'large' | 'huge'
      status:
        | '500'
        | 'error'
        | 'info'
        | 'success'
        | 'warning'
        | '404'
        | '403'
        | '418'
    } & {
      description?: string | undefined
      title?: string | undefined
      theme?:
        | import('../../_mixins').Theme<
            'Result',
            {
              lineHeight: string
              titleFontWeight: string
              titleTextColor: string
              textColor: string
              iconColorError: string
              iconColorSuccess: string
              iconColorInfo: string
              iconColorWarning: string
              titleFontSizeSmall: string
              titleFontSizeMedium: string
              titleFontSizeLarge: string
              titleFontSizeHuge: string
              fontSizeSmall: string
              fontSizeMedium: string
              fontSizeLarge: string
              fontSizeHuge: string
              iconSizeSmall: string
              iconSizeMedium: string
              iconSizeLarge: string
              iconSizeHuge: string
              iconColor418: undefined
              iconColor404: undefined
              iconColor403: undefined
              iconColor500: undefined
            },
            any
          >
        | undefined
      themeOverrides?:
        | import('../../_mixins/use-theme').ExtractThemeOverrides<
            import('../../_mixins').Theme<
              'Result',
              {
                lineHeight: string
                titleFontWeight: string
                titleTextColor: string
                textColor: string
                iconColorError: string
                iconColorSuccess: string
                iconColorInfo: string
                iconColorWarning: string
                titleFontSizeSmall: string
                titleFontSizeMedium: string
                titleFontSizeLarge: string
                titleFontSizeHuge: string
                fontSizeSmall: string
                fontSizeMedium: string
                fontSizeLarge: string
                fontSizeHuge: string
                iconSizeSmall: string
                iconSizeMedium: string
                iconSizeLarge: string
                iconSizeHuge: string
                iconColor418: undefined
                iconColor404: undefined
                iconColor403: undefined
                iconColor500: undefined
              },
              any
            >
          >
        | undefined
      builtinThemeOverrides?:
        | import('../../_mixins/use-theme').ExtractThemeOverrides<
            import('../../_mixins').Theme<
              'Result',
              {
                lineHeight: string
                titleFontWeight: string
                titleTextColor: string
                textColor: string
                iconColorError: string
                iconColorSuccess: string
                iconColorInfo: string
                iconColorWarning: string
                titleFontSizeSmall: string
                titleFontSizeMedium: string
                titleFontSizeLarge: string
                titleFontSizeHuge: string
                fontSizeSmall: string
                fontSizeMedium: string
                fontSizeLarge: string
                fontSizeHuge: string
                iconSizeSmall: string
                iconSizeMedium: string
                iconSizeLarge: string
                iconSizeHuge: string
                iconColor418: undefined
                iconColor404: undefined
                iconColor403: undefined
                iconColor500: undefined
              },
              any
            >
          >
        | undefined
    }
  >,
  {
    size: 'small' | 'medium' | 'large' | 'huge'
    status:
      | '500'
      | 'error'
      | 'info'
      | 'success'
      | 'warning'
      | '404'
      | '403'
      | '418'
  }
>
export default _default
