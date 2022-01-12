import { PropType, ExtractPropTypes, InjectionKey, VNodeChild } from 'vue'
import { Key } from 'treemate'
import type { MaybeArray } from '../../_utils'
import { MenuInjection } from './use-menu-child'
import {
  MenuOption,
  MenuGroupOption,
  MenuIgnoredOption,
  MenuMixedOption,
  OnUpdateValue,
  OnUpdateKeys
} from './interface'
import { FollowerPlacement } from 'vueuc'
import { DropdownProps } from '../../dropdown'
declare const menuProps: {
  readonly options: {
    readonly type: PropType<MenuMixedOption[]>
    readonly default: () => never[]
  }
  readonly collapsed: {
    readonly type: PropType<boolean | undefined>
    readonly default: undefined
  }
  readonly collapsedWidth: {
    readonly type: NumberConstructor
    readonly default: 48
  }
  readonly iconSize: {
    readonly type: NumberConstructor
    readonly default: 20
  }
  readonly collapsedIconSize: {
    readonly type: NumberConstructor
    readonly default: 24
  }
  readonly rootIndent: NumberConstructor
  readonly indent: {
    readonly type: NumberConstructor
    readonly default: 32
  }
  readonly labelField: {
    readonly type: StringConstructor
    readonly default: 'label'
  }
  readonly keyField: {
    readonly type: StringConstructor
    readonly default: 'key'
  }
  readonly childrenField: {
    readonly type: StringConstructor
    readonly default: 'children'
  }
  readonly defaultExpandAll: BooleanConstructor
  readonly defaultExpandedKeys: PropType<Key[]>
  readonly expandedKeys: PropType<Key[]>
  readonly value: PropType<Key | null>
  readonly defaultValue: {
    readonly type: PropType<Key | null>
    readonly default: null
  }
  readonly mode: {
    readonly type: PropType<'horizontal' | 'vertical'>
    readonly default: 'vertical'
  }
  readonly watchProps: {
    readonly type: PropType<('defaultValue' | 'defaultExpandedKeys')[]>
    readonly default: undefined
  }
  readonly disabled: BooleanConstructor
  readonly inverted: BooleanConstructor
  readonly 'onUpdate:expandedKeys': PropType<MaybeArray<OnUpdateKeys>>
  readonly onUpdateExpandedKeys: PropType<MaybeArray<OnUpdateKeys>>
  readonly onUpdateValue: PropType<MaybeArray<OnUpdateValue>>
  readonly 'onUpdate:value': PropType<MaybeArray<OnUpdateValue>>
  readonly expandIcon: PropType<(option: MenuOption) => VNodeChild>
  readonly renderIcon: PropType<(option: MenuOption) => VNodeChild>
  readonly renderLabel: PropType<
    (option: MenuOption | MenuGroupOption) => VNodeChild
  >
  readonly renderExtra: PropType<
    (option: MenuOption | MenuGroupOption) => VNodeChild
  >
  /** TODO: deprecate it */
  readonly dropdownPlacement: {
    readonly type: PropType<FollowerPlacement>
    readonly default: 'bottom'
  }
  readonly dropdownProps: PropType<DropdownProps>
  readonly accordion: BooleanConstructor
  readonly items: PropType<(MenuOption | MenuGroupOption)[]>
  readonly onOpenNamesChange: PropType<MaybeArray<OnUpdateKeys>>
  readonly onSelect: PropType<MaybeArray<OnUpdateValue>>
  readonly onExpandedNamesChange: PropType<MaybeArray<OnUpdateKeys>>
  readonly expandedNames: PropType<Key[]>
  readonly defaultExpandedNames: PropType<Key[]>
  readonly theme: PropType<
    import('../../_mixins').Theme<
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
  >
  readonly themeOverrides: PropType<
    import('../../_mixins/use-theme').ExtractThemeOverrides<
      import('../../_mixins').Theme<
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
    >
  >
  readonly builtinThemeOverrides: PropType<
    import('../../_mixins/use-theme').ExtractThemeOverrides<
      import('../../_mixins').Theme<
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
    >
  >
}
export declare type MenuSetupProps = ExtractPropTypes<typeof menuProps>
export declare type MenuProps = Partial<MenuSetupProps>
export declare const menuInjectionKey: InjectionKey<MenuInjection>
declare const _default: import('vue').DefineComponent<
  {
    readonly options: {
      readonly type: PropType<MenuMixedOption[]>
      readonly default: () => never[]
    }
    readonly collapsed: {
      readonly type: PropType<boolean | undefined>
      readonly default: undefined
    }
    readonly collapsedWidth: {
      readonly type: NumberConstructor
      readonly default: 48
    }
    readonly iconSize: {
      readonly type: NumberConstructor
      readonly default: 20
    }
    readonly collapsedIconSize: {
      readonly type: NumberConstructor
      readonly default: 24
    }
    readonly rootIndent: NumberConstructor
    readonly indent: {
      readonly type: NumberConstructor
      readonly default: 32
    }
    readonly labelField: {
      readonly type: StringConstructor
      readonly default: 'label'
    }
    readonly keyField: {
      readonly type: StringConstructor
      readonly default: 'key'
    }
    readonly childrenField: {
      readonly type: StringConstructor
      readonly default: 'children'
    }
    readonly defaultExpandAll: BooleanConstructor
    readonly defaultExpandedKeys: PropType<Key[]>
    readonly expandedKeys: PropType<Key[]>
    readonly value: PropType<Key | null>
    readonly defaultValue: {
      readonly type: PropType<Key | null>
      readonly default: null
    }
    readonly mode: {
      readonly type: PropType<'horizontal' | 'vertical'>
      readonly default: 'vertical'
    }
    readonly watchProps: {
      readonly type: PropType<('defaultValue' | 'defaultExpandedKeys')[]>
      readonly default: undefined
    }
    readonly disabled: BooleanConstructor
    readonly inverted: BooleanConstructor
    readonly 'onUpdate:expandedKeys': PropType<MaybeArray<OnUpdateKeys>>
    readonly onUpdateExpandedKeys: PropType<MaybeArray<OnUpdateKeys>>
    readonly onUpdateValue: PropType<MaybeArray<OnUpdateValue>>
    readonly 'onUpdate:value': PropType<MaybeArray<OnUpdateValue>>
    readonly expandIcon: PropType<(option: MenuOption) => VNodeChild>
    readonly renderIcon: PropType<(option: MenuOption) => VNodeChild>
    readonly renderLabel: PropType<
      (option: MenuOption | MenuGroupOption) => VNodeChild
    >
    readonly renderExtra: PropType<
      (option: MenuOption | MenuGroupOption) => VNodeChild
    >
    /** TODO: deprecate it */
    readonly dropdownPlacement: {
      readonly type: PropType<FollowerPlacement>
      readonly default: 'bottom'
    }
    readonly dropdownProps: PropType<DropdownProps>
    readonly accordion: BooleanConstructor
    readonly items: PropType<(MenuOption | MenuGroupOption)[]>
    readonly onOpenNamesChange: PropType<MaybeArray<OnUpdateKeys>>
    readonly onSelect: PropType<MaybeArray<OnUpdateValue>>
    readonly onExpandedNamesChange: PropType<MaybeArray<OnUpdateKeys>>
    readonly expandedNames: PropType<Key[]>
    readonly defaultExpandedNames: PropType<Key[]>
    readonly theme: PropType<
      import('../../_mixins').Theme<
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
    >
    readonly themeOverrides: PropType<
      import('../../_mixins/use-theme').ExtractThemeOverrides<
        import('../../_mixins').Theme<
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
      >
    >
    readonly builtinThemeOverrides: PropType<
      import('../../_mixins/use-theme').ExtractThemeOverrides<
        import('../../_mixins').Theme<
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
      >
    >
  },
  {
    mergedClsPrefix: import('vue').ComputedRef<string>
    controlledExpandedKeys: import('vue').ComputedRef<Key[] | undefined>
    uncontrolledExpanededKeys: import('vue').Ref<Key[]>
    mergedExpandedKeys: import('vue').ComputedRef<Key[]>
    uncontrolledValue: import('vue').Ref<Key | null>
    mergedValue: import('vue').ComputedRef<Key | null>
    activePath: import('vue').ComputedRef<Key[]>
    tmNodes: import('vue').ComputedRef<
      import('treemate').TreeNode<
        MenuOption,
        MenuGroupOption,
        MenuIgnoredOption
      >[]
    >
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
      peers: {
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
      peerOverrides: {
        Tooltip?:
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
    mergedCollapsed: import('vue').ComputedRef<boolean>
    cssVars: import('vue').ComputedRef<any>
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
      readonly options?: unknown
      readonly collapsed?: unknown
      readonly collapsedWidth?: unknown
      readonly iconSize?: unknown
      readonly collapsedIconSize?: unknown
      readonly rootIndent?: unknown
      readonly indent?: unknown
      readonly labelField?: unknown
      readonly keyField?: unknown
      readonly childrenField?: unknown
      readonly defaultExpandAll?: unknown
      readonly defaultExpandedKeys?: unknown
      readonly expandedKeys?: unknown
      readonly value?: unknown
      readonly defaultValue?: unknown
      readonly mode?: unknown
      readonly watchProps?: unknown
      readonly disabled?: unknown
      readonly inverted?: unknown
      readonly 'onUpdate:expandedKeys'?: unknown
      readonly onUpdateExpandedKeys?: unknown
      readonly onUpdateValue?: unknown
      readonly 'onUpdate:value'?: unknown
      readonly expandIcon?: unknown
      readonly renderIcon?: unknown
      readonly renderLabel?: unknown
      readonly renderExtra?: unknown
      readonly dropdownPlacement?: unknown
      readonly dropdownProps?: unknown
      readonly accordion?: unknown
      readonly items?: unknown
      readonly onOpenNamesChange?: unknown
      readonly onSelect?: unknown
      readonly onExpandedNamesChange?: unknown
      readonly expandedNames?: unknown
      readonly defaultExpandedNames?: unknown
      readonly theme?: unknown
      readonly themeOverrides?: unknown
      readonly builtinThemeOverrides?: unknown
    } & {
      mode: 'horizontal' | 'vertical'
      disabled: boolean
      keyField: string
      iconSize: number
      options: MenuMixedOption[]
      defaultValue: Key | null
      indent: number
      labelField: string
      inverted: boolean
      childrenField: string
      accordion: boolean
      collapsedWidth: number
      collapsedIconSize: number
      defaultExpandAll: boolean
      dropdownPlacement: FollowerPlacement
    } & {
      value?: Key | null | undefined
      onSelect?: MaybeArray<OnUpdateValue> | undefined
      theme?:
        | import('../../_mixins').Theme<
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
        | undefined
      themeOverrides?:
        | import('../../_mixins/use-theme').ExtractThemeOverrides<
            import('../../_mixins').Theme<
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
          >
        | undefined
      builtinThemeOverrides?:
        | import('../../_mixins/use-theme').ExtractThemeOverrides<
            import('../../_mixins').Theme<
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
          >
        | undefined
      items?: (MenuOption | MenuGroupOption)[] | undefined
      renderIcon?: ((option: MenuOption) => VNodeChild) | undefined
      renderLabel?:
        | ((option: MenuOption | MenuGroupOption) => VNodeChild)
        | undefined
      'onUpdate:value'?: MaybeArray<OnUpdateValue> | undefined
      onUpdateValue?: MaybeArray<OnUpdateValue> | undefined
      defaultExpandedNames?: Key[] | undefined
      expandedNames?: Key[] | undefined
      onExpandedNamesChange?: MaybeArray<OnUpdateKeys> | undefined
      collapsed?: boolean | undefined
      expandIcon?: ((option: MenuOption) => VNodeChild) | undefined
      defaultExpandedKeys?: Key[] | undefined
      rootIndent?: number | undefined
      expandedKeys?: Key[] | undefined
      watchProps?: ('defaultValue' | 'defaultExpandedKeys')[] | undefined
      'onUpdate:expandedKeys'?: MaybeArray<OnUpdateKeys> | undefined
      onUpdateExpandedKeys?: MaybeArray<OnUpdateKeys> | undefined
      renderExtra?:
        | ((option: MenuOption | MenuGroupOption) => VNodeChild)
        | undefined
      dropdownProps?: DropdownProps | undefined
      onOpenNamesChange?: MaybeArray<OnUpdateKeys> | undefined
    }
  >,
  {
    mode: 'horizontal' | 'vertical'
    disabled: boolean
    keyField: string
    iconSize: number
    options: MenuMixedOption[]
    defaultValue: Key | null
    indent: number
    labelField: string
    inverted: boolean
    childrenField: string
    accordion: boolean
    collapsed: boolean | undefined
    collapsedWidth: number
    collapsedIconSize: number
    defaultExpandAll: boolean
    watchProps: ('defaultValue' | 'defaultExpandedKeys')[]
    dropdownPlacement: FollowerPlacement
  }
>
export default _default
