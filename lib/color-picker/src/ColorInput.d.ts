import { HSVA, HSLA, RGBA } from 'seemly'
import { PropType } from 'vue'
import type { ColorPickerMode } from './utils'
declare const _default: import('vue').DefineComponent<
  {
    clsPrefix: {
      type: StringConstructor
      required: true
    }
    mode: {
      type: PropType<ColorPickerMode>
      required: true
    }
    modes: {
      type: PropType<ColorPickerMode[]>
      required: true
    }
    showAlpha: {
      type: BooleanConstructor
      required: true
    }
    value: {
      type: PropType<string | null>
      default: null
    }
    valueArr: {
      type: PropType<RGBA | HSLA | HSVA | null>
      default: null
    }
    onUpdateValue: {
      type: PropType<(value: string) => void>
      required: true
    }
    onUpdateMode: {
      type: PropType<() => void>
      required: true
    }
  },
  {
    handleUnitUpdateValue(index: number, value: number | string): void
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
      mode?: unknown
      modes?: unknown
      showAlpha?: unknown
      value?: unknown
      valueArr?: unknown
      onUpdateValue?: unknown
      onUpdateMode?: unknown
    } & {
      value: string | null
      mode: ColorPickerMode
      clsPrefix: string
      onUpdateValue: (value: string) => void
      showAlpha: boolean
      modes: ColorPickerMode[]
      valueArr: RGBA | HSLA | HSVA | null
      onUpdateMode: () => void
    } & {}
  >,
  {
    value: string | null
    valueArr: RGBA | HSLA | HSVA | null
  }
>
export default _default