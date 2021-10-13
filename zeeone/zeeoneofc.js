const petik = '```'
const help = (prefix, wita, wit, ucapannya, timuu, status, wa_version, mcc, mnc, os_version, device_manufacturer, device_model, alfa , alfa1, thisDay, ini_tanggal, totalchat, hit_today, ini_gcchat, latensiii, tekss)=> {
	return`┌❏ *අමුතු ඇටෙ වෙලාව*
${petik}│◈  වෙලාව ➜ ${timuu}
│
└❏ 
                          
┌❏ *TODAY*
│◈ දවස ➜ ${thisDay}
└❏ දිනෙ ➜ ${ini_tanggal}${petik}

┌❏ *DEVICE*
${petik}│◈ Whatsapp ➜ ${wa_version}
│◈ Merk HP ➜ ${device_manufacturer}
│◈ Versi HP ➜ ${device_model}
│◈ Versi OS ➜ ${os_version}
│◈ RAM ➜ ${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)}MB / ${Math.round(require('os').totalmem / 1024 / 1024)}MB
│◈ MCC ➜ ${mcc}
└❏ MNC ➜ ${mnc}${petik}

*》》──── ««•◦ ✪ ◦•»» ────《《*
       *🤖බොට්ගෙ විස්තරෙ*
*》》──── ««•◦ ✪ ◦•»» ────《《*

┌─❑
${petik}│◈  Owner ➜ ${ownername}
│◈ Mode ➜ ${status}
│◈ Prefix ➜ ${prefix}
│◈ Total Hit ➜ ${hit_today.length}
│◈ Personal Chat ➜ ${totalchat.length - ini_gcchat.lenght}
│◈ Total All Chat ➜ ${totalchat.length}
│◈ Group Chat ➜ ${ini_gcchat}
│◈ Browser ➜ Chrome
│◈ Server ➜ Baileys
│◈ Version ➜ 3.5.2${petik}
${petik}│◈ Speed ➜${petik} ${latensiii} 
${petik}└❏ ${tekss}${petik}

*》》──── ««•◦ ✪ ◦•»» ────《《*
           *මෙනු ලිස්ට් එක*
*》》──── ««•◦ ✪ ◦•»» ────《《*

┌❑
│
${petik}├◪ Allmenu 
├◪ Convertmenu
├◪ Intakemenu
├◪ Downloadmenu
├◪ Funmenu
├◪ Makermenu
├◪ Othermenu
├◪ Ownermenu
├◪ Storagemenu
├◪ Tagmenu
├◪ Upmenu
├◪ Set_sticker_cmd
├◪ Gacha_cecan
├◪ Telegram_sticker
├◪ Image_effect${petik}
└❒ 

*》》──── ««•◪ ✪ ◪•»» ────《《*
   *★彡[👑ᴋɪɴɢ ᴀᴍᴅᴀ👑]彡★*
*》》──── ««•◪ ✪ ◪•»» ────《《*

*ᴍᴀᴋᴇ ʙʏ➜*
*ᴘᴀꜱɪɴᴅᴜ ꜱᴀᴍᴀʀᴀ$ɪɴɢʜᴀ*

❒ _ ©2021 KingAmda_ ❒
`
}
const convert = (prefix) => {
	return`*》》──── ««•◪ ✪ ◪•»» ────《《*
   *★彡[CONVERT MENU]彡★*
*》》──── ««•◪ ✪ ◪•»» ────《《*

┌❑
${petik}├◪ ${prefix}toimg
├◪ ${prefix}tomp3
├◪ ${prefix}tomp4
├◪ ${prefix}slow
├◪ ${prefix}fast
├◪ ${prefix}reverse
└❒ ${prefix}tourl${petik}

`
}
const download = (prefix) => {
	return`*》》──── ««•◪ ✪ ◪•»» ────《《*
 *★彡[DOWNLOAD MENU]彡★*
*》》──── ««•◪ ✪ ◪•»» ────《《*
┌❑
${petik}├◪ ${prefix}ytsearch${petik}
${petik}├◪ ${prefix}song${petik}
${petik}├◪ ${prefix}play${petik} 
${petik}├◪ ${prefix}playmp4${petik}
${petik}├◪ ${prefix}video${petik} 
${petik}├◪ ${prefix}ytmp3${petik} 
${petik}├◪ ${prefix}ytmp4${petik} 
${petik}├◪ ${prefix}ig${petik} 
${petik}├◪ ${prefix}igphoto${petik} 
${petik}├◪ ${prefix}igvideo${petik} 
${petik}├◪ ${prefix}twitter${petik}
${petik}├◪ ${prefix}tiktok${petik} 
${petik}├◪ ${prefix}tiktoknowm${petik} 
${petik}├◪ ${prefix}tiktokaudio${petik} 
${petik}├◪ ${prefix}fb${petik} 
${petik}├◪ ${prefix}brainly${petik} 
${petik}├◪ ${prefix}image${petik} 
${petik}├◪ ${prefix}playstore${petik} 
${petik}└❒ 
`
}
const allmenu = (prefix, wita, wit, ucapannya, timuu, status, wa_version, mcc, mnc, os_version, device_manufacturer, device_model, alfa , alfa1, thisDay, ini_tanggal, totalchat, hit_today, ini_gcchat, latensiii, tekss)  => {
	return`*》》──── ««•◪ ✪ ◪•»» ────《《*
   *★彡[👑ᴋɪɴɢ ᴀᴍᴅᴀ👑]彡★*
*》》──── ««•◪ ✪ ◪•»» ────《《*
     
┌❏ *අමුතු ඇටෙ වෙලාව*
│
${petik}│◈  වෙලාව ➜ ${timuu}
└❏ 
                          
┌❏ *TODAY*
│◈ දවස ➜ ${thisDay}
└❏ දිනෙ ➜ ${ini_tanggal}${petik}

┌❏ *DEVICE*
${petik}│◈ Whatsapp ➜ ${wa_version}
│◈ Merk HP ➜ ${device_manufacturer}
│◈ Versi HP ➜ ${device_model}
│◈ Versi OS ➜ ${os_version}
│◈ RAM ➜ ${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)}MB / ${Math.round(require('os').totalmem / 1024 / 1024)}MB
│◈ MCC ➜ ${mcc}
└❏ MNC ➜ ${mnc}${petik}

*》》──── ««•◪ ✪ ◪•»» ────《《*
       *🤖බොට්ගෙ විස්තරෙ*
*》》──── ««•◪ ✪ ◪•»» ────《《*

┌─❑
${petik}│◈ Mode ➜ ${status}
│◈ Prefix ➜ ${prefix}
│◈ Total Hit ➜ ${hit_today.length}
│◈ Personal Chat ➜ ${totalchat.length - ini_gcchat.lenght}
│◈ Total All Chat ➜ ${totalchat.length}
│◈ Group Chat ➜ ${ini_gcchat}
│◈ Browser ➜ Chrome
│◈ Server ➜ Baileys
│◈ Version ➜ 3.5.2${petik}
${petik}│◈ Speed ➜${petik} ${latensiii} 
${petik}└❏ ${tekss}${petik}

*》》──── ««•◪ ✪ ◪•»» ────《《*
   *★彡[CONVERT MENU]彡★*
*》》──── ««•◪ ✪ ◪•»» ────《《*

┌─❑
${petik}│◪ ${prefix}toimg
│◪ ${prefix}tomp3
│◪ ${prefix}tomp4
│◪ ${prefix}slow
│◪ ${prefix}fast
│◪ ${prefix}reverse
│◪ ${prefix}tourl${petik}
└❒

*》》──── ««•◦ ✪ ◦•»» ────《《*
 *★彡[DOWNLOAD MENU]彡★*
*》》──── ««•◦ ✪ ◦•»» ────《《*

┌❑
${petik}├◪ ${prefix}ytsearch${petik}
${petik}├◪ ${prefix}song${petik}
${petik}├◪ ${prefix}play${petik} 
${petik}├◪ ${prefix}playmp4${petik}
${petik}├◪ ${prefix}video${petik} 
${petik}├◪ ${prefix}ytmp3${petik} 
${petik}├◪ ${prefix}ytmp4${petik} 
${petik}├◪ ${prefix}ig${petik} 
${petik}├◪ ${prefix}igphoto${petik} 
${petik}├◪ ${prefix}igvideo${petik} 
${petik}├◪ ${prefix}twitter${petik}
${petik}├◪ ${prefix}tiktok${petik} 
${petik}├◪ ${prefix}tiktoknowm${petik} 
${petik}├◪ ${prefix}tiktokaudio${petik} 
${petik}├◪ ${prefix}fb${petik} 
${petik}├◪ ${prefix}brainly${petik} 
${petik}├◪ ${prefix}image${petik} 
${petik}├◪ ${prefix}playstore${petik} 
${petik}└❒ 

*》》──── ««•◦ ✪ ◦•»» ────《《*
        *★彡[FUN MENU]彡★*
*》》──── ««•◦ ✪ ◦•»» ────《《*

┌❑
${petik}│◪ ${prefix}contak${petik} 94xxx|text
${petik}│◪ ${prefix}tictactoe${petik} @user
${petik}│◪ ${prefix}delttt${petik}
└❒

*》》──── ««•◦ ✪ ◦•»» ────《《*
     *★彡[MAKER MENU]彡★*
*》》──── ««•◦ ✪ ◦•»» ────《《*

┌❑
${petik}│◪ ${prefix}sticker${petik}
${petik}│◪ ${prefix}smeme${petik}
${petik}│◪ ${prefix}attp${petik}
${petik}│◪ ${prefix}ttp${petik}
${petik}│◪ ${prefix}ttp1${petik}
${petik}│◪ ${prefix}ttp2${petik}
${petik}│◪ ${prefix}ttp3${petik}
${petik}│◪ ${prefix}ttp4${petik}
${petik}│◪ ${prefix}ttlogo${petik} text
${petik}│◪ ${prefix}neon2${petik} text
${petik}│◪ ${prefix}wall${petik} text
${petik}│◪ ${prefix}wolf${petik} text
${petik}│◪ ${prefix}tfire${petik} text
${petik}│◪ ${prefix}ytgold${petik} text
${petik}│◪ ${prefix}ytsilver${petik} text
${petik}│◪ ${prefix}t3d${petik} text
${petik}│◪ ${prefix}marvel${petik} text|text
${petik}│◪ ${prefix}pornhub${petik} text|text
${petik}│◪ ${prefix}marvel${petik} text|text
${petik}│◪ ${prefix}leavest${petik} text
${petik}│◪ ${prefix}phcoment${petik} text|text
${petik}│◪ ${prefix}nulis${petik} text
${petik}│◪ ${prefix}nulis2${petik}
${petik}│◪ ${prefix}emoji${petik} 👼
${petik}│◪ ${prefix}loli${petik}
${petik}│◪ ${prefix}blackpink${petik}text
${petik}│◪ ${prefix}crispchrome${petik}text
${petik}│◪ ${prefix}dropwater${petik}text
${petik}│◪ ${prefix}hbd${petik}text
${petik}│◪ ${prefix}readmore${petik}text|text
${petik}│◪ ${prefix}qr${petik}text 
${petik}│◪ ${prefix}gaming${petik}text
${petik}│◪ ${prefix}shorturl${petik}text
${petik}│◪ ${prefix}shorturl2${petik}text
└❒

*》》──── ««•◦ ✪ ◦•»» ────《《*
     *★彡[IMAGE EFFECT]彡★*
*》》──── ««•◦ ✪ ◦•»» ────《《*

┌❑
${petik}│◪ ${prefix}trigger
│◪ ${prefix}gay
│◪ ${prefix}glass
│◪ ${prefix}passed
│◪ ${prefix}jail
│◪ ${prefix}comrade
│◪ ${prefix}hijau
│◪ ${prefix}biru
│◪ ${prefix}greyscale
│◪ ${prefix}invert
│◪ ${prefix}invert_greyscale
│◪ ${prefix}red
│◪ ${prefix}blurple
│◪ ${prefix}blurple2
│◪ ${prefix}wasted
│◪ ${prefix}pelangi
│◪ ${prefix}sepia
│◪ ${prefix}wanted
│◪ ${prefix}utatoo
│◪ ${prefix}unsharpen
│◪ ${prefix}thanos
│◪ ${prefix}sniper
│◪ ${prefix}sharpen
│◪ ${prefix}scary
│◪ ${prefix}rip
│◪ ${prefix}rejected
│◪ ${prefix}redple
│◪ ${prefix}posterize
│◪ ${prefix}ps4
│◪ ${prefix}pixelize
│◪ ${prefix}missionpassed
│◪ ${prefix}moustache
│◪ ${prefix}lookwhatkarenhave
│◪ ${prefix}instagram
│◪ ${prefix}glitch
│◪ ${prefix}frame
│◪ ${prefix}fire
│◪ ${prefix}distort
│◪ ${prefix}dictator
│◪ ${prefix}deepfry
│◪ ${prefix}ddungeon
│◪ ${prefix}circle
│◪ ${prefix}challenger
│◪ ${prefix}burn
│◪ ${prefix}brazzers
│◪ ${prefix}beautiful
│◪ ${prefix}${petik}
└❒

*》》──── ««•◦ ✪ ◦•»» ────《《*
    *★彡[GROUP MENU]彡★*
*》》──── ««•◦ ✪ ◦•»» ────《《*

┌❑
${petik}│◪ ${prefix}ping${petik}
${petik}│◪ ${prefix}antilink${petik} _on / off_
${petik}│◪ ${prefix}getpp${petik} _@user_
${petik}│◪ ${prefix}getname${petik} _reply_
${petik}│◪ ${prefix}getbio${petik} _@user_
${petik}│◪ ${prefix}tagall
│◪ ${prefix}listonline
${petik}│◪ ${prefix}searchmsg${petik} _query|total_
${petik}│◪ ${prefix}sider${petik} _reply pesan bot_
${petik}│◪ ${prefix}del${petik} _reply pesan bot_
${petik}│◪ ${prefix}q${petik} _reply pesan_
${petik}│◪ ${prefix}afk${petik} _reason_
${petik}│◪ ${prefix}getsider${petik} _reply pesan bot_
${petik}│◪ ${prefix}promoteall
│◪ ${prefix}setname
│◪ ${prefix}setdesc
${petik}│◪ ${prefix}demoteall
│◪ ${prefix}admin
│◪ ${prefix}listgroup
│◪ ${prefix}hentai
│◪ ${prefix}trapnime
│◪ ${prefix}blowjob
│◪ ${prefix}awoo
│◪ ${prefix}megumin${petik}
└❒

*》》──── ««•◦ ✪ ◦•»» ────《《*
    *★彡[OWNER MENU]彡★*
*》》──── ««•◦ ✪ ◦•»» ────《《*

┌❑
${petik}│◪ ${prefix}off
│◪ ${prefix}on
│◪ ${prefix}buggc
│◪ ${prefix}bc
│◪ ${prefix}bcimage
│◪ ${prefix}bcgif
│◪ ${prefix}bcvideo
│◪ ${prefix}bcaudio
│◪ ${prefix}bcsticker
│◪ ${prefix}ban
│◪ ${prefix}unban
│◪ ${prefix}block
│◪ ${prefix}unblock
│◪ ${prefix}status
│◪ ${prefix}clearall
│◪ ${prefix}self
│◪ ${prefix}public
│◪ ${prefix}join
│◪ ${prefix}leave
│◪ ${prefix}clearall
│◪ ${prefix}readall
│◪ ${prefix}unreadall
│◪ ${prefix}archive
│◪ ${prefix}unarchive
│◪ ${prefix}pin
│◪ ${prefix}delthischat
│◪ ${prefix}unpin${petik}
${petik}│◪ ${prefix}autoread${petik}  on / off
${petik}│◪ ${prefix}antibug${petik} on / off
${petik}│◪ ${prefix}antidelete${petik} on / off
${petik}│◪ ${prefix}anticall${petik} on / off
${petik}│◪ ${prefix}autoketik${petik} on / off
${petik}│◪ ${prefix}autovn${petik} on / off
${petik}│◪ ${prefix}setthumb
│◪ ${prefix}settarget
│◪ ${prefix}setfakeimg
│◪ ${prefix}setreply${petik}
${petik}│◪ ${prefix}term${petik} _code_
${petik}│◪ x or >${petik} _code_
${petik}│◪ $ ${petik} _termux code_
${petik}│◪ => ${petik} _eval async_
│
├❑「 *UP STATUS* 」
${petik}│◪ ${prefix}upswteks
│◪ ${prefix}upswimage
│◪ ${prefix}upswvideo${petik}
└❒

*》》──── ««•◦ ✪ ◦•»» ────《《*
     *★彡[SET STC CMD]彡★*
*》》──── ««•◦ ✪ ◦•»» ────《《*

┌❑
${petik}│◪ ${prefix}set_stc_menu${petik} _<query>_
${petik}│◪ ${prefix}set_stc_ping${petik} _<query>_
${petik}│◪ ${prefix}set_stc_gclose${petik} _<query>_
${petik}│◪ ${prefix}set_stc_gopen${petik} _<query>_
${petik}│◪ ${prefix}set_stc_itos${petik} _<query>_
${petik}│◪ ${prefix}set_stc_toimg${petik} _<query>_
${petik}│◪ ${prefix}set_stc_self${petik} _<query>_
${petik}│◪ ${prefix}set_stc_public${petik} _<query>_
└❒

*》》──── ««•◦ ✪ ◦•»» ────《《*
   *★彡[STORAGE  MENU]彡★*
*》》──── ««•◦ ✪ ◦•»» ────《《*

┌❑
${petik}│◪ ${prefix}addstik 
│◪ ${prefix}addimg 
│◪ ${prefix}addvid 
│◪ ${prefix}addaudio   
│◪ ${prefix}liststick
│◪ ${prefix}listimg
│◪ ${prefix}listvid
│◪ ${prefix}listaudio
│◪ ${prefix}addrespon
│◪ ${prefix}delrespon
│◪ ${prefix}listrespon${petik}
└❒

*》》──── ««•◦ ✪ ◦•»» ────《《*
       *★彡[TAG  MENU]彡★*
*》》──── ««•◦ ✪ ◦•»» ────《《*

┌❑
${petik}│◪ ${prefix}hidetag
│◪ ${prefix}contag
│◪ ${prefix}sticktag
│◪ ${prefix}totag${petik}
└❒

*》》──── ««•◦ ✪ ◦•»» ────《《*
    *★彡[STICKER MENU]彡★*
*》》──── ««•◦ ✪ ◦•»» ────《《*

┌❑
${petik}│◪ ${prefix}awoawo
│◪ ${prefix}benedict
│◪ ${prefix}dbfly
│◪ ${prefix}dino_kuning
│◪ ${prefix}doge
│◪ ${prefix}gojosatoru
│◪ ${prefix}hope_boy
│◪ ${prefix}manusia_lidi
│◪ ${prefix}meow
│◪ ${prefix}nicholas
│◪ ${prefix}patrick
│◪ ${prefix}sponsbob
│◪ ${prefix}kawan_sponsbob
│◪ ${prefix}tyni${petik}
└❒

*★彡[ᴘᴀꜱɪɴᴅᴜ ꜱᴀᴍᴀʀᴀ$ɪɴɢʜᴀ]彡★*
`
}

