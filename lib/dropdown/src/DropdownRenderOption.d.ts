import { PropType } from 'vue'
import { TreeNode } from 'treemate'
declare const _default: import('vue').DefineComponent<
  {
    tmNode: {
      type: PropType<
        TreeNode<
          import('../../menu/src/interface').MenuRenderOption,
          import('../../menu/src/interface').MenuRenderOption,
          import('../../menu/src/interface').MenuRenderOption
        >
      >
      required: true
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
      tmNode?: unknown
    } & {
      tmNode: TreeNode<
        import('../../menu/src/interface').MenuRenderOption,
        import('../../menu/src/interface').MenuRenderOption,
        import('../../menu/src/interface').MenuRenderOption
      >
    } & {}
  >,
  {}
>
export default _default
