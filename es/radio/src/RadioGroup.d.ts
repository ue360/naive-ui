import { PropType } from 'vue'
import type { ExtractPublicPropTypes, MaybeArray } from '../../_utils'
import { OnUpdateValue } from './interface'
declare const radioGroupProps: {
  readonly name: StringConstructor
  readonly value: PropType<string | number | null>
  readonly defaultValue: {
    readonly type: PropType<string | number | null>
    readonly default: null
  }
  readonly size: PropType<'small' | 'medium' | 'large'>
  readonly disabled: {
    readonly type: PropType<boolean | undefined>
    readonly default: undefined
  }
  readonly 'onUpdate:value': PropType<MaybeArray<OnUpdateValue>>
  readonly onUpdateValue: PropType<MaybeArray<OnUpdateValue>>
  readonly theme: PropType<
    import('../../_mixins').Theme<
      'Radio',
      {
        buttonHeightSmall: string
        buttonHeightMedium: string
        buttonHeightLarge: string
        fontSizeSmall: string
        fontSizeMedium: string
        fontSizeLarge: string
        boxShadow: string
        boxShadowActive: string
        boxShadowFocus: string
        boxShadowHover: string
        boxShadowDisabled: string
        color: string
        colorDisabled: string
        textColor: string
        textColorDisabled: string
        dotColorActive: string
        dotColorDisabled: string
        buttonBorderColor: string
        buttonBorderColorActive: string
        buttonBorderColorHover: string
        buttonColor: string
        buttonColorActive: string
        buttonTextColor: string
        buttonTextColorActive: string
        buttonTextColorHover: string
        opacityDisabled: string
        buttonBoxShadowFocus: string
        buttonBoxShadowHover: string
        buttonBoxShadow: string
        buttonBorderRadius: string
        radioSizeSmall: string
        radioSizeMedium: string
        radioSizeLarge: string
        labelPadding: string
      },
      any
    >
  >
  readonly themeOverrides: PropType<
    import('../../_mixins/use-theme').ExtractThemeOverrides<
      import('../../_mixins').Theme<
        'Radio',
        {
          buttonHeightSmall: string
          buttonHeightMedium: string
          buttonHeightLarge: string
          fontSizeSmall: string
          fontSizeMedium: string
          fontSizeLarge: string
          boxShadow: string
          boxShadowActive: string
          boxShadowFocus: string
          boxShadowHover: string
          boxShadowDisabled: string
          color: string
          colorDisabled: string
          textColor: string
          textColorDisabled: string
          dotColorActive: string
          dotColorDisabled: string
          buttonBorderColor: string
          buttonBorderColorActive: string
          buttonBorderColorHover: string
          buttonColor: string
          buttonColorActive: string
          buttonTextColor: string
          buttonTextColorActive: string
          buttonTextColorHover: string
          opacityDisabled: string
          buttonBoxShadowFocus: string
          buttonBoxShadowHover: string
          buttonBoxShadow: string
          buttonBorderRadius: string
          radioSizeSmall: string
          radioSizeMedium: string
          radioSizeLarge: string
          labelPadding: string
        },
        any
      >
    >
  >
  readonly builtinThemeOverrides: PropType<
    import('../../_mixins/use-theme').ExtractThemeOverrides<
      import('../../_mixins').Theme<
        'Radio',
        {
          buttonHeightSmall: string
          buttonHeightMedium: string
          buttonHeightLarge: string
          fontSizeSmall: string
          fontSizeMedium: string
          fontSizeLarge: string
          boxShadow: string
          boxShadowActive: string
          boxShadowFocus: string
          boxShadowHover: string
          boxShadowDisabled: string
          color: string
          colorDisabled: string
          textColor: string
          textColorDisabled: string
          dotColorActive: string
          dotColorDisabled: string
          buttonBorderColor: string
          buttonBorderColorActive: string
          buttonBorderColorHover: string
          buttonColor: string
          buttonColorActive: string
          buttonTextColor: string
          buttonTextColorActive: string
          buttonTextColorHover: string
          opacityDisabled: string
          buttonBoxShadowFocus: string
          buttonBoxShadowHover: string
          buttonBoxShadow: string
          buttonBorderRadius: string
          radioSizeSmall: string
          radioSizeMedium: string
          radioSizeLarge: string
          labelPadding: string
        },
        any
      >
    >
  >
}
export declare type RadioGroupProps = ExtractPublicPropTypes<
  typeof radioGroupProps
