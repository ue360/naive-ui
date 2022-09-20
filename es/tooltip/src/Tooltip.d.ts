import type { PopoverInst } from '../../popover'
import type { ExtractPublicPropTypes } from '../../_utils'
export declare type TooltipInst = PopoverInst
declare const tooltipProps: {
  theme: import('vue').PropType<
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
  themeOverrides: import('vue').PropType<
    import('../../_mixins/use-theme').ExtractThemeOverrides<
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
  >
  builtinThemeOverrides: import('vue').PropType<
    import('../../_mixins/use-theme').ExtractThemeOverrides<
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
  >
  show: {
    type: import('vue').PropType<boolean | undefined>
    default: undefined
  }
  defaultShow: BooleanConstructor
  showArrow: {
    type: BooleanConstructor
    default: boolean
  }
  trigger: {
    type: import('vue').PropType<import('../../popover').PopoverTrigger>
    default: string
  }
  delay: {
    type: NumberConstructor
    default: number
  }
  duration: {
    type: NumberConstructor
    default: number
  }
  raw: BooleanConstructor
  placement: {
    type: import('vue').PropType<import('vueuc').FollowerPlacement>
    default: string
  }
  x: NumberConstructor
  y: NumberConstructor
  disabled: BooleanConstructor
  getDisabled: import('vue').PropType<() => boolean>
  displayDirective: {
    type: import('vue').PropType<'show' | 'if'>
    default: string
  }
  arrowStyle: import('vue').PropType<string | import('vue').CSSProperties>
  flip: {
    type: BooleanConstructor
    default: boolean
  }
  animated: {
    type: BooleanConstructor
    default: boolean
  }
  width: {
    type: import('vue').PropType<number | 'trigger'>
    default: undefined
  }
  overlap: BooleanConstructor
  internalExtraClass: {
    type: import('vue').PropType<string[]>
    default: () => never[]
  }
  onClickoutside: import('vue').PropType<(e: MouseEvent) => void>
  'onUpdate:show': import('vue').PropType<
    import('../../_utils').MaybeArray<(value: boolean) => void>
  >
  onUpdateShow: import('vue').PropType<
    import('../../_utils').MaybeArray<(value: boolean) => void>
  >
  zIndex: NumberConstructor
  to: {
    type: import('vue').PropType<string | boolean | HTMLElement>
    default: undefined
  }
  internalSyncTargetWithParent: BooleanConstructor
  internalInheritedEventHandlers: {
    type: import('vue').PropType<
      import('../../popover/src/Popover').TriggerEventHandlers[]
    >
    default: () => never[]
  }
  onShow: import('vue').PropType<
    import('../../_utils').MaybeArray<(value: boolean) => void> | undefined
  >
  onHide: import('vue').PropType<
    import('../../_utils').MaybeArray<(value: boolean) => void> | undefined
  >
  arrow: {
    type: import('vue').PropType<boolean | undefined>
    default: undefined
  }
  minWidth: NumberConstructor
  maxWidth: NumberConstructor
}
export declare type TooltipProps = ExtractPublicPropTypes<typeof tooltipProps>
declare const _default: import('vue').DefineComponent<
  {
    theme: import('vue').PropType<
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
    themeOverrides: import('vue').PropType<
      import('../../_mixins/use-theme').ExtractThemeOverrides<
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
    >
    builtinThemeOverrides: import('vue').PropType<
      import('../../_mixins/use-theme').ExtractThemeOverrides<
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
    >
    show: {
      type: import('vue').PropType<boolean | undefined>
      default: undefined
    }
    defaultShow: BooleanConstructor
    showArrow: {
      type: BooleanConstructor
      default: boolean
    }
    trigger: {
      type: import('vue').PropType<import('../../popover').PopoverTrigger>
      default: string
    }
    delay: {
      type: NumberConstructor
      default: number
    }
    duration: {
      type: NumberConstructor
      default: number
    }
    raw: BooleanConstructor
    placement: {
      type: import('vue').PropType<import('vueuc').FollowerPlacement>
      default: string
    }
    x: NumberConstructor
    y: NumberConstructor
    disabled: BooleanConstructor
    getDisabled: import('vue').PropType<() => boolean>
    displayDirective: {
      type: import('vue').PropType<'show' | 'if'>
      default: string
    }
    arrowStyle: import('vue').PropType<string | import('vue').CSSProperties>
    flip: {
      type: BooleanConstructor
      default: boolean
    }
    animated: {
      type: BooleanConstructor
      default: boolean
    }
    width: {
      type: import('vue').PropType<number | 'trigger'>
      default: undefined
    }
    overlap: BooleanConstructor
    internalExtraClass: {
      type: import('vue').PropType<string[]>
      default: () => never[]
    }
    onClickoutside: import('vue').PropType<(e: MouseEvent) => void>
    'onUpdate:show': import('vue').PropType<
      import('../../_utils').MaybeArray<(value: boolean) => void>
    >
    onUpdateShow: import('vue').PropType<
      import('../../_utils').MaybeArray<(value: boolean) => void>
    >
    zIndex: NumberConstructor
    to: {
      type: import('vue').PropType<string | boolean | HTMLElement>
      default: undefined
    }
    internalSyncTargetWithParent: BooleanConstructor
    internalInheritedEventHandlers: {
      type: import('vue').PropType<
        import('../../popover/src/Popover').TriggerEventHandlers[]
      >
      default: () => never[]
    }
    onShow: import('vue').PropType<
      import('../../_utils').MaybeArray<(value: boolean) => void> | undefined
    >
    onHide: import('vue').PropType<
      import('../../_utils').MaybeArray<(value: boolean) => void> | undefined
    >
    arrow: {
      type: import('vue').PropType<boolean | undefined>
      default: undefined
    }
    minWidth: NumberConstructor
    maxWidth: NumberConstructor
  },
  {
    popoverRef: import('vue').Ref<{
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
      self: {
        borderRadius: string
        boxShadow: string
        color: string
        textColor: string
        padding: string
      }
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
      }
    }>
    popoverThemeOverrides: import('vue').ComputedRef<{
      borderRadius: string
      boxShadow: string
      color: string
      textColor: string
      padding: string
    }>
    syncPosition: () => void
    setShow: (value: boolean) => void
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
      theme?: unknown
      themeOverrides?: unknown
      builtinThemeOverrides?: unknown
      show?: unknown
      defaultShow?: unknown
      showArrow?: unknown
      trigger?: unknown
      delay?: unknown
      duration?: unknown
      raw?: unknown
      placement?: unknown
      x?: unknown
      y?: unknown
      disabled?: unknown
      getDisabled?: unknown
      displayDirective?: unknown
      arrowStyle?: unknown
      flip?: unknown
      animated?: unknown
      width?: unknown
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
    } & {
      flip: boolean
      disabled: boolean
      duration: number
      raw: boolean
      placement: import('vueuc').FollowerPlacement
      overlap: boolean
      trigger: import('../../popover').PopoverTrigger
      showArrow: boolean
      delay: number
      displayDirective: 'show' | 'if'
      animated: boolean
      defaultShow: boolean
      internalExtraClass: string[]
      internalSyncTargetWithParent: boolean
      internalInheritedEventHandlers: import('../../popover/src/Popover').TriggerEventHandlers[]
    } & {
      show?: boolean | undefined
      x?: number | undefined
      y?: number | undefined
      maxWidth?: number | undefined
      minWidth?: number | undefined
      width?: number | 'trigger' | undefined
      zIndex?: number | undefined
      to?: string | boolean | HTMLElement | undefined
      theme?:
        | import('../../_mixins').Theme<
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
        | undefined
      themeOverrides?:
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
      builtinThemeOverrides?:
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
    }
  >,
  {
    show: boolean | undefined
    flip: boolean
    width: number | 'trigger'
    disabled: boolean
    duration: number
    to: string | boolean | HTMLElement
    raw: boolean
    placement: import('vueuc').FollowerPlacement
    overlap: boolean
    trigger: import('../../popover').PopoverTrigger
    showArrow: boolean
    delay: number
    displayDirective: 'show' | 'if'
    animated: boolean
    defaultShow: boolean
    internalExtraClass: string[]
    internalSyncTargetWithParent: boolean
    internalInheritedEventHandlers: import('../../popover/src/Popover').TriggerEventHandlers[]
    arrow: boolean | undefined
  }
>
export default _default