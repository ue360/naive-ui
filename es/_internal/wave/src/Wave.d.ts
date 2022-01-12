export interface BaseWaveRef {
  play: () => void
}
declare const _default: import('vue').DefineComponent<
  {
    clsPrefix: {
      type: StringConstructor
      required: true
    }
  },
  {
    active: import('vue').Ref<boolean>
    selfRef: import('vue').Ref<HTMLElement | null>
    play(): void
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
      clsPrefix?: unknown
    } & {
      clsPrefix: string
    } & {}
  >,
  {}
>
export default _default
