import { PropType } from 'vue'
import { TreeNode } from 'treemate'
declare const _default: import('vue').DefineComponent<
  {
    clsPrefix: {
      type: StringConstructor
      required: true
    }
    tmNode: {
      type: PropType<
        TreeNode<
          import('../..').MenuOption,
          import('../..').MenuGroupOption,
          import('../../menu/src/interface').MenuIgnoredOption
        >
      >
      required: true
    }
    parentKey: {
      type: PropType<string | number | null>
      default: null
    }
  },
  unknown,
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
      clsPrefix?: unknown
      tmNode?: unknown
      parentKey?: unknown
    } & {
      clsPrefix: string
      tmNode: TreeNode<
        import('../..').MenuOption,
        import('../..').MenuGroupOption,
        import('../../menu/src/interface').MenuIgnoredOption
      >
      parentKey: string | number | null
    } & {}
  >,
  {
    parentKey: string | number | null
  }
>
export default _default