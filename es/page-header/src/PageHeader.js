/* eslint-disable @typescript-eslint/no-non-null-assertion */
import { h, defineComponent, computed } from 'vue'
import { useConfig, useTheme } from '../../_mixins'
import { pageHeaderLight } from '../styles/light'
import style from './styles/index.cssr'
import { ArrowBackIcon } from '../../_internal/icons'
import { NBaseIcon } from '../../_internal'
import useRtl from '../../_mixins/use-rtl'
const pageHeaderProps = Object.assign(Object.assign({}, useTheme.props), {
  title: String,
  subtitle: String,
  extra: String,
  onBack: Function
})
export default defineComponent({
  name: 'PageHeader',
  props: pageHeaderProps,
  setup(props) {
    const { mergedClsPrefixRef, NConfigProvider } = useConfig(props)
    const themeRef = useTheme(
      'PageHeader',
      'PageHeader',
      style,
      pageHeaderLight,
      props,
      mergedClsPrefixRef
    )
    const rtlEnabledRef = useRtl(
      'PageHeader',
      NConfigProvider === null || NConfigProvider === void 0
        ? void 0
        : NConfigProvider.mergedRtlRef,
      mergedClsPrefixRef
    )
    return {
      rtlEnabled: rtlEnabledRef,
      mergedClsPrefix: mergedClsPrefixRef,
      cssVars: computed(() => {
        const {
          self: {
            titleTextColor,
            subtitleTextColor,
            backColor,
            fontSize,
            titleFontSize,
            backSize,
            titleFontWeight,
            backColorHover,
            backColorPressed
          },
          common: { cubicBezierEaseInOut }
        } = themeRef.value
        return {
          '--title-text-color': titleTextColor,
          '--title-font-size': titleFontSize,
          '--title-font-weight': titleFontWeight,
          '--font-size': fontSize,
          '--back-size': backSize,
          '--subtitle-text-color': subtitleTextColor,
          '--back-color': backColor,
          '--back-color-hover': backColorHover,
          '--back-color-pressed': backColorPressed,
          '--bezier': cubicBezierEaseInOut
        }
      })
    }
  },
  render() {
    const { onBack, title, subtitle, extra, mergedClsPrefix, cssVars, $slots } =
      this
    const {
      title: titleSlot,
      subtitle: subtitleSlot,
      extra: extraSlot,
      default: defaultSlot,
      header: headerSlot,
      avatar: avatarSlot,
      footer: footerSlot
    } = $slots
    const showBack = onBack
    const showTitle = title || titleSlot
    const showSubtitle = subtitle || subtitleSlot
    const showExtra = extra || extraSlot
    return h(
      'div',
      {
        style: cssVars,
        class: [
          `${mergedClsPrefix}-page-header-wrapper`,
          this.rtlEnabled && `${mergedClsPrefix}-page-header-wrapper--rtl`
        ]
      },
      headerSlot
        ? h(
            'div',
            {
              class: `${mergedClsPrefix}-page-header-header`,
              key: 'breadcrumn'
            },
            headerSlot()
          )
        : null,
      h(
        'div',
        { class: `${mergedClsPrefix}-page-header`, key: 'header' },
        h(
          'div',
          { class: `${mergedClsPrefix}-page-header__main`, key: 'back' },
          showBack
            ? h(
                'div',
                {
                  class: `${mergedClsPrefix}-page-header__back`,
                  onClick: onBack
                },
                h(
                  NBaseIcon,
                  { clsPrefix: mergedClsPrefix },
                  {
                    default: () => h(ArrowBackIcon, null)
                  }
                )
              )
            : null,
          avatarSlot
            ? h(
                'div',
                { class: `${mergedClsPrefix}-page-header__avatar` },
                avatarSlot()
              )
            : null,
          showTitle
            ? h(
                'div',
                {
                  class: `${mergedClsPrefix}-page-header__title`,
                  key: 'title'
                },
                title || titleSlot()
              )
            : null,
          showSubtitle
            ? h(
                'div',
                {
                  class: `${mergedClsPrefix}-page-header__subtitle`,
                  key: 'subtitle'
                },
                subtitle || subtitleSlot()
              )
            : null
        ),
        showExtra
          ? h(
              'div',
              { class: `${mergedClsPrefix}-page-header__extra` },
              extra || extraSlot()
            )
          : null
      ),
      defaultSlot
        ? h(
            'div',
            { class: `${mergedClsPrefix}-page-header-content`, key: 'content' },
            defaultSlot()
          )
        : null,
      footerSlot
        ? h(
            'div',
            { class: `${mergedClsPrefix}-page-header-footer`, key: 'footer' },
            footerSlot()
          )
        : null
    )
  }
})