>
declare const _default: import('vue').DefineComponent<
  {
    readonly name: StringConstructor
    readonly value: PropType<string | number | null>
    readonly defaultValue: {
      readonly type: PropType<string | number | null>
      readonly default: null
    }
    readonly size: PropType<'small' | 'medium' | 'large'>
    readonly disabled: {
      readonly type: PropType<boolean | undefined>
      readonly default: undefined
    }
    readonly 'onUpdate:value': PropType<MaybeArray<OnUpdateValue>>
    readonly onUpdateValue: PropType<MaybeArray<OnUpdateValue>>
    readonly theme: PropType<
      import('../../_mixins').Theme<
        'Radio',
        {
          buttonHeightSmall: string
          buttonHeightMedium: string
          buttonHeightLarge: string
          fontSizeSmall: string
          fontSizeMedium: string
          fontSizeLarge: string
          boxShadow: string
          boxShadowActive: string
          boxShadowFocus: string
          boxShadowHover: string
          boxShadowDisabled: string
          color: string
          colorDisabled: string
          textColor: string
          textColorDisabled: string
          dotColorActive: string
          dotColorDisabled: string
          buttonBorderColor: string
          buttonBorderColorActive: string
          buttonBorderColorHover: string
          buttonColor: string
          buttonColorActive: string
          buttonTextColor: string
          buttonTextColorActive: string
          buttonTextColorHover: string
          opacityDisabled: string
          buttonBoxShadowFocus: string
          buttonBoxShadowHover: string
          buttonBoxShadow: string
          buttonBorderRadius: string
          radioSizeSmall: string
          radioSizeMedium: string
          radioSizeLarge: string
          labelPadding: string
        },
        any
      >
    >
    readonly themeOverrides: PropType<
      import('../../_mixins/use-theme').ExtractThemeOverrides<
        import('../../_mixins').Theme<
          'Radio',
          {
            buttonHeightSmall: string
            buttonHeightMedium: string
            buttonHeightLarge: string
            fontSizeSmall: string
            fontSizeMedium: string
            fontSizeLarge: string
            boxShadow: string
            boxShadowActive: string
            boxShadowFocus: string
            boxShadowHover: string
            boxShadowDisabled: string
            color: string
            colorDisabled: string
            textColor: string
            textColorDisabled: string
            dotColorActive: string
            dotColorDisabled: string
            buttonBorderColor: string
            buttonBorderColorActive: string
            buttonBorderColorHover: string
            buttonColor: string
            buttonColorActive: string
            buttonTextColor: string
            buttonTextColorActive: string
            buttonTextColorHover: string
            opacityDisabled: string
            buttonBoxShadowFocus: string
            buttonBoxShadowHover: string
            buttonBoxShadow: string
            buttonBorderRadius: string
            radioSizeSmall: string
            radioSizeMedium: string
            radioSizeLarge: string
            labelPadding: string
          },
          any
        >
      >
    >
    readonly builtinThemeOverrides: PropType<
      import('../../_mixins/use-theme').ExtractThemeOverrides<
        import('../../_mixins').Theme<
          'Radio',
          {
            buttonHeightSmall: string
            buttonHeightMedium: string
            buttonHeightLarge: string
            fontSizeSmall: string
            fontSizeMedium: string
            fontSizeLarge: string
            boxShadow: string
            boxShadowActive: string
            boxShadowFocus: string
            boxShadowHover: string
            boxShadowDisabled: string
            color: string
            colorDisabled: string
            textColor: string
            textColorDisabled: string
            dotColorActive: string
            dotColorDisabled: string
            buttonBorderColor: string
            buttonBorderColorActive: string
            buttonBorderColorHover: string
            buttonColor: string
            buttonColorActive: string
            buttonTextColor: string
            buttonTextColorActive: string
            buttonTextColorHover: string
            opacityDisabled: string
            buttonBoxShadowFocus: string
            buttonBoxShadowHover: string
            buttonBoxShadow: string
            buttonBorderRadius: string
            radioSizeSmall: string
            radioSizeMedium: string
            radioSizeLarge: string
            labelPadding: string
          },
          any
        >
      >
    >
  },
  {
    selfElRef: import('vue').Ref<HTMLDivElement | null>
    mergedClsPrefix: import('vue').ComputedRef<string>
    mergedValue: import('vue').ComputedRef<string | number | null>
    handleFocusout: (e: FocusEvent) => void
    handleFocusin: (e: FocusEvent) => void
    cssVars: import('vue').ComputedRef<{
      '--font-size': string
      '--bezier': string
      '--button-border-color': string
      '--button-border-color-active': string
      '--button-border-radius': string
      '--button-box-shadow': string
      '--button-box-shadow-focus': string
      '--button-box-shadow-hover': string
      '--button-color-active': string
      '--button-text-color': string
      '--button-text-color-hover': string
      '--button-text-color-active': string
      '--height': string
      '--opacity-disabled': string
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
      readonly name?: unknown
      readonly value?: unknown
      readonly defaultValue?: unknown
      readonly size?: unknown
      readonly disabled?: unknown
      readonly 'onUpdate:value'?: unknown
      readonly onUpdateValue?: unknown
      readonly theme?: unknown
      readonly themeOverrides?: unknown
      readonly builtinThemeOverrides?: unknown
    } & {
      defaultValue: string | number | null
    } & {
      value?: string | number | null | undefined
      name?: string | undefined
      size?: 'small' | 'medium' | 'large' | undefined
      disabled?: boolean | undefined
      theme?:
        | import('../../_mixins').Theme<
            'Radio',
            {
              buttonHeightSmall: string
              buttonHeightMedium: string
              buttonHeightLarge: string
              fontSizeSmall: string
              fontSizeMedium: string
              fontSizeLarge: string
              boxShadow: string
              boxShadowActive: string
              boxShadowFocus: string
              boxShadowHover: string
              boxShadowDisabled: string
              color: string
              colorDisabled: string
              textColor: string
              textColorDisabled: string
              dotColorActive: string
              dotColorDisabled: string
              buttonBorderColor: string
              buttonBorderColorActive: string
              buttonBorderColorHover: string
              buttonColor: string
              buttonColorActive: string
              buttonTextColor: string
              buttonTextColorActive: string
              buttonTextColorHover: string
              opacityDisabled: string
              buttonBoxShadowFocus: string
              buttonBoxShadowHover: string
              buttonBoxShadow: string
              buttonBorderRadius: string
              radioSizeSmall: string
              radioSizeMedium: string
              radioSizeLarge: string
              labelPadding: string
            },
            any
          >
        | undefined
      themeOverrides?:
        | import('../../_mixins/use-theme').ExtractThemeOverrides<
            import('../../_mixins').Theme<
              'Radio',
              {
                buttonHeightSmall: string
                buttonHeightMedium: string
                buttonHeightLarge: string
                fontSizeSmall: string
                fontSizeMedium: string
                fontSizeLarge: string
                boxShadow: string
                boxShadowActive: string
                boxShadowFocus: string
                boxShadowHover: string
                boxShadowDisabled: string
                color: string
                colorDisabled: string
                textColor: string
                textColorDisabled: string
                dotColorActive: string
                dotColorDisabled: string
                buttonBorderColor: string
                buttonBorderColorActive: string
                buttonBorderColorHover: string
                buttonColor: string
                buttonColorActive: string
                buttonTextColor: string
                buttonTextColorActive: string
                buttonTextColorHover: string
                opacityDisabled: string
                buttonBoxShadowFocus: string
                buttonBoxShadowHover: string
                buttonBoxShadow: string
                buttonBorderRadius: string
                radioSizeSmall: string
                radioSizeMedium: string
                radioSizeLarge: string
                labelPadding: string
              },
              any
            >
          >
        | undefined
      builtinThemeOverrides?:
        | import('../../_mixins/use-theme').ExtractThemeOverrides<
            import('../../_mixins').Theme<
              'Radio',
              {
                buttonHeightSmall: string
                buttonHeightMedium: string
                buttonHeightLarge: string
                fontSizeSmall: string
                fontSizeMedium: string
                fontSizeLarge: string
                boxShadow: string
                boxShadowActive: string
                boxShadowFocus: string
                boxShadowHover: string
                boxShadowDisabled: string
                color: string
                colorDisabled: string
                textColor: string
                textColorDisabled: string
                dotColorActive: string
                dotColorDisabled: string
                buttonBorderColor: string
                buttonBorderColorActive: string
                buttonBorderColorHover: string
                buttonColor: string
                buttonColorActive: string
                buttonTextColor: string
                buttonTextColorActive: string
                buttonTextColorHover: string
                opacityDisabled: string
                buttonBoxShadowFocus: string
                buttonBoxShadowHover: string
                buttonBoxShadow: string
                buttonBorderRadius: string
                radioSizeSmall: string
                radioSizeMedium: string
                radioSizeLarge: string
                labelPadding: string
              },
              any
            >
          >
        | undefined
      'onUpdate:value'?: MaybeArray<OnUpdateValue> | undefined
      onUpdateValue?: MaybeArray<OnUpdateValue> | undefined
    }
  >,
  {
    disabled: boolean | undefined
    defaultValue: string | number | null
  }
>
export default _default
