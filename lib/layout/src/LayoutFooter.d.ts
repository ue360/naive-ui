import type { ExtractPublicPropTypes } from '../../_utils'
declare const layoutFooterProps: {
  inverted: BooleanConstructor
  position: {
    readonly type: import('vue').PropType<'static' | 'absolute'>
    readonly default: 'static'
  }
  bordered: BooleanConstructor
  theme: import('vue').PropType<
    import('../../_mixins').Theme<
      'Layout',
      {
        textColor: string
        textColorInverted: string
        color: string
        colorEmbedded: string
        headerColor: string
        headerColorInverted: string
        footerColor: string
        footerColorInverted: string
        headerBorderColor: string
        headerBorderColorInverted: string
        footerBorderColor: string
        footerBorderColorInverted: string
        siderBorderColor: string
        siderBorderColorInverted: string
        siderColor: string
        siderColorInverted: string
        siderToggleButtonBorder: string
        siderToggleButtonColor: string
        siderToggleButtonIconColor: string
        siderToggleButtonIconColorInverted: string
        siderToggleBarColor: string
        siderToggleBarColorHover: string
        __invertScrollbar: string
      },
      {
        Scrollbar: import('../../_mixins').Theme<
          'Scrollbar',
          {
            color: string
            colorHover: string
          },
          any
        >
      }
    >
  >
  themeOverrides: import('vue').PropType<
    import('../../_mixins/use-theme').ExtractThemeOverrides<
      import('../../_mixins').Theme<
        'Layout',
        {
          textColor: string
          textColorInverted: string
          color: string
          colorEmbedded: string
          headerColor: string
          headerColorInverted: string
          footerColor: string
          footerColorInverted: string
          headerBorderColor: string
          headerBorderColorInverted: string
          footerBorderColor: string
          footerBorderColorInverted: string
          siderBorderColor: string
          siderBorderColorInverted: string
          siderColor: string
          siderColorInverted: string
          siderToggleButtonBorder: string
          siderToggleButtonColor: string
          siderToggleButtonIconColor: string
          siderToggleButtonIconColorInverted: string
          siderToggleBarColor: string
          siderToggleBarColorHover: string
          __invertScrollbar: string
        },
        {
          Scrollbar: import('../../_mixins').Theme<
            'Scrollbar',
            {
              color: string
              colorHover: string
            },
            any
          >
        }
      >
    >
  >
  builtinThemeOverrides: import('vue').PropType<
    import('../../_mixins/use-theme').ExtractThemeOverrides<
      import('../../_mixins').Theme<
        'Layout',
        {
          textColor: string
          textColorInverted: string
          color: string
          colorEmbedded: string
          headerColor: string
          headerColorInverted: string
          footerColor: string
          footerColorInverted: string
          headerBorderColor: string
          headerBorderColorInverted: string
          footerBorderColor: string
          footerBorderColorInverted: string
          siderBorderColor: string
          siderBorderColorInverted: string
          siderColor: string
          siderColorInverted: string
          siderToggleButtonBorder: string
          siderToggleButtonColor: string
          siderToggleButtonIconColor: string
          siderToggleButtonIconColorInverted: string
          siderToggleBarColor: string
          siderToggleBarColorHover: string
          __invertScrollbar: string
        },
        {
          Scrollbar: import('../../_mixins').Theme<
            'Scrollbar',
            {
              color: string
              colorHover: string
            },
            any
          >
        }
      >
    >
  >
}
export declare type LayoutFooterProps = ExtractPublicPropTypes<
  typeof layoutFooterProps
