import { PropType, VNodeChild, InjectionKey } from 'vue'
import type { SubmenuInjection } from './use-menu-child'
import { MenuMixedOption, TmNode } from './interface'
export declare const submenuProps: {
  readonly rawNodes: {
    readonly type: PropType<MenuMixedOption[]>
    readonly default: () => never[]
  }
  readonly tmNodes: {
    readonly type: PropType<TmNode[]>
    readonly default: () => never[]
  }
  readonly tmNode: {
    readonly type: PropType<TmNode>
    readonly required: true
  }
  readonly disabled: {
    readonly type: BooleanConstructor
    readonly default: false
  }
  readonly icon: PropType<() => VNodeChild>
  readonly onClick: PropType<() => void>
  readonly internalKey: {
    readonly type: PropType<import('treemate').Key>
    readonly required: true
  }
  readonly root: BooleanConstructor
  readonly isGroup: BooleanConstructor
  readonly level: {
    readonly type: NumberConstructor
    readonly required: true
  }
  readonly title: PropType<string | (() => VNodeChild)>
  readonly extra: PropType<string | (() => VNodeChild)>
}
export declare const submenuInjectionKey: InjectionKey<SubmenuInjection>
declare const _default: import('vue').DefineComponent<
  {
    readonly rawNodes: {
      readonly type: PropType<MenuMixedOption[]>
      readonly default: () => never[]
    }
    readonly tmNodes: {
      readonly type: PropType<TmNode[]>
      readonly default: () => never[]
    }
    readonly tmNode: {
      readonly type: PropType<TmNode>
      readonly required: true
    }
    readonly disabled: {
      readonly type: BooleanConstructor
      readonly default: false
    }
    readonly icon: PropType<() => VNodeChild>
    readonly onClick: PropType<() => void>
    readonly internalKey: {
      readonly type: PropType<import('treemate').Key>
      readonly required: true
    }
    readonly root: BooleanConstructor
    readonly isGroup: BooleanConstructor
    readonly level: {
      readonly type: NumberConstructor
      readonly required: true
    }
    readonly title: PropType<string | (() => VNodeChild)>
    readonly extra: PropType<string | (() => VNodeChild)>
  },
  {
    menuProps: {
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
      defaultValue: import('treemate').Key | null
      indent: number
      labelField: string
      inverted: boolean
      childrenField: string
      accordion: boolean
      collapsedWidth: number
      collapsedIconSize: number
      defaultExpandAll: boolean
      dropdownPlacement: import('vueuc').FollowerPlacement
    } & {
      value?: import('treemate').Key | null | undefined
      onSelect?:
        | import('../../_utils').MaybeArray<import('./interface').OnUpdateValue>
        | undefined
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
      items?:
        | (
            | import('./interface').MenuOption
            | import('./interface').MenuGroupOption
          )[]
        | undefined
      renderIcon?:
        | ((option: import('./interface').MenuOption) => VNodeChild)
        | undefined
      renderLabel?:
        | ((
            option:
              | import('./interface').MenuOption
              | import('./interface').MenuGroupOption
          ) => VNodeChild)
        | undefined
      'onUpdate:value'?:
        | import('../../_utils').MaybeArray<import('./interface').OnUpdateValue>
        | undefined
      onUpdateValue?:
        | import('../../_utils').MaybeArray<import('./interface').OnUpdateValue>
        | undefined
      defaultExpandedNames?: import('treemate').Key[] | undefined
      expandedNames?: import('treemate').Key[] | undefined
      onExpandedNamesChange?:
        | import('../../_utils').MaybeArray<import('./interface').OnUpdateKeys>
        | undefined
      collapsed?: boolean | undefined
      expandIcon?:
        | ((option: import('./interface').MenuOption) => VNodeChild)
        | undefined
      defaultExpandedKeys?: import('treemate').Key[] | undefined
      rootIndent?: number | undefined
      expandedKeys?: import('treemate').Key[] | undefined
      watchProps?: ('defaultValue' | 'defaultExpandedKeys')[] | undefined
      'onUpdate:expandedKeys'?:
        | import('../../_utils').MaybeArray<import('./interface').OnUpdateKeys>
        | undefined
      onUpdateExpandedKeys?:
        | import('../../_utils').MaybeArray<import('./interface').OnUpdateKeys>
        | undefined
      renderExtra?:
        | ((
            option:
              | import('./interface').MenuOption
              | import('./interface').MenuGroupOption
          ) => VNodeChild)
        | undefined
      dropdownProps?: import('../../dropdown').DropdownProps | undefined
      onOpenNamesChange?:
        | import('../../_utils').MaybeArray<import('./interface').OnUpdateKeys>
        | undefined
    }
    doSelect: import('./interface').OnUpdateValueImpl
    inverted: import('vue').Ref<boolean>
    isHorizontal: import('vue').Ref<boolean>
    mergedClsPrefix: import('vue').Ref<string>
    maxIconSize: import('vue').ComputedRef<number>
    activeIconSize: import('vue').ComputedRef<number>
    iconMarginRight: import('vue').ComputedRef<number>
    dropdownPlacement: import('vue').ComputedRef<
      import('vueuc').FollowerPlacement
    >
    dropdownShow: import('vue').Ref<boolean>
    paddingLeft: import('vue').ComputedRef<number | undefined>
    mergedDisabled: import('vue').ComputedRef<boolean>
    mergedValue: import('vue').Ref<import('treemate').Key | null>
    childActive: import('vue').ComputedRef<boolean>
    collapsed: import('vue').ComputedRef<boolean>
    dropdownEnabled: import('vue').ComputedRef<boolean>
    handlePopoverShowChange: (value: boolean) => void
    handleClick: () => void
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
      readonly rawNodes?: unknown
      readonly tmNodes?: unknown
      readonly tmNode?: unknown
      readonly disabled?: unknown
      readonly icon?: unknown
      readonly onClick?: unknown
      readonly internalKey?: unknown
      readonly root?: unknown
      readonly isGroup?: unknown
      readonly level?: unknown
      readonly title?: unknown
      readonly extra?: unknown
    } & {
      root: boolean
      disabled: boolean
      tmNode: TmNode
      level: number
      isGroup: boolean
      tmNodes: TmNode[]
      internalKey: import('treemate').Key
      rawNodes: MenuMixedOption[]
    } & {
      extra?: string | (() => VNodeChild) | undefined
      icon?: (() => VNodeChild) | undefined
      onClick?: (() => void) | undefined
      title?: string | (() => VNodeChild) | undefined
    }
  >,
  {
    root: boolean
    disabled: boolean
    isGroup: boolean
    tmNodes: TmNode[]
    rawNodes: MenuMixedOption[]
  }
>
export default _default
