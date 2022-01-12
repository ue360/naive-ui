import { VNodeChild } from 'vue'
import { MessageType } from './message-props'
declare const _default: import('vue').DefineComponent<
  {
    readonly icon: import('vue').PropType<() => VNodeChild>
    readonly type: {
      readonly type: import('vue').PropType<MessageType>
      readonly default: 'info'
    }
    readonly content: import('vue').PropType<
      string | number | (() => VNodeChild)
    >
    readonly closable: BooleanConstructor
    readonly keepAliveOnHover: BooleanConstructor
    readonly onClose: import('vue').PropType<() => void>
    readonly onMouseenter: import('vue').PropType<(e: MouseEvent) => void>
    readonly onMouseleave: import('vue').PropType<(e: MouseEvent) => void>
  },
  {
    mergedClsPrefix: import('vue').Ref<string>
    handleClose(): void
    cssVars: import('vue').ComputedRef<{
      '--bezier': string
      '--margin': string
      '--padding': string
      '--max-width': string
      '--font-size': string
      '--icon-margin': string
      '--icon-size': string
      '--close-size': string
      '--close-margin': string
      '--text-color': string
      '--color': string
      '--box-shadow': string
      '--icon-color-info': string
      '--icon-color-success': string
      '--icon-color-warning': string
      '--icon-color-error': string
      '--icon-color-loading': string
      '--close-color': string
      '--close-color-pressed': string
      '--close-color-hover': string
      '--line-height': string
      '--border-radius': string
    }>
    placement:
      | 'bottom'
      | 'top'
      | 'top-left'
      | 'top-right'
      | 'bottom-left'
      | 'bottom-right'
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
      readonly icon?: unknown
      readonly type?: unknown
      readonly content?: unknown
      readonly closable?: unknown
      readonly keepAliveOnHover?: unknown
      readonly onClose?: unknown
      readonly onMouseenter?: unknown
      readonly onMouseleave?: unknown
    } & {
      type: MessageType
      closable: boolean
      keepAliveOnHover: boolean
    } & {
      content?: string | number | (() => VNodeChild) | undefined
      icon?: (() => VNodeChild) | undefined
      onMouseenter?: ((e: MouseEvent) => void) | undefined
      onMouseleave?: ((e: MouseEvent) => void) | undefined
      onClose?: (() => void) | undefined
    }
  >,
  {
    type: MessageType
    closable: boolean
    keepAliveOnHover: boolean
  }
>
export default _default
