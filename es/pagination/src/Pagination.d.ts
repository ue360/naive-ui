import { PropType } from 'vue'
import type { PageItem } from './utils'
import { ExtractPublicPropTypes, MaybeArray } from '../../_utils'
import type { Size as InputSize } from '../../input/src/interface'
import type { Size as SelectSize } from '../../select/src/interface'
import { RenderPrefix, PaginationSizeOption } from './interface'
declare const paginationProps: {
  readonly page: NumberConstructor
  readonly defaultPage: {
    readonly type: NumberConstructor
    readonly default: 1
  }
  readonly itemCount: NumberConstructor
  readonly pageCount: NumberConstructor
  readonly defaultPageCount: {
    readonly type: NumberConstructor
    readonly default: 1
  }
  readonly showSizePicker: BooleanConstructor
  readonly pageSize: PropType<number>
  readonly defaultPageSize: {
    readonly type: NumberConstructor
    readonly default: 10
  }
  readonly pageSizes: {
    readonly type: PropType<(number | PaginationSizeOption)[]>
    readonly default: () => number[]
  }
  readonly showQuickJumper: BooleanConstructor
  readonly disabled: BooleanConstructor
  readonly pageSlot: {
    readonly type: NumberConstructor
    readonly default: 9
  }
  readonly prev: PropType<RenderPrefix>
  readonly next: PropType<RenderPrefix>
  readonly prefix: PropType<RenderPrefix>
  readonly suffix: PropType<RenderPrefix>
  readonly 'onUpdate:page': PropType<MaybeArray<(page: number) => void>>
  readonly onUpdatePage: PropType<MaybeArray<(page: number) => void>>
  readonly 'onUpdate:pageSize': PropType<MaybeArray<(pageSize: number) => void>>
  readonly onUpdatePageSize: PropType<MaybeArray<(pageSize: number) => void>>
  /** @deprecated */
  readonly onPageSizeChange: PropType<MaybeArray<(pageSize: number) => void>>
  /** @deprecated */
  readonly onChange: PropType<MaybeArray<(page: number) => void>>
  readonly theme: PropType<
    import('../../_mixins').Theme<
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
  >
  readonly themeOverrides: PropType<
    import('../../_mixins/use-theme').ExtractThemeOverrides<
      import('../../_mixins').Theme<
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
    >
  >
  readonly builtinThemeOverrides: PropType<
    import('../../_mixins/use-theme').ExtractThemeOverrides<
      import('../../_mixins').Theme<
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
    >
  >
}
export declare type PaginationProps = ExtractPublicPropTypes<
  typeof paginationProps
