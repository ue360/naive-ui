import { Ref, UnwrapRef, InjectionKey } from 'vue'
export declare type Size = 'tiny' | 'small' | 'medium' | 'large'
export declare type OnUpdateValue = <T extends string & [string, string]>(
  value: T
) => void
export declare type OnUpdateValueImpl = (
  value: string | [string, string]
) => void
export interface InputWrappedRef {
  wrapperElRef: Ref<HTMLElement | null>
  textareaElRef: Ref<HTMLTextAreaElement | null>
  inputElRef: Ref<HTMLInputElement | null>
  isCompositing: Ref<boolean>
  blur: () => void
  focus: () => void
  select: () => void
  activate: () => void
  deactivate: () => void
}
export declare type InputInst = UnwrapRef<InputWrappedRef>
export declare const inputInjectionKey: InjectionKey<{
  mergedValueRef: Ref<string | [string, string] | null>
  maxlengthRef: Ref<number | undefined>
  mergedClsPrefixRef: Ref<string>
}>
