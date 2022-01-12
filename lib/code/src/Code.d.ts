import { PropType } from 'vue'
import { Hljs } from '../../_mixins'
import type { ExtractPublicPropTypes } from '../../_utils'
declare const codeProps: {
  language: StringConstructor
  code: {
    type: StringConstructor
    default: string
  }
  trim: {
    type: BooleanConstructor
    default: boolean
  }
  hljs: PropType<Hljs>
  uri: BooleanConstructor
  inline: BooleanConstructor
  internalFontSize: NumberConstructor
  internalNoHighlight: BooleanConstructor
  theme: PropType<
    import('../../_mixins').Theme<
      'Code',
      {
        textColor: string
        fontSize: string
        fontWeightStrong: string
        'mono-3': string
        'hue-1': string
        'hue-2': string
        'hue-3': string
        'hue-4': string
        'hue-5': string
        'hue-5-2': string
        'hue-6': string
        'hue-6-2': string
      },
      any
    >
  >
  themeOverrides: PropType<
    import('../../_mixins/use-theme').ExtractThemeOverrides<
      import('../../_mixins').Theme<
        'Code',
        {
          textColor: string
          fontSize: string
          fontWeightStrong: string
          'mono-3': string
          'hue-1': string
          'hue-2': string
          'hue-3': string
          'hue-4': string
          'hue-5': string
          'hue-5-2': string
          'hue-6': string
          'hue-6-2': string
        },
        any
      >
    >
  >
  builtinThemeOverrides: PropType<
    import('../../_mixins/use-theme').ExtractThemeOverrides<
      import('../../_mixins').Theme<
        'Code',
        {
          textColor: string
          fontSize: string
          fontWeightStrong: string
          'mono-3': string
          'hue-1': string
          'hue-2': string
          'hue-3': string
          'hue-4': string
          'hue-5': string
          'hue-5-2': string
          'hue-6': string
          'hue-6-2': string
        },
        any
      >
    >
  >
}
export declare type CodeProps = ExtractPublicPropTypes<typeof codeProps>
declare const _default: import('vue').DefineComponent<
  {
    language: StringConstructor
    code: {
      type: StringConstructor
      default: string
    }
    trim: {
      type: BooleanConstructor
      default: boolean
    }
    hljs: PropType<Hljs>
    uri: BooleanConstructor
    inline: BooleanConstructor
    internalFontSize: NumberConstructor
    internalNoHighlight: BooleanConstructor
    theme: PropType<
      import('../../_mixins').Theme<
        'Code',
        {
          textColor: string
          fontSize: string
          fontWeightStrong: string
          'mono-3': string
          'hue-1': string
          'hue-2': string
          'hue-3': string
          'hue-4': string
          'hue-5': string
          'hue-5-2': string
          'hue-6': string
          'hue-6-2': string
        },
        any
      >
    >
    themeOverrides: PropType<
      import('../../_mixins/use-theme').ExtractThemeOverrides<
        import('../../_mixins').Theme<
          'Code',
          {
            textColor: string
            fontSize: string
            fontWeightStrong: string
            'mono-3': string
            'hue-1': string
            'hue-2': string
            'hue-3': string
            'hue-4': string
            'hue-5': string
            'hue-5-2': string
            'hue-6': string
            'hue-6-2': string
          },
          any
        >
      >
    >
    builtinThemeOverrides: PropType<
      import('../../_mixins/use-theme').ExtractThemeOverrides<
        import('../../_mixins').Theme<
          'Code',
          {
            textColor: string
            fontSize: string
            fontWeightStrong: string
            'mono-3': string
            'hue-1': string
            'hue-2': string
            'hue-3': string
            'hue-4': string
            'hue-5': string
            'hue-5-2': string
            'hue-6': string
            'hue-6-2': string
          },
          any
        >
      >
    >
  },
  {
    mergedClsPrefix: import('vue').ComputedRef<string>
    codeRef: import('vue').Ref<HTMLElement | null>
    cssVars: import('vue').ComputedRef<{
      '--font-size': string
      '--font-family': string
      '--font-weight-strong': string
      '--bezier': string
      '--text-color': string
      '--mono-3': string
      '--hue-1': string
      '--hue-2': string
      '--hue-3': string
      '--hue-4': string
      '--hue-5': string
      '--hue-5-2': string
      '--hue-6': string
      '--hue-6-2': string
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
      language?: unknown
      code?: unknown
      trim?: unknown
      hljs?: unknown
      uri?: unknown
      inline?: unknown
      internalFontSize?: unknown
      internalNoHighlight?: unknown
      theme?: unknown
      themeOverrides?: unknown
      builtinThemeOverrides?: unknown
    } & {
      inline: boolean
      trim: boolean
      code: string
      uri: boolean
      internalNoHighlight: boolean
    } & {
      theme?:
        | import('../../_mixins').Theme<
            'Code',
            {
              textColor: string
              fontSize: string
              fontWeightStrong: string
              'mono-3': string
              'hue-1': string
              'hue-2': string
              'hue-3': string
              'hue-4': string
              'hue-5': string
              'hue-5-2': string
              'hue-6': string
              'hue-6-2': string
            },
            any
          >
        | undefined
      themeOverrides?:
        | import('../../_mixins/use-theme').ExtractThemeOverrides<
            import('../../_mixins').Theme<
              'Code',
              {
                textColor: string
                fontSize: string
                fontWeightStrong: string
                'mono-3': string
                'hue-1': string
                'hue-2': string
                'hue-3': string
                'hue-4': string
                'hue-5': string
                'hue-5-2': string
                'hue-6': string
                'hue-6-2': string
              },
              any
            >
          >
        | undefined
      builtinThemeOverrides?:
        | import('../../_mixins/use-theme').ExtractThemeOverrides<
            import('../../_mixins').Theme<
              'Code',
              {
                textColor: string
                fontSize: string
                fontWeightStrong: string
                'mono-3': string
                'hue-1': string
                'hue-2': string
                'hue-3': string
                'hue-4': string
                'hue-5': string
                'hue-5-2': string
                'hue-6': string
                'hue-6-2': string
              },
              any
            >
          >
        | undefined
      hljs?: Hljs | undefined
      language?: string | undefined
      internalFontSize?: number | undefined
    }
  >,
  {
    inline: boolean
    trim: boolean
    code: string
    uri: boolean
    internalNoHighlight: boolean
  }
>
export default _default
