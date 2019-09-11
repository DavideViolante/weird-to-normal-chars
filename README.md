# Weird to normal chars converter
This project detects weird characters in a string and convert them with normal chars. This project was born to convert biographies in social medias that are sometimes written using weird special characters and fonts, 🄻🄸🄺🄴 ⓣⓗⓘⓢ 🅾🅽🅴.

I mostly used https://instafonts.io to find the weird chars.

### Install
`npm i weird-to-normal-chars`

### Example
```js
const { weirdToNormalChars } = require('weird-to-normal-chars')

function main() {
  const result1 = weirdToNormalChars('𝔗𝔥𝔦𝔰 𝔦𝔰 𝔞 𝔴𝔢𝔦𝔯𝔡 𝔰𝔱𝔯𝔦𝔫𝔤')
  const result2 = weirdToNormalChars('𝒯𝒽𝒾𝓈 𝒾𝓈 𝒶 𝓌𝑒𝒾𝓇𝒹 𝓈𝓉𝓇𝒾𝓃𝑔')
  const result3 = weirdToNormalChars('𝕋𝕙𝕚𝕤 𝕚𝕤 𝕒 𝕨𝕖𝕚𝕣𝕕 𝕤𝕥𝕣𝕚𝕟𝕘')
  console.log(result1) // This is a weird string
  console.log(result2) // This is a weird string
  console.log(result3) // This is a weird string
}
```

### Run tests
- `npm test`

### Run lint
- `npm run lint`
