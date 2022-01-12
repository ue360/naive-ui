import { onBeforeMount } from 'vue'
import { useSsrAdapter } from '@css-render/vue3-ssr'
import globalStyle from '../_styles/global/index.cssr'
import { throwError } from '../_utils'
export default function useStyle(mountId, style, clsPrefixRef) {
  if (!style) {
    if (process.env.NODE_ENV !== 'production')
      throwError('use-style', 'No style is specified.')
    return
  }
  const ssrAdapter = useSsrAdapter()
  const mountStyle = () => {
    const clsPrefix =
      clsPrefixRef === null || clsPrefixRef === void 0
        ? void 0
        : clsPrefixRef.value
    style.mount({
      id: clsPrefix === undefined ? mountId : clsPrefix + mountId,
      head: true,
      props: {
        bPrefix: clsPrefix ? `.${clsPrefix}-` : undefined
      },
      ssr: ssrAdapter
    })
    globalStyle.mount({
      id: 'naive-ui/global',
      head: true,
      ssr: ssrAdapter
    })
  }
  if (ssrAdapter) {
    mountStyle()
  } else {
    onBeforeMount(mountStyle)
  }
}
