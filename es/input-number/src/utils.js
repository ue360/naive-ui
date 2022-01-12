// string => string (expected, not implemented)
// string => number (legacy)
export function parse(value) {
  if (
    value === undefined ||
    value === null ||
    (typeof value === 'string' && value.trim() === '')
  ) {
    return null
  }
  return Number(value)
}
// can be parsed to number but shouldn't be applied when inputing
export function isWipValue(value) {
  return /^\d+\.$/.test(value) || /^\.\d+$/.test(value)
}
// string => boolean (expected, not implemented)
// number => boolean (legacy)
export function validator(value) {
  if (value === undefined || value === null) return true
  if (Number.isNaN(value)) return false
  return true
}
// string => string (expected, not implemented)
// number => string (legacy)
export function format(value) {
  if (value === undefined || value === null) return ''
  return String(value)
}
export function parseNumber(number) {
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
