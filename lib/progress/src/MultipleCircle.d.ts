import { PropType, CSSProperties } from 'vue'
declare const _default: import('vue').DefineComponent<
  {
    clsPrefix: {
      type: StringConstructor
      required: true
    }
    viewBoxWidth: {
      type: NumberConstructor
      required: true
    }
    percentage: {
      type: PropType<number[]>
      default: number[]
    }
    strokeWidth: {
      type: NumberConstructor
      required: true
    }
    circleGap: {
      type: NumberConstructor
      required: true
    }
    showIndicator: {
      type: BooleanConstructor
      required: true
    }
    fillColor: {
      type: PropType<string[]>
      default: () => never[]
    }
    railColor: {
      type: PropType<string[]>
      default: () => never[]
    }
    railStyle: {
      type: PropType<(string | CSSProperties)[]>
      default: () => never[]
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
      viewBoxWidth?: unknown
      percentage?: unknown
      strokeWidth?: unknown
      circleGap?: unknown
      showIndicator?: unknown
      fillColor?: unknown
      railColor?: unknown
      railStyle?: unknown
    } & {
      strokeWidth: number
      railColor: string[]
      clsPrefix: string
      fillColor: string[]
      percentage: number[]
      showIndicator: boolean
      railStyle: (string | CSSProperties)[]
      viewBoxWidth: number
      circleGap: number
    } & {}
  >,
  {
    railColor: string[]
    fillColor: string[]
    percentage: number[]
    railStyle: (string | CSSProperties)[]
  }
>
export default _default