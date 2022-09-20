import { PropType } from 'vue'
declare const _default: import('vue').DefineComponent<
  {
    displayDirective: {
      type: PropType<'show' | 'if'>
      required: true
    }
    show: BooleanConstructor
    clsPrefix: {
      type: StringConstructor
      required: true
    }
  },
  {
    onceTrue: Readonly<import('vue').Ref<boolean>>
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
      displayDirective?: unknown
      show?: unknown
      clsPrefix?: unknown
    } & {
      show: boolean
      clsPrefix: string
      displayDirective: 'show' | 'if'
    } & {}
  >,
  {
    show: boolean
  }
>
export default _default