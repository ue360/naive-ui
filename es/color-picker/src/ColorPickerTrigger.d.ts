import { HSLA } from 'seemly'
import { PropType } from 'vue'
declare const _default: import('vue').DefineComponent<
  {
    clsPrefix: {
      type: StringConstructor
      required: true
    }
    value: {
      type: PropType<string | null>
      default: null
    }
    hsla: {
      type: PropType<HSLA | null>
      default: null
    }
    onClick: PropType<() => void>
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
      value?: unknown
      hsla?: unknown
      onClick?: unknown
    } & {
      value: string | null
      clsPrefix: string
      hsla: HSLA | null
    } & {
      onClick?: (() => void) | undefined
    }
  >,
  {
    value: string | null
    hsla: HSLA | null
  }
>
export default _default