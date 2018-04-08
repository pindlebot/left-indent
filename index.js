const leftPad = (text, spaces) => `${(new Array(spaces >= 0 ? spaces : 0)).fill(' ').join('')}${text}`

const leftIndent = (text, direction = 'forward', tabSize = 2) => {
  const matchArr = text.match(/^(\s*)([\s\S]+)$/m)
  const spaces = matchArr[1].length
  const trimmedLeft = matchArr[2]
  let delta = 0
  let isEven = spaces % 2 === 0
  
  if (direction === 'forward') {
    if (isEven) {
      delta += tabSize
    } else {
      delta++
    }
  } else if (direction === 'backward') {
    if (isEven) {
      delta -= tabSize
    } else {
      delta--
    }
  }
  return leftPad(trimmedLeft, spaces + delta)
}

(module.exports = leftIndent).leftIndent = leftIndent