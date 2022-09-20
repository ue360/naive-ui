import { ComputedRef } from 'vue'
import type { ConfigProviderInjection } from '../config-provider/src/internal-interface'
declare type UseConfigProps = Readonly<{
  bordered?: boolean
  [key: string]: unknown
}>
export declare const defaultClsPrefix = 'n'
export default function useConfig(
  props?: UseConfigProps,
  options?: {
    defaultBordered?: boolean
  }
): {
  NConfigProvider: ConfigProviderInjection | null
  mergedBorderedRef: ComputedRef<boolean>
  mergedClsPrefixRef: ComputedRef<string>
  namespaceRef: ComputedRef<string | undefined>
}
export {}