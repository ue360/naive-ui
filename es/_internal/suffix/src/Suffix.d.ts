import { PropType } from 'vue'
declare const _default: import('vue').DefineComponent<
  {
    clsPrefix: {
      type: StringConstructor
      required: true
    }
    showArrow: {
      type: BooleanConstructor
      default: undefined
    }
    showClear: {
      type: BooleanConstructor
      default: undefined
    }
    loading: {
      type: BooleanConstructor
      default: boolean
    }
    onClear: PropType<(e: MouseEvent) => void>
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
      showArrow?: unknown
      showClear?: unknown
      loading?: unknown
      onClear?: unknown
    } & {
      loading: boolean
      clsPrefix: string
    } & {
      showArrow?: boolean | undefined
      onClear?: ((e: MouseEvent) => void) | undefined
      showClear?: boolean | undefined
    }
  >,
  {
    loading: boolean
    showArrow: boolean
    showClear: boolean
  }
>
export default _default
