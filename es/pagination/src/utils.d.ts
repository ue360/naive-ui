declare function pagesToShow(
  currentPage: number,
  pageCount: number,
  pageSlot?: number
): number[]
export declare type PageItem =
  | {
      type: 'fastBackward' | 'fastForward'
      label: string
      active: false
    }
  | {
      type: 'page'
      label: number
      active: boolean
    }
declare function mapPagesToPageItems(
  pages: number[],
  currentPage: number
): PageItem[]
declare function pageItems(
  currentPage: number,
  pageCount: number,
  pageSlot?: number
): PageItem[]
export { pagesToShow, mapPagesToPageItems, pageItems }