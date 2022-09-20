import { PropType, CSSProperties } from 'vue'
import type { MaybeArray, ExtractPublicPropTypes } from '../../_utils'
import type { ScrollbarProps } from '../../_internal'
declare const layoutSiderProps: {
  readonly position: {
    readonly type: PropType<'static' | 'absolute'>
    readonly default: 'static'
  }
  readonly bordered: BooleanConstructor
  readonly collapsedWidth: {
    readonly type: NumberConstructor
    readonly default: 48
  }
  readonly width: {
    readonly type: PropType<string | number>
    readonly default: 272
  }
  readonly contentStyle: {
    readonly type: PropType<string | CSSProperties>
    readonly default: ''
  }
  readonly collapseMode: {
    readonly type: PropType<'transform' | 'width'>
    readonly default: 'transform'
  }
  readonly collapsed: {
    readonly type: PropType<boolean | undefined>
    readonly default: undefined
  }
  readonly defaultCollapsed: BooleanConstructor
  readonly showCollapsedContent: {
    readonly type: BooleanConstructor
    readonly default: true
  }
  readonly showTrigger: {
    readonly type: PropType<boolean | 'bar' | 'arrow-circle'>
    readonly default: false
  }
  readonly nativeScrollbar: {
    readonly type: BooleanConstructor
    readonly default: true
  }
  readonly inverted: BooleanConstructor
  readonly scrollbarProps: PropType<
    Partial<ScrollbarProps> & {
      style: CSSProperties
    }
  >
  readonly triggerStyle: PropType<string | CSSProperties>
  readonly collapsedTriggerStyle: PropType<string | CSSProperties>
  readonly 'onUpdate:collapsed': PropType<MaybeArray<(value: boolean) => void>>
  readonly onUpdateCollapsed: PropType<MaybeArray<(value: boolean) => void>>
  readonly onAfterEnter: PropType<() => void>
  readonly onAfterLeave: PropType<() => void>
  readonly onExpand: PropType<MaybeArray<() => void>>
  readonly onCollapse: PropType<MaybeArray<() => void>>
  readonly onScroll: PropType<(e: Event) => void>
}
export declare type LayoutSiderProps = ExtractPublicPropTypes<
  typeof layoutSiderProps
>
declare const _default: import('vue').DefineComponent<
  {
    position: {
      readonly type: PropType<'static' | 'absolute'>
      readonly default: 'static'
    }
    bordered: BooleanConstructor
    collapsedWidth: {
      readonly type: NumberConstructor
      readonly default: 48
    }
    width: {
      readonly type: PropType<string | number>
      readonly default: 272
    }
    contentStyle: {
      readonly type: PropType<string | CSSProperties>
      readonly default: ''
    }
    collapseMode: {
      readonly type: PropType<'transform' | 'width'>
      readonly default: 'transform'
    }
    collapsed: {
      readonly type: PropType<boolean | undefined>
      readonly default: undefined
    }
    defaultCollapsed: BooleanConstructor
    showCollapsedContent: {
      readonly type: BooleanConstructor
      readonly default: true
    }
    showTrigger: {
      readonly type: PropType<boolean | 'bar' | 'arrow-circle'>
      readonly default: false
    }
    nativeScrollbar: {
      readonly type: BooleanConstructor
      readonly default: true
    }
    inverted: BooleanConstructor
    scrollbarProps: PropType<
      Partial<ScrollbarProps> & {
        style: CSSProperties
      }
    >
    triggerStyle: PropType<string | CSSProperties>
    collapsedTriggerStyle: PropType<string | CSSProperties>
    'onUpdate:collapsed': PropType<MaybeArray<(value: boolean) => void>>
    onUpdateCollapsed: PropType<MaybeArray<(value: boolean) => void>>
    onAfterEnter: PropType<() => void>
    onAfterLeave: PropType<() => void>
    onExpand: PropType<MaybeArray<() => void>>
    onCollapse: PropType<MaybeArray<() => void>>
    onScroll: PropType<(e: Event) => void>
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
    scrollableElRef: import('vue').Ref<HTMLElement | null>
    scrollbarInstRef: import('vue').Ref<{
      scrollTo: import('../../_internal/scrollbar/src/ScrollBar').ScrollTo
      sync: () => void
      containerRef: HTMLElement | null
      contentRef: HTMLElement | null
      containerScrollTop: number
    } | null>
    mergedClsPrefix: import('vue').ComputedRef<string>
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
    styleMaxWidth: import('vue').ComputedRef<string>
    mergedCollapsed: import('vue').ComputedRef<boolean>
    scrollContainerStyle: import('vue').ComputedRef<CSSProperties>
    siderPlacement: import('vue').ComputedRef<'left' | 'right'>
    handleTransitionend: (e: TransitionEvent) => void
    handleTriggerClick: () => void
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
      position?: unknown
      bordered?: unknown
      collapsedWidth?: unknown
      width?: unknown
      contentStyle?: unknown
      collapseMode?: unknown
      collapsed?: unknown
      defaultCollapsed?: unknown
      showCollapsedContent?: unknown
      showTrigger?: unknown
      nativeScrollbar?: unknown
      inverted?: unknown
      scrollbarProps?: unknown
      triggerStyle?: unknown
      collapsedTriggerStyle?: unknown
      'onUpdate:collapsed'?: unknown
      onUpdateCollapsed?: unknown
      onAfterEnter?: unknown
      onAfterLeave?: unknown
      onExpand?: unknown
      onCollapse?: unknown
      onScroll?: unknown
      theme?: unknown
      themeOverrides?: unknown
      builtinThemeOverrides?: unknown
    } & {
      position: 'static' | 'absolute'
      width: string | number
      bordered: boolean
      contentStyle: string | CSSProperties
      inverted: boolean
      nativeScrollbar: boolean
      collapsedWidth: number
      collapseMode: 'transform' | 'width'
      defaultCollapsed: boolean
      showCollapsedContent: boolean
      showTrigger: boolean | 'bar' | 'arrow-circle'
    } & {
      onAfterEnter?: (() => void) | undefined
      onAfterLeave?: (() => void) | undefined
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
      collapsed?: boolean | undefined
      scrollbarProps?:
        | (Partial<ScrollbarProps> & {
            style: CSSProperties
          })
        | undefined
      triggerStyle?: string | CSSProperties | undefined
      collapsedTriggerStyle?: string | CSSProperties | undefined
      'onUpdate:collapsed'?: MaybeArray<(value: boolean) => void> | undefined
      onUpdateCollapsed?: MaybeArray<(value: boolean) => void> | undefined
      onExpand?: MaybeArray<() => void> | undefined
      onCollapse?: MaybeArray<() => void> | undefined
    }
  >,
  {
    position: 'static' | 'absolute'
    width: string | number
    bordered: boolean
    contentStyle: string | CSSProperties
    inverted: boolean
    collapsed: boolean | undefined
    nativeScrollbar: boolean
    collapsedWidth: number
    collapseMode: 'transform' | 'width'
    defaultCollapsed: boolean
    showCollapsedContent: boolean
    showTrigger: boolean | 'bar' | 'arrow-circle'
  }
>
export default _default