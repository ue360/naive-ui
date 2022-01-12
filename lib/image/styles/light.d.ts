declare function self(): {
  iconColor: string
}
export declare const imageLight: import('../../_mixins').Theme<
  'Image',
  {
    iconColor: string
  },
  unknown
>
export declare type ImageTheme = typeof imageLight
export declare type ImageThemeVars = ReturnType<typeof self>
export {}
