import { PropType } from 'vue'
import type { ExtractPublicPropTypes } from '../../_utils'
export interface ScrollTo {
  (x: number, y: number): void
  (options: { left?: number; top?: number; behavior?: ScrollBehavior }): void
}
export interface ScrollbarInst {
  scrollTo: ScrollTo
}
declare const scrollbarProps: {
  readonly xScrollable: BooleanConstructor
  readonly onScroll: PropType<(e: Event) => void>
  readonly theme: PropType<
    import('../../_mixins').Theme<
      'Scrollbar',
      {
        color: string
        colorHover: string
      },
      any
    >
  >
  readonly themeOverrides: PropType<
    import('../../_mixins/use-theme').ExtractThemeOverrides<
      import('../../_mixins').Theme<
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
    import('../../_mixins/use-theme').ExtractThemeOverrides<
      import('../../_mixins').Theme<
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
declare const Scrollbar: import('vue').DefineComponent<
  {
    readonly xScrollable: BooleanConstructor
    readonly onScroll: PropType<(e: Event) => void>
    readonly theme: PropType<
      import('../../_mixins').Theme<
        'Scrollbar',
        {
          color: string
          colorHover: string
        },
        any
      >
    >
    readonly themeOverrides: PropType<
      import('../../_mixins/use-theme').ExtractThemeOverrides<
        import('../../_mixins').Theme<
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
      import('../../_mixins/use-theme').ExtractThemeOverrides<
        import('../../_mixins').Theme<
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
    scrollbarInstRef: import('vue').Ref<{
      scrollTo: ScrollTo
    } | null>
    scrollTo: ScrollTo
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
      readonly xScrollable?: unknown
      readonly onScroll?: unknown
      readonly theme?: unknown
      readonly themeOverrides?: unknown
      readonly builtinThemeOverrides?: unknown
    } & {
      xScrollable: boolean
    } & {
      onScroll?: ((e: Event) => void) | undefined
      theme?:
        | import('../../_mixins').Theme<
            'Scrollbar',
            {
              color: string
              colorHover: string
            },
            any
          >
        | undefined
      themeOverrides?:
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
      builtinThemeOverrides?:
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
    }
  >,
  {
    xScrollable: boolean
  }
>
export default Scrollbar
