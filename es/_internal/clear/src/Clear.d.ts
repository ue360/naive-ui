import { PropType } from 'vue'
declare const _default: import('vue').DefineComponent<
  {
    clsPrefix: {
      type: StringConstructor
      required: true
    }
    show: BooleanConstructor
    onClear: PropType<(e: MouseEvent) => void>
  },
  {
    NConfigProvider:
      | import('../../../config-provider/src/internal-interface').ConfigProviderInjection
      | null
    handleMouseDown(e: MouseEvent): void
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
      clsPrefix?: unknown
      show?: unknown
      onClear?: unknown
    } & {
      show: boolean
      clsPrefix: string
    } & {
      onClear?: ((e: MouseEvent) => void) | undefined
    }
  >,
  {
    show: boolean
  }
>
export default _default
