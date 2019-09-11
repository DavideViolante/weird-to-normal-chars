const assert = require('assert')
const { weirdToNormalChars } = require('../index')

const regexp = new RegExp('This is a weird string', 'i')

describe('Tests for weird to normal chars', () => {
  it('should return a empty string', () => {
    const str = ''
    assert.strictEqual(weirdToNormalChars(str), '')
  })
  it('should return the same string', () => {
    const str = 'This is a weird string'
    assert.ok(regexp.test(weirdToNormalChars(str)))
  })
  it('should return a string with normal chars #1', () => {
    const str = '𝔗𝔥𝔦𝔰 𝔦𝔰 𝔞 𝔴𝔢𝔦𝔯𝔡 𝔰𝔱𝔯𝔦𝔫𝔤'
    assert.ok(regexp.test(weirdToNormalChars(str)))
  })
  it('should return a string with normal chars #2', () => {
    const str = '𝕿𝖍𝖎𝖘 𝖎𝖘 𝖆 𝖜𝖊𝖎𝖗𝖉 𝖘𝖙𝖗𝖎𝖓𝖌'
    assert.ok(regexp.test(weirdToNormalChars(str)))
  })
  it('should return a string with normal chars #3', () => {
    const str = '𝓣𝓱𝓲𝓼 𝓲𝓼 𝓪 𝔀𝓮𝓲𝓻𝓭 𝓼𝓽𝓻𝓲𝓷𝓰'
    assert.ok(regexp.test(weirdToNormalChars(str)))
  })
  it('should return a string with normal chars #4', () => {
    const str = '𝒯𝒽𝒾𝓈 𝒾𝓈 𝒶 𝓌𝑒𝒾𝓇𝒹 𝓈𝓉𝓇𝒾𝓃𝑔'
    assert.ok(regexp.test(weirdToNormalChars(str)))
  })
  it('should return a string with normal chars #5', () => {
    const str = '𝕋𝕙𝕚𝕤 𝕚𝕤 𝕒 𝕨𝕖𝕚𝕣𝕕 𝕤𝕥𝕣𝕚𝕟𝕘'
    assert.ok(regexp.test(weirdToNormalChars(str)))
  })
  it('should return a string with normal chars #6', () => {
    const str = 'Ｔｈｉｓ ｉｓ ａ ｗｅｉｒｄ ｓｔｒｉｎｇ'
    assert.ok(regexp.test(weirdToNormalChars(str)))
  })
  it('should return a string with normal chars #7', () => {
    const str = '𝐓𝐡𝐢𝐬 𝐢𝐬 𝐚 𝐰𝐞𝐢𝐫𝐝 𝐬𝐭𝐫𝐢𝐧𝐠'
    assert.ok(regexp.test(weirdToNormalChars(str)))
  })
  it('should return a string with normal chars #8', () => {
    const str = '𝗧𝗵𝗶𝘀 𝗶𝘀 𝗮 𝘄𝗲𝗶𝗿𝗱 𝘀𝘁𝗿𝗶𝗻𝗴'
    assert.ok(regexp.test(weirdToNormalChars(str)))
  })
  it('should return a string with normal chars #9', () => {
    const str = '𝘛𝘩𝘪𝘴 𝘪𝘴 𝘢 𝘸𝘦𝘪𝘳𝘥 𝘴𝘵𝘳𝘪𝘯𝘨'
    assert.ok(regexp.test(weirdToNormalChars(str)))
  })
  it('should return a string with normal chars #10', () => {
    const str = '𝙏𝙝𝙞𝙨 𝙞𝙨 𝙖 𝙬𝙚𝙞𝙧𝙙 𝙨𝙩𝙧𝙞𝙣𝙜'
    assert.ok(regexp.test(weirdToNormalChars(str)))
  })
  it('should return a string with normal chars #11', () => {
    const str = '𝑻𝒉𝒊𝒔 𝒊𝒔 𝒂 𝒘𝒆𝒊𝒓𝒅 𝒔𝒕𝒓𝒊𝒏𝒈'
    assert.ok(regexp.test(weirdToNormalChars(str)))
  })
  it('should return a string with normal chars #12', () => {
    const str = '𝚃𝚑𝚒𝚜 𝚒𝚜 𝚊 𝚠𝚎𝚒𝚛𝚍 𝚜𝚝𝚛𝚒𝚗𝚐'
    assert.ok(regexp.test(weirdToNormalChars(str)))
  })
  it('should return a string with normal chars #13', () => {
    const str = 'ᴛʜɪꜱ ɪꜱ ᴀ ᴡᴇɪʀᴅ ꜱᴛʀɪɴɢ'
    assert.ok(regexp.test(weirdToNormalChars(str)))
  })
  it('should return a string with normal chars #14', () => {
    const str = '🅃🄷🄸🅂 🄸🅂 🄰 🅆🄴🄸🅁🄳 🅂🅃🅁🄸🄽🄶'
    assert.ok(regexp.test(weirdToNormalChars(str)))
  })
  it('should return a string with normal chars #15', () => {
    const str = '🆃🅷🅸🆂 🅸🆂 🅰 🆆🅴🅸🆁🅳 🆂🆃🆁🅸🅽🅶'
    assert.ok(regexp.test(weirdToNormalChars(str)))
  })
  it('should return a string with normal chars #16', () => {
    const str = 'ᵀʰⁱˢ ⁱˢ ᵃ ʷᵉⁱʳᵈ ˢᵗʳⁱⁿᵍ'
    assert.ok(regexp.test(weirdToNormalChars(str)))
  })
  it('should return a string with normal chars #17', () => {
    const str = 'Ⓣⓗⓘⓢ ⓘⓢ ⓐ ⓦⓔⓘⓡⓓ ⓢⓣⓡⓘⓝⓖ'
    assert.ok(regexp.test(weirdToNormalChars(str)))
  })
  it('should return a string with normal chars #18', () => {
    const str = 'Շђเร เร ค ฬєเг๔ รՇгเภﻮ'
    assert.ok(regexp.test(weirdToNormalChars(str)))
  })
  it('should return a string with normal chars #19', () => {
    const str = 'Tԋιʂ ιʂ α ɯҽιɾԃ ʂƚɾιɳɠ'
    assert.ok(regexp.test(weirdToNormalChars(str)))
  })
  it('should return a string with normal chars #20', () => {
    const str = 'ȶɦɨֆ ɨֆ ǟ աɛɨʀɖ ֆȶʀɨռɢ'
    assert.ok(regexp.test(weirdToNormalChars(str)))
  })
  it('should return a string with normal chars #21', () => {
    const str = 'ᏖᏂᎥᏕ ᎥᏕ Ꮧ ᏇᏋᎥᏒᎴ ᏕᏖᏒᎥᏁᎶ'
    assert.ok(regexp.test(weirdToNormalChars(str)))
  })
  it('should return a string with normal chars #22', () => {
    const str = 'ɬɧıʂ ıʂ ą ῳɛıཞɖ ʂɬཞıŋɠ'
    assert.ok(regexp.test(weirdToNormalChars(str)))
  })
  it('should return a string with normal chars #23', () => {
    const str = 'thiŞ iŞ ค ຟēir໓ Ştriຖງ'
    assert.ok(regexp.test(weirdToNormalChars(str)))
  })
  it('should return a string with normal chars #24', () => {
    const str = 'ƬΉIƧ IƧ Λ ЩΣIЯD ƧƬЯIПG'
    assert.ok(regexp.test(weirdToNormalChars(str)))
  })
  it('should return a string with normal chars #25', () => {
    const str = 'тнιѕ ιѕ α ωєιя∂ ѕтяιηg'
    assert.ok(regexp.test(weirdToNormalChars(str)))
  })
  it('should return a string with normal chars #26', () => {
    const str = '†hï§ ï§ å wêïrÐ §†rïñg'
    assert.ok(regexp.test(weirdToNormalChars(str)))
  })
  it('should return a string with normal chars #37', () => {
    const str = '₮Ⱨł₴ ł₴ ₳ ₩ɆłⱤĐ ₴₮Ɽł₦₲'
    assert.ok(regexp.test(weirdToNormalChars(str)))
  })
  it('should return a string with normal chars #28', () => {
    const str = 'ㄒ卄丨丂 丨丂 卂 山乇丨尺ᗪ 丂ㄒ尺丨几Ꮆ'
    assert.ok(regexp.test(weirdToNormalChars(str)))
  })
  it('should return a string with normal chars #29', () => {
    const str = 'ｲんﾉ丂 ﾉ丂 ﾑ W乇ﾉ尺り 丂ｲ尺ﾉ刀ム'
    assert.ok(regexp.test(weirdToNormalChars(str)))
  })
  it('should return a string with normal chars #30', () => {
    const str = 'Ｔｈｉｓ　ｉｓ　ａ　ｗｅｉｒｄ　ｓｔｒｉｎｇ'
    assert.ok(regexp.test(weirdToNormalChars(str)))
  })
  it('should return a string with normal chars #31', () => {
    const str = 'Ͳհìʂ ìʂ ą աҽìɾժ ʂէɾìղց'
    assert.ok(regexp.test(weirdToNormalChars(str)))
  })
  it('should return a string with normal chars #32', () => {
    const str = 'TᕼIᔕ Iᔕ ᗩ ᗯEIᖇᗪ ᔕTᖇIᑎG'
    assert.ok(regexp.test(weirdToNormalChars(str)))
  })
  it('should return a string with normal chars #33', () => {
    const str = 'ᖶᕼᓰS ᓰS ᗩ ᘺᘿᓰᖇᕲ Sᖶᖇᓰᘉᘜ'
    assert.ok(regexp.test(weirdToNormalChars(str)))
  })
})
