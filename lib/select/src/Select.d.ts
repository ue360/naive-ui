import { PropType, InputHTMLAttributes, HTMLAttributes } from 'vue'
import { TreeNode } from 'treemate'
import { FollowerPlacement } from 'vueuc'
import {
  RenderLabel,
  RenderOption
} from '../../_internal/select-menu/src/interface'
import { RenderTag } from '../../_internal/selection/src/interface'
import { ExtractPublicPropTypes } from '../../_utils'
import type { MaybeArray } from '../../_utils'
import { defaultFilter } from './utils'
import type {
  SelectMixedOption,
  SelectBaseOption,
  SelectGroupOption,
  SelectIgnoredOption,
  OnUpdateValue,
  Value,
  Size,
  ValueAtom
} from './interface'
declare const selectProps: {
  readonly to: {
    type: PropType<string | boolean | HTMLElement>
    default: undefined
  }
  readonly bordered: {
    readonly type: PropType<boolean | undefined>
    readonly default: undefined
  }
  readonly clearable: BooleanConstructor
  readonly options: {
    readonly type: PropType<SelectMixedOption[]>
    readonly default: () => never[]
  }
  readonly defaultValue: {
    readonly type: PropType<Value | null>
    readonly default: null
  }
  readonly value: PropType<Value | null>
  readonly placeholder: StringConstructor
  readonly menuProps: PropType<HTMLAttributes>
  readonly multiple: BooleanConstructor
  readonly size: PropType<Size>
  readonly filterable: BooleanConstructor
  readonly disabled: {
    readonly type: PropType<boolean | undefined>
    readonly default: undefined
  }
  readonly remote: BooleanConstructor
  readonly loading: BooleanConstructor
  readonly filter: {
    readonly type: PropType<
      (pattern: string, option: SelectBaseOption) => boolean
    >
    readonly default: typeof defaultFilter
  }
  readonly placement: {
    readonly type: PropType<FollowerPlacement>
    readonly default: 'bottom-start'
  }
  readonly widthMode: {
    readonly type: StringConstructor
    readonly default: 'trigger'
  }
  readonly tag: BooleanConstructor
  readonly onCreate: {
    readonly type: PropType<(label: string) => SelectBaseOption>
    readonly default: (label: string) => {
      label: string
      value: string
    }
  }
  readonly fallbackOption: {
    readonly type: PropType<
      false | ((value: string | number) => SelectBaseOption)
    >
    readonly default: () => (value: string | number) => {
      label: string
      value: string | number
    }
  }
  readonly show: {
    readonly type: PropType<boolean | undefined>
    readonly default: undefined
  }
  readonly showArrow: {
    readonly type: BooleanConstructor
    readonly default: true
  }
  readonly maxTagCount: PropType<number | 'responsive'>
  readonly consistentMenuWidth: {
    readonly type: BooleanConstructor
    readonly default: true
  }
  readonly virtualScroll: {
    readonly type: BooleanConstructor
    readonly default: true
  }
  readonly renderLabel: PropType<RenderLabel>
  readonly renderOption: PropType<RenderOption>
  readonly renderTag: PropType<RenderTag>
  readonly 'onUpdate:value': PropType<MaybeArray<OnUpdateValue> | undefined>
  readonly inputProps: PropType<InputHTMLAttributes>
  readonly onUpdateValue: PropType<MaybeArray<OnUpdateValue> | undefined>
  readonly onBlur: PropType<MaybeArray<(e: FocusEvent) => void> | undefined>
  readonly onClear: PropType<MaybeArray<() => void> | undefined>
  readonly onFocus: PropType<MaybeArray<(e: FocusEvent) => void> | undefined>
  readonly onScroll: PropType<MaybeArray<(e: Event) => void> | undefined>
  readonly onSearch: PropType<MaybeArray<(value: string) => void> | undefined>
  readonly onUpdateShow: PropType<MaybeArray<(value: boolean) => void>>
  readonly 'onUpdate:show': PropType<MaybeArray<(value: boolean) => void>>
  /** deprecated */
  readonly onChange: {
    readonly type: PropType<MaybeArray<OnUpdateValue> | undefined>
    readonly validator: () => boolean
    readonly default: undefined
  }
  readonly items: {
    readonly type: PropType<SelectMixedOption[] | undefined>
    readonly validator: () => boolean
    readonly default: undefined
  }
  readonly displayDirective: {
    readonly type: PropType<'show' | 'if'>
    readonly default: 'show'
  }
  readonly theme: PropType<
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
  readonly themeOverrides: PropType<
    import('../../_mixins/use-theme').ExtractThemeOverrides<
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
  >
  readonly builtinThemeOverrides: PropType<
    import('../../_mixins/use-theme').ExtractThemeOverrides<
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
  >
}
export declare type SelectProps = ExtractPublicPropTypes<typeof selectProps>
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
    readonly clearable: BooleanConstructor
    readonly options: {
      readonly type: PropType<SelectMixedOption[]>
      readonly default: () => never[]
    }
    readonly defaultValue: {
      readonly type: PropType<Value | null>
      readonly default: null
    }
    readonly value: PropType<Value | null>
    readonly placeholder: StringConstructor
    readonly menuProps: PropType<HTMLAttributes>
    readonly multiple: BooleanConstructor
    readonly size: PropType<Size>
    readonly filterable: BooleanConstructor
    readonly disabled: {
      readonly type: PropType<boolean | undefined>
      readonly default: undefined
    }
    readonly remote: BooleanConstructor
    readonly loading: BooleanConstructor
    readonly filter: {
      readonly type: PropType<
        (
          pattern: string,
          option: SelectBaseOption<
            string | number,
            | string
            | ((
                option: SelectBaseOption<string | number, string | any>,
                selected: boolean
              ) => import('vue').VNodeChild)
          >
        ) => boolean
      >
      readonly default: typeof defaultFilter
    }
    readonly placement: {
      readonly type: PropType<FollowerPlacement>
      readonly default: 'bottom-start'
    }
    readonly widthMode: {
      readonly type: StringConstructor
      readonly default: 'trigger'
    }
    readonly tag: BooleanConstructor
    readonly onCreate: {
      readonly type: PropType<
        (
          label: string
        ) => SelectBaseOption<
          string | number,
          | string
          | ((
              option: SelectBaseOption<string | number, string | any>,
              selected: boolean
            ) => import('vue').VNodeChild)
        >
      >
      readonly default: (label: string) => {
        label: string
        value: string
      }
    }
    readonly fallbackOption: {
      readonly type: PropType<
        | false
        | ((
            value: string | number
          ) => SelectBaseOption<
            string | number,
            | string
            | ((
                option: SelectBaseOption<string | number, string | any>,
                selected: boolean
              ) => import('vue').VNodeChild)
          >)
      >
      readonly default: () => (value: string | number) => {
        label: string
        value: string | number
      }
    }
    readonly show: {
      readonly type: PropType<boolean | undefined>
      readonly default: undefined
    }
    readonly showArrow: {
      readonly type: BooleanConstructor
      readonly default: true
    }
    readonly maxTagCount: PropType<number | 'responsive'>
    readonly consistentMenuWidth: {
      readonly type: BooleanConstructor
      readonly default: true
    }
    readonly virtualScroll: {
      readonly type: BooleanConstructor
      readonly default: true
    }
    readonly renderLabel: PropType<RenderLabel>
    readonly renderOption: PropType<RenderOption>
    readonly renderTag: PropType<RenderTag>
    readonly 'onUpdate:value': PropType<MaybeArray<OnUpdateValue> | undefined>
    readonly inputProps: PropType<InputHTMLAttributes>
    readonly onUpdateValue: PropType<MaybeArray<OnUpdateValue> | undefined>
    readonly onBlur: PropType<MaybeArray<(e: FocusEvent) => void> | undefined>
    readonly onClear: PropType<MaybeArray<() => void> | undefined>
    readonly onFocus: PropType<MaybeArray<(e: FocusEvent) => void> | undefined>
    readonly onScroll: PropType<MaybeArray<(e: Event) => void> | undefined>
    readonly onSearch: PropType<MaybeArray<(value: string) => void> | undefined>
    readonly onUpdateShow: PropType<MaybeArray<(value: boolean) => void>>
    readonly 'onUpdate:show': PropType<MaybeArray<(value: boolean) => void>>
    /** deprecated */
    readonly onChange: {
      readonly type: PropType<MaybeArray<OnUpdateValue> | undefined>
      readonly validator: () => boolean
      readonly default: undefined
    }
    readonly items: {
      readonly type: PropType<SelectMixedOption[] | undefined>
      readonly validator: () => boolean
      readonly default: undefined
    }
    readonly displayDirective: {
      readonly type: PropType<'show' | 'if'>
      readonly default: 'show'
    }
    readonly theme: PropType<
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
    readonly themeOverrides: PropType<
      import('../../_mixins/use-theme').ExtractThemeOverrides<
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
    >
    readonly builtinThemeOverrides: PropType<
      import('../../_mixins/use-theme').ExtractThemeOverrides<
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
    >
  },
  {
    mergedClsPrefix: import('vue').ComputedRef<string>
    mergedBordered: import('vue').ComputedRef<boolean>
    namespace: import('vue').ComputedRef<string | undefined>
    treeMate: import('vue').ComputedRef<
      import('treemate').TreeMate<
        SelectBaseOption<
          string | number,
          | string
          | ((
              option: SelectBaseOption<string | number, string | any>,
              selected: boolean
            ) => import('vue').VNodeChild)
        >,
        SelectGroupOption,
        SelectIgnoredOption
      >
    >
    isMounted: Readonly<import('vue').Ref<boolean>>
    triggerRef: import('vue').Ref<{
      focus: () => void
      focusInput: () => void
      $el: HTMLElement
    } | null>
    menuRef: import('vue').Ref<{
      selfRef: HTMLElement | null
      getPendingTmNode: () => TreeNode<
        SelectBaseOption<
          string | number,
          | string
          | ((
              option: SelectBaseOption<string | number, string | any>,
              selected: boolean
            ) => import('vue').VNodeChild)
        >,
        SelectBaseOption<
          string | number,
          | string
          | ((
              option: SelectBaseOption<string | number, string | any>,
              selected: boolean
            ) => import('vue').VNodeChild)
        >,
        SelectBaseOption<
          string | number,
          | string
          | ((
              option: SelectBaseOption<string | number, string | any>,
              selected: boolean
            ) => import('vue').VNodeChild)
        >
      > | null
      prev: () => void
      next: () => void
    } | null>
    pattern: import('vue').Ref<string>
    uncontrolledShow: import('vue').Ref<boolean>
    mergedShow: import('vue').ComputedRef<boolean>
    adjustedTo: import('vue').ComputedRef<string | HTMLElement>
    uncontrolledValue: import('vue').Ref<
      string[] | number[] | ValueAtom | ValueAtom[] | null
    >
    mergedValue: import('vue').ComputedRef<
      string[] | number[] | ValueAtom | ValueAtom[] | null
    >
    followerRef: import('vue').Ref<{
      syncPosition: () => void
    } | null>
    localizedPlaceholder: import('vue').ComputedRef<string>
    selectedOption: import('vue').ComputedRef<SelectBaseOption<
      string | number,
      | string
      | ((
          option: SelectBaseOption<string | number, string | any>,
          selected: boolean
        ) => import('vue').VNodeChild)
    > | null>
    selectedOptions: import('vue').ComputedRef<
      | SelectBaseOption<
          string | number,
          | string
          | ((
              option: SelectBaseOption<string | number, string | any>,
              selected: boolean
            ) => import('vue').VNodeChild)
        >[]
      | null
    >
    mergedSize: import('vue').ComputedRef<'small' | 'medium' | 'large'>
    mergedDisabled: import('vue').ComputedRef<boolean>
    focused: import('vue').Ref<boolean>
    handleMenuFocus: (e: FocusEvent) => void
    handleMenuBlur: (e: FocusEvent) => void
    handleMenuTabOut: () => void
    handleTriggerClick: () => void
    handleToggle: (tmNode: TreeNode<SelectBaseOption>) => void
    handleDeleteOption: (option: SelectBaseOption) => void
    handlePatternInput: (e: InputEvent) => void
    handleClear: (e: MouseEvent) => void
    handleTriggerBlur: (e: FocusEvent) => void
    handleTriggerFocus: (e: FocusEvent) => void
    handleKeyDown: (e: KeyboardEvent) => void
    handleKeyUp: (e: KeyboardEvent) => void
    syncPosition: () => void
    handleMenuAfterLeave: () => void
    handleMenuClickOutside: (e: MouseEvent) => void
    handleMenuScroll: (e: Event) => void
    handleMenuKeyup: (e: KeyboardEvent) => void
    handleMenuKeydown: (e: KeyboardEvent) => void
    handleMenuMousedown: (e: MouseEvent) => void
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
        menuBoxShadow: string
      }
      peers: {
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
      peerOverrides: {
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
      }
    }>
    cssVars: import('vue').ComputedRef<{
      '--menu-box-shadow': string
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
      readonly clearable?: unknown
      readonly options?: unknown
      readonly defaultValue?: unknown
      readonly value?: unknown
      readonly placeholder?: unknown
      readonly menuProps?: unknown
      readonly multiple?: unknown
      readonly size?: unknown
      readonly filterable?: unknown
      readonly disabled?: unknown
      readonly remote?: unknown
      readonly loading?: unknown
      readonly filter?: unknown
      readonly placement?: unknown
      readonly widthMode?: unknown
      readonly tag?: unknown
      readonly onCreate?: unknown
      readonly fallbackOption?: unknown
      readonly show?: unknown
      readonly showArrow?: unknown
      readonly maxTagCount?: unknown
      readonly consistentMenuWidth?: unknown
      readonly virtualScroll?: unknown
      readonly renderLabel?: unknown
      readonly renderOption?: unknown
      readonly renderTag?: unknown
      readonly 'onUpdate:value'?: unknown
      readonly inputProps?: unknown
      readonly onUpdateValue?: unknown
      readonly onBlur?: unknown
      readonly onClear?: unknown
      readonly onFocus?: unknown
      readonly onScroll?: unknown
      readonly onSearch?: unknown
      readonly onUpdateShow?: unknown
      readonly 'onUpdate:show'?: unknown
      readonly onChange?: unknown
      readonly items?: unknown
      readonly displayDirective?: unknown
      readonly theme?: unknown
      readonly themeOverrides?: unknown
      readonly builtinThemeOverrides?: unknown
    } & {
      tag: boolean
      filter: (
        pattern: string,
        option: SelectBaseOption<
          string | number,
          | string
          | ((
              option: SelectBaseOption<string | number, string | any>,
              selected: boolean
            ) => import('vue').VNodeChild)
        >
      ) => boolean
      multiple: boolean
      loading: boolean
      placement: FollowerPlacement
      virtualScroll: boolean
      showArrow: boolean
      displayDirective: 'show' | 'if'
      filterable: boolean
      clearable: boolean
      options: SelectMixedOption[]
      defaultValue: Value | null
      remote: boolean
      widthMode: string
      onCreate: (
        label: string
      ) => SelectBaseOption<
        string | number,
        | string
        | ((
            option: SelectBaseOption<string | number, string | any>,
            selected: boolean
          ) => import('vue').VNodeChild)
      >
      fallbackOption:
        | false
        | ((
            value: string | number
          ) => SelectBaseOption<
            string | number,
            | string
            | ((
                option: SelectBaseOption<string | number, string | any>,
                selected: boolean
              ) => import('vue').VNodeChild)
          >)
      consistentMenuWidth: boolean
    } & {
      value?: Value | null | undefined
      size?: Size | undefined
      show?: boolean | undefined
      disabled?: boolean | undefined
      onFocus?: MaybeArray<(e: FocusEvent) => void> | undefined
      onBlur?: MaybeArray<(e: FocusEvent) => void> | undefined
      onChange?: MaybeArray<OnUpdateValue> | undefined
      onScroll?: MaybeArray<(e: Event) => void> | undefined
      placeholder?: string | undefined
      to?: string | boolean | HTMLElement | undefined
      theme?:
        | import('../../_mixins').Theme<
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
        | undefined
      themeOverrides?:
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
      builtinThemeOverrides?:
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
      items?: SelectMixedOption[] | undefined
      bordered?: boolean | undefined
      renderLabel?: RenderLabel | undefined
      renderOption?: RenderOption | undefined
      'onUpdate:show'?: MaybeArray<(value: boolean) => void> | undefined
      onUpdateShow?: MaybeArray<(value: boolean) => void> | undefined
      onClear?: MaybeArray<() => void> | undefined
      inputProps?: InputHTMLAttributes | undefined
      renderTag?: RenderTag | undefined
      maxTagCount?: number | 'responsive' | undefined
      menuProps?: HTMLAttributes | undefined
      'onUpdate:value'?: MaybeArray<OnUpdateValue> | undefined
      onUpdateValue?: MaybeArray<OnUpdateValue> | undefined
      onSearch?: MaybeArray<(value: string) => void> | undefined
    }
  >,
  {
    tag: boolean
    filter: (
      pattern: string,
      option: SelectBaseOption<
        string | number,
        | string
        | ((
            option: SelectBaseOption<string | number, string | any>,
            selected: boolean
          ) => import('vue').VNodeChild)
      >
    ) => boolean
    show: boolean | undefined
    multiple: boolean
    disabled: boolean | undefined
    onChange: MaybeArray<OnUpdateValue> | undefined
    to: string | boolean | HTMLElement
    loading: boolean
    placement: FollowerPlacement
    items: SelectMixedOption[] | undefined
    bordered: boolean | undefined
    virtualScroll: boolean
    showArrow: boolean
    displayDirective: 'show' | 'if'
    filterable: boolean
    clearable: boolean
    options: SelectMixedOption[]
    defaultValue: Value | null
    remote: boolean
    widthMode: string
    onCreate: (
      label: string
    ) => SelectBaseOption<
      string | number,
      | string
      | ((
          option: SelectBaseOption<string | number, string | any>,
          selected: boolean
        ) => import('vue').VNodeChild)
    >
    fallbackOption:
      | false
      | ((
          value: string | number
        ) => SelectBaseOption<
          string | number,
          | string
          | ((
              option: SelectBaseOption<string | number, string | any>,
              selected: boolean
            ) => import('vue').VNodeChild)
        >)
    consistentMenuWidth: boolean
  }
>
export default _default
