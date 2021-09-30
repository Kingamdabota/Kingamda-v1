const {
   WAConnection: _WAConnection,
   MessageType,
   Presence,
   MessageOptions,
   Mimetype,
   WALocationMessage,
   WA_MESSAGE_STUB_TYPES,
   ReconnectMode,
   WAMessageProto,
   relayWAMessage,
   ProxyAgent,
   GroupSettingChange,
   waChatKey,
   mentionedJid,
   processTime,
   processTicksAndRejections,
   ECONNABORTED,
   apikey,
   WA_DEAFULT_EPHEMERAL,
   DataView,
   TypedArray,
   device,
   Browser
} = require('@adiwajshing/baileys')
const simple = require("./lib/simple.js");
const fs = require('fs')
const WAConnection = simple.WAConnection(_WAConnection);
const moment = require('moment-timezone')
const { wait,simih,getBuffer, h2k, generateMessageID, getGroupAdmins, getRandom, start, info, success, banner, close } = require('./lib/functions')
const { color } = require('./lib/color')
const gcdetect = JSON.parse(fs.readFileSync('./src/gcdetect.json'))
const welkom = JSON.parse(fs.readFileSync('./src/welkom.json'))
const antilinkk = JSON.parse(fs.readFileSync('./src/antilink.json'))
const setting = JSON.parse(fs.readFileSync('./settings.json'))
const { spawn, exec, execSync } = require("child_process")
const clc = require('chalk')
const cfonts = require('cfonts')
const axios = require("axios")

require('./index.js')
nocache('./index.js', module => console.log(`${module} is now updated!`))

