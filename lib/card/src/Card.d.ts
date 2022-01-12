import { PropType, CSSProperties } from 'vue'
import type { ExtractPublicPropTypes, MaybeArray } from '../../_utils'
export interface Segmented {
  content?: boolean | 'soft'
  footer?: boolean | 'soft'
  action?: boolean | 'soft'
}
export declare const cardBaseProps: {
  readonly title: StringConstructor
  readonly contentStyle: PropType<string | CSSProperties>
  readonly headerStyle: PropType<string | CSSProperties>
  readonly footerStyle: PropType<string | CSSProperties>
  readonly embedded: BooleanConstructor
  readonly segmented: {
    readonly type: PropType<boolean | Segmented>
    readonly default: false
  }
  readonly size: {
    readonly type: PropType<'small' | 'medium' | 'large' | 'huge'>
    readonly default: 'medium'
  }
  readonly bordered: {
    readonly type: BooleanConstructor
    readonly default: boolean
  }
  readonly closable: {
    readonly type: BooleanConstructor
    readonly default: boolean
  }
  readonly hoverable: BooleanConstructor
  readonly onClose: PropType<MaybeArray<() => void>>
}
export declare const cardBasePropKeys: (
  | 'size'
  | 'title'
  | 'bordered'
  | 'contentStyle'
  | 'onClose'
  | 'closable'
  | 'hoverable'
  | 'headerStyle'
  | 'footerStyle'
  | 'embedded'
  | 'segmented'
)[]
declare const cardProps: {
  title: StringConstructor
  contentStyle: PropType<string | CSSProperties>
  headerStyle: PropType<string | CSSProperties>
  footerStyle: PropType<string | CSSProperties>
  embedded: BooleanConstructor
  segmented: {
    readonly type: PropType<boolean | Segmented>
    readonly default: false
  }
  size: {
    readonly type: PropType<'small' | 'medium' | 'large' | 'huge'>
    readonly default: 'medium'
  }
  bordered: {
    readonly type: BooleanConstructor
    readonly default: boolean
  }
  closable: {
    readonly type: BooleanConstructor
    readonly default: boolean
  }
  hoverable: BooleanConstructor
  onClose: PropType<MaybeArray<() => void>>
  theme: PropType<
    import('../../_mixins').Theme<
      'Card',
      {
        lineHeight: string
        color: string
        colorModal: string
        colorPopover: string
        colorTarget: string
        colorEmbedded: string
        textColor: string
        titleTextColor: string
        borderColor: string
        actionColor: string
        titleFontWeight: string
        closeColor: string
        closeColorHover: string
        closeColorPressed: string
        fontSizeSmall: string
        fontSizeMedium: string
        fontSizeLarge: string
        fontSizeHuge: string
        boxShadow: string
        borderRadius: string
        paddingSmall: string
        paddingMedium: string
        paddingLarge: string
        paddingHuge: string
        titleFontSizeSmall: string
        titleFontSizeMedium: string
        titleFontSizeLarge: string
        titleFontSizeHuge: string
        closeSize: string
      },
      any
    >
  >
  themeOverrides: PropType<
    import('../../_mixins/use-theme').ExtractThemeOverrides<
      import('../../_mixins').Theme<
        'Card',
        {
          lineHeight: string
          color: string
          colorModal: string
          colorPopover: string
          colorTarget: string
          colorEmbedded: string
          textColor: string
          titleTextColor: string
          borderColor: string
          actionColor: string
          titleFontWeight: string
          closeColor: string
          closeColorHover: string
          closeColorPressed: string
          fontSizeSmall: string
          fontSizeMedium: string
          fontSizeLarge: string
          fontSizeHuge: string
          boxShadow: string
          borderRadius: string
          paddingSmall: string
          paddingMedium: string
          paddingLarge: string
          paddingHuge: string
          titleFontSizeSmall: string
          titleFontSizeMedium: string
          titleFontSizeLarge: string
          titleFontSizeHuge: string
          closeSize: string
        },
        any
      >
    >
  >
  builtinThemeOverrides: PropType<
    import('../../_mixins/use-theme').ExtractThemeOverrides<
      import('../../_mixins').Theme<
        'Card',
        {
          lineHeight: string
          color: string
          colorModal: string
          colorPopover: string
          colorTarget: string
          colorEmbedded: string
          textColor: string
          titleTextColor: string
          borderColor: string
          actionColor: string
          titleFontWeight: string
          closeColor: string
          closeColorHover: string
          closeColorPressed: string
          fontSizeSmall: string
          fontSizeMedium: string
          fontSizeLarge: string
          fontSizeHuge: string
          boxShadow: string
          borderRadius: string
          paddingSmall: string
          paddingMedium: string
          paddingLarge: string
          paddingHuge: string
          titleFontSizeSmall: string
          titleFontSizeMedium: string
          titleFontSizeLarge: string
          titleFontSizeHuge: string
          closeSize: string
        },
        any
      >
    >
  >
}
export declare type CardProps = ExtractPublicPropTypes<typeof cardProps>
declare const _default: import('vue').DefineComponent<
  {
    title: StringConstructor
    contentStyle: PropType<string | CSSProperties>
    headerStyle: PropType<string | CSSProperties>
    footerStyle: PropType<string | CSSProperties>
    embedded: BooleanConstructor
    segmented: {
      readonly type: PropType<boolean | Segmented>
      readonly default: false
    }
    size: {
      readonly type: PropType<'small' | 'medium' | 'large' | 'huge'>
      readonly default: 'medium'
    }
    bordered: {
      readonly type: BooleanConstructor
      readonly default: boolean
    }
    closable: {
      readonly type: BooleanConstructor
      readonly default: boolean
    }
    hoverable: BooleanConstructor
    onClose: PropType<MaybeArray<() => void>>
    theme: PropType<
      import('../../_mixins').Theme<
        'Card',
        {
          lineHeight: string
          color: string
          colorModal: string
          colorPopover: string
          colorTarget: string
          colorEmbedded: string
          textColor: string
          titleTextColor: string
          borderColor: string
          actionColor: string
          titleFontWeight: string
          closeColor: string
          closeColorHover: string
          closeColorPressed: string
          fontSizeSmall: string
          fontSizeMedium: string
          fontSizeLarge: string
          fontSizeHuge: string
          boxShadow: string
          borderRadius: string
          paddingSmall: string
          paddingMedium: string
          paddingLarge: string
          paddingHuge: string
          titleFontSizeSmall: string
          titleFontSizeMedium: string
          titleFontSizeLarge: string
          titleFontSizeHuge: string
          closeSize: string
        },
        any
      >
    >
    themeOverrides: PropType<
      import('../../_mixins/use-theme').ExtractThemeOverrides<
        import('../../_mixins').Theme<
          'Card',
          {
            lineHeight: string
            color: string
            colorModal: string
            colorPopover: string
            colorTarget: string
            colorEmbedded: string
            textColor: string
            titleTextColor: string
            borderColor: string
            actionColor: string
            titleFontWeight: string
            closeColor: string
            closeColorHover: string
            closeColorPressed: string
            fontSizeSmall: string
            fontSizeMedium: string
            fontSizeLarge: string
            fontSizeHuge: string
            boxShadow: string
            borderRadius: string
            paddingSmall: string
            paddingMedium: string
            paddingLarge: string
            paddingHuge: string
            titleFontSizeSmall: string
            titleFontSizeMedium: string
            titleFontSizeLarge: string
            titleFontSizeHuge: string
            closeSize: string
          },
          any
        >
      >
    >
    builtinThemeOverrides: PropType<
      import('../../_mixins/use-theme').ExtractThemeOverrides<
        import('../../_mixins').Theme<
          'Card',
          {
            lineHeight: string
            color: string
            colorModal: string
            colorPopover: string
            colorTarget: string
            colorEmbedded: string
            textColor: string
            titleTextColor: string
            borderColor: string
            actionColor: string
            titleFontWeight: string
            closeColor: string
            closeColorHover: string
            closeColorPressed: string
            fontSizeSmall: string
            fontSizeMedium: string
            fontSizeLarge: string
            fontSizeHuge: string
            boxShadow: string
            borderRadius: string
            paddingSmall: string
            paddingMedium: string
            paddingLarge: string
            paddingHuge: string
            titleFontSizeSmall: string
            titleFontSizeMedium: string
            titleFontSizeLarge: string
            titleFontSizeHuge: string
            closeSize: string
          },
          any
        >
      >
    >
  },
  {
    rtlEnabled:
      | import('vue').Ref<
          | import('../../config-provider/src/internal-interface').RtlItem
          | undefined
        >
      | undefined
    mergedClsPrefix: import('vue').ComputedRef<string>
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
        lineHeight: string
        color: string
        colorModal: string
        colorPopover: string
        colorTarget: string
        colorEmbedded: string
        textColor: string
        titleTextColor: string
        borderColor: string
        actionColor: string
        titleFontWeight: string
        closeColor: string
        closeColorHover: string
        closeColorPressed: string
        fontSizeSmall: string
        fontSizeMedium: string
        fontSizeLarge: string
        fontSizeHuge: string
        boxShadow: string
        borderRadius: string
        paddingSmall: string
        paddingMedium: string
        paddingLarge: string
        paddingHuge: string
        titleFontSizeSmall: string
        titleFontSizeMedium: string
        titleFontSizeLarge: string
        titleFontSizeHuge: string
        closeSize: string
      }
      peers: any
      peerOverrides: {
        [x: string]: any
      }
    }>
    handleCloseClick: () => void
    cssVars: import('vue').ComputedRef<{
      '--bezier': string
      '--border-radius': string
      '--color': string
      '--color-modal': string
      '--color-popover': string
      '--color-target': string
      '--text-color': string
      '--line-height': string
      '--action-color': string
      '--title-text-color': string
      '--title-font-weight': string
      '--close-color': string
      '--close-color-hover': string
      '--close-color-pressed': string
      '--border-color': string
      '--box-shadow': string
      '--padding-top': string
      '--padding-bottom': string
      '--padding-left': string
      '--font-size': string
      '--title-font-size': string
      '--close-size': string
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
      contentStyle?: unknown
      headerStyle?: unknown
      footerStyle?: unknown
      embedded?: unknown
      segmented?: unknown
      size?: unknown
      bordered?: unknown
      closable?: unknown
      hoverable?: unknown
      onClose?: unknown
      theme?: unknown
      themeOverrides?: unknown
      builtinThemeOverrides?: unknown
    } & {
      size: 'small' | 'medium' | 'large' | 'huge'
      bordered: boolean
      closable: boolean
      hoverable: boolean
      embedded: boolean
      segmented: boolean | Segmented
    } & {
      title?: string | undefined
      theme?:
        | import('../../_mixins').Theme<
            'Card',
            {
              lineHeight: string
              color: string
              colorModal: string
              colorPopover: string
              colorTarget: string
              colorEmbedded: string
              textColor: string
              titleTextColor: string
              borderColor: string
              actionColor: string
              titleFontWeight: string
              closeColor: string
              closeColorHover: string
              closeColorPressed: string
              fontSizeSmall: string
              fontSizeMedium: string
              fontSizeLarge: string
              fontSizeHuge: string
              boxShadow: string
              borderRadius: string
              paddingSmall: string
              paddingMedium: string
              paddingLarge: string
              paddingHuge: string
              titleFontSizeSmall: string
              titleFontSizeMedium: string
              titleFontSizeLarge: string
              titleFontSizeHuge: string
              closeSize: string
            },
            any
          >
        | undefined
      themeOverrides?:
        | import('../../_mixins/use-theme').ExtractThemeOverrides<
            import('../../_mixins').Theme<
              'Card',
              {
                lineHeight: string
                color: string
                colorModal: string
                colorPopover: string
                colorTarget: string
                colorEmbedded: string
                textColor: string
                titleTextColor: string
                borderColor: string
                actionColor: string
                titleFontWeight: string
                closeColor: string
                closeColorHover: string
                closeColorPressed: string
                fontSizeSmall: string
                fontSizeMedium: string
                fontSizeLarge: string
                fontSizeHuge: string
                boxShadow: string
                borderRadius: string
                paddingSmall: string
                paddingMedium: string
                paddingLarge: string
                paddingHuge: string
                titleFontSizeSmall: string
                titleFontSizeMedium: string
                titleFontSizeLarge: string
                titleFontSizeHuge: string
                closeSize: string
              },
              any
            >
          >
        | undefined
      builtinThemeOverrides?:
        | import('../../_mixins/use-theme').ExtractThemeOverrides<
            import('../../_mixins').Theme<
              'Card',
              {
                lineHeight: string
                color: string
                colorModal: string
                colorPopover: string
                colorTarget: string
                colorEmbedded: string
                textColor: string
                titleTextColor: string
                borderColor: string
                actionColor: string
                titleFontWeight: string
                closeColor: string
                closeColorHover: string
                closeColorPressed: string
                fontSizeSmall: string
                fontSizeMedium: string
                fontSizeLarge: string
                fontSizeHuge: string
                boxShadow: string
                borderRadius: string
                paddingSmall: string
                paddingMedium: string
                paddingLarge: string
                paddingHuge: string
                titleFontSizeSmall: string
                titleFontSizeMedium: string
                titleFontSizeLarge: string
                titleFontSizeHuge: string
                closeSize: string
              },
              any
            >
          >
        | undefined
      contentStyle?: string | CSSProperties | undefined
      onClose?: MaybeArray<() => void> | undefined
      headerStyle?: string | CSSProperties | undefined
      footerStyle?: string | CSSProperties | undefined
    }
  >,
  {
    size: 'small' | 'medium' | 'large' | 'huge'
    bordered: boolean
    closable: boolean
    hoverable: boolean
    embedded: boolean
    segmented: boolean | Segmented
  }
>
export default _default
