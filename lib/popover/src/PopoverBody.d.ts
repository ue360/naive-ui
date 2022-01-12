import { PropType, CSSProperties, VNode } from 'vue'
import { FollowerPlacement } from 'vueuc'
import type { PopoverTrigger } from './interface'
export declare const popoverBodyProps: {
  to: {
    type: PropType<string | boolean | HTMLElement>
    default: undefined
  }
  show: BooleanConstructor
  trigger: PropType<PopoverTrigger>
  showArrow: BooleanConstructor
  delay: NumberConstructor
  duration: NumberConstructor
  raw: BooleanConstructor
  arrowStyle: PropType<string | CSSProperties>
  displayDirective: PropType<'show' | 'if'>
  x: NumberConstructor
  y: NumberConstructor
  flip: BooleanConstructor
  overlap: BooleanConstructor
  placement: PropType<FollowerPlacement>
  width: PropType<number | 'trigger'>
  animated: BooleanConstructor
  onClickoutside: PropType<(e: MouseEvent) => void>
  /** @deprecated */
  minWidth: NumberConstructor
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
interface RenderArrowProps {
  arrowStyle: string | CSSProperties | undefined
  clsPrefix: string
}
export declare const renderArrow: ({
  arrowStyle,
  clsPrefix
}: RenderArrowProps) => VNode | null
declare const _default: import('vue').DefineComponent<
  {
    to: {
      type: PropType<string | boolean | HTMLElement>
      default: undefined
    }
    show: BooleanConstructor
    trigger: PropType<PopoverTrigger>
    showArrow: BooleanConstructor
    delay: NumberConstructor
    duration: NumberConstructor
    raw: BooleanConstructor
    arrowStyle: PropType<string | CSSProperties>
    displayDirective: PropType<'show' | 'if'>
    x: NumberConstructor
    y: NumberConstructor
    flip: BooleanConstructor
    overlap: BooleanConstructor
    placement: PropType<FollowerPlacement>
    width: PropType<number | 'trigger'>
    animated: BooleanConstructor
    onClickoutside: PropType<(e: MouseEvent) => void>
    /** @deprecated */
    minWidth: NumberConstructor
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
    namespace: import('vue').ComputedRef<string | undefined>
    isMounted: import('vue').Ref<boolean>
    zIndex: import('vue').Ref<number | undefined>
    followerRef: import('vue').Ref<{
      syncPosition: () => void
    } | null>
    adjustedTo: import('vue').ComputedRef<string | HTMLElement>
    followerEnabled: import('vue').Ref<boolean>
    renderContentNode: () => VNode | null
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
      to?: unknown
      show?: unknown
      trigger?: unknown
      showArrow?: unknown
      delay?: unknown
      duration?: unknown
      raw?: unknown
      arrowStyle?: unknown
      displayDirective?: unknown
      x?: unknown
      y?: unknown
      flip?: unknown
      overlap?: unknown
      placement?: unknown
      width?: unknown
      animated?: unknown
      onClickoutside?: unknown
      minWidth?: unknown
      maxWidth?: unknown
      theme?: unknown
      themeOverrides?: unknown
      builtinThemeOverrides?: unknown
    } & {
      show: boolean
      flip: boolean
      raw: boolean
      overlap: boolean
      showArrow: boolean
      animated: boolean
    } & {
      x?: number | undefined
      y?: number | undefined
      maxWidth?: number | undefined
      minWidth?: number | undefined
      width?: number | 'trigger' | undefined
      duration?: number | undefined
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
      placement?: FollowerPlacement | undefined
      trigger?: PopoverTrigger | undefined
      arrowStyle?: string | CSSProperties | undefined
      delay?: number | undefined
      displayDirective?: 'show' | 'if' | undefined
      onClickoutside?: ((e: MouseEvent) => void) | undefined
    }
  >,
  {
    show: boolean
    flip: boolean
    to: string | boolean | HTMLElement
    raw: boolean
    overlap: boolean
    showArrow: boolean
    animated: boolean
  }
>
export default _default
