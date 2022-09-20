import { PropType } from 'vue'
import { TableBaseColumn } from '../interface'
declare const _default: import('vue').DefineComponent<
  {
    column: {
      type: PropType<TableBaseColumn<import('../interface').InternalRowData>>
      required: true
    }
  },
  {
    mergedClsPrefix: import('vue').Ref<string>
    active: import('vue').ComputedRef<boolean>
    mergedSortOrder: import('vue').ComputedRef<import('../interface').SortOrder>
    mergedRenderSorter: import('vue').ComputedRef<
      import('../interface').RenderSorter | undefined
    >
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
      column?: unknown
    } & {
      column: TableBaseColumn<import('../interface').InternalRowData>
    } & {}
  >,
  {}
>
export default _default