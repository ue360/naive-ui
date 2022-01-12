import { PropType, ExtractPropTypes } from 'vue'
import { FormRules, LabelAlign, LabelPlacement, FormInst } from './interface'
import { ExtractPublicPropTypes } from '../../_utils'
declare const formProps: {
  readonly inline: BooleanConstructor
  readonly labelWidth: PropType<string | number>
  readonly labelAlign: PropType<LabelAlign>
  readonly labelPlacement: {
    readonly type: PropType<LabelPlacement>
    readonly default: 'top'
  }
  readonly model: {
    readonly type: PropType<Record<string, any>>
    readonly default: () => void
  }
  readonly rules: PropType<FormRules>
  readonly disabled: BooleanConstructor
  readonly size: PropType<'small' | 'medium' | 'large'>
  readonly showRequireMark: {
    readonly type: PropType<boolean | undefined>
    readonly default: undefined
  }
  readonly requireMarkPlacement: PropType<'left' | 'right'>
  readonly showFeedback: {
    readonly type: BooleanConstructor
    readonly default: true
  }
  readonly onSubmit: {
    readonly type: PropType<(e: Event) => void>
    readonly default: (e: Event) => void
  }
  readonly showLabel: {
    readonly type: PropType<boolean | undefined>
    readonly default: undefined
  }
  readonly theme: PropType<
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
  readonly themeOverrides: PropType<
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
  readonly builtinThemeOverrides: PropType<
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
}
export declare type FormSetupProps = ExtractPropTypes<typeof formProps>
export declare type FormProps = ExtractPublicPropTypes<typeof formProps>
declare const _default: import('vue').DefineComponent<
  {
    readonly inline: BooleanConstructor
    readonly labelWidth: PropType<string | number>
    readonly labelAlign: PropType<LabelAlign>
    readonly labelPlacement: {
      readonly type: PropType<LabelPlacement>
      readonly default: 'top'
    }
    readonly model: {
      readonly type: PropType<Record<string, any>>
      readonly default: () => void
    }
    readonly rules: PropType<FormRules>
    readonly disabled: BooleanConstructor
    readonly size: PropType<'small' | 'medium' | 'large'>
    readonly showRequireMark: {
      readonly type: PropType<boolean | undefined>
      readonly default: undefined
    }
    readonly requireMarkPlacement: PropType<'left' | 'right'>
    readonly showFeedback: {
      readonly type: BooleanConstructor
      readonly default: true
    }
    readonly onSubmit: {
      readonly type: PropType<(e: Event) => void>
      readonly default: (e: Event) => void
    }
    readonly showLabel: {
      readonly type: PropType<boolean | undefined>
      readonly default: undefined
    }
    readonly theme: PropType<
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
    readonly themeOverrides: PropType<
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
    readonly builtinThemeOverrides: PropType<
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
  },
  FormInst & {
    mergedClsPrefix: import('vue').ComputedRef<string>
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
      readonly inline?: unknown
      readonly labelWidth?: unknown
      readonly labelAlign?: unknown
      readonly labelPlacement?: unknown
      readonly model?: unknown
      readonly rules?: unknown
      readonly disabled?: unknown
      readonly size?: unknown
      readonly showRequireMark?: unknown
      readonly requireMarkPlacement?: unknown
      readonly showFeedback?: unknown
      readonly onSubmit?: unknown
      readonly showLabel?: unknown
      readonly theme?: unknown
      readonly themeOverrides?: unknown
      readonly builtinThemeOverrides?: unknown
    } & {
      inline: boolean
      disabled: boolean
      onSubmit: (e: Event) => void
      labelPlacement: LabelPlacement
      model: Record<string, any>
      showFeedback: boolean
    } & {
      size?: 'small' | 'medium' | 'large' | undefined
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
      labelAlign?: LabelAlign | undefined
      labelWidth?: string | number | undefined
      rules?: FormRules | undefined
      showRequireMark?: boolean | undefined
      requireMarkPlacement?: 'left' | 'right' | undefined
      showLabel?: boolean | undefined
    }
  >,
  {
    inline: boolean
    disabled: boolean
    onSubmit: (e: Event) => void
    labelPlacement: LabelPlacement
    model: Record<string, any>
    showRequireMark: boolean | undefined
    showFeedback: boolean
    showLabel: boolean | undefined
  }
>
export default _default
