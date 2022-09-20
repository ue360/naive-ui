'use strict'
Object.defineProperty(exports, '__esModule', { value: true })
exports.createTheme = void 0
function createTheme(componentThemes) {
  const theme = {}
  for (const cTheme of componentThemes) {
    theme[cTheme.name] = cTheme
  }
  return theme
}
exports.createTheme = createTheme