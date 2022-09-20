import { PropType } from 'vue'
import type { ExtractPublicPropTypes } from '../../_utils'
declare const backTopProps: {
  readonly show: {
    readonly type: PropType<boolean | undefined>
    readonly default: undefined
  }
  readonly right: {
    readonly type: PropType<string | number>
    readonly default: 40
  }
  readonly bottom: {
    readonly type: PropType<string | number>
    readonly default: 40
  }
  readonly to: {
    readonly type: PropType<string | HTMLElement>
    readonly default: 'body'
  }
  readonly visibilityHeight: {
    readonly type: NumberConstructor
    readonly default: 180
  }
  readonly listenTo: PropType<string | HTMLElement | (() => HTMLElement)>
  readonly 'onUpdate:show': {
    readonly type: FunctionConstructor
    readonly default: () => void
  }
  readonly target: {
    readonly type: PropType<() => HTMLElement | undefined>
    readonly validator: () => boolean
    readonly default: undefined
  }
  readonly onShow: {
    readonly type: PropType<(() => void) | undefined>
    readonly validator: () => boolean
    readonly default: undefined
  }
  readonly onHide: {
    readonly type: PropType<(() => void) | undefined>
    readonly validator: () => boolean
    readonly default: undefined
  }
  readonly theme: PropType<
    import('../../_mixins').Theme<
      'BackTop',
      {
        color: string
        textColor: string
        iconColor: string
        iconColorHover: string
        iconColorPressed: string
        boxShadow: string
        boxShadowHover: string
        boxShadowPressed: string
        width: string
        height: string
        borderRadius: string
        iconSize: string
      },
      any
    >
  >
  readonly themeOverrides: PropType<
    import('../../_mixins/use-theme').ExtractThemeOverrides<
      import('../../_mixins').Theme<
        'BackTop',
        {
          color: string
          textColor: string
          iconColor: string
          iconColorHover: string
          iconColorPressed: string
          boxShadow: string
          boxShadowHover: string
          boxShadowPressed: string
          width: string
          height: string
          borderRadius: string
          iconSize: string
        },
        any
      >
    >
  >
  readonly builtinThemeOverrides: PropType<
    import('../../_mixins/use-theme').ExtractThemeOverrides<
      import('../../_mixins').Theme<
        'BackTop',
        {
          color: string
          textColor: string
          iconColor: string
          iconColorHover: string
          iconColorPressed: string
          boxShadow: string
          boxShadowHover: string
          boxShadowPressed: string
          width: string
          height: string
          borderRadius: string
          iconSize: string
        },
        any
      >
    >
  >
}
export declare type BackTopProps = ExtractPublicPropTypes<typeof backTopProps>
declare const _default: import('vue').DefineComponent<
  {
    readonly show: {
      readonly type: PropType<boolean | undefined>
      readonly default: undefined
    }
    readonly right: {
      readonly type: PropType<string | number>
      readonly default: 40
    }
    readonly bottom: {
      readonly type: PropType<string | number>
      readonly default: 40
    }
    readonly to: {
      readonly type: PropType<string | HTMLElement>
      readonly default: 'body'
    }
    readonly visibilityHeight: {
      readonly type: NumberConstructor
      readonly default: 180
    }
    readonly listenTo: PropType<string | HTMLElement | (() => HTMLElement)>
    readonly 'onUpdate:show': {
      readonly type: FunctionConstructor
      readonly default: () => void
    }
    readonly target: {
      readonly type: PropType<() => HTMLElement | undefined>
      readonly validator: () => boolean
      readonly default: undefined
    }
    readonly onShow: {
      readonly type: PropType<(() => void) | undefined>
      readonly validator: () => boolean
      readonly default: undefined
    }
    readonly onHide: {
      readonly type: PropType<(() => void) | undefined>
      readonly validator: () => boolean
      readonly default: undefined
    }
    readonly theme: PropType<
      import('../../_mixins').Theme<
        'BackTop',
        {
          color: string
          textColor: string
          iconColor: string
          iconColorHover: string
          iconColorPressed: string
          boxShadow: string
          boxShadowHover: string
          boxShadowPressed: string
          width: string
          height: string
          borderRadius: string
          iconSize: string
        },
        any
      >
    >
    readonly themeOverrides: PropType<
      import('../../_mixins/use-theme').ExtractThemeOverrides<
        import('../../_mixins').Theme<
          'BackTop',
          {
            color: string
            textColor: string
            iconColor: string
            iconColorHover: string
            iconColorPressed: string
            boxShadow: string
            boxShadowHover: string
            boxShadowPressed: string
            width: string
            height: string
            borderRadius: string
            iconSize: string
          },
          any
        >
      >
    >
    readonly builtinThemeOverrides: PropType<
      import('../../_mixins/use-theme').ExtractThemeOverrides<
        import('../../_mixins').Theme<
          'BackTop',
          {
            color: string
            textColor: string
            iconColor: string
            iconColorHover: string
            iconColorPressed: string
            boxShadow: string
            boxShadowHover: string
            boxShadowPressed: string
            width: string
            height: string
            borderRadius: string
            iconSize: string
          },
          any
        >
      >
    >
  },
  {
    placeholderRef: import('vue').Ref<HTMLElement | null>
    style: import('vue').ComputedRef<{
      right: string
      bottom: string
    }>
    mergedShow: import('vue').ComputedRef<boolean>
    isMounted: Readonly<import('vue').Ref<boolean>>
    scrollElement: import('vue').Ref<null>
    scrollTop: import('vue').Ref<number | null>
    DomInfoReady: import('vue').Ref<boolean>
    transitionDisabled: import('vue').Ref<boolean>
    mergedClsPrefix: import('vue').ComputedRef<string>
    handleAfterEnter: () => void
    handleScroll: () => void
    handleClick: (e: MouseEvent) => void
    cssVars: import('vue').ComputedRef<{
      '--bezier': string
      '--border-radius': string
      '--height': string
      '--width': string
      '--box-shadow': string
      '--box-shadow-hover': string
      '--box-shadow-pressed': string
      '--color': string
      '--icon-size': string
      '--icon-color': string
      '--icon-color-hover': string
      '--icon-color-pressed': string
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
      readonly show?: unknown
      readonly right?: unknown
      readonly bottom?: unknown
      readonly to?: unknown
      readonly visibilityHeight?: unknown
      readonly listenTo?: unknown
      readonly 'onUpdate:show'?: unknown
      readonly target?: unknown
      readonly onShow?: unknown
      readonly onHide?: unknown
      readonly theme?: unknown
      readonly themeOverrides?: unknown
      readonly builtinThemeOverrides?: unknown
    } & {
      right: string | number
      bottom: string | number
      to: string | HTMLElement
      'onUpdate:show': Function
      visibilityHeight: number
    } & {
      show?: boolean | undefined
      target?: (() => HTMLElement | undefined) | undefined
      theme?:
        | import('../../_mixins').Theme<
            'BackTop',
            {
              color: string
              textColor: string
              iconColor: string
              iconColorHover: string
              iconColorPressed: string
              boxShadow: string
              boxShadowHover: string
              boxShadowPressed: string
              width: string
              height: string
              borderRadius: string
              iconSize: string
            },
            any
          >
        | undefined
      themeOverrides?:
        | import('../../_mixins/use-theme').ExtractThemeOverrides<
            import('../../_mixins').Theme<
              'BackTop',
              {
                color: string
                textColor: string
                iconColor: string
                iconColorHover: string
                iconColorPressed: string
                boxShadow: string
                boxShadowHover: string
                boxShadowPressed: string
                width: string
                height: string
                borderRadius: string
                iconSize: string
              },
              any
            >
          >
        | undefined
      builtinThemeOverrides?:
        | import('../../_mixins/use-theme').ExtractThemeOverrides<
            import('../../_mixins').Theme<
              'BackTop',
              {
                color: string
                textColor: string
                iconColor: string
                iconColorHover: string
                iconColorPressed: string
                boxShadow: string
                boxShadowHover: string
                boxShadowPressed: string
                width: string
                height: string
                borderRadius: string
                iconSize: string
              },
              any
            >
          >
        | undefined
      onShow?: (() => void) | undefined
      onHide?: (() => void) | undefined
      listenTo?: string | HTMLElement | (() => HTMLElement) | undefined
    }
  >,
  {
    right: string | number
    bottom: string | number
    show: boolean | undefined
    target: () => HTMLElement | undefined
    to: string | HTMLElement
    'onUpdate:show': Function
    onShow: (() => void) | undefined
    onHide: (() => void) | undefined
    visibilityHeight: number
  }
>
export default _default