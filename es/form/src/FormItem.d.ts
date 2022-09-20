import { PropType, CSSProperties, ExtractPropTypes } from 'vue'
import type { ExtractPublicPropTypes } from '../../_utils'
import {
  FormItemRule,
  LabelAlign,
  LabelPlacement,
  FormItemInternalValidate
} from './interface'
export declare const formItemProps: {
  readonly label: StringConstructor
  readonly labelWidth: PropType<string | number>
  readonly labelStyle: PropType<string | CSSProperties>
  readonly labelAlign: PropType<LabelAlign>
  readonly labelPlacement: PropType<LabelPlacement>
  readonly path: StringConstructor
  readonly first: BooleanConstructor
  readonly rulePath: StringConstructor
  readonly required: BooleanConstructor
  readonly showRequireMark: {
    readonly type: PropType<boolean | undefined>
    readonly default: undefined
  }
  readonly requireMarkPlacement: PropType<'left' | 'right'>
  readonly showFeedback: {
    readonly type: PropType<boolean | undefined>
    readonly default: undefined
  }
  readonly rule: PropType<FormItemRule | FormItemRule[]>
  readonly size: PropType<'small' | 'medium' | 'large'>
  readonly ignorePathChange: BooleanConstructor
  readonly validationStatus: PropType<'error' | 'success' | 'warning'>
  readonly feedback: StringConstructor
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
export declare type FormItemSetupProps = ExtractPropTypes<typeof formItemProps>
export declare type FormItemProps = ExtractPublicPropTypes<typeof formItemProps>
export declare const formItemPropKeys: (
  | 'label'
  | 'size'
  | 'first'
  | 'required'
  | 'path'
  | 'theme'
  | 'themeOverrides'
  | 'builtinThemeOverrides'
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
)[]
declare const _default: import('vue').DefineComponent<
  {
    readonly label: StringConstructor
    readonly labelWidth: PropType<string | number>
    readonly labelStyle: PropType<string | CSSProperties>
    readonly labelAlign: PropType<LabelAlign>
    readonly labelPlacement: PropType<LabelPlacement>
    readonly path: StringConstructor
    readonly first: BooleanConstructor
    readonly rulePath: StringConstructor
    readonly required: BooleanConstructor
    readonly showRequireMark: {
      readonly type: PropType<boolean | undefined>
      readonly default: undefined
    }
    readonly requireMarkPlacement: PropType<'left' | 'right'>
    readonly showFeedback: {
      readonly type: PropType<boolean | undefined>
      readonly default: undefined
    }
    readonly rule: PropType<FormItemRule | FormItemRule[]>
    readonly size: PropType<'small' | 'medium' | 'large'>
    readonly ignorePathChange: BooleanConstructor
    readonly validationStatus: PropType<'error' | 'success' | 'warning'>
    readonly feedback: StringConstructor
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
  {
    cssVars: import('vue').ComputedRef<{
      '--bezier': string
      '--line-height': string
      '--blank-height': string
      '--label-font-size': string
      '--label-text-align': string
      '--label-height': string
      '--label-padding': string
      '--asterisk-color': string
      '--label-text-color': string
      '--feedback-padding': string
      '--feedback-font-size': string
      '--feedback-height': string
      '--feedback-text-color': string
      '--feedback-text-color-warning': string
      '--feedback-text-color-error': string
    }>
    validate: import('./interface').FormItemValidate
    restoreValidation: () => void
    path?: string | undefined
    internalValidate: FormItemInternalValidate
    mergedSize: import('vue').ComputedRef<import('./interface').Size>
    validationErrored: import('vue').Ref<boolean>
    mergedLabelStyle: import('vue').ComputedRef<
      (string | CSSProperties | undefined)[]
    >
    mergedLabelPlacement: import('vue').ComputedRef<LabelPlacement>
    mergedLabelAlign: import('vue').ComputedRef<LabelAlign | undefined>
    mergedShowRequireMark: import('vue').ComputedRef<boolean | undefined>
    mergedRequireMarkPlacement: import('vue').ComputedRef<
      'left' | 'right' | undefined
    >
    mergedValidationStatus: import('vue').ComputedRef<
      'error' | 'success' | 'warning' | undefined
    >
    mergedShowFeedback: import('vue').ComputedRef<boolean>
    mergedShowLabel: import('vue').ComputedRef<boolean>
    mergedClsPrefix: import('vue').ComputedRef<string>
    mergedRequired: import('vue').ComputedRef<boolean>
    hasFeedback: import('vue').ComputedRef<number | true>
    feedbackId: import('vue').Ref<string>
    explains: import('vue').Ref<string[]>
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
    } & {
      first: boolean
      required: boolean
      ignorePathChange: boolean
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
      labelPlacement?: LabelPlacement | undefined
      labelAlign?: LabelAlign | undefined
      labelStyle?: string | CSSProperties | undefined
      labelWidth?: string | number | undefined
      showRequireMark?: boolean | undefined
      requireMarkPlacement?: 'left' | 'right' | undefined
      showFeedback?: boolean | undefined
      showLabel?: boolean | undefined
      rulePath?: string | undefined
      rule?: FormItemRule | FormItemRule[] | undefined
      validationStatus?: 'error' | 'success' | 'warning' | undefined
      feedback?: string | undefined
    }
  >,
  {
    first: boolean
    required: boolean
    showRequireMark: boolean | undefined
    showFeedback: boolean | undefined
    showLabel: boolean | undefined
    ignorePathChange: boolean
  }
>
export default _default