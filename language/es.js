/*
   *
     If you find an error in writing a word / sentence please contact me
   *
*/
exports.wait = () => {
	return `\`\`\`[ ! ] පොඩ්ඩක් ඉන්න...\`\`\``
	}
exports.success = () => {
	return `\`\`\`[ ✓ ]\`\`\` ඉවරයි ...`
	}
exports.successBc = () => {
	return `\`\`\`[ ✓ ]\`\`\` Broadcast එක සාර්තකයි`
	}
exports.wrongFormat = () => {
	return `\`\`\`[ x ]\`\`\` Format එක වැරදි, අපහු චෙක් කරලා බලන්න`
	}
exports.erorStik = () => {
	return `\`\`\`[ x ]\`\`\` මෙක ස්ටිකරයක් නෙවෙයිනෙ4 බුන්ගා.`
	}
exports.tagStik = () => {
	return `\`\`\`[ x ]\`\`\` Reply/tag කරන්න ස්ටිකරෙකට`
	}
exports.erorLink = () => {
	return `\`\`\`[ x ]\`\`\` ලින්ක් එක වැරදි බුන්ගා`
	}
exports.onlygc = () => {
	return `\`\`\`[ x ]\`\`\` මෙ කමාන්ඩ් එක වැඩ කරන්නෙ Group වල විතරයි බුන්ගා`
	}
exports.onlyOwner = () => {
	return `\`\`\`[ x ]\`\`\` මෙක බොට් අයිතිකාරයගෙ කමාන්ඩ් එකක් බුන්ග`
	}
exports.benned = () => {
	return `\`\`\`[ x ]\`\`\` සොරි ඔයගෙ නම්බරෙ බ්ලොක් කරලා`
	}
exports.onlygcAdmin = () => {
	return `\`\`\`[ x ]\`\`\` මෙක ඇඩ්මින් විඩානයක්`
	}
exports.cariCecan = () => {
	return `\`\`\`[ ! ]\`\`\` සොයමින් පවති`
	}
exports.cariCogan = () => {
	return `\`\`\`[ ! ]\`\`\` සොයමින් පවති`
	}
exports.pesanBot = () => {
	return `\`\`\`[ x ]\`\`\` බොට් ගෙ මැසෙජ් එකට රිප්ලයි කරන්න`
	}
exports.replyFoto = () => {
	return `\`\`\`[ x ]\`\`\` පොටො එකකට රිප්ලයි කරන්න බුන්ගා`
	}
exports.tagUser = () => {
	return `\`\`\`[ x ]\`\`\` කව්රු හරි Tag කරන්න @user`
	}
exports.noReply = () => {
	return `\`\`\`[ x ]\`\`\` ඔබ පිළිතුරු දුන් පණිවිඩයේ පිළිතුරක් නොතිබුණි`
	}
exports.changeNmGc = () => {
	return `\`\`\`[ ✓ ]\`\`\` සාර්තකව Group නම වෙනස් කරන ලදි`
	}
exports.changeDeskGc = () => {
	return `\`\`\`[ ✓ ]\`\`\` සාර්තකව Group Description වෙනස් කරන ලදි`
	}
exports.spam = (prefix, command) => {
	return `\`\`\`[ x ]\`\`\` උදා- ${prefix + command} text|amount`
	}
exports.tahta = (prefix, command) => {
	return `\`\`\`[ x ]\`\`\` උදා- ${prefix + command} King|amda`
	}
exports.noteks = (prefix, command) => {
	return `\`\`\`[ x ]\`\`\` උදා- ${prefix + command} King Amda`
	}
exports.botNotAdm = () => {
	return `මාව ඇඩිමින් කරපල්ලා`
	}
exports.tryAgain = () => {
	return `\`\`\`[ x ]\`\`\`  අසාර්තකයි, නැවත උත්සහ කරන්න ^_^`
	}
exports.anlinOn = () => {
	return `\`\`\`[ ✓ ]\`\`\` Antilink සක්‍රියයි`
	}
exports.anlinOff = () => {
	return `\`\`\`[ ✓ ]\`\`\` Antilink අක්‍රියයි`
	}
exports.notregis = (prefix, sender) => {
	return `Hai @${sender.split("@")[0]} ඔබ දත්ත ගබඩාවේ ලියාපදිංචි වී නැත, කරුණාකර ටයිප් කරන්න ${prefix}verify`
	}
exports.udahregis = (pushname) => {
	return `හායි ${pushname} ඔබ දැනටමත් දත්ත ගබඩාවේ ලියාපදිංචි වී ඇත`
	}
exports.enNum = () => {
 return `\`\`\`[ x ]\`\`\` නම්බරෙ හරිටය දෙන්න`
 }
exports.adminGc = () => {
 return `ඔබ පරිපාලක නිසා බොට් ඔබව ඉවත් නොකරයි`
 }
 exports.izinDt = () => {
 return `Permission accepted`
 }
 exports.anjawaOn = (command) => {
	return `\`\`\`[ ✓ ]\`\`\` ${command} Activated`
	}
exports.anjawaOff = (command) => {
	return `\`\`\`[ ✓ ]\`\`\` ${command} Disabled`
	}
exports.anjawaUdhOn = (command) => {
	return `\`\`\`[ ✓ ]\`\`\` ${command} been active before`
	}
exports.anjawaUdhOon = (command) => {
	return `Select on to activate, off to disable`
	}
exports.onORoff = (command) => {
	return `Select on to activate, off to disable`
	}
exports.gcOpen = (command) => {
	return `\`\`\`[ ✓ ]\`\`\` ${command} Successfully group ය විවෘර්ත කරන ලදි `
	}
exports.gcClose = (command) => {
	return `\`\`\`[ ✓ ]\`\`\` ${command} Successfully  group ය වසන ලදි `
	}
exports.nsfwmo= () => {
	return `හුජ්ජ කොලොන්ට මොනටද මෙවා, contact the bot owner to activate it`
	}
exports.erorCode = () => {
 return `ඔබ ඇතුළත් කළ කේතය වැරදියි, කරුණාකර නැවත පරීක්‍ෂා කරන්න\n`
 }
 exports.callOwner = () => {
 return `මෙම විශේෂාංගය භාවිතා කිරීමට අයිතිකරු අමතන්න`
 }
 //vote
exports.noSesiVote = () => {
 	return`No voting session`
 }
exports.suksesDelVot = () => {
	return`Successfully Deleting Voting Session In This Group`
	}
exports.adaVoting = () => {
	return`Voting Session In Progress In This Group`
	}
exports.caraVoting = (prefix, command) => {
    return`*Voting*\n\n${prefix + command} @tag target | reason  | 1 (1 = 1 Minute)`
    }
exports.caraVot = () => {
 	return`Enter number in line 3\nContoh: 1-9999\n1 = 1 Minute`
    }
//ttt
exports.noSesiTtt = () =>{
	return`There is no tictactoe session in this group`
	}
exports.suksesDelTtt = () =>{
	return`Successfully deleted tictactoe session in this group`
	}
//on & off
exports.ownerOff = () =>{
	return`මගේ අයිතිකරු  has been off`
	}
exports.ownerOn = () =>{
	return`මගේ අයිතිකරු  is back on`
	}