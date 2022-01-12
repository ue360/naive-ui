import { PropType } from 'vue'
import { FollowerPlacement } from 'vueuc'
import { MaybeArray, ExtractPublicPropTypes } from '../../_utils'
export interface ClosestMark {
  value: number
  distance: number
  index: number
}
declare const sliderProps: {
  readonly to: {
    type: PropType<string | boolean | HTMLElement>
    default: undefined
  }
  readonly defaultValue: {
    readonly type: PropType<number | number[]>
    readonly default: 0
  }
  readonly marks: PropType<Record<string, string>>
  readonly disabled: {
    readonly type: PropType<boolean | undefined>
    readonly default: undefined
  }
  readonly formatTooltip: PropType<(value: number) => string | number>
  readonly min: {
    readonly type: NumberConstructor
    readonly default: 0
  }
  readonly max: {
    readonly type: NumberConstructor
    readonly default: 100
  }
  readonly step: {
    readonly type: PropType<number | 'mark'>
    readonly default: 1
  }
  readonly range: BooleanConstructor
  readonly value: PropType<number | number[]>
  readonly placement: PropType<FollowerPlacement>
  readonly showTooltip: {
    readonly type: PropType<boolean | undefined>
    readonly default: undefined
  }
  readonly tooltip: {
    readonly type: BooleanConstructor
    readonly default: true
  }
  readonly vertical: BooleanConstructor
  readonly reverse: BooleanConstructor
  readonly 'onUpdate:value': PropType<
    MaybeArray<(value: number & number[]) => void>
  >
  readonly onUpdateValue: PropType<
    MaybeArray<(value: number & number[]) => void>
  >
  readonly theme: PropType<
    import('../../_mixins').Theme<
      'Slider',
      {
        fontSize: string
        railColor: string
        railColorHover: string
        fillColor: string
        fillColorHover: string
        opacityDisabled: string
        handleColor: string
        dotColor: string
        dotColorModal: string
        dotColorPopover: string
        handleBoxShadow: string
        handleBoxShadowHover: string
        handleBoxShadowActive: string
        handleBoxShadowFocus: string
        indicatorColor: string
        indicatorBoxShadow: string
        indicatorTextColor: string
        indicatorBorderRadius: string
        dotBorder: string
        dotBorderActive: string
        dotBoxShadow: string
        railHeight: string
        railWidthVertical: string
        handleSize: string
        dotHeight: string
        dotWidth: string
        dotBorderRadius: string
      },
      any
    >
  >
  readonly themeOverrides: PropType<
    import('../../_mixins/use-theme').ExtractThemeOverrides<
      import('../../_mixins').Theme<
        'Slider',
        {
          fontSize: string
          railColor: string
          railColorHover: string
          fillColor: string
          fillColorHover: string
          opacityDisabled: string
          handleColor: string
          dotColor: string
          dotColorModal: string
          dotColorPopover: string
          handleBoxShadow: string
          handleBoxShadowHover: string
          handleBoxShadowActive: string
          handleBoxShadowFocus: string
          indicatorColor: string
          indicatorBoxShadow: string
          indicatorTextColor: string
          indicatorBorderRadius: string
          dotBorder: string
          dotBorderActive: string
          dotBoxShadow: string
          railHeight: string
          railWidthVertical: string
          handleSize: string
          dotHeight: string
          dotWidth: string
          dotBorderRadius: string
        },
        any
      >
    >
  >
  readonly builtinThemeOverrides: PropType<
    import('../../_mixins/use-theme').ExtractThemeOverrides<
      import('../../_mixins').Theme<
        'Slider',
        {
          fontSize: string
          railColor: string
          railColorHover: string
          fillColor: string
          fillColorHover: string
          opacityDisabled: string
          handleColor: string
          dotColor: string
          dotColorModal: string
          dotColorPopover: string
          handleBoxShadow: string
          handleBoxShadowHover: string
          handleBoxShadowActive: string
          handleBoxShadowFocus: string
          indicatorColor: string
          indicatorBoxShadow: string
          indicatorTextColor: string
          indicatorBorderRadius: string
          dotBorder: string
          dotBorderActive: string
          dotBoxShadow: string
          railHeight: string
          railWidthVertical: string
          handleSize: string
          dotHeight: string
          dotWidth: string
          dotBorderRadius: string
        },
        any
      >
    >
  >
}
export declare type SliderProps = ExtractPublicPropTypes<typeof sliderProps>
declare const _default: import('vue').DefineComponent<
  {
    readonly to: {
      type: PropType<string | boolean | HTMLElement>
      default: undefined
    }
    readonly defaultValue: {
      readonly type: PropType<number | number[]>
      readonly default: 0
    }
    readonly marks: PropType<Record<string, string>>
    readonly disabled: {
      readonly type: PropType<boolean | undefined>
      readonly default: undefined
    }
    readonly formatTooltip: PropType<(value: number) => string | number>
    readonly min: {
      readonly type: NumberConstructor
      readonly default: 0
    }
    readonly max: {
      readonly type: NumberConstructor
      readonly default: 100
    }
    readonly step: {
      readonly type: PropType<number | 'mark'>
      readonly default: 1
    }
    readonly range: BooleanConstructor
    readonly value: PropType<number | number[]>
    readonly placement: PropType<FollowerPlacement>
    readonly showTooltip: {
      readonly type: PropType<boolean | undefined>
      readonly default: undefined
    }
    readonly tooltip: {
      readonly type: BooleanConstructor
      readonly default: true
    }
    readonly vertical: BooleanConstructor
    readonly reverse: BooleanConstructor
    readonly 'onUpdate:value': PropType<
      MaybeArray<(value: number & number[]) => void>
    >
    readonly onUpdateValue: PropType<
      MaybeArray<(value: number & number[]) => void>
    >
    readonly theme: PropType<
      import('../../_mixins').Theme<
        'Slider',
        {
          fontSize: string
          railColor: string
          railColorHover: string
          fillColor: string
          fillColorHover: string
          opacityDisabled: string
          handleColor: string
          dotColor: string
          dotColorModal: string
          dotColorPopover: string
          handleBoxShadow: string
          handleBoxShadowHover: string
          handleBoxShadowActive: string
          handleBoxShadowFocus: string
          indicatorColor: string
          indicatorBoxShadow: string
          indicatorTextColor: string
          indicatorBorderRadius: string
          dotBorder: string
          dotBorderActive: string
          dotBoxShadow: string
          railHeight: string
          railWidthVertical: string
          handleSize: string
          dotHeight: string
          dotWidth: string
          dotBorderRadius: string
        },
        any
      >
    >
    readonly themeOverrides: PropType<
      import('../../_mixins/use-theme').ExtractThemeOverrides<
        import('../../_mixins').Theme<
          'Slider',
          {
            fontSize: string
            railColor: string
            railColorHover: string
            fillColor: string
            fillColorHover: string
            opacityDisabled: string
            handleColor: string
            dotColor: string
            dotColorModal: string
            dotColorPopover: string
            handleBoxShadow: string
            handleBoxShadowHover: string
            handleBoxShadowActive: string
            handleBoxShadowFocus: string
            indicatorColor: string
            indicatorBoxShadow: string
            indicatorTextColor: string
            indicatorBorderRadius: string
            dotBorder: string
            dotBorderActive: string
            dotBoxShadow: string
            railHeight: string
            railWidthVertical: string
            handleSize: string
            dotHeight: string
            dotWidth: string
            dotBorderRadius: string
          },
          any
        >
      >
    >
    readonly builtinThemeOverrides: PropType<
      import('../../_mixins/use-theme').ExtractThemeOverrides<
        import('../../_mixins').Theme<
          'Slider',
          {
            fontSize: string
            railColor: string
            railColorHover: string
            fillColor: string
            fillColorHover: string
            opacityDisabled: string
            handleColor: string
            dotColor: string
            dotColorModal: string
            dotColorPopover: string
            handleBoxShadow: string
            handleBoxShadowHover: string
            handleBoxShadowActive: string
            handleBoxShadowFocus: string
            indicatorColor: string
            indicatorBoxShadow: string
            indicatorTextColor: string
            indicatorBorderRadius: string
            dotBorder: string
            dotBorderActive: string
            dotBoxShadow: string
            railHeight: string
            railWidthVertical: string
            handleSize: string
            dotHeight: string
            dotWidth: string
            dotBorderRadius: string
          },
          any
        >
      >
    >
  },
  {
    mergedClsPrefix: import('vue').ComputedRef<string>
    namespace: import('vue').ComputedRef<string | undefined>
    uncontrolledValue: import('vue').Ref<number | number[]>
    mergedValue: import('vue').ComputedRef<number | number[]>
    mergedDisabled: import('vue').ComputedRef<boolean>
    mergedPlacement: import('vue').ComputedRef<FollowerPlacement>
    isMounted: Readonly<import('vue').Ref<boolean>>
    adjustedTo: import('vue').ComputedRef<string | HTMLElement>
    dotTransitionDisabled: import('vue').Ref<boolean>
    markInfos: import('vue').ComputedRef<
      {
        active: boolean
        label: string
        style: {
          [x: string]: string
        }
      }[]
    >
    isShowTooltip: (index: number) => boolean
    isSkipCSSDetection: (index: number) => boolean
    handleRailRef: import('vue').Ref<HTMLElement | null>
    setHandleRefs: (key: number) => (el: any) => void
    setFollowerRefs: (key: number) => (el: any) => void
    fillStyle: import('vue').ComputedRef<
      | {
          [x: string]: string
          height: string
          width?: undefined
        }
      | {
          [x: string]: string
          width: string
          height?: undefined
        }
      | undefined
    >
    getHandleStyle: (value: number, index: number) => Record<string, any>
    activeIndex: import('vue').Ref<number>
    arrifiedValues: import('vue').ComputedRef<number[]>
    followerEnabledIndexSet: import('vue').Ref<Set<number>>
    handleRailMouseDown: (event: MouseEvent | TouchEvent) => void
    handleHandleFocus: (index: number) => void
    handleHandleBlur: (index: number) => void
    handleHandleMouseEnter: (index: number) => void
    handleHandleMouseLeave: (index: number) => void
    handleRailKeyDown: (e: KeyboardEvent) => void
    indicatorCssVars: import('vue').ComputedRef<{
      '--font-size': string
      '--indicator-border-radius': string
      '--indicator-box-shadow': string
      '--indicator-color': string
      '--indicator-text-color': string
    }>
    cssVars: import('vue').ComputedRef<{
      '--bezier': string
      '--dot-border': string
      '--dot-border-active': string
      '--dot-border-radius': string
      '--dot-box-shadow': string
      '--dot-color': string
      '--dot-color-modal': string
      '--dot-color-popover': string
      '--dot-height': string
      '--dot-width': string
      '--fill-color': string
      '--fill-color-hover': string
      '--font-size': string
      '--handle-box-shadow': string
      '--handle-box-shadow-active': string
      '--handle-box-shadow-focus': string
      '--handle-box-shadow-hover': string
      '--handle-color': string
      '--handle-size': string
      '--opacity-disabled': string
      '--rail-color': string
      '--rail-color-hover': string
      '--rail-height': string
      '--rail-width-vertical': string
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
      readonly to?: unknown
      readonly defaultValue?: unknown
      readonly marks?: unknown
      readonly disabled?: unknown
      readonly formatTooltip?: unknown
      readonly min?: unknown
      readonly max?: unknown
      readonly step?: unknown
      readonly range?: unknown
      readonly value?: unknown
      readonly placement?: unknown
      readonly showTooltip?: unknown
      readonly tooltip?: unknown
      readonly vertical?: unknown
      readonly reverse?: unknown
      readonly 'onUpdate:value'?: unknown
      readonly onUpdateValue?: unknown
      readonly theme?: unknown
      readonly themeOverrides?: unknown
      readonly builtinThemeOverrides?: unknown
    } & {
      range: boolean
      reverse: boolean
      vertical: boolean
      tooltip: boolean
      step: number | 'mark'
      max: number
      min: number
      defaultValue: number | number[]
    } & {
      value?: number | number[] | undefined
      disabled?: boolean | undefined
      to?: string | boolean | HTMLElement | undefined
      theme?:
        | import('../../_mixins').Theme<
            'Slider',
            {
              fontSize: string
              railColor: string
              railColorHover: string
              fillColor: string
              fillColorHover: string
              opacityDisabled: string
              handleColor: string
              dotColor: string
              dotColorModal: string
              dotColorPopover: string
              handleBoxShadow: string
              handleBoxShadowHover: string
              handleBoxShadowActive: string
              handleBoxShadowFocus: string
              indicatorColor: string
              indicatorBoxShadow: string
              indicatorTextColor: string
              indicatorBorderRadius: string
              dotBorder: string
              dotBorderActive: string
              dotBoxShadow: string
              railHeight: string
              railWidthVertical: string
              handleSize: string
              dotHeight: string
              dotWidth: string
              dotBorderRadius: string
            },
            any
          >
        | undefined
      themeOverrides?:
        | import('../../_mixins/use-theme').ExtractThemeOverrides<
            import('../../_mixins').Theme<
              'Slider',
              {
                fontSize: string
                railColor: string
                railColorHover: string
                fillColor: string
                fillColorHover: string
                opacityDisabled: string
                handleColor: string
                dotColor: string
                dotColorModal: string
                dotColorPopover: string
                handleBoxShadow: string
                handleBoxShadowHover: string
                handleBoxShadowActive: string
                handleBoxShadowFocus: string
                indicatorColor: string
                indicatorBoxShadow: string
                indicatorTextColor: string
                indicatorBorderRadius: string
                dotBorder: string
                dotBorderActive: string
                dotBoxShadow: string
                railHeight: string
                railWidthVertical: string
                handleSize: string
                dotHeight: string
                dotWidth: string
                dotBorderRadius: string
              },
              any
            >
          >
        | undefined
      builtinThemeOverrides?:
        | import('../../_mixins/use-theme').ExtractThemeOverrides<
            import('../../_mixins').Theme<
              'Slider',
              {
                fontSize: string
                railColor: string
                railColorHover: string
                fillColor: string
                fillColorHover: string
                opacityDisabled: string
                handleColor: string
                dotColor: string
                dotColorModal: string
                dotColorPopover: string
                handleBoxShadow: string
                handleBoxShadowHover: string
                handleBoxShadowActive: string
                handleBoxShadowFocus: string
                indicatorColor: string
                indicatorBoxShadow: string
                indicatorTextColor: string
                indicatorBorderRadius: string
                dotBorder: string
                dotBorderActive: string
                dotBoxShadow: string
                railHeight: string
                railWidthVertical: string
                handleSize: string
                dotHeight: string
                dotWidth: string
                dotBorderRadius: string
              },
              any
            >
          >
        | undefined
      placement?: FollowerPlacement | undefined
      'onUpdate:value'?:
        | MaybeArray<(value: number & number[]) => void>
        | undefined
      onUpdateValue?: MaybeArray<(value: number & number[]) => void> | undefined
      marks?: Record<string, string> | undefined
      formatTooltip?: ((value: number) => string | number) | undefined
      showTooltip?: boolean | undefined
    }
  >,
  {
    range: boolean
    reverse: boolean
    vertical: boolean
    tooltip: boolean
    disabled: boolean | undefined
    step: number | 'mark'
    max: number
    min: number
    to: string | boolean | HTMLElement
    defaultValue: number | number[]
    showTooltip: boolean | undefined
  }
>
export default _default
