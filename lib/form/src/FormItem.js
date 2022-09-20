'use strict'
var __awaiter =
  (this && this.__awaiter) ||
  function (thisArg, _arguments, P, generator) {
    function adopt(value) {
      return value instanceof P
        ? value
        : new P(function (resolve) {
            resolve(value)
          })
    }
    return new (P || (P = Promise))(function (resolve, reject) {
      function fulfilled(value) {
        try {
          step(generator.next(value))
        } catch (e) {
          reject(e)
        }
      }
      function rejected(value) {
        try {
          step(generator['throw'](value))
        } catch (e) {
          reject(e)
        }
      }
      function step(result) {
        result.done
          ? resolve(result.value)
          : adopt(result.value).then(fulfilled, rejected)
      }
      step((generator = generator.apply(thisArg, _arguments || [])).next())
    })
  }
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod }
  }
Object.defineProperty(exports, '__esModule', { value: true })
exports.formItemPropKeys = exports.formItemProps = void 0
const vue_1 = require('vue')
const async_validator_1 = __importDefault(require('async-validator'))
const lodash_1 = require('lodash')
const seemly_1 = require('seemly')
const use_form_item_1 = require('../../_mixins/use-form-item')
const _mixins_1 = require('../../_mixins')
const _utils_1 = require('../../_utils')
const styles_1 = require('../styles')
const utils_1 = require('./utils')
const Feedbacks_1 = __importDefault(require('./Feedbacks'))
const form_item_cssr_1 = __importDefault(require('./styles/form-item.cssr'))
const interface_1 = require('./interface')
exports.formItemProps = Object.assign(
  Object.assign({}, _mixins_1.useTheme.props),
  {
    label: String,
    labelWidth: [Number, String],
    labelStyle: [String, Object],
    labelAlign: String,
    labelPlacement: String,
    path: String,
    first: Boolean,
    rulePath: String,
    required: Boolean,
    showRequireMark: {
      type: Boolean,
      default: undefined
    },
    requireMarkPlacement: String,
    showFeedback: {
      type: Boolean,
      default: undefined
    },
    rule: [Object, Array],
    size: String,
    ignorePathChange: Boolean,
    validationStatus: String,
    feedback: String,
    showLabel: {
      type: Boolean,
      default: undefined
    }
  }
)
exports.formItemPropKeys = (0, _utils_1.keysOf)(exports.formItemProps)
// wrap sync validator
function wrapValidator(validator, async) {
  return (...args) => {
    var _a
    try {
      const validateResult = validator(...args)
      if (
        (!async &&
          (typeof validateResult === 'boolean' ||
            validateResult instanceof Error ||
            Array.isArray(validateResult))) || // Error[]
        ((_a = validateResult) === null || _a === void 0 ? void 0 : _a.then)
      ) {
        return validateResult
      } else if (validateResult === undefined) {
        return true
      } else {
        ;(0, _utils_1.warn)(
          'form-item/validate',
          `You return a ${typeof validateResult} ` +
            'typed value in the validator method, which is not recommended. Please use ' +
            (async ? '`Promise`' : '`boolean`, `Error` or `Promise`') +
            ' typed value instead.'
        )
        return true
      }
    } catch (err) {
      ;(0, _utils_1.warn)(
        'form-item/validate',
        'An error is catched in the validation, ' +
          "so the validation won't be done. Your callback in `validate` method of " +
          "`n-form` or `n-form-item` won't be called in this validation."
      )
      console.error(err)
      // If returns undefined, async-validator won't trigger callback
      // so the result will be abandoned, which means not true and not false
      return undefined
    }
  }
}
exports.default = (0, vue_1.defineComponent)({
  name: 'FormItem',
  props: exports.formItemProps,
  setup(props) {
    ;(0, _utils_1.useInjectionInstanceCollection)(
      interface_1.formItemInstsInjectionKey,
      'formItems',
      (0, vue_1.toRef)(props, 'path')
    )
    const { mergedClsPrefixRef } = (0, _mixins_1.useConfig)(props)
    const NForm = (0, vue_1.inject)(interface_1.formInjectionKey, null)
    const formItemSizeRefs = (0, utils_1.formItemSize)(props)
    const formItemMiscRefs = (0, utils_1.formItemMisc)(props)
    const { validationErrored: validationErroredRef } = formItemMiscRefs
    const { mergedRequired: mergedRequiredRef, mergedRules: mergedRulesRef } =
      (0, utils_1.formItemRule)(props)
    const { mergedSize: mergedSizeRef } = formItemSizeRefs
    const {
      mergedLabelPlacement: labelPlacementRef,
      mergedLabelAlign: labelTextAlignRef
    } = formItemMiscRefs
    const explainsRef = (0, vue_1.ref)([])
    const feedbackIdRef = (0, vue_1.ref)((0, seemly_1.createId)())
    const hasFeedbackRef = (0, vue_1.computed)(() => {
      const { feedback } = props
      if (feedback !== undefined && feedback !== null) return true
      return explainsRef.value.length
    })
    const mergedDisabledRef = NForm
      ? (0, vue_1.toRef)(NForm, 'disabled')
      : (0, vue_1.ref)(false)
    const themeRef = (0, _mixins_1.useTheme)(
      'Form',
      'FormItem',
      form_item_cssr_1.default,
      styles_1.formLight,
      props,
      mergedClsPrefixRef
    )
    ;(0, vue_1.watch)((0, vue_1.toRef)(props, 'path'), () => {
      if (props.ignorePathChange) return
      restoreValidation()
    })
    function restoreValidation() {
      explainsRef.value = []
      validationErroredRef.value = false
      if (props.feedback) {
        feedbackIdRef.value = (0, seemly_1.createId)()
      }
    }
    function handleContentBlur() {
      void internalValidate('blur')
    }
    function handleContentChange() {
      void internalValidate('change')
    }
    function handleContentFocus() {
      void internalValidate('focus')
    }
    function handleContentInput() {
      void internalValidate('input')
    }
    function validate(options, callback) {
      return __awaiter(this, void 0, void 0, function* () {
        /** the following code is for compatibility */
        let trigger
        let validateCallback
        let shouldRuleBeApplied
        let asyncValidatorOptions
        if (typeof options === 'string') {
          trigger = options
          validateCallback = callback
        } else if (options !== null && typeof options === 'object') {
          trigger = options.trigger
          validateCallback = options.callback
          shouldRuleBeApplied = options.shouldRuleBeApplied
          asyncValidatorOptions = options.options
        }
        return yield new Promise((resolve, reject) => {
          void internalValidate(
            trigger,
            shouldRuleBeApplied,
            asyncValidatorOptions
          ).then(({ valid, errors }) => {
            if (valid) {
              if (validateCallback) {
                validateCallback()
              }
              resolve()
            } else {
              if (validateCallback) {
                validateCallback(errors)
              }
              // eslint-disable-next-line prefer-promise-reject-errors
              reject(errors)
            }
          })
        })
      })
    }
    const internalValidate = (
      trigger = null,
      shouldRuleBeApplied = () => true,
      options = {
        suppressWarning: true
      }
    ) =>
      __awaiter(this, void 0, void 0, function* () {
        const { path } = props
        if (!options) {
          options = {}
        } else {
          if (!options.first) options.first = props.first
        }
        const { value: rules } = mergedRulesRef
        // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
        const value = NForm
          ? (0, lodash_1.get)(NForm.model, path, null)
          : undefined
        const activeRules = (
          !trigger
            ? rules
            : rules.filter((rule) => {
                // if (rule.trigger === undefined) return true
                if (Array.isArray(rule.trigger)) {
                  return rule.trigger.includes(trigger)
                } else {
                  return rule.trigger === trigger
                }
              })
        )
          .filter(shouldRuleBeApplied)
          .map((rule) => {
            const shallowClonedRule = Object.assign({}, rule)
            if (shallowClonedRule.validator) {
              shallowClonedRule.validator = wrapValidator(
                shallowClonedRule.validator,
                false
              )
            }
            if (shallowClonedRule.asyncValidator) {
              shallowClonedRule.asyncValidator = wrapValidator(
                shallowClonedRule.asyncValidator,
                true
              )
            }
            return shallowClonedRule
          })
        if (!activeRules.length) {
          return yield Promise.resolve({
            valid: true
          })
        }
        const mergedPath =
          path !== null && path !== void 0 ? path : '__n_no_path__'
        const validator = new async_validator_1.default({
          [mergedPath]: activeRules
        })
        return yield new Promise((resolve) => {
          void validator.validate(
            { [mergedPath]: value },
            options,
            (errors, fields) => {
              if (
                errors === null || errors === void 0 ? void 0 : errors.length
              ) {
                explainsRef.value = errors.map(
                  (error) =>
                    (error === null || error === void 0
                      ? void 0
                      : error.message) || ''
                )
                validationErroredRef.value = true
                resolve({
                  valid: false,
                  errors
                })
              } else {
                restoreValidation()
                resolve({
                  valid: true
                })
              }
            }
          )
        })
      })
    ;(0, vue_1.provide)(use_form_item_1.formItemInjectionKey, {
      path: (0, vue_1.toRef)(props, 'path'),
      disabled: mergedDisabledRef,
      mergedSize: formItemSizeRefs.mergedSize,
      restoreValidation,
      handleContentBlur,
      handleContentChange,
      handleContentFocus,
      handleContentInput
    })
    const exposedRef = {
      validate,
      restoreValidation,
      internalValidate
    }
    return Object.assign(
      Object.assign(
        Object.assign(
          Object.assign(
            {
              mergedClsPrefix: mergedClsPrefixRef,
              mergedRequired: mergedRequiredRef,
              hasFeedback: hasFeedbackRef,
              feedbackId: feedbackIdRef,
              explains: explainsRef
            },
            formItemMiscRefs
          ),
          formItemSizeRefs
        ),
        exposedRef
      ),
      {
        cssVars: (0, vue_1.computed)(() => {
          var _a
          const { value: size } = mergedSizeRef
          const { value: labelPlacement } = labelPlacementRef
          const direction = labelPlacement === 'top' ? 'vertical' : 'horizontal'
          const {
            common: { cubicBezierEaseInOut },
            self: {
              labelTextColor,
              asteriskColor,
              lineHeight,
              feedbackTextColor,
              feedbackTextColorWarning,
              feedbackTextColorError,
              feedbackPadding,
              [(0, _utils_1.createKey)('labelHeight', size)]: labelHeight,
              [(0, _utils_1.createKey)('blankHeight', size)]: blankHeight,
              [(0, _utils_1.createKey)('feedbackFontSize', size)]:
                feedbackFontSize,
              [(0, _utils_1.createKey)('feedbackHeight', size)]: feedbackHeight,
              [(0, _utils_1.createKey)('labelPadding', direction)]:
                labelPadding,
              [(0, _utils_1.createKey)('labelTextAlign', direction)]:
                labelTextAlign,
              [(0, _utils_1.createKey)(
                (0, _utils_1.createKey)('labelFontSize', labelPlacement),
                size
              )]: labelFontSize
            }
          } = themeRef.value
          let mergedLabelTextAlign =
            (_a = labelTextAlignRef.value) !== null && _a !== void 0
              ? _a
              : labelTextAlign
          if (labelPlacement === 'top') {
            mergedLabelTextAlign =
              mergedLabelTextAlign === 'right' ? 'flex-end' : 'flex-start'
          }
          const cssVars = {
            '--bezier': cubicBezierEaseInOut,
            '--line-height': lineHeight,
            '--blank-height': blankHeight,
            '--label-font-size': labelFontSize,
            '--label-text-align': mergedLabelTextAlign,
            '--label-height': labelHeight,
            '--label-padding': labelPadding,
            '--asterisk-color': asteriskColor,
            '--label-text-color': labelTextColor,
            '--feedback-padding': feedbackPadding,
            '--feedback-font-size': feedbackFontSize,
            '--feedback-height': feedbackHeight,
            '--feedback-text-color': feedbackTextColor,
            '--feedback-text-color-warning': feedbackTextColorWarning,
            '--feedback-text-color-error': feedbackTextColorError
          }
          return cssVars
        })
      }
    )
  },
  render() {
    const {
      $slots,
      mergedClsPrefix,
      mergedShowLabel,
      mergedShowRequireMark,
      mergedRequireMarkPlacement
    } = this
    return (0, vue_1.h)(
      'div',
      {
        class: [
          `${mergedClsPrefix}-form-item`,
          `${mergedClsPrefix}-form-item--${this.mergedSize}-size`,
          `${mergedClsPrefix}-form-item--${this.mergedLabelPlacement}-labelled`,
          !mergedShowLabel && `${mergedClsPrefix}-form-item--no-label`
        ],
        style: this.cssVars
      },
      mergedShowLabel && (this.label || $slots.label)
        ? (0, vue_1.h)(
            'label',
            {
              class: `${mergedClsPrefix}-form-item-label`,
              style: this.mergedLabelStyle
            },
            mergedRequireMarkPlacement !== 'left'
              ? (0, vue_1.renderSlot)($slots, 'label', undefined, () => [
                  this.label
                ])
              : null,
            (
              mergedShowRequireMark !== undefined
                ? mergedShowRequireMark
                : this.mergedRequired
            )
              ? (0, vue_1.h)(
                  'span',
                  { class: `${mergedClsPrefix}-form-item-label__asterisk` },
                  mergedRequireMarkPlacement !== 'left' ? '\u00A0*' : '*\u00A0'
                )
              : null,
            mergedRequireMarkPlacement === 'left'
              ? (0, vue_1.renderSlot)($slots, 'label', undefined, () => [
                  this.label
                ])
              : null
          )
        : null,
      (0, vue_1.h)(
        'div',
        {
          class: [
            `${mergedClsPrefix}-form-item-blank`,
            this.mergedValidationStatus &&
              `${mergedClsPrefix}-form-item-blank--${this.mergedValidationStatus}`
          ]
        },
        $slots
      ),
      this.mergedShowFeedback
        ? (0, vue_1.h)(
            'div',
            {
              key: this.feedbackId,
              class: `${mergedClsPrefix}-form-item-feedback-wrapper`
            },
            (0, vue_1.h)(
              vue_1.Transition,
              { name: 'fade-down-transition', mode: 'out-in' },
              {
                default: () => {
                  const feedbacks = (0, vue_1.h)(Feedbacks_1.default, {
                    clsPrefix: mergedClsPrefix,
                    explains: this.explains,
                    feedback: this.feedback
                  })
                  const { hasFeedback, mergedValidationStatus } = this
                  return hasFeedback
                    ? mergedValidationStatus === 'warning'
                      ? (0, vue_1.h)(
                          'div',
                          {
                            key: 'controlled-warning',
                            class: `${mergedClsPrefix}-form-item-feedback ${mergedClsPrefix}-form-item-feedback--warning`
                          },
                          feedbacks
                        )
                      : mergedValidationStatus === 'error'
                      ? (0, vue_1.h)(
                          'div',
                          {
                            key: 'controlled-error',
                            class: `${mergedClsPrefix}-form-item-feedback ${mergedClsPrefix}-form-item-feedback--error`
                          },
                          feedbacks
                        )
                      : mergedValidationStatus === 'success'
                      ? (0, vue_1.h)(
                          'div',
                          {
                            key: 'controlled-success',
                            class: `${mergedClsPrefix}-form-item-feedback ${mergedClsPrefix}-form-item-feedback--success`
                          },
                          feedbacks
                        )
                      : (0, vue_1.h)(
                          'div',
                          {
                            key: 'controlled-default',
                            class: `${mergedClsPrefix}-form-item-feedback`
                          },
                          feedbacks
                        )
                    : null
                }
              }
            )
          )
        : null
    )
  }
})