import { CSSProperties } from 'vue'
import type {
  SortOrder,
  TableBaseColumn,
  InternalRowData,
  SortOrderFlag,
  SortState,
  CreateRowClassName,
  TableSelectionColumn,
  TableColumn,
  TableExpandColumn
} from './interface'
export declare const selectionColWidth = 40
export declare const expandColWidth = 40
export declare function getColWidth(col: TableColumn): number | undefined
export declare function getColKey(col: TableColumn): string | number
export declare function createShallowClonedObject<T>(object: T): T
export declare function getFlagOfOrder(order: SortOrder): SortOrderFlag
export declare function createCustomWidthStyle(
  column: TableBaseColumn | TableSelectionColumn | TableExpandColumn
): CSSProperties
export declare function createRowClassName(
  row: InternalRowData,
  index: number,
  rowClassName?: string | CreateRowClassName
): string
export declare function shouldUseArrayInSingleMode(
  column: TableBaseColumn
): boolean
export declare function isColumnSortable(column: TableColumn): boolean
export declare function isColumnFilterable(column: TableColumn): boolean
export declare function createNextSorter(
  column: TableBaseColumn,
  currentSortState: SortState | null
): SortState | null
export declare function isColumnSorting(
  column: TableColumn,
  mergedSortState: SortState[]
): boolean
