import { PropType } from 'vue'
import type { PopoverTrigger } from '../../popover'
import type { ExtractPublicPropTypes } from '../../_utils'
declare const popselectProps: {
  multiple: BooleanConstructor
  value: {
    readonly type: PropType<import('../../select/src/interface').Value | null>
    readonly default: null
  }
  cancelable: BooleanConstructor
  width: PropType<string | number>
  options: {
    readonly type: PropType<
      import('../../select/src/interface').SelectMixedOption[]
    >
    readonly default: () => never[]
  }
  size: {
    readonly type: PropType<import('./interface').PopselectSize>
    readonly default: 'medium'
  }
  scrollable: BooleanConstructor
  'onUpdate:value': PropType<
    import('../../_utils').MaybeArray<
      import('../../select/src/interface').OnUpdateValue
    >
  >
  onUpdateValue: PropType<
    import('../../_utils').MaybeArray<
      import('../../select/src/interface').OnUpdateValue
    >
  >
  onMouseenter: PropType<(e: MouseEvent) => void>
  onMouseleave: PropType<(e: MouseEvent) => void>
  renderLabel: PropType<
    import('../../_internal/select-menu/src/interface').RenderLabel
  >
  onChange: {
    readonly type: PropType<
      | import('../../_utils').MaybeArray<
          import('../../select/src/interface').OnUpdateValue
        >
      | undefined
    >
    readonly validator: () => boolean
    readonly default: undefined
  }
  placement: {
    default: string
    type: PropType<import('vueuc').FollowerPlacement>
  }
  trigger: {
    type: PropType<PopoverTrigger>
    default: string
  }
  showArrow: BooleanConstructor
  show: {
    type: PropType<boolean | undefined>
    default: undefined
  }
  defaultShow: BooleanConstructor
  delay: {
    type: NumberConstructor
    default: number
  }
  duration: {
    type: NumberConstructor
    default: number
  }
  raw: BooleanConstructor
  x: NumberConstructor
  y: NumberConstructor
  disabled: BooleanConstructor
  getDisabled: PropType<() => boolean>
  displayDirective: {
    type: PropType<'show' | 'if'>
    default: string
  }
  arrowStyle: PropType<string | import('vue').CSSProperties>
  flip: {
    type: BooleanConstructor
    default: boolean
  }
  animated: {
    type: BooleanConstructor
    default: boolean
  }
  overlap: BooleanConstructor
  internalExtraClass: {
    type: PropType<string[]>
    default: () => never[]
  }
  onClickoutside: PropType<(e: MouseEvent) => void>
  'onUpdate:show': PropType<
    import('../../_utils').MaybeArray<(value: boolean) => void>
  >
  onUpdateShow: PropType<
    import('../../_utils').MaybeArray<(value: boolean) => void>
  >
  zIndex: NumberConstructor
  to: {
    type: PropType<string | boolean | HTMLElement>
    default: undefined
  }
  internalSyncTargetWithParent: BooleanConstructor
  internalInheritedEventHandlers: {
    type: PropType<import('../../popover/src/Popover').TriggerEventHandlers[]>
    default: () => never[]
  }
  onShow: PropType<
    import('../../_utils').MaybeArray<(value: boolean) => void> | undefined
  >
  onHide: PropType<
    import('../../_utils').MaybeArray<(value: boolean) => void> | undefined
  >
  arrow: {
    type: PropType<boolean | undefined>
    default: undefined
  }
  minWidth: NumberConstructor
  maxWidth: NumberConstructor
  theme: PropType<
    import('../../_mixins').Theme<
      'Popselect',
      unknown,
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
  themeOverrides: PropType<
    import('../../_mixins/use-theme').ExtractThemeOverrides<
      import('../../_mixins').Theme<
        'Popselect',
        unknown,
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
  builtinThemeOverrides: PropType<
    import('../../_mixins/use-theme').ExtractThemeOverrides<
      import('../../_mixins').Theme<
        'Popselect',
        unknown,
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
export declare type PopselectProps = ExtractPublicPropTypes<
  typeof popselectProps
>
declare const _default: import('vue').DefineComponent<
  {
    multiple: BooleanConstructor
    value: {
      readonly type: PropType<import('../../select/src/interface').Value | null>
      readonly default: null
    }
    cancelable: BooleanConstructor
    width: PropType<string | number>
    options: {
      readonly type: PropType<
        import('../../select/src/interface').SelectMixedOption[]
      >
      readonly default: () => never[]
    }
    size: {
      readonly type: PropType<import('./interface').PopselectSize>
      readonly default: 'medium'
    }
    scrollable: BooleanConstructor
    'onUpdate:value': PropType<
      import('../../_utils').MaybeArray<
        import('../../select/src/interface').OnUpdateValue
      >
    >
    onUpdateValue: PropType<
      import('../../_utils').MaybeArray<
        import('../../select/src/interface').OnUpdateValue
      >
    >
    onMouseenter: PropType<(e: MouseEvent) => void>
    onMouseleave: PropType<(e: MouseEvent) => void>
    renderLabel: PropType<
      import('../../_internal/select-menu/src/interface').RenderLabel
    >
    onChange: {
      readonly type: PropType<
        | import('../../_utils').MaybeArray<
            import('../../select/src/interface').OnUpdateValue
          >
        | undefined
      >
      readonly validator: () => boolean
      readonly default: undefined
    }
    placement: {
      default: string
      type: PropType<import('vueuc').FollowerPlacement>
    }
    trigger: {
      type: PropType<PopoverTrigger>
      default: string
    }
    showArrow: BooleanConstructor
    show: {
      type: PropType<boolean | undefined>
      default: undefined
    }
    defaultShow: BooleanConstructor
    delay: {
      type: NumberConstructor
      default: number
    }
    duration: {
      type: NumberConstructor
      default: number
    }
    raw: BooleanConstructor
    x: NumberConstructor
    y: NumberConstructor
    disabled: BooleanConstructor
    getDisabled: PropType<() => boolean>
    displayDirective: {
      type: PropType<'show' | 'if'>
      default: string
    }
    arrowStyle: PropType<string | import('vue').CSSProperties>
    flip: {
      type: BooleanConstructor
      default: boolean
    }
    animated: {
      type: BooleanConstructor
      default: boolean
    }
    overlap: BooleanConstructor
    internalExtraClass: {
      type: PropType<string[]>
      default: () => never[]
    }
    onClickoutside: PropType<(e: MouseEvent) => void>
    'onUpdate:show': PropType<
      import('../../_utils').MaybeArray<(value: boolean) => void>
    >
    onUpdateShow: PropType<
      import('../../_utils').MaybeArray<(value: boolean) => void>
    >
    zIndex: NumberConstructor
    to: {
      type: PropType<string | boolean | HTMLElement>
      default: undefined
    }
    internalSyncTargetWithParent: BooleanConstructor
    internalInheritedEventHandlers: {
      type: PropType<import('../../popover/src/Popover').TriggerEventHandlers[]>
      default: () => never[]
    }
    onShow: PropType<
      import('../../_utils').MaybeArray<(value: boolean) => void> | undefined
    >
    onHide: PropType<
      import('../../_utils').MaybeArray<(value: boolean) => void> | undefined
    >
    arrow: {
      type: PropType<boolean | undefined>
      default: undefined
    }
    minWidth: NumberConstructor
    maxWidth: NumberConstructor
    theme: PropType<
      import('../../_mixins').Theme<
        'Popselect',
        unknown,
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
    themeOverrides: PropType<
      import('../../_mixins/use-theme').ExtractThemeOverrides<
        import('../../_mixins').Theme<
          'Popselect',
          unknown,
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
    builtinThemeOverrides: PropType<
      import('../../_mixins/use-theme').ExtractThemeOverrides<
        import('../../_mixins').Theme<
          'Popselect',
          unknown,
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
    popoverInstRef: import('vue').Ref<{
      syncPosition: () => void
      setShow: (value: boolean) => void
    } | null>
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
      self: unknown
      peers: {
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
        Popover?:
          | {
              peers?:
                | {
                    [x: string]: any
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
      multiple?: unknown
      value?: unknown
      cancelable?: unknown
      width?: unknown
      options?: unknown
      size?: unknown
      scrollable?: unknown
      'onUpdate:value'?: unknown
      onUpdateValue?: unknown
      onMouseenter?: unknown
      onMouseleave?: unknown
      renderLabel?: unknown
      onChange?: unknown
      placement?: unknown
      trigger?: unknown
      showArrow?: unknown
      show?: unknown
      defaultShow?: unknown
      delay?: unknown
      duration?: unknown
      raw?: unknown
      x?: unknown
      y?: unknown
      disabled?: unknown
      getDisabled?: unknown
      displayDirective?: unknown
      arrowStyle?: unknown
      flip?: unknown
      animated?: unknown
      overlap?: unknown
      internalExtraClass?: unknown
      onClickoutside?: unknown
      'onUpdate:show'?: unknown
      onUpdateShow?: unknown
      zIndex?: unknown
      to?: unknown
      internalSyncTargetWithParent?: unknown
      internalInheritedEventHandlers?: unknown
      onShow?: unknown
      onHide?: unknown
      arrow?: unknown
      minWidth?: unknown
      maxWidth?: unknown
      theme?: unknown
      themeOverrides?: unknown
      builtinThemeOverrides?: unknown
    } & {
      value: import('../../select/src/interface').Value | null
      size: import('./interface').PopselectSize
      flip: boolean
      multiple: boolean
      disabled: boolean
      duration: number
      raw: boolean
      placement: import('vueuc').FollowerPlacement
      overlap: boolean
      scrollable: boolean
      trigger: PopoverTrigger
      showArrow: boolean
      delay: number
      displayDirective: 'show' | 'if'
      animated: boolean
      defaultShow: boolean
      internalExtraClass: string[]
      internalSyncTargetWithParent: boolean
      internalInheritedEventHandlers: import('../../popover/src/Popover').TriggerEventHandlers[]
      options: import('../../select/src/interface').SelectMixedOption[]
      cancelable: boolean
    } & {
      show?: boolean | undefined
      x?: number | undefined
      y?: number | undefined
      maxWidth?: number | undefined
      minWidth?: number | undefined
      width?: string | number | undefined
      zIndex?: number | undefined
      onChange?:
        | import('../../_utils').MaybeArray<
            import('../../select/src/interface').OnUpdateValue
          >
        | undefined
      onMouseenter?: ((e: MouseEvent) => void) | undefined
      onMouseleave?: ((e: MouseEvent) => void) | undefined
      to?: string | boolean | HTMLElement | undefined
      theme?:
        | import('../../_mixins').Theme<
            'Popselect',
            unknown,
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
              'Popselect',
              unknown,
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
              'Popselect',
              unknown,
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
      renderLabel?:
        | import('../../_internal/select-menu/src/interface').RenderLabel
        | undefined
      arrowStyle?: string | import('vue').CSSProperties | undefined
      onClickoutside?: ((e: MouseEvent) => void) | undefined
      getDisabled?: (() => boolean) | undefined
      'onUpdate:show'?:
        | import('../../_utils').MaybeArray<(value: boolean) => void>
        | undefined
      onUpdateShow?:
        | import('../../_utils').MaybeArray<(value: boolean) => void>
        | undefined
      onShow?:
        | import('../../_utils').MaybeArray<(value: boolean) => void>
        | undefined
      onHide?:
        | import('../../_utils').MaybeArray<(value: boolean) => void>
        | undefined
      arrow?: boolean | undefined
      'onUpdate:value'?:
        | import('../../_utils').MaybeArray<
            import('../../select/src/interface').OnUpdateValue
          >
        | undefined
      onUpdateValue?:
        | import('../../_utils').MaybeArray<
            import('../../select/src/interface').OnUpdateValue
          >
        | undefined
    }
  >,
  {
    value: import('../../select/src/interface').Value | null
    size: import('./interface').PopselectSize
    show: boolean | undefined
    flip: boolean
    multiple: boolean
    disabled: boolean
    duration: number
    onChange:
      | import('../../_utils').MaybeArray<
          import('../../select/src/interface').OnUpdateValue
        >
      | undefined
    to: string | boolean | HTMLElement
    raw: boolean
    placement: import('vueuc').FollowerPlacement
    overlap: boolean
    scrollable: boolean
    trigger: PopoverTrigger
    showArrow: boolean
    delay: number
    displayDirective: 'show' | 'if'
    animated: boolean
    defaultShow: boolean
    internalExtraClass: string[]
    internalSyncTargetWithParent: boolean
    internalInheritedEventHandlers: import('../../popover/src/Popover').TriggerEventHandlers[]
    arrow: boolean | undefined
    options: import('../../select/src/interface').SelectMixedOption[]
    cancelable: boolean
  }
>
export default _default