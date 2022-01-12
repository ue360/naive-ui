import type { ExtractPublicPropTypes } from '../../_utils'
declare const formItemRowProps: {
  label: StringConstructor
  labelWidth: import('vue').PropType<string | number>
  labelStyle: import('vue').PropType<string | import('vue').CSSProperties>
  labelAlign: import('vue').PropType<import('./interface').LabelAlign>
  labelPlacement: import('vue').PropType<import('./interface').LabelPlacement>
  path: StringConstructor
  first: BooleanConstructor
  rulePath: StringConstructor
  required: BooleanConstructor
  showRequireMark: {
    readonly type: import('vue').PropType<boolean | undefined>
    readonly default: undefined
  }
  requireMarkPlacement: import('vue').PropType<'left' | 'right'>
  showFeedback: {
    readonly type: import('vue').PropType<boolean | undefined>
    readonly default: undefined
  }
  rule: import('vue').PropType<
    import('./interface').FormItemRule | import('./interface').FormItemRule[]
  >
  size: import('vue').PropType<'small' | 'medium' | 'large'>
  ignorePathChange: BooleanConstructor
  validationStatus: import('vue').PropType<'error' | 'success' | 'warning'>
  feedback: StringConstructor
  showLabel: {
    readonly type: import('vue').PropType<boolean | undefined>
    readonly default: undefined
  }
  theme: import('vue').PropType<
    import('../../_mixins').Theme<
      'Form',
      {
        lineHeight: string
        labelTextColor: string
        asteriskColor: string
        feedbackTextColorError: string
        feedbackTextColorWarning: string
        feedbackTextColor: string
        blankHeightSmall: string
        blankHeightMedium: string
        blankHeightLarge: string
        feedbackPadding: string
        feedbackHeightSmall: string
        feedbackHeightMedium: string
        feedbackHeightLarge: string
        feedbackFontSizeSmall: string
        feedbackFontSizeMedium: string
        feedbackFontSizeLarge: string
        labelFontSizeLeftSmall: string
        labelFontSizeLeftMedium: string
        labelFontSizeLeftLarge: string
        labelFontSizeTopSmall: string
        labelFontSizeTopMedium: string
        labelFontSizeTopLarge: string
        labelHeightSmall: string
        labelHeightMedium: string
        labelHeightLarge: string
        labelPaddingVertical: string
        labelPaddingHorizontal: string
        labelTextAlignVertical: string
        labelTextAlignHorizontal: string
      },
      any
    >
  >
  themeOverrides: import('vue').PropType<
    import('../../_mixins/use-theme').ExtractThemeOverrides<
      import('../../_mixins').Theme<
        'Form',
        {
          lineHeight: string
          labelTextColor: string
          asteriskColor: string
          feedbackTextColorError: string
          feedbackTextColorWarning: string
          feedbackTextColor: string
          blankHeightSmall: string
          blankHeightMedium: string
          blankHeightLarge: string
          feedbackPadding: string
          feedbackHeightSmall: string
          feedbackHeightMedium: string
          feedbackHeightLarge: string
          feedbackFontSizeSmall: string
          feedbackFontSizeMedium: string
          feedbackFontSizeLarge: string
          labelFontSizeLeftSmall: string
          labelFontSizeLeftMedium: string
          labelFontSizeLeftLarge: string
          labelFontSizeTopSmall: string
          labelFontSizeTopMedium: string
          labelFontSizeTopLarge: string
          labelHeightSmall: string
          labelHeightMedium: string
          labelHeightLarge: string
          labelPaddingVertical: string
          labelPaddingHorizontal: string
          labelTextAlignVertical: string
          labelTextAlignHorizontal: string
        },
        any
      >
    >
  >
  builtinThemeOverrides: import('vue').PropType<
    import('../../_mixins/use-theme').ExtractThemeOverrides<
      import('../../_mixins').Theme<
        'Form',
        {
          lineHeight: string
          labelTextColor: string
          asteriskColor: string
          feedbackTextColorError: string
          feedbackTextColorWarning: string
          feedbackTextColor: string
          blankHeightSmall: string
          blankHeightMedium: string
          blankHeightLarge: string
          feedbackPadding: string
          feedbackHeightSmall: string
          feedbackHeightMedium: string
          feedbackHeightLarge: string
          feedbackFontSizeSmall: string
          feedbackFontSizeMedium: string
          feedbackFontSizeLarge: string
          labelFontSizeLeftSmall: string
          labelFontSizeLeftMedium: string
          labelFontSizeLeftLarge: string
          labelFontSizeTopSmall: string
          labelFontSizeTopMedium: string
          labelFontSizeTopLarge: string
          labelHeightSmall: string
          labelHeightMedium: string
          labelHeightLarge: string
          labelPaddingVertical: string
          labelPaddingHorizontal: string
          labelTextAlignVertical: string
          labelTextAlignHorizontal: string
        },
        any
      >
    >
  >
  span: {
    readonly type: import('vue').PropType<
      import('../../legacy-grid/src/interface').Span
    >
    readonly default: 1
  }
  push: {
    readonly type: import('vue').PropType<
      import('../../legacy-grid/src/interface').Span
    >
    readonly default: 0
  }
  pull: {
    readonly type: import('vue').PropType<
      import('../../legacy-grid/src/interface').Span
    >
    readonly default: 0
  }
  offset: {
    readonly type: import('vue').PropType<
      import('../../legacy-grid/src/interface').Span
    >
    readonly default: 0
  }
  gutter: {
    readonly type: import('vue').PropType<string | number | [number, number]>
    readonly default: 0
  }
  alignItems: StringConstructor
  justifyContent: StringConstructor
}
export declare type FormItemRowProps = ExtractPublicPropTypes<
  typeof formItemRowProps
