import { PropType } from 'vue'
import { CheckStrategy } from 'treemate'
import { FollowerPlacement } from 'vueuc'
import { SelectBaseOption } from '../../select/src/interface'
import type { ExtractPublicPropTypes, MaybeArray } from '../../_utils'
import {
  CascaderOption,
  ExpandTrigger,
  Filter,
  OnLoad,
  OnUpdateValue,
  Value
} from './interface'
declare const cascaderProps: {
  readonly to: {
    type: PropType<string | boolean | HTMLElement>
    default: undefined
  }
  readonly bordered: {
    readonly type: PropType<boolean | undefined>
    readonly default: undefined
  }
  readonly options: {
    readonly type: PropType<CascaderOption[]>
    readonly default: () => never[]
  }
  readonly value: PropType<Value | null>
  readonly defaultValue: {
    readonly type: PropType<Value | null>
    readonly default: null
  }
  readonly placeholder: StringConstructor
  readonly multiple: BooleanConstructor
  readonly size: PropType<'small' | 'medium' | 'large'>
  readonly filterable: BooleanConstructor
  readonly disabled: {
    readonly type: PropType<boolean | undefined>
    readonly default: undefined
  }
  readonly expandTrigger: {
    readonly type: PropType<ExpandTrigger>
    readonly default: 'click'
  }
  readonly clearable: BooleanConstructor
  readonly remote: BooleanConstructor
  readonly onLoad: PropType<OnLoad>
  readonly separator: {
    readonly type: StringConstructor
    readonly default: ' / '
  }
  readonly filter: PropType<Filter>
  readonly placement: {
    readonly type: PropType<FollowerPlacement>
    readonly default: 'bottom-start'
  }
  readonly cascade: {
    readonly type: BooleanConstructor
    readonly default: true
  }
  readonly leafOnly: BooleanConstructor
  readonly showPath: {
    readonly type: BooleanConstructor
    readonly default: true
  }
  readonly show: {
    readonly type: PropType<boolean | undefined>
    readonly default: undefined
  }
  readonly maxTagCount: PropType<number | 'responsive'>
  readonly virtualScroll: {
    readonly type: BooleanConstructor
    readonly default: true
  }
  readonly checkStrategy: {
    readonly type: PropType<CheckStrategy>
    readonly default: 'all'
  }
  readonly valueField: {
    readonly type: StringConstructor
    readonly default: 'value'
  }
  readonly labelField: {
    readonly type: StringConstructor
    readonly default: 'label'
  }
  readonly childrenField: {
    readonly type: StringConstructor
    readonly default: 'children'
  }
  readonly 'onUpdate:value': PropType<MaybeArray<OnUpdateValue>>
  readonly onUpdateValue: PropType<MaybeArray<OnUpdateValue>>
  readonly onBlur: PropType<(e: FocusEvent) => void>
  readonly onFocus: PropType<(e: FocusEvent) => void>
  readonly onChange: PropType<MaybeArray<OnUpdateValue> | undefined>
  readonly theme: PropType<
    import('../../_mixins').Theme<
      'Cascader',
      {
        menuBorderRadius: string
        menuColor: string
        menuBoxShadow: string
        menuDividerColor: string
        menuHeight: string
        optionArrowColor: string
        optionHeight: string
        optionFontSize: string
        optionColorHover: string
        optionTextColor: string
        optionTextColorActive: string
        optionTextColorDisabled: string
        optionCheckMarkColor: string
        loadingColor: string
        columnWidth: string
      },
      {
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
        Scrollbar: import('../../_mixins').Theme<
          'Scrollbar',
          {
            color: string
            colorHover: string
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
      }
    >
  >
  readonly themeOverrides: PropType<
    import('../../_mixins/use-theme').ExtractThemeOverrides<
      import('../../_mixins').Theme<
        'Cascader',
        {
          menuBorderRadius: string
          menuColor: string
          menuBoxShadow: string
          menuDividerColor: string
          menuHeight: string
          optionArrowColor: string
          optionHeight: string
          optionFontSize: string
          optionColorHover: string
          optionTextColor: string
          optionTextColorActive: string
          optionTextColorDisabled: string
          optionCheckMarkColor: string
          loadingColor: string
          columnWidth: string
        },
        {
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
          Scrollbar: import('../../_mixins').Theme<
            'Scrollbar',
            {
              color: string
              colorHover: string
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
        }
      >
    >
  >
  readonly builtinThemeOverrides: PropType<
    import('../../_mixins/use-theme').ExtractThemeOverrides<
      import('../../_mixins').Theme<
        'Cascader',
        {
          menuBorderRadius: string
          menuColor: string
          menuBoxShadow: string
          menuDividerColor: string
          menuHeight: string
          optionArrowColor: string
          optionHeight: string
          optionFontSize: string
          optionColorHover: string
          optionTextColor: string
          optionTextColorActive: string
          optionTextColorDisabled: string
          optionCheckMarkColor: string
          loadingColor: string
          columnWidth: string
        },
        {
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
          Scrollbar: import('../../_mixins').Theme<
            'Scrollbar',
            {
              color: string
              colorHover: string
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
        }
      >
    >
  >
}
export declare type CascaderProps = ExtractPublicPropTypes<typeof cascaderProps>
declare const _default: import('vue').DefineComponent<
  {
    readonly to: {
      type: PropType<string | boolean | HTMLElement>
      default: undefined
    }
    readonly bordered: {
      readonly type: PropType<boolean | undefined>
      readonly default: undefined
    }
    readonly options: {
      readonly type: PropType<CascaderOption[]>
      readonly default: () => never[]
    }
    readonly value: PropType<Value | null>
    readonly defaultValue: {
      readonly type: PropType<Value | null>
      readonly default: null
    }
    readonly placeholder: StringConstructor
    readonly multiple: BooleanConstructor
    readonly size: PropType<'small' | 'medium' | 'large'>
    readonly filterable: BooleanConstructor
    readonly disabled: {
      readonly type: PropType<boolean | undefined>
      readonly default: undefined
    }
    readonly expandTrigger: {
      readonly type: PropType<ExpandTrigger>
      readonly default: 'click'
    }
    readonly clearable: BooleanConstructor
    readonly remote: BooleanConstructor
    readonly onLoad: PropType<OnLoad>
    readonly separator: {
      readonly type: StringConstructor
      readonly default: ' / '
    }
    readonly filter: PropType<Filter>
    readonly placement: {
      readonly type: PropType<FollowerPlacement>
      readonly default: 'bottom-start'
    }
    readonly cascade: {
      readonly type: BooleanConstructor
      readonly default: true
    }
    readonly leafOnly: BooleanConstructor
    readonly showPath: {
      readonly type: BooleanConstructor
      readonly default: true
    }
    readonly show: {
      readonly type: PropType<boolean | undefined>
      readonly default: undefined
    }
    readonly maxTagCount: PropType<number | 'responsive'>
    readonly virtualScroll: {
      readonly type: BooleanConstructor
      readonly default: true
    }
    readonly checkStrategy: {
      readonly type: PropType<CheckStrategy>
      readonly default: 'all'
    }
    readonly valueField: {
      readonly type: StringConstructor
      readonly default: 'value'
    }
    readonly labelField: {
      readonly type: StringConstructor
      readonly default: 'label'
    }
    readonly childrenField: {
      readonly type: StringConstructor
      readonly default: 'children'
    }
    readonly 'onUpdate:value': PropType<MaybeArray<OnUpdateValue>>
    readonly onUpdateValue: PropType<MaybeArray<OnUpdateValue>>
    readonly onBlur: PropType<(e: FocusEvent) => void>
    readonly onFocus: PropType<(e: FocusEvent) => void>
    readonly onChange: PropType<MaybeArray<OnUpdateValue> | undefined>
    readonly theme: PropType<
      import('../../_mixins').Theme<
        'Cascader',
        {
          menuBorderRadius: string
          menuColor: string
          menuBoxShadow: string
          menuDividerColor: string
          menuHeight: string
          optionArrowColor: string
          optionHeight: string
          optionFontSize: string
          optionColorHover: string
          optionTextColor: string
          optionTextColorActive: string
          optionTextColorDisabled: string
          optionCheckMarkColor: string
          loadingColor: string
          columnWidth: string
        },
        {
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
          Scrollbar: import('../../_mixins').Theme<
            'Scrollbar',
            {
              color: string
              colorHover: string
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
        }
      >
    >
    readonly themeOverrides: PropType<
      import('../../_mixins/use-theme').ExtractThemeOverrides<
        import('../../_mixins').Theme<
          'Cascader',
          {
            menuBorderRadius: string
            menuColor: string
            menuBoxShadow: string
            menuDividerColor: string
            menuHeight: string
            optionArrowColor: string
            optionHeight: string
            optionFontSize: string
            optionColorHover: string
            optionTextColor: string
            optionTextColorActive: string
            optionTextColorDisabled: string
            optionCheckMarkColor: string
            loadingColor: string
            columnWidth: string
          },
          {
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
            Scrollbar: import('../../_mixins').Theme<
              'Scrollbar',
              {
                color: string
                colorHover: string
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
          }
        >
      >
    >
    readonly builtinThemeOverrides: PropType<
      import('../../_mixins/use-theme').ExtractThemeOverrides<
        import('../../_mixins').Theme<
          'Cascader',
          {
            menuBorderRadius: string
            menuColor: string
            menuBoxShadow: string
            menuDividerColor: string
            menuHeight: string
            optionArrowColor: string
            optionHeight: string
            optionFontSize: string
            optionColorHover: string
            optionTextColor: string
            optionTextColorActive: string
            optionTextColorDisabled: string
            optionCheckMarkColor: string
            loadingColor: string
            columnWidth: string
          },
          {
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
            Scrollbar: import('../../_mixins').Theme<
              'Scrollbar',
              {
                color: string
                colorHover: string
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
          }
        >
      >
    >
  },
  {
    selectMenuFollowerRef: import('vue').Ref<{
      syncPosition: () => void
    } | null>
    cascaderMenuFollowerRef: import('vue').Ref<{
      syncPosition: () => void
    } | null>
    triggerInstRef: import('vue').Ref<{
      focus: () => void
      focusInput: () => void
      $el: HTMLElement
    } | null>
    selectMenuInstRef: import('vue').Ref<{
      prev: () => void
      next: () => void
      enter: () => boolean
    } | null>
    cascaderMenuInstRef: import('vue').Ref<{
      $el: HTMLElement
      scroll: (depth: number, index: number, elSize: number) => void
      showErrorMessage: (label: string) => void
    } | null>
    mergedBordered: import('vue').ComputedRef<boolean>
    mergedClsPrefix: import('vue').ComputedRef<string>
    namespace: import('vue').ComputedRef<string | undefined>
    mergedValue: import('vue').ComputedRef<
      import('./interface').ValueAtom | import('./interface').ValueAtom[] | null
    >
    mergedShow: import('vue').ComputedRef<boolean>
    showSelectMenu: import('vue').ComputedRef<boolean>
    pattern: import('vue').Ref<string>
    treeMate: import('vue').ComputedRef<
      import('treemate').TreeMate<
        CascaderOption,
        CascaderOption,
        CascaderOption
      >
    >
    mergedSize: import('vue').ComputedRef<'small' | 'medium' | 'large'>
    mergedDisabled: import('vue').ComputedRef<boolean>
    localizedPlaceholder: import('vue').ComputedRef<string>
    selectedOption: import('vue').ComputedRef<{
      label: any
      value: import('treemate').Key
    } | null>
    selectedOptions: import('vue').ComputedRef<
      {
        label: any
        value: import('treemate').Key
      }[]
    >
    adjustedTo: import('vue').ComputedRef<string | HTMLElement>
    menuModel: import('vue').ComputedRef<
      import('treemate').TreeNode<
        CascaderOption,
        CascaderOption,
        CascaderOption
      >[][]
    >
    handleMenuTabout: () => void
    handleMenuFocus: (e: FocusEvent) => void
    handleMenuBlur: (e: FocusEvent) => void
    handleMenuKeyUp: (e: KeyboardEvent) => void
    handleMenuMousedown: (e: MouseEvent) => void
    handleTriggerFocus: (e: FocusEvent) => void
    handleTriggerBlur: (e: FocusEvent) => void
    handleTriggerClick: () => void
    handleClear: (e: MouseEvent) => void
    handleDeleteOption: (option: SelectBaseOption) => void
    handlePatternInput: (e: InputEvent) => void
    handleKeyDown: (e: KeyboardEvent) => void
    handleKeyUp: (e: KeyboardEvent) => void
    focused: import('vue').Ref<boolean>
    optionHeight: import('vue').ComputedRef<string>
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
        menuBorderRadius: string
        menuColor: string
        menuBoxShadow: string
        menuDividerColor: string
        menuHeight: string
        optionArrowColor: string
        optionHeight: string
        optionFontSize: string
        optionColorHover: string
        optionTextColor: string
        optionTextColorActive: string
        optionTextColorDisabled: string
        optionCheckMarkColor: string
        loadingColor: string
        columnWidth: string
      }
      peers: {
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
        Scrollbar: import('../../_mixins').Theme<
          'Scrollbar',
          {
            color: string
            colorHover: string
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
      }
      peerOverrides: {
        InternalSelectMenu?:
          | {
              peers?:
                | {
                    Scrollbar?:
                      | import('../../_mixins/use-theme').ExtractThemeOverrides<
                          import('../../_mixins').Theme<
                            'Scrollbar',
                            {
                              color: string
                              colorHover: string
                            },
                            any
                          >
                        >
                      | undefined
                    Empty?:
                      | import('../../_mixins/use-theme').ExtractThemeOverrides<
                          import('../../_mixins').Theme<
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
                        >
                      | undefined
                  }
                | undefined
            }
          | undefined
        InternalSelection?:
          | {
              peers?:
                | {
                    Popover?:
                      | import('../../_mixins/use-theme').ExtractThemeOverrides<
                          import('../../_mixins').Theme<
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
        Checkbox?:
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
    cssVars: import('vue').ComputedRef<{
      '--bezier': string
      '--menu-border-radius': string
      '--menu-box-shadow': string
      '--menu-height': string
      '--column-width': string
      '--menu-color': string
      '--menu-divider-color': string
      '--option-height': string
      '--option-font-size': string
      '--option-text-color': string
      '--option-text-color-disabled': string
      '--option-text-color-active': string
      '--option-color-hover': string
      '--option-check-mark-color': string
      '--option-arrow-color': string
      '--menu-mask-color': string
      '--loading-color': string
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
      readonly to?: unknown
      readonly bordered?: unknown
      readonly options?: unknown
      readonly value?: unknown
      readonly defaultValue?: unknown
      readonly placeholder?: unknown
      readonly multiple?: unknown
      readonly size?: unknown
      readonly filterable?: unknown
      readonly disabled?: unknown
      readonly expandTrigger?: unknown
      readonly clearable?: unknown
      readonly remote?: unknown
      readonly onLoad?: unknown
      readonly separator?: unknown
      readonly filter?: unknown
      readonly placement?: unknown
      readonly cascade?: unknown
      readonly leafOnly?: unknown
      readonly showPath?: unknown
      readonly show?: unknown
      readonly maxTagCount?: unknown
      readonly virtualScroll?: unknown
      readonly checkStrategy?: unknown
      readonly valueField?: unknown
      readonly labelField?: unknown
      readonly childrenField?: unknown
      readonly 'onUpdate:value'?: unknown
      readonly onUpdateValue?: unknown
      readonly onBlur?: unknown
      readonly onFocus?: unknown
      readonly onChange?: unknown
      readonly theme?: unknown
      readonly themeOverrides?: unknown
      readonly builtinThemeOverrides?: unknown
    } & {
      separator: string
      multiple: boolean
      placement: FollowerPlacement
      virtualScroll: boolean
      filterable: boolean
      clearable: boolean
      options: CascaderOption[]
      defaultValue: Value | null
      remote: boolean
      expandTrigger: ExpandTrigger
      cascade: boolean
      labelField: string
      childrenField: string
      checkStrategy: CheckStrategy
      leafOnly: boolean
      showPath: boolean
      valueField: string
    } & {
      value?: Value | null | undefined
      filter?: Filter | undefined
      size?: 'small' | 'medium' | 'large' | undefined
      show?: boolean | undefined
      disabled?: boolean | undefined
      onFocus?: ((e: FocusEvent) => void) | undefined
      onBlur?: ((e: FocusEvent) => void) | undefined
      onChange?: MaybeArray<OnUpdateValue> | undefined
      onLoad?: OnLoad | undefined
      placeholder?: string | undefined
      to?: string | boolean | HTMLElement | undefined
      theme?:
        | import('../../_mixins').Theme<
            'Cascader',
            {
              menuBorderRadius: string
              menuColor: string
              menuBoxShadow: string
              menuDividerColor: string
              menuHeight: string
              optionArrowColor: string
              optionHeight: string
              optionFontSize: string
              optionColorHover: string
              optionTextColor: string
              optionTextColorActive: string
              optionTextColorDisabled: string
              optionCheckMarkColor: string
              loadingColor: string
              columnWidth: string
            },
            {
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
              Scrollbar: import('../../_mixins').Theme<
                'Scrollbar',
                {
                  color: string
                  colorHover: string
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
            }
          >
        | undefined
      themeOverrides?:
        | import('../../_mixins/use-theme').ExtractThemeOverrides<
            import('../../_mixins').Theme<
              'Cascader',
              {
                menuBorderRadius: string
                menuColor: string
                menuBoxShadow: string
                menuDividerColor: string
                menuHeight: string
                optionArrowColor: string
                optionHeight: string
                optionFontSize: string
                optionColorHover: string
                optionTextColor: string
                optionTextColorActive: string
                optionTextColorDisabled: string
                optionCheckMarkColor: string
                loadingColor: string
                columnWidth: string
              },
              {
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
                Scrollbar: import('../../_mixins').Theme<
                  'Scrollbar',
                  {
                    color: string
                    colorHover: string
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
              }
            >
          >
        | undefined
      builtinThemeOverrides?:
        | import('../../_mixins/use-theme').ExtractThemeOverrides<
            import('../../_mixins').Theme<
              'Cascader',
              {
                menuBorderRadius: string
                menuColor: string
                menuBoxShadow: string
                menuDividerColor: string
                menuHeight: string
                optionArrowColor: string
                optionHeight: string
                optionFontSize: string
                optionColorHover: string
                optionTextColor: string
                optionTextColorActive: string
                optionTextColorDisabled: string
                optionCheckMarkColor: string
                loadingColor: string
                columnWidth: string
              },
              {
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
                Scrollbar: import('../../_mixins').Theme<
                  'Scrollbar',
                  {
                    color: string
                    colorHover: string
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
              }
            >
          >
        | undefined
      bordered?: boolean | undefined
      maxTagCount?: number | 'responsive' | undefined
      'onUpdate:value'?: MaybeArray<OnUpdateValue> | undefined
      onUpdateValue?: MaybeArray<OnUpdateValue> | undefined
    }
  >,
  {
    show: boolean | undefined
    separator: string
    multiple: boolean
    disabled: boolean | undefined
    to: string | boolean | HTMLElement
    placement: FollowerPlacement
    bordered: boolean | undefined
    virtualScroll: boolean
    filterable: boolean
    clearable: boolean
    options: CascaderOption[]
    defaultValue: Value | null
    remote: boolean
    expandTrigger: ExpandTrigger
    cascade: boolean
    labelField: string
    childrenField: string
    checkStrategy: CheckStrategy
    leafOnly: boolean
    showPath: boolean
    valueField: string
  }
>
export default _default
