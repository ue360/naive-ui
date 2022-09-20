import { PropType } from 'vue'
import { TmNode } from './interface'
export declare const menuItemProps: {
  readonly tmNode: {
    readonly type: PropType<TmNode>
    readonly required: true
  }
  readonly disabled: BooleanConstructor
  readonly icon: FunctionConstructor
  readonly onClick: FunctionConstructor
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
  readonly title: PropType<string | (() => import('vue').VNodeChild)>
  readonly extra: PropType<string | (() => import('vue').VNodeChild)>
}
declare const _default: import('vue').DefineComponent<
  {
    readonly tmNode: {
      readonly type: PropType<TmNode>
      readonly required: true
    }
    readonly disabled: BooleanConstructor
    readonly icon: FunctionConstructor
    readonly onClick: FunctionConstructor
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
    readonly title: PropType<string | (() => import('vue').VNodeChild)>
    readonly extra: PropType<string | (() => import('vue').VNodeChild)>
  },
  {
    mergedClsPrefix: import('vue').Ref<string>
    dropdownPlacement: import('vue').ComputedRef<
      import('vueuc').FollowerPlacement
    >
    paddingLeft: import('vue').ComputedRef<number | undefined>
    iconMarginRight: import('vue').ComputedRef<number>
    maxIconSize: import('vue').ComputedRef<number>
    activeIconSize: import('vue').ComputedRef<number>
    mergedTheme: import('vue').Ref<{
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
    dropdownEnabled: import('vue').ComputedRef<boolean>
    selected: import('vue').ComputedRef<boolean>
    mergedDisabled: import('vue').ComputedRef<boolean>
    handleClick: (e: MouseEvent) => void
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
      internalKey: import('treemate').Key
    } & {
      extra?: string | (() => import('vue').VNodeChild) | undefined
      icon?: Function | undefined
      onClick?: Function | undefined
      title?: string | (() => import('vue').VNodeChild) | undefined
    }
  >,
  {
    root: boolean
    disabled: boolean
    isGroup: boolean
  }
>
export default _default