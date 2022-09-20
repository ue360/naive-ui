import { PropType } from 'vue'
import type { ExtractPublicPropTypes } from '../../_utils'
declare const textProps: {
  readonly code: BooleanConstructor
  readonly type: {
    readonly type: StringConstructor
    readonly default: 'default'
  }
  readonly delete: BooleanConstructor
  readonly strong: BooleanConstructor
  readonly italic: BooleanConstructor
  readonly underline: BooleanConstructor
  readonly depth: PropType<2 | 1 | 3 | '1' | '2' | '3'>
  readonly tag: StringConstructor
  readonly as: {
    readonly type: StringConstructor
    readonly validator: () => boolean
    readonly default: undefined
  }
  readonly theme: PropType<
    import('../../_mixins').Theme<
      'Typography',
      {
        aTextColor: string
        blockquoteTextColor: string
        blockquotePrefixColor: string
        blockquoteLineHeight: string
        blockquoteFontSize: string
        codeBorderRadius: string
        liTextColor: string
        liLineHeight: string
        liFontSize: string
        hrColor: string
        headerFontWeight: string
        headerTextColor: string
        pTextColor: string
        pTextColor1Depth: string
        pTextColor2Depth: string
        pTextColor3Depth: string
        pLineHeight: string
        pFontSize: string
        headerBarColor: string
        headerBarColorPrimary: string
        headerBarColorInfo: string
        headerBarColorError: string
        headerBarColorWarning: string
        headerBarColorSuccess: string
        textColor: string
        textColor1Depth: string
        textColor2Depth: string
        textColor3Depth: string
        textColorPrimary: string
        textColorInfo: string
        textColorSuccess: string
        textColorWarning: string
        textColorError: string
        codeTextColor: string
        codeColor: string
        codeBorder: string
        headerFontSize1: string
        headerFontSize2: string
        headerFontSize3: string
        headerFontSize4: string
        headerFontSize5: string
        headerFontSize6: string
        headerMargin1: string
        headerMargin2: string
        headerMargin3: string
        headerMargin4: string
        headerMargin5: string
        headerMargin6: string
        headerPrefixWidth1: string
        headerPrefixWidth2: string
        headerPrefixWidth3: string
        headerPrefixWidth4: string
        headerPrefixWidth5: string
        headerPrefixWidth6: string
        headerBarWidth1: string
        headerBarWidth2: string
        headerBarWidth3: string
        headerBarWidth4: string
        headerBarWidth5: string
        headerBarWidth6: string
        pMargin: string
        liMargin: string
        olPadding: string
        ulPadding: string
      },
      any
    >
  >
  readonly themeOverrides: PropType<
    import('../../_mixins/use-theme').ExtractThemeOverrides<
      import('../../_mixins').Theme<
        'Typography',
        {
          aTextColor: string
          blockquoteTextColor: string
          blockquotePrefixColor: string
          blockquoteLineHeight: string
          blockquoteFontSize: string
          codeBorderRadius: string
          liTextColor: string
          liLineHeight: string
          liFontSize: string
          hrColor: string
          headerFontWeight: string
          headerTextColor: string
          pTextColor: string
          pTextColor1Depth: string
          pTextColor2Depth: string
          pTextColor3Depth: string
          pLineHeight: string
          pFontSize: string
          headerBarColor: string
          headerBarColorPrimary: string
          headerBarColorInfo: string
          headerBarColorError: string
          headerBarColorWarning: string
          headerBarColorSuccess: string
          textColor: string
          textColor1Depth: string
          textColor2Depth: string
          textColor3Depth: string
          textColorPrimary: string
          textColorInfo: string
          textColorSuccess: string
          textColorWarning: string
          textColorError: string
          codeTextColor: string
          codeColor: string
          codeBorder: string
          headerFontSize1: string
          headerFontSize2: string
          headerFontSize3: string
          headerFontSize4: string
          headerFontSize5: string
          headerFontSize6: string
          headerMargin1: string
          headerMargin2: string
          headerMargin3: string
          headerMargin4: string
          headerMargin5: string
          headerMargin6: string
          headerPrefixWidth1: string
          headerPrefixWidth2: string
          headerPrefixWidth3: string
          headerPrefixWidth4: string
          headerPrefixWidth5: string
          headerPrefixWidth6: string
          headerBarWidth1: string
          headerBarWidth2: string
          headerBarWidth3: string
          headerBarWidth4: string
          headerBarWidth5: string
          headerBarWidth6: string
          pMargin: string
          liMargin: string
          olPadding: string
          ulPadding: string
        },
        any
      >
    >
  >
  readonly builtinThemeOverrides: PropType<
    import('../../_mixins/use-theme').ExtractThemeOverrides<
      import('../../_mixins').Theme<
        'Typography',
        {
          aTextColor: string
          blockquoteTextColor: string
          blockquotePrefixColor: string
          blockquoteLineHeight: string
          blockquoteFontSize: string
          codeBorderRadius: string
          liTextColor: string
          liLineHeight: string
          liFontSize: string
          hrColor: string
          headerFontWeight: string
          headerTextColor: string
          pTextColor: string
          pTextColor1Depth: string
          pTextColor2Depth: string
          pTextColor3Depth: string
          pLineHeight: string
          pFontSize: string
          headerBarColor: string
          headerBarColorPrimary: string
          headerBarColorInfo: string
          headerBarColorError: string
          headerBarColorWarning: string
          headerBarColorSuccess: string
          textColor: string
          textColor1Depth: string
          textColor2Depth: string
          textColor3Depth: string
          textColorPrimary: string
          textColorInfo: string
          textColorSuccess: string
          textColorWarning: string
          textColorError: string
          codeTextColor: string
          codeColor: string
          codeBorder: string
          headerFontSize1: string
          headerFontSize2: string
          headerFontSize3: string
          headerFontSize4: string
          headerFontSize5: string
          headerFontSize6: string
          headerMargin1: string
          headerMargin2: string
          headerMargin3: string
          headerMargin4: string
          headerMargin5: string
          headerMargin6: string
          headerPrefixWidth1: string
          headerPrefixWidth2: string
          headerPrefixWidth3: string
          headerPrefixWidth4: string
          headerPrefixWidth5: string
          headerPrefixWidth6: string
          headerBarWidth1: string
          headerBarWidth2: string
          headerBarWidth3: string
          headerBarWidth4: string
          headerBarWidth5: string
          headerBarWidth6: string
          pMargin: string
          liMargin: string
          olPadding: string
          ulPadding: string
        },
        any
      >
    >
  >
}
export declare type TextProps = ExtractPublicPropTypes<typeof textProps>
declare const _default: import('vue').DefineComponent<
  {
    readonly code: BooleanConstructor
    readonly type: {
      readonly type: StringConstructor
      readonly default: 'default'
    }
    readonly delete: BooleanConstructor
    readonly strong: BooleanConstructor
    readonly italic: BooleanConstructor
    readonly underline: BooleanConstructor
    readonly depth: PropType<2 | 1 | 3 | '1' | '2' | '3'>
    readonly tag: StringConstructor
    readonly as: {
      readonly type: StringConstructor
      readonly validator: () => boolean
      readonly default: undefined
    }
    readonly theme: PropType<
      import('../../_mixins').Theme<
        'Typography',
        {
          aTextColor: string
          blockquoteTextColor: string
          blockquotePrefixColor: string
          blockquoteLineHeight: string
          blockquoteFontSize: string
          codeBorderRadius: string
          liTextColor: string
          liLineHeight: string
          liFontSize: string
          hrColor: string
          headerFontWeight: string
          headerTextColor: string
          pTextColor: string
          pTextColor1Depth: string
          pTextColor2Depth: string
          pTextColor3Depth: string
          pLineHeight: string
          pFontSize: string
          headerBarColor: string
          headerBarColorPrimary: string
          headerBarColorInfo: string
          headerBarColorError: string
          headerBarColorWarning: string
          headerBarColorSuccess: string
          textColor: string
          textColor1Depth: string
          textColor2Depth: string
          textColor3Depth: string
          textColorPrimary: string
          textColorInfo: string
          textColorSuccess: string
          textColorWarning: string
          textColorError: string
          codeTextColor: string
          codeColor: string
          codeBorder: string
          headerFontSize1: string
          headerFontSize2: string
          headerFontSize3: string
          headerFontSize4: string
          headerFontSize5: string
          headerFontSize6: string
          headerMargin1: string
          headerMargin2: string
          headerMargin3: string
          headerMargin4: string
          headerMargin5: string
          headerMargin6: string
          headerPrefixWidth1: string
          headerPrefixWidth2: string
          headerPrefixWidth3: string
          headerPrefixWidth4: string
          headerPrefixWidth5: string
          headerPrefixWidth6: string
          headerBarWidth1: string
          headerBarWidth2: string
          headerBarWidth3: string
          headerBarWidth4: string
          headerBarWidth5: string
          headerBarWidth6: string
          pMargin: string
          liMargin: string
          olPadding: string
          ulPadding: string
        },
        any
      >
    >
    readonly themeOverrides: PropType<
      import('../../_mixins/use-theme').ExtractThemeOverrides<
        import('../../_mixins').Theme<
          'Typography',
          {
            aTextColor: string
            blockquoteTextColor: string
            blockquotePrefixColor: string
            blockquoteLineHeight: string
            blockquoteFontSize: string
            codeBorderRadius: string
            liTextColor: string
            liLineHeight: string
            liFontSize: string
            hrColor: string
            headerFontWeight: string
            headerTextColor: string
            pTextColor: string
            pTextColor1Depth: string
            pTextColor2Depth: string
            pTextColor3Depth: string
            pLineHeight: string
            pFontSize: string
            headerBarColor: string
            headerBarColorPrimary: string
            headerBarColorInfo: string
            headerBarColorError: string
            headerBarColorWarning: string
            headerBarColorSuccess: string
            textColor: string
            textColor1Depth: string
            textColor2Depth: string
            textColor3Depth: string
            textColorPrimary: string
            textColorInfo: string
            textColorSuccess: string
            textColorWarning: string
            textColorError: string
            codeTextColor: string
            codeColor: string
            codeBorder: string
            headerFontSize1: string
            headerFontSize2: string
            headerFontSize3: string
            headerFontSize4: string
            headerFontSize5: string
            headerFontSize6: string
            headerMargin1: string
            headerMargin2: string
            headerMargin3: string
            headerMargin4: string
            headerMargin5: string
            headerMargin6: string
            headerPrefixWidth1: string
            headerPrefixWidth2: string
            headerPrefixWidth3: string
            headerPrefixWidth4: string
            headerPrefixWidth5: string
            headerPrefixWidth6: string
            headerBarWidth1: string
            headerBarWidth2: string
            headerBarWidth3: string
            headerBarWidth4: string
            headerBarWidth5: string
            headerBarWidth6: string
            pMargin: string
            liMargin: string
            olPadding: string
            ulPadding: string
          },
          any
        >
      >
    >
    readonly builtinThemeOverrides: PropType<
      import('../../_mixins/use-theme').ExtractThemeOverrides<
        import('../../_mixins').Theme<
          'Typography',
          {
            aTextColor: string
            blockquoteTextColor: string
            blockquotePrefixColor: string
            blockquoteLineHeight: string
            blockquoteFontSize: string
            codeBorderRadius: string
            liTextColor: string
            liLineHeight: string
            liFontSize: string
            hrColor: string
            headerFontWeight: string
            headerTextColor: string
            pTextColor: string
            pTextColor1Depth: string
            pTextColor2Depth: string
            pTextColor3Depth: string
            pLineHeight: string
            pFontSize: string
            headerBarColor: string
            headerBarColorPrimary: string
            headerBarColorInfo: string
            headerBarColorError: string
            headerBarColorWarning: string
            headerBarColorSuccess: string
            textColor: string
            textColor1Depth: string
            textColor2Depth: string
            textColor3Depth: string
            textColorPrimary: string
            textColorInfo: string
            textColorSuccess: string
            textColorWarning: string
            textColorError: string
            codeTextColor: string
            codeColor: string
            codeBorder: string
            headerFontSize1: string
            headerFontSize2: string
            headerFontSize3: string
            headerFontSize4: string
            headerFontSize5: string
            headerFontSize6: string
            headerMargin1: string
            headerMargin2: string
            headerMargin3: string
            headerMargin4: string
            headerMargin5: string
            headerMargin6: string
            headerPrefixWidth1: string
            headerPrefixWidth2: string
            headerPrefixWidth3: string
            headerPrefixWidth4: string
            headerPrefixWidth5: string
            headerPrefixWidth6: string
            headerBarWidth1: string
            headerBarWidth2: string
            headerBarWidth3: string
            headerBarWidth4: string
            headerBarWidth5: string
            headerBarWidth6: string
            pMargin: string
            liMargin: string
            olPadding: string
            ulPadding: string
          },
          any
        >
      >
    >
  },
  {
    mergedClsPrefix: import('vue').ComputedRef<string>
    compitableTag: import('vue').ComputedRef<string | undefined>
    cssVars: import('vue').ComputedRef<{
      '--text-color': string
      '--font-weight-strong': string
      '--font-famliy-mono': string
      '--code-border-radius': string
      '--code-text-color': string
      '--code-color': string
      '--code-border': string
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
      readonly code?: unknown
      readonly type?: unknown
      readonly delete?: unknown
      readonly strong?: unknown
      readonly italic?: unknown
      readonly underline?: unknown
      readonly depth?: unknown
      readonly tag?: unknown
      readonly as?: unknown
      readonly theme?: unknown
      readonly themeOverrides?: unknown
      readonly builtinThemeOverrides?: unknown
    } & {
      type: string
      delete: boolean
      italic: boolean
      underline: boolean
      code: boolean
      strong: boolean
    } & {
      tag?: string | undefined
      as?: string | undefined
      theme?:
        | import('../../_mixins').Theme<
            'Typography',
            {
              aTextColor: string
              blockquoteTextColor: string
              blockquotePrefixColor: string
              blockquoteLineHeight: string
              blockquoteFontSize: string
              codeBorderRadius: string
              liTextColor: string
              liLineHeight: string
              liFontSize: string
              hrColor: string
              headerFontWeight: string
              headerTextColor: string
              pTextColor: string
              pTextColor1Depth: string
              pTextColor2Depth: string
              pTextColor3Depth: string
              pLineHeight: string
              pFontSize: string
              headerBarColor: string
              headerBarColorPrimary: string
              headerBarColorInfo: string
              headerBarColorError: string
              headerBarColorWarning: string
              headerBarColorSuccess: string
              textColor: string
              textColor1Depth: string
              textColor2Depth: string
              textColor3Depth: string
              textColorPrimary: string
              textColorInfo: string
              textColorSuccess: string
              textColorWarning: string
              textColorError: string
              codeTextColor: string
              codeColor: string
              codeBorder: string
              headerFontSize1: string
              headerFontSize2: string
              headerFontSize3: string
              headerFontSize4: string
              headerFontSize5: string
              headerFontSize6: string
              headerMargin1: string
              headerMargin2: string
              headerMargin3: string
              headerMargin4: string
              headerMargin5: string
              headerMargin6: string
              headerPrefixWidth1: string
              headerPrefixWidth2: string
              headerPrefixWidth3: string
              headerPrefixWidth4: string
              headerPrefixWidth5: string
              headerPrefixWidth6: string
              headerBarWidth1: string
              headerBarWidth2: string
              headerBarWidth3: string
              headerBarWidth4: string
              headerBarWidth5: string
              headerBarWidth6: string
              pMargin: string
              liMargin: string
              olPadding: string
              ulPadding: string
            },
            any
          >
        | undefined
      themeOverrides?:
        | import('../../_mixins/use-theme').ExtractThemeOverrides<
            import('../../_mixins').Theme<
              'Typography',
              {
                aTextColor: string
                blockquoteTextColor: string
                blockquotePrefixColor: string
                blockquoteLineHeight: string
                blockquoteFontSize: string
                codeBorderRadius: string
                liTextColor: string
                liLineHeight: string
                liFontSize: string
                hrColor: string
                headerFontWeight: string
                headerTextColor: string
                pTextColor: string
                pTextColor1Depth: string
                pTextColor2Depth: string
                pTextColor3Depth: string
                pLineHeight: string
                pFontSize: string
                headerBarColor: string
                headerBarColorPrimary: string
                headerBarColorInfo: string
                headerBarColorError: string
                headerBarColorWarning: string
                headerBarColorSuccess: string
                textColor: string
                textColor1Depth: string
                textColor2Depth: string
                textColor3Depth: string
                textColorPrimary: string
                textColorInfo: string
                textColorSuccess: string
                textColorWarning: string
                textColorError: string
                codeTextColor: string
                codeColor: string
                codeBorder: string
                headerFontSize1: string
                headerFontSize2: string
                headerFontSize3: string
                headerFontSize4: string
                headerFontSize5: string
                headerFontSize6: string
                headerMargin1: string
                headerMargin2: string
                headerMargin3: string
                headerMargin4: string
                headerMargin5: string
                headerMargin6: string
                headerPrefixWidth1: string
                headerPrefixWidth2: string
                headerPrefixWidth3: string
                headerPrefixWidth4: string
                headerPrefixWidth5: string
                headerPrefixWidth6: string
                headerBarWidth1: string
                headerBarWidth2: string
                headerBarWidth3: string
                headerBarWidth4: string
                headerBarWidth5: string
                headerBarWidth6: string
                pMargin: string
                liMargin: string
                olPadding: string
                ulPadding: string
              },
              any
            >
          >
        | undefined
      builtinThemeOverrides?:
        | import('../../_mixins/use-theme').ExtractThemeOverrides<
            import('../../_mixins').Theme<
              'Typography',
              {
                aTextColor: string
                blockquoteTextColor: string
                blockquotePrefixColor: string
                blockquoteLineHeight: string
                blockquoteFontSize: string
                codeBorderRadius: string
                liTextColor: string
                liLineHeight: string
                liFontSize: string
                hrColor: string
                headerFontWeight: string
                headerTextColor: string
                pTextColor: string
                pTextColor1Depth: string
                pTextColor2Depth: string
                pTextColor3Depth: string
                pLineHeight: string
                pFontSize: string
                headerBarColor: string
                headerBarColorPrimary: string
                headerBarColorInfo: string
                headerBarColorError: string
                headerBarColorWarning: string
                headerBarColorSuccess: string
                textColor: string
                textColor1Depth: string
                textColor2Depth: string
                textColor3Depth: string
                textColorPrimary: string
                textColorInfo: string
                textColorSuccess: string
                textColorWarning: string
                textColorError: string
                codeTextColor: string
                codeColor: string
                codeBorder: string
                headerFontSize1: string
                headerFontSize2: string
                headerFontSize3: string
                headerFontSize4: string
                headerFontSize5: string
                headerFontSize6: string
                headerMargin1: string
                headerMargin2: string
                headerMargin3: string
                headerMargin4: string
                headerMargin5: string
                headerMargin6: string
                headerPrefixWidth1: string
                headerPrefixWidth2: string
                headerPrefixWidth3: string
                headerPrefixWidth4: string
                headerPrefixWidth5: string
                headerPrefixWidth6: string
                headerBarWidth1: string
                headerBarWidth2: string
                headerBarWidth3: string
                headerBarWidth4: string
                headerBarWidth5: string
                headerBarWidth6: string
                pMargin: string
                liMargin: string
                olPadding: string
                ulPadding: string
              },
              any
            >
          >
        | undefined
      depth?: 2 | 1 | 3 | '1' | '2' | '3' | undefined
    }
  >,
  {
    type: string
    delete: boolean
    italic: boolean
    underline: boolean
    as: string
    code: boolean
    strong: boolean
  }
>
export default _default