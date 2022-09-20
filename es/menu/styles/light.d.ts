import type { ThemeCommonVars } from '../../_styles/common'
export declare function createPartialInvertedVars(
  color: string,
  activeColor: string,
  groupColor: string
): {
  itemTextColorInverted: string
  itemTextColorHoverInverted: string
  itemTextColorChildActiveInverted: string
  itemTextColorActiveInverted: string
  itemIconColorInverted: string
  itemIconColorHoverInverted: string
  itemIconColorActiveInverted: string
  itemIconColorChildActiveInverted: string
  itemIconColorCollapsedInverted: string
  arrowColorInverted: string
  arrowColorHoverInverted: string
  arrowColorChildActiveInverted: string
  arrowColorActiveInverted: string
  groupTextColorInverted: string
}
export declare const self: (vars: ThemeCommonVars) => {
  itemTextColorInverted: string
  itemTextColorHoverInverted: string
  itemTextColorChildActiveInverted: string
  itemTextColorActiveInverted: string
  itemIconColorInverted: string
  itemIconColorHoverInverted: string
  itemIconColorActiveInverted: string
  itemIconColorChildActiveInverted: string
  itemIconColorCollapsedInverted: string
  arrowColorInverted: string
  arrowColorHoverInverted: string
  arrowColorChildActiveInverted: string
  arrowColorActiveInverted: string
  groupTextColorInverted: string
  borderRadius: string
  color: string
  groupTextColor: string
  itemColorActive: string
  itemColorActiveCollapsed: string
  itemTextColor: string
  itemTextColorHover: string
  itemTextColorChildActive: string
  itemTextColorActive: string
  itemIconColor: string
  itemIconColorHover: string
  itemIconColorActive: string
  itemIconColorChildActive: string
  itemIconColorCollapsed: string
  itemHeight: string
  arrowColor: string
  arrowColorHover: string
  arrowColorChildActive: string
  arrowColorActive: string
  colorInverted: string
  itemColorActiveInverted: string
  itemColorActiveCollapsedInverted: string
  borderColorHorizontal: string
  fontSize: string
  dividerColor: string
}
export declare type MenuThemeVars = ReturnType<typeof self>
declare const menuLight: import('../../_mixins/use-theme').Theme<
  'Menu',
  {
    itemTextColorInverted: string
    itemTextColorHoverInverted: string
    itemTextColorChildActiveInverted: string
    itemTextColorActiveInverted: string
    itemIconColorInverted: string
    itemIconColorHoverInverted: string
    itemIconColorActiveInverted: string
    itemIconColorChildActiveInverted: string
    itemIconColorCollapsedInverted: string
    arrowColorInverted: string
    arrowColorHoverInverted: string
    arrowColorChildActiveInverted: string
    arrowColorActiveInverted: string
    groupTextColorInverted: string
    borderRadius: string
    color: string
    groupTextColor: string
    itemColorActive: string
    itemColorActiveCollapsed: string
    itemTextColor: string
    itemTextColorHover: string
    itemTextColorChildActive: string
    itemTextColorActive: string
    itemIconColor: string
    itemIconColorHover: string
    itemIconColorActive: string
    itemIconColorChildActive: string
    itemIconColorCollapsed: string
    itemHeight: string
    arrowColor: string
    arrowColorHover: string
    arrowColorChildActive: string
    arrowColorActive: string
    colorInverted: string
    itemColorActiveInverted: string
    itemColorActiveCollapsedInverted: string
    borderColorHorizontal: string
    fontSize: string
    dividerColor: string
  },
  {
    Tooltip: import('../../_mixins/use-theme').Theme<
      'Tooltip',
      {
        borderRadius: string
        boxShadow: string
        color: string
        textColor: string
        padding: string
      },
      {
        Popover: import('../../_mixins/use-theme').Theme<
          'Popover',
          {
            fontSize: string
            borderRadius: string
            color: string
            dividerColor: string
            textColor: string
            boxShadow: string
            space: string
            spaceArrow: string
            arrowOffset: string
            arrowOffsetVertical: string
            arrowHeight: string
            padding: string
          },
          any
        >
      }
    >
  }
>
export default menuLight
export declare type MenuTheme = typeof menuLight