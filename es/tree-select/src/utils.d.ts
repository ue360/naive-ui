import { SelectBaseOption } from '../../select/src/interface'
import { Key } from '../../tree/src/interface'
import { TreeSelectTmNode, TreeSelectOption } from './interface'
export declare function treeOption2SelectOption(
  tmNode: TreeSelectTmNode,
  labelField: string
): SelectBaseOption
export declare function treeOption2SelectOptionWithPath(
  tmNode: TreeSelectTmNode,
  path: TreeSelectTmNode[],
  separator: string,
  labelField: string
): SelectBaseOption
export declare function filterTree(
  tree: TreeSelectOption[],
  filter: (pattern: string, v: TreeSelectOption) => boolean,
  pattern: string,
  keyField: string
): {
  filteredTree: TreeSelectOption[]
  expandedKeys: Key[]
  highlightKeySet: Set<Key>
}
