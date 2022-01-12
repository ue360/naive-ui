import { PropType, CSSProperties } from 'vue'
import type { MaybeArray, ExtractPublicPropTypes } from '../../_utils'
declare const modalProps: {
  'onUpdate:show': PropType<MaybeArray<(value: boolean) => void>>
  onUpdateShow: PropType<MaybeArray<(value: boolean) => void>>
  onAfterEnter: PropType<() => void>
  onBeforeLeave: PropType<() => void>
  onAfterLeave: PropType<() => void>
  onClose: PropType<() => Promise<boolean> | boolean | any>
  onPositiveClick: PropType<() => Promise<boolean> | boolean | any>
  onNegativeClick: PropType<() => Promise<boolean> | boolean | any>
  onMaskClick: PropType<(e: MouseEvent) => void>
  dialog: BooleanConstructor
  appear: {
    type: PropType<boolean | undefined>
    default: undefined
  }
  overlayStyle: PropType<string | CSSProperties>
  onBeforeHide: PropType<() => void>
  onAfterHide: PropType<() => void>
  onHide: PropType<(value: false) => void>
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
  contentStyle: PropType<string | CSSProperties>
  headerStyle: PropType<string | CSSProperties>
  footerStyle: PropType<string | CSSProperties>
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
  show: BooleanConstructor
  draggable: BooleanConstructor
  unstableShowMask: {
    type: BooleanConstructor
    default: boolean
  }
  maskClosable: {
    type: BooleanConstructor
    default: boolean
  }
  preset: PropType<'dialog' | 'card' | 'confirm'>
  to: PropType<string | HTMLElement>
  displayDirective: {
    type: PropType<'show' | 'if'>
    default: string
  }
  transformOrigin: {
    type: PropType<'center' | 'mouse'>
    default: string
  }
  theme: PropType<
    import('../../_mixins').Theme<
      'Modal',
      {
        color: string
        textColor: string
        boxShadow: string
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
    >
  >
  themeOverrides: PropType<
    import('../../_mixins/use-theme').ExtractThemeOverrides<
      import('../../_mixins').Theme<
        'Modal',
        {
          color: string
          textColor: string
          boxShadow: string
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
      >
    >
  >
  builtinThemeOverrides: PropType<
    import('../../_mixins/use-theme').ExtractThemeOverrides<
      import('../../_mixins').Theme<
        'Modal',
        {
          color: string
          textColor: string
          boxShadow: string
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
      >
    >
  >
}
export declare type ModalProps = ExtractPublicPropTypes<typeof modalProps>
declare const _default: import('vue').DefineComponent<
  {
    'onUpdate:show': PropType<MaybeArray<(value: boolean) => void>>
    onUpdateShow: PropType<MaybeArray<(value: boolean) => void>>
    onAfterEnter: PropType<() => void>
    onBeforeLeave: PropType<() => void>
    onAfterLeave: PropType<() => void>
    onClose: PropType<() => any>
    onPositiveClick: PropType<() => any>
    onNegativeClick: PropType<() => any>
    onMaskClick: PropType<(e: MouseEvent) => void>
    dialog: BooleanConstructor
    appear: {
      type: PropType<boolean | undefined>
      default: undefined
    }
    overlayStyle: PropType<string | CSSProperties>
    onBeforeHide: PropType<() => void>
    onAfterHide: PropType<() => void>
    onHide: PropType<(value: false) => void>
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
    contentStyle: PropType<string | CSSProperties>
    headerStyle: PropType<string | CSSProperties>
    footerStyle: PropType<string | CSSProperties>
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
    show: BooleanConstructor
    draggable: BooleanConstructor
    unstableShowMask: {
      type: BooleanConstructor
      default: boolean
    }
    maskClosable: {
      type: BooleanConstructor
      default: boolean
    }
    preset: PropType<'dialog' | 'card' | 'confirm'>
    to: PropType<string | HTMLElement>
    displayDirective: {
      type: PropType<'show' | 'if'>
      default: string
    }
    transformOrigin: {
      type: PropType<'center' | 'mouse'>
      default: string
    }
    theme: PropType<
      import('../../_mixins').Theme<
        'Modal',
        {
          color: string
          textColor: string
          boxShadow: string
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
      >
    >
    themeOverrides: PropType<
      import('../../_mixins/use-theme').ExtractThemeOverrides<
        import('../../_mixins').Theme<
          'Modal',
          {
            color: string
            textColor: string
            boxShadow: string
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
        >
      >
    >
    builtinThemeOverrides: PropType<
      import('../../_mixins/use-theme').ExtractThemeOverrides<
        import('../../_mixins').Theme<
          'Modal',
          {
            color: string
            textColor: string
            boxShadow: string
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
        >
      >
    >
  },
  {
    mergedClsPrefix: import('vue').ComputedRef<string>
    namespace: import('vue').ComputedRef<string | undefined>
    isMounted: Readonly<import('vue').Ref<boolean>>
    containerRef: import('vue').Ref<HTMLElement | null>
    presetProps: import('vue').ComputedRef<
      Pick<
        Readonly<{
          [x: string & `on${string}`]:
            | ((...args: any[]) => any)
            | ((...args: unknown[]) => any)
            | undefined
          type: 'default' | 'error' | 'info' | 'success' | 'warning'
          content: string | (() => import('vue').VNodeChild) | undefined
          size: 'small' | 'medium' | 'large' | 'huge'
          show: boolean
          icon: (() => import('vue').VNodeChild) | undefined
          transformOrigin: 'center' | 'mouse'
          appear: boolean | undefined
          onAfterEnter: (() => void) | undefined
          onBeforeLeave: (() => void) | undefined
          onAfterLeave: (() => void) | undefined
          dialog: boolean
          draggable: boolean
          title: string | (() => import('vue').VNodeChild) | undefined
          action: (() => import('vue').VNodeChild) | undefined
          to: string | HTMLElement | undefined
          theme:
            | import('../../_mixins').Theme<
                'Modal',
                {
                  color: string
                  textColor: string
                  boxShadow: string
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
              >
            | undefined
          themeOverrides:
            | import('../../_mixins/use-theme').ExtractThemeOverrides<
                import('../../_mixins').Theme<
                  'Modal',
                  {
                    color: string
                    textColor: string
                    boxShadow: string
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
                >
              >
            | undefined
          builtinThemeOverrides:
            | import('../../_mixins/use-theme').ExtractThemeOverrides<
                import('../../_mixins').Theme<
                  'Modal',
                  {
                    color: string
                    textColor: string
                    boxShadow: string
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
                >
              >
            | undefined
          positiveText: string | undefined
          negativeText: string | undefined
          loading: boolean
          bordered: boolean
          contentStyle: string | CSSProperties | undefined
          onClose: (() => any) | undefined
          closable: boolean
          displayDirective: 'show' | 'if'
          'onUpdate:show': MaybeArray<(value: boolean) => void> | undefined
          onUpdateShow: MaybeArray<(value: boolean) => void> | undefined
          onHide: ((value: false) => void) | undefined
          showIcon: boolean
          iconPlacement:
            | import('../../dialog/src/interface').IconPlacement
            | undefined
          onAfterHide: (() => void) | undefined
          hoverable: boolean
          headerStyle: string | CSSProperties | undefined
          footerStyle: string | CSSProperties | undefined
          embedded: boolean
          segmented: boolean | import('../../card/src/Card').Segmented
          onPositiveClick: (() => any) | undefined
          onNegativeClick: (() => any) | undefined
          preset: 'dialog' | 'card' | 'confirm' | undefined
          onMaskClick: ((e: MouseEvent) => void) | undefined
          overlayStyle: string | CSSProperties | undefined
          onBeforeHide: (() => void) | undefined
          unstableShowMask: boolean
          maskClosable: boolean
        }>,
        | 'type'
        | 'content'
        | 'size'
        | 'icon'
        | 'title'
        | 'action'
        | 'positiveText'
        | 'negativeText'
        | 'loading'
        | 'bordered'
        | 'contentStyle'
        | 'onClose'
        | 'closable'
        | 'showIcon'
        | 'iconPlacement'
        | 'hoverable'
        | 'headerStyle'
        | 'footerStyle'
        | 'embedded'
        | 'segmented'
        | 'onPositiveClick'
        | 'onNegativeClick'
      >
    >
    handleAfterLeave: () => void
    handleClickoutside: (e: MouseEvent) => void
    handleBeforeLeave: () => void
    doUpdateShow: (show: boolean) => void
    handleNegativeClick: () => void
    handlePositiveClick: () => void
    handleCloseClick: () => void
    cssVars: import('vue').ComputedRef<{
      '--bezier-ease-out': string
      '--box-shadow': string
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
      'onUpdate:show'?: unknown
      onUpdateShow?: unknown
      onAfterEnter?: unknown
      onBeforeLeave?: unknown
      onAfterLeave?: unknown
      onClose?: unknown
      onPositiveClick?: unknown
      onNegativeClick?: unknown
      onMaskClick?: unknown
      dialog?: unknown
      appear?: unknown
      overlayStyle?: unknown
      onBeforeHide?: unknown
      onAfterHide?: unknown
      onHide?: unknown
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
      unstableShowMask?: unknown
      maskClosable?: unknown
      preset?: unknown
      to?: unknown
      displayDirective?: unknown
      transformOrigin?: unknown
      theme?: unknown
      themeOverrides?: unknown
      builtinThemeOverrides?: unknown
    } & {
      type: 'default' | 'error' | 'info' | 'success' | 'warning'
      size: 'small' | 'medium' | 'large' | 'huge'
      show: boolean
      transformOrigin: 'center' | 'mouse'
      dialog: boolean
      draggable: boolean
      loading: boolean
      bordered: boolean
      closable: boolean
      displayDirective: 'show' | 'if'
      showIcon: boolean
      hoverable: boolean
      embedded: boolean
      segmented: boolean | import('../../card/src/Card').Segmented
      unstableShowMask: boolean
      maskClosable: boolean
    } & {
      content?: string | (() => import('vue').VNodeChild) | undefined
      icon?: (() => import('vue').VNodeChild) | undefined
      appear?: boolean | undefined
      onAfterEnter?: (() => void) | undefined
      onBeforeLeave?: (() => void) | undefined
      onAfterLeave?: (() => void) | undefined
      title?: string | (() => import('vue').VNodeChild) | undefined
      action?: (() => import('vue').VNodeChild) | undefined
      to?: string | HTMLElement | undefined
      theme?:
        | import('../../_mixins').Theme<
            'Modal',
            {
              color: string
              textColor: string
              boxShadow: string
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
          >
        | undefined
      themeOverrides?:
        | import('../../_mixins/use-theme').ExtractThemeOverrides<
            import('../../_mixins').Theme<
              'Modal',
              {
                color: string
                textColor: string
                boxShadow: string
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
            >
          >
        | undefined
      builtinThemeOverrides?:
        | import('../../_mixins/use-theme').ExtractThemeOverrides<
            import('../../_mixins').Theme<
              'Modal',
              {
                color: string
                textColor: string
                boxShadow: string
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
            >
          >
        | undefined
      positiveText?: string | undefined
      negativeText?: string | undefined
      contentStyle?: string | CSSProperties | undefined
      onClose?: (() => any) | undefined
      'onUpdate:show'?: MaybeArray<(value: boolean) => void> | undefined
      onUpdateShow?: MaybeArray<(value: boolean) => void> | undefined
      onHide?: ((value: false) => void) | undefined
      iconPlacement?:
        | import('../../dialog/src/interface').IconPlacement
        | undefined
      onAfterHide?: (() => void) | undefined
      headerStyle?: string | CSSProperties | undefined
      footerStyle?: string | CSSProperties | undefined
      onPositiveClick?: (() => any) | undefined
      onNegativeClick?: (() => any) | undefined
      preset?: 'dialog' | 'card' | 'confirm' | undefined
      onMaskClick?: ((e: MouseEvent) => void) | undefined
      overlayStyle?: string | CSSProperties | undefined
      onBeforeHide?: (() => void) | undefined
    }
  >,
  {
    type: 'default' | 'error' | 'info' | 'success' | 'warning'
    size: 'small' | 'medium' | 'large' | 'huge'
    show: boolean
    transformOrigin: 'center' | 'mouse'
    appear: boolean | undefined
    dialog: boolean
    draggable: boolean
    loading: boolean
    bordered: boolean
    closable: boolean
    displayDirective: 'show' | 'if'
    showIcon: boolean
    hoverable: boolean
    embedded: boolean
    segmented: boolean | import('../../card/src/Card').Segmented
    unstableShowMask: boolean
    maskClosable: boolean
  }
>
export default _default
