import { defineComponent, h, computed, inject } from 'vue'
import { ArrowDownIcon } from '../../../_internal/icons'
import { NBaseIcon } from '../../../_internal'
import RenderSorter from './RenderSorter'
import { dataTableInjectionKey } from '../interface'
import { useConfig } from '../../../_mixins'
export default defineComponent({
  name: 'SortIcon',
  props: {
    column: {
      type: Object,
      required: true
    }
  },
  setup(props) {
    const { NConfigProvider } = useConfig()
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    const { mergedSortStateRef, mergedClsPrefixRef } = inject(
      dataTableInjectionKey
    )
    const sortStateRef = computed(() =>
      mergedSortStateRef.value.find(
        (state) => state.columnKey === props.column.key
      )
    )
    const activeRef = computed(() => {
      return sortStateRef.value !== undefined
    })
    const mergedSortOrderRef = computed(() => {
      const { value: sortState } = sortStateRef
      if (sortState && activeRef.value) {
        return sortState.order
      }
      return false
    })
    const mergedRenderSorterRef = computed(() => {
      var _a, _b
      return (
        ((_b =
          (_a =
            NConfigProvider === null || NConfigProvider === void 0
              ? void 0
              : NConfigProvider.mergedComponentPropsRef.value) === null ||
          _a === void 0
            ? void 0
            : _a.DataTable) === null || _b === void 0
          ? void 0
          : _b.renderSorter) || props.column.renderSorter
      )
    })
    return {
      mergedClsPrefix: mergedClsPrefixRef,
      active: activeRef,
      mergedSortOrder: mergedSortOrderRef,
      mergedRenderSorter: mergedRenderSorterRef
    }
  },
  render() {
    const { mergedRenderSorter, mergedSortOrder, mergedClsPrefix } = this
    return mergedRenderSorter
      ? h(RenderSorter, { render: mergedRenderSorter, order: mergedSortOrder })
      : h(
          'span',
          {
            class: [
              `${mergedClsPrefix}-data-table-sorter`,
              {
                [`${mergedClsPrefix}-data-table-sorter--asc`]:
                  mergedSortOrder === 'ascend',
                [`${mergedClsPrefix}-data-table-sorter--desc`]:
                  mergedSortOrder === 'descend'
              }
            ]
          },
          h(
            NBaseIcon,
            { clsPrefix: mergedClsPrefix },
            { default: () => h(ArrowDownIcon, null) }
          )
        )
  }
})
