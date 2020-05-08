# Weird to normal chars converter
[![](https://github.com/davideviolante/weird-to-normal-chars/workflows/Node.js%20CI/badge.svg)](https://github.com/DavideViolante/weird-to-normal-chars/actions?query=workflow%3A"Node.js+CI") [![Maintainability](https://api.codeclimate.com/v1/badges/3ab3883e9e0d7faf561d/maintainability)](https://codeclimate.com/github/DavideViolante/weird-to-normal-chars/maintainability) [![Donate](https://img.shields.io/badge/paypal-donate-179BD7.svg)](https://www.paypal.me/dviolante)

Library to detect weird characters in a string and convert them to normal chars. This project was born to convert biographies in social medias that are sometimes written using weird special characters and fonts, 🄻🄸🄺🄴 ⓣⓗⓘⓢ 🅾🅽🅴.

I mostly used https://instafonts.io to find the weird chars.

### Install
`npm i weird-to-normal-chars`

### Example
```js
const { weirdToNormalChars } = require('weird-to-normal-chars')

const result1 = weirdToNormalChars('𝔗𝔥𝔦𝔰 𝔦𝔰 𝔞 𝔴𝔢𝔦𝔯𝔡 𝔰𝔱𝔯𝔦𝔫𝔤')
const result2 = weirdToNormalChars('𝒯𝒽𝒾𝓈 𝒾𝓈 𝒶 𝓌𝑒𝒾𝓇𝒹 𝓈𝓉𝓇𝒾𝓃𝑔')
const result3 = weirdToNormalChars('𝕋𝕙𝕚𝕤 𝕚𝕤 𝕒 𝕨𝕖𝕚𝕣𝕕 𝕤𝕥𝕣𝕚𝕟𝕘')
console.log(result1) // This is a weird string
console.log(result2) // This is a weird string
console.log(result3) // This is a weird string
```

### Run tests
- `npm test`

### Run lint
- `npm run lint`

### I need you
To support as many chars as possible I need your help. If you have a list of chars that are not covered already, please open an Issue or open a Pull Request.

### Author
- [Davide Violante](https://github.com/DavideViolante/)
