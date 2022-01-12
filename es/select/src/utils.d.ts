import { TreeMateOptions } from 'treemate'
import type {
  SelectBaseOption,
  SelectGroupOption,
  SelectIgnoredOption,
  SelectMixedOption
} from './interface'
export declare function getKey(option: SelectMixedOption): string | number
export declare function getIsGroup(option: SelectMixedOption): boolean
export declare function getIgnored(option: SelectMixedOption): boolean
export declare const tmOptions: TreeMateOptions<
  SelectBaseOption,
  SelectGroupOption,
  SelectIgnoredOption
>
export declare function patternMatched(pattern: string, value: string): boolean
export declare function filterOptions(
  originalOpts: SelectMixedOption[],
  filter: (pattern: string, option: SelectBaseOption) => boolean,
  pattern: string
): SelectMixedOption[]
export declare function createValOptMap(
  options: SelectMixedOption[]
): Map<string | number, SelectBaseOption>
export declare function defaultFilter(
  pattern: string,
  option: SelectBaseOption
): boolean
