import { CSSProperties, PropType } from 'vue'
import type { MaybeArray, ExtractPublicPropTypes } from '../../_utils'
import type { OnUpdateValue } from './interface'
declare const switchProps: {
  readonly size: {
    readonly type: PropType<'small' | 'medium' | 'large'>
    readonly default: 'medium'
  }
  readonly value: {
    readonly type: PropType<string | number | boolean | undefined>
    readonly default: undefined
  }
  readonly loading: BooleanConstructor
  readonly defaultValue: {
    readonly type: PropType<string | number | boolean>
    readonly default: false
  }
  readonly disabled: {
    readonly type: PropType<boolean | undefined>
    readonly default: undefined
  }
  readonly round: {
    readonly type: BooleanConstructor
    readonly default: true
  }
  readonly 'onUpdate:value': PropType<MaybeArray<OnUpdateValue>>
  readonly onUpdateValue: PropType<MaybeArray<OnUpdateValue>>
  readonly checkedValue: {
    readonly type: PropType<string | number | boolean>
    readonly default: true
  }
  readonly uncheckedValue: {
    readonly type: PropType<string | number | boolean>
    readonly default: false
  }
  readonly railStyle: PropType<
    (params: { focused: boolean; checked: boolean }) => string | CSSProperties
  >
  /** @deprecated */
  readonly onChange: PropType<MaybeArray<OnUpdateValue> | undefined>
  readonly theme: PropType<
    import('../../_mixins').Theme<
      'Switch',
      {
        textColor: string
        loadingColor: string
        opacityDisabled: string
        railColor: string
        railColorActive: string
        buttonBoxShadow: string
        buttonColor: string
        railBorderRadiusSmall: string
        railBorderRadiusMedium: string
        railBorderRadiusLarge: string
        buttonBorderRadiusSmall: string
        buttonBorderRadiusMedium: string
        buttonBorderRadiusLarge: string
        boxShadowFocus: string
        buttonHeightSmall: string
        buttonHeightMedium: string
        buttonHeightLarge: string
        buttonWidthSmall: string
        buttonWidthMedium: string
        buttonWidthLarge: string
        buttonWidthPressedSmall: string
        buttonWidthPressedMedium: string
        buttonWidthPressedLarge: string
        railHeightSmall: string
        railHeightMedium: string
        railHeightLarge: string
        railWidthSmall: string
        railWidthMedium: string
        railWidthLarge: string
      },
      any
    >
  >
  readonly themeOverrides: PropType<
    import('../../_mixins/use-theme').ExtractThemeOverrides<
      import('../../_mixins').Theme<
        'Switch',
        {
          textColor: string
          loadingColor: string
          opacityDisabled: string
          railColor: string
          railColorActive: string
          buttonBoxShadow: string
          buttonColor: string
          railBorderRadiusSmall: string
          railBorderRadiusMedium: string
          railBorderRadiusLarge: string
          buttonBorderRadiusSmall: string
          buttonBorderRadiusMedium: string
          buttonBorderRadiusLarge: string
          boxShadowFocus: string
          buttonHeightSmall: string
          buttonHeightMedium: string
          buttonHeightLarge: string
          buttonWidthSmall: string
          buttonWidthMedium: string
          buttonWidthLarge: string
          buttonWidthPressedSmall: string
          buttonWidthPressedMedium: string
          buttonWidthPressedLarge: string
          railHeightSmall: string
          railHeightMedium: string
          railHeightLarge: string
          railWidthSmall: string
          railWidthMedium: string
          railWidthLarge: string
        },
        any
      >
    >
  >
  readonly builtinThemeOverrides: PropType<
    import('../../_mixins/use-theme').ExtractThemeOverrides<
      import('../../_mixins').Theme<
        'Switch',
        {
          textColor: string
          loadingColor: string
          opacityDisabled: string
          railColor: string
          railColorActive: string
          buttonBoxShadow: string
          buttonColor: string
          railBorderRadiusSmall: string
          railBorderRadiusMedium: string
          railBorderRadiusLarge: string
          buttonBorderRadiusSmall: string
          buttonBorderRadiusMedium: string
          buttonBorderRadiusLarge: string
          boxShadowFocus: string
          buttonHeightSmall: string
          buttonHeightMedium: string
          buttonHeightLarge: string
          buttonWidthSmall: string
          buttonWidthMedium: string
          buttonWidthLarge: string
          buttonWidthPressedSmall: string
          buttonWidthPressedMedium: string
          buttonWidthPressedLarge: string
          railHeightSmall: string
          railHeightMedium: string
          railHeightLarge: string
          railWidthSmall: string
          railWidthMedium: string
          railWidthLarge: string
        },
        any
      >
    >
  >
}
export declare type SwitchProps = ExtractPublicPropTypes<typeof switchProps>
declare const _default: import('vue').DefineComponent<
  {
    readonly size: {
      readonly type: PropType<'small' | 'medium' | 'large'>
      readonly default: 'medium'
    }
    readonly value: {
      readonly type: PropType<string | number | boolean | undefined>
      readonly default: undefined
    }
    readonly loading: BooleanConstructor
    readonly defaultValue: {
      readonly type: PropType<string | number | boolean>
      readonly default: false
    }
    readonly disabled: {
      readonly type: PropType<boolean | undefined>
      readonly default: undefined
    }
    readonly round: {
      readonly type: BooleanConstructor
      readonly default: true
    }
    readonly 'onUpdate:value': PropType<MaybeArray<OnUpdateValue>>
    readonly onUpdateValue: PropType<MaybeArray<OnUpdateValue>>
    readonly checkedValue: {
      readonly type: PropType<string | number | boolean>
      readonly default: true
    }
    readonly uncheckedValue: {
      readonly type: PropType<string | number | boolean>
      readonly default: false
    }
    readonly railStyle: PropType<
      (params: { focused: boolean; checked: boolean }) => string | CSSProperties
    >
    /** @deprecated */
    readonly onChange: PropType<MaybeArray<OnUpdateValue> | undefined>
    readonly theme: PropType<
      import('../../_mixins').Theme<
        'Switch',
        {
          textColor: string
          loadingColor: string
          opacityDisabled: string
          railColor: string
          railColorActive: string
          buttonBoxShadow: string
          buttonColor: string
          railBorderRadiusSmall: string
          railBorderRadiusMedium: string
          railBorderRadiusLarge: string
          buttonBorderRadiusSmall: string
          buttonBorderRadiusMedium: string
          buttonBorderRadiusLarge: string
          boxShadowFocus: string
          buttonHeightSmall: string
          buttonHeightMedium: string
          buttonHeightLarge: string
          buttonWidthSmall: string
          buttonWidthMedium: string
          buttonWidthLarge: string
          buttonWidthPressedSmall: string
          buttonWidthPressedMedium: string
          buttonWidthPressedLarge: string
          railHeightSmall: string
          railHeightMedium: string
          railHeightLarge: string
          railWidthSmall: string
          railWidthMedium: string
          railWidthLarge: string
        },
        any
      >
    >
    readonly themeOverrides: PropType<
      import('../../_mixins/use-theme').ExtractThemeOverrides<
        import('../../_mixins').Theme<
          'Switch',
          {
            textColor: string
            loadingColor: string
            opacityDisabled: string
            railColor: string
            railColorActive: string
            buttonBoxShadow: string
            buttonColor: string
            railBorderRadiusSmall: string
            railBorderRadiusMedium: string
            railBorderRadiusLarge: string
            buttonBorderRadiusSmall: string
            buttonBorderRadiusMedium: string
            buttonBorderRadiusLarge: string
            boxShadowFocus: string
            buttonHeightSmall: string
            buttonHeightMedium: string
            buttonHeightLarge: string
            buttonWidthSmall: string
            buttonWidthMedium: string
            buttonWidthLarge: string
            buttonWidthPressedSmall: string
            buttonWidthPressedMedium: string
            buttonWidthPressedLarge: string
            railHeightSmall: string
            railHeightMedium: string
            railHeightLarge: string
            railWidthSmall: string
            railWidthMedium: string
            railWidthLarge: string
          },
          any
        >
      >
    >
    readonly builtinThemeOverrides: PropType<
      import('../../_mixins/use-theme').ExtractThemeOverrides<
        import('../../_mixins').Theme<
          'Switch',
          {
            textColor: string
            loadingColor: string
            opacityDisabled: string
            railColor: string
            railColorActive: string
            buttonBoxShadow: string
            buttonColor: string
            railBorderRadiusSmall: string
            railBorderRadiusMedium: string
            railBorderRadiusLarge: string
            buttonBorderRadiusSmall: string
            buttonBorderRadiusMedium: string
            buttonBorderRadiusLarge: string
            boxShadowFocus: string
            buttonHeightSmall: string
            buttonHeightMedium: string
            buttonHeightLarge: string
            buttonWidthSmall: string
            buttonWidthMedium: string
            buttonWidthLarge: string
            buttonWidthPressedSmall: string
            buttonWidthPressedMedium: string
            buttonWidthPressedLarge: string
            railHeightSmall: string
            railHeightMedium: string
            railHeightLarge: string
            railWidthSmall: string
            railWidthMedium: string
            railWidthLarge: string
          },
          any
        >
      >
    >
  },
  {
    handleClick: () => void
    handleBlur: () => void
    handleFocus: () => void
    handleKeyup: (e: KeyboardEvent) => void
    handleKeydown: (e: KeyboardEvent) => void
    mergedRailStyle: import('vue').ComputedRef<
      string | CSSProperties | undefined
    >
    pressed: import('vue').Ref<boolean>
    mergedClsPrefix: import('vue').ComputedRef<string>
    mergedValue: import('vue').ComputedRef<string | number | boolean>
    checked: import('vue').ComputedRef<boolean>
    mergedDisabled: import('vue').ComputedRef<boolean>
    cssVars: import('vue').ComputedRef<{
      '--bezier': string
      '--button-border-radius': string
      '--button-box-shadow': string
      '--button-color': string
      '--button-width': string
      '--button-width-pressed': string
      '--button-height': string
      '--height': string
      '--offset': string
      '--opacity-disabled': string
      '--rail-border-radius': string
      '--rail-color': string
      '--rail-color-active': string
      '--rail-height': string
      '--rail-width': string
      '--width': string
      '--box-shadow-focus': string
      '--loading-color': string
      '--text-color': string
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
      readonly size?: unknown
      readonly value?: unknown
      readonly loading?: unknown
      readonly defaultValue?: unknown
      readonly disabled?: unknown
      readonly round?: unknown
      readonly 'onUpdate:value'?: unknown
      readonly onUpdateValue?: unknown
      readonly checkedValue?: unknown
      readonly uncheckedValue?: unknown
      readonly railStyle?: unknown
      readonly onChange?: unknown
      readonly theme?: unknown
      readonly themeOverrides?: unknown
      readonly builtinThemeOverrides?: unknown
    } & {
      round: boolean
      size: 'small' | 'medium' | 'large'
      loading: boolean
      defaultValue: string | number | boolean
      checkedValue: string | number | boolean
      uncheckedValue: string | number | boolean
    } & {
      value?: string | number | boolean | undefined
      disabled?: boolean | undefined
      onChange?: MaybeArray<OnUpdateValue> | undefined
      theme?:
        | import('../../_mixins').Theme<
            'Switch',
            {
              textColor: string
              loadingColor: string
              opacityDisabled: string
              railColor: string
              railColorActive: string
              buttonBoxShadow: string
              buttonColor: string
              railBorderRadiusSmall: string
              railBorderRadiusMedium: string
              railBorderRadiusLarge: string
              buttonBorderRadiusSmall: string
              buttonBorderRadiusMedium: string
              buttonBorderRadiusLarge: string
              boxShadowFocus: string
              buttonHeightSmall: string
              buttonHeightMedium: string
              buttonHeightLarge: string
              buttonWidthSmall: string
              buttonWidthMedium: string
              buttonWidthLarge: string
              buttonWidthPressedSmall: string
              buttonWidthPressedMedium: string
              buttonWidthPressedLarge: string
              railHeightSmall: string
              railHeightMedium: string
              railHeightLarge: string
              railWidthSmall: string
              railWidthMedium: string
              railWidthLarge: string
            },
            any
          >
        | undefined
      themeOverrides?:
        | import('../../_mixins/use-theme').ExtractThemeOverrides<
            import('../../_mixins').Theme<
              'Switch',
              {
                textColor: string
                loadingColor: string
                opacityDisabled: string
                railColor: string
                railColorActive: string
                buttonBoxShadow: string
                buttonColor: string
                railBorderRadiusSmall: string
                railBorderRadiusMedium: string
                railBorderRadiusLarge: string
                buttonBorderRadiusSmall: string
                buttonBorderRadiusMedium: string
                buttonBorderRadiusLarge: string
                boxShadowFocus: string
                buttonHeightSmall: string
                buttonHeightMedium: string
                buttonHeightLarge: string
                buttonWidthSmall: string
                buttonWidthMedium: string
                buttonWidthLarge: string
                buttonWidthPressedSmall: string
                buttonWidthPressedMedium: string
                buttonWidthPressedLarge: string
                railHeightSmall: string
                railHeightMedium: string
                railHeightLarge: string
                railWidthSmall: string
                railWidthMedium: string
                railWidthLarge: string
              },
              any
            >
          >
        | undefined
      builtinThemeOverrides?:
        | import('../../_mixins/use-theme').ExtractThemeOverrides<
            import('../../_mixins').Theme<
              'Switch',
              {
                textColor: string
                loadingColor: string
                opacityDisabled: string
                railColor: string
                railColorActive: string
                buttonBoxShadow: string
                buttonColor: string
                railBorderRadiusSmall: string
                railBorderRadiusMedium: string
                railBorderRadiusLarge: string
                buttonBorderRadiusSmall: string
                buttonBorderRadiusMedium: string
                buttonBorderRadiusLarge: string
                boxShadowFocus: string
                buttonHeightSmall: string
                buttonHeightMedium: string
                buttonHeightLarge: string
                buttonWidthSmall: string
                buttonWidthMedium: string
                buttonWidthLarge: string
                buttonWidthPressedSmall: string
                buttonWidthPressedMedium: string
                buttonWidthPressedLarge: string
                railHeightSmall: string
                railHeightMedium: string
                railHeightLarge: string
                railWidthSmall: string
                railWidthMedium: string
                railWidthLarge: string
              },
              any
            >
          >
        | undefined
      'onUpdate:value'?: MaybeArray<OnUpdateValue> | undefined
      onUpdateValue?: MaybeArray<OnUpdateValue> | undefined
      railStyle?:
        | ((params: {
            focused: boolean
            checked: boolean
          }) => string | CSSProperties)
        | undefined
    }
  >,
  {
    value: string | number | boolean | undefined
    round: boolean
    size: 'small' | 'medium' | 'large'
    disabled: boolean | undefined
    loading: boolean
    defaultValue: string | number | boolean
    checkedValue: string | number | boolean
    uncheckedValue: string | number | boolean
  }
>
export default _default
