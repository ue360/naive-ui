import { PropType } from 'vue'
import { Item } from './interface'
declare const _default: import('vue').DefineComponent<
  {
    clsPrefix: {
      type: StringConstructor
      required: true
    }
    data: {
      type: PropType<Item[]>
      required: true
    }
    activeValue: {
      type: PropType<number | 'am' | 'pm' | null>
      default: null
    }
    onItemClick: PropType<(value: number | 'am' | 'pm') => void>
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
      data?: unknown
      activeValue?: unknown
      onItemClick?: unknown
    } & {
      data: Item[]
      clsPrefix: string
      activeValue: number | 'am' | 'pm' | null
    } & {
      onItemClick?: ((value: number | 'am' | 'pm') => void) | undefined
    }
  >,
  {
    activeValue: number | 'am' | 'pm' | null
  }
>
export default _default
