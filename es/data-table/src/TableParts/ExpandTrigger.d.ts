import { PropType } from 'vue'
declare const _default: import('vue').DefineComponent<
  {
    clsPrefix: {
      type: StringConstructor
      required: true
    }
    expanded: BooleanConstructor
    onClick: {
      type: PropType<() => void>
      required: true
    }
  },
  unknown,
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
      clsPrefix?: unknown
      expanded?: unknown
      onClick?: unknown
    } & {
      expanded: boolean
      onClick: () => void
      clsPrefix: string
    } & {}
  >,
  {
    expanded: boolean
  }
>
export default _default
