/// <reference types="lodash" />
import { PropType, InjectionKey, Ref } from 'vue'
import type { Hljs } from '../../_mixins'
import type { ExtractPublicPropTypes } from '../../_utils'
export interface LogInjection {
  trimRef: Ref<boolean>
  languageRef: Ref<string | undefined>
  highlightRef: Ref<boolean>
  mergedHljsRef: Ref<Hljs | undefined>
}
export declare const logInjectionKey: InjectionKey<LogInjection>
declare const logProps: {
  readonly loading: BooleanConstructor
  readonly trim: BooleanConstructor
  readonly log: StringConstructor
  readonly fontSize: {
    readonly type: NumberConstructor
    readonly default: 14
  }
  readonly lines: {
    readonly type: PropType<string[]>
    readonly default: () => never[]
  }
  readonly lineHeight: {
    readonly type: NumberConstructor
    readonly default: 1.25
  }
  readonly language: StringConstructor
  readonly rows: {
    readonly type: NumberConstructor
    readonly default: 15
  }
  readonly offsetTop: {
    readonly type: NumberConstructor
    readonly default: 0
  }
  readonly offsetBottom: {
    readonly type: NumberConstructor
    readonly default: 0
  }
  readonly hljs: ObjectConstructor
  readonly onReachTop: PropType<() => void>
  readonly onReachBottom: PropType<() => void>
  readonly onRequireMore: PropType<(from: 'top' | 'bottom') => void>
  readonly theme: PropType<
    import('../../_mixins').Theme<
      'Log',
      {
        loaderFontSize: string
        loaderTextColor: string
        loaderColor: string
        loaderBorder: string
        loadingColor: string
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
        Code: import('../../_mixins').Theme<
          'Code',
          {
            textColor: string
            fontSize: string
            fontWeightStrong: string
            'mono-3': string
            'hue-1': string
            'hue-2': string
            'hue-3': string
            'hue-4': string
            'hue-5': string
            'hue-5-2': string
            'hue-6': string
            'hue-6-2': string
          },
          any
        >
      }
    >
  >
  readonly themeOverrides: PropType<
    import('../../_mixins/use-theme').ExtractThemeOverrides<
      import('../../_mixins').Theme<
        'Log',
        {
          loaderFontSize: string
          loaderTextColor: string
          loaderColor: string
          loaderBorder: string
          loadingColor: string
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
          Code: import('../../_mixins').Theme<
            'Code',
            {
              textColor: string
              fontSize: string
              fontWeightStrong: string
              'mono-3': string
              'hue-1': string
              'hue-2': string
              'hue-3': string
              'hue-4': string
              'hue-5': string
              'hue-5-2': string
              'hue-6': string
              'hue-6-2': string
            },
            any
          >
        }
      >
    >
  >
  readonly builtinThemeOverrides: PropType<
    import('../../_mixins/use-theme').ExtractThemeOverrides<
      import('../../_mixins').Theme<
        'Log',
        {
          loaderFontSize: string
          loaderTextColor: string
          loaderColor: string
          loaderBorder: string
          loadingColor: string
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
          Code: import('../../_mixins').Theme<
            'Code',
            {
              textColor: string
              fontSize: string
              fontWeightStrong: string
              'mono-3': string
              'hue-1': string
              'hue-2': string
              'hue-3': string
              'hue-4': string
              'hue-5': string
              'hue-5-2': string
              'hue-6': string
              'hue-6-2': string
            },
            any
          >
        }
      >
    >
  >
}
export declare type LogProps = ExtractPublicPropTypes<typeof logProps>
declare const _default: import('vue').DefineComponent<
  {
    readonly loading: BooleanConstructor
    readonly trim: BooleanConstructor
    readonly log: StringConstructor
    readonly fontSize: {
      readonly type: NumberConstructor
      readonly default: 14
    }
    readonly lines: {
      readonly type: PropType<string[]>
      readonly default: () => never[]
    }
    readonly lineHeight: {
      readonly type: NumberConstructor
      readonly default: 1.25
    }
    readonly language: StringConstructor
    readonly rows: {
      readonly type: NumberConstructor
      readonly default: 15
    }
    readonly offsetTop: {
      readonly type: NumberConstructor
      readonly default: 0
    }
    readonly offsetBottom: {
      readonly type: NumberConstructor
      readonly default: 0
    }
    readonly hljs: ObjectConstructor
    readonly onReachTop: PropType<() => void>
    readonly onReachBottom: PropType<() => void>
    readonly onRequireMore: PropType<(from: 'bottom' | 'top') => void>
    readonly theme: PropType<
      import('../../_mixins').Theme<
        'Log',
        {
          loaderFontSize: string
          loaderTextColor: string
          loaderColor: string
          loaderBorder: string
          loadingColor: string
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
          Code: import('../../_mixins').Theme<
            'Code',
            {
              textColor: string
              fontSize: string
              fontWeightStrong: string
              'mono-3': string
              'hue-1': string
              'hue-2': string
              'hue-3': string
              'hue-4': string
              'hue-5': string
              'hue-5-2': string
              'hue-6': string
              'hue-6-2': string
            },
            any
          >
        }
      >
    >
    readonly themeOverrides: PropType<
      import('../../_mixins/use-theme').ExtractThemeOverrides<
        import('../../_mixins').Theme<
          'Log',
          {
            loaderFontSize: string
            loaderTextColor: string
            loaderColor: string
            loaderBorder: string
            loadingColor: string
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
            Code: import('../../_mixins').Theme<
              'Code',
              {
                textColor: string
                fontSize: string
                fontWeightStrong: string
                'mono-3': string
                'hue-1': string
                'hue-2': string
                'hue-3': string
                'hue-4': string
                'hue-5': string
                'hue-5-2': string
                'hue-6': string
                'hue-6-2': string
              },
              any
            >
          }
        >
      >
    >
    readonly builtinThemeOverrides: PropType<
      import('../../_mixins/use-theme').ExtractThemeOverrides<
        import('../../_mixins').Theme<
          'Log',
          {
            loaderFontSize: string
            loaderTextColor: string
            loaderColor: string
            loaderBorder: string
            loadingColor: string
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
            Code: import('../../_mixins').Theme<
              'Code',
              {
                textColor: string
                fontSize: string
                fontWeightStrong: string
                'mono-3': string
                'hue-1': string
                'hue-2': string
                'hue-3': string
                'hue-4': string
                'hue-5': string
                'hue-5-2': string
                'hue-6': string
                'hue-6-2': string
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
    scrollbarRef: Ref<{
      scrollTo: import('../../_internal/scrollbar/src/ScrollBar').ScrollTo
      sync: () => void
      containerRef: HTMLElement | null
      contentRef: HTMLElement | null
      containerScrollTop: number
    } | null>
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
        loaderFontSize: string
        loaderTextColor: string
        loaderColor: string
        loaderBorder: string
        loadingColor: string
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
        Code: import('../../_mixins').Theme<
          'Code',
          {
            textColor: string
            fontSize: string
            fontWeightStrong: string
            'mono-3': string
            'hue-1': string
            'hue-2': string
            'hue-3': string
            'hue-4': string
            'hue-5': string
            'hue-5-2': string
            'hue-6': string
            'hue-6-2': string
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
        Code?:
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
    styleHeight: import('vue').ComputedRef<string>
    mergedLines: import('vue').ComputedRef<string[]>
    scrollTo: {
      (options: { slient?: boolean; position: 'top' | 'bottom' }): void
      (options: { slient?: boolean; top: number }): void
    }
    scrollToTop: (slient?: boolean) => void
    scrollToBottom: (slient?: boolean) => void
    handleWheel: import('lodash').DebouncedFunc<(e: WheelEvent) => void>
    handleScroll: (e: Event) => void
    cssVars: import('vue').ComputedRef<{
      '--bezier': string
      '--loader-font-size': string
      '--loader-border': string
      '--loader-color': string
      '--loader-text-color': string
      '--loading-color': string
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
      readonly loading?: unknown
      readonly trim?: unknown
      readonly log?: unknown
      readonly fontSize?: unknown
      readonly lines?: unknown
      readonly lineHeight?: unknown
      readonly language?: unknown
      readonly rows?: unknown
      readonly offsetTop?: unknown
      readonly offsetBottom?: unknown
      readonly hljs?: unknown
      readonly onReachTop?: unknown
      readonly onReachBottom?: unknown
      readonly onRequireMore?: unknown
      readonly theme?: unknown
      readonly themeOverrides?: unknown
      readonly builtinThemeOverrides?: unknown
    } & {
      trim: boolean
      fontSize: number
      lineHeight: number
      loading: boolean
      rows: number
      offsetTop: number
      offsetBottom: number
      lines: string[]
    } & {
      theme?:
        | import('../../_mixins').Theme<
            'Log',
            {
              loaderFontSize: string
              loaderTextColor: string
              loaderColor: string
              loaderBorder: string
              loadingColor: string
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
              Code: import('../../_mixins').Theme<
                'Code',
                {
                  textColor: string
                  fontSize: string
                  fontWeightStrong: string
                  'mono-3': string
                  'hue-1': string
                  'hue-2': string
                  'hue-3': string
                  'hue-4': string
                  'hue-5': string
                  'hue-5-2': string
                  'hue-6': string
                  'hue-6-2': string
                },
                any
              >
            }
          >
        | undefined
      themeOverrides?:
        | import('../../_mixins/use-theme').ExtractThemeOverrides<
            import('../../_mixins').Theme<
              'Log',
              {
                loaderFontSize: string
                loaderTextColor: string
                loaderColor: string
                loaderBorder: string
                loadingColor: string
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
                Code: import('../../_mixins').Theme<
                  'Code',
                  {
                    textColor: string
                    fontSize: string
                    fontWeightStrong: string
                    'mono-3': string
                    'hue-1': string
                    'hue-2': string
                    'hue-3': string
                    'hue-4': string
                    'hue-5': string
                    'hue-5-2': string
                    'hue-6': string
                    'hue-6-2': string
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
              'Log',
              {
                loaderFontSize: string
                loaderTextColor: string
                loaderColor: string
                loaderBorder: string
                loadingColor: string
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
                Code: import('../../_mixins').Theme<
                  'Code',
                  {
                    textColor: string
                    fontSize: string
                    fontWeightStrong: string
                    'mono-3': string
                    'hue-1': string
                    'hue-2': string
                    'hue-3': string
                    'hue-4': string
                    'hue-5': string
                    'hue-5-2': string
                    'hue-6': string
                    'hue-6-2': string
                  },
                  any
                >
              }
            >
          >
        | undefined
      hljs?: Record<string, any> | undefined
      language?: string | undefined
      log?: string | undefined
      onReachTop?: (() => void) | undefined
      onReachBottom?: (() => void) | undefined
      onRequireMore?: ((from: 'bottom' | 'top') => void) | undefined
    }
  >,
  {
    trim: boolean
    fontSize: number
    lineHeight: number
    loading: boolean
    rows: number
    offsetTop: number
    offsetBottom: number
    lines: string[]
  }
>
export default _default