>
declare const _default: import('vue').DefineComponent<
  {
    readonly page: NumberConstructor
    readonly defaultPage: {
      readonly type: NumberConstructor
      readonly default: 1
    }
    readonly itemCount: NumberConstructor
    readonly pageCount: NumberConstructor
    readonly defaultPageCount: {
      readonly type: NumberConstructor
      readonly default: 1
    }
    readonly showSizePicker: BooleanConstructor
    readonly pageSize: PropType<number>
    readonly defaultPageSize: {
      readonly type: NumberConstructor
      readonly default: 10
    }
    readonly pageSizes: {
      readonly type: PropType<(number | PaginationSizeOption)[]>
      readonly default: () => number[]
    }
    readonly showQuickJumper: BooleanConstructor
    readonly disabled: BooleanConstructor
    readonly pageSlot: {
      readonly type: NumberConstructor
      readonly default: 9
    }
    readonly prev: PropType<RenderPrefix>
    readonly next: PropType<RenderPrefix>
    readonly prefix: PropType<RenderPrefix>
    readonly suffix: PropType<RenderPrefix>
    readonly 'onUpdate:page': PropType<MaybeArray<(page: number) => void>>
    readonly onUpdatePage: PropType<MaybeArray<(page: number) => void>>
    readonly 'onUpdate:pageSize': PropType<
      MaybeArray<(pageSize: number) => void>
    >
    readonly onUpdatePageSize: PropType<MaybeArray<(pageSize: number) => void>>
    /** @deprecated */
    readonly onPageSizeChange: PropType<MaybeArray<(pageSize: number) => void>>
    /** @deprecated */
    readonly onChange: PropType<MaybeArray<(page: number) => void>>
    readonly theme: PropType<
      import('../../_mixins').Theme<
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
    >
    readonly themeOverrides: PropType<
      import('../../_mixins/use-theme').ExtractThemeOverrides<
        import('../../_mixins').Theme<
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
      >
    >
    readonly builtinThemeOverrides: PropType<
      import('../../_mixins/use-theme').ExtractThemeOverrides<
        import('../../_mixins').Theme<
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
      >
    >
  },
  {
    mergedClsPrefix: import('vue').ComputedRef<string>
    locale: import('vue').Ref<{
      goto: string
      selectionSuffix: string
    }>
    selfRef: import('vue').Ref<HTMLElement | null>
    jumperRef: import('vue').Ref<{
      wrapperElRef: HTMLElement | null
      textareaElRef: HTMLTextAreaElement | null
      inputElRef: HTMLInputElement | null
      isCompositing: boolean
      blur: () => void
      focus: () => void
      select: () => void
      activate: () => void
      deactivate: () => void
    } | null>
    mergedPage: import('vue').ComputedRef<number>
    showFastBackward: import('vue').Ref<boolean>
    showFastForward: import('vue').Ref<boolean>
    pageItems: import('vue').ComputedRef<PageItem[]>
    jumperValue: import('vue').Ref<string>
    pageSizeOptions: import('vue').ComputedRef<PaginationSizeOption[]>
    mergedPageSize: import('vue').ComputedRef<number>
    inputSize: import('vue').ComputedRef<InputSize>
    selectSize: import('vue').ComputedRef<SelectSize>
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
      }
      peers: {
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
      peerOverrides: {
        Select?:
          | {
              peers?:
                | {
                    InternalSelection?:
                      | import('../../_mixins/use-theme').ExtractThemeOverrides<
                          import('../../_mixins').Theme<
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
                        >
                      | undefined
                    InternalSelectMenu?:
                      | import('../../_mixins/use-theme').ExtractThemeOverrides<
                          import('../../_mixins').Theme<
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
                        >
                      | undefined
                  }
                | undefined
            }
          | undefined
        Input?:
          | {
              peers?:
                | {
                    [x: string]: any
                  }
                | undefined
            }
          | undefined
      }
    }>
    mergedPageCount: import('vue').ComputedRef<number>
    startIndex: import('vue').ComputedRef<number>
    endIndex: import('vue').ComputedRef<number>
    handleJumperInput: (value: string) => void
    handleBackwardClick: () => void
    handleForwardClick: () => void
    handlePageItemClick: (pageItem: PageItem) => void
    handleSizePickerChange: (value: number) => void
    handleQuickJumperKeyUp: (e: KeyboardEvent) => void
    handlePageItemMouseEnter: (pageItem: PageItem) => void
    handlePageItemMouseLeave: (pageItem: PageItem) => void
    cssVars: import('vue').ComputedRef<{
      '--prefix-margin': string
      '--suffix-margin': string
      '--item-font-size': string
      '--select-width': string
      '--select-margin': string
      '--input-width': string
      '--input-margin': string
      '--item-size': string
      '--item-text-color': string
      '--item-text-color-disabled': string
      '--item-text-color-hover': string
      '--item-text-color-active': string
      '--item-text-color-pressed': string
      '--item-color': string
      '--item-color-hover': string
      '--item-color-disabled': string
      '--item-color-active': string
      '--item-color-active-hover': string
      '--item-color-pressed': string
      '--item-border': string
      '--item-border-hover': string
      '--item-border-disabled': string
      '--item-border-active': string
      '--item-border-pressed': string
      '--item-padding': string
      '--item-border-radius': string
      '--bezier': string
      '--jumper-font-size': string
      '--jumper-text-color': string
      '--jumper-text-color-disabled': string
      '--item-margin': string
      '--button-icon-size': string
      '--button-icon-color': string
      '--button-icon-color-hover': string
      '--button-icon-color-pressed': string
      '--button-color-hover': string
      '--button-color': string
      '--button-color-pressed': string
      '--button-border': string
      '--button-border-hover': string
      '--button-border-pressed': string
    }>
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
      readonly page?: unknown
      readonly defaultPage?: unknown
      readonly itemCount?: unknown
      readonly pageCount?: unknown
      readonly defaultPageCount?: unknown
      readonly showSizePicker?: unknown
      readonly pageSize?: unknown
      readonly defaultPageSize?: unknown
      readonly pageSizes?: unknown
      readonly showQuickJumper?: unknown
      readonly disabled?: unknown
      readonly pageSlot?: unknown
      readonly prev?: unknown
      readonly next?: unknown
      readonly prefix?: unknown
      readonly suffix?: unknown
      readonly 'onUpdate:page'?: unknown
      readonly onUpdatePage?: unknown
      readonly 'onUpdate:pageSize'?: unknown
      readonly onUpdatePageSize?: unknown
      readonly onPageSizeChange?: unknown
      readonly onChange?: unknown
      readonly theme?: unknown
      readonly themeOverrides?: unknown
      readonly builtinThemeOverrides?: unknown
    } & {
      disabled: boolean
      defaultPage: number
      defaultPageCount: number
      showSizePicker: boolean
      defaultPageSize: number
      pageSizes: (number | PaginationSizeOption)[]
      showQuickJumper: boolean
      pageSlot: number
    } & {
      prefix?: RenderPrefix | undefined
      page?: number | undefined
      onChange?: MaybeArray<(page: number) => void> | undefined
      theme?:
        | import('../../_mixins').Theme<
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
        | undefined
      themeOverrides?:
        | import('../../_mixins/use-theme').ExtractThemeOverrides<
            import('../../_mixins').Theme<
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
          >
        | undefined
      builtinThemeOverrides?:
        | import('../../_mixins/use-theme').ExtractThemeOverrides<
            import('../../_mixins').Theme<
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
          >
        | undefined
      prev?: RenderPrefix | undefined
      next?: RenderPrefix | undefined
      suffix?: RenderPrefix | undefined
      itemCount?: number | undefined
      pageCount?: number | undefined
      pageSize?: number | undefined
      'onUpdate:page'?: MaybeArray<(page: number) => void> | undefined
      onUpdatePage?: MaybeArray<(page: number) => void> | undefined
      'onUpdate:pageSize'?: MaybeArray<(pageSize: number) => void> | undefined
      onUpdatePageSize?: MaybeArray<(pageSize: number) => void> | undefined
      onPageSizeChange?: MaybeArray<(pageSize: number) => void> | undefined
    }
  >,
  {
    disabled: boolean
    defaultPage: number
    defaultPageCount: number
    showSizePicker: boolean
    defaultPageSize: number
    pageSizes: (number | PaginationSizeOption)[]
    showQuickJumper: boolean
    pageSlot: number
  }
>
export default _default