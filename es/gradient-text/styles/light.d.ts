import type { Theme } from '../../_mixins'
import type { ThemeCommonVars } from '../../_styles/common'
declare const self: (vars: ThemeCommonVars) => {
  fontWeight: string
  rotate: string
  colorStartPrimary: string
  colorEndPrimary: string
  colorStartInfo: string
  colorEndInfo: string
  colorStartWarning: string
  colorEndWarning: string
  colorStartError: string
  colorEndError: string
  colorStartSuccess: string
  colorEndSuccess: string
}
export declare type GradientTextThemeVars = ReturnType<typeof self>
declare const gradientTextLight: Theme<'GradientText', GradientTextThemeVars>
export default gradientTextLight
export declare type GradientTextTheme = typeof gradientTextLight
