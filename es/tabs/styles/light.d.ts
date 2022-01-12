import type { ThemeCommonVars } from '../../_styles/common'
import { Theme } from '../../_mixins'
export declare const self: (vars: ThemeCommonVars) => {
  colorSegment: string
  tabFontSizeCard: string
  tabTextColorLine: string
  tabTextColorActiveLine: string
  tabTextColorHoverLine: string
  tabTextColorDisabledLine: string
  tabTextColorSegment: string
  tabTextColorActiveSegment: string
  tabTextColorHoverSegment: string
  tabTextColorDisabledSegment: string
  tabTextColorBar: string
  tabTextColorActiveBar: string
  tabTextColorHoverBar: string
  tabTextColorDisabledBar: string
  tabTextColorCard: string
  tabTextColorHoverCard: string
  tabTextColorActiveCard: string
  tabTextColorDisabledCard: string
  barColor: string
  closeColor: string
  closeColorHover: string
  closeColorPressed: string
  tabColor: string
  tabColorSegment: string
  tabBorderColor: string
  tabFontWeightActive: string
  tabFontWeight: string
  tabBorderRadius: string
  paneTextColor: string
  fontWeightStrong: string
  tabFontSizeSmall: string
  tabFontSizeMedium: string
  tabFontSizeLarge: string
  tabGapSmallLine: string
  tabGapMediumLine: string
  tabGapLargeLine: string
  tabPaddingSmallLine: string
  tabPaddingMediumLine: string
  tabPaddingLargeLine: string
  tabGapSmallBar: string
  tabGapMediumBar: string
  tabGapLargeBar: string
  tabPaddingSmallBar: string
  tabPaddingMediumBar: string
  tabPaddingLargeBar: string
  tabGapSmallCard: string
  tabGapMediumCard: string
  tabGapLargeCard: string
  tabPaddingSmallCard: string
  tabPaddingMediumCard: string
  tabPaddingLargeCard: string
  tabPaddingSmallSegment: string
  tabPaddingMediumSegment: string
  tabPaddingLargeSegment: string
  tabGapSmallSegment: string
  tabGapMediumSegment: string
  tabGapLargeSegment: string
  panePaddingSmall: string
  panePaddingMedium: string
  panePaddingLarge: string
}
export declare type TabsThemeVars = ReturnType<typeof self>
declare const tabsLight: Theme<'Tabs', TabsThemeVars>
export default tabsLight
export declare type TabsTheme = typeof tabsLight
