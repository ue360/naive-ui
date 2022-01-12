import { PropType, InputHTMLAttributes, TextareaHTMLAttributes } from 'vue'
import { ExtractPublicPropTypes } from '../../_utils'
import type { MaybeArray } from '../../_utils'
import { OnUpdateValue, Size } from './interface'
declare const inputProps: {
  bordered: {
    type: PropType<boolean | undefined>
    default: undefined
  }
  type: {
    type: PropType<'textarea' | 'text' | 'password'>
    default: string
  }
  placeholder: PropType<string | [string, string]>
  defaultValue: {
    type: PropType<string | [string, string] | null>
    default: null
  }
  value: PropType<string | [string, string] | null>
  disabled: {
    type: PropType<boolean | undefined>
    default: undefined
  }
  size: PropType<Size>
  rows: {
    type: PropType<string | number>
    default: number
  }
  round: BooleanConstructor
  minlength: PropType<string | number>
  maxlength: PropType<string | number>
  clearable: BooleanConstructor
  autosize: {
    type: PropType<
      | boolean
      | {
          minRows?: number | undefined
          maxRows?: number | undefined
        }
    >
    default: boolean
  }
  pair: BooleanConstructor
  separator: StringConstructor
  readonly: {
    type: (BooleanConstructor | StringConstructor)[]
    default: boolean
  }
  passivelyActivated: BooleanConstructor
  showPasswordOn: PropType<'click' | 'mousedown'>
  stateful: {
    type: BooleanConstructor
    default: boolean
  }
  autofocus: BooleanConstructor
  inputProps: PropType<InputHTMLAttributes | TextareaHTMLAttributes>
  resizable: {
    type: BooleanConstructor
    default: boolean
  }
  showCount: BooleanConstructor
  loading: {
    type: BooleanConstructor
    default: undefined
  }
  onMousedown: PropType<(e: MouseEvent) => void>
  onKeydown: PropType<(e: KeyboardEvent) => void>
  onKeyup: PropType<(e: KeyboardEvent) => void>
  onInput: PropType<OnUpdateValue>
  onFocus: PropType<MaybeArray<(e: FocusEvent) => void>>
  onBlur: PropType<MaybeArray<(e: FocusEvent) => void>>
  onClick: PropType<MaybeArray<(e: MouseEvent) => void>>
  onChange: PropType<OnUpdateValue>
  onClear: PropType<MaybeArray<(e: MouseEvent) => void>>
  'onUpdate:value': PropType<MaybeArray<OnUpdateValue>>
  onUpdateValue: PropType<MaybeArray<OnUpdateValue>>
  /** private */
  textDecoration: PropType<string | [string, string]>
  attrSize: {
    type: NumberConstructor
    default: number
  }
  onInputBlur: PropType<MaybeArray<(e: FocusEvent) => void>>
  onInputFocus: PropType<MaybeArray<(e: FocusEvent) => void>>
  onDeactivate: PropType<MaybeArray<() => void>>
  onActivate: PropType<MaybeArray<() => void>>
  onWrapperFocus: PropType<MaybeArray<(e: FocusEvent) => void>>
  onWrapperBlur: PropType<MaybeArray<(e: FocusEvent) => void>>
  internalDeactivateOnEnter: BooleanConstructor
  internalForceFocus: BooleanConstructor
  /** deprecated */
  showPasswordToggle: BooleanConstructor
  theme: PropType<
    import('../../_mixins').Theme<
      'Input',
      {
        countTextColor: string
        heightTiny: string
        heightSmall: string
        heightMedium: string
        heightLarge: string
        fontSizeTiny: string
        fontSizeSmall: string
        fontSizeMedium: string
        fontSizeLarge: string
        lineHeight: string
        lineHeightTextarea: string
        borderRadius: string
        iconSize: string
        groupLabelColor: string
        groupLabelTextColor: string
        textColor: string
        textColorDisabled: string
        textDecorationColor: string
        caretColor: string
        placeholderColor: string
        placeholderColorDisabled: string
        color: string
        colorDisabled: string
        colorFocus: string
        groupLabelBorder: string
        border: string
        borderHover: string
        borderDisabled: string
        borderFocus: string
        boxShadowFocus: string
        loadingColor: string
        loadingColorWarning: string
        borderWarning: string
        borderHoverWarning: string
        colorFocusWarning: string
        borderFocusWarning: string
        boxShadowFocusWarning: string
        caretColorWarning: string
        loadingColorError: string
        borderError: string
        borderHoverError: string
        colorFocusError: string
        borderFocusError: string
        boxShadowFocusError: string
        caretColorError: string
        clearColor: string
        clearColorHover: string
        clearColorPressed: string
        iconColor: string
        iconColorDisabled: string
        iconColorHover: string
        iconColorPressed: string
        suffixTextColor: string
        paddingTiny: string
        paddingSmall: string
        paddingMedium: string
        paddingLarge: string
        clearSize: string
      },
      any
    >
  >
  themeOverrides: PropType<
    import('../../_mixins/use-theme').ExtractThemeOverrides<
      import('../../_mixins').Theme<
        'Input',
        {
          countTextColor: string
          heightTiny: string
          heightSmall: string
          heightMedium: string
          heightLarge: string
          fontSizeTiny: string
          fontSizeSmall: string
          fontSizeMedium: string
          fontSizeLarge: string
          lineHeight: string
          lineHeightTextarea: string
          borderRadius: string
          iconSize: string
          groupLabelColor: string
          groupLabelTextColor: string
          textColor: string
          textColorDisabled: string
          textDecorationColor: string
          caretColor: string
          placeholderColor: string
          placeholderColorDisabled: string
          color: string
          colorDisabled: string
          colorFocus: string
          groupLabelBorder: string
          border: string
          borderHover: string
          borderDisabled: string
          borderFocus: string
          boxShadowFocus: string
          loadingColor: string
          loadingColorWarning: string
          borderWarning: string
          borderHoverWarning: string
          colorFocusWarning: string
          borderFocusWarning: string
          boxShadowFocusWarning: string
          caretColorWarning: string
          loadingColorError: string
          borderError: string
          borderHoverError: string
          colorFocusError: string
          borderFocusError: string
          boxShadowFocusError: string
          caretColorError: string
          clearColor: string
          clearColorHover: string
          clearColorPressed: string
          iconColor: string
          iconColorDisabled: string
          iconColorHover: string
          iconColorPressed: string
          suffixTextColor: string
          paddingTiny: string
          paddingSmall: string
          paddingMedium: string
          paddingLarge: string
          clearSize: string
        },
        any
      >
    >
  >
  builtinThemeOverrides: PropType<
    import('../../_mixins/use-theme').ExtractThemeOverrides<
      import('../../_mixins').Theme<
        'Input',
        {
          countTextColor: string
          heightTiny: string
          heightSmall: string
          heightMedium: string
          heightLarge: string
          fontSizeTiny: string
          fontSizeSmall: string
          fontSizeMedium: string
          fontSizeLarge: string
          lineHeight: string
          lineHeightTextarea: string
          borderRadius: string
          iconSize: string
          groupLabelColor: string
          groupLabelTextColor: string
          textColor: string
          textColorDisabled: string
          textDecorationColor: string
          caretColor: string
          placeholderColor: string
          placeholderColorDisabled: string
          color: string
          colorDisabled: string
          colorFocus: string
          groupLabelBorder: string
          border: string
          borderHover: string
          borderDisabled: string
          borderFocus: string
          boxShadowFocus: string
          loadingColor: string
          loadingColorWarning: string
          borderWarning: string
          borderHoverWarning: string
          colorFocusWarning: string
          borderFocusWarning: string
          boxShadowFocusWarning: string
          caretColorWarning: string
          loadingColorError: string
          borderError: string
          borderHoverError: string
          colorFocusError: string
          borderFocusError: string
          boxShadowFocusError: string
          caretColorError: string
          clearColor: string
          clearColorHover: string
          clearColorPressed: string
          iconColor: string
          iconColorDisabled: string
          iconColorHover: string
          iconColorPressed: string
          suffixTextColor: string
          paddingTiny: string
          paddingSmall: string
          paddingMedium: string
          paddingLarge: string
          clearSize: string
        },
        any
      >
    >
  >
}
export declare type InputProps = ExtractPublicPropTypes<typeof inputProps>
declare const _default: import('vue').DefineComponent<
  {
    bordered: {
      type: PropType<boolean | undefined>
      default: undefined
    }
    type: {
      type: PropType<'textarea' | 'text' | 'password'>
      default: string
    }
    placeholder: PropType<string | [string, string]>
    defaultValue: {
      type: PropType<string | [string, string] | null>
      default: null
    }
    value: PropType<string | [string, string] | null>
    disabled: {
      type: PropType<boolean | undefined>
      default: undefined
    }
    size: PropType<Size>
    rows: {
      type: PropType<string | number>
      default: number
    }
    round: BooleanConstructor
    minlength: PropType<string | number>
    maxlength: PropType<string | number>
    clearable: BooleanConstructor
    autosize: {
      type: PropType<
        | boolean
        | {
            minRows?: number | undefined
            maxRows?: number | undefined
          }
      >
      default: boolean
    }
    pair: BooleanConstructor
    separator: StringConstructor
    readonly: {
      type: (BooleanConstructor | StringConstructor)[]
      default: boolean
    }
    passivelyActivated: BooleanConstructor
    showPasswordOn: PropType<'click' | 'mousedown'>
    stateful: {
      type: BooleanConstructor
      default: boolean
    }
    autofocus: BooleanConstructor
    inputProps: PropType<InputHTMLAttributes | TextareaHTMLAttributes>
    resizable: {
      type: BooleanConstructor
      default: boolean
    }
    showCount: BooleanConstructor
    loading: {
      type: BooleanConstructor
      default: undefined
    }
    onMousedown: PropType<(e: MouseEvent) => void>
    onKeydown: PropType<(e: KeyboardEvent) => void>
    onKeyup: PropType<(e: KeyboardEvent) => void>
    onInput: PropType<OnUpdateValue>
    onFocus: PropType<MaybeArray<(e: FocusEvent) => void>>
    onBlur: PropType<MaybeArray<(e: FocusEvent) => void>>
    onClick: PropType<MaybeArray<(e: MouseEvent) => void>>
    onChange: PropType<OnUpdateValue>
    onClear: PropType<MaybeArray<(e: MouseEvent) => void>>
    'onUpdate:value': PropType<MaybeArray<OnUpdateValue>>
    onUpdateValue: PropType<MaybeArray<OnUpdateValue>>
    /** private */
    textDecoration: PropType<string | [string, string]>
    attrSize: {
      type: NumberConstructor
      default: number
    }
    onInputBlur: PropType<MaybeArray<(e: FocusEvent) => void>>
    onInputFocus: PropType<MaybeArray<(e: FocusEvent) => void>>
    onDeactivate: PropType<MaybeArray<() => void>>
    onActivate: PropType<MaybeArray<() => void>>
    onWrapperFocus: PropType<MaybeArray<(e: FocusEvent) => void>>
    onWrapperBlur: PropType<MaybeArray<(e: FocusEvent) => void>>
    internalDeactivateOnEnter: BooleanConstructor
    internalForceFocus: BooleanConstructor
    /** deprecated */
    showPasswordToggle: BooleanConstructor
    theme: PropType<
      import('../../_mixins').Theme<
        'Input',
        {
          countTextColor: string
          heightTiny: string
          heightSmall: string
          heightMedium: string
          heightLarge: string
          fontSizeTiny: string
          fontSizeSmall: string
          fontSizeMedium: string
          fontSizeLarge: string
          lineHeight: string
          lineHeightTextarea: string
          borderRadius: string
          iconSize: string
          groupLabelColor: string
          groupLabelTextColor: string
          textColor: string
          textColorDisabled: string
          textDecorationColor: string
          caretColor: string
          placeholderColor: string
          placeholderColorDisabled: string
          color: string
          colorDisabled: string
          colorFocus: string
          groupLabelBorder: string
          border: string
          borderHover: string
          borderDisabled: string
          borderFocus: string
          boxShadowFocus: string
          loadingColor: string
          loadingColorWarning: string
          borderWarning: string
          borderHoverWarning: string
          colorFocusWarning: string
          borderFocusWarning: string
          boxShadowFocusWarning: string
          caretColorWarning: string
          loadingColorError: string
          borderError: string
          borderHoverError: string
          colorFocusError: string
          borderFocusError: string
          boxShadowFocusError: string
          caretColorError: string
          clearColor: string
          clearColorHover: string
          clearColorPressed: string
          iconColor: string
          iconColorDisabled: string
          iconColorHover: string
          iconColorPressed: string
          suffixTextColor: string
          paddingTiny: string
          paddingSmall: string
          paddingMedium: string
          paddingLarge: string
          clearSize: string
        },
        any
      >
    >
    themeOverrides: PropType<
      import('../../_mixins/use-theme').ExtractThemeOverrides<
        import('../../_mixins').Theme<
          'Input',
          {
            countTextColor: string
            heightTiny: string
            heightSmall: string
            heightMedium: string
            heightLarge: string
            fontSizeTiny: string
            fontSizeSmall: string
            fontSizeMedium: string
            fontSizeLarge: string
            lineHeight: string
            lineHeightTextarea: string
            borderRadius: string
            iconSize: string
            groupLabelColor: string
            groupLabelTextColor: string
            textColor: string
            textColorDisabled: string
            textDecorationColor: string
            caretColor: string
            placeholderColor: string
            placeholderColorDisabled: string
            color: string
            colorDisabled: string
            colorFocus: string
            groupLabelBorder: string
            border: string
            borderHover: string
            borderDisabled: string
            borderFocus: string
            boxShadowFocus: string
            loadingColor: string
            loadingColorWarning: string
            borderWarning: string
            borderHoverWarning: string
            colorFocusWarning: string
            borderFocusWarning: string
            boxShadowFocusWarning: string
            caretColorWarning: string
            loadingColorError: string
            borderError: string
            borderHoverError: string
            colorFocusError: string
            borderFocusError: string
            boxShadowFocusError: string
            caretColorError: string
            clearColor: string
            clearColorHover: string
            clearColorPressed: string
            iconColor: string
            iconColorDisabled: string
            iconColorHover: string
            iconColorPressed: string
            suffixTextColor: string
            paddingTiny: string
            paddingSmall: string
            paddingMedium: string
            paddingLarge: string
            clearSize: string
          },
          any
        >
      >
    >
    builtinThemeOverrides: PropType<
      import('../../_mixins/use-theme').ExtractThemeOverrides<
        import('../../_mixins').Theme<
          'Input',
          {
            countTextColor: string
            heightTiny: string
            heightSmall: string
            heightMedium: string
            heightLarge: string
            fontSizeTiny: string
            fontSizeSmall: string
            fontSizeMedium: string
            fontSizeLarge: string
            lineHeight: string
            lineHeightTextarea: string
            borderRadius: string
            iconSize: string
            groupLabelColor: string
            groupLabelTextColor: string
            textColor: string
            textColorDisabled: string
            textDecorationColor: string
            caretColor: string
            placeholderColor: string
            placeholderColorDisabled: string
            color: string
            colorDisabled: string
            colorFocus: string
            groupLabelBorder: string
            border: string
            borderHover: string
            borderDisabled: string
            borderFocus: string
            boxShadowFocus: string
            loadingColor: string
            loadingColorWarning: string
            borderWarning: string
            borderHoverWarning: string
            colorFocusWarning: string
            borderFocusWarning: string
            boxShadowFocusWarning: string
            caretColorWarning: string
            loadingColorError: string
            borderError: string
            borderHoverError: string
            colorFocusError: string
            borderFocusError: string
            boxShadowFocusError: string
            caretColorError: string
            clearColor: string
            clearColorHover: string
            clearColorPressed: string
            iconColor: string
            iconColorDisabled: string
            iconColorHover: string
            iconColorPressed: string
            suffixTextColor: string
            paddingTiny: string
            paddingSmall: string
            paddingMedium: string
            paddingLarge: string
            clearSize: string
          },
          any
        >
      >
    >
  },
  {
    wrapperElRef: import('vue').Ref<HTMLElement | null>
    inputElRef: import('vue').Ref<HTMLInputElement | null>
    inputMirrorElRef: import('vue').Ref<HTMLElement | null>
    inputEl2Ref: import('vue').Ref<HTMLInputElement | null>
    textareaElRef: import('vue').Ref<HTMLTextAreaElement | null>
    textareaMirrorElRef: import('vue').Ref<HTMLElement | null>
    uncontrolledValue: import('vue').Ref<string | [string, string] | null>
    mergedValue: import('vue').ComputedRef<string | [string, string] | null>
    passwordVisible: import('vue').Ref<boolean>
    mergedPlaceholder: import('vue').ComputedRef<[string] | [string, string]>
    showPlaceholder1: import('vue').ComputedRef<string | false>
    showPlaceholder2: import('vue').ComputedRef<boolean | '' | undefined>
    mergedFocus: import('vue').ComputedRef<boolean>
    isComposing: import('vue').Ref<boolean>
    activated: import('vue').Ref<boolean>
    showClearButton: import('vue').ComputedRef<boolean>
    mergedSize: import('vue').ComputedRef<'small' | 'medium' | 'large' | 'tiny'>
    mergedDisabled: import('vue').ComputedRef<boolean>
    textDecorationStyle: import('vue').ComputedRef<
      | string[]
      | {
          textDecoration: string
        }[]
    >
    mergedClsPrefix: import('vue').ComputedRef<string>
    mergedBordered: import('vue').ComputedRef<boolean>
    mergedShowPasswordOn: import('vue').ComputedRef<
      'click' | 'mousedown' | undefined
    >
    handleCompositionStart: () => void
    handleCompositionEnd: (e: CompositionEvent) => void
    handleInput: (
      e: InputEvent | CompositionEvent | Event,
      index?: 0 | 1,
      event?: string
    ) => void
    handleInputBlur: (e: FocusEvent) => void
    handleInputFocus: (e: FocusEvent) => void
    handleWrapperBlur: (e: FocusEvent) => void
    handleWrapperFocus: (e: FocusEvent) => void
    handleMouseEnter: () => void
    handleMouseLeave: () => void
    handleMouseDown: (e: MouseEvent) => void
    handleChange: (e: Event, index?: 0 | 1 | undefined) => void
    handleClick: (e: MouseEvent) => void
    handleClear: (e: MouseEvent) => void
    handlePasswordToggleClick: () => void
    handlePasswordToggleMousedown: (e: MouseEvent) => void
    handleWrapperKeyDown: (e: KeyboardEvent) => void
    handleTextAreaMirrorResize: () => void
    mergedTheme: import('vue').ComputedRef<{
      common: {
        baseColor: string
        primaryColor: string
        primaryColorHover: string
        primaryColorPressed: string
        primaryColorSuppl: string
        infoColor: string
        infoColorHover: string
        infoColorPressed: string
        infoColorSuppl: string
        successColor: string
        successColorHover: string
        successColorPressed: string
        successColorSuppl: string
        warningColor: string
        warningColorHover: string
        warningColorPressed: string
        warningColorSuppl: string
        errorColor: string
        errorColorHover: string
        errorColorPressed: string
        errorColorSuppl: string
        textColorBase: string
        textColor1: string
        textColor2: string
        textColor3: string
        textColorDisabled: string
        placeholderColor: string
        placeholderColorDisabled: string
        iconColor: string
        iconColorHover: string
        iconColorPressed: string
        iconColorDisabled: string
        opacity1: string
        opacity2: string
        opacity3: string
        opacity4: string
        opacity5: string
        dividerColor: string
        borderColor: string
        closeColor: string
        closeColorHover: string
        closeColorPressed: string
        closeColorDisabled: string
        clearColor: string
        clearColorHover: string
        clearColorPressed: string
        scrollbarColor: string
        scrollbarColorHover: string
        scrollbarWidth: string
        scrollbarHeight: string
        scrollbarBorderRadius: string
        progressRailColor: string
        railColor: string
        popoverColor: string
        tableColor: string
        cardColor: string
        modalColor: string
        bodyColor: string
        tagColor: string
        avatarColor: string
        invertedColor: string
        inputColor: string
        codeColor: string
        tabColor: string
        actionColor: string
        tableHeaderColor: string
        hoverColor: string
        tableColorHover: string
        tableColorStriped: string
        pressedColor: string
        opacityDisabled: string
        inputColorDisabled: string
        buttonColor2: string
        buttonColor2Hover: string
        buttonColor2Pressed: string
        boxShadow1: string
        boxShadow2: string
        boxShadow3: string
        fontFamily: string
        fontFamilyMono: string
        fontWeight: string
        fontWeightStrong: string
        cubicBezierEaseInOut: string
        cubicBezierEaseOut: string
        cubicBezierEaseIn: string
        borderRadius: string
        borderRadiusSmall: string
        fontSize: string
        fontSizeTiny: string
        fontSizeSmall: string
        fontSizeMedium: string
        fontSizeLarge: string
        fontSizeHuge: string
        lineHeight: string
        heightTiny: string
        heightSmall: string
        heightMedium: string
        heightLarge: string
        heightHuge: string
        transformDebounceScale: string
        name: 'common'
      }
      self: {
        countTextColor: string
        heightTiny: string
        heightSmall: string
        heightMedium: string
        heightLarge: string
        fontSizeTiny: string
        fontSizeSmall: string
        fontSizeMedium: string
        fontSizeLarge: string
        lineHeight: string
        lineHeightTextarea: string
        borderRadius: string
        iconSize: string
        groupLabelColor: string
        groupLabelTextColor: string
        textColor: string
        textColorDisabled: string
        textDecorationColor: string
        caretColor: string
        placeholderColor: string
        placeholderColorDisabled: string
        color: string
        colorDisabled: string
        colorFocus: string
        groupLabelBorder: string
        border: string
        borderHover: string
        borderDisabled: string
        borderFocus: string
        boxShadowFocus: string
        loadingColor: string
        loadingColorWarning: string
        borderWarning: string
        borderHoverWarning: string
        colorFocusWarning: string
        borderFocusWarning: string
        boxShadowFocusWarning: string
        caretColorWarning: string
        loadingColorError: string
        borderError: string
        borderHoverError: string
        colorFocusError: string
        borderFocusError: string
        boxShadowFocusError: string
        caretColorError: string
        clearColor: string
        clearColorHover: string
        clearColorPressed: string
        iconColor: string
        iconColorDisabled: string
        iconColorHover: string
        iconColorPressed: string
        suffixTextColor: string
        paddingTiny: string
        paddingSmall: string
        paddingMedium: string
        paddingLarge: string
        clearSize: string
      }
      peers: any
      peerOverrides: {
        [x: string]: any
      }
    }>
    cssVars: import('vue').ComputedRef<{
      '--bezier': string
      '--count-text-color': string
      '--color': string
      '--font-size': string
      '--border-radius': string
      '--height': string
      '--padding-left': string
      '--padding-right': string
      '--text-color': string
      '--caret-color': string
      '--text-decoration-color': string
      '--border': string
      '--border-disabled': string
      '--border-hover': string
      '--border-focus': string
      '--placeholder-color': string
      '--placeholder-color-disabled': string
      '--icon-size': string
      '--line-height-textarea': string
      '--color-disabled': string
      '--color-focus': string
      '--text-color-disabled': string
      '--box-shadow-focus': string
      '--loading-color': string
      '--caret-color-warning': string
      '--color-focus-warning': string
      '--box-shadow-focus-warning': string
      '--border-warning': string
      '--border-focus-warning': string
      '--border-hover-warning': string
      '--loading-color-warning': string
      '--caret-color-error': string
      '--color-focus-error': string
      '--box-shadow-focus-error': string
      '--border-error': string
      '--border-focus-error': string
      '--border-hover-error': string
      '--loading-color-error': string
      '--clear-color': string
      '--clear-size': string
      '--clear-color-hover': string
      '--clear-color-pressed': string
      '--icon-color': string
      '--icon-color-hover': string
      '--icon-color-pressed': string
      '--icon-color-disabled': string
      '--suffix-text-color': string
    }>
    isCompositing: import('vue').Ref<boolean>
    blur: () => void
    focus: () => void
    select: () => void
    activate: () => void
    deactivate: () => void
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
      bordered?: unknown
      type?: unknown
      placeholder?: unknown
      defaultValue?: unknown
      value?: unknown
      disabled?: unknown
      size?: unknown
      rows?: unknown
      round?: unknown
      minlength?: unknown
      maxlength?: unknown
      clearable?: unknown
      autosize?: unknown
      pair?: unknown
      separator?: unknown
      readonly?: unknown
      passivelyActivated?: unknown
      showPasswordOn?: unknown
      stateful?: unknown
      autofocus?: unknown
      inputProps?: unknown
      resizable?: unknown
      showCount?: unknown
      loading?: unknown
      onMousedown?: unknown
      onKeydown?: unknown
      onKeyup?: unknown
      onInput?: unknown
      onFocus?: unknown
      onBlur?: unknown
      onClick?: unknown
      onChange?: unknown
      onClear?: unknown
      'onUpdate:value'?: unknown
      onUpdateValue?: unknown
      textDecoration?: unknown
      attrSize?: unknown
      onInputBlur?: unknown
      onInputFocus?: unknown
      onDeactivate?: unknown
      onActivate?: unknown
      onWrapperFocus?: unknown
      onWrapperBlur?: unknown
      internalDeactivateOnEnter?: unknown
      internalForceFocus?: unknown
      showPasswordToggle?: unknown
      theme?: unknown
      themeOverrides?: unknown
      builtinThemeOverrides?: unknown
    } & {
      type: 'textarea' | 'text' | 'password'
      readonly: string | boolean
      round: boolean
      autofocus: boolean
      autosize:
        | boolean
        | {
            minRows?: number | undefined
            maxRows?: number | undefined
          }
      clearable: boolean
      defaultValue: string | [string, string] | null
      resizable: boolean
      pair: boolean
      rows: string | number
      passivelyActivated: boolean
      stateful: boolean
      showCount: boolean
      attrSize: number
      internalDeactivateOnEnter: boolean
      internalForceFocus: boolean
      showPasswordToggle: boolean
    } & {
      value?: string | [string, string] | null | undefined
      size?: Size | undefined
      separator?: string | undefined
      disabled?: boolean | undefined
      textDecoration?: string | [string, string] | undefined
      onFocus?: MaybeArray<(e: FocusEvent) => void> | undefined
      onBlur?: MaybeArray<(e: FocusEvent) => void> | undefined
      onChange?: OnUpdateValue | undefined
      onInput?: OnUpdateValue | undefined
      onKeydown?: ((e: KeyboardEvent) => void) | undefined
      onKeyup?: ((e: KeyboardEvent) => void) | undefined
      onClick?: MaybeArray<(e: MouseEvent) => void> | undefined
      onMousedown?: ((e: MouseEvent) => void) | undefined
      placeholder?: string | [string, string] | undefined
      maxlength?: string | number | undefined
      minlength?: string | number | undefined
      theme?:
        | import('../../_mixins').Theme<
            'Input',
            {
              countTextColor: string
              heightTiny: string
              heightSmall: string
              heightMedium: string
              heightLarge: string
              fontSizeTiny: string
              fontSizeSmall: string
              fontSizeMedium: string
              fontSizeLarge: string
              lineHeight: string
              lineHeightTextarea: string
              borderRadius: string
              iconSize: string
              groupLabelColor: string
              groupLabelTextColor: string
              textColor: string
              textColorDisabled: string
              textDecorationColor: string
              caretColor: string
              placeholderColor: string
              placeholderColorDisabled: string
              color: string
              colorDisabled: string
              colorFocus: string
              groupLabelBorder: string
              border: string
              borderHover: string
              borderDisabled: string
              borderFocus: string
              boxShadowFocus: string
              loadingColor: string
              loadingColorWarning: string
              borderWarning: string
              borderHoverWarning: string
              colorFocusWarning: string
              borderFocusWarning: string
              boxShadowFocusWarning: string
              caretColorWarning: string
              loadingColorError: string
              borderError: string
              borderHoverError: string
              colorFocusError: string
              borderFocusError: string
              boxShadowFocusError: string
              caretColorError: string
              clearColor: string
              clearColorHover: string
              clearColorPressed: string
              iconColor: string
              iconColorDisabled: string
              iconColorHover: string
              iconColorPressed: string
              suffixTextColor: string
              paddingTiny: string
              paddingSmall: string
              paddingMedium: string
              paddingLarge: string
              clearSize: string
            },
            any
          >
        | undefined
      themeOverrides?:
        | import('../../_mixins/use-theme').ExtractThemeOverrides<
            import('../../_mixins').Theme<
              'Input',
              {
                countTextColor: string
                heightTiny: string
                heightSmall: string
                heightMedium: string
                heightLarge: string
                fontSizeTiny: string
                fontSizeSmall: string
                fontSizeMedium: string
                fontSizeLarge: string
                lineHeight: string
                lineHeightTextarea: string
                borderRadius: string
                iconSize: string
                groupLabelColor: string
                groupLabelTextColor: string
                textColor: string
                textColorDisabled: string
                textDecorationColor: string
                caretColor: string
                placeholderColor: string
                placeholderColorDisabled: string
                color: string
                colorDisabled: string
                colorFocus: string
                groupLabelBorder: string
                border: string
                borderHover: string
                borderDisabled: string
                borderFocus: string
                boxShadowFocus: string
                loadingColor: string
                loadingColorWarning: string
                borderWarning: string
                borderHoverWarning: string
                colorFocusWarning: string
                borderFocusWarning: string
                boxShadowFocusWarning: string
                caretColorWarning: string
                loadingColorError: string
                borderError: string
                borderHoverError: string
                colorFocusError: string
                borderFocusError: string
                boxShadowFocusError: string
                caretColorError: string
                clearColor: string
                clearColorHover: string
                clearColorPressed: string
                iconColor: string
                iconColorDisabled: string
                iconColorHover: string
                iconColorPressed: string
                suffixTextColor: string
                paddingTiny: string
                paddingSmall: string
                paddingMedium: string
                paddingLarge: string
                clearSize: string
              },
              any
            >
          >
        | undefined
      builtinThemeOverrides?:
        | import('../../_mixins/use-theme').ExtractThemeOverrides<
            import('../../_mixins').Theme<
              'Input',
              {
                countTextColor: string
                heightTiny: string
                heightSmall: string
                heightMedium: string
                heightLarge: string
                fontSizeTiny: string
                fontSizeSmall: string
                fontSizeMedium: string
                fontSizeLarge: string
                lineHeight: string
                lineHeightTextarea: string
                borderRadius: string
                iconSize: string
                groupLabelColor: string
                groupLabelTextColor: string
                textColor: string
                textColorDisabled: string
                textDecorationColor: string
                caretColor: string
                placeholderColor: string
                placeholderColorDisabled: string
                color: string
                colorDisabled: string
                colorFocus: string
                groupLabelBorder: string
                border: string
                borderHover: string
                borderDisabled: string
                borderFocus: string
                boxShadowFocus: string
                loadingColor: string
                loadingColorWarning: string
                borderWarning: string
                borderHoverWarning: string
                colorFocusWarning: string
                borderFocusWarning: string
                boxShadowFocusWarning: string
                caretColorWarning: string
                loadingColorError: string
                borderError: string
                borderHoverError: string
                colorFocusError: string
                borderFocusError: string
                boxShadowFocusError: string
                caretColorError: string
                clearColor: string
                clearColorHover: string
                clearColorPressed: string
                iconColor: string
                iconColorDisabled: string
                iconColorHover: string
                iconColorPressed: string
                suffixTextColor: string
                paddingTiny: string
                paddingSmall: string
                paddingMedium: string
                paddingLarge: string
                clearSize: string
              },
              any
            >
          >
        | undefined
      loading?: boolean | undefined
      bordered?: boolean | undefined
      onClear?: MaybeArray<(e: MouseEvent) => void> | undefined
      inputProps?: InputHTMLAttributes | TextareaHTMLAttributes | undefined
      'onUpdate:value'?: MaybeArray<OnUpdateValue> | undefined
      onUpdateValue?: MaybeArray<OnUpdateValue> | undefined
      showPasswordOn?: 'click' | 'mousedown' | undefined
      onInputBlur?: MaybeArray<(e: FocusEvent) => void> | undefined
      onInputFocus?: MaybeArray<(e: FocusEvent) => void> | undefined
      onDeactivate?: MaybeArray<() => void> | undefined
      onActivate?: MaybeArray<() => void> | undefined
      onWrapperFocus?: MaybeArray<(e: FocusEvent) => void> | undefined
      onWrapperBlur?: MaybeArray<(e: FocusEvent) => void> | undefined
    }
  >,
  {
    type: 'textarea' | 'text' | 'password'
    readonly: string | boolean
    round: boolean
    disabled: boolean | undefined
    autofocus: boolean
    autosize:
      | boolean
      | {
          minRows?: number | undefined
          maxRows?: number | undefined
        }
    loading: boolean
    bordered: boolean | undefined
    clearable: boolean
    defaultValue: string | [string, string] | null
    resizable: boolean
    pair: boolean
    rows: string | number
    passivelyActivated: boolean
    stateful: boolean
    showCount: boolean
    attrSize: number
    internalDeactivateOnEnter: boolean
    internalForceFocus: boolean
    showPasswordToggle: boolean
  }
>
export default _default
