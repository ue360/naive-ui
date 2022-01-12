import { h, defineComponent, ref, computed, nextTick, toRef } from 'vue'
import { useMergedState } from 'vooks'
import commonProps from '../../tag/src/common-props'
import { AddIcon } from '../../_internal/icons'
import { NButton } from '../../button'
import { NSpace } from '../../space'
import { NInput } from '../../input'
import { NTag } from '../../tag'
import { NBaseIcon } from '../../_internal'
import { useTheme, useFormItem, useLocale, useConfig } from '../../_mixins'
import { warn, call, smallerSize } from '../../_utils'
import { dynamicTagsLight } from '../styles'
import style from './styles/index.cssr'
const dynamicTagsProps = Object.assign(
  Object.assign(Object.assign({}, useTheme.props), commonProps),
  {
    closable: {
      type: Boolean,
      default: true
    },
    defaultValue: {
      type: Array,
      default: () => []
    },
    value: Array,
    inputStyle: [String, Object],
    max: Number,
    tagStyle: [String, Object],
    'onUpdate:value': [Function, Array],
    onUpdateValue: [Function, Array],
    // deprecated
    onChange: {
      type: [Function, Array],
      validator: () => {
        if (process.env.NODE_ENV !== 'production') {
          warn(
            'dynamic-tags',
            '`on-change` is deprecated, please use `on-update:value` instead.'
          )
        }
        return true
      },
      default: undefined
    }
  }
)
export default defineComponent({
  name: 'DynamicTags',
  props: dynamicTagsProps,
  setup(props) {
    const { mergedClsPrefixRef } = useConfig(props)
    const { localeRef } = useLocale('DynamicTags')
    const formItem = useFormItem(props)
    const { mergedDisabledRef } = formItem
    const inputValueRef = ref('')
    const showInputRef = ref(false)
    const inputForceFocusedRef = ref(true)
    const inputInstRef = ref(null)
    const themeRef = useTheme(
      'DynamicTags',
      'DynamicTags',
      style,
      dynamicTagsLight,
      props,
      mergedClsPrefixRef
    )
    const uncontrolledValueRef = ref(props.defaultValue)
    const controlledValueRef = toRef(props, 'value')
    const mergedValueRef = useMergedState(
      controlledValueRef,
      uncontrolledValueRef
    )
    const localizedAddRef = computed(() => {
      return localeRef.value.add
    })
    const inputSizeRef = computed(() => {
      return smallerSize(props.size)
    })
    const triggerDisabledRef = computed(() => {
      return (
        mergedDisabledRef.value ||
        (!!props.max && mergedValueRef.value.length >= props.max)
      )
    })
    function doChange(value) {
      const {
        onChange,
        'onUpdate:value': _onUpdateValue,
        onUpdateValue
      } = props
      const { nTriggerFormInput, nTriggerFormChange } = formItem
      if (onChange) call(onChange, value)
      if (onUpdateValue) call(onUpdateValue, value)
      if (_onUpdateValue) call(_onUpdateValue, value)
      uncontrolledValueRef.value = value
      nTriggerFormInput()
      nTriggerFormChange()
    }
    function handleCloseClick(index) {
      const tags = mergedValueRef.value.slice(0)
      tags.splice(index, 1)
      doChange(tags)
    }
    function handleInputKeyUp(e) {
      switch (e.code) {
        case 'Enter':
        case 'NumpadEnter':
          handleInputConfirm()
      }
    }
    function handleInputConfirm(externalValue) {
      const nextValue =
        externalValue !== null && externalValue !== void 0
          ? externalValue
          : inputValueRef.value
      if (nextValue) {
        const tags = mergedValueRef.value.slice(0)
        tags.push(nextValue)
        doChange(tags)
      }
      showInputRef.value = false
      inputForceFocusedRef.value = true
      inputValueRef.value = ''
    }
    function handleInputBlur() {
      handleInputConfirm()
    }
    function handleAddClick() {
      showInputRef.value = true
      void nextTick(() => {
        var _a
        ;(_a = inputInstRef.value) === null || _a === void 0
          ? void 0
          : _a.focus()
        inputForceFocusedRef.value = false
      })
    }
    return {
      mergedClsPrefix: mergedClsPrefixRef,
      inputInstRef,
      localizedAdd: localizedAddRef,
      inputSize: inputSizeRef,
      inputValue: inputValueRef,
      showInput: showInputRef,
      inputForceFocused: inputForceFocusedRef,
      mergedValue: mergedValueRef,
      mergedDisabled: mergedDisabledRef,
      triggerDisabled: triggerDisabledRef,
      handleInputKeyUp,
      handleAddClick,
      handleInputBlur,
      handleCloseClick,
      handleInputConfirm,
      mergedTheme: themeRef,
      cssVars: computed(() => {
        const {
          self: { inputWidth }
        } = themeRef.value
        return {
          '--input-width': inputWidth
        }
      })
    }
  },
  render() {
    const { mergedTheme, cssVars, mergedClsPrefix } = this
    return h(
      NSpace,
      {
        class: `${mergedClsPrefix}-dynamic-tags`,
        size: 'small',
        style: cssVars,
        theme: mergedTheme.peers.Space,
        themeOverrides: mergedTheme.peerOverrides.Space,
        itemStyle: 'display: flex;'
      },
      {
        default: () => {
          const {
            mergedTheme,
            tagStyle,
            type,
            round,
            size,
            color,
            closable,
            mergedDisabled,
            showInput,
            inputValue,
            inputStyle,
            inputSize,
            inputForceFocused,
            triggerDisabled,
            handleInputKeyUp,
            handleInputBlur,
            handleAddClick,
            handleCloseClick,
            handleInputConfirm,
            $slots
          } = this
          return this.mergedValue
            .map((tag, index) =>
              h(
                NTag,
                {
                  key: index,
                  theme: mergedTheme.peers.Tag,
                  themeOverrides: mergedTheme.peerOverrides.Tag,
                  style: tagStyle,
                  type: type,
                  round: round,
                  size: size,
                  color: color,
                  closable: closable,
                  disabled: mergedDisabled,
                  onClose: () => handleCloseClick(index)
                },
                { default: () => tag }
              )
            )
            .concat(
              showInput
                ? $slots.input
                  ? $slots.input({ submit: handleInputConfirm })
                  : h(NInput, {
                      ref: 'inputInstRef',
                      autosize: true,
                      value: inputValue,
                      onUpdateValue: (v) => {
                        this.inputValue = v
                      },
                      theme: mergedTheme.peers.Input,
                      themeOverrides: mergedTheme.peerOverrides.Input,
                      style: inputStyle,
                      size: inputSize,
                      placeholder: '',
                      onKeyup: handleInputKeyUp,
                      onBlur: handleInputBlur,
                      internalForceFocus: inputForceFocused
                    })
                : $slots.trigger
                ? $slots.trigger({
                    activate: handleAddClick,
                    disabled: triggerDisabled
                  })
                : h(
                    NButton,
                    {
                      dashed: true,
                      disabled: triggerDisabled,
                      theme: mergedTheme.peers.Button,
                      themeOverrides: mergedTheme.peerOverrides.Button,
                      size: inputSize,
                      onClick: handleAddClick
                    },
                    {
                      icon: () =>
                        h(
                          NBaseIcon,
                          { clsPrefix: mergedClsPrefix },
                          { default: () => h(AddIcon, null) }
                        )
                    }
                  )
            )
        }
      }
    )
  }
})