const fun = (prefix) => {
	return`*》》──── ««•◦ ✪ ◦•»» ────《《*
         *★彡[FUN MENU]彡★*
*》》──── ««•◦ ✪ ◦•»» ────《《*

┌❑
${petik}│◪ ${prefix}contak${petik} 94xxx|text
${petik}│◪ ${prefix}tictactoe${petik} @user
${petik}│◪ ${prefix}delttt${petik}
└❒
`
}

const maker = (prefix) => {
	return`*》》──── ««•◦ ✪ ◦•»» ────《《*
     *★彡[MAKER MENU]彡★*
*》》──── ««•◦ ✪ ◦•»» ────《《*

┌❑
${petik}│◪ ${prefix}sticker${petik}
${petik}│◪ ${prefix}smeme${petik}
${petik}│◪ ${prefix}attp${petik}
${petik}│◪ ${prefix}ttp${petik}
${petik}│◪ ${prefix}ttp1${petik}
${petik}│◪ ${prefix}ttp2${petik}
${petik}│◪ ${prefix}ttp3${petik}
${petik}│◪ ${prefix}ttp4${petik}
${petik}│◪ ${prefix}ttlogo${petik} text
${petik}│◪ ${prefix}neon2${petik} text
${petik}│◪ ${prefix}wall${petik} text
${petik}│◪ ${prefix}wolf${petik} text
${petik}│◪ ${prefix}tfire${petik} text
${petik}│◪ ${prefix}ytgold${petik} text
${petik}│◪ ${prefix}ytsilver${petik} text
${petik}│◪ ${prefix}t3d${petik} text
${petik}│◪ ${prefix}marvel${petik} text|text
${petik}│◪ ${prefix}pornhub${petik} text|text
${petik}│◪ ${prefix}marvel${petik} text|text
${petik}│◪ ${prefix}leavest${petik} text
${petik}│◪ ${prefix}phcoment${petik} text|text
${petik}│◪ ${prefix}nulis${petik} text
${petik}│◪ ${prefix}nulis2${petik}
${petik}│◪ ${prefix}emoji${petik} 👼
${petik}│◪ ${prefix}loli${petik}
${petik}│◪ ${prefix}blackpink${petik}text
${petik}│◪ ${prefix}crispchrome${petik}text
${petik}│◪ ${prefix}dropwater${petik}text
${petik}│◪ ${prefix}hbd${petik}text
${petik}│◪ ${prefix}readmore${petik}text|text
${petik}│◪ ${prefix}qr${petik}text 
${petik}│◪ ${prefix}gaming${petik}text
${petik}│◪ ${prefix}shorturl${petik}text
${petik}│◪ ${prefix}shorturl2${petik}text
└❒
`
}

