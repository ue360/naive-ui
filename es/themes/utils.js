export function createTheme(componentThemes) {
  const theme = {}
  for (const cTheme of componentThemes) {
    theme[cTheme.name] = cTheme
  }
  return theme
}