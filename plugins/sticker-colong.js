//
let { MessageType } = (await import('@adiwajshing/baileys')).default
import { sticker } from '../lib/sticker.js'
let handler  = async (m, { conn, args }) => {
  let stiker = false
try {
    let q = m.quoted ? m.quoted : m
    let mime = (q.msg || q).mimetype || ''
    if (/image|video/.test(mime)) {
      let img = await q.download()
      if (!img) throw 'Balas stiker!!'
      stiker = await sticker(img, false, '๐', '๐ญ โข แด ส แด ษช ษด แด สแดแด :\nโคท ๐๐๐ ๐ฑ๐พ๐ ๐๐๐๐๐๐๐๐')
    } else if (args[0]) stiker = await sticker(false, args[0], '๐', '๐ฎ โข Discord :\nโคท https://discord.com')
  } finally {
    if (stiker) conn.sendFile(m.chat, stiker, 'sticker.webp', '', m)
    else throw 'Conversion failed'
  }
}
handler.help = ['colong']
handler.tags = ['sticker']
handler.command = /^colong$/i
handler.owner = true

export default handler
