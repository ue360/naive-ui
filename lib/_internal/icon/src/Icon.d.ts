import { PropType } from 'vue'
declare const _default: import('vue').DefineComponent<
  {
    role: StringConstructor
    ariaLabel: StringConstructor
    ariaDisabled: {
      type: BooleanConstructor
      default: undefined
    }
    ariaHidden: {
      type: BooleanConstructor
      default: undefined
    }
    clsPrefix: {
      type: StringConstructor
      required: true
    }
    onClick: PropType<(e: MouseEvent) => void>
    onMousedown: PropType<(e: MouseEvent) => void>
    onMouseup: PropType<(e: MouseEvent) => void>
  },
  void,
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
      role?: unknown
      ariaLabel?: unknown
      ariaDisabled?: unknown
      ariaHidden?: unknown
      clsPrefix?: unknown
      onClick?: unknown
      onMousedown?: unknown
      onMouseup?: unknown
    } & {
      clsPrefix: string
    } & {
      onClick?: ((e: MouseEvent) => void) | undefined
      onMousedown?: ((e: MouseEvent) => void) | undefined
      onMouseup?: ((e: MouseEvent) => void) | undefined
      role?: string | undefined
      ariaLabel?: string | undefined
      ariaDisabled?: boolean | undefined
      ariaHidden?: boolean | undefined
    }
  >,
  {
    ariaDisabled: boolean
    ariaHidden: boolean
  }
>
export default _default