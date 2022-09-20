import { PropType } from 'vue'
import { ExtractPublicPropTypes } from '../../_utils'
declare const spinProps: {
  description: StringConstructor
  stroke: StringConstructor
  size: {
    type: PropType<number | 'small' | 'medium' | 'large'>
    default: string
  }
  show: {
    type: BooleanConstructor
    default: boolean
  }
  strokeWidth: NumberConstructor
  rotate: {
    type: BooleanConstructor
    default: boolean
  }
  spinning: {
    type: BooleanConstructor
    validator: () => boolean
    default: undefined
  }
  theme: PropType<
    import('../../_mixins').Theme<
      'Spin',
      {
        fontSize: string
        textColor: string
        sizeTiny: string
        sizeSmall: string
        sizeMedium: string
        sizeLarge: string
        sizeHuge: string
        color: string
        opacitySpinning: string
      },
      any
    >
  >
  themeOverrides: PropType<
    import('../../_mixins/use-theme').ExtractThemeOverrides<
      import('../../_mixins').Theme<
        'Spin',
        {
          fontSize: string
          textColor: string
          sizeTiny: string
          sizeSmall: string
          sizeMedium: string
          sizeLarge: string
          sizeHuge: string
          color: string
          opacitySpinning: string
        },
        any
      >
    >
  >
  builtinThemeOverrides: PropType<
    import('../../_mixins/use-theme').ExtractThemeOverrides<
      import('../../_mixins').Theme<
        'Spin',
        {
          fontSize: string
          textColor: string
          sizeTiny: string
          sizeSmall: string
          sizeMedium: string
          sizeLarge: string
          sizeHuge: string
          color: string
          opacitySpinning: string
        },
        any
      >
    >
  >
}
export declare type SpinProps = ExtractPublicPropTypes<typeof spinProps>
declare const _default: import('vue').DefineComponent<
  {
    description: StringConstructor
    stroke: StringConstructor
    size: {
      type: PropType<number | 'small' | 'medium' | 'large'>
      default: string
    }
    show: {
      type: BooleanConstructor
      default: boolean
    }
    strokeWidth: NumberConstructor
    rotate: {
      type: BooleanConstructor
      default: boolean
    }
    spinning: {
      type: BooleanConstructor
      validator: () => boolean
      default: undefined
    }
    theme: PropType<
      import('../../_mixins').Theme<
        'Spin',
        {
          fontSize: string
          textColor: string
          sizeTiny: string
          sizeSmall: string
          sizeMedium: string
          sizeLarge: string
          sizeHuge: string
          color: string
          opacitySpinning: string
        },
        any
      >
    >
    themeOverrides: PropType<
      import('../../_mixins/use-theme').ExtractThemeOverrides<
        import('../../_mixins').Theme<
          'Spin',
          {
            fontSize: string
            textColor: string
            sizeTiny: string
            sizeSmall: string
            sizeMedium: string
            sizeLarge: string
            sizeHuge: string
            color: string
            opacitySpinning: string
          },
          any
        >
      >
    >
    builtinThemeOverrides: PropType<
      import('../../_mixins/use-theme').ExtractThemeOverrides<
        import('../../_mixins').Theme<
          'Spin',
          {
            fontSize: string
            textColor: string
            sizeTiny: string
            sizeSmall: string
            sizeMedium: string
            sizeLarge: string
            sizeHuge: string
            color: string
            opacitySpinning: string
          },
          any
        >
      >
    >
  },
  {
    mergedClsPrefix: import('vue').ComputedRef<string>
    compitableShow: import('vue').ComputedRef<boolean>
    mergedStrokeWidth: import('vue').ComputedRef<number>
    cssVars: import('vue').ComputedRef<{
      '--bezier': string
      '--opacity-spinning': string
      '--size': string
      '--color': string
      '--text-color': string
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
      description?: unknown
      stroke?: unknown
      size?: unknown
      show?: unknown
      strokeWidth?: unknown
      rotate?: unknown
      spinning?: unknown
      theme?: unknown
      themeOverrides?: unknown
      builtinThemeOverrides?: unknown
    } & {
      size: number | 'small' | 'medium' | 'large'
      show: boolean
      rotate: boolean
    } & {
      description?: string | undefined
      stroke?: string | undefined
      strokeWidth?: number | undefined
      theme?:
        | import('../../_mixins').Theme<
            'Spin',
            {
              fontSize: string
              textColor: string
              sizeTiny: string
              sizeSmall: string
              sizeMedium: string
              sizeLarge: string
              sizeHuge: string
              color: string
              opacitySpinning: string
            },
            any
          >
        | undefined
      themeOverrides?:
        | import('../../_mixins/use-theme').ExtractThemeOverrides<
            import('../../_mixins').Theme<
              'Spin',
              {
                fontSize: string
                textColor: string
                sizeTiny: string
                sizeSmall: string
                sizeMedium: string
                sizeLarge: string
                sizeHuge: string
                color: string
                opacitySpinning: string
              },
              any
            >
          >
        | undefined
      builtinThemeOverrides?:
        | import('../../_mixins/use-theme').ExtractThemeOverrides<
            import('../../_mixins').Theme<
              'Spin',
              {
                fontSize: string
                textColor: string
                sizeTiny: string
                sizeSmall: string
                sizeMedium: string
                sizeLarge: string
                sizeHuge: string
                color: string
                opacitySpinning: string
              },
              any
            >
          >
        | undefined
      spinning?: boolean | undefined
    }
  >,
  {
    size: number | 'small' | 'medium' | 'large'
    show: boolean
    rotate: boolean
    spinning: boolean
  }
>
export default _default