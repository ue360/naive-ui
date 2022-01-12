declare const presetProps: {
  icon: import('vue').PropType<() => import('vue').VNodeChild>
  type: {
    readonly type: import('vue').PropType<
      'default' | 'error' | 'info' | 'success' | 'warning'
    >
    readonly default: 'default'
  }
  title: import('vue').PropType<string | (() => import('vue').VNodeChild)>
  closable: {
    readonly type: BooleanConstructor
    readonly default: true
  }
  negativeText: StringConstructor
  positiveText: StringConstructor
  content: import('vue').PropType<string | (() => import('vue').VNodeChild)>
  action: import('vue').PropType<() => import('vue').VNodeChild>
  showIcon: {
    readonly type: BooleanConstructor
    readonly default: true
  }
  loading: BooleanConstructor
  bordered: BooleanConstructor
  iconPlacement: import('vue').PropType<
    import('../../dialog/src/interface').IconPlacement
  >
  onPositiveClick: import('vue').PropType<(e: MouseEvent) => void>
  onNegativeClick: import('vue').PropType<(e: MouseEvent) => void>
  onClose: import('vue').PropType<() => void>
  contentStyle: import('vue').PropType<string | import('vue').CSSProperties>
  headerStyle: import('vue').PropType<string | import('vue').CSSProperties>
  footerStyle: import('vue').PropType<string | import('vue').CSSProperties>
  embedded: BooleanConstructor
  segmented: {
    readonly type: import('vue').PropType<
      boolean | import('../../card/src/Card').Segmented
    >
    readonly default: false
  }
  size: {
    readonly type: import('vue').PropType<'small' | 'medium' | 'large' | 'huge'>
    readonly default: 'medium'
  }
  hoverable: BooleanConstructor
}
declare const presetPropsKeys: (
  | 'type'
  | 'content'
  | 'size'
  | 'icon'
  | 'title'
  | 'action'
  | 'positiveText'
  | 'negativeText'
  | 'loading'
  | 'bordered'
  | 'contentStyle'
  | 'onClose'
  | 'closable'
  | 'showIcon'
  | 'iconPlacement'
  | 'hoverable'
  | 'headerStyle'
  | 'footerStyle'
  | 'embedded'
  | 'segmented'
  | 'onPositiveClick'
  | 'onNegativeClick'
)[]
export { presetProps, presetPropsKeys }
