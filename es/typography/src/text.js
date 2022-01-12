import { h, renderSlot, defineComponent, computed } from 'vue'
import { useCompitable } from 'vooks'
import { useConfig, useTheme } from '../../_mixins'
import { warn, createKey } from '../../_utils'
import { typographyLight } from '../styles'
import style from './styles/text.cssr'
const textProps = Object.assign(Object.assign({}, useTheme.props), {
  code: Boolean,
  type: {
    type: String,
    default: 'default'
  },
  delete: Boolean,
  strong: Boolean,
  italic: Boolean,
  underline: Boolean,
  depth: [String, Number],
  tag: String,
  // deprecated
  as: {
    type: String,
    validator: () => {
      if (process.env.NODE_ENV !== 'production') {
        warn('text', '`as` is deprecated, please use `tag` instead.')
      }
      return true
    },
    default: undefined
  }
})
export default defineComponent({
  name: 'Text',
  props: textProps,
  setup(props) {
    const { mergedClsPrefixRef } = useConfig(props)
    const themeRef = useTheme(
      'Typography',
      'Text',
      style,
      typographyLight,
      props,
      mergedClsPrefixRef
    )
    return {
      mergedClsPrefix: mergedClsPrefixRef,
      compitableTag: useCompitable(props, ['as', 'tag']),
      cssVars: computed(() => {
        const { depth, type } = props
        const textColorKey =
          type === 'default'
            ? depth === undefined
              ? 'textColor'
              : `textColor${depth}Depth`
            : createKey('textColor', type)
        const {
          common: { fontWeightStrong, fontFamilyMono },
          self: {
            codeTextColor,
            codeBorderRadius,
            codeColor,
            codeBorder,
            [textColorKey]: textColor
          }
        } = themeRef.value
        return {
          '--text-color': textColor,
          '--font-weight-strong': fontWeightStrong,
          '--font-famliy-mono': fontFamilyMono,
          '--code-border-radius': codeBorderRadius,
          '--code-text-color': codeTextColor,
          '--code-color': codeColor,
          '--code-border': codeBorder
        }
      })
    }
  },
  render() {
    const { mergedClsPrefix } = this
    const textClass = [
      `${mergedClsPrefix}-text`,
      {
        [`${mergedClsPrefix}-text--code`]: this.code,
        [`${mergedClsPrefix}-text--delete`]: this.delete,
        [`${mergedClsPrefix}-text--strong`]: this.strong,
        [`${mergedClsPrefix}-text--italic`]: this.italic,
        [`${mergedClsPrefix}-text--underline`]: this.underline
      }
    ]
    const defaultSlot = renderSlot(this.$slots, 'default')
    return this.code
      ? h(
          'code',
          { class: textClass, style: this.cssVars },
          this.delete ? h('del', null, defaultSlot) : defaultSlot
        )
      : this.delete
      ? h('del', { class: textClass, style: this.cssVars }, defaultSlot)
      : h(
          this.compitableTag || 'span',
          { class: textClass, style: this.cssVars },
          defaultSlot
        )
  }
})
