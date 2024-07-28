const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || "mongodb+srv://sam:sam@cluster0.u1smxsv.mongodb.net/?retryWrites=true&w=majority"
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ" 


global.devs = "94717775628" // Developer Contact
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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_13_17_07_28_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjE2LFxuICAgICAgICAzMCxcbiAgICAgICAgMTkzLFxuICAgICAgICA4NCxcbiAgICAgICAgMixcbiAgICAgICAgNDksXG4gICAgICAgIDIzNCxcbiAgICAgICAgMCxcbiAgICAgICAgOTYsXG4gICAgICAgIDIzMSxcbiAgICAgICAgMTM0LFxuICAgICAgICAxODAsXG4gICAgICAgIDE1OCxcbiAgICAgICAgMTM2LFxuICAgICAgICAxNixcbiAgICAgICAgMjQxLFxuICAgICAgICAxOTksXG4gICAgICAgIDE0NyxcbiAgICAgICAgMTk4LFxuICAgICAgICA1LFxuICAgICAgICAxMixcbiAgICAgICAgMjE1LFxuICAgICAgICAxNDEsXG4gICAgICAgIDI1MixcbiAgICAgICAgMTE0LFxuICAgICAgICAyNDgsXG4gICAgICAgIDEwNSxcbiAgICAgICAgOTcsXG4gICAgICAgIDEzMyxcbiAgICAgICAgNixcbiAgICAgICAgMTMzLFxuICAgICAgICAxMTRcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTc3LFxuICAgICAgICA1OSxcbiAgICAgICAgNzEsXG4gICAgICAgIDIxMyxcbiAgICAgICAgMTc5LFxuICAgICAgICAyMzcsXG4gICAgICAgIDc3LFxuICAgICAgICAyMCxcbiAgICAgICAgMjUzLFxuICAgICAgICA2NCxcbiAgICAgICAgMTUzLFxuICAgICAgICAyMDksXG4gICAgICAgIDczLFxuICAgICAgICAxODAsXG4gICAgICAgIDk3LFxuICAgICAgICA1NixcbiAgICAgICAgMjM4LFxuICAgICAgICAxMzIsXG4gICAgICAgIDM0LFxuICAgICAgICAxNzUsXG4gICAgICAgIDE1MyxcbiAgICAgICAgMTQsXG4gICAgICAgIDQwLFxuICAgICAgICA0NCxcbiAgICAgICAgOTEsXG4gICAgICAgIDIyNSxcbiAgICAgICAgMTQ2LFxuICAgICAgICAxMzQsXG4gICAgICAgIDYyLFxuICAgICAgICAxNzYsXG4gICAgICAgIDg5LFxuICAgICAgICAxMFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMzIsXG4gICAgICAgIDIzMCxcbiAgICAgICAgMjIzLFxuICAgICAgICAxOTYsXG4gICAgICAgIDExLFxuICAgICAgICAxNzcsXG4gICAgICAgIDUyLFxuICAgICAgICAxNjQsXG4gICAgICAgIDE0MSxcbiAgICAgICAgMjI3LFxuICAgICAgICAzNyxcbiAgICAgICAgMjIyLFxuICAgICAgICAyMzAsXG4gICAgICAgIDk2LFxuICAgICAgICAxNTEsXG4gICAgICAgIDEyOCxcbiAgICAgICAgNDEsXG4gICAgICAgIDE2MixcbiAgICAgICAgNSxcbiAgICAgICAgMTk5LFxuICAgICAgICA3LFxuICAgICAgICA2NCxcbiAgICAgICAgMTQwLFxuICAgICAgICAyMDMsXG4gICAgICAgIDE5NSxcbiAgICAgICAgNzMsXG4gICAgICAgIDUzLFxuICAgICAgICAxODYsXG4gICAgICAgIDE2MSxcbiAgICAgICAgMjUxLFxuICAgICAgICA1OSxcbiAgICAgICAgOTNcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNzUsXG4gICAgICAgIDM0LFxuICAgICAgICAyNDEsXG4gICAgICAgIDE4NyxcbiAgICAgICAgOTIsXG4gICAgICAgIDI0NixcbiAgICAgICAgMTExLFxuICAgICAgICAzNCxcbiAgICAgICAgMjIsXG4gICAgICAgIDE4LFxuICAgICAgICAxNzksXG4gICAgICAgIDE2LFxuICAgICAgICA0MCxcbiAgICAgICAgOTgsXG4gICAgICAgIDIyNixcbiAgICAgICAgMTUxLFxuICAgICAgICAyMTYsXG4gICAgICAgIDEyNyxcbiAgICAgICAgNDEsXG4gICAgICAgIDE0MyxcbiAgICAgICAgMTgyLFxuICAgICAgICAxNTksXG4gICAgICAgIDIyOCxcbiAgICAgICAgMTcwLFxuICAgICAgICAzMyxcbiAgICAgICAgMTExLFxuICAgICAgICAyMTgsXG4gICAgICAgIDQzLFxuICAgICAgICA3NixcbiAgICAgICAgMTksXG4gICAgICAgIDkzLFxuICAgICAgICA5OVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNTYsXG4gICAgICAgIDMwLFxuICAgICAgICA1NyxcbiAgICAgICAgNzUsXG4gICAgICAgIDE1NixcbiAgICAgICAgNzIsXG4gICAgICAgIDE4NCxcbiAgICAgICAgMzQsXG4gICAgICAgIDE0MixcbiAgICAgICAgMjA3LFxuICAgICAgICA1OSxcbiAgICAgICAgMTAyLFxuICAgICAgICAyMDMsXG4gICAgICAgIDM3LFxuICAgICAgICA5OCxcbiAgICAgICAgMjQyLFxuICAgICAgICAyMDcsXG4gICAgICAgIDY5LFxuICAgICAgICA5MSxcbiAgICAgICAgNjMsXG4gICAgICAgIDExMCxcbiAgICAgICAgMTM4LFxuICAgICAgICAyMzUsXG4gICAgICAgIDEzMCxcbiAgICAgICAgMjA1LFxuICAgICAgICAyNDMsXG4gICAgICAgIDg1LFxuICAgICAgICAyMTUsXG4gICAgICAgIDE3MCxcbiAgICAgICAgMjA5LFxuICAgICAgICAyMDgsXG4gICAgICAgIDc1XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE4NCxcbiAgICAgICAgMjQ0LFxuICAgICAgICA2NSxcbiAgICAgICAgMTM0LFxuICAgICAgICA0NixcbiAgICAgICAgOTAsXG4gICAgICAgIDIyMixcbiAgICAgICAgMTU1LFxuICAgICAgICA2LFxuICAgICAgICAxODAsXG4gICAgICAgIDE4NSxcbiAgICAgICAgMTI3LFxuICAgICAgICAxMTksXG4gICAgICAgIDIyMyxcbiAgICAgICAgMjQ5LFxuICAgICAgICA1MyxcbiAgICAgICAgNjQsXG4gICAgICAgIDgyLFxuICAgICAgICA4NixcbiAgICAgICAgMTI4LFxuICAgICAgICAxNTEsXG4gICAgICAgIDIwNyxcbiAgICAgICAgMTk2LFxuICAgICAgICAyMzQsXG4gICAgICAgIDE1NixcbiAgICAgICAgMTg2LFxuICAgICAgICA2NyxcbiAgICAgICAgMzUsXG4gICAgICAgIDExNixcbiAgICAgICAgMTk0LFxuICAgICAgICAyNDQsXG4gICAgICAgIDI3XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDEyOCxcbiAgICAgICAgICA2NyxcbiAgICAgICAgICAzMyxcbiAgICAgICAgICAxODcsXG4gICAgICAgICAgMjMzLFxuICAgICAgICAgIDIzMixcbiAgICAgICAgICAyMjQsXG4gICAgICAgICAgNDcsXG4gICAgICAgICAgNTUsXG4gICAgICAgICAgMTMxLFxuICAgICAgICAgIDE1MCxcbiAgICAgICAgICAxNzksXG4gICAgICAgICAgMTcxLFxuICAgICAgICAgIDYsXG4gICAgICAgICAgMTg2LFxuICAgICAgICAgIDIwNyxcbiAgICAgICAgICAyMCxcbiAgICAgICAgICAyMzAsXG4gICAgICAgICAgMjEsXG4gICAgICAgICAgMTAyLFxuICAgICAgICAgIDUwLFxuICAgICAgICAgIDExNixcbiAgICAgICAgICAxNDYsXG4gICAgICAgICAgMTY1LFxuICAgICAgICAgIDEwMCxcbiAgICAgICAgICAyNDIsXG4gICAgICAgICAgOTMsXG4gICAgICAgICAgNTQsXG4gICAgICAgICAgNDEsXG4gICAgICAgICAgMTgwLFxuICAgICAgICAgIDI0NSxcbiAgICAgICAgICA5MlxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA2MCxcbiAgICAgICAgICAyNDgsXG4gICAgICAgICAgMTAzLFxuICAgICAgICAgIDI0MixcbiAgICAgICAgICAxOTAsXG4gICAgICAgICAgMTE5LFxuICAgICAgICAgIDEyNCxcbiAgICAgICAgICA0MixcbiAgICAgICAgICAzMCxcbiAgICAgICAgICAxMzQsXG4gICAgICAgICAgMTU4LFxuICAgICAgICAgIDE0OSxcbiAgICAgICAgICAwLFxuICAgICAgICAgIDE0LFxuICAgICAgICAgIDE1MixcbiAgICAgICAgICA0NyxcbiAgICAgICAgICAxNDcsXG4gICAgICAgICAgNjMsXG4gICAgICAgICAgODksXG4gICAgICAgICAgMTU0LFxuICAgICAgICAgIDI0NyxcbiAgICAgICAgICAyMixcbiAgICAgICAgICA3MyxcbiAgICAgICAgICAyMjYsXG4gICAgICAgICAgMjA3LFxuICAgICAgICAgIDIzNixcbiAgICAgICAgICAzOSxcbiAgICAgICAgICA5MSxcbiAgICAgICAgICAxNTAsXG4gICAgICAgICAgMjEwLFxuICAgICAgICAgIDE0NSxcbiAgICAgICAgICAzMlxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE2MSxcbiAgICAgICAgNTQsXG4gICAgICAgIDk2LFxuICAgICAgICAyNDEsXG4gICAgICAgIDE2OCxcbiAgICAgICAgMTI2LFxuICAgICAgICAxNzcsXG4gICAgICAgIDEwOCxcbiAgICAgICAgMjgsXG4gICAgICAgIDEwMixcbiAgICAgICAgMTIzLFxuICAgICAgICAxNzIsXG4gICAgICAgIDg0LFxuICAgICAgICAxOTUsXG4gICAgICAgIDMyLFxuICAgICAgICAxNDQsXG4gICAgICAgIDE2MCxcbiAgICAgICAgMTU1LFxuICAgICAgICAxMzgsXG4gICAgICAgIDc1LFxuICAgICAgICA2MCxcbiAgICAgICAgMjM5LFxuICAgICAgICAxNzcsXG4gICAgICAgIDEyMCxcbiAgICAgICAgMjQ2LFxuICAgICAgICA1NyxcbiAgICAgICAgMTIzLFxuICAgICAgICAyMTgsXG4gICAgICAgIDIyOCxcbiAgICAgICAgMTMwLFxuICAgICAgICA1MCxcbiAgICAgICAgMTA5LFxuICAgICAgICAxMTAsXG4gICAgICAgIDI1NSxcbiAgICAgICAgNjQsXG4gICAgICAgIDU1LFxuICAgICAgICAxNjQsXG4gICAgICAgIDMyLFxuICAgICAgICAyMTAsXG4gICAgICAgIDE5NixcbiAgICAgICAgMTQ3LFxuICAgICAgICAyMzQsXG4gICAgICAgIDE2MCxcbiAgICAgICAgMTMsXG4gICAgICAgIDEwMSxcbiAgICAgICAgODgsXG4gICAgICAgIDg5LFxuICAgICAgICAxMDksXG4gICAgICAgIDEzOSxcbiAgICAgICAgMjA0LFxuICAgICAgICAyNDIsXG4gICAgICAgIDIyLFxuICAgICAgICAxMjYsXG4gICAgICAgIDEwOSxcbiAgICAgICAgMjE3LFxuICAgICAgICAxODAsXG4gICAgICAgIDU5LFxuICAgICAgICA4OSxcbiAgICAgICAgMTc1LFxuICAgICAgICAyMCxcbiAgICAgICAgMTA0LFxuICAgICAgICAyMCxcbiAgICAgICAgNjYsXG4gICAgICAgIDE0XG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiA3NyxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJBMFBkS3lVMUVtS1RRMUQrSlo3MDh2Z1ZnQXQ4SUpoVEh5MGtLMmJhMllzPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDAsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJSLTlHMHpwMFJxbW95TDN3bDdzaExnXCIsXG4gIFwicGhvbmVJZFwiOiBcImIzMjA4OWJhLTlkOTAtNDZjOC05YTU4LWM1NzM2Y2UzZTg0Y1wiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxNjksXG4gICAgICAyNDAsXG4gICAgICA3OCxcbiAgICAgIDI2LFxuICAgICAgODgsXG4gICAgICAyNixcbiAgICAgIDE1LFxuICAgICAgMTI5LFxuICAgICAgMzcsXG4gICAgICAxNzUsXG4gICAgICA1LFxuICAgICAgMTE4LFxuICAgICAgNTIsXG4gICAgICAxOTEsXG4gICAgICA1OSxcbiAgICAgIDE4MSxcbiAgICAgIDk3LFxuICAgICAgMjE1LFxuICAgICAgMTIsXG4gICAgICA2NFxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxLFxuICAgICAgMTY0LFxuICAgICAgMTM3LFxuICAgICAgMTA3LFxuICAgICAgMTg0LFxuICAgICAgMTg1LFxuICAgICAgMTk3LFxuICAgICAgNDcsXG4gICAgICA4LFxuICAgICAgMTE5LFxuICAgICAgMTI2LFxuICAgICAgODUsXG4gICAgICA3MixcbiAgICAgIDEzMSxcbiAgICAgIDIxMyxcbiAgICAgIDIyNixcbiAgICAgIDY4LFxuICAgICAgMjM5LFxuICAgICAgOTgsXG4gICAgICA1NlxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCI3RjZHOFFFU1wiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiOTQ3ODk3ODg1MDc6MTNAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcImxpZFwiOiBcIjEwNzAxODE2OTkzODAwNToxM0BsaWRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNMMy92Y01FRU9XSm1iVUdHQUVnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcInVLV0lyTUx3R2RuNlZTQ1lZT0ZNMDlRN1h5VWJORVJUTHYzckZOUkFzeE09XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiUC9HNzBHaHFHejZDck0zM2NjU3dJSkpLMUt2Wi9VQTR1VFRSMEVNNXcweG1XUXBIdFRkY3lZeXlXMElKeStBYUlseGw1L2N2cWwwUW52a1FReEFJQ0E9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiNER5Z3ZnZVRZWXNYV3Rwc1UyU2luZjBzbVFFOXcvK0pnMDhDNDBPbEQ5VWRpSVVldkd0bk1uM3lIR0lqK1JVSGg3dFI0T1JDSk1Taitya0k5UE1mQlE9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiOTQ3ODk3ODg1MDc6MTNAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAxODQsXG4gICAgICAgICAgMTY1LFxuICAgICAgICAgIDEzNixcbiAgICAgICAgICAxNzIsXG4gICAgICAgICAgMTk0LFxuICAgICAgICAgIDI0MCxcbiAgICAgICAgICAyNSxcbiAgICAgICAgICAyMTcsXG4gICAgICAgICAgMjUwLFxuICAgICAgICAgIDg1LFxuICAgICAgICAgIDMyLFxuICAgICAgICAgIDE1MixcbiAgICAgICAgICA5NixcbiAgICAgICAgICAyMjUsXG4gICAgICAgICAgNzYsXG4gICAgICAgICAgMjExLFxuICAgICAgICAgIDIxMixcbiAgICAgICAgICA1OSxcbiAgICAgICAgICA5NSxcbiAgICAgICAgICAzNyxcbiAgICAgICAgICAyNyxcbiAgICAgICAgICA1MixcbiAgICAgICAgICA2OCxcbiAgICAgICAgICA4MyxcbiAgICAgICAgICA0NixcbiAgICAgICAgICAyNTMsXG4gICAgICAgICAgMjM1LFxuICAgICAgICAgIDIwLFxuICAgICAgICAgIDIxMixcbiAgICAgICAgICA2NCxcbiAgICAgICAgICAxNzksXG4gICAgICAgICAgMTlcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcImFuZHJvaWRcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTcyMjE3MjY0OCxcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQUoyRlwiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBSjJGLmpzb24iOiAie1wia2V5RGF0YVwiOlwieFVCTit4enoxVHNNc0VvL1k5ZHZSV2oxVkJRWWx2eExjRmFwMXdEK25TRT1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjoxMjE1MjY2NzQ3LFwiY3VycmVudEluZGV4XCI6MixcImRldmljZUluZGV4ZXNcIjpbMCwxLDJdfSxcInRpbWVzdGFtcFwiOlwiMFwifSIKfQ=="  // PUT your SESSION_ID 


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


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "public",
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
