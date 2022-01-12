import { PropType, CSSProperties } from 'vue'
import { Status } from './interface'
declare const _default: import('vue').DefineComponent<
  {
    clsPrefix: {
      type: StringConstructor
      required: true
    }
    status: {
      type: PropType<Status>
      required: true
    }
    strokeWidth: {
      type: NumberConstructor
      required: true
    }
    fillColor: StringConstructor
    railColor: StringConstructor
    railStyle: PropType<string | CSSProperties>
    percentage: {
      type: NumberConstructor
      default: number
    }
    showIndicator: {
      type: BooleanConstructor
      reqiuired: boolean
    }
    indicatorTextColor: StringConstructor
    unit: StringConstructor
    viewBoxWidth: {
      type: NumberConstructor
      required: true
    }
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
      status?: unknown
      strokeWidth?: unknown
      fillColor?: unknown
      railColor?: unknown
      railStyle?: unknown
      percentage?: unknown
      showIndicator?: unknown
      indicatorTextColor?: unknown
      unit?: unknown
      viewBoxWidth?: unknown
    } & {
      strokeWidth: number
      clsPrefix: string
      percentage: number
      status: Status
      showIndicator: boolean
      viewBoxWidth: number
    } & {
      railColor?: string | undefined
      fillColor?: string | undefined
      indicatorTextColor?: string | undefined
      unit?: string | undefined
      railStyle?: string | CSSProperties | undefined
    }
  >,
  {
    percentage: number
    showIndicator: boolean
  }
>
export default _default
