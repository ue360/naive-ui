import { PropType } from 'vue'
declare const _default: import('vue').DefineComponent<
  {
    duration: {
      type: NumberConstructor
      default: number
    }
    onAfterLeave: FunctionConstructor
    onLeave: FunctionConstructor
    internalKey: {
      type: StringConstructor
      required: true
    }
    onInternalAfterLeave: PropType<(key: string) => void>
    onHide: FunctionConstructor
    onAfterHide: FunctionConstructor
    icon: PropType<() => import('vue').VNodeChild>
    type: {
      readonly type: PropType<import('./message-props').MessageType>
      readonly default: 'info'
    }
    content: PropType<string | number | (() => import('vue').VNodeChild)>
    closable: BooleanConstructor
    keepAliveOnHover: BooleanConstructor
    onClose: PropType<() => void>
    onMouseenter: PropType<(e: MouseEvent) => void>
    onMouseleave: PropType<(e: MouseEvent) => void>
  },
  {
    show: import('vue').Ref<boolean>
    hide: () => void
    handleClose: () => void
    handleAfterLeave: () => void
    handleMouseleave: (e: MouseEvent) => void
    handleMouseenter: (e: MouseEvent) => void
    deactivate: () => void
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
      duration?: unknown
      onAfterLeave?: unknown
      onLeave?: unknown
      internalKey?: unknown
      onInternalAfterLeave?: unknown
      onHide?: unknown
      onAfterHide?: unknown
      icon?: unknown
      type?: unknown
      content?: unknown
      closable?: unknown
      keepAliveOnHover?: unknown
      onClose?: unknown
      onMouseenter?: unknown
      onMouseleave?: unknown
    } & {
      type: import('./message-props').MessageType
      duration: number
      closable: boolean
      internalKey: string
      keepAliveOnHover: boolean
    } & {
      content?: string | number | (() => import('vue').VNodeChild) | undefined
      icon?: (() => import('vue').VNodeChild) | undefined
      onLeave?: Function | undefined
      onAfterLeave?: Function | undefined
      onMouseenter?: ((e: MouseEvent) => void) | undefined
      onMouseleave?: ((e: MouseEvent) => void) | undefined
      onClose?: (() => void) | undefined
      onHide?: Function | undefined
      onAfterHide?: Function | undefined
      onInternalAfterLeave?: ((key: string) => void) | undefined
    }
  >,
  {
    type: import('./message-props').MessageType
    duration: number
    closable: boolean
    keepAliveOnHover: boolean
  }
>
export default _default
