import { Key } from 'treemate'
import { useMenuChildProps } from './use-menu-child-props'
import { ComputedRef, ExtractPropTypes, Ref } from 'vue'
import { MergedTheme } from '../../_mixins/use-theme'
import type { MenuTheme } from '../styles'
import { OnUpdateValueImpl } from './interface'
import type { MenuSetupProps } from './Menu'
import { FollowerPlacement } from 'vueuc'
export interface MenuInjection {
  props: MenuSetupProps
  mergedCollapsedRef: Ref<boolean>
  invertedRef: Ref<boolean>
  isHorizontalRef: Ref<boolean>
  mergedClsPrefixRef: Ref<string>
  mergedValueRef: Ref<Key | null>
  mergedExpandedKeysRef: Ref<Key[]>
  activePathRef: Ref<Key[]>
  mergedThemeRef: Ref<MergedTheme<MenuTheme>>
  doSelect: OnUpdateValueImpl
  toggleExpand: (key: Key) => void
}
export interface SubmenuInjection {
  paddingLeftRef: Ref<number | undefined>
  mergedDisabledRef: Ref<boolean>
}
export interface MenuOptionGroupInjection {
  paddingLeftRef: Ref<number | undefined>
}
export declare type UseMenuChildProps = ExtractPropTypes<
  typeof useMenuChildProps
>
export interface UseMenuChild {
  dropdownPlacement: ComputedRef<FollowerPlacement>
  activeIconSize: ComputedRef<number>
  maxIconSize: ComputedRef<number>
  paddingLeft: ComputedRef<number | undefined>
  iconMarginRight: ComputedRef<number>
  NMenu: MenuInjection
  NSubmenu: SubmenuInjection | null
}
export declare function useMenuChild(props: UseMenuChildProps): UseMenuChild
export { useMenuChildProps }