const other = (prefix) => {
	return`*》》──── ««•◦ ✪ ◦•»» ────《《*
    *★彡[GROUP MENU]彡★*
*》》──── ««•◦ ✪ ◦•»» ────《《*

┌❑
${petik}│◪ ${prefix}ping${petik}
${petik}│◪ ${prefix}antilink${petik} _on / off_
${petik}│◪ ${prefix}getpp${petik} _@user_
${petik}│◪ ${prefix}getname${petik} _reply_
${petik}│◪ ${prefix}getbio${petik} _@user_
${petik}│◪ ${prefix}tagall
│◪ ${prefix}listonline
${petik}│◪ ${prefix}searchmsg${petik} _query|total_
${petik}│◪ ${prefix}sider${petik} _reply pesan bot_
${petik}│◪ ${prefix}del${petik} _reply pesan bot_
${petik}│◪ ${prefix}q${petik} _reply pesan_
${petik}│◪ ${prefix}afk${petik} _reason_
${petik}│◪ ${prefix}getsider${petik} _reply pesan bot_
${petik}│◪ ${prefix}promoteall
│◪ ${prefix}setname
│◪ ${prefix}setdesc
${petik}│◪ ${prefix}demoteall
│◪ ${prefix}admin
│◪ ${prefix}listgroup
│◪ ${prefix}hentai
│◪ ${prefix}trapnime
│◪ ${prefix}blowjob
│◪ ${prefix}awoo
│◪ ${prefix}megumin${petik}
└❒
`
}

