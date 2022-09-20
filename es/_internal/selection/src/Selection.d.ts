import { PropType, InputHTMLAttributes } from 'vue'
import type { SelectBaseOption } from '../../../select/src/interface'
import { RenderTag } from './interface'
import type {
  RenderLabel,
  RenderLabelImpl
} from '../../select-menu/src/interface'
export interface InternalSelectionInst {
  focus: () => void
  focusInput: () => void
  $el: HTMLElement
}
declare const _default: import('vue').DefineComponent<
  {
    clsPrefix: {
      type: StringConstructor
      required: true
    }
    bordered: {
      type: PropType<boolean | undefined>
      default: undefined
    }
    active: BooleanConstructor
    pattern: {
      type: StringConstructor
      default: null
    }
    placeholder: StringConstructor
    selectedOption: {
      type: PropType<SelectBaseOption<
        string | number,
        | string
        | ((
            option: SelectBaseOption<string | number, string | any>,
            selected: boolean
          ) => import('vue').VNodeChild)
      > | null>
      default: null
    }
    selectedOptions: {
      type: PropType<
        | SelectBaseOption<
            string | number,
            | string
            | ((
                option: SelectBaseOption<string | number, string | any>,
                selected: boolean
              ) => import('vue').VNodeChild)
          >[]
        | null
      >
      default: null
    }
    multiple: BooleanConstructor
    filterable: BooleanConstructor
    clearable: BooleanConstructor
    disabled: BooleanConstructor
    size: {
      type: PropType<'small' | 'medium' | 'large'>
      default: string
    }
    loading: BooleanConstructor
    autofocus: BooleanConstructor
    showArrow: {
      type: BooleanConstructor
      default: boolean
    }
    inputProps: PropType<InputHTMLAttributes>
    focused: BooleanConstructor
    renderTag: PropType<RenderTag>
    onKeyup: PropType<(e: KeyboardEvent) => void>
    onKeydown: PropType<(e: KeyboardEvent) => void>
    onClick: PropType<(e: MouseEvent) => void>
    onBlur: PropType<(e: FocusEvent) => void>
    onFocus: PropType<(e: FocusEvent) => void>
    onDeleteOption: PropType<(option: SelectBaseOption) => void>
    maxTagCount: PropType<number | 'responsive'>
    onClear: PropType<(e: MouseEvent) => void>
    onPatternInput: PropType<(e: InputEvent) => void>
    renderLabel: PropType<RenderLabel>
    theme: PropType<
      import('../../../_mixins').Theme<
        'InternalSelection',
        {
          fontSizeTiny: string
          fontSizeSmall: string
          fontSizeMedium: string
          fontSizeLarge: string
          heightTiny: string
          heightSmall: string
          heightMedium: string
          heightLarge: string
          borderRadius: string
          textColor: string
          textColorDisabled: string
          placeholderColor: string
          placeholderColorDisabled: string
          color: string
          colorDisabled: string
          colorActive: string
          border: string
          borderHover: string
          borderActive: string
          borderFocus: string
          boxShadowHover: null
          boxShadowActive: string
          boxShadowFocus: string
          caretColor: string
          arrowColor: string
          arrowColorDisabled: string
          loadingColor: string
          borderWarning: string
          borderHoverWarning: string
          borderActiveWarning: string
          borderFocusWarning: string
          boxShadowHoverWarning: null
          boxShadowActiveWarning: string
          boxShadowFocusWarning: string
          colorActiveWarning: string
          caretColorWarning: string
          borderError: string
          borderHoverError: string
          borderActiveError: string
          borderFocusError: string
          boxShadowHoverError: null
          boxShadowActiveError: string
          boxShadowFocusError: string
          colorActiveError: string
          caretColorError: string
          clearColor: string
          clearColorHover: string
          clearColorPressed: string
          paddingSingle: string
          clearSize: string
          arrowSize: string
        },
        {
          Popover: import('../../../_mixins').Theme<
            'Popover',
            {
              fontSize: string
              borderRadius: string
              color: string
              dividerColor: string
              textColor: string
              boxShadow: string
              space: string
              spaceArrow: string
              arrowOffset: string
              arrowOffsetVertical: string
              arrowHeight: string
              padding: string
            },
            any
          >
        }
      >
    >
    themeOverrides: PropType<
      import('../../../_mixins/use-theme').ExtractThemeOverrides<
        import('../../../_mixins').Theme<
          'InternalSelection',
          {
            fontSizeTiny: string
            fontSizeSmall: string
            fontSizeMedium: string
            fontSizeLarge: string
            heightTiny: string
            heightSmall: string
            heightMedium: string
            heightLarge: string
            borderRadius: string
            textColor: string
            textColorDisabled: string
            placeholderColor: string
            placeholderColorDisabled: string
            color: string
            colorDisabled: string
            colorActive: string
            border: string
            borderHover: string
            borderActive: string
            borderFocus: string
            boxShadowHover: null
            boxShadowActive: string
            boxShadowFocus: string
            caretColor: string
            arrowColor: string
            arrowColorDisabled: string
            loadingColor: string
            borderWarning: string
            borderHoverWarning: string
            borderActiveWarning: string
            borderFocusWarning: string
            boxShadowHoverWarning: null
            boxShadowActiveWarning: string
            boxShadowFocusWarning: string
            colorActiveWarning: string
            caretColorWarning: string
            borderError: string
            borderHoverError: string
            borderActiveError: string
            borderFocusError: string
            boxShadowHoverError: null
            boxShadowActiveError: string
            boxShadowFocusError: string
            colorActiveError: string
            caretColorError: string
            clearColor: string
            clearColorHover: string
            clearColorPressed: string
            paddingSingle: string
            clearSize: string
            arrowSize: string
          },
          {
            Popover: import('../../../_mixins').Theme<
              'Popover',
              {
                fontSize: string
                borderRadius: string
                color: string
                dividerColor: string
                textColor: string
                boxShadow: string
                space: string
                spaceArrow: string
                arrowOffset: string
                arrowOffsetVertical: string
                arrowHeight: string
                padding: string
              },
              any
            >
          }
        >
      >
    >
    builtinThemeOverrides: PropType<
      import('../../../_mixins/use-theme').ExtractThemeOverrides<
        import('../../../_mixins').Theme<
          'InternalSelection',
          {
            fontSizeTiny: string
            fontSizeSmall: string
            fontSizeMedium: string
            fontSizeLarge: string
            heightTiny: string
            heightSmall: string
            heightMedium: string
            heightLarge: string
            borderRadius: string
            textColor: string
            textColorDisabled: string
            placeholderColor: string
            placeholderColorDisabled: string
            color: string
            colorDisabled: string
            colorActive: string
            border: string
            borderHover: string
            borderActive: string
            borderFocus: string
            boxShadowHover: null
            boxShadowActive: string
            boxShadowFocus: string
            caretColor: string
            arrowColor: string
            arrowColorDisabled: string
            loadingColor: string
            borderWarning: string
            borderHoverWarning: string
            borderActiveWarning: string
            borderFocusWarning: string
            boxShadowHoverWarning: null
            boxShadowActiveWarning: string
            boxShadowFocusWarning: string
            colorActiveWarning: string
            caretColorWarning: string
            borderError: string
            borderHoverError: string
            borderActiveError: string
            borderFocusError: string
            boxShadowHoverError: null
            boxShadowActiveError: string
            boxShadowFocusError: string
            colorActiveError: string
            caretColorError: string
            clearColor: string
            clearColorHover: string
            clearColorPressed: string
            paddingSingle: string
            clearSize: string
            arrowSize: string
          },
          {
            Popover: import('../../../_mixins').Theme<
              'Popover',
              {
                fontSize: string
                borderRadius: string
                color: string
                dividerColor: string
                textColor: string
                boxShadow: string
                space: string
                spaceArrow: string
                arrowOffset: string
                arrowOffsetVertical: string
                arrowHeight: string
                padding: string
              },
              any
            >
          }
        >
      >
    >
  },
  {
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
        fontSizeTiny: string
        fontSizeSmall: string
        fontSizeMedium: string
        fontSizeLarge: string
        heightTiny: string
        heightSmall: string
        heightMedium: string
        heightLarge: string
        borderRadius: string
        textColor: string
        textColorDisabled: string
        placeholderColor: string
        placeholderColorDisabled: string
        color: string
        colorDisabled: string
        colorActive: string
        border: string
        borderHover: string
        borderActive: string
        borderFocus: string
        boxShadowHover: null
        boxShadowActive: string
        boxShadowFocus: string
        caretColor: string
        arrowColor: string
        arrowColorDisabled: string
        loadingColor: string
        borderWarning: string
        borderHoverWarning: string
        borderActiveWarning: string
        borderFocusWarning: string
        boxShadowHoverWarning: null
        boxShadowActiveWarning: string
        boxShadowFocusWarning: string
        colorActiveWarning: string
        caretColorWarning: string
        borderError: string
        borderHoverError: string
        borderActiveError: string
        borderFocusError: string
        boxShadowHoverError: null
        boxShadowActiveError: string
        boxShadowFocusError: string
        colorActiveError: string
        caretColorError: string
        clearColor: string
        clearColorHover: string
        clearColorPressed: string
        paddingSingle: string
        clearSize: string
        arrowSize: string
      }
      peers: {
        Popover: import('../../../_mixins').Theme<
          'Popover',
          {
            fontSize: string
            borderRadius: string
            color: string
            dividerColor: string
            textColor: string
            boxShadow: string
            space: string
            spaceArrow: string
            arrowOffset: string
            arrowOffsetVertical: string
            arrowHeight: string
            padding: string
          },
          any
        >
      }
      peerOverrides: {
        Popover?:
          | {
              peers?:
                | {
                    [x: string]: any
                  }
                | undefined
            }
          | undefined
      }
    }>
    mergedClearable: import('vue').ComputedRef<boolean>
    patternInputFocused: import('vue').Ref<boolean>
    filterablePlaceholder: import('vue').ComputedRef<import('vue').VNodeChild>
    label: import('vue').ComputedRef<
      | string
      | ((
          option: SelectBaseOption<string | number, string | any>,
          selected: boolean
        ) => import('vue').VNodeChild)
      | undefined
    >
    selected: import('vue').ComputedRef<boolean>
    showTagsPanel: import('vue').Ref<boolean>
    isCompositing: import('vue').Ref<boolean>
    counterRef: import('vue').Ref<{
      $el: HTMLElement
      setTextContent: (textContent: string) => void
    } | null>
    counterWrapperRef: import('vue').Ref<HTMLElement | null>
    patternInputMirrorRef: import('vue').Ref<HTMLElement | null>
    patternInputRef: import('vue').Ref<HTMLElement | null>
    selfRef: import('vue').Ref<HTMLElement | null>
    multipleElRef: import('vue').Ref<HTMLElement | null>
    singleElRef: import('vue').Ref<HTMLElement | null>
    patternInputWrapperRef: import('vue').Ref<HTMLElement | null>
    overflowRef: import('vue').Ref<{
      sync: () => void
    } | null>
    inputTagElRef: import('vue').Ref<HTMLElement | null>
    handleMouseDown: (e: MouseEvent) => void
    handleFocusin: (e: FocusEvent) => void
    handleClear: (e: MouseEvent) => void
    handleMouseEnter: () => void
    handleMouseLeave: () => void
    handleDeleteOption: (option: SelectBaseOption) => void
    handlePatternKeyDown: (e: KeyboardEvent) => void
    handlePatternInputInput: (e: InputEvent) => void
    handlePatternInputBlur: (e: FocusEvent) => void
    handlePatternInputFocus: () => void
    handleMouseEnterCounter: () => void
    handleMouseLeaveCounter: () => void
    handleFocusout: (e: FocusEvent) => void
    handleCompositionEnd: () => void
    handleCompositionStart: () => void
    onPopoverUpdateShow: (show: boolean) => void
    focus: () => void
    focusInput: () => void
    blurInput: () => void
    updateCounter: (count: number) => void
    getCounter: () => HTMLElement | null
    getTail: () => HTMLElement | null
    renderLabel: RenderLabelImpl
    cssVars: import('vue').ComputedRef<{
      '--bezier': string
      '--border': string
      '--border-active': string
      '--border-focus': string
      '--border-hover': string
      '--border-radius': string
      '--box-shadow-active': string
      '--box-shadow-focus': string
      '--box-shadow-hover': null
      '--caret-color': string
      '--color': string
      '--color-active': string
      '--color-disabled': string
      '--font-size': string
      '--height': string
      '--padding-single': string
      '--placeholder-color': string
      '--placeholder-color-disabled': string
      '--text-color': string
      '--text-color-disabled': string
      '--arrow-color': string
      '--arrow-color-disabled': string
      '--loading-color': string
      '--color-active-warning': string
      '--box-shadow-focus-warning': string
      '--box-shadow-active-warning': string
      '--box-shadow-hover-warning': null
      '--border-warning': string
      '--border-focus-warning': string
      '--border-hover-warning': string
      '--border-active-warning': string
      '--color-active-error': string
      '--box-shadow-focus-error': string
      '--box-shadow-active-error': string
      '--box-shadow-hover-error': null
      '--border-error': string
      '--border-focus-error': string
      '--border-hover-error': string
      '--border-active-error': string
      '--clear-size': string
      '--clear-color': string
      '--clear-color-hover': string
      '--clear-color-pressed': string
      '--arrow-size': string
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
      clsPrefix?: unknown
      bordered?: unknown
      active?: unknown
      pattern?: unknown
      placeholder?: unknown
      selectedOption?: unknown
      selectedOptions?: unknown
      multiple?: unknown
      filterable?: unknown
      clearable?: unknown
      disabled?: unknown
      size?: unknown
      loading?: unknown
      autofocus?: unknown
      showArrow?: unknown
      inputProps?: unknown
      focused?: unknown
      renderTag?: unknown
      onKeyup?: unknown
      onKeydown?: unknown
      onClick?: unknown
      onBlur?: unknown
      onFocus?: unknown
      onDeleteOption?: unknown
      maxTagCount?: unknown
      onClear?: unknown
      onPatternInput?: unknown
      renderLabel?: unknown
      theme?: unknown
      themeOverrides?: unknown
      builtinThemeOverrides?: unknown
    } & {
      pattern: string
      size: 'small' | 'medium' | 'large'
      multiple: boolean
      active: boolean
      disabled: boolean
      autofocus: boolean
      loading: boolean
      clsPrefix: string
      showArrow: boolean
      selectedOption: SelectBaseOption<
        string | number,
        | string
        | ((
            option: SelectBaseOption<string | number, string | any>,
            selected: boolean
          ) => import('vue').VNodeChild)
      > | null
      selectedOptions:
        | SelectBaseOption<
            string | number,
            | string
            | ((
                option: SelectBaseOption<string | number, string | any>,
                selected: boolean
              ) => import('vue').VNodeChild)
          >[]
        | null
      filterable: boolean
      clearable: boolean
      focused: boolean
    } & {
      onFocus?: ((e: FocusEvent) => void) | undefined
      onBlur?: ((e: FocusEvent) => void) | undefined
      onKeydown?: ((e: KeyboardEvent) => void) | undefined
      onKeyup?: ((e: KeyboardEvent) => void) | undefined
      onClick?: ((e: MouseEvent) => void) | undefined
      placeholder?: string | undefined
      theme?:
        | import('../../../_mixins').Theme<
            'InternalSelection',
            {
              fontSizeTiny: string
              fontSizeSmall: string
              fontSizeMedium: string
              fontSizeLarge: string
              heightTiny: string
              heightSmall: string
              heightMedium: string
              heightLarge: string
              borderRadius: string
              textColor: string
              textColorDisabled: string
              placeholderColor: string
              placeholderColorDisabled: string
              color: string
              colorDisabled: string
              colorActive: string
              border: string
              borderHover: string
              borderActive: string
              borderFocus: string
              boxShadowHover: null
              boxShadowActive: string
              boxShadowFocus: string
              caretColor: string
              arrowColor: string
              arrowColorDisabled: string
              loadingColor: string
              borderWarning: string
              borderHoverWarning: string
              borderActiveWarning: string
              borderFocusWarning: string
              boxShadowHoverWarning: null
              boxShadowActiveWarning: string
              boxShadowFocusWarning: string
              colorActiveWarning: string
              caretColorWarning: string
              borderError: string
              borderHoverError: string
              borderActiveError: string
              borderFocusError: string
              boxShadowHoverError: null
              boxShadowActiveError: string
              boxShadowFocusError: string
              colorActiveError: string
              caretColorError: string
              clearColor: string
              clearColorHover: string
              clearColorPressed: string
              paddingSingle: string
              clearSize: string
              arrowSize: string
            },
            {
              Popover: import('../../../_mixins').Theme<
                'Popover',
                {
                  fontSize: string
                  borderRadius: string
                  color: string
                  dividerColor: string
                  textColor: string
                  boxShadow: string
                  space: string
                  spaceArrow: string
                  arrowOffset: string
                  arrowOffsetVertical: string
                  arrowHeight: string
                  padding: string
                },
                any
              >
            }
          >
        | undefined
      themeOverrides?:
        | import('../../../_mixins/use-theme').ExtractThemeOverrides<
            import('../../../_mixins').Theme<
              'InternalSelection',
              {
                fontSizeTiny: string
                fontSizeSmall: string
                fontSizeMedium: string
                fontSizeLarge: string
                heightTiny: string
                heightSmall: string
                heightMedium: string
                heightLarge: string
                borderRadius: string
                textColor: string
                textColorDisabled: string
                placeholderColor: string
                placeholderColorDisabled: string
                color: string
                colorDisabled: string
                colorActive: string
                border: string
                borderHover: string
                borderActive: string
                borderFocus: string
                boxShadowHover: null
                boxShadowActive: string
                boxShadowFocus: string
                caretColor: string
                arrowColor: string
                arrowColorDisabled: string
                loadingColor: string
                borderWarning: string
                borderHoverWarning: string
                borderActiveWarning: string
                borderFocusWarning: string
                boxShadowHoverWarning: null
                boxShadowActiveWarning: string
                boxShadowFocusWarning: string
                colorActiveWarning: string
                caretColorWarning: string
                borderError: string
                borderHoverError: string
                borderActiveError: string
                borderFocusError: string
                boxShadowHoverError: null
                boxShadowActiveError: string
                boxShadowFocusError: string
                colorActiveError: string
                caretColorError: string
                clearColor: string
                clearColorHover: string
                clearColorPressed: string
                paddingSingle: string
                clearSize: string
                arrowSize: string
              },
              {
                Popover: import('../../../_mixins').Theme<
                  'Popover',
                  {
                    fontSize: string
                    borderRadius: string
                    color: string
                    dividerColor: string
                    textColor: string
                    boxShadow: string
                    space: string
                    spaceArrow: string
                    arrowOffset: string
                    arrowOffsetVertical: string
                    arrowHeight: string
                    padding: string
                  },
                  any
                >
              }
            >
          >
        | undefined
      builtinThemeOverrides?:
        | import('../../../_mixins/use-theme').ExtractThemeOverrides<
            import('../../../_mixins').Theme<
              'InternalSelection',
              {
                fontSizeTiny: string
                fontSizeSmall: string
                fontSizeMedium: string
                fontSizeLarge: string
                heightTiny: string
                heightSmall: string
                heightMedium: string
                heightLarge: string
                borderRadius: string
                textColor: string
                textColorDisabled: string
                placeholderColor: string
                placeholderColorDisabled: string
                color: string
                colorDisabled: string
                colorActive: string
                border: string
                borderHover: string
                borderActive: string
                borderFocus: string
                boxShadowHover: null
                boxShadowActive: string
                boxShadowFocus: string
                caretColor: string
                arrowColor: string
                arrowColorDisabled: string
                loadingColor: string
                borderWarning: string
                borderHoverWarning: string
                borderActiveWarning: string
                borderFocusWarning: string
                boxShadowHoverWarning: null
                boxShadowActiveWarning: string
                boxShadowFocusWarning: string
                colorActiveWarning: string
                caretColorWarning: string
                borderError: string
                borderHoverError: string
                borderActiveError: string
                borderFocusError: string
                boxShadowHoverError: null
                boxShadowActiveError: string
                boxShadowFocusError: string
                colorActiveError: string
                caretColorError: string
                clearColor: string
                clearColorHover: string
                clearColorPressed: string
                paddingSingle: string
                clearSize: string
                arrowSize: string
              },
              {
                Popover: import('../../../_mixins').Theme<
                  'Popover',
                  {
                    fontSize: string
                    borderRadius: string
                    color: string
                    dividerColor: string
                    textColor: string
                    boxShadow: string
                    space: string
                    spaceArrow: string
                    arrowOffset: string
                    arrowOffsetVertical: string
                    arrowHeight: string
                    padding: string
                  },
                  any
                >
              }
            >
          >
        | undefined
      bordered?: boolean | undefined
      renderLabel?: RenderLabel | undefined
      onClear?: ((e: MouseEvent) => void) | undefined
      inputProps?: InputHTMLAttributes | undefined
      renderTag?: RenderTag | undefined
      onDeleteOption?: ((option: SelectBaseOption) => void) | undefined
      maxTagCount?: number | 'responsive' | undefined
      onPatternInput?: ((e: InputEvent) => void) | undefined
    }
  >,
  {
    pattern: string
    size: 'small' | 'medium' | 'large'
    multiple: boolean
    active: boolean
    disabled: boolean
    autofocus: boolean
    loading: boolean
    bordered: boolean | undefined
    showArrow: boolean
    selectedOption: SelectBaseOption<
      string | number,
      | string
      | ((
          option: SelectBaseOption<string | number, string | any>,
          selected: boolean
        ) => import('vue').VNodeChild)
    > | null
    selectedOptions:
      | SelectBaseOption<
          string | number,
          | string
          | ((
              option: SelectBaseOption<string | number, string | any>,
              selected: boolean
            ) => import('vue').VNodeChild)
        >[]
      | null
    filterable: boolean
    clearable: boolean
    focused: boolean
  }
>
export default _default