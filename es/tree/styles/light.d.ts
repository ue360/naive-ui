import type { ThemeCommonVars } from '../../_styles/common'
export declare const self: (vars: ThemeCommonVars) => {
  fontSize: string
  nodeBorderRadius: string
  nodeColorHover: string
  nodeColorPressed: string
  nodeColorActive: string
  arrowColor: string
  nodeTextColor: string
  nodeTextColorDisabled: string
  loadingColor: string
  dropMarkColor: string
}
export declare type TreeThemeVars = ReturnType<typeof self>
declare const treeLight: import('../../_mixins/use-theme').Theme<
  'Tree',
  {
    fontSize: string
    nodeBorderRadius: string
    nodeColorHover: string
    nodeColorPressed: string
    nodeColorActive: string
    arrowColor: string
    nodeTextColor: string
    nodeTextColorDisabled: string
    loadingColor: string
    dropMarkColor: string
  },
  {
    Checkbox: import('../../_mixins/use-theme').Theme<
      'Checkbox',
      {
        fontSizeSmall: string
        fontSizeMedium: string
        fontSizeLarge: string
        borderRadius: string
        color: string
        colorChecked: string
        colorDisabled: string
        colorDisabledChecked: string
        colorTableHeader: string
        colorTableHeaderModal: string
        colorTableHeaderPopover: string
        checkMarkColor: string
        checkMarkColorDisabled: string
        checkMarkColorDisabledChecked: string
        border: string
        borderDisabled: string
        borderDisabledChecked: string
        borderChecked: string
        borderFocus: string
        boxShadowFocus: string
        textColor: string
        textColorDisabled: string
        sizeSmall: string
        sizeMedium: string
        sizeLarge: string
        labelPadding: string
      },
      any
    >
    Scrollbar: import('../../_mixins/use-theme').Theme<
      'Scrollbar',
      {
        color: string
        colorHover: string
      },
      any
    >
  }
>
export default treeLight
export declare type TreeTheme = typeof treeLight