const ownermenu = (prefix) => {
	return`*》》──── ««•◦ ✪ ◦•»» ────《《*
    *★彡[OWNER MENU]彡★*
*》》──── ««•◦ ✪ ◦•»» ────《《*

┌❑
${petik}│◪ ${prefix}off
│◪ ${prefix}on
│◪ ${prefix}buggc
│◪ ${prefix}bc
│◪ ${prefix}bcimage
│◪ ${prefix}bcgif
│◪ ${prefix}bcvideo
│◪ ${prefix}bcaudio
│◪ ${prefix}bcsticker
│◪ ${prefix}ban
│◪ ${prefix}unban
│◪ ${prefix}block
│◪ ${prefix}unblock
│◪ ${prefix}status
│◪ ${prefix}clearall
│◪ ${prefix}self
│◪ ${prefix}public
│◪ ${prefix}join
│◪ ${prefix}leave
│◪ ${prefix}clearall
│◪ ${prefix}readall
│◪ ${prefix}unreadall
│◪ ${prefix}archive
│◪ ${prefix}unarchive
│◪ ${prefix}pin
│◪ ${prefix}delthischat
│◪ ${prefix}unpin${petik}
${petik}│◪ ${prefix}autoread${petik}  on / off
${petik}│◪ ${prefix}antibug${petik} on / off
${petik}│◪ ${prefix}antidelete${petik} on / off
${petik}│◪ ${prefix}anticall${petik} on / off
${petik}│◪ ${prefix}autoketik${petik} on / off
${petik}│◪ ${prefix}autovn${petik} on / off
${petik}│◪ ${prefix}setthumb
│◪ ${prefix}settarget
│◪ ${prefix}setfakeimg
│◪ ${prefix}setreply${petik}
${petik}│◪ ${prefix}term${petik} _code_
${petik}│◪ x or >${petik} _code_
${petik}│◪ $ ${petik} _termux code_
${petik}│◪ => ${petik} _eval async_
│
├❑「 *UP STATUS* 」
${petik}│◪ ${prefix}upswteks
│◪ ${prefix}upswimage
│◪ ${prefix}upswvideo${petik}
└❒
`
}

