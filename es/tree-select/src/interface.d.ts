import { TreeNode } from 'treemate'
import { InjectionKey, Ref } from 'vue'
import { TreeOptionBase } from '../../tree/src/interface'
export declare type TreeSelectOption = Omit<
  TreeOptionBase,
  'checkboxDisabled' | 'isLeaf' | 'children'
> & {
  children?: TreeSelectOption[]
  [k: string]: unknown
}
export declare type TreeSelectTmNode = TreeNode<TreeSelectOption>
export declare type OnUpdateValue = (
  value: string &
    number &
    (string | number) &
    string[] &
    number[] &
    Array<string | number> &
    null,
  option: TreeSelectOption &
    null &
    TreeSelectOption[] &
    Array<TreeSelectOption | null>
) => void
export declare type OnUpdateValueImpl = (
  value:
    | string
    | number
    | (string | number)
    | string[]
    | number[]
    | Array<string | number>
    | null,
  option: TreeSelectOption | null | Array<TreeSelectOption | null>
) => void
export declare type Value = string | number | Array<string | number> | null
export interface TreeSelectInjection {
  pendingNodeKeyRef: Ref<string | number | null>
}
export declare const treeSelectInjectionKey: InjectionKey<TreeSelectInjection>
