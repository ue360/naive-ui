import { PropType, CSSProperties } from 'vue'
import type { ExtractPublicPropTypes } from '../../_utils'
declare const descriptionProps: {
  readonly title: StringConstructor
  readonly column: {
    readonly type: NumberConstructor
    readonly default: 3
  }
  readonly columns: NumberConstructor
  readonly labelPlacement: {
    readonly type: PropType<'left' | 'top'>
    readonly default: 'top'
  }
  readonly labelAlign: {
    readonly type: PropType<'left' | 'right' | 'center'>
    readonly default: 'left'
  }
  readonly separator: {
    readonly type: StringConstructor
    readonly default: ':'
  }
  readonly size: {
    readonly type: PropType<'small' | 'medium' | 'large'>
    readonly default: 'medium'
  }
  readonly bordered: BooleanConstructor
  readonly labelStyle: PropType<string | CSSProperties>
  readonly contentStyle: PropType<string | CSSProperties>
  readonly theme: PropType<
    import('../../_mixins').Theme<
      'Descriptions',
      {
        lineHeight: string
        fontSizeSmall: string
        fontSizeMedium: string
        fontSizeLarge: string
        thColor: string
        thColorModal: string
        thColorPopover: string
        thTextColor: string
        thFontWeight: string
        tdTextColor: string
        tdColor: string
        tdColorModal: string
        tdColorPopover: string
        borderColor: string
        borderColorModal: string
        borderColorPopover: string
        borderRadius: string
        thPaddingBorderedSmall: string
        thPaddingBorderedMedium: string
        thPaddingBorderedLarge: string
        thPaddingSmall: string
        thPaddingMedium: string
        thPaddingLarge: string
        tdPaddingBorderedSmall: string
        tdPaddingBorderedMedium: string
        tdPaddingBorderedLarge: string
        tdPaddingSmall: string
        tdPaddingMedium: string
        tdPaddingLarge: string
      },
      any
    >
  >
  readonly themeOverrides: PropType<
    import('../../_mixins/use-theme').ExtractThemeOverrides<
      import('../../_mixins').Theme<
        'Descriptions',
        {
          lineHeight: string
          fontSizeSmall: string
          fontSizeMedium: string
          fontSizeLarge: string
          thColor: string
          thColorModal: string
          thColorPopover: string
          thTextColor: string
          thFontWeight: string
          tdTextColor: string
          tdColor: string
          tdColorModal: string
          tdColorPopover: string
          borderColor: string
          borderColorModal: string
          borderColorPopover: string
          borderRadius: string
          thPaddingBorderedSmall: string
          thPaddingBorderedMedium: string
          thPaddingBorderedLarge: string
          thPaddingSmall: string
          thPaddingMedium: string
          thPaddingLarge: string
          tdPaddingBorderedSmall: string
          tdPaddingBorderedMedium: string
          tdPaddingBorderedLarge: string
          tdPaddingSmall: string
          tdPaddingMedium: string
          tdPaddingLarge: string
        },
        any
      >
    >
  >
  readonly builtinThemeOverrides: PropType<
    import('../../_mixins/use-theme').ExtractThemeOverrides<
      import('../../_mixins').Theme<
        'Descriptions',
        {
          lineHeight: string
          fontSizeSmall: string
          fontSizeMedium: string
          fontSizeLarge: string
          thColor: string
          thColorModal: string
          thColorPopover: string
          thTextColor: string
          thFontWeight: string
          tdTextColor: string
          tdColor: string
          tdColorModal: string
          tdColorPopover: string
          borderColor: string
          borderColorModal: string
          borderColorPopover: string
          borderRadius: string
          thPaddingBorderedSmall: string
          thPaddingBorderedMedium: string
          thPaddingBorderedLarge: string
          thPaddingSmall: string
          thPaddingMedium: string
          thPaddingLarge: string
          tdPaddingBorderedSmall: string
          tdPaddingBorderedMedium: string
          tdPaddingBorderedLarge: string
          tdPaddingSmall: string
          tdPaddingMedium: string
          tdPaddingLarge: string
        },
        any
      >
    >
  >
}
export declare type DescriptionProps = ExtractPublicPropTypes<
  typeof descriptionProps
