import { PropType } from 'vue'
import { ColorPickerMode } from './utils'
interface ParsedColor {
  value: string
  mode: ColorPickerMode | null
  legalValue: string
}
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
    swatches: {
      type: PropType<string[]>
      required: true
    }
    onUpdateColor: {
      type: PropType<(value: string) => void>
      required: true
    }
  },
  {
    parsedSwatchesRef: import('vue').ComputedRef<ParsedColor[]>
    handleSwatchSelect: (parsed: ParsedColor) => void
    handleSwatchKeyDown: (e: KeyboardEvent, parsed: ParsedColor) => void
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
      swatches?: unknown
      onUpdateColor?: unknown
    } & {
      mode: ColorPickerMode
      clsPrefix: string
      swatches: string[]
      onUpdateColor: (value: string) => void
    } & {}
  >,
  {}
>
export default _default
