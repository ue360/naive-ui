import { PropType } from 'vue'
export interface TagColor {
  color?: string
  borderColor?: string
  textColor?: string
}
declare const _default: {
  readonly color: PropType<TagColor>
  readonly type: {
    readonly type: PropType<
      'default' | 'error' | 'info' | 'success' | 'warning' | 'primary'
    >
    readonly default: 'default'
  }
  readonly round: BooleanConstructor
  readonly size: {
    readonly type: PropType<'small' | 'medium' | 'large'>
    readonly default: 'medium'
  }
  readonly closable: BooleanConstructor
  readonly disabled: {
    readonly type: PropType<boolean | undefined>
    readonly default: undefined
  }
}
export default _default