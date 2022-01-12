import { upperFirst } from 'lodash-es'
import { defineComponent } from 'vue'
import { useConfig } from '../../_mixins'
// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
export function replaceable(name, icon) {
  return defineComponent({
    name: upperFirst(name),
    setup() {
      const { NConfigProvider } = useConfig()
      return () => {
        var _a
        const iconOverride =
          (_a =
            NConfigProvider === null || NConfigProvider === void 0
              ? void 0
              : NConfigProvider.mergedIconsRef.value) === null || _a === void 0
            ? void 0
            : _a[name]
        return iconOverride ? iconOverride() : icon
      }
    }
  })
}
