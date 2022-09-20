import { PropType } from 'vue'
import { RenderFilter } from '../interface'
declare const _default: import('vue').DefineComponent<
  {
    render: {
      type: PropType<RenderFilter>
      required: true
    }
    active: {
      type: BooleanConstructor
      default: boolean
    }
    show: {
      type: BooleanConstructor
      default: boolean
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
      render?: unknown
      active?: unknown
      show?: unknown
    } & {
      render: RenderFilter
      show: boolean
      active: boolean
    } & {}
  >,
  {
    show: boolean
    active: boolean
  }
>
export default _default