const setStcCmd = (prefix) => {
	return`*》》──── ««•◦ ✪ ◦•»» ────《《*
	*★彡[SET STC CMD]彡★*
*》》──── ««•◦ ✪ ◦•»» ────《《*

┌❑
${petik}│◪ ${prefix}set_stc_menu${petik} _<query>_
${petik}│◪ ${prefix}set_stc_ping${petik} _<query>_
${petik}│◪ ${prefix}set_stc_gclose${petik} _<query>_
${petik}│◪ ${prefix}set_stc_gopen${petik} _<query>_
${petik}│◪ ${prefix}set_stc_itos${petik} _<query>_
${petik}│◪ ${prefix}set_stc_toimg${petik} _<query>_
${petik}│◪ ${prefix}set_stc_self${petik} _<query>_
${petik}│◪ ${prefix}set_stc_public${petik} _<query>_
└❒

කමාන්ඩ් එක Use කරන විදිහ ➜
> ${prefix}set_stc_menu _fileLenght sticker_
`
}

const storage = (prefix) => {
	return`*》》──── ««•◦ ✪ ◦•»» ────《《*
	*★彡[STORAGE  MENU]彡★*
 *》》──── ««•◦ ✪ ◦•»» ────《《*
 
 ┌❑
 ${petik}│◪ ${prefix}addstik 
 │◪ ${prefix}addimg 
 │◪ ${prefix}addvid 
 │◪ ${prefix}addaudio   
 │◪ ${prefix}liststick
 │◪ ${prefix}listimg
 │◪ ${prefix}listvid
 │◪ ${prefix}listaudio
 │◪ ${prefix}addrespon
 │◪ ${prefix}delrespon
 │◪ ${prefix}listrespon${petik}
 └❒
`
}
const tag = (prefix) => {
	return`*》》──── ««•◦ ✪ ◦•»» ────《《*
       *★彡[TAG  MENU]彡★*
*》》──── ««•◦ ✪ ◦•»» ────《《*

┌❑
${petik}│◪ ${prefix}hidetag
│◪ ${prefix}contag
│◪ ${prefix}sticktag
│◪ ${prefix}totag${petik}
└❒
`
}

