import { TreeNode } from 'treemate'
import { VNodeChild } from 'vue'
import {
  MenuOption,
  MenuGroupOption,
  MenuDividerOption,
  MenuIgnoredOption,
  MenuRenderOption
} from '../../menu/src/interface'
export declare type Key = string | number
export declare type DropdownOption = MenuOption
export declare type DropdownGroupOption = MenuGroupOption
export declare type DropdownDividerOption = MenuDividerOption
export declare type DropdownRenderOption = MenuRenderOption
export declare type DropdownMixedOption =
  | DropdownOption
  | DropdownGroupOption
  | DropdownDividerOption
  | DropdownRenderOption
export declare type DropdownIgnoredOption = MenuIgnoredOption
export declare type DropdownIntersectionOption = DropdownOption &
  DropdownGroupOption
export declare type TmNode = TreeNode<
  DropdownOption,
  DropdownGroupOption,
  DropdownIgnoredOption
>
export declare type OnUpdateValue = <
  T extends string & number & (string | number)
>(
  value: T,
  option: DropdownOption
) => void
export declare type OnUpdateKeys = <
  T extends string[] & number[] & Array<string | number>
>(
  keys: T
) => void
export declare type OnUpdateValueImpl = <
  T extends string | number | (string | number)
>(
  value: T,
  option: DropdownOption
) => void
export declare type OnUpdateKeysImpl = <
  T extends string[] | number[] | Array<string | number>
>(
  keys: T
) => void
export declare type RenderLabelImpl = (
  option: DropdownMixedOption
) => VNodeChild
export declare type RenderLabel = (
  option: DropdownIntersectionOption
) => VNodeChild
export declare type RenderIconImpl = (option: DropdownMixedOption) => VNodeChild
export declare type RenderIcon = (
  option: DropdownIntersectionOption
) => VNodeChild