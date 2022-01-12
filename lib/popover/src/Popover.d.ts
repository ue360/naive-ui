import { PropType, CSSProperties, ComputedRef, Ref } from 'vue'
import { FollowerPlacement } from 'vueuc'
import type {
  ExtractPublicPropTypes,
  ExtractInternalPropTypes,
  MaybeArray
} from '../../_utils'
import type { PopoverTrigger, InternalRenderBody } from './interface'
export interface TriggerEventHandlers {
  onClick: (e: MouseEvent) => void
  onMouseenter: (e: MouseEvent) => void
  onMouseleave: (e: MouseEvent) => void
  onFocus: (e: FocusEvent) => void
  onBlur: (e: FocusEvent) => void
}
interface BodyInstance {
  syncPosition: () => void
  [key: string]: unknown
}
export interface PopoverInjection {
  handleMouseLeave: (e: MouseEvent) => void
  handleMouseEnter: (e: MouseEvent) => void
  handleMouseMoveOutside: (e: MouseEvent) => void
  handleClickOutside: (e: MouseEvent) => void
  getTriggerElement: () => HTMLElement
  setBodyInstance: (value: BodyInstance | null) => void
  zIndexRef: Ref<number | undefined>
  internalRenderBodyRef: Ref<InternalRenderBody | undefined>
  positionManuallyRef: ComputedRef<boolean>
  isMountedRef: Ref<boolean>
  extraClassRef: Ref<string[]>
}
export declare const popoverBaseProps: {
  show: {
    type: PropType<boolean | undefined>
    default: undefined
  }
  defaultShow: BooleanConstructor
  showArrow: {
    type: BooleanConstructor
    default: boolean
  }
  trigger: {
    type: PropType<PopoverTrigger>
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
    type: PropType<FollowerPlacement>
    default: string
  }
  x: NumberConstructor
  y: NumberConstructor
  disabled: BooleanConstructor
  getDisabled: PropType<() => boolean>
  displayDirective: {
    type: PropType<'show' | 'if'>
    default: string
  }
  arrowStyle: PropType<string | CSSProperties>
  flip: {
    type: BooleanConstructor
    default: boolean
  }
  animated: {
    type: BooleanConstructor
    default: boolean
  }
  width: {
    type: PropType<number | 'trigger'>
    default: undefined
  }
  overlap: BooleanConstructor
  internalExtraClass: {
    type: PropType<string[]>
    default: () => never[]
  }
  onClickoutside: PropType<(e: MouseEvent) => void>
  'onUpdate:show': PropType<MaybeArray<(value: boolean) => void>>
  onUpdateShow: PropType<MaybeArray<(value: boolean) => void>>
  zIndex: NumberConstructor
  to: {
    type: PropType<string | boolean | HTMLElement>
    default: undefined
  }
  internalSyncTargetWithParent: BooleanConstructor
  internalInheritedEventHandlers: {
    type: PropType<TriggerEventHandlers[]>
    default: () => never[]
  }
  /** @deprecated */
  onShow: PropType<MaybeArray<(value: boolean) => void> | undefined>
  /** @deprecated */
  onHide: PropType<MaybeArray<(value: boolean) => void> | undefined>
  /** @deprecated */
  arrow: {
    type: PropType<boolean | undefined>
    default: undefined
  }
  /** @deprecated */
  minWidth: NumberConstructor
  /** @deprecated */
  maxWidth: NumberConstructor
}
declare const popoverProps: {
  internalRenderBody: PropType<InternalRenderBody>
  show: {
    type: PropType<boolean | undefined>
    default: undefined
  }
  defaultShow: BooleanConstructor
  showArrow: {
    type: BooleanConstructor
    default: boolean
  }
  trigger: {
    type: PropType<PopoverTrigger>
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
    type: PropType<FollowerPlacement>
    default: string
  }
  x: NumberConstructor
  y: NumberConstructor
  disabled: BooleanConstructor
  getDisabled: PropType<() => boolean>
  displayDirective: {
    type: PropType<'show' | 'if'>
    default: string
  }
  arrowStyle: PropType<string | CSSProperties>
  flip: {
    type: BooleanConstructor
    default: boolean
  }
  animated: {
    type: BooleanConstructor
    default: boolean
  }
  width: {
    type: PropType<number | 'trigger'>
    default: undefined
  }
  overlap: BooleanConstructor
  internalExtraClass: {
    type: PropType<string[]>
    default: () => never[]
  }
  onClickoutside: PropType<(e: MouseEvent) => void>
  'onUpdate:show': PropType<MaybeArray<(value: boolean) => void>>
  onUpdateShow: PropType<MaybeArray<(value: boolean) => void>>
  zIndex: NumberConstructor
  to: {
    type: PropType<string | boolean | HTMLElement>
    default: undefined
  }
  internalSyncTargetWithParent: BooleanConstructor
  internalInheritedEventHandlers: {
    type: PropType<TriggerEventHandlers[]>
    default: () => never[]
  }
  /** @deprecated */
  onShow: PropType<MaybeArray<(value: boolean) => void> | undefined>
  /** @deprecated */
  onHide: PropType<MaybeArray<(value: boolean) => void> | undefined>
  /** @deprecated */
  arrow: {
    type: PropType<boolean | undefined>
    default: undefined
  }
  /** @deprecated */
  minWidth: NumberConstructor
  /** @deprecated */
  maxWidth: NumberConstructor
  theme: PropType<
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
  themeOverrides: PropType<
    import('../../_mixins/use-theme').ExtractThemeOverrides<
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
  >
  builtinThemeOverrides: PropType<
    import('../../_mixins/use-theme').ExtractThemeOverrides<
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
  >
}
export declare type PopoverProps = ExtractPublicPropTypes<
  typeof popoverBaseProps
