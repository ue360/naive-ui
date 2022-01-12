import { PropType, CSSProperties } from 'vue'
import { ExtractPublicPropTypes } from '../../_utils'
import { Status } from './interface'
declare const progressProps: {
  readonly processing: BooleanConstructor
  readonly type: {
    readonly type: PropType<'circle' | 'line' | 'multiple-circle'>
    readonly default: 'line'
  }
  readonly status: {
    readonly type: PropType<Status>
    readonly default: 'default'
  }
  readonly railColor: PropType<string | string[]>
  readonly railStyle: PropType<
    string | CSSProperties | (string | CSSProperties)[]
  >
  readonly color: PropType<string | string[]>
  readonly viewBoxWidth: {
    readonly type: NumberConstructor
    readonly default: 100
  }
  readonly strokeWidth: {
    readonly type: NumberConstructor
    readonly default: 7
  }
  readonly percentage: PropType<number | number[]>
  readonly unit: {
    readonly type: StringConstructor
    readonly default: '%'
  }
  readonly showIndicator: {
    readonly type: BooleanConstructor
    readonly default: true
  }
  readonly indicatorPosition: {
    readonly type: PropType<'inside' | 'outside'>
    readonly default: 'outside'
  }
  readonly indicatorPlacement: {
    readonly type: PropType<'inside' | 'outside'>
    readonly default: 'outside'
  }
  readonly indicatorTextColor: StringConstructor
  readonly circleGap: {
    readonly type: NumberConstructor
    readonly default: 1
  }
  readonly height: NumberConstructor
  readonly borderRadius: PropType<string | number>
  readonly fillBorderRadius: PropType<string | number>
  readonly theme: PropType<
    import('../../_mixins').Theme<
      'Progress',
      {
        fontSize: string
        fontSizeCircle: string
        fontWeightCircle: string
        railColor: string
        railHeight: string
        iconSizeCircle: string
        iconSizeLine: string
        iconColor: string
        iconColorInfo: string
        iconColorSuccess: string
        iconColorWarning: string
        iconColorError: string
        textColorCircle: string
        textColorLineInner: string
        textColorLineOuter: string
        fillColor: string
        fillColorInfo: string
        fillColorSuccess: string
        fillColorWarning: string
        fillColorError: string
        lineBgProcessing: string
      },
      any
    >
  >
  readonly themeOverrides: PropType<
    import('../../_mixins/use-theme').ExtractThemeOverrides<
      import('../../_mixins').Theme<
        'Progress',
        {
          fontSize: string
          fontSizeCircle: string
          fontWeightCircle: string
          railColor: string
          railHeight: string
          iconSizeCircle: string
          iconSizeLine: string
          iconColor: string
          iconColorInfo: string
          iconColorSuccess: string
          iconColorWarning: string
          iconColorError: string
          textColorCircle: string
          textColorLineInner: string
          textColorLineOuter: string
          fillColor: string
          fillColorInfo: string
          fillColorSuccess: string
          fillColorWarning: string
          fillColorError: string
          lineBgProcessing: string
        },
        any
      >
    >
  >
  readonly builtinThemeOverrides: PropType<
    import('../../_mixins/use-theme').ExtractThemeOverrides<
      import('../../_mixins').Theme<
        'Progress',
        {
          fontSize: string
          fontSizeCircle: string
          fontWeightCircle: string
          railColor: string
          railHeight: string
          iconSizeCircle: string
          iconSizeLine: string
          iconColor: string
          iconColorInfo: string
          iconColorSuccess: string
          iconColorWarning: string
          iconColorError: string
          textColorCircle: string
          textColorLineInner: string
          textColorLineOuter: string
          fillColor: string
          fillColorInfo: string
          fillColorSuccess: string
          fillColorWarning: string
          fillColorError: string
          lineBgProcessing: string
        },
        any
      >
    >
  >
}
export declare type ProgressProps = ExtractPublicPropTypes<typeof progressProps>
declare const _default: import('vue').DefineComponent<
  {
    readonly processing: BooleanConstructor
    readonly type: {
      readonly type: PropType<'circle' | 'line' | 'multiple-circle'>
      readonly default: 'line'
    }
    readonly status: {
      readonly type: PropType<Status>
      readonly default: 'default'
    }
    readonly railColor: PropType<string | string[]>
    readonly railStyle: PropType<
      string | CSSProperties | (string | CSSProperties)[]
    >
    readonly color: PropType<string | string[]>
    readonly viewBoxWidth: {
      readonly type: NumberConstructor
      readonly default: 100
    }
    readonly strokeWidth: {
      readonly type: NumberConstructor
      readonly default: 7
    }
    readonly percentage: PropType<number | number[]>
    readonly unit: {
      readonly type: StringConstructor
      readonly default: '%'
    }
    readonly showIndicator: {
      readonly type: BooleanConstructor
      readonly default: true
    }
    readonly indicatorPosition: {
      readonly type: PropType<'inside' | 'outside'>
      readonly default: 'outside'
    }
    readonly indicatorPlacement: {
      readonly type: PropType<'inside' | 'outside'>
      readonly default: 'outside'
    }
    readonly indicatorTextColor: StringConstructor
    readonly circleGap: {
      readonly type: NumberConstructor
      readonly default: 1
    }
    readonly height: NumberConstructor
    readonly borderRadius: PropType<string | number>
    readonly fillBorderRadius: PropType<string | number>
    readonly theme: PropType<
      import('../../_mixins').Theme<
        'Progress',
        {
          fontSize: string
          fontSizeCircle: string
          fontWeightCircle: string
          railColor: string
          railHeight: string
          iconSizeCircle: string
          iconSizeLine: string
          iconColor: string
          iconColorInfo: string
          iconColorSuccess: string
          iconColorWarning: string
          iconColorError: string
          textColorCircle: string
          textColorLineInner: string
          textColorLineOuter: string
          fillColor: string
          fillColorInfo: string
          fillColorSuccess: string
          fillColorWarning: string
          fillColorError: string
          lineBgProcessing: string
        },
        any
      >
    >
    readonly themeOverrides: PropType<
      import('../../_mixins/use-theme').ExtractThemeOverrides<
        import('../../_mixins').Theme<
          'Progress',
          {
            fontSize: string
            fontSizeCircle: string
            fontWeightCircle: string
            railColor: string
            railHeight: string
            iconSizeCircle: string
            iconSizeLine: string
            iconColor: string
            iconColorInfo: string
            iconColorSuccess: string
            iconColorWarning: string
            iconColorError: string
            textColorCircle: string
            textColorLineInner: string
            textColorLineOuter: string
            fillColor: string
            fillColorInfo: string
            fillColorSuccess: string
            fillColorWarning: string
            fillColorError: string
            lineBgProcessing: string
          },
          any
        >
      >
    >
    readonly builtinThemeOverrides: PropType<
      import('../../_mixins/use-theme').ExtractThemeOverrides<
        import('../../_mixins').Theme<
          'Progress',
          {
            fontSize: string
            fontSizeCircle: string
            fontWeightCircle: string
            railColor: string
            railHeight: string
            iconSizeCircle: string
            iconSizeLine: string
            iconColor: string
            iconColorInfo: string
            iconColorSuccess: string
            iconColorWarning: string
            iconColorError: string
            textColorCircle: string
            textColorLineInner: string
            textColorLineOuter: string
            fillColor: string
            fillColorInfo: string
            fillColorSuccess: string
            fillColorWarning: string
            fillColorError: string
            lineBgProcessing: string
          },
          any
        >
      >
    >
  },
  {
    mergedClsPrefix: import('vue').ComputedRef<string>
    mergedIndicatorPlacement: import('vue').ComputedRef<'inside' | 'outside'>
    cssVars: import('vue').ComputedRef<{
      '--bezier': string
      '--fill-color': string
      '--font-size': string
      '--font-size-circle': string
      '--font-weight-circle': string
      '--icon-color': string
      '--icon-size-circle': string
      '--icon-size-line': string
      '--line-bg-processing': string
      '--rail-color': string
      '--rail-height': string
      '--text-color-circle': string
      '--text-color-line-inner': string
      '--text-color-line-outer': string
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
      readonly processing?: unknown
      readonly type?: unknown
      readonly status?: unknown
      readonly railColor?: unknown
      readonly railStyle?: unknown
      readonly color?: unknown
      readonly viewBoxWidth?: unknown
      readonly strokeWidth?: unknown
      readonly percentage?: unknown
      readonly unit?: unknown
      readonly showIndicator?: unknown
      readonly indicatorPosition?: unknown
      readonly indicatorPlacement?: unknown
      readonly indicatorTextColor?: unknown
      readonly circleGap?: unknown
      readonly height?: unknown
      readonly borderRadius?: unknown
      readonly fillBorderRadius?: unknown
      readonly theme?: unknown
      readonly themeOverrides?: unknown
      readonly builtinThemeOverrides?: unknown
    } & {
      type: 'circle' | 'line' | 'multiple-circle'
      strokeWidth: number
      processing: boolean
      status: Status
      indicatorPlacement: 'inside' | 'outside'
      unit: string
      showIndicator: boolean
      viewBoxWidth: number
      circleGap: number
      indicatorPosition: 'inside' | 'outside'
    } & {
      color?: string | string[] | undefined
      height?: number | undefined
      borderRadius?: string | number | undefined
      theme?:
        | import('../../_mixins').Theme<
            'Progress',
            {
              fontSize: string
              fontSizeCircle: string
              fontWeightCircle: string
              railColor: string
              railHeight: string
              iconSizeCircle: string
              iconSizeLine: string
              iconColor: string
              iconColorInfo: string
              iconColorSuccess: string
              iconColorWarning: string
              iconColorError: string
              textColorCircle: string
              textColorLineInner: string
              textColorLineOuter: string
              fillColor: string
              fillColorInfo: string
              fillColorSuccess: string
              fillColorWarning: string
              fillColorError: string
              lineBgProcessing: string
            },
            any
          >
        | undefined
      themeOverrides?:
        | import('../../_mixins/use-theme').ExtractThemeOverrides<
            import('../../_mixins').Theme<
              'Progress',
              {
                fontSize: string
                fontSizeCircle: string
                fontWeightCircle: string
                railColor: string
                railHeight: string
                iconSizeCircle: string
                iconSizeLine: string
                iconColor: string
                iconColorInfo: string
                iconColorSuccess: string
                iconColorWarning: string
                iconColorError: string
                textColorCircle: string
                textColorLineInner: string
                textColorLineOuter: string
                fillColor: string
                fillColorInfo: string
                fillColorSuccess: string
                fillColorWarning: string
                fillColorError: string
                lineBgProcessing: string
              },
              any
            >
          >
        | undefined
      builtinThemeOverrides?:
        | import('../../_mixins/use-theme').ExtractThemeOverrides<
            import('../../_mixins').Theme<
              'Progress',
              {
                fontSize: string
                fontSizeCircle: string
                fontWeightCircle: string
                railColor: string
                railHeight: string
                iconSizeCircle: string
                iconSizeLine: string
                iconColor: string
                iconColorInfo: string
                iconColorSuccess: string
                iconColorWarning: string
                iconColorError: string
                textColorCircle: string
                textColorLineInner: string
                textColorLineOuter: string
                fillColor: string
                fillColorInfo: string
                fillColorSuccess: string
                fillColorWarning: string
                fillColorError: string
                lineBgProcessing: string
              },
              any
            >
          >
        | undefined
      railColor?: string | string[] | undefined
      indicatorTextColor?: string | undefined
      percentage?: number | number[] | undefined
      fillBorderRadius?: string | number | undefined
      railStyle?:
        | string
        | CSSProperties
        | (string | CSSProperties)[]
        | undefined
    }
  >,
  {
    type: 'circle' | 'line' | 'multiple-circle'
    strokeWidth: number
    processing: boolean
    status: Status
    indicatorPlacement: 'inside' | 'outside'
    unit: string
    showIndicator: boolean
    viewBoxWidth: number
    circleGap: number
    indicatorPosition: 'inside' | 'outside'
  }
>
export default _default
