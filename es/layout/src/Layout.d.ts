import { PropType, CSSProperties, InjectionKey, ExtractPropTypes } from 'vue'
import type { ScrollbarProps } from '../../_internal'
import type { ExtractPublicPropTypes } from '../../_utils'
declare const layoutProps: {
  readonly embedded: BooleanConstructor
  readonly position: {
    readonly type: PropType<'static' | 'absolute'>
    readonly default: 'static'
  }
  readonly nativeScrollbar: {
    readonly type: BooleanConstructor
    readonly default: true
  }
  readonly scrollbarProps: PropType<Partial<ScrollbarProps>>
  readonly onScroll: PropType<(e: Event) => void>
  readonly contentStyle: {
    readonly type: PropType<string | CSSProperties>
    readonly default: ''
  }
  readonly hasSider: BooleanConstructor
  readonly siderPlacement: {
    readonly type: PropType<'left' | 'right'>
    readonly default: 'left'
  }
}
export declare type LayoutProps = ExtractPublicPropTypes<typeof layoutProps>
export declare const layoutInjectionKey: InjectionKey<
  ExtractPropTypes<typeof layoutProps>
>
export declare function createLayoutComponent(
  isContent: boolean
): import('vue').DefineComponent<
  {
    embedded: BooleanConstructor
    position: {
      readonly type: PropType<'static' | 'absolute'>
      readonly default: 'static'
    }
    nativeScrollbar: {
      readonly type: BooleanConstructor
      readonly default: true
    }
    scrollbarProps: PropType<Partial<ScrollbarProps>>
    onScroll: PropType<(e: Event) => void>
    contentStyle: {
      readonly type: PropType<string | CSSProperties>
      readonly default: ''
    }
    hasSider: BooleanConstructor
    siderPlacement: {
      readonly type: PropType<'left' | 'right'>
      readonly default: 'left'
    }
    theme: PropType<
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
    themeOverrides: PropType<
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
    builtinThemeOverrides: PropType<
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
    scrollTo: ((options: ScrollToOptions) => void) &
      ((x: number, y: number) => void)
    mergedClsPrefix: import('vue').ComputedRef<string>
    scrollableElRef: import('vue').Ref<HTMLElement | null>
    scrollbarInstRef: import('vue').Ref<{
      scrollTo: import('../../_internal/scrollbar/src/ScrollBar').ScrollTo
      sync: () => void
      containerRef: HTMLElement | null
      contentRef: HTMLElement | null
      containerScrollTop: number
    } | null>
    hasSiderStyle: CSSProperties
    mergedTheme: import('vue').ComputedRef<{
      common: {
        baseColor: string
        primaryColor: string
        primaryColorHover: string
        primaryColorPressed: string
        primaryColorSuppl: string
        infoColor: string
        infoColorHover: string
        infoColorPressed: string
        infoColorSuppl: string
        successColor: string
        successColorHover: string
        successColorPressed: string
        successColorSuppl: string
        warningColor: string
        warningColorHover: string
        warningColorPressed: string
        warningColorSuppl: string
        errorColor: string
        errorColorHover: string
        errorColorPressed: string
        errorColorSuppl: string
        textColorBase: string
        textColor1: string
        textColor2: string
        textColor3: string
        textColorDisabled: string
        placeholderColor: string
        placeholderColorDisabled: string
        iconColor: string
        iconColorHover: string
        iconColorPressed: string
        iconColorDisabled: string
        opacity1: string
        opacity2: string
        opacity3: string
        opacity4: string
        opacity5: string
        dividerColor: string
        borderColor: string
        closeColor: string
        closeColorHover: string
        closeColorPressed: string
        closeColorDisabled: string
        clearColor: string
        clearColorHover: string
        clearColorPressed: string
        scrollbarColor: string
        scrollbarColorHover: string
        scrollbarWidth: string
        scrollbarHeight: string
        scrollbarBorderRadius: string
        progressRailColor: string
        railColor: string
        popoverColor: string
        tableColor: string
        cardColor: string
        modalColor: string
        bodyColor: string
        tagColor: string
        avatarColor: string
        invertedColor: string
        inputColor: string
        codeColor: string
        tabColor: string
        actionColor: string
        tableHeaderColor: string
        hoverColor: string
        tableColorHover: string
        tableColorStriped: string
        pressedColor: string
        opacityDisabled: string
        inputColorDisabled: string
        buttonColor2: string
        buttonColor2Hover: string
        buttonColor2Pressed: string
        boxShadow1: string
        boxShadow2: string
        boxShadow3: string
        fontFamily: string
        fontFamilyMono: string
        fontWeight: string
        fontWeightStrong: string
        cubicBezierEaseInOut: string
        cubicBezierEaseOut: string
        cubicBezierEaseIn: string
        borderRadius: string
        borderRadiusSmall: string
        fontSize: string
        fontSizeTiny: string
        fontSizeSmall: string
        fontSizeMedium: string
        fontSizeLarge: string
        fontSizeHuge: string
        lineHeight: string
        heightTiny: string
        heightSmall: string
        heightMedium: string
        heightLarge: string
        heightHuge: string
        transformDebounceScale: string
        name: 'common'
      }
      self: {
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
      }
      peers: {
        Scrollbar: import('../../_mixins').Theme<
          'Scrollbar',
          {
            color: string
            colorHover: string
          },
          any
        >
      }
      peerOverrides: {
        Scrollbar?:
          | {
              peers?:
                | {
                    [x: string]: any
                  }
                | undefined
            }
          | undefined
      }
    }>
    cssVars: import('vue').ComputedRef<{
      '--bezier': string
      '--color': string
      '--text-color': string
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
      embedded?: unknown
      position?: unknown
      nativeScrollbar?: unknown
      scrollbarProps?: unknown
      onScroll?: unknown
      contentStyle?: unknown
      hasSider?: unknown
      siderPlacement?: unknown
      theme?: unknown
      themeOverrides?: unknown
      builtinThemeOverrides?: unknown
    } & {
      position: 'static' | 'absolute'
      contentStyle: string | CSSProperties
      embedded: boolean
      nativeScrollbar: boolean
      hasSider: boolean
      siderPlacement: 'left' | 'right'
    } & {
      onScroll?: ((e: Event) => void) | undefined
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
      scrollbarProps?: Partial<ScrollbarProps> | undefined
    }
  >,
  {
    position: 'static' | 'absolute'
    contentStyle: string | CSSProperties
    embedded: boolean
    nativeScrollbar: boolean
    hasSider: boolean
    siderPlacement: 'left' | 'right'
  }
>
declare const _default: import('vue').DefineComponent<
  {
    embedded: BooleanConstructor
    position: {
      readonly type: PropType<'static' | 'absolute'>
      readonly default: 'static'
    }
    nativeScrollbar: {
      readonly type: BooleanConstructor
      readonly default: true
    }
    scrollbarProps: PropType<Partial<ScrollbarProps>>
    onScroll: PropType<(e: Event) => void>
    contentStyle: {
      readonly type: PropType<string | CSSProperties>
      readonly default: ''
    }
    hasSider: BooleanConstructor
    siderPlacement: {
      readonly type: PropType<'left' | 'right'>
      readonly default: 'left'
    }
    theme: PropType<
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
    themeOverrides: PropType<
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
    builtinThemeOverrides: PropType<
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
    scrollTo: ((options: ScrollToOptions) => void) &
      ((x: number, y: number) => void)
    mergedClsPrefix: import('vue').ComputedRef<string>
    scrollableElRef: import('vue').Ref<HTMLElement | null>
    scrollbarInstRef: import('vue').Ref<{
      scrollTo: import('../../_internal/scrollbar/src/ScrollBar').ScrollTo
      sync: () => void
      containerRef: HTMLElement | null
      contentRef: HTMLElement | null
      containerScrollTop: number
    } | null>
    hasSiderStyle: CSSProperties
    mergedTheme: import('vue').ComputedRef<{
      common: {
        baseColor: string
        primaryColor: string
        primaryColorHover: string
        primaryColorPressed: string
        primaryColorSuppl: string
        infoColor: string
        infoColorHover: string
        infoColorPressed: string
        infoColorSuppl: string
        successColor: string
        successColorHover: string
        successColorPressed: string
        successColorSuppl: string
        warningColor: string
        warningColorHover: string
        warningColorPressed: string
        warningColorSuppl: string
        errorColor: string
        errorColorHover: string
        errorColorPressed: string
        errorColorSuppl: string
        textColorBase: string
        textColor1: string
        textColor2: string
        textColor3: string
        textColorDisabled: string
        placeholderColor: string
        placeholderColorDisabled: string
        iconColor: string
        iconColorHover: string
        iconColorPressed: string
        iconColorDisabled: string
        opacity1: string
        opacity2: string
        opacity3: string
        opacity4: string
        opacity5: string
        dividerColor: string
        borderColor: string
        closeColor: string
        closeColorHover: string
        closeColorPressed: string
        closeColorDisabled: string
        clearColor: string
        clearColorHover: string
        clearColorPressed: string
        scrollbarColor: string
        scrollbarColorHover: string
        scrollbarWidth: string
        scrollbarHeight: string
        scrollbarBorderRadius: string
        progressRailColor: string
        railColor: string
        popoverColor: string
        tableColor: string
        cardColor: string
        modalColor: string
        bodyColor: string
        tagColor: string
        avatarColor: string
        invertedColor: string
        inputColor: string
        codeColor: string
        tabColor: string
        actionColor: string
        tableHeaderColor: string
        hoverColor: string
        tableColorHover: string
        tableColorStriped: string
        pressedColor: string
        opacityDisabled: string
        inputColorDisabled: string
        buttonColor2: string
        buttonColor2Hover: string
        buttonColor2Pressed: string
        boxShadow1: string
        boxShadow2: string
        boxShadow3: string
        fontFamily: string
        fontFamilyMono: string
        fontWeight: string
        fontWeightStrong: string
        cubicBezierEaseInOut: string
        cubicBezierEaseOut: string
        cubicBezierEaseIn: string
        borderRadius: string
        borderRadiusSmall: string
        fontSize: string
        fontSizeTiny: string
        fontSizeSmall: string
        fontSizeMedium: string
        fontSizeLarge: string
        fontSizeHuge: string
        lineHeight: string
        heightTiny: string
        heightSmall: string
        heightMedium: string
        heightLarge: string
        heightHuge: string
        transformDebounceScale: string
        name: 'common'
      }
      self: {
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
      }
      peers: {
        Scrollbar: import('../../_mixins').Theme<
          'Scrollbar',
          {
            color: string
            colorHover: string
          },
          any
        >
      }
      peerOverrides: {
        Scrollbar?:
          | {
              peers?:
                | {
                    [x: string]: any
                  }
                | undefined
            }
          | undefined
      }
    }>
    cssVars: import('vue').ComputedRef<{
      '--bezier': string
      '--color': string
      '--text-color': string
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
      embedded?: unknown
      position?: unknown
      nativeScrollbar?: unknown
      scrollbarProps?: unknown
      onScroll?: unknown
      contentStyle?: unknown
      hasSider?: unknown
      siderPlacement?: unknown
      theme?: unknown
      themeOverrides?: unknown
      builtinThemeOverrides?: unknown
    } & {
      position: 'static' | 'absolute'
      contentStyle: string | CSSProperties
      embedded: boolean
      nativeScrollbar: boolean
      hasSider: boolean
      siderPlacement: 'left' | 'right'
    } & {
      onScroll?: ((e: Event) => void) | undefined
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
      scrollbarProps?: Partial<ScrollbarProps> | undefined
    }
  >,
  {
    position: 'static' | 'absolute'
    contentStyle: string | CSSProperties
    embedded: boolean
    nativeScrollbar: boolean
    hasSider: boolean
    siderPlacement: 'left' | 'right'
  }
>
export default _default