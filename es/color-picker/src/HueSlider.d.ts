import { PropType } from 'vue'
declare const _default: import('vue').DefineComponent<
  {
    clsPrefix: {
      type: StringConstructor
      required: true
    }
    hue: {
      type: NumberConstructor
      required: true
    }
    onUpdateHue: {
      type: PropType<(value: number) => void>
      required: true
    }
    onComplete: PropType<() => void>
  },
  {
    railRef: import('vue').Ref<HTMLElement | null>
    handleMouseDown: (e: MouseEvent) => void
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
      clsPrefix?: unknown
      hue?: unknown
      onUpdateHue?: unknown
      onComplete?: unknown
    } & {
      hue: number
      clsPrefix: string
      onUpdateHue: (value: number) => void
    } & {
      onComplete?: (() => void) | undefined
    }
  >,
  {}
>
export default _default