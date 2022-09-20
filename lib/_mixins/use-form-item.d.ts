import { ComputedRef, InjectionKey, Ref } from 'vue'
declare type FormItemSize = 'small' | 'medium' | 'large'
declare type AllowedSize =
  | 'tiny'
  | 'small'
  | 'medium'
  | 'large'
  | 'huge'
  | number
export interface FormItemInjection {
  path: Ref<string | undefined>
  disabled: Ref<boolean>
  mergedSize: ComputedRef<FormItemSize>
  restoreValidation: () => void
  handleContentBlur: () => void
  handleContentFocus: () => void
  handleContentInput: () => void
  handleContentChange: () => void
}
export declare const formItemInjectionKey: InjectionKey<FormItemInjection>
interface UseFormItemOptions<T> {
  defaultSize?: FormItemSize
  mergedSize?: (formItem: FormItemInjection | null) => T
  mergedDisabled?: (formItem: FormItemInjection | null) => boolean
}
interface UseFormItemProps<T> {
  size?: T
  disabled?: boolean
}
export interface UseFormItem<T> {
  mergedSizeRef: ComputedRef<T>
  mergedDisabledRef: ComputedRef<boolean>
  nTriggerFormBlur: () => void
  nTriggerFormChange: () => void
  nTriggerFormFocus: () => void
  nTriggerFormInput: () => void
}
export default function useFormItem<T extends AllowedSize = FormItemSize>(
  props: UseFormItemProps<T>,
  { defaultSize, mergedSize, mergedDisabled }?: UseFormItemOptions<T>
): UseFormItem<T>
export {}