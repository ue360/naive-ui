import type { ExtractPublicPropTypes } from '../../_utils'
import useRadio from './use-radio'
export declare type RadioProps = ExtractPublicPropTypes<typeof useRadio.props>
declare const _default: import('vue').DefineComponent<
  {
    name: StringConstructor
    value: {
      readonly type: import('vue').PropType<string | number>
      readonly default: 'on'
    }
    checked: {
      readonly type: import('vue').PropType<boolean | undefined>
      readonly default: undefined
    }
    defaultChecked: BooleanConstructor
    disabled: {
      readonly type: import('vue').PropType<boolean | undefined>
      readonly default: undefined
    }
    size: import('vue').PropType<'small' | 'medium' | 'large'>
    onUpdateChecked: import('vue').PropType<
      import('../../_utils').MaybeArray<(value: boolean) => void> | undefined
    >
    'onUpdate:checked': import('vue').PropType<
      import('../../_utils').MaybeArray<(value: boolean) => void> | undefined
    >
    checkedValue: {
      readonly type: import('vue').PropType<boolean | undefined>
      readonly validator: () => boolean
      readonly default: undefined
    }
    theme: import('vue').PropType<
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
    themeOverrides: import('vue').PropType<
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
    builtinThemeOverrides: import('vue').PropType<
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
  import('./use-radio').UseRadio & {
    cssVars: import('vue').ComputedRef<{
      '--bezier': string
      '--box-shadow': string
      '--box-shadow-active': string
      '--box-shadow-disabled': string
      '--box-shadow-focus': string
      '--box-shadow-hover': string
      '--color': string
      '--color-disabled': string
      '--dot-color-active': string
      '--dot-color-disabled': string
      '--font-size': string
      '--radio-size': string
      '--text-color': string
      '--text-color-disabled': string
      '--label-padding': string
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
      name?: unknown
      value?: unknown
      checked?: unknown
      defaultChecked?: unknown
      disabled?: unknown
      size?: unknown
      onUpdateChecked?: unknown
      'onUpdate:checked'?: unknown
      checkedValue?: unknown
      theme?: unknown
      themeOverrides?: unknown
      builtinThemeOverrides?: unknown
    } & {
      value: string | number
      defaultChecked: boolean
    } & {
      name?: string | undefined
      size?: 'small' | 'medium' | 'large' | undefined
      disabled?: boolean | undefined
      checked?: boolean | undefined
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
      'onUpdate:checked'?:
        | import('../../_utils').MaybeArray<(value: boolean) => void>
        | undefined
      onUpdateChecked?:
        | import('../../_utils').MaybeArray<(value: boolean) => void>
        | undefined
      checkedValue?: boolean | undefined
    }
  >,
  {
    value: string | number
    disabled: boolean | undefined
    checked: boolean | undefined
    defaultChecked: boolean
    checkedValue: boolean | undefined
  }
>
export default _default