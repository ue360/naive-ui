import type { ThemeCommonVars } from '../../_styles/common'
import { Theme } from '../../_mixins'
export declare const self: (vars: ThemeCommonVars) => {
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
}
export declare type CardThemeVars = ReturnType<typeof self>
declare const cardLight: Theme<'Card', CardThemeVars>
export default cardLight
export declare type CardTheme = typeof cardLight
