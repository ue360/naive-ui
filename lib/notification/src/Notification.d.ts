import { PropType, VNodeChild } from 'vue'
export declare const notificationProps: {
  readonly closable: {
    readonly type: BooleanConstructor
    readonly default: true
  }
  readonly type: {
    readonly type: PropType<
      'default' | 'error' | 'info' | 'success' | 'warning'
    >
    readonly default: 'default'
  }
  readonly avatar: PropType<() => VNodeChild>
  readonly title: PropType<string | (() => VNodeChild)>
  readonly description: PropType<string | (() => VNodeChild)>
  readonly content: PropType<string | (() => VNodeChild)>
  readonly meta: PropType<string | (() => VNodeChild)>
  readonly action: PropType<string | (() => VNodeChild)>
  readonly onClose: {
    readonly type: PropType<() => void>
    readonly required: true
  }
}
export declare const notificationPropKeys: (
  | 'type'
  | 'meta'
  | 'content'
  | 'description'
  | 'title'
  | 'action'
  | 'avatar'
  | 'onClose'
  | 'closable'
)[]
declare const _default: import('vue').DefineComponent<
  {
    readonly closable: {
      readonly type: BooleanConstructor
      readonly default: true
    }
    readonly type: {
      readonly type: PropType<
        'default' | 'error' | 'info' | 'success' | 'warning'
      >
      readonly default: 'default'
    }
    readonly avatar: PropType<() => VNodeChild>
    readonly title: PropType<string | (() => VNodeChild)>
    readonly description: PropType<string | (() => VNodeChild)>
    readonly content: PropType<string | (() => VNodeChild)>
    readonly meta: PropType<string | (() => VNodeChild)>
    readonly action: PropType<string | (() => VNodeChild)>
    readonly onClose: {
      readonly type: PropType<() => void>
      readonly required: true
    }
  },
  {
    mergedClsPrefix: import('vue').Ref<string>
    showAvatar: import('vue').ComputedRef<boolean | (() => VNodeChild)>
    handleCloseClick(): void
    cssVars: import('vue').ComputedRef<{
      '--color': string
      '--font-size': string
      '--text-color': string
      '--description-text-color': string
      '--action-text-color': string
      '--title-text-color': string
      '--title-font-weight': string
      '--bezier': string
      '--bezier-ease-out': string
      '--bezier-ease-in': string
      '--border-radius': string
      '--box-shadow': string
      '--close-color': string
      '--close-color-hover': string
      '--close-color-pressed': string
      '--line-height': string
      '--icon-color': string
      '--close-margin': string
      '--close-size': string
      '--width': string
      '--padding-left': string
      '--padding-right': string
      '--padding-top': string
      '--padding-bottom': string
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
      readonly closable?: unknown
      readonly type?: unknown
      readonly avatar?: unknown
      readonly title?: unknown
      readonly description?: unknown
      readonly content?: unknown
      readonly meta?: unknown
      readonly action?: unknown
      readonly onClose?: unknown
    } & {
      type: 'default' | 'error' | 'info' | 'success' | 'warning'
      onClose: () => void
      closable: boolean
    } & {
      meta?: string | (() => VNodeChild) | undefined
      content?: string | (() => VNodeChild) | undefined
      description?: string | (() => VNodeChild) | undefined
      title?: string | (() => VNodeChild) | undefined
      action?: string | (() => VNodeChild) | undefined
      avatar?: (() => VNodeChild) | undefined
    }
  >,
  {
    type: 'default' | 'error' | 'info' | 'success' | 'warning'
    closable: boolean
  }
>
export default _default
