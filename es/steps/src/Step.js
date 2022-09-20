import { h, defineComponent, computed, inject, renderSlot } from 'vue'
import {
  CheckmarkIcon as FinishedIcon,
  CloseIcon as ErrorIcon
} from '../../_internal/icons'
import { NIconSwitchTransition, NBaseIcon } from '../../_internal'
import { createKey, throwError } from '../../_utils'
import { stepsInjectionKey } from './Steps'
const stepProps = {
  status: String,
  title: String,
  description: String,
  // index will be filled by parent steps, not user
  internalIndex: {
    type: Number,
    default: 0
  }
}
export default defineComponent({
  name: 'Step',
  props: stepProps,
  setup(props) {
    const NSteps = inject(stepsInjectionKey, null)
    if (!NSteps) throwError('step', '`n-step` must be placed inside `n-steps`.')
    const {
      props: stepsProps,
      mergedThemeRef,
      mergedClsPrefixRef,
      stepsSlots
    } = NSteps
    const verticalRef = computed(() => {
      return stepsProps.vertical
    })
    const mergedStatusRef = computed(() => {
      const { status } = props
      if (status) {
        return status
      } else {
        const { internalIndex } = props
        const { current } = stepsProps
        if (current === undefined) return 'process'
        if (internalIndex < current) {
          return 'finish'
        } else if (internalIndex === current) {
          return stepsProps.status || 'process'
        } else if (internalIndex > current) {
          return 'wait'
        }
      }
      return 'process'
    })
    return {
      stepsSlots,
      mergedClsPrefix: mergedClsPrefixRef,
      vertical: verticalRef,
      mergedStatus: mergedStatusRef,
      cssVars: computed(() => {
        const { value: status } = mergedStatusRef
        const { size } = stepsProps
        const {
          common: { cubicBezierEaseInOut },
          self: {
            stepHeaderFontWeight,
            [createKey('stepHeaderFontSize', size)]: stepHeaderFontSize,
            [createKey('indicatorIndexFontSize', size)]: indicatorIndexFontSize,
            [createKey('indicatorSize', size)]: indicatorSize,
            [createKey('indicatorIconSize', size)]: indicatorIconSize,
            [createKey('indicatorTextColor', status)]: indicatorTextColor,
            [createKey('indicatorBorderColor', status)]: indicatorBorderColor,
            [createKey('headerTextColor', status)]: headerTextColor,
            [createKey('splitorColor', status)]: splitorColor,
            [createKey('indicatorColor', status)]: indicatorColor,
            [createKey('descriptionTextColor', status)]: descriptionTextColor
          }
        } = mergedThemeRef.value
        return {
          '--bezier': cubicBezierEaseInOut,
          '--description-text-color': descriptionTextColor,
          '--header-text-color': headerTextColor,
          '--indicator-border-color': indicatorBorderColor,
          '--indicator-color': indicatorColor,
          '--indicator-icon-size': indicatorIconSize,
          '--indicator-index-font-size': indicatorIndexFontSize,
          '--indicator-size': indicatorSize,
          '--indicator-text-color': indicatorTextColor,
          '--splitor-color': splitorColor,
          '--step-header-font-size': stepHeaderFontSize,
          '--step-header-font-weight': stepHeaderFontWeight
        }
      })
    }
  },
  render() {
    const showDescription =
      this.description !== undefined || this.$slots.default
    const { mergedClsPrefix } = this
    return h(
      'div',
      {
        class: [
          `${mergedClsPrefix}-step`,
          showDescription && `${mergedClsPrefix}-step--show-description`
        ],
        style: this.cssVars
      },
      h(
        'div',
        { class: `${mergedClsPrefix}-step-indicator` },
        h(
          'div',
          { class: `${mergedClsPrefix}-step-indicator-slot` },
          h(NIconSwitchTransition, null, {
            default: () => {
              const { mergedStatus, stepsSlots } = this
              return !(mergedStatus === 'finish' || mergedStatus === 'error')
                ? h(
                    'div',
                    {
                      key: this.internalIndex,
                      class: `${mergedClsPrefix}-step-indicator-slot__index`
                    },
                    this.internalIndex
                  )
                : mergedStatus === 'finish'
                ? h(
                    NBaseIcon,
                    { clsPrefix: mergedClsPrefix, key: 'finish' },
                    {
                      default: () =>
                        renderSlot(stepsSlots, 'finish-icon', undefined, () => [
                          h(FinishedIcon, null)
                        ])
                    }
                  )
                : mergedStatus === 'error'
                ? h(
                    NBaseIcon,
                    { clsPrefix: mergedClsPrefix, key: 'error' },
                    {
                      default: () =>
                        renderSlot(stepsSlots, 'error-icon', undefined, () => [
                          h(ErrorIcon, null)
                        ])
                    }
                  )
                : null
            }
          })
        ),
        this.vertical
          ? h('div', { class: `${mergedClsPrefix}-step-splitor` })
          : null
      ),
      h(
        'div',
        { class: `${mergedClsPrefix}-step-content` },
        h(
          'div',
          { class: `${mergedClsPrefix}-step-content-header` },
          h(
            'div',
            { class: `${mergedClsPrefix}-step-content-header__title` },
            renderSlot(this.$slots, 'title', undefined, () => [this.title])
          ),
          !this.vertical
            ? h('div', { class: `${mergedClsPrefix}-step-splitor` })
            : null
        ),
        showDescription
          ? h(
              'div',
              { class: `${mergedClsPrefix}-step-content__description` },
              renderSlot(this.$slots, 'default', undefined, () => [
                this.description
              ])
            )
          : null
      )
    )
  }
})