import { VNodeChild } from 'vue'
import { SelectBaseOption } from '../../select/src/interface'
export declare type PaginationInfo = Parameters<RenderPrefix>[0]
export declare type RenderPrefix = (info: {
  startIndex: number
  endIndex: number
  page: number
  pageSize: number
  pageCount: number
  itemCount: number | undefined
}) => VNodeChild
export declare type PaginationSizeOption = SelectBaseOption<number, string>
export declare type RenderSuffix = RenderPrefix
export declare type RenderNext = RenderPrefix
export declare type RenderPrev = RenderPrefix