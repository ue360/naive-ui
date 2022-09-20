import { PropType } from 'vue'
import type { ExtractPublicPropTypes } from '../../_utils'
declare const carouselProps: {
  showArrow: BooleanConstructor
  autoplay: BooleanConstructor
  dotPlacement: {
    type: PropType<'left' | 'right' | 'bottom' | 'top'>
    default: string
  }
  interval: {
    type: NumberConstructor
    default: number
  }
  trigger: {
    type: PropType<'click' | 'hover'>
    default: string
  }
  theme: PropType<
    import('../../_mixins').Theme<
      'Carousel',
      {
        dotSize: string
        dotColor: string
        dotColorActive: string
        arrowColor: string
      },
      any
    >
  >
  themeOverrides: PropType<
    import('../../_mixins/use-theme').ExtractThemeOverrides<
      import('../../_mixins').Theme<
        'Carousel',
        {
          dotSize: string
          dotColor: string
          dotColorActive: string
          arrowColor: string
        },
        any
      >
    >
  >
  builtinThemeOverrides: PropType<
    import('../../_mixins/use-theme').ExtractThemeOverrides<
      import('../../_mixins').Theme<
        'Carousel',
        {
          dotSize: string
          dotColor: string
          dotColorActive: string
          arrowColor: string
        },
        any
      >
    >
  >
}
export declare type CarouselProps = ExtractPublicPropTypes<typeof carouselProps>
declare const _default: import('vue').DefineComponent<
  {
    showArrow: BooleanConstructor
    autoplay: BooleanConstructor
    dotPlacement: {
      type: PropType<'left' | 'right' | 'bottom' | 'top'>
      default: string
    }
    interval: {
      type: NumberConstructor
      default: number
    }
    trigger: {
      type: PropType<'click' | 'hover'>
      default: string
    }
    theme: PropType<
      import('../../_mixins').Theme<
        'Carousel',
        {
          dotSize: string
          dotColor: string
          dotColorActive: string
          arrowColor: string
        },
        any
      >
    >
    themeOverrides: PropType<
      import('../../_mixins/use-theme').ExtractThemeOverrides<
        import('../../_mixins').Theme<
          'Carousel',
          {
            dotSize: string
            dotColor: string
            dotColorActive: string
            arrowColor: string
          },
          any
        >
      >
    >
    builtinThemeOverrides: PropType<
      import('../../_mixins/use-theme').ExtractThemeOverrides<
        import('../../_mixins').Theme<
          'Carousel',
          {
            dotSize: string
            dotColor: string
            dotColorActive: string
            arrowColor: string
          },
          any
        >
      >
    >
  },
  {
    selfElRef: import('vue').Ref<HTMLDivElement | null>
    mergedClsPrefix: import('vue').ComputedRef<string>
    current: import('vue').Ref<number>
    lengthRef: {
      value: number
    }
    touching: import('vue').Ref<boolean>
    dragOffset: import('vue').Ref<number>
    prev: () => void
    next: () => void
    setCurrent: (value: number) => void
    handleKeydown: (e: KeyboardEvent, current: number) => void
    handleTouchstart: (e: TouchEvent) => void
    handleTransitionEnd: (e: TransitionEvent) => void
    handleMouseenter: (current: number) => void
    cssVars: import('vue').ComputedRef<{
      '--bezier': string
      '--dot-color': string
      '--dot-color-active': string
      '--dot-size': string
      '--arrow-color': string
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
      showArrow?: unknown
      autoplay?: unknown
      dotPlacement?: unknown
      interval?: unknown
      trigger?: unknown
      theme?: unknown
      themeOverrides?: unknown
      builtinThemeOverrides?: unknown
    } & {
      autoplay: boolean
      trigger: 'click' | 'hover'
      showArrow: boolean
      dotPlacement: 'left' | 'right' | 'bottom' | 'top'
      interval: number
    } & {
      theme?:
        | import('../../_mixins').Theme<
            'Carousel',
            {
              dotSize: string
              dotColor: string
              dotColorActive: string
              arrowColor: string
            },
            any
          >
        | undefined
      themeOverrides?:
        | import('../../_mixins/use-theme').ExtractThemeOverrides<
            import('../../_mixins').Theme<
              'Carousel',
              {
                dotSize: string
                dotColor: string
                dotColorActive: string
                arrowColor: string
              },
              any
            >
          >
        | undefined
      builtinThemeOverrides?:
        | import('../../_mixins/use-theme').ExtractThemeOverrides<
            import('../../_mixins').Theme<
              'Carousel',
              {
                dotSize: string
                dotColor: string
                dotColorActive: string
                arrowColor: string
              },
              any
            >
          >
        | undefined
    }
  >,
  {
    autoplay: boolean
    trigger: 'click' | 'hover'
    showArrow: boolean
    dotPlacement: 'left' | 'right' | 'bottom' | 'top'
    interval: number
  }
>
export default _default