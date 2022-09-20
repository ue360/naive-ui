import { CSSProperties, PropType } from 'vue'
import type { ScrollbarProps } from '../../_internal'
import type { ExtractPublicPropTypes } from '../../_utils'
declare const drawerContentProps: {
  title: {
    type: StringConstructor
  }
  headerStyle: PropType<string | CSSProperties>
  footerStyle: PropType<string | CSSProperties>
  bodyStyle: PropType<string | CSSProperties>
  bodyContentStyle: PropType<string | CSSProperties>
  nativeScrollbar: {
    type: BooleanConstructor
    default: boolean
  }
  scrollbarProps: PropType<ScrollbarProps>
  closable: BooleanConstructor
}
export declare type DrawerContentProps = ExtractPublicPropTypes<
  typeof drawerContentProps
>
declare const _default: import('vue').DefineComponent<
  {
    title: {
      type: StringConstructor
    }
    headerStyle: PropType<string | CSSProperties>
    footerStyle: PropType<string | CSSProperties>
    bodyStyle: PropType<string | CSSProperties>
    bodyContentStyle: PropType<string | CSSProperties>
    nativeScrollbar: {
      type: BooleanConstructor
      default: boolean
    }
    scrollbarProps: PropType<ScrollbarProps>
    closable: BooleanConstructor
  },
  {
    handleCloseClick: () => void
    mergedTheme: import('vue').Ref<{
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
        bodyPadding: string
        headerPadding: string
        footerPadding: string
        color: string
        textColor: string
        titleTextColor: string
        titleFontSize: string
        titleFontWeight: string
        boxShadow: string
        lineHeight: string
        headerBorderBottom: string
        footerBorderTop: string
        closeColor: string
        closeColorHover: string
        closeColorPressed: string
        closeSize: string
      }
      peers: {
        Scrollbar: import('../../_mixins').Theme<
          'Scrollbar',
          {
            color: string
            colorHover: string
          },
          any
        >
      }
      peerOverrides: {
        Scrollbar?:
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
    mergedClsPrefix: import('vue').Ref<string>
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
      headerStyle?: unknown
      footerStyle?: unknown
      bodyStyle?: unknown
      bodyContentStyle?: unknown
      nativeScrollbar?: unknown
      scrollbarProps?: unknown
      closable?: unknown
    } & {
      closable: boolean
      nativeScrollbar: boolean
    } & {
      title?: string | undefined
      bodyStyle?: string | CSSProperties | undefined
      headerStyle?: string | CSSProperties | undefined
      footerStyle?: string | CSSProperties | undefined
      scrollbarProps?: ScrollbarProps | undefined
      bodyContentStyle?: string | CSSProperties | undefined
    }
  >,
  {
    closable: boolean
    nativeScrollbar: boolean
  }
>
export default _default