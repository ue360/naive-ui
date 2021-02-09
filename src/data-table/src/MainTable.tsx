import { h, ref, defineComponent, inject, computed, renderSlot } from 'vue'
import { VResizeObserver } from 'vueuc'
import 'resize-observer-polyfill'
import { formatLength } from '../../_utils'
import TableHeader from './TableParts/Header'
import TableBody from './TableParts/Body'
import {
  DataTableInjection,
  MainTableBodyRef,
  MainTableHeaderRef,
  MainTableRef
} from './interface'

export default defineComponent({
  props: {
    maxHeight: Number,
    minHeight: Number,
    bordered: {
      type: Boolean,
      required: true
    }
  },
  setup (props) {
    const NDataTable = inject<DataTableInjection>(
      'NDataTable'
    ) as DataTableInjection

    const {
      deriveActiveLeftFixedColumn,
      deriveActiveRightFixedColumn
    } = NDataTable

    let tableWidth: number = 0
    const bodyMaxHeightRef = ref<number | undefined>(undefined)
    const bodyMinHeightRef = ref<number | undefined>(undefined)

    const headerInstRef = ref<MainTableHeaderRef | null>(null)
    const bodyInstRef = ref<MainTableBodyRef | null>(null)

    const { rightFixedColumns, leftFixedColumns } = NDataTable
    const fixedStateInitializedRef = ref(
      !(leftFixedColumns.length || rightFixedColumns.length)
    )

    const bodyStyleRef = computed(() => {
      return {
        maxHeight: formatLength(bodyMaxHeightRef.value),
        minHeight: formatLength(bodyMinHeightRef.value)
      }
    })
    function handleHeaderResize (entry: ResizeObserverEntry): void {
      setTableWidth(entry.contentRect.width)
      deriveBodyMinMaxHeight(entry.contentRect.height)
      deriveActiveLeftFixedColumn(entry.target as HTMLElement, tableWidth)
      deriveActiveRightFixedColumn(entry.target as HTMLElement, tableWidth)
      if (!fixedStateInitializedRef.value) {
        fixedStateInitializedRef.value = true
      }
    }
    function handleHeaderScroll (e: Event): void {
      deriveActiveRightFixedColumn(e.target as HTMLElement, tableWidth)
      deriveActiveLeftFixedColumn(e.target as HTMLElement, tableWidth)
      NDataTable.handleTableHeaderScroll(e)
    }
    function getHeaderElement (): HTMLElement | null {
      const { value } = headerInstRef
      if (value) {
        return value.$el
      }
      return null
    }
    function getBodyElement (): HTMLElement | null {
      const { value } = bodyInstRef
      if (value) {
        return value.getScrollContainer()
      }
      return null
    }
    function setTableWidth (width: number): void {
      tableWidth = width
    }
    function deriveBodyMinMaxHeight (headerHeight: number): void {
      const { bordered, maxHeight, minHeight } = props
      if (maxHeight !== undefined) {
        bodyMaxHeightRef.value = maxHeight + (bordered ? -2 : 0) - headerHeight
      }
      if (minHeight !== undefined) {
        bodyMinHeightRef.value = minHeight + (bordered ? -2 : 0) - headerHeight
      }
    }
    const exposedMethods: MainTableRef = {
      getBodyElement,
      getHeaderElement
    }
    return {
      headerInstRef,
      bodyInstRef,
      bodyStyle: bodyStyleRef,
      fixedStateInitialized: fixedStateInitializedRef,
      handleHeaderScroll,
      handleHeaderResize,
      ...exposedMethods
    }
  },
  render () {
    return (
      <div
        class={[
          'n-data-table-base-table',
          {
            'n-data-table-base-table--transition-disabled': !this
              .fixedStateInitialized
          }
        ]}
      >
        <VResizeObserver onResize={this.handleHeaderResize}>
          {{
            default: () => (
              <TableHeader
                ref="headerInstRef"
                onScroll={this.handleHeaderScroll}
              />
            )
          }}
        </VResizeObserver>
        <TableBody ref="bodyInstRef" style={this.bodyStyle} />
        {renderSlot(this.$slots, 'default')}
      </div>
    )
  }
})