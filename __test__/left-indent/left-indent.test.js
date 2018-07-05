const { leftIndent, pad, LEFT_INDENT_RE } = require('../../index')

let getInt = () => Math.floor(Math.random() * 100)

it ('pad', () => {
  let n = getInt()
  expect(pad(n).length).toBe(n)
})

it ('pad', () => {
  let n = getInt()
  expect(pad(n).length).toBe(n)
})

it ('left-indent 2', () => {
  expect(leftIndent(`  text  `, 'backward').length).toBe('text  '.length)
})

it ('left-indent 1', () => {
  expect(leftIndent(` text   `, 'backward')).toMatch('text   ')
})

it ('left-indent 4', () => {
  expect(leftIndent(`    text  `, 'backward')).toMatch('  text  ')
})

it ('left-indent 0', () => {
  expect(leftIndent(`text   `, 'backward')).toMatch('text   ')
})

it ('left-indent 5', () => {
  expect(leftIndent(`     text  `, 'backward')).toMatch('    text')
})

it ('left-indent 3', () => {
  expect(leftIndent(`   `, 'backward').length).toBe('  '.length)
})

it ('LEFT_INDENT_RE 2', () => {
  expect('  '.match(LEFT_INDENT_RE)[1].length).toBe(2)
})

it ('LEFT_INDENT_RE 2', () => {
  expect('  ok'.match(LEFT_INDENT_RE)[1].length).toBe(2)
})

it ('LEFT_INDENT_RE 2', () => {
  expect('  ok  '.match(LEFT_INDENT_RE)[1].length).toBe(2)
})