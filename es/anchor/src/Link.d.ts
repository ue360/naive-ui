import { Ref, InjectionKey } from 'vue'
import { ExtractPublicPropTypes } from '../../_utils'
export interface AnchorInjection {
  activeHref: Ref<string | null>
  mergedClsPrefix: Ref<string>
  updateBarPosition: (el: HTMLElement) => void
  setActiveHref: (href: string, transition?: boolean) => void
  collectedLinkHrefs: string[]
  titleEls: HTMLElement[]
}
export declare const anchorInjectionKey: InjectionKey<AnchorInjection>
declare const anchorLinkProps: {
  readonly title: StringConstructor
  readonly href: StringConstructor
}
export declare type AnchorLinkProps = ExtractPublicPropTypes<
  typeof anchorLinkProps
>
declare const _default: import('vue').DefineComponent<
  {
    readonly title: StringConstructor
    readonly href: StringConstructor
  },
  () => JSX.Element,
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
      readonly title?: unknown
      readonly href?: unknown
    } & {} & {
      title?: string | undefined
      href?: string | undefined
    }
  >,
  {}
>
export default _default
