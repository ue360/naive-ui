import type { ThemeCommonVars } from '../../_styles/common'
import type { Theme } from '../../_mixins'
export declare const self: (vars: ThemeCommonVars) => {
  lineHeight: string
  labelTextColor: string
  asteriskColor: string
  feedbackTextColorError: string
  feedbackTextColorWarning: string
  feedbackTextColor: string
  blankHeightSmall: string
  blankHeightMedium: string
  blankHeightLarge: string
  feedbackPadding: string
  feedbackHeightSmall: string
  feedbackHeightMedium: string
  feedbackHeightLarge: string
  feedbackFontSizeSmall: string
  feedbackFontSizeMedium: string
  feedbackFontSizeLarge: string
  labelFontSizeLeftSmall: string
  labelFontSizeLeftMedium: string
  labelFontSizeLeftLarge: string
  labelFontSizeTopSmall: string
  labelFontSizeTopMedium: string
  labelFontSizeTopLarge: string
  labelHeightSmall: string
  labelHeightMedium: string
  labelHeightLarge: string
  labelPaddingVertical: string
  labelPaddingHorizontal: string
  labelTextAlignVertical: string
  labelTextAlignHorizontal: string
}
export declare type FormThemeVars = ReturnType<typeof self>
declare const formLight: Theme<'Form', FormThemeVars>
export default formLight
export declare type FormTheme = typeof formLight