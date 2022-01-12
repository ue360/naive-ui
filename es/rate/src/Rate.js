import { h, toRef, ref, computed, defineComponent, renderList } from 'vue'
import { useMergedState } from 'vooks'
import { NBaseIcon } from '../../_internal'
import { useTheme, useFormItem, useConfig } from '../../_mixins'
import { call, createKey } from '../../_utils'
import { rateLight } from '../styles'
import style from './styles/index.cssr'
import StarIcon from './StarIcon'
const rateProps = Object.assign(Object.assign({}, useTheme.props), {
  allowHalf: Boolean,
  count: {
    type: Number,
    default: 5
  },
  value: Number,
  defaultValue: {
    type: Number,
    default: 0
  },
  readonly: Boolean,
  size: {
    type: [String, Number],
    default: 'medium'
  },
  color: String,
  'onUpdate:value': [Function, Array],
  onUpdateValue: [Function, Array]
})
export default defineComponent({
  name: 'Rate',
  props: rateProps,
  setup(props) {
    const { mergedClsPrefixRef } = useConfig(props)
    const themeRef = useTheme(
      'Rate',
      'Rate',
      style,
      rateLight,
      props,
      mergedClsPrefixRef
    )
    const controlledValueRef = toRef(props, 'value')
    const uncontrolledValueRef = ref(props.defaultValue)
    const hoverIndexRef = ref(null)
    const formItem = useFormItem(props)
    function doUpdateValue(value) {
      const { 'onUpdate:value': _onUpdateValue, onUpdateValue } = props
      const { nTriggerFormChange, nTriggerFormInput } = formItem
      if (_onUpdateValue) {
        call(_onUpdateValue, value)
      }
      if (onUpdateValue) {
        call(onUpdateValue, value)
      }
      uncontrolledValueRef.value = value
      nTriggerFormChange()
      nTriggerFormInput()
    }
    function getDerivedValue(index, e) {
      if (props.allowHalf) {
        if (e.offsetX >= Math.floor(e.currentTarget.offsetWidth / 2)) {
          return index + 1
        } else {
          return index + 0.5
        }
      } else {
        return index + 1
      }
    }
    function handleMouseMove(index, e) {
      hoverIndexRef.value = getDerivedValue(index, e)
    }
    function handleMouseLeave() {
      hoverIndexRef.value = null
    }
    function handleClick(index, e) {
      doUpdateValue(getDerivedValue(index, e))
    }
    return {
      mergedClsPrefix: mergedClsPrefixRef,
      mergedValue: useMergedState(controlledValueRef, uncontrolledValueRef),
      hoverIndex: hoverIndexRef,
      handleMouseMove,
      handleClick,
      handleMouseLeave,
      cssVars: computed(() => {
        const { size } = props
        const {
          common: { cubicBezierEaseInOut },
          self
        } = themeRef.value
        const { itemColor, itemColorActive } = self
        let mergedSize
        if (typeof size === 'number') {
          mergedSize = `${size}px`
        } else {
          mergedSize = self[createKey('size', size)]
        }
        return {
          '--bezier': cubicBezierEaseInOut,
          '--item-color': itemColor,
          '--item-color-active': props.color || itemColorActive,
          '--item-size': mergedSize
        }
      })
    }
  },
  render() {
    const {
      readonly,
      hoverIndex,
      mergedValue,
      mergedClsPrefix,
      $slots: { default: defaultSlot }
    } = this
    return h(
      'div',
      {
        class: [
          `${mergedClsPrefix}-rate`,
          {
            [`${mergedClsPrefix}-rate--readonly`]: readonly
          }
        ],
        style: this.cssVars,
        onMouseleave: this.handleMouseLeave
      },
      renderList(this.count, (_, index) => {
        const icon = defaultSlot
          ? defaultSlot()
          : h(
              NBaseIcon,
              { clsPrefix: mergedClsPrefix },
              { default: () => StarIcon }
            )
        const fullStarActive =
          hoverIndex !== null
            ? index + 1 <= hoverIndex
            : index + 1 <= mergedValue
        return h(
          'div',
          {
            key: index,
            class: [
              `${mergedClsPrefix}-rate__item`,
              fullStarActive && `${mergedClsPrefix}-rate__item--active`
            ],
            onClick: readonly
              ? undefined
              : (e) => {
                  this.handleClick(index, e)
                },
            onMousemove: readonly
              ? undefined
              : (e) => {
                  this.handleMouseMove(index, e)
                }
          },
          icon,
          this.allowHalf
            ? h(
                'div',
                {
                  class: [
                    `${mergedClsPrefix}-rate__half`,
                    {
                      [`${mergedClsPrefix}-rate__half--active`]:
                        !fullStarActive && hoverIndex !== null
                          ? index + 0.5 <= hoverIndex
                          : index + 0.5 <= mergedValue
                    }
                  ]
                },
                icon
              )
            : null
        )
      })
    )
  }
})
