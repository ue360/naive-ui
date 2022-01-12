import { PropType, CSSProperties } from 'vue'
export declare const exposedDialogEnvProps: {
  readonly internalStyle: PropType<string | CSSProperties>
  readonly maskClosable: {
    readonly type: BooleanConstructor
    readonly default: true
  }
  readonly onPositiveClick: PropType<
    (e: MouseEvent) => Promise<unknown> | unknown
  >
  readonly onNegativeClick: PropType<
    (e: MouseEvent) => Promise<unknown> | unknown
  >
  readonly onClose: PropType<() => Promise<unknown> | unknown>
  readonly onMaskClick: PropType<(e: MouseEvent) => void>
  readonly icon: PropType<() => import('vue').VNodeChild>
  readonly type: {
    readonly type: PropType<
      'default' | 'error' | 'info' | 'success' | 'warning'
    >
    readonly default: 'default'
  }
  readonly title: PropType<string | (() => import('vue').VNodeChild)>
  readonly closable: {
    readonly type: BooleanConstructor
    readonly default: true
  }
  readonly negativeText: StringConstructor
  readonly positiveText: StringConstructor
  readonly content: PropType<string | (() => import('vue').VNodeChild)>
  readonly action: PropType<() => import('vue').VNodeChild>
  readonly showIcon: {
    readonly type: BooleanConstructor
    readonly default: true
  }
  readonly loading: BooleanConstructor
  readonly bordered: BooleanConstructor
  readonly iconPlacement: PropType<import('./interface').IconPlacement>
}
declare const _default: import('vue').DefineComponent<
  {
    internalKey: {
      type: StringConstructor
      required: true
    }
    to: PropType<string | HTMLElement>
    onInternalAfterLeave: {
      type: PropType<(key: string) => void>
      required: true
    }
    internalStyle: PropType<string | CSSProperties>
    maskClosable: {
      readonly type: BooleanConstructor
      readonly default: true
    }
    onPositiveClick: PropType<(e: MouseEvent) => unknown>
    onNegativeClick: PropType<(e: MouseEvent) => unknown>
    onClose: PropType<() => unknown>
    onMaskClick: PropType<(e: MouseEvent) => void>
    icon: PropType<() => import('vue').VNodeChild>
    type: {
      readonly type: PropType<
        'default' | 'error' | 'info' | 'success' | 'warning'
      >
      readonly default: 'default'
    }
    title: PropType<string | (() => import('vue').VNodeChild)>
    closable: {
      readonly type: BooleanConstructor
      readonly default: true
    }
    negativeText: StringConstructor
    positiveText: StringConstructor
    content: PropType<string | (() => import('vue').VNodeChild)>
    action: PropType<() => import('vue').VNodeChild>
    showIcon: {
      readonly type: BooleanConstructor
      readonly default: true
    }
    loading: BooleanConstructor
    bordered: BooleanConstructor
    iconPlacement: PropType<import('./interface').IconPlacement>
  },
  {
    show: import('vue').Ref<boolean>
    hide: () => void
    handleUpdateShow: (value: boolean) => void
    handleAfterLeave: () => void
    handleCloseClick: () => void
    handleNegativeClick: (e: MouseEvent) => void
    handlePositiveClick: (e: MouseEvent) => void
    handleMaskClick: (e: MouseEvent) => void
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
      internalKey?: unknown
      to?: unknown
      onInternalAfterLeave?: unknown
      internalStyle?: unknown
      maskClosable?: unknown
      onPositiveClick?: unknown
      onNegativeClick?: unknown
      onClose?: unknown
      onMaskClick?: unknown
      icon?: unknown
      type?: unknown
      title?: unknown
      closable?: unknown
      negativeText?: unknown
      positiveText?: unknown
      content?: unknown
      action?: unknown
      showIcon?: unknown
      loading?: unknown
      bordered?: unknown
      iconPlacement?: unknown
    } & {
      type: 'default' | 'error' | 'info' | 'success' | 'warning'
      loading: boolean
      bordered: boolean
      closable: boolean
      showIcon: boolean
      maskClosable: boolean
      internalKey: string
      onInternalAfterLeave: (key: string) => void
    } & {
      content?: string | (() => import('vue').VNodeChild) | undefined
      icon?: (() => import('vue').VNodeChild) | undefined
      title?: string | (() => import('vue').VNodeChild) | undefined
      action?: (() => import('vue').VNodeChild) | undefined
      to?: string | HTMLElement | undefined
      positiveText?: string | undefined
      negativeText?: string | undefined
      onClose?: (() => unknown) | undefined
      iconPlacement?: import('./interface').IconPlacement | undefined
      onPositiveClick?: ((e: MouseEvent) => unknown) | undefined
      onNegativeClick?: ((e: MouseEvent) => unknown) | undefined
      onMaskClick?: ((e: MouseEvent) => void) | undefined
      internalStyle?: string | CSSProperties | undefined
    }
  >,
  {
    type: 'default' | 'error' | 'info' | 'success' | 'warning'
    loading: boolean
    bordered: boolean
    closable: boolean
    showIcon: boolean
    maskClosable: boolean
  }
>
export default _default
