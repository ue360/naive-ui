'use strict'
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod }
  }
Object.defineProperty(exports, '__esModule', { value: true })
const vue_1 = require('vue')
const _mixins_1 = require('../../_mixins')
const styles_1 = require('../styles')
const index_cssr_1 = __importDefault(require('./styles/index.cssr'))
const thingProps = Object.assign(Object.assign({}, _mixins_1.useTheme.props), {
  title: String,
  titleExtra: String,
  description: String,
  content: String,
  contentIndented: {
    type: Boolean,
    default: false
  }
})
exports.default = (0, vue_1.defineComponent)({
  name: 'Thing',
  props: thingProps,
  setup(props, { slots }) {
    const { mergedClsPrefixRef } = (0, _mixins_1.useConfig)(props)
    const themeRef = (0, _mixins_1.useTheme)(
      'Thing',
      'Thing',
      index_cssr_1.default,
      styles_1.thingLight,
      props,
      mergedClsPrefixRef
    )
    const cssVarsRef = (0, vue_1.computed)(() => {
      const {
        self: { titleTextColor, textColor, titleFontWeight, fontSize },
        common: { cubicBezierEaseInOut }
      } = themeRef.value
      return {
        '--bezier': cubicBezierEaseInOut,
        '--font-size': fontSize,
        '--text-color': textColor,
        '--title-font-weight': titleFontWeight,
        '--title-text-color': titleTextColor
      }
    })
    return () => {
      const { value: mergedClsPrefix } = mergedClsPrefixRef
      return (0, vue_1.h)(
        'div',
        { class: `${mergedClsPrefix}-thing`, style: cssVarsRef.value },
        slots.avatar && props.contentIndented
          ? (0, vue_1.h)(
              'div',
              { class: `${mergedClsPrefix}-thing-avatar` },
              (0, vue_1.renderSlot)(slots, 'avatar')
            )
          : null,
        (0, vue_1.h)(
          'div',
          { class: `${mergedClsPrefix}-thing-main` },
          !props.contentIndented &&
            (slots.header ||
              props.title ||
              slots['header-extra'] ||
              props.titleExtra ||
              slots.avatar)
            ? (0, vue_1.h)(
                'div',
                { class: `${mergedClsPrefix}-thing-avatar-header-wrapper` },
                slots.avatar
                  ? (0, vue_1.h)(
                      'div',
                      { class: `${mergedClsPrefix}-thing-avatar` },
                      (0, vue_1.renderSlot)(slots, 'avatar')
                    )
                  : null,
                slots.header ||
                  props.title ||
                  slots['header-extra'] ||
                  props.titleExtra
                  ? (0, vue_1.h)(
                      'div',
                      { class: `${mergedClsPrefix}-thing-header-wrapper` },
                      (0, vue_1.h)(
                        'div',
                        { class: `${mergedClsPrefix}-thing-header` },
                        slots.header || props.title
                          ? (0, vue_1.h)(
                              'div',
                              {
                                class: `${mergedClsPrefix}-thing-header__title`
                              },
                              (0, vue_1.renderSlot)(
                                slots,
                                'header',
                                undefined,
                                () => [props.title]
                              )
                            )
                          : null,
                        slots['header-extra'] || props.titleExtra
                          ? (0, vue_1.h)(
                              'div',
                              {
                                class: `${mergedClsPrefix}-thing-header__extra`
                              },
                              (0, vue_1.renderSlot)(
                                slots,
                                'header-extra',
                                undefined,
                                () => [props.titleExtra]
                              )
                            )
                          : null
                      ),
                      slots.description || props.description
                        ? (0, vue_1.h)(
                            'div',
                            {
                              class: `${mergedClsPrefix}-thing-main__description`
                            },
                            (0, vue_1.renderSlot)(
                              slots,
                              'description',
                              undefined,
                              () => [props.description]
                            )
                          )
                        : null
                    )
                  : null
              )
            : (0, vue_1.h)(
                vue_1.Fragment,
                null,
                slots.header ||
                  props.title ||
                  slots['header-extra'] ||
                  props.titleExtra
                  ? (0, vue_1.h)(
                      'div',
                      { class: `${mergedClsPrefix}-thing-header` },
                      slots.header || props.title
                        ? (0, vue_1.h)(
                            'div',
                            { class: `${mergedClsPrefix}-thing-header__title` },
                            (0, vue_1.renderSlot)(
                              slots,
                              'header',
                              undefined,
                              () => [props.title]
                            )
                          )
                        : null,
                      slots['header-extra'] || props.titleExtra
                        ? (0, vue_1.h)(
                            'div',
                            { class: `${mergedClsPrefix}-thing-header__extra` },
                            (0, vue_1.renderSlot)(
                              slots,
                              'header-extra',
                              undefined,
                              () => [props.titleExtra]
                            )
                          )
                        : null
                    )
                  : null,
                slots.description || props.description
                  ? (0, vue_1.h)(
                      'div',
                      { class: `${mergedClsPrefix}-thing-main__description` },
                      (0, vue_1.renderSlot)(
                        slots,
                        'description',
                        undefined,
                        () => [props.description]
                      )
                    )
                  : null
              ),
          slots.default || props.content
            ? (0, vue_1.h)(
                'div',
                { class: `${mergedClsPrefix}-thing-main__content` },
                (0, vue_1.renderSlot)(slots, 'default', undefined, () => [
                  props.content
                ])
              )
            : null,
          slots.footer
            ? (0, vue_1.h)(
                'div',
                { class: `${mergedClsPrefix}-thing-main__footer` },
                (0, vue_1.renderSlot)(slots, 'footer')
              )
            : null,
          slots.action
            ? (0, vue_1.h)(
                'div',
                { class: `${mergedClsPrefix}-thing-main__action` },
                (0, vue_1.renderSlot)(slots, 'action')
              )
            : null
        )
      )
    }
  }
})