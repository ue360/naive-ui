import { HSVA } from 'seemly'
import { PropType } from 'vue'
declare const _default: import('vue').DefineComponent<
  {
    clsPrefix: {
      type: StringConstructor
      required: true
    }
    rgba: {
      type: PropType<HSVA | null>
      default: null
    }
    displayedHue: {
      type: NumberConstructor
      required: true
    }
    displayedSv: {
      type: PropType<[number, number]>
      required: true
    }
    onUpdateSV: {
      type: PropType<(s: number, v: number) => void>
      required: true
    }
    onComplete: PropType<() => void>
  },
  {
    palleteRef: import('vue').Ref<HTMLElement | null>
    handleColor: import('vue').ComputedRef<string>
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
      rgba?: unknown
      displayedHue?: unknown
      displayedSv?: unknown
      onUpdateSV?: unknown
      onComplete?: unknown
    } & {
      clsPrefix: string
      rgba: HSVA | null
      displayedHue: number
      displayedSv: [number, number]
      onUpdateSV: (s: number, v: number) => void
    } & {
      onComplete?: (() => void) | undefined
    }
  >,
  {
    rgba: HSVA | null
  }
>
export default _default
