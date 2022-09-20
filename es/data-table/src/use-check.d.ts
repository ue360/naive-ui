import { ComputedRef } from 'vue'
import { DataTableSetupProps } from './DataTable'
import {
  RowKey,
  TableSelectionColumn,
  InternalRowData,
  TmNode
} from './interface'
import { TreeMate } from 'treemate'
export declare function useCheck(
  props: DataTableSetupProps,
  data: {
    selectionColumnRef: ComputedRef<TableSelectionColumn | null>
    paginatedDataRef: ComputedRef<TmNode[]>
    treeMateRef: ComputedRef<TreeMate<InternalRowData>>
  }
): {
  mergedCheckedRowKeySetRef: ComputedRef<Set<import('treemate').Key>>
  mergedCheckedRowKeysRef: ComputedRef<import('treemate').Key[]>
  mergedInderminateRowKeySetRef: ComputedRef<Set<import('treemate').Key>>
  someRowsCheckedRef: ComputedRef<boolean>
  allRowsCheckedRef: ComputedRef<boolean>
  headerCheckboxDisabledRef: ComputedRef<boolean>
  doUpdateCheckedRowKeys: (keys: RowKey[]) => void
  doCheckAll: (checkWholeTable?: boolean) => void
  doUncheckAll: (checkWholeTable?: boolean) => void
  doCheck: (rowKey: RowKey | RowKey[]) => void
  doUncheck: (rowKey: RowKey | RowKey[]) => void
}