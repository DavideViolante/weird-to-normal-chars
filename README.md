# Weird to normal chars converter
This project detects weird characters in a string and convert them with normal chars. This project was born to convert biographies in social medias that are sometimes written using weird special characters and fonts.

### Install
`npm i weird-to-normal-chars`

### Example
```js
const { weirdToNormalChars } = require('weird-to-normal-chars')

function main() {
  const weirdString1 = weirdToNormalChars('...')
  const weirdString2 = weirdToNormalChars('...')
  const weirdString3 = weirdToNormalChars('...')
  console.log(weirdString3) // ...
  console.log(weirdString3) // ...
  console.log(weirdString3) // ...
}
```

### Run tests
- `npm test`

### Run lint
- `npm run lint`
