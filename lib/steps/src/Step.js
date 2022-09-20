'use strict'
Object.defineProperty(exports, '__esModule', { value: true })
const vue_1 = require('vue')
const icons_1 = require('../../_internal/icons')
const _internal_1 = require('../../_internal')
const _utils_1 = require('../../_utils')
const Steps_1 = require('./Steps')
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
exports.default = (0, vue_1.defineComponent)({
  name: 'Step',
  props: stepProps,
  setup(props) {
    const NSteps = (0, vue_1.inject)(Steps_1.stepsInjectionKey, null)
    if (!NSteps)
      (0, _utils_1.throwError)(
        'step',
        '`n-step` must be placed inside `n-steps`.'
      )
    const {
      props: stepsProps,
      mergedThemeRef,
      mergedClsPrefixRef,
      stepsSlots
    } = NSteps
    const verticalRef = (0, vue_1.computed)(() => {
      return stepsProps.vertical
    })
    const mergedStatusRef = (0, vue_1.computed)(() => {
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
      cssVars: (0, vue_1.computed)(() => {
        const { value: status } = mergedStatusRef
        const { size } = stepsProps
        const {
          common: { cubicBezierEaseInOut },
          self: {
            stepHeaderFontWeight,
            [(0, _utils_1.createKey)('stepHeaderFontSize', size)]:
              stepHeaderFontSize,
            [(0, _utils_1.createKey)('indicatorIndexFontSize', size)]:
              indicatorIndexFontSize,
            [(0, _utils_1.createKey)('indicatorSize', size)]: indicatorSize,
            [(0, _utils_1.createKey)('indicatorIconSize', size)]:
              indicatorIconSize,
            [(0, _utils_1.createKey)('indicatorTextColor', status)]:
              indicatorTextColor,
            [(0, _utils_1.createKey)('indicatorBorderColor', status)]:
              indicatorBorderColor,
            [(0, _utils_1.createKey)('headerTextColor', status)]:
              headerTextColor,
            [(0, _utils_1.createKey)('splitorColor', status)]: splitorColor,
            [(0, _utils_1.createKey)('indicatorColor', status)]: indicatorColor,
            [(0, _utils_1.createKey)('descriptionTextColor', status)]:
              descriptionTextColor
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
    return (0, vue_1.h)(
      'div',
      {
        class: [
          `${mergedClsPrefix}-step`,
          showDescription && `${mergedClsPrefix}-step--show-description`
        ],
        style: this.cssVars
      },
      (0, vue_1.h)(
        'div',
        { class: `${mergedClsPrefix}-step-indicator` },
        (0, vue_1.h)(
          'div',
          { class: `${mergedClsPrefix}-step-indicator-slot` },
          (0, vue_1.h)(_internal_1.NIconSwitchTransition, null, {
            default: () => {
              const { mergedStatus, stepsSlots } = this
              return !(mergedStatus === 'finish' || mergedStatus === 'error')
                ? (0, vue_1.h)(
                    'div',
                    {
                      key: this.internalIndex,
                      class: `${mergedClsPrefix}-step-indicator-slot__index`
                    },
                    this.internalIndex
                  )
                : mergedStatus === 'finish'
                ? (0, vue_1.h)(
                    _internal_1.NBaseIcon,
                    { clsPrefix: mergedClsPrefix, key: 'finish' },
                    {
                      default: () =>
                        (0, vue_1.renderSlot)(
                          stepsSlots,
                          'finish-icon',
                          undefined,
                          () => [(0, vue_1.h)(icons_1.CheckmarkIcon, null)]
                        )
                    }
                  )
                : mergedStatus === 'error'
                ? (0, vue_1.h)(
                    _internal_1.NBaseIcon,
                    { clsPrefix: mergedClsPrefix, key: 'error' },
                    {
                      default: () =>
                        (0, vue_1.renderSlot)(
                          stepsSlots,
                          'error-icon',
                          undefined,
                          () => [(0, vue_1.h)(icons_1.CloseIcon, null)]
                        )
                    }
                  )
                : null
            }
          })
        ),
        this.vertical
          ? (0, vue_1.h)('div', { class: `${mergedClsPrefix}-step-splitor` })
          : null
      ),
      (0, vue_1.h)(
        'div',
        { class: `${mergedClsPrefix}-step-content` },
        (0, vue_1.h)(
          'div',
          { class: `${mergedClsPrefix}-step-content-header` },
          (0, vue_1.h)(
            'div',
            { class: `${mergedClsPrefix}-step-content-header__title` },
            (0, vue_1.renderSlot)(this.$slots, 'title', undefined, () => [
              this.title
            ])
          ),
          !this.vertical
            ? (0, vue_1.h)('div', { class: `${mergedClsPrefix}-step-splitor` })
            : null
        ),
        showDescription
          ? (0, vue_1.h)(
              'div',
              { class: `${mergedClsPrefix}-step-content__description` },
              (0, vue_1.renderSlot)(this.$slots, 'default', undefined, () => [
                this.description
              ])
            )
          : null
      )
    )
  }
})