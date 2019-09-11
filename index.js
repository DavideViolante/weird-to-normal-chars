const weirdToNormalMap = require('./map')

/**
 * Weird to normal chars converter
 * @param {String} str String to convert
 * @returns {String}
 */
function weirdToNormalChars (str) {
  if (!str) {
    return ''
  }
  return [...str]
    .map(char => weirdToNormalMap[char] || char)
    .join('')
}

exports.weirdToNormalChars = weirdToNormalChars
