'use strict'
Object.defineProperty(exports, '__esModule', { value: true })
exports.formItemRule = exports.formItemMisc = exports.formItemSize = void 0
const vue_1 = require('vue')
const lodash_1 = require('lodash')
const interface_1 = require('./interface')
const _utils_1 = require('../../_utils')
function formItemSize(props) {
  const NForm = (0, vue_1.inject)(interface_1.formInjectionKey, null)
  return {
    mergedSize: (0, vue_1.computed)(() => {
      if (props.size !== undefined) return props.size
      if (
        (NForm === null || NForm === void 0 ? void 0 : NForm.size) !== undefined
      )
        return NForm.size
      return 'medium'
    })
  }
}
exports.formItemSize = formItemSize
// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
function formItemMisc(props) {
  const NForm = (0, vue_1.inject)(interface_1.formInjectionKey, null)
  const mergedLabelWidthRef = (0, vue_1.computed)(() => {
    if (mergedLabelPlacementRef.value === 'top') return
    const { labelWidth } = props
    if (labelWidth !== undefined) {
      return (0, _utils_1.formatLength)(labelWidth)
    }
    if (
      (NForm === null || NForm === void 0 ? void 0 : NForm.labelWidth) !==
      undefined
    ) {
      return (0, _utils_1.formatLength)(NForm.labelWidth)
    }
    return undefined
  })
  const mergedLabelPlacementRef = (0, vue_1.computed)(() => {
    const { labelPlacement } = props
    if (labelPlacement !== undefined) return labelPlacement
    if (NForm === null || NForm === void 0 ? void 0 : NForm.labelPlacement)
      return NForm.labelPlacement
    return 'top'
  })
  const mergedLabelAlignRef = (0, vue_1.computed)(() => {
    const { labelAlign } = props
    if (labelAlign) return labelAlign
    if (NForm === null || NForm === void 0 ? void 0 : NForm.labelAlign)
      return NForm.labelAlign
    return undefined
  })
  const mergedLabelStyleRef = (0, vue_1.computed)(() => {
    return [
      {
        width: mergedLabelWidthRef.value
      },
      props.labelStyle
    ]
  })
  const mergedShowRequireMarkRef = (0, vue_1.computed)(() => {
    const { showRequireMark } = props
    if (showRequireMark !== undefined) return showRequireMark
    return NForm === null || NForm === void 0 ? void 0 : NForm.showRequireMark
  })
  const mergedRequireMarkPlacementRef = (0, vue_1.computed)(() => {
    const { requireMarkPlacement } = props
    if (requireMarkPlacement !== undefined) return requireMarkPlacement
    return NForm === null || NForm === void 0
      ? void 0
      : NForm.requireMarkPlacement
  })
  const validationErroredRef = (0, vue_1.ref)(false)
  const mergedValidationStatusRef = (0, vue_1.computed)(() => {
    const { validationStatus } = props
    if (validationStatus !== undefined) return validationStatus
    if (validationErroredRef.value) return 'error'
    return undefined
  })
  const mergedShowFeedbackRef = (0, vue_1.computed)(() => {
    const { showFeedback } = props
    if (showFeedback !== undefined) return showFeedback
    if (
      (NForm === null || NForm === void 0 ? void 0 : NForm.showFeedback) !==
      undefined
    )
      return NForm.showFeedback
    return true
  })
  const mergedShowLabelRef = (0, vue_1.computed)(() => {
    const { showLabel } = props
    if (showLabel !== undefined) return showLabel
    if (
      (NForm === null || NForm === void 0 ? void 0 : NForm.showLabel) !==
      undefined
    )
      return NForm.showLabel
    return true
  })
  return {
    validationErrored: validationErroredRef,
    mergedLabelStyle: mergedLabelStyleRef,
    mergedLabelPlacement: mergedLabelPlacementRef,
    mergedLabelAlign: mergedLabelAlignRef,
    mergedShowRequireMark: mergedShowRequireMarkRef,
    mergedRequireMarkPlacement: mergedRequireMarkPlacementRef,
    mergedValidationStatus: mergedValidationStatusRef,
    mergedShowFeedback: mergedShowFeedbackRef,
    mergedShowLabel: mergedShowLabelRef
  }
}
exports.formItemMisc = formItemMisc
// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
function formItemRule(props) {
  const NForm = (0, vue_1.inject)(interface_1.formInjectionKey, null)
  const compatibleRulePathRef = (0, vue_1.computed)(() => {
    const { rulePath } = props
    if (rulePath !== undefined) return rulePath
    const { path } = props
    if (path !== undefined) return path
    return undefined
  })
  const mergedRulesRef = (0, vue_1.computed)(() => {
    const rules = []
    const { rule } = props
    if (rule !== undefined) {
      if (Array.isArray(rule)) rules.push(...rule)
      else rules.push(rule)
    }
    if (NForm) {
      const { rules: formRules } = NForm
      const { value: rulePath } = compatibleRulePathRef
      if (formRules !== undefined && rulePath !== undefined) {
        const formRule = (0, lodash_1.get)(formRules, rulePath)
        if (formRule !== undefined) {
          if (Array.isArray(formRule)) {
            rules.push(...formRule)
          } else {
            // terminate object must be a form item rule
            rules.push(formRule)
          }
        }
      }
    }
    return rules
  })
  const hasRequiredRuleRef = (0, vue_1.computed)(() => {
    return mergedRulesRef.value.some((rule) => rule.required)
  })
  // deprecated
  const mergedRequiredRef = (0, vue_1.computed)(() => {
    return hasRequiredRuleRef.value || props.required
  })
  return {
    mergedRules: mergedRulesRef,
    mergedRequired: mergedRequiredRef
  }
}
exports.formItemRule = formItemRule
