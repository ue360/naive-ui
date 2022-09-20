import { PropType, VNodeChild } from 'vue'
export declare type MessageType =
  | 'info'
  | 'success'
  | 'warning'
  | 'error'
  | 'loading'
export declare const messageProps: {
  readonly icon: PropType<() => VNodeChild>
  readonly type: {
    readonly type: PropType<MessageType>
    readonly default: 'info'
  }
  readonly content: PropType<string | number | (() => VNodeChild)>
  readonly closable: BooleanConstructor
  readonly keepAliveOnHover: BooleanConstructor
  readonly onClose: PropType<() => void>
  readonly onMouseenter: PropType<(e: MouseEvent) => void>
  readonly onMouseleave: PropType<(e: MouseEvent) => void>
}