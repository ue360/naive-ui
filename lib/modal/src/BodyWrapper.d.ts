import { PropType, ComponentPublicInstance } from 'vue'
declare const _default: import('vue').DefineComponent<
  {
    onClickoutside: {
      type: FunctionConstructor
      required: true
    }
    onBeforeLeave: {
      type: FunctionConstructor
      required: true
    }
    onAfterLeave: {
      type: FunctionConstructor
      required: true
    }
    onPositiveClick: {
      type: FunctionConstructor
      required: true
    }
    onNegativeClick: {
      type: FunctionConstructor
      required: true
    }
    onClose: {
      type: FunctionConstructor
      required: true
    }
    onAfterEnter: PropType<() => void>
    icon: PropType<() => import('vue').VNodeChild>
    type: {
      readonly type: PropType<
        'default' | 'error' | 'info' | 'success' | 'warning'
      >
      readonly default: 'default'
    }
    title: PropType<string | (() => import('vue').VNodeChild)>
    closable: {
      readonly type: BooleanConstructor
      readonly default: true
    }
    negativeText: StringConstructor
    positiveText: StringConstructor
    content: PropType<string | (() => import('vue').VNodeChild)>
    action: PropType<() => import('vue').VNodeChild>
    showIcon: {
      readonly type: BooleanConstructor
      readonly default: true
    }
    loading: BooleanConstructor
    bordered: BooleanConstructor
    iconPlacement: PropType<import('../../dialog/src/interface').IconPlacement>
    contentStyle: PropType<string | import('vue').CSSProperties>
    headerStyle: PropType<string | import('vue').CSSProperties>
    footerStyle: PropType<string | import('vue').CSSProperties>
    embedded: BooleanConstructor
    segmented: {
      readonly type: PropType<boolean | import('../../card/src/Card').Segmented>
      readonly default: false
    }
    size: {
      readonly type: PropType<'small' | 'medium' | 'large' | 'huge'>
      readonly default: 'medium'
    }
    hoverable: BooleanConstructor
    show: {
      type: BooleanConstructor
      required: true
    }
    draggable: BooleanConstructor
    preset: PropType<'dialog' | 'card' | 'confirm'>
    displayDirective: {
      type: PropType<'show' | 'if'>
      required: true
    }
  },
  {
    mergedTheme: import('vue').Ref<{
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
        color: string
        textColor: string
        boxShadow: string
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
        Dialog: import('../../_mixins').Theme<
          'Dialog',
          {
            fontSize: string
            lineHeight: string
            border: string
            titleTextColor: string
            textColor: string
            color: string
            closeColor: string
            closeColorHover: string
            closeColorPressed: string
            iconColor: string
            iconColorInfo: string
            iconColorSuccess: string
            iconColorWarning: string
            iconColorError: string
            borderRadius: string
            titleFontWeight: string
            titleFontSize: string
            padding: string
            iconSize: string
            actionSpace: string
            contentMargin: string
            iconMargin: string
            iconMarginIconTop: string
            closeSize: string
            closeMargin: string
            closeMarginIconTop: string
          },
          {
            Button: import('../../_mixins').Theme<
              'Button',
              {
                heightTiny: string
                heightSmall: string
                heightMedium: string
                heightLarge: string
                borderRadiusTiny: string
                borderRadiusSmall: string
                borderRadiusMedium: string
                borderRadiusLarge: string
                fontSizeTiny: string
                fontSizeSmall: string
                fontSizeMedium: string
                fontSizeLarge: string
                opacityDisabled: string
                colorOpacitySecondary: string
                colorOpacitySecondaryHover: string
                colorOpacitySecondaryPressed: string
                colorSecondary: string
                colorSecondaryHover: string
                colorSecondaryPressed: string
                colorTertiary: string
                colorTertiaryHover: string
                colorTertiaryPressed: string
                colorQuaternary: string
                colorQuaternaryHover: string
                colorQuaternaryPressed: string
                color: string
                colorHover: string
                colorPressed: string
                colorFocus: string
                colorDisabled: string
                textColor: string
                textColorTertiary: string
                textColorHover: string
                textColorPressed: string
                textColorFocus: string
                textColorDisabled: string
                textColorText: string
                textColorTextHover: string
                textColorTextPressed: string
                textColorTextFocus: string
                textColorTextDisabled: string
                textColorGhost: string
                textColorGhostHover: string
                textColorGhostPressed: string
                textColorGhostFocus: string
                textColorGhostDisabled: string
                border: string
                borderHover: string
                borderPressed: string
                borderFocus: string
                borderDisabled: string
                rippleColor: string
                colorPrimary: string
                colorHoverPrimary: string
                colorPressedPrimary: string
                colorFocusPrimary: string
                colorDisabledPrimary: string
                textColorPrimary: string
                textColorHoverPrimary: string
                textColorPressedPrimary: string
                textColorFocusPrimary: string
                textColorDisabledPrimary: string
                textColorTextPrimary: string
                textColorTextHoverPrimary: string
                textColorTextPressedPrimary: string
                textColorTextFocusPrimary: string
                textColorTextDisabledPrimary: string
                textColorGhostPrimary: string
                textColorGhostHoverPrimary: string
                textColorGhostPressedPrimary: string
                textColorGhostFocusPrimary: string
                textColorGhostDisabledPrimary: string
                borderPrimary: string
                borderHoverPrimary: string
                borderPressedPrimary: string
                borderFocusPrimary: string
                borderDisabledPrimary: string
                rippleColorPrimary: string
                colorInfo: string
                colorHoverInfo: string
                colorPressedInfo: string
                colorFocusInfo: string
                colorDisabledInfo: string
                textColorInfo: string
                textColorHoverInfo: string
                textColorPressedInfo: string
                textColorFocusInfo: string
                textColorDisabledInfo: string
                textColorTextInfo: string
                textColorTextHoverInfo: string
                textColorTextPressedInfo: string
                textColorTextFocusInfo: string
                textColorTextDisabledInfo: string
                textColorGhostInfo: string
                textColorGhostHoverInfo: string
                textColorGhostPressedInfo: string
                textColorGhostFocusInfo: string
                textColorGhostDisabledInfo: string
                borderInfo: string
                borderHoverInfo: string
                borderPressedInfo: string
                borderFocusInfo: string
                borderDisabledInfo: string
                rippleColorInfo: string
                colorSuccess: string
                colorHoverSuccess: string
                colorPressedSuccess: string
                colorFocusSuccess: string
                colorDisabledSuccess: string
                textColorSuccess: string
                textColorHoverSuccess: string
                textColorPressedSuccess: string
                textColorFocusSuccess: string
                textColorDisabledSuccess: string
                textColorTextSuccess: string
                textColorTextHoverSuccess: string
                textColorTextPressedSuccess: string
                textColorTextFocusSuccess: string
                textColorTextDisabledSuccess: string
                textColorGhostSuccess: string
                textColorGhostHoverSuccess: string
                textColorGhostPressedSuccess: string
                textColorGhostFocusSuccess: string
                textColorGhostDisabledSuccess: string
                borderSuccess: string
                borderHoverSuccess: string
                borderPressedSuccess: string
                borderFocusSuccess: string
                borderDisabledSuccess: string
                rippleColorSuccess: string
                colorWarning: string
                colorHoverWarning: string
                colorPressedWarning: string
                colorFocusWarning: string
                colorDisabledWarning: string
                textColorWarning: string
                textColorHoverWarning: string
                textColorPressedWarning: string
                textColorFocusWarning: string
                textColorDisabledWarning: string
                textColorTextWarning: string
                textColorTextHoverWarning: string
                textColorTextPressedWarning: string
                textColorTextFocusWarning: string
                textColorTextDisabledWarning: string
                textColorGhostWarning: string
                textColorGhostHoverWarning: string
                textColorGhostPressedWarning: string
                textColorGhostFocusWarning: string
                textColorGhostDisabledWarning: string
                borderWarning: string
                borderHoverWarning: string
                borderPressedWarning: string
                borderFocusWarning: string
                borderDisabledWarning: string
                rippleColorWarning: string
                colorError: string
                colorHoverError: string
                colorPressedError: string
                colorFocusError: string
                colorDisabledError: string
                textColorError: string
                textColorHoverError: string
                textColorPressedError: string
                textColorFocusError: string
                textColorDisabledError: string
                textColorTextError: string
                textColorTextHoverError: string
                textColorTextPressedError: string
                textColorTextFocusError: string
                textColorTextDisabledError: string
                textColorGhostError: string
                textColorGhostHoverError: string
                textColorGhostPressedError: string
                textColorGhostFocusError: string
                textColorGhostDisabledError: string
                borderError: string
                borderHoverError: string
                borderPressedError: string
                borderFocusError: string
                borderDisabledError: string
                rippleColorError: string
                waveOpacity: string
                fontWeight: string
                fontWeightStrong: string
                paddingTiny: string
                paddingSmall: string
                paddingMedium: string
                paddingLarge: string
                paddingRoundTiny: string
                paddingRoundSmall: string
                paddingRoundMedium: string
                paddingRoundLarge: string
                iconMarginTiny: string
                iconMarginSmall: string
                iconMarginMedium: string
                iconMarginLarge: string
                iconSizeTiny: string
                iconSizeSmall: string
                iconSizeMedium: string
                iconSizeLarge: string
                rippleDuration: string
              },
              any
            >
          }
        >
        Card: import('../../_mixins').Theme<
          'Card',
          {
            lineHeight: string
            color: string
            colorModal: string
            colorPopover: string
            colorTarget: string
            colorEmbedded: string
            textColor: string
            titleTextColor: string
            borderColor: string
            actionColor: string
            titleFontWeight: string
            closeColor: string
            closeColorHover: string
            closeColorPressed: string
            fontSizeSmall: string
            fontSizeMedium: string
            fontSizeLarge: string
            fontSizeHuge: string
            boxShadow: string
            borderRadius: string
            paddingSmall: string
            paddingMedium: string
            paddingLarge: string
            paddingHuge: string
            titleFontSizeSmall: string
            titleFontSizeMedium: string
            titleFontSizeLarge: string
            titleFontSizeHuge: string
            closeSize: string
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
        Dialog?:
          | {
              peers?:
                | {
                    Button?:
                      | import('../../_mixins/use-theme').ExtractThemeOverrides<
                          import('../../_mixins').Theme<
                            'Button',
                            {
                              heightTiny: string
                              heightSmall: string
                              heightMedium: string
                              heightLarge: string
                              borderRadiusTiny: string
                              borderRadiusSmall: string
                              borderRadiusMedium: string
                              borderRadiusLarge: string
                              fontSizeTiny: string
                              fontSizeSmall: string
                              fontSizeMedium: string
                              fontSizeLarge: string
                              opacityDisabled: string
                              colorOpacitySecondary: string
                              colorOpacitySecondaryHover: string
                              colorOpacitySecondaryPressed: string
                              colorSecondary: string
                              colorSecondaryHover: string
                              colorSecondaryPressed: string
                              colorTertiary: string
                              colorTertiaryHover: string
                              colorTertiaryPressed: string
                              colorQuaternary: string
                              colorQuaternaryHover: string
                              colorQuaternaryPressed: string
                              color: string
                              colorHover: string
                              colorPressed: string
                              colorFocus: string
                              colorDisabled: string
                              textColor: string
                              textColorTertiary: string
                              textColorHover: string
                              textColorPressed: string
                              textColorFocus: string
                              textColorDisabled: string
                              textColorText: string
                              textColorTextHover: string
                              textColorTextPressed: string
                              textColorTextFocus: string
                              textColorTextDisabled: string
                              textColorGhost: string
                              textColorGhostHover: string
                              textColorGhostPressed: string
                              textColorGhostFocus: string
                              textColorGhostDisabled: string
                              border: string
                              borderHover: string
                              borderPressed: string
                              borderFocus: string
                              borderDisabled: string
                              rippleColor: string
                              colorPrimary: string
                              colorHoverPrimary: string
                              colorPressedPrimary: string
                              colorFocusPrimary: string
                              colorDisabledPrimary: string
                              textColorPrimary: string
                              textColorHoverPrimary: string
                              textColorPressedPrimary: string
                              textColorFocusPrimary: string
                              textColorDisabledPrimary: string
                              textColorTextPrimary: string
                              textColorTextHoverPrimary: string
                              textColorTextPressedPrimary: string
                              textColorTextFocusPrimary: string
                              textColorTextDisabledPrimary: string
                              textColorGhostPrimary: string
                              textColorGhostHoverPrimary: string
                              textColorGhostPressedPrimary: string
                              textColorGhostFocusPrimary: string
                              textColorGhostDisabledPrimary: string
                              borderPrimary: string
                              borderHoverPrimary: string
                              borderPressedPrimary: string
                              borderFocusPrimary: string
                              borderDisabledPrimary: string
                              rippleColorPrimary: string
                              colorInfo: string
                              colorHoverInfo: string
                              colorPressedInfo: string
                              colorFocusInfo: string
                              colorDisabledInfo: string
                              textColorInfo: string
                              textColorHoverInfo: string
                              textColorPressedInfo: string
                              textColorFocusInfo: string
                              textColorDisabledInfo: string
                              textColorTextInfo: string
                              textColorTextHoverInfo: string
                              textColorTextPressedInfo: string
                              textColorTextFocusInfo: string
                              textColorTextDisabledInfo: string
                              textColorGhostInfo: string
                              textColorGhostHoverInfo: string
                              textColorGhostPressedInfo: string
                              textColorGhostFocusInfo: string
                              textColorGhostDisabledInfo: string
                              borderInfo: string
                              borderHoverInfo: string
                              borderPressedInfo: string
                              borderFocusInfo: string
                              borderDisabledInfo: string
                              rippleColorInfo: string
                              colorSuccess: string
                              colorHoverSuccess: string
                              colorPressedSuccess: string
                              colorFocusSuccess: string
                              colorDisabledSuccess: string
                              textColorSuccess: string
                              textColorHoverSuccess: string
                              textColorPressedSuccess: string
                              textColorFocusSuccess: string
                              textColorDisabledSuccess: string
                              textColorTextSuccess: string
                              textColorTextHoverSuccess: string
                              textColorTextPressedSuccess: string
                              textColorTextFocusSuccess: string
                              textColorTextDisabledSuccess: string
                              textColorGhostSuccess: string
                              textColorGhostHoverSuccess: string
                              textColorGhostPressedSuccess: string
                              textColorGhostFocusSuccess: string
                              textColorGhostDisabledSuccess: string
                              borderSuccess: string
                              borderHoverSuccess: string
                              borderPressedSuccess: string
                              borderFocusSuccess: string
                              borderDisabledSuccess: string
                              rippleColorSuccess: string
                              colorWarning: string
                              colorHoverWarning: string
                              colorPressedWarning: string
                              colorFocusWarning: string
                              colorDisabledWarning: string
                              textColorWarning: string
                              textColorHoverWarning: string
                              textColorPressedWarning: string
                              textColorFocusWarning: string
                              textColorDisabledWarning: string
                              textColorTextWarning: string
                              textColorTextHoverWarning: string
                              textColorTextPressedWarning: string
                              textColorTextFocusWarning: string
                              textColorTextDisabledWarning: string
                              textColorGhostWarning: string
                              textColorGhostHoverWarning: string
                              textColorGhostPressedWarning: string
                              textColorGhostFocusWarning: string
                              textColorGhostDisabledWarning: string
                              borderWarning: string
                              borderHoverWarning: string
                              borderPressedWarning: string
                              borderFocusWarning: string
                              borderDisabledWarning: string
                              rippleColorWarning: string
                              colorError: string
                              colorHoverError: string
                              colorPressedError: string
                              colorFocusError: string
                              colorDisabledError: string
                              textColorError: string
                              textColorHoverError: string
                              textColorPressedError: string
                              textColorFocusError: string
                              textColorDisabledError: string
                              textColorTextError: string
                              textColorTextHoverError: string
                              textColorTextPressedError: string
                              textColorTextFocusError: string
                              textColorTextDisabledError: string
                              textColorGhostError: string
                              textColorGhostHoverError: string
                              textColorGhostPressedError: string
                              textColorGhostFocusError: string
                              textColorGhostDisabledError: string
                              borderError: string
                              borderHoverError: string
                              borderPressedError: string
                              borderFocusError: string
                              borderDisabledError: string
                              rippleColorError: string
                              waveOpacity: string
                              fontWeight: string
                              fontWeightStrong: string
                              paddingTiny: string
                              paddingSmall: string
                              paddingMedium: string
                              paddingLarge: string
                              paddingRoundTiny: string
                              paddingRoundSmall: string
                              paddingRoundMedium: string
                              paddingRoundLarge: string
                              iconMarginTiny: string
                              iconMarginSmall: string
                              iconMarginMedium: string
                              iconMarginLarge: string
                              iconSizeTiny: string
                              iconSizeSmall: string
                              iconSizeMedium: string
                              iconSizeLarge: string
                              rippleDuration: string
                            },
                            any
                          >
                        >
                      | undefined
                  }
                | undefined
            }
          | undefined
        Card?:
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
    appear: import('vue').Ref<boolean | undefined>
    isMounted: import('vue').Ref<boolean>
    mergedClsPrefix: import('vue').Ref<string>
    bodyRef: import('vue').Ref<
      | ComponentPublicInstance<
          {},
          {},
          {},
          {},
          {},
          {},
          {},
          {},
          false,
          import('vue').ComponentOptionsBase<
            any,
            any,
            any,
            any,
            any,
            any,
            any,
            any,
            any,
            {}
          >
        >
      | HTMLElement
      | null
    >
    scrollbarRef: import('vue').Ref<{
      scrollTo: import('../../_internal/scrollbar/src/ScrollBar').ScrollTo
      sync: () => void
      containerRef: HTMLElement | null
      contentRef: HTMLElement | null
      containerScrollTop: number
    } | null>
    displayed: import('vue').Ref<boolean>
    handleClickOutside: (e: MouseEvent) => void
    handlePositiveClick: () => void
    handleNegativeClick: () => void
    handleCloseClick: () => void
    handleAfterLeave: () => void
    handleBeforeLeave: (el: HTMLElement) => void
    handleEnter: (el: HTMLElement) => void
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
      onClickoutside?: unknown
      onBeforeLeave?: unknown
      onAfterLeave?: unknown
      onPositiveClick?: unknown
      onNegativeClick?: unknown
      onClose?: unknown
      onAfterEnter?: unknown
      icon?: unknown
      type?: unknown
      title?: unknown
      closable?: unknown
      negativeText?: unknown
      positiveText?: unknown
      content?: unknown
      action?: unknown
      showIcon?: unknown
      loading?: unknown
      bordered?: unknown
      iconPlacement?: unknown
      contentStyle?: unknown
      headerStyle?: unknown
      footerStyle?: unknown
      embedded?: unknown
      segmented?: unknown
      size?: unknown
      hoverable?: unknown
      show?: unknown
      draggable?: unknown
      preset?: unknown
      displayDirective?: unknown
    } & {
      type: 'default' | 'error' | 'info' | 'success' | 'warning'
      size: 'small' | 'medium' | 'large' | 'huge'
      show: boolean
      onBeforeLeave: Function
      onAfterLeave: Function
      draggable: boolean
      loading: boolean
      bordered: boolean
      onClose: Function
      closable: boolean
      displayDirective: 'show' | 'if'
      onClickoutside: Function
      showIcon: boolean
      hoverable: boolean
      embedded: boolean
      segmented: boolean | import('../../card/src/Card').Segmented
      onPositiveClick: Function
      onNegativeClick: Function
    } & {
      content?: string | (() => import('vue').VNodeChild) | undefined
      icon?: (() => import('vue').VNodeChild) | undefined
      onAfterEnter?: (() => void) | undefined
      title?: string | (() => import('vue').VNodeChild) | undefined
      action?: (() => import('vue').VNodeChild) | undefined
      positiveText?: string | undefined
      negativeText?: string | undefined
      contentStyle?: string | import('vue').CSSProperties | undefined
      iconPlacement?:
        | import('../../dialog/src/interface').IconPlacement
        | undefined
      headerStyle?: string | import('vue').CSSProperties | undefined
      footerStyle?: string | import('vue').CSSProperties | undefined
      preset?: 'dialog' | 'card' | 'confirm' | undefined
    }
  >,
  {
    type: 'default' | 'error' | 'info' | 'success' | 'warning'
    size: 'small' | 'medium' | 'large' | 'huge'
    draggable: boolean
    loading: boolean
    bordered: boolean
    closable: boolean
    showIcon: boolean
    hoverable: boolean
    embedded: boolean
    segmented: boolean | import('../../card/src/Card').Segmented
  }
>
export default _default
