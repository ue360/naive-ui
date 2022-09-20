import { PropType } from 'vue'
declare const _default: import('vue').DefineComponent<
  {
    clsPrefix: {
      type: StringConstructor
      required: true
    }
    onClick: PropType<(e: MouseEvent) => void>
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
      onClick?: unknown
    } & {
      clsPrefix: string
    } & {
      onClick?: ((e: MouseEvent) => void) | undefined
    }
  >,
  {}
>
export default _default