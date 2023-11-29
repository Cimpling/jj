const chalk = require('chalk')
const fs = require('fs')

global.menunya = (pushname, prefix, hituet) =>{
	return`╭─❒ 「  *STORE MENU*  」
│
│○ !list  
│○ !addlist  
│○ !updatelist  
│○ !dellist  
│○ !jeda  
│○ !tambah  
│○ !kurang  
│○ !kali  
│○ !bagi  
│○ !setproses  
│○ !changeproses  
│○ !delsetproses  
│○ !setdone  
│○ !changedone  
│○ !delsetdone  
│○ !proses  
│○ !done  
│○ !setwelcome  
│○ !changewelcome  
│○ !delsetwelcome  
│○ !setleft  
│○ !changeleft  
│○ !delsetleft  
│
╰❒

╭─❒ 「 *GROUP MENU* 」 
│
│○ !antiwame  [on/off]
│○ !antiwame2  [on/off]
│○ !antilink  [on/off]
│○ !antilink2  [on/off]
│○ !welcome  [on/off]
│○ !goodbye  [on/off]
│○ !group open
│○ !group close
│○ !hidetag  
│○ !kick  
│○ !linkgc  
│○ !resetlinkgc  
│○ !delete  
│○ !setnamegc  
│○ !setdesc  
│○ !listsewa  
│○ !add  
│○ !promote  
│○ !demote  
│○ !antilinkall  
│○ !sendlinkgc  
│○ !tagall  
│○ !mute [on/off]
│○ !nsfw [on/off]
│○ !setppgroup
│
╰❒

📝 sewa??ketik .owner
`
}

/*

JANGAN HAPUS THANKS TO DEKS :V
KALO MAU NARUH NAMA LU TARUH AJA

*/

let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update ${__filename}`))
	delete require.cache[file]
	require(file)
})