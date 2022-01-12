import { PropType } from 'vue'
import { TmNode } from './interface'
declare const _default: import('vue').DefineComponent<
  {
    collapsed: BooleanConstructor
    disabled: BooleanConstructor
    title: (StringConstructor | FunctionConstructor)[]
    icon: FunctionConstructor
    extra: (StringConstructor | FunctionConstructor)[]
    showArrow: BooleanConstructor
    childActive: BooleanConstructor
    hover: BooleanConstructor
    paddingLeft: NumberConstructor
    maxIconSize: {
      type: NumberConstructor
      required: true
    }
    activeIconSize: {
      type: NumberConstructor
      required: true
    }
    iconMarginRight: {
      type: NumberConstructor
      required: true
    }
    clsPrefix: {
      type: StringConstructor
      required: true
    }
    onClick: PropType<(e: MouseEvent) => void>
    tmNode: {
      type: PropType<TmNode>
      required: true
    }
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
      options: import('./interface').MenuMixedOption[]
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
        | ((
            option: import('./interface').MenuOption
          ) => import('vue').VNodeChild)
        | undefined
      renderLabel?:
        | ((
            option:
              | import('./interface').MenuOption
              | import('./interface').MenuGroupOption
          ) => import('vue').VNodeChild)
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
        | ((
            option: import('./interface').MenuOption
          ) => import('vue').VNodeChild)
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
          ) => import('vue').VNodeChild)
        | undefined
      dropdownProps?: import('../..').DropdownProps | undefined
      onOpenNamesChange?:
        | import('../../_utils').MaybeArray<import('./interface').OnUpdateKeys>
        | undefined
    }
    style: import('vue').ComputedRef<{
      paddingLeft: string | 0 | undefined
    }>
    iconStyle: import('vue').ComputedRef<{
      width: string
      height: string
      fontSize: string
      marginRight: string
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
      collapsed?: unknown
      disabled?: unknown
      title?: unknown
      icon?: unknown
      extra?: unknown
      showArrow?: unknown
      childActive?: unknown
      hover?: unknown
      paddingLeft?: unknown
      maxIconSize?: unknown
      activeIconSize?: unknown
      iconMarginRight?: unknown
      clsPrefix?: unknown
      onClick?: unknown
      tmNode?: unknown
    } & {
      disabled: boolean
      hover: boolean
      clsPrefix: string
      tmNode: TmNode
      showArrow: boolean
      childActive: boolean
      collapsed: boolean
      maxIconSize: number
      activeIconSize: number
      iconMarginRight: number
    } & {
      extra?: string | Function | undefined
      icon?: Function | undefined
      paddingLeft?: number | undefined
      onClick?: ((e: MouseEvent) => void) | undefined
      title?: string | Function | undefined
    }
  >,
  {
    disabled: boolean
    hover: boolean
    showArrow: boolean
    childActive: boolean
    collapsed: boolean
  }
>
export default _default
