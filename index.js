const pad = spaces => new Array(spaces >= 0 ? spaces : 0).fill(' ').join('')

const getPadding = (
  text,
  direction = 'forward',
  tabSize = 2
) => {
  const matchArr = text.match(/^(\s*)([\s\S]+)$/m)
  const spaces = matchArr[1].length
  const trimmedLeft = matchArr[2]
  let delta = 0
  if (spaces % 2 === 0) {
    if (direction === 'forward') {
      delta += tabSize
    } else {
      delta -= tabSize
    }
  } else {
    if (direction === 'forward') {
      delta++
    } else {
      delta--
    }
  }
  return pad(delta)
}

const leftIndent = (
  text,
  direction = 'forward',
  tabSize = 2
) => {
  const indent = getPadding(text, direction, tabSize)
  return `${indent}${text}`
}

module.exports.pad = pad
module.exports.getPadding = getPadding
module.exports.leftIndent = leftIndent