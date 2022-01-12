import { PropType } from 'vue'
declare const _default: import('vue').DefineComponent<
  {
    clsPrefix: {
      type: StringConstructor
      required: true
    }
    disabled: {
      type: BooleanConstructor
      default: undefined
    }
    onClick: PropType<(e: MouseEvent) => void>
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
      clsPrefix?: unknown
      disabled?: unknown
      onClick?: unknown
    } & {
      clsPrefix: string
    } & {
      disabled?: boolean | undefined
      onClick?: ((e: MouseEvent) => void) | undefined
    }
  >,
  {
    disabled: boolean
  }
>
export default _default