>
declare const _default: import('vue').DefineComponent<
  {
    inverted: BooleanConstructor
    position: {
      readonly type: import('vue').PropType<'static' | 'absolute'>
      readonly default: 'static'
    }
    bordered: BooleanConstructor
    theme: import('vue').PropType<
      import('../../_mixins').Theme<
        'Layout',
        {
          textColor: string
          textColorInverted: string
          color: string
          colorEmbedded: string
          headerColor: string
          headerColorInverted: string
          footerColor: string
          footerColorInverted: string
          headerBorderColor: string
          headerBorderColorInverted: string
          footerBorderColor: string
          footerBorderColorInverted: string
          siderBorderColor: string
          siderBorderColorInverted: string
          siderColor: string
          siderColorInverted: string
          siderToggleButtonBorder: string
          siderToggleButtonColor: string
          siderToggleButtonIconColor: string
          siderToggleButtonIconColorInverted: string
          siderToggleBarColor: string
          siderToggleBarColorHover: string
          __invertScrollbar: string
        },
        {
          Scrollbar: import('../../_mixins').Theme<
            'Scrollbar',
            {
              color: string
              colorHover: string
            },
            any
          >
        }
      >
    >
    themeOverrides: import('vue').PropType<
      import('../../_mixins/use-theme').ExtractThemeOverrides<
        import('../../_mixins').Theme<
          'Layout',
          {
            textColor: string
            textColorInverted: string
            color: string
            colorEmbedded: string
            headerColor: string
            headerColorInverted: string
            footerColor: string
            footerColorInverted: string
            headerBorderColor: string
            headerBorderColorInverted: string
            footerBorderColor: string
            footerBorderColorInverted: string
            siderBorderColor: string
            siderBorderColorInverted: string
            siderColor: string
            siderColorInverted: string
            siderToggleButtonBorder: string
            siderToggleButtonColor: string
            siderToggleButtonIconColor: string
            siderToggleButtonIconColorInverted: string
            siderToggleBarColor: string
            siderToggleBarColorHover: string
            __invertScrollbar: string
          },
          {
            Scrollbar: import('../../_mixins').Theme<
              'Scrollbar',
              {
                color: string
                colorHover: string
              },
              any
            >
          }
        >
      >
    >
    builtinThemeOverrides: import('vue').PropType<
      import('../../_mixins/use-theme').ExtractThemeOverrides<
        import('../../_mixins').Theme<
          'Layout',
          {
            textColor: string
            textColorInverted: string
            color: string
            colorEmbedded: string
            headerColor: string
            headerColorInverted: string
            footerColor: string
            footerColorInverted: string
            headerBorderColor: string
            headerBorderColorInverted: string
            footerBorderColor: string
            footerBorderColorInverted: string
            siderBorderColor: string
            siderBorderColorInverted: string
            siderColor: string
            siderColorInverted: string
            siderToggleButtonBorder: string
            siderToggleButtonColor: string
            siderToggleButtonIconColor: string
            siderToggleButtonIconColorInverted: string
            siderToggleBarColor: string
            siderToggleBarColorHover: string
            __invertScrollbar: string
          },
          {
            Scrollbar: import('../../_mixins').Theme<
              'Scrollbar',
              {
                color: string
                colorHover: string
              },
              any
            >
          }
        >
      >
    >
  },
  {
    mergedClsPrefix: import('vue').ComputedRef<string>
    cssVars: import('vue').ComputedRef<any>
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
      inverted?: unknown
      position?: unknown
      bordered?: unknown
      theme?: unknown
      themeOverrides?: unknown
      builtinThemeOverrides?: unknown
    } & {
      position: 'static' | 'absolute'
      bordered: boolean
      inverted: boolean
    } & {
      theme?:
        | import('../../_mixins').Theme<
            'Layout',
            {
              textColor: string
              textColorInverted: string
              color: string
              colorEmbedded: string
              headerColor: string
              headerColorInverted: string
              footerColor: string
              footerColorInverted: string
              headerBorderColor: string
              headerBorderColorInverted: string
              footerBorderColor: string
              footerBorderColorInverted: string
              siderBorderColor: string
              siderBorderColorInverted: string
              siderColor: string
              siderColorInverted: string
              siderToggleButtonBorder: string
              siderToggleButtonColor: string
              siderToggleButtonIconColor: string
              siderToggleButtonIconColorInverted: string
              siderToggleBarColor: string
              siderToggleBarColorHover: string
              __invertScrollbar: string
            },
            {
              Scrollbar: import('../../_mixins').Theme<
                'Scrollbar',
                {
                  color: string
                  colorHover: string
                },
                any
              >
            }
          >
        | undefined
      themeOverrides?:
        | import('../../_mixins/use-theme').ExtractThemeOverrides<
            import('../../_mixins').Theme<
              'Layout',
              {
                textColor: string
                textColorInverted: string
                color: string
                colorEmbedded: string
                headerColor: string
                headerColorInverted: string
                footerColor: string
                footerColorInverted: string
                headerBorderColor: string
                headerBorderColorInverted: string
                footerBorderColor: string
                footerBorderColorInverted: string
                siderBorderColor: string
                siderBorderColorInverted: string
                siderColor: string
                siderColorInverted: string
                siderToggleButtonBorder: string
                siderToggleButtonColor: string
                siderToggleButtonIconColor: string
                siderToggleButtonIconColorInverted: string
                siderToggleBarColor: string
                siderToggleBarColorHover: string
                __invertScrollbar: string
              },
              {
                Scrollbar: import('../../_mixins').Theme<
                  'Scrollbar',
                  {
                    color: string
                    colorHover: string
                  },
                  any
                >
              }
            >
          >
        | undefined
      builtinThemeOverrides?:
        | import('../../_mixins/use-theme').ExtractThemeOverrides<
            import('../../_mixins').Theme<
              'Layout',
              {
                textColor: string
                textColorInverted: string
                color: string
                colorEmbedded: string
                headerColor: string
                headerColorInverted: string
                footerColor: string
                footerColorInverted: string
                headerBorderColor: string
                headerBorderColorInverted: string
                footerBorderColor: string
                footerBorderColorInverted: string
                siderBorderColor: string
                siderBorderColorInverted: string
                siderColor: string
                siderColorInverted: string
                siderToggleButtonBorder: string
                siderToggleButtonColor: string
                siderToggleButtonIconColor: string
                siderToggleButtonIconColorInverted: string
                siderToggleBarColor: string
                siderToggleBarColorHover: string
                __invertScrollbar: string
              },
              {
                Scrollbar: import('../../_mixins').Theme<
                  'Scrollbar',
                  {
                    color: string
                    colorHover: string
                  },
                  any
                >
              }
            >
          >
        | undefined
    }
  >,
  {
    position: 'static' | 'absolute'
    bordered: boolean
    inverted: boolean
  }
>
export default _default
