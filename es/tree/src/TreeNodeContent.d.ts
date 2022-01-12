import { PropType } from 'vue'
import { TmNode } from './interface'
declare const _default: import('vue').DefineComponent<
  {
    clsPrefix: {
      type: StringConstructor
      required: true
    }
    disabled: BooleanConstructor
    checked: BooleanConstructor
    selected: BooleanConstructor
    onClick: PropType<(e: MouseEvent) => void>
    onDragstart: PropType<(e: DragEvent) => void>
    tmNode: {
      type: PropType<TmNode>
      required: true
    }
  },
  {
    selfRef: import('vue').Ref<HTMLElement | null>
    renderLabel: import('vue').Ref<
      | (({
          option,
          checked,
          selected
        }: import('./interface').TreeRenderProps) => import('vue').VNodeChild)
      | undefined
    >
    renderPrefix: import('vue').Ref<
      | (({
          option,
          checked,
          selected
        }: import('./interface').TreeRenderProps) => import('vue').VNodeChild)
      | undefined
    >
    renderSuffix: import('vue').Ref<
      | (({
          option,
          checked,
          selected
        }: import('./interface').TreeRenderProps) => import('vue').VNodeChild)
      | undefined
    >
    labelField: import('vue').Ref<string>
    handleClick: (e: MouseEvent) => void
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
      disabled?: unknown
      checked?: unknown
      selected?: unknown
      onClick?: unknown
      onDragstart?: unknown
      tmNode?: unknown
    } & {
      disabled: boolean
      checked: boolean
      selected: boolean
      clsPrefix: string
      tmNode: TmNode
    } & {
      onDragstart?: ((e: DragEvent) => void) | undefined
      onClick?: ((e: MouseEvent) => void) | undefined
    }
  >,
  {
    disabled: boolean
    checked: boolean
    selected: boolean
  }
>
export default _default
