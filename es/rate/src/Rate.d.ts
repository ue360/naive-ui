import { PropType } from 'vue'
import type { ExtractPublicPropTypes, MaybeArray } from '../../_utils'
declare const rateProps: {
  readonly allowHalf: BooleanConstructor
  readonly count: {
    readonly type: NumberConstructor
    readonly default: 5
  }
  readonly value: NumberConstructor
  readonly defaultValue: {
    readonly type: NumberConstructor
    readonly default: 0
  }
  readonly readonly: BooleanConstructor
  readonly size: {
    readonly type: PropType<number | 'small' | 'medium' | 'large'>
    readonly default: 'medium'
  }
  readonly color: StringConstructor
  readonly 'onUpdate:value': PropType<MaybeArray<(value: number) => void>>
  readonly onUpdateValue: PropType<MaybeArray<(value: number) => void>>
  readonly theme: PropType<
    import('../../_mixins').Theme<
      'Rate',
      {
        itemColor: string
        itemColorActive: string
        sizeSmall: string
        sizeMedium: string
        sizeLarge: string
      },
      any
    >
  >
  readonly themeOverrides: PropType<
    import('../../_mixins/use-theme').ExtractThemeOverrides<
      import('../../_mixins').Theme<
        'Rate',
        {
          itemColor: string
          itemColorActive: string
          sizeSmall: string
          sizeMedium: string
          sizeLarge: string
        },
        any
      >
    >
  >
  readonly builtinThemeOverrides: PropType<
    import('../../_mixins/use-theme').ExtractThemeOverrides<
      import('../../_mixins').Theme<
        'Rate',
        {
          itemColor: string
          itemColorActive: string
          sizeSmall: string
          sizeMedium: string
          sizeLarge: string
        },
        any
      >
    >
  >
}
export declare type RateProps = ExtractPublicPropTypes<typeof rateProps>
declare const _default: import('vue').DefineComponent<
  {
    readonly allowHalf: BooleanConstructor
    readonly count: {
      readonly type: NumberConstructor
      readonly default: 5
    }
    readonly value: NumberConstructor
    readonly defaultValue: {
      readonly type: NumberConstructor
      readonly default: 0
    }
    readonly readonly: BooleanConstructor
    readonly size: {
      readonly type: PropType<number | 'small' | 'medium' | 'large'>
      readonly default: 'medium'
    }
    readonly color: StringConstructor
    readonly 'onUpdate:value': PropType<MaybeArray<(value: number) => void>>
    readonly onUpdateValue: PropType<MaybeArray<(value: number) => void>>
    readonly theme: PropType<
      import('../../_mixins').Theme<
        'Rate',
        {
          itemColor: string
          itemColorActive: string
          sizeSmall: string
          sizeMedium: string
          sizeLarge: string
        },
        any
      >
    >
    readonly themeOverrides: PropType<
      import('../../_mixins/use-theme').ExtractThemeOverrides<
        import('../../_mixins').Theme<
          'Rate',
          {
            itemColor: string
            itemColorActive: string
            sizeSmall: string
            sizeMedium: string
            sizeLarge: string
          },
          any
        >
      >
    >
    readonly builtinThemeOverrides: PropType<
      import('../../_mixins/use-theme').ExtractThemeOverrides<
        import('../../_mixins').Theme<
          'Rate',
          {
            itemColor: string
            itemColorActive: string
            sizeSmall: string
            sizeMedium: string
            sizeLarge: string
          },
          any
        >
      >
    >
  },
  {
    mergedClsPrefix: import('vue').ComputedRef<string>
    mergedValue: import('vue').ComputedRef<number>
    hoverIndex: import('vue').Ref<number | null>
    handleMouseMove: (index: number, e: MouseEvent) => void
    handleClick: (index: number, e: MouseEvent) => void
    handleMouseLeave: () => void
    cssVars: import('vue').ComputedRef<{
      '--bezier': string
      '--item-color': string
      '--item-color-active': string
      '--item-size': string
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
      readonly allowHalf?: unknown
      readonly count?: unknown
      readonly value?: unknown
      readonly defaultValue?: unknown
      readonly readonly?: unknown
      readonly size?: unknown
      readonly color?: unknown
      readonly 'onUpdate:value'?: unknown
      readonly onUpdateValue?: unknown
      readonly theme?: unknown
      readonly themeOverrides?: unknown
      readonly builtinThemeOverrides?: unknown
    } & {
      readonly: boolean
      size: number | 'small' | 'medium' | 'large'
      defaultValue: number
      count: number
      allowHalf: boolean
    } & {
      value?: number | undefined
      color?: string | undefined
      theme?:
        | import('../../_mixins').Theme<
            'Rate',
            {
              itemColor: string
              itemColorActive: string
              sizeSmall: string
              sizeMedium: string
              sizeLarge: string
            },
            any
          >
        | undefined
      themeOverrides?:
        | import('../../_mixins/use-theme').ExtractThemeOverrides<
            import('../../_mixins').Theme<
              'Rate',
              {
                itemColor: string
                itemColorActive: string
                sizeSmall: string
                sizeMedium: string
                sizeLarge: string
              },
              any
            >
          >
        | undefined
      builtinThemeOverrides?:
        | import('../../_mixins/use-theme').ExtractThemeOverrides<
            import('../../_mixins').Theme<
              'Rate',
              {
                itemColor: string
                itemColorActive: string
                sizeSmall: string
                sizeMedium: string
                sizeLarge: string
              },
              any
            >
          >
        | undefined
      'onUpdate:value'?: MaybeArray<(value: number) => void> | undefined
      onUpdateValue?: MaybeArray<(value: number) => void> | undefined
    }
  >,
  {
    readonly: boolean
    size: number | 'small' | 'medium' | 'large'
    defaultValue: number
    count: number
    allowHalf: boolean
  }
>
export default _default