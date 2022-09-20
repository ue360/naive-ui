import {
  h,
  computed,
  onMounted,
  ref,
  defineComponent,
  renderSlot,
  Transition
} from 'vue'
import { useConfig, useTheme } from '../../_mixins'
import { NBaseSlotMachine, NBaseWave } from '../../_internal'
import { createKey, getTitleAttribute } from '../../_utils'
import { badgeLight } from '../styles'
import style from './styles/index.cssr'
const badgeProps = Object.assign(Object.assign({}, useTheme.props), {
  value: [String, Number],
  max: Number,
  dot: {
    type: Boolean,
    default: false
  },
  type: {
    type: String,
    default: 'default'
  },
  show: {
    type: Boolean,
    default: true
  },
  showZero: {
    type: Boolean,
    default: false
  },
  processing: {
    type: Boolean,
    default: false
  },
  color: String
})
export default defineComponent({
  name: 'Badge',
  props: badgeProps,
  setup(props) {
    const { mergedClsPrefixRef } = useConfig(props)
    const themeRef = useTheme(
      'Badge',
      'Badge',
      style,
      badgeLight,
      props,
      mergedClsPrefixRef
    )
    const appearedRef = ref(false)
    const handleAfterEnter = () => {
      appearedRef.value = true
    }
    const handleAfterLeave = () => {
      appearedRef.value = false
    }
    const showBadgeRef = computed(() => {
      return (
        props.show &&
        (props.dot ||
          (props.value !== undefined && !(!props.showZero && props.value <= 0)))
      )
    })
    onMounted(() => {
      if (showBadgeRef.value) appearedRef.value = true
    })
    return {
      mergedClsPrefix: mergedClsPrefixRef,
      appeared: ref(false),
      showBadge: showBadgeRef,
      handleAfterEnter,
      handleAfterLeave,
      cssVars: computed(() => {
        const { type, color: propColor } = props
        const {
          common: { cubicBezierEaseInOut, cubicBezierEaseOut },
          self: { [createKey('color', type)]: color, fontFamily, fontSize }
        } = themeRef.value
        return {
          '--font-size': fontSize,
          '--font-family': fontFamily,
          '--color': propColor || color,
          '--ripple-color': propColor || color,
          '--bezier': cubicBezierEaseInOut,
          '--ripple-bezier': cubicBezierEaseOut
        }
      })
    }
  },
  render() {
    const { mergedClsPrefix } = this
    return h(
      'div',
      {
        class: [
          `${mergedClsPrefix}-badge`,
          {
            [`${mergedClsPrefix}-badge--dot`]: this.dot,
            [`${mergedClsPrefix}-badge--as-is`]: !this.$slots.default
          }
        ],
        style: this.cssVars
      },
      renderSlot(this.$slots, 'default'),
      h(
        Transition,
        {
          name: 'fade-in-scale-up-transition',
          onAfterEnter: this.handleAfterEnter,
          onAfterLeave: this.handleAfterLeave
        },
        {
          default: () =>
            this.showBadge
              ? h(
                  'sup',
                  {
                    class: `${mergedClsPrefix}-badge-sup`,
                    title: getTitleAttribute(this.value)
                  },
                  !this.dot
                    ? h(NBaseSlotMachine, {
                        clsPrefix: mergedClsPrefix,
                        appeared: this.appeared,
                        max: this.max,
                        value: this.value
                      })
                    : null,
                  this.processing
                    ? h(NBaseWave, { clsPrefix: mergedClsPrefix })
                    : null
                )
              : null
        }
      )
    )
  }
})