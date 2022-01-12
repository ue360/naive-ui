import type { ThemeCommonVars } from '../../_styles/common'
import { Theme } from '../../_mixins/use-theme'
declare const self: (vars: ThemeCommonVars) => {
  buttonHeightSmall: string
  buttonHeightMedium: string
  buttonHeightLarge: string
  fontSizeSmall: string
  fontSizeMedium: string
  fontSizeLarge: string
  boxShadow: string
  boxShadowActive: string
  boxShadowFocus: string
  boxShadowHover: string
  boxShadowDisabled: string
  color: string
  colorDisabled: string
  textColor: string
  textColorDisabled: string
  dotColorActive: string
  dotColorDisabled: string
  buttonBorderColor: string
  buttonBorderColorActive: string
  buttonBorderColorHover: string
  buttonColor: string
  buttonColorActive: string
  buttonTextColor: string
  buttonTextColorActive: string
  buttonTextColorHover: string
  opacityDisabled: string
  buttonBoxShadowFocus: string
  buttonBoxShadowHover: string
  buttonBoxShadow: string
  buttonBorderRadius: string
  radioSizeSmall: string
  radioSizeMedium: string
  radioSizeLarge: string
  labelPadding: string
}
export declare type RadioThemeVars = ReturnType<typeof self>
declare const radioLight: Theme<'Radio', RadioThemeVars>
export default radioLight
export declare type RadioTheme = typeof radioLight
