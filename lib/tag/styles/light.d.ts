import type { ThemeCommonVars } from '../../_styles/common'
import type { Theme } from '../../_mixins'
declare const self: (vars: ThemeCommonVars) => {
  heightSmall: string
  heightMedium: string
  heightLarge: string
  borderRadius: string
  opacityDisabled: string
  fontSizeSmall: string
  fontSizeMedium: string
  fontSizeLarge: string
  textColorCheckable: string
  textColorHoverCheckable: string
  textColorPressedCheckable: string
  textColorChecked: string
  colorCheckable: string
  colorHoverCheckable: string
  colorPressedCheckable: string
  colorChecked: string
  colorCheckedHover: string
  colorCheckedPressed: string
  border: string
  textColor: string
  color: string
  closeColor: string
  closeColorHover: string
  closeColorPressed: string
  borderPrimary: string
  textColorPrimary: string
  colorPrimary: string
  closeColorPrimary: string
  closeColorHoverPrimary: string
  closeColorPressedPrimary: string
  borderInfo: string
  textColorInfo: string
  colorInfo: string
  closeColorInfo: string
  closeColorHoverInfo: string
  closeColorPressedInfo: string
  borderSuccess: string
  textColorSuccess: string
  colorSuccess: string
  closeColorSuccess: string
  closeColorHoverSuccess: string
  closeColorPressedSuccess: string
  borderWarning: string
  textColorWarning: string
  colorWarning: string
  closeColorWarning: string
  closeColorHoverWarning: string
  closeColorPressedWarning: string
  borderError: string
  textColorError: string
  colorError: string
  closeColorError: string
  closeColorHoverError: string
  closeColorPressedError: string
  closeSizeSmall: string
  closeSizeMedium: string
  closeSizeLarge: string
  padding: string
  closeMargin: string
  closeMarginRtl: string
}
export declare type TagThemeVars = ReturnType<typeof self>
declare const tagLight: Theme<'Tag', TagThemeVars>
export default tagLight
export declare type TagTheme = typeof tagLight