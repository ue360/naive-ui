declare const _default: import('vue').DefineComponent<
  {
    clsPrefix: {
      type: StringConstructor
      required: true
    }
    scale: {
      type: NumberConstructor
      default: number
    }
    radius: {
      type: NumberConstructor
      default: number
    }
    strokeWidth: {
      type: NumberConstructor
      default: number
    }
    stroke: {
      type: StringConstructor
      default: undefined
    }
    show: {
      type: BooleanConstructor
      default: boolean
    }
  },
  void,
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
      scale?: unknown
      radius?: unknown
      strokeWidth?: unknown
      stroke?: unknown
      show?: unknown
    } & {
      show: boolean
      scale: number
      radius: number
      strokeWidth: number
      clsPrefix: string
    } & {
      stroke?: string | undefined
    }
  >,
  {
    show: boolean
    stroke: string
    scale: number
    radius: number
    strokeWidth: number
  }
>
export default _default