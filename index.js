const pad = spaces => new Array(spaces >= 0 ? spaces : 0).fill(' ').join('')

const LEFT_INDENT_RE = /^(\s*)(.*)$/m

const leftIndent = (
  text,
  direction = 'forward',
  tabSize = 2
) => {
  const matchArr = text.match(LEFT_INDENT_RE)
  const spaces = matchArr[1].length
  const leftTrimmed = matchArr[2]
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
  return `${pad(spaces + delta)}${leftTrimmed}`
}

module.exports.pad = pad
module.exports.leftIndent = leftIndent
module.exports.LEFT_INDENT_RE = LEFT_INDENT_RE