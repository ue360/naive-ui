import { computed, h, defineComponent } from 'vue'
import { kebabCase } from 'lodash-es'
import { useConfig, useTheme } from '../../_mixins'
import { elementLight } from '../styles'
const elementProps = Object.assign(Object.assign({}, useTheme.props), {
  tag: {
    type: String,
    default: 'div'
  }
})
export default defineComponent({
  name: 'Element',
  alias: ['El'],
  props: elementProps,
  setup(props) {
    const { mergedClsPrefixRef } = useConfig(props)
    const themeRef = useTheme(
      'Element',
      'Element',
      undefined,
      elementLight,
      props,
      mergedClsPrefixRef
    )
    return {
      mergedClsPrefix: mergedClsPrefixRef,
      cssVars: computed(() => {
        const { common } = themeRef.value
        return Object.keys(common).reduce((prevValue, key) => {
          prevValue[`--${kebabCase(key)}`] = common[key]
          return prevValue
        }, {})
      })
    }
  },
  render() {
    var _a
    const { tag, mergedClsPrefix, cssVars, $slots } = this
    return h(
      tag,
      {
        role: 'none',
        class: `${mergedClsPrefix}-element`,
        style: cssVars
      },
      (_a = $slots.default) === null || _a === void 0 ? void 0 : _a.call($slots)
    )
  }
})
