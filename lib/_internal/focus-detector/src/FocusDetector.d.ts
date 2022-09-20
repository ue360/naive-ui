import { PropType } from 'vue'
declare const _default: import('vue').DefineComponent<
  {
    onFocus: PropType<(e: FocusEvent) => void>
    onBlur: PropType<(e: FocusEvent) => void>
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
      onFocus?: unknown
      onBlur?: unknown
    } & {} & {
      onFocus?: ((e: FocusEvent) => void) | undefined
      onBlur?: ((e: FocusEvent) => void) | undefined
    }
  >,
  {}
>
export default _default