>
export declare type PopoverInternalProps = ExtractInternalPropTypes<
  typeof popoverProps
>
declare const _default: import('vue').DefineComponent<
  {
    internalRenderBody: PropType<InternalRenderBody>
    show: {
      type: PropType<boolean | undefined>
      default: undefined
    }
    defaultShow: BooleanConstructor
    showArrow: {
      type: BooleanConstructor
      default: boolean
    }
    trigger: {
      type: PropType<PopoverTrigger>
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
      type: PropType<FollowerPlacement>
      default: string
    }
    x: NumberConstructor
    y: NumberConstructor
    disabled: BooleanConstructor
    getDisabled: PropType<() => boolean>
    displayDirective: {
      type: PropType<'show' | 'if'>
      default: string
    }
    arrowStyle: PropType<string | CSSProperties>
    flip: {
      type: BooleanConstructor
      default: boolean
    }
    animated: {
      type: BooleanConstructor
      default: boolean
    }
    width: {
      type: PropType<number | 'trigger'>
      default: undefined
    }
    overlap: BooleanConstructor
    internalExtraClass: {
      type: PropType<string[]>
      default: () => never[]
    }
    onClickoutside: PropType<(e: MouseEvent) => void>
    'onUpdate:show': PropType<MaybeArray<(value: boolean) => void>>
    onUpdateShow: PropType<MaybeArray<(value: boolean) => void>>
    zIndex: NumberConstructor
    to: {
      type: PropType<string | boolean | HTMLElement>
      default: undefined
    }
    internalSyncTargetWithParent: BooleanConstructor
    internalInheritedEventHandlers: {
      type: PropType<TriggerEventHandlers[]>
      default: () => never[]
    }
    /** @deprecated */
    onShow: PropType<MaybeArray<(value: boolean) => void> | undefined>
    /** @deprecated */
    onHide: PropType<MaybeArray<(value: boolean) => void> | undefined>
    /** @deprecated */
    arrow: {
      type: PropType<boolean | undefined>
      default: undefined
    }
    /** @deprecated */
    minWidth: NumberConstructor
    /** @deprecated */
    maxWidth: NumberConstructor
    theme: PropType<
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
    themeOverrides: PropType<
      import('../../_mixins/use-theme').ExtractThemeOverrides<
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
    >
    builtinThemeOverrides: PropType<
      import('../../_mixins/use-theme').ExtractThemeOverrides<
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
    >
  },
  {
    binderInstRef: Ref<{
      targetRef: HTMLElement | null
    } | null>
    positionManually: ComputedRef<boolean>
    mergedShowConsideringDisabledProp: ComputedRef<boolean>
    uncontrolledShow: Ref<boolean>
    mergedShowArrow: ComputedRef<boolean>
    getMergedShow: () => boolean
    setShow: (value: boolean) => void
    handleClick: () => void
    handleMouseEnter: () => void
    handleMouseLeave: () => void
    handleFocus: () => void
    handleBlur: () => void
    syncPosition: () => void
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
      internalRenderBody?: unknown
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
      theme?: unknown
      themeOverrides?: unknown
      builtinThemeOverrides?: unknown
    } & {
      flip: boolean
      disabled: boolean
      duration: number
      raw: boolean
      placement: FollowerPlacement
      overlap: boolean
      trigger: PopoverTrigger
      showArrow: boolean
      delay: number
      displayDirective: 'show' | 'if'
      animated: boolean
      defaultShow: boolean
      internalExtraClass: string[]
      internalSyncTargetWithParent: boolean
      internalInheritedEventHandlers: TriggerEventHandlers[]
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
        | undefined
      themeOverrides?:
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
      builtinThemeOverrides?:
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
      arrowStyle?: string | CSSProperties | undefined
      onClickoutside?: ((e: MouseEvent) => void) | undefined
      getDisabled?: (() => boolean) | undefined
      'onUpdate:show'?: MaybeArray<(value: boolean) => void> | undefined
      onUpdateShow?: MaybeArray<(value: boolean) => void> | undefined
      onShow?: MaybeArray<(value: boolean) => void> | undefined
      onHide?: MaybeArray<(value: boolean) => void> | undefined
      arrow?: boolean | undefined
      internalRenderBody?: InternalRenderBody | undefined
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
    placement: FollowerPlacement
    overlap: boolean
    trigger: PopoverTrigger
    showArrow: boolean
    delay: number
    displayDirective: 'show' | 'if'
    animated: boolean
    defaultShow: boolean
    internalExtraClass: string[]
    internalSyncTargetWithParent: boolean
    internalInheritedEventHandlers: TriggerEventHandlers[]
    arrow: boolean | undefined
  }
>
export default _default