>
declare const _default: import('vue').DefineComponent<
  {
    readonly title: StringConstructor
    readonly column: {
      readonly type: NumberConstructor
      readonly default: 3
    }
    readonly columns: NumberConstructor
    readonly labelPlacement: {
      readonly type: PropType<'left' | 'top'>
      readonly default: 'top'
    }
    readonly labelAlign: {
      readonly type: PropType<'left' | 'right' | 'center'>
      readonly default: 'left'
    }
    readonly separator: {
      readonly type: StringConstructor
      readonly default: ':'
    }
    readonly size: {
      readonly type: PropType<'small' | 'medium' | 'large'>
      readonly default: 'medium'
    }
    readonly bordered: BooleanConstructor
    readonly labelStyle: PropType<string | CSSProperties>
    readonly contentStyle: PropType<string | CSSProperties>
    readonly theme: PropType<
      import('../../_mixins').Theme<
        'Descriptions',
        {
          lineHeight: string
          fontSizeSmall: string
          fontSizeMedium: string
          fontSizeLarge: string
          thColor: string
          thColorModal: string
          thColorPopover: string
          thTextColor: string
          thFontWeight: string
          tdTextColor: string
          tdColor: string
          tdColorModal: string
          tdColorPopover: string
          borderColor: string
          borderColorModal: string
          borderColorPopover: string
          borderRadius: string
          thPaddingBorderedSmall: string
          thPaddingBorderedMedium: string
          thPaddingBorderedLarge: string
          thPaddingSmall: string
          thPaddingMedium: string
          thPaddingLarge: string
          tdPaddingBorderedSmall: string
          tdPaddingBorderedMedium: string
          tdPaddingBorderedLarge: string
          tdPaddingSmall: string
          tdPaddingMedium: string
          tdPaddingLarge: string
        },
        any
      >
    >
    readonly themeOverrides: PropType<
      import('../../_mixins/use-theme').ExtractThemeOverrides<
        import('../../_mixins').Theme<
          'Descriptions',
          {
            lineHeight: string
            fontSizeSmall: string
            fontSizeMedium: string
            fontSizeLarge: string
            thColor: string
            thColorModal: string
            thColorPopover: string
            thTextColor: string
            thFontWeight: string
            tdTextColor: string
            tdColor: string
            tdColorModal: string
            tdColorPopover: string
            borderColor: string
            borderColorModal: string
            borderColorPopover: string
            borderRadius: string
            thPaddingBorderedSmall: string
            thPaddingBorderedMedium: string
            thPaddingBorderedLarge: string
            thPaddingSmall: string
            thPaddingMedium: string
            thPaddingLarge: string
            tdPaddingBorderedSmall: string
            tdPaddingBorderedMedium: string
            tdPaddingBorderedLarge: string
            tdPaddingSmall: string
            tdPaddingMedium: string
            tdPaddingLarge: string
          },
          any
        >
      >
    >
    readonly builtinThemeOverrides: PropType<
      import('../../_mixins/use-theme').ExtractThemeOverrides<
        import('../../_mixins').Theme<
          'Descriptions',
          {
            lineHeight: string
            fontSizeSmall: string
            fontSizeMedium: string
            fontSizeLarge: string
            thColor: string
            thColorModal: string
            thColorPopover: string
            thTextColor: string
            thFontWeight: string
            tdTextColor: string
            tdColor: string
            tdColorModal: string
            tdColorPopover: string
            borderColor: string
            borderColorModal: string
            borderColorPopover: string
            borderRadius: string
            thPaddingBorderedSmall: string
            thPaddingBorderedMedium: string
            thPaddingBorderedLarge: string
            thPaddingSmall: string
            thPaddingMedium: string
            thPaddingLarge: string
            tdPaddingBorderedSmall: string
            tdPaddingBorderedMedium: string
            tdPaddingBorderedLarge: string
            tdPaddingSmall: string
            tdPaddingMedium: string
            tdPaddingLarge: string
          },
          any
        >
      >
    >
  },
  {
    mergedClsPrefix: import('vue').ComputedRef<string>
    cssVars: import('vue').ComputedRef<{
      '--th-padding': string
      '--td-padding': string
      '--font-size': string
      '--bezier': string
      '--th-font-weight': string
      '--line-height': string
      '--th-text-color': string
      '--td-text-color': string
      '--th-color': string
      '--th-color-modal': string
      '--th-color-popover': string
      '--td-color': string
      '--td-color-modal': string
      '--td-color-popover': string
      '--border-radius': string
      '--border-color': string
      '--border-color-modal': string
      '--border-color-popover': string
    }>
    compitableColumn: import('vue').ComputedRef<number>
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
      readonly title?: unknown
      readonly column?: unknown
      readonly columns?: unknown
      readonly labelPlacement?: unknown
      readonly labelAlign?: unknown
      readonly separator?: unknown
      readonly size?: unknown
      readonly bordered?: unknown
      readonly labelStyle?: unknown
      readonly contentStyle?: unknown
      readonly theme?: unknown
      readonly themeOverrides?: unknown
      readonly builtinThemeOverrides?: unknown
    } & {
      column: number
      size: 'small' | 'medium' | 'large'
      separator: string
      bordered: boolean
      labelPlacement: 'left' | 'top'
      labelAlign: 'left' | 'right' | 'center'
    } & {
      columns?: number | undefined
      title?: string | undefined
      theme?:
        | import('../../_mixins').Theme<
            'Descriptions',
            {
              lineHeight: string
              fontSizeSmall: string
              fontSizeMedium: string
              fontSizeLarge: string
              thColor: string
              thColorModal: string
              thColorPopover: string
              thTextColor: string
              thFontWeight: string
              tdTextColor: string
              tdColor: string
              tdColorModal: string
              tdColorPopover: string
              borderColor: string
              borderColorModal: string
              borderColorPopover: string
              borderRadius: string
              thPaddingBorderedSmall: string
              thPaddingBorderedMedium: string
              thPaddingBorderedLarge: string
              thPaddingSmall: string
              thPaddingMedium: string
              thPaddingLarge: string
              tdPaddingBorderedSmall: string
              tdPaddingBorderedMedium: string
              tdPaddingBorderedLarge: string
              tdPaddingSmall: string
              tdPaddingMedium: string
              tdPaddingLarge: string
            },
            any
          >
        | undefined
      themeOverrides?:
        | import('../../_mixins/use-theme').ExtractThemeOverrides<
            import('../../_mixins').Theme<
              'Descriptions',
              {
                lineHeight: string
                fontSizeSmall: string
                fontSizeMedium: string
                fontSizeLarge: string
                thColor: string
                thColorModal: string
                thColorPopover: string
                thTextColor: string
                thFontWeight: string
                tdTextColor: string
                tdColor: string
                tdColorModal: string
                tdColorPopover: string
                borderColor: string
                borderColorModal: string
                borderColorPopover: string
                borderRadius: string
                thPaddingBorderedSmall: string
                thPaddingBorderedMedium: string
                thPaddingBorderedLarge: string
                thPaddingSmall: string
                thPaddingMedium: string
                thPaddingLarge: string
                tdPaddingBorderedSmall: string
                tdPaddingBorderedMedium: string
                tdPaddingBorderedLarge: string
                tdPaddingSmall: string
                tdPaddingMedium: string
                tdPaddingLarge: string
              },
              any
            >
          >
        | undefined
      builtinThemeOverrides?:
        | import('../../_mixins/use-theme').ExtractThemeOverrides<
            import('../../_mixins').Theme<
              'Descriptions',
              {
                lineHeight: string
                fontSizeSmall: string
                fontSizeMedium: string
                fontSizeLarge: string
                thColor: string
                thColorModal: string
                thColorPopover: string
                thTextColor: string
                thFontWeight: string
                tdTextColor: string
                tdColor: string
                tdColorModal: string
                tdColorPopover: string
                borderColor: string
                borderColorModal: string
                borderColorPopover: string
                borderRadius: string
                thPaddingBorderedSmall: string
                thPaddingBorderedMedium: string
                thPaddingBorderedLarge: string
                thPaddingSmall: string
                thPaddingMedium: string
                thPaddingLarge: string
                tdPaddingBorderedSmall: string
                tdPaddingBorderedMedium: string
                tdPaddingBorderedLarge: string
                tdPaddingSmall: string
                tdPaddingMedium: string
                tdPaddingLarge: string
              },
              any
            >
          >
        | undefined
      contentStyle?: string | CSSProperties | undefined
      labelStyle?: string | CSSProperties | undefined
    }
  >,
  {
    column: number
    size: 'small' | 'medium' | 'large'
    separator: string
    bordered: boolean
    labelPlacement: 'left' | 'top'
    labelAlign: 'left' | 'right' | 'center'
  }
>
export default _default
