import { PropType } from 'vue'
declare const _default: import('vue').DefineComponent<
  {
    appear: BooleanConstructor
    group: BooleanConstructor
    mode: PropType<'default' | 'in-out' | 'out-in'>
    onLeave: FunctionConstructor
    onAfterLeave: FunctionConstructor
    onAfterEnter: FunctionConstructor
    width: BooleanConstructor
    reverse: BooleanConstructor
  },
  () => import('vue').VNode<
    import('vue').RendererNode,
    import('vue').RendererElement,
    {
      [key: string]: any
    }
  >,
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
      appear?: unknown
      group?: unknown
      mode?: unknown
      onLeave?: unknown
      onAfterLeave?: unknown
      onAfterEnter?: unknown
      width?: unknown
      reverse?: unknown
    } & {
      reverse: boolean
      width: boolean
      appear: boolean
      group: boolean
    } & {
      mode?: 'default' | 'in-out' | 'out-in' | undefined
      onAfterEnter?: Function | undefined
      onLeave?: Function | undefined
      onAfterLeave?: Function | undefined
    }
  >,
  {
    reverse: boolean
    width: boolean
    appear: boolean
    group: boolean
  }
>
export default _default