const starts = async (alpha = new WAConnection()) => {
	alpha.browserDecription= ["Linux","Firefox","3.0.0"]
    var _0xde5d=["\x6C\x65\x76\x65\x6C","\x6C\x6F\x67\x67\x65\x72","\x77\x61\x72\x6E","\x76\x65\x72\x73\x69\x6F\x6E","\x62\x72\x6F\x77\x73\x65\x72\x44\x65\x73\x63\x72\x69\x70\x74\x69\x6F\x6E","\x68\x65\x68\x65\x20\x62\x6F\x79","\x43\x68\x72\x6F\x6D\x65","\x33\x2E\x30","\x73\x74\x72\x69\x6E\x67","\x6C\x6F\x67","\x23\x23\x23\x20\x41\x55\x54\x48\x4F\x52\x20\x42\x59\x20\x5A\x45\x45\x4F\x4E\x45\x20\x4F\x46\x43\x20\x23\x23\x23","\x63\x6F\x6E\x73\x6F\x6C\x65","\x63\x65\x6E\x74\x65\x72","\x79\x65\x6C\x6C\x6F\x77","\x63\x79\x61\x6E","\x73\x61\x79","\x71\x72","\x5B","\x77\x68\x69\x74\x65","\x21","\x72\x65\x64","\x5D","\x20\x4E\x6F\x77\x20\x73\x63\x61\x6E\x20\x74\x68\x65\x20\x71\x72","\x6F\x6E","\x2E\x2F\x73\x65\x73\x73\x69\x6F\x6E\x2E\x6A\x73\x6F\x6E","\x65\x78\x69\x73\x74\x73\x53\x79\x6E\x63","\x6C\x6F\x61\x64\x41\x75\x74\x68\x49\x6E\x66\x6F","\x63\x6F\x6E\x6E\x65\x63\x74\x69\x6E\x67","\x32","\x2E","\x6F\x70\x65\x6E","\x43\x6F\x6E\x6E\x65\x63\x74\x65\x64","\uD83D\uDED2\x20\x53\x55\x42\x53\x43\x52\x49\x42\x45\x20\x59\x4F\x55\x54\x55\x42\x45\x20\x5A\x45\x45\x4F\x4E\x45\x20\x4F\x46\x43","\x61\x71\x75\x61","\x63\x6F\x6E\x6E\x65\x63\x74","\x62\x61\x73\x65\x36\x34\x45\x6E\x63\x6F\x64\x65\x64\x41\x75\x74\x68\x49\x6E\x66\x6F","\x09","\x73\x74\x72\x69\x6E\x67\x69\x66\x79","\x77\x72\x69\x74\x65\x46\x69\x6C\x65\x53\x79\x6E\x63","\x2D\x2D\x2D\x2D\x2D\x2D\x2D\x2D\x2D\x2D\x2D\x2D\x2D\x2D\x2D\x2D","\x6D\x61\x67\x65\x6E\x74\x61","\x20\x43\x4F\x4E\x4E\x45\x43\x54\x45\x44","\x67\x72\x65\x65\x6E","\x0A","\x2B","\x57\x41\x20\x56\x65\x72\x73\x69\x6F\x6E","\x3A","\x77\x61\x5F\x76\x65\x72\x73\x69\x6F\x6E","\x70\x68\x6F\x6E\x65","\x75\x73\x65\x72","\x4F\x53\x20\x56\x65\x72\x73\x69\x6F\x6E","\x6F\x73\x5F\x76\x65\x72\x73\x69\x6F\x6E","\x44\x65\x76\x69\x63\x65","\x64\x65\x76\x69\x63\x65\x5F\x6D\x61\x6E\x75\x66\x61\x63\x74\x75\x72\x65\x72","\x4D\x6F\x64\x65\x6C","\x64\x65\x76\x69\x63\x65\x5F\x6D\x6F\x64\x65\x6C","\x4D\x43\x43","\x6D\x63\x63","\x4D\x4E\x43","\x6D\x6E\x63","\x4F\x53\x20\x42\x75\x69\x6C\x64\x20\x4E\x75\x6D\x62\x65\x72","\x6F\x73\x5F\x62\x75\x69\x6C\x64\x5F\x6E\x75\x6D\x62\x65\x72","\x20\x41\x4C\x50\x48\x41\x42\x4F\x54\x20","\x53\x75\x62\x73\x63\x72\x69\x62\x65","\x26","\x53\x75\x70\x70\x6F\x72\x74","\x43\x68\x61\x6E\x6E\x65\x6C\x20\x53\x61\x79\x61","\x5A\x45\x45\x4F\x4E\x45\x20\x4F\x46\x43","\x54\x68\x61\x6E\x6B\x73\x20\x42\x75\x61\x74\x20\x4B\x61\x6C\x69\x61\x6E\x20\x59\x61\x6E\x67\x20\x53\x75\x64\x61\x68\x20\x53\x75\x62\x73\x63\x72\x69\x62\x65\x20\x5E\x5F\x5E","\x20\x20\x20\x20\x20\xA9\x32\x30\x32\x31\x20\x41\x6C\x70\x68\x61\x62\x6F\x74\x2E\x20\x41\x6C\x6C\x20\x52\x69\x67\x68\x74\x20\x52\x65\x73\x65\x72\x76\x65\x64\x2E\x20","\x63\x68\x61\x74\x2D\x75\x70\x64\x61\x74\x65","\x2E\x2F\x69\x6E\x64\x65\x78\x2E\x6A\x73","\x43\x42\x3A\x42\x6C\x6F\x63\x6B\x6C\x69\x73\x74","\x6C\x65\x6E\x67\x74\x68","\x62\x6C\x6F\x63\x6B\x6C\x69\x73\x74","\x63\x2E\x75\x73","\x73\x2E\x77\x68\x61\x74\x73\x61\x70\x70\x2E\x6E\x65\x74","\x72\x65\x70\x6C\x61\x63\x65","\x70\x75\x73\x68"];alpha[_0xde5d[1]][_0xde5d[0]]= _0xde5d[2];alpha[_0xde5d[3]]= [2,2123,8];alpha[_0xde5d[4]]= [_0xde5d[5],_0xde5d[6],_0xde5d[7]];console[_0xde5d[9]](banner[_0xde5d[8]]);cfonts[_0xde5d[15]](`${_0xde5d[10]}`,{font:_0xde5d[11],align:_0xde5d[12],gradient:[_0xde5d[13],_0xde5d[14]]});alpha[_0xde5d[23]](_0xde5d[16],()=>{console[_0xde5d[9]](color(_0xde5d[17],_0xde5d[18]),color(_0xde5d[19],_0xde5d[20]),color(_0xde5d[21],_0xde5d[18]),color(_0xde5d[22]))});fs[_0xde5d[25]](_0xde5d[24])&& alpha[_0xde5d[26]](_0xde5d[24]);alpha[_0xde5d[23]](_0xde5d[27],()=>{start(_0xde5d[28],_0xde5d[29])});alpha[_0xde5d[23]](_0xde5d[30],()=>{success(_0xde5d[28],_0xde5d[31]);setTimeout(()=>{console[_0xde5d[9]](color(`${_0xde5d[32]}`,_0xde5d[33]))},1000)}); await alpha[_0xde5d[34]]({timeoutMs:30* 3000});fs[_0xde5d[38]](_0xde5d[24],JSON[_0xde5d[37]](alpha[_0xde5d[35]](),null,_0xde5d[36]));console[_0xde5d[9]](color(_0xde5d[21],_0xde5d[18]),color(_0xde5d[39],_0xde5d[40]),color(_0xde5d[41],_0xde5d[42]),color(_0xde5d[39],_0xde5d[40]),color(_0xde5d[17],_0xde5d[18]));console[_0xde5d[9]](_0xde5d[43]);console[_0xde5d[9]](color(_0xde5d[17],_0xde5d[18]),color(_0xde5d[44],_0xde5d[20]),color(_0xde5d[21],_0xde5d[18]),color(_0xde5d[45],_0xde5d[13]),color(_0xde5d[46],_0xde5d[33]),color(alpha[_0xde5d[49]][_0xde5d[48]][_0xde5d[47]],_0xde5d[18]));console[_0xde5d[9]](color(_0xde5d[17],_0xde5d[18]),color(_0xde5d[44],_0xde5d[20]),color(_0xde5d[21],_0xde5d[18]),color(_0xde5d[50],_0xde5d[13]),color(_0xde5d[46],_0xde5d[33]),color(alpha[_0xde5d[49]][_0xde5d[48]][_0xde5d[51]],_0xde5d[18]));console[_0xde5d[9]](color(_0xde5d[17],_0xde5d[18]),color(_0xde5d[44],_0xde5d[20]),color(_0xde5d[21],_0xde5d[18]),color(_0xde5d[52],_0xde5d[13]),color(_0xde5d[46],_0xde5d[33]),color(alpha[_0xde5d[49]][_0xde5d[48]][_0xde5d[53]],_0xde5d[18]));console[_0xde5d[9]](color(_0xde5d[17],_0xde5d[18]),color(_0xde5d[44],_0xde5d[20]),color(_0xde5d[21],_0xde5d[18]),color(_0xde5d[54],_0xde5d[13]),color(_0xde5d[46],_0xde5d[33]),color(alpha[_0xde5d[49]][_0xde5d[48]][_0xde5d[55]],_0xde5d[18]));console[_0xde5d[9]](color(_0xde5d[17],_0xde5d[18]),color(_0xde5d[44],_0xde5d[20]),color(_0xde5d[21],_0xde5d[18]),color(_0xde5d[56],_0xde5d[13]),color(_0xde5d[46],_0xde5d[33]),color(alpha[_0xde5d[49]][_0xde5d[48]][_0xde5d[57]],_0xde5d[18]));console[_0xde5d[9]](color(_0xde5d[17],_0xde5d[18]),color(_0xde5d[44],_0xde5d[20]),color(_0xde5d[21],_0xde5d[18]),color(_0xde5d[58],_0xde5d[13]),color(_0xde5d[46],_0xde5d[33]),color(alpha[_0xde5d[49]][_0xde5d[48]][_0xde5d[59]],_0xde5d[18]));console[_0xde5d[9]](color(_0xde5d[17],_0xde5d[18]),color(_0xde5d[44],_0xde5d[20]),color(_0xde5d[21],_0xde5d[18]),color(_0xde5d[60],_0xde5d[13]),color(_0xde5d[46],_0xde5d[33]),color(alpha[_0xde5d[49]][_0xde5d[48]][_0xde5d[61]],_0xde5d[18]));console[_0xde5d[9]](_0xde5d[43]);console[_0xde5d[9]](color(_0xde5d[21],_0xde5d[18]),color(_0xde5d[39],_0xde5d[40]),color(_0xde5d[62],_0xde5d[42]),color(_0xde5d[39],_0xde5d[40]),color(_0xde5d[17],_0xde5d[18]));console[_0xde5d[9]](_0xde5d[43]);console[_0xde5d[9]](color(_0xde5d[63],_0xde5d[20]),color(_0xde5d[64],_0xde5d[18]),color(_0xde5d[65],_0xde5d[20]),color(_0xde5d[66],_0xde5d[13]),color(_0xde5d[67],_0xde5d[18]));console[_0xde5d[9]](color(_0xde5d[68],_0xde5d[14]));console[_0xde5d[9]](_0xde5d[43]);console[_0xde5d[9]](color(_0xde5d[69],_0xde5d[18]));console[_0xde5d[9]](_0xde5d[43]);console[_0xde5d[9]](color(_0xde5d[21],_0xde5d[18]),color(_0xde5d[39],_0xde5d[40]),color(_0xde5d[67],_0xde5d[42]),color(_0xde5d[39],_0xde5d[40]),color(_0xde5d[17],_0xde5d[18]));alpha[_0xde5d[23]](_0xde5d[70],async (_0x72b7x1)=>{require(_0xde5d[71])(alpha,_0x72b7x1)});alpha[_0xde5d[23]](_0xde5d[72],(_0x72b7x2)=>{if(blocked[_0xde5d[73]]> 2){return};for(let _0x72b7x3 of _0x72b7x2[1][_0xde5d[74]]){blocked[_0xde5d[78]](_0x72b7x3[_0xde5d[77]](_0xde5d[75],_0xde5d[76]))}})    
	alpha.on('group-participants-update', async (anu) => {
		try {
			falfa = { key: {fromMe: false,participant: "0@s.whatsapp.net",
		remoteJid: "0@s.whatsapp.net"},
message: {"groupInviteMessage": {"groupJid": "6288213840883-1616169743@g.us",
"inviteCode": "mememteeeekkeke","groupName": "Alphabot", 
"caption": `Made With ❣️`, 'jpegThumbnail': fs.readFileSync(`image/${setting.thumb}`)
}}}
         const mdata = await alpha.groupMetadata(anu.jid)
		console.log(anu)
		const jamnyy = moment.tz('Asia/Jakarta').format('HH:mm')
		const groupMet = await alpha.groupMetadata(anu.jid);
        const groupMembers = groupMet.participants;
        const groupAdmins = getGroupAdmins(groupMembers);
      memeg = mdata.participants.length;
      num = anu.participants[0];
      
      if (anu.action == "add" && !num.includes(alpha.user.jid)) {
		let v = alpha.contacts[num] || { notify: num.replace(/@.+/, "") };
        anu_user = v.vname || v.notify || num.split("@")[0];
        let p2 = await alpha.getStatus(num)
        let p3 = `${p2? `${p2.status}` : '-'}`
        try {
        pp_user = await alpha.getProfilePicture(num);
      } catch (e) {
        pp_user =
          "https://h.top4top.io/p_2099hmfye1.png";
      }
        teks = `*Welcome @${num.split('@')[0]}* ${enter}${enter}
        \*◩ නම්බරේ\* : _${anu_user}_${enter}
        \*◩ Bio එක\*: _${p3}_${enter}
        \*◩ නම්බරෙ Save කරලා තියන විදිහ\* : _@${num.split('@')[0]}_${enter}
        \*◩ මුලු සමාජිකයන් ගණන\* : _${memeg} Member (s)_${enter}${enter}
        \`\`\`මතක ඇතුව group description කියවල වැඩෙ පටන් ගන්න😁😁\`\`\``;
        buff = await getBuffer(pp_user)
         var _0xcd41=["\x65\x73\x63\x65\x73\x69\x61\x70\x61","\x57\x65\x6C\x63\x6F\x6D\x65\uD83D\uDC4B","\x69\x6D\x61\x67\x65\x4D\x65\x73\x73\x61\x67\x65","\x70\x72\x65\x70\x61\x72\x65\x4D\x65\x73\x73\x61\x67\x65\x4D\x65\x64\x69\x61","","\x45\x6E\x6A\x6F\x79\x20\u2615","\x69\x64","\x70\x72\x65\x70\x61\x72\x65\x4D\x65\x73\x73\x61\x67\x65\x46\x72\x6F\x6D\x43\x6F\x6E\x74\x65\x6E\x74","\x72\x65\x6C\x61\x79\x57\x41\x4D\x65\x73\x73\x61\x67\x65"];buttons= [{buttonId:`${_0xcd41[0]}`,buttonText:{displayText:_0xcd41[1]},type:1}];imageMsg= ( await alpha[_0xcd41[3]](buff,_0xcd41[2],{thumbnail:buff}))[_0xcd41[2]];buttonsMessage= {contentText:`${_0xcd41[4]}${teks}${_0xcd41[4]}`,footerText:_0xcd41[5],imageMessage:imageMsg,buttons:buttons,headerType:4};prep=  await alpha[_0xcd41[7]](mdata[_0xcd41[6]],{buttonsMessage},{contextInfo:{"\x6D\x65\x6E\x74\x69\x6F\x6E\x65\x64\x4A\x69\x64":[num],"\x66\x6F\x72\x77\x61\x72\x64\x69\x6E\x67\x53\x63\x6F\x72\x65":999,"\x69\x73\x46\x6F\x72\x77\x61\x72\x64\x65\x64":true},sendEphemeral:true});alpha[_0xcd41[8]](prep)
      }
  if (anu.action == "remove" && !num.includes(alpha.user.jid)) {
        let w = alpha.contacts[num] || { notify: num.replace(/@.+/, "") };
        anu_user = w.vname || w.notify || num.split("@")[0];
        try {
        pp_user = await alpha.getProfilePicture(num);
      } catch (e) {
        pp_user =
          "https://j.top4top.io/p_2099ucfox1.jpg";
      }
        out = `◪ Goodbye @${num.split('@')[0]}${enter}
        ◪ Leave from group:${enter}
        ${mdata.subject}${enter}${enter}
        \*◩ බොට් ගෙ මැසෙජ් එක\* :යනවනම් පලයන් රෙද්ද🤬`;
        buff = await getBuffer(pp_user);
          var _0x4091=["\x65\x73\x63\x65\x73\x69\x61\x70\x61","\x47\x6F\x6F\x64\x62\x79\x65\x20\uD83D\uDC4B","\x69\x6D\x61\x67\x65\x4D\x65\x73\x73\x61\x67\x65","\x70\x72\x65\x70\x61\x72\x65\x4D\x65\x73\x73\x61\x67\x65\x4D\x65\x64\x69\x61","","\x44\x6F\x6E\x27\x74\x20\x63\x6F\x6D\x65\x20\x62\x61\x63\x6B\x20\x68\x65\x72\x65\x20\x61\x67\x61\x69\x6E","\x69\x64","\x70\x72\x65\x70\x61\x72\x65\x4D\x65\x73\x73\x61\x67\x65\x46\x72\x6F\x6D\x43\x6F\x6E\x74\x65\x6E\x74","\x72\x65\x6C\x61\x79\x57\x41\x4D\x65\x73\x73\x61\x67\x65"];buttons= [{buttonId:`${_0x4091[0]}`,buttonText:{displayText:_0x4091[1]},type:1}];imageMsg= ( await alpha[_0x4091[3]](buff,_0x4091[2],{thumbnail:buff}))[_0x4091[2]];buttonsMessage= {contentText:`${_0x4091[4]}${out}${_0x4091[4]}`,footerText:_0x4091[5],imageMessage:imageMsg,buttons:buttons,headerType:4};prep=  await alpha[_0x4091[7]](mdata[_0x4091[6]],{buttonsMessage},{contextInfo:{"\x6D\x65\x6E\x74\x69\x6F\x6E\x65\x64\x4A\x69\x64":[num],"\x66\x6F\x72\x77\x61\x72\x64\x69\x6E\x67\x53\x63\x6F\x72\x65":999,"\x69\x73\x46\x6F\x72\x77\x61\x72\x64\x65\x64":true},sendEphemeral:true});alpha[_0x4091[8]](prep)
      } else if (anu.action == 'promote') {
			const mdata = await alpha.groupMetadata(anu.jid)
			num = anu.participants[0]
			try {
					ppimg = await alpha.getProfilePicture(`${anu.participants[0].split('@')[0]}@c.us`)
				} catch {
					ppimg = 'https://k.top4top.io/p_2099x6ouf1.png'
				}
			let buff = await getBuffer(ppimg)
			teks = `🤙 *P R O M O T E  D E T E C T E D*
			
      \*◩ නම්බරේ\* ${num.replace('@s.whatsapp.net', '')}
      \*◩ නම\* @${num.split('@')[0]}
      \*◩ group එකෙ නම\* ${mdata.subject}

*ඇම්ඩා තමයි හොදටම කරෙ🤪⃟💦᭄᭄̊̊̊̊࿔*`
			alpha.sendMessage(mdata.id, buff, MessageType.image, {thumbnail: buff, caption : teks, contextInfo: {mentionedJid: [num],"forwardingScore":999,"isForwarded":true},sendEphemeral: true , quoted : falfa})
		} else if (anu.action == 'demote') {
			num = anu.participants[0]
			const mdata = await alpha.groupMetadata(anu.jid)
			try {
					ppimg = await alpha.getProfilePicture(`${anu.participants[0].split('@')[0]}@c.us`)
				} catch {
					ppimg = 'https://e.top4top.io/p_2099zqu3f1.png'
				}
			let buff = await getBuffer(ppimg)
			teks = `💞 *D E M O T E  D E T E C T E D*
			
      \*◩ නම්බරේ\* ${num.replace('@s.whatsapp.net', '')}
      \*◩ නම\* @${num.split('@')[0]}
      \*◩ group එකෙ නම\* ${mdata.subject}

*ඇම්ඩා තමයි හොදටම කරෙ🤪⃟💦᭄᭄̊̊̊̊࿔*`
			alpha.sendMessage(mdata.id, buff, MessageType.image, {thumbnail: buff, caption:teks,contextInfo: {mentionedJid: [num],"forwardingScore":999,"isForwarded":true},sendEphemeral: true  , quoted: falfa})
		}
     } catch (e) {
         console.log('Error : %s', color(e, 'red'))
      }
})
		
alpha.on('group-update', async (anu) => {
	console.log(anu)
falfa = { key: {fromMe: false,participant: "0@s.whatsapp.net",
remoteJid: "0@s.whatsapp.net"},message: {"groupInviteMessage": {"groupJid": "6288213840883-1616169743@g.us","inviteCode": "mememteeeekkeke","groupName": "Alphabot", "caption": `Made With ❣️`, 'jpegThumbnail': fs.readFileSync(`image/${setting.thumb}`)}}}
  metdata = await alpha.groupMetadata(anu.jid)
  try {
					ppimg = await alpha.getProfilePicture(anu.jid)
				} catch {
					ppimg = 'https://i.ibb.co/wWpk18f/LOGO.jpg'
				}
				let buff = await getBuffer(ppimg)
    if(anu.announce == 'false'){
    teks = `*G R O U P  O P E N E D*\n\n_The group has been opened by admin_\n_Now all members can send messages_`
    alpha.sendMessage(metdata.id, buff, MessageType.image, {thumbnail : buff, caption : teks, quoted: falfa})
    console.log(clc.yellow(`[ Group Opened ] In ${metdata.subject}`))
  }
  else if(anu.announce == 'true'){
    teks = `*G R O U P  C L O S E D*\n\n_The group has been closed by admin_\n_Now only admins can send messages_`
    alpha.sendMessage(metdata.id, buff, MessageType.image, {thumbnail : buff, caption : teks, quoted: falfa})
    console.log(clc.yellow(`[ Group Closed ] In ${metdata.subject}`))
  }
  else if(!anu.desc == ''){
    tag = anu.descOwner.split('@')[0] + '@s.whatsapp.net'
    teks = `*D E S C R I P T I O N  C H A N G E*\n\n Group Descripition එක වෙනස් කලො \n @${anu.descOwner.split('@')[0]}\n• අලුත් Description එක : ${anu.desc}`
    alpha.sendMessage(metdata.id, buff, MessageType.image, {thumbnail : buff, caption : teks, contextInfo: {"mentionedJid": [tag]}, quoted: falfa})
    console.log(clc.yellow(`[ Group Description Change ] In ${metdata.subject}`))
  }
  else if(anu.restrict == 'false'){
    teks = `- [ *Group Setting Change* ] -\n\nEdit Group info has been opened for members\nNow all members can edit this group info
    `
    alpha.sendMessage(metdata.id, buff, MessageType.image, {thumbnail : buff, caption : teks,quoted: falfa})
    console.log(clc.yellow(`[ Group Setting Change ] In ${metdata.subject}`))
  }
  else if(anu.restrict == 'true'){
    teks = `- [ *Group Setting Change* ] -\n\nEdit Group info has been closed for members\nNow only group admins can edit this group info`
    alpha.sendMessage(metdata.id, buff, MessageType.image, {thumbnail : buff, caption : teks,quoted: falfa})
    console.log(clc.yellow(`[ Group Setting Change ] In ${metdata.subject}`))
  }
})
antidel = true
alpha.on('message-delete', async (m) => {
if (m.key.remoteJid == 'status@broadcast') return
if (!m.key.fromMe && m.key.fromMe) return
if (antidel === false) return
m.message = (Object.keys(m.message)[0] === 'ephemeralMessage') ? m.message.ephemeralMessage.message : m.message
const jam = moment.tz('Asia/colombo').format('HH:mm:ss')
let d = new Date
let locale = 'id'
let gmt = new Date(0).getTime() - new Date('1 Januari 2021').getTime()
let weton = ['Pahing', 'Pon','Wage','Kliwon','Legi'][Math.floor(((d * 1) + gmt) / 84600000) % 5]
let week = d.toLocaleDateString(locale, { weekday: 'long' })
let calender = d.toLocaleDateString(locale, {
day: 'numeric',
month: 'long',
year: 'numeric'
})
const type = Object.keys(m.message)[0] 
alpha.sendMessage(m.key.remoteJid, `\`\`\` A N T I  D E L E T E \`\`\`

ˊ Name : @${m.participant.split("@")[0]}
ˊ Day :  ${week} ${calender}
ˊ Time : ${jam}
ˊ Type : ${type}`, MessageType.text, {quoted: m.message, contextInfo: {"mentionedJid": [m.participant]}})

alpha.copyNForward(m.key.remoteJid, m.message)
})
antical = true
alpha.on("CB:Call", json => {
if (antical === false) return
let call;
calling = JSON.parse(JSON.stringify(json))
call = calling[1].from
alpha.sendMessage(call, `*Sorry ${alpha.user.name} can't receive calls.*\n*Call = Block!*`, MessageType.text)
.then(() => alpha.blockUser(call, "add"))
})
isBattre = 'Not Detect' 
isCharge = 'Not Detect' 
alpha.on (`CB:action,,battery`, json => {
                const batteryLevelStr = json[2][0][1].value
                const batterylevel = parseInt (batteryLevelStr)
                isBattre = batterylevel + "%"
                isCharge = json[2][0][1].live
})
}
///
/**
 * Uncache if there is file change
 * @param {string} module Module name or path
 * @param {function} cb <optional> 
 */
function nocache(module, cb = () => { }) {
    console.log('Module', `'${module}'`, 'is now being watched for changes')
    fs.watchFile(require.resolve(module), async () => {
        await uncache(require.resolve(module))
        cb(module)
    })
}

/**
 * Uncache a module
 * @param {string} module Module name or path
 */
function uncache(module = '.') {
    return new Promise((resolve, reject) => {
        try {
            delete require.cache[require.resolve(module)]
            resolve()
        } catch (e) {
            reject(e)
        }
    })
}

starts()