import { GlobalIconConfig } from '../../config-provider'
export declare function replaceable(
  name: keyof GlobalIconConfig,
  icon: JSX.Element
): import('vue').DefineComponent<
  {},
  () => import('vue').VNodeChild,
  {},
  {},
  {},
  import('vue').ComponentOptionsMixin,
  import('vue').ComponentOptionsMixin,
  import('vue').EmitsOptions,
  string,
  import('vue').VNodeProps &
    import('vue').AllowedComponentProps &
    import('vue').ComponentCustomProps,
  Readonly<{} & {} & {}>,
  {}
>
