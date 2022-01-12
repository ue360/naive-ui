import { PropType, InjectionKey, Ref, ExtractPropTypes, Slots } from 'vue'
import { ExtractPublicPropTypes } from '../../_utils'
import type { MaybeArray } from '../../_utils'
import { OnItemHeaderClick, OnUpdateExpandedNames } from './interface'
declare const collapseProps: {
  readonly defaultExpandedNames: {
    readonly type: PropType<string | number | (string | number)[] | null>
    readonly default: null
  }
  readonly expandedNames: PropType<string | number | (string | number)[] | null>
  readonly arrowPlacement: {
    readonly type: PropType<'left' | 'right'>
    readonly default: 'left'
  }
  readonly accordion: {
    readonly type: BooleanConstructor
    readonly default: false
  }
  readonly displayDirective: {
    readonly type: PropType<'show' | 'if'>
    readonly default: 'if'
  }
  readonly onItemHeaderClick: PropType<MaybeArray<OnItemHeaderClick>>
  readonly 'onUpdate:expandedNames': PropType<MaybeArray<OnUpdateExpandedNames>>
  readonly onUpdateExpandedNames: PropType<MaybeArray<OnUpdateExpandedNames>>
  readonly onExpandedNamesChange: {
    readonly type: PropType<MaybeArray<OnUpdateExpandedNames> | undefined>
    readonly validator: () => boolean
    readonly default: undefined
  }
  readonly theme: PropType<
    import('../../_mixins').Theme<
      'Collapse',
      {
        titleFontSize: string
        titleFontWeight: string
        dividerColor: string
        titleTextColor: string
        fontSize: string
        textColor: string
        arrowColor: string
      },
      any
    >
  >
  readonly themeOverrides: PropType<
    import('../../_mixins/use-theme').ExtractThemeOverrides<
      import('../../_mixins').Theme<
        'Collapse',
        {
          titleFontSize: string
          titleFontWeight: string
          dividerColor: string
          titleTextColor: string
          fontSize: string
          textColor: string
          arrowColor: string
        },
        any
      >
    >
  >
  readonly builtinThemeOverrides: PropType<
    import('../../_mixins/use-theme').ExtractThemeOverrides<
      import('../../_mixins').Theme<
        'Collapse',
        {
          titleFontSize: string
          titleFontWeight: string
          dividerColor: string
          titleTextColor: string
          fontSize: string
          textColor: string
          arrowColor: string
        },
        any
      >
    >
  >
}
export declare type CollapseProps = ExtractPublicPropTypes<typeof collapseProps>
export interface NCollapseInjection {
  props: ExtractPropTypes<typeof collapseProps>
  expandedNamesRef: Ref<string | number | Array<string | number> | null>
  mergedClsPrefixRef: Ref<string>
  slots: Slots
  toggleItem: (
    collapse: boolean,
    name: string | number,
    event: MouseEvent
  ) => void
}
export declare const collapseInjectionKey: InjectionKey<NCollapseInjection>
declare const _default: import('vue').DefineComponent<
  {
    readonly defaultExpandedNames: {
      readonly type: PropType<string | number | (string | number)[] | null>
      readonly default: null
    }
    readonly expandedNames: PropType<
      string | number | (string | number)[] | null
    >
    readonly arrowPlacement: {
      readonly type: PropType<'left' | 'right'>
      readonly default: 'left'
    }
    readonly accordion: {
      readonly type: BooleanConstructor
      readonly default: false
    }
    readonly displayDirective: {
      readonly type: PropType<'show' | 'if'>
      readonly default: 'if'
    }
    readonly onItemHeaderClick: PropType<MaybeArray<OnItemHeaderClick>>
    readonly 'onUpdate:expandedNames': PropType<
      MaybeArray<OnUpdateExpandedNames>
    >
    readonly onUpdateExpandedNames: PropType<MaybeArray<OnUpdateExpandedNames>>
    readonly onExpandedNamesChange: {
      readonly type: PropType<MaybeArray<OnUpdateExpandedNames> | undefined>
      readonly validator: () => boolean
      readonly default: undefined
    }
    readonly theme: PropType<
      import('../../_mixins').Theme<
        'Collapse',
        {
          titleFontSize: string
          titleFontWeight: string
          dividerColor: string
          titleTextColor: string
          fontSize: string
          textColor: string
          arrowColor: string
        },
        any
      >
    >
    readonly themeOverrides: PropType<
      import('../../_mixins/use-theme').ExtractThemeOverrides<
        import('../../_mixins').Theme<
          'Collapse',
          {
            titleFontSize: string
            titleFontWeight: string
            dividerColor: string
            titleTextColor: string
            fontSize: string
            textColor: string
            arrowColor: string
          },
          any
        >
      >
    >
    readonly builtinThemeOverrides: PropType<
      import('../../_mixins/use-theme').ExtractThemeOverrides<
        import('../../_mixins').Theme<
          'Collapse',
          {
            titleFontSize: string
            titleFontWeight: string
            dividerColor: string
            titleTextColor: string
            fontSize: string
            textColor: string
            arrowColor: string
          },
          any
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
        titleFontSize: string
        titleFontWeight: string
        dividerColor: string
        titleTextColor: string
        fontSize: string
        textColor: string
        arrowColor: string
      }
      peers: any
      peerOverrides: {
        [x: string]: any
      }
    }>
    mergedClsPrefix: import('vue').ComputedRef<string>
    cssVars: import('vue').ComputedRef<{
      '--font-size': string
      '--bezier': string
      '--text-color': string
      '--divider-color': string
      '--title-font-size': string
      '--title-text-color': string
      '--title-font-weight': string
      '--arrow-color': string
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
      readonly defaultExpandedNames?: unknown
      readonly expandedNames?: unknown
      readonly arrowPlacement?: unknown
      readonly accordion?: unknown
      readonly displayDirective?: unknown
      readonly onItemHeaderClick?: unknown
      readonly 'onUpdate:expandedNames'?: unknown
      readonly onUpdateExpandedNames?: unknown
      readonly onExpandedNamesChange?: unknown
      readonly theme?: unknown
      readonly themeOverrides?: unknown
      readonly builtinThemeOverrides?: unknown
    } & {
      displayDirective: 'show' | 'if'
      defaultExpandedNames: string | number | (string | number)[] | null
      arrowPlacement: 'left' | 'right'
      accordion: boolean
    } & {
      theme?:
        | import('../../_mixins').Theme<
            'Collapse',
            {
              titleFontSize: string
              titleFontWeight: string
              dividerColor: string
              titleTextColor: string
              fontSize: string
              textColor: string
              arrowColor: string
            },
            any
          >
        | undefined
      themeOverrides?:
        | import('../../_mixins/use-theme').ExtractThemeOverrides<
            import('../../_mixins').Theme<
              'Collapse',
              {
                titleFontSize: string
                titleFontWeight: string
                dividerColor: string
                titleTextColor: string
                fontSize: string
                textColor: string
                arrowColor: string
              },
              any
            >
          >
        | undefined
      builtinThemeOverrides?:
        | import('../../_mixins/use-theme').ExtractThemeOverrides<
            import('../../_mixins').Theme<
              'Collapse',
              {
                titleFontSize: string
                titleFontWeight: string
                dividerColor: string
                titleTextColor: string
                fontSize: string
                textColor: string
                arrowColor: string
              },
              any
            >
          >
        | undefined
      expandedNames?: string | number | (string | number)[] | null | undefined
      onItemHeaderClick?: MaybeArray<OnItemHeaderClick> | undefined
      'onUpdate:expandedNames'?: MaybeArray<OnUpdateExpandedNames> | undefined
      onUpdateExpandedNames?: MaybeArray<OnUpdateExpandedNames> | undefined
      onExpandedNamesChange?: MaybeArray<OnUpdateExpandedNames> | undefined
    }
  >,
  {
    displayDirective: 'show' | 'if'
    defaultExpandedNames: string | number | (string | number)[] | null
    arrowPlacement: 'left' | 'right'
    accordion: boolean
    onExpandedNamesChange: MaybeArray<OnUpdateExpandedNames> | undefined
  }
>
export default _default