>
declare const _default: import('vue').DefineComponent<
  {
    label: StringConstructor
    labelWidth: import('vue').PropType<string | number>
    labelStyle: import('vue').PropType<string | import('vue').CSSProperties>
    labelAlign: import('vue').PropType<import('./interface').LabelAlign>
    labelPlacement: import('vue').PropType<import('./interface').LabelPlacement>
    path: StringConstructor
    first: BooleanConstructor
    rulePath: StringConstructor
    required: BooleanConstructor
    showRequireMark: {
      readonly type: import('vue').PropType<boolean | undefined>
      readonly default: undefined
    }
    requireMarkPlacement: import('vue').PropType<'left' | 'right'>
    showFeedback: {
      readonly type: import('vue').PropType<boolean | undefined>
      readonly default: undefined
    }
    rule: import('vue').PropType<
      import('./interface').FormItemRule | import('./interface').FormItemRule[]
    >
    size: import('vue').PropType<'small' | 'medium' | 'large'>
    ignorePathChange: BooleanConstructor
    validationStatus: import('vue').PropType<'error' | 'success' | 'warning'>
    feedback: StringConstructor
    showLabel: {
      readonly type: import('vue').PropType<boolean | undefined>
      readonly default: undefined
    }
    theme: import('vue').PropType<
      import('../../_mixins').Theme<
        'Form',
        {
          lineHeight: string
          labelTextColor: string
          asteriskColor: string
          feedbackTextColorError: string
          feedbackTextColorWarning: string
          feedbackTextColor: string
          blankHeightSmall: string
          blankHeightMedium: string
          blankHeightLarge: string
          feedbackPadding: string
          feedbackHeightSmall: string
          feedbackHeightMedium: string
          feedbackHeightLarge: string
          feedbackFontSizeSmall: string
          feedbackFontSizeMedium: string
          feedbackFontSizeLarge: string
          labelFontSizeLeftSmall: string
          labelFontSizeLeftMedium: string
          labelFontSizeLeftLarge: string
          labelFontSizeTopSmall: string
          labelFontSizeTopMedium: string
          labelFontSizeTopLarge: string
          labelHeightSmall: string
          labelHeightMedium: string
          labelHeightLarge: string
          labelPaddingVertical: string
          labelPaddingHorizontal: string
          labelTextAlignVertical: string
          labelTextAlignHorizontal: string
        },
        any
      >
    >
    themeOverrides: import('vue').PropType<
      import('../../_mixins/use-theme').ExtractThemeOverrides<
        import('../../_mixins').Theme<
          'Form',
          {
            lineHeight: string
            labelTextColor: string
            asteriskColor: string
            feedbackTextColorError: string
            feedbackTextColorWarning: string
            feedbackTextColor: string
            blankHeightSmall: string
            blankHeightMedium: string
            blankHeightLarge: string
            feedbackPadding: string
            feedbackHeightSmall: string
            feedbackHeightMedium: string
            feedbackHeightLarge: string
            feedbackFontSizeSmall: string
            feedbackFontSizeMedium: string
            feedbackFontSizeLarge: string
            labelFontSizeLeftSmall: string
            labelFontSizeLeftMedium: string
            labelFontSizeLeftLarge: string
            labelFontSizeTopSmall: string
            labelFontSizeTopMedium: string
            labelFontSizeTopLarge: string
            labelHeightSmall: string
            labelHeightMedium: string
            labelHeightLarge: string
            labelPaddingVertical: string
            labelPaddingHorizontal: string
            labelTextAlignVertical: string
            labelTextAlignHorizontal: string
          },
          any
        >
      >
    >
    builtinThemeOverrides: import('vue').PropType<
      import('../../_mixins/use-theme').ExtractThemeOverrides<
        import('../../_mixins').Theme<
          'Form',
          {
            lineHeight: string
            labelTextColor: string
            asteriskColor: string
            feedbackTextColorError: string
            feedbackTextColorWarning: string
            feedbackTextColor: string
            blankHeightSmall: string
            blankHeightMedium: string
            blankHeightLarge: string
            feedbackPadding: string
            feedbackHeightSmall: string
            feedbackHeightMedium: string
            feedbackHeightLarge: string
            feedbackFontSizeSmall: string
            feedbackFontSizeMedium: string
            feedbackFontSizeLarge: string
            labelFontSizeLeftSmall: string
            labelFontSizeLeftMedium: string
            labelFontSizeLeftLarge: string
            labelFontSizeTopSmall: string
            labelFontSizeTopMedium: string
            labelFontSizeTopLarge: string
            labelHeightSmall: string
            labelHeightMedium: string
            labelHeightLarge: string
            labelPaddingVertical: string
            labelPaddingHorizontal: string
            labelTextAlignVertical: string
            labelTextAlignHorizontal: string
          },
          any
        >
      >
    >
    span: {
      readonly type: import('vue').PropType<
        import('../../legacy-grid/src/interface').Span
      >
      readonly default: 1
    }
    push: {
      readonly type: import('vue').PropType<
        import('../../legacy-grid/src/interface').Span
      >
      readonly default: 0
    }
    pull: {
      readonly type: import('vue').PropType<
        import('../../legacy-grid/src/interface').Span
      >
      readonly default: 0
    }
    offset: {
      readonly type: import('vue').PropType<
        import('../../legacy-grid/src/interface').Span
      >
      readonly default: 0
    }
    gutter: {
      readonly type: import('vue').PropType<string | number | [number, number]>
      readonly default: 0
    }
    alignItems: StringConstructor
    justifyContent: StringConstructor
  },
  {
    validate: import('./interface').FormItemValidate
    restoreValidation: () => void
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
      labelWidth?: unknown
      labelStyle?: unknown
      labelAlign?: unknown
      labelPlacement?: unknown
      path?: unknown
      first?: unknown
      rulePath?: unknown
      required?: unknown
      showRequireMark?: unknown
      requireMarkPlacement?: unknown
      showFeedback?: unknown
      rule?: unknown
      size?: unknown
      ignorePathChange?: unknown
      validationStatus?: unknown
      feedback?: unknown
      showLabel?: unknown
      theme?: unknown
      themeOverrides?: unknown
      builtinThemeOverrides?: unknown
      span?: unknown
      push?: unknown
      pull?: unknown
      offset?: unknown
      gutter?: unknown
      alignItems?: unknown
      justifyContent?: unknown
    } & {
      push: import('../../legacy-grid/src/interface').Span
      first: boolean
      offset: import('../../legacy-grid/src/interface').Span
      span: import('../../legacy-grid/src/interface').Span
      required: boolean
      ignorePathChange: boolean
      gutter: string | number | [number, number]
      pull: import('../../legacy-grid/src/interface').Span
    } & {
      label?: string | undefined
      size?: 'small' | 'medium' | 'large' | undefined
      alignItems?: string | undefined
      justifyContent?: string | undefined
      path?: string | undefined
      theme?:
        | import('../../_mixins').Theme<
            'Form',
            {
              lineHeight: string
              labelTextColor: string
              asteriskColor: string
              feedbackTextColorError: string
              feedbackTextColorWarning: string
              feedbackTextColor: string
              blankHeightSmall: string
              blankHeightMedium: string
              blankHeightLarge: string
              feedbackPadding: string
              feedbackHeightSmall: string
              feedbackHeightMedium: string
              feedbackHeightLarge: string
              feedbackFontSizeSmall: string
              feedbackFontSizeMedium: string
              feedbackFontSizeLarge: string
              labelFontSizeLeftSmall: string
              labelFontSizeLeftMedium: string
              labelFontSizeLeftLarge: string
              labelFontSizeTopSmall: string
              labelFontSizeTopMedium: string
              labelFontSizeTopLarge: string
              labelHeightSmall: string
              labelHeightMedium: string
              labelHeightLarge: string
              labelPaddingVertical: string
              labelPaddingHorizontal: string
              labelTextAlignVertical: string
              labelTextAlignHorizontal: string
            },
            any
          >
        | undefined
      themeOverrides?:
        | import('../../_mixins/use-theme').ExtractThemeOverrides<
            import('../../_mixins').Theme<
              'Form',
              {
                lineHeight: string
                labelTextColor: string
                asteriskColor: string
                feedbackTextColorError: string
                feedbackTextColorWarning: string
                feedbackTextColor: string
                blankHeightSmall: string
                blankHeightMedium: string
                blankHeightLarge: string
                feedbackPadding: string
                feedbackHeightSmall: string
                feedbackHeightMedium: string
                feedbackHeightLarge: string
                feedbackFontSizeSmall: string
                feedbackFontSizeMedium: string
                feedbackFontSizeLarge: string
                labelFontSizeLeftSmall: string
                labelFontSizeLeftMedium: string
                labelFontSizeLeftLarge: string
                labelFontSizeTopSmall: string
                labelFontSizeTopMedium: string
                labelFontSizeTopLarge: string
                labelHeightSmall: string
                labelHeightMedium: string
                labelHeightLarge: string
                labelPaddingVertical: string
                labelPaddingHorizontal: string
                labelTextAlignVertical: string
                labelTextAlignHorizontal: string
              },
              any
            >
          >
        | undefined
      builtinThemeOverrides?:
        | import('../../_mixins/use-theme').ExtractThemeOverrides<
            import('../../_mixins').Theme<
              'Form',
              {
                lineHeight: string
                labelTextColor: string
                asteriskColor: string
                feedbackTextColorError: string
                feedbackTextColorWarning: string
                feedbackTextColor: string
                blankHeightSmall: string
                blankHeightMedium: string
                blankHeightLarge: string
                feedbackPadding: string
                feedbackHeightSmall: string
                feedbackHeightMedium: string
                feedbackHeightLarge: string
                feedbackFontSizeSmall: string
                feedbackFontSizeMedium: string
                feedbackFontSizeLarge: string
                labelFontSizeLeftSmall: string
                labelFontSizeLeftMedium: string
                labelFontSizeLeftLarge: string
                labelFontSizeTopSmall: string
                labelFontSizeTopMedium: string
                labelFontSizeTopLarge: string
                labelHeightSmall: string
                labelHeightMedium: string
                labelHeightLarge: string
                labelPaddingVertical: string
                labelPaddingHorizontal: string
                labelTextAlignVertical: string
                labelTextAlignHorizontal: string
              },
              any
            >
          >
        | undefined
      labelPlacement?: import('./interface').LabelPlacement | undefined
      labelAlign?: import('./interface').LabelAlign | undefined
      labelStyle?: string | import('vue').CSSProperties | undefined
      labelWidth?: string | number | undefined
      showRequireMark?: boolean | undefined
      requireMarkPlacement?: 'left' | 'right' | undefined
      showFeedback?: boolean | undefined
      showLabel?: boolean | undefined
      rulePath?: string | undefined
      rule?:
        | import('./interface').FormItemRule
        | import('./interface').FormItemRule[]
        | undefined
      validationStatus?: 'error' | 'success' | 'warning' | undefined
      feedback?: string | undefined
    }
  >,
  {
    push: import('../../legacy-grid/src/interface').Span
    first: boolean
    offset: import('../../legacy-grid/src/interface').Span
    span: import('../../legacy-grid/src/interface').Span
    required: boolean
    showRequireMark: boolean | undefined
    showFeedback: boolean | undefined
    showLabel: boolean | undefined
    ignorePathChange: boolean
    gutter: string | number | [number, number]
    pull: import('../../legacy-grid/src/interface').Span
  }
>
export default _default
