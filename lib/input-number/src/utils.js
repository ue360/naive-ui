'use strict'
Object.defineProperty(exports, '__esModule', { value: true })
exports.parseNumber =
  exports.format =
  exports.validator =
  exports.isWipValue =
  exports.parse =
    void 0
// string => string (expected, not implemented)
// string => number (legacy)
function parse(value) {
  if (
    value === undefined ||
    value === null ||
    (typeof value === 'string' && value.trim() === '')
  ) {
    return null
  }
  return Number(value)
}
exports.parse = parse
// can be parsed to number but shouldn't be applied when inputing
function isWipValue(value) {
  return /^\d+\.$/.test(value) || /^\.\d+$/.test(value)
}
exports.isWipValue = isWipValue
// string => boolean (expected, not implemented)
// number => boolean (legacy)
function validator(value) {
  if (value === undefined || value === null) return true
  if (Number.isNaN(value)) return false
  return true
}
exports.validator = validator
// string => string (expected, not implemented)
// number => string (legacy)
function format(value) {
  if (value === undefined || value === null) return ''
  return String(value)
}
exports.format = format
function parseNumber(number) {
  if (number === null) return null
  if (typeof number === 'number') {
    return number
  } else {
    const parsedNumber = Number(number)
    if (Number.isNaN(parsedNumber)) return null
    else {
      return parsedNumber
    }
  }
}
exports.parseNumber = parseNumber