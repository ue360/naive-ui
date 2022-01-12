import { InjectionKey, PropType, Ref, CSSProperties } from 'vue'
import { TreeNode } from 'treemate'
export interface NDropdownMenuInjection {
  showIconRef: Ref<boolean>
  hasSubmenuRef: Ref<boolean>
}
export declare const dropdownMenuInjectionKey: InjectionKey<NDropdownMenuInjection>
declare const _default: import('vue').DefineComponent<
  {
    showArrow: BooleanConstructor
    arrowStyle: PropType<string | CSSProperties>
    clsPrefix: {
      type: StringConstructor
      required: true
    }
    tmNodes: {
      type: PropType<
        TreeNode<
          import('../..').MenuOption,
          import('../..').MenuGroupOption,
          import('../../menu/src/interface').MenuIgnoredOption
        >[]
      >
      default: () => never[]
    }
    parentKey: {
      type: (StringConstructor | NumberConstructor)[]
      default: null
    }
  },
  void,
  unknown,
  {},
  {},
  import('vue').ComponentOptionsMixin,
  import('vue').ComponentOptionsMixin,
  Record<string, any>,
  string,
  import('vue').VNodeProps &
    import('vue').AllowedComponentProps &
    import('vue').ComponentCustomProps,
  Readonly<
    {
      showArrow?: unknown
      arrowStyle?: unknown
      clsPrefix?: unknown
      tmNodes?: unknown
      parentKey?: unknown
    } & {
      clsPrefix: string
      showArrow: boolean
      parentKey: string | number
      tmNodes: TreeNode<
        import('../..').MenuOption,
        import('../..').MenuGroupOption,
        import('../../menu/src/interface').MenuIgnoredOption
      >[]
    } & {
      arrowStyle?: string | CSSProperties | undefined
    }
  >,
  {
    showArrow: boolean
    parentKey: string | number
    tmNodes: TreeNode<
      import('../..').MenuOption,
      import('../..').MenuGroupOption,
      import('../../menu/src/interface').MenuIgnoredOption
    >[]
  }
>
export default _default
