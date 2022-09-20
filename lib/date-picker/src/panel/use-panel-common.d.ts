import { PropType, ExtractPropTypes } from 'vue'
import {
  Value,
  OnPanelUpdateValue,
  OnClose,
  Shortcuts,
  DefaultTime
} from '../interface'
declare const usePanelCommonProps: {
  readonly active: BooleanConstructor
  readonly dateFormat: StringConstructor
  readonly timeFormat: {
    readonly type: StringConstructor
    readonly value: 'HH:mm:ss'
  }
  readonly value: {
    readonly type: PropType<Value | null>
    readonly default: null
  }
  readonly shortcuts: PropType<Shortcuts>
  readonly defaultTime: PropType<DefaultTime>
  readonly onConfirm: FunctionConstructor
  readonly onClose: PropType<OnClose>
  readonly onTabOut: FunctionConstructor
  readonly onUpdateValue: {
    readonly type: PropType<OnPanelUpdateValue>
    readonly required: true
  }
}
declare type UsePanelCommonProps = ExtractPropTypes<typeof usePanelCommonProps>
declare function usePanelCommon(props: UsePanelCommonProps): {
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
      itemFontSize: string
      calendarDaysFontSize: string
      calendarTitleFontSize: string
      itemTextColor: string
      itemTextColorDisabled: string
      itemTextColorActive: string
      itemTextColorCurrent: string
      itemColorIncluded: string
      itemColorHover: string
      itemColorDisabled: string
      itemColorActive: string
      itemBorderRadius: string
      panelColor: string
      panelTextColor: string
      arrowColor: string
      calendarTitleTextColor: string
      calendarDaysTextColor: string
      panelHeaderDividerColor: string
      calendarDaysDividerColor: string
      calendarDividerColor: string
      panelActionDividerColor: string
      panelBoxShadow: string
      panelBorderRadius: string
      calendarTitleFontWeight: string
      scrollItemBorderRadius: string
      iconColor: string
      iconColorDisabled: string
      itemSize: string
      itemCellWidth: string
      itemCellHeight: string
      scrollItemWidth: string
      scrollItemHeight: string
      panelExtraFooterPadding: string
      panelActionPadding: string
      calendarTitlePadding: string
      calendarTitleHeight: string
      arrowSize: string
      panelHeaderPadding: string
      calendarDaysHeight: string
      calendarTitleGridTempateColumns: string
      calendarLeftPaddingDate: string
      calendarLeftPaddingDatetime: string
      calendarLeftPaddingDaterange: string
      calendarLeftPaddingDatetimerange: string
      calendarLeftPaddingMonth: string
      calendarLeftPaddingYear: string
      calendarLeftPaddingQuarter: string
      calendarRightPaddingDate: string
      calendarRightPaddingDatetime: string
      calendarRightPaddingDaterange: string
      calendarRightPaddingDatetimerange: string
      calendarRightPaddingMonth: string
      calendarRightPaddingYear: string
      calendarRightPaddingQuarter: string
    }
    peers: {
      Input: import('../../../_mixins').Theme<
        'Input',
        {
          countTextColor: string
          heightTiny: string
          heightSmall: string
          heightMedium: string
          heightLarge: string
          fontSizeTiny: string
          fontSizeSmall: string
          fontSizeMedium: string
          fontSizeLarge: string
          lineHeight: string
          lineHeightTextarea: string
          borderRadius: string
          iconSize: string
          groupLabelColor: string
          groupLabelTextColor: string
          textColor: string
          textColorDisabled: string
          textDecorationColor: string
          caretColor: string
          placeholderColor: string
          placeholderColorDisabled: string
          color: string
          colorDisabled: string
          colorFocus: string
          groupLabelBorder: string
          border: string
          borderHover: string
          borderDisabled: string
          borderFocus: string
          boxShadowFocus: string
          loadingColor: string
          loadingColorWarning: string
          borderWarning: string
          borderHoverWarning: string
          colorFocusWarning: string
          borderFocusWarning: string
          boxShadowFocusWarning: string
          caretColorWarning: string
          loadingColorError: string
          borderError: string
          borderHoverError: string
          colorFocusError: string
          borderFocusError: string
          boxShadowFocusError: string
          caretColorError: string
          clearColor: string
          clearColorHover: string
          clearColorPressed: string
          iconColor: string
          iconColorDisabled: string
          iconColorHover: string
          iconColorPressed: string
          suffixTextColor: string
          paddingTiny: string
          paddingSmall: string
          paddingMedium: string
          paddingLarge: string
          clearSize: string
        },
        any
      >
      Button: import('../../../_mixins').Theme<
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
      TimePicker: import('../../../_mixins').Theme<
        'TimePicker',
        {
          panelColor: string
          panelBoxShadow: string
          panelDividerColor: string
          itemTextColor: string
          itemTextColorActive: string
          itemColorHover: string
          itemOpacityDisabled: string
          itemBorderRadius: string
          borderRadius: string
          iconColor: string
          iconColorDisabled: string
          itemFontSize: string
          itemHeight: string
          itemWidth: string
          panelActionPadding: string
        },
        {
          Scrollbar: import('../../../_mixins').Theme<
            'Scrollbar',
            {
              color: string
              colorHover: string
            },
            any
          >
          Button: import('../../../_mixins').Theme<
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
          Input: import('../../../_mixins').Theme<
            'Input',
            {
              countTextColor: string
              heightTiny: string
              heightSmall: string
              heightMedium: string
              heightLarge: string
              fontSizeTiny: string
              fontSizeSmall: string
              fontSizeMedium: string
              fontSizeLarge: string
              lineHeight: string
              lineHeightTextarea: string
              borderRadius: string
              iconSize: string
              groupLabelColor: string
              groupLabelTextColor: string
              textColor: string
              textColorDisabled: string
              textDecorationColor: string
              caretColor: string
              placeholderColor: string
              placeholderColorDisabled: string
              color: string
              colorDisabled: string
              colorFocus: string
              groupLabelBorder: string
              border: string
              borderHover: string
              borderDisabled: string
              borderFocus: string
              boxShadowFocus: string
              loadingColor: string
              loadingColorWarning: string
              borderWarning: string
              borderHoverWarning: string
              colorFocusWarning: string
              borderFocusWarning: string
              boxShadowFocusWarning: string
              caretColorWarning: string
              loadingColorError: string
              borderError: string
              borderHoverError: string
              colorFocusError: string
              borderFocusError: string
              boxShadowFocusError: string
              caretColorError: string
              clearColor: string
              clearColorHover: string
              clearColorPressed: string
              iconColor: string
              iconColorDisabled: string
              iconColorHover: string
              iconColorPressed: string
              suffixTextColor: string
              paddingTiny: string
              paddingSmall: string
              paddingMedium: string
              paddingLarge: string
              clearSize: string
            },
            any
          >
        }
      >
      Scrollbar: import('../../../_mixins').Theme<
        'Scrollbar',
        {
          color: string
          colorHover: string
        },
        any
      >
    }
    peerOverrides: {
      Input?:
        | {
            peers?:
              | {
                  [x: string]: any
                }
              | undefined
          }
        | undefined
      Button?:
        | {
            peers?:
              | {
                  [x: string]: any
                }
              | undefined
          }
        | undefined
      TimePicker?:
        | {
            peers?:
              | {
                  Scrollbar?:
                    | import('../../../_mixins/use-theme').ExtractThemeOverrides<
                        import('../../../_mixins').Theme<
                          'Scrollbar',
                          {
                            color: string
                            colorHover: string
                          },
                          any
                        >
                      >
                    | undefined
                  Button?:
                    | import('../../../_mixins/use-theme').ExtractThemeOverrides<
                        import('../../../_mixins').Theme<
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
                  Input?:
                    | import('../../../_mixins/use-theme').ExtractThemeOverrides<
                        import('../../../_mixins').Theme<
                          'Input',
                          {
                            countTextColor: string
                            heightTiny: string
                            heightSmall: string
                            heightMedium: string
                            heightLarge: string
                            fontSizeTiny: string
                            fontSizeSmall: string
                            fontSizeMedium: string
                            fontSizeLarge: string
                            lineHeight: string
                            lineHeightTextarea: string
                            borderRadius: string
                            iconSize: string
                            groupLabelColor: string
                            groupLabelTextColor: string
                            textColor: string
                            textColorDisabled: string
                            textDecorationColor: string
                            caretColor: string
                            placeholderColor: string
                            placeholderColorDisabled: string
                            color: string
                            colorDisabled: string
                            colorFocus: string
                            groupLabelBorder: string
                            border: string
                            borderHover: string
                            borderDisabled: string
                            borderFocus: string
                            boxShadowFocus: string
                            loadingColor: string
                            loadingColorWarning: string
                            borderWarning: string
                            borderHoverWarning: string
                            colorFocusWarning: string
                            borderFocusWarning: string
                            boxShadowFocusWarning: string
                            caretColorWarning: string
                            loadingColorError: string
                            borderError: string
                            borderHoverError: string
                            colorFocusError: string
                            borderFocusError: string
                            boxShadowFocusError: string
                            caretColorError: string
                            clearColor: string
                            clearColorHover: string
                            clearColorPressed: string
                            iconColor: string
                            iconColorDisabled: string
                            iconColorHover: string
                            iconColorPressed: string
                            suffixTextColor: string
                            paddingTiny: string
                            paddingSmall: string
                            paddingMedium: string
                            paddingLarge: string
                            clearSize: string
                          },
                          any
                        >
                      >
                    | undefined
                }
              | undefined
          }
        | undefined
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
  mergedClsPrefix: import('vue').Ref<string>
  dateFnsOptions: import('vue').ComputedRef<{
    locale: Locale
  }>
  timePickerSize: import('vue').Ref<'small' | 'medium' | 'large'>
  selfRef: import('vue').Ref<HTMLElement | null>
  locale: import('vue').Ref<{
    yearFormat: string
    monthFormat: string
    dayFormat: string
    yearTypeFormat: string
    monthTypeFormat: string
    dateFormat: string
    dateTimeFormat: string
    quarterFormat: string
    clear: string
    now: string
    confirm: string
    selectTime: string
    selectDate: string
    datePlaceholder: string
    datetimePlaceholder: string
    monthPlaceholder: string
    yearPlaceholder: string
    quarterPlaceholder: string
    startDatePlaceholder: string
    endDatePlaceholder: string
    startDatetimePlaceholder: string
    endDatetimePlaceholder: string
    monthBeforeYear: boolean
    firstDayOfWeek: 0 | 2 | 1 | 3 | 4 | 5 | 6
    today: string
  }>
  doConfirm: () => void
  doClose: (disableUpdateOnClose?: boolean) => void
  doUpdateValue: (value: Value | null, doUpdate: boolean) => void
  doTabOut: () => void
  handleClearClick: () => void
  handleFocusDetectorFocus: () => void
  disableTransitionOneTick: () => void
  handlePanelKeyDown: (e: KeyboardEvent) => void
  handlePanelFocus: (e: FocusEvent) => void
  cachePendingValue: () => void
  clearPendingValue: () => void
  restorePendingValue: () => void
  getShortcutValue: (shortcut: Shortcuts[string]) => number | [number, number]
  handleShortcutMouseleave: () => void
}
export { usePanelCommon, usePanelCommonProps }