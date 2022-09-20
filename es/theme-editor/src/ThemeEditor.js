import {
  h,
  computed,
  defineComponent,
  renderSlot,
  ref,
  Fragment,
  toRaw,
  watch
} from 'vue'
import { cloneDeep, merge } from 'lodash-es'
import { lightTheme } from '../../themes/light'
import { NConfigProvider } from '../../config-provider'
import { NPopover } from '../../popover'
import { NScrollbar } from '../../_internal'
import { NCollapse, NCollapseItem } from '../../collapse'
import { NInput } from '../../input'
import { NSpace } from '../../space'
import { useConfig, useLocale } from '../../_mixins'
import { NElement } from '../../element'
import { NDivider } from '../../divider'
import { NButton } from '../../button'
import { NColorPicker } from '../../color-picker'
import { NEmpty } from '../../empty'
const ColorWandIcon = h(
  'svg',
  {
    viewBox: '0 0 16 16',
    fill: 'none',
    xmlns: 'http://www.w3.org/2000/svg',
    style: { width: '1em', height: '1em', color: 'currentColor' }
  },
  h('path', {
    d: 'M13.5 1C13.7761 1 14 1.22386 14 1.5V2H14.5C14.7761 2 15 2.22386 15 2.5C15 2.77614 14.7761 3 14.5 3H14V3.5C14 3.77614 13.7761 4 13.5 4C13.2239 4 13 3.77614 13 3.5V3H12.5C12.2239 3 12 2.77614 12 2.5C12 2.22386 12.2239 2 12.5 2H13V1.5C13 1.22386 13.2239 1 13.5 1Z',
    fill: 'currentColor'
  }),
  h('path', {
    d: 'M3.5 3C3.77615 3 4 3.22386 4 3.5V4H4.5C4.77615 4 5 4.22386 5 4.5C5 4.77614 4.77615 5 4.5 5H4V5.5C4 5.77614 3.77615 6 3.5 6C3.22386 6 3 5.77614 3 5.5V5H2.5C2.22386 5 2 4.77614 2 4.5C2 4.22386 2.22386 4 2.5 4H3V3.5C3 3.22386 3.22386 3 3.5 3Z',
    fill: 'currentColor'
  }),
  h('path', {
    d: 'M12.5 12C12.7761 12 13 11.7761 13 11.5C13 11.2239 12.7761 11 12.5 11H12V10.5C12 10.2239 11.7761 10 11.5 10C11.2239 10 11 10.2239 11 10.5V11H10.5C10.2239 11 10 11.2239 10 11.5C10 11.7761 10.2239 12 10.5 12H11V12.5C11 12.7761 11.2239 13 11.5 13C11.7761 13 12 12.7761 12 12.5V12H12.5Z',
    fill: 'currentColor'
  }),
  h('path', {
    d: 'M8.72956 4.56346C9.4771 3.81592 10.6891 3.81592 11.4367 4.56347C12.1842 5.31102 12.1842 6.52303 11.4367 7.27058L4.26679 14.4404C3.51924 15.1879 2.30723 15.1879 1.55968 14.4404C0.812134 13.6928 0.812138 12.4808 1.55969 11.7333L8.72956 4.56346ZM8.25002 6.4572L2.26679 12.4404C1.90977 12.7974 1.90977 13.3763 2.26679 13.7333C2.62381 14.0903 3.20266 14.0903 3.55968 13.7333L9.54292 7.75009L8.25002 6.4572ZM10.25 7.04299L10.7295 6.56347C11.0866 6.20645 11.0866 5.6276 10.7296 5.27057C10.3725 4.91355 9.79368 4.91355 9.43666 5.27057L8.95713 5.7501L10.25 7.04299Z',
    fill: 'currentColor'
  })
)
// button colorOpacitySecondary var is not color
const showColorPicker = (key) => {
  if (key.includes('opacity')) return false
  if (key.includes('color') || key.includes('Color')) return true
  return false
}
export default defineComponent({
  name: 'ThemeEditor',
  inheritAttrs: false,
  setup() {
    const fileInputRef = ref(null)
    const { NConfigProvider } = useConfig()
    const theme = computed(() => {
      var _a, _b, _c, _d
      const mergedTheme =
        (NConfigProvider === null || NConfigProvider === void 0
          ? void 0
          : NConfigProvider.mergedThemeRef.value) || lightTheme
      const mergedThemeOverrides =
        NConfigProvider === null || NConfigProvider === void 0
          ? void 0
          : NConfigProvider.mergedThemeOverridesRef.value
      const common = merge(
        {},
        mergedTheme.common || lightTheme.common,
        mergedThemeOverrides === null || mergedThemeOverrides === void 0
          ? void 0
          : mergedThemeOverrides.common,
        overridesRef.value.common || {}
      )
      const overrides = {
        common
      }
      for (const key of Object.keys(lightTheme)) {
        if (key === 'common') continue
        overrides[key] =
          ((_b =
            (_a = mergedTheme[key]) === null || _a === void 0
              ? void 0
              : _a.self) === null || _b === void 0
            ? void 0
            : _b.call(_a, common)) ||
          ((_d = (_c = lightTheme[key]).self) === null || _d === void 0
            ? void 0
            : _d.call(_c, common))
        // There (last line) we must use as any, nor ts 2590 will be raised since the union
        // is too complex
        if (mergedThemeOverrides && overrides[key]) {
          merge(overrides[key], mergedThemeOverrides[key])
        }
      }
      return overrides
    })
    const themeCommonDefaultRef = computed(() => {
      var _a
      return (
        ((_a =
          NConfigProvider === null || NConfigProvider === void 0
            ? void 0
            : NConfigProvider.mergedThemeRef.value) === null || _a === void 0
          ? void 0
          : _a.common) || lightTheme.common
      )
    })
    const showPanelRef = ref(false)
    const overridesRef = ref(
      JSON.parse(localStorage['naive-ui-theme-overrides'] || '{}')
    )
    const tempOverridesRef = ref(
      JSON.parse(localStorage['naive-ui-theme-overrides'] || '{}')
    )
    const varNamePatternRef = ref('')
    const compNamePatternRef = ref('')
    const tempVarNamePatternRef = ref('')
    const tempCompNamePatternRef = ref('')
    function applyTempOverrides() {
      overridesRef.value = cloneDeep(toRaw(tempOverridesRef.value))
    }
    function setTempOverrides(compName, varName, value) {
      const { value: tempOverrides } = tempOverridesRef
      if (!(compName in tempOverrides)) tempOverrides[compName] = {}
      const compOverrides = tempOverrides[compName]
      if (value) {
        compOverrides[varName] = value
      } else {
        // eslint-disable-next-line @typescript-eslint/no-dynamic-delete
        delete compOverrides[varName]
      }
    }
    function handleClearAllClick() {
      tempOverridesRef.value = {}
      overridesRef.value = {}
    }
    function handleImportClick() {
      const { value: fileInput } = fileInputRef
      if (!fileInput) return
      fileInput.click()
    }
    function handleInputFileChange() {
      const { value: fileInput } = fileInputRef
      if (!fileInput) return
      const fileList = fileInput.files
      const file =
        fileList === null || fileList === void 0 ? void 0 : fileList[0]
      if (!file) return
      file
        .text()
        .then((value) => {
          overridesRef.value = JSON.parse(value)
          tempOverridesRef.value = JSON.parse(value)
        })
        .catch((e) => {
          alert('Imported File is Invalid')
          console.error(e)
        })
        .finally(() => {
          fileInput.value = ''
        })
    }
    function handleExportClick() {
      const url = URL.createObjectURL(
        new Blob([JSON.stringify(overridesRef.value, undefined, 2)])
      )
      const a = document.createElement('a')
      a.href = url
      a.download = 'naive-ui-theme-overrides.json'
      document.body.appendChild(a)
      a.click()
      document.body.removeChild(a)
      URL.revokeObjectURL(url)
    }
    watch(overridesRef, (value) => {
      localStorage['naive-ui-theme-overrides'] = JSON.stringify(value)
    })
    return {
      locale: useLocale('ThemeEditor').localeRef,
      themeCommonDefault: themeCommonDefaultRef,
      theme,
      showPanel: showPanelRef,
      tempOverrides: tempOverridesRef,
      overrides: overridesRef,
      compNamePattern: compNamePatternRef,
      tempCompNamePattern: tempCompNamePatternRef,
      varNamePattern: varNamePatternRef,
      tempVarNamePattern: tempVarNamePatternRef,
      fileInputRef,
      applyTempOverrides,
      setTempOverrides,
      handleClearAllClick,
      handleExportClick,
      handleImportClick,
      handleInputFileChange
    }
  },
  render() {
    return h(
      NConfigProvider,
      { themeOverrides: this.overrides },
      {
        default: () => [
          h(
            NPopover,
            {
              trigger: 'manual',
              show: this.showPanel,
              displayDirective: 'show',
              placement: 'top-end',
              style: {
                width: '288px',
                height: 'calc(100vh - 200px)',
                padding: 0
              }
            },
            {
              trigger: () =>
                h(
                  NElement,
                  {
                    style: [
                      {
                        position: 'fixed',
                        zIndex: 10,
                        bottom: '40px',
                        right: '40px',
                        width: '44px',
                        height: '44px',
                        fontSize: '26px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        borderRadius: '50%',
                        backgroundColor: 'var(--popover-color)',
                        color: 'var(--text-color-2)',
                        transition: 'all .3s var(--cubic-bezier-ease-in-out)',
                        boxShadow: '0 2px 8px 0px rgba(0, 0, 0, .12)',
                        cursor: 'pointer'
                      },
                      this.$attrs.style
                    ],
                    // @ts-expect-error
                    onClick: () => {
                      this.showPanel = !this.showPanel
                    }
                  },
                  { default: () => ColorWandIcon }
                ),
              default: () =>
                h(
                  NScrollbar,
                  { contentStyle: { padding: '8px 14px' } },
                  {
                    default: () =>
                      h(
                        Fragment,
                        null,
                        h(
                          NSpace,
                          { vertical: true },
                          {
                            default: () =>
                              h(
                                Fragment,
                                null,
                                h('input', {
                                  type: 'file',
                                  ref: 'fileInputRef',
                                  style: {
                                    display: 'block',
                                    width: 0,
                                    height: 0,
                                    visibility: 'hidden'
                                  },
                                  onChange: this.handleInputFileChange
                                }),
                                h(
                                  'div',
                                  {
                                    style: {
                                      marginBottom: '8px',
                                      fontSize: '18px',
                                      fontWeight: 500
                                    }
                                  },
                                  this.locale.title
                                ),
                                this.locale.filterCompName,
                                h(NInput, {
                                  onChange: () => {
                                    this.compNamePattern =
                                      this.tempCompNamePattern
                                  },
                                  onInput: (value) => {
                                    this.tempCompNamePattern = value
                                  },
                                  value: this.tempCompNamePattern,
                                  placeholder: this.locale.filterCompName
                                }),
                                this.locale.filterVarName,
                                h(NInput, {
                                  onChange: (value) => {
                                    this.varNamePattern = value
                                  },
                                  onInput: (value) => {
                                    this.tempVarNamePattern = value
                                  },
                                  value: this.tempVarNamePattern,
                                  placeholder: this.locale.filterVarName
                                }),
                                h(
                                  NButton,
                                  {
                                    size: 'small',
                                    onClick: () => {
                                      this.compNamePattern = ''
                                      this.varNamePattern = ''
                                      this.tempCompNamePattern = ''
                                      this.tempVarNamePattern = ''
                                    },
                                    block: true
                                  },
                                  { default: () => this.locale.clearSearch }
                                ),
                                h(
                                  NButton,
                                  {
                                    size: 'small',
                                    onClick: this.handleClearAllClick,
                                    block: true
                                  },
                                  {
                                    default: () => this.locale.clearAllVars
                                  }
                                ),
                                h(
                                  NSpace,
                                  { itemStyle: { flex: 1 } },
                                  {
                                    default: () =>
                                      h(
                                        Fragment,
                                        null,
                                        h(
                                          NButton,
                                          {
                                            block: true,
                                            size: 'small',
                                            onClick: this.handleImportClick
                                          },
                                          {
                                            default: () => this.locale.import
                                          }
                                        ),
                                        h(
                                          NButton,
                                          {
                                            block: true,
                                            size: 'small',
                                            onClick: this.handleExportClick
                                          },
                                          {
                                            default: () => this.locale.export
                                          }
                                        )
                                      )
                                  }
                                )
                              )
                          }
                        ),
                        h(NDivider, null),
                        h(NCollapse, null, {
                          default: () => {
                            const { theme, compNamePattern, varNamePattern } =
                              this
                            const themeKeys = Object.keys(theme)
                            const compNamePatternLower =
                              compNamePattern.toLowerCase()
                            const varNamePatternLower =
                              varNamePattern.toLowerCase()
                            let filteredItemsCount = 0
                            const collapsedItems = themeKeys
                              .filter((themeKey) => {
                                return themeKey
                                  .toLowerCase()
                                  .includes(compNamePatternLower)
                              })
                              .map((themeKey) => {
                                const componentTheme =
                                  themeKey === 'common'
                                    ? this.themeCommonDefault
                                    : theme[themeKey]
                                if (componentTheme === undefined) {
                                  return null
                                }
                                const varKeys = Object.keys(
                                  componentTheme
                                ).filter((key) => {
                                  return (
                                    key !== 'name' &&
                                    key
                                      .toLowerCase()
                                      .includes(varNamePatternLower)
                                  )
                                })
                                if (!varKeys.length) {
                                  return null
                                }
                                filteredItemsCount += 1
                                return h(
                                  NCollapseItem,
                                  { title: themeKey, name: themeKey },
                                  {
                                    default: () => {
                                      return h(
                                        NSpace,
                                        { vertical: true },
                                        {
                                          default: () =>
                                            varKeys.map((varKey) => {
                                              var _a, _b, _c, _d
                                              return [
                                                h(
                                                  'div',
                                                  { key: `${varKey}Label` },
                                                  varKey
                                                ),
                                                showColorPicker(varKey)
                                                  ? h(
                                                      NColorPicker,
                                                      {
                                                        key: varKey,
                                                        modes: ['rgb', 'hex'],
                                                        value:
                                                          ((_b =
                                                            (_a =
                                                              this
                                                                .tempOverrides) ===
                                                              null ||
                                                            _a === void 0
                                                              ? void 0
                                                              : _a[
                                                                  themeKey
                                                                ]) === null ||
                                                          _b === void 0
                                                            ? void 0
                                                            : _b[varKey]) ||
                                                          componentTheme[
                                                            varKey
                                                          ],
                                                        onComplete:
                                                          this
                                                            .applyTempOverrides,
                                                        onUpdateValue: (
                                                          value
                                                        ) => {
                                                          this.setTempOverrides(
                                                            themeKey,
                                                            varKey,
                                                            value
                                                          )
                                                        }
                                                      },
                                                      {
                                                        action: () => {
                                                          var _a, _b
                                                          return h(
                                                            NButton,
                                                            {
                                                              size: 'small',
                                                              disabled:
                                                                componentTheme[
                                                                  varKey
                                                                ] ===
                                                                ((_b =
                                                                  (_a =
                                                                    this
                                                                      .tempOverrides) ===
                                                                    null ||
                                                                  _a === void 0
                                                                    ? void 0
                                                                    : _a[
                                                                        themeKey
                                                                      ]) ===
                                                                  null ||
                                                                _b === void 0
                                                                  ? void 0
                                                                  : _b[varKey]),
                                                              onClick: () => {
                                                                this.setTempOverrides(
                                                                  themeKey,
                                                                  varKey,
                                                                  componentTheme[
                                                                    varKey
                                                                  ]
                                                                )
                                                                this.applyTempOverrides()
                                                              }
                                                            },
                                                            {
                                                              default: () =>
                                                                this.locale
                                                                  .restore
                                                            }
                                                          )
                                                        }
                                                      }
                                                    )
                                                  : h(NInput, {
                                                      key: varKey,
                                                      onChange:
                                                        this.applyTempOverrides,
                                                      onUpdateValue: (
                                                        value
                                                      ) => {
                                                        this.setTempOverrides(
                                                          themeKey,
                                                          varKey,
                                                          value
                                                        )
                                                      },
                                                      value:
                                                        ((_d =
                                                          (_c =
                                                            this
                                                              .tempOverrides) ===
                                                            null ||
                                                          _c === void 0
                                                            ? void 0
                                                            : _c[themeKey]) ===
                                                          null || _d === void 0
                                                          ? void 0
                                                          : _d[varKey]) || '',
                                                      placeholder:
                                                        componentTheme[varKey]
                                                    })
                                              ]
                                            })
                                        }
                                      )
                                    }
                                  }
                                )
                              })
                            if (!filteredItemsCount) return h(NEmpty, null)
                            return collapsedItems
                          }
                        })
                      )
                  }
                )
            }
          ),
          renderSlot(this.$slots, 'default')
        ]
      }
    )
  }
})