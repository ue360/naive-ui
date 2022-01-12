import { PropType, InjectionKey, Ref } from 'vue'
import type { MaybeArray, ExtractPublicPropTypes } from '../../_utils'
export interface TagPublicMethods {
  setTextContent: (textContent: string) => void
}
export interface TagRef extends TagPublicMethods {
  $el: HTMLElement
}
declare const tagProps: {
  bordered: {
    type: PropType<boolean | undefined>
    default: undefined
  }
  checked: BooleanConstructor
  checkable: BooleanConstructor
  onClose: PropType<MaybeArray<(e: MouseEvent) => void>>
  onMouseenter: PropType<(e: MouseEvent) => void>
  onMouseleave: PropType<(e: MouseEvent) => void>
  'onUpdate:checked': PropType<(checked: boolean) => void>
  onUpdateChecked: PropType<(checked: boolean) => void>
  internalStopClickPropagation: BooleanConstructor
  onCheckedChange: {
    type: PropType<(checked: boolean) => void>
    validator: () => boolean
    default: undefined
  }
  color: PropType<import('./common-props').TagColor>
  type: {
    readonly type: PropType<
      'default' | 'error' | 'info' | 'success' | 'warning' | 'primary'
    >
    readonly default: 'default'
  }
  round: BooleanConstructor
  size: {
    readonly type: PropType<'small' | 'medium' | 'large'>
    readonly default: 'medium'
  }
  closable: BooleanConstructor
  disabled: {
    readonly type: PropType<boolean | undefined>
    readonly default: undefined
  }
  theme: PropType<
    import('../../_mixins').Theme<
      'Tag',
      {
        heightSmall: string
        heightMedium: string
        heightLarge: string
        borderRadius: string
        opacityDisabled: string
        fontSizeSmall: string
        fontSizeMedium: string
        fontSizeLarge: string
        textColorCheckable: string
        textColorHoverCheckable: string
        textColorPressedCheckable: string
        textColorChecked: string
        colorCheckable: string
        colorHoverCheckable: string
        colorPressedCheckable: string
        colorChecked: string
        colorCheckedHover: string
        colorCheckedPressed: string
        border: string
        textColor: string
        color: string
        closeColor: string
        closeColorHover: string
        closeColorPressed: string
        borderPrimary: string
        textColorPrimary: string
        colorPrimary: string
        closeColorPrimary: string
        closeColorHoverPrimary: string
        closeColorPressedPrimary: string
        borderInfo: string
        textColorInfo: string
        colorInfo: string
        closeColorInfo: string
        closeColorHoverInfo: string
        closeColorPressedInfo: string
        borderSuccess: string
        textColorSuccess: string
        colorSuccess: string
        closeColorSuccess: string
        closeColorHoverSuccess: string
        closeColorPressedSuccess: string
        borderWarning: string
        textColorWarning: string
        colorWarning: string
        closeColorWarning: string
        closeColorHoverWarning: string
        closeColorPressedWarning: string
        borderError: string
        textColorError: string
        colorError: string
        closeColorError: string
        closeColorHoverError: string
        closeColorPressedError: string
        closeSizeSmall: string
        closeSizeMedium: string
        closeSizeLarge: string
        padding: string
        closeMargin: string
        closeMarginRtl: string
      },
      any
    >
  >
  themeOverrides: PropType<
    import('../../_mixins/use-theme').ExtractThemeOverrides<
      import('../../_mixins').Theme<
        'Tag',
        {
          heightSmall: string
          heightMedium: string
          heightLarge: string
          borderRadius: string
          opacityDisabled: string
          fontSizeSmall: string
          fontSizeMedium: string
          fontSizeLarge: string
          textColorCheckable: string
          textColorHoverCheckable: string
          textColorPressedCheckable: string
          textColorChecked: string
          colorCheckable: string
          colorHoverCheckable: string
          colorPressedCheckable: string
          colorChecked: string
          colorCheckedHover: string
          colorCheckedPressed: string
          border: string
          textColor: string
          color: string
          closeColor: string
          closeColorHover: string
          closeColorPressed: string
          borderPrimary: string
          textColorPrimary: string
          colorPrimary: string
          closeColorPrimary: string
          closeColorHoverPrimary: string
          closeColorPressedPrimary: string
          borderInfo: string
          textColorInfo: string
          colorInfo: string
          closeColorInfo: string
          closeColorHoverInfo: string
          closeColorPressedInfo: string
          borderSuccess: string
          textColorSuccess: string
          colorSuccess: string
          closeColorSuccess: string
          closeColorHoverSuccess: string
          closeColorPressedSuccess: string
          borderWarning: string
          textColorWarning: string
          colorWarning: string
          closeColorWarning: string
          closeColorHoverWarning: string
          closeColorPressedWarning: string
          borderError: string
          textColorError: string
          colorError: string
          closeColorError: string
          closeColorHoverError: string
          closeColorPressedError: string
          closeSizeSmall: string
          closeSizeMedium: string
          closeSizeLarge: string
          padding: string
          closeMargin: string
          closeMarginRtl: string
        },
        any
      >
    >
  >
  builtinThemeOverrides: PropType<
    import('../../_mixins/use-theme').ExtractThemeOverrides<
      import('../../_mixins').Theme<
        'Tag',
        {
          heightSmall: string
          heightMedium: string
          heightLarge: string
          borderRadius: string
          opacityDisabled: string
          fontSizeSmall: string
          fontSizeMedium: string
          fontSizeLarge: string
          textColorCheckable: string
          textColorHoverCheckable: string
          textColorPressedCheckable: string
          textColorChecked: string
          colorCheckable: string
          colorHoverCheckable: string
          colorPressedCheckable: string
          colorChecked: string
          colorCheckedHover: string
          colorCheckedPressed: string
          border: string
          textColor: string
          color: string
          closeColor: string
          closeColorHover: string
          closeColorPressed: string
          borderPrimary: string
          textColorPrimary: string
          colorPrimary: string
          closeColorPrimary: string
          closeColorHoverPrimary: string
          closeColorPressedPrimary: string
          borderInfo: string
          textColorInfo: string
          colorInfo: string
          closeColorInfo: string
          closeColorHoverInfo: string
          closeColorPressedInfo: string
          borderSuccess: string
          textColorSuccess: string
          colorSuccess: string
          closeColorSuccess: string
          closeColorHoverSuccess: string
          closeColorPressedSuccess: string
          borderWarning: string
          textColorWarning: string
          colorWarning: string
          closeColorWarning: string
          closeColorHoverWarning: string
          closeColorPressedWarning: string
          borderError: string
          textColorError: string
          colorError: string
          closeColorError: string
          closeColorHoverError: string
          closeColorPressedError: string
          closeSizeSmall: string
          closeSizeMedium: string
          closeSizeLarge: string
          padding: string
          closeMargin: string
          closeMarginRtl: string
        },
        any
      >
    >
  >
}
interface TagInjection {
  roundRef: Ref<boolean>
}
export declare const tagInjectionKey: InjectionKey<TagInjection>
export declare type TagProps = ExtractPublicPropTypes<typeof tagProps>
declare const _default: import('vue').DefineComponent<
  {
    bordered: {
      type: PropType<boolean | undefined>
      default: undefined
    }
    checked: BooleanConstructor
    checkable: BooleanConstructor
    onClose: PropType<MaybeArray<(e: MouseEvent) => void>>
    onMouseenter: PropType<(e: MouseEvent) => void>
    onMouseleave: PropType<(e: MouseEvent) => void>
    'onUpdate:checked': PropType<(checked: boolean) => void>
    onUpdateChecked: PropType<(checked: boolean) => void>
    internalStopClickPropagation: BooleanConstructor
    onCheckedChange: {
      type: PropType<(checked: boolean) => void>
      validator: () => boolean
      default: undefined
    }
    color: PropType<import('./common-props').TagColor>
    type: {
      readonly type: PropType<
        'default' | 'error' | 'info' | 'success' | 'warning' | 'primary'
      >
      readonly default: 'default'
    }
    round: BooleanConstructor
    size: {
      readonly type: PropType<'small' | 'medium' | 'large'>
      readonly default: 'medium'
    }
    closable: BooleanConstructor
    disabled: {
      readonly type: PropType<boolean | undefined>
      readonly default: undefined
    }
    theme: PropType<
      import('../../_mixins').Theme<
        'Tag',
        {
          heightSmall: string
          heightMedium: string
          heightLarge: string
          borderRadius: string
          opacityDisabled: string
          fontSizeSmall: string
          fontSizeMedium: string
          fontSizeLarge: string
          textColorCheckable: string
          textColorHoverCheckable: string
          textColorPressedCheckable: string
          textColorChecked: string
          colorCheckable: string
          colorHoverCheckable: string
          colorPressedCheckable: string
          colorChecked: string
          colorCheckedHover: string
          colorCheckedPressed: string
          border: string
          textColor: string
          color: string
          closeColor: string
          closeColorHover: string
          closeColorPressed: string
          borderPrimary: string
          textColorPrimary: string
          colorPrimary: string
          closeColorPrimary: string
          closeColorHoverPrimary: string
          closeColorPressedPrimary: string
          borderInfo: string
          textColorInfo: string
          colorInfo: string
          closeColorInfo: string
          closeColorHoverInfo: string
          closeColorPressedInfo: string
          borderSuccess: string
          textColorSuccess: string
          colorSuccess: string
          closeColorSuccess: string
          closeColorHoverSuccess: string
          closeColorPressedSuccess: string
          borderWarning: string
          textColorWarning: string
          colorWarning: string
          closeColorWarning: string
          closeColorHoverWarning: string
          closeColorPressedWarning: string
          borderError: string
          textColorError: string
          colorError: string
          closeColorError: string
          closeColorHoverError: string
          closeColorPressedError: string
          closeSizeSmall: string
          closeSizeMedium: string
          closeSizeLarge: string
          padding: string
          closeMargin: string
          closeMarginRtl: string
        },
        any
      >
    >
    themeOverrides: PropType<
      import('../../_mixins/use-theme').ExtractThemeOverrides<
        import('../../_mixins').Theme<
          'Tag',
          {
            heightSmall: string
            heightMedium: string
            heightLarge: string
            borderRadius: string
            opacityDisabled: string
            fontSizeSmall: string
            fontSizeMedium: string
            fontSizeLarge: string
            textColorCheckable: string
            textColorHoverCheckable: string
            textColorPressedCheckable: string
            textColorChecked: string
            colorCheckable: string
            colorHoverCheckable: string
            colorPressedCheckable: string
            colorChecked: string
            colorCheckedHover: string
            colorCheckedPressed: string
            border: string
            textColor: string
            color: string
            closeColor: string
            closeColorHover: string
            closeColorPressed: string
            borderPrimary: string
            textColorPrimary: string
            colorPrimary: string
            closeColorPrimary: string
            closeColorHoverPrimary: string
            closeColorPressedPrimary: string
            borderInfo: string
            textColorInfo: string
            colorInfo: string
            closeColorInfo: string
            closeColorHoverInfo: string
            closeColorPressedInfo: string
            borderSuccess: string
            textColorSuccess: string
            colorSuccess: string
            closeColorSuccess: string
            closeColorHoverSuccess: string
            closeColorPressedSuccess: string
            borderWarning: string
            textColorWarning: string
            colorWarning: string
            closeColorWarning: string
            closeColorHoverWarning: string
            closeColorPressedWarning: string
            borderError: string
            textColorError: string
            colorError: string
            closeColorError: string
            closeColorHoverError: string
            closeColorPressedError: string
            closeSizeSmall: string
            closeSizeMedium: string
            closeSizeLarge: string
            padding: string
            closeMargin: string
            closeMarginRtl: string
          },
          any
        >
      >
    >
    builtinThemeOverrides: PropType<
      import('../../_mixins/use-theme').ExtractThemeOverrides<
        import('../../_mixins').Theme<
          'Tag',
          {
            heightSmall: string
            heightMedium: string
            heightLarge: string
            borderRadius: string
            opacityDisabled: string
            fontSizeSmall: string
            fontSizeMedium: string
            fontSizeLarge: string
            textColorCheckable: string
            textColorHoverCheckable: string
            textColorPressedCheckable: string
            textColorChecked: string
            colorCheckable: string
            colorHoverCheckable: string
            colorPressedCheckable: string
            colorChecked: string
            colorCheckedHover: string
            colorCheckedPressed: string
            border: string
            textColor: string
            color: string
            closeColor: string
            closeColorHover: string
            closeColorPressed: string
            borderPrimary: string
            textColorPrimary: string
            colorPrimary: string
            closeColorPrimary: string
            closeColorHoverPrimary: string
            closeColorPressedPrimary: string
            borderInfo: string
            textColorInfo: string
            colorInfo: string
            closeColorInfo: string
            closeColorHoverInfo: string
            closeColorPressedInfo: string
            borderSuccess: string
            textColorSuccess: string
            colorSuccess: string
            closeColorSuccess: string
            closeColorHoverSuccess: string
            closeColorPressedSuccess: string
            borderWarning: string
            textColorWarning: string
            colorWarning: string
            closeColorWarning: string
            closeColorHoverWarning: string
            closeColorPressedWarning: string
            borderError: string
            textColorError: string
            colorError: string
            closeColorError: string
            closeColorHoverError: string
            closeColorPressedError: string
            closeSizeSmall: string
            closeSizeMedium: string
            closeSizeLarge: string
            padding: string
            closeMargin: string
            closeMarginRtl: string
          },
          any
        >
      >
    >
  },
  {
    rtlEnabled:
      | Ref<
          | import('../../config-provider/src/internal-interface').RtlItem
          | undefined
        >
      | undefined
    mergedClsPrefix: import('vue').ComputedRef<string>
    contentRef: Ref<HTMLElement | null>
    mergedBordered: import('vue').ComputedRef<boolean>
    handleClick: (e: MouseEvent) => void
    handleCloseClick: (e: MouseEvent) => void
    cssVars: import('vue').ComputedRef<{
      '--avatar-size-override': string
      '--bezier': string
      '--border-radius': string
      '--border': string
      '--close-color': string
      '--close-color-hover': string
      '--close-color-pressed': string
      '--close-margin': string
      '--close-margin-rtl': string
      '--close-size': string
      '--color': string
      '--color-checkable': string
      '--color-checked': string
      '--color-checked-hover': string
      '--color-checked-pressed': string
      '--color-hover-checkable': string
      '--color-pressed-checkable': string
      '--font-size': string
      '--height': string
      '--opacity-disabled': string
      '--padding': string
      '--text-color': string
      '--text-color-checkable': string
      '--text-color-checked': string
      '--text-color-hover-checkable': string
      '--text-color-pressed-checkable': string
    }>
    setTextContent: (textContent: string) => void
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
      checked?: unknown
      checkable?: unknown
      onClose?: unknown
      onMouseenter?: unknown
      onMouseleave?: unknown
      'onUpdate:checked'?: unknown
      onUpdateChecked?: unknown
      internalStopClickPropagation?: unknown
      onCheckedChange?: unknown
      color?: unknown
      type?: unknown
      round?: unknown
      size?: unknown
      closable?: unknown
      disabled?: unknown
      theme?: unknown
      themeOverrides?: unknown
      builtinThemeOverrides?: unknown
    } & {
      type: 'default' | 'error' | 'info' | 'success' | 'warning' | 'primary'
      round: boolean
      size: 'small' | 'medium' | 'large'
      checked: boolean
      checkable: boolean
      internalStopClickPropagation: boolean
      closable: boolean
    } & {
      color?: import('./common-props').TagColor | undefined
      disabled?: boolean | undefined
      onMouseenter?: ((e: MouseEvent) => void) | undefined
      onMouseleave?: ((e: MouseEvent) => void) | undefined
      theme?:
        | import('../../_mixins').Theme<
            'Tag',
            {
              heightSmall: string
              heightMedium: string
              heightLarge: string
              borderRadius: string
              opacityDisabled: string
              fontSizeSmall: string
              fontSizeMedium: string
              fontSizeLarge: string
              textColorCheckable: string
              textColorHoverCheckable: string
              textColorPressedCheckable: string
              textColorChecked: string
              colorCheckable: string
              colorHoverCheckable: string
              colorPressedCheckable: string
              colorChecked: string
              colorCheckedHover: string
              colorCheckedPressed: string
              border: string
              textColor: string
              color: string
              closeColor: string
              closeColorHover: string
              closeColorPressed: string
              borderPrimary: string
              textColorPrimary: string
              colorPrimary: string
              closeColorPrimary: string
              closeColorHoverPrimary: string
              closeColorPressedPrimary: string
              borderInfo: string
              textColorInfo: string
              colorInfo: string
              closeColorInfo: string
              closeColorHoverInfo: string
              closeColorPressedInfo: string
              borderSuccess: string
              textColorSuccess: string
              colorSuccess: string
              closeColorSuccess: string
              closeColorHoverSuccess: string
              closeColorPressedSuccess: string
              borderWarning: string
              textColorWarning: string
              colorWarning: string
              closeColorWarning: string
              closeColorHoverWarning: string
              closeColorPressedWarning: string
              borderError: string
              textColorError: string
              colorError: string
              closeColorError: string
              closeColorHoverError: string
              closeColorPressedError: string
              closeSizeSmall: string
              closeSizeMedium: string
              closeSizeLarge: string
              padding: string
              closeMargin: string
              closeMarginRtl: string
            },
            any
          >
        | undefined
      themeOverrides?:
        | import('../../_mixins/use-theme').ExtractThemeOverrides<
            import('../../_mixins').Theme<
              'Tag',
              {
                heightSmall: string
                heightMedium: string
                heightLarge: string
                borderRadius: string
                opacityDisabled: string
                fontSizeSmall: string
                fontSizeMedium: string
                fontSizeLarge: string
                textColorCheckable: string
                textColorHoverCheckable: string
                textColorPressedCheckable: string
                textColorChecked: string
                colorCheckable: string
                colorHoverCheckable: string
                colorPressedCheckable: string
                colorChecked: string
                colorCheckedHover: string
                colorCheckedPressed: string
                border: string
                textColor: string
                color: string
                closeColor: string
                closeColorHover: string
                closeColorPressed: string
                borderPrimary: string
                textColorPrimary: string
                colorPrimary: string
                closeColorPrimary: string
                closeColorHoverPrimary: string
                closeColorPressedPrimary: string
                borderInfo: string
                textColorInfo: string
                colorInfo: string
                closeColorInfo: string
                closeColorHoverInfo: string
                closeColorPressedInfo: string
                borderSuccess: string
                textColorSuccess: string
                colorSuccess: string
                closeColorSuccess: string
                closeColorHoverSuccess: string
                closeColorPressedSuccess: string
                borderWarning: string
                textColorWarning: string
                colorWarning: string
                closeColorWarning: string
                closeColorHoverWarning: string
                closeColorPressedWarning: string
                borderError: string
                textColorError: string
                colorError: string
                closeColorError: string
                closeColorHoverError: string
                closeColorPressedError: string
                closeSizeSmall: string
                closeSizeMedium: string
                closeSizeLarge: string
                padding: string
                closeMargin: string
                closeMarginRtl: string
              },
              any
            >
          >
        | undefined
      builtinThemeOverrides?:
        | import('../../_mixins/use-theme').ExtractThemeOverrides<
            import('../../_mixins').Theme<
              'Tag',
              {
                heightSmall: string
                heightMedium: string
                heightLarge: string
                borderRadius: string
                opacityDisabled: string
                fontSizeSmall: string
                fontSizeMedium: string
                fontSizeLarge: string
                textColorCheckable: string
                textColorHoverCheckable: string
                textColorPressedCheckable: string
                textColorChecked: string
                colorCheckable: string
                colorHoverCheckable: string
                colorPressedCheckable: string
                colorChecked: string
                colorCheckedHover: string
                colorCheckedPressed: string
                border: string
                textColor: string
                color: string
                closeColor: string
                closeColorHover: string
                closeColorPressed: string
                borderPrimary: string
                textColorPrimary: string
                colorPrimary: string
                closeColorPrimary: string
                closeColorHoverPrimary: string
                closeColorPressedPrimary: string
                borderInfo: string
                textColorInfo: string
                colorInfo: string
                closeColorInfo: string
                closeColorHoverInfo: string
                closeColorPressedInfo: string
                borderSuccess: string
                textColorSuccess: string
                colorSuccess: string
                closeColorSuccess: string
                closeColorHoverSuccess: string
                closeColorPressedSuccess: string
                borderWarning: string
                textColorWarning: string
                colorWarning: string
                closeColorWarning: string
                closeColorHoverWarning: string
                closeColorPressedWarning: string
                borderError: string
                textColorError: string
                colorError: string
                closeColorError: string
                closeColorHoverError: string
                closeColorPressedError: string
                closeSizeSmall: string
                closeSizeMedium: string
                closeSizeLarge: string
                padding: string
                closeMargin: string
                closeMarginRtl: string
              },
              any
            >
          >
        | undefined
      bordered?: boolean | undefined
      onClose?: MaybeArray<(e: MouseEvent) => void> | undefined
      'onUpdate:checked'?: ((checked: boolean) => void) | undefined
      onUpdateChecked?: ((checked: boolean) => void) | undefined
      onCheckedChange?: ((checked: boolean) => void) | undefined
    }
  >,
  {
    type: 'default' | 'error' | 'info' | 'success' | 'warning' | 'primary'
    round: boolean
    size: 'small' | 'medium' | 'large'
    disabled: boolean | undefined
    checked: boolean
    bordered: boolean | undefined
    checkable: boolean
    internalStopClickPropagation: boolean
    onCheckedChange: (checked: boolean) => void
    closable: boolean
  }
>
export default _default