const upmenu = (prefix) => {
	return`*》》──── ««•◦ ✪ ◦•»» ────《《*
       *★彡[UP  STATUS]彡★*
*》》──── ««•◦ ✪ ◦•»» ────《《*
┌❑
${petik}├◪ ${prefix}upswteks
├◪ ${prefix}upswimage
├◪ ${prefix}upswvideo${petik}
└❒`
}
const telestiker = (prefix) => {
	return`*》》──── ««•◦ ✪ ◦•»» ────《《*
    *★彡[STICKER MENU]彡★*
*》》──── ««•◦ ✪ ◦•»» ────《《*

┌❑
${petik}│◪ ${prefix}awoawo
│◪ ${prefix}benedict
│◪ ${prefix}dbfly
│◪ ${prefix}dino_kuning
│◪ ${prefix}doge
│◪ ${prefix}gojosatoru
│◪ ${prefix}hope_boy
│◪ ${prefix}manusia_lidi
│◪ ${prefix}meow
│◪ ${prefix}nicholas
│◪ ${prefix}patrick
│◪ ${prefix}sponsbob
│◪ ${prefix}kawan_sponsbob
│◪ ${prefix}tyni${petik}
└❒
`
}
const image_effect_menu = (prefix) => {
	return`*》》──── ««•◦ ✪ ◦•»» ────《《*
	*★彡[IMAGE EFFECT]彡★*
*》》──── ««•◦ ✪ ◦•»» ────《《*

┌❑
${petik}│◪ ${prefix}trigger
│◪ ${prefix}gay
│◪ ${prefix}glass
│◪ ${prefix}passed
│◪ ${prefix}jail
│◪ ${prefix}comrade
│◪ ${prefix}hijau
│◪ ${prefix}biru
│◪ ${prefix}greyscale
│◪ ${prefix}invert
│◪ ${prefix}invert_greyscale
│◪ ${prefix}red
│◪ ${prefix}blurple
│◪ ${prefix}blurple2
│◪ ${prefix}wasted
│◪ ${prefix}pelangi
│◪ ${prefix}sepia
│◪ ${prefix}wanted
│◪ ${prefix}utatoo
│◪ ${prefix}unsharpen
│◪ ${prefix}thanos
│◪ ${prefix}sniper
│◪ ${prefix}sharpen
│◪ ${prefix}scary
│◪ ${prefix}rip
│◪ ${prefix}rejected
│◪ ${prefix}redple
│◪ ${prefix}posterize
│◪ ${prefix}ps4
│◪ ${prefix}pixelize
│◪ ${prefix}missionpassed
│◪ ${prefix}moustache
│◪ ${prefix}lookwhatkarenhave
│◪ ${prefix}instagram
│◪ ${prefix}glitch
│◪ ${prefix}frame
│◪ ${prefix}fire
│◪ ${prefix}distort
│◪ ${prefix}dictator
│◪ ${prefix}deepfry
│◪ ${prefix}ddungeon
│◪ ${prefix}circle
│◪ ${prefix}challenger
│◪ ${prefix}burn
│◪ ${prefix}brazzers
│◪ ${prefix}beautiful
│◪ ${prefix}${petik}
└❒
`
}

exports.helpmenu = help
exports.convertmenu = convert
exports.funmenu = fun
exports.downloadmenu = download
exports.makermenu = maker
exports.othermenu = other
exports.ownermenu = ownermenu
exports.storagemenu = storage
exports.tagmenu = tag
exports.telestiker = telestiker
exports.set_stc_cmd =  setStcCmd
exports.upmenu = upmenu
exports.allmenu = allmenu
exports.image_effect = image_effect_menu