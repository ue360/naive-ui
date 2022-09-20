import { CSSProperties, PropType } from 'vue'
import type { ExtractPublicPropTypes } from '../../_utils'
declare const statisticProps: {
  label: {
    type: StringConstructor
    default: undefined
  }
  value: {
    type: (StringConstructor | NumberConstructor)[]
    default: undefined
  }
  valueStyle: {
    type: PropType<string | CSSProperties | undefined>
    default: undefined
  }
  theme: PropType<
    import('../../_mixins').Theme<
      'Statistic',
      {
        labelFontSize: string
        labelFontWeight: string
        valueFontWeight: string
        labelTextColor: string
        valuePrefixTextColor: string
        valueSuffixTextColor: string
        valueTextColor: string
      },
      any
    >
  >
  themeOverrides: PropType<
    import('../../_mixins/use-theme').ExtractThemeOverrides<
      import('../../_mixins').Theme<
        'Statistic',
        {
          labelFontSize: string
          labelFontWeight: string
          valueFontWeight: string
          labelTextColor: string
          valuePrefixTextColor: string
          valueSuffixTextColor: string
          valueTextColor: string
        },
        any
      >
    >
  >
  builtinThemeOverrides: PropType<
    import('../../_mixins/use-theme').ExtractThemeOverrides<
      import('../../_mixins').Theme<
        'Statistic',
        {
          labelFontSize: string
          labelFontWeight: string
          valueFontWeight: string
          labelTextColor: string
          valuePrefixTextColor: string
          valueSuffixTextColor: string
          valueTextColor: string
        },
        any
      >
    >
  >
}
export declare type StatisticProps = ExtractPublicPropTypes<
  typeof statisticProps
>
declare const _default: import('vue').DefineComponent<
  {
    label: {
      type: StringConstructor
      default: undefined
    }
    value: {
      type: (StringConstructor | NumberConstructor)[]
      default: undefined
    }
    valueStyle: {
      type: PropType<string | CSSProperties | undefined>
      default: undefined
    }
    theme: PropType<
      import('../../_mixins').Theme<
        'Statistic',
        {
          labelFontSize: string
          labelFontWeight: string
          valueFontWeight: string
          labelTextColor: string
          valuePrefixTextColor: string
          valueSuffixTextColor: string
          valueTextColor: string
        },
        any
      >
    >
    themeOverrides: PropType<
      import('../../_mixins/use-theme').ExtractThemeOverrides<
        import('../../_mixins').Theme<
          'Statistic',
          {
            labelFontSize: string
            labelFontWeight: string
            valueFontWeight: string
            labelTextColor: string
            valuePrefixTextColor: string
            valueSuffixTextColor: string
            valueTextColor: string
          },
          any
        >
      >
    >
    builtinThemeOverrides: PropType<
      import('../../_mixins/use-theme').ExtractThemeOverrides<
        import('../../_mixins').Theme<
          'Statistic',
          {
            labelFontSize: string
            labelFontWeight: string
            valueFontWeight: string
            labelTextColor: string
            valuePrefixTextColor: string
            valueSuffixTextColor: string
            valueTextColor: string
          },
          any
        >
      >
    >
  },
  {
    mergedClsPrefix: import('vue').ComputedRef<string>
    cssVars: import('vue').ComputedRef<{
      '--bezier': string
      '--label-font-size': string
      '--label-font-weight': string
      '--label-text-color': string
      '--value-font-weight': string
      '--value-prefix-text-color': string
      '--value-suffix-text-color': string
      '--value-text-color': string
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
      label?: unknown
      value?: unknown
      valueStyle?: unknown
      theme?: unknown
      themeOverrides?: unknown
      builtinThemeOverrides?: unknown
    } & {} & {
      value?: string | number | undefined
      label?: string | undefined
      theme?:
        | import('../../_mixins').Theme<
            'Statistic',
            {
              labelFontSize: string
              labelFontWeight: string
              valueFontWeight: string
              labelTextColor: string
              valuePrefixTextColor: string
              valueSuffixTextColor: string
              valueTextColor: string
            },
            any
          >
        | undefined
      themeOverrides?:
        | import('../../_mixins/use-theme').ExtractThemeOverrides<
            import('../../_mixins').Theme<
              'Statistic',
              {
                labelFontSize: string
                labelFontWeight: string
                valueFontWeight: string
                labelTextColor: string
                valuePrefixTextColor: string
                valueSuffixTextColor: string
                valueTextColor: string
              },
              any
            >
          >
        | undefined
      builtinThemeOverrides?:
        | import('../../_mixins/use-theme').ExtractThemeOverrides<
            import('../../_mixins').Theme<
              'Statistic',
              {
                labelFontSize: string
                labelFontWeight: string
                valueFontWeight: string
                labelTextColor: string
                valuePrefixTextColor: string
                valueSuffixTextColor: string
                valueTextColor: string
              },
              any
            >
          >
        | undefined
      valueStyle?: string | CSSProperties | undefined
    }
  >,
  {
    value: string | number
    label: string
    valueStyle: string | CSSProperties | undefined
  }
>
export default _default