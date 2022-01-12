import {
  VNodeChild,
  InjectionKey,
  ExtractPropTypes,
  Ref,
  PropType,
  CSSProperties
} from 'vue'
import { ExtractPublicPropTypes } from '../../_utils'
export interface MessageOptions {
  duration?: number
  closable?: boolean
  keepAliveOnHover?: boolean
  icon?: () => VNodeChild
  onClose?: () => void
  onLeave?: () => void
  onAfterLeave?: () => void
}
declare type ContentType = string | (() => VNodeChild)
export interface MessageApiInjection {
  info: (content: ContentType, options?: MessageOptions) => MessageReactive
  success: (content: ContentType, options?: MessageOptions) => MessageReactive
  warning: (content: ContentType, options?: MessageOptions) => MessageReactive
  error: (content: ContentType, options?: MessageOptions) => MessageReactive
  loading: (content: ContentType, options?: MessageOptions) => MessageReactive
  destroyAll: () => void
}
export declare const messageApiInjectionKey: InjectionKey<MessageApiInjection>
export interface MessageReactive {
  content?: ContentType
  duration?: number
  closable?: boolean
  keepAliveOnHover?: boolean
  icon?: () => VNodeChild
  onClose?: () => void
  destroy: () => void
}
export declare type MessageProviderInst = MessageApiInjection
declare const messageProviderProps: {
  to: PropType<string | HTMLElement>
  duration: {
    type: NumberConstructor
    default: number
  }
  keepAliveOnHover: BooleanConstructor
  max: NumberConstructor
  placement: {
    type: PropType<
      | 'bottom'
      | 'top'
      | 'top-left'
      | 'top-right'
      | 'bottom-left'
      | 'bottom-right'
    >
    default: string
  }
  closable: BooleanConstructor
  containerStyle: PropType<string | CSSProperties>
  theme: PropType<
    import('../../_mixins').Theme<
      'Message',
      {
        textColorInfo: string
        textColorSuccess: string
        textColorError: string
        textColorWarning: string
        textColorLoading: string
        colorInfo: string
        colorSuccess: string
        colorError: string
        colorWarning: string
        colorLoading: string
        boxShadowInfo: string
        boxShadowSuccess: string
        boxShadowError: string
        boxShadowWarning: string
        boxShadowLoading: string
        iconColorInfo: string
        iconColorSuccess: string
        iconColorWarning: string
        iconColorError: string
        iconColorLoading: string
        closeColorInfo: string
        closeColorHoverInfo: string
        closeColorPressedInfo: string
        closeColorSuccess: string
        closeColorHoverSuccess: string
        closeColorPressedSuccess: string
        closeColorError: string
        closeColorHoverError: string
        closeColorPressedError: string
        closeColorWarning: string
        closeColorHoverWarning: string
        closeColorPressedWarning: string
        closeColorLoading: string
        closeColorHoverLoading: string
        closeColorPressedLoading: string
        loadingColor: string
        lineHeight: string
        borderRadius: string
        margin: string
        padding: string
        maxWidth: string
        minWidth: string
        iconMargin: string
        closeMargin: string
        closeSize: string
        iconSize: string
        fontSize: string
      },
      any
    >
  >
  themeOverrides: PropType<
    import('../../_mixins/use-theme').ExtractThemeOverrides<
      import('../../_mixins').Theme<
        'Message',
        {
          textColorInfo: string
          textColorSuccess: string
          textColorError: string
          textColorWarning: string
          textColorLoading: string
          colorInfo: string
          colorSuccess: string
          colorError: string
          colorWarning: string
          colorLoading: string
          boxShadowInfo: string
          boxShadowSuccess: string
          boxShadowError: string
          boxShadowWarning: string
          boxShadowLoading: string
          iconColorInfo: string
          iconColorSuccess: string
          iconColorWarning: string
          iconColorError: string
          iconColorLoading: string
          closeColorInfo: string
          closeColorHoverInfo: string
          closeColorPressedInfo: string
          closeColorSuccess: string
          closeColorHoverSuccess: string
          closeColorPressedSuccess: string
          closeColorError: string
          closeColorHoverError: string
          closeColorPressedError: string
          closeColorWarning: string
          closeColorHoverWarning: string
          closeColorPressedWarning: string
          closeColorLoading: string
          closeColorHoverLoading: string
          closeColorPressedLoading: string
          loadingColor: string
          lineHeight: string
          borderRadius: string
          margin: string
          padding: string
          maxWidth: string
          minWidth: string
          iconMargin: string
          closeMargin: string
          closeSize: string
          iconSize: string
          fontSize: string
        },
        any
      >
    >
  >
  builtinThemeOverrides: PropType<
    import('../../_mixins/use-theme').ExtractThemeOverrides<
      import('../../_mixins').Theme<
        'Message',
        {
          textColorInfo: string
          textColorSuccess: string
          textColorError: string
          textColorWarning: string
          textColorLoading: string
          colorInfo: string
          colorSuccess: string
          colorError: string
          colorWarning: string
          colorLoading: string
          boxShadowInfo: string
          boxShadowSuccess: string
          boxShadowError: string
          boxShadowWarning: string
          boxShadowLoading: string
          iconColorInfo: string
          iconColorSuccess: string
          iconColorWarning: string
          iconColorError: string
          iconColorLoading: string
          closeColorInfo: string
          closeColorHoverInfo: string
          closeColorPressedInfo: string
          closeColorSuccess: string
          closeColorHoverSuccess: string
          closeColorPressedSuccess: string
          closeColorError: string
          closeColorHoverError: string
          closeColorPressedError: string
          closeColorWarning: string
          closeColorHoverWarning: string
          closeColorPressedWarning: string
          closeColorLoading: string
          closeColorHoverLoading: string
          closeColorPressedLoading: string
          loadingColor: string
          lineHeight: string
          borderRadius: string
          margin: string
          padding: string
          maxWidth: string
          minWidth: string
          iconMargin: string
          closeMargin: string
          closeSize: string
          iconSize: string
          fontSize: string
        },
        any
      >
    >
  >
}
export declare type MessageProviderProps = ExtractPublicPropTypes<
  typeof messageProviderProps
