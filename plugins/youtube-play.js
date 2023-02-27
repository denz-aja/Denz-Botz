import { youtubedl, youtubedlv2 } from '@bochilteam/scraper'
import yts from 'yt-search'
var handler = async (m, { conn, command, text, usedPrefix }) => {
  if (!text) throw `Masukkan judul!`
  await m.reply(wait)
  let search = await yts(text)
  let vid = search.videos[Math.floor(Math.random() * search.videos.length)]
  if (!search) throw 'Video tidak ditemukan, silahkan masukan judul lain!!'
  let { title, thumbnail, timestamp, views, ago, url } = vid

  let captvid = `
╳ ──〔 *YOUTUBE* 〕── ╳

◈ Judul: ${title}
◈ Durasi: ${timestamp}
◈ Views: ${views}
◈ Upload: ${ago}
◈ Link: ${url}`
  conn.sendButton(m.chat, `
╳ ──〔 *YOUTUBE* 〕── ╳

◈ Judul: ${title}
◈ Durasi: ${timestamp}
◈ Views: ${views}
◈ Upload: ${ago}
◈ Link: ${url}`, author.trim(), await( await conn.getFile(thumbnail)).data, ['Video', `${usedPrefix}ytmp4 ${url} 360`], false, { quoted: m, 'document': { 'url':'https://github.com/denz-aja' },
'mimetype': global.dpdf,
'fileName': `Simple Bot OpenAi`,
'fileLength': 666666666666666,
'pageCount': 666,contextInfo: { externalAdReply: { showAdAttribution: true,
mediaType:  2,
mediaUrl: `${url}`,
title: `Audio sedang dikirim...`,
body: wm,
sourceUrl: 'http://wa.me/12522518391', thumbnail: await ( await conn.getFile(thumbnail)).data
  }
 } 
})
  
  //let buttons = [{ buttonText: { displayText: '📽VIDEO' }, buttonId: `${usedPrefix}ytv ${url} 360` }]
 //let msg = await conn.sendMessage(m.chat, { image: { url: thumbnail }, caption: captvid, footer: author, buttons }, { quoted: m })

  const yt = await youtubedlv2(url).catch(async _ => await youtubedl(url))
const link = await yt.audio['128kbps'].download()
  let doc = { 
  audio: 
  { 
    url: link 
}, 
mimetype: 'audio/mp4', fileName: `${title}`, contextInfo: { externalAdReply: { showAdAttribution: true,
mediaType:  2,
mediaUrl: url,
title: title,
body: wm,
sourceUrl: url,
thumbnail: await(await conn.getFile(thumbnail)).data                                                                     
                                                                                                                 }
                       }
  }

  return conn.sendMessage(m.chat, doc, { quoted: m })
}
handler.help = ['play <pencarian>']
handler.tags = ['internet']
handler.command = /^play$/i
export default handler
