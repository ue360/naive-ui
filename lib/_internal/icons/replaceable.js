'use strict'
Object.defineProperty(exports, '__esModule', { value: true })
exports.replaceable = void 0
const lodash_1 = require('lodash')
const vue_1 = require('vue')
const _mixins_1 = require('../../_mixins')
// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
function replaceable(name, icon) {
  return (0, vue_1.defineComponent)({
    name: (0, lodash_1.upperFirst)(name),
    setup() {
      const { NConfigProvider } = (0, _mixins_1.useConfig)()
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
exports.replaceable = replaceable