>
declare type MessageProviderSetupProps = ExtractPropTypes<
  typeof messageProviderProps
>
export declare const messageProviderInjectionKey: InjectionKey<{
  props: MessageProviderSetupProps
  mergedClsPrefixRef: Ref<string>
}>
declare const _default: import('vue').DefineComponent<
  {
    to: PropType<string | HTMLElement>
    duration: {
      type: NumberConstructor
      default: number
    }
    keepAliveOnHover: BooleanConstructor
    max: NumberConstructor
    placement: {
      type: PropType<
        | 'bottom'
        | 'top'
        | 'top-left'
        | 'top-right'
        | 'bottom-left'
        | 'bottom-right'
      >
      default: string
    }
    closable: BooleanConstructor
    containerStyle: PropType<string | CSSProperties>
    theme: PropType<
      import('../../_mixins').Theme<
        'Message',
        {
          textColorInfo: string
          textColorSuccess: string
          textColorError: string
          textColorWarning: string
          textColorLoading: string
          colorInfo: string
          colorSuccess: string
          colorError: string
          colorWarning: string
          colorLoading: string
          boxShadowInfo: string
          boxShadowSuccess: string
          boxShadowError: string
          boxShadowWarning: string
          boxShadowLoading: string
          iconColorInfo: string
          iconColorSuccess: string
          iconColorWarning: string
          iconColorError: string
          iconColorLoading: string
          closeColorInfo: string
          closeColorHoverInfo: string
          closeColorPressedInfo: string
          closeColorSuccess: string
          closeColorHoverSuccess: string
          closeColorPressedSuccess: string
          closeColorError: string
          closeColorHoverError: string
          closeColorPressedError: string
          closeColorWarning: string
          closeColorHoverWarning: string
          closeColorPressedWarning: string
          closeColorLoading: string
          closeColorHoverLoading: string
          closeColorPressedLoading: string
          loadingColor: string
          lineHeight: string
          borderRadius: string
          margin: string
          padding: string
          maxWidth: string
          minWidth: string
          iconMargin: string
          closeMargin: string
          closeSize: string
          iconSize: string
          fontSize: string
        },
        any
      >
    >
    themeOverrides: PropType<
      import('../../_mixins/use-theme').ExtractThemeOverrides<
        import('../../_mixins').Theme<
          'Message',
          {
            textColorInfo: string
            textColorSuccess: string
            textColorError: string
            textColorWarning: string
            textColorLoading: string
            colorInfo: string
            colorSuccess: string
            colorError: string
            colorWarning: string
            colorLoading: string
            boxShadowInfo: string
            boxShadowSuccess: string
            boxShadowError: string
            boxShadowWarning: string
            boxShadowLoading: string
            iconColorInfo: string
            iconColorSuccess: string
            iconColorWarning: string
            iconColorError: string
            iconColorLoading: string
            closeColorInfo: string
            closeColorHoverInfo: string
            closeColorPressedInfo: string
            closeColorSuccess: string
            closeColorHoverSuccess: string
            closeColorPressedSuccess: string
            closeColorError: string
            closeColorHoverError: string
            closeColorPressedError: string
            closeColorWarning: string
            closeColorHoverWarning: string
            closeColorPressedWarning: string
            closeColorLoading: string
            closeColorHoverLoading: string
            closeColorPressedLoading: string
            loadingColor: string
            lineHeight: string
            borderRadius: string
            margin: string
            padding: string
            maxWidth: string
            minWidth: string
            iconMargin: string
            closeMargin: string
            closeSize: string
            iconSize: string
            fontSize: string
          },
          any
        >
      >
    >
    builtinThemeOverrides: PropType<
      import('../../_mixins/use-theme').ExtractThemeOverrides<
        import('../../_mixins').Theme<
          'Message',
          {
            textColorInfo: string
            textColorSuccess: string
            textColorError: string
            textColorWarning: string
            textColorLoading: string
            colorInfo: string
            colorSuccess: string
            colorError: string
            colorWarning: string
            colorLoading: string
            boxShadowInfo: string
            boxShadowSuccess: string
            boxShadowError: string
            boxShadowWarning: string
            boxShadowLoading: string
            iconColorInfo: string
            iconColorSuccess: string
            iconColorWarning: string
            iconColorError: string
            iconColorLoading: string
            closeColorInfo: string
            closeColorHoverInfo: string
            closeColorPressedInfo: string
            closeColorSuccess: string
            closeColorHoverSuccess: string
            closeColorPressedSuccess: string
            closeColorError: string
            closeColorHoverError: string
            closeColorPressedError: string
            closeColorWarning: string
            closeColorHoverWarning: string
            closeColorPressedWarning: string
            closeColorLoading: string
            closeColorHoverLoading: string
            closeColorPressedLoading: string
            loadingColor: string
            lineHeight: string
            borderRadius: string
            margin: string
            padding: string
            maxWidth: string
            minWidth: string
            iconMargin: string
            closeMargin: string
            closeSize: string
            iconSize: string
            fontSize: string
          },
          any
        >
      >
    >
  },
  {
    mergedClsPrefix: import('vue').ComputedRef<string>
    messageRefs: Ref<{
      [x: string]: {
        key: string
        hide: () => void
        content?: ContentType | undefined
        duration?: number | undefined
        closable?: boolean | undefined
        keepAliveOnHover?: boolean | undefined
        icon?: (() => VNodeChild) | undefined
        onClose?: (() => void) | undefined
        destroy: () => void
      }
    }>
    messageList: Ref<
      {
        key: string
        content?: ContentType | undefined
        duration?: number | undefined
        closable?: boolean | undefined
        keepAliveOnHover?: boolean | undefined
        icon?: (() => VNodeChild) | undefined
        onClose?: (() => void) | undefined
        destroy: () => void
      }[]
    >
    handleAfterLeave: (key: string) => void
  } & MessageApiInjection,
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
      duration?: unknown
      keepAliveOnHover?: unknown
      max?: unknown
      placement?: unknown
      closable?: unknown
      containerStyle?: unknown
      theme?: unknown
      themeOverrides?: unknown
      builtinThemeOverrides?: unknown
    } & {
      duration: number
      placement:
        | 'bottom'
        | 'top'
        | 'top-left'
        | 'top-right'
        | 'bottom-left'
        | 'bottom-right'
      closable: boolean
      keepAliveOnHover: boolean
    } & {
      max?: number | undefined
      to?: string | HTMLElement | undefined
      theme?:
        | import('../../_mixins').Theme<
            'Message',
            {
              textColorInfo: string
              textColorSuccess: string
              textColorError: string
              textColorWarning: string
              textColorLoading: string
              colorInfo: string
              colorSuccess: string
              colorError: string
              colorWarning: string
              colorLoading: string
              boxShadowInfo: string
              boxShadowSuccess: string
              boxShadowError: string
              boxShadowWarning: string
              boxShadowLoading: string
              iconColorInfo: string
              iconColorSuccess: string
              iconColorWarning: string
              iconColorError: string
              iconColorLoading: string
              closeColorInfo: string
              closeColorHoverInfo: string
              closeColorPressedInfo: string
              closeColorSuccess: string
              closeColorHoverSuccess: string
              closeColorPressedSuccess: string
              closeColorError: string
              closeColorHoverError: string
              closeColorPressedError: string
              closeColorWarning: string
              closeColorHoverWarning: string
              closeColorPressedWarning: string
              closeColorLoading: string
              closeColorHoverLoading: string
              closeColorPressedLoading: string
              loadingColor: string
              lineHeight: string
              borderRadius: string
              margin: string
              padding: string
              maxWidth: string
              minWidth: string
              iconMargin: string
              closeMargin: string
              closeSize: string
              iconSize: string
              fontSize: string
            },
            any
          >
        | undefined
      themeOverrides?:
        | import('../../_mixins/use-theme').ExtractThemeOverrides<
            import('../../_mixins').Theme<
              'Message',
              {
                textColorInfo: string
                textColorSuccess: string
                textColorError: string
                textColorWarning: string
                textColorLoading: string
                colorInfo: string
                colorSuccess: string
                colorError: string
                colorWarning: string
                colorLoading: string
                boxShadowInfo: string
                boxShadowSuccess: string
                boxShadowError: string
                boxShadowWarning: string
                boxShadowLoading: string
                iconColorInfo: string
                iconColorSuccess: string
                iconColorWarning: string
                iconColorError: string
                iconColorLoading: string
                closeColorInfo: string
                closeColorHoverInfo: string
                closeColorPressedInfo: string
                closeColorSuccess: string
                closeColorHoverSuccess: string
                closeColorPressedSuccess: string
                closeColorError: string
                closeColorHoverError: string
                closeColorPressedError: string
                closeColorWarning: string
                closeColorHoverWarning: string
                closeColorPressedWarning: string
                closeColorLoading: string
                closeColorHoverLoading: string
                closeColorPressedLoading: string
                loadingColor: string
                lineHeight: string
                borderRadius: string
                margin: string
                padding: string
                maxWidth: string
                minWidth: string
                iconMargin: string
                closeMargin: string
                closeSize: string
                iconSize: string
                fontSize: string
              },
              any
            >
          >
        | undefined
      builtinThemeOverrides?:
        | import('../../_mixins/use-theme').ExtractThemeOverrides<
            import('../../_mixins').Theme<
              'Message',
              {
                textColorInfo: string
                textColorSuccess: string
                textColorError: string
                textColorWarning: string
                textColorLoading: string
                colorInfo: string
                colorSuccess: string
                colorError: string
                colorWarning: string
                colorLoading: string
                boxShadowInfo: string
                boxShadowSuccess: string
                boxShadowError: string
                boxShadowWarning: string
                boxShadowLoading: string
                iconColorInfo: string
                iconColorSuccess: string
                iconColorWarning: string
                iconColorError: string
                iconColorLoading: string
                closeColorInfo: string
                closeColorHoverInfo: string
                closeColorPressedInfo: string
                closeColorSuccess: string
                closeColorHoverSuccess: string
                closeColorPressedSuccess: string
                closeColorError: string
                closeColorHoverError: string
                closeColorPressedError: string
                closeColorWarning: string
                closeColorHoverWarning: string
                closeColorPressedWarning: string
                closeColorLoading: string
                closeColorHoverLoading: string
                closeColorPressedLoading: string
                loadingColor: string
                lineHeight: string
                borderRadius: string
                margin: string
                padding: string
                maxWidth: string
                minWidth: string
                iconMargin: string
                closeMargin: string
                closeSize: string
                iconSize: string
                fontSize: string
              },
              any
            >
          >
        | undefined
      containerStyle?: string | CSSProperties | undefined
    }
  >,
  {
    duration: number
    placement:
      | 'bottom'
      | 'top'
      | 'top-left'
      | 'top-right'
      | 'bottom-left'
      | 'bottom-right'
    closable: boolean
    keepAliveOnHover: boolean
  }
>
export default _default
