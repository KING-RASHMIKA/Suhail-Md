const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || "mongodb+srv://Test:test@cluster0.ib19qwv.mongodb.net/?retryWrites=true&w=majority"
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ" 


global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "94717775628";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "true"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_13_46_07_01_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgODAsXG4gICAgICAgIDIyNixcbiAgICAgICAgMjIzLFxuICAgICAgICA3NyxcbiAgICAgICAgMzcsXG4gICAgICAgIDE4MixcbiAgICAgICAgNzUsXG4gICAgICAgIDIwLFxuICAgICAgICA2MCxcbiAgICAgICAgMTI2LFxuICAgICAgICA4NSxcbiAgICAgICAgMTA5LFxuICAgICAgICA4NSxcbiAgICAgICAgMjcsXG4gICAgICAgIDE2OCxcbiAgICAgICAgNzEsXG4gICAgICAgIDEwMyxcbiAgICAgICAgMjMwLFxuICAgICAgICAxMzUsXG4gICAgICAgIDIzNCxcbiAgICAgICAgNjYsXG4gICAgICAgIDY0LFxuICAgICAgICAxOTAsXG4gICAgICAgIDIxNCxcbiAgICAgICAgNzcsXG4gICAgICAgIDE5NCxcbiAgICAgICAgMTgsXG4gICAgICAgIDEzLFxuICAgICAgICAyMjcsXG4gICAgICAgIDY2LFxuICAgICAgICAxMzEsXG4gICAgICAgIDkwXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDgyLFxuICAgICAgICAxMTcsXG4gICAgICAgIDI0NixcbiAgICAgICAgMTk0LFxuICAgICAgICAxODEsXG4gICAgICAgIDIxOCxcbiAgICAgICAgMTk2LFxuICAgICAgICAxNDMsXG4gICAgICAgIDE3MCxcbiAgICAgICAgMjAxLFxuICAgICAgICA2NixcbiAgICAgICAgMjM1LFxuICAgICAgICAxODYsXG4gICAgICAgIDIxNSxcbiAgICAgICAgMzMsXG4gICAgICAgIDI5LFxuICAgICAgICAyMDcsXG4gICAgICAgIDE2LFxuICAgICAgICAxMTQsXG4gICAgICAgIDM2LFxuICAgICAgICAxNDUsXG4gICAgICAgIDg1LFxuICAgICAgICAxMDAsXG4gICAgICAgIDE1NyxcbiAgICAgICAgMjQ1LFxuICAgICAgICAzLFxuICAgICAgICA4LFxuICAgICAgICAxNDUsXG4gICAgICAgIDMzLFxuICAgICAgICA5MCxcbiAgICAgICAgNDYsXG4gICAgICAgIDQ3XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA3MixcbiAgICAgICAgNjksXG4gICAgICAgIDMxLFxuICAgICAgICA5MSxcbiAgICAgICAgMjMxLFxuICAgICAgICAxNjUsXG4gICAgICAgIDE1NixcbiAgICAgICAgMjMwLFxuICAgICAgICAxODUsXG4gICAgICAgIDI0LFxuICAgICAgICA4MCxcbiAgICAgICAgOTgsXG4gICAgICAgIDE0NCxcbiAgICAgICAgMjM5LFxuICAgICAgICAxMDYsXG4gICAgICAgIDIwLFxuICAgICAgICAxNDIsXG4gICAgICAgIDIyNixcbiAgICAgICAgODIsXG4gICAgICAgIDczLFxuICAgICAgICAyMTksXG4gICAgICAgIDMsXG4gICAgICAgIDIwNSxcbiAgICAgICAgMTAsXG4gICAgICAgIDE1NyxcbiAgICAgICAgMTcxLFxuICAgICAgICAwLFxuICAgICAgICAyNDEsXG4gICAgICAgIDI1NSxcbiAgICAgICAgMjQzLFxuICAgICAgICA3MCxcbiAgICAgICAgNzRcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTc4LFxuICAgICAgICA5NixcbiAgICAgICAgMTcxLFxuICAgICAgICA3MyxcbiAgICAgICAgMTg2LFxuICAgICAgICAyMDUsXG4gICAgICAgIDEyNSxcbiAgICAgICAgMTkyLFxuICAgICAgICAxMDksXG4gICAgICAgIDI1MixcbiAgICAgICAgNzUsXG4gICAgICAgIDE2NSxcbiAgICAgICAgNTQsXG4gICAgICAgIDE4NixcbiAgICAgICAgMjQwLFxuICAgICAgICA2MCxcbiAgICAgICAgMTYyLFxuICAgICAgICAyNDUsXG4gICAgICAgIDIwMyxcbiAgICAgICAgMTc1LFxuICAgICAgICA3LFxuICAgICAgICA5OCxcbiAgICAgICAgMTQyLFxuICAgICAgICA4NCxcbiAgICAgICAgMjEyLFxuICAgICAgICAxMzYsXG4gICAgICAgIDEzNixcbiAgICAgICAgMTEyLFxuICAgICAgICAzMyxcbiAgICAgICAgMjQ2LFxuICAgICAgICAyNTEsXG4gICAgICAgIDQ5XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA0MCxcbiAgICAgICAgMjUzLFxuICAgICAgICAxNjQsXG4gICAgICAgIDgwLFxuICAgICAgICAxMjgsXG4gICAgICAgIDEyNyxcbiAgICAgICAgMjA5LFxuICAgICAgICAxNzAsXG4gICAgICAgIDYyLFxuICAgICAgICAyMzYsXG4gICAgICAgIDI1NSxcbiAgICAgICAgMTQxLFxuICAgICAgICA5NixcbiAgICAgICAgMTM0LFxuICAgICAgICAyMTQsXG4gICAgICAgIDIzNixcbiAgICAgICAgMTQxLFxuICAgICAgICAyNDYsXG4gICAgICAgIDE2NixcbiAgICAgICAgNzUsXG4gICAgICAgIDI0MSxcbiAgICAgICAgOTgsXG4gICAgICAgIDI3LFxuICAgICAgICAyMDAsXG4gICAgICAgIDE5NCxcbiAgICAgICAgMTA0LFxuICAgICAgICAyNSxcbiAgICAgICAgNzEsXG4gICAgICAgIDE1NSxcbiAgICAgICAgMjMwLFxuICAgICAgICAxMSxcbiAgICAgICAgNzZcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNjMsXG4gICAgICAgIDIyNCxcbiAgICAgICAgMTczLFxuICAgICAgICAxMDEsXG4gICAgICAgIDcsXG4gICAgICAgIDE2MSxcbiAgICAgICAgMzksXG4gICAgICAgIDE3NixcbiAgICAgICAgNTQsXG4gICAgICAgIDUxLFxuICAgICAgICAyMzcsXG4gICAgICAgIDE2LFxuICAgICAgICAxMTQsXG4gICAgICAgIDI0NyxcbiAgICAgICAgMTQwLFxuICAgICAgICAyMzUsXG4gICAgICAgIDUxLFxuICAgICAgICAxNzAsXG4gICAgICAgIDMsXG4gICAgICAgIDEyOSxcbiAgICAgICAgMTI5LFxuICAgICAgICAxMzIsXG4gICAgICAgIDc4LFxuICAgICAgICA0NyxcbiAgICAgICAgMTY1LFxuICAgICAgICAyMzYsXG4gICAgICAgIDIwOSxcbiAgICAgICAgNzMsXG4gICAgICAgIDIxMSxcbiAgICAgICAgOTAsXG4gICAgICAgIDk1LFxuICAgICAgICA4OFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA0OCxcbiAgICAgICAgICAxNixcbiAgICAgICAgICA3OCxcbiAgICAgICAgICAyMTMsXG4gICAgICAgICAgMTQ4LFxuICAgICAgICAgIDE0MCxcbiAgICAgICAgICAxNjYsXG4gICAgICAgICAgMTA3LFxuICAgICAgICAgIDY5LFxuICAgICAgICAgIDI4LFxuICAgICAgICAgIDIwNSxcbiAgICAgICAgICAzMSxcbiAgICAgICAgICAxMjIsXG4gICAgICAgICAgMjQ1LFxuICAgICAgICAgIDIxNCxcbiAgICAgICAgICAyNDMsXG4gICAgICAgICAgMjQyLFxuICAgICAgICAgIDE3NyxcbiAgICAgICAgICAxNDYsXG4gICAgICAgICAgNzksXG4gICAgICAgICAgODcsXG4gICAgICAgICAgMjA4LFxuICAgICAgICAgIDI1MixcbiAgICAgICAgICAxMzEsXG4gICAgICAgICAgNjcsXG4gICAgICAgICAgMTA4LFxuICAgICAgICAgIDE1OSxcbiAgICAgICAgICAxMzEsXG4gICAgICAgICAgMTM3LFxuICAgICAgICAgIDIwNCxcbiAgICAgICAgICAxNTEsXG4gICAgICAgICAgNjhcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTMyLFxuICAgICAgICAgIDE4MyxcbiAgICAgICAgICA0NCxcbiAgICAgICAgICAyMjAsXG4gICAgICAgICAgMTAwLFxuICAgICAgICAgIDEwLFxuICAgICAgICAgIDksXG4gICAgICAgICAgMTY2LFxuICAgICAgICAgIDI1LFxuICAgICAgICAgIDI1LFxuICAgICAgICAgIDI1MSxcbiAgICAgICAgICA0NixcbiAgICAgICAgICAxNDUsXG4gICAgICAgICAgODgsXG4gICAgICAgICAgMjA3LFxuICAgICAgICAgIDIwOCxcbiAgICAgICAgICAxNSxcbiAgICAgICAgICA2NixcbiAgICAgICAgICAyNDcsXG4gICAgICAgICAgMTIzLFxuICAgICAgICAgIDE4LFxuICAgICAgICAgIDIyMixcbiAgICAgICAgICAyMTEsXG4gICAgICAgICAgMTc0LFxuICAgICAgICAgIDIxOCxcbiAgICAgICAgICA1NyxcbiAgICAgICAgICAyNixcbiAgICAgICAgICAxODEsXG4gICAgICAgICAgOTIsXG4gICAgICAgICAgMjAsXG4gICAgICAgICAgOTMsXG4gICAgICAgICAgOTFcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMDksXG4gICAgICAgIDExMyxcbiAgICAgICAgMjE5LFxuICAgICAgICA2MCxcbiAgICAgICAgMTM4LFxuICAgICAgICAxMDgsXG4gICAgICAgIDEwMSxcbiAgICAgICAgNDYsXG4gICAgICAgIDE0LFxuICAgICAgICAxNjcsXG4gICAgICAgIDEwOSxcbiAgICAgICAgMzIsXG4gICAgICAgIDYxLFxuICAgICAgICAxMjgsXG4gICAgICAgIDc4LFxuICAgICAgICA5MCxcbiAgICAgICAgNjIsXG4gICAgICAgIDE2NCxcbiAgICAgICAgMjI1LFxuICAgICAgICAyNDgsXG4gICAgICAgIDExNyxcbiAgICAgICAgMTMzLFxuICAgICAgICA2NSxcbiAgICAgICAgNjgsXG4gICAgICAgIDE5MixcbiAgICAgICAgMTcsXG4gICAgICAgIDI0NyxcbiAgICAgICAgMTE5LFxuICAgICAgICA4MyxcbiAgICAgICAgODgsXG4gICAgICAgIDE4MSxcbiAgICAgICAgMjE3LFxuICAgICAgICA1NSxcbiAgICAgICAgMTEsXG4gICAgICAgIDIyMSxcbiAgICAgICAgNTksXG4gICAgICAgIDE4NixcbiAgICAgICAgODcsXG4gICAgICAgIDE1LFxuICAgICAgICA2NyxcbiAgICAgICAgMjIxLFxuICAgICAgICAxODMsXG4gICAgICAgIDY4LFxuICAgICAgICAxMjksXG4gICAgICAgIDU0LFxuICAgICAgICAyNDAsXG4gICAgICAgIDEzMCxcbiAgICAgICAgMzUsXG4gICAgICAgIDEzNSxcbiAgICAgICAgMTMzLFxuICAgICAgICAxNDEsXG4gICAgICAgIDE3MixcbiAgICAgICAgNjAsXG4gICAgICAgIDI1MyxcbiAgICAgICAgMjEzLFxuICAgICAgICAyNDYsXG4gICAgICAgIDE1NCxcbiAgICAgICAgMTA5LFxuICAgICAgICAyMjcsXG4gICAgICAgIDE1MCxcbiAgICAgICAgNTQsXG4gICAgICAgIDk5LFxuICAgICAgICAxOCxcbiAgICAgICAgMTM2XG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAxODEsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiS1l4TDZxUUdxR0dlQ3NYblNDVU5MM1A3dlIyRmdiUC9rdHJVdUFzLzFVZz1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW1xuICAgIHtcbiAgICAgIFwia2V5XCI6IHtcbiAgICAgICAgXCJyZW1vdGVKaWRcIjogXCI5NDc1ODc3NTYyOEBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImZyb21NZVwiOiB0cnVlLFxuICAgICAgICBcImlkXCI6IFwiNUFDRDM2OUU0QkJGRTUyNTU5MUZFQjMwMjRDRTNCNDlcIlxuICAgICAgfSxcbiAgICAgIFwibWVzc2FnZVRpbWVzdGFtcFwiOiAxNzE5ODQxNTY0XG4gICAgfSxcbiAgICB7XG4gICAgICBcImtleVwiOiB7XG4gICAgICAgIFwicmVtb3RlSmlkXCI6IFwiOTQ3NTg3NzU2MjhAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJmcm9tTWVcIjogdHJ1ZSxcbiAgICAgICAgXCJpZFwiOiBcIjMyRTNEMjgwMUI2NTdGRjExOTY4OEU2Q0QxQTY0ODQ5XCJcbiAgICAgIH0sXG4gICAgICBcIm1lc3NhZ2VUaW1lc3RhbXBcIjogMTcxOTg0MTU2NFxuICAgIH1cbiAgXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDEsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJjcW40MzE4T1FqNkV6c3VGRUptX2JRXCIsXG4gIFwicGhvbmVJZFwiOiBcIjMwZGY3YmJlLWNkOTctNDFmNC1hZTI4LTE1NTc2NTY2ZDY4M1wiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAyNDksXG4gICAgICAyMzMsXG4gICAgICAyNTEsXG4gICAgICA0MyxcbiAgICAgIDIxMyxcbiAgICAgIDEwNCxcbiAgICAgIDI1MixcbiAgICAgIDI0MixcbiAgICAgIDY5LFxuICAgICAgODksXG4gICAgICAxOTIsXG4gICAgICAzMyxcbiAgICAgIDE0NyxcbiAgICAgIDIzNyxcbiAgICAgIDk2LFxuICAgICAgMjA5LFxuICAgICAgMTkzLFxuICAgICAgMTM1LFxuICAgICAgMSxcbiAgICAgIDM1XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDMsXG4gICAgICAxNDEsXG4gICAgICAxNzEsXG4gICAgICAxMzAsXG4gICAgICAyMTQsXG4gICAgICAxMTYsXG4gICAgICAyMCxcbiAgICAgIDk0LFxuICAgICAgNjYsXG4gICAgICAxMjYsXG4gICAgICAxMDYsXG4gICAgICA3NSxcbiAgICAgIDI0LFxuICAgICAgMTg5LFxuICAgICAgNDcsXG4gICAgICAyMDEsXG4gICAgICAxNDgsXG4gICAgICAxMjIsXG4gICAgICAxNzQsXG4gICAgICAxODdcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiN0RaVEU4UTlcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjk0NzU4Nzc1NjI4OjI0QHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJsaWRcIjogXCIxODA2NDI1MTYwODcwMzU6MjRAbGlkXCIsXG4gICAgXCJuYW1lXCI6IFwiVmFqaXJhIE1kXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDTDI2cU80R0VKVG1pclFHR0FJZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJmMTdTdUd1Rk9ld0luUjdsTDMwYzhsUjBKNWdLNHQ3YnZXMTNkU0JyaEJJPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcIkN1Tlc1NUgrcTZKVW9CVWcwZm5xc0xRbkJWMDhya3BIb01OWkcvS3pRd2p0L0IzNUZuSUpTT3YwbmhlTjFQRjVMTnFaT003Ykc0Y1FHWXU5UlhXbER3PT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcIk5jU04va2RRYU9OSjcyY05MczROY2RLcVlWc0MyS1FPVm1DSkY3R2txamk0SnZwTFA3M1g2UjlkWkFKZkh6SytvRDMzRG1YNHEwcC94TWpnUEQ3UWp3PT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjk0NzU4Nzc1NjI4OjI0QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMTI3LFxuICAgICAgICAgIDk0LFxuICAgICAgICAgIDIxMCxcbiAgICAgICAgICAxODQsXG4gICAgICAgICAgMTA3LFxuICAgICAgICAgIDEzMyxcbiAgICAgICAgICA1NyxcbiAgICAgICAgICAyMzYsXG4gICAgICAgICAgOCxcbiAgICAgICAgICAxNTcsXG4gICAgICAgICAgMzAsXG4gICAgICAgICAgMjI5LFxuICAgICAgICAgIDQ3LFxuICAgICAgICAgIDEyNSxcbiAgICAgICAgICAyOCxcbiAgICAgICAgICAyNDIsXG4gICAgICAgICAgODQsXG4gICAgICAgICAgMTE2LFxuICAgICAgICAgIDM5LFxuICAgICAgICAgIDE1MixcbiAgICAgICAgICAxMCxcbiAgICAgICAgICAyMjYsXG4gICAgICAgICAgMjIyLFxuICAgICAgICAgIDIxOSxcbiAgICAgICAgICAxODksXG4gICAgICAgICAgMTA5LFxuICAgICAgICAgIDExOSxcbiAgICAgICAgICAxMTcsXG4gICAgICAgICAgMzIsXG4gICAgICAgICAgMTA3LFxuICAgICAgICAgIDEzMixcbiAgICAgICAgICAxOFxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwiYW5kcm9pZFwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzE5ODQxNTYwLFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBRjZoXCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFGNmguanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJjRjJZTWM5NVdnSEdWNzdEMHFLazJJazlONUw0ODdnK0RNZEJLVkdUaHVJPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjE4NDE5NjIzMDEsXCJjdXJyZW50SW5kZXhcIjoxLFwiZGV2aWNlSW5kZXhlc1wiOlswLDFdfSxcInRpbWVzdGFtcFwiOlwiMTcxOTgyNzU2MDA1MlwifSIKfQ=="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "RASHMIKA",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
