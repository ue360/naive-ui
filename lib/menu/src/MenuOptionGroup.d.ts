import { PropType, InjectionKey } from 'vue'
import type { MenuOptionGroupInjection } from './use-menu-child'
import { TmNode } from './interface'
export declare const menuItemGroupProps: {
  readonly tmNodes: {
    readonly type: PropType<TmNode[]>
    readonly required: true
  }
  readonly internalKey: {
    readonly type: PropType<import('treemate').Key>
    readonly required: true
  }
  readonly root: BooleanConstructor
  readonly isGroup: BooleanConstructor
  readonly level: {
    readonly type: NumberConstructor
    readonly required: true
  }
  readonly title: PropType<string | (() => import('vue').VNodeChild)>
  readonly extra: PropType<string | (() => import('vue').VNodeChild)>
}
export declare const menuItemGroupInjectionKey: InjectionKey<MenuOptionGroupInjection>
declare const _default: import('vue').DefineComponent<
  {
    readonly tmNodes: {
      readonly type: PropType<TmNode[]>
      readonly required: true
    }
    readonly internalKey: {
      readonly type: PropType<import('treemate').Key>
      readonly required: true
    }
    readonly root: BooleanConstructor
    readonly isGroup: BooleanConstructor
    readonly level: {
      readonly type: NumberConstructor
      readonly required: true
    }
    readonly title: PropType<string | (() => import('vue').VNodeChild)>
    readonly extra: PropType<string | (() => import('vue').VNodeChild)>
  },
  () => JSX.Element,
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
      readonly tmNodes?: unknown
      readonly internalKey?: unknown
      readonly root?: unknown
      readonly isGroup?: unknown
      readonly level?: unknown
      readonly title?: unknown
      readonly extra?: unknown
    } & {
      root: boolean
      level: number
      isGroup: boolean
      tmNodes: TmNode[]
      internalKey: import('treemate').Key
    } & {
      extra?: string | (() => import('vue').VNodeChild) | undefined
      title?: string | (() => import('vue').VNodeChild) | undefined
    }
  >,
  {
    root: boolean
    isGroup: boolean
  }
>
export default _default
