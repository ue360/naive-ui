import {
  ExtractPropTypes,
  PropType,
  InjectionKey,
  Ref,
  CSSProperties
} from 'vue'
import type { ExtractPublicPropTypes, Mutable } from '../../_utils'
import { exposedDialogEnvProps } from './DialogEnvironment'
export declare type DialogOptions = Mutable<
  Omit<
    Partial<ExtractPropTypes<typeof exposedDialogEnvProps>>,
    'internalStyle'
  > & {
    style?: string | CSSProperties
  }
>
export declare type DialogReactive = {
  readonly key: string
  readonly destroy: () => void
} & DialogOptions
export interface DialogApiInjection {
  destroyAll: () => void
  create: (options: DialogOptions) => DialogReactive
  success: (options: DialogOptions) => DialogReactive
  warning: (options: DialogOptions) => DialogReactive
  error: (options: DialogOptions) => DialogReactive
  info: (options: DialogOptions) => DialogReactive
}
export declare const dialogApiInjectionKey: InjectionKey<DialogApiInjection>
export interface DialogProviderInjection {
  clickedRef: Ref<boolean>
  clickPositionRef: Ref<{
    x: number
    y: number
  } | null>
}
export declare const dialogProviderInjectionKey: InjectionKey<DialogProviderInjection>
interface DialogInst {
  hide: () => void
}
export declare type DialogProviderInst = DialogApiInjection
declare const dialogProviderProps: {
  injectionKey: StringConstructor
  to: PropType<string | HTMLElement>
}
export declare type DialogProviderProps = ExtractPublicPropTypes<
  typeof dialogProviderProps
>
declare const _default: import('vue').DefineComponent<
  {
    injectionKey: StringConstructor
    to: PropType<string | HTMLElement>
  },
  {
    dialogList: Ref<
      {
        readonly key: string
        readonly destroy: () => void
        type?: 'default' | 'error' | 'info' | 'success' | 'warning' | undefined
        content?: string | (() => import('vue').VNodeChild) | undefined
        icon?: (() => import('vue').VNodeChild) | undefined
        title?: string | (() => import('vue').VNodeChild) | undefined
        action?: (() => import('vue').VNodeChild) | undefined
        positiveText?: string | undefined
        negativeText?: string | undefined
        loading?: boolean | undefined
        bordered?: boolean | undefined
        onClose?: (() => unknown) | undefined
        closable?: boolean | undefined
        showIcon?: boolean | undefined
        iconPlacement?: import('./interface').IconPlacement | undefined
        onPositiveClick?: ((e: MouseEvent) => unknown) | undefined
        onNegativeClick?: ((e: MouseEvent) => unknown) | undefined
        onMaskClick?: ((e: MouseEvent) => void) | undefined
        maskClosable?: boolean | undefined
        style?: any
      }[]
    >
    dialogInstRefs: Record<string, DialogInst>
    handleAfterLeave: (key: String) => void
    create: (options?: DialogOptions) => DialogReactive
    destroyAll: () => void
    info: (options: DialogOptions) => DialogReactive
    success: (options: DialogOptions) => DialogReactive
    warning: (options: DialogOptions) => DialogReactive
    error: (options: DialogOptions) => DialogReactive
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
      injectionKey?: unknown
      to?: unknown
    } & {} & {
      to?: string | HTMLElement | undefined
      injectionKey?: string | undefined
    }
  >,
  {}
>
export default _default
