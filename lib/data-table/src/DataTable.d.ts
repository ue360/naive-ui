import { PropType, ExtractPropTypes } from 'vue'
import { PaginationProps } from '../../pagination/src/Pagination'
import type { MaybeArray, ExtractPublicPropTypes } from '../../_utils'
import type {
  CreateRowClassName,
  CreateRowKey,
  OnUpdateCheckedRowKeys,
  OnUpdateSorter,
  RowKey,
  TableColumns,
  RowData,
  OnUpdateFilters,
  OnUpdateExpandedRowKeys,
  CreateSummary,
  CreateRowProps
} from './interface'
export declare const dataTableProps: {
  readonly pagination: {
    readonly type: PropType<false | PaginationProps>
    readonly default: false
  }
  readonly minHeight: PropType<string | number>
  readonly maxHeight: PropType<string | number>
  readonly columns: {
    readonly type: PropType<TableColumns<any>>
    readonly default: () => never[]
  }
  readonly rowClassName: PropType<string | CreateRowClassName<any>>
  readonly rowProps: PropType<CreateRowProps<any>>
  readonly rowKey: PropType<CreateRowKey<any>>
  readonly summary: PropType<CreateSummary<any>>
  readonly data: {
    readonly type: PropType<RowData[]>
    readonly default: () => never[]
  }
  readonly loading: BooleanConstructor
  readonly bordered: {
    readonly type: PropType<boolean | undefined>
    readonly default: undefined
  }
  readonly bottomBordered: {
    readonly type: PropType<boolean | undefined>
    readonly default: undefined
  }
  readonly striped: BooleanConstructor
  readonly scrollX: PropType<string | number>
  readonly defaultCheckedRowKeys: {
    readonly type: PropType<RowKey[]>
    readonly default: () => never[]
  }
  readonly checkedRowKeys: PropType<RowKey[]>
  readonly singleLine: {
    readonly type: BooleanConstructor
    readonly default: true
  }
  readonly singleColumn: BooleanConstructor
  readonly size: {
    readonly type: PropType<'small' | 'medium' | 'large'>
    readonly default: 'medium'
  }
  readonly remote: BooleanConstructor
  readonly defaultExpandedRowKeys: {
    readonly type: PropType<RowKey[]>
    readonly default: readonly []
  }
  readonly expandedRowKeys: PropType<RowKey[]>
  readonly virtualScroll: BooleanConstructor
  readonly tableLayout: {
    readonly type: PropType<'fixed' | 'auto'>
    readonly default: 'auto'
  }
  readonly cascade: {
    readonly type: BooleanConstructor
    readonly default: true
  }
  readonly childrenKey: {
    readonly type: StringConstructor
    readonly default: 'children'
  }
  readonly indent: {
    readonly type: NumberConstructor
    readonly default: 16
  }
  readonly flexHeight: BooleanConstructor
  readonly 'onUpdate:page': PropType<
    MaybeArray<(page: number) => void> | undefined
  >
  readonly onUpdatePage: PropType<
    MaybeArray<(page: number) => void> | undefined
  >
  readonly 'onUpdate:pageSize': PropType<
    MaybeArray<(pageSize: number) => void> | undefined
  >
  readonly onUpdatePageSize: PropType<
    MaybeArray<(pageSize: number) => void> | undefined
  >
  readonly 'onUpdate:sorter': PropType<MaybeArray<OnUpdateSorter>>
  readonly onUpdateSorter: PropType<MaybeArray<OnUpdateSorter>>
  readonly 'onUpdate:filters': PropType<MaybeArray<OnUpdateFilters>>
  readonly onUpdateFilters: PropType<MaybeArray<OnUpdateFilters>>
  readonly 'onUpdate:checkedRowKeys': PropType<
    MaybeArray<OnUpdateCheckedRowKeys>
  >
  readonly onUpdateCheckedRowKeys: PropType<MaybeArray<OnUpdateCheckedRowKeys>>
  readonly 'onUpdate:expandedRowKeys': PropType<
    MaybeArray<OnUpdateExpandedRowKeys>
  >
  readonly onUpdateExpandedRowKeys: PropType<
    MaybeArray<OnUpdateExpandedRowKeys>
  >
  readonly onPageChange: {
    readonly type: PropType<MaybeArray<(page: number) => void> | undefined>
    readonly validator: () => boolean
    readonly default: undefined
  }
  readonly onPageSizeChange: {
    readonly type: PropType<MaybeArray<(pageSize: number) => void> | undefined>
    readonly validator: () => boolean
    readonly default: undefined
  }
  readonly onSorterChange: {
    readonly type: PropType<MaybeArray<OnUpdateSorter> | undefined>
    readonly validator: () => boolean
    readonly default: undefined
  }
  readonly onFiltersChange: {
    readonly type: PropType<MaybeArray<OnUpdateFilters> | undefined>
    readonly validator: () => boolean
    readonly default: undefined
  }
  readonly onCheckedRowKeysChange: {
    readonly type: PropType<MaybeArray<OnUpdateCheckedRowKeys> | undefined>
    readonly validator: () => boolean
    readonly default: undefined
  }
  readonly theme: PropType<
    import('../../_mixins').Theme<
      'DataTable',
      {
        actionDividerColor: string
        lineHeight: string
        borderRadius: string
        fontSizeSmall: string
        fontSizeMedium: string
        fontSizeLarge: string
        borderColor: string
        tdColorHover: string
        tdColorStriped: string
        thColor: string
        thColorHover: string
        tdColor: string
        tdTextColor: string
        thTextColor: string
        thFontWeight: string
        thButtonColorHover: string
        thIconColor: string
        thIconColorActive: string
        borderColorModal: string
        tdColorHoverModal: string
        tdColorStripedModal: string
        thColorModal: string
        thColorHoverModal: string
        tdColorModal: string
        borderColorPopover: string
        tdColorHoverPopover: string
        tdColorStripedPopover: string
        thColorPopover: string
        thColorHoverPopover: string
        tdColorPopover: string
        boxShadowBefore: string
        boxShadowAfter: string
        loadingColor: string
        loadingSize: string
        opacityLoading: string
        thPaddingSmall: string
        thPaddingMedium: string
        thPaddingLarge: string
        tdPaddingSmall: string
        tdPaddingMedium: string
        tdPaddingLarge: string
        sorterSize: string
        filterSize: string
        paginationMargin: string
        emptyPadding: string
        actionPadding: string
        actionButtonMargin: string
      },
      {
        Button: import('../../_mixins').Theme<
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
        Checkbox: import('../../_mixins').Theme<
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
        Radio: import('../../_mixins').Theme<
          'Radio',
          {
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
          },
          any
        >
        Pagination: import('../../_mixins').Theme<
          'Pagination',
          {
            buttonColor: string
            buttonColorHover: string
            buttonColorPressed: string
            buttonBorder: string
            buttonBorderHover: string
            buttonBorderPressed: string
            buttonIconColor: string
            buttonIconColorHover: string
            buttonIconColorPressed: string
            itemTextColor: string
            itemTextColorHover: string
            itemTextColorPressed: string
            itemTextColorActive: string
            itemTextColorDisabled: string
            itemColor: string
            itemColorHover: string
            itemColorPressed: string
            itemColorActive: string
            itemColorActiveHover: string
            itemColorDisabled: string
            itemBorder: string
            itemBorderHover: string
            itemBorderPressed: string
            itemBorderActive: string
            itemBorderDisabled: string
            itemBorderRadius: string
            itemFontSize: string
            jumperTextColor: string
            jumperTextColorDisabled: string
            itemSize: string
            itemPadding: string
            itemMargin: string
            buttonIconSize: string
            inputWidth: string
            selectWidth: string
            inputMargin: string
            selectMargin: string
            prefixMargin: string
            suffixMargin: string
            jumperFontSize: string
          },
          {
            Select: import('../../_mixins').Theme<
              'Select',
              {
                menuBoxShadow: string
              },
              {
                InternalSelection: import('../../_mixins').Theme<
                  'InternalSelection',
                  {
                    fontSizeTiny: string
                    fontSizeSmall: string
                    fontSizeMedium: string
                    fontSizeLarge: string
                    heightTiny: string
                    heightSmall: string
                    heightMedium: string
                    heightLarge: string
                    borderRadius: string
                    textColor: string
                    textColorDisabled: string
                    placeholderColor: string
                    placeholderColorDisabled: string
                    color: string
                    colorDisabled: string
                    colorActive: string
                    border: string
                    borderHover: string
                    borderActive: string
                    borderFocus: string
                    boxShadowHover: null
                    boxShadowActive: string
                    boxShadowFocus: string
                    caretColor: string
                    arrowColor: string
                    arrowColorDisabled: string
                    loadingColor: string
                    borderWarning: string
                    borderHoverWarning: string
                    borderActiveWarning: string
                    borderFocusWarning: string
                    boxShadowHoverWarning: null
                    boxShadowActiveWarning: string
                    boxShadowFocusWarning: string
                    colorActiveWarning: string
                    caretColorWarning: string
                    borderError: string
                    borderHoverError: string
                    borderActiveError: string
                    borderFocusError: string
                    boxShadowHoverError: null
                    boxShadowActiveError: string
                    boxShadowFocusError: string
                    colorActiveError: string
                    caretColorError: string
                    clearColor: string
                    clearColorHover: string
                    clearColorPressed: string
                    paddingSingle: string
                    clearSize: string
                    arrowSize: string
                  },
                  {
                    Popover: import('../../_mixins').Theme<
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
                InternalSelectMenu: import('../../_mixins').Theme<
                  'InternalSelectMenu',
                  {
                    optionFontSizeSmall: string
                    optionFontSizeMedium: string
                    optionFontSizeLarge: string
                    optionFontSizeHuge: string
                    optionHeightSmall: string
                    optionHeightMedium: string
                    optionHeightLarge: string
                    optionHeightHuge: string
                    borderRadius: string
                    color: string
                    groupHeaderTextColor: string
                    actionDividerColor: string
                    optionTextColor: string
                    optionTextColorPressed: string
                    optionTextColorDisabled: string
                    optionTextColorActive: string
                    optionOpacityDisabled: string
                    optionCheckColor: string
                    optionColorPending: string
                    optionColorActive: string
                    actionTextColor: string
                    loadingColor: string
                    height: string
                    paddingSmall: string
                    paddingMedium: string
                    paddingLarge: string
                    paddingHuge: string
                    optionPaddingSmall: string
                    optionPaddingMedium: string
                    optionPaddingLarge: string
                    optionPaddingHuge: string
                    loadingSize: string
                  },
                  {
                    Scrollbar: import('../../_mixins').Theme<
                      'Scrollbar',
                      {
                        color: string
                        colorHover: string
                      },
                      any
                    >
                    Empty: import('../../_mixins').Theme<
                      'Empty',
                      {
                        fontSizeSmall: string
                        fontSizeMedium: string
                        fontSizeLarge: string
                        fontSizeHuge: string
                        textColor: string
                        iconColor: string
                        extraTextColor: string
                        iconSizeSmall: string
                        iconSizeMedium: string
                        iconSizeLarge: string
                        iconSizeHuge: string
                      },
                      any
                    >
                  }
                >
              }
            >
            Input: import('../../_mixins').Theme<
              'Input',
              {
                countTextColor: string
                heightTiny: string
                heightSmall: string
                heightMedium: string
                heightLarge: string
                fontSizeTiny: string
                fontSizeSmall: string
                fontSizeMedium: string
                fontSizeLarge: string
                lineHeight: string
                lineHeightTextarea: string
                borderRadius: string
                iconSize: string
                groupLabelColor: string
                groupLabelTextColor: string
                textColor: string
                textColorDisabled: string
                textDecorationColor: string
                caretColor: string
                placeholderColor: string
                placeholderColorDisabled: string
                color: string
                colorDisabled: string
                colorFocus: string
                groupLabelBorder: string
                border: string
                borderHover: string
                borderDisabled: string
                borderFocus: string
                boxShadowFocus: string
                loadingColor: string
                loadingColorWarning: string
                borderWarning: string
                borderHoverWarning: string
                colorFocusWarning: string
                borderFocusWarning: string
                boxShadowFocusWarning: string
                caretColorWarning: string
                loadingColorError: string
                borderError: string
                borderHoverError: string
                colorFocusError: string
                borderFocusError: string
                boxShadowFocusError: string
                caretColorError: string
                clearColor: string
                clearColorHover: string
                clearColorPressed: string
                iconColor: string
                iconColorDisabled: string
                iconColorHover: string
                iconColorPressed: string
                suffixTextColor: string
                paddingTiny: string
                paddingSmall: string
                paddingMedium: string
                paddingLarge: string
                clearSize: string
              },
              any
            >
          }
        >
        Scrollbar: import('../../_mixins').Theme<
          'Scrollbar',
          {
            color: string
            colorHover: string
          },
          any
        >
        Empty: import('../../_mixins').Theme<
          'Empty',
          {
            fontSizeSmall: string
            fontSizeMedium: string
            fontSizeLarge: string
            fontSizeHuge: string
            textColor: string
            iconColor: string
            extraTextColor: string
            iconSizeSmall: string
            iconSizeMedium: string
            iconSizeLarge: string
            iconSizeHuge: string
          },
          any
        >
        Popover: import('../../_mixins').Theme<
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
        Ellipsis: import('../../_mixins').Theme<
          'Ellipsis',
          unknown,
          {
            Tooltip: import('../../_mixins').Theme<
              'Tooltip',
              {
                borderRadius: string
                boxShadow: string
                color: string
                textColor: string
                padding: string
              },
              {
                Popover: import('../../_mixins').Theme<
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
      }
    >
  >
  readonly themeOverrides: PropType<
    import('../../_mixins/use-theme').ExtractThemeOverrides<
      import('../../_mixins').Theme<
        'DataTable',
        {
          actionDividerColor: string
          lineHeight: string
          borderRadius: string
          fontSizeSmall: string
          fontSizeMedium: string
          fontSizeLarge: string
          borderColor: string
          tdColorHover: string
          tdColorStriped: string
          thColor: string
          thColorHover: string
          tdColor: string
          tdTextColor: string
          thTextColor: string
          thFontWeight: string
          thButtonColorHover: string
          thIconColor: string
          thIconColorActive: string
          borderColorModal: string
          tdColorHoverModal: string
          tdColorStripedModal: string
          thColorModal: string
          thColorHoverModal: string
          tdColorModal: string
          borderColorPopover: string
          tdColorHoverPopover: string
          tdColorStripedPopover: string
          thColorPopover: string
          thColorHoverPopover: string
          tdColorPopover: string
          boxShadowBefore: string
          boxShadowAfter: string
          loadingColor: string
          loadingSize: string
          opacityLoading: string
          thPaddingSmall: string
          thPaddingMedium: string
          thPaddingLarge: string
          tdPaddingSmall: string
          tdPaddingMedium: string
          tdPaddingLarge: string
          sorterSize: string
          filterSize: string
          paginationMargin: string
          emptyPadding: string
          actionPadding: string
          actionButtonMargin: string
        },
        {
          Button: import('../../_mixins').Theme<
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
          Checkbox: import('../../_mixins').Theme<
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
          Radio: import('../../_mixins').Theme<
            'Radio',
            {
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
            },
            any
          >
          Pagination: import('../../_mixins').Theme<
            'Pagination',
            {
              buttonColor: string
              buttonColorHover: string
              buttonColorPressed: string
              buttonBorder: string
              buttonBorderHover: string
              buttonBorderPressed: string
              buttonIconColor: string
              buttonIconColorHover: string
              buttonIconColorPressed: string
              itemTextColor: string
              itemTextColorHover: string
              itemTextColorPressed: string
              itemTextColorActive: string
              itemTextColorDisabled: string
              itemColor: string
              itemColorHover: string
              itemColorPressed: string
              itemColorActive: string
              itemColorActiveHover: string
              itemColorDisabled: string
              itemBorder: string
              itemBorderHover: string
              itemBorderPressed: string
              itemBorderActive: string
              itemBorderDisabled: string
              itemBorderRadius: string
              itemFontSize: string
              jumperTextColor: string
              jumperTextColorDisabled: string
              itemSize: string
              itemPadding: string
              itemMargin: string
              buttonIconSize: string
              inputWidth: string
              selectWidth: string
              inputMargin: string
              selectMargin: string
              prefixMargin: string
              suffixMargin: string
              jumperFontSize: string
            },
            {
              Select: import('../../_mixins').Theme<
                'Select',
                {
                  menuBoxShadow: string
                },
                {
                  InternalSelection: import('../../_mixins').Theme<
                    'InternalSelection',
                    {
                      fontSizeTiny: string
                      fontSizeSmall: string
                      fontSizeMedium: string
                      fontSizeLarge: string
                      heightTiny: string
                      heightSmall: string
                      heightMedium: string
                      heightLarge: string
                      borderRadius: string
                      textColor: string
                      textColorDisabled: string
                      placeholderColor: string
                      placeholderColorDisabled: string
                      color: string
                      colorDisabled: string
                      colorActive: string
                      border: string
                      borderHover: string
                      borderActive: string
                      borderFocus: string
                      boxShadowHover: null
                      boxShadowActive: string
                      boxShadowFocus: string
                      caretColor: string
                      arrowColor: string
                      arrowColorDisabled: string
                      loadingColor: string
                      borderWarning: string
                      borderHoverWarning: string
                      borderActiveWarning: string
                      borderFocusWarning: string
                      boxShadowHoverWarning: null
                      boxShadowActiveWarning: string
                      boxShadowFocusWarning: string
                      colorActiveWarning: string
                      caretColorWarning: string
                      borderError: string
                      borderHoverError: string
                      borderActiveError: string
                      borderFocusError: string
                      boxShadowHoverError: null
                      boxShadowActiveError: string
                      boxShadowFocusError: string
                      colorActiveError: string
                      caretColorError: string
                      clearColor: string
                      clearColorHover: string
                      clearColorPressed: string
                      paddingSingle: string
                      clearSize: string
                      arrowSize: string
                    },
                    {
                      Popover: import('../../_mixins').Theme<
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
                  InternalSelectMenu: import('../../_mixins').Theme<
                    'InternalSelectMenu',
                    {
                      optionFontSizeSmall: string
                      optionFontSizeMedium: string
                      optionFontSizeLarge: string
                      optionFontSizeHuge: string
                      optionHeightSmall: string
                      optionHeightMedium: string
                      optionHeightLarge: string
                      optionHeightHuge: string
                      borderRadius: string
                      color: string
                      groupHeaderTextColor: string
                      actionDividerColor: string
                      optionTextColor: string
                      optionTextColorPressed: string
                      optionTextColorDisabled: string
                      optionTextColorActive: string
                      optionOpacityDisabled: string
                      optionCheckColor: string
                      optionColorPending: string
                      optionColorActive: string
                      actionTextColor: string
                      loadingColor: string
                      height: string
                      paddingSmall: string
                      paddingMedium: string
                      paddingLarge: string
                      paddingHuge: string
                      optionPaddingSmall: string
                      optionPaddingMedium: string
                      optionPaddingLarge: string
                      optionPaddingHuge: string
                      loadingSize: string
                    },
                    {
                      Scrollbar: import('../../_mixins').Theme<
                        'Scrollbar',
                        {
                          color: string
                          colorHover: string
                        },
                        any
                      >
                      Empty: import('../../_mixins').Theme<
                        'Empty',
                        {
                          fontSizeSmall: string
                          fontSizeMedium: string
                          fontSizeLarge: string
                          fontSizeHuge: string
                          textColor: string
                          iconColor: string
                          extraTextColor: string
                          iconSizeSmall: string
                          iconSizeMedium: string
                          iconSizeLarge: string
                          iconSizeHuge: string
                        },
                        any
                      >
                    }
                  >
                }
              >
              Input: import('../../_mixins').Theme<
                'Input',
                {
                  countTextColor: string
                  heightTiny: string
                  heightSmall: string
                  heightMedium: string
                  heightLarge: string
                  fontSizeTiny: string
                  fontSizeSmall: string
                  fontSizeMedium: string
                  fontSizeLarge: string
                  lineHeight: string
                  lineHeightTextarea: string
                  borderRadius: string
                  iconSize: string
                  groupLabelColor: string
                  groupLabelTextColor: string
                  textColor: string
                  textColorDisabled: string
                  textDecorationColor: string
                  caretColor: string
                  placeholderColor: string
                  placeholderColorDisabled: string
                  color: string
                  colorDisabled: string
                  colorFocus: string
                  groupLabelBorder: string
                  border: string
                  borderHover: string
                  borderDisabled: string
                  borderFocus: string
                  boxShadowFocus: string
                  loadingColor: string
                  loadingColorWarning: string
                  borderWarning: string
                  borderHoverWarning: string
                  colorFocusWarning: string
                  borderFocusWarning: string
                  boxShadowFocusWarning: string
                  caretColorWarning: string
                  loadingColorError: string
                  borderError: string
                  borderHoverError: string
                  colorFocusError: string
                  borderFocusError: string
                  boxShadowFocusError: string
                  caretColorError: string
                  clearColor: string
                  clearColorHover: string
                  clearColorPressed: string
                  iconColor: string
                  iconColorDisabled: string
                  iconColorHover: string
                  iconColorPressed: string
                  suffixTextColor: string
                  paddingTiny: string
                  paddingSmall: string
                  paddingMedium: string
                  paddingLarge: string
                  clearSize: string
                },
                any
              >
            }
          >
          Scrollbar: import('../../_mixins').Theme<
            'Scrollbar',
            {
              color: string
              colorHover: string
            },
            any
          >
          Empty: import('../../_mixins').Theme<
            'Empty',
            {
              fontSizeSmall: string
              fontSizeMedium: string
              fontSizeLarge: string
              fontSizeHuge: string
              textColor: string
              iconColor: string
              extraTextColor: string
              iconSizeSmall: string
              iconSizeMedium: string
              iconSizeLarge: string
              iconSizeHuge: string
            },
            any
          >
          Popover: import('../../_mixins').Theme<
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
          Ellipsis: import('../../_mixins').Theme<
            'Ellipsis',
            unknown,
            {
              Tooltip: import('../../_mixins').Theme<
                'Tooltip',
                {
                  borderRadius: string
                  boxShadow: string
                  color: string
                  textColor: string
                  padding: string
                },
                {
                  Popover: import('../../_mixins').Theme<
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
        }
      >
    >
  >
  readonly builtinThemeOverrides: PropType<
    import('../../_mixins/use-theme').ExtractThemeOverrides<
      import('../../_mixins').Theme<
        'DataTable',
        {
          actionDividerColor: string
          lineHeight: string
          borderRadius: string
          fontSizeSmall: string
          fontSizeMedium: string
          fontSizeLarge: string
          borderColor: string
          tdColorHover: string
          tdColorStriped: string
          thColor: string
          thColorHover: string
          tdColor: string
          tdTextColor: string
          thTextColor: string
          thFontWeight: string
          thButtonColorHover: string
          thIconColor: string
          thIconColorActive: string
          borderColorModal: string
          tdColorHoverModal: string
          tdColorStripedModal: string
          thColorModal: string
          thColorHoverModal: string
          tdColorModal: string
          borderColorPopover: string
          tdColorHoverPopover: string
          tdColorStripedPopover: string
          thColorPopover: string
          thColorHoverPopover: string
          tdColorPopover: string
          boxShadowBefore: string
          boxShadowAfter: string
          loadingColor: string
          loadingSize: string
          opacityLoading: string
          thPaddingSmall: string
          thPaddingMedium: string
          thPaddingLarge: string
          tdPaddingSmall: string
          tdPaddingMedium: string
          tdPaddingLarge: string
          sorterSize: string
          filterSize: string
          paginationMargin: string
          emptyPadding: string
          actionPadding: string
          actionButtonMargin: string
        },
        {
          Button: import('../../_mixins').Theme<
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
          Checkbox: import('../../_mixins').Theme<
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
          Radio: import('../../_mixins').Theme<
            'Radio',
            {
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
            },
            any
          >
          Pagination: import('../../_mixins').Theme<
            'Pagination',
            {
              buttonColor: string
              buttonColorHover: string
              buttonColorPressed: string
              buttonBorder: string
              buttonBorderHover: string
              buttonBorderPressed: string
              buttonIconColor: string
              buttonIconColorHover: string
              buttonIconColorPressed: string
              itemTextColor: string
              itemTextColorHover: string
              itemTextColorPressed: string
              itemTextColorActive: string
              itemTextColorDisabled: string
              itemColor: string
              itemColorHover: string
              itemColorPressed: string
              itemColorActive: string
              itemColorActiveHover: string
              itemColorDisabled: string
              itemBorder: string
              itemBorderHover: string
              itemBorderPressed: string
              itemBorderActive: string
              itemBorderDisabled: string
              itemBorderRadius: string
              itemFontSize: string
              jumperTextColor: string
              jumperTextColorDisabled: string
              itemSize: string
              itemPadding: string
              itemMargin: string
              buttonIconSize: string
              inputWidth: string
              selectWidth: string
              inputMargin: string
              selectMargin: string
              prefixMargin: string
              suffixMargin: string
              jumperFontSize: string
            },
            {
              Select: import('../../_mixins').Theme<
                'Select',
                {
                  menuBoxShadow: string
                },
                {
                  InternalSelection: import('../../_mixins').Theme<
                    'InternalSelection',
                    {
                      fontSizeTiny: string
                      fontSizeSmall: string
                      fontSizeMedium: string
                      fontSizeLarge: string
                      heightTiny: string
                      heightSmall: string
                      heightMedium: string
                      heightLarge: string
                      borderRadius: string
                      textColor: string
                      textColorDisabled: string
                      placeholderColor: string
                      placeholderColorDisabled: string
                      color: string
                      colorDisabled: string
                      colorActive: string
                      border: string
                      borderHover: string
                      borderActive: string
                      borderFocus: string
                      boxShadowHover: null
                      boxShadowActive: string
                      boxShadowFocus: string
                      caretColor: string
                      arrowColor: string
                      arrowColorDisabled: string
                      loadingColor: string
                      borderWarning: string
                      borderHoverWarning: string
                      borderActiveWarning: string
                      borderFocusWarning: string
                      boxShadowHoverWarning: null
                      boxShadowActiveWarning: string
                      boxShadowFocusWarning: string
                      colorActiveWarning: string
                      caretColorWarning: string
                      borderError: string
                      borderHoverError: string
                      borderActiveError: string
                      borderFocusError: string
                      boxShadowHoverError: null
                      boxShadowActiveError: string
                      boxShadowFocusError: string
                      colorActiveError: string
                      caretColorError: string
                      clearColor: string
                      clearColorHover: string
                      clearColorPressed: string
                      paddingSingle: string
                      clearSize: string
                      arrowSize: string
                    },
                    {
                      Popover: import('../../_mixins').Theme<
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
                  InternalSelectMenu: import('../../_mixins').Theme<
                    'InternalSelectMenu',
                    {
                      optionFontSizeSmall: string
                      optionFontSizeMedium: string
                      optionFontSizeLarge: string
                      optionFontSizeHuge: string
                      optionHeightSmall: string
                      optionHeightMedium: string
                      optionHeightLarge: string
                      optionHeightHuge: string
                      borderRadius: string
                      color: string
                      groupHeaderTextColor: string
                      actionDividerColor: string
                      optionTextColor: string
                      optionTextColorPressed: string
                      optionTextColorDisabled: string
                      optionTextColorActive: string
                      optionOpacityDisabled: string
                      optionCheckColor: string
                      optionColorPending: string
                      optionColorActive: string
                      actionTextColor: string
                      loadingColor: string
                      height: string
                      paddingSmall: string
                      paddingMedium: string
                      paddingLarge: string
                      paddingHuge: string
                      optionPaddingSmall: string
                      optionPaddingMedium: string
                      optionPaddingLarge: string
                      optionPaddingHuge: string
                      loadingSize: string
                    },
                    {
                      Scrollbar: import('../../_mixins').Theme<
                        'Scrollbar',
                        {
                          color: string
                          colorHover: string
                        },
                        any
                      >
                      Empty: import('../../_mixins').Theme<
                        'Empty',
                        {
                          fontSizeSmall: string
                          fontSizeMedium: string
                          fontSizeLarge: string
                          fontSizeHuge: string
                          textColor: string
                          iconColor: string
                          extraTextColor: string
                          iconSizeSmall: string
                          iconSizeMedium: string
                          iconSizeLarge: string
                          iconSizeHuge: string
                        },
                        any
                      >
                    }
                  >
                }
              >
              Input: import('../../_mixins').Theme<
                'Input',
                {
                  countTextColor: string
                  heightTiny: string
                  heightSmall: string
                  heightMedium: string
                  heightLarge: string
                  fontSizeTiny: string
                  fontSizeSmall: string
                  fontSizeMedium: string
                  fontSizeLarge: string
                  lineHeight: string
                  lineHeightTextarea: string
                  borderRadius: string
                  iconSize: string
                  groupLabelColor: string
                  groupLabelTextColor: string
                  textColor: string
                  textColorDisabled: string
                  textDecorationColor: string
                  caretColor: string
                  placeholderColor: string
                  placeholderColorDisabled: string
                  color: string
                  colorDisabled: string
                  colorFocus: string
                  groupLabelBorder: string
                  border: string
                  borderHover: string
                  borderDisabled: string
                  borderFocus: string
                  boxShadowFocus: string
                  loadingColor: string
                  loadingColorWarning: string
                  borderWarning: string
                  borderHoverWarning: string
                  colorFocusWarning: string
                  borderFocusWarning: string
                  boxShadowFocusWarning: string
                  caretColorWarning: string
                  loadingColorError: string
                  borderError: string
                  borderHoverError: string
                  colorFocusError: string
                  borderFocusError: string
                  boxShadowFocusError: string
                  caretColorError: string
                  clearColor: string
                  clearColorHover: string
                  clearColorPressed: string
                  iconColor: string
                  iconColorDisabled: string
                  iconColorHover: string
                  iconColorPressed: string
                  suffixTextColor: string
                  paddingTiny: string
                  paddingSmall: string
                  paddingMedium: string
                  paddingLarge: string
                  clearSize: string
                },
                any
              >
            }
          >
          Scrollbar: import('../../_mixins').Theme<
            'Scrollbar',
            {
              color: string
              colorHover: string
            },
            any
          >
          Empty: import('../../_mixins').Theme<
            'Empty',
            {
              fontSizeSmall: string
              fontSizeMedium: string
              fontSizeLarge: string
              fontSizeHuge: string
              textColor: string
              iconColor: string
              extraTextColor: string
              iconSizeSmall: string
              iconSizeMedium: string
              iconSizeLarge: string
              iconSizeHuge: string
            },
            any
          >
          Popover: import('../../_mixins').Theme<
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
          Ellipsis: import('../../_mixins').Theme<
            'Ellipsis',
            unknown,
            {
              Tooltip: import('../../_mixins').Theme<
                'Tooltip',
                {
                  borderRadius: string
                  boxShadow: string
                  color: string
                  textColor: string
                  padding: string
                },
                {
                  Popover: import('../../_mixins').Theme<
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
        }
      >
    >
  >
}
export declare type DataTableProps = ExtractPublicPropTypes<
  typeof dataTableProps
>
export declare type DataTableSetupProps = ExtractPropTypes<
  typeof dataTableProps
>
declare const _default: import('vue').DefineComponent<
  {
    readonly pagination: {
      readonly type: PropType<false | PaginationProps>
      readonly default: false
    }
    readonly minHeight: PropType<string | number>
    readonly maxHeight: PropType<string | number>
    readonly columns: {
      readonly type: PropType<TableColumns<any>>
      readonly default: () => never[]
    }
    readonly rowClassName: PropType<string | CreateRowClassName<any>>
    readonly rowProps: PropType<CreateRowProps<any>>
    readonly rowKey: PropType<CreateRowKey<any>>
    readonly summary: PropType<CreateSummary<any>>
    readonly data: {
      readonly type: PropType<RowData[]>
      readonly default: () => never[]
    }
    readonly loading: BooleanConstructor
    readonly bordered: {
      readonly type: PropType<boolean | undefined>
      readonly default: undefined
    }
    readonly bottomBordered: {
      readonly type: PropType<boolean | undefined>
      readonly default: undefined
    }
    readonly striped: BooleanConstructor
    readonly scrollX: PropType<string | number>
    readonly defaultCheckedRowKeys: {
      readonly type: PropType<RowKey[]>
      readonly default: () => never[]
    }
    readonly checkedRowKeys: PropType<RowKey[]>
    readonly singleLine: {
      readonly type: BooleanConstructor
      readonly default: true
    }
    readonly singleColumn: BooleanConstructor
    readonly size: {
      readonly type: PropType<'small' | 'medium' | 'large'>
      readonly default: 'medium'
    }
    readonly remote: BooleanConstructor
    readonly defaultExpandedRowKeys: {
      readonly type: PropType<RowKey[]>
      readonly default: readonly []
    }
    readonly expandedRowKeys: PropType<RowKey[]>
    readonly virtualScroll: BooleanConstructor
    readonly tableLayout: {
      readonly type: PropType<'fixed' | 'auto'>
      readonly default: 'auto'
    }
    readonly cascade: {
      readonly type: BooleanConstructor
      readonly default: true
    }
    readonly childrenKey: {
      readonly type: StringConstructor
      readonly default: 'children'
    }
    readonly indent: {
      readonly type: NumberConstructor
      readonly default: 16
    }
    readonly flexHeight: BooleanConstructor
    readonly 'onUpdate:page': PropType<
      MaybeArray<(page: number) => void> | undefined
    >
    readonly onUpdatePage: PropType<
      MaybeArray<(page: number) => void> | undefined
    >
    readonly 'onUpdate:pageSize': PropType<
      MaybeArray<(pageSize: number) => void> | undefined
    >
    readonly onUpdatePageSize: PropType<
      MaybeArray<(pageSize: number) => void> | undefined
    >
    readonly 'onUpdate:sorter': PropType<MaybeArray<OnUpdateSorter>>
    readonly onUpdateSorter: PropType<MaybeArray<OnUpdateSorter>>
    readonly 'onUpdate:filters': PropType<MaybeArray<OnUpdateFilters>>
    readonly onUpdateFilters: PropType<MaybeArray<OnUpdateFilters>>
    readonly 'onUpdate:checkedRowKeys': PropType<
      MaybeArray<OnUpdateCheckedRowKeys>
    >
    readonly onUpdateCheckedRowKeys: PropType<
      MaybeArray<OnUpdateCheckedRowKeys>
    >
    readonly 'onUpdate:expandedRowKeys': PropType<
      MaybeArray<OnUpdateExpandedRowKeys>
    >
    readonly onUpdateExpandedRowKeys: PropType<
      MaybeArray<OnUpdateExpandedRowKeys>
    >
    readonly onPageChange: {
      readonly type: PropType<MaybeArray<(page: number) => void> | undefined>
      readonly validator: () => boolean
      readonly default: undefined
    }
    readonly onPageSizeChange: {
      readonly type: PropType<
        MaybeArray<(pageSize: number) => void> | undefined
      >
      readonly validator: () => boolean
      readonly default: undefined
    }
    readonly onSorterChange: {
      readonly type: PropType<MaybeArray<OnUpdateSorter> | undefined>
      readonly validator: () => boolean
      readonly default: undefined
    }
    readonly onFiltersChange: {
      readonly type: PropType<MaybeArray<OnUpdateFilters> | undefined>
      readonly validator: () => boolean
      readonly default: undefined
    }
    readonly onCheckedRowKeysChange: {
      readonly type: PropType<MaybeArray<OnUpdateCheckedRowKeys> | undefined>
      readonly validator: () => boolean
      readonly default: undefined
    }
    readonly theme: PropType<
      import('../../_mixins').Theme<
        'DataTable',
        {
          actionDividerColor: string
          lineHeight: string
          borderRadius: string
          fontSizeSmall: string
          fontSizeMedium: string
          fontSizeLarge: string
          borderColor: string
          tdColorHover: string
          tdColorStriped: string
          thColor: string
          thColorHover: string
          tdColor: string
          tdTextColor: string
          thTextColor: string
          thFontWeight: string
          thButtonColorHover: string
          thIconColor: string
          thIconColorActive: string
          borderColorModal: string
          tdColorHoverModal: string
          tdColorStripedModal: string
          thColorModal: string
          thColorHoverModal: string
          tdColorModal: string
          borderColorPopover: string
          tdColorHoverPopover: string
          tdColorStripedPopover: string
          thColorPopover: string
          thColorHoverPopover: string
          tdColorPopover: string
          boxShadowBefore: string
          boxShadowAfter: string
          loadingColor: string
          loadingSize: string
          opacityLoading: string
          thPaddingSmall: string
          thPaddingMedium: string
          thPaddingLarge: string
          tdPaddingSmall: string
          tdPaddingMedium: string
          tdPaddingLarge: string
          sorterSize: string
          filterSize: string
          paginationMargin: string
          emptyPadding: string
          actionPadding: string
          actionButtonMargin: string
        },
        {
          Button: import('../../_mixins').Theme<
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
          Checkbox: import('../../_mixins').Theme<
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
          Radio: import('../../_mixins').Theme<
            'Radio',
            {
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
            },
            any
          >
          Pagination: import('../../_mixins').Theme<
            'Pagination',
            {
              buttonColor: string
              buttonColorHover: string
              buttonColorPressed: string
              buttonBorder: string
              buttonBorderHover: string
              buttonBorderPressed: string
              buttonIconColor: string
              buttonIconColorHover: string
              buttonIconColorPressed: string
              itemTextColor: string
              itemTextColorHover: string
              itemTextColorPressed: string
              itemTextColorActive: string
              itemTextColorDisabled: string
              itemColor: string
              itemColorHover: string
              itemColorPressed: string
              itemColorActive: string
              itemColorActiveHover: string
              itemColorDisabled: string
              itemBorder: string
              itemBorderHover: string
              itemBorderPressed: string
              itemBorderActive: string
              itemBorderDisabled: string
              itemBorderRadius: string
              itemFontSize: string
              jumperTextColor: string
              jumperTextColorDisabled: string
              itemSize: string
              itemPadding: string
              itemMargin: string
              buttonIconSize: string
              inputWidth: string
              selectWidth: string
              inputMargin: string
              selectMargin: string
              prefixMargin: string
              suffixMargin: string
              jumperFontSize: string
            },
            {
              Select: import('../../_mixins').Theme<
                'Select',
                {
                  menuBoxShadow: string
                },
                {
                  InternalSelection: import('../../_mixins').Theme<
                    'InternalSelection',
                    {
                      fontSizeTiny: string
                      fontSizeSmall: string
                      fontSizeMedium: string
                      fontSizeLarge: string
                      heightTiny: string
                      heightSmall: string
                      heightMedium: string
                      heightLarge: string
                      borderRadius: string
                      textColor: string
                      textColorDisabled: string
                      placeholderColor: string
                      placeholderColorDisabled: string
                      color: string
                      colorDisabled: string
                      colorActive: string
                      border: string
                      borderHover: string
                      borderActive: string
                      borderFocus: string
                      boxShadowHover: null
                      boxShadowActive: string
                      boxShadowFocus: string
                      caretColor: string
                      arrowColor: string
                      arrowColorDisabled: string
                      loadingColor: string
                      borderWarning: string
                      borderHoverWarning: string
                      borderActiveWarning: string
                      borderFocusWarning: string
                      boxShadowHoverWarning: null
                      boxShadowActiveWarning: string
                      boxShadowFocusWarning: string
                      colorActiveWarning: string
                      caretColorWarning: string
                      borderError: string
                      borderHoverError: string
                      borderActiveError: string
                      borderFocusError: string
                      boxShadowHoverError: null
                      boxShadowActiveError: string
                      boxShadowFocusError: string
                      colorActiveError: string
                      caretColorError: string
                      clearColor: string
                      clearColorHover: string
                      clearColorPressed: string
                      paddingSingle: string
                      clearSize: string
                      arrowSize: string
                    },
                    {
                      Popover: import('../../_mixins').Theme<
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
                  InternalSelectMenu: import('../../_mixins').Theme<
                    'InternalSelectMenu',
                    {
                      optionFontSizeSmall: string
                      optionFontSizeMedium: string
                      optionFontSizeLarge: string
                      optionFontSizeHuge: string
                      optionHeightSmall: string
                      optionHeightMedium: string
                      optionHeightLarge: string
                      optionHeightHuge: string
                      borderRadius: string
                      color: string
                      groupHeaderTextColor: string
                      actionDividerColor: string
                      optionTextColor: string
                      optionTextColorPressed: string
                      optionTextColorDisabled: string
                      optionTextColorActive: string
                      optionOpacityDisabled: string
                      optionCheckColor: string
                      optionColorPending: string
                      optionColorActive: string
                      actionTextColor: string
                      loadingColor: string
                      height: string
                      paddingSmall: string
                      paddingMedium: string
                      paddingLarge: string
                      paddingHuge: string
                      optionPaddingSmall: string
                      optionPaddingMedium: string
                      optionPaddingLarge: string
                      optionPaddingHuge: string
                      loadingSize: string
                    },
                    {
                      Scrollbar: import('../../_mixins').Theme<
                        'Scrollbar',
                        {
                          color: string
                          colorHover: string
                        },
                        any
                      >
                      Empty: import('../../_mixins').Theme<
                        'Empty',
                        {
                          fontSizeSmall: string
                          fontSizeMedium: string
                          fontSizeLarge: string
                          fontSizeHuge: string
                          textColor: string
                          iconColor: string
                          extraTextColor: string
                          iconSizeSmall: string
                          iconSizeMedium: string
                          iconSizeLarge: string
                          iconSizeHuge: string
                        },
                        any
                      >
                    }
                  >
                }
              >
              Input: import('../../_mixins').Theme<
                'Input',
                {
                  countTextColor: string
                  heightTiny: string
                  heightSmall: string
                  heightMedium: string
                  heightLarge: string
                  fontSizeTiny: string
                  fontSizeSmall: string
                  fontSizeMedium: string
                  fontSizeLarge: string
                  lineHeight: string
                  lineHeightTextarea: string
                  borderRadius: string
                  iconSize: string
                  groupLabelColor: string
                  groupLabelTextColor: string
                  textColor: string
                  textColorDisabled: string
                  textDecorationColor: string
                  caretColor: string
                  placeholderColor: string
                  placeholderColorDisabled: string
                  color: string
                  colorDisabled: string
                  colorFocus: string
                  groupLabelBorder: string
                  border: string
                  borderHover: string
                  borderDisabled: string
                  borderFocus: string
                  boxShadowFocus: string
                  loadingColor: string
                  loadingColorWarning: string
                  borderWarning: string
                  borderHoverWarning: string
                  colorFocusWarning: string
                  borderFocusWarning: string
                  boxShadowFocusWarning: string
                  caretColorWarning: string
                  loadingColorError: string
                  borderError: string
                  borderHoverError: string
                  colorFocusError: string
                  borderFocusError: string
                  boxShadowFocusError: string
                  caretColorError: string
                  clearColor: string
                  clearColorHover: string
                  clearColorPressed: string
                  iconColor: string
                  iconColorDisabled: string
                  iconColorHover: string
                  iconColorPressed: string
                  suffixTextColor: string
                  paddingTiny: string
                  paddingSmall: string
                  paddingMedium: string
                  paddingLarge: string
                  clearSize: string
                },
                any
              >
            }
          >
          Scrollbar: import('../../_mixins').Theme<
            'Scrollbar',
            {
              color: string
              colorHover: string
            },
            any
          >
          Empty: import('../../_mixins').Theme<
            'Empty',
            {
              fontSizeSmall: string
              fontSizeMedium: string
              fontSizeLarge: string
              fontSizeHuge: string
              textColor: string
              iconColor: string
              extraTextColor: string
              iconSizeSmall: string
              iconSizeMedium: string
              iconSizeLarge: string
              iconSizeHuge: string
            },
            any
          >
          Popover: import('../../_mixins').Theme<
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
          Ellipsis: import('../../_mixins').Theme<
            'Ellipsis',
            unknown,
            {
              Tooltip: import('../../_mixins').Theme<
                'Tooltip',
                {
                  borderRadius: string
                  boxShadow: string
                  color: string
                  textColor: string
                  padding: string
                },
                {
                  Popover: import('../../_mixins').Theme<
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
        }
      >
    >
    readonly themeOverrides: PropType<
      import('../../_mixins/use-theme').ExtractThemeOverrides<
        import('../../_mixins').Theme<
          'DataTable',
          {
            actionDividerColor: string
            lineHeight: string
            borderRadius: string
            fontSizeSmall: string
            fontSizeMedium: string
            fontSizeLarge: string
            borderColor: string
            tdColorHover: string
            tdColorStriped: string
            thColor: string
            thColorHover: string
            tdColor: string
            tdTextColor: string
            thTextColor: string
            thFontWeight: string
            thButtonColorHover: string
            thIconColor: string
            thIconColorActive: string
            borderColorModal: string
            tdColorHoverModal: string
            tdColorStripedModal: string
            thColorModal: string
            thColorHoverModal: string
            tdColorModal: string
            borderColorPopover: string
            tdColorHoverPopover: string
            tdColorStripedPopover: string
            thColorPopover: string
            thColorHoverPopover: string
            tdColorPopover: string
            boxShadowBefore: string
            boxShadowAfter: string
            loadingColor: string
            loadingSize: string
            opacityLoading: string
            thPaddingSmall: string
            thPaddingMedium: string
            thPaddingLarge: string
            tdPaddingSmall: string
            tdPaddingMedium: string
            tdPaddingLarge: string
            sorterSize: string
            filterSize: string
            paginationMargin: string
            emptyPadding: string
            actionPadding: string
            actionButtonMargin: string
          },
          {
            Button: import('../../_mixins').Theme<
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
            Checkbox: import('../../_mixins').Theme<
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
            Radio: import('../../_mixins').Theme<
              'Radio',
              {
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
              },
              any
            >
            Pagination: import('../../_mixins').Theme<
              'Pagination',
              {
                buttonColor: string
                buttonColorHover: string
                buttonColorPressed: string
                buttonBorder: string
                buttonBorderHover: string
                buttonBorderPressed: string
                buttonIconColor: string
                buttonIconColorHover: string
                buttonIconColorPressed: string
                itemTextColor: string
                itemTextColorHover: string
                itemTextColorPressed: string
                itemTextColorActive: string
                itemTextColorDisabled: string
                itemColor: string
                itemColorHover: string
                itemColorPressed: string
                itemColorActive: string
                itemColorActiveHover: string
                itemColorDisabled: string
                itemBorder: string
                itemBorderHover: string
                itemBorderPressed: string
                itemBorderActive: string
                itemBorderDisabled: string
                itemBorderRadius: string
                itemFontSize: string
                jumperTextColor: string
                jumperTextColorDisabled: string
                itemSize: string
                itemPadding: string
                itemMargin: string
                buttonIconSize: string
                inputWidth: string
                selectWidth: string
                inputMargin: string
                selectMargin: string
                prefixMargin: string
                suffixMargin: string
                jumperFontSize: string
              },
              {
                Select: import('../../_mixins').Theme<
                  'Select',
                  {
                    menuBoxShadow: string
                  },
                  {
                    InternalSelection: import('../../_mixins').Theme<
                      'InternalSelection',
                      {
                        fontSizeTiny: string
                        fontSizeSmall: string
                        fontSizeMedium: string
                        fontSizeLarge: string
                        heightTiny: string
                        heightSmall: string
                        heightMedium: string
                        heightLarge: string
                        borderRadius: string
                        textColor: string
                        textColorDisabled: string
                        placeholderColor: string
                        placeholderColorDisabled: string
                        color: string
                        colorDisabled: string
                        colorActive: string
                        border: string
                        borderHover: string
                        borderActive: string
                        borderFocus: string
                        boxShadowHover: null
                        boxShadowActive: string
                        boxShadowFocus: string
                        caretColor: string
                        arrowColor: string
                        arrowColorDisabled: string
                        loadingColor: string
                        borderWarning: string
                        borderHoverWarning: string
                        borderActiveWarning: string
                        borderFocusWarning: string
                        boxShadowHoverWarning: null
                        boxShadowActiveWarning: string
                        boxShadowFocusWarning: string
                        colorActiveWarning: string
                        caretColorWarning: string
                        borderError: string
                        borderHoverError: string
                        borderActiveError: string
                        borderFocusError: string
                        boxShadowHoverError: null
                        boxShadowActiveError: string
                        boxShadowFocusError: string
                        colorActiveError: string
                        caretColorError: string
                        clearColor: string
                        clearColorHover: string
                        clearColorPressed: string
                        paddingSingle: string
                        clearSize: string
                        arrowSize: string
                      },
                      {
                        Popover: import('../../_mixins').Theme<
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
                    InternalSelectMenu: import('../../_mixins').Theme<
                      'InternalSelectMenu',
                      {
                        optionFontSizeSmall: string
                        optionFontSizeMedium: string
                        optionFontSizeLarge: string
                        optionFontSizeHuge: string
                        optionHeightSmall: string
                        optionHeightMedium: string
                        optionHeightLarge: string
                        optionHeightHuge: string
                        borderRadius: string
                        color: string
                        groupHeaderTextColor: string
                        actionDividerColor: string
                        optionTextColor: string
                        optionTextColorPressed: string
                        optionTextColorDisabled: string
                        optionTextColorActive: string
                        optionOpacityDisabled: string
                        optionCheckColor: string
                        optionColorPending: string
                        optionColorActive: string
                        actionTextColor: string
                        loadingColor: string
                        height: string
                        paddingSmall: string
                        paddingMedium: string
                        paddingLarge: string
                        paddingHuge: string
                        optionPaddingSmall: string
                        optionPaddingMedium: string
                        optionPaddingLarge: string
                        optionPaddingHuge: string
                        loadingSize: string
                      },
                      {
                        Scrollbar: import('../../_mixins').Theme<
                          'Scrollbar',
                          {
                            color: string
                            colorHover: string
                          },
                          any
                        >
                        Empty: import('../../_mixins').Theme<
                          'Empty',
                          {
                            fontSizeSmall: string
                            fontSizeMedium: string
                            fontSizeLarge: string
                            fontSizeHuge: string
                            textColor: string
                            iconColor: string
                            extraTextColor: string
                            iconSizeSmall: string
                            iconSizeMedium: string
                            iconSizeLarge: string
                            iconSizeHuge: string
                          },
                          any
                        >
                      }
                    >
                  }
                >
                Input: import('../../_mixins').Theme<
                  'Input',
                  {
                    countTextColor: string
                    heightTiny: string
                    heightSmall: string
                    heightMedium: string
                    heightLarge: string
                    fontSizeTiny: string
                    fontSizeSmall: string
                    fontSizeMedium: string
                    fontSizeLarge: string
                    lineHeight: string
                    lineHeightTextarea: string
                    borderRadius: string
                    iconSize: string
                    groupLabelColor: string
                    groupLabelTextColor: string
                    textColor: string
                    textColorDisabled: string
                    textDecorationColor: string
                    caretColor: string
                    placeholderColor: string
                    placeholderColorDisabled: string
                    color: string
                    colorDisabled: string
                    colorFocus: string
                    groupLabelBorder: string
                    border: string
                    borderHover: string
                    borderDisabled: string
                    borderFocus: string
                    boxShadowFocus: string
                    loadingColor: string
                    loadingColorWarning: string
                    borderWarning: string
                    borderHoverWarning: string
                    colorFocusWarning: string
                    borderFocusWarning: string
                    boxShadowFocusWarning: string
                    caretColorWarning: string
                    loadingColorError: string
                    borderError: string
                    borderHoverError: string
                    colorFocusError: string
                    borderFocusError: string
                    boxShadowFocusError: string
                    caretColorError: string
                    clearColor: string
                    clearColorHover: string
                    clearColorPressed: string
                    iconColor: string
                    iconColorDisabled: string
                    iconColorHover: string
                    iconColorPressed: string
                    suffixTextColor: string
                    paddingTiny: string
                    paddingSmall: string
                    paddingMedium: string
                    paddingLarge: string
                    clearSize: string
                  },
                  any
                >
              }
            >
            Scrollbar: import('../../_mixins').Theme<
              'Scrollbar',
              {
                color: string
                colorHover: string
              },
              any
            >
            Empty: import('../../_mixins').Theme<
              'Empty',
              {
                fontSizeSmall: string
                fontSizeMedium: string
                fontSizeLarge: string
                fontSizeHuge: string
                textColor: string
                iconColor: string
                extraTextColor: string
                iconSizeSmall: string
                iconSizeMedium: string
                iconSizeLarge: string
                iconSizeHuge: string
              },
              any
            >
            Popover: import('../../_mixins').Theme<
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
            Ellipsis: import('../../_mixins').Theme<
              'Ellipsis',
              unknown,
              {
                Tooltip: import('../../_mixins').Theme<
                  'Tooltip',
                  {
                    borderRadius: string
                    boxShadow: string
                    color: string
                    textColor: string
                    padding: string
                  },
                  {
                    Popover: import('../../_mixins').Theme<
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
          }
        >
      >
    >
    readonly builtinThemeOverrides: PropType<
      import('../../_mixins/use-theme').ExtractThemeOverrides<
        import('../../_mixins').Theme<
          'DataTable',
          {
            actionDividerColor: string
            lineHeight: string
            borderRadius: string
            fontSizeSmall: string
            fontSizeMedium: string
            fontSizeLarge: string
            borderColor: string
            tdColorHover: string
            tdColorStriped: string
            thColor: string
            thColorHover: string
            tdColor: string
            tdTextColor: string
            thTextColor: string
            thFontWeight: string
            thButtonColorHover: string
            thIconColor: string
            thIconColorActive: string
            borderColorModal: string
            tdColorHoverModal: string
            tdColorStripedModal: string
            thColorModal: string
            thColorHoverModal: string
            tdColorModal: string
            borderColorPopover: string
            tdColorHoverPopover: string
            tdColorStripedPopover: string
            thColorPopover: string
            thColorHoverPopover: string
            tdColorPopover: string
            boxShadowBefore: string
            boxShadowAfter: string
            loadingColor: string
            loadingSize: string
            opacityLoading: string
            thPaddingSmall: string
            thPaddingMedium: string
            thPaddingLarge: string
            tdPaddingSmall: string
            tdPaddingMedium: string
            tdPaddingLarge: string
            sorterSize: string
            filterSize: string
            paginationMargin: string
            emptyPadding: string
            actionPadding: string
            actionButtonMargin: string
          },
          {
            Button: import('../../_mixins').Theme<
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
            Checkbox: import('../../_mixins').Theme<
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
            Radio: import('../../_mixins').Theme<
              'Radio',
              {
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
              },
              any
            >
            Pagination: import('../../_mixins').Theme<
              'Pagination',
              {
                buttonColor: string
                buttonColorHover: string
                buttonColorPressed: string
                buttonBorder: string
                buttonBorderHover: string
                buttonBorderPressed: string
                buttonIconColor: string
                buttonIconColorHover: string
                buttonIconColorPressed: string
                itemTextColor: string
                itemTextColorHover: string
                itemTextColorPressed: string
                itemTextColorActive: string
                itemTextColorDisabled: string
                itemColor: string
                itemColorHover: string
                itemColorPressed: string
                itemColorActive: string
                itemColorActiveHover: string
                itemColorDisabled: string
                itemBorder: string
                itemBorderHover: string
                itemBorderPressed: string
                itemBorderActive: string
                itemBorderDisabled: string
                itemBorderRadius: string
                itemFontSize: string
                jumperTextColor: string
                jumperTextColorDisabled: string
                itemSize: string
                itemPadding: string
                itemMargin: string
                buttonIconSize: string
                inputWidth: string
                selectWidth: string
                inputMargin: string
                selectMargin: string
                prefixMargin: string
                suffixMargin: string
                jumperFontSize: string
              },
              {
                Select: import('../../_mixins').Theme<
                  'Select',
                  {
                    menuBoxShadow: string
                  },
                  {
                    InternalSelection: import('../../_mixins').Theme<
                      'InternalSelection',
                      {
                        fontSizeTiny: string
                        fontSizeSmall: string
                        fontSizeMedium: string
                        fontSizeLarge: string
                        heightTiny: string
                        heightSmall: string
                        heightMedium: string
                        heightLarge: string
                        borderRadius: string
                        textColor: string
                        textColorDisabled: string
                        placeholderColor: string
                        placeholderColorDisabled: string
                        color: string
                        colorDisabled: string
                        colorActive: string
                        border: string
                        borderHover: string
                        borderActive: string
                        borderFocus: string
                        boxShadowHover: null
                        boxShadowActive: string
                        boxShadowFocus: string
                        caretColor: string
                        arrowColor: string
                        arrowColorDisabled: string
                        loadingColor: string
                        borderWarning: string
                        borderHoverWarning: string
                        borderActiveWarning: string
                        borderFocusWarning: string
                        boxShadowHoverWarning: null
                        boxShadowActiveWarning: string
                        boxShadowFocusWarning: string
                        colorActiveWarning: string
                        caretColorWarning: string
                        borderError: string
                        borderHoverError: string
                        borderActiveError: string
                        borderFocusError: string
                        boxShadowHoverError: null
                        boxShadowActiveError: string
                        boxShadowFocusError: string
                        colorActiveError: string
                        caretColorError: string
                        clearColor: string
                        clearColorHover: string
                        clearColorPressed: string
                        paddingSingle: string
                        clearSize: string
                        arrowSize: string
                      },
                      {
                        Popover: import('../../_mixins').Theme<
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
                    InternalSelectMenu: import('../../_mixins').Theme<
                      'InternalSelectMenu',
                      {
                        optionFontSizeSmall: string
                        optionFontSizeMedium: string
                        optionFontSizeLarge: string
                        optionFontSizeHuge: string
                        optionHeightSmall: string
                        optionHeightMedium: string
                        optionHeightLarge: string
                        optionHeightHuge: string
                        borderRadius: string
                        color: string
                        groupHeaderTextColor: string
                        actionDividerColor: string
                        optionTextColor: string
                        optionTextColorPressed: string
                        optionTextColorDisabled: string
                        optionTextColorActive: string
                        optionOpacityDisabled: string
                        optionCheckColor: string
                        optionColorPending: string
                        optionColorActive: string
                        actionTextColor: string
                        loadingColor: string
                        height: string
                        paddingSmall: string
                        paddingMedium: string
                        paddingLarge: string
                        paddingHuge: string
                        optionPaddingSmall: string
                        optionPaddingMedium: string
                        optionPaddingLarge: string
                        optionPaddingHuge: string
                        loadingSize: string
                      },
                      {
                        Scrollbar: import('../../_mixins').Theme<
                          'Scrollbar',
                          {
                            color: string
                            colorHover: string
                          },
                          any
                        >
                        Empty: import('../../_mixins').Theme<
                          'Empty',
                          {
                            fontSizeSmall: string
                            fontSizeMedium: string
                            fontSizeLarge: string
                            fontSizeHuge: string
                            textColor: string
                            iconColor: string
                            extraTextColor: string
                            iconSizeSmall: string
                            iconSizeMedium: string
                            iconSizeLarge: string
                            iconSizeHuge: string
                          },
                          any
                        >
                      }
                    >
                  }
                >
                Input: import('../../_mixins').Theme<
                  'Input',
                  {
                    countTextColor: string
                    heightTiny: string
                    heightSmall: string
                    heightMedium: string
                    heightLarge: string
                    fontSizeTiny: string
                    fontSizeSmall: string
                    fontSizeMedium: string
                    fontSizeLarge: string
                    lineHeight: string
                    lineHeightTextarea: string
                    borderRadius: string
                    iconSize: string
                    groupLabelColor: string
                    groupLabelTextColor: string
                    textColor: string
                    textColorDisabled: string
                    textDecorationColor: string
                    caretColor: string
                    placeholderColor: string
                    placeholderColorDisabled: string
                    color: string
                    colorDisabled: string
                    colorFocus: string
                    groupLabelBorder: string
                    border: string
                    borderHover: string
                    borderDisabled: string
                    borderFocus: string
                    boxShadowFocus: string
                    loadingColor: string
                    loadingColorWarning: string
                    borderWarning: string
                    borderHoverWarning: string
                    colorFocusWarning: string
                    borderFocusWarning: string
                    boxShadowFocusWarning: string
                    caretColorWarning: string
                    loadingColorError: string
                    borderError: string
                    borderHoverError: string
                    colorFocusError: string
                    borderFocusError: string
                    boxShadowFocusError: string
                    caretColorError: string
                    clearColor: string
                    clearColorHover: string
                    clearColorPressed: string
                    iconColor: string
                    iconColorDisabled: string
                    iconColorHover: string
                    iconColorPressed: string
                    suffixTextColor: string
                    paddingTiny: string
                    paddingSmall: string
                    paddingMedium: string
                    paddingLarge: string
                    clearSize: string
                  },
                  any
                >
              }
            >
            Scrollbar: import('../../_mixins').Theme<
              'Scrollbar',
              {
                color: string
                colorHover: string
              },
              any
            >
            Empty: import('../../_mixins').Theme<
              'Empty',
              {
                fontSizeSmall: string
                fontSizeMedium: string
                fontSizeLarge: string
                fontSizeHuge: string
                textColor: string
                iconColor: string
                extraTextColor: string
                iconSizeSmall: string
                iconSizeMedium: string
                iconSizeLarge: string
                iconSizeHuge: string
              },
              any
            >
            Popover: import('../../_mixins').Theme<
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
            Ellipsis: import('../../_mixins').Theme<
              'Ellipsis',
              unknown,
              {
                Tooltip: import('../../_mixins').Theme<
                  'Tooltip',
                  {
                    borderRadius: string
                    boxShadow: string
                    color: string
                    textColor: string
                    padding: string
                  },
                  {
                    Popover: import('../../_mixins').Theme<
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
          }
        >
      >
    >
  },
  {
    cssVars: import('vue').ComputedRef<{
      '--font-size': string
      '--th-padding': string
      '--td-padding': string
      '--bezier': string
      '--border-radius': string
      '--line-height': string
      '--border-color': string
      '--border-color-modal': string
      '--border-color-popover': string
      '--th-color': string
      '--th-color-hover': string
      '--th-color-modal': string
      '--th-color-hover-modal': string
      '--th-color-popover': string
      '--th-color-hover-popover': string
      '--td-color': string
      '--td-color-hover': string
      '--td-color-modal': string
      '--td-color-hover-modal': string
      '--td-color-popover': string
      '--td-color-hover-popover': string
      '--th-text-color': string
      '--td-text-color': string
      '--th-font-weight': string
      '--th-button-color-hover': string
      '--th-icon-color': string
      '--th-icon-color-active': string
      '--filter-size': string
      '--pagination-margin': string
      '--empty-padding': string
      '--box-shadow-before': string
      '--box-shadow-after': string
      '--sorter-size': string
      '--loading-size': string
      '--loading-color': string
      '--opacity-loading': string
      '--td-color-striped': string
      '--td-color-striped-modal': string
      '--td-color-striped-popover': string
    }>
    filter: (filters: import('./interface').FilterState | null) => void
    filters: (filters: import('./interface').FilterState | null) => void
    clearFilters: () => void
    clearSorter: () => void
    page: (page: number) => void
    sort: (
      columnKey: import('./interface').ColumnKey,
      order: import('./interface').SortOrder
    ) => void
    clearFilter: () => void
    mainTableInstRef: import('vue').Ref<{
      getHeaderElement: () => HTMLElement | null
      getBodyElement: () => HTMLElement | null
    } | null>
    mergedClsPrefix: import('vue').ComputedRef<string>
    mergedTheme: import('vue').ComputedRef<{
      common: {
        baseColor: string
        primaryColor: string
        primaryColorHover: string
        primaryColorPressed: string
        primaryColorSuppl: string
        infoColor: string
        infoColorHover: string
        infoColorPressed: string
        infoColorSuppl: string
        successColor: string
        successColorHover: string
        successColorPressed: string
        successColorSuppl: string
        warningColor: string
        warningColorHover: string
        warningColorPressed: string
        warningColorSuppl: string
        errorColor: string
        errorColorHover: string
        errorColorPressed: string
        errorColorSuppl: string
        textColorBase: string
        textColor1: string
        textColor2: string
        textColor3: string
        textColorDisabled: string
        placeholderColor: string
        placeholderColorDisabled: string
        iconColor: string
        iconColorHover: string
        iconColorPressed: string
        iconColorDisabled: string
        opacity1: string
        opacity2: string
        opacity3: string
        opacity4: string
        opacity5: string
        dividerColor: string
        borderColor: string
        closeColor: string
        closeColorHover: string
        closeColorPressed: string
        closeColorDisabled: string
        clearColor: string
        clearColorHover: string
        clearColorPressed: string
        scrollbarColor: string
        scrollbarColorHover: string
        scrollbarWidth: string
        scrollbarHeight: string
        scrollbarBorderRadius: string
        progressRailColor: string
        railColor: string
        popoverColor: string
        tableColor: string
        cardColor: string
        modalColor: string
        bodyColor: string
        tagColor: string
        avatarColor: string
        invertedColor: string
        inputColor: string
        codeColor: string
        tabColor: string
        actionColor: string
        tableHeaderColor: string
        hoverColor: string
        tableColorHover: string
        tableColorStriped: string
        pressedColor: string
        opacityDisabled: string
        inputColorDisabled: string
        buttonColor2: string
        buttonColor2Hover: string
        buttonColor2Pressed: string
        boxShadow1: string
        boxShadow2: string
        boxShadow3: string
        fontFamily: string
        fontFamilyMono: string
        fontWeight: string
        fontWeightStrong: string
        cubicBezierEaseInOut: string
        cubicBezierEaseOut: string
        cubicBezierEaseIn: string
        borderRadius: string
        borderRadiusSmall: string
        fontSize: string
        fontSizeTiny: string
        fontSizeSmall: string
        fontSizeMedium: string
        fontSizeLarge: string
        fontSizeHuge: string
        lineHeight: string
        heightTiny: string
        heightSmall: string
        heightMedium: string
        heightLarge: string
        heightHuge: string
        transformDebounceScale: string
        name: 'common'
      }
      self: {
        actionDividerColor: string
        lineHeight: string
        borderRadius: string
        fontSizeSmall: string
        fontSizeMedium: string
        fontSizeLarge: string
        borderColor: string
        tdColorHover: string
        tdColorStriped: string
        thColor: string
        thColorHover: string
        tdColor: string
        tdTextColor: string
        thTextColor: string
        thFontWeight: string
        thButtonColorHover: string
        thIconColor: string
        thIconColorActive: string
        borderColorModal: string
        tdColorHoverModal: string
        tdColorStripedModal: string
        thColorModal: string
        thColorHoverModal: string
        tdColorModal: string
        borderColorPopover: string
        tdColorHoverPopover: string
        tdColorStripedPopover: string
        thColorPopover: string
        thColorHoverPopover: string
        tdColorPopover: string
        boxShadowBefore: string
        boxShadowAfter: string
        loadingColor: string
        loadingSize: string
        opacityLoading: string
        thPaddingSmall: string
        thPaddingMedium: string
        thPaddingLarge: string
        tdPaddingSmall: string
        tdPaddingMedium: string
        tdPaddingLarge: string
        sorterSize: string
        filterSize: string
        paginationMargin: string
        emptyPadding: string
        actionPadding: string
        actionButtonMargin: string
      }
      peers: {
        Button: import('../../_mixins').Theme<
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
        Checkbox: import('../../_mixins').Theme<
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
        Radio: import('../../_mixins').Theme<
          'Radio',
          {
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
          },
          any
        >
        Pagination: import('../../_mixins').Theme<
          'Pagination',
          {
            buttonColor: string
            buttonColorHover: string
            buttonColorPressed: string
            buttonBorder: string
            buttonBorderHover: string
            buttonBorderPressed: string
            buttonIconColor: string
            buttonIconColorHover: string
            buttonIconColorPressed: string
            itemTextColor: string
            itemTextColorHover: string
            itemTextColorPressed: string
            itemTextColorActive: string
            itemTextColorDisabled: string
            itemColor: string
            itemColorHover: string
            itemColorPressed: string
            itemColorActive: string
            itemColorActiveHover: string
            itemColorDisabled: string
            itemBorder: string
            itemBorderHover: string
            itemBorderPressed: string
            itemBorderActive: string
            itemBorderDisabled: string
            itemBorderRadius: string
            itemFontSize: string
            jumperTextColor: string
            jumperTextColorDisabled: string
            itemSize: string
            itemPadding: string
            itemMargin: string
            buttonIconSize: string
            inputWidth: string
            selectWidth: string
            inputMargin: string
            selectMargin: string
            prefixMargin: string
            suffixMargin: string
            jumperFontSize: string
          },
          {
            Select: import('../../_mixins').Theme<
              'Select',
              {
                menuBoxShadow: string
              },
              {
                InternalSelection: import('../../_mixins').Theme<
                  'InternalSelection',
                  {
                    fontSizeTiny: string
                    fontSizeSmall: string
                    fontSizeMedium: string
                    fontSizeLarge: string
                    heightTiny: string
                    heightSmall: string
                    heightMedium: string
                    heightLarge: string
                    borderRadius: string
                    textColor: string
                    textColorDisabled: string
                    placeholderColor: string
                    placeholderColorDisabled: string
                    color: string
                    colorDisabled: string
                    colorActive: string
                    border: string
                    borderHover: string
                    borderActive: string
                    borderFocus: string
                    boxShadowHover: null
                    boxShadowActive: string
                    boxShadowFocus: string
                    caretColor: string
                    arrowColor: string
                    arrowColorDisabled: string
                    loadingColor: string
                    borderWarning: string
                    borderHoverWarning: string
                    borderActiveWarning: string
                    borderFocusWarning: string
                    boxShadowHoverWarning: null
                    boxShadowActiveWarning: string
                    boxShadowFocusWarning: string
                    colorActiveWarning: string
                    caretColorWarning: string
                    borderError: string
                    borderHoverError: string
                    borderActiveError: string
                    borderFocusError: string
                    boxShadowHoverError: null
                    boxShadowActiveError: string
                    boxShadowFocusError: string
                    colorActiveError: string
                    caretColorError: string
                    clearColor: string
                    clearColorHover: string
                    clearColorPressed: string
                    paddingSingle: string
                    clearSize: string
                    arrowSize: string
                  },
                  {
                    Popover: import('../../_mixins').Theme<
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
                InternalSelectMenu: import('../../_mixins').Theme<
                  'InternalSelectMenu',
                  {
                    optionFontSizeSmall: string
                    optionFontSizeMedium: string
                    optionFontSizeLarge: string
                    optionFontSizeHuge: string
                    optionHeightSmall: string
                    optionHeightMedium: string
                    optionHeightLarge: string
                    optionHeightHuge: string
                    borderRadius: string
                    color: string
                    groupHeaderTextColor: string
                    actionDividerColor: string
                    optionTextColor: string
                    optionTextColorPressed: string
                    optionTextColorDisabled: string
                    optionTextColorActive: string
                    optionOpacityDisabled: string
                    optionCheckColor: string
                    optionColorPending: string
                    optionColorActive: string
                    actionTextColor: string
                    loadingColor: string
                    height: string
                    paddingSmall: string
                    paddingMedium: string
                    paddingLarge: string
                    paddingHuge: string
                    optionPaddingSmall: string
                    optionPaddingMedium: string
                    optionPaddingLarge: string
                    optionPaddingHuge: string
                    loadingSize: string
                  },
                  {
                    Scrollbar: import('../../_mixins').Theme<
                      'Scrollbar',
                      {
                        color: string
                        colorHover: string
                      },
                      any
                    >
                    Empty: import('../../_mixins').Theme<
                      'Empty',
                      {
                        fontSizeSmall: string
                        fontSizeMedium: string
                        fontSizeLarge: string
                        fontSizeHuge: string
                        textColor: string
                        iconColor: string
                        extraTextColor: string
                        iconSizeSmall: string
                        iconSizeMedium: string
                        iconSizeLarge: string
                        iconSizeHuge: string
                      },
                      any
                    >
                  }
                >
              }
            >
            Input: import('../../_mixins').Theme<
              'Input',
              {
                countTextColor: string
                heightTiny: string
                heightSmall: string
                heightMedium: string
                heightLarge: string
                fontSizeTiny: string
                fontSizeSmall: string
                fontSizeMedium: string
                fontSizeLarge: string
                lineHeight: string
                lineHeightTextarea: string
                borderRadius: string
                iconSize: string
                groupLabelColor: string
                groupLabelTextColor: string
                textColor: string
                textColorDisabled: string
                textDecorationColor: string
                caretColor: string
                placeholderColor: string
                placeholderColorDisabled: string
                color: string
                colorDisabled: string
                colorFocus: string
                groupLabelBorder: string
                border: string
                borderHover: string
                borderDisabled: string
                borderFocus: string
                boxShadowFocus: string
                loadingColor: string
                loadingColorWarning: string
                borderWarning: string
                borderHoverWarning: string
                colorFocusWarning: string
                borderFocusWarning: string
                boxShadowFocusWarning: string
                caretColorWarning: string
                loadingColorError: string
                borderError: string
                borderHoverError: string
                colorFocusError: string
                borderFocusError: string
                boxShadowFocusError: string
                caretColorError: string
                clearColor: string
                clearColorHover: string
                clearColorPressed: string
                iconColor: string
                iconColorDisabled: string
                iconColorHover: string
                iconColorPressed: string
                suffixTextColor: string
                paddingTiny: string
                paddingSmall: string
                paddingMedium: string
                paddingLarge: string
                clearSize: string
              },
              any
            >
          }
        >
        Scrollbar: import('../../_mixins').Theme<
          'Scrollbar',
          {
            color: string
            colorHover: string
          },
          any
        >
        Empty: import('../../_mixins').Theme<
          'Empty',
          {
            fontSizeSmall: string
            fontSizeMedium: string
            fontSizeLarge: string
            fontSizeHuge: string
            textColor: string
            iconColor: string
            extraTextColor: string
            iconSizeSmall: string
            iconSizeMedium: string
            iconSizeLarge: string
            iconSizeHuge: string
          },
          any
        >
        Popover: import('../../_mixins').Theme<
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
        Ellipsis: import('../../_mixins').Theme<
          'Ellipsis',
          unknown,
          {
            Tooltip: import('../../_mixins').Theme<
              'Tooltip',
              {
                borderRadius: string
                boxShadow: string
                color: string
                textColor: string
                padding: string
              },
              {
                Popover: import('../../_mixins').Theme<
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
      }
      peerOverrides: {
        Button?:
          | {
              peers?:
                | {
                    [x: string]: any
                  }
                | undefined
            }
          | undefined
        Checkbox?:
          | {
              peers?:
                | {
                    [x: string]: any
                  }
                | undefined
            }
          | undefined
        Radio?:
          | {
              peers?:
                | {
                    [x: string]: any
                  }
                | undefined
            }
          | undefined
        Pagination?:
          | {
              peers?:
                | {
                    Select?:
                      | import('../../_mixins/use-theme').ExtractThemeOverrides<
                          import('../../_mixins').Theme<
                            'Select',
                            {
                              menuBoxShadow: string
                            },
                            {
                              InternalSelection: import('../../_mixins').Theme<
                                'InternalSelection',
                                {
                                  fontSizeTiny: string
                                  fontSizeSmall: string
                                  fontSizeMedium: string
                                  fontSizeLarge: string
                                  heightTiny: string
                                  heightSmall: string
                                  heightMedium: string
                                  heightLarge: string
                                  borderRadius: string
                                  textColor: string
                                  textColorDisabled: string
                                  placeholderColor: string
                                  placeholderColorDisabled: string
                                  color: string
                                  colorDisabled: string
                                  colorActive: string
                                  border: string
                                  borderHover: string
                                  borderActive: string
                                  borderFocus: string
                                  boxShadowHover: null
                                  boxShadowActive: string
                                  boxShadowFocus: string
                                  caretColor: string
                                  arrowColor: string
                                  arrowColorDisabled: string
                                  loadingColor: string
                                  borderWarning: string
                                  borderHoverWarning: string
                                  borderActiveWarning: string
                                  borderFocusWarning: string
                                  boxShadowHoverWarning: null
                                  boxShadowActiveWarning: string
                                  boxShadowFocusWarning: string
                                  colorActiveWarning: string
                                  caretColorWarning: string
                                  borderError: string
                                  borderHoverError: string
                                  borderActiveError: string
                                  borderFocusError: string
                                  boxShadowHoverError: null
                                  boxShadowActiveError: string
                                  boxShadowFocusError: string
                                  colorActiveError: string
                                  caretColorError: string
                                  clearColor: string
                                  clearColorHover: string
                                  clearColorPressed: string
                                  paddingSingle: string
                                  clearSize: string
                                  arrowSize: string
                                },
                                {
                                  Popover: import('../../_mixins').Theme<
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
                              InternalSelectMenu: import('../../_mixins').Theme<
                                'InternalSelectMenu',
                                {
                                  optionFontSizeSmall: string
                                  optionFontSizeMedium: string
                                  optionFontSizeLarge: string
                                  optionFontSizeHuge: string
                                  optionHeightSmall: string
                                  optionHeightMedium: string
                                  optionHeightLarge: string
                                  optionHeightHuge: string
                                  borderRadius: string
                                  color: string
                                  groupHeaderTextColor: string
                                  actionDividerColor: string
                                  optionTextColor: string
                                  optionTextColorPressed: string
                                  optionTextColorDisabled: string
                                  optionTextColorActive: string
                                  optionOpacityDisabled: string
                                  optionCheckColor: string
                                  optionColorPending: string
                                  optionColorActive: string
                                  actionTextColor: string
                                  loadingColor: string
                                  height: string
                                  paddingSmall: string
                                  paddingMedium: string
                                  paddingLarge: string
                                  paddingHuge: string
                                  optionPaddingSmall: string
                                  optionPaddingMedium: string
                                  optionPaddingLarge: string
                                  optionPaddingHuge: string
                                  loadingSize: string
                                },
                                {
                                  Scrollbar: import('../../_mixins').Theme<
                                    'Scrollbar',
                                    {
                                      color: string
                                      colorHover: string
                                    },
                                    any
                                  >
                                  Empty: import('../../_mixins').Theme<
                                    'Empty',
                                    {
                                      fontSizeSmall: string
                                      fontSizeMedium: string
                                      fontSizeLarge: string
                                      fontSizeHuge: string
                                      textColor: string
                                      iconColor: string
                                      extraTextColor: string
                                      iconSizeSmall: string
                                      iconSizeMedium: string
                                      iconSizeLarge: string
                                      iconSizeHuge: string
                                    },
                                    any
                                  >
                                }
                              >
                            }
                          >
                        >
                      | undefined
                    Input?:
                      | import('../../_mixins/use-theme').ExtractThemeOverrides<
                          import('../../_mixins').Theme<
                            'Input',
                            {
                              countTextColor: string
                              heightTiny: string
                              heightSmall: string
                              heightMedium: string
                              heightLarge: string
                              fontSizeTiny: string
                              fontSizeSmall: string
                              fontSizeMedium: string
                              fontSizeLarge: string
                              lineHeight: string
                              lineHeightTextarea: string
                              borderRadius: string
                              iconSize: string
                              groupLabelColor: string
                              groupLabelTextColor: string
                              textColor: string
                              textColorDisabled: string
                              textDecorationColor: string
                              caretColor: string
                              placeholderColor: string
                              placeholderColorDisabled: string
                              color: string
                              colorDisabled: string
                              colorFocus: string
                              groupLabelBorder: string
                              border: string
                              borderHover: string
                              borderDisabled: string
                              borderFocus: string
                              boxShadowFocus: string
                              loadingColor: string
                              loadingColorWarning: string
                              borderWarning: string
                              borderHoverWarning: string
                              colorFocusWarning: string
                              borderFocusWarning: string
                              boxShadowFocusWarning: string
                              caretColorWarning: string
                              loadingColorError: string
                              borderError: string
                              borderHoverError: string
                              colorFocusError: string
                              borderFocusError: string
                              boxShadowFocusError: string
                              caretColorError: string
                              clearColor: string
                              clearColorHover: string
                              clearColorPressed: string
                              iconColor: string
                              iconColorDisabled: string
                              iconColorHover: string
                              iconColorPressed: string
                              suffixTextColor: string
                              paddingTiny: string
                              paddingSmall: string
                              paddingMedium: string
                              paddingLarge: string
                              clearSize: string
                            },
                            any
                          >
                        >
                      | undefined
                  }
                | undefined
            }
          | undefined
        Scrollbar?:
          | {
              peers?:
                | {
                    [x: string]: any
                  }
                | undefined
            }
          | undefined
        Empty?:
          | {
              peers?:
                | {
                    [x: string]: any
                  }
                | undefined
            }
          | undefined
        Popover?:
          | {
              peers?:
                | {
                    [x: string]: any
                  }
                | undefined
            }
          | undefined
        Ellipsis?:
          | {
              peers?:
                | {
                    Tooltip?:
                      | import('../../_mixins/use-theme').ExtractThemeOverrides<
                          import('../../_mixins').Theme<
                            'Tooltip',
                            {
                              borderRadius: string
                              boxShadow: string
                              color: string
                              textColor: string
                              padding: string
                            },
                            {
                              Popover: import('../../_mixins').Theme<
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
                        >
                      | undefined
                  }
                | undefined
            }
          | undefined
      }
    }>
    paginatedData: import('vue').ComputedRef<import('./interface').TmNode[]>
    mergedBordered: import('vue').ComputedRef<boolean>
    mergedBottomBordered: import('vue').ComputedRef<boolean>
    mergedPagination: import('vue').ComputedRef<PaginationProps>
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
      readonly pagination?: unknown
      readonly minHeight?: unknown
      readonly maxHeight?: unknown
      readonly columns?: unknown
      readonly rowClassName?: unknown
      readonly rowProps?: unknown
      readonly rowKey?: unknown
      readonly summary?: unknown
      readonly data?: unknown
      readonly loading?: unknown
      readonly bordered?: unknown
      readonly bottomBordered?: unknown
      readonly striped?: unknown
      readonly scrollX?: unknown
      readonly defaultCheckedRowKeys?: unknown
      readonly checkedRowKeys?: unknown
      readonly singleLine?: unknown
      readonly singleColumn?: unknown
      readonly size?: unknown
      readonly remote?: unknown
      readonly defaultExpandedRowKeys?: unknown
      readonly expandedRowKeys?: unknown
      readonly virtualScroll?: unknown
      readonly tableLayout?: unknown
      readonly cascade?: unknown
      readonly childrenKey?: unknown
      readonly indent?: unknown
      readonly flexHeight?: unknown
      readonly 'onUpdate:page'?: unknown
      readonly onUpdatePage?: unknown
      readonly 'onUpdate:pageSize'?: unknown
      readonly onUpdatePageSize?: unknown
      readonly 'onUpdate:sorter'?: unknown
      readonly onUpdateSorter?: unknown
      readonly 'onUpdate:filters'?: unknown
      readonly onUpdateFilters?: unknown
      readonly 'onUpdate:checkedRowKeys'?: unknown
      readonly onUpdateCheckedRowKeys?: unknown
      readonly 'onUpdate:expandedRowKeys'?: unknown
      readonly onUpdateExpandedRowKeys?: unknown
      readonly onPageChange?: unknown
      readonly onPageSizeChange?: unknown
      readonly onSorterChange?: unknown
      readonly onFiltersChange?: unknown
      readonly onCheckedRowKeysChange?: unknown
      readonly theme?: unknown
      readonly themeOverrides?: unknown
      readonly builtinThemeOverrides?: unknown
    } & {
      data: RowData[]
      size: 'small' | 'medium' | 'large'
      tableLayout: 'fixed' | 'auto'
      columns: TableColumns<any>
      loading: boolean
      virtualScroll: boolean
      remote: boolean
      pagination: false | PaginationProps
      striped: boolean
      defaultCheckedRowKeys: RowKey[]
      singleLine: boolean
      singleColumn: boolean
      defaultExpandedRowKeys: RowKey[]
      cascade: boolean
      childrenKey: string
      indent: number
      flexHeight: boolean
    } & {
      maxHeight?: string | number | undefined
      minHeight?: string | number | undefined
      summary?: CreateSummary<any> | undefined
      theme?:
        | import('../../_mixins').Theme<
            'DataTable',
            {
              actionDividerColor: string
              lineHeight: string
              borderRadius: string
              fontSizeSmall: string
              fontSizeMedium: string
              fontSizeLarge: string
              borderColor: string
              tdColorHover: string
              tdColorStriped: string
              thColor: string
              thColorHover: string
              tdColor: string
              tdTextColor: string
              thTextColor: string
              thFontWeight: string
              thButtonColorHover: string
              thIconColor: string
              thIconColorActive: string
              borderColorModal: string
              tdColorHoverModal: string
              tdColorStripedModal: string
              thColorModal: string
              thColorHoverModal: string
              tdColorModal: string
              borderColorPopover: string
              tdColorHoverPopover: string
              tdColorStripedPopover: string
              thColorPopover: string
              thColorHoverPopover: string
              tdColorPopover: string
              boxShadowBefore: string
              boxShadowAfter: string
              loadingColor: string
              loadingSize: string
              opacityLoading: string
              thPaddingSmall: string
              thPaddingMedium: string
              thPaddingLarge: string
              tdPaddingSmall: string
              tdPaddingMedium: string
              tdPaddingLarge: string
              sorterSize: string
              filterSize: string
              paginationMargin: string
              emptyPadding: string
              actionPadding: string
              actionButtonMargin: string
            },
            {
              Button: import('../../_mixins').Theme<
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
              Checkbox: import('../../_mixins').Theme<
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
              Radio: import('../../_mixins').Theme<
                'Radio',
                {
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
                },
                any
              >
              Pagination: import('../../_mixins').Theme<
                'Pagination',
                {
                  buttonColor: string
                  buttonColorHover: string
                  buttonColorPressed: string
                  buttonBorder: string
                  buttonBorderHover: string
                  buttonBorderPressed: string
                  buttonIconColor: string
                  buttonIconColorHover: string
                  buttonIconColorPressed: string
                  itemTextColor: string
                  itemTextColorHover: string
                  itemTextColorPressed: string
                  itemTextColorActive: string
                  itemTextColorDisabled: string
                  itemColor: string
                  itemColorHover: string
                  itemColorPressed: string
                  itemColorActive: string
                  itemColorActiveHover: string
                  itemColorDisabled: string
                  itemBorder: string
                  itemBorderHover: string
                  itemBorderPressed: string
                  itemBorderActive: string
                  itemBorderDisabled: string
                  itemBorderRadius: string
                  itemFontSize: string
                  jumperTextColor: string
                  jumperTextColorDisabled: string
                  itemSize: string
                  itemPadding: string
                  itemMargin: string
                  buttonIconSize: string
                  inputWidth: string
                  selectWidth: string
                  inputMargin: string
                  selectMargin: string
                  prefixMargin: string
                  suffixMargin: string
                  jumperFontSize: string
                },
                {
                  Select: import('../../_mixins').Theme<
                    'Select',
                    {
                      menuBoxShadow: string
                    },
                    {
                      InternalSelection: import('../../_mixins').Theme<
                        'InternalSelection',
                        {
                          fontSizeTiny: string
                          fontSizeSmall: string
                          fontSizeMedium: string
                          fontSizeLarge: string
                          heightTiny: string
                          heightSmall: string
                          heightMedium: string
                          heightLarge: string
                          borderRadius: string
                          textColor: string
                          textColorDisabled: string
                          placeholderColor: string
                          placeholderColorDisabled: string
                          color: string
                          colorDisabled: string
                          colorActive: string
                          border: string
                          borderHover: string
                          borderActive: string
                          borderFocus: string
                          boxShadowHover: null
                          boxShadowActive: string
                          boxShadowFocus: string
                          caretColor: string
                          arrowColor: string
                          arrowColorDisabled: string
                          loadingColor: string
                          borderWarning: string
                          borderHoverWarning: string
                          borderActiveWarning: string
                          borderFocusWarning: string
                          boxShadowHoverWarning: null
                          boxShadowActiveWarning: string
                          boxShadowFocusWarning: string
                          colorActiveWarning: string
                          caretColorWarning: string
                          borderError: string
                          borderHoverError: string
                          borderActiveError: string
                          borderFocusError: string
                          boxShadowHoverError: null
                          boxShadowActiveError: string
                          boxShadowFocusError: string
                          colorActiveError: string
                          caretColorError: string
                          clearColor: string
                          clearColorHover: string
                          clearColorPressed: string
                          paddingSingle: string
                          clearSize: string
                          arrowSize: string
                        },
                        {
                          Popover: import('../../_mixins').Theme<
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
                      InternalSelectMenu: import('../../_mixins').Theme<
                        'InternalSelectMenu',
                        {
                          optionFontSizeSmall: string
                          optionFontSizeMedium: string
                          optionFontSizeLarge: string
                          optionFontSizeHuge: string
                          optionHeightSmall: string
                          optionHeightMedium: string
                          optionHeightLarge: string
                          optionHeightHuge: string
                          borderRadius: string
                          color: string
                          groupHeaderTextColor: string
                          actionDividerColor: string
                          optionTextColor: string
                          optionTextColorPressed: string
                          optionTextColorDisabled: string
                          optionTextColorActive: string
                          optionOpacityDisabled: string
                          optionCheckColor: string
                          optionColorPending: string
                          optionColorActive: string
                          actionTextColor: string
                          loadingColor: string
                          height: string
                          paddingSmall: string
                          paddingMedium: string
                          paddingLarge: string
                          paddingHuge: string
                          optionPaddingSmall: string
                          optionPaddingMedium: string
                          optionPaddingLarge: string
                          optionPaddingHuge: string
                          loadingSize: string
                        },
                        {
                          Scrollbar: import('../../_mixins').Theme<
                            'Scrollbar',
                            {
                              color: string
                              colorHover: string
                            },
                            any
                          >
                          Empty: import('../../_mixins').Theme<
                            'Empty',
                            {
                              fontSizeSmall: string
                              fontSizeMedium: string
                              fontSizeLarge: string
                              fontSizeHuge: string
                              textColor: string
                              iconColor: string
                              extraTextColor: string
                              iconSizeSmall: string
                              iconSizeMedium: string
                              iconSizeLarge: string
                              iconSizeHuge: string
                            },
                            any
                          >
                        }
                      >
                    }
                  >
                  Input: import('../../_mixins').Theme<
                    'Input',
                    {
                      countTextColor: string
                      heightTiny: string
                      heightSmall: string
                      heightMedium: string
                      heightLarge: string
                      fontSizeTiny: string
                      fontSizeSmall: string
                      fontSizeMedium: string
                      fontSizeLarge: string
                      lineHeight: string
                      lineHeightTextarea: string
                      borderRadius: string
                      iconSize: string
                      groupLabelColor: string
                      groupLabelTextColor: string
                      textColor: string
                      textColorDisabled: string
                      textDecorationColor: string
                      caretColor: string
                      placeholderColor: string
                      placeholderColorDisabled: string
                      color: string
                      colorDisabled: string
                      colorFocus: string
                      groupLabelBorder: string
                      border: string
                      borderHover: string
                      borderDisabled: string
                      borderFocus: string
                      boxShadowFocus: string
                      loadingColor: string
                      loadingColorWarning: string
                      borderWarning: string
                      borderHoverWarning: string
                      colorFocusWarning: string
                      borderFocusWarning: string
                      boxShadowFocusWarning: string
                      caretColorWarning: string
                      loadingColorError: string
                      borderError: string
                      borderHoverError: string
                      colorFocusError: string
                      borderFocusError: string
                      boxShadowFocusError: string
                      caretColorError: string
                      clearColor: string
                      clearColorHover: string
                      clearColorPressed: string
                      iconColor: string
                      iconColorDisabled: string
                      iconColorHover: string
                      iconColorPressed: string
                      suffixTextColor: string
                      paddingTiny: string
                      paddingSmall: string
                      paddingMedium: string
                      paddingLarge: string
                      clearSize: string
                    },
                    any
                  >
                }
              >
              Scrollbar: import('../../_mixins').Theme<
                'Scrollbar',
                {
                  color: string
                  colorHover: string
                },
                any
              >
              Empty: import('../../_mixins').Theme<
                'Empty',
                {
                  fontSizeSmall: string
                  fontSizeMedium: string
                  fontSizeLarge: string
                  fontSizeHuge: string
                  textColor: string
                  iconColor: string
                  extraTextColor: string
                  iconSizeSmall: string
                  iconSizeMedium: string
                  iconSizeLarge: string
                  iconSizeHuge: string
                },
                any
              >
              Popover: import('../../_mixins').Theme<
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
              Ellipsis: import('../../_mixins').Theme<
                'Ellipsis',
                unknown,
                {
                  Tooltip: import('../../_mixins').Theme<
                    'Tooltip',
                    {
                      borderRadius: string
                      boxShadow: string
                      color: string
                      textColor: string
                      padding: string
                    },
                    {
                      Popover: import('../../_mixins').Theme<
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
            }
          >
        | undefined
      themeOverrides?:
        | import('../../_mixins/use-theme').ExtractThemeOverrides<
            import('../../_mixins').Theme<
              'DataTable',
              {
                actionDividerColor: string
                lineHeight: string
                borderRadius: string
                fontSizeSmall: string
                fontSizeMedium: string
                fontSizeLarge: string
                borderColor: string
                tdColorHover: string
                tdColorStriped: string
                thColor: string
                thColorHover: string
                tdColor: string
                tdTextColor: string
                thTextColor: string
                thFontWeight: string
                thButtonColorHover: string
                thIconColor: string
                thIconColorActive: string
                borderColorModal: string
                tdColorHoverModal: string
                tdColorStripedModal: string
                thColorModal: string
                thColorHoverModal: string
                tdColorModal: string
                borderColorPopover: string
                tdColorHoverPopover: string
                tdColorStripedPopover: string
                thColorPopover: string
                thColorHoverPopover: string
                tdColorPopover: string
                boxShadowBefore: string
                boxShadowAfter: string
                loadingColor: string
                loadingSize: string
                opacityLoading: string
                thPaddingSmall: string
                thPaddingMedium: string
                thPaddingLarge: string
                tdPaddingSmall: string
                tdPaddingMedium: string
                tdPaddingLarge: string
                sorterSize: string
                filterSize: string
                paginationMargin: string
                emptyPadding: string
                actionPadding: string
                actionButtonMargin: string
              },
              {
                Button: import('../../_mixins').Theme<
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
                Checkbox: import('../../_mixins').Theme<
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
                Radio: import('../../_mixins').Theme<
                  'Radio',
                  {
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
                  },
                  any
                >
                Pagination: import('../../_mixins').Theme<
                  'Pagination',
                  {
                    buttonColor: string
                    buttonColorHover: string
                    buttonColorPressed: string
                    buttonBorder: string
                    buttonBorderHover: string
                    buttonBorderPressed: string
                    buttonIconColor: string
                    buttonIconColorHover: string
                    buttonIconColorPressed: string
                    itemTextColor: string
                    itemTextColorHover: string
                    itemTextColorPressed: string
                    itemTextColorActive: string
                    itemTextColorDisabled: string
                    itemColor: string
                    itemColorHover: string
                    itemColorPressed: string
                    itemColorActive: string
                    itemColorActiveHover: string
                    itemColorDisabled: string
                    itemBorder: string
                    itemBorderHover: string
                    itemBorderPressed: string
                    itemBorderActive: string
                    itemBorderDisabled: string
                    itemBorderRadius: string
                    itemFontSize: string
                    jumperTextColor: string
                    jumperTextColorDisabled: string
                    itemSize: string
                    itemPadding: string
                    itemMargin: string
                    buttonIconSize: string
                    inputWidth: string
                    selectWidth: string
                    inputMargin: string
                    selectMargin: string
                    prefixMargin: string
                    suffixMargin: string
                    jumperFontSize: string
                  },
                  {
                    Select: import('../../_mixins').Theme<
                      'Select',
                      {
                        menuBoxShadow: string
                      },
                      {
                        InternalSelection: import('../../_mixins').Theme<
                          'InternalSelection',
                          {
                            fontSizeTiny: string
                            fontSizeSmall: string
                            fontSizeMedium: string
                            fontSizeLarge: string
                            heightTiny: string
                            heightSmall: string
                            heightMedium: string
                            heightLarge: string
                            borderRadius: string
                            textColor: string
                            textColorDisabled: string
                            placeholderColor: string
                            placeholderColorDisabled: string
                            color: string
                            colorDisabled: string
                            colorActive: string
                            border: string
                            borderHover: string
                            borderActive: string
                            borderFocus: string
                            boxShadowHover: null
                            boxShadowActive: string
                            boxShadowFocus: string
                            caretColor: string
                            arrowColor: string
                            arrowColorDisabled: string
                            loadingColor: string
                            borderWarning: string
                            borderHoverWarning: string
                            borderActiveWarning: string
                            borderFocusWarning: string
                            boxShadowHoverWarning: null
                            boxShadowActiveWarning: string
                            boxShadowFocusWarning: string
                            colorActiveWarning: string
                            caretColorWarning: string
                            borderError: string
                            borderHoverError: string
                            borderActiveError: string
                            borderFocusError: string
                            boxShadowHoverError: null
                            boxShadowActiveError: string
                            boxShadowFocusError: string
                            colorActiveError: string
                            caretColorError: string
                            clearColor: string
                            clearColorHover: string
                            clearColorPressed: string
                            paddingSingle: string
                            clearSize: string
                            arrowSize: string
                          },
                          {
                            Popover: import('../../_mixins').Theme<
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
                        InternalSelectMenu: import('../../_mixins').Theme<
                          'InternalSelectMenu',
                          {
                            optionFontSizeSmall: string
                            optionFontSizeMedium: string
                            optionFontSizeLarge: string
                            optionFontSizeHuge: string
                            optionHeightSmall: string
                            optionHeightMedium: string
                            optionHeightLarge: string
                            optionHeightHuge: string
                            borderRadius: string
                            color: string
                            groupHeaderTextColor: string
                            actionDividerColor: string
                            optionTextColor: string
                            optionTextColorPressed: string
                            optionTextColorDisabled: string
                            optionTextColorActive: string
                            optionOpacityDisabled: string
                            optionCheckColor: string
                            optionColorPending: string
                            optionColorActive: string
                            actionTextColor: string
                            loadingColor: string
                            height: string
                            paddingSmall: string
                            paddingMedium: string
                            paddingLarge: string
                            paddingHuge: string
                            optionPaddingSmall: string
                            optionPaddingMedium: string
                            optionPaddingLarge: string
                            optionPaddingHuge: string
                            loadingSize: string
                          },
                          {
                            Scrollbar: import('../../_mixins').Theme<
                              'Scrollbar',
                              {
                                color: string
                                colorHover: string
                              },
                              any
                            >
                            Empty: import('../../_mixins').Theme<
                              'Empty',
                              {
                                fontSizeSmall: string
                                fontSizeMedium: string
                                fontSizeLarge: string
                                fontSizeHuge: string
                                textColor: string
                                iconColor: string
                                extraTextColor: string
                                iconSizeSmall: string
                                iconSizeMedium: string
                                iconSizeLarge: string
                                iconSizeHuge: string
                              },
                              any
                            >
                          }
                        >
                      }
                    >
                    Input: import('../../_mixins').Theme<
                      'Input',
                      {
                        countTextColor: string
                        heightTiny: string
                        heightSmall: string
                        heightMedium: string
                        heightLarge: string
                        fontSizeTiny: string
                        fontSizeSmall: string
                        fontSizeMedium: string
                        fontSizeLarge: string
                        lineHeight: string
                        lineHeightTextarea: string
                        borderRadius: string
                        iconSize: string
                        groupLabelColor: string
                        groupLabelTextColor: string
                        textColor: string
                        textColorDisabled: string
                        textDecorationColor: string
                        caretColor: string
                        placeholderColor: string
                        placeholderColorDisabled: string
                        color: string
                        colorDisabled: string
                        colorFocus: string
                        groupLabelBorder: string
                        border: string
                        borderHover: string
                        borderDisabled: string
                        borderFocus: string
                        boxShadowFocus: string
                        loadingColor: string
                        loadingColorWarning: string
                        borderWarning: string
                        borderHoverWarning: string
                        colorFocusWarning: string
                        borderFocusWarning: string
                        boxShadowFocusWarning: string
                        caretColorWarning: string
                        loadingColorError: string
                        borderError: string
                        borderHoverError: string
                        colorFocusError: string
                        borderFocusError: string
                        boxShadowFocusError: string
                        caretColorError: string
                        clearColor: string
                        clearColorHover: string
                        clearColorPressed: string
                        iconColor: string
                        iconColorDisabled: string
                        iconColorHover: string
                        iconColorPressed: string
                        suffixTextColor: string
                        paddingTiny: string
                        paddingSmall: string
                        paddingMedium: string
                        paddingLarge: string
                        clearSize: string
                      },
                      any
                    >
                  }
                >
                Scrollbar: import('../../_mixins').Theme<
                  'Scrollbar',
                  {
                    color: string
                    colorHover: string
                  },
                  any
                >
                Empty: import('../../_mixins').Theme<
                  'Empty',
                  {
                    fontSizeSmall: string
                    fontSizeMedium: string
                    fontSizeLarge: string
                    fontSizeHuge: string
                    textColor: string
                    iconColor: string
                    extraTextColor: string
                    iconSizeSmall: string
                    iconSizeMedium: string
                    iconSizeLarge: string
                    iconSizeHuge: string
                  },
                  any
                >
                Popover: import('../../_mixins').Theme<
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
                Ellipsis: import('../../_mixins').Theme<
                  'Ellipsis',
                  unknown,
                  {
                    Tooltip: import('../../_mixins').Theme<
                      'Tooltip',
                      {
                        borderRadius: string
                        boxShadow: string
                        color: string
                        textColor: string
                        padding: string
                      },
                      {
                        Popover: import('../../_mixins').Theme<
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
              }
            >
          >
        | undefined
      builtinThemeOverrides?:
        | import('../../_mixins/use-theme').ExtractThemeOverrides<
            import('../../_mixins').Theme<
              'DataTable',
              {
                actionDividerColor: string
                lineHeight: string
                borderRadius: string
                fontSizeSmall: string
                fontSizeMedium: string
                fontSizeLarge: string
                borderColor: string
                tdColorHover: string
                tdColorStriped: string
                thColor: string
                thColorHover: string
                tdColor: string
                tdTextColor: string
                thTextColor: string
                thFontWeight: string
                thButtonColorHover: string
                thIconColor: string
                thIconColorActive: string
                borderColorModal: string
                tdColorHoverModal: string
                tdColorStripedModal: string
                thColorModal: string
                thColorHoverModal: string
                tdColorModal: string
                borderColorPopover: string
                tdColorHoverPopover: string
                tdColorStripedPopover: string
                thColorPopover: string
                thColorHoverPopover: string
                tdColorPopover: string
                boxShadowBefore: string
                boxShadowAfter: string
                loadingColor: string
                loadingSize: string
                opacityLoading: string
                thPaddingSmall: string
                thPaddingMedium: string
                thPaddingLarge: string
                tdPaddingSmall: string
                tdPaddingMedium: string
                tdPaddingLarge: string
                sorterSize: string
                filterSize: string
                paginationMargin: string
                emptyPadding: string
                actionPadding: string
                actionButtonMargin: string
              },
              {
                Button: import('../../_mixins').Theme<
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
                Checkbox: import('../../_mixins').Theme<
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
                Radio: import('../../_mixins').Theme<
                  'Radio',
                  {
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
                  },
                  any
                >
                Pagination: import('../../_mixins').Theme<
                  'Pagination',
                  {
                    buttonColor: string
                    buttonColorHover: string
                    buttonColorPressed: string
                    buttonBorder: string
                    buttonBorderHover: string
                    buttonBorderPressed: string
                    buttonIconColor: string
                    buttonIconColorHover: string
                    buttonIconColorPressed: string
                    itemTextColor: string
                    itemTextColorHover: string
                    itemTextColorPressed: string
                    itemTextColorActive: string
                    itemTextColorDisabled: string
                    itemColor: string
                    itemColorHover: string
                    itemColorPressed: string
                    itemColorActive: string
                    itemColorActiveHover: string
                    itemColorDisabled: string
                    itemBorder: string
                    itemBorderHover: string
                    itemBorderPressed: string
                    itemBorderActive: string
                    itemBorderDisabled: string
                    itemBorderRadius: string
                    itemFontSize: string
                    jumperTextColor: string
                    jumperTextColorDisabled: string
                    itemSize: string
                    itemPadding: string
                    itemMargin: string
                    buttonIconSize: string
                    inputWidth: string
                    selectWidth: string
                    inputMargin: string
                    selectMargin: string
                    prefixMargin: string
                    suffixMargin: string
                    jumperFontSize: string
                  },
                  {
                    Select: import('../../_mixins').Theme<
                      'Select',
                      {
                        menuBoxShadow: string
                      },
                      {
                        InternalSelection: import('../../_mixins').Theme<
                          'InternalSelection',
                          {
                            fontSizeTiny: string
                            fontSizeSmall: string
                            fontSizeMedium: string
                            fontSizeLarge: string
                            heightTiny: string
                            heightSmall: string
                            heightMedium: string
                            heightLarge: string
                            borderRadius: string
                            textColor: string
                            textColorDisabled: string
                            placeholderColor: string
                            placeholderColorDisabled: string
                            color: string
                            colorDisabled: string
                            colorActive: string
                            border: string
                            borderHover: string
                            borderActive: string
                            borderFocus: string
                            boxShadowHover: null
                            boxShadowActive: string
                            boxShadowFocus: string
                            caretColor: string
                            arrowColor: string
                            arrowColorDisabled: string
                            loadingColor: string
                            borderWarning: string
                            borderHoverWarning: string
                            borderActiveWarning: string
                            borderFocusWarning: string
                            boxShadowHoverWarning: null
                            boxShadowActiveWarning: string
                            boxShadowFocusWarning: string
                            colorActiveWarning: string
                            caretColorWarning: string
                            borderError: string
                            borderHoverError: string
                            borderActiveError: string
                            borderFocusError: string
                            boxShadowHoverError: null
                            boxShadowActiveError: string
                            boxShadowFocusError: string
                            colorActiveError: string
                            caretColorError: string
                            clearColor: string
                            clearColorHover: string
                            clearColorPressed: string
                            paddingSingle: string
                            clearSize: string
                            arrowSize: string
                          },
                          {
                            Popover: import('../../_mixins').Theme<
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
                        InternalSelectMenu: import('../../_mixins').Theme<
                          'InternalSelectMenu',
                          {
                            optionFontSizeSmall: string
                            optionFontSizeMedium: string
                            optionFontSizeLarge: string
                            optionFontSizeHuge: string
                            optionHeightSmall: string
                            optionHeightMedium: string
                            optionHeightLarge: string
                            optionHeightHuge: string
                            borderRadius: string
                            color: string
                            groupHeaderTextColor: string
                            actionDividerColor: string
                            optionTextColor: string
                            optionTextColorPressed: string
                            optionTextColorDisabled: string
                            optionTextColorActive: string
                            optionOpacityDisabled: string
                            optionCheckColor: string
                            optionColorPending: string
                            optionColorActive: string
                            actionTextColor: string
                            loadingColor: string
                            height: string
                            paddingSmall: string
                            paddingMedium: string
                            paddingLarge: string
                            paddingHuge: string
                            optionPaddingSmall: string
                            optionPaddingMedium: string
                            optionPaddingLarge: string
                            optionPaddingHuge: string
                            loadingSize: string
                          },
                          {
                            Scrollbar: import('../../_mixins').Theme<
                              'Scrollbar',
                              {
                                color: string
                                colorHover: string
                              },
                              any
                            >
                            Empty: import('../../_mixins').Theme<
                              'Empty',
                              {
                                fontSizeSmall: string
                                fontSizeMedium: string
                                fontSizeLarge: string
                                fontSizeHuge: string
                                textColor: string
                                iconColor: string
                                extraTextColor: string
                                iconSizeSmall: string
                                iconSizeMedium: string
                                iconSizeLarge: string
                                iconSizeHuge: string
                              },
                              any
                            >
                          }
                        >
                      }
                    >
                    Input: import('../../_mixins').Theme<
                      'Input',
                      {
                        countTextColor: string
                        heightTiny: string
                        heightSmall: string
                        heightMedium: string
                        heightLarge: string
                        fontSizeTiny: string
                        fontSizeSmall: string
                        fontSizeMedium: string
                        fontSizeLarge: string
                        lineHeight: string
                        lineHeightTextarea: string
                        borderRadius: string
                        iconSize: string
                        groupLabelColor: string
                        groupLabelTextColor: string
                        textColor: string
                        textColorDisabled: string
                        textDecorationColor: string
                        caretColor: string
                        placeholderColor: string
                        placeholderColorDisabled: string
                        color: string
                        colorDisabled: string
                        colorFocus: string
                        groupLabelBorder: string
                        border: string
                        borderHover: string
                        borderDisabled: string
                        borderFocus: string
                        boxShadowFocus: string
                        loadingColor: string
                        loadingColorWarning: string
                        borderWarning: string
                        borderHoverWarning: string
                        colorFocusWarning: string
                        borderFocusWarning: string
                        boxShadowFocusWarning: string
                        caretColorWarning: string
                        loadingColorError: string
                        borderError: string
                        borderHoverError: string
                        colorFocusError: string
                        borderFocusError: string
                        boxShadowFocusError: string
                        caretColorError: string
                        clearColor: string
                        clearColorHover: string
                        clearColorPressed: string
                        iconColor: string
                        iconColorDisabled: string
                        iconColorHover: string
                        iconColorPressed: string
                        suffixTextColor: string
                        paddingTiny: string
                        paddingSmall: string
                        paddingMedium: string
                        paddingLarge: string
                        clearSize: string
                      },
                      any
                    >
                  }
                >
                Scrollbar: import('../../_mixins').Theme<
                  'Scrollbar',
                  {
                    color: string
                    colorHover: string
                  },
                  any
                >
                Empty: import('../../_mixins').Theme<
                  'Empty',
                  {
                    fontSizeSmall: string
                    fontSizeMedium: string
                    fontSizeLarge: string
                    fontSizeHuge: string
                    textColor: string
                    iconColor: string
                    extraTextColor: string
                    iconSizeSmall: string
                    iconSizeMedium: string
                    iconSizeLarge: string
                    iconSizeHuge: string
                  },
                  any
                >
                Popover: import('../../_mixins').Theme<
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
                Ellipsis: import('../../_mixins').Theme<
                  'Ellipsis',
                  unknown,
                  {
                    Tooltip: import('../../_mixins').Theme<
                      'Tooltip',
                      {
                        borderRadius: string
                        boxShadow: string
                        color: string
                        textColor: string
                        padding: string
                      },
                      {
                        Popover: import('../../_mixins').Theme<
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
              }
            >
          >
        | undefined
      bordered?: boolean | undefined
      'onUpdate:page'?: MaybeArray<(page: number) => void> | undefined
      onUpdatePage?: MaybeArray<(page: number) => void> | undefined
      'onUpdate:pageSize'?: MaybeArray<(pageSize: number) => void> | undefined
      onUpdatePageSize?: MaybeArray<(pageSize: number) => void> | undefined
      onPageSizeChange?: MaybeArray<(pageSize: number) => void> | undefined
      rowClassName?: string | CreateRowClassName<any> | undefined
      rowProps?: CreateRowProps<any> | undefined
      rowKey?: CreateRowKey<any> | undefined
      bottomBordered?: boolean | undefined
      scrollX?: string | number | undefined
      checkedRowKeys?: RowKey[] | undefined
      expandedRowKeys?: RowKey[] | undefined
      'onUpdate:sorter'?: MaybeArray<OnUpdateSorter> | undefined
      onUpdateSorter?: MaybeArray<OnUpdateSorter> | undefined
      'onUpdate:filters'?: MaybeArray<OnUpdateFilters> | undefined
      onUpdateFilters?: MaybeArray<OnUpdateFilters> | undefined
      'onUpdate:checkedRowKeys'?: MaybeArray<OnUpdateCheckedRowKeys> | undefined
      onUpdateCheckedRowKeys?: MaybeArray<OnUpdateCheckedRowKeys> | undefined
      'onUpdate:expandedRowKeys'?:
        | MaybeArray<OnUpdateExpandedRowKeys>
        | undefined
      onUpdateExpandedRowKeys?: MaybeArray<OnUpdateExpandedRowKeys> | undefined
      onPageChange?: MaybeArray<(page: number) => void> | undefined
      onSorterChange?: MaybeArray<OnUpdateSorter> | undefined
      onFiltersChange?: MaybeArray<OnUpdateFilters> | undefined
      onCheckedRowKeysChange?: MaybeArray<OnUpdateCheckedRowKeys> | undefined
    }
  >,
  {
    data: RowData[]
    size: 'small' | 'medium' | 'large'
    tableLayout: 'fixed' | 'auto'
    columns: TableColumns<any>
    loading: boolean
    bordered: boolean | undefined
    virtualScroll: boolean
    remote: boolean
    pagination: false | PaginationProps
    onPageSizeChange: MaybeArray<(pageSize: number) => void> | undefined
    bottomBordered: boolean | undefined
    striped: boolean
    defaultCheckedRowKeys: RowKey[]
    singleLine: boolean
    singleColumn: boolean
    defaultExpandedRowKeys: RowKey[]
    cascade: boolean
    childrenKey: string
    indent: number
    flexHeight: boolean
    onPageChange: MaybeArray<(page: number) => void> | undefined
    onSorterChange: MaybeArray<OnUpdateSorter> | undefined
    onFiltersChange: MaybeArray<OnUpdateFilters> | undefined
    onCheckedRowKeysChange: MaybeArray<OnUpdateCheckedRowKeys> | undefined
  }
>
export default _default