import { GlobalTheme } from '../config-provider'
declare type ComponentKey = keyof GlobalTheme
declare type ComponentThemes = Array<
  Exclude<GlobalTheme[ComponentKey], undefined>
>
export declare function createTheme(
  componentThemes: ComponentThemes
): GlobalTheme
export {}
