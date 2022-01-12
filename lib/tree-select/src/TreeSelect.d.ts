import { PropType } from 'vue'
import { FollowerPlacement } from 'vueuc'
import { CheckStrategy } from 'treemate'
import { Key } from '../../tree/src/interface'
import type { SelectBaseOption } from '../../select/src/interface'
import { ExtractPublicPropTypes, MaybeArray } from '../../_utils'
import type { OnUpdateValue, TreeSelectOption, Value } from './interface'
declare const props: {
  readonly onBlur: PropType<(e: FocusEvent) => void>
  readonly onFocus: PropType<(e: FocusEvent) => void>
  readonly onUpdateShow: PropType<MaybeArray<(show: boolean) => void>>
  readonly onUpdateValue: PropType<MaybeArray<OnUpdateValue>>
  readonly 'onUpdate:value': PropType<MaybeArray<OnUpdateValue>>
  readonly 'onUpdate:show': PropType<MaybeArray<(show: boolean) => void>>
  /**
   * @deprecated
   */
  readonly leafOnly: {
    readonly type: BooleanConstructor
    readonly default: undefined
  }
  readonly filter: PropType<
    (pattern: string, node: import('../../tree').TreeOption) => boolean
  >
  readonly defaultExpandAll: BooleanConstructor
  readonly expandedKeys: PropType<Key[]>
  readonly keyField: {
    readonly type: StringConstructor
    readonly default: 'key'
  }
  readonly labelField: {
    readonly type: StringConstructor
    readonly default: 'label'
  }
  readonly childrenField: {
    readonly type: StringConstructor
    readonly default: 'children'
  }
  readonly defaultExpandedKeys: {
    readonly type: PropType<Key[]>
    readonly default: () => never[]
  }
  readonly indeterminateKeys: PropType<Key[]>
  readonly onUpdateIndeterminateKeys: PropType<
    MaybeArray<
      (value: Key[], option: (import('../../tree').TreeOption | null)[]) => void
    >
  >
  readonly 'onUpdate:indeterminateKeys': PropType<
    MaybeArray<
      (value: Key[], option: (import('../../tree').TreeOption | null)[]) => void
    >
  >
  readonly onUpdateExpandedKeys: PropType<
    MaybeArray<
      (value: Key[], option: (import('../../tree').TreeOption | null)[]) => void
    >
  >
  readonly 'onUpdate:expandedKeys': PropType<
    MaybeArray<
      (value: Key[], option: (import('../../tree').TreeOption | null)[]) => void
    >
  >
  readonly bordered: {
    readonly type: BooleanConstructor
    readonly default: true
  }
  readonly cascade: BooleanConstructor
  readonly checkable: BooleanConstructor
  readonly clearable: BooleanConstructor
  readonly consistentMenuWidth: {
    readonly type: BooleanConstructor
    readonly default: true
  }
  readonly defaultShow: BooleanConstructor
  readonly defaultValue: {
    readonly type: PropType<string | number | (string | number)[] | null>
    readonly default: null
  }
  readonly disabled: {
    readonly type: PropType<boolean | undefined>
    readonly default: undefined
  }
  readonly filterable: BooleanConstructor
  readonly checkStrategy: {
    readonly type: PropType<CheckStrategy>
    readonly default: 'all'
  }
  readonly maxTagCount: PropType<number | 'responsive'>
  readonly multiple: BooleanConstructor
  readonly showPath: BooleanConstructor
  readonly separator: {
    readonly type: StringConstructor
    readonly default: ' / '
  }
  readonly options: {
    readonly type: PropType<TreeSelectOption[]>
    readonly default: () => never[]
  }
  readonly placeholder: StringConstructor
  readonly placement: {
    readonly type: PropType<FollowerPlacement>
    readonly default: 'bottom-start'
  }
  readonly show: {
    readonly type: PropType<boolean | undefined>
    readonly default: undefined
  }
  readonly size: PropType<'small' | 'medium' | 'large'>
  readonly value: PropType<string | number | (string | number)[] | null>
  readonly to: {
    type: PropType<string | boolean | HTMLElement>
    default: undefined
  }
  readonly virtualScroll: {
    readonly type: BooleanConstructor
    readonly default: true
  }
  readonly theme: PropType<
    import('../../_mixins').Theme<
      'TreeSelect',
      {
        menuPadding: string
        menuColor: string
        menuBoxShadow: string
        menuBorderRadius: string
        menuHeight: string
      },
      {
        Tree: import('../../_mixins').Theme<
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
            Scrollbar: import('../../_mixins').Theme<
              'Scrollbar',
              {
                color: string
                colorHover: string
              },
              any
            >
          }
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
      }
    >
  >
  readonly themeOverrides: PropType<
    import('../../_mixins/use-theme').ExtractThemeOverrides<
      import('../../_mixins').Theme<
        'TreeSelect',
        {
          menuPadding: string
          menuColor: string
          menuBoxShadow: string
          menuBorderRadius: string
          menuHeight: string
        },
        {
          Tree: import('../../_mixins').Theme<
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
              Scrollbar: import('../../_mixins').Theme<
                'Scrollbar',
                {
                  color: string
                  colorHover: string
                },
                any
              >
            }
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
        }
      >
    >
  >
  readonly builtinThemeOverrides: PropType<
    import('../../_mixins/use-theme').ExtractThemeOverrides<
      import('../../_mixins').Theme<
        'TreeSelect',
        {
          menuPadding: string
          menuColor: string
          menuBoxShadow: string
          menuBorderRadius: string
          menuHeight: string
        },
        {
          Tree: import('../../_mixins').Theme<
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
              Scrollbar: import('../../_mixins').Theme<
                'Scrollbar',
                {
                  color: string
                  colorHover: string
                },
                any
              >
            }
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
        }
      >
    >
  >
}
export declare type TreeSelectProps = ExtractPublicPropTypes<typeof props>
declare const _default: import('vue').DefineComponent<
  {
    readonly onBlur: PropType<(e: FocusEvent) => void>
    readonly onFocus: PropType<(e: FocusEvent) => void>
    readonly onUpdateShow: PropType<MaybeArray<(show: boolean) => void>>
    readonly onUpdateValue: PropType<MaybeArray<OnUpdateValue>>
    readonly 'onUpdate:value': PropType<MaybeArray<OnUpdateValue>>
    readonly 'onUpdate:show': PropType<MaybeArray<(show: boolean) => void>>
    /**
     * @deprecated
     */
    readonly leafOnly: {
      readonly type: BooleanConstructor
      readonly default: undefined
    }
    readonly filter: PropType<
      (pattern: string, node: import('../../tree').TreeOption) => boolean
    >
    readonly defaultExpandAll: BooleanConstructor
    readonly expandedKeys: PropType<Key[]>
    readonly keyField: {
      readonly type: StringConstructor
      readonly default: 'key'
    }
    readonly labelField: {
      readonly type: StringConstructor
      readonly default: 'label'
    }
    readonly childrenField: {
      readonly type: StringConstructor
      readonly default: 'children'
    }
    readonly defaultExpandedKeys: {
      readonly type: PropType<Key[]>
      readonly default: () => never[]
    }
    readonly indeterminateKeys: PropType<Key[]>
    readonly onUpdateIndeterminateKeys: PropType<
      MaybeArray<
        (
          value: Key[],
          option: (import('../../tree').TreeOption | null)[]
        ) => void
      >
    >
    readonly 'onUpdate:indeterminateKeys': PropType<
      MaybeArray<
        (
          value: Key[],
          option: (import('../../tree').TreeOption | null)[]
        ) => void
      >
    >
    readonly onUpdateExpandedKeys: PropType<
      MaybeArray<
        (
          value: Key[],
          option: (import('../../tree').TreeOption | null)[]
        ) => void
      >
    >
    readonly 'onUpdate:expandedKeys': PropType<
      MaybeArray<
        (
          value: Key[],
          option: (import('../../tree').TreeOption | null)[]
        ) => void
      >
    >
    readonly bordered: {
      readonly type: BooleanConstructor
      readonly default: true
    }
    readonly cascade: BooleanConstructor
    readonly checkable: BooleanConstructor
    readonly clearable: BooleanConstructor
    readonly consistentMenuWidth: {
      readonly type: BooleanConstructor
      readonly default: true
    }
    readonly defaultShow: BooleanConstructor
    readonly defaultValue: {
      readonly type: PropType<string | number | (string | number)[] | null>
      readonly default: null
    }
    readonly disabled: {
      readonly type: PropType<boolean | undefined>
      readonly default: undefined
    }
    readonly filterable: BooleanConstructor
    readonly checkStrategy: {
      readonly type: PropType<CheckStrategy>
      readonly default: 'all'
    }
    readonly maxTagCount: PropType<number | 'responsive'>
    readonly multiple: BooleanConstructor
    readonly showPath: BooleanConstructor
    readonly separator: {
      readonly type: StringConstructor
      readonly default: ' / '
    }
    readonly options: {
      readonly type: PropType<TreeSelectOption[]>
      readonly default: () => never[]
    }
    readonly placeholder: StringConstructor
    readonly placement: {
      readonly type: PropType<FollowerPlacement>
      readonly default: 'bottom-start'
    }
    readonly show: {
      readonly type: PropType<boolean | undefined>
      readonly default: undefined
    }
    readonly size: PropType<'small' | 'medium' | 'large'>
    readonly value: PropType<string | number | (string | number)[] | null>
    readonly to: {
      type: PropType<string | boolean | HTMLElement>
      default: undefined
    }
    readonly virtualScroll: {
      readonly type: BooleanConstructor
      readonly default: true
    }
    readonly theme: PropType<
      import('../../_mixins').Theme<
        'TreeSelect',
        {
          menuPadding: string
          menuColor: string
          menuBoxShadow: string
          menuBorderRadius: string
          menuHeight: string
        },
        {
          Tree: import('../../_mixins').Theme<
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
              Scrollbar: import('../../_mixins').Theme<
                'Scrollbar',
                {
                  color: string
                  colorHover: string
                },
                any
              >
            }
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
        }
      >
    >
    readonly themeOverrides: PropType<
      import('../../_mixins/use-theme').ExtractThemeOverrides<
        import('../../_mixins').Theme<
          'TreeSelect',
          {
            menuPadding: string
            menuColor: string
            menuBoxShadow: string
            menuBorderRadius: string
            menuHeight: string
          },
          {
            Tree: import('../../_mixins').Theme<
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
                Scrollbar: import('../../_mixins').Theme<
                  'Scrollbar',
                  {
                    color: string
                    colorHover: string
                  },
                  any
                >
              }
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
          }
        >
      >
    >
    readonly builtinThemeOverrides: PropType<
      import('../../_mixins/use-theme').ExtractThemeOverrides<
        import('../../_mixins').Theme<
          'TreeSelect',
          {
            menuPadding: string
            menuColor: string
            menuBoxShadow: string
            menuBorderRadius: string
            menuHeight: string
          },
          {
            Tree: import('../../_mixins').Theme<
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
                Scrollbar: import('../../_mixins').Theme<
                  'Scrollbar',
                  {
                    color: string
                    colorHover: string
                  },
                  any
                >
              }
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
          }
        >
      >
    >
  },
  {
    menuElRef: import('vue').Ref<HTMLDivElement | null>
    triggerInstRef: import('vue').Ref<{
      focus: () => void
      focusInput: () => void
      $el: HTMLElement
    } | null>
    followerInstRef: import('vue').Ref<{
      syncPosition: () => void
    } | null>
    treeInstRef: import('vue').Ref<{
      handleKeyup: (e: KeyboardEvent) => void
      handleKeydown: (e: KeyboardEvent) => void
    } | null>
    mergedClsPrefix: import('vue').ComputedRef<string>
    mergedValue: import('vue').ComputedRef<Value>
    mergedShow: import('vue').ComputedRef<boolean>
    namespace: import('vue').ComputedRef<string | undefined>
    adjustedTo: import('vue').ComputedRef<string | HTMLElement>
    isMounted: Readonly<import('vue').Ref<boolean>>
    focused: import('vue').Ref<boolean>
    filteredTreeInfo: import('vue').ComputedRef<{
      filteredTree: TreeSelectOption[]
      highlightKeySet: Set<Key> | undefined
      expandedKeys: Key[] | undefined
    }>
    dataTreeMate: import('vue').ComputedRef<
      import('treemate').TreeMate<
        TreeSelectOption,
        TreeSelectOption,
        TreeSelectOption
      >
    >
    displayTreeMate: import('vue').ComputedRef<
      import('treemate').TreeMate<
        TreeSelectOption,
        TreeSelectOption,
        TreeSelectOption
      >
    >
    menuPadding: import('vue').ComputedRef<string>
    mergedPlaceholder: import('vue').ComputedRef<string>
    mergedExpandedKeys: import('vue').ComputedRef<import('treemate').Key[]>
    treeSelectedKeys: import('vue').ComputedRef<Key[]>
    treeCheckedKeys: import('vue').ComputedRef<Key[]>
    mergedSize: import('vue').ComputedRef<'small' | 'medium' | 'large'>
    mergedDisabled: import('vue').ComputedRef<boolean>
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
    pattern: import('vue').Ref<string>
    pendingNodeKey: import('vue').Ref<string | number | null>
    mergedCascade: import('vue').ComputedRef<boolean>
    doUpdateExpandedKeys: (
      keys: Key[],
      option: Array<TreeSelectOption | null>
    ) => void
    handleMenuLeave: () => void
    handleTriggerClick: () => void
    handleMenuClickoutside: (e: MouseEvent) => void
    handleUpdateCheckedKeys: (keys: Key[]) => void
    handleUpdateIndeterminateKeys: (keys: Key[]) => void
    handleTriggerFocus: (e: FocusEvent) => void
    handleTriggerBlur: (e: FocusEvent) => void
    handleMenuFocusin: (e: FocusEvent) => void
    handleMenuFocusout: (e: FocusEvent) => void
    handleClear: (e: MouseEvent) => void
    handleDeleteOption: (option: SelectBaseOption) => void
    handlePatternInput: (e: InputEvent) => void
    handleKeydown: (e: KeyboardEvent) => void
    handleKeyup: (e: KeyboardEvent) => void
    handleTabOut: () => void
    handleMenuMousedown: (e: MouseEvent) => void
    cssVars: import('vue').ComputedRef<{
      '--menu-box-shadow': string
      '--menu-border-radius': string
      '--menu-color': string
      '--menu-height': string
      '--bezier': string
    }>
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
        menuPadding: string
        menuColor: string
        menuBoxShadow: string
        menuBorderRadius: string
        menuHeight: string
      }
      peers: {
        Tree: import('../../_mixins').Theme<
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
            Scrollbar: import('../../_mixins').Theme<
              'Scrollbar',
              {
                color: string
                colorHover: string
              },
              any
            >
          }
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
      }
      peerOverrides: {
        Tree?:
          | {
              peers?:
                | {
                    Checkbox?:
                      | import('../../_mixins/use-theme').ExtractThemeOverrides<
                          import('../../_mixins').Theme<
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
                        >
                      | undefined
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
      }
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
      readonly onBlur?: unknown
      readonly onFocus?: unknown
      readonly onUpdateShow?: unknown
      readonly onUpdateValue?: unknown
      readonly 'onUpdate:value'?: unknown
      readonly 'onUpdate:show'?: unknown
      readonly leafOnly?: unknown
      readonly filter?: unknown
      readonly defaultExpandAll?: unknown
      readonly expandedKeys?: unknown
      readonly keyField?: unknown
      readonly labelField?: unknown
      readonly childrenField?: unknown
      readonly defaultExpandedKeys?: unknown
      readonly indeterminateKeys?: unknown
      readonly onUpdateIndeterminateKeys?: unknown
      readonly 'onUpdate:indeterminateKeys'?: unknown
      readonly onUpdateExpandedKeys?: unknown
      readonly 'onUpdate:expandedKeys'?: unknown
      readonly bordered?: unknown
      readonly cascade?: unknown
      readonly checkable?: unknown
      readonly clearable?: unknown
      readonly consistentMenuWidth?: unknown
      readonly defaultShow?: unknown
      readonly defaultValue?: unknown
      readonly disabled?: unknown
      readonly filterable?: unknown
      readonly checkStrategy?: unknown
      readonly maxTagCount?: unknown
      readonly multiple?: unknown
      readonly showPath?: unknown
      readonly separator?: unknown
      readonly options?: unknown
      readonly placeholder?: unknown
      readonly placement?: unknown
      readonly show?: unknown
      readonly size?: unknown
      readonly value?: unknown
      readonly to?: unknown
      readonly virtualScroll?: unknown
      readonly theme?: unknown
      readonly themeOverrides?: unknown
      readonly builtinThemeOverrides?: unknown
    } & {
      separator: string
      multiple: boolean
      placement: FollowerPlacement
      keyField: string
      bordered: boolean
      virtualScroll: boolean
      checkable: boolean
      defaultShow: boolean
      filterable: boolean
      clearable: boolean
      options: TreeSelectOption[]
      defaultValue: string | number | (string | number)[] | null
      consistentMenuWidth: boolean
      cascade: boolean
      labelField: string
      childrenField: string
      checkStrategy: CheckStrategy
      showPath: boolean
      defaultExpandedKeys: Key[]
      defaultExpandAll: boolean
    } & {
      value?: string | number | (string | number)[] | null | undefined
      filter?:
        | ((pattern: string, node: import('../../tree').TreeOption) => boolean)
        | undefined
      size?: 'small' | 'medium' | 'large' | undefined
      show?: boolean | undefined
      disabled?: boolean | undefined
      onFocus?: ((e: FocusEvent) => void) | undefined
      onBlur?: ((e: FocusEvent) => void) | undefined
      placeholder?: string | undefined
      to?: string | boolean | HTMLElement | undefined
      theme?:
        | import('../../_mixins').Theme<
            'TreeSelect',
            {
              menuPadding: string
              menuColor: string
              menuBoxShadow: string
              menuBorderRadius: string
              menuHeight: string
            },
            {
              Tree: import('../../_mixins').Theme<
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
                  Scrollbar: import('../../_mixins').Theme<
                    'Scrollbar',
                    {
                      color: string
                      colorHover: string
                    },
                    any
                  >
                }
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
            }
          >
        | undefined
      themeOverrides?:
        | import('../../_mixins/use-theme').ExtractThemeOverrides<
            import('../../_mixins').Theme<
              'TreeSelect',
              {
                menuPadding: string
                menuColor: string
                menuBoxShadow: string
                menuBorderRadius: string
                menuHeight: string
              },
              {
                Tree: import('../../_mixins').Theme<
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
                    Scrollbar: import('../../_mixins').Theme<
                      'Scrollbar',
                      {
                        color: string
                        colorHover: string
                      },
                      any
                    >
                  }
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
              }
            >
          >
        | undefined
      builtinThemeOverrides?:
        | import('../../_mixins/use-theme').ExtractThemeOverrides<
            import('../../_mixins').Theme<
              'TreeSelect',
              {
                menuPadding: string
                menuColor: string
                menuBoxShadow: string
                menuBorderRadius: string
                menuHeight: string
              },
              {
                Tree: import('../../_mixins').Theme<
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
                    Scrollbar: import('../../_mixins').Theme<
                      'Scrollbar',
                      {
                        color: string
                        colorHover: string
                      },
                      any
                    >
                  }
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
              }
            >
          >
        | undefined
      'onUpdate:show'?: MaybeArray<(show: boolean) => void> | undefined
      onUpdateShow?: MaybeArray<(show: boolean) => void> | undefined
      maxTagCount?: number | 'responsive' | undefined
      'onUpdate:value'?: MaybeArray<OnUpdateValue> | undefined
      onUpdateValue?: MaybeArray<OnUpdateValue> | undefined
      leafOnly?: boolean | undefined
      expandedKeys?: Key[] | undefined
      'onUpdate:expandedKeys'?:
        | MaybeArray<
            (
              value: Key[],
              option: (import('../../tree').TreeOption | null)[]
            ) => void
          >
        | undefined
      onUpdateExpandedKeys?:
        | MaybeArray<
            (
              value: Key[],
              option: (import('../../tree').TreeOption | null)[]
            ) => void
          >
        | undefined
      indeterminateKeys?: Key[] | undefined
      onUpdateIndeterminateKeys?:
        | MaybeArray<
            (
              value: Key[],
              option: (import('../../tree').TreeOption | null)[]
            ) => void
          >
        | undefined
      'onUpdate:indeterminateKeys'?:
        | MaybeArray<
            (
              value: Key[],
              option: (import('../../tree').TreeOption | null)[]
            ) => void
          >
        | undefined
    }
  >,
  {
    show: boolean | undefined
    separator: string
    multiple: boolean
    disabled: boolean | undefined
    to: string | boolean | HTMLElement
    placement: FollowerPlacement
    keyField: string
    bordered: boolean
    virtualScroll: boolean
    checkable: boolean
    defaultShow: boolean
    filterable: boolean
    clearable: boolean
    options: TreeSelectOption[]
    defaultValue: string | number | (string | number)[] | null
    consistentMenuWidth: boolean
    cascade: boolean
    labelField: string
    childrenField: string
    checkStrategy: CheckStrategy
    leafOnly: boolean
    showPath: boolean
    defaultExpandedKeys: Key[]
    defaultExpandAll: boolean
  }
>
export default _default
