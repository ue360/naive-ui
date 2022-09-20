import { PropType } from 'vue'
import type { ExtractPublicPropTypes } from '../../_utils'
declare const tableProps: {
  bordered: {
    type: BooleanConstructor
    default: boolean
  }
  bottomBordered: {
    type: BooleanConstructor
    default: boolean
  }
  singleLine: {
    type: BooleanConstructor
    default: boolean
  }
  striped: BooleanConstructor
  singleColumn: BooleanConstructor
  size: {
    type: PropType<'small' | 'medium' | 'large'>
    default: string
  }
  theme: PropType<
    import('../../_mixins').Theme<
      'Table',
      {
        fontSizeSmall: string
        fontSizeMedium: string
        fontSizeLarge: string
        lineHeight: string
        borderRadius: string
        borderColor: string
        borderColorModal: string
        borderColorPopover: string
        tdColor: string
        tdColorModal: string
        tdColorPopover: string
        tdColorStriped: string
        tdColorStripedModal: string
        tdColorStripedPopover: string
        thColor: string
        thColorModal: string
        thColorPopover: string
        thTextColor: string
        tdTextColor: string
        thFontWeight: string
        thPaddingSmall: string
        thPaddingMedium: string
        thPaddingLarge: string
        tdPaddingSmall: string
        tdPaddingMedium: string
        tdPaddingLarge: string
      },
      any
    >
  >
  themeOverrides: PropType<
    import('../../_mixins/use-theme').ExtractThemeOverrides<
      import('../../_mixins').Theme<
        'Table',
        {
          fontSizeSmall: string
          fontSizeMedium: string
          fontSizeLarge: string
          lineHeight: string
          borderRadius: string
          borderColor: string
          borderColorModal: string
          borderColorPopover: string
          tdColor: string
          tdColorModal: string
          tdColorPopover: string
          tdColorStriped: string
          tdColorStripedModal: string
          tdColorStripedPopover: string
          thColor: string
          thColorModal: string
          thColorPopover: string
          thTextColor: string
          tdTextColor: string
          thFontWeight: string
          thPaddingSmall: string
          thPaddingMedium: string
          thPaddingLarge: string
          tdPaddingSmall: string
          tdPaddingMedium: string
          tdPaddingLarge: string
        },
        any
      >
    >
  >
  builtinThemeOverrides: PropType<
    import('../../_mixins/use-theme').ExtractThemeOverrides<
      import('../../_mixins').Theme<
        'Table',
        {
          fontSizeSmall: string
          fontSizeMedium: string
          fontSizeLarge: string
          lineHeight: string
          borderRadius: string
          borderColor: string
          borderColorModal: string
          borderColorPopover: string
          tdColor: string
          tdColorModal: string
          tdColorPopover: string
          tdColorStriped: string
          tdColorStripedModal: string
          tdColorStripedPopover: string
          thColor: string
          thColorModal: string
          thColorPopover: string
          thTextColor: string
          tdTextColor: string
          thFontWeight: string
          thPaddingSmall: string
          thPaddingMedium: string
          thPaddingLarge: string
          tdPaddingSmall: string
          tdPaddingMedium: string
          tdPaddingLarge: string
        },
        any
      >
    >
  >
}
export declare type TableProps = ExtractPublicPropTypes<typeof tableProps>
declare const _default: import('vue').DefineComponent<
  {
    bordered: {
      type: BooleanConstructor
      default: boolean
    }
    bottomBordered: {
      type: BooleanConstructor
      default: boolean
    }
    singleLine: {
      type: BooleanConstructor
      default: boolean
    }
    striped: BooleanConstructor
    singleColumn: BooleanConstructor
    size: {
      type: PropType<'small' | 'medium' | 'large'>
      default: string
    }
    theme: PropType<
      import('../../_mixins').Theme<
        'Table',
        {
          fontSizeSmall: string
          fontSizeMedium: string
          fontSizeLarge: string
          lineHeight: string
          borderRadius: string
          borderColor: string
          borderColorModal: string
          borderColorPopover: string
          tdColor: string
          tdColorModal: string
          tdColorPopover: string
          tdColorStriped: string
          tdColorStripedModal: string
          tdColorStripedPopover: string
          thColor: string
          thColorModal: string
          thColorPopover: string
          thTextColor: string
          tdTextColor: string
          thFontWeight: string
          thPaddingSmall: string
          thPaddingMedium: string
          thPaddingLarge: string
          tdPaddingSmall: string
          tdPaddingMedium: string
          tdPaddingLarge: string
        },
        any
      >
    >
    themeOverrides: PropType<
      import('../../_mixins/use-theme').ExtractThemeOverrides<
        import('../../_mixins').Theme<
          'Table',
          {
            fontSizeSmall: string
            fontSizeMedium: string
            fontSizeLarge: string
            lineHeight: string
            borderRadius: string
            borderColor: string
            borderColorModal: string
            borderColorPopover: string
            tdColor: string
            tdColorModal: string
            tdColorPopover: string
            tdColorStriped: string
            tdColorStripedModal: string
            tdColorStripedPopover: string
            thColor: string
            thColorModal: string
            thColorPopover: string
            thTextColor: string
            tdTextColor: string
            thFontWeight: string
            thPaddingSmall: string
            thPaddingMedium: string
            thPaddingLarge: string
            tdPaddingSmall: string
            tdPaddingMedium: string
            tdPaddingLarge: string
          },
          any
        >
      >
    >
    builtinThemeOverrides: PropType<
      import('../../_mixins/use-theme').ExtractThemeOverrides<
        import('../../_mixins').Theme<
          'Table',
          {
            fontSizeSmall: string
            fontSizeMedium: string
            fontSizeLarge: string
            lineHeight: string
            borderRadius: string
            borderColor: string
            borderColorModal: string
            borderColorPopover: string
            tdColor: string
            tdColorModal: string
            tdColorPopover: string
            tdColorStriped: string
            tdColorStripedModal: string
            tdColorStripedPopover: string
            thColor: string
            thColorModal: string
            thColorPopover: string
            thTextColor: string
            tdTextColor: string
            thFontWeight: string
            thPaddingSmall: string
            thPaddingMedium: string
            thPaddingLarge: string
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
      '--bezier': string
      '--td-color': string
      '--td-color-modal': string
      '--td-color-popover': string
      '--td-text-color': string
      '--border-color': string
      '--border-color-modal': string
      '--border-color-popover': string
      '--border-radius': string
      '--font-size': string
      '--th-color': string
      '--th-color-modal': string
      '--th-color-popover': string
      '--th-font-weight': string
      '--th-text-color': string
      '--line-height': string
      '--td-padding': string
      '--th-padding': string
      '--td-color-striped': string
      '--td-color-striped-modal': string
      '--td-color-striped-popover': string
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
      bordered?: unknown
      bottomBordered?: unknown
      singleLine?: unknown
      striped?: unknown
      singleColumn?: unknown
      size?: unknown
      theme?: unknown
      themeOverrides?: unknown
      builtinThemeOverrides?: unknown
    } & {
      size: 'small' | 'medium' | 'large'
      bordered: boolean
      bottomBordered: boolean
      striped: boolean
      singleLine: boolean
      singleColumn: boolean
    } & {
      theme?:
        | import('../../_mixins').Theme<
            'Table',
            {
              fontSizeSmall: string
              fontSizeMedium: string
              fontSizeLarge: string
              lineHeight: string
              borderRadius: string
              borderColor: string
              borderColorModal: string
              borderColorPopover: string
              tdColor: string
              tdColorModal: string
              tdColorPopover: string
              tdColorStriped: string
              tdColorStripedModal: string
              tdColorStripedPopover: string
              thColor: string
              thColorModal: string
              thColorPopover: string
              thTextColor: string
              tdTextColor: string
              thFontWeight: string
              thPaddingSmall: string
              thPaddingMedium: string
              thPaddingLarge: string
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
              'Table',
              {
                fontSizeSmall: string
                fontSizeMedium: string
                fontSizeLarge: string
                lineHeight: string
                borderRadius: string
                borderColor: string
                borderColorModal: string
                borderColorPopover: string
                tdColor: string
                tdColorModal: string
                tdColorPopover: string
                tdColorStriped: string
                tdColorStripedModal: string
                tdColorStripedPopover: string
                thColor: string
                thColorModal: string
                thColorPopover: string
                thTextColor: string
                tdTextColor: string
                thFontWeight: string
                thPaddingSmall: string
                thPaddingMedium: string
                thPaddingLarge: string
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
              'Table',
              {
                fontSizeSmall: string
                fontSizeMedium: string
                fontSizeLarge: string
                lineHeight: string
                borderRadius: string
                borderColor: string
                borderColorModal: string
                borderColorPopover: string
                tdColor: string
                tdColorModal: string
                tdColorPopover: string
                tdColorStriped: string
                tdColorStripedModal: string
                tdColorStripedPopover: string
                thColor: string
                thColorModal: string
                thColorPopover: string
                thTextColor: string
                tdTextColor: string
                thFontWeight: string
                thPaddingSmall: string
                thPaddingMedium: string
                thPaddingLarge: string
                tdPaddingSmall: string
                tdPaddingMedium: string
                tdPaddingLarge: string
              },
              any
            >
          >
        | undefined
    }
  >,
  {
    size: 'small' | 'medium' | 'large'
    bordered: boolean
    bottomBordered: boolean
    striped: boolean
    singleLine: boolean
    singleColumn: boolean
  }
>
export default _default