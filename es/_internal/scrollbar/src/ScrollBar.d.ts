import { PropType, CSSProperties, HTMLAttributes } from 'vue'
import type {
  ExtractInternalPropTypes,
  ExtractPublicPropTypes
} from '../../../_utils'
export interface ScrollTo {
  (x: number, y: number): void
  (options: {
    left?: number
    top?: number
    behavior?: ScrollBehavior
    debounce?: boolean
  }): void
  (options: {
    el: HTMLElement
    behavior?: ScrollBehavior
    debounce?: boolean
  }): void
  (options: {
    index: number
    elSize: number
    behavior?: ScrollBehavior
    debounce?: boolean
  }): void
  (options: {
    position: 'top' | 'bottom'
    behavior?: ScrollBehavior
    debounce?: boolean
  }): void
}
export interface ScrollbarInst {
  scrollTo: ScrollTo
  sync: () => void
  containerRef: HTMLElement | null
  contentRef: HTMLElement | null
  containerScrollTop: number
}
declare const scrollbarProps: {
  readonly size: {
    readonly type: NumberConstructor
    readonly default: 5
  }
  readonly duration: {
    readonly type: NumberConstructor
    readonly default: 0
  }
  readonly scrollable: {
    readonly type: BooleanConstructor
    readonly default: true
  }
  readonly xScrollable: {
    readonly type: BooleanConstructor
    readonly default: false
  }
  readonly container: PropType<() => HTMLElement | null | undefined>
  readonly content: PropType<() => HTMLElement | null | undefined>
  readonly containerStyle: PropType<string | CSSProperties>
  readonly contentClass: StringConstructor
  readonly contentStyle: PropType<string | CSSProperties>
  readonly horizontalRailStyle: PropType<string | CSSProperties>
  readonly verticalRailStyle: PropType<string | CSSProperties>
  readonly onScroll: PropType<(e: Event) => void>
  readonly onWheel: PropType<(e: WheelEvent) => void>
  readonly onResize: PropType<(e: ResizeObserverEntry) => void>
  readonly internalOnUpdateScrollLeft: PropType<(scrollLeft: number) => void>
  readonly theme: PropType<
    import('../../../_mixins').Theme<
      'Scrollbar',
      {
        color: string
        colorHover: string
      },
      any
    >
  >
  readonly themeOverrides: PropType<
    import('../../../_mixins/use-theme').ExtractThemeOverrides<
      import('../../../_mixins').Theme<
        'Scrollbar',
        {
          color: string
          colorHover: string
        },
        any
      >
    >
  >
  readonly builtinThemeOverrides: PropType<
    import('../../../_mixins/use-theme').ExtractThemeOverrides<
      import('../../../_mixins').Theme<
        'Scrollbar',
        {
          color: string
          colorHover: string
        },
        any
      >
    >
  >
}
export declare type ScrollbarProps = ExtractPublicPropTypes<
  typeof scrollbarProps
>
export declare type ScrollbarInternalProps = ExtractInternalPropTypes<
  typeof scrollbarProps
