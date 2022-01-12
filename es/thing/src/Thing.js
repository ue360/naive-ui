import { h, renderSlot, defineComponent, computed, Fragment } from 'vue'
import { useConfig, useTheme } from '../../_mixins'
import { thingLight } from '../styles'
import style from './styles/index.cssr'
const thingProps = Object.assign(Object.assign({}, useTheme.props), {
  title: String,
  titleExtra: String,
  description: String,
  content: String,
  contentIndented: {
    type: Boolean,
    default: false
  }
})
export default defineComponent({
  name: 'Thing',
  props: thingProps,
  setup(props, { slots }) {
    const { mergedClsPrefixRef } = useConfig(props)
    const themeRef = useTheme(
      'Thing',
      'Thing',
      style,
      thingLight,
      props,
      mergedClsPrefixRef
    )
    const cssVarsRef = computed(() => {
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
      return h(
        'div',
        { class: `${mergedClsPrefix}-thing`, style: cssVarsRef.value },
        slots.avatar && props.contentIndented
          ? h(
              'div',
              { class: `${mergedClsPrefix}-thing-avatar` },
              renderSlot(slots, 'avatar')
            )
          : null,
        h(
          'div',
          { class: `${mergedClsPrefix}-thing-main` },
          !props.contentIndented &&
            (slots.header ||
              props.title ||
              slots['header-extra'] ||
              props.titleExtra ||
              slots.avatar)
            ? h(
                'div',
                { class: `${mergedClsPrefix}-thing-avatar-header-wrapper` },
                slots.avatar
                  ? h(
                      'div',
                      { class: `${mergedClsPrefix}-thing-avatar` },
                      renderSlot(slots, 'avatar')
                    )
                  : null,
                slots.header ||
                  props.title ||
                  slots['header-extra'] ||
                  props.titleExtra
                  ? h(
                      'div',
                      { class: `${mergedClsPrefix}-thing-header-wrapper` },
                      h(
                        'div',
                        { class: `${mergedClsPrefix}-thing-header` },
                        slots.header || props.title
                          ? h(
                              'div',
                              {
                                class: `${mergedClsPrefix}-thing-header__title`
                              },
                              renderSlot(slots, 'header', undefined, () => [
                                props.title
                              ])
                            )
                          : null,
                        slots['header-extra'] || props.titleExtra
                          ? h(
                              'div',
                              {
                                class: `${mergedClsPrefix}-thing-header__extra`
                              },
                              renderSlot(
                                slots,
                                'header-extra',
                                undefined,
                                () => [props.titleExtra]
                              )
                            )
                          : null
                      ),
                      slots.description || props.description
                        ? h(
                            'div',
                            {
                              class: `${mergedClsPrefix}-thing-main__description`
                            },
                            renderSlot(slots, 'description', undefined, () => [
                              props.description
                            ])
                          )
                        : null
                    )
                  : null
              )
            : h(
                Fragment,
                null,
                slots.header ||
                  props.title ||
                  slots['header-extra'] ||
                  props.titleExtra
                  ? h(
                      'div',
                      { class: `${mergedClsPrefix}-thing-header` },
                      slots.header || props.title
                        ? h(
                            'div',
                            { class: `${mergedClsPrefix}-thing-header__title` },
                            renderSlot(slots, 'header', undefined, () => [
                              props.title
                            ])
                          )
                        : null,
                      slots['header-extra'] || props.titleExtra
                        ? h(
                            'div',
                            { class: `${mergedClsPrefix}-thing-header__extra` },
                            renderSlot(slots, 'header-extra', undefined, () => [
                              props.titleExtra
                            ])
                          )
                        : null
                    )
                  : null,
                slots.description || props.description
                  ? h(
                      'div',
                      { class: `${mergedClsPrefix}-thing-main__description` },
                      renderSlot(slots, 'description', undefined, () => [
                        props.description
                      ])
                    )
                  : null
              ),
          slots.default || props.content
            ? h(
                'div',
                { class: `${mergedClsPrefix}-thing-main__content` },
                renderSlot(slots, 'default', undefined, () => [props.content])
              )
            : null,
          slots.footer
            ? h(
                'div',
                { class: `${mergedClsPrefix}-thing-main__footer` },
                renderSlot(slots, 'footer')
              )
            : null,
          slots.action
            ? h(
                'div',
                { class: `${mergedClsPrefix}-thing-main__action` },
                renderSlot(slots, 'action')
              )
            : null
        )
      )
    }
  }
})
