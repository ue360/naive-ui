import { computed, h, defineComponent, provide, ref } from 'vue'
import { useMergedState } from 'vooks'
import { useConfig, useTheme } from '../../_mixins'
import { call, warn } from '../../_utils'
import { collapseLight } from '../styles'
import style from './styles/index.cssr'
const collapseProps = Object.assign(Object.assign({}, useTheme.props), {
  defaultExpandedNames: {
    type: [Array, String],
    default: null
  },
  expandedNames: [Array, String],
  arrowPlacement: {
    type: String,
    default: 'left'
  },
  accordion: {
    type: Boolean,
    default: false
  },
  displayDirective: {
    type: String,
    default: 'if'
  },
  onItemHeaderClick: [Function, Array],
  'onUpdate:expandedNames': [Function, Array],
  onUpdateExpandedNames: [Function, Array],
  // deprecated
  onExpandedNamesChange: {
    type: [Function, Array],
    validator: () => {
      if (process.env.NODE_ENV !== 'production') {
        warn(
          'collapse',
          '`on-expanded-names-change` is deprecated, please use `on-update:expanded-names` instead.'
        )
      }
      return true
    },
    default: undefined
  }
})
export const collapseInjectionKey = Symbol('collapse')
export default defineComponent({
  name: 'Collapse',
  props: collapseProps,
  setup(props, { slots }) {
    const { mergedClsPrefixRef } = useConfig(props)
    const uncontrolledExpandedNamesRef = ref(props.defaultExpandedNames)
    const controlledExpandedNamesRef = computed(() => props.expandedNames)
    const mergedExpandedNamesRef = useMergedState(
      controlledExpandedNamesRef,
      uncontrolledExpandedNamesRef
    )
    const themeRef = useTheme(
      'Collapse',
      'Collapse',
      style,
      collapseLight,
      props,
      mergedClsPrefixRef
    )
    function doUpdateExpandedNames(names) {
      const {
        'onUpdate:expandedNames': _onUpdateExpandedNames,
        onUpdateExpandedNames,
        onExpandedNamesChange
      } = props
      if (onUpdateExpandedNames) {
        call(onUpdateExpandedNames, names)
      }
      if (_onUpdateExpandedNames) {
        call(_onUpdateExpandedNames, names)
      }
      if (onExpandedNamesChange) {
        call(onExpandedNamesChange, names)
      }
      uncontrolledExpandedNamesRef.value = names
    }
    function doItemHeaderClick(info) {
      const { onItemHeaderClick } = props
      if (onItemHeaderClick) {
        call(onItemHeaderClick, info)
      }
    }
    function toggleItem(collapse, name, event) {
      const { accordion } = props
      const { value: expandedNames } = mergedExpandedNamesRef
      if (accordion) {
        if (collapse) {
          doUpdateExpandedNames([name])
          doItemHeaderClick({ name, expanded: true, event })
        } else {
          doUpdateExpandedNames([])
          doItemHeaderClick({ name, expanded: false, event })
        }
      } else {
        if (!Array.isArray(expandedNames)) {
          doUpdateExpandedNames([name])
          doItemHeaderClick({ name, expanded: true, event })
        } else {
          const activeNames = expandedNames.slice()
          const index = activeNames.findIndex(
            (activeName) => name === activeName
          )
          if (~index) {
            activeNames.splice(index, 1)
            doUpdateExpandedNames(activeNames)
            doItemHeaderClick({ name, expanded: false, event })
          } else {
            activeNames.push(name)
            doUpdateExpandedNames(activeNames)
            doItemHeaderClick({ name, expanded: true, event })
          }
        }
      }
    }
    provide(collapseInjectionKey, {
      props,
      mergedClsPrefixRef,
      expandedNamesRef: mergedExpandedNamesRef,
      slots,
      toggleItem
    })
    return {
      mergedTheme: themeRef,
      mergedClsPrefix: mergedClsPrefixRef,
      cssVars: computed(() => {
        const {
          common: { cubicBezierEaseInOut },
          self: {
            titleFontWeight,
            dividerColor,
            titleTextColor,
            textColor,
            arrowColor,
            fontSize,
            titleFontSize
          }
        } = themeRef.value
        return {
          '--font-size': fontSize,
          '--bezier': cubicBezierEaseInOut,
          '--text-color': textColor,
          '--divider-color': dividerColor,
          '--title-font-size': titleFontSize,
          '--title-text-color': titleTextColor,
          '--title-font-weight': titleFontWeight,
          '--arrow-color': arrowColor
        }
      })
    }
  },
  render() {
    return h(
      'div',
      { class: `${this.mergedClsPrefix}-collapse`, style: this.cssVars },
      this.$slots
    )
  }
})
