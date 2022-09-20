import {
  PropType,
  ExtractPropTypes,
  InjectionKey,
  Ref,
  CSSProperties
} from 'vue'
import type { ExtractPublicPropTypes } from '../../_utils'
interface LoadingBarInst {
  start: () => void
  error: () => void
  finish: () => void
}
export declare type LoadingBarProviderInst = LoadingBarInst
export declare type LoadingBarApiInjection = LoadingBarInst
declare const loadingBarProps: {
  to: {
    type: PropType<string | HTMLElement>
    default: undefined
  }
  loadingBarStyle: {
    type: PropType<{
      loading?: string | CSSProperties | undefined
      error?: string | CSSProperties | undefined
    }>
  }
  theme: PropType<
    import('../../_mixins').Theme<
      'LoadingBar',
      {
        colorError: string
        colorLoading: string
        height: string
      },
      any
    >
  >
  themeOverrides: PropType<
    import('../../_mixins/use-theme').ExtractThemeOverrides<
      import('../../_mixins').Theme<
        'LoadingBar',
        {
          colorError: string
          colorLoading: string
          height: string
        },
        any
      >
    >
  >
  builtinThemeOverrides: PropType<
    import('../../_mixins/use-theme').ExtractThemeOverrides<
      import('../../_mixins').Theme<
        'LoadingBar',
        {
          colorError: string
          colorLoading: string
          height: string
        },
        any
      >
    >
  >
}
export declare type LoadingBarProviderProps = ExtractPublicPropTypes<
  typeof loadingBarProps
>
export declare type LoadingBarProviderSetupProps = ExtractPropTypes<
  typeof loadingBarProps
>
export declare const loadingBarProviderInjectionKey: InjectionKey<{
  props: LoadingBarProviderSetupProps
  mergedClsPrefixRef: Ref<string>
}>
export declare const loadingBarApiInjectionKey: InjectionKey<LoadingBarApiInjection>
declare const _default: import('vue').DefineComponent<
  {
    to: {
      type: PropType<string | HTMLElement>
      default: undefined
    }
    loadingBarStyle: {
      type: PropType<{
        loading?: string | CSSProperties | undefined
        error?: string | CSSProperties | undefined
      }>
    }
    theme: PropType<
      import('../../_mixins').Theme<
        'LoadingBar',
        {
          colorError: string
          colorLoading: string
          height: string
        },
        any
      >
    >
    themeOverrides: PropType<
      import('../../_mixins/use-theme').ExtractThemeOverrides<
        import('../../_mixins').Theme<
          'LoadingBar',
          {
            colorError: string
            colorLoading: string
            height: string
          },
          any
        >
      >
    >
    builtinThemeOverrides: PropType<
      import('../../_mixins/use-theme').ExtractThemeOverrides<
        import('../../_mixins').Theme<
          'LoadingBar',
          {
            colorError: string
            colorLoading: string
            height: string
          },
          any
        >
      >
    >
  },
  LoadingBarInst & {
    loadingBarRef: Ref<{
      start: () => void
      error: () => void
      finish: () => void
    } | null>
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
      to?: unknown
      loadingBarStyle?: unknown
      theme?: unknown
      themeOverrides?: unknown
      builtinThemeOverrides?: unknown
    } & {} & {
      to?: string | HTMLElement | undefined
      theme?:
        | import('../../_mixins').Theme<
            'LoadingBar',
            {
              colorError: string
              colorLoading: string
              height: string
            },
            any
          >
        | undefined
      themeOverrides?:
        | import('../../_mixins/use-theme').ExtractThemeOverrides<
            import('../../_mixins').Theme<
              'LoadingBar',
              {
                colorError: string
                colorLoading: string
                height: string
              },
              any
            >
          >
        | undefined
      builtinThemeOverrides?:
        | import('../../_mixins/use-theme').ExtractThemeOverrides<
            import('../../_mixins').Theme<
              'LoadingBar',
              {
                colorError: string
                colorLoading: string
                height: string
              },
              any
            >
          >
        | undefined
      loadingBarStyle?:
        | {
            loading?: string | CSSProperties | undefined
            error?: string | CSSProperties | undefined
          }
        | undefined
    }
  >,
  {
    to: string | HTMLElement
  }
>
export default _default