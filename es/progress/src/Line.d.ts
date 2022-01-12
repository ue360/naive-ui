import { PropType, CSSProperties } from 'vue'
import { Status } from './interface'
declare const _default: import('vue').DefineComponent<
  {
    clsPrefix: {
      type: StringConstructor
      required: true
    }
    percentage: {
      type: NumberConstructor
      default: number
    }
    railColor: StringConstructor
    railStyle: PropType<string | CSSProperties>
    fillColor: StringConstructor
    status: {
      type: PropType<Status>
      required: true
    }
    indicatorPlacement: {
      type: PropType<'inside' | 'outside'>
      required: true
    }
    indicatorTextColor: StringConstructor
    unit: {
      type: StringConstructor
      default: string
    }
    processing: {
      type: BooleanConstructor
      required: true
    }
    showIndicator: {
      type: BooleanConstructor
      required: true
    }
    height: (StringConstructor | NumberConstructor)[]
    railBorderRadius: (StringConstructor | NumberConstructor)[]
    fillBorderRadius: (StringConstructor | NumberConstructor)[]
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
      percentage?: unknown
      railColor?: unknown
      railStyle?: unknown
      fillColor?: unknown
      status?: unknown
      indicatorPlacement?: unknown
      indicatorTextColor?: unknown
      unit?: unknown
      processing?: unknown
      showIndicator?: unknown
      height?: unknown
      railBorderRadius?: unknown
      fillBorderRadius?: unknown
    } & {
      clsPrefix: string
      processing: boolean
      percentage: number
      status: Status
      indicatorPlacement: 'inside' | 'outside'
      unit: string
      showIndicator: boolean
    } & {
      height?: string | number | undefined
      railColor?: string | undefined
      fillColor?: string | undefined
      indicatorTextColor?: string | undefined
      railBorderRadius?: string | number | undefined
      fillBorderRadius?: string | number | undefined
      railStyle?: string | CSSProperties | undefined
    }
  >,
  {
    percentage: number
    unit: string
  }
>
export default _default
