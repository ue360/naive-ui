import { PropType, Ref, InjectionKey } from 'vue'
import type { ExtractPublicPropTypes } from '../../_utils'
declare const listProps: {
  size: {
    type: PropType<'small' | 'medium' | 'large'>
    default: string
  }
  bordered: {
    type: BooleanConstructor
    default: boolean
  }
  theme: PropType<
    import('../../_mixins').Theme<
      'List',
      {
        textColor: string
        color: string
        colorModal: string
        colorPopover: string
        borderColor: string
        borderColorModal: string
        borderColorPopover: string
        borderRadius: string
        fontSize: string
      },
      any
    >
  >
  themeOverrides: PropType<
    import('../../_mixins/use-theme').ExtractThemeOverrides<
      import('../../_mixins').Theme<
        'List',
        {
          textColor: string
          color: string
          colorModal: string
          colorPopover: string
          borderColor: string
          borderColorModal: string
          borderColorPopover: string
          borderRadius: string
          fontSize: string
        },
        any
      >
    >
  >
  builtinThemeOverrides: PropType<
    import('../../_mixins/use-theme').ExtractThemeOverrides<
      import('../../_mixins').Theme<
        'List',
        {
          textColor: string
          color: string
          colorModal: string
          colorPopover: string
          borderColor: string
          borderColorModal: string
          borderColorPopover: string
          borderRadius: string
          fontSize: string
        },
        any
      >
    >
  >
}
export declare type ListProps = ExtractPublicPropTypes<typeof listProps>
interface ListInjection {
  mergedClsPrefixRef: Ref<string>
}
export declare const listInjectionKey: InjectionKey<ListInjection>
declare const _default: import('vue').DefineComponent<
  {
    size: {
      type: PropType<'small' | 'medium' | 'large'>
      default: string
    }
    bordered: {
      type: BooleanConstructor
      default: boolean
    }
    theme: PropType<
      import('../../_mixins').Theme<
        'List',
        {
          textColor: string
          color: string
          colorModal: string
          colorPopover: string
          borderColor: string
          borderColorModal: string
          borderColorPopover: string
          borderRadius: string
          fontSize: string
        },
        any
      >
    >
    themeOverrides: PropType<
      import('../../_mixins/use-theme').ExtractThemeOverrides<
        import('../../_mixins').Theme<
          'List',
          {
            textColor: string
            color: string
            colorModal: string
            colorPopover: string
            borderColor: string
            borderColorModal: string
            borderColorPopover: string
            borderRadius: string
            fontSize: string
          },
          any
        >
      >
    >
    builtinThemeOverrides: PropType<
      import('../../_mixins/use-theme').ExtractThemeOverrides<
        import('../../_mixins').Theme<
          'List',
          {
            textColor: string
            color: string
            colorModal: string
            colorPopover: string
            borderColor: string
            borderColorModal: string
            borderColorPopover: string
            borderRadius: string
            fontSize: string
          },
          any
        >
      >
    >
  },
  {
    mergedClsPrefix: import('vue').ComputedRef<string>
    cssVars: import('vue').ComputedRef<{
      '--font-size': string
      '--bezier': string
      '--text-color': string
      '--color': string
      '--border-radius': string
      '--border-color': string
      '--border-color-modal': string
      '--border-color-popover': string
      '--color-modal': string
      '--color-popover': string
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
      bordered?: unknown
      theme?: unknown
      themeOverrides?: unknown
      builtinThemeOverrides?: unknown
    } & {
      size: 'small' | 'medium' | 'large'
      bordered: boolean
    } & {
      theme?:
        | import('../../_mixins').Theme<
            'List',
            {
              textColor: string
              color: string
              colorModal: string
              colorPopover: string
              borderColor: string
              borderColorModal: string
              borderColorPopover: string
              borderRadius: string
              fontSize: string
            },
            any
          >
        | undefined
      themeOverrides?:
        | import('../../_mixins/use-theme').ExtractThemeOverrides<
            import('../../_mixins').Theme<
              'List',
              {
                textColor: string
                color: string
                colorModal: string
                colorPopover: string
                borderColor: string
                borderColorModal: string
                borderColorPopover: string
                borderRadius: string
                fontSize: string
              },
              any
            >
          >
        | undefined
      builtinThemeOverrides?:
        | import('../../_mixins/use-theme').ExtractThemeOverrides<
            import('../../_mixins').Theme<
              'List',
              {
                textColor: string
                color: string
                colorModal: string
                colorPopover: string
                borderColor: string
                borderColorModal: string
                borderColorPopover: string
                borderRadius: string
                fontSize: string
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
  }
>
export default _default