import type { ExtractPublicPropTypes } from '../../_utils'
declare const typeProps: {
  readonly label: {
    readonly type: import('vue').PropType<
      | string
      | number
      | import('vue').VNode<
          import('vue').RendererNode,
          import('vue').RendererElement,
          {
            [key: string]: any
          }
        >
      | (() => import('vue').VNodeChild)
    >
    readonly default: undefined
    readonly validator: () => boolean
  }
  readonly name: {
    readonly type: import('vue').PropType<string | number>
    readonly required: true
  }
  readonly tab: import('vue').PropType<
    | string
    | number
    | import('vue').VNode<
        import('vue').RendererNode,
        import('vue').RendererElement,
        {
          [key: string]: any
        }
      >
    | (() => import('vue').VNodeChild)
  >
  readonly disabled: BooleanConstructor
  readonly closable: {
    readonly type: import('vue').PropType<boolean | undefined>
    readonly default: undefined
  }
  readonly internalLeftPadded: BooleanConstructor
  readonly internalAddable: BooleanConstructor
}
export declare type TabProps = ExtractPublicPropTypes<typeof typeProps>
declare const _default: import('vue').DefineComponent<
  {
    readonly label: {
      readonly type: import('vue').PropType<
        | string
        | number
        | import('vue').VNode<
            import('vue').RendererNode,
            import('vue').RendererElement,
            {
              [key: string]: any
            }
          >
        | (() => import('vue').VNodeChild)
      >
      readonly default: undefined
      readonly validator: () => boolean
    }
    readonly name: {
      readonly type: import('vue').PropType<string | number>
      readonly required: true
    }
    readonly tab: import('vue').PropType<
      | string
      | number
      | import('vue').VNode<
          import('vue').RendererNode,
          import('vue').RendererElement,
          {
            [key: string]: any
          }
        >
      | (() => import('vue').VNodeChild)
    >
    readonly disabled: BooleanConstructor
    readonly closable: {
      readonly type: import('vue').PropType<boolean | undefined>
      readonly default: undefined
    }
    readonly internalLeftPadded: BooleanConstructor
    readonly internalAddable: BooleanConstructor
  },
  {
    mergedClosable: import('vue').ComputedRef<boolean>
    style: import('vue').Ref<string | import('vue').CSSProperties | undefined>
    clsPrefix: import('vue').Ref<string>
    value: import('vue').Ref<string | number | null>
    type: import('vue').Ref<import('./interface').TabsType>
    handleClose(e: MouseEvent): void
    handleClick(): void
  },
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
      readonly label?: unknown
      readonly name?: unknown
      readonly tab?: unknown
      readonly disabled?: unknown
      readonly closable?: unknown
      readonly internalLeftPadded?: unknown
      readonly internalAddable?: unknown
    } & {
      name: string | number
      disabled: boolean
      internalLeftPadded: boolean
      internalAddable: boolean
    } & {
      label?:
        | string
        | number
        | import('vue').VNode<
            import('vue').RendererNode,
            import('vue').RendererElement,
            {
              [key: string]: any
            }
          >
        | (() => import('vue').VNodeChild)
        | undefined
      tab?:
        | string
        | number
        | import('vue').VNode<
            import('vue').RendererNode,
            import('vue').RendererElement,
            {
              [key: string]: any
            }
          >
        | (() => import('vue').VNodeChild)
        | undefined
      closable?: boolean | undefined
    }
  >,
  {
    label:
      | string
      | number
      | import('vue').VNode<
          import('vue').RendererNode,
          import('vue').RendererElement,
          {
            [key: string]: any
          }
        >
      | (() => import('vue').VNodeChild)
    disabled: boolean
    closable: boolean | undefined
    internalLeftPadded: boolean
    internalAddable: boolean
  }
>
export default _default
