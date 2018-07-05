const pad = spaces => new Array(spaces >= 0 ? spaces : 0).fill(' ').join('')

const LEFT_INDENT_RE = /^(\s*)(.*)$/m

const getDelta = (
  spaces,
  direction = 'forward',
  tabSize = 2
) => {
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
  return delta
}

const leftIndent = (text, direction, tabSize) => {
  const matchArr = text.match(LEFT_INDENT_RE)
  const spaces = matchArr[1].length
  const leftTrimmed = matchArr[2]
  const delta = getDelta(spaces, direction, tabSize)
  return `${pad(spaces + delta)}${leftTrimmed}`
}

module.exports.pad = pad
module.exports.leftIndent = leftIndent
module.exports.LEFT_INDENT_RE = LEFT_INDENT_RE
module.exports.getDelta = getDelta