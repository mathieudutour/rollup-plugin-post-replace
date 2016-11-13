/* eslint-disable strict, no-useless-escape, no-cond-assign */

'use strict'

const MagicString = require('magic-string')

function escape (str) {
  return str.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g, '\\$&')
}

module.exports = function replace (options = {}) {
  const values = options.values || options
  const delimiters = (options.delimiters || ['', '']).map(escape)
  const pattern = new RegExp(`${delimiters[0]}(${Object.keys(values).join('|')})${delimiters[1]}`, 'g')

  return {
    name: 'replace',

    transformBundle (code) {
      const magicString = new MagicString(code)
      let hasReplacements = false
      let match
      let start
      let end
      let replacement

      while (match = pattern.exec(code)) {
        hasReplacements = true

        start = match.index
        end = start + match[0].length
        replacement = String(values[match[1]])

        magicString.overwrite(start, end, replacement)
      }

      if (!hasReplacements) return null

      const result = { code: magicString.toString() }
      if (options.sourceMap !== false) result.map = magicString.generateMap({ hires: true })

      return result
    }
  }
}
