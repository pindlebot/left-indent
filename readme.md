## left-indent

[![Greenkeeper badge](https://badges.greenkeeper.io/unshift/left-indent.svg)](https://greenkeeper.io/)

leftIndent (text, direction = 'forward', tabSize = 2) => indentedText

## Examples

```js
const leftIndent = require('left-indent')

leftIndent (' some text', 'forward') 
// => '  some text' 
// + 1 space

leftIndent ('  some text', 'forward')
// => + 2 spaces
// => '    some text'

leftIndent (' some text', 'backward') 
// => 'some text' 
// - 1 space

leftIndent ('  some text', 'backward')
// => - 2 spaces
// => '    some text'

leftIndent ('some text', 'backward')
// => - 0 spaces
// => 'some text'

```