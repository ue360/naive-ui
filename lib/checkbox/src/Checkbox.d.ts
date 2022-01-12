import { PropType } from 'vue'
import { MaybeArray, ExtractPublicPropTypes } from '../../_utils'
import type { OnUpdateChecked } from './interface'
declare const checkboxProps: {
  size: PropType<'small' | 'medium' | 'large'>
  checked: {
    type: PropType<string | number | boolean | undefined>
    default: undefined
  }
  defaultChecked: {
    type: PropType<string | number | boolean>
    default: boolean
  }
  value: PropType<string | number>
  disabled: {
    type: PropType<boolean | undefined>
    default: undefined
  }
  indeterminate: BooleanConstructor
  label: StringConstructor
  focusable: {
    type: BooleanConstructor
    default: boolean
  }
  checkedValue: {
    type: (BooleanConstructor | StringConstructor | NumberConstructor)[]
    default: boolean
  }
  uncheckedValue: {
    type: (BooleanConstructor | StringConstructor | NumberConstructor)[]
    default: boolean
  }
  'onUpdate:checked': PropType<MaybeArray<OnUpdateChecked>>
  onUpdateChecked: PropType<MaybeArray<OnUpdateChecked>>
  privateInsideTable: BooleanConstructor
  onChange: PropType<MaybeArray<OnUpdateChecked>>
  theme: PropType<
    import('../../_mixins').Theme<
      'Checkbox',
      {
        fontSizeSmall: string
        fontSizeMedium: string
        fontSizeLarge: string
        borderRadius: string
        color: string
        colorChecked: string
        colorDisabled: string
        colorDisabledChecked: string
        colorTableHeader: string
        colorTableHeaderModal: string
        colorTableHeaderPopover: string
        checkMarkColor: string
        checkMarkColorDisabled: string
        checkMarkColorDisabledChecked: string
        border: string
        borderDisabled: string
        borderDisabledChecked: string
        borderChecked: string
        borderFocus: string
        boxShadowFocus: string
        textColor: string
        textColorDisabled: string
        sizeSmall: string
        sizeMedium: string
        sizeLarge: string
        labelPadding: string
      },
      any
    >
  >
  themeOverrides: PropType<
    import('../../_mixins/use-theme').ExtractThemeOverrides<
      import('../../_mixins').Theme<
        'Checkbox',
        {
          fontSizeSmall: string
          fontSizeMedium: string
          fontSizeLarge: string
          borderRadius: string
          color: string
          colorChecked: string
          colorDisabled: string
          colorDisabledChecked: string
          colorTableHeader: string
          colorTableHeaderModal: string
          colorTableHeaderPopover: string
          checkMarkColor: string
          checkMarkColorDisabled: string
          checkMarkColorDisabledChecked: string
          border: string
          borderDisabled: string
          borderDisabledChecked: string
          borderChecked: string
          borderFocus: string
          boxShadowFocus: string
          textColor: string
          textColorDisabled: string
          sizeSmall: string
          sizeMedium: string
          sizeLarge: string
          labelPadding: string
        },
        any
      >
    >
  >
  builtinThemeOverrides: PropType<
    import('../../_mixins/use-theme').ExtractThemeOverrides<
      import('../../_mixins').Theme<
        'Checkbox',
        {
          fontSizeSmall: string
          fontSizeMedium: string
          fontSizeLarge: string
          borderRadius: string
          color: string
          colorChecked: string
          colorDisabled: string
          colorDisabledChecked: string
          colorTableHeader: string
          colorTableHeaderModal: string
          colorTableHeaderPopover: string
          checkMarkColor: string
          checkMarkColorDisabled: string
          checkMarkColorDisabledChecked: string
          border: string
          borderDisabled: string
          borderDisabledChecked: string
          borderChecked: string
          borderFocus: string
          boxShadowFocus: string
          textColor: string
          textColorDisabled: string
          sizeSmall: string
          sizeMedium: string
          sizeLarge: string
          labelPadding: string
        },
        any
      >
    >
  >
}
export declare type CheckboxProps = ExtractPublicPropTypes<typeof checkboxProps>
declare const _default: import('vue').DefineComponent<
  {
    size: PropType<'small' | 'medium' | 'large'>
    checked: {
      type: PropType<string | number | boolean | undefined>
      default: undefined
    }
    defaultChecked: {
      type: PropType<string | number | boolean>
      default: boolean
    }
    value: PropType<string | number>
    disabled: {
      type: PropType<boolean | undefined>
      default: undefined
    }
    indeterminate: BooleanConstructor
    label: StringConstructor
    focusable: {
      type: BooleanConstructor
      default: boolean
    }
    checkedValue: {
      type: (BooleanConstructor | StringConstructor | NumberConstructor)[]
      default: boolean
    }
    uncheckedValue: {
      type: (BooleanConstructor | StringConstructor | NumberConstructor)[]
      default: boolean
    }
    'onUpdate:checked': PropType<MaybeArray<OnUpdateChecked>>
    onUpdateChecked: PropType<MaybeArray<OnUpdateChecked>>
    privateInsideTable: BooleanConstructor
    onChange: PropType<MaybeArray<OnUpdateChecked>>
    theme: PropType<
      import('../../_mixins').Theme<
        'Checkbox',
        {
          fontSizeSmall: string
          fontSizeMedium: string
          fontSizeLarge: string
          borderRadius: string
          color: string
          colorChecked: string
          colorDisabled: string
          colorDisabledChecked: string
          colorTableHeader: string
          colorTableHeaderModal: string
          colorTableHeaderPopover: string
          checkMarkColor: string
          checkMarkColorDisabled: string
          checkMarkColorDisabledChecked: string
          border: string
          borderDisabled: string
          borderDisabledChecked: string
          borderChecked: string
          borderFocus: string
          boxShadowFocus: string
          textColor: string
          textColorDisabled: string
          sizeSmall: string
          sizeMedium: string
          sizeLarge: string
          labelPadding: string
        },
        any
      >
    >
    themeOverrides: PropType<
      import('../../_mixins/use-theme').ExtractThemeOverrides<
        import('../../_mixins').Theme<
          'Checkbox',
          {
            fontSizeSmall: string
            fontSizeMedium: string
            fontSizeLarge: string
            borderRadius: string
            color: string
            colorChecked: string
            colorDisabled: string
            colorDisabledChecked: string
            colorTableHeader: string
            colorTableHeaderModal: string
            colorTableHeaderPopover: string
            checkMarkColor: string
            checkMarkColorDisabled: string
            checkMarkColorDisabledChecked: string
            border: string
            borderDisabled: string
            borderDisabledChecked: string
            borderChecked: string
            borderFocus: string
            boxShadowFocus: string
            textColor: string
            textColorDisabled: string
            sizeSmall: string
            sizeMedium: string
            sizeLarge: string
            labelPadding: string
          },
          any
        >
      >
    >
    builtinThemeOverrides: PropType<
      import('../../_mixins/use-theme').ExtractThemeOverrides<
        import('../../_mixins').Theme<
          'Checkbox',
          {
            fontSizeSmall: string
            fontSizeMedium: string
            fontSizeLarge: string
            borderRadius: string
            color: string
            colorChecked: string
            colorDisabled: string
            colorDisabledChecked: string
            colorTableHeader: string
            colorTableHeaderModal: string
            colorTableHeaderPopover: string
            checkMarkColor: string
            checkMarkColorDisabled: string
            checkMarkColorDisabledChecked: string
            border: string
            borderDisabled: string
            borderDisabledChecked: string
            borderChecked: string
            borderFocus: string
            boxShadowFocus: string
            textColor: string
            textColorDisabled: string
            sizeSmall: string
            sizeMedium: string
            sizeLarge: string
            labelPadding: string
          },
          any
        >
      >
    >
  },
  import('../../_mixins/use-form-item').UseFormItem<
    'small' | 'medium' | 'large'
  > & {
    mergedClsPrefix: import('vue').ComputedRef<string>
    mergedDisabled: import('vue').ComputedRef<boolean>
    renderedChecked: import('vue').ComputedRef<boolean>
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
        fontSizeSmall: string
        fontSizeMedium: string
        fontSizeLarge: string
        borderRadius: string
        color: string
        colorChecked: string
        colorDisabled: string
        colorDisabledChecked: string
        colorTableHeader: string
        colorTableHeaderModal: string
        colorTableHeaderPopover: string
        checkMarkColor: string
        checkMarkColorDisabled: string
        checkMarkColorDisabledChecked: string
        border: string
        borderDisabled: string
        borderDisabledChecked: string
        borderChecked: string
        borderFocus: string
        boxShadowFocus: string
        textColor: string
        textColorDisabled: string
        sizeSmall: string
        sizeMedium: string
        sizeLarge: string
        labelPadding: string
      }
      peers: any
      peerOverrides: {
        [x: string]: any
      }
    }>
    labelId: string
    handleClick: (e: MouseEvent) => void
    handleKeyUp: (e: KeyboardEvent) => void
    handleKeyDown: (e: KeyboardEvent) => void
    cssVars: import('vue').ComputedRef<{
      '--size': string
      '--bezier': string
      '--border-radius': string
      '--border': string
      '--border-checked': string
      '--border-focus': string
      '--border-disabled': string
      '--border-disabled-checked': string
      '--box-shadow-focus': string
      '--color': string
      '--color-checked': string
      '--color-table-header': string
      '--color-table-header-modal': string
      '--color-table-header-popover': string
      '--color-disabled': string
      '--color-disabled-checked': string
      '--text-color': string
      '--text-color-disabled': string
      '--check-mark-color': string
      '--check-mark-color-disabled': string
      '--check-mark-color-disabled-checked': string
      '--font-size': string
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
      size?: unknown
      checked?: unknown
      defaultChecked?: unknown
      value?: unknown
      disabled?: unknown
      indeterminate?: unknown
      label?: unknown
      focusable?: unknown
      checkedValue?: unknown
      uncheckedValue?: unknown
      'onUpdate:checked'?: unknown
      onUpdateChecked?: unknown
      privateInsideTable?: unknown
      onChange?: unknown
      theme?: unknown
      themeOverrides?: unknown
      builtinThemeOverrides?: unknown
    } & {
      focusable: boolean
      indeterminate: boolean
      defaultChecked: string | number | boolean
      checkedValue: string | number | boolean
      uncheckedValue: string | number | boolean
      privateInsideTable: boolean
    } & {
      value?: string | number | undefined
      label?: string | undefined
      size?: 'small' | 'medium' | 'large' | undefined
      disabled?: boolean | undefined
      onChange?: MaybeArray<OnUpdateChecked> | undefined
      checked?: string | number | boolean | undefined
      theme?:
        | import('../../_mixins').Theme<
            'Checkbox',
            {
              fontSizeSmall: string
              fontSizeMedium: string
              fontSizeLarge: string
              borderRadius: string
              color: string
              colorChecked: string
              colorDisabled: string
              colorDisabledChecked: string
              colorTableHeader: string
              colorTableHeaderModal: string
              colorTableHeaderPopover: string
              checkMarkColor: string
              checkMarkColorDisabled: string
              checkMarkColorDisabledChecked: string
              border: string
              borderDisabled: string
              borderDisabledChecked: string
              borderChecked: string
              borderFocus: string
              boxShadowFocus: string
              textColor: string
              textColorDisabled: string
              sizeSmall: string
              sizeMedium: string
              sizeLarge: string
              labelPadding: string
            },
            any
          >
        | undefined
      themeOverrides?:
        | import('../../_mixins/use-theme').ExtractThemeOverrides<
            import('../../_mixins').Theme<
              'Checkbox',
              {
                fontSizeSmall: string
                fontSizeMedium: string
                fontSizeLarge: string
                borderRadius: string
                color: string
                colorChecked: string
                colorDisabled: string
                colorDisabledChecked: string
                colorTableHeader: string
                colorTableHeaderModal: string
                colorTableHeaderPopover: string
                checkMarkColor: string
                checkMarkColorDisabled: string
                checkMarkColorDisabledChecked: string
                border: string
                borderDisabled: string
                borderDisabledChecked: string
                borderChecked: string
                borderFocus: string
                boxShadowFocus: string
                textColor: string
                textColorDisabled: string
                sizeSmall: string
                sizeMedium: string
                sizeLarge: string
                labelPadding: string
              },
              any
            >
          >
        | undefined
      builtinThemeOverrides?:
        | import('../../_mixins/use-theme').ExtractThemeOverrides<
            import('../../_mixins').Theme<
              'Checkbox',
              {
                fontSizeSmall: string
                fontSizeMedium: string
                fontSizeLarge: string
                borderRadius: string
                color: string
                colorChecked: string
                colorDisabled: string
                colorDisabledChecked: string
                colorTableHeader: string
                colorTableHeaderModal: string
                colorTableHeaderPopover: string
                checkMarkColor: string
                checkMarkColorDisabled: string
                checkMarkColorDisabledChecked: string
                border: string
                borderDisabled: string
                borderDisabledChecked: string
                borderChecked: string
                borderFocus: string
                boxShadowFocus: string
                textColor: string
                textColorDisabled: string
                sizeSmall: string
                sizeMedium: string
                sizeLarge: string
                labelPadding: string
              },
              any
            >
          >
        | undefined
      'onUpdate:checked'?: MaybeArray<OnUpdateChecked> | undefined
      onUpdateChecked?: MaybeArray<OnUpdateChecked> | undefined
    }
  >,
  {
    disabled: boolean | undefined
    checked: string | number | boolean | undefined
    focusable: boolean
    indeterminate: boolean
    defaultChecked: string | number | boolean
    checkedValue: string | number | boolean
    uncheckedValue: string | number | boolean
    privateInsideTable: boolean
  }
>
export default _default
