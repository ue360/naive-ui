import type { ThemeCommonVars } from '../../_styles/common'
import { Theme } from '../../_mixins'
declare const self: (vars: ThemeCommonVars) => {
  fontSize: string
  railColor: string
  railColorHover: string
  fillColor: string
  fillColorHover: string
  opacityDisabled: string
  handleColor: string
  dotColor: string
  dotColorModal: string
  dotColorPopover: string
  handleBoxShadow: string
  handleBoxShadowHover: string
  handleBoxShadowActive: string
  handleBoxShadowFocus: string
  indicatorColor: string
  indicatorBoxShadow: string
  indicatorTextColor: string
  indicatorBorderRadius: string
  dotBorder: string
  dotBorderActive: string
  dotBoxShadow: string
  railHeight: string
  railWidthVertical: string
  handleSize: string
  dotHeight: string
  dotWidth: string
  dotBorderRadius: string
}
export declare type SliderThemeVars = ReturnType<typeof self>
declare const sliderLight: Theme<'Slider', SliderThemeVars>
export default sliderLight
export declare type SliderTheme = typeof sliderLight
