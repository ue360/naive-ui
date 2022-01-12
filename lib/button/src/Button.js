'use strict'
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod }
  }
Object.defineProperty(exports, '__esModule', { value: true })
exports.XButton = void 0
const vue_1 = require('vue')
const vooks_1 = require('vooks')
const index_1 = require('../../_utils/color/index')
const _mixins_1 = require('../../_mixins')
const _internal_1 = require('../../_internal')
const _utils_1 = require('../../_utils')
const styles_1 = require('../styles')
const ButtonGroup_1 = require('./ButtonGroup')
const button_cssr_1 = __importDefault(require('./styles/button.cssr'))
const use_rtl_1 = __importDefault(require('../../_mixins/use-rtl'))
const seemly_1 = require('seemly')
const buttonProps = Object.assign(Object.assign({}, _mixins_1.useTheme.props), {
  color: String,
  textColor: String,
  text: Boolean,
  block: Boolean,
  loading: Boolean,
  disabled: Boolean,
  circle: Boolean,
  size: String,
  ghost: Boolean,
  round: Boolean,
  secondary: Boolean,
  tertiary: Boolean,
  quaternary: Boolean,
  strong: Boolean,
  focusable: {
    type: Boolean,
    default: true
  },
  keyboard: {
    type: Boolean,
    default: true
  },
  tag: {
    type: String,
    default: 'button'
  },
  type: {
    type: String,
    default: 'default'
  },
  dashed: Boolean,
  iconPlacement: {
    type: String,
    default: 'left'
  },
  attrType: {
    type: String,
    default: 'button'
  },
  onClick: [Function, Array],
  bordered: {
    type: Boolean,
    default: true
  }
})
const Button = (0, vue_1.defineComponent)({
  name: 'Button',
  props: buttonProps,
  setup(props) {
    if (process.env.NODE_ENV !== 'production') {
      ;(0, vue_1.watchEffect)(() => {
        const { dashed, ghost, text, secondary, tertiary, quaternary } = props
        if (
          (dashed || ghost || text) &&
          (secondary || tertiary || quaternary)
        ) {
          ;(0, _utils_1.warnOnce)(
            'button',
            "`dashed`, `ghost` and `text` props can't be used along with `secondary`, `tertiary` and `quaterary` props."
          )
        }
      })
    }
    const selfRef = (0, vue_1.ref)(null)
    const waveRef = (0, vue_1.ref)(null)
    const enterPressedRef = (0, vue_1.ref)(false)
    const showBorderRef = (0, vooks_1.useMemo)(() => {
      return (
        !props.quaternary &&
        !props.tertiary &&
        !props.secondary &&
        !props.text &&
        (!props.color || props.ghost || props.dashed) &&
        props.bordered
      )
    })
    const NButtonGroup = (0, vue_1.inject)(
      ButtonGroup_1.buttonGroupInjectionKey,
      {}
    )
    const { mergedSizeRef } = (0, _mixins_1.useFormItem)(
      {},
      {
        defaultSize: 'medium',
        mergedSize: (NFormItem) => {
          const { size } = props
          if (size) return size
          const { size: buttonGroupSize } = NButtonGroup
          if (buttonGroupSize) return buttonGroupSize
          const { mergedSize: formItemSize } = NFormItem || {}
          if (formItemSize) {
            return formItemSize.value
          }
          return 'medium'
        }
      }
    )
    const mergedFocusableRef = (0, vue_1.computed)(() => {
      return props.focusable && !props.disabled
    })
    const handleMousedown = (e) => {
      var _a
      e.preventDefault()
      if (props.disabled) {
        return
      }
      if (mergedFocusableRef.value) {
        ;(_a = selfRef.value) === null || _a === void 0
          ? void 0
          : _a.focus({ preventScroll: true })
      }
    }
    const handleClick = (e) => {
      if (!props.disabled) {
        const { onClick } = props
        if (onClick) (0, _utils_1.call)(onClick, e)
        if (!props.text) {
          const { value } = waveRef
          if (value) {
            value.play()
          }
        }
      }
    }
    const handleKeyup = (e) => {
      switch (e.code) {
        case 'Enter':
        case 'NumpadEnter':
          if (!props.keyboard) {
            return
          }
          enterPressedRef.value = false
      }
    }
    const handleKeydown = (e) => {
      switch (e.code) {
        case 'Enter':
        case 'NumpadEnter':
          if (!props.keyboard) {
            e.preventDefault()
            return
          }
          enterPressedRef.value = true
      }
    }
    const handleBlur = () => {
      enterPressedRef.value = false
    }
    const { mergedClsPrefixRef, NConfigProvider } = (0, _mixins_1.useConfig)(
      props
    )
    const themeRef = (0, _mixins_1.useTheme)(
      'Button',
      'Button',
      button_cssr_1.default,
      styles_1.buttonLight,
      props,
      mergedClsPrefixRef
    )
    const rtlEnabledRef = (0, use_rtl_1.default)(
      'Button',
      NConfigProvider === null || NConfigProvider === void 0
        ? void 0
        : NConfigProvider.mergedRtlRef,
      mergedClsPrefixRef
    )
    return {
      selfRef,
      waveRef,
      mergedClsPrefix: mergedClsPrefixRef,
      mergedFocusable: mergedFocusableRef,
      mergedSize: mergedSizeRef,
      showBorder: showBorderRef,
      enterPressed: enterPressedRef,
      rtlEnabled: rtlEnabledRef,
      handleMousedown,
      handleKeydown,
      handleBlur,
      handleKeyup,
      handleClick,
      customColorCssVars: (0, vue_1.computed)(() => {
        const { color } = props
        if (!color) return null
        const hoverColor = (0, index_1.createHoverColor)(color)
        return {
          '--border-color': color,
          '--border-color-hover': hoverColor,
          '--border-color-pressed': (0, index_1.createPressedColor)(color),
          '--border-color-focus': hoverColor,
          '--border-color-disabled': color
        }
      }),
      cssVars: (0, vue_1.computed)(() => {
        const theme = themeRef.value
        const {
          common: { cubicBezierEaseInOut, cubicBezierEaseOut },
          self
        } = theme
        const {
          rippleDuration,
          opacityDisabled,
          fontWeight,
          fontWeightStrong
        } = self
        const size = mergedSizeRef.value
        const {
          dashed,
          type,
          ghost,
          text,
          color,
          round,
          circle,
          textColor,
          secondary,
          tertiary,
          quaternary,
          strong
        } = props
        // font
        const fontProps = {
          fontWeight: strong ? fontWeightStrong : fontWeight
        }
        // color
        let colorProps = {
          '--color': 'initial',
          '--color-hover': 'initial',
          '--color-pressed': 'initial',
          '--color-focus': 'initial',
          '--color-disabled': 'initial',
          '--ripple-color': 'initial',
          '--text-color': 'initial',
          '--text-color-hover': 'initial',
          '--text-color-pressed': 'initial',
          '--text-color-focus': 'initial',
          '--text-color-disabled': 'initial'
        }
        const typeIsTertiary = type === 'tertiary'
        const typeIsDefault = type === 'default'
        const mergedType = typeIsTertiary ? 'default' : type
        if (text) {
          const propTextColor = textColor || color
          const mergedTextColor =
            propTextColor ||
            self[(0, _utils_1.createKey)('textColorText', mergedType)]
          colorProps = {
            '--color': '#0000',
            '--color-hover': '#0000',
            '--color-pressed': '#0000',
            '--color-focus': '#0000',
            '--color-disabled': '#0000',
            '--ripple-color': '#0000',
            '--text-color': mergedTextColor,
            '--text-color-hover': propTextColor
              ? (0, index_1.createHoverColor)(propTextColor)
              : self[(0, _utils_1.createKey)('textColorTextHover', mergedType)],
            '--text-color-pressed': propTextColor
              ? (0, index_1.createPressedColor)(propTextColor)
              : self[
                  (0, _utils_1.createKey)('textColorTextPressed', mergedType)
                ],
            '--text-color-focus': propTextColor
              ? (0, index_1.createHoverColor)(propTextColor)
              : self[(0, _utils_1.createKey)('textColorTextHover', mergedType)],
            '--text-color-disabled':
              propTextColor ||
              self[(0, _utils_1.createKey)('textColorTextDisabled', mergedType)]
          }
        } else if (ghost || dashed) {
          const mergedTextColor = textColor || color
          colorProps = {
            '--color': '#0000',
            '--color-hover': '#0000',
            '--color-pressed': '#0000',
            '--color-focus': '#0000',
            '--color-disabled': '#0000',
            '--ripple-color':
              color || self[(0, _utils_1.createKey)('rippleColor', mergedType)],
            '--text-color':
              mergedTextColor ||
              self[(0, _utils_1.createKey)('textColorGhost', mergedType)],
            '--text-color-hover': mergedTextColor
              ? (0, index_1.createHoverColor)(mergedTextColor)
              : self[
                  (0, _utils_1.createKey)('textColorGhostHover', mergedType)
                ],
            '--text-color-pressed': mergedTextColor
              ? (0, index_1.createPressedColor)(mergedTextColor)
              : self[
                  (0, _utils_1.createKey)('textColorGhostPressed', mergedType)
                ],
            '--text-color-focus': mergedTextColor
              ? (0, index_1.createHoverColor)(mergedTextColor)
              : self[
                  (0, _utils_1.createKey)('textColorGhostHover', mergedType)
                ],
            '--text-color-disabled':
              mergedTextColor ||
              self[
                (0, _utils_1.createKey)('textColorGhostDisabled', mergedType)
              ]
          }
        } else if (secondary) {
          const typeTextColor = typeIsDefault
            ? self.textColor
            : typeIsTertiary
            ? self.textColorTertiary
            : self[(0, _utils_1.createKey)('color', mergedType)]
          const mergedTextColor = color || typeTextColor
          const isColoredType = type !== 'default' && type !== 'tertiary'
          colorProps = {
            '--color': isColoredType
              ? (0, seemly_1.changeColor)(mergedTextColor, {
                  alpha: Number(self.colorOpacitySecondary)
                })
              : self.colorSecondary,
            '--color-hover': isColoredType
              ? (0, seemly_1.changeColor)(mergedTextColor, {
                  alpha: Number(self.colorOpacitySecondaryHover)
                })
              : self.colorSecondaryHover,
            '--color-pressed': isColoredType
              ? (0, seemly_1.changeColor)(mergedTextColor, {
                  alpha: Number(self.colorOpacitySecondaryPressed)
                })
              : self.colorSecondaryPressed,
            '--color-focus': isColoredType
              ? (0, seemly_1.changeColor)(mergedTextColor, {
                  alpha: Number(self.colorOpacitySecondaryHover)
                })
              : self.colorSecondaryHover,
            '--color-disabled': self.colorSecondary,
            '--ripple-color': '#0000',
            '--text-color': mergedTextColor,
            '--text-color-hover': mergedTextColor,
            '--text-color-pressed': mergedTextColor,
            '--text-color-focus': mergedTextColor,
            '--text-color-disabled': mergedTextColor
          }
        } else if (tertiary || quaternary) {
          const typeColor = typeIsDefault
            ? self.textColor
            : typeIsTertiary
            ? self.textColorTertiary
            : self[(0, _utils_1.createKey)('color', mergedType)]
          const mergedColor = color || typeColor
          if (tertiary) {
            colorProps['--color'] = self.colorTertiary
            colorProps['--color-hover'] = self.colorTertiaryHover
            colorProps['--color-pressed'] = self.colorTertiaryPressed
            colorProps['--color-focus'] = self.colorSecondaryHover
            colorProps['--color-disabled'] = self.colorTertiary
          } else {
            colorProps['--color'] = self.colorQuaternary
            colorProps['--color-hover'] = self.colorQuaternaryHover
            colorProps['--color-pressed'] = self.colorQuaternaryPressed
            colorProps['--color-focus'] = self.colorQuaternaryHover
            colorProps['--color-disabled'] = self.colorQuaternary
          }
          colorProps['--ripple-color'] = '#0000'
          colorProps['--text-color'] = mergedColor
          colorProps['--text-color-hover'] = mergedColor
          colorProps['--text-color-pressed'] = mergedColor
          colorProps['--text-color-focus'] = mergedColor
          colorProps['--text-color-disabled'] = mergedColor
        } else {
          colorProps = {
            '--color':
              color || self[(0, _utils_1.createKey)('color', mergedType)],
            '--color-hover': color
              ? (0, index_1.createHoverColor)(color)
              : self[(0, _utils_1.createKey)('colorHover', mergedType)],
            '--color-pressed': color
              ? (0, index_1.createPressedColor)(color)
              : self[(0, _utils_1.createKey)('colorPressed', mergedType)],
            '--color-focus': color
              ? (0, index_1.createHoverColor)(color)
              : self[(0, _utils_1.createKey)('colorFocus', mergedType)],
            '--color-disabled':
              color ||
              self[(0, _utils_1.createKey)('colorDisabled', mergedType)],
            '--ripple-color':
              color || self[(0, _utils_1.createKey)('rippleColor', mergedType)],
            '--text-color':
              textColor ||
              (color
                ? self.textColorPrimary
                : typeIsTertiary
                ? self.textColorTertiary
                : self[(0, _utils_1.createKey)('textColor', mergedType)]),
            '--text-color-hover':
              textColor ||
              (color
                ? self.textColorHoverPrimary
                : self[(0, _utils_1.createKey)('textColorHover', mergedType)]),
            '--text-color-pressed':
              textColor ||
              (color
                ? self.textColorPressedPrimary
                : self[
                    (0, _utils_1.createKey)('textColorPressed', mergedType)
                  ]),
            '--text-color-focus':
              textColor ||
              (color
                ? self.textColorFocusPrimary
                : self[(0, _utils_1.createKey)('textColorFocus', mergedType)]),
            '--text-color-disabled':
              textColor ||
              (color
                ? self.textColorDisabledPrimary
                : self[
                    (0, _utils_1.createKey)('textColorDisabled', mergedType)
                  ])
          }
        }
        // border
        let borderProps = {
          '--border': 'initial',
          '--border-hover': 'initial',
          '--border-pressed': 'initial',
          '--border-focus': 'initial',
          '--border-disabled': 'initial'
        }
        if (text) {
          borderProps = {
            '--border': 'none',
            '--border-hover': 'none',
            '--border-pressed': 'none',
            '--border-focus': 'none',
            '--border-disabled': 'none'
          }
        } else {
          borderProps = {
            '--border': self[(0, _utils_1.createKey)('border', mergedType)],
            '--border-hover':
              self[(0, _utils_1.createKey)('borderHover', mergedType)],
            '--border-pressed':
              self[(0, _utils_1.createKey)('borderPressed', mergedType)],
            '--border-focus':
              self[(0, _utils_1.createKey)('borderFocus', mergedType)],
            '--border-disabled':
              self[(0, _utils_1.createKey)('borderDisabled', mergedType)]
          }
        }
        // size
        const {
          [(0, _utils_1.createKey)('height', size)]: height,
          [(0, _utils_1.createKey)('fontSize', size)]: fontSize,
          [(0, _utils_1.createKey)('padding', size)]: padding,
          [(0, _utils_1.createKey)('paddingRound', size)]: paddingRound,
          [(0, _utils_1.createKey)('iconSize', size)]: iconSize,
          [(0, _utils_1.createKey)('borderRadius', size)]: borderRadius,
          [(0, _utils_1.createKey)('iconMargin', size)]: iconMargin,
          waveOpacity
        } = self
        const sizeProps = {
          '--width': circle && !text ? height : 'initial',
          '--height': text ? 'initial' : height,
          '--font-size': fontSize,
          '--padding': circle
            ? 'initial'
            : text
            ? 'initial'
            : round
            ? paddingRound
            : padding,
          '--icon-size': iconSize,
          '--icon-margin': iconMargin,
          '--border-radius': text
            ? 'initial'
            : circle || round
            ? height
            : borderRadius
        }
        return Object.assign(
          Object.assign(
            Object.assign(
              Object.assign(
                {
                  '--bezier': cubicBezierEaseInOut,
                  '--bezier-ease-out': cubicBezierEaseOut,
                  '--ripple-duration': rippleDuration,
                  '--opacity-disabled': opacityDisabled,
                  '--wave-opacity': waveOpacity
                },
                fontProps
              ),
              colorProps
            ),
            borderProps
          ),
          sizeProps
        )
      })
    }
  },
  render() {
    const { $slots, mergedClsPrefix, tag: Component } = this
    return (0, vue_1.h)(
      Component,
      {
        ref: 'selfRef',
        class: [
          `${mergedClsPrefix}-button`,
          `${mergedClsPrefix}-button--${this.type}-type`,
          `${mergedClsPrefix}-button--${this.mergedSize}-type`,
          this.rtlEnabled && `${mergedClsPrefix}-button--rtl`,
          this.disabled && `${mergedClsPrefix}-button--disabled`,
          this.block && `${mergedClsPrefix}-button--block`,
          this.enterPressed && `${mergedClsPrefix}-button--pressed`,
          !this.text && this.dashed && `${mergedClsPrefix}-button--dashed`,
          this.color && `${mergedClsPrefix}-button--color`,
          this.secondary && `${mergedClsPrefix}-button--secondary`,
          this.ghost && `${mergedClsPrefix}-button--ghost` // required for button group border collapse
        ],
        tabindex: this.mergedFocusable ? 0 : -1,
        type: this.attrType,
        style: this.cssVars,
        disabled: this.disabled,
        onClick: this.handleClick,
        onBlur: this.handleBlur,
        onMousedown: this.handleMousedown,
        onKeyup: this.handleKeyup,
        onKeydown: this.handleKeydown
      },
      $slots.default && this.iconPlacement === 'right'
        ? (0, vue_1.h)(
            'div',
            { class: `${mergedClsPrefix}-button__content` },
            $slots
          )
        : null,
      (0, vue_1.h)(
        _internal_1.NFadeInExpandTransition,
        { width: true },
        {
          default: () =>
            $slots.icon || this.loading
              ? (0, vue_1.h)(
                  'span',
                  {
                    class: `${mergedClsPrefix}-button__icon`,
                    style: {
                      margin: !$slots.default ? 0 : ''
                    }
                  },
                  (0, vue_1.h)(_internal_1.NIconSwitchTransition, null, {
                    default: () =>
                      this.loading
                        ? (0, vue_1.h)(_internal_1.NBaseLoading, {
                            clsPrefix: mergedClsPrefix,
                            key: 'loading',
                            class: `${mergedClsPrefix}-icon-slot`,
                            strokeWidth: 20
                          })
                        : (0, vue_1.h)(
                            'div',
                            {
                              key: 'icon',
                              class: `${mergedClsPrefix}-icon-slot`,
                              role: 'none'
                            },
                            (0, vue_1.renderSlot)($slots, 'icon')
                          )
                  })
                )
              : null
        }
      ),
      $slots.default && this.iconPlacement === 'left'
        ? (0, vue_1.h)(
            'span',
            { class: `${mergedClsPrefix}-button__content` },
            $slots
          )
        : null,
      !this.text
        ? (0, vue_1.h)(_internal_1.NBaseWave, {
            ref: 'waveRef',
            clsPrefix: mergedClsPrefix
          })
        : null,
      this.showBorder
        ? (0, vue_1.h)('div', {
            'aria-hidden': true,
            class: `${mergedClsPrefix}-button__border`,
            style: this.customColorCssVars
          })
        : null,
      this.showBorder
        ? (0, vue_1.h)('div', {
            'aria-hidden': true,
            class: `${mergedClsPrefix}-button__state-border`,
            style: this.customColorCssVars
          })
        : null
    )
  }
})
exports.default = Button
// XButton is for tsx type checking
// It's not compitable with render function `h`
// Currently we don't expose it as public
// If there's any issue about this, we may expose it
// Since most people use template, the type checking phase doesn't work as tsx
exports.XButton = Button
// Also, we may make XButton a generic type which support `tag` prop
// but currently vue doesn't export IntrinsicElementAttributes from runtime-dom
// so we can't easily make an attr map by hand
// just leave it for later
