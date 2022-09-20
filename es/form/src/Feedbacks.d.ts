import { PropType } from 'vue'
declare const _default: import('vue').DefineComponent<
  {
    clsPrefix: {
      type: StringConstructor
      required: true
    }
    explains: PropType<string[]>
    feedback: StringConstructor
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
      explains?: unknown
      feedback?: unknown
    } & {
      clsPrefix: string
    } & {
      feedback?: string | undefined
      explains?: string[] | undefined
    }
  >,
  {}
>
export default _default