>
declare const Scrollbar: import('vue').DefineComponent<
  {
    readonly size: {
      readonly type: NumberConstructor
      readonly default: 5
    }
    readonly duration: {
      readonly type: NumberConstructor
      readonly default: 0
    }
    readonly scrollable: {
      readonly type: BooleanConstructor
      readonly default: true
    }
    readonly xScrollable: {
      readonly type: BooleanConstructor
      readonly default: false
    }
    readonly container: PropType<() => HTMLElement | null | undefined>
    readonly content: PropType<() => HTMLElement | null | undefined>
    readonly containerStyle: PropType<string | CSSProperties>
    readonly contentClass: StringConstructor
    readonly contentStyle: PropType<string | CSSProperties>
    readonly horizontalRailStyle: PropType<string | CSSProperties>
    readonly verticalRailStyle: PropType<string | CSSProperties>
    readonly onScroll: PropType<(e: Event) => void>
    readonly onWheel: PropType<(e: WheelEvent) => void>
    readonly onResize: PropType<(e: ResizeObserverEntry) => void>
    readonly internalOnUpdateScrollLeft: PropType<(scrollLeft: number) => void>
    readonly theme: PropType<
      import('../../../_mixins').Theme<
        'Scrollbar',
        {
          color: string
          colorHover: string
        },
        any
      >
    >
    readonly themeOverrides: PropType<
      import('../../../_mixins/use-theme').ExtractThemeOverrides<
        import('../../../_mixins').Theme<
          'Scrollbar',
          {
            color: string
            colorHover: string
          },
          any
        >
      >
    >
    readonly builtinThemeOverrides: PropType<
      import('../../../_mixins/use-theme').ExtractThemeOverrides<
        import('../../../_mixins').Theme<
          'Scrollbar',
          {
            color: string
            colorHover: string
          },
          any
        >
      >
    >
  },
  {
    sync: () => void
    scrollTo: ScrollTo
    mergedClsPrefix: import('vue').ComputedRef<string>
    containerScrollTop: import('vue').Ref<number>
    wrapperRef: import('vue').Ref<HTMLElement | null>
    containerRef: import('vue').Ref<HTMLElement | null>
    contentRef: import('vue').Ref<HTMLElement | null>
    yRailRef: import('vue').Ref<HTMLElement | null>
    xRailRef: import('vue').Ref<HTMLElement | null>
    needYBar: import('vue').ComputedRef<boolean>
    needXBar: import('vue').ComputedRef<boolean>
    yBarSizePx: import('vue').ComputedRef<string>
    xBarSizePx: import('vue').ComputedRef<string>
    yBarTopPx: import('vue').ComputedRef<string>
    xBarLeftPx: import('vue').ComputedRef<string>
    isShowXBar: import('vue').Ref<boolean>
    isShowYBar: import('vue').Ref<boolean>
    isIos: boolean
    handleScroll: (e: Event) => void
    handleContentResize: () => void
    handleContainerResize: (e: ResizeObserverEntry) => void
    handleMouseEnterWrapper: () => void
    handleMouseLeaveWrapper: () => void
    handleYScrollMouseDown: (e: MouseEvent) => void
    handleXScrollMouseDown: (e: MouseEvent) => void
    cssVars: import('vue').ComputedRef<{
      '--scrollbar-bezier': string
      '--scrollbar-color': string
      '--scrollbar-color-hover': string
      '--scrollbar-border-radius': string
      '--scrollbar-width': string
      '--scrollbar-height': string
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
      readonly size?: unknown
      readonly duration?: unknown
      readonly scrollable?: unknown
      readonly xScrollable?: unknown
      readonly container?: unknown
      readonly content?: unknown
      readonly containerStyle?: unknown
      readonly contentClass?: unknown
      readonly contentStyle?: unknown
      readonly horizontalRailStyle?: unknown
      readonly verticalRailStyle?: unknown
      readonly onScroll?: unknown
      readonly onWheel?: unknown
      readonly onResize?: unknown
      readonly internalOnUpdateScrollLeft?: unknown
      readonly theme?: unknown
      readonly themeOverrides?: unknown
      readonly builtinThemeOverrides?: unknown
    } & {
      size: number
      duration: number
      scrollable: boolean
      xScrollable: boolean
    } & {
      content?: (() => HTMLElement | null | undefined) | undefined
      onScroll?: ((e: Event) => void) | undefined
      onWheel?: ((e: WheelEvent) => void) | undefined
      theme?:
        | import('../../../_mixins').Theme<
            'Scrollbar',
            {
              color: string
              colorHover: string
            },
            any
          >
        | undefined
      themeOverrides?:
        | import('../../../_mixins/use-theme').ExtractThemeOverrides<
            import('../../../_mixins').Theme<
              'Scrollbar',
              {
                color: string
                colorHover: string
              },
              any
            >
          >
        | undefined
      builtinThemeOverrides?:
        | import('../../../_mixins/use-theme').ExtractThemeOverrides<
            import('../../../_mixins').Theme<
              'Scrollbar',
              {
                color: string
                colorHover: string
              },
              any
            >
          >
        | undefined
      onResize?: ((e: ResizeObserverEntry) => void) | undefined
      container?: (() => HTMLElement | null | undefined) | undefined
      containerStyle?: string | CSSProperties | undefined
      contentClass?: string | undefined
      contentStyle?: string | CSSProperties | undefined
      horizontalRailStyle?: string | CSSProperties | undefined
      verticalRailStyle?: string | CSSProperties | undefined
      internalOnUpdateScrollLeft?: ((scrollLeft: number) => void) | undefined
    }
  >,
  {
    size: number
    duration: number
    scrollable: boolean
    xScrollable: boolean
  }
>
declare type NativeScrollbarProps = Omit<
  HTMLAttributes,
  keyof ScrollbarInternalProps
>
declare type MergedProps = Partial<
  ScrollbarInternalProps & NativeScrollbarProps
>
export default Scrollbar
export declare const XScrollbar: new () => {
  $props: MergedProps
}