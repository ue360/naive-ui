import { PropType, ButtonHTMLAttributes } from 'vue'
import type { ExtractPublicPropTypes, MaybeArray } from '../../_utils'
import type { Type, Size } from './interface'
declare const buttonProps: {
  readonly color: StringConstructor
  readonly textColor: StringConstructor
  readonly text: BooleanConstructor
  readonly block: BooleanConstructor
  readonly loading: BooleanConstructor
  readonly disabled: BooleanConstructor
  readonly circle: BooleanConstructor
  readonly size: PropType<Size>
  readonly ghost: BooleanConstructor
  readonly round: BooleanConstructor
  readonly secondary: BooleanConstructor
  readonly tertiary: BooleanConstructor
  readonly quaternary: BooleanConstructor
  readonly strong: BooleanConstructor
  readonly focusable: {
    readonly type: BooleanConstructor
    readonly default: true
  }
  readonly keyboard: {
    readonly type: BooleanConstructor
    readonly default: true
  }
  readonly tag: {
    readonly type: PropType<keyof HTMLElementTagNameMap>
    readonly default: 'button'
  }
  readonly type: {
    readonly type: PropType<Type>
    readonly default: 'default'
  }
  readonly dashed: BooleanConstructor
  readonly iconPlacement: {
    readonly type: PropType<'left' | 'right'>
    readonly default: 'left'
  }
  readonly attrType: {
    readonly type: PropType<'button' | 'reset' | 'submit'>
    readonly default: 'button'
  }
  readonly onClick: PropType<MaybeArray<(e: MouseEvent) => void>>
  readonly bordered: {
    readonly type: BooleanConstructor
    readonly default: true
  }
  readonly theme: PropType<
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
  readonly themeOverrides: PropType<
    import('../../_mixins/use-theme').ExtractThemeOverrides<
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
  >
  readonly builtinThemeOverrides: PropType<
    import('../../_mixins/use-theme').ExtractThemeOverrides<
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
  >
}
export declare type ButtonProps = ExtractPublicPropTypes<typeof buttonProps>
declare const Button: import('vue').DefineComponent<
  {
    readonly color: StringConstructor
    readonly textColor: StringConstructor
    readonly text: BooleanConstructor
    readonly block: BooleanConstructor
    readonly loading: BooleanConstructor
    readonly disabled: BooleanConstructor
    readonly circle: BooleanConstructor
    readonly size: PropType<Size>
    readonly ghost: BooleanConstructor
    readonly round: BooleanConstructor
    readonly secondary: BooleanConstructor
    readonly tertiary: BooleanConstructor
    readonly quaternary: BooleanConstructor
    readonly strong: BooleanConstructor
    readonly focusable: {
      readonly type: BooleanConstructor
      readonly default: true
    }
    readonly keyboard: {
      readonly type: BooleanConstructor
      readonly default: true
    }
    readonly tag: {
      readonly type: PropType<keyof HTMLElementTagNameMap>
      readonly default: 'button'
    }
    readonly type: {
      readonly type: PropType<Type>
      readonly default: 'default'
    }
    readonly dashed: BooleanConstructor
    readonly iconPlacement: {
      readonly type: PropType<'left' | 'right'>
      readonly default: 'left'
    }
    readonly attrType: {
      readonly type: PropType<'button' | 'reset' | 'submit'>
      readonly default: 'button'
    }
    readonly onClick: PropType<MaybeArray<(e: MouseEvent) => void>>
    readonly bordered: {
      readonly type: BooleanConstructor
      readonly default: true
    }
    readonly theme: PropType<
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
    readonly themeOverrides: PropType<
      import('../../_mixins/use-theme').ExtractThemeOverrides<
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
    >
    readonly builtinThemeOverrides: PropType<
      import('../../_mixins/use-theme').ExtractThemeOverrides<
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
    >
  },
  {
    selfRef: import('vue').Ref<HTMLElement | null>
    waveRef: import('vue').Ref<{
      play: () => void
    } | null>
    mergedClsPrefix: import('vue').ComputedRef<string>
    mergedFocusable: import('vue').ComputedRef<boolean>
    mergedSize: import('vue').ComputedRef<'small' | 'medium' | 'large' | 'tiny'>
    showBorder: import('vue').ComputedRef<boolean>
    enterPressed: import('vue').Ref<boolean>
    rtlEnabled:
      | import('vue').Ref<
          | import('../../config-provider/src/internal-interface').RtlItem
          | undefined
        >
      | undefined
    handleMousedown: (e: MouseEvent) => void
    handleKeydown: (e: KeyboardEvent) => void
    handleBlur: () => void
    handleKeyup: (e: KeyboardEvent) => void
    handleClick: (e: MouseEvent) => void
    customColorCssVars: import('vue').ComputedRef<{
      '--border-color': string
      '--border-color-hover': string
      '--border-color-pressed': string
      '--border-color-focus': string
      '--border-color-disabled': string
    } | null>
    cssVars: import('vue').ComputedRef<{
      '--width': string
      '--height': string
      '--font-size': string
      '--padding': string
      '--icon-size': string
      '--icon-margin': string
      '--border-radius': string
      '--border': string
      '--border-hover': string
      '--border-pressed': string
      '--border-focus': string
      '--border-disabled': string
      '--color': string
      '--color-hover': string
      '--color-pressed': string
      '--color-focus': string
      '--color-disabled': string
      '--ripple-color': string
      '--text-color': string
      '--text-color-hover': string
      '--text-color-pressed': string
      '--text-color-focus': string
      '--text-color-disabled': string
      fontWeight: string
      '--bezier': string
      '--bezier-ease-out': string
      '--ripple-duration': string
      '--opacity-disabled': string
      '--wave-opacity': string
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
      readonly color?: unknown
      readonly textColor?: unknown
      readonly text?: unknown
      readonly block?: unknown
      readonly loading?: unknown
      readonly disabled?: unknown
      readonly circle?: unknown
      readonly size?: unknown
      readonly ghost?: unknown
      readonly round?: unknown
      readonly secondary?: unknown
      readonly tertiary?: unknown
      readonly quaternary?: unknown
      readonly strong?: unknown
      readonly focusable?: unknown
      readonly keyboard?: unknown
      readonly tag?: unknown
      readonly type?: unknown
      readonly dashed?: unknown
      readonly iconPlacement?: unknown
      readonly attrType?: unknown
      readonly onClick?: unknown
      readonly bordered?: unknown
      readonly theme?: unknown
      readonly themeOverrides?: unknown
      readonly builtinThemeOverrides?: unknown
    } & {
      type: Type
      tag: keyof HTMLElementTagNameMap
      block: boolean
      round: boolean
      dashed: boolean
      text: boolean
      circle: boolean
      disabled: boolean
      focusable: boolean
      strong: boolean
      loading: boolean
      bordered: boolean
      tertiary: boolean
      keyboard: boolean
      ghost: boolean
      secondary: boolean
      quaternary: boolean
      iconPlacement: 'left' | 'right'
      attrType: 'button' | 'reset' | 'submit'
    } & {
      color?: string | undefined
      size?: Size | undefined
      onClick?: MaybeArray<(e: MouseEvent) => void> | undefined
      theme?:
        | import('../../_mixins').Theme<
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
        | undefined
      themeOverrides?:
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
      builtinThemeOverrides?:
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
      textColor?: string | undefined
    }
  >,
  {
    type: Type
    tag: keyof HTMLElementTagNameMap
    block: boolean
    round: boolean
    dashed: boolean
    text: boolean
    circle: boolean
    disabled: boolean
    focusable: boolean
    strong: boolean
    loading: boolean
    bordered: boolean
    tertiary: boolean
    keyboard: boolean
    ghost: boolean
    secondary: boolean
    quaternary: boolean
    iconPlacement: 'left' | 'right'
    attrType: 'button' | 'reset' | 'submit'
  }
>
declare type NativeButtonProps = Omit<ButtonHTMLAttributes, keyof ButtonProps>
declare type MergedProps = Partial<ButtonProps & NativeButtonProps>
export default Button
export declare const XButton: new () => {
  $props: MergedProps
}
