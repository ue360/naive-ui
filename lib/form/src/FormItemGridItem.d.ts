import type { ExtractPublicPropTypes } from '../../_utils'
export declare const formItemGiProps: {
  readonly label: StringConstructor
  readonly labelWidth: import('vue').PropType<string | number>
  readonly labelStyle: import('vue').PropType<
    string | import('vue').CSSProperties
  >
  readonly labelAlign: import('vue').PropType<import('./interface').LabelAlign>
  readonly labelPlacement: import('vue').PropType<
    import('./interface').LabelPlacement
  >
  readonly path: StringConstructor
  readonly first: BooleanConstructor
  readonly rulePath: StringConstructor
  readonly required: BooleanConstructor
  readonly showRequireMark: {
    readonly type: import('vue').PropType<boolean | undefined>
    readonly default: undefined
  }
  readonly requireMarkPlacement: import('vue').PropType<'left' | 'right'>
  readonly showFeedback: {
    readonly type: import('vue').PropType<boolean | undefined>
    readonly default: undefined
  }
  readonly rule: import('vue').PropType<
    import('./interface').FormItemRule | import('./interface').FormItemRule[]
  >
  readonly size: import('vue').PropType<'small' | 'medium' | 'large'>
  readonly ignorePathChange: BooleanConstructor
  readonly validationStatus: import('vue').PropType<
    'error' | 'success' | 'warning'
  >
  readonly feedback: StringConstructor
  readonly showLabel: {
    readonly type: import('vue').PropType<boolean | undefined>
    readonly default: undefined
  }
  readonly theme: import('vue').PropType<
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
  readonly themeOverrides: import('vue').PropType<
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
  readonly builtinThemeOverrides: import('vue').PropType<
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
  readonly span: {
    readonly type: import('vue').PropType<string | number>
    readonly default: 1
  }
  readonly offset: {
    readonly type: import('vue').PropType<string | number>
    readonly default: 0
  }
  readonly suffix: BooleanConstructor
  readonly privateOffset: NumberConstructor
  readonly privateSpan: NumberConstructor
  readonly privateColStart: NumberConstructor
  readonly privateShow: {
    readonly type: BooleanConstructor
    readonly default: true
  }
}
export declare const formItemGiPropKeys: (
  | 'label'
  | 'size'
  | 'first'
  | 'offset'
  | 'span'
  | 'required'
  | 'path'
  | 'theme'
  | 'themeOverrides'
  | 'builtinThemeOverrides'
  | 'suffix'
  | 'labelPlacement'
  | 'labelAlign'
  | 'labelStyle'
  | 'labelWidth'
  | 'showRequireMark'
  | 'requireMarkPlacement'
  | 'showFeedback'
  | 'showLabel'
  | 'rulePath'
  | 'rule'
  | 'ignorePathChange'
  | 'validationStatus'
  | 'feedback'
  | 'privateSpan'
  | 'privateColStart'
  | 'privateShow'
  | 'privateOffset'
)[]
export declare type FormItemGiProps = ExtractPublicPropTypes<
  typeof formItemGiProps
>
declare const _default: import('vue').DefineComponent<
  {
    readonly label: StringConstructor
    readonly labelWidth: import('vue').PropType<string | number>
    readonly labelStyle: import('vue').PropType<
      string | import('vue').CSSProperties
    >
    readonly labelAlign: import('vue').PropType<
      import('./interface').LabelAlign
    >
    readonly labelPlacement: import('vue').PropType<
      import('./interface').LabelPlacement
    >
    readonly path: StringConstructor
    readonly first: BooleanConstructor
    readonly rulePath: StringConstructor
    readonly required: BooleanConstructor
    readonly showRequireMark: {
      readonly type: import('vue').PropType<boolean | undefined>
      readonly default: undefined
    }
    readonly requireMarkPlacement: import('vue').PropType<'left' | 'right'>
    readonly showFeedback: {
      readonly type: import('vue').PropType<boolean | undefined>
      readonly default: undefined
    }
    readonly rule: import('vue').PropType<
      import('./interface').FormItemRule | import('./interface').FormItemRule[]
    >
    readonly size: import('vue').PropType<'small' | 'medium' | 'large'>
    readonly ignorePathChange: BooleanConstructor
    readonly validationStatus: import('vue').PropType<
      'error' | 'success' | 'warning'
    >
    readonly feedback: StringConstructor
    readonly showLabel: {
      readonly type: import('vue').PropType<boolean | undefined>
      readonly default: undefined
    }
    readonly theme: import('vue').PropType<
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
    readonly themeOverrides: import('vue').PropType<
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
    readonly builtinThemeOverrides: import('vue').PropType<
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
    readonly span: {
      readonly type: import('vue').PropType<string | number>
      readonly default: 1
    }
    readonly offset: {
      readonly type: import('vue').PropType<string | number>
      readonly default: 0
    }
    readonly suffix: BooleanConstructor
    readonly privateOffset: NumberConstructor
    readonly privateSpan: NumberConstructor
    readonly privateColStart: NumberConstructor
    readonly privateShow: {
      readonly type: BooleanConstructor
      readonly default: true
    }
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
      readonly label?: unknown
      readonly labelWidth?: unknown
      readonly labelStyle?: unknown
      readonly labelAlign?: unknown
      readonly labelPlacement?: unknown
      readonly path?: unknown
      readonly first?: unknown
      readonly rulePath?: unknown
      readonly required?: unknown
      readonly showRequireMark?: unknown
      readonly requireMarkPlacement?: unknown
      readonly showFeedback?: unknown
      readonly rule?: unknown
      readonly size?: unknown
      readonly ignorePathChange?: unknown
      readonly validationStatus?: unknown
      readonly feedback?: unknown
      readonly showLabel?: unknown
      readonly theme?: unknown
      readonly themeOverrides?: unknown
      readonly builtinThemeOverrides?: unknown
      readonly span?: unknown
      readonly offset?: unknown
      readonly suffix?: unknown
      readonly privateOffset?: unknown
      readonly privateSpan?: unknown
      readonly privateColStart?: unknown
      readonly privateShow?: unknown
    } & {
      first: boolean
      offset: string | number
      span: string | number
      required: boolean
      suffix: boolean
      ignorePathChange: boolean
      privateShow: boolean
    } & {
      label?: string | undefined
      size?: 'small' | 'medium' | 'large' | undefined
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
      privateSpan?: number | undefined
      privateColStart?: number | undefined
      privateOffset?: number | undefined
    }
  >,
  {
    first: boolean
    offset: string | number
    span: string | number
    required: boolean
    suffix: boolean
    showRequireMark: boolean | undefined
    showFeedback: boolean | undefined
    showLabel: boolean | undefined
    ignorePathChange: boolean
    privateShow: boolean
  }
>
export default _default
