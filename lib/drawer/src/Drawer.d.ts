import { PropType, CSSProperties } from 'vue'
import type { ExtractPublicPropTypes, MaybeArray } from '../../_utils'
import { ScrollbarProps } from '../../_internal'
import type { Placement } from './DrawerBodyWrapper'
declare const drawerProps: {
  readonly show: BooleanConstructor
  readonly width: {
    readonly type: PropType<string | number>
    readonly default: 251
  }
  readonly height: {
    readonly type: PropType<string | number>
    readonly default: 251
  }
  readonly placement: {
    readonly type: PropType<Placement>
    readonly default: 'right'
  }
  readonly maskClosable: {
    readonly type: BooleanConstructor
    readonly default: true
  }
  readonly to: PropType<string | HTMLElement>
  readonly displayDirective: {
    readonly type: PropType<'show' | 'if'>
    readonly default: 'if'
  }
  readonly nativeScrollbar: {
    readonly type: BooleanConstructor
    readonly default: true
  }
  readonly onMaskClick: PropType<(e: MouseEvent) => void>
  readonly scrollbarProps: PropType<ScrollbarProps>
  readonly contentStyle: PropType<string | CSSProperties>
  readonly 'onUpdate:show': PropType<MaybeArray<(value: boolean) => void>>
  readonly onUpdateShow: PropType<MaybeArray<(value: boolean) => void>>
  /** @deprecated */
  readonly drawerStyle: {
    readonly type: PropType<string | CSSProperties | undefined>
    readonly validator: (() => boolean) | undefined
    readonly default: undefined
  }
  /** @deprecated */
  readonly drawerClass: {
    readonly type: PropType<string | undefined>
    readonly validator: (() => boolean) | undefined
    readonly default: undefined
  }
  readonly target: {
    readonly validator: (() => boolean) | undefined
    readonly default: undefined
  }
  readonly onShow: {
    readonly type: PropType<MaybeArray<(value: boolean) => void> | undefined>
    readonly validator: () => boolean
    readonly default: undefined
  }
  readonly onHide: {
    readonly type: PropType<MaybeArray<(value: false) => void> | undefined>
    readonly validator: () => boolean
    readonly default: undefined
  }
  readonly theme: PropType<
    import('../../_mixins').Theme<
      'Drawer',
      {
        bodyPadding: string
        headerPadding: string
        footerPadding: string
        color: string
        textColor: string
        titleTextColor: string
        titleFontSize: string
        titleFontWeight: string
        boxShadow: string
        lineHeight: string
        headerBorderBottom: string
        footerBorderTop: string
        closeColor: string
        closeColorHover: string
        closeColorPressed: string
        closeSize: string
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
  readonly themeOverrides: PropType<
    import('../../_mixins/use-theme').ExtractThemeOverrides<
      import('../../_mixins').Theme<
        'Drawer',
        {
          bodyPadding: string
          headerPadding: string
          footerPadding: string
          color: string
          textColor: string
          titleTextColor: string
          titleFontSize: string
          titleFontWeight: string
          boxShadow: string
          lineHeight: string
          headerBorderBottom: string
          footerBorderTop: string
          closeColor: string
          closeColorHover: string
          closeColorPressed: string
          closeSize: string
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
  readonly builtinThemeOverrides: PropType<
    import('../../_mixins/use-theme').ExtractThemeOverrides<
      import('../../_mixins').Theme<
        'Drawer',
        {
          bodyPadding: string
          headerPadding: string
          footerPadding: string
          color: string
          textColor: string
          titleTextColor: string
          titleFontSize: string
          titleFontWeight: string
          boxShadow: string
          lineHeight: string
          headerBorderBottom: string
          footerBorderTop: string
          closeColor: string
          closeColorHover: string
          closeColorPressed: string
          closeSize: string
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
export declare type DrawerProps = ExtractPublicPropTypes<typeof drawerProps>
declare const _default: import('vue').DefineComponent<
  {
    readonly show: BooleanConstructor
    readonly width: {
      readonly type: PropType<string | number>
      readonly default: 251
    }
    readonly height: {
      readonly type: PropType<string | number>
      readonly default: 251
    }
    readonly placement: {
      readonly type: PropType<Placement>
      readonly default: 'right'
    }
    readonly maskClosable: {
      readonly type: BooleanConstructor
      readonly default: true
    }
    readonly to: PropType<string | HTMLElement>
    readonly displayDirective: {
      readonly type: PropType<'show' | 'if'>
      readonly default: 'if'
    }
    readonly nativeScrollbar: {
      readonly type: BooleanConstructor
      readonly default: true
    }
    readonly onMaskClick: PropType<(e: MouseEvent) => void>
    readonly scrollbarProps: PropType<ScrollbarProps>
    readonly contentStyle: PropType<string | CSSProperties>
    readonly 'onUpdate:show': PropType<MaybeArray<(value: boolean) => void>>
    readonly onUpdateShow: PropType<MaybeArray<(value: boolean) => void>>
    /** @deprecated */
    readonly drawerStyle: {
      readonly type: PropType<string | CSSProperties | undefined>
      readonly validator: (() => boolean) | undefined
      readonly default: undefined
    }
    /** @deprecated */
    readonly drawerClass: {
      readonly type: PropType<string | undefined>
      readonly validator: (() => boolean) | undefined
      readonly default: undefined
    }
    readonly target: {
      readonly validator: (() => boolean) | undefined
      readonly default: undefined
    }
    readonly onShow: {
      readonly type: PropType<MaybeArray<(value: boolean) => void> | undefined>
      readonly validator: () => boolean
      readonly default: undefined
    }
    readonly onHide: {
      readonly type: PropType<MaybeArray<(value: false) => void> | undefined>
      readonly validator: () => boolean
      readonly default: undefined
    }
    readonly theme: PropType<
      import('../../_mixins').Theme<
        'Drawer',
        {
          bodyPadding: string
          headerPadding: string
          footerPadding: string
          color: string
          textColor: string
          titleTextColor: string
          titleFontSize: string
          titleFontWeight: string
          boxShadow: string
          lineHeight: string
          headerBorderBottom: string
          footerBorderTop: string
          closeColor: string
          closeColorHover: string
          closeColorPressed: string
          closeSize: string
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
    readonly themeOverrides: PropType<
      import('../../_mixins/use-theme').ExtractThemeOverrides<
        import('../../_mixins').Theme<
          'Drawer',
          {
            bodyPadding: string
            headerPadding: string
            footerPadding: string
            color: string
            textColor: string
            titleTextColor: string
            titleFontSize: string
            titleFontWeight: string
            boxShadow: string
            lineHeight: string
            headerBorderBottom: string
            footerBorderTop: string
            closeColor: string
            closeColorHover: string
            closeColorPressed: string
            closeSize: string
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
    readonly builtinThemeOverrides: PropType<
      import('../../_mixins/use-theme').ExtractThemeOverrides<
        import('../../_mixins').Theme<
          'Drawer',
          {
            bodyPadding: string
            headerPadding: string
            footerPadding: string
            color: string
            textColor: string
            titleTextColor: string
            titleFontSize: string
            titleFontWeight: string
            boxShadow: string
            lineHeight: string
            headerBorderBottom: string
            footerBorderTop: string
            closeColor: string
            closeColorHover: string
            closeColorPressed: string
            closeSize: string
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
    namespace: import('vue').ComputedRef<string | undefined>
    mergedBodyStyle: import('vue').ComputedRef<
      (string | CSSProperties | undefined)[]
    >
    handleMaskClick: (e: MouseEvent) => void
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
        bodyPadding: string
        headerPadding: string
        footerPadding: string
        color: string
        textColor: string
        titleTextColor: string
        titleFontSize: string
        titleFontWeight: string
        boxShadow: string
        lineHeight: string
        headerBorderBottom: string
        footerBorderTop: string
        closeColor: string
        closeColorHover: string
        closeColorPressed: string
        closeSize: string
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
      '--line-height': string
      '--color': string
      '--text-color': string
      '--box-shadow': string
      '--bezier': string
      '--bezier-out': string
      '--bezier-in': string
      '--header-padding': string
      '--body-padding': string
      '--footer-padding': string
      '--title-text-color': string
      '--title-font-size': string
      '--title-font-weight': string
      '--header-border-bottom': string
      '--footer-border-top': string
      '--close-color': string
      '--close-color-hover': string
      '--close-color-pressed': string
      '--close-size': string
    }>
    isMounted: Readonly<import('vue').Ref<boolean>>
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
      readonly width?: unknown
      readonly height?: unknown
      readonly placement?: unknown
      readonly maskClosable?: unknown
      readonly to?: unknown
      readonly displayDirective?: unknown
      readonly nativeScrollbar?: unknown
      readonly onMaskClick?: unknown
      readonly scrollbarProps?: unknown
      readonly contentStyle?: unknown
      readonly 'onUpdate:show'?: unknown
      readonly onUpdateShow?: unknown
      readonly drawerStyle?: unknown
      readonly drawerClass?: unknown
      readonly target?: unknown
      readonly onShow?: unknown
      readonly onHide?: unknown
      readonly theme?: unknown
      readonly themeOverrides?: unknown
      readonly builtinThemeOverrides?: unknown
    } & {
      show: boolean
      height: string | number
      width: string | number
      placement: Placement
      displayDirective: 'show' | 'if'
      maskClosable: boolean
      nativeScrollbar: boolean
    } & {
      target?: undefined
      to?: string | HTMLElement | undefined
      theme?:
        | import('../../_mixins').Theme<
            'Drawer',
            {
              bodyPadding: string
              headerPadding: string
              footerPadding: string
              color: string
              textColor: string
              titleTextColor: string
              titleFontSize: string
              titleFontWeight: string
              boxShadow: string
              lineHeight: string
              headerBorderBottom: string
              footerBorderTop: string
              closeColor: string
              closeColorHover: string
              closeColorPressed: string
              closeSize: string
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
              'Drawer',
              {
                bodyPadding: string
                headerPadding: string
                footerPadding: string
                color: string
                textColor: string
                titleTextColor: string
                titleFontSize: string
                titleFontWeight: string
                boxShadow: string
                lineHeight: string
                headerBorderBottom: string
                footerBorderTop: string
                closeColor: string
                closeColorHover: string
                closeColorPressed: string
                closeSize: string
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
              'Drawer',
              {
                bodyPadding: string
                headerPadding: string
                footerPadding: string
                color: string
                textColor: string
                titleTextColor: string
                titleFontSize: string
                titleFontWeight: string
                boxShadow: string
                lineHeight: string
                headerBorderBottom: string
                footerBorderTop: string
                closeColor: string
                closeColorHover: string
                closeColorPressed: string
                closeSize: string
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
      contentStyle?: string | CSSProperties | undefined
      'onUpdate:show'?: MaybeArray<(value: boolean) => void> | undefined
      onUpdateShow?: MaybeArray<(value: boolean) => void> | undefined
      onShow?: MaybeArray<(value: boolean) => void> | undefined
      onHide?: MaybeArray<(value: false) => void> | undefined
      onMaskClick?: ((e: MouseEvent) => void) | undefined
      scrollbarProps?: ScrollbarProps | undefined
      drawerStyle?: string | CSSProperties | undefined
      drawerClass?: string | undefined
    }
  >,
  {
    show: boolean
    height: string | number
    width: string | number
    target: undefined
    placement: Placement
    displayDirective: 'show' | 'if'
    onShow: MaybeArray<(value: boolean) => void> | undefined
    onHide: MaybeArray<(value: false) => void> | undefined
    maskClosable: boolean
    nativeScrollbar: boolean
    drawerStyle: string | CSSProperties | undefined
    drawerClass: string | undefined
  }
>
export default _default
