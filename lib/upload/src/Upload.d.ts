import { PropType, CSSProperties } from 'vue'
import { ExtractPublicPropTypes, MaybeArray } from '../../_utils'
import {
  FileInfo,
  FuncOrRecordOrUndef,
  OnFinish,
  OnRemove,
  OnDownload,
  OnChange,
  OnUpdateFileList,
  OnBeforeUpload,
  listType,
  OnPreview,
  CreateThumbnailUrl,
  CustomRequest
} from './interface'
declare const uploadProps: {
  readonly name: {
    readonly type: StringConstructor
    readonly default: 'file'
  }
  readonly accept: StringConstructor
  readonly action: StringConstructor
  readonly customRequest: PropType<CustomRequest>
  readonly method: {
    readonly type: StringConstructor
    readonly default: 'POST'
  }
  readonly multiple: BooleanConstructor
  readonly showFileList: {
    readonly type: BooleanConstructor
    readonly default: true
  }
  readonly data: PropType<FuncOrRecordOrUndef>
  readonly headers: PropType<FuncOrRecordOrUndef>
  readonly withCredentials: BooleanConstructor
  readonly disabled: {
    readonly type: PropType<boolean | undefined>
    readonly default: undefined
  }
  readonly onChange: PropType<OnChange>
  readonly onRemove: PropType<OnRemove>
  readonly onFinish: PropType<OnFinish>
  readonly onBeforeUpload: PropType<OnBeforeUpload>
  /** currently of no usage */
  readonly onDownload: PropType<OnDownload>
  readonly defaultUpload: {
    readonly type: BooleanConstructor
    readonly default: true
  }
  readonly fileList: PropType<FileInfo[]>
  readonly 'onUpdate:fileList': PropType<MaybeArray<OnUpdateFileList>>
  readonly onUpdateFileList: PropType<MaybeArray<OnUpdateFileList>>
  readonly fileListStyle: PropType<string | CSSProperties>
  readonly defaultFileList: {
    readonly type: PropType<FileInfo[]>
    readonly default: () => never[]
  }
  readonly showCancelButton: {
    readonly type: BooleanConstructor
    readonly default: true
  }
  readonly showRemoveButton: {
    readonly type: BooleanConstructor
    readonly default: true
  }
  readonly showDownloadButton: BooleanConstructor
  readonly showRetryButton: {
    readonly type: BooleanConstructor
    readonly default: true
  }
  readonly showPreviewButton: {
    readonly type: BooleanConstructor
    readonly default: true
  }
  readonly listType: {
    readonly type: PropType<listType>
    readonly default: 'text'
  }
  readonly onPreview: PropType<OnPreview>
  readonly createThumbnailUrl: PropType<CreateThumbnailUrl>
  readonly abstract: BooleanConstructor
  readonly max: NumberConstructor
  readonly showTrigger: {
    readonly type: BooleanConstructor
    readonly default: true
  }
  readonly theme: PropType<
    import('../../_mixins').Theme<
      'Upload',
      {
        fontSize: string
        lineHeight: string
        borderRadius: string
        draggerColor: string
        draggerBorder: string
        draggerBorderHover: string
        itemColorHover: string
        itemColorHoverError: string
        itemTextColor: string
        itemTextColorError: string
        itemTextColorSuccess: string
        itemIconColor: string
        itemDisabledOpacity: string
        itemBorderImageCardError: string
        itemBorderImageCard: string
      },
      {
        Button: import('../../_mixins').Theme<
          'Button',
          {
            heightTiny: string
            heightSmall: string
            heightMedium: string
            heightLarge: string
            borderRadiusTiny: string
            borderRadiusSmall: string
            borderRadiusMedium: string
            borderRadiusLarge: string
            fontSizeTiny: string
            fontSizeSmall: string
            fontSizeMedium: string
            fontSizeLarge: string
            opacityDisabled: string
            colorOpacitySecondary: string
            colorOpacitySecondaryHover: string
            colorOpacitySecondaryPressed: string
            colorSecondary: string
            colorSecondaryHover: string
            colorSecondaryPressed: string
            colorTertiary: string
            colorTertiaryHover: string
            colorTertiaryPressed: string
            colorQuaternary: string
            colorQuaternaryHover: string
            colorQuaternaryPressed: string
            color: string
            colorHover: string
            colorPressed: string
            colorFocus: string
            colorDisabled: string
            textColor: string
            textColorTertiary: string
            textColorHover: string
            textColorPressed: string
            textColorFocus: string
            textColorDisabled: string
            textColorText: string
            textColorTextHover: string
            textColorTextPressed: string
            textColorTextFocus: string
            textColorTextDisabled: string
            textColorGhost: string
            textColorGhostHover: string
            textColorGhostPressed: string
            textColorGhostFocus: string
            textColorGhostDisabled: string
            border: string
            borderHover: string
            borderPressed: string
            borderFocus: string
            borderDisabled: string
            rippleColor: string
            colorPrimary: string
            colorHoverPrimary: string
            colorPressedPrimary: string
            colorFocusPrimary: string
            colorDisabledPrimary: string
            textColorPrimary: string
            textColorHoverPrimary: string
            textColorPressedPrimary: string
            textColorFocusPrimary: string
            textColorDisabledPrimary: string
            textColorTextPrimary: string
            textColorTextHoverPrimary: string
            textColorTextPressedPrimary: string
            textColorTextFocusPrimary: string
            textColorTextDisabledPrimary: string
            textColorGhostPrimary: string
            textColorGhostHoverPrimary: string
            textColorGhostPressedPrimary: string
            textColorGhostFocusPrimary: string
            textColorGhostDisabledPrimary: string
            borderPrimary: string
            borderHoverPrimary: string
            borderPressedPrimary: string
            borderFocusPrimary: string
            borderDisabledPrimary: string
            rippleColorPrimary: string
            colorInfo: string
            colorHoverInfo: string
            colorPressedInfo: string
            colorFocusInfo: string
            colorDisabledInfo: string
            textColorInfo: string
            textColorHoverInfo: string
            textColorPressedInfo: string
            textColorFocusInfo: string
            textColorDisabledInfo: string
            textColorTextInfo: string
            textColorTextHoverInfo: string
            textColorTextPressedInfo: string
            textColorTextFocusInfo: string
            textColorTextDisabledInfo: string
            textColorGhostInfo: string
            textColorGhostHoverInfo: string
            textColorGhostPressedInfo: string
            textColorGhostFocusInfo: string
            textColorGhostDisabledInfo: string
            borderInfo: string
            borderHoverInfo: string
            borderPressedInfo: string
            borderFocusInfo: string
            borderDisabledInfo: string
            rippleColorInfo: string
            colorSuccess: string
            colorHoverSuccess: string
            colorPressedSuccess: string
            colorFocusSuccess: string
            colorDisabledSuccess: string
            textColorSuccess: string
            textColorHoverSuccess: string
            textColorPressedSuccess: string
            textColorFocusSuccess: string
            textColorDisabledSuccess: string
            textColorTextSuccess: string
            textColorTextHoverSuccess: string
            textColorTextPressedSuccess: string
            textColorTextFocusSuccess: string
            textColorTextDisabledSuccess: string
            textColorGhostSuccess: string
            textColorGhostHoverSuccess: string
            textColorGhostPressedSuccess: string
            textColorGhostFocusSuccess: string
            textColorGhostDisabledSuccess: string
            borderSuccess: string
            borderHoverSuccess: string
            borderPressedSuccess: string
            borderFocusSuccess: string
            borderDisabledSuccess: string
            rippleColorSuccess: string
            colorWarning: string
            colorHoverWarning: string
            colorPressedWarning: string
            colorFocusWarning: string
            colorDisabledWarning: string
            textColorWarning: string
            textColorHoverWarning: string
            textColorPressedWarning: string
            textColorFocusWarning: string
            textColorDisabledWarning: string
            textColorTextWarning: string
            textColorTextHoverWarning: string
            textColorTextPressedWarning: string
            textColorTextFocusWarning: string
            textColorTextDisabledWarning: string
            textColorGhostWarning: string
            textColorGhostHoverWarning: string
            textColorGhostPressedWarning: string
            textColorGhostFocusWarning: string
            textColorGhostDisabledWarning: string
            borderWarning: string
            borderHoverWarning: string
            borderPressedWarning: string
            borderFocusWarning: string
            borderDisabledWarning: string
            rippleColorWarning: string
            colorError: string
            colorHoverError: string
            colorPressedError: string
            colorFocusError: string
            colorDisabledError: string
            textColorError: string
            textColorHoverError: string
            textColorPressedError: string
            textColorFocusError: string
            textColorDisabledError: string
            textColorTextError: string
            textColorTextHoverError: string
            textColorTextPressedError: string
            textColorTextFocusError: string
            textColorTextDisabledError: string
            textColorGhostError: string
            textColorGhostHoverError: string
            textColorGhostPressedError: string
            textColorGhostFocusError: string
            textColorGhostDisabledError: string
            borderError: string
            borderHoverError: string
            borderPressedError: string
            borderFocusError: string
            borderDisabledError: string
            rippleColorError: string
            waveOpacity: string
            fontWeight: string
            fontWeightStrong: string
            paddingTiny: string
            paddingSmall: string
            paddingMedium: string
            paddingLarge: string
            paddingRoundTiny: string
            paddingRoundSmall: string
            paddingRoundMedium: string
            paddingRoundLarge: string
            iconMarginTiny: string
            iconMarginSmall: string
            iconMarginMedium: string
            iconMarginLarge: string
            iconSizeTiny: string
            iconSizeSmall: string
            iconSizeMedium: string
            iconSizeLarge: string
            rippleDuration: string
          },
          any
        >
        Progress: import('../../_mixins').Theme<
          'Progress',
          {
            fontSize: string
            fontSizeCircle: string
            fontWeightCircle: string
            railColor: string
            railHeight: string
            iconSizeCircle: string
            iconSizeLine: string
            iconColor: string
            iconColorInfo: string
            iconColorSuccess: string
            iconColorWarning: string
            iconColorError: string
            textColorCircle: string
            textColorLineInner: string
            textColorLineOuter: string
            fillColor: string
            fillColorInfo: string
            fillColorSuccess: string
            fillColorWarning: string
            fillColorError: string
            lineBgProcessing: string
          },
          any
        >
      }
    >
  >
  readonly themeOverrides: PropType<
    import('../../_mixins/use-theme').ExtractThemeOverrides<
      import('../../_mixins').Theme<
        'Upload',
        {
          fontSize: string
          lineHeight: string
          borderRadius: string
          draggerColor: string
          draggerBorder: string
          draggerBorderHover: string
          itemColorHover: string
          itemColorHoverError: string
          itemTextColor: string
          itemTextColorError: string
          itemTextColorSuccess: string
          itemIconColor: string
          itemDisabledOpacity: string
          itemBorderImageCardError: string
          itemBorderImageCard: string
        },
        {
          Button: import('../../_mixins').Theme<
            'Button',
            {
              heightTiny: string
              heightSmall: string
              heightMedium: string
              heightLarge: string
              borderRadiusTiny: string
              borderRadiusSmall: string
              borderRadiusMedium: string
              borderRadiusLarge: string
              fontSizeTiny: string
              fontSizeSmall: string
              fontSizeMedium: string
              fontSizeLarge: string
              opacityDisabled: string
              colorOpacitySecondary: string
              colorOpacitySecondaryHover: string
              colorOpacitySecondaryPressed: string
              colorSecondary: string
              colorSecondaryHover: string
              colorSecondaryPressed: string
              colorTertiary: string
              colorTertiaryHover: string
              colorTertiaryPressed: string
              colorQuaternary: string
              colorQuaternaryHover: string
              colorQuaternaryPressed: string
              color: string
              colorHover: string
              colorPressed: string
              colorFocus: string
              colorDisabled: string
              textColor: string
              textColorTertiary: string
              textColorHover: string
              textColorPressed: string
              textColorFocus: string
              textColorDisabled: string
              textColorText: string
              textColorTextHover: string
              textColorTextPressed: string
              textColorTextFocus: string
              textColorTextDisabled: string
              textColorGhost: string
              textColorGhostHover: string
              textColorGhostPressed: string
              textColorGhostFocus: string
              textColorGhostDisabled: string
              border: string
              borderHover: string
              borderPressed: string
              borderFocus: string
              borderDisabled: string
              rippleColor: string
              colorPrimary: string
              colorHoverPrimary: string
              colorPressedPrimary: string
              colorFocusPrimary: string
              colorDisabledPrimary: string
              textColorPrimary: string
              textColorHoverPrimary: string
              textColorPressedPrimary: string
              textColorFocusPrimary: string
              textColorDisabledPrimary: string
              textColorTextPrimary: string
              textColorTextHoverPrimary: string
              textColorTextPressedPrimary: string
              textColorTextFocusPrimary: string
              textColorTextDisabledPrimary: string
              textColorGhostPrimary: string
              textColorGhostHoverPrimary: string
              textColorGhostPressedPrimary: string
              textColorGhostFocusPrimary: string
              textColorGhostDisabledPrimary: string
              borderPrimary: string
              borderHoverPrimary: string
              borderPressedPrimary: string
              borderFocusPrimary: string
              borderDisabledPrimary: string
              rippleColorPrimary: string
              colorInfo: string
              colorHoverInfo: string
              colorPressedInfo: string
              colorFocusInfo: string
              colorDisabledInfo: string
              textColorInfo: string
              textColorHoverInfo: string
              textColorPressedInfo: string
              textColorFocusInfo: string
              textColorDisabledInfo: string
              textColorTextInfo: string
              textColorTextHoverInfo: string
              textColorTextPressedInfo: string
              textColorTextFocusInfo: string
              textColorTextDisabledInfo: string
              textColorGhostInfo: string
              textColorGhostHoverInfo: string
              textColorGhostPressedInfo: string
              textColorGhostFocusInfo: string
              textColorGhostDisabledInfo: string
              borderInfo: string
              borderHoverInfo: string
              borderPressedInfo: string
              borderFocusInfo: string
              borderDisabledInfo: string
              rippleColorInfo: string
              colorSuccess: string
              colorHoverSuccess: string
              colorPressedSuccess: string
              colorFocusSuccess: string
              colorDisabledSuccess: string
              textColorSuccess: string
              textColorHoverSuccess: string
              textColorPressedSuccess: string
              textColorFocusSuccess: string
              textColorDisabledSuccess: string
              textColorTextSuccess: string
              textColorTextHoverSuccess: string
              textColorTextPressedSuccess: string
              textColorTextFocusSuccess: string
              textColorTextDisabledSuccess: string
              textColorGhostSuccess: string
              textColorGhostHoverSuccess: string
              textColorGhostPressedSuccess: string
              textColorGhostFocusSuccess: string
              textColorGhostDisabledSuccess: string
              borderSuccess: string
              borderHoverSuccess: string
              borderPressedSuccess: string
              borderFocusSuccess: string
              borderDisabledSuccess: string
              rippleColorSuccess: string
              colorWarning: string
              colorHoverWarning: string
              colorPressedWarning: string
              colorFocusWarning: string
              colorDisabledWarning: string
              textColorWarning: string
              textColorHoverWarning: string
              textColorPressedWarning: string
              textColorFocusWarning: string
              textColorDisabledWarning: string
              textColorTextWarning: string
              textColorTextHoverWarning: string
              textColorTextPressedWarning: string
              textColorTextFocusWarning: string
              textColorTextDisabledWarning: string
              textColorGhostWarning: string
              textColorGhostHoverWarning: string
              textColorGhostPressedWarning: string
              textColorGhostFocusWarning: string
              textColorGhostDisabledWarning: string
              borderWarning: string
              borderHoverWarning: string
              borderPressedWarning: string
              borderFocusWarning: string
              borderDisabledWarning: string
              rippleColorWarning: string
              colorError: string
              colorHoverError: string
              colorPressedError: string
              colorFocusError: string
              colorDisabledError: string
              textColorError: string
              textColorHoverError: string
              textColorPressedError: string
              textColorFocusError: string
              textColorDisabledError: string
              textColorTextError: string
              textColorTextHoverError: string
              textColorTextPressedError: string
              textColorTextFocusError: string
              textColorTextDisabledError: string
              textColorGhostError: string
              textColorGhostHoverError: string
              textColorGhostPressedError: string
              textColorGhostFocusError: string
              textColorGhostDisabledError: string
              borderError: string
              borderHoverError: string
              borderPressedError: string
              borderFocusError: string
              borderDisabledError: string
              rippleColorError: string
              waveOpacity: string
              fontWeight: string
              fontWeightStrong: string
              paddingTiny: string
              paddingSmall: string
              paddingMedium: string
              paddingLarge: string
              paddingRoundTiny: string
              paddingRoundSmall: string
              paddingRoundMedium: string
              paddingRoundLarge: string
              iconMarginTiny: string
              iconMarginSmall: string
              iconMarginMedium: string
              iconMarginLarge: string
              iconSizeTiny: string
              iconSizeSmall: string
              iconSizeMedium: string
              iconSizeLarge: string
              rippleDuration: string
            },
            any
          >
          Progress: import('../../_mixins').Theme<
            'Progress',
            {
              fontSize: string
              fontSizeCircle: string
              fontWeightCircle: string
              railColor: string
              railHeight: string
              iconSizeCircle: string
              iconSizeLine: string
              iconColor: string
              iconColorInfo: string
              iconColorSuccess: string
              iconColorWarning: string
              iconColorError: string
              textColorCircle: string
              textColorLineInner: string
              textColorLineOuter: string
              fillColor: string
              fillColorInfo: string
              fillColorSuccess: string
              fillColorWarning: string
              fillColorError: string
              lineBgProcessing: string
            },
            any
          >
        }
      >
    >
  >
  readonly builtinThemeOverrides: PropType<
    import('../../_mixins/use-theme').ExtractThemeOverrides<
      import('../../_mixins').Theme<
        'Upload',
        {
          fontSize: string
          lineHeight: string
          borderRadius: string
          draggerColor: string
          draggerBorder: string
          draggerBorderHover: string
          itemColorHover: string
          itemColorHoverError: string
          itemTextColor: string
          itemTextColorError: string
          itemTextColorSuccess: string
          itemIconColor: string
          itemDisabledOpacity: string
          itemBorderImageCardError: string
          itemBorderImageCard: string
        },
        {
          Button: import('../../_mixins').Theme<
            'Button',
            {
              heightTiny: string
              heightSmall: string
              heightMedium: string
              heightLarge: string
              borderRadiusTiny: string
              borderRadiusSmall: string
              borderRadiusMedium: string
              borderRadiusLarge: string
              fontSizeTiny: string
              fontSizeSmall: string
              fontSizeMedium: string
              fontSizeLarge: string
              opacityDisabled: string
              colorOpacitySecondary: string
              colorOpacitySecondaryHover: string
              colorOpacitySecondaryPressed: string
              colorSecondary: string
              colorSecondaryHover: string
              colorSecondaryPressed: string
              colorTertiary: string
              colorTertiaryHover: string
              colorTertiaryPressed: string
              colorQuaternary: string
              colorQuaternaryHover: string
              colorQuaternaryPressed: string
              color: string
              colorHover: string
              colorPressed: string
              colorFocus: string
              colorDisabled: string
              textColor: string
              textColorTertiary: string
              textColorHover: string
              textColorPressed: string
              textColorFocus: string
              textColorDisabled: string
              textColorText: string
              textColorTextHover: string
              textColorTextPressed: string
              textColorTextFocus: string
              textColorTextDisabled: string
              textColorGhost: string
              textColorGhostHover: string
              textColorGhostPressed: string
              textColorGhostFocus: string
              textColorGhostDisabled: string
              border: string
              borderHover: string
              borderPressed: string
              borderFocus: string
              borderDisabled: string
              rippleColor: string
              colorPrimary: string
              colorHoverPrimary: string
              colorPressedPrimary: string
              colorFocusPrimary: string
              colorDisabledPrimary: string
              textColorPrimary: string
              textColorHoverPrimary: string
              textColorPressedPrimary: string
              textColorFocusPrimary: string
              textColorDisabledPrimary: string
              textColorTextPrimary: string
              textColorTextHoverPrimary: string
              textColorTextPressedPrimary: string
              textColorTextFocusPrimary: string
              textColorTextDisabledPrimary: string
              textColorGhostPrimary: string
              textColorGhostHoverPrimary: string
              textColorGhostPressedPrimary: string
              textColorGhostFocusPrimary: string
              textColorGhostDisabledPrimary: string
              borderPrimary: string
              borderHoverPrimary: string
              borderPressedPrimary: string
              borderFocusPrimary: string
              borderDisabledPrimary: string
              rippleColorPrimary: string
              colorInfo: string
              colorHoverInfo: string
              colorPressedInfo: string
              colorFocusInfo: string
              colorDisabledInfo: string
              textColorInfo: string
              textColorHoverInfo: string
              textColorPressedInfo: string
              textColorFocusInfo: string
              textColorDisabledInfo: string
              textColorTextInfo: string
              textColorTextHoverInfo: string
              textColorTextPressedInfo: string
              textColorTextFocusInfo: string
              textColorTextDisabledInfo: string
              textColorGhostInfo: string
              textColorGhostHoverInfo: string
              textColorGhostPressedInfo: string
              textColorGhostFocusInfo: string
              textColorGhostDisabledInfo: string
              borderInfo: string
              borderHoverInfo: string
              borderPressedInfo: string
              borderFocusInfo: string
              borderDisabledInfo: string
              rippleColorInfo: string
              colorSuccess: string
              colorHoverSuccess: string
              colorPressedSuccess: string
              colorFocusSuccess: string
              colorDisabledSuccess: string
              textColorSuccess: string
              textColorHoverSuccess: string
              textColorPressedSuccess: string
              textColorFocusSuccess: string
              textColorDisabledSuccess: string
              textColorTextSuccess: string
              textColorTextHoverSuccess: string
              textColorTextPressedSuccess: string
              textColorTextFocusSuccess: string
              textColorTextDisabledSuccess: string
              textColorGhostSuccess: string
              textColorGhostHoverSuccess: string
              textColorGhostPressedSuccess: string
              textColorGhostFocusSuccess: string
              textColorGhostDisabledSuccess: string
              borderSuccess: string
              borderHoverSuccess: string
              borderPressedSuccess: string
              borderFocusSuccess: string
              borderDisabledSuccess: string
              rippleColorSuccess: string
              colorWarning: string
              colorHoverWarning: string
              colorPressedWarning: string
              colorFocusWarning: string
              colorDisabledWarning: string
              textColorWarning: string
              textColorHoverWarning: string
              textColorPressedWarning: string
              textColorFocusWarning: string
              textColorDisabledWarning: string
              textColorTextWarning: string
              textColorTextHoverWarning: string
              textColorTextPressedWarning: string
              textColorTextFocusWarning: string
              textColorTextDisabledWarning: string
              textColorGhostWarning: string
              textColorGhostHoverWarning: string
              textColorGhostPressedWarning: string
              textColorGhostFocusWarning: string
              textColorGhostDisabledWarning: string
              borderWarning: string
              borderHoverWarning: string
              borderPressedWarning: string
              borderFocusWarning: string
              borderDisabledWarning: string
              rippleColorWarning: string
              colorError: string
              colorHoverError: string
              colorPressedError: string
              colorFocusError: string
              colorDisabledError: string
              textColorError: string
              textColorHoverError: string
              textColorPressedError: string
              textColorFocusError: string
              textColorDisabledError: string
              textColorTextError: string
              textColorTextHoverError: string
              textColorTextPressedError: string
              textColorTextFocusError: string
              textColorTextDisabledError: string
              textColorGhostError: string
              textColorGhostHoverError: string
              textColorGhostPressedError: string
              textColorGhostFocusError: string
              textColorGhostDisabledError: string
              borderError: string
              borderHoverError: string
              borderPressedError: string
              borderFocusError: string
              borderDisabledError: string
              rippleColorError: string
              waveOpacity: string
              fontWeight: string
              fontWeightStrong: string
              paddingTiny: string
              paddingSmall: string
              paddingMedium: string
              paddingLarge: string
              paddingRoundTiny: string
              paddingRoundSmall: string
              paddingRoundMedium: string
              paddingRoundLarge: string
              iconMarginTiny: string
              iconMarginSmall: string
              iconMarginMedium: string
              iconMarginLarge: string
              iconSizeTiny: string
              iconSizeSmall: string
              iconSizeMedium: string
              iconSizeLarge: string
              rippleDuration: string
            },
            any
          >
          Progress: import('../../_mixins').Theme<
            'Progress',
            {
              fontSize: string
              fontSizeCircle: string
              fontWeightCircle: string
              railColor: string
              railHeight: string
              iconSizeCircle: string
              iconSizeLine: string
              iconColor: string
              iconColorInfo: string
              iconColorSuccess: string
              iconColorWarning: string
              iconColorError: string
              textColorCircle: string
              textColorLineInner: string
              textColorLineOuter: string
              fillColor: string
              fillColorInfo: string
              fillColorSuccess: string
              fillColorWarning: string
              fillColorError: string
              lineBgProcessing: string
            },
            any
          >
        }
      >
    >
  >
}
export declare type UploadProps = ExtractPublicPropTypes<typeof uploadProps>
declare const _default: import('vue').DefineComponent<
  {
    readonly name: {
      readonly type: StringConstructor
      readonly default: 'file'
    }
    readonly accept: StringConstructor
    readonly action: StringConstructor
    readonly customRequest: PropType<CustomRequest>
    readonly method: {
      readonly type: StringConstructor
      readonly default: 'POST'
    }
    readonly multiple: BooleanConstructor
    readonly showFileList: {
      readonly type: BooleanConstructor
      readonly default: true
    }
    readonly data: PropType<FuncOrRecordOrUndef>
    readonly headers: PropType<FuncOrRecordOrUndef>
    readonly withCredentials: BooleanConstructor
    readonly disabled: {
      readonly type: PropType<boolean | undefined>
      readonly default: undefined
    }
    readonly onChange: PropType<OnChange>
    readonly onRemove: PropType<OnRemove>
    readonly onFinish: PropType<OnFinish>
    readonly onBeforeUpload: PropType<OnBeforeUpload>
    /** currently of no usage */
    readonly onDownload: PropType<OnDownload>
    readonly defaultUpload: {
      readonly type: BooleanConstructor
      readonly default: true
    }
    readonly fileList: PropType<FileInfo[]>
    readonly 'onUpdate:fileList': PropType<MaybeArray<OnUpdateFileList>>
    readonly onUpdateFileList: PropType<MaybeArray<OnUpdateFileList>>
    readonly fileListStyle: PropType<string | CSSProperties>
    readonly defaultFileList: {
      readonly type: PropType<FileInfo[]>
      readonly default: () => never[]
    }
    readonly showCancelButton: {
      readonly type: BooleanConstructor
      readonly default: true
    }
    readonly showRemoveButton: {
      readonly type: BooleanConstructor
      readonly default: true
    }
    readonly showDownloadButton: BooleanConstructor
    readonly showRetryButton: {
      readonly type: BooleanConstructor
      readonly default: true
    }
    readonly showPreviewButton: {
      readonly type: BooleanConstructor
      readonly default: true
    }
    readonly listType: {
      readonly type: PropType<listType>
      readonly default: 'text'
    }
    readonly onPreview: PropType<OnPreview>
    readonly createThumbnailUrl: PropType<CreateThumbnailUrl>
    readonly abstract: BooleanConstructor
    readonly max: NumberConstructor
    readonly showTrigger: {
      readonly type: BooleanConstructor
      readonly default: true
    }
    readonly theme: PropType<
      import('../../_mixins').Theme<
        'Upload',
        {
          fontSize: string
          lineHeight: string
          borderRadius: string
          draggerColor: string
          draggerBorder: string
          draggerBorderHover: string
          itemColorHover: string
          itemColorHoverError: string
          itemTextColor: string
          itemTextColorError: string
          itemTextColorSuccess: string
          itemIconColor: string
          itemDisabledOpacity: string
          itemBorderImageCardError: string
          itemBorderImageCard: string
        },
        {
          Button: import('../../_mixins').Theme<
            'Button',
            {
              heightTiny: string
              heightSmall: string
              heightMedium: string
              heightLarge: string
              borderRadiusTiny: string
              borderRadiusSmall: string
              borderRadiusMedium: string
              borderRadiusLarge: string
              fontSizeTiny: string
              fontSizeSmall: string
              fontSizeMedium: string
              fontSizeLarge: string
              opacityDisabled: string
              colorOpacitySecondary: string
              colorOpacitySecondaryHover: string
              colorOpacitySecondaryPressed: string
              colorSecondary: string
              colorSecondaryHover: string
              colorSecondaryPressed: string
              colorTertiary: string
              colorTertiaryHover: string
              colorTertiaryPressed: string
              colorQuaternary: string
              colorQuaternaryHover: string
              colorQuaternaryPressed: string
              color: string
              colorHover: string
              colorPressed: string
              colorFocus: string
              colorDisabled: string
              textColor: string
              textColorTertiary: string
              textColorHover: string
              textColorPressed: string
              textColorFocus: string
              textColorDisabled: string
              textColorText: string
              textColorTextHover: string
              textColorTextPressed: string
              textColorTextFocus: string
              textColorTextDisabled: string
              textColorGhost: string
              textColorGhostHover: string
              textColorGhostPressed: string
              textColorGhostFocus: string
              textColorGhostDisabled: string
              border: string
              borderHover: string
              borderPressed: string
              borderFocus: string
              borderDisabled: string
              rippleColor: string
              colorPrimary: string
              colorHoverPrimary: string
              colorPressedPrimary: string
              colorFocusPrimary: string
              colorDisabledPrimary: string
              textColorPrimary: string
              textColorHoverPrimary: string
              textColorPressedPrimary: string
              textColorFocusPrimary: string
              textColorDisabledPrimary: string
              textColorTextPrimary: string
              textColorTextHoverPrimary: string
              textColorTextPressedPrimary: string
              textColorTextFocusPrimary: string
              textColorTextDisabledPrimary: string
              textColorGhostPrimary: string
              textColorGhostHoverPrimary: string
              textColorGhostPressedPrimary: string
              textColorGhostFocusPrimary: string
              textColorGhostDisabledPrimary: string
              borderPrimary: string
              borderHoverPrimary: string
              borderPressedPrimary: string
              borderFocusPrimary: string
              borderDisabledPrimary: string
              rippleColorPrimary: string
              colorInfo: string
              colorHoverInfo: string
              colorPressedInfo: string
              colorFocusInfo: string
              colorDisabledInfo: string
              textColorInfo: string
              textColorHoverInfo: string
              textColorPressedInfo: string
              textColorFocusInfo: string
              textColorDisabledInfo: string
              textColorTextInfo: string
              textColorTextHoverInfo: string
              textColorTextPressedInfo: string
              textColorTextFocusInfo: string
              textColorTextDisabledInfo: string
              textColorGhostInfo: string
              textColorGhostHoverInfo: string
              textColorGhostPressedInfo: string
              textColorGhostFocusInfo: string
              textColorGhostDisabledInfo: string
              borderInfo: string
              borderHoverInfo: string
              borderPressedInfo: string
              borderFocusInfo: string
              borderDisabledInfo: string
              rippleColorInfo: string
              colorSuccess: string
              colorHoverSuccess: string
              colorPressedSuccess: string
              colorFocusSuccess: string
              colorDisabledSuccess: string
              textColorSuccess: string
              textColorHoverSuccess: string
              textColorPressedSuccess: string
              textColorFocusSuccess: string
              textColorDisabledSuccess: string
              textColorTextSuccess: string
              textColorTextHoverSuccess: string
              textColorTextPressedSuccess: string
              textColorTextFocusSuccess: string
              textColorTextDisabledSuccess: string
              textColorGhostSuccess: string
              textColorGhostHoverSuccess: string
              textColorGhostPressedSuccess: string
              textColorGhostFocusSuccess: string
              textColorGhostDisabledSuccess: string
              borderSuccess: string
              borderHoverSuccess: string
              borderPressedSuccess: string
              borderFocusSuccess: string
              borderDisabledSuccess: string
              rippleColorSuccess: string
              colorWarning: string
              colorHoverWarning: string
              colorPressedWarning: string
              colorFocusWarning: string
              colorDisabledWarning: string
              textColorWarning: string
              textColorHoverWarning: string
              textColorPressedWarning: string
              textColorFocusWarning: string
              textColorDisabledWarning: string
              textColorTextWarning: string
              textColorTextHoverWarning: string
              textColorTextPressedWarning: string
              textColorTextFocusWarning: string
              textColorTextDisabledWarning: string
              textColorGhostWarning: string
              textColorGhostHoverWarning: string
              textColorGhostPressedWarning: string
              textColorGhostFocusWarning: string
              textColorGhostDisabledWarning: string
              borderWarning: string
              borderHoverWarning: string
              borderPressedWarning: string
              borderFocusWarning: string
              borderDisabledWarning: string
              rippleColorWarning: string
              colorError: string
              colorHoverError: string
              colorPressedError: string
              colorFocusError: string
              colorDisabledError: string
              textColorError: string
              textColorHoverError: string
              textColorPressedError: string
              textColorFocusError: string
              textColorDisabledError: string
              textColorTextError: string
              textColorTextHoverError: string
              textColorTextPressedError: string
              textColorTextFocusError: string
              textColorTextDisabledError: string
              textColorGhostError: string
              textColorGhostHoverError: string
              textColorGhostPressedError: string
              textColorGhostFocusError: string
              textColorGhostDisabledError: string
              borderError: string
              borderHoverError: string
              borderPressedError: string
              borderFocusError: string
              borderDisabledError: string
              rippleColorError: string
              waveOpacity: string
              fontWeight: string
              fontWeightStrong: string
              paddingTiny: string
              paddingSmall: string
              paddingMedium: string
              paddingLarge: string
              paddingRoundTiny: string
              paddingRoundSmall: string
              paddingRoundMedium: string
              paddingRoundLarge: string
              iconMarginTiny: string
              iconMarginSmall: string
              iconMarginMedium: string
              iconMarginLarge: string
              iconSizeTiny: string
              iconSizeSmall: string
              iconSizeMedium: string
              iconSizeLarge: string
              rippleDuration: string
            },
            any
          >
          Progress: import('../../_mixins').Theme<
            'Progress',
            {
              fontSize: string
              fontSizeCircle: string
              fontWeightCircle: string
              railColor: string
              railHeight: string
              iconSizeCircle: string
              iconSizeLine: string
              iconColor: string
              iconColorInfo: string
              iconColorSuccess: string
              iconColorWarning: string
              iconColorError: string
              textColorCircle: string
              textColorLineInner: string
              textColorLineOuter: string
              fillColor: string
              fillColorInfo: string
              fillColorSuccess: string
              fillColorWarning: string
              fillColorError: string
              lineBgProcessing: string
            },
            any
          >
        }
      >
    >
    readonly themeOverrides: PropType<
      import('../../_mixins/use-theme').ExtractThemeOverrides<
        import('../../_mixins').Theme<
          'Upload',
          {
            fontSize: string
            lineHeight: string
            borderRadius: string
            draggerColor: string
            draggerBorder: string
            draggerBorderHover: string
            itemColorHover: string
            itemColorHoverError: string
            itemTextColor: string
            itemTextColorError: string
            itemTextColorSuccess: string
            itemIconColor: string
            itemDisabledOpacity: string
            itemBorderImageCardError: string
            itemBorderImageCard: string
          },
          {
            Button: import('../../_mixins').Theme<
              'Button',
              {
                heightTiny: string
                heightSmall: string
                heightMedium: string
                heightLarge: string
                borderRadiusTiny: string
                borderRadiusSmall: string
                borderRadiusMedium: string
                borderRadiusLarge: string
                fontSizeTiny: string
                fontSizeSmall: string
                fontSizeMedium: string
                fontSizeLarge: string
                opacityDisabled: string
                colorOpacitySecondary: string
                colorOpacitySecondaryHover: string
                colorOpacitySecondaryPressed: string
                colorSecondary: string
                colorSecondaryHover: string
                colorSecondaryPressed: string
                colorTertiary: string
                colorTertiaryHover: string
                colorTertiaryPressed: string
                colorQuaternary: string
                colorQuaternaryHover: string
                colorQuaternaryPressed: string
                color: string
                colorHover: string
                colorPressed: string
                colorFocus: string
                colorDisabled: string
                textColor: string
                textColorTertiary: string
                textColorHover: string
                textColorPressed: string
                textColorFocus: string
                textColorDisabled: string
                textColorText: string
                textColorTextHover: string
                textColorTextPressed: string
                textColorTextFocus: string
                textColorTextDisabled: string
                textColorGhost: string
                textColorGhostHover: string
                textColorGhostPressed: string
                textColorGhostFocus: string
                textColorGhostDisabled: string
                border: string
                borderHover: string
                borderPressed: string
                borderFocus: string
                borderDisabled: string
                rippleColor: string
                colorPrimary: string
                colorHoverPrimary: string
                colorPressedPrimary: string
                colorFocusPrimary: string
                colorDisabledPrimary: string
                textColorPrimary: string
                textColorHoverPrimary: string
                textColorPressedPrimary: string
                textColorFocusPrimary: string
                textColorDisabledPrimary: string
                textColorTextPrimary: string
                textColorTextHoverPrimary: string
                textColorTextPressedPrimary: string
                textColorTextFocusPrimary: string
                textColorTextDisabledPrimary: string
                textColorGhostPrimary: string
                textColorGhostHoverPrimary: string
                textColorGhostPressedPrimary: string
                textColorGhostFocusPrimary: string
                textColorGhostDisabledPrimary: string
                borderPrimary: string
                borderHoverPrimary: string
                borderPressedPrimary: string
                borderFocusPrimary: string
                borderDisabledPrimary: string
                rippleColorPrimary: string
                colorInfo: string
                colorHoverInfo: string
                colorPressedInfo: string
                colorFocusInfo: string
                colorDisabledInfo: string
                textColorInfo: string
                textColorHoverInfo: string
                textColorPressedInfo: string
                textColorFocusInfo: string
                textColorDisabledInfo: string
                textColorTextInfo: string
                textColorTextHoverInfo: string
                textColorTextPressedInfo: string
                textColorTextFocusInfo: string
                textColorTextDisabledInfo: string
                textColorGhostInfo: string
                textColorGhostHoverInfo: string
                textColorGhostPressedInfo: string
                textColorGhostFocusInfo: string
                textColorGhostDisabledInfo: string
                borderInfo: string
                borderHoverInfo: string
                borderPressedInfo: string
                borderFocusInfo: string
                borderDisabledInfo: string
                rippleColorInfo: string
                colorSuccess: string
                colorHoverSuccess: string
                colorPressedSuccess: string
                colorFocusSuccess: string
                colorDisabledSuccess: string
                textColorSuccess: string
                textColorHoverSuccess: string
                textColorPressedSuccess: string
                textColorFocusSuccess: string
                textColorDisabledSuccess: string
                textColorTextSuccess: string
                textColorTextHoverSuccess: string
                textColorTextPressedSuccess: string
                textColorTextFocusSuccess: string
                textColorTextDisabledSuccess: string
                textColorGhostSuccess: string
                textColorGhostHoverSuccess: string
                textColorGhostPressedSuccess: string
                textColorGhostFocusSuccess: string
                textColorGhostDisabledSuccess: string
                borderSuccess: string
                borderHoverSuccess: string
                borderPressedSuccess: string
                borderFocusSuccess: string
                borderDisabledSuccess: string
                rippleColorSuccess: string
                colorWarning: string
                colorHoverWarning: string
                colorPressedWarning: string
                colorFocusWarning: string
                colorDisabledWarning: string
                textColorWarning: string
                textColorHoverWarning: string
                textColorPressedWarning: string
                textColorFocusWarning: string
                textColorDisabledWarning: string
                textColorTextWarning: string
                textColorTextHoverWarning: string
                textColorTextPressedWarning: string
                textColorTextFocusWarning: string
                textColorTextDisabledWarning: string
                textColorGhostWarning: string
                textColorGhostHoverWarning: string
                textColorGhostPressedWarning: string
                textColorGhostFocusWarning: string
                textColorGhostDisabledWarning: string
                borderWarning: string
                borderHoverWarning: string
                borderPressedWarning: string
                borderFocusWarning: string
                borderDisabledWarning: string
                rippleColorWarning: string
                colorError: string
                colorHoverError: string
                colorPressedError: string
                colorFocusError: string
                colorDisabledError: string
                textColorError: string
                textColorHoverError: string
                textColorPressedError: string
                textColorFocusError: string
                textColorDisabledError: string
                textColorTextError: string
                textColorTextHoverError: string
                textColorTextPressedError: string
                textColorTextFocusError: string
                textColorTextDisabledError: string
                textColorGhostError: string
                textColorGhostHoverError: string
                textColorGhostPressedError: string
                textColorGhostFocusError: string
                textColorGhostDisabledError: string
                borderError: string
                borderHoverError: string
                borderPressedError: string
                borderFocusError: string
                borderDisabledError: string
                rippleColorError: string
                waveOpacity: string
                fontWeight: string
                fontWeightStrong: string
                paddingTiny: string
                paddingSmall: string
                paddingMedium: string
                paddingLarge: string
                paddingRoundTiny: string
                paddingRoundSmall: string
                paddingRoundMedium: string
                paddingRoundLarge: string
                iconMarginTiny: string
                iconMarginSmall: string
                iconMarginMedium: string
                iconMarginLarge: string
                iconSizeTiny: string
                iconSizeSmall: string
                iconSizeMedium: string
                iconSizeLarge: string
                rippleDuration: string
              },
              any
            >
            Progress: import('../../_mixins').Theme<
              'Progress',
              {
                fontSize: string
                fontSizeCircle: string
                fontWeightCircle: string
                railColor: string
                railHeight: string
                iconSizeCircle: string
                iconSizeLine: string
                iconColor: string
                iconColorInfo: string
                iconColorSuccess: string
                iconColorWarning: string
                iconColorError: string
                textColorCircle: string
                textColorLineInner: string
                textColorLineOuter: string
                fillColor: string
                fillColorInfo: string
                fillColorSuccess: string
                fillColorWarning: string
                fillColorError: string
                lineBgProcessing: string
              },
              any
            >
          }
        >
      >
    >
    readonly builtinThemeOverrides: PropType<
      import('../../_mixins/use-theme').ExtractThemeOverrides<
        import('../../_mixins').Theme<
          'Upload',
          {
            fontSize: string
            lineHeight: string
            borderRadius: string
            draggerColor: string
            draggerBorder: string
            draggerBorderHover: string
            itemColorHover: string
            itemColorHoverError: string
            itemTextColor: string
            itemTextColorError: string
            itemTextColorSuccess: string
            itemIconColor: string
            itemDisabledOpacity: string
            itemBorderImageCardError: string
            itemBorderImageCard: string
          },
          {
            Button: import('../../_mixins').Theme<
              'Button',
              {
                heightTiny: string
                heightSmall: string
                heightMedium: string
                heightLarge: string
                borderRadiusTiny: string
                borderRadiusSmall: string
                borderRadiusMedium: string
                borderRadiusLarge: string
                fontSizeTiny: string
                fontSizeSmall: string
                fontSizeMedium: string
                fontSizeLarge: string
                opacityDisabled: string
                colorOpacitySecondary: string
                colorOpacitySecondaryHover: string
                colorOpacitySecondaryPressed: string
                colorSecondary: string
                colorSecondaryHover: string
                colorSecondaryPressed: string
                colorTertiary: string
                colorTertiaryHover: string
                colorTertiaryPressed: string
                colorQuaternary: string
                colorQuaternaryHover: string
                colorQuaternaryPressed: string
                color: string
                colorHover: string
                colorPressed: string
                colorFocus: string
                colorDisabled: string
                textColor: string
                textColorTertiary: string
                textColorHover: string
                textColorPressed: string
                textColorFocus: string
                textColorDisabled: string
                textColorText: string
                textColorTextHover: string
                textColorTextPressed: string
                textColorTextFocus: string
                textColorTextDisabled: string
                textColorGhost: string
                textColorGhostHover: string
                textColorGhostPressed: string
                textColorGhostFocus: string
                textColorGhostDisabled: string
                border: string
                borderHover: string
                borderPressed: string
                borderFocus: string
                borderDisabled: string
                rippleColor: string
                colorPrimary: string
                colorHoverPrimary: string
                colorPressedPrimary: string
                colorFocusPrimary: string
                colorDisabledPrimary: string
                textColorPrimary: string
                textColorHoverPrimary: string
                textColorPressedPrimary: string
                textColorFocusPrimary: string
                textColorDisabledPrimary: string
                textColorTextPrimary: string
                textColorTextHoverPrimary: string
                textColorTextPressedPrimary: string
                textColorTextFocusPrimary: string
                textColorTextDisabledPrimary: string
                textColorGhostPrimary: string
                textColorGhostHoverPrimary: string
                textColorGhostPressedPrimary: string
                textColorGhostFocusPrimary: string
                textColorGhostDisabledPrimary: string
                borderPrimary: string
                borderHoverPrimary: string
                borderPressedPrimary: string
                borderFocusPrimary: string
                borderDisabledPrimary: string
                rippleColorPrimary: string
                colorInfo: string
                colorHoverInfo: string
                colorPressedInfo: string
                colorFocusInfo: string
                colorDisabledInfo: string
                textColorInfo: string
                textColorHoverInfo: string
                textColorPressedInfo: string
                textColorFocusInfo: string
                textColorDisabledInfo: string
                textColorTextInfo: string
                textColorTextHoverInfo: string
                textColorTextPressedInfo: string
                textColorTextFocusInfo: string
                textColorTextDisabledInfo: string
                textColorGhostInfo: string
                textColorGhostHoverInfo: string
                textColorGhostPressedInfo: string
                textColorGhostFocusInfo: string
                textColorGhostDisabledInfo: string
                borderInfo: string
                borderHoverInfo: string
                borderPressedInfo: string
                borderFocusInfo: string
                borderDisabledInfo: string
                rippleColorInfo: string
                colorSuccess: string
                colorHoverSuccess: string
                colorPressedSuccess: string
                colorFocusSuccess: string
                colorDisabledSuccess: string
                textColorSuccess: string
                textColorHoverSuccess: string
                textColorPressedSuccess: string
                textColorFocusSuccess: string
                textColorDisabledSuccess: string
                textColorTextSuccess: string
                textColorTextHoverSuccess: string
                textColorTextPressedSuccess: string
                textColorTextFocusSuccess: string
                textColorTextDisabledSuccess: string
                textColorGhostSuccess: string
                textColorGhostHoverSuccess: string
                textColorGhostPressedSuccess: string
                textColorGhostFocusSuccess: string
                textColorGhostDisabledSuccess: string
                borderSuccess: string
                borderHoverSuccess: string
                borderPressedSuccess: string
                borderFocusSuccess: string
                borderDisabledSuccess: string
                rippleColorSuccess: string
                colorWarning: string
                colorHoverWarning: string
                colorPressedWarning: string
                colorFocusWarning: string
                colorDisabledWarning: string
                textColorWarning: string
                textColorHoverWarning: string
                textColorPressedWarning: string
                textColorFocusWarning: string
                textColorDisabledWarning: string
                textColorTextWarning: string
                textColorTextHoverWarning: string
                textColorTextPressedWarning: string
                textColorTextFocusWarning: string
                textColorTextDisabledWarning: string
                textColorGhostWarning: string
                textColorGhostHoverWarning: string
                textColorGhostPressedWarning: string
                textColorGhostFocusWarning: string
                textColorGhostDisabledWarning: string
                borderWarning: string
                borderHoverWarning: string
                borderPressedWarning: string
                borderFocusWarning: string
                borderDisabledWarning: string
                rippleColorWarning: string
                colorError: string
                colorHoverError: string
                colorPressedError: string
                colorFocusError: string
                colorDisabledError: string
                textColorError: string
                textColorHoverError: string
                textColorPressedError: string
                textColorFocusError: string
                textColorDisabledError: string
                textColorTextError: string
                textColorTextHoverError: string
                textColorTextPressedError: string
                textColorTextFocusError: string
                textColorTextDisabledError: string
                textColorGhostError: string
                textColorGhostHoverError: string
                textColorGhostPressedError: string
                textColorGhostFocusError: string
                textColorGhostDisabledError: string
                borderError: string
                borderHoverError: string
                borderPressedError: string
                borderFocusError: string
                borderDisabledError: string
                rippleColorError: string
                waveOpacity: string
                fontWeight: string
                fontWeightStrong: string
                paddingTiny: string
                paddingSmall: string
                paddingMedium: string
                paddingLarge: string
                paddingRoundTiny: string
                paddingRoundSmall: string
                paddingRoundMedium: string
                paddingRoundLarge: string
                iconMarginTiny: string
                iconMarginSmall: string
                iconMarginMedium: string
                iconMarginLarge: string
                iconSizeTiny: string
                iconSizeSmall: string
                iconSizeMedium: string
                iconSizeLarge: string
                rippleDuration: string
              },
              any
            >
            Progress: import('../../_mixins').Theme<
              'Progress',
              {
                fontSize: string
                fontSizeCircle: string
                fontWeightCircle: string
                railColor: string
                railHeight: string
                iconSizeCircle: string
                iconSizeLine: string
                iconColor: string
                iconColorInfo: string
                iconColorSuccess: string
                iconColorWarning: string
                iconColorError: string
                textColorCircle: string
                textColorLineInner: string
                textColorLineOuter: string
                fillColor: string
                fillColorInfo: string
                fillColorSuccess: string
                fillColorWarning: string
                fillColorError: string
                lineBgProcessing: string
              },
              any
            >
          }
        >
      >
    >
  },
  {
    openOpenFileDialog: () => void
    submit: () => void
    mergedClsPrefix: import('vue').ComputedRef<string>
    draggerInsideRef: {
      value: boolean
    }
    inputElRef: import('vue').Ref<HTMLInputElement | null>
    mergedTheme: import('vue').ComputedRef<{
      common: {
        baseColor: string
        primaryColor: string
        primaryColorHover: string
        primaryColorPressed: string
        primaryColorSuppl: string
        infoColor: string
        infoColorHover: string
        infoColorPressed: string
        infoColorSuppl: string
        successColor: string
        successColorHover: string
        successColorPressed: string
        successColorSuppl: string
        warningColor: string
        warningColorHover: string
        warningColorPressed: string
        warningColorSuppl: string
        errorColor: string
        errorColorHover: string
        errorColorPressed: string
        errorColorSuppl: string
        textColorBase: string
        textColor1: string
        textColor2: string
        textColor3: string
        textColorDisabled: string
        placeholderColor: string
        placeholderColorDisabled: string
        iconColor: string
        iconColorHover: string
        iconColorPressed: string
        iconColorDisabled: string
        opacity1: string
        opacity2: string
        opacity3: string
        opacity4: string
        opacity5: string
        dividerColor: string
        borderColor: string
        closeColor: string
        closeColorHover: string
        closeColorPressed: string
        closeColorDisabled: string
        clearColor: string
        clearColorHover: string
        clearColorPressed: string
        scrollbarColor: string
        scrollbarColorHover: string
        scrollbarWidth: string
        scrollbarHeight: string
        scrollbarBorderRadius: string
        progressRailColor: string
        railColor: string
        popoverColor: string
        tableColor: string
        cardColor: string
        modalColor: string
        bodyColor: string
        tagColor: string
        avatarColor: string
        invertedColor: string
        inputColor: string
        codeColor: string
        tabColor: string
        actionColor: string
        tableHeaderColor: string
        hoverColor: string
        tableColorHover: string
        tableColorStriped: string
        pressedColor: string
        opacityDisabled: string
        inputColorDisabled: string
        buttonColor2: string
        buttonColor2Hover: string
        buttonColor2Pressed: string
        boxShadow1: string
        boxShadow2: string
        boxShadow3: string
        fontFamily: string
        fontFamilyMono: string
        fontWeight: string
        fontWeightStrong: string
        cubicBezierEaseInOut: string
        cubicBezierEaseOut: string
        cubicBezierEaseIn: string
        borderRadius: string
        borderRadiusSmall: string
        fontSize: string
        fontSizeTiny: string
        fontSizeSmall: string
        fontSizeMedium: string
        fontSizeLarge: string
        fontSizeHuge: string
        lineHeight: string
        heightTiny: string
        heightSmall: string
        heightMedium: string
        heightLarge: string
        heightHuge: string
        transformDebounceScale: string
        name: 'common'
      }
      self: {
        fontSize: string
        lineHeight: string
        borderRadius: string
        draggerColor: string
        draggerBorder: string
        draggerBorderHover: string
        itemColorHover: string
        itemColorHoverError: string
        itemTextColor: string
        itemTextColorError: string
        itemTextColorSuccess: string
        itemIconColor: string
        itemDisabledOpacity: string
        itemBorderImageCardError: string
        itemBorderImageCard: string
      }
      peers: {
        Button: import('../../_mixins').Theme<
          'Button',
          {
            heightTiny: string
            heightSmall: string
            heightMedium: string
            heightLarge: string
            borderRadiusTiny: string
            borderRadiusSmall: string
            borderRadiusMedium: string
            borderRadiusLarge: string
            fontSizeTiny: string
            fontSizeSmall: string
            fontSizeMedium: string
            fontSizeLarge: string
            opacityDisabled: string
            colorOpacitySecondary: string
            colorOpacitySecondaryHover: string
            colorOpacitySecondaryPressed: string
            colorSecondary: string
            colorSecondaryHover: string
            colorSecondaryPressed: string
            colorTertiary: string
            colorTertiaryHover: string
            colorTertiaryPressed: string
            colorQuaternary: string
            colorQuaternaryHover: string
            colorQuaternaryPressed: string
            color: string
            colorHover: string
            colorPressed: string
            colorFocus: string
            colorDisabled: string
            textColor: string
            textColorTertiary: string
            textColorHover: string
            textColorPressed: string
            textColorFocus: string
            textColorDisabled: string
            textColorText: string
            textColorTextHover: string
            textColorTextPressed: string
            textColorTextFocus: string
            textColorTextDisabled: string
            textColorGhost: string
            textColorGhostHover: string
            textColorGhostPressed: string
            textColorGhostFocus: string
            textColorGhostDisabled: string
            border: string
            borderHover: string
            borderPressed: string
            borderFocus: string
            borderDisabled: string
            rippleColor: string
            colorPrimary: string
            colorHoverPrimary: string
            colorPressedPrimary: string
            colorFocusPrimary: string
            colorDisabledPrimary: string
            textColorPrimary: string
            textColorHoverPrimary: string
            textColorPressedPrimary: string
            textColorFocusPrimary: string
            textColorDisabledPrimary: string
            textColorTextPrimary: string
            textColorTextHoverPrimary: string
            textColorTextPressedPrimary: string
            textColorTextFocusPrimary: string
            textColorTextDisabledPrimary: string
            textColorGhostPrimary: string
            textColorGhostHoverPrimary: string
            textColorGhostPressedPrimary: string
            textColorGhostFocusPrimary: string
            textColorGhostDisabledPrimary: string
            borderPrimary: string
            borderHoverPrimary: string
            borderPressedPrimary: string
            borderFocusPrimary: string
            borderDisabledPrimary: string
            rippleColorPrimary: string
            colorInfo: string
            colorHoverInfo: string
            colorPressedInfo: string
            colorFocusInfo: string
            colorDisabledInfo: string
            textColorInfo: string
            textColorHoverInfo: string
            textColorPressedInfo: string
            textColorFocusInfo: string
            textColorDisabledInfo: string
            textColorTextInfo: string
            textColorTextHoverInfo: string
            textColorTextPressedInfo: string
            textColorTextFocusInfo: string
            textColorTextDisabledInfo: string
            textColorGhostInfo: string
            textColorGhostHoverInfo: string
            textColorGhostPressedInfo: string
            textColorGhostFocusInfo: string
            textColorGhostDisabledInfo: string
            borderInfo: string
            borderHoverInfo: string
            borderPressedInfo: string
            borderFocusInfo: string
            borderDisabledInfo: string
            rippleColorInfo: string
            colorSuccess: string
            colorHoverSuccess: string
            colorPressedSuccess: string
            colorFocusSuccess: string
            colorDisabledSuccess: string
            textColorSuccess: string
            textColorHoverSuccess: string
            textColorPressedSuccess: string
            textColorFocusSuccess: string
            textColorDisabledSuccess: string
            textColorTextSuccess: string
            textColorTextHoverSuccess: string
            textColorTextPressedSuccess: string
            textColorTextFocusSuccess: string
            textColorTextDisabledSuccess: string
            textColorGhostSuccess: string
            textColorGhostHoverSuccess: string
            textColorGhostPressedSuccess: string
            textColorGhostFocusSuccess: string
            textColorGhostDisabledSuccess: string
            borderSuccess: string
            borderHoverSuccess: string
            borderPressedSuccess: string
            borderFocusSuccess: string
            borderDisabledSuccess: string
            rippleColorSuccess: string
            colorWarning: string
            colorHoverWarning: string
            colorPressedWarning: string
            colorFocusWarning: string
            colorDisabledWarning: string
            textColorWarning: string
            textColorHoverWarning: string
            textColorPressedWarning: string
            textColorFocusWarning: string
            textColorDisabledWarning: string
            textColorTextWarning: string
            textColorTextHoverWarning: string
            textColorTextPressedWarning: string
            textColorTextFocusWarning: string
            textColorTextDisabledWarning: string
            textColorGhostWarning: string
            textColorGhostHoverWarning: string
            textColorGhostPressedWarning: string
            textColorGhostFocusWarning: string
            textColorGhostDisabledWarning: string
            borderWarning: string
            borderHoverWarning: string
            borderPressedWarning: string
            borderFocusWarning: string
            borderDisabledWarning: string
            rippleColorWarning: string
            colorError: string
            colorHoverError: string
            colorPressedError: string
            colorFocusError: string
            colorDisabledError: string
            textColorError: string
            textColorHoverError: string
            textColorPressedError: string
            textColorFocusError: string
            textColorDisabledError: string
            textColorTextError: string
            textColorTextHoverError: string
            textColorTextPressedError: string
            textColorTextFocusError: string
            textColorTextDisabledError: string
            textColorGhostError: string
            textColorGhostHoverError: string
            textColorGhostPressedError: string
            textColorGhostFocusError: string
            textColorGhostDisabledError: string
            borderError: string
            borderHoverError: string
            borderPressedError: string
            borderFocusError: string
            borderDisabledError: string
            rippleColorError: string
            waveOpacity: string
            fontWeight: string
            fontWeightStrong: string
            paddingTiny: string
            paddingSmall: string
            paddingMedium: string
            paddingLarge: string
            paddingRoundTiny: string
            paddingRoundSmall: string
            paddingRoundMedium: string
            paddingRoundLarge: string
            iconMarginTiny: string
            iconMarginSmall: string
            iconMarginMedium: string
            iconMarginLarge: string
            iconSizeTiny: string
            iconSizeSmall: string
            iconSizeMedium: string
            iconSizeLarge: string
            rippleDuration: string
          },
          any
        >
        Progress: import('../../_mixins').Theme<
          'Progress',
          {
            fontSize: string
            fontSizeCircle: string
            fontWeightCircle: string
            railColor: string
            railHeight: string
            iconSizeCircle: string
            iconSizeLine: string
            iconColor: string
            iconColorInfo: string
            iconColorSuccess: string
            iconColorWarning: string
            iconColorError: string
            textColorCircle: string
            textColorLineInner: string
            textColorLineOuter: string
            fillColor: string
            fillColorInfo: string
            fillColorSuccess: string
            fillColorWarning: string
            fillColorError: string
            lineBgProcessing: string
          },
          any
        >
      }
      peerOverrides: {
        Button?:
          | {
              peers?:
                | {
                    [x: string]: any
                  }
                | undefined
            }
          | undefined
        Progress?:
          | {
              peers?:
                | {
                    [x: string]: any
                  }
                | undefined
            }
          | undefined
      }
    }>
    dragOver: import('vue').Ref<boolean>
    handleFileInputChange: (e: Event) => void
    cssVars: import('vue').ComputedRef<any>
  },
  unknown,
  {},
  {},
  import('vue').ComponentOptionsMixin,
  import('vue').ComponentOptionsMixin,
  Record<string, any>,
  string,
  import('vue').VNodeProps &
    import('vue').AllowedComponentProps &
    import('vue').ComponentCustomProps,
  Readonly<
    {
      readonly name?: unknown
      readonly accept?: unknown
      readonly action?: unknown
      readonly customRequest?: unknown
      readonly method?: unknown
      readonly multiple?: unknown
      readonly showFileList?: unknown
      readonly data?: unknown
      readonly headers?: unknown
      readonly withCredentials?: unknown
      readonly disabled?: unknown
      readonly onChange?: unknown
      readonly onRemove?: unknown
      readonly onFinish?: unknown
      readonly onBeforeUpload?: unknown
      readonly onDownload?: unknown
      readonly defaultUpload?: unknown
      readonly fileList?: unknown
      readonly 'onUpdate:fileList'?: unknown
      readonly onUpdateFileList?: unknown
      readonly fileListStyle?: unknown
      readonly defaultFileList?: unknown
      readonly showCancelButton?: unknown
      readonly showRemoveButton?: unknown
      readonly showDownloadButton?: unknown
      readonly showRetryButton?: unknown
      readonly showPreviewButton?: unknown
      readonly listType?: unknown
      readonly onPreview?: unknown
      readonly createThumbnailUrl?: unknown
      readonly abstract?: unknown
      readonly max?: unknown
      readonly showTrigger?: unknown
      readonly theme?: unknown
      readonly themeOverrides?: unknown
      readonly builtinThemeOverrides?: unknown
    } & {
      method: string
      abstract: boolean
      name: string
      multiple: boolean
      showTrigger: boolean
      listType: listType
      showCancelButton: boolean
      showRemoveButton: boolean
      showDownloadButton: boolean
      showRetryButton: boolean
      showPreviewButton: boolean
      withCredentials: boolean
      showFileList: boolean
      defaultUpload: boolean
      defaultFileList: FileInfo[]
    } & {
      data?: FuncOrRecordOrUndef
      disabled?: boolean | undefined
      onChange?: OnChange | undefined
      action?: string | undefined
      accept?: string | undefined
      max?: number | undefined
      headers?: FuncOrRecordOrUndef
      theme?:
        | import('../../_mixins').Theme<
            'Upload',
            {
              fontSize: string
              lineHeight: string
              borderRadius: string
              draggerColor: string
              draggerBorder: string
              draggerBorderHover: string
              itemColorHover: string
              itemColorHoverError: string
              itemTextColor: string
              itemTextColorError: string
              itemTextColorSuccess: string
              itemIconColor: string
              itemDisabledOpacity: string
              itemBorderImageCardError: string
              itemBorderImageCard: string
            },
            {
              Button: import('../../_mixins').Theme<
                'Button',
                {
                  heightTiny: string
                  heightSmall: string
                  heightMedium: string
                  heightLarge: string
                  borderRadiusTiny: string
                  borderRadiusSmall: string
                  borderRadiusMedium: string
                  borderRadiusLarge: string
                  fontSizeTiny: string
                  fontSizeSmall: string
                  fontSizeMedium: string
                  fontSizeLarge: string
                  opacityDisabled: string
                  colorOpacitySecondary: string
                  colorOpacitySecondaryHover: string
                  colorOpacitySecondaryPressed: string
                  colorSecondary: string
                  colorSecondaryHover: string
                  colorSecondaryPressed: string
                  colorTertiary: string
                  colorTertiaryHover: string
                  colorTertiaryPressed: string
                  colorQuaternary: string
                  colorQuaternaryHover: string
                  colorQuaternaryPressed: string
                  color: string
                  colorHover: string
                  colorPressed: string
                  colorFocus: string
                  colorDisabled: string
                  textColor: string
                  textColorTertiary: string
                  textColorHover: string
                  textColorPressed: string
                  textColorFocus: string
                  textColorDisabled: string
                  textColorText: string
                  textColorTextHover: string
                  textColorTextPressed: string
                  textColorTextFocus: string
                  textColorTextDisabled: string
                  textColorGhost: string
                  textColorGhostHover: string
                  textColorGhostPressed: string
                  textColorGhostFocus: string
                  textColorGhostDisabled: string
                  border: string
                  borderHover: string
                  borderPressed: string
                  borderFocus: string
                  borderDisabled: string
                  rippleColor: string
                  colorPrimary: string
                  colorHoverPrimary: string
                  colorPressedPrimary: string
                  colorFocusPrimary: string
                  colorDisabledPrimary: string
                  textColorPrimary: string
                  textColorHoverPrimary: string
                  textColorPressedPrimary: string
                  textColorFocusPrimary: string
                  textColorDisabledPrimary: string
                  textColorTextPrimary: string
                  textColorTextHoverPrimary: string
                  textColorTextPressedPrimary: string
                  textColorTextFocusPrimary: string
                  textColorTextDisabledPrimary: string
                  textColorGhostPrimary: string
                  textColorGhostHoverPrimary: string
                  textColorGhostPressedPrimary: string
                  textColorGhostFocusPrimary: string
                  textColorGhostDisabledPrimary: string
                  borderPrimary: string
                  borderHoverPrimary: string
                  borderPressedPrimary: string
                  borderFocusPrimary: string
                  borderDisabledPrimary: string
                  rippleColorPrimary: string
                  colorInfo: string
                  colorHoverInfo: string
                  colorPressedInfo: string
                  colorFocusInfo: string
                  colorDisabledInfo: string
                  textColorInfo: string
                  textColorHoverInfo: string
                  textColorPressedInfo: string
                  textColorFocusInfo: string
                  textColorDisabledInfo: string
                  textColorTextInfo: string
                  textColorTextHoverInfo: string
                  textColorTextPressedInfo: string
                  textColorTextFocusInfo: string
                  textColorTextDisabledInfo: string
                  textColorGhostInfo: string
                  textColorGhostHoverInfo: string
                  textColorGhostPressedInfo: string
                  textColorGhostFocusInfo: string
                  textColorGhostDisabledInfo: string
                  borderInfo: string
                  borderHoverInfo: string
                  borderPressedInfo: string
                  borderFocusInfo: string
                  borderDisabledInfo: string
                  rippleColorInfo: string
                  colorSuccess: string
                  colorHoverSuccess: string
                  colorPressedSuccess: string
                  colorFocusSuccess: string
                  colorDisabledSuccess: string
                  textColorSuccess: string
                  textColorHoverSuccess: string
                  textColorPressedSuccess: string
                  textColorFocusSuccess: string
                  textColorDisabledSuccess: string
                  textColorTextSuccess: string
                  textColorTextHoverSuccess: string
                  textColorTextPressedSuccess: string
                  textColorTextFocusSuccess: string
                  textColorTextDisabledSuccess: string
                  textColorGhostSuccess: string
                  textColorGhostHoverSuccess: string
                  textColorGhostPressedSuccess: string
                  textColorGhostFocusSuccess: string
                  textColorGhostDisabledSuccess: string
                  borderSuccess: string
                  borderHoverSuccess: string
                  borderPressedSuccess: string
                  borderFocusSuccess: string
                  borderDisabledSuccess: string
                  rippleColorSuccess: string
                  colorWarning: string
                  colorHoverWarning: string
                  colorPressedWarning: string
                  colorFocusWarning: string
                  colorDisabledWarning: string
                  textColorWarning: string
                  textColorHoverWarning: string
                  textColorPressedWarning: string
                  textColorFocusWarning: string
                  textColorDisabledWarning: string
                  textColorTextWarning: string
                  textColorTextHoverWarning: string
                  textColorTextPressedWarning: string
                  textColorTextFocusWarning: string
                  textColorTextDisabledWarning: string
                  textColorGhostWarning: string
                  textColorGhostHoverWarning: string
                  textColorGhostPressedWarning: string
                  textColorGhostFocusWarning: string
                  textColorGhostDisabledWarning: string
                  borderWarning: string
                  borderHoverWarning: string
                  borderPressedWarning: string
                  borderFocusWarning: string
                  borderDisabledWarning: string
                  rippleColorWarning: string
                  colorError: string
                  colorHoverError: string
                  colorPressedError: string
                  colorFocusError: string
                  colorDisabledError: string
                  textColorError: string
                  textColorHoverError: string
                  textColorPressedError: string
                  textColorFocusError: string
                  textColorDisabledError: string
                  textColorTextError: string
                  textColorTextHoverError: string
                  textColorTextPressedError: string
                  textColorTextFocusError: string
                  textColorTextDisabledError: string
                  textColorGhostError: string
                  textColorGhostHoverError: string
                  textColorGhostPressedError: string
                  textColorGhostFocusError: string
                  textColorGhostDisabledError: string
                  borderError: string
                  borderHoverError: string
                  borderPressedError: string
                  borderFocusError: string
                  borderDisabledError: string
                  rippleColorError: string
                  waveOpacity: string
                  fontWeight: string
                  fontWeightStrong: string
                  paddingTiny: string
                  paddingSmall: string
                  paddingMedium: string
                  paddingLarge: string
                  paddingRoundTiny: string
                  paddingRoundSmall: string
                  paddingRoundMedium: string
                  paddingRoundLarge: string
                  iconMarginTiny: string
                  iconMarginSmall: string
                  iconMarginMedium: string
                  iconMarginLarge: string
                  iconSizeTiny: string
                  iconSizeSmall: string
                  iconSizeMedium: string
                  iconSizeLarge: string
                  rippleDuration: string
                },
                any
              >
              Progress: import('../../_mixins').Theme<
                'Progress',
                {
                  fontSize: string
                  fontSizeCircle: string
                  fontWeightCircle: string
                  railColor: string
                  railHeight: string
                  iconSizeCircle: string
                  iconSizeLine: string
                  iconColor: string
                  iconColorInfo: string
                  iconColorSuccess: string
                  iconColorWarning: string
                  iconColorError: string
                  textColorCircle: string
                  textColorLineInner: string
                  textColorLineOuter: string
                  fillColor: string
                  fillColorInfo: string
                  fillColorSuccess: string
                  fillColorWarning: string
                  fillColorError: string
                  lineBgProcessing: string
                },
                any
              >
            }
          >
        | undefined
      themeOverrides?:
        | import('../../_mixins/use-theme').ExtractThemeOverrides<
            import('../../_mixins').Theme<
              'Upload',
              {
                fontSize: string
                lineHeight: string
                borderRadius: string
                draggerColor: string
                draggerBorder: string
                draggerBorderHover: string
                itemColorHover: string
                itemColorHoverError: string
                itemTextColor: string
                itemTextColorError: string
                itemTextColorSuccess: string
                itemIconColor: string
                itemDisabledOpacity: string
                itemBorderImageCardError: string
                itemBorderImageCard: string
              },
              {
                Button: import('../../_mixins').Theme<
                  'Button',
                  {
                    heightTiny: string
                    heightSmall: string
                    heightMedium: string
                    heightLarge: string
                    borderRadiusTiny: string
                    borderRadiusSmall: string
                    borderRadiusMedium: string
                    borderRadiusLarge: string
                    fontSizeTiny: string
                    fontSizeSmall: string
                    fontSizeMedium: string
                    fontSizeLarge: string
                    opacityDisabled: string
                    colorOpacitySecondary: string
                    colorOpacitySecondaryHover: string
                    colorOpacitySecondaryPressed: string
                    colorSecondary: string
                    colorSecondaryHover: string
                    colorSecondaryPressed: string
                    colorTertiary: string
                    colorTertiaryHover: string
                    colorTertiaryPressed: string
                    colorQuaternary: string
                    colorQuaternaryHover: string
                    colorQuaternaryPressed: string
                    color: string
                    colorHover: string
                    colorPressed: string
                    colorFocus: string
                    colorDisabled: string
                    textColor: string
                    textColorTertiary: string
                    textColorHover: string
                    textColorPressed: string
                    textColorFocus: string
                    textColorDisabled: string
                    textColorText: string
                    textColorTextHover: string
                    textColorTextPressed: string
                    textColorTextFocus: string
                    textColorTextDisabled: string
                    textColorGhost: string
                    textColorGhostHover: string
                    textColorGhostPressed: string
                    textColorGhostFocus: string
                    textColorGhostDisabled: string
                    border: string
                    borderHover: string
                    borderPressed: string
                    borderFocus: string
                    borderDisabled: string
                    rippleColor: string
                    colorPrimary: string
                    colorHoverPrimary: string
                    colorPressedPrimary: string
                    colorFocusPrimary: string
                    colorDisabledPrimary: string
                    textColorPrimary: string
                    textColorHoverPrimary: string
                    textColorPressedPrimary: string
                    textColorFocusPrimary: string
                    textColorDisabledPrimary: string
                    textColorTextPrimary: string
                    textColorTextHoverPrimary: string
                    textColorTextPressedPrimary: string
                    textColorTextFocusPrimary: string
                    textColorTextDisabledPrimary: string
                    textColorGhostPrimary: string
                    textColorGhostHoverPrimary: string
                    textColorGhostPressedPrimary: string
                    textColorGhostFocusPrimary: string
                    textColorGhostDisabledPrimary: string
                    borderPrimary: string
                    borderHoverPrimary: string
                    borderPressedPrimary: string
                    borderFocusPrimary: string
                    borderDisabledPrimary: string
                    rippleColorPrimary: string
                    colorInfo: string
                    colorHoverInfo: string
                    colorPressedInfo: string
                    colorFocusInfo: string
                    colorDisabledInfo: string
                    textColorInfo: string
                    textColorHoverInfo: string
                    textColorPressedInfo: string
                    textColorFocusInfo: string
                    textColorDisabledInfo: string
                    textColorTextInfo: string
                    textColorTextHoverInfo: string
                    textColorTextPressedInfo: string
                    textColorTextFocusInfo: string
                    textColorTextDisabledInfo: string
                    textColorGhostInfo: string
                    textColorGhostHoverInfo: string
                    textColorGhostPressedInfo: string
                    textColorGhostFocusInfo: string
                    textColorGhostDisabledInfo: string
                    borderInfo: string
                    borderHoverInfo: string
                    borderPressedInfo: string
                    borderFocusInfo: string
                    borderDisabledInfo: string
                    rippleColorInfo: string
                    colorSuccess: string
                    colorHoverSuccess: string
                    colorPressedSuccess: string
                    colorFocusSuccess: string
                    colorDisabledSuccess: string
                    textColorSuccess: string
                    textColorHoverSuccess: string
                    textColorPressedSuccess: string
                    textColorFocusSuccess: string
                    textColorDisabledSuccess: string
                    textColorTextSuccess: string
                    textColorTextHoverSuccess: string
                    textColorTextPressedSuccess: string
                    textColorTextFocusSuccess: string
                    textColorTextDisabledSuccess: string
                    textColorGhostSuccess: string
                    textColorGhostHoverSuccess: string
                    textColorGhostPressedSuccess: string
                    textColorGhostFocusSuccess: string
                    textColorGhostDisabledSuccess: string
                    borderSuccess: string
                    borderHoverSuccess: string
                    borderPressedSuccess: string
                    borderFocusSuccess: string
                    borderDisabledSuccess: string
                    rippleColorSuccess: string
                    colorWarning: string
                    colorHoverWarning: string
                    colorPressedWarning: string
                    colorFocusWarning: string
                    colorDisabledWarning: string
                    textColorWarning: string
                    textColorHoverWarning: string
                    textColorPressedWarning: string
                    textColorFocusWarning: string
                    textColorDisabledWarning: string
                    textColorTextWarning: string
                    textColorTextHoverWarning: string
                    textColorTextPressedWarning: string
                    textColorTextFocusWarning: string
                    textColorTextDisabledWarning: string
                    textColorGhostWarning: string
                    textColorGhostHoverWarning: string
                    textColorGhostPressedWarning: string
                    textColorGhostFocusWarning: string
                    textColorGhostDisabledWarning: string
                    borderWarning: string
                    borderHoverWarning: string
                    borderPressedWarning: string
                    borderFocusWarning: string
                    borderDisabledWarning: string
                    rippleColorWarning: string
                    colorError: string
                    colorHoverError: string
                    colorPressedError: string
                    colorFocusError: string
                    colorDisabledError: string
                    textColorError: string
                    textColorHoverError: string
                    textColorPressedError: string
                    textColorFocusError: string
                    textColorDisabledError: string
                    textColorTextError: string
                    textColorTextHoverError: string
                    textColorTextPressedError: string
                    textColorTextFocusError: string
                    textColorTextDisabledError: string
                    textColorGhostError: string
                    textColorGhostHoverError: string
                    textColorGhostPressedError: string
                    textColorGhostFocusError: string
                    textColorGhostDisabledError: string
                    borderError: string
                    borderHoverError: string
                    borderPressedError: string
                    borderFocusError: string
                    borderDisabledError: string
                    rippleColorError: string
                    waveOpacity: string
                    fontWeight: string
                    fontWeightStrong: string
                    paddingTiny: string
                    paddingSmall: string
                    paddingMedium: string
                    paddingLarge: string
                    paddingRoundTiny: string
                    paddingRoundSmall: string
                    paddingRoundMedium: string
                    paddingRoundLarge: string
                    iconMarginTiny: string
                    iconMarginSmall: string
                    iconMarginMedium: string
                    iconMarginLarge: string
                    iconSizeTiny: string
                    iconSizeSmall: string
                    iconSizeMedium: string
                    iconSizeLarge: string
                    rippleDuration: string
                  },
                  any
                >
                Progress: import('../../_mixins').Theme<
                  'Progress',
                  {
                    fontSize: string
                    fontSizeCircle: string
                    fontWeightCircle: string
                    railColor: string
                    railHeight: string
                    iconSizeCircle: string
                    iconSizeLine: string
                    iconColor: string
                    iconColorInfo: string
                    iconColorSuccess: string
                    iconColorWarning: string
                    iconColorError: string
                    textColorCircle: string
                    textColorLineInner: string
                    textColorLineOuter: string
                    fillColor: string
                    fillColorInfo: string
                    fillColorSuccess: string
                    fillColorWarning: string
                    fillColorError: string
                    lineBgProcessing: string
                  },
                  any
                >
              }
            >
          >
        | undefined
      builtinThemeOverrides?:
        | import('../../_mixins/use-theme').ExtractThemeOverrides<
            import('../../_mixins').Theme<
              'Upload',
              {
                fontSize: string
                lineHeight: string
                borderRadius: string
                draggerColor: string
                draggerBorder: string
                draggerBorderHover: string
                itemColorHover: string
                itemColorHoverError: string
                itemTextColor: string
                itemTextColorError: string
                itemTextColorSuccess: string
                itemIconColor: string
                itemDisabledOpacity: string
                itemBorderImageCardError: string
                itemBorderImageCard: string
              },
              {
                Button: import('../../_mixins').Theme<
                  'Button',
                  {
                    heightTiny: string
                    heightSmall: string
                    heightMedium: string
                    heightLarge: string
                    borderRadiusTiny: string
                    borderRadiusSmall: string
                    borderRadiusMedium: string
                    borderRadiusLarge: string
                    fontSizeTiny: string
                    fontSizeSmall: string
                    fontSizeMedium: string
                    fontSizeLarge: string
                    opacityDisabled: string
                    colorOpacitySecondary: string
                    colorOpacitySecondaryHover: string
                    colorOpacitySecondaryPressed: string
                    colorSecondary: string
                    colorSecondaryHover: string
                    colorSecondaryPressed: string
                    colorTertiary: string
                    colorTertiaryHover: string
                    colorTertiaryPressed: string
                    colorQuaternary: string
                    colorQuaternaryHover: string
                    colorQuaternaryPressed: string
                    color: string
                    colorHover: string
                    colorPressed: string
                    colorFocus: string
                    colorDisabled: string
                    textColor: string
                    textColorTertiary: string
                    textColorHover: string
                    textColorPressed: string
                    textColorFocus: string
                    textColorDisabled: string
                    textColorText: string
                    textColorTextHover: string
                    textColorTextPressed: string
                    textColorTextFocus: string
                    textColorTextDisabled: string
                    textColorGhost: string
                    textColorGhostHover: string
                    textColorGhostPressed: string
                    textColorGhostFocus: string
                    textColorGhostDisabled: string
                    border: string
                    borderHover: string
                    borderPressed: string
                    borderFocus: string
                    borderDisabled: string
                    rippleColor: string
                    colorPrimary: string
                    colorHoverPrimary: string
                    colorPressedPrimary: string
                    colorFocusPrimary: string
                    colorDisabledPrimary: string
                    textColorPrimary: string
                    textColorHoverPrimary: string
                    textColorPressedPrimary: string
                    textColorFocusPrimary: string
                    textColorDisabledPrimary: string
                    textColorTextPrimary: string
                    textColorTextHoverPrimary: string
                    textColorTextPressedPrimary: string
                    textColorTextFocusPrimary: string
                    textColorTextDisabledPrimary: string
                    textColorGhostPrimary: string
                    textColorGhostHoverPrimary: string
                    textColorGhostPressedPrimary: string
                    textColorGhostFocusPrimary: string
                    textColorGhostDisabledPrimary: string
                    borderPrimary: string
                    borderHoverPrimary: string
                    borderPressedPrimary: string
                    borderFocusPrimary: string
                    borderDisabledPrimary: string
                    rippleColorPrimary: string
                    colorInfo: string
                    colorHoverInfo: string
                    colorPressedInfo: string
                    colorFocusInfo: string
                    colorDisabledInfo: string
                    textColorInfo: string
                    textColorHoverInfo: string
                    textColorPressedInfo: string
                    textColorFocusInfo: string
                    textColorDisabledInfo: string
                    textColorTextInfo: string
                    textColorTextHoverInfo: string
                    textColorTextPressedInfo: string
                    textColorTextFocusInfo: string
                    textColorTextDisabledInfo: string
                    textColorGhostInfo: string
                    textColorGhostHoverInfo: string
                    textColorGhostPressedInfo: string
                    textColorGhostFocusInfo: string
                    textColorGhostDisabledInfo: string
                    borderInfo: string
                    borderHoverInfo: string
                    borderPressedInfo: string
                    borderFocusInfo: string
                    borderDisabledInfo: string
                    rippleColorInfo: string
                    colorSuccess: string
                    colorHoverSuccess: string
                    colorPressedSuccess: string
                    colorFocusSuccess: string
                    colorDisabledSuccess: string
                    textColorSuccess: string
                    textColorHoverSuccess: string
                    textColorPressedSuccess: string
                    textColorFocusSuccess: string
                    textColorDisabledSuccess: string
                    textColorTextSuccess: string
                    textColorTextHoverSuccess: string
                    textColorTextPressedSuccess: string
                    textColorTextFocusSuccess: string
                    textColorTextDisabledSuccess: string
                    textColorGhostSuccess: string
                    textColorGhostHoverSuccess: string
                    textColorGhostPressedSuccess: string
                    textColorGhostFocusSuccess: string
                    textColorGhostDisabledSuccess: string
                    borderSuccess: string
                    borderHoverSuccess: string
                    borderPressedSuccess: string
                    borderFocusSuccess: string
                    borderDisabledSuccess: string
                    rippleColorSuccess: string
                    colorWarning: string
                    colorHoverWarning: string
                    colorPressedWarning: string
                    colorFocusWarning: string
                    colorDisabledWarning: string
                    textColorWarning: string
                    textColorHoverWarning: string
                    textColorPressedWarning: string
                    textColorFocusWarning: string
                    textColorDisabledWarning: string
                    textColorTextWarning: string
                    textColorTextHoverWarning: string
                    textColorTextPressedWarning: string
                    textColorTextFocusWarning: string
                    textColorTextDisabledWarning: string
                    textColorGhostWarning: string
                    textColorGhostHoverWarning: string
                    textColorGhostPressedWarning: string
                    textColorGhostFocusWarning: string
                    textColorGhostDisabledWarning: string
                    borderWarning: string
                    borderHoverWarning: string
                    borderPressedWarning: string
                    borderFocusWarning: string
                    borderDisabledWarning: string
                    rippleColorWarning: string
                    colorError: string
                    colorHoverError: string
                    colorPressedError: string
                    colorFocusError: string
                    colorDisabledError: string
                    textColorError: string
                    textColorHoverError: string
                    textColorPressedError: string
                    textColorFocusError: string
                    textColorDisabledError: string
                    textColorTextError: string
                    textColorTextHoverError: string
                    textColorTextPressedError: string
                    textColorTextFocusError: string
                    textColorTextDisabledError: string
                    textColorGhostError: string
                    textColorGhostHoverError: string
                    textColorGhostPressedError: string
                    textColorGhostFocusError: string
                    textColorGhostDisabledError: string
                    borderError: string
                    borderHoverError: string
                    borderPressedError: string
                    borderFocusError: string
                    borderDisabledError: string
                    rippleColorError: string
                    waveOpacity: string
                    fontWeight: string
                    fontWeightStrong: string
                    paddingTiny: string
                    paddingSmall: string
                    paddingMedium: string
                    paddingLarge: string
                    paddingRoundTiny: string
                    paddingRoundSmall: string
                    paddingRoundMedium: string
                    paddingRoundLarge: string
                    iconMarginTiny: string
                    iconMarginSmall: string
                    iconMarginMedium: string
                    iconMarginLarge: string
                    iconSizeTiny: string
                    iconSizeSmall: string
                    iconSizeMedium: string
                    iconSizeLarge: string
                    rippleDuration: string
                  },
                  any
                >
                Progress: import('../../_mixins').Theme<
                  'Progress',
                  {
                    fontSize: string
                    fontSizeCircle: string
                    fontWeightCircle: string
                    railColor: string
                    railHeight: string
                    iconSizeCircle: string
                    iconSizeLine: string
                    iconColor: string
                    iconColorInfo: string
                    iconColorSuccess: string
                    iconColorWarning: string
                    iconColorError: string
                    textColorCircle: string
                    textColorLineInner: string
                    textColorLineOuter: string
                    fillColor: string
                    fillColorInfo: string
                    fillColorSuccess: string
                    fillColorWarning: string
                    fillColorError: string
                    lineBgProcessing: string
                  },
                  any
                >
              }
            >
          >
        | undefined
      onRemove?: OnRemove | undefined
      customRequest?: CustomRequest | undefined
      onFinish?: OnFinish | undefined
      onBeforeUpload?: OnBeforeUpload | undefined
      onDownload?: OnDownload | undefined
      fileList?: FileInfo[] | undefined
      'onUpdate:fileList'?: MaybeArray<OnUpdateFileList> | undefined
      onUpdateFileList?: MaybeArray<OnUpdateFileList> | undefined
      fileListStyle?: string | CSSProperties | undefined
      onPreview?: OnPreview | undefined
      createThumbnailUrl?: CreateThumbnailUrl | undefined
    }
  >,
  {
    method: string
    abstract: boolean
    name: string
    multiple: boolean
    disabled: boolean | undefined
    showTrigger: boolean
    listType: listType
    showCancelButton: boolean
    showRemoveButton: boolean
    showDownloadButton: boolean
    showRetryButton: boolean
    showPreviewButton: boolean
    withCredentials: boolean
    showFileList: boolean
    defaultUpload: boolean
    defaultFileList: FileInfo[]
  }
>
export default _default
