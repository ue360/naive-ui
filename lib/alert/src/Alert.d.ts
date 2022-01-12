import { PropType } from 'vue'
import type { ExtractPublicPropTypes } from '../../_utils'
declare const alertProps: {
  title: {
    type: StringConstructor
    default: undefined
  }
  showIcon: {
    type: BooleanConstructor
    default: boolean
  }
  type: {
    type: PropType<'default' | 'error' | 'info' | 'success' | 'warning'>
    default: string
  }
  closable: {
    type: BooleanConstructor
    default: boolean
  }
  onClose: FunctionConstructor
  onAfterLeave: {
    type: FunctionConstructor
    default: undefined
  }
  onAfterHide: {
    type: FunctionConstructor
    validator: () => boolean
    default: undefined
  }
  theme: PropType<
    import('../../_mixins').Theme<
      'Alert',
      {
        fontSize: string
        lineHeight: string
        titleFontWeight: string
        borderRadius: string
        border: string
        color: string
        titleTextColor: string
        iconColor: string
        contentTextColor: string
        closeColor: string
        closeColorHover: string
        closeColorPressed: string
        borderInfo: string
        colorInfo: string
        titleTextColorInfo: string
        iconColorInfo: string
        contentTextColorInfo: string
        closeColorInfo: string
        closeColorHoverInfo: string
        closeColorPressedInfo: string
        borderSuccess: string
        colorSuccess: string
        titleTextColorSuccess: string
        iconColorSuccess: string
        contentTextColorSuccess: string
        closeColorSuccess: string
        closeColorHoverSuccess: string
        closeColorPressedSuccess: string
        borderWarning: string
        colorWarning: string
        titleTextColorWarning: string
        iconColorWarning: string
        contentTextColorWarning: string
        closeColorWarning: string
        closeColorHoverWarning: string
        closeColorPressedWarning: string
        borderError: string
        colorError: string
        titleTextColorError: string
        iconColorError: string
        contentTextColorError: string
        closeColorError: string
        closeColorHoverError: string
        closeColorPressedError: string
        iconMargin: string
        iconSize: string
        closeSize: string
        closeMargin: string
        padding: string
      },
      any
    >
  >
  themeOverrides: PropType<
    import('../../_mixins/use-theme').ExtractThemeOverrides<
      import('../../_mixins').Theme<
        'Alert',
        {
          fontSize: string
          lineHeight: string
          titleFontWeight: string
          borderRadius: string
          border: string
          color: string
          titleTextColor: string
          iconColor: string
          contentTextColor: string
          closeColor: string
          closeColorHover: string
          closeColorPressed: string
          borderInfo: string
          colorInfo: string
          titleTextColorInfo: string
          iconColorInfo: string
          contentTextColorInfo: string
          closeColorInfo: string
          closeColorHoverInfo: string
          closeColorPressedInfo: string
          borderSuccess: string
          colorSuccess: string
          titleTextColorSuccess: string
          iconColorSuccess: string
          contentTextColorSuccess: string
          closeColorSuccess: string
          closeColorHoverSuccess: string
          closeColorPressedSuccess: string
          borderWarning: string
          colorWarning: string
          titleTextColorWarning: string
          iconColorWarning: string
          contentTextColorWarning: string
          closeColorWarning: string
          closeColorHoverWarning: string
          closeColorPressedWarning: string
          borderError: string
          colorError: string
          titleTextColorError: string
          iconColorError: string
          contentTextColorError: string
          closeColorError: string
          closeColorHoverError: string
          closeColorPressedError: string
          iconMargin: string
          iconSize: string
          closeSize: string
          closeMargin: string
          padding: string
        },
        any
      >
    >
  >
  builtinThemeOverrides: PropType<
    import('../../_mixins/use-theme').ExtractThemeOverrides<
      import('../../_mixins').Theme<
        'Alert',
        {
          fontSize: string
          lineHeight: string
          titleFontWeight: string
          borderRadius: string
          border: string
          color: string
          titleTextColor: string
          iconColor: string
          contentTextColor: string
          closeColor: string
          closeColorHover: string
          closeColorPressed: string
          borderInfo: string
          colorInfo: string
          titleTextColorInfo: string
          iconColorInfo: string
          contentTextColorInfo: string
          closeColorInfo: string
          closeColorHoverInfo: string
          closeColorPressedInfo: string
          borderSuccess: string
          colorSuccess: string
          titleTextColorSuccess: string
          iconColorSuccess: string
          contentTextColorSuccess: string
          closeColorSuccess: string
          closeColorHoverSuccess: string
          closeColorPressedSuccess: string
          borderWarning: string
          colorWarning: string
          titleTextColorWarning: string
          iconColorWarning: string
          contentTextColorWarning: string
          closeColorWarning: string
          closeColorHoverWarning: string
          closeColorPressedWarning: string
          borderError: string
          colorError: string
          titleTextColorError: string
          iconColorError: string
          contentTextColorError: string
          closeColorError: string
          closeColorHoverError: string
          closeColorPressedError: string
          iconMargin: string
          iconSize: string
          closeSize: string
          closeMargin: string
          padding: string
        },
        any
      >
    >
  >
}
export declare type AlertProps = ExtractPublicPropTypes<typeof alertProps>
declare const _default: import('vue').DefineComponent<
  {
    title: {
      type: StringConstructor
      default: undefined
    }
    showIcon: {
      type: BooleanConstructor
      default: boolean
    }
    type: {
      type: PropType<'default' | 'error' | 'info' | 'success' | 'warning'>
      default: string
    }
    closable: {
      type: BooleanConstructor
      default: boolean
    }
    onClose: FunctionConstructor
    onAfterLeave: {
      type: FunctionConstructor
      default: undefined
    }
    onAfterHide: {
      type: FunctionConstructor
      validator: () => boolean
      default: undefined
    }
    theme: PropType<
      import('../../_mixins').Theme<
        'Alert',
        {
          fontSize: string
          lineHeight: string
          titleFontWeight: string
          borderRadius: string
          border: string
          color: string
          titleTextColor: string
          iconColor: string
          contentTextColor: string
          closeColor: string
          closeColorHover: string
          closeColorPressed: string
          borderInfo: string
          colorInfo: string
          titleTextColorInfo: string
          iconColorInfo: string
          contentTextColorInfo: string
          closeColorInfo: string
          closeColorHoverInfo: string
          closeColorPressedInfo: string
          borderSuccess: string
          colorSuccess: string
          titleTextColorSuccess: string
          iconColorSuccess: string
          contentTextColorSuccess: string
          closeColorSuccess: string
          closeColorHoverSuccess: string
          closeColorPressedSuccess: string
          borderWarning: string
          colorWarning: string
          titleTextColorWarning: string
          iconColorWarning: string
          contentTextColorWarning: string
          closeColorWarning: string
          closeColorHoverWarning: string
          closeColorPressedWarning: string
          borderError: string
          colorError: string
          titleTextColorError: string
          iconColorError: string
          contentTextColorError: string
          closeColorError: string
          closeColorHoverError: string
          closeColorPressedError: string
          iconMargin: string
          iconSize: string
          closeSize: string
          closeMargin: string
          padding: string
        },
        any
      >
    >
    themeOverrides: PropType<
      import('../../_mixins/use-theme').ExtractThemeOverrides<
        import('../../_mixins').Theme<
          'Alert',
          {
            fontSize: string
            lineHeight: string
            titleFontWeight: string
            borderRadius: string
            border: string
            color: string
            titleTextColor: string
            iconColor: string
            contentTextColor: string
            closeColor: string
            closeColorHover: string
            closeColorPressed: string
            borderInfo: string
            colorInfo: string
            titleTextColorInfo: string
            iconColorInfo: string
            contentTextColorInfo: string
            closeColorInfo: string
            closeColorHoverInfo: string
            closeColorPressedInfo: string
            borderSuccess: string
            colorSuccess: string
            titleTextColorSuccess: string
            iconColorSuccess: string
            contentTextColorSuccess: string
            closeColorSuccess: string
            closeColorHoverSuccess: string
            closeColorPressedSuccess: string
            borderWarning: string
            colorWarning: string
            titleTextColorWarning: string
            iconColorWarning: string
            contentTextColorWarning: string
            closeColorWarning: string
            closeColorHoverWarning: string
            closeColorPressedWarning: string
            borderError: string
            colorError: string
            titleTextColorError: string
            iconColorError: string
            contentTextColorError: string
            closeColorError: string
            closeColorHoverError: string
            closeColorPressedError: string
            iconMargin: string
            iconSize: string
            closeSize: string
            closeMargin: string
            padding: string
          },
          any
        >
      >
    >
    builtinThemeOverrides: PropType<
      import('../../_mixins/use-theme').ExtractThemeOverrides<
        import('../../_mixins').Theme<
          'Alert',
          {
            fontSize: string
            lineHeight: string
            titleFontWeight: string
            borderRadius: string
            border: string
            color: string
            titleTextColor: string
            iconColor: string
            contentTextColor: string
            closeColor: string
            closeColorHover: string
            closeColorPressed: string
            borderInfo: string
            colorInfo: string
            titleTextColorInfo: string
            iconColorInfo: string
            contentTextColorInfo: string
            closeColorInfo: string
            closeColorHoverInfo: string
            closeColorPressedInfo: string
            borderSuccess: string
            colorSuccess: string
            titleTextColorSuccess: string
            iconColorSuccess: string
            contentTextColorSuccess: string
            closeColorSuccess: string
            closeColorHoverSuccess: string
            closeColorPressedSuccess: string
            borderWarning: string
            colorWarning: string
            titleTextColorWarning: string
            iconColorWarning: string
            contentTextColorWarning: string
            closeColorWarning: string
            closeColorHoverWarning: string
            closeColorPressedWarning: string
            borderError: string
            colorError: string
            titleTextColorError: string
            iconColorError: string
            contentTextColorError: string
            closeColorError: string
            closeColorHoverError: string
            closeColorPressedError: string
            iconMargin: string
            iconSize: string
            closeSize: string
            closeMargin: string
            padding: string
          },
          any
        >
      >
    >
  },
  {
    mergedClsPrefix: import('vue').ComputedRef<string>
    visible: import('vue').Ref<boolean>
    handleCloseClick: () => void
    handleAfterLeave: () => void
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
        fontSize: string
        lineHeight: string
        titleFontWeight: string
        borderRadius: string
        border: string
        color: string
        titleTextColor: string
        iconColor: string
        contentTextColor: string
        closeColor: string
        closeColorHover: string
        closeColorPressed: string
        borderInfo: string
        colorInfo: string
        titleTextColorInfo: string
        iconColorInfo: string
        contentTextColorInfo: string
        closeColorInfo: string
        closeColorHoverInfo: string
        closeColorPressedInfo: string
        borderSuccess: string
        colorSuccess: string
        titleTextColorSuccess: string
        iconColorSuccess: string
        contentTextColorSuccess: string
        closeColorSuccess: string
        closeColorHoverSuccess: string
        closeColorPressedSuccess: string
        borderWarning: string
        colorWarning: string
        titleTextColorWarning: string
        iconColorWarning: string
        contentTextColorWarning: string
        closeColorWarning: string
        closeColorHoverWarning: string
        closeColorPressedWarning: string
        borderError: string
        colorError: string
        titleTextColorError: string
        iconColorError: string
        contentTextColorError: string
        closeColorError: string
        closeColorHoverError: string
        closeColorPressedError: string
        iconMargin: string
        iconSize: string
        closeSize: string
        closeMargin: string
        padding: string
      }
      peers: any
      peerOverrides: {
        [x: string]: any
      }
    }>
    cssVars: import('vue').ComputedRef<{
      '--bezier': string
      '--color': string
      '--close-color': string
      '--close-color-hover': string
      '--close-color-pressed': string
      '--icon-color': string
      '--border': string
      '--title-text-color': string
      '--content-text-color': string
      '--line-height': string
      '--border-radius': string
      '--font-size': string
      '--title-font-weight': string
      '--icon-size': string
      '--icon-margin': string
      '--close-size': string
      '--close-margin': string
      '--padding': string
      '--icon-margin-left': string
      '--icon-margin-right': string
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
      title?: unknown
      showIcon?: unknown
      type?: unknown
      closable?: unknown
      onClose?: unknown
      onAfterLeave?: unknown
      onAfterHide?: unknown
      theme?: unknown
      themeOverrides?: unknown
      builtinThemeOverrides?: unknown
    } & {
      type: 'default' | 'error' | 'info' | 'success' | 'warning'
      closable: boolean
      showIcon: boolean
    } & {
      onAfterLeave?: Function | undefined
      title?: string | undefined
      theme?:
        | import('../../_mixins').Theme<
            'Alert',
            {
              fontSize: string
              lineHeight: string
              titleFontWeight: string
              borderRadius: string
              border: string
              color: string
              titleTextColor: string
              iconColor: string
              contentTextColor: string
              closeColor: string
              closeColorHover: string
              closeColorPressed: string
              borderInfo: string
              colorInfo: string
              titleTextColorInfo: string
              iconColorInfo: string
              contentTextColorInfo: string
              closeColorInfo: string
              closeColorHoverInfo: string
              closeColorPressedInfo: string
              borderSuccess: string
              colorSuccess: string
              titleTextColorSuccess: string
              iconColorSuccess: string
              contentTextColorSuccess: string
              closeColorSuccess: string
              closeColorHoverSuccess: string
              closeColorPressedSuccess: string
              borderWarning: string
              colorWarning: string
              titleTextColorWarning: string
              iconColorWarning: string
              contentTextColorWarning: string
              closeColorWarning: string
              closeColorHoverWarning: string
              closeColorPressedWarning: string
              borderError: string
              colorError: string
              titleTextColorError: string
              iconColorError: string
              contentTextColorError: string
              closeColorError: string
              closeColorHoverError: string
              closeColorPressedError: string
              iconMargin: string
              iconSize: string
              closeSize: string
              closeMargin: string
              padding: string
            },
            any
          >
        | undefined
      themeOverrides?:
        | import('../../_mixins/use-theme').ExtractThemeOverrides<
            import('../../_mixins').Theme<
              'Alert',
              {
                fontSize: string
                lineHeight: string
                titleFontWeight: string
                borderRadius: string
                border: string
                color: string
                titleTextColor: string
                iconColor: string
                contentTextColor: string
                closeColor: string
                closeColorHover: string
                closeColorPressed: string
                borderInfo: string
                colorInfo: string
                titleTextColorInfo: string
                iconColorInfo: string
                contentTextColorInfo: string
                closeColorInfo: string
                closeColorHoverInfo: string
                closeColorPressedInfo: string
                borderSuccess: string
                colorSuccess: string
                titleTextColorSuccess: string
                iconColorSuccess: string
                contentTextColorSuccess: string
                closeColorSuccess: string
                closeColorHoverSuccess: string
                closeColorPressedSuccess: string
                borderWarning: string
                colorWarning: string
                titleTextColorWarning: string
                iconColorWarning: string
                contentTextColorWarning: string
                closeColorWarning: string
                closeColorHoverWarning: string
                closeColorPressedWarning: string
                borderError: string
                colorError: string
                titleTextColorError: string
                iconColorError: string
                contentTextColorError: string
                closeColorError: string
                closeColorHoverError: string
                closeColorPressedError: string
                iconMargin: string
                iconSize: string
                closeSize: string
                closeMargin: string
                padding: string
              },
              any
            >
          >
        | undefined
      builtinThemeOverrides?:
        | import('../../_mixins/use-theme').ExtractThemeOverrides<
            import('../../_mixins').Theme<
              'Alert',
              {
                fontSize: string
                lineHeight: string
                titleFontWeight: string
                borderRadius: string
                border: string
                color: string
                titleTextColor: string
                iconColor: string
                contentTextColor: string
                closeColor: string
                closeColorHover: string
                closeColorPressed: string
                borderInfo: string
                colorInfo: string
                titleTextColorInfo: string
                iconColorInfo: string
                contentTextColorInfo: string
                closeColorInfo: string
                closeColorHoverInfo: string
                closeColorPressedInfo: string
                borderSuccess: string
                colorSuccess: string
                titleTextColorSuccess: string
                iconColorSuccess: string
                contentTextColorSuccess: string
                closeColorSuccess: string
                closeColorHoverSuccess: string
                closeColorPressedSuccess: string
                borderWarning: string
                colorWarning: string
                titleTextColorWarning: string
                iconColorWarning: string
                contentTextColorWarning: string
                closeColorWarning: string
                closeColorHoverWarning: string
                closeColorPressedWarning: string
                borderError: string
                colorError: string
                titleTextColorError: string
                iconColorError: string
                contentTextColorError: string
                closeColorError: string
                closeColorHoverError: string
                closeColorPressedError: string
                iconMargin: string
                iconSize: string
                closeSize: string
                closeMargin: string
                padding: string
              },
              any
            >
          >
        | undefined
      onClose?: Function | undefined
      onAfterHide?: Function | undefined
    }
  >,
  {
    type: 'default' | 'error' | 'info' | 'success' | 'warning'
    onAfterLeave: Function
    title: string
    closable: boolean
    showIcon: boolean
    onAfterHide: Function
  }
>
export default _default
