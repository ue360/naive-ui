import { PropType } from 'vue'
declare const _default: import('vue').DefineComponent<
  {
    source: {
      type: BooleanConstructor
      default: boolean
    }
    onChange: {
      type: PropType<(value: boolean) => void>
      required: true
    }
    title: StringConstructor
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
      source?: unknown
      onChange?: unknown
      title?: unknown
    } & {
      source: boolean
      onChange: (value: boolean) => void
    } & {
      title?: string | undefined
    }
  >,
  {
    source: boolean
  }
>